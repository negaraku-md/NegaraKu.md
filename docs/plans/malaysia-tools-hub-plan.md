# Malaysia Tools Hub — proposal (inspired by masterkit.online)

_Drafted 2026-11-12. Status: PROPOSAL for discussion, nothing built._

## 1. What MasterKit actually is (and what's worth copying)

[masterkit.online](https://www.masterkit.online/) is a **free, client-side micro-tools
site**: ~15 single-purpose calculators/utilities (loan, compound-interest, BMI,
calorie, percentage, area, word-counter, JSON formatter, YouTube thumbnail, etc.).
Every tool is one page with a fixed anatomy:

> interactive widget (instant, in-browser) → "How it's calculated" (formula) →
> "About / why it's useful" → "How to use it" (steps) → tips → disclaimer →
> **FAQ** → "browse all tools" cross-link.

That anatomy is a **programmatic-SEO + linkable-asset** play: each page targets one
high-intent query ("loan calculator"), runs entirely client-side (no backend), and
carries enough prose + FAQ to rank and to earn backlinks.

**What is NOT worth copying:** the tools themselves. Loan/BMI/word-counter are
commodity, hyper-competitive, and off-brand for a Malaysia knowledge base — we would
be the 10,000th generic loan calculator. The **model** is the lesson, not the catalog.

## 2. Why this fits NegaraKu's actual goals (not a tangent)

Our own data already named three open levers (see memory / SEO gap analysis). A
Malaysia-specific tools layer hits all three at once:

| Known open lever | How tools address it |
|---|---|
| **Conversion, not content** (`seo-data-review`: GSC bottleneck is conversion) | Tools capture **transactional/commercial** intent ("income tax calculator malaysia", "home loan stamp duty"), where an answer article captures only informational intent. A result screen is a natural hand-off to action. |
| **Backlinks = the real lever** (`seo-channels-backlog`) | Interactive calculators are the single **most linkable** asset type — forums, blogs, Reddit, and agency sites link to a working tool far more than to an explainer. |
| **Sponsor funnel** (`sponsor-funnel`: 1company.com + 1financing.com) | Finance/tax/loan tools are high commercial intent → the SponsorCTA to **1financing.com** / 1company tax & secretarial services becomes contextual and earned, not bolted on. |

It also fits the **architecture** with zero new infra: tools are client-side, so they
ship on the existing static Astro + GitHub Pages stack (the `ComplianceCalendarView`
already proves the pattern works here), and the **AI-friendly** positioning extends
naturally — each tool's logic + rate tables can be documented in its `.md` so an AI
agent can reproduce the calculation, not just read about it.

## 3. The moat: Malaysia-specific tools only

The decisive differentiator is **jurisdiction**. Generic tool sites get Malaysian
rules wrong or don't have them at all; NegaraKu already owns the authoritative
articles explaining each rule. The tool is just the **interactive layer on knowledge
we've already published and cited.** Examples where "the Malaysian way" differs from
the generic calculator:

- **Car loans use flat-rate hire-purchase**, not reducing-balance — a generic loan
  calculator is simply wrong for a Malaysian car loan.
- **Income tax = PCB/MTD tables + dozens of MY-specific reliefs** (lifestyle, EPF,
  SSPN, zakat rebate) — no generic calculator models these.
- **Stamp duty, RPGT, zakat, EPF/SOCSO/EIS, road tax, TNB tariff blocks** are all
  statutory MY scales we already document.

## 4. Candidate tools, mapped to existing article clusters

Priority = search intent × MY-moat × sponsor-funnel fit × data-stability.

**Finance & tax (highest priority — intent + funnel)**
- 🚩 **Personal income tax / PCB calculator** — reliefs, rebates, chargeable income.
  Huge seasonal volume (Feb–Apr). Anchors the taxation cluster; → 1company tax.
- 🚩 **Home-financing calculator** — monthly instalment **+ MY stamp duty (SPA + loan),
  legal fees, MOT, valuation** — the real cost generic tools omit. → 1financing.
- **Car loan (flat-rate hire purchase)** calculator — correct MY method.
- **RPGT calculator** (disposal gain × holding-period tier).
- **Stamp duty calculator** (tenancy agreement / SPA / share transfer).
- **PTPTN repayment** and **EPF retirement projection**.
- **Zakat calculator** (income / savings / business) — strong community demand.

**Business (secretarial/accounting cluster + funnel)**
- **SST registration threshold checker** + **Sdn Bhd incorporation cost estimator**.
- **Audit-exemption eligibility checker** — the rules article already exists; make it
  interactive (2-of-3 thresholds). (Note: overlaps the compliance-calendar's checker —
  consolidate, don't duplicate.)
- **Corporate tax estimator** (SME 15/17/24% bands).

**Employment**
- **Salary / take-home calculator** — EPF + SOCSO + EIS + PCB in one.
- **Termination & retrenchment benefits** (Employment Act tiers).
- **Overtime / unpaid-leave** calculators.

**Daily life**
- **Cost-of-living by-state comparison** — directly reuses the DOSM HES table we just
  wired into `cost-of-living-overview`. Pick two states → compare.
- **TNB electricity bill** (tiered tariff) and **road tax** (cc × region) calculators.

Deliberately **excluded**: generic BMI/word-counter/loan/lorem-ipsum — no moat,
off-brand.

## 5. Architecture & conventions

- **New `tools` category** (add to `categories.ts` + a `CATEGORY_COLORS` entry), or a
  dedicated `/tools` section mirroring the existing page pattern (`XView.astro` +
  thin route files, 13-language). Each tool = one interactive component + the
  MasterKit-style prose/FAQ anatomy, but authored as our standard Markdown knowledge
  where possible so it flows through i18n, SEO, `llms.txt` and the funnel.
- **Rates as dated data, not hard-coded.** MY tax tables / EPF rates / SST thresholds
  change yearly. Keep them in a versioned JSON with an "as of <date>" stamp and a cited
  source, so a tool shows which year's rules it uses and goes stale visibly — the same
  freshness discipline as article `reviewDue`.
- **Client-side only.** No salary/income numbers ever leave the browser (privacy =
  on-brand; also no backend to run on Pages).
- **HowTo / FAQ / SoftwareApplication JSON-LD** per tool (rich results + AEO).

## 6. Risks & guardrails

- **Accuracy + maintenance is the real cost** — a wrong tax number is worse than no
  tool. Mitigate with dated rate-data, visible "as of" + source, and a test per
  formula. Budget for annual rate refreshes (Budget season).
- **Not advice.** Tax/legal/financial tools carry a clear "estimate, not professional
  advice — verify with LHDN/your lender" disclaimer (MasterKit does this). Sensitive
  ones (tax, legal) get reviewer `ashton-tan` at publish, per standing rule.
- **Don't duplicate** the compliance-calendar — fold its eligibility logic in, or link.

## 7. Recommended first move

Prototype **one** flagship end-to-end to prove the pattern and measure the funnel
before scaling: the **Personal income tax / PCB calculator** (highest intent, clearest
MY moat, strongest 1company-tax funnel fit, anchors a cluster we already own). Ship it
as the template (component + dated rate-data + prose/FAQ + JSON-LD + SponsorCTA),
then replicate to home-financing and salary/take-home.

**Success metric:** not pageviews — **tool → sponsor-CTA click-through** and
**referring domains** to the tool pages (the two levers above).
