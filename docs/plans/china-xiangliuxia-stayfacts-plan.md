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

## Fan-out set — ALL 12 EN MASTERS DONE (2026-11-15, sourced per-article, durable-only)
1. `settling-in/mm2h-long-stay-visa` — ✅ pilot (`766bfdb79`)
2. `property/foreigners-buying-property` — ✅ s.433B consent + state price floors → shape only
3. `settling-in/permanent-residency-malaysia` — ✅ Entry Permit s.10, discretionary, not citizenship
4. `settling-in/premium-visa-programme-pvip` — ✅ Immigration/JIM, not MM2H, fees omitted
5. `settling-in/moving-to-malaysia-first-steps` — ✅ sequencing hub (pass first)
6. `settling-in/de-rantau-nomad-pass` — ✅ MDEC, Tech/Non-Tech floors → shape only
7. `settling-in/employment-pass` — ✅ (slug is `employment-pass`, not `-malaysia`); 3 categories, employer-sponsored
8. `cost-of-living/cost-of-living-overview` — ✅ DOSM 12 categories, ~2.6:1 state spread (no invented school/healthcare figures)
9. `business/register-sdn-bhd` — ✅ SSM/SSM4U, resident director, 100% foreign (sector-specific), RM1 paid-up caveat (strong 1company funnel)
10. `taxation/expatriate-and-non-resident-tax` — ✅ s.7(1) 182-day residence rule, LHDN, rates omitted
11. `education/international-schools` — ✅ 5 approved curricula, RM5k deposit cap, fees → shape only
12. `healthcare/how-malaysian-healthcare-works` — ✅ public vs private, Fees Act 1951 non-citizen schedule

**12/12 EN flagship cards LIVE.** Method: 11 parallel extraction agents (one per master),
each read its own article and returned durable who/how/cost/watch/next (JSON); assembled +
injected as single-quoted YAML (`scratchpad/inject-stayfacts.mjs` → doubles apostrophes,
avoids inner-double-quote build gotcha); js-yaml + validate-frontmatter + astro sync all green.
No `npm run clean` needed — schema already shipped in `766bfdb79`, so these are content-only.

**13-LANG ROLLOUT DONE (2026-11-16).** All 12 articles now carry the `stayFacts` card in all
13 langs (en master + 12 translations = 144 translation files + 12 masters). METHOD: one agent
per language (12 agents: ms zh ta ja ko th vi id ar hi es fr), each read all 12 English blocks
(`scratchpad/en-blocks.json`) + each article's existing `.{lang}.md` sibling for house register,
translated the 5 fields faithfully (preserved numbers / law cites / acronyms / URLs / proper nouns;
kept every "confirm current on <official site>" hedge), wrote `scratchpad/tr-{lang}.json`; then
`scratchpad/inject-stayfacts-lang.mjs` injected each as single-quoted YAML. GATE: 144/144 js-yaml
clean (5 fields), validate-frontmatter 0/0, astro sync, translation-sync **0 stale / 0 orphaned**
(freshness-neutral confirmed — stayFacts not in TRANSLATED_FIELDS). ar handled RTL (Latin tokens
stay Latin, renderer isolates); id/ja/ko matched each article's own term choices.

## Tranche B — 5 more high-intent 想留下 decisions, 13 langs (2026-11-17)
Extended the proven card to the settling decisions that lacked it, after EDP P1–P4 shipped
and its only remaining items proved billing-gated. Picked the highest-intent "can I / how do I
stay" gaps, all `sensitivity: none` (same risk profile as the live 12): **dependant-social-visit-
passes** (family), **student-pass** (education), **malaysia-entry-visa-requirements-by-nationality**
(the entry gate / guided-path opener), **immigration-overstay-and-blacklist** (the critical watch),
**professional-visit-pass** (short-term project work). EN cards authored by hand (durable/shape-only,
law cites + acronyms preserved, hedged to official portals — no rot-prone fees/dates), injected via
`scratchpad/inject-stayfacts-b.mjs`; 12 per-language agents + `scratchpad/inject-stayfacts-b-lang.mjs`
for the 60 translations. GATE: 65/65 js-yaml clean, validate-frontmatter **0/0**, translation-sync
**0 stale / 0 orphaned** (freshness-neutral re-confirmed). **HELD — `malaysian-citizenship-by-
registration`** (`sensitivity: constitution`, reviewer `ashton-tan`): not shipped to a live deploy
without ashton-tan's actual review. 65 files = 5 masters + 60 translations.

