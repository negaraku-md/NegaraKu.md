# Budget 2027 — specialist-article staleness sweep

_Researched 2026-10-24. Source: MOF Budget 2027 **tax-measures** appendices
(belanjawan.mof.gov.my/pdf/belanjawan2027/ucapan/tax-measures.pdf — fetch via
`curl -sL … -o x.pdf && pdftotext -layout x.pdf -`; WebFetch can't decode it)._

## Context

Budget 2027 was tabled 9 Oct 2026. The dedicated explainer `economy/malaysia-budget-2027`
already covers the headline consumer/SME measures (and the Global Services Hub was handled
2026-10-22). This sweep is about the **specialist tax articles** whose stated rules Budget 2027
changes **from YA2027**. All measures below are **announced, not yet gazetted** (Finance Bill 2027
pending) → use the site's standard **"announced ≠ law"** framing: keep the current YA2026 figures as
current, ADD a YA2027 forward note with the MOF source. (This is the same pattern used for the GSH
update and matches each article's existing "Announced vs in force" stance.)

## Measures → affected articles

### 1. Individual income tax rates (Appendix 1) — `taxation/personal-tax-rates` ⭐ highest impact
Article is titled "YA2023 to YA2026" and states "Budget 2026 announced no change to the bands."
Budget 2027 revises the resident scale **from YA2027**:
- RM70,001–100,000: **19% → 18%** (−1pp)
- **New band** RM100,001–150,000 at **24%** (was part of 100,001–400,000 @25%); RM150,001–400,000 stays 25%
- RM600,001–2,000,000 → split: **RM600,001–1,000,000 stays 28%**
- **Above RM2,000,000 → above RM1,000,000 at 30%** (top-rate threshold drops from >2m to >1m)
- Plan: add a "YA2027 (announced, Budget 2027)" band table + note; update title to "YA2023 to YA2027";
  adjust answer/keyTakeaways/faq that say "unchanged since YA2023 / 30% above RM2,000,000".
  ⚠️ title/answer/keyTakeaways/faq are **hashed fields** → `translate:stamp` after.

### 2. MSME income tax rates (Appendix 11) — `taxation/corporate-tax-rates`
From YA2027: first RM150,000 **15% → 14%**; RM150,001–600,000 **17% → 16%**; >RM600,000 stays 24%.
(MSME = paid-up ≤RM2.5m & sales ≤RM50m.) Add a YA2027 forward note.

### 3. Individual income tax reliefs (Appendices 2–9, YA2027) — `taxation/personal-tax-reliefs`
Revisions effective YA2027: individual & dependent relatives; expenses for parents/grandparents;
medical treatment; education fees & lifestyle; lifestyle; sports-related lifestyle; **tourism
expenses (extension)**; SOCSO contributions; + school public contribution fund tax treatment.
(Exact old→new amounts to be extracted per-appendix at edit time.) Add a YA2027 reliefs note/column.

### 4. First residential home stamp duty (Appendices 16–17) — `taxation/stamp-duty-rates`
"Review of stamp duty exemption for the purchase of first residential home" + exemption for revival
of abandoned housing projects. (Thresholds/dates to extract at edit time; stamp duty is
instrument-date based, not YA.) Add/refresh the first-home exemption note.

## Method (integrity-first, same as prior sweeps)
1. Per article: extract exact old→new figures + effective date from the appendix (pdftotext).
2. EN master: ADD the YA2027 forward note (don't delete current figures); cite the MOF tax-measures PDF.
3. Propagate to the 12 translations (parallel agents, 2 langs each; preserve identifiers/figures verbatim).
4. If a hashed field (title/answer/keyTakeaways/faq) changed → `node scripts/translation-sync.mjs --stamp`.
   Body-only additions are freshness-neutral (no stamp).
5. validate-frontmatter + check-internal-links --strict (+ js-yaml) 0 errors before commit.

## Scope / effort
4 primary articles × 13 langs. Highest-value + cleanest: #1 personal-tax-rates and #2 MSME rates
(concrete figures). #3 reliefs is the biggest (many sub-items). All sensitivity=none (no reviewer gate).

## Status
Research DONE 2026-10-24. **Edits NOT started — awaiting go-ahead** (consequential published tax content).
