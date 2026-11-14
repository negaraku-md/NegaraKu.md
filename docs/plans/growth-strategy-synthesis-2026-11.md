# NegaraKu.md — Growth Strategy Synthesis (2026-11)

**Source:** the 2026-11-13/14 strategy session (吃喝玩乐 → understand-a-country
benchmarks → hook→depth → China-audience data). This doc **consolidates and
prioritizes** everything; it supersedes the "4th pillar" decision in
`eat-drink-play-plan.md` (see §2).

---

## 0. The one throughline (the moat every initiative must reinforce)

NegaraKu's single defensible moat = **the neutral, current, AI-citable, multilingual
authority for *understanding* Malaysia.** It beats the three incumbent content types:
- **Stale foreign encyclopedias** (Wikipedia/Britannica — search found them still naming
  Mahathir PM / Muhammad V King; NegaraKu is maintained + review-tracked),
- **Propaganda-tinted state portals** (China.org / Chinese Culturepedia model — authoritative
  but not neutral; NegaraKu is independent),
- **Ephemeral 小红书/攻略** (useful but unsourced, contradictory, rots).

**Rule: every initiative must DEEPEN this authority, never dilute it into "a
lifestyle / review / travel platform."** That one rule resolves every design choice below.

---

## 1. Context — shipped today (6 commits, LIVE)
A–Z category + topic sorting · card-grid "Per page" control · MICHELIN Guide →
`michelin-guide` subcategory (+redirects) · 309 missing Japanese subcategory labels ·
Google rating snapshots on all 70 MICHELIN restaurants · "Regional cuisine" dedup.

---

## 2. Strategic conclusions locked this session (decisions + boundaries)

1. **NOT a transaction platform.** Transaction is already owned (Grab "5-Star Eats"
   Tourism-Malaysia-endorsed for VMY2026, Klook, Google Maps, foodpanda). We are the
   **decision/knowledge layer ABOVE the checkout** and **link out** to them (affiliate upside).
2. **吃喝玩乐 = an ENTRY LAYER / scenario skin over the knowledge base — NOT a 4th pillar
   or 4 columns.** A prominent lifestyle pillar would (a) set transaction expectations we
   can't meet, (b) cause AI to misclassify the site as a lifestyle-service platform,
   diluting the moat. **This revises `eat-drink-play-plan.md`'s "4th pillar destination".**
3. **Hook → depth contract.** Every experience/scenario entry must link INWARD to ≥1
   cited knowledge entry. The hook is 吃喝玩乐/scenarios; the payload is 国情 knowledge.
4. **Dual mission** (mirrors China Daily's **Culturepedia** = understand + **China Bound**
   = experience): *Understand Malaysia* (know) + *Experience Malaysia* (吃喝玩乐, as hook) —
   both independent, neutral, multilingual, AI-native.
5. **坑二 rule (anti-rot).** The ONLY "best-X / which-shop" surfaces allowed:
   (a) **authoritative + bounded** curation (MICHELIN — their judgment, 70 venues, cited), or
   (b) **auto-refresh** (live Worker, e.g. dish leaderboards). Everything else = **stable
   knowledge** (history / craft / ethnicity), never hand-maintained perishable top-lists.
6. **Monetization = affiliate (Klook/Grab/foodpanda outbound) + the 1company funnel.
   NOT AdSense** (assessed 2026-11-13 → ~$10–20/mo, dilutes brand + tanks speed; rejected,
   `negaraku-adsense-monetization`).
7. **Data finding (GSC).** 中文(zh) is the **3rd-biggest language** (874 clicks/mo); zh
   demand = **public-safety, law, taxation, settling-in, government, business, property,
   healthcare, transport** — the serious **"想留下" segment, NOT food/tourism.** That
   segment is **the only one that converts to the 1company / 1financing funnel** (MM2H,
   company setup, tax, visa). → **serious China-fact content = best audience AND best
   funnel economics**, better than general 吃喝玩乐.

---

## 3. Prioritized roadmap

| # | Initiative | Reader value | Effort | Moat-fit | Funnel | Priority |
|---|---|---|---|---|---|---|
| **P1** | **China "想留下" Fact Cards** | High (data-backed demand) | **Low** (reuse keyTakeaways/sources/related; +1 field) | ✅ deepens authority | ✅✅ best (→1company) | **NOW** |
| **P2** | **Guided Paths (主题导览)** | High (learn, not just look up) | Low–Med (curation + reuse `related[]`) | ✅ | ○ | High |
| **P3** | **吃喝玩乐 entry layer** (tags + "从生活进入" lens + fill 喝 Drink + "Malaysia Now" background) | High (frequency/return) | Med | ✅ (as hook, not platform) | ○ brand/reach | Med |
| **P4a** | Dish Top-10 leaderboards | High | Med | ✅ (auto-refresh) | ○ (+affiliate) | **Gated** (Google billing) |
| **P4b** | "Malaysia at a Glance" country-basics hub | Med–High (SEO/AI anchor) | Low (content exists) | ✅✅ | ○ | Med |
| **P4c** | "Ask about Malaysia" on-site AI Q&A | High (engagement, AI-native proof) | **High** (LLM API + anti-hallucination guardrails) | ✅ if corpus-grounded | ○ | Later |
| **P4d** | Affiliate links (Klook/Grab/foodpanda) on discovery | — | Low | neutral | ✅ passive income | After P3 |

