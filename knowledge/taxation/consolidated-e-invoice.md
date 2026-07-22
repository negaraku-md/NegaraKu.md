---
topicId: MY-TAX-0005
title: "Consolidated e-Invoices and the Industries That Cannot Use Them"
seoTitle: "Consolidated e-Invoice Malaysia: Rules and Exclusions"
slug: "consolidated-e-invoice"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "How monthly consolidated e-Invoices work, the RM10,000 single-transaction cut-off, and the nine industries and activities barred from consolidating."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Where a buyer does not ask for an e-Invoice, the supplier issues a normal receipt and aggregates those receipts into one consolidated e-Invoice, submitted to LHDN within seven calendar days after month end. Consolidation is barred for nine listed activities, including motor vehicle sales, flight tickets, construction contracts, agent payments, electricity, telecommunications, and since 1 January 2026 any single transaction above RM10,000."
keyTakeaways:
  - "Deadline is 7 calendar days after month end — a hard monthly clock, not an annual one"
  - "Any single transaction above RM10,000 must be a transactional e-Invoice, from 1 January 2026"
  - "Nine industries and activities can never consolidate, listed in Table 3.6"
  - "Buyer must be given a cut-off — a request made within the transaction month must be honoured"
  - "Buyer's name is General Public and buyer's TIN is EI00000000010"
  - "Consolidated e-Invoices are not shared with buyers and cannot be rejected by them"
  - "Submission limits: 100 documents and 5MB per submission, 300KB per document"
appliesTo: "Retailers, F&B operators, service providers billing consumers, and anyone issuing high volumes of low-value receipts."

faq:
  - q: "When exactly is a consolidated e-Invoice due?"
    a: "Within seven calendar days after the end of the month, under section 3.6.2 of the e-Invoice Specific Guideline. It aggregates receipts issued in the previous month. For businesses that bill by statement rather than receipt, section 4.3.3 applies the same seven-day rule to the end of the billing month. There is no quarterly or annual alternative."
  - q: "What is the RM10,000 rule?"
    a: "Item 7 of Table 3.6 in the e-Invoice Specific Guideline provides that, across all industries, any single transaction with a value exceeding RM10,000 must have its own transactional e-Invoice and cannot be swept into a consolidated e-Invoice. LHDN states this took effect from 1 January 2026. Transactions at or below RM10,000 can still be consolidated if the buyer does not request otherwise."
  - q: "Can a customer demand an individual e-Invoice after I have given them a receipt?"
    a: "Yes, if they ask within the month of the transaction. Section 3.6.8 sets that as the cut-off, precisely so the supplier can close off the month's consolidation. Buyers are encouraged to ask promptly. A supplier inside its interim relaxation period may decline the request entirely under section 16.2(d)."
  - q: "Which industries can never issue a consolidated e-Invoice?"
    a: "Table 3.6 lists motor vehicle sales, flight tickets and private charter, construction contracts as defined in the Income Tax (Construction Contracts) Regulations 2007, pay-outs to betting and gaming winners, payments to agents, dealers and distributors, electricity distribution and supply, and telecommunications postpaid plans, internet subscriptions and electronic device sales. Luxury goods and jewellery is listed but on hold pending details from LHDN."
  - q: "What do I put in the buyer fields on a consolidated e-Invoice?"
    a: "Appendix 2 of the e-Invoice Specific Guideline requires the buyer's name to be General Public and the buyer's TIN to be EI00000000010. The buyer's registration or identification number, address, contact number and SST registration number are all entered as NA. The description field must carry the receipt reference numbers."
  - q: "Do I have to send the consolidated e-Invoice to my customers?"
    a: "No. Under sections 3.6.10 and 4.3.5, LHDN notifies only the supplier, there is no buyer rejection route, and the validated consolidated e-Invoice serves as the supplier's proof of income. It is not shared with buyers."

