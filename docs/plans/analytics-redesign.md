# Analytics redesign — split `/dashboard`, build a filterable trends view

_Created 2026-09-21. Goal: "let the world know about Malaysia" — measure how well each **channel** (SEO, AI, social, direct, referral), **content** (category/pillar/article), **language**, and **audience** (visitor/geo/device) is doing, as **trends over time** with filters._

## 1. Why split

`/dashboard` currently mixes two unrelated jobs for two audiences:
- **Content health** (coverage, translation status, review pipeline, per-category counts) — for editors/contributors: *"what exists, what needs work."* Built by `build-dashboard.mjs` → `dashboard.json` (corpus only, no traffic).
- **Growth/performance** (visitors, channels, SEO, AI, social, engagement) — for the owner: *"how well are we reaching people."* Built from `analytics.json` + `gsc.json`/`bing.json`/`facebook.json`.

Decision: keep **`/dashboard`** = content health; create **`/analytics`** = growth. Separate concerns, separate denominators, each focused.

## 2. Data reality (mapped 2026-09-21) — the key constraint

| Dimension | Source | Output | Trend today |
|---|---|---|---|
| Visitors (readers) | Worker→AE → `accumulate-analytics.mjs` | `analytics.json` (per-article all-time) | **snapshot only** |
| Channels (direct/SEO/AI/social/msg/referral) | `worker/src/referrer.js` | `analytics.json` `.ref` | **snapshot only** |
| AI (crawlers + AI referrals) | `worker/src/classify.js`, `referrer.js` | `analytics.json` `.ai`, `.ref.byChannel.ai` | **snapshot only** |
| Engagement (dwell/scroll) | beacon `BaseLayout.astro` → AE | `analytics.json` `.engage` | **rolling 90-day avg** |
| SEO (Google/Bing) | `pull-search-console.mjs`, `pull-bing.mjs` | `gsc.json`/`bing.json` `.byMonth` + `.latest` | **YES — monthly** |
| Social (Facebook) | `pull-facebook-insights.mjs` | `facebook.json` | **snapshot only** |

**The blocker:** only SEO has time-series. Visitors/channels/AI/engagement/social collapse to lifetime totals behind one `cursor`. AE retains raw points ~90 days, so **trend history must be folded forward** (like GSC already does) — and **every day without capture is permanently lost** beyond that 90-day window. So the data foundation is Phase 1a and time-sensitive.

Secondary gaps: (b) GSC `byMonth` stores only `{clicks,impressions}` — no per-month category/lang split (that's only in 90-day `latest`); (c) the Worker records locale as `en/zh/ms` only — **ta/ja collapse to `ms`**, so visitor-language filtering can't see Tamil/Japanese (SEO `byLang` can, via URL).

## 3. Decisions (committed, not open questions)

- **Route:** `/analytics` (5 locale variants, thin wrappers like `/dashboard`).
- **Granularity:** **daily** buckets for AE-derived series (visitors/channels/AI/engagement), rolling ~13 months → supports 7d/30d/90d/12mo filters. SEO/Bing stay **monthly** (their native archive granularity).
- **Series scope (compact):** store **site-level per day**: `readers`, `search`, `ai`, `byChannel{}`, `byLang{}`, `byPillar{}` (3 pillars, cheap) + engagement `{secs,scroll,n}`. NOT per-article-per-day (too large) — per-article stays lifetime totals for "top articles". Full **category** trends come from SEO (`byMonth.byCategory`); on-site category trends are pillar-level.
- **Honesty:** visitor/channel/AI/engagement/social trends **accrue from launch** (seed once from AE's ~90-day window); SEO already has ~16 months. The UI labels a series' start so a short line isn't mistaken for "no traffic".
- **Worker fix:** record real locale (`ta`/`ja` too) so language filtering is complete going forward.

## 4. Phases

**Phase 1a — data foundation (this is the blocker; do first).**
- `analytics-store.mjs`: add a `series` map to the cumulative store (`{ "YYYY-MM-DD": {readers,search,ai,byChannel,byLang,byPillar,engage} }`) + `addDayRow()` fold helper + a `queryDailyTotals()` AE query (`GROUP BY toDate(timestamp), bucket, channel, locale`).
- `accumulate-analytics.mjs`: after the existing per-page fold, also fold the daily tail into `series`; add a `--seed-series` one-time backfill over the last ~90 days (idempotent per-day overwrite) so trends have immediate data.
- `build-analytics.mjs`: pass `series` through to `public/api/analytics.json` (+ current partial day from the live tail).
- Fail-safe throughout (AE error → snapshot untouched, exit 0). Runs in the existing daily `accumulate-analytics.yml` cron; no new secret.
- `worker/src/index.js`: emit real `ta`/`ja` locale (small, forward-only).

**Phase 1b — split + trends UI.**
- New `AnalyticsView.astro` + `/analytics` routes (5 locales); move the 6 analytics panels out of `DashboardView.astro`; `/dashboard` becomes content-only. Nav/menu + i18n labels for the new page.
- Filter bar: time range + channel + language + pillar. Client-side over baked JSON (static-site pattern).
- Charts: **Traffic-by-channel over time** (from `series`), **SEO clicks/impressions over time** (from `gsc.json.byMonth`). Snapshot breakdowns retained (top sources, top queries, AI bots, engagement) as "current".

**Phase 2 — depth.** AI segment deep-dive (crawlers vs AI referrals, per-bot trend); content-performance (rising articles, dwell); social trend (once `facebook.json` gains a `byMonth` merge-forward, mirroring GSC). Widen GSC `byMonth` to carry `byCategory`/`byLang` for category/lang SEO trends.

## 5. Sequencing rationale
1a before 1b: charts are worthless without the series, and the series must start accruing ASAP (90-day AE window). 1b is a safe reorg with no data risk. Phase 2 items each unlock once their series has history.
