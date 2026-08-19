---
hidden: true
topicId: MY-ACC-0006
title: "Sdn Bhd Bookkeeping: A Chart of Accounts That Survives Filing Season"
seoTitle: "Sdn Bhd Bookkeeping & Chart of Accounts Malaysia"
slug: "sdn-bhd-bookkeeping"
category: "accounting"
subcategory: ["bookkeeping"]
summary: "How to design a Malaysian chart of accounts that maps cleanly to both the SSMxT taxonomy and the Form C tax computation, so neither mapping has to be rebuilt every year."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "A Sdn Bhd chart of accounts has to serve two consumers besides management: the SSM taxonomy that the financial statements are tagged against for MBRS lodgement, and the tax computation that turns accounting profit into chargeable income. Designing for both means separating disallowable expenses into their own accounts at source, choosing one profit-and-loss presentation basis and keeping it, and recording every fixed asset against its capital allowance class from the day it is bought."
keyTakeaways:
  - "Section 245(2) of the Companies Act 2016 requires entries within 60 days of completing the transaction — a quarterly bookkeeper is already non-compliant"
  - "Retention periods differ by statute: seven years after the transaction under s.245(3), seven years from the end of the relevant year under ITA s.82, seven years from the end of the year of assessment under s.82A"
  - "Choose function of expenses or nature of expenses once — the SSM taxonomy carries both and switching breaks your comparatives in the data"
  - "Give every commonly disallowed expense its own account rather than a note at year end: entertainment, donations, fines, private motor expenses"
  - "Keep the fixed asset register by capital allowance class, not just by accounting depreciation category"
  - "Unabsorbed capital allowances carry forward with no time limit; unabsorbed business losses carry forward ten years"
appliesTo: "Owner-managers, in-house bookkeepers and accountants running the books of a Malaysian private company."

faq:
  - q: "How current do the books legally have to be?"
    a: "Section 245(2) of the Companies Act 2016 requires the company, its directors and managers to cause appropriate entries to be made in the accounting and other records within sixty days of the completion of the transactions to which the entries relate. That is a statutory duty, not a best practice, and s.245(9) carries a fine up to RM500,000 or imprisonment up to three years for the company and every officer."
  - q: "How long must I keep the records?"
    a: "Three periods run in parallel and they start on different dates. Section 245(3) of the Companies Act 2016 requires seven years after the completion of the transactions. Section 82 of the Income Tax Act 1967 requires seven years from the end of the year to which the income relates. Section 82A requires seven years from the end of the year of assessment. Where no return has been furnished, both s.82(1A) and s.82A(2) restart the clock from the end of the year in which the return is eventually filed."
  - q: "Should I present expenses by function or by nature?"
    a: "Either is acceptable and the SSM taxonomy carries both, but the choice belongs to the chart of accounts, not to the year-end. Function of expenses means cost of sales, distribution costs, administrative expenses. Nature of expenses means raw materials, employee benefits, depreciation. Switching between years is legal and leaves your tagged comparatives misaligned, so decide once."
  - q: "Do I still need a general ledger if every invoice is in MyInvois?"
    a: "Yes. A validated e-Invoice is a document about one transaction. Section 245(1) requires accounting and other records that sufficiently explain the transactions and financial position of the company and enable true and fair accounts to be prepared, kept in a manner enabling them to be conveniently and properly audited. A stream of validated documents is a source, not a set of records."
  - q: "Why separate disallowable expenses into their own accounts?"
    a: "Because the tax computation adds them back individually, and reconstructing them from a mixed account at year end is where errors and lost deductions live. Entertainment, donations, fines and penalties, private-use motor expenses and provisions all get examined separately. If each sits in its own account, the add-back schedule writes itself and ties to the ledger."

verificationNeeded:
  - "Deductibility of any specific expense should be confirmed against s.33 and s.39 of the Income Tax Act 1967 and the relevant Public Ruling — this page describes chart-of-accounts structure, not a deductibility ruling"
  - "Capital allowance rates and classes should be confirmed against Schedule 3 of the Income Tax Act 1967 and current Public Rulings before setting up asset classes"

obligations:
  - what: "Make accounting entries in the records"
    trigger: "change"
    withinDays: 60
    due: "Within 60 days of completion of the transaction"
    authority: "SSM"
    statute: "Companies Act 2016, s.245(2)"
    consequence: "Fine up to RM500,000 or imprisonment up to three years on the company and every officer, under s.245(9)"
  - what: "Retain accounting and other records"
    trigger: "ongoing"
    due: "Seven years after completion of the transactions or operations to which the entries relate"
    authority: "SSM"
    statute: "Companies Act 2016, s.245(3)"
    consequence: "Fine up to RM500,000 or imprisonment up to three years under s.245(9)"

lang: "en"
masterLanguage: "en"
translationStatus: "master"

