# NegaraKu.md — Outstanding Tasks

Living tracker of open work toward the mission **"let the world know about Malaysia."**
Owner tags: **[you]** = user action (accounts, credentials, approvals — Claude can't
do these), **[me]** = Claude.

_Last updated: 2026-11-15._

The product is mature: **13 languages live** (~1,380 topics × 13 ≈ 17,750 article
files), full analytics stack, AI-friendly infra, Facebook auto-posting, a growing
吃喝玩乐 discovery layer and a tools hub. The frontier is now **distribution**
(off-site reach) + the **China/想留下 content play** + the **吃喝玩乐 entry-layer** —
not core features.

> **Governing strategy (read first):** two plan docs set the rules all content work
> follows and supersede scattered notes elsewhere:
> - **`growth-strategy-synthesis-2026-11.md`** — the moat = *neutral, current,
>   AI-citable, multilingual authority for **understanding** Malaysia*; every
>   initiative must deepen it. 吃喝玩乐 = an **entry-layer / scenario skin**, NOT a 4th
>   pillar. Monetization = **affiliate + 1company funnel, NOT AdSense**. zh is the
>   3rd-biggest language, and its demand is the serious **"想留下"** segment
>   (law/tax/safety/settling-in), not food/tourism.
> - **`china-promotion-and-monetization-2026-11.md`** — **流量 first, monetization
>   last.** Boundary: *no 攻略, no 推荐, no 排名* — run a trust business, not a traffic
>   business. 3 phases (fact-checker persona → 留学/长期居留 → AI-citation wedge).

---

## 🟢 Held locally right now (awaiting `push`)
- _Nothing held._ `2753c8690` (喝 Drink tranche 2) and everything from earlier
  sessions are **pushed + live**.

---

## 🆕 Shipped & live since 2026-11-08
- **吃喝玩乐 (Eat·Drink·Play) entry-layer** — scenario band on `/explore` + compact
  "体验·Experience" rail on food/festival/tourism hubs (`scenarios.ts`, 11 scenes);
  **festival "at a glance" cards** (`festivalFacts`, 16 festivals × 13 langs);
  **dish cards** (`dishFacts`, all 33 discrete dishes × 13 langs); **drink layer**
  (`drinkFacts`): flagship pilot (teh-tarik/sirap-bandung/milo-dinosaur) + tranche 2
  (5 drinks) = **8 drinks × 13 langs**; **kopi-lingo-decoder** interactive tool.
- **Malaysia tools hub** — `/tools` + flagship **income-tax / PCB calculator**
  (`src/lib/tax/incomeTax.ts`, 19 passing tests).
- **llms.txt curated map** (566 KB → ~104 KB) — pillars-per-category + hub drilldown.
- **Industries of Malaysia atlas** — 46 sector guides × 13 langs.
- **Sponsor funnel** — disclosed UTM CTA from ~408 articles → 1company.com / 1financing.com.
- **MICHELIN Guide** reworked into a `michelin-guide` subcategory (faceted) + redirects.
- **Content quality**: article frameworks (1,328 tagged), food-article standard
  (154 masters), reader-experience sprint 1a, SEO titles/FAQ/sources sweep +
  dead-citation fix, ~895 internal cross-links wired, A–Z topic ordering, WCAG a11y
  pass, render-blocking-CSS on landing pages.
- **Native-authored masters**: zh/ta religion + culture set (reviewer ashton-tan).
- **Infra**: OG cards on Cloudflare R2 (`og.negaraku.md`) + Pages artifact-size fix;
  analytics stack v2 (channel classifier, CF GraphQL traffic explorer, edge cache);
  menu redesign (6-door) + `/start` two-path IA + Reader/Contributor view + GitHub OAuth.

---

## 🔝 Top of mind
1. **Distribution (off-page) is the main frontier.** Internal levers are saturated
   (13 hubs, homepage/category surfacing, HF dataset ×13, GSC-404 fixed, cross-links).
   What's left is mostly **[you]**-gated: LinkedIn (closest), Instagram, reciprocal
   **dofollow** links from 1company.com + syarikat.ai. Runbooks in
   `offpage-prep-pack-2026-10-24.md` + `owned-backlinks.md`.
2. **China / 想留下 content** — the P1 of the growth synthesis and the best indirect
   funnel to 1company: the zh public-safety / law / tax / settling-in / business /
   property / healthcare cluster, as sourced "可查证的事实" fact cards. **[me]**, no blocker.