## Tranche C — 7 more settling decisions, 13 langs (2026-11-17)
Worked the remaining uncarded `settling-in/` backlog, taking every `sensitivity: none`
decision with real substance that serves the "making Malaysia home" / exit-and-logistics
spine: **bringing-pets-into-malaysia** (relocating with a pet), **shipping-belongings-and-car**
(household + vehicle import), **document-legalisation-and-apostille-malaysia** (the cross-cutting
enabler — Malaysia is NOT in the Hague Apostille Convention), **sabah-sarawak-entry-requirements**
(the East-Malaysia autonomous-immigration gotcha), **mykad-and-identity-documents** (MyKad/MyPR/
MyKAS vs i-Kad), **leaving-malaysia-tax-clearance** (the SPC/CP21 exit obligation — employer's duty),
**registering-a-marriage-civil** (civil, non-Muslim). NOTE mixed masters: 4 `en`-master + 3 `ms`-master
(document-legalisation, sabah-sarawak, mykad) → a master-language-aware injector places the card in
each file's own language (base `<slug>.md` = master lang; every other lang in `<slug>.<lang>.md`).
METHOD (the reusable pipeline, hardened): 7 parallel extraction agents (one per article, each read
ONLY its own article → durable who/how/cost/watch/next, shape-only, law cites + acronyms preserved,
every figure hedged to the official portal) → `scratchpad/en-blocks-c.json` → 12 per-language agents
→ `scratchpad/assemble-cards-c.mjs` merges into `scratchpad/cards-c.json` (13 langs) →
`scratchpad/inject-stayfacts-c.mjs` (master-aware). GATE: 91/91 js-yaml clean + all 91 cards complete,
validate-frontmatter **0 error / 0 warning**, translation-sync **0 stale / 0 orphaned** across 1403
topics (freshness-neutral re-confirmed). Content-only (schema live) → no `npm run clean`. 91 files
= 7 masters + 84 translations.

**Skipped (off the staying funnel):** `immigration-department-jim` (agency explainer, not a decision),
`renewing-your-passport` (for citizens, not the deciding-to-stay reader).

## Tranche D — 3 sensitive settling decisions, 13 langs (2026-11-17) — REVIEWED + SHIPPED
The 3 cards held from Tranches B/C for sensitivity review. Reviewer `ashton-tan` was shown the drafted
master cards (watch fields, statutory cites, framing) and the live-deploy gate in-session, and directed
shipping. The cards derive only from each already-reviewed, already-live article (sources reviewed
2026-07-25 / 2026-08-08), add no new claims, hedge every figure, and keep every statutory cite verbatim.
Slugs: **getting-married-in-malaysia** (`religion`, en master — comparative two-systems overview: civil
JPN/Act 164 vs state Islamic family law, Ninth Schedule State List; watch = no religion-neutral option),
**registering-a-muslim-marriage** (`religion`, en master — Act 303 ss.8/13/14(3)/18, SPPIM/e-nikah state
coverage, wali/akad nikah, Syariah-referral triggers; ages kept behind the s.8 cite, not pinned, since
enactments differ by state and the age is under reform debate), **malaysian-citizenship-by-registration**
(`constitution`, **ms master** — Perkara 15/15A/18/19/26(2), Jadual Pertama, Borang A/B, JPN/KDN; watch =
discretionary `budi bicara`, not a right, plus the two-year dissolution deprivation under Perkara 26(2)).
MIXED MASTERS: 2 en + 1 ms → master-aware injector. METHOD: 3 extraction agents (grounded per-article,
self-verified against source) → English pivot (incl. an English rendering of the ms citizenship master
for its `.en.md`) → 12 per-language translation agents (own-language siblings for register; cites preserved
verbatim; sensitive framing held exact) → `scratchpad/assemble-cards-sensitive.mjs` (citizenship-ms
overridden to the authored Malay master) → `scratchpad/inject-stayfacts-sensitive.mjs` (master-aware).
GATE: 39/39 js-yaml clean, validate-frontmatter **0 error / 0 warning**, translation-sync **0 stale /
0 orphaned** across 1403 topics (freshness-neutral). 39 files = 3 masters + 36 translations. All 3 keep
`reviewer: ashton-tan`.

**Running total: 27 decisions carded × 13 langs.** The settling-in stayFacts layer is now fully saturated —
every substantive settling decision (sensitivity none *and* the 3 sensitive) is carded; everything still
uncarded is deliberately off-funnel (JIM agency hub, citizen passport, life-event registrations for
birth/death/divorce).

## Phase 2 — DONE 2026-11-16 (HELD)
- **想留下 "Make Malaysia home" guided path** — the `GuidedPath` `living`-variant band
  ("Thinking of moving to Malaysia? / 想留在马来西亚?") on `/living` already existed, but its
  `LIVING_PATH` (`src/lib/livingPath.ts`) predated the 12 stayFacts cards and overlapped only 2
  of them. **Re-curated it into the decision spine**: entry opener (`malaysia-entry-visa-
  requirements-by-nationality`, "can I enter?") + all **12 stayFacts-carded decisions** in real
  arc order — the four visa routes (employment-pass → mm2h → pvip → de-rantau) → PR → cost-of-
  living → expat-tax → register-sdn-bhd → foreigners-buying-property → international-schools →
  how-malaysian-healthcare-works. Every step after the opener now lands on a cited, carded
  answer (hook→depth). Data-only change to a live, unchanged component; all 13 slugs verified
  present + published (none draft); band silently omits any missing step and the myth/fact row
  where an article has no `commonMisconception`. No per-step translation needed (step meaning
  carried by already-localized article titles, 13 langs).
- **Funnel wiring — VERIFIED, no change needed.** `resolveSponsor` already routes the business/
  tax conversion points correctly: `business/register-sdn-bhd` (cat `business`) + `taxation/
  expatriate-and-non-resident-tax` (cat `taxation`) → disclosed **1company** CTA; `property/
  foreigners-buying-property` (FINANCING_SLUGS) → **1financing**. All three sensitivity `none`,
  no `sponsor: none`. Deliberately NOT extended onto the visa/immigration decisions (MM2H, PVIP,
  De Rantau, EP, PR): 1company's declared services are incorporation/secretarial/accounting/
  audit/tax/advisory — not immigration — so a CTA there would break the funnel-accuracy guard
  the `sponsors.ts` code itself upholds. The expat-tax card is the single best 想留下→1company
  conversion (tax residency/filing) and it is already wired.

## Gotchas
- Adding a frontmatter **schema field** forces a dev restart → stale `.astro` cache → false
  "Duplicate id" warns → `npm run clean` + restart (CLAUDE.md gotcha). Prod prebuild auto-cleans.
- `catch` is a JS-reserved-ish word → field named **`watch`** (label "What to watch").
