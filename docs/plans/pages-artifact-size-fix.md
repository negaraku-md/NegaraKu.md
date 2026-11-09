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

## Durability / future headroom (NOT in this change)

~0.99 GB leaves ~8% headroom; the corpus grows ~monthly (~22 KB compressed per new
page). When it tightens again, the next levers, in order of cleanliness:
1. Offload the AI text endpoints (`llms-full.txt` 301 MB, raw `.md` 291 MB) to R2 —
   plain static files, large, trivially separable (needs URL rewrite, no CORS for
   direct links).
2. Offload `pagefind/` to R2 (mirrors the OG `OG_BASE_URL` pattern; needs a bucket
   CORS policy because pagefind uses `fetch`/`import`, not `<img>`).
3. Long-term: serve the whole site from R2 + a Worker (removes the cap entirely;
   Cloudflare Pages is out — 20k-file cap < our ~96k files).

See [[negaraku-og-r2-offload]], [[negaraku-og-card-fixes]].
