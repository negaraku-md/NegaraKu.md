# NegaraKu.md — Website Improvement Plan

_Drafted 2026-10-20. Mission anchor: **"let the world know about Malaysia."**_
Owner tags: **[you]** = needs your accounts/credentials/decisions · **[me]** = Claude can execute.

---

## The one-line diagnosis

The site is **content-mature and infrastructure-mature** — 13 languages, ~1,080
articles each, honest sourced content, AI-friendly plumbing, good Core Web Vitals,
full analytics. **The bottleneck is no longer the product; it's discovery and
authority.** GSC shows the site ranking (≈58k impressions) but at **avg position
~12.5** — it wins long-tail queries and loses head terms, and AI answer-engines
only pull top-ranked pages into their candidate set. So the work that moves the
mission now is **off-page reach + on-page authority signals**, not more articles.

Everything below is ordered by **impact ÷ effort against that diagnosis.**

---

## P0 — Do first (highest leverage, mostly ready or cheap)

### 1. Finish the topic-hub + internal-linking pass  **[me]**
*Why:* the only purely-internal lever to lift head-term ranking; consolidates
authority onto pages that can then enter AI candidate sets.
- [x] `business-structures-malaysia` EN master wired as a hub (done 2026-10-20).
- [ ] Propagate the hub links to its 12 translations + `translate:stamp` (else stale badges).
- [ ] **Spoke → hub backlinks**: each entity/comparison article links *back* to the hub with a keyword anchor (this is what makes the hub rank). Reuse `scripts/suggest-crosslinks.mjs`.
- [ ] Build 3–4 more hubs on head-term clusters: **taxation** (SST/income tax/e-invoicing), **living/relocation** (visas, cost of living, healthcare), **employment** (EPF/SOCSO/passes). Same pattern.

### 2. Ship LinkedIn (built, paused on credentials)  **[you] → [me]**
*Why:* the fastest new backlink + reach channel; engine is already built and dry-run-verified.
- [ ] **[you]** Verify business email on the Community Management API; mint `w_organization_social` token; add `LINKEDIN_ACCESS_TOKEN` secret.
- [ ] **[me]** Uncomment the schedule in `linkedin-backlog.yml`.

### 3. Fix the broken internal links  **[me]**
*Why:* dead links waste crawl budget + hurt UX/SEO on real pages.
- [ ] ~75 broken *relative* links in ~18 source articles (`docs/plans/gsc-404-action-plan.md`). `check-internal-links` misses these — needs a body-link audit against real routes.

### 4. Start an owned audience: email newsletter  **[you] + [me]**
*Why:* the only algorithm-independent channel; compounds; turns one-time SEO/AI visitors into returning readers. You have per-language brand emails already.
- [ ] **[you]** Pick a provider (Buttondown/Listmonk/MailerLite) + verify sending domain.
- [ ] **[me]** Add a subtle subscribe module + a weekly "what changed" digest from the changelog/most-read.

---

## P1 — High impact, more effort

### 5. Authority & trust (E-E-A-T) — win head terms + AI citations  **[you] + [me]**
*Why:* most content is "AI-assisted, not yet expert-reviewed." Head terms and AI
citations favour demonstrable expertise. Trust is already your differentiator —
make it legible.
- [ ] **[you/ashton-tan]** Human-review the **top ~50 highest-impression articles** (from GSC) + the ~196 sensitive ones; flip reviewer from null → named expert.
- [ ] **[me]** Clear the `verificationNeeded` backlog on high-traffic pages first (pillar-by-pillar sweep exists).
- [ ] **[me]** Surface reviewer credentials/bylines more prominently (author + reviewer + "last reviewed" already in data).

### 6. Turn GA4 + GSC into an optimisation loop  **[me]**
*Why:* now that GA4 is live, stop guessing. Find and fix the biggest opportunities.
- [ ] **High-impression / low-CTR pages** → rewrite titles + meta (position 11–20 "striking distance" queries are the cheapest ranking wins).
- [ ] **High-exit / low-engagement pages** (GA4 engagement) → improve intros, add internal links.
- [ ] Monthly "opportunities" report from GSC `byMonth` + GA4 once data accrues.

### 7. Expand distribution channels  **[you] + [me]**
- [ ] **Instagram** — create `.en/.zh/.ta` accounts + App Review; build the IG poster branch.
- [ ] **Short-form video** — the biggest untapped reach (TikTok/Reels/Shorts). Needs a text→video pipeline; start with "fact-of-the-day" cards you already generate.
- [ ] **Syndication** — Google News Publisher + Flipboard (both reward fresh, sourced content).
- [ ] **Hugging Face dataset** — expand from 4 langs to all 13 (broad AI training-data presence).

### 8. Engagement & stickiness  **[me]**
- [ ] **Interactive tools as linkable assets** — the compliance-calendar calculator, a knowledge graph, a "which business structure?" picker. Tools earn backlinks that articles don't.
- [ ] **Activate the contribution funnel** — the Reader/Contributor system + `/workspace` exist; add a clear "suggest an edit / claim a review" path to convert expert readers into reviewers (directly feeds #5).

---

## P2 — Strategic, do when P0/P1 are moving

- [ ] **Wikipedia / Wikidata citations** (playbook written; highest-risk, do sparingly) — the single biggest authority lever if done cleanly.
- [ ] **X/Twitter + Telegram** broadcast (extend the poster engine).
- [ ] **Embeddable widgets** (compliance calendar / fact-of-the-day) — backlinks + brand reach on other sites.
- [ ] **Local-Malaysia reach** — Malaysians are a small share of readers; consider ms-first social + local community seeding if serving locals is a goal.
- [ ] **Sustainability** — funding visibility (donate/sponsor), and an editorial cadence so `reviewDue` articles get refreshed, not just flagged.

---

## Suggested 6-week sequence

| Week | Focus |
|------|-------|
| 1 | P0.1 finish business hub (translations + backlinks) · P0.3 broken-link fix |
| 2 | P0.2 LinkedIn live · P0.4 newsletter stood up |
| 3 | P1.6 GSC striking-distance title rewrites (first batch) · 2nd hub (taxation) |
| 4 | P1.5 expert review of top-20 articles · verificationNeeded sweep |
| 5 | P1.7 Instagram + HF dataset expansion |
| 6 | P1.8 one interactive tool shipped · measure & re-prioritise from GA4 |

---

## What NOT to spend effort on right now
- **More articles.** Coverage is already deep; marginal new articles don't move discovery.
- **More languages.** 13 is plenty; reach within them is the gap, not new ones.
- **Re-architecting.** The stack is sound; resist rebuilds.

## Guiding principle
Every item ties back to the mission funnel: **be found → be trusted → be useful →
bring them back.** The site already nails "be useful"; the plan weights everything
toward **be found** and **be trusted**, because that's where the mission is stuck.