3. **Owned backlinks** — the one off-page win with no platform gate (1company.com +
   syarikat.ai link back dofollow). Both codebases are user-side. **[you]**.

---

## 🚀 Distribution push — the main open frontier (ON HOLD, resume anytime)

**Why it matters:** the site ranks on long-tail but sits ~position 12 on head terms,
so AI answer-engines never pull it into their candidate set. On-page GEO is
best-in-class; the gap is **off-page** (third-party citations, backlinks, domain age).

### LinkedIn — Page + engine built, paused mid-setup (closest to done)
- [ ] **[you]** Verify business email on the Community Management API request
- [ ] **[you]** Mint OAuth token as org admin, scope `w_organization_social` (~60-day; refresh 365-day)
- [ ] **[you]** Add repo secret `LINKEDIN_ACCESS_TOKEN`
- [ ] **[me]** Uncomment `schedule:` in `.github/workflows/linkedin-backlog.yml` to go live
- [x] Page set up (logo, banner, About, specialties, location, EN/MS/ZH); engine dry-run-verified

### Instagram — flagship `@negaraku.md` (ms) live, expand
- [ ] **[you]** Create `@negaraku.md.en` / `.zh` / `.ta` accounts
- [ ] **[you]** `instagram_content_publish` App Review on the Poster app (covers all)
- [ ] **[me]** Wire each account + build the IG branch of the poster engine

### Owned backlinks — no platform gate
- [ ] **[you]** Add dofollow link back from **1company.com** + **syarikat.ai** (snippet in `owned-backlinks.md`)

### Wikipedia — playbook + COI disclosure done; execution optional
- [ ] **[you, sparingly]** Propose only §3-passing citations via Talk-page `{{request edit}}` (`wikipedia-coi-playbook.md`). Claude drafts/assesses; never posts to article space.
- [x] COI disclosure published; Wikidata QID sweep + own item Q141449495

### Not started (Tier 2–3)
- [ ] Email newsletter · Google News / Flipboard / Pinterest syndication · X/Twitter + Telegram (extend poster engine) · short-form video (text→video pipeline)
- [ ] More embeddable widgets (fact-of-the-day widget already built)

---

## 🍜 吃喝玩乐 content continuation — [me], no blockers
- [ ] **喝 Drink** — widen beyond the 8 live drinks (barley / sng bao, Penang nutmeg
  juice, bubble tea, ais kacang/ABC, lassi) via the same hub→spoke method; then
  source drink hero images (Wikimedia → sharp → webp).
- [ ] **吃喝玩乐 hub consolidation** — per the entry-layer rule (hub, not a 4th pillar);
  surface the Experience rail on more hubs.
- [x] **玩 attraction rule-cards — DONE + HELD 2026-11-19** (commits `4b46fbd52` masters
  + `6627236ca` ×13 langs). `visitFacts{bestFor,getThere,permit,watch,next}` card on 18
  tourism destination guides × 13 langs (234 files); `permit` states the **durable rule**,
  never a year-specific figure. Freshness-neutral. Excluded the 2 mood/itinerary pieces
  (rainy-day-KL, gentler-Putrajaya). Awaiting push.
- [ ] **Dish "top places" live leaderboard** — **BLOCKED on [you] Google Places
  billing**; CF Worker + Places (Nasi Lemak pilot first), reuses `fetch-google-places.mjs`.
- [ ] **Affiliate experience links** (Klook/Grab) — capability is built (`scenarios.ts`
  per-scene `experience{href, external}` slot); **[you]-owned**: user sets up the
  affiliate programs + supplies URLs. Do not pursue/source these.

---

## 🧹 Content quality & integrity — [me]
- [x] **GSC "Not found (404)" — DONE + LIVE** (robots block + redirects + source fix +
  content-gap articles). Open item is user-side: click *Validate Fix* in Search Console
  (re-triggered 2026-11-11, ~331 pending).
- [x] **`verificationNeeded` backlog — EXHAUSTED FLOOR, do NOT sweep.** Residual items
  are genuine KEEPs; only new-Budget staleness yields on revisit.
