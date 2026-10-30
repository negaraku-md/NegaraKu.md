# Corpus duplicate / overlap audit — 2026-10-30

_Method: scanned all 1,162 published master articles for overlap signals — shared Wikidata QID, shared `entity`, and high title/keyword similarity (Jaccard), flagging cross-category pairs (the PDRM cannibalization pattern). Script: `scratchpad/dup-audit.mjs`. Signals are leads; each merge needs a content diff first (per the dedup rule: same-category OK, cross-category prove-first)._

**Key interpretation:** a shared QID or entity is **not** automatically a duplicate — much of the corpus is deliberately multi-faceted (same entity, different aspect) or uses the intentional *glossary-term + full-article* two-layer pattern. The real duplicates are pairs that cover the **same scope** redundantly. Classified below.

> **Relationship to the 2026-09-08 dedup program.** A full duplicate-entity cleanup already ran (see memory `negaraku-dedup-and-redirects`): it consolidated clusters to one canonical + `alsoIn` cross-listing + static redirects, and **deliberately kept some pairs distinct after diffing** — do NOT re-merge these: **EPF ×3** (institution / investor / glossary), **pdpa-compliance-malaysia vs pdpa-2010**, **spr-election-commission vs elections-act-and-election-commission** (institution vs statute), **bumiputera** present-day vs historical-NEP. This audit's real new value is catching overlaps introduced by the **content growth since** (the law/statute expansion, Industries atlas, public-safety set, and the new glossary terms) — i.e. the Tier 1 same-slug-two-category pairs and the Tier 2 pairs below that were NOT in the prior program. Also note the standard fix here is often **`alsoIn`** (keep one canonical, cross-list it) rather than a hard merge — preserves discoverability.

## Tier 1 — same slug in two categories (true duplicates → merge + redirect)
Two full articles, same slug, same subject. Keep the stronger (word count / tier), merge unique content in, redirect the retired path.

| Pair | Keep (recommended) | Merge + redirect |
|---|---|---|
| securities-commission-malaysia `[economy]` vs `[finance]` | **finance** (1,656w; SC is a financial regulator) | economy → finance |
| environmental-quality-act-1974 `[environment]` vs `[law]` | **environment** (2,995w, tier 1) | law → environment (keep a statute note) |
| suhakam-human-rights-commission `[government]` vs `[law]` | **government** (2,028w; it's a commission) | law → government |
| real-property-gains-tax `[law]` vs `[property]` | content-diff needed (1,906w vs 1,737w; RPGT is a tax — consider taxation as canonical) | the weaker |

## Tier 2 — same entity/scope, redundant (merge + redirect; incl. same-category)
| Pair | Keep | Note |
|---|---|---|
| road-transport-act-1987 vs **road-transport-act** `[both law]` | **road-transport-act-1987** (1,725w) | same category — cleanest merge |
| ministry-of-finance-mof vs **ministry-of-finance-treasury** `[both government]` | **ministry-of-finance-treasury** (3,426w, tier 1) | same entity (MOF), same category |
| malaysia-foreign-policy vs **malaysia-foreign-policy-wisma-putra** `[both international]` | **wisma-putra** (2,822w, tier 1) | same topic, same category |
| local-government-councils vs local-government-in-malaysia `[government]` (+ local-councils `[states]`) | content-diff | 3-way overlap on local government |
| pdrm `[government]` vs royal-malaysia-police-pdrm `[public-safety]` | **government** (agency/legal-basis) | the known case; seoTitles already differentiated |
| palm-oil-sustainability-certification `[industries]` vs palm-oil-sustainability-mspo-and-deforestation `[environment]` vs oil-palm-smallholders-mspo-sustainability `[agriculture]` | content-diff | 3 MSPO/palm-sustainability articles across 3 categories |
| competition-act-malaysia `[business]` vs competition-act-2010 `[law]` | content-diff (statute vs business-guide?) | also note: competition-act-2010's `wikidata` = Q110133506 (the Commission, not the Act) — fix separately |
| contracts-act-malaysia `[business]` vs contracts-act-1950 `[law]` | content-diff | statute vs guide |
| official-secrets-act-transparency `[government]` vs official-secrets-act-1972 `[law]` | content-diff | |
| tourism-tax `[taxation]` vs malaysia-tourism-tax `[tourism]` | content-diff | same tax |
| register-foreign-branch-malaysia `[business]` vs foreign-company-registration-malaysia `[company-secretary]` | content-diff | foreign company registration |

**Likely facets (verify, probably keep both):** employment-act-1955-guide `[employment]` vs employment-act-1955 `[law]` (practical guide vs statute), amalgamation-of-companies `[company-secretary]` vs companies-act-2016 `[law]` (procedure vs statute), pdpa-compliance-malaysia `[business]` vs pdpa-2010 `[law]`.

## Tier 3 — glossary-term + full-article (INTENTIONAL two-layer; keep both, ensure cross-link)
These are by design: a short "what is X" glossary entry serving quick-definition intent **plus** a full article for depth. Do **not** merge — instead confirm each glossary entry links to its full article (and vice-versa) so they complement rather than cannibalise. Pairs: dewan-negara, dewan-rakyat, dewan-undangan-negeri (↔ state-assemblies-dun), yang-di-pertuan-agong, rukun-negara, wilayah-persekutuan (↔ federal-territories-governance), perlembagaan-persekutuan (↔ federal-constitution), sdn-bhd, epf, jakim-halal, suruhanjaya-syarikat-malaysia (↔ ssm), suruhanjaya-pencegahan-rasuah-malaysia (↔ macc-sprm), raja-raja-melayu (↔ majlis-raja-raja), annual-return, perniagaan-persendirian.

## Not duplicates (leave) — legitimate facets / false positives
- **Facets:** epf-as-institution vs epf-as-investor; petronas `[companies]` vs oil-gas-industry `[industries]`; state profiles `[states]` vs *-visitor-guide `[tourism]` (KL, Sabah, Sarawak); medical-tourism healthcare vs tourism; rubber economy vs industries.
- **Template-similar titles (not same subject):** 2013- vs 2022-general-election; registering-a-divorce vs -marriage; start-construction-business vs starting-a-business; the various *-visitor-guide pairs; semiconductor-industry vs -national-strategy.

## Minor data-quality (separate from dedup)
- **Over-broad Wikidata tagging:** Q833 (Malaysia) is on 8 unrelated articles (geography, population, UN membership, SEA Games…), and Q1121232 (SSM) on 11 — the QID is correct per-article as an entity link but is too generic to be a dedup signal; worth a future precision pass, not a merge.
- competition-act-2010 `wikidata` points at the Commission (Q110133506), not the Act (flagged earlier).

## Recommended execution order (each merge = content-diff → merge unique content into canonical → add redirect in astro.config → retire the duplicate across all 13 languages → re-run check-internal-links --strict)
1. **Unambiguous, same-category** (lowest risk): road-transport-act → road-transport-act-1987; ministry-of-finance-mof → -treasury; malaysia-foreign-policy → -wisma-putra.
2. **Same-slug cross-category** (Tier 1): securities-commission, environmental-quality-act-1974, suhakam, real-property-gains-tax.
3. **Cross-category scope overlaps** (Tier 2): PDRM, the statute business-vs-law pairs, palm-oil 3-way, local-government 3-way — each needs a content diff to decide canonical and preserve unique material.
4. **Tier 3 glossary pairs:** a link-audit pass (ensure cross-links), not merges.
