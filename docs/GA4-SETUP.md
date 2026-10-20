# Google Analytics 4 — setup & architecture

NegaraKu.md runs **standard client-side GA4** (`gtag.js`, `_ga` cookies), but wired
so it never fires without consent and never off production, and so it also feeds a
panel on the on-site `/analytics` dashboard.

- **Measurement ID:** `G-PLSR4CV12C` (public; in `src/lib/site.ts` as `GA_MEASUREMENT_ID`)
- **GA account / property:** `412428755` / **`559513299`** (the numeric property id — the Data API uses `properties/559513299`, *not* the `G-` id)
- **Property:** NegaraKu.md · Malaysia · Ringgit · web stream `NegaraKu.md Web` → `https://negaraku.md`

## How it behaves on the page

| File | Role |
|------|------|
| `src/lib/site.ts` | `GA_MEASUREMENT_ID` (empty = GA fully off) + `GA_HOST` (`negaraku.md`) |
| `src/components/GoogleAnalytics.astro` | Consent Mode v2 — `analytics_storage` defaults to **denied**. `gtag.js` is injected only after `window.__nkGA.enable()` **and** only when `location.hostname === GA_HOST` (so dev/preview/localhost never send data). `disable()` revokes consent + clears `_ga` cookies. |
| `src/components/ConsentBanner.astro` | Opt-in banner, 13 languages. Accept → `enable()`, Decline → `disable()`; choice stored in `localStorage['nk:consent']`. Exposes `window.__nkConsentOpen()`. |
| Footer "Cookie settings" | Calls `window.__nkConsentOpen()` so a visitor can change their mind. |
| `src/components/LegalView.astro` | Privacy + Cookie policies disclose the opt-in GA4 (13 langs). Keep in sync with any change to the above. |

GA therefore only collects from visitors who **click Accept**, on **production** — a
consented subset, smaller than the cookieless first-party edge analytics by design.

## The /analytics dashboard panel

Mirrors the Search Console archiver (offline/fast at build):

1. `.github/workflows/google-analytics.yml` — weekly (Mon 05:30 UTC) + manual. Runs the pull, commits `analytics/ga4.json` with `[skip deploy]` (deploy.yml ignores `analytics/**`).
2. `scripts/pull-ga4.mjs` — service-account JWT (scope `analytics.readonly`) → GA4 Data API `runReport` → `analytics/ga4.json`: trailing-90-day totals (users/sessions/views/avg-engagement/engagement-rate) + acquisition channels / countries / devices / top pages, and per-month users/sessions/views merged forward. **Fail-safe**: no creds or any API error keeps the committed snapshot.
3. `scripts/build-analytics.mjs` serves `ga4.json` → `public/api/`.
4. `src/lib/apidata.ts` `getGA4()` + `src/components/AnalyticsView.astro` "Google Analytics" panel (Overview band). Honest empty state until data exists.

## One-time setup (required to feed real data)

**Recommended — reuse the existing Search Console service account** (no new key or
secret). The puller falls back to `GSC_SA_KEY`, so you only need two in-console
clicks. (Claude does not create service accounts or handle private keys; these two
steps are account changes, not key handling.)

1. **Google Cloud Console** (`console.cloud.google.com`) → select the project that
   owns the `gsc-reader` service account → **APIs & Services → Library → enable the
   "Google Analytics Data API"**.
2. **Google Analytics → Admin → Property Access Management** (the NegaraKu.md
   property) → **+** → add the service account's email
   (`…@….iam.gserviceaccount.com`, the `client_email` in the GSC key / visible in
   GCP → IAM) as **Viewer**.
3. Done. Run **Actions → "Archive Google Analytics" → Run workflow** (or wait for
   the Monday schedule). It commits `analytics/ga4.json`; the panel shows real
   numbers on the next deploy.

Trade-off: GA4 then shares the GSC key's lifecycle — rotating/revoking that key
breaks both. To keep them independent, use a **dedicated** service account instead:
create it, download a JSON key, add it as Viewer on the property (step 2), and set
the repo secret **`GA_SA_KEY`** to that JSON (it takes precedence over `GSC_SA_KEY`).
`GA_PROPERTY_ID` is optional either way — the script defaults to `559513299`.

**Timing:** GA only collects after the site is live **and** visitors accept the
banner, so the first archive has data ~24–48h after go-live.

## Local preview without creds

`public/api/` is gitignored. Drop a hand-made `public/api/ga4.json` (same shape as
the script writes) to preview the populated panel on the dev server; it won't be
committed. Without it, the panel shows its empty state.