verificationNeeded:
  - "The activation date and scope for the luxury goods and jewellery category in Table 3.6 — LHDN states details will be released in due course and consolidation remains allowed until further notice"
  - "Whether the casino and gaming-machine carve-out from the betting pay-out rule has an end date — LHDN states until further notice"

lang: "en"
masterLanguage: "en"
translationStatus: "master"

status: "published"
aiAssisted: true
reviewer: "ashton-tan"
reviewed: 2026-07-22
reviewDue: 2027-07-22
version: "0.1"
revisions:
  - version: "0.1"
    date: 2026-07-20
    change: "Initial draft from e-Invoice Specific Guideline v4.8."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "e-Invoice Specific Guideline (Version 4.8)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "e-Invoice Guideline (Version 4.7)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "Finance (No. 2) Act 2023 (Act 851) — section 82C(7)"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Government of Malaysia"
    date: "2023-12-29"
  - title: "MyInvois SDK — document validation rules"
    url: "https://sdk.myinvois.hasil.gov.my/document-validation-rules/"
    publisher: "LHDN"

entity: "Consolidated e-Invoice"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
  - { rel: "explained-in", to: "myinvois-phases" }
related: ["e-invoicing", "myinvois-phases", "self-billed-e-invoice", "e-invoice-data-fields", "myinvois-integration"]
keywords: ["consolidated e-Invoice", "e-invois disatukan", "RM10000 e-Invoice rule", "consolidated e-Invoice deadline", "General Public EI00000000010", "industries cannot consolidate e-Invoice"]
---

Consolidation is the concession that makes e-Invoicing survivable for a
mamak, a minimart or a clinic. It is also the concession most likely to be
withdrawn from under you — by the RM10,000 cut-off, by your industry, or by a
single customer asking for a proper invoice on the 29th of the month.

The mechanic is simple. Ask the buyer whether they need an e-Invoice. If they
say no, hand over a normal receipt exactly as you do today — that receipt is not
submitted anywhere. Then, **within seven calendar days after month end**, roll
last month's receipts into one consolidated e-Invoice and submit it for
validation as your proof of income.

The authority is s.82C(7) of the Income Tax Act 1967, which lets the Director
General determine that a person may consolidate transactions into a consolidated
transaction invoice, transmitted within a specified time. The specified time is
in section 3.6.2 of the e-Invoice Specific Guideline.

## What goes in a consolidated e-Invoice?

Appendix 2 of the Specific Guideline fixes the buyer block:

| Field | Value |
| --- | --- |
| Buyer's Name | **General Public** |
| Buyer's TIN | **EI00000000010** |
| Buyer's registration / identification / passport number | NA |
| Buyer's Address | NA |
| Buyer's Contact Number | NA |
| Buyer's SST Registration Number | NA |

The description field is the one with real requirements. LHDN allows three
methods, or a combination:

1. Each receipt summarised as a **separate line item**
2. A **continuous run of receipt numbers** as one line item, with each break in
   the number chain starting a new line item
3. Each **branch or location** submitting its own consolidated e-Invoice using
   method 1 or 2

Whichever you pick, the receipt reference number for each transaction must
appear in the description field. Regulated industries — financial institutions,
payment systems and similar entities — are excused from disclosing statement or
bill reference numbers under section 4.3.7.

## What are the system limits?

Section 3.6.4 sets three, to protect MyInvois performance:

- maximum **5MB** per submission
- maximum **100 e-Invoices** per submission
- maximum **300KB** per e-Invoice

A busy month will exceed these, and LHDN explicitly permits splitting the
receipts across several consolidated e-Invoices. A retailer with 40,000 receipts
does not file one enormous document.

## Which activities can never be consolidated?

Table 3.6 of the Specific Guideline. Each of these requires a transactional
e-Invoice with the buyer's real details.

