# Pages artifact-size fix — externalize the inline logo flower

**Status:** BUILT + HELD (not pushed) 2026-11-10. Verify on the next CI build.

## Problem

GitHub Pages' upload step warns `Uploaded artifact size … exceeds the allowed size
of 1 GB. Deployment might fail.` The artifact sits at **1,376,461,380 bytes (~1.28
GiB)**, over the **1 GiB** limit, and `actions/deploy-pages` then intermittently
times out in the server-side `syncing_files` step (~1 in 6 deploys). OG cards were
already offloaded to R2 (−823 MB) and that was not enough.

## Measurement (ground truth, not estimate)

Downloaded the actual `github-pages` artifact from a green run and read the tar
listing with sizes (`tar -tzv`), bucketed by directory and file type:

- `dist` uncompressed = **4.16 GB** → 1.38 GB artifact = only **~3× compression**.
  A ~3× ratio on a mostly-text site is the tell: the bulk is *poorly-compressing*
  content, and the whole tar is one deflate stream with a **32 KB window**.
- By type: **`.html` = 2,995 MB** (25,613 files, ~120 KB/page) — the whale.
  `.txt` (llms-full) 301 MB · raw `.md` 291 MB · pagefind 188 MB · api JSON 57 MB ·
  sitemaps 49 MB · media/webp ~20 MB. `public/` (copied verbatim) is only ~75 MB.
- Decomposing one representative 123 KB article page: **inline SVG = 48.8 KB (~40%)**,
  of which **two copies of the shared `FLOWER_D` flower path = ~35.6 KB** — the header
  logo (`brand-mark`, gold) and the hero watermark (`hero-bloom`, currentColor). The
  path is ~17 KB and is **identical on every page**.

The flower is inlined once in the header on all ~25.6k pages, plus once in the hero on
all ~17.3k article pages. Because deflate's 32 KB window can't reach the previous
page's copy across a ~120 KB page gap, each inline copy costs almost its full size in
the compressed artifact.

### Empirical saving (measured, not guessed)

Stripping the two big SVGs from a real article page and recompressing 200 pages in one
deflate stream: **−18.4 KB/page compressed** for article pages (both flowers), ~−9
KB/page for header-only pages. Weighted over the real page mix (~17.3k article +
~8.3k other):

> **≈ 385 MB compressed saved → artifact ≈ 1.38 GB → ~0.99 GB. Under the 1 GiB
> limit, and every page ~29% smaller (a load-perf win too).**

Pagefind (188 MB uncompressed) and the AI text endpoints were considered but are
*not* the main lever and carry more complexity (CORS / URL rewrites) — kept as future
headroom, see below.

## The fix (this change)

Externalize the one shared flower into a single cached sprite and reference it with
`<use>` instead of inlining the path:

- **`scripts/build-bloom-svg.mjs`** (new) — emits `public/brand/bloom.svg`
  (`<g id="bloom" fill="currentColor"><path d="…FLOWER_D…"/></g>`) from the SSOT
  (`scripts/logo-flower.mjs`, the same source the OG cards use → cannot drift).
  Wired into `predev` + `prebuild` after `sync`.
- **`Header.astro`** — `brand-mark` flower `<g><path/></g>` → `<use href="/brand/bloom.svg#bloom" transform=…/>`.
  `currentColor` → gold via the existing `.brand-mark { color: var(--gold) }`.
- **`ArticleView.astro`** — `hero-bloom` `<path/>` → `<use href="/brand/bloom.svg#bloom"/>`.
  `currentColor` → faint gold via `.hero-bloom { color: var(--gold); opacity: .09 }`.
- **`AboutView.astro`** — `story-bloom` likewise. Dropped the now-unused `FLOWER_D`
  imports from the three components (`logo.ts` unchanged; build scripts still use it).

Appearance is identical (same geometry, same `currentColor` → same gold). Decorative
blooms are `aria-hidden`; the browser fetches the 17.5 KB sprite once and caches it.

## Durability — llms-full.txt offload (BUILT + HELD, same session)

Second lever, built right after the flower fix: offload the 14 per-language
whole-corpus dumps (`llms-full.txt`, ~301 MB uncompressed → ~65 MB compressed) to
R2, mirroring the OG `OG_BASE_URL` pattern. Gated + reversible, OFF by default.

- `src/lib/llmsFull.ts` — `llmsFullUrl()` honoring `LLMS_FULL_BASE_URL` (parallel to
  `src/lib/og.ts`). Unit-tested both modes.
- Rewrote the 3 link sites through it: `src/lib/llms.ts` (llms.txt `## Optional`),
  `src/lib/seo.ts` (homepage Dataset JSON-LD), `src/components/LlmsView.astro`
  (/llms download). Default (var unset) = same-origin, verified unchanged in dev.
