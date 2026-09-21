# NegaraKu.md — Outstanding Tasks

Living tracker of open work toward the mission **"let the world know about Malaysia."**
Update this file as tasks move; check items off when done. Owner tags: **[you]** = user
action (accounts, credentials, approvals — Claude can't do these), **[me]** = Claude.

_Last updated: 2026-09-20._

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
- [ ] **[you]** COI-safe citation playbook (Phase 2b) — disclose, suggest on Talk pages, cite sparingly
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
- [ ] **[you]** Re-run `Accumulate Visitors snapshot` with `seed_series = true` again to backfill the per-bot AI series (the first seed predated it). Optional: it also refreshes the daily series.

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