Already-live (don't rebuild): review-date/reviewer + chain-of-custody, source count,
30-sec answer/summary/raw-.md (AI summary), keyTakeaways+FAQ (key facts), `/graph`.
**Skip:** "Summarize for AI" API button (redundant with summary + raw-.md + llms.txt).

---

## 4. Phase detail

### P1 — China "想留下" Fact Cards  ← START HERE
- **Format:** per high-demand topic, a card = **3–5 sourced key points** (reuse
  `keyTakeaways`) + **1 「常见误解 / common misconception」** (NEW `commonMisconception`
  field — the only schema add; a reusable site-wide element) + **source + review date**
  (reuse trust system) + **deep link** to the full 国情 entry (reuse `related`).
- **First 10 (data-driven):** 落地签证90天 · MM2H第二家园 · 治安与防诈 · 开公司/经商 ·
  个人所得税 · 外国人购房 · 看病/医疗 · 交通与支付(Grab/Touch'n Go) · 华人与族群结构
  (22.1% + 地域分布) · 清真与饮食禁忌.
- **Funnel bridge (honest):** on MM2H / company-setup / tax cards, a disclosed CTA to
  1company / 1financing services (`negaraku-sponsor-funnel`). This is the one segment
  that converts.
- **Guardrails:** safety/law/government/族群 are near-sensitive → misconception correction
  must be **neutral + each point sourced + reviewer `ashton-tan`** (`negaraku-reviewer-default`).
- **Distribution caveat:** on-site cards = ~free; **小红书/微信 is a SEPARATE channel**
  (accounts, 图文/笔记 format, ongoing ops) — ship on-site first, decide channel later
  (connect to `baidu-china-reach-stage2.md` / `seo-channels-roadmap.md`).
- **Generalize:** it's a repeatable **"newcomer fact pack"** pattern — China first (biggest
  demand + best funnel), reusable for ja/ko/ar/th inbound later (multilingual moat).

### P2 — Guided Paths (主题导览)
The one genuinely-new feature everyone converged on; the **hook→depth bridge**. 5–8
curated linear reading paths, each 5–8 stops linking to EXISTING entries (reuse
`related[]` ~895 links + `scripts/suggest-crosslinks.mjs`). Data: `paths.ts` + a
`GuidedPathView` component + 13-lang titles. Examples: 「一杯拉茶里的马来西亚」,
「榴莲季背后的农业与气候」, 「从茨厂街到十五碑:三种饮食传统」, 「MM2H 到落地生活」.

### P3 — 吃喝玩乐 entry layer (NOT a pillar)
Scenario tags `#吃#喝#玩#乐` on existing entries + a "从生活进入 / Explore through life"
lens/filter + **fill the 喝 Drink content authority** (kopitiam/coffee/teh-tarik — the
unowned gap) + **"Malaysia Now"** = event *background* only (semi-automated from the
holidays data + FB engine `negaraku-fb-event-campaign`; NOT event promotion/ticketing).

### P4 — Gated / parallel bets
Dish leaderboards (on Google billing, `negaraku-dish-top-places`), Malaysia-at-a-Glance
hub, "Ask about Malaysia" Q&A (scope cost + guardrails first), affiliate links.

---

## 5. Guardrails (the don'ts)
- Don't build booking/delivery/ticketing (dilutes moat + unmeetable expectation).
- Don't make 吃喝玩乐 a top-level pillar / 4 columns (AI misclassification).
- Don't hand-maintain perishable "best shop" lists (坑二) — only MICHELIN or auto-refresh.
- Don't copy review text (ToS/copyright) — synthesize neutrally + cite (`reviewSummary` pattern).
- Don't adopt "official-position / 立场文件" framing on sensitive topics — neutrality IS the moat.
- Don't run AdSense (rejected).

---

## 6. Recommended first step
**Build the MM2H fact-card pilot** (highest demand × best funnel): add the
`commonMisconception` field + a `FactCard` component, ship one MM2H card end-to-end
(3–5 sourced points + 1 misconception + review date + deep link + disclosed 1company CTA),
for review before rolling the other 9. Lowest cost, best economics, pure moat-reinforcement.

---

## 7. Related plans & memory
`eat-drink-play-plan.md` (superseded on the pillar point by §2), `baidu-china-reach-stage2.md`,
`seo-channels-roadmap.md`, `malaysia-tools-hub-plan.md`. Memory: `negaraku-eat-drink-play`,
`negaraku-dish-top-places`, `negaraku-adsense-monetization`, `negaraku-sponsor-funnel`,
`negaraku-reviewer-default`, `negaraku-no-auto-push`.
