# Offload OG cards to Cloudflare R2 (Option C)

**Goal:** stop shipping the 823 MB of Open Graph cards (≈28k files — 14k PNG
share-images + 14k `.thumb.webp` on-page thumbnails) inside the GitHub Pages
artifact. They move to a Cloudflare R2 bucket served over a custom domain; the
Pages artifact drops from ~2.33 GB to ~1.5 GB, so deploys upload fast and stop
timing out / cancelling.

**Why now:** the batch-8 push deploy (run 42306436127) failed —
`Uploaded artifact size of 2334797433 bytes exceeds the allowed size of 1 GB` →
`Deployment cancelled`. The last good deploy (42154365103) was the pre-card
build, so none of the reader-first restaurant cards/heroes are live yet.

---

## What is already done in the repo (committed, NOT pushed)

All of this is **inert until you set the `OG_BASE_URL` repo variable** (below).
With the variable empty, the site behaves exactly as today (cards ship in the
artifact at same-origin `/og/*`).

- `src/lib/og.ts` — `ogAsset()` / `ogMetaUrl()` helpers. Read `OG_BASE_URL`;
  empty → same-origin `/og/...`; set → `https://<host>/...` (drops `/og`).
- `src/layouts/BaseLayout.astro` — `og:image` / `twitter:image` use `ogMetaUrl`.
- `src/components/ArticleCard.astro` — on-page thumbnail uses `ogAsset`.
- `.github/workflows/deploy.yml` —
  - build step gets `OG_BASE_URL: ${{ vars.OG_BASE_URL }}`;
  - new **Offload OG cards to R2** step (runs only when the var is set): syncs
    `public/og` → R2 (incremental, `--size-only`, correct content-types), then
    `rm -rf dist/og`. Hard-fails if the var is set but R2 secrets are missing.

---

## Your account steps (one-time) — I cannot do these

### 1. Create the R2 bucket
Cloudflare dashboard → **R2** → Create bucket, name e.g. **`negaraku-og`**
(region: automatic). 823 MB sits well inside R2's 10 GB free tier.

### 2. Give the bucket a public custom domain
Bucket → **Settings → Public access → Custom Domains → Connect Domain** →
**`og.negaraku.md`** (negaraku.md is already on Cloudflare, so DNS is
one click). This serves objects at `https://og.negaraku.md/<locale>/...`.
(Don't use the `r2.dev` public URL for production — it's rate-limited and
unbranded; the custom domain is edge-cached like the rest of the zone.)

### 3. Create R2 S3 API credentials
R2 → **Manage R2 API Tokens → Create API token** → **Object Read & Write**,
scoped to the `negaraku-og` bucket. Copy the **Access Key ID**, **Secret Access
Key**, and your **Account ID** (the hex string in the dashboard URL / R2
endpoint `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`).

### 4. Add GitHub repo **secrets** (Settings → Secrets and variables → Actions → Secrets)
| Secret | Value |
|---|---|
| `R2_ACCESS_KEY_ID` | the Access Key ID from step 3 |
| `R2_SECRET_ACCESS_KEY` | the Secret Access Key from step 3 |
| `R2_ACCOUNT_ID` | your Cloudflare account ID |
| `R2_BUCKET` | `negaraku-og` |

### 5. Add the GitHub repo **variable** (same page → Variables tab)
| Variable | Value |
|---|---|
| `OG_BASE_URL` | `https://og.negaraku.md` |

Setting this variable is the **switch that turns the whole thing on**. The next
deploy builds HTML pointing at R2, uploads the cards to the bucket, and ships a
~1.5 GB artifact.

---

## First deploy after switch-on
- The first R2 sync uploads all ~28k objects (a few minutes); later deploys only
  upload changed cards (`--size-only`).
- Verify after it goes green:
  - `curl -sI https://og.negaraku.md/en/food-lifestyle/teksen.png` → `200`,
    `content-type: image/png`.
  - View an article's source → `<meta property="og:image" content="https://og.negaraku.md/...">`.
  - Article-grid cards still show thumbnails (now from R2).
  - Re-run a share-preview debugger (Facebook/LinkedIn) on one URL to confirm the
    card unfurls from the new host.

## Rollback (fully reversible)
Delete the `OG_BASE_URL` repo variable → next deploy ships cards in the artifact
at `/og/*` again (back to today's behaviour). The R2 bucket can stay or be
deleted.

## Note / honest caveat
This removes ~823 MB. The artifact still lands ~1.5 GB (HTML + pagefind +
`_astro`), over the 1 GB *warning* line — but that line is a soft warning (the
2.33 GB build deployed before); the real win is a much smaller, faster, reliable
upload. Getting truly under 1 GB is a later, separate HTML/pagefind trim.
