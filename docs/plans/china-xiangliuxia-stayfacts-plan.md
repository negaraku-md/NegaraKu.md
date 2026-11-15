# 想留下 "Thinking of staying in Malaysia" — stayFacts layer

**Status:** infra + flagship pilot built (held). Growth-strategy **P1** — the content
line that funnels most directly to the 1company professional-services funnel.
**Owner decision captured 2026-11-15:** user chose this pivot after the 喝 discrete-drink
track completed (23 drinks × 13 langs, live).

## The move (same shape as the 吃喝玩乐 card layers)

The deep settling content **already exists** — a 30-article `settling-in/` corpus
(MM2H, PVIP, PR, De Rantau, employment pass, dependant passes…), `property/foreigners-
buying-property`, `cost-of-living/` (7), `taxation/expatriate-and-non-resident-tax`,
the Sdn Bhd suite, `education/international-schools`, `healthcare/`. Like the drinks,
the gap is **not new articles** — it is the **AI-citable sourced bottom-line card** on
each high-intent "can I / how do I stay" decision, plus **China-audience framing in the
ZH layer**.

Vehicle = new **`stayFacts{who, how, cost, watch, next}`** frontmatter card — sibling of
`dishFacts`/`drinkFacts`/`festivalFacts`. All fields optional, **freshness-neutral** (NOT
in `TRANSLATED_FIELDS`), rendered as the "At a glance / 速览" grid under the 30-sec answer.

### Positioning guard (protects the moat)
The site is **neutral, 13-lang, understand-Malaysia authority** — NOT a China-only or
relocation-sales vertical. So:
- The card carries **universal relocation facts**, equally valid for any foreigner.
- The **ZH rendering + the question priority** (property, MM2H, business setup, schooling,
  healthcare, Chinese community) serve the China 想留下 audience; EN framing = "making
  Malaysia home."
- **No transaction / no "best agent" / no advice** — sourced facts only, link OUT to
  official sources and (phase 2) the disclosed 1company CTA.

### Accuracy contract (CRITICAL — immigration / property / tax / money)
Every value **durable + sourced from the article**. Describe the **shape** of the rule,
**never a rot-prone exact figure** (deposit amounts, price thresholds, tax rates are
revised). `cost` = "varies — confirm current on <official site>", never a number that
silently goes stale. `watch` carries the key limit/misconception. Apply reviewer
`ashton-tan` where `sensitivity ≠ none`.

## Built this session (HELD)
- `stayFacts` schema → `src/content.config.ts` (after `drinkFacts`).
- Render block → `src/components/ArticleView.astro` (after `drinkFacts`; reuses `.l-facts`
  / `.facts` grid, `ICON.facts`, 13-lang `L()` labels, `iso()` RTL).
- **Pilot: `settling-in/mm2h-long-stay-visa` (en)** — 5-row card sourced entirely from the
  article's MOTAC-verified content; "confirm current figures on mm2h.gov.my" in `cost`.

## Fan-out set (existing masters; populate `stayFacts` from each article's own sourced content)
1. `settling-in/mm2h-long-stay-visa` — ✅ pilot
2. `property/foreigners-buying-property` — minimum price floors vary by state + change → shape only
3. `settling-in/permanent-residency-malaysia`
4. `settling-in/premium-visa-programme-pvip`
5. `settling-in/moving-to-malaysia-first-steps` (the sequencing hub)
6. `settling-in/de-rantau-nomad-pass`
7. `settling-in/employment-pass-malaysia`
8. `cost-of-living/cost-of-living-overview` (or `is-malaysia-affordable-for-expats`)
9. `business/register-sdn-bhd` or `what-is-sdn-bhd` — 100% foreign-owned company setup (strong 1company funnel)
10. `taxation/expatriate-and-non-resident-tax` — resident vs non-resident, territorial
11. `education/international-schools`
12. `healthcare/how-malaysian-healthcare-works` (+ `medical-insurance`)

~12 flagship cards. Then **13-lang rollout**: translate the `stayFacts` block into each
lang each article already has (12 per-lang agents, house register from an existing
translation; preserve numbers / law cites / proper nouns; keep durable timing + "confirm
current" hedges). Freshness-neutral → no stamp churn.

## Phase 2 (after card layer)
- A **想留下 / "Make Malaysia home" guided path** (reuse `GuidedPath`, like the eat-drink-play
  scenario band) surfacing these articles as a decision journey.
- **Funnel wiring:** verify/extend the disclosed **1company sponsor CTA** (`sponsor.ts` /
  `SponsorCTA`) on the business/tax/company-setup articles — where 想留下 converts.

## Gotchas
- Adding a frontmatter **schema field** forces a dev restart → stale `.astro` cache → false
  "Duplicate id" warns → `npm run clean` + restart (CLAUDE.md gotcha). Prod prebuild auto-cleans.
- `catch` is a JS-reserved-ish word → field named **`watch`** (label "What to watch").
