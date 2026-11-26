# Doing-Business pillar — category growth plan

**Date:** 2026-11-27
**Owner:** Ashton Tan
**Source data:** GA4 property 559513299 (G-KKQ57H11FV), all-channel sessions 29 Oct – 25 Nov 2026 (28 days); Google Search Console, top-1000 Doing-Business pages, same window; repo article coverage counts.

This plan answers "research and propose a new or existing category" for the **Doing Business in Malaysia** pillar. It is grounded in demand data (all channels, not Google-only) cross-referenced against coverage depth. It commits to three moves — **deepen one existing category, ship one cross-category guide, and fix the real cause of a fourth category's weakness** — and explicitly rejects two tempting-but-wrong moves.

---

## 1. The evidence

All 10 Doing-Business leaf categories, demand vs. coverage:

| Category | Articles | GA4 sess. (all-chan, 28d) | GSC clicks | GSC impr. | GSC CTR | Sessions/article |
|---|---:|---:|---:|---:|---:|---:|
| **Employment & HR** | 55 | 129 | 618 | **31,830** | 1.9% | **2.35** |
| **Industries** | 46 | 113 | 471 | 17,742 | **2.7%** | **2.46** |
| Business | 135 | 245 | 640 | 29,588 | 2.2% | 1.81 |
| Taxation | 97 | 171 | 700 | **39,412** | 1.8% | 1.76 |
| **Companies** | 33 | 27 | 162 | 17,551 | **0.9%** | 0.82 |
| Company-secretary | 64 | 54 | 430 | 22,003 | 2.0% | 0.84 |
| Finance | 31 | 32 | 72 | 4,918 | 1.5% | 1.03 |
| Technology | 17 | 19 | 65 | 3,372 | 1.9% | 1.12 |
| Accounting | 29 | 9 | 80 | 5,303 | 1.5% | 0.31 |
| Audit | 25 | 8 | 87 | 4,760 | 1.8% | 0.31 |

**Channel context (why "all-channel" matters):** of 803 total Doing-Business sessions in the window, ~25% came from **non-search** channels — Organic Social 91 (the Facebook auto-poster), Direct 101, AI Assistant 10. GSC alone is blind to all of these. GA4 is heavily consent-gated (803 GA4 sessions vs 3,610 GSC Google clicks), so treat GA4 as the true channel/country **mix** and GSC as the fuller **search-volume** count.

Three patterns, three different moves:
- **Employment & HR** and **Industries** pull the most demand per article — demand-dense, under-stocked → **deepen**.
- A whole high-value journey (foreign company/investor setup) is **fragmented** across business/employment/taxation → **stitch with a guide**.
- **Companies** has 17,551 impressions but 0.9% CTR → looks like a title problem, **is not** (see §4).

---

## 2. Move 1 — Deepen **Employment & HR** (existing category)

**Why:** 31,830 Google impressions and 129 all-channel sessions from only 55 articles — the highest demand-per-article in the pillar on the largest impression base. It is also core 1company advisory territory (payroll/HR), so it feeds the sponsor funnel, not just traffic. The core compliance topics are already covered; the gaps are specialised/emerging topics and the **foreign-talent** sub-cluster.

**Backlog (~25 articles, grouped). Each follows the article standard — full pipeline, every claim cited, sensitivity-gated reviewer where needed.**

HR-compliance deepening:
1. `sick-leave-and-hospitalisation-malaysia`
2. `medical-certificate-mc-rules-malaysia`
3. `bonus-and-13th-month-malaysia`
4. `salary-payment-rules-malaysia` (Wages under the EA — when/how salary must be paid)
5. `notice-period-and-payment-in-lieu-malaysia`
6. `constructive-dismissal-malaysia`
7. `show-cause-letter-and-misconduct-malaysia`
8. `resignation-process-malaysia`
9. `part-time-employees-regulations-2010-malaysia`
10. `internship-and-interns-malaysia`
11. `rest-day-and-off-day-pay-malaysia`
12. `shift-work-malaysia`
13. `garden-leave-malaysia`
14. `employee-handbook-hr-policy-malaysia`

Foreign talent / immigration-for-employers (also feeds Move 2 and the funnel):
15. `employment-pass-categories-ep-i-ii-iii-malaysia`
16. `expatriate-services-division-esd-myxpats-malaysia`
17. `dependent-pass-and-ltsvp-malaysia`
18. `professional-visit-pass-malaysia`
19. `foreign-worker-quota-and-fwcms-malaysia`
20. `source-countries-and-sectors-foreign-workers-malaysia`

Industrial relations / disputes:
21. `industrial-court-process-malaysia`
22. `mediation-industrial-relations-department-malaysia`

Emerging:
23. `employee-monitoring-and-privacy-malaysia`
24. `workplace-mental-health-malaysia`
25. `right-to-disconnect-malaysia` (frame as proposed/comparative — confirm MY status before publishing)

---

## 3. Move 2 — Ship the **"Expanding into Malaysia"** guide (cross-category) — ✅ DONE

