# Doing Business in Malaysia — consolidated topic plan

**247 topics across 6 categories.** Produced 2026-07-20 by five parallel recon
passes, one per category, each running the mandatory method: real SERP searches
first, then a competitor inventory, then gap analysis, and only then a topic list.
Nothing here was brainstormed from priors.

Per-category detail: [business](doing-business-business.md) ·
[taxation](doing-business-taxation.md) ·
[company-secretary](doing-business-company-secretary.md) ·
[accounting-audit](doing-business-accounting-audit.md) ·
[employment](doing-business-employment.md)

| Category | Planned | Written | Clusters |
| --- | --- | --- | --- |
| 💼 Business | 67 | 4 | 10 |
| 🧾 Taxation | 66 | 4 | 11 |
| 📑 Company Secretary | 41 | 3 | 7 |
| 👥 Employment & HR | 40 | 1 | 6 |
| 📊 Accounting | 19 | 1 | 5 |
| 🔍 Audit | 14 | 1 | 4 |
| **Total** | **247** | **14** | **43** |

---

## The thesis, found independently five times

Each agent worked in isolation. Each returned a version of the same finding:

| Category | The unclaimed ground |
| --- | --- |
| Business | Licensing spans federal / state / local — nobody maps the architecture |
| Company Secretary | Register duty vs notification duty — two clocks, always collapsed |
| Taxation | **Which regime even applies?** — every competitor writes one tax per page |
| Accounting | e-Invoice × s.245 × ITA record-keeping — three regimes, never reconciled |
| Employment | Entitlement is covered; **procedure** (domestic inquiry, Form PK) is not |

These are one finding. **Competitors organise content around their own service
lines. Readers have questions that cross those lines. Nobody owns the seams.**

That is not a content gap to be filled by writing more — it is a structural
advantage of being a knowledge base rather than a firm's marketing site, and it
is what the typed `relations` graph exists to express. The highest-value articles
in this plan are the routing articles: *capital-or-revenue*, *e-invoice-vs-tax-invoice*,
*employee-vs-contractor*, *business-licence-malaysia*.

## Three cross-cutting findings

**1. East Malaysia is systematically absent.** Sabah and Sarawak do not run on
peninsular law. Business registration goes through the Business Names Ordinance
(Cap 64, Sarawak) and Trades Licensing Ordinance (Cap 144, Sabah), not ROBA 1956.
Employment runs on the Sabah Labour Ordinance (Cap 67) and Sarawak Labour
Ordinance (Cap 76), enforced by separate JTK departments. Sarawak controls its own
immigration. Every national competitor writes as though peninsular law is Malaysian
law. For a site called NegaraKu, inheriting that blind spot was not an option.

**2. Currency is a moat, not hygiene.** Recon found top-ranking pages carrying
superseded figures across every category — the pre-2023 EA coverage rule, the
RM4,000 SOCSO ceiling (replaced Oct 2024), the audit exemption thresholds stated
without the phase-in, Employment Pass bands superseded 1 June 2026. Half the
competitive set is wrong *right now*. Being accurate and dated beats being clever.

**3. The strongest ground is content service firms will not publish.** Cosec
handover checklists and how to switch provider. What actually happens during an
audit engagement. That the MIA fee schedule was withdrawn. Minority-shareholder
self-help. Two agents named the reason explicitly: opacity is commercially useful
to the incumbent, and the incumbent's client is the board, not the reader.
**This needs an explicit decision from 1company — see Open questions.**

## Dated cliffs

Content that becomes wrong on a known date. These drive review scheduling.

| Date | What changes | Affects |
| --- | --- | --- |
| **1 Jun 2026** | Employment Pass salary bands revised (Cat I → RM20,000) | `employment-pass-malaysia` |
| **1 Jan 2027** | MPERS (2025) **and** MFRS 18 both take effect | Accounting standards cluster |
| **1 Jan 2027** | Audit exemption Phase 3 (RM3m / RM3m / 30) | Audit exemption cluster |
| ongoing | FSI exemption orders expire by taxpayer class | `foreign-source-income` |
| ungazetted | Foreign worker multi-tier levy (MTLM) | `foreign-worker-levy-malaysia` |