- [ ] **Tier-1/2 dedup** — audit ready (`corpus-dedup-audit-2026-10.md`), but
  `archive-article --into` only redirects (doesn't merge). Each merge needs unique
  content ported across 13 langs → **needs per-pair go-ahead** before touching live articles.
- [ ] **[you/ashton-tan]** Optional human review of the ~196 sensitive articles per
  language (published AI-assisted under reviewer `ashton-tan`) — Arabic especially.
- [ ] **Eight-article sprint remainder** — #2 UEC/overseas, #3 council dedup, #6 state data, #8 batik.

---

## 🖼️ Images / media
- [ ] **[you]** **Unsplash production app** — SUBMITTED 2026-11-11; gates the full
  restaurant/real-photo rollout. Pending approval.
- [ ] **orang-asli-food** — held editorial call: respectful documentary photo vs. keep
  the neutral branded fallback. ~17 fine-dining/MICHELIN profiles acceptably on fallback.
- [x] **[me]** **Drink hero images — DONE (2026-11-19).** 15 drink articles given a
  free-licensed Wikimedia Commons hero (× 13 langs, localised `heroAlt`): teh-tarik,
  teh-halia, teh-o-ais-limau, kopi-cham, sirap-bandung, milo-dinosaur, air-kelapa,
  air-kekwa, air-limau-ais, air-tebu, lassi, bubble-tea, soya-bean, cincau,
  air-mata-kucing. Generator `scripts/build-drink-heroes.mjs`; every licence verified
  against the Commons API; stall/vendor shots tagged `representative`, clean servings
  `actual`. **nutmeg-juice + barley deliberately skipped** — Commons has no genuine free
  photo, and a wrong-looking substitute would mislead. Freshness-neutral (0 stale).

---

## 📣 Social / Facebook
- [ ] **[you]** FB **comment-mode** — BLOCKED by Meta App Review / Advanced Access #200 (caption-mode is live).
- [ ] **[me, when wanted]** **Arabic Facebook layer** — deliberately excluded from the ar launch.
- [ ] **[you]** Set each FB Page's **website field** to its locale (e.g. `negaraku.md/ko`).

---

## 💰 Monetization & analytics
- [x] **AdSense — assessed → RECOMMENDED AGAINST** (2026-11-13): ~$10–20/mo, cannibalizes
  the 1company funnel, tanks page speed, 3R/brand risk. Real alternative = **affiliate
  (Klook/Grab outbound) + sponsor CTA on `/tools`**.
- [ ] **[you/auto]** GA4 — run **Actions → "Archive Google Analytics"** once consented
  data accrues → `/analytics` panel fills (or wait for the schedule).
- [ ] **[you]** Analytics workers that need a `wrangler deploy` + secrets (GSC_SA_KEY,
  CF_API_TOKEN, CF_ZONE_ID) to fully light up — see `worker-deploy-and-secrets-runbook.md`.

---

## 🔧 Redesign / minor / parked
- [ ] **[you direction → me]** **Compliance calendar** redesign flagged (currently a
  deadline calculator + eligibility checker; user-owned direction).
- [ ] **`/llms-full.txt`** — on-site path is a dead 404 (OPEN: 301 → R2; curated `/llms.txt` is live).
- [ ] **Wikidata item creation** for articles still missing a QID — needs Chrome.
- [ ] **[you]** Switch ms IG flagship login email to `ig-ms@negaraku.md`.
- [ ] **PARKED "will consider"** (cloudsmagazine study): per-article lastVerified date,
  top quick-answer table, auto-TOC, scam-awareness module.

---

## ✅ Recently completed (for context)
- **喝 Drink pilot + tranche 2** (8 drinks × 13 langs) · **dish cards** (33 × 13) ·
  **festival cards** (16 × 13) · **scenario band** (11 scenes) · **kopi-lingo-decoder**.
- **Tools hub** + income-tax/PCB calculator · **llms.txt** curation · **industries atlas**
  (46 sectors) · **sponsor funnel** · **MICHELIN subcategory** rework.
- **All 13 languages LIVE** (ms/en/zh/ta/ja/ko/th/vi/id/ar/hi/es/fr) · GA4 + consent
  banner + `/analytics` · analytics stack v2 + edge cache · menu/start-page redesign +
  Reader/Contributor view + GitHub OAuth · article-lifecycle system · 3R publish-gate
  hardening · HF dataset ×13 · Wikidata QID sweep · GSC-404 triage · ~895 cross-links.
