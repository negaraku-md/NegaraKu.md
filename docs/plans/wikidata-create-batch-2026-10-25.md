# Wikidata item-creation batch — 15 verified-absent Malaysian entities

_2026-10-25. Companion to `wikidata-create-batch-2026-10-25.qs` (QuickStatements V1)._

## What this is

The entity-linking sweep found notable Malaysian entities NegaraKu covers that have **no
Wikidata item** — verified by direct per-entity checks (no en.wikipedia page, no ms.wikipedia
page, no Wikidata label hit). Wikidata editing is the one knowledge-graph channel **not**
blocked (unlike Wikipedia), so creating these items + linking NegaraKu's articles to them is a
clean GEO play: it seeds the global graph and gives our pages a `sameAs` anchor.

**I cannot create these — Wikidata writes need your logged-in account.** This is a reviewed
batch for you to run; then I wire the new QIDs back into the articles (step 2).

> **DONE 2026-10-25** — all 15 items were created on Wikidata (via your `Ai.negaraku.md` account
> in Chrome: 10 made through Special:NewItem, then the account crossed the 50-edit autoconfirmed
> threshold and the remaining 5 + all statements/Malay labels were run through QuickStatements).
> Created QIDs: PDPA 2010 **Q141851243**, Industrial Relations Act 1967 **Q141851272**,
> Environmental Quality Act 1974 **Q141851301**, National Forestry Act 1984 **Q141851318**,
> CIPAA 2012 **Q141851326**, Children & Young Persons (Employment) Act 1966 **Q141851333**,
> Minimum Retirement Age Act 2012 **Q141851341**, Islamic Family Law (FT) Act 1984 **Q141851348**,
> Price Control & Anti-Profiteering Act 2011 **Q141851356**, MASB **Q141851366**, AOB **Q141851810**,
> BOVAEP **Q141851811**, NSRC **Q141851812**, Returning Expert Programme **Q141851814**,
> PeKa B40 **Q141851815**. Each carries instance-of (Act of the Parliament of Malaysia / government
> agency / government program), country=Malaysia, applies-to-jurisdiction (acts), inception, and
> en+ms labels. All 15 linked back into the articles (19 topics, since some Acts span multiple).

## How to run (QuickStatements)

1. Open https://quickstatements.toolforge.org/ and log in with your Wikidata account
   (`Ai.negaraku.md` — note: Wikidata is NOT blocked, only en.wikipedia is).
2. `Import V1 commands` → paste the contents of `wikidata-create-batch-2026-10-25.qs`.
3. **Review every item first** (see checklist). Fix anything, then Run.
4. Send me the resulting QIDs (QuickStatements shows each new Q-number), or just say "done" and
   I'll re-resolve them by label and link back automatically.

## Review checklist (please eyeball before running)

- **P31 (instance of)** — my best-effort class. Acts use `Q105300221` (Act of the Parliament of
  Malaysia). Statutory bodies use `Q327333` (government agency) — refine to a more precise class
  (e.g. statutory body) if you prefer. Programmes/schemes use `Q22222786` (government program).
- **Act numbers / inception years** are in the descriptions and `P571`; correct any you know
  better (I sourced them from the articles, not re-verified against AGC line-by-line).
- **No references are attached** — the items are indisputable real statutes/bodies, but adding a
  `P854` reference (AGC `lom.agc.gov.my` for Acts; official site for bodies) after creation makes
  them sturdier. Optional.
- COI note: items reference the entities themselves (primary/official sources), not NegaraKu.

## The 15 items & their NegaraKu link-back targets

| # | Entity | type | NegaraKu topic(s) to link after creation |
|---|---|---|---|
| 1 | Personal Data Protection Act 2010 | Act | MY-BIZ-0056, MY-LAW-0012, MY-LAW-0096 |
| 2 | Industrial Relations Act 1967 | Act | MY-EMP-0048, MY-LAW-0075 |
| 3 | Environmental Quality Act 1974 | Act | MY-ENV-0007, MY-LAW-0069 |
| 4 | National Forestry Act 1984 | Act | MY-ENV-0010 |
| 5 | Construction Industry Payment and Adjudication Act 2012 | Act | MY-BIZ-0109 |
| 6 | Children and Young Persons (Employment) Act 1966 | Act | MY-EMP-0047 |
| 7 | Minimum Retirement Age Act 2012 | Act | MY-EMP-0050 |
| 8 | Islamic Family Law (Federal Territories) Act 1984 | Act | MY-LAW-0078 |
| 9 | Price Control and Anti-Profiteering Act 2011 | Act | MY-LIV-0109 |
| 10 | Malaysian Accounting Standards Board (MASB) | statutory body | MY-ACC-0035 |
| 11 | Audit Oversight Board (AOB) | statutory body | MY-AUD-0018 |
| 12 | Board of Valuers, Appraisers, Estate Agents and Property Managers | statutory body | MY-LIV-0133 |
| 13 | National Scam Response Centre (NSRC) | programme | MY-PS-0030 |
| 14 | Returning Expert Programme | programme | MY-EMP-0053 |
| 15 | PeKa B40 | programme | MY-LIV-0086 |

Several Acts are cited by more than one article; all listed topics link to the single new QID.

## Also applied this session (no creation needed — items already existed, search had missed them)

Linked NegaraKu articles to pre-existing Wikidata items I verified: **MyCC** (MY-BIZ-0112 →
Q110133506), **CIDB** (MY-IND-0004 → Q12695816), **Paralympic Council Malaysia** (MY-SPT-0006 →
Q6742000).

## Not pursued / held

- **Top Glove / Press Metal** — both items exist (Q2443143, Q135913025) but share ONE multi-company
  NegaraKu article, so no clean single link.
- **PLUS** (item is "PLUS Expressways" Q4384792, possible former-entity mismatch) and **Cradle Fund**
  (Q85975665; our article is the *programme* CIP, not the fund) — held for your call.
- Bulk auto-creation of the wider candidate pool was rejected: automated existence-checking is too
  noisy for Malaysian entities (keyword search returns homonyms; many apparent gaps are actually
  procedures, or have Wikipedia pages search didn't surface). Only these 15 passed direct verification.