`foreign-source-income` is flagged as the **single highest-risk page in the
corpus** — hard expiry dates that differ by taxpayer class, extended at Budget.

## The Compliance Calendar

The plan feeds **~60 datable statutory obligations** into `/compliance-calendar`,
up from the 10 it carries today. Company Secretary contributes 27, Employment 26,
the rest spread across Taxation and Accounting.

Every obligation carries a confidence rating. The rule, stated by the Company
Secretary agent and adopted globally: **items marked Low confidence must not be
published until confirmed — omit rather than guess.** A calendar with 40 correct
entries beats one with 60 entries of unknown quality, because a wrong deadline is
worse than a missing one.

## Verification register

Every agent returned a "do not publish without a primary source" list. Two cases
where **secondary sources actively conflict**, and neither ships until resolved:

- **NSRF Group 3** — sources disagree on 2026 vs 2027 start, and on the definition
  of "large non-listed". Needs the SC source.
- **SOCSO/EIS maximum contribution** — recon returned three mutually inconsistent
  figures. Every number must be read off perkeso.gov.my directly.

Standing rule, unchanged: recon informs, official sources cite. No competitor page
ever becomes a citation.

## Existing articles: 5 of 14 are mis-scoped

Recon says these carry multiple search intents and must be split into hubs:

| Article | Becomes |
| --- | --- |
| `business/close-a-company` | hub → strike-off, MVWU, CVWU, corporate rescue |
| `company-secretary/statutory-registers` | hub → 5 per-register articles (each needs its own obligation) |
| `taxation/sst-explained` | umbrella → `sst-registration`, `sst-expansion-2025` |
| `taxation/e-invoicing` | hub → 5 e-invoicing pages |
| `employment/epf-socso-guide` | split → `epf-employer-guide`, `socso-eis-employer-guide` |

`accounting/mfrs-vs-mpers` is the opposite case — it should be **narrowed** to the
decision framework, or it will cannibalise three new pages.

This is on top of the 27 articles that fail the quality standard (see
[STANDARDS-COMPLIANCE](../STANDARDS-COMPLIANCE.md)).

## Deliberate non-topics

Refused rather than padded to hit a quota:

- **GST** — repealed 2018. Search interest persists but it is speculative politics;
  belongs in `economy` if anywhere.
- **Tax calculators** — "we cannot beat a calculator with an article." Rates live
  in T4 data pages.
- **Contract and handbook templates** — template-farm territory, and distributing
  unreviewed legal templates carries liability we should not take on.
- **Payroll / HRMS software comparisons** — every competitor in that SERP is a SaaS
  company; we cannot out-incentive them.
- **Industry guides (33 of them)** — deferred until each can name its actual
  licensing authority.

## Waves

**Wave 1 — the compliance spine (~65).** Duties a company cannot avoid, where
1company's expertise is deepest and facts age slowest. Company Secretary in full ·
payroll statutory · corporate tax and SST core · audit exemption cluster ·
formation fundamentals. Every Wave 1 article contributes obligations to the
Compliance Calendar, so the tool densifies as the corpus grows.

**Wave 2 — the seams (~90).** The routing articles that constitute the
differentiation, plus Employment procedure, international tax, and the licensing
architecture.

**Wave 3 — breadth (~90).** Corridors, IP, exchange control, incentives,
East Malaysia, and the remaining data pages.

## Open questions for 1company

1. **Do we publish the content cosec and audit firms won't?** Switching guides,
   handover checklists, audit process transparency, the withdrawn fee schedule.
   It is the strongest differentiation available and it partly commoditises
   1company's own service lines. A content decision downstream of a business one.
2. **Who is the named reviewer?** [reviewers.txt](../../scripts/health/reviewers.txt)
   is empty, so nothing can currently claim human review. 247 articles cannot ship
   as permanent AI drafts without eroding the trust model they are built on.
3. **Fix the 27 before writing the 233?** Recommended. Building on an unverified
   foundation is the expensive version of the audit-exemption mistake.