status: "published"
aiAssisted: true
reviewer: null
reviewed: 2026-07-22
reviewDue: 2027-07-22
version: "01.00"
revisions:
  - version: "01.00"
    date: 2026-07-20
    change: "Approved and published."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Companies Act 2016 (Act 777), updated text as at 1 August 2022"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
  - title: "Income Tax Act 1967 (Act 53), reprint as at 21 May 2024"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "LHDN"
  - title: "MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, version 2.4"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQs_Malaysian_Business_Reporting_System_MBRS.pdf"
    publisher: "SSM"
    date: "2024-10-01"
  - title: "Public Ruling No. 8/2025 — Tax Treatment for Micro, Small and Medium Companies"
    url: "https://www.hasil.gov.my/wp-content/uploads/20250718-public-ruling-tax-treatment-for-micro-small-and-medium-enterprises.pdf"
    publisher: "LHDN"
    date: "2025-07-18"

entity: "Sdn Bhd bookkeeping and chart of accounts"
relations:
  - { rel: "governs", to: "companies-act-2016" }
  - { rel: "related-to", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "mbrs-tagging-errors" }
  - { rel: "related-to", to: "form-c-and-cp204" }
  - { rel: "related-to", to: "financial-year-end" }
  - { rel: "related-to", to: "e-invoice" }
related: ["mbrs-2-filing-guide", "mbrs-tagging-errors", "form-c-and-cp204", "financial-year-end", "e-invoice", "mfrs-vs-mpers", "corporate-tax-rates"]
keywords: ["Sdn Bhd bookkeeping", "chart of accounts Malaysia", "monthly close Malaysia", "section 245 accounting records", "tax computation add back", "capital allowance register", "SSMxT mapping chart of accounts"]
---

Most bookkeeping advice for a Sdn Bhd stops at debits and credits. That problem
was solved in the fifteenth century. The problem that is actually unsolved is
that your chart of accounts has three consumers, and only one of them is you.

The second is **SSM**, which now reads your financial statements as tagged data
against a taxonomy you cannot extend. The third is **LHDN**, which reads your
profit before tax as the opening line of a computation that will add back
whatever you failed to separate.

Design for one consumer and you rebuild the mapping every year. Design for all
three once and you never touch it again.

## The statutory floor

Two things are legal duties rather than housekeeping.

**Currency of the records.** Section 245(2) of the Companies Act 2016 requires the
company, its directors and managers to cause appropriate entries to be made in
the accounting and other records **within sixty days of the completion of the
transactions** to which the entries relate. A bookkeeper who posts quarterly is
producing a company that is out of compliance four weeks out of every thirteen.

**Sufficiency.** Section 245(1) demands records that sufficiently explain the
transactions and financial position of the company and **enable true and fair
accounts to be prepared**, kept in a manner enabling them to be **conveniently and
properly audited**. That second limb survives audit exemption. Nothing in Practice
Directive 10/2024 touches s.245.

Section 245(9) prices both: a fine up to **RM500,000** or imprisonment up to three
years, on the company and every officer.

**Retention runs on three clocks.** They are not the same clock and they do not
start on the same day:

| Statute | Period | Starts from |
| --- | --- | --- |
| CA 2016 s.245(3) | 7 years | Completion of the transaction |
| ITA 1967 s.82(1)(a) | 7 years | End of the year to which the income relates |
| ITA 1967 s.82A(1) | 7 years | End of the year of assessment |

And where a return has not been furnished, s.82(1A) and s.82A(2) both restart the
seven years from the end of the year in which the return is eventually filed. A
company that files late has extended its own retention obligation.

## Design principle 1: name accounts after the tax treatment, not the payee

The tax computation begins with profit before tax and adds back what is not
deductible. Every add-back you cannot pull straight off a ledger account is an
hour of reconstruction and a risk of understatement.

So give each of these its own account, at source, from day one:

- **Entertainment** — split by the categories your adviser applies, not as one bucket
- **Donations** — approved institutions separated from everything else
- **Fines, penalties and compounds** — including late lodgement fees and traffic summonses
- **Motor vehicle expenses** — by vehicle, so private-use apportionment has a base
- **Depreciation and amortisation** — always separate, always added back
- **Provisions** — general provisions distinguished from specific write-offs
- **Professional fees** — capital-related work separated from recurring compliance
- **Interest** — separated where there is any investment or non-business borrowing
- **Directors' remuneration, fees and benefits** — separated from staff costs

None of that is exotic. What makes it work is that the split happens when the
invoice is posted, by someone looking at the invoice, rather than in March by
someone looking at a total.

Deductibility itself turns on s.33 and the prohibitions in s.39 of the Income Tax
Act 1967, and on the applicable Public Rulings. This page is about structure, not
about the ruling on any particular expense.

## Design principle 2: the fixed asset register is a tax record

Accounting depreciation and capital allowances are unrelated systems that happen
to describe the same assets. Companies that maintain the register only for
depreciation end up reconstructing the capital allowance position annually.

