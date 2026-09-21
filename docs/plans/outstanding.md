# NegaraKu.md — Outstanding Tasks

Living tracker of open work toward the mission **"let the world know about Malaysia."**
Update this file as tasks move; check items off when done. Owner tags: **[you]** = user
action (accounts, credentials, approvals — Claude can't do these), **[me]** = Claude.

_Last updated: 2026-09-21._

---

## 🌐 Distribution push — ON HOLD (2026-09-18, "come back later")

The 4 discovery modes and where we stand:

| Mode | Have | Gap |
|---|---|---|
| Search (pull) | SEO ✓ | answer engines, Wikipedia |
| AI (machine) | llms.txt, MCP, **HF dataset ✓** | (broad training-data presence) |
| Social (push) | Facebook ✓ | Instagram, LinkedIn, every other network |
| Reference / owned | Share button | Wikipedia, newsletter, syndication |

### LinkedIn — Page done, engine built, **paused mid-setup**
- [ ] **[you]** Verify business email on the Community Management API request (the step we stopped at)
- [ ] **[you]** Mint OAuth token as org admin, scope `w_organization_social` (~60-day; refresh 365-day)
- [ ] **[you]** Add repo secret `LINKEDIN_ACCESS_TOKEN`
- [ ] **[me]** Uncomment the `schedule:` in `.github/workflows/linkedin-backlog.yml` to go live
- [x] Page fully set up (logo, 6:1 banner, About, specialties, location, EN/MS/ZH localization)
- [x] Poster engine built + dry-run-verified (en/ms/zh, business-pillar-first, rotated into one feed)
- [x] Developer app "NegaraKu.md Poster" (Client ID `86s3wnpy5m90dt`, id 263840707) created + Company-verified

### Instagram — flagship done, expand
- [ ] **[you]** Create `@negaraku.md.en` / `.zh` / `.ta` accounts (signup)
- [ ] **[me]** Wire each (Professional → Business → category → photo+bio → Business Suite → Page connect → system-user tasks)
- [ ] **[you]** `instagram_content_publish` App Review on the Poster app (per-app, covers all 4)
- [ ] **[me]** Build the IG branch of the poster engine (2-step Content Publishing API; link-in-bio)
- [x] Flagship `@negaraku.md` (ms) provisioned + wired
- [x] Branded per-language emails (Cloudflare Email Routing catch-all → brand Gmail)

### Wikipedia
- [x] **Phase 2b playbook WRITTEN** — `docs/plans/wikipedia-coi-playbook.md` (COI rules, disclosure, Talk-page edit-request workflow, §3 acceptable-source test, templates, tracker). Lowest-priority/highest-risk channel; do sparingly or skip.
- [ ] **[you]** Execute (optional): declare COI on your user page, then propose only §3-passing citations via Talk-page edit requests. Claude drafts/assesses on request; never posts.
- [x] Wikidata QID sweep (~343 articles) + own item Q141449495

### Not started (Tier 2–3)
- [ ] Email newsletter (owned audience, algorithm-independent)
- [ ] Syndication — Google News Publisher, Flipboard, Pinterest
- [ ] X/Twitter + Telegram broadcast (extend the poster engine)
- [ ] Short-form video (TikTok / YouTube Shorts / Reels) — needs text→video pipeline
- [ ] Embeddable widgets (compliance calendar / knowledge graph / fact-of-the-day)

---

## 🌏 Japanese (`ja`) — ✅ FULLY LAUNCHED 2026-09-20
- [x] Phases 0–2 (foundation, fonts, `/ja` routes, chrome)
- [x] **Phase 3** — full corpus: all **1,094** masters translated to `.ja.md`
- [x] **Phase 4** — open launch: `ja` in LOCALES, indexed, sitemap, switcher/hreflang; all 1,094 **published** (890 non-sensitive + 204 sensitive signed off by reviewer `ashton-tan`); deploy green; verified live Japanese on real pages
- [x] Post-launch chrome gaps closed (subcategory TOPICS labels, language-availability badge, FAQ count, dashboard FB panel — see [[negaraku-language-launch-checklist]])
- [x] **Facebook** activated (in LANGS + LANG_POLICY; first ja post live; auto-posts 1/day; Page website = `negaraku.md/ja`)

## 🇰🇷 Korean (`ko`) — NEXT LANGUAGE (not started)
- [ ] **[me]** Corpus translation (~1,094) via multi-agent waves — reuses the ja pipeline
- [ ] **[me]** Chrome: i18n keys, `L()` calls, taxonomy, **subcategories.ts + intros.ts** (the ja gaps — do up front), badge/FAQ/dashboard arrays
- [ ] **[me]** Open launch: `ko` → LOCALES + sitemap + astro i18n; publish (sensitive need reviewer)
- [ ] **[me]** FB activation: `ko` → LANGS + LANG_POLICY + facebook.mjs touchpoints (KO page id `1308994995630346` already recorded); ko Page website → `negaraku.md/ko`
- [ ] **[you]** Nothing new — ko FB Page already exists + assigned to the system user

## 📊 Analytics redesign — IN PROGRESS (plan: `docs/plans/analytics-redesign.md`)
Split `/dashboard` (content health) from a new `/analytics` (filterable growth trends: channel · SEO · AI · visitor · category · language). Data reality: only SEO has trend history; visitors/channels/AI/engagement/social are snapshot-only.
- [x] **Phase 1a — data foundation**: daily time-series capture (`analytics-store.mjs` series + `accumulate-analytics.mjs` daily fold + `--seed-series` backfill + `build-analytics.mjs` → `public/api/analytics-series.json`); worker locale fix pending. Fail-safe; fold logic unit-tested. *(local, held for push)*
- [x] **Seed done** 2026-09-20 — ran `Accumulate Visitors snapshot` with `seed_series = true`; backfilled **38 days** of daily trend data (commit 3686fb8f). Accumulates permanently from here (outlives AE's 90d).
- [x] **Phase 1b split** — new `/analytics` route (5 locales) + AnalyticsView; moved the 6 analytics panels out of DashboardView (now content-only + cross-link); nav + `nav.analytics` i18n; **worker `ta`/`ja` locale fix**. Build green, dev-verified. *(commit 3c3a02aa, local)*
- [x] **Phase 1b charts** — `/analytics` "Trends over time": time-range filter (30d/90d/All) + daily multi-line chart (visitors/AI/search crawlers) + traffic-by-channel bars for the selected range + monthly SEO chart (accruing until ≥2 months). Inline SVG, no chart lib; `getAnalyticsSeries()` getter; verified in dev with the 38-day seeded data. *(local, held for push)*
- [x] **Phase 2 (part 1)** — visitors-by-**language** trend chart (byLang daily) + **most-read articles** panel (both verified with seeded data) + **FB byMonth merge-forward** capture (social trend accrues forward once FB insights run). *(local, held for push)*
- [x] **Phase 2 (part 2)** — per-bot AI daily series (`aiByBot`) + "AI crawlers by bot over time" chart (re-seedable → lights up after a fresh `seed_series` run); GSC `byMonth` × category/lang enrichment via a fail-safe `date×page` query (unblocks SEO-by-category/language trends; accrues from the next GSC run + backfills 16mo). Capture unit-tested; build green. *(local, held for push)*
- [x] Re-ran `seed_series` — per-bot AI series backfilled (28/38 days), "AI crawlers by bot" chart live (deploy 35553309155).

## 🧮 Analytics pivot / Traffic explorer — Cloudflare-style, IN PROGRESS
User pointed at Cloudflare's Domain Dashboard ("i expect this type… even can configure") — filterable, configurable multi-panel traffic view. Decision: **both sources, unified** on /analytics; headline = **Visitors · Impressions · Clicks**. See [[negaraku-cf-graphql-analytics]].
- [x] **Stage 1 — edge capture**: worker/src/device.js + index.js write blob7-12 (country, region, city, device, browser, os). **Worker DEPLOYED 2026-09-21** (`wrangler deploy`, Version 31f3d420) — dimensions now recording, accrue forward (no backfill).
- [x] **Stage 2 — CF Traffic explorer (Cloudflare-style, configurable + filterable)** *(local, held for push)*:
  - `scripts/pull-cf-traffic.mjs` — build-time pull of CF GraphQL `httpRequestsAdaptiveGroups` → `public/api/cf-traffic.json` (compact cube country×device×browser×os + paths/status/cache/proto + `visits`; html-only; fail-safe; keeps a local seed when no creds). Wired into predev/prebuild + deploy.yml + `npm run pull:cf`.
  - AE curated cube: `queryReaderCube`/`queryReaderPaths` → `public/api/reader-cube.json` (human readers by country×device×browser×os, 90-day).
  - `AnalyticsView.astro` "Traffic explorer": source toggle (Cloudflare all-traffic ↔ curated Readers) · global filter bar (click any bar/legend → filter chip; recomputes every panel) · configurable panels (⋯ → dimension · measure · view-as bars/donut · Duplicate · Remove) · + Add panel · localized (Intl.DisplayNames country names) · localStorage-sticky. Verified live with real seeded CF data (US 82%, Device donut 93/7, MY-filter → Edge top).
- [x] **[you]** `CF_ZONE_ID` secret set + `CF_API_TOKEN` token (`negaraku-analytics-read`, owned by ai.negaraku.md login) extended with **Zone → Analytics → Read** (All zones). **LIVE 2026-09-21** — both sources populated: CF 229 cube rows (9,954 req/5,655 visits/24h), curated Readers 104 rows already accruing. See [[negaraku-cf-graphql-analytics]] for the two-login gotcha.
- [x] **Stage 3 — pivot UI (baked)** "Explore — pivot" (Group by Pillar/Category/Article × Measure × Channel). *(shipped)*
- [x] **[me]** **Stage 4 — live query Worker (contributor-only)** *(local, held for push + worker deploy)*:
  - `worker/src/query.js` + `/_a/q` route in index.js: whitelisted AE SQL group-by (dims country/region/city/device/browser/os/locale/channel/source/bot/path × bucket readers/search/ai/all × 1–90d), gated by an `/api/auth/me` subrequest (contributors only, fail-closed), filter values escaped, caps + ~5-min edge cache. `CF_ACCOUNT_ID` var in wrangler.toml.
  - `AnalyticsView.astro` "Live query" panel (hidden unless `<html data-contributor>`): dim chips (max 3) × audience × range → POST /_a/q → bars. Verified in dev (renders for contributors, max-3 enforced, graceful off-worker failure).
- [x] **Stage 4 ACTIVATED + LIVE + verified 2026-09-21** — worker deployed (AUTH service binding gate + `AE_API_TOKEN` secret set), `/_a/q` returns real AE data end-to-end (US/MY/SG by country, device×browser, etc.). Naming aligned (humans = "Readers"/"Pembaca" matching the article Visitors box; CF panels keep "Requests"/"Visits"); live-query hides pre-capture "(none)" rows. See [[negaraku-cf-graphql-analytics]] for the two-login + service-binding + masked-paste gotchas.
- [ ] **[me]** Optional Stage 4 polish (later): saved-view presets, CSV export, a second filter row, and a "hide (none)" toggle on the baked explorer to match the live query.

## 🛠 Other standing project items
- [ ] **Facebook comment-mode** — blocked by App Review / Advanced Access (parked; caption-mode is live)
- [ ] **Compliance calendar** — planned further redesign
- [ ] **FB fetch-timeout hardening** (reliability follow-up)
- [ ] Optional: switch ms IG flagship login email to `ig-ms@negaraku.md`
- [ ] Minor ja residuals (accepted, left for ta too): OG-card pillar/sensitivity labels render EN on `/ja` & `/ta` cards (`build-og.mjs` L helper); `llms.ts` INTRO is ms/en/zh only; `intros.ts` CATEGORY_INTRO export is unwired dead code

---

## ✅ Recently completed (for context)
- **Japanese fully launched + published + on Facebook** (2026-09-20)
- Hugging Face dataset **LIVE** (`negaraku-md/negaraku-md`; now includes `ja`)
- Wikidata QID sweep + NegaraKu.md's own item Q141449495
- LinkedIn Company Page fully set up (EN/MS/ZH localization + 6:1 banner); engine + banner pushed to `main` (inert until token)
- Instagram flagship `@negaraku.md` provisioned