**Why not a new category:** the foreign-investor setup cluster (foreign-ownership 423 impr, work passes, expatriate tax, foreign-source income, foreign exchange) is **fragmented** across four categories, yet it's 1company's core client — foreign companies setting up here. A new top-level category would fragment further and start empty (an empty category reads as abandoned). The right structure is a **guided path** that stitches existing articles into a journey — mirroring the "moving-to-malaysia" guide on the personal side.

**Status:** shipped — added to `src/lib/guides.ts` as guide id `expanding-into-malaysia` (pillar `doing-business`, 13 languages, 8 steps). It renders on the Doing-Business hub as a GuideCard and at `/guide/expanding-into-malaysia`. Steps (all verified to exist):

1. `business/foreign-ownership-malaysia` — can a foreigner own the business?
2. `business/business-structures-malaysia` — which structure?
3. `business/register-sdn-bhd` — incorporate
4. `business/foreign-exchange-policy-malaysia` — moving capital in/out
5. `employment/employment-pass-malaysia` — work pass for you / key staff
6. `employment/hiring-foreign-workers-malaysia` — hiring foreign + local workers
7. `taxation/expatriate-and-non-resident-tax` — how you & expat staff are taxed
8. `taxation/tax-incentives-directory` — incentives you may qualify for

As Move 1's foreign-talent articles (15–20) land, promote the richest into the journey (e.g. swap/append EP categories, ESD/MYXpats).

---

## 4. Move 3 — **Companies**: fix the real cause (NOT the titles)

**The tempting move is wrong.** Companies shows 17,551 impressions at 0.9% CTR — the instinct is to rewrite titles. **Checked first: the seoTitles are already well-optimised for informational intent**, e.g.:
- Genting → *"Genting Group: Structure, Casino Licence and Plantations"*
- Tenaga → *"Tenaga Nasional Berhad (TNB): History, Grid Monopoly & NETR Role"*
- GLCs → *"Malaysia's GLCs and GLICs: Khazanah, EPF, PNB, KWAP, LTAT, Tabung Haji"*

**Actual cause:** these are company-profile pages ranking on page 2–3 for **brand-name queries** (Genting 2,299 impr/3 clicks; MAHB 902/3; Tenaga 1,020/9) where the official site, Wikipedia and Bloomberg win the click. That is a **ranking-position / authority** problem, not a title problem. Retitling cannot move it.

**The real levers (freshness-neutral, ready to run):**
1. **Internal-link equity.** The highest-impression profiles are badly under-linked internally: Genting has **2** inlinks (2,299 impr), MAHB **2** (902 impr), Tenaga **8** (1,020 impr) — vs Sime Darby 77, KWAP 34, Maybank 33. Run `scripts/suggest-crosslinks.mjs` targeting `/companies/*` to raise internal PageRank into the under-linked, high-impression profiles. Prime, obviously-correct links to add: `energy/energy-sector-overview` + `energy/electricity-supply-industry-reform-mesi` → Tenaga; `economy/khazanah` + transport/aviation pages → MAHB; economy/tourism pages → Genting (note: Genting is `sensitivity: religion` — link from economy/tourism, not religious contexts). Must run under `check-internal-links --strict` before pushing (links are enforced at publish).
2. **Entity signals.** Fill Wikidata QID gaps. `malaysia-airports-mahb` has a single clean entity but no `wikidata` QID — add it (verify the QID, don't guess). `glcs-and-glics-in-malaysia` is a concept page spanning many entities — legitimately no single QID; leave it.
3. **Time + backlinks.** Company-profile ranking is a long game; the structural lever is domain authority (see the SEO channels backlog). Don't over-invest content here.

**Not done in this pass** deliberately: no retitle (wouldn't work) and no hand-wired links (editing master + 12 translations per link, with publish-time link enforcement, is unsafe to ship without a full strict build — which this machine OOMs on). The link campaign is the next deliberate pass, via the tool + strict link check.

---

## 5. Non-moves (explicit)

- **Accounting (0.31 sess/article) & Audit (0.31):** their small numbers are **correct** — practitioner topics with low public search. Do **not** add volume. If anything, reframe a handful toward consumer intent ("do I need an audit?", "e-invoicing deadlines for SMEs") to convert the few impressions they get.
- **New top-level category:** rejected for now. Every high-demand cluster (foreign talent, grants/incentives) belongs inside existing categories; a new node fragments rather than clarifies. The only cluster with *no* existing home is **Intellectual Property** (MyIPO trademarks/patents/designs) — hold as the sole new-category candidate if we later choose to add one.

---

## 6. Execution order & status

1. ✅ **Guide shipped** — `expanding-into-malaysia` in `src/lib/guides.ts` (this change; local commit, not pushed).
2. ▶ **Companies link campaign** — run `suggest-crosslinks.mjs` → review → apply → `check-internal-links --strict` → push. Fill MAHB Wikidata QID. (Ready on go-ahead.)
3. ▶ **Employment sprint** — write backlog §2 in demand order (foreign-talent + HR-compliance first), per article standard, sensitivity-gated reviewer = ashton-tan where flagged.

Each push is a live deploy — batch and verify the final Pages run lands.