| Industry or activity | Scope |
| --- | --- |
| **Automotive** | Sale of any motor vehicle, including trailers |
| **Aviation** | Sale of flight tickets, private charter |
| **Luxury goods and jewellery** | On hold — details to be released, consolidation still allowed until further notice |
| **Construction** | Construction contractors on a construction contract as defined in the Income Tax (Construction Contracts) Regulations 2007 |
| **Licensed betting and gaming** | Pay-outs to winners, except casino and gaming-machine pay-outs, which are exempt until further notice |
| **Payments to agents, dealers, distributors** | As defined in s.83A(4) of the Income Tax Act 1967 |
| **All industries** | Any single transaction **exceeding RM10,000** — from **1 January 2026** |
| **Electricity service providers** | Distribution, supply or sale of electricity — from **1 January 2026** |
| **Telecommunications** | Postpaid plans, internet subscriptions, sale of electronic devices — from **1 January 2026** |

Three of these nine are recent. The RM10,000 rule, electricity and
telecommunications all took effect on 1 January 2026, and a great deal of
material still ranking online predates them.

**Most guides describe the RM10,000 rule as an industry rule.** It is not. Table
3.6 lists it under *all industries*: a single RM12,000 sale by a hardware shop
needs a transactional e-Invoice even though every other sale that month can be
consolidated. LHDN's own Example 24 works exactly this case.

## What about individual buyers who will not give their details?

Section 3.7.3 acknowledges the practical problem and routes to the concession in
section 3.5.4. A Malaysian individual may give a TIN, **or** a MyKad or
MyTentera number, **or** both. A non-Malaysian individual may give a TIN, or
both a TIN and a passport, MyPR or MyKAS number — and where they have no TIN at
all, the supplier uses a general TIN together with the passport number.

That is enough to issue a compliant transactional e-Invoice to a walk-in
customer buying a car.

## How does the buyer's request interact with the monthly cut-off?

Section 3.6.8 gives the answer competitors usually skip: a buyer who has already
received a receipt can come back and ask for an e-Invoice, but only **within the
month of the transaction**. That boundary exists so the supplier can close its
consolidation. A request in March for a January receipt is out of time.

Suppliers still inside their interim relaxation period may decline the request
outright under section 16.2(d), provided they are consolidating. For phase 4
taxpayers that concession runs to 31 December 2027.

## What is different about the workflow?

Two things, both in section 3.6.10:

- LHDN notifies **the supplier only**. There is no buyer notification, and
  therefore **no buyer rejection request** — the 72-hour rejection route does not
  exist for a consolidated document.
- The validated consolidated e-Invoice is the supplier's proof of income and is
  **not shared with buyers**.

Cancellation by the supplier within 72 hours of validation still applies. After
that, adjustments go through a credit, debit or refund note e-Invoice.

## Common mistakes

- **Consolidating a transaction above RM10,000.** Since 1 January 2026 this
  applies to every industry, not a listed few.
- **Missing the seven-day window.** It is seven *calendar* days, and it runs from
  month end, not from your accounting close.
- **Treating an interim relaxation period as permanent.** Phases 1 to 3 lost the
  blanket consolidation concession on 31 January 2025, 30 June 2025 and
  31 December 2025 respectively.
- **Putting free text in the description field after relaxation.** Section
  16.2(c) allowed any text during relaxation; outside it, receipt reference
  numbers are mandatory.
- **Consolidating self-billed documents.** Only the four narrow cases in section
  3.6.5 qualify.
- **Assuming a construction contractor can consolidate small jobs.** Table 3.6
  keys off the contract definition in the 2007 Regulations, not the invoice
  value.
- **Filing one submission for a whole retail month.** The 100-document and 5MB
  caps will reject it.

## What's next

Run your last full month of receipts through two filters: anything over
RM10,000, and anything in the Table 3.6 list. What survives both is your
consolidation base — and its size tells you whether the free Portal will hold.
If you also pay agents, individuals or overseas suppliers, the self-billed rules
have their own, much narrower, consolidation exceptions.
