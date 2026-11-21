# Wikidata sweep — 2026-11-21

Fresh entity-linking + item-creation sweep over the corpus that grew since the
Oct-25 sweep (industries atlas, banks/companies, new statutes, glossary).

## Method
1. Triage all 1,420 topics → 143 untagged **entity-candidate** topics (non-sensitive,
   named-entity categories): industries 38, education 16, law 16, economy 15,
   companies 13, energy 13, glossary 12, technology 10, public-safety 8, government 2.
2. Deterministic `wbsearchentities` + `wbgetentities` (P31/P17) existence-check →
   72 with candidates, 71 zero-candidate.
3. Six parallel adjudication agents (strict convention rubric, data-only) →
   17 LINK verdicts, 15 CREATE verdicts.
4. QA re-fetch of every proposed link QID (label/desc/P31/P17) → dropped 3 weak/
   wrong matches. Direct per-entity verify of every CREATE candidate (exact en/ms
   Wikipedia titles + WD label search) → 2 resolved to existing items (→ links),
   13 confirmed genuinely absent.

## LINKS APPLIED — 16 topics × 13 langs = 208 files (commit `6efd36c1c`, HELD)
Freshness-neutral (`wikidata:` not in the translation hash): validate 0/0,
translation-sync 0 stale / 0 orphaned.

- MY-CO-0023 CIMB Group → Q3045976
- MY-CO-0024 Public Bank Berhad → Q3046561
- MY-CO-0025 Maxis Berhad → Q2627330
- MY-CO-0026 Axiata Group → Q792500
- MY-CO-0028 Hong Leong Financial Group → Q139387760
- MY-CO-0029 AmBank Group → Q4132947
- MY-CO-0031 Telekom Malaysia → Q1640639
- MY-CO-0015 PLUS Malaysia Berhad → Q4384792 (existing item, found in verify)
- MY-LAW-0121 Malaysian Bar → Q6741941 (existing item, found in verify)
- MY-IND-0039 Telecommunications in Malaysia → Q5621005
- MY-IND-0043 Steel industry of Malaysia → Q136416905
- MY-IND-0047 Mass media in Malaysia → Q6805904
- MY-GLO-0051 Gotong-royong → Q7340600
- MY-GLO-0054 Penghulu → Q4216345
- MY-GLO-0001 Paid-up Capital → Q7124665 (glossary concept = paid-in capital)
- MY-PS-0008 NSRC → Q141851812

**Dropped (QA):** MY-TEC-0010 (MyDIGITAL Corporation = agency, not the blueprint),
MY-LIV-0119 (generic "Tuition center" concept), MY-LAW-0090 (bare-stub small-claims
item, no P31/P17).

## ITEMS TO CREATE — 13 (QuickStatements batch: `wikidata-create-batch-2026-11-21.qs`)
Account: **`Ai.negaraku.md`** (user chose to keep project edits under the project
identity). All verified absent (no WD item, no en/ms Wikipedia article). P17=Q833.
Link back each new QID to its topicId after creation (freshness-neutral).

| topicId | label | P31 |
|--|--|--|
| MY-LAW-0001 | Companies Act 2016 | Q105300221 |
| MY-LAW-0032 | Civil Law Act 1956 | Q105300221 (+ Smswiki sitelink to orphan ms.wp article) |
| MY-LAW-0066 | Consumer Credit Act 2025 | Q105300221 |
| MY-LAW-0073 | Housing Development (Control and Licensing) Act 1966 | Q105300221 |
| MY-LAW-0080 | Law Reform (Marriage and Divorce) Act 1976 | Q105300221 |
| MY-LAW-0093 | Whistleblower Protection Act 2010 | Q105300221 |
| MY-ECO-0031 | Public Finance and Fiscal Responsibility Act 2023 | Q105300221 |
| MY-ENE-0003 | Energy Efficiency and Conservation Act 2024 | Q105300221 |
| MY-ENE-0006 | BUDI MADANI | Q22222786 |
| MY-IND-0013 | New Industrial Master Plan 2030 | Q22222786 |
| MY-IND-0019 | National Semiconductor Strategy | Q22222786 |
| MY-PS-0010 | MERS 999 | Q22222786 |
| MY-TEC-0015 | KL20 Action Plan | Q22222786 |

P31 classes: Q105300221 = Act of the Parliament of Malaysia; Q22222786 = government
programme. Acts also carry P571 (inception year) + Malay label.