- `.github/workflows/deploy.yml` — passes `LLMS_FULL_BASE_URL` to the build + a gated
  "Offload llms-full.txt to R2" step: `aws s3 sync` the `llms-full.txt` files to the
  OG bucket under `_llms/` (keys mirror the paths, e.g. `_llms/en/llms-full.txt`,
  `text/plain`, 1 h TTL), then `find dist -name llms-full.txt -delete`. Reuses the OG
  R2 bucket + creds.

**Activation (USER, one step, like OG was):** set the repo VARIABLE
`LLMS_FULL_BASE_URL = https://og.negaraku.md/_llms` (Settings → Secrets and variables
→ Actions → Variables, or `gh variable set`). Next deploy then syncs the dumps to R2
and strips them from the artifact → **~0.99 GB → ~0.93 GB**. Clear the var to revert.

### Why raw `.md` is NOT offloaded
The per-article `.md` endpoint's contract is literally "append `.md` to any article
URL" (advertised in every llms.txt). Moving it to a subdomain breaks that; keeping the
same-origin URL while serving from R2 needs routing every `*.md` through the always-on
analytics Worker (runs on `negaraku.md/*`, Free-plan, deliberately carved OUT of asset
paths to stay under 100k req/day) — high blast radius for ~70 MB compressed. Left
in-artifact by design.

## Durability — pagefind offload (BUILT + HELD, same session)

The **biggest remaining lever**, built right after llms-full: offload the Pagefind
search index (`dist/pagefind`, ≈27k `.pf_fragment`/`.pf_index` shards + meta + wasm +
`pagefind.js`) to R2. Measured on the live site, pagefind's binaries are **already
compressed** — a 17 KB `.pf_meta` gzips to 17 KB (ratio **1.00**) — so the ~188 MB
directory costs ~188 MB *compressed* in the single-deflate-stream artifact. Offloading
it is worth **~188 MB**, more than llms-full's ~65 MB. Gated + reversible, OFF by default.

- `src/lib/pagefind.ts` — `pagefindEntry()` honoring `PAGEFIND_BASE_URL` (parallel to
  `og.ts` / `llmsFull.ts`). Default → same-origin `/pagefind/pagefind.js`.
- `src/components/SearchView.astro` — the one runtime consumer. Imports the bundle from
  a baked `data-pf` attribute instead of a hard-coded path, and pins
  `pf.options({ baseUrl: '/' })` before `init()`.
- `.github/workflows/deploy.yml` — passes `PAGEFIND_BASE_URL` to the build + a gated
  "Offload pagefind to R2" step: asserts a GET/HEAD CORS policy (best-effort), syncs the
  content-hashed shards under `_pagefind/` with `--size-only` (immutable TTL), re-uploads
  the fixed-name control files (`pagefind.js`, `pagefind-entry.json`) unconditionally
  (short TTL, so the index pointer is never stale), then `rm -rf dist/pagefind`.

**Two correctness points that make pagefind different from OG/llms:**
1. **Cross-origin.** The browser fetches shards with `fetch()` and loads `pagefind.js`
   as a cross-origin dynamic `import()`. Unlike OG (`<img>`) and llms (navigations),
   that needs a **CORS policy** on the bucket — the first R2 consumer that does. The
   deploy step asserts `GET`/`HEAD` for the site origins; if the object-scoped R2 token
   can't set CORS it warns, and you apply it once by hand.
2. **Result-link origin.** Pagefind derives result URLs from the bundle's origin
   (`getDefaultBaseUrl`), so an R2-hosted bundle would point every hit at
   `og.negaraku.md/...` (404). `baseUrl: '/'` pins links to this origin — the same value
   pagefind derives same-origin, so it's a no-op when not offloaded.

**Activation (USER):**
1. Set the repo VARIABLE `PAGEFIND_BASE_URL = https://og.negaraku.md/_pagefind`.
2. Ensure the bucket's CORS allows `GET`/`HEAD` from `https://negaraku.md` (the deploy
   step tries to set this; verify in Cloudflare → R2 → bucket → Settings → CORS, or
   `aws s3api put-bucket-cors`).
3. After the next deploy, **test search on the live site** (the one feature that visibly
   breaks if CORS is wrong — it degrades to a friendly "unavailable" message, not a crash).

Next deploy then strips ~188 MB → **~0.93 GB → ~0.74 GB**. Clear the var to revert.

## Further headroom (NOT built)
- Long-term: whole site on R2 + a Worker (removes the cap; Cloudflare Pages is out —
  20k-file cap < our ~96k files). With OG + llms-full + pagefind all offloaded the
  artifact sits ~0.74 GB, a comfortable margin under 1 GiB — no further lever is needed
  until the corpus grows substantially.

See [[negaraku-og-r2-offload]], [[negaraku-og-card-fixes]].
