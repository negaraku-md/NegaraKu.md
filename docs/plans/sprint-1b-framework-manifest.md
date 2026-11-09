# Sprint 1b — Article-framework pilot: 30-article manifest

**Status:** APPROVED & SHIPPED (2026-11-09). Pilot = 32 families tagged + infra
(schema, validator, lint); reader-test done; full gate green. The corpus rollout
(remaining ~1,296 families) is a separate approval — see
[`sprint-1b-corpus-rollout-plan.md`](./sprint-1b-corpus-rollout-plan.md).

## What is already done (this gate)

- **Schema field added** — `framework` optional enum (8 slugs) beside `mode` in
  `src/content.config.ts`. Non-rendering in v1. Outside `TRANSLATED_FIELDS`.
- **Freshness verified on one family** — tagged all 13 `strata-management-jmb-mc`
  files `framework: explainer`, ran `translation-sync`: **0 stale → 0 stale**.
  Tagging is freshness-neutral. Reverted (not a committed pilot edit).

## Locked decisions this implements

| Area | Decision |
|---|---|
| Scope | `framework` = editorial guidance + health-scan checks. No reader-facing render in v1. Separate from `mode`/`foodType`. |
| Schema | Optional enum, 8 slugs, outside `TRANSLATED_FIELDS`. Tag = freshness-neutral (verified). |
| Consistency | **Validator (hard):** an article family passes if all language files omit `framework` **or** all declare the same valid value. A mix names the article + the offending files. |
| Editorial lint | **Health scan (warn-level):** flags a missing expected signal for an editor to inspect; never blocks. Identifies article + expected signal + what to check. |
| Acceptance | Structured editorial self-check over two reader scenarios (Malaysian + international). Record outcome + reason per scenario. "Simulated pass" ≠ observed usability. |

## Build items (status)

1. **Schema** — DONE (uncommitted, this gate).
2. **Consistency validator** — in `scripts/validate-frontmatter.mjs`. NOT built yet.
3. **Per-framework warn-level lint** — in the health scan. NOT built yet.
4. **Pilot tag + adapt** — WAITS for this manifest's approval.
5. **Reader-test pass** — one agent per article, both persona lenses, pass/fail + reason.

## Batch progress