Carry, per asset: acquisition date, cost, the **capital allowance class** under
Schedule 3, initial and annual allowance claimed to date, residual expenditure,
disposal date and proceeds. Disposals are the ones that bite — a balancing charge
or allowance arises whether or not anyone remembered to compute it.

Two carry-forward rules are worth building the register around, because they
change how much the historical detail matters:

- **Unabsorbed capital allowances carry forward with no time limit** under paragraph 75 of Schedule 3.
- **Unabsorbed business losses carry forward ten years**, under s.44(5F), following the Finance Act 2021 amendment applied retrospectively from YA2019.

Both are subject to the shareholder continuity test in s.44(5A) and (5B). A
register that cannot show the origin year of each unabsorbed amount cannot
support either claim.

## Design principle 3: pick a presentation basis and never move

The SSM taxonomy carries alternative presentations, and the entry point you file
under forces you to choose one:

- Statement of financial position — **current/non-current** or **order of liquidity**
- Statement of profit or loss — **function of expenses** or **nature of expenses**
- Statement of cash flows — **direct** or **indirect**

The profit-and-loss choice is the one with chart-of-accounts consequences.
Function means cost of sales, distribution costs, administrative expenses. Nature
means raw materials and consumables, employee benefits, depreciation, other
expenses. A chart built for one cannot produce the other without an analysis
layer.

Choose based on how the business is actually managed, then build the account
codes so that the statutory presentation is a subtotal of the ledger rather than
a year-end reclassification. Switching bases between years is permitted and it
leaves your tagged comparatives failing to line up in SSM's data even though the
printed accounts read fine.

## Design principle 4: no invented tags, so no orphan accounts

Company extensions to the SSM taxonomy are **not allowed**. Where the taxonomy
has no matching concept, the detail goes into a text block — lodged, but no longer
individually machine-readable.

That constraint should feed back into the chart. An account named for an internal
project, a person, or a one-off arrangement has no taxonomy concept waiting for
it and will be blocked or lumped at filing time. Name accounts in the vocabulary
of the accounting standards you report under, which is the vocabulary the
taxonomy inherited from the IFRS Accounting Taxonomy 2022.

A useful test: if you cannot find a plausible SSMxT concept for an account using
the taxonomy browser inside mTool, that account is a mapping problem you have
scheduled for yourself.

## A monthly close that produces both outputs

1. **Post to the sixty-day rule, not to the deadline.** Section 245(2) is monthly work by design.
2. **Reconcile bank, receivables, payables and intercompany every month.** Unreconciled intercompany is the single most reliable way to blow an audit timetable.
3. **Post the disallowables to their own accounts as you go.** Never at year end.
4. **Update the fixed asset register on acquisition and disposal**, with the capital allowance class recorded at the point of purchase.
5. **Reconcile revenue to your validated e-Invoice submissions**, including consolidated e-Invoices, so the two never diverge unexplained.
6. **Reconcile payroll to EPF, SOCSO, EIS and PCB remittances**, and to the year-end Form E and EA figures.
7. **Cross-foot the statements against each other monthly.** In XBRL, an internal inconsistency stops the file generating; finding it in month three costs nothing.
8. **Keep a standing add-back schedule** that ties to ledger account codes. At year end it should be a print, not an exercise.
9. **Keep the mapping document** — account code, SSMxT concept, and the reason for any judgement call.

## Where e-Invoice fits, and where it does not

MyInvois validation confirms that a document was submitted and accepted. It does
not create a set of accounting records, and it does not satisfy s.245.

Keep the two layers distinct in the ledger design. Validated e-Invoice
documents — including consolidated e-Invoices for transactions that did not require
an individual one — are **source documents**. The ledger is the record. The
reconciliation between them is a monthly control, because a gap that opens up in
month two is discoverable and a gap discovered at year end is an investigation.

## Common mistakes

- **Quarterly bookkeeping.** Section 245(2) is a sixty-day rule.
- **One "sundry expenses" account** that has to be dissected every March.
- **A fixed asset register built only for depreciation**, with no capital allowance class and no disposal history.
- **Changing the profit-and-loss presentation basis** between years and silently breaking the tagged comparatives.
- **Account names drawn from internal projects or people**, with no plausible taxonomy concept.
- **Assuming validated e-Invoices are the accounting records.** They are source documents.
- **Assuming retention is one seven-year clock.** Three clocks, three start dates, and late filing extends two of them.
- **Assuming audit exemption relaxes s.245.** It does not — including the requirement that records be capable of being conveniently and properly audited.
- **Losing the origin year of unabsorbed losses and capital allowances**, which is exactly what the ten-year limit and the continuity test turn on.

## What's next

Open your chart of accounts and run three columns against it: the SSMxT concept
each account maps to, the tax treatment each account attracts, and whether the
account name would mean anything to someone reading the taxonomy. Any row you
cannot complete is a year-end problem you have already scheduled.

Fix it before your next financial year begins, not during it — the changeover is
cheap at a year boundary and expensive in the middle.