**Batch 1 — understand pillar: DONE (held, not pushed).** 7 articles tagged
metadata-only across all variants; validator 0 errors; translation-sync 0 stale.
All 7 passed the framework reader-test self-check as **metadata-only** (no prose,
no translation debt, no new review). Two read-driven corrections, both reflected
above: #19 swapped archived `government/bank-negara-malaysia` → live
`economy/bank-negara-malaysia`; #27 reclassified `rules`→`data-reference`.
**Batch 2 — living pillar: DONE (held, not pushed).** 13 articles tagged
metadata-only across all variants; validator 0 errors; translation-sync 0 stale.
All 13 resolved as **metadata-only — zero prose, zero translation debt.** Reading
reclassified four manifest guesses (the classify-by-what-it-does rule at work):
#10 decision→rules, #23 history-culture→explainer, #29 decision→how-to; #7
getting-married kept as how-to (task entry-point, leans explainer). **Finding:**
the living pilot now has no decision or history-culture example — both frameworks
remain ≥2 pilot-wide (decision in doing-business; history in understand), but if a
living-pillar decision and a genuine *food*-History&Culture are wanted, they need
real-exemplar swaps (offered separately). **RESOLVED 2026-11-09 — both added
(pilot now 32):** `education/pre-university-routes` → **decision** (school-leaver
picks one of five mutually-exclusive routes on common dimensions; sensitivity=race,
metadata-only ⇒ no review) and `food-lifestyle/kopitiam-mamak-culture` →
**history-culture** (thematic living-tradition narrative — the food parallel to
batik). Both metadata-only, 13 files each; validator 0 errors, translation-sync 0
stale. **Gotcha banked:** a first pass mis-inserted `framework:` *after* the 2nd
`---` (body, not frontmatter) → 24 false "stale" + false-green validator; fixed by
inserting before the 2nd `---`. Placement must be verified every batch.
**Batch 3 — doing-business pillar: DONE (held, not pushed).** 10 articles, 130 files
tagged metadata-only across all variants; validator 0 errors; translation-sync 0
stale. (#2 `taxation/capital-or-revenue` → explainer was tagged with the batch —
it is DB-pillar, not understand, and was absent from the hand-off task list.) **One read-driven swap:** #5 `companies/khazanah-nasional` was `status:
archived` (4-variant remnant, like #19) → swapped to live `companies/petronas`
(13-variant, tier-1 org profile). All 8 other manifest guesses held after the
reader-test — no reclassifications. **The warn-level lint caught its first real
target:** #16 `business/starting-a-business-in-malaysia` is tagged `journey-hub`
but has `related: []` + `relations: []` and no in-body links — a tier-1 head term
that routes nowhere. Fix = populate `related`/`relations` with the onward articles
(freshness-neutral metadata), pending the user's call. **Note:** the pilot's
intended "non-13 family" validator test is moot — both 4-variant `companies`
families (khazanah, pnb-and-asnb) are archived; the validator's family-size
independence is already proven by the negative tests + `familyKey` logic.

## Reader-test acceptance pass (build-item #5) — DONE

Ran two passes on 2026-11-09, held: a targeted inline pass (8 contestable
articles, opening-based) and a **full 30-article workflow** (one agent per
article, two reader lenses — local practitioner + international newcomer —
structured pass/fail + `better_framework`). 30/30 agents returned, 0 errors.

**Result: 27/30 frames confirmed clean** (both lenses pass, no better frame).
`sst-explained` passed both lenses as explainer (a weak borderline→hub flag,
not actioned — it explains, it doesn't route). **Three genuine frame/content
mismatches surfaced**, each a real editorial signal, not system noise:

| Article | Tagged | Reader-test says | Fix applied (2026-11-09, held) |
|---|---|---|---|
| glossary/berhad-bhd | data-reference | **explainer** — question-headings + narrative define-and-distinguish, not a lookup | ✅ reclassified → explainer (13 files, metadata-only) |
| settling-in/getting-married-in-malaysia | how-to | **explainer** — explains the two-system split; steps are "briefly"/"in outline", deferred to companion articles | ✅ reclassified → explainer (13 files, metadata-only; sensitive but tag-only ⇒ no new review) |
| business/starting-a-business-in-malaysia | journey-hub | **fail** — orients well but routes nowhere (0 links) | ✅ kept journey-hub; populated `related`/`relations` with 6 onward step articles (13 files, freshness-neutral). Hub lint now clears; check-internal-links --strict 0 broken |

**Cross-check value:** the inline pass (opening-only) passed `getting-married`
and didn't cover `berhad-bhd`; the full-body workflow caught both. Running both
was the difference between a shallow and a real acceptance read.

**Rollout implications (the pilot's actual purpose):**
- The 8-framework system holds — ~90% clean-fit on first tagging; the misses are
  true content/frame mismatches the reader-test correctly isolates.
- **Glossary entries tend to be explainer-shaped**, not data-reference — check at rollout.
- A **how-to that defers its steps** to companion articles is really an explainer —
  the how-to tag demands an actually-completable procedure.
- A **head-term page tagged journey-hub must route** — the warn-level lint already
  catches zero-link hubs (fired on `starting-a-business`).

## Corpus rollout

The pilot (now 32 families) is complete and green. The full-corpus rollout across
the ~1,296 remaining published families is planned separately in
[`sprint-1b-corpus-rollout-plan.md`](./sprint-1b-corpus-rollout-plan.md) — a
`contentType`→framework auto-map + per-category-cluster sampling (the `guide`
bucket is 740/1,356, the irreducible reader-job core), gated by the same
validator + freshness + lint, held for approval.

## Enum slugs

`explainer · history-culture · profile · how-to · decision · rules · data-reference · journey-hub`

## The 30 articles

Pillars: **U** understand · **L** living · **DB** doing-business.
Expected change: **meta** = tag only (freshness-neutral, zero translation debt) ·
**prose** = opening/section adaptation expected (cascades to translations).
All "expected change" calls are preliminary — confirmed when each article is opened at edit time; the default is **meta unless the reader-test/lint flags the current opening**.

### Core examples (16) — two per framework

| # | Framework | Pillar | Category / slug | Why this framework | Variants | Sensitivity | Expected |
|---|---|---|---|---|---|---|---|
| 1 | explainer | L | property/strata-management-jmb-mc | "JMB vs MC" — define + distinguish; already Sprint 1a explainer-shaped | 13 | none | meta |
| 2 | explainer | DB | taxation/capital-or-revenue | Defines a tax concept + the distinction readers miss | 13 | none | meta |
| 3 | history-culture | U | malaysia/bujang-valley | Dated/archaeological origin — **timeline** structure | 13 | none | meta |
| 4 | history-culture | U | arts-culture/batik | Living tradition — **thematic** structure (contrast to #3) | 13 | none | meta |
| 5 | profile | DB | ~~companies/khazanah-nasional~~ **companies/petronas** | **Swapped** on read: khazanah master is `status: archived` (4-variant deduped remnant, exactly like #19 bank-negara). petronas = live tier-1 org profile — legal basis (Petroleum Development Act 1974), structure, fiscal role, reports to PM | 13 | none | meta |
| 6 | profile | L | food-lifestyle/ah-hei-bak-kut-teh | Venue profile; food-standard pilot, already fits | 13 | none | meta |
| 7 | how-to | L | settling-in/getting-married-in-malaysia | Procedure: route → documents → steps | 13 | religion | meta* |
| 8 | how-to | DB | company-secretary/appoint-company-secretary | Corporate filing procedure (contrast to #7) | 13 | none | meta |
| 9 | decision | DB | business/business-structures-malaysia | Choose a structure on common dimensions | 13 | none | meta |
| 10 | ~~decision~~ **rules** | L | property/home-loan-mortgage-financing | **Reclassified** on read: states the financing *rules/schemes that apply* (margin caps, 35-yr tenure, stamp duty + 31 Dec 2027 exemption, EPF/SJKP), not a route comparison | 13 | none | meta |
| 11 | rules | DB | employment/employment-act-coverage | Who the Act applies to (scope/applies-to) | 13 | none | meta |
| 12 | rules | L | food-lifestyle/alcohol-rules-in-malaysia | Who/where/when the rules apply (contrast to #11) | 13 | religion | meta* |
| 13 | data-reference | L | cost-of-living/household-spending-breakdown | Figures with period/unit/source | 13 | none | meta |
| 14 | data-reference | U | glossary/berhad-bhd | Definition-and-source (glossary mode, contrast to #13) | 13 | none | meta |
| 15 | journey-hub | L | settling-in/moving-to-malaysia-first-steps | Relocation hub: start point + sequence | 13 | none | meta |
| 16 | journey-hub | DB | business/starting-a-business-in-malaysia | Business hub (contrast to #15) | 13 | none | meta |

### Overlap + edge cases (14)

| # | Framework | Pillar | Category / slug | What it tests | Variants | Sensitivity | Expected |
|---|---|---|---|---|---|---|---|
| 17 | explainer | DB | taxation/sst-explained | **Explainer vs Rules** — "what SST is & how it works" | 13 | none | meta |
| 18 | rules | DB | taxation/sst-registration | The Rules half of #17 — "when must I charge/register" | 13 | none | meta |
| 19 | profile | U | economy/bank-negara-malaysia | **Profile vs How-to** — "what BNM does" (live entity page; **swapped** from the archived `government/` duplicate on read) | 13 | none | meta |
| 20 | explainer | L | property/freehold-leasehold-strata-landed | Explainer that **contains a comparison** (not a Decision) | 13 | none | prose |
| 21 | decision | DB | taxation/business-structure-tax-comparison | Decision that **overlaps a data table** | 13 | none | meta |
| 22 | profile | U | malaysia/abdullah-ahmad-badawi | **Person** profile + sensitivity interplay | 13 | religion | prose* |
| 23 | ~~history-culture~~ **explainer** | L | food-lifestyle/bak-kut-teh | **Reclassified** on read: leads with *what the dish is* (the spec's "what belacan is" Explainer pattern); history is secondary + flagged-contested | 13 | none | meta |
| 24 | profile | L | food-lifestyle/bee-hwa-cafe | Profile with **limited verified details** (lint should warn) | 13 | none | meta |
| 25 | how-to | L | transport/driving-licence-foreigners | Living-pillar procedure | 13 | none | meta |
| 26 | data-reference | L | cost-of-living/minimum-wage-and-median-income | Data **combining series** — period labelling | 13 | none | meta |
| 27 | data-reference | U | law/companies-act-2016 | **Reclassified** rules→data-reference on read: a tier-4 statute-record entity page ("the statute record only"), not a "does this apply to me" rule | 13 | none | meta |
| 28 | data-reference | DB | taxation/sst-rate-table | Rate-table reference | 13 | none | meta |
| 29 | ~~decision~~ **how-to** | L | transport/buying-a-car | **Reclassified** on read: task-oriented process (dealer/bank/JPJ roles, Puspakom, 7-day JPJ transfer, hire-purchase), not an option comparison | 13 | none | meta |
| 30 | explainer | U | government/federal-state-division | Understand-pillar explainer of a constitutional mechanism | 13 | constitution | meta* |

`*` sensitive: a **prose** edit needs ashton-tan review (metadata-only tag does not change content, so no new review). Sensitive families: #7, #12, #22, #30.

## Framework & pillar coverage

- Every framework has ≥2 examples; the two SST articles (#17/#18) and the two financing/structure pairs make the overlap rules concrete.
- Pillars: U ≈ 7, L ≈ 13, DB ≈ 10 — all three well represented.
- Journey Hub: 2 of the existing head-term hubs tagged as core (#15, #16) after confirming each gives a start point + sequence; the SST cluster (#17/#18/#28) stresses the Explainer/Rules/Data split rather than a hub.

## Translation-debt preview

- **~22 meta** (tag only) → **zero** translation debt.
- **~8 prose** (preliminary): #10, #20, #22, #23, #27, #29 (+ possibly #9, #15 on inspection). Each prose edit on a 13-file family re-stamps up to 12 translations. Only **#22** is sensitive among the prose set.
- The pilot is deliberately biased toward meta: a framework tag should mostly *describe* an article that already fits, not force a rewrite.

## Approval ask

Approve this manifest (or edit the framework/slug/expected-change calls), then I:
1. Build the consistency validator + the warn-level lint.
2. Tag + lightly adapt in pillar-sized batches (understand → living → doing-business), showing each batch before the next.
3. Run the reader-test pass and record outcomes.
All held for push.
