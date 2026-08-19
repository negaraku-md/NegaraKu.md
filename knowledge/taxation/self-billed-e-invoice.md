---
hidden: true
topicId: MY-TAX-0009
title: "Self-Billed e-Invoices: When the Buyer Has to Issue"
seoTitle: "Self-Billed e-Invoice Malaysia: Rules and Scenarios"
slug: "self-billed-e-invoice"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "The nine circumstances where the buyer must issue the e-Invoice, how foreign suppliers are handled, and which general TIN to use when the supplier has none."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "A self-billed e-Invoice is issued by the buyer, not the supplier, in nine circumstances listed in section 8.3 of the e-Invoice Specific Guideline — including payments to agents and dealers, purchases from foreign suppliers, dividend distributions, e-commerce, betting pay-outs, most interest payments, insurance claims, capital repayments, and any transaction with an individual not conducting a business. The validated document is the buyer's proof of expense."
keyTakeaways:
  - "Nine self-billed circumstances, in s.8.3 of the e-Invoice Specific Guideline"
  - "Every purchase from a foreign supplier needs a self-billed e-Invoice — there is no de minimis"
  - "Imported goods: issue by end of the second month after customs clearance"
  - "Imported services: by end of the month after payment or invoice, whichever is earlier"
  - "Use general TIN EI00000000030 where a foreign supplier has no TIN"
  - "Interest has five exceptions where the supplier issues a normal e-Invoice instead"
  - "Self-billed e-Invoices cannot normally be consolidated — only four narrow cases can"
appliesTo: "Businesses that pay commissions, buy from overseas, pay individual landlords or contractors, distribute dividends, or pay interest to anyone other than a bank."

faq:
  - q: "Do I need a self-billed e-Invoice for a small overseas software subscription?"
    a: "Yes. Section 10.4.3 of the e-Invoice Specific Guideline requires a self-billed e-Invoice for goods sold or services rendered by any foreign supplier, with no minimum value. The foreign seller is not mandated to use MyInvois, so the Malaysian purchaser assumes the supplier role to document the expense. Where service tax on imported taxable services applies, that amount must be included in the same self-billed e-Invoice."
  - q: "What TIN do I put for a foreign supplier that does not have one?"
    a: "Use the general TIN EI00000000030, listed in Appendix 1 of the e-Invoice Specific Guideline. It covers both a non-Malaysian individual supplier who only provides a passport, MyPR or MyKAS number, and any import transaction where the foreign supplier's TIN is not available or not provided. Other missing supplier fields are filled with NA, except the MSIC code, which takes 00000."
  - q: "Do I issue a self-billed e-Invoice for interest paid to my bank?"
    a: "No. Section 8.3(g)(i) excludes businesses such as financial institutions that charge interest to the public at large — the bank issues the e-Invoice to you. The other exclusions are interest from an employee to an employer, interest from a foreign payor to a Malaysian taxpayer, interest to a Malaysian related company providing centralised treasury services, and late payment charges imposed by Malaysian taxpayers."
  - q: "Can I bundle my self-billed e-Invoices into one monthly submission?"
    a: "Only in four cases under section 3.6.5 — transactions with individuals not conducting a business, interest paid to the public at large, insurance claim or benefit payments to individuals and government bodies, and self-billed circumstances involving your own overseas branches. Everything else needs one self-billed e-Invoice per transaction, unless you are still inside your interim relaxation period."
  - q: "Do I have to send the self-billed e-Invoice to the supplier?"
    a: "Generally yes — section 8.5 obliges the buyer to share the validated self-billed e-Invoice with the supplier, and LHDN allows either the document itself or a visual representation carrying the QR code. Cross-border is the exception: section 10.4.6 says the Malaysian purchaser is not obliged to share it with the foreign seller, and LHDN sends no notification to the foreign party."
  - q: "Does a self-billed e-Invoice replace the supplier's own invoice?"
    a: "Yes, for the transactions it covers. Section 8.4 states that once a self-billed e-Invoice has been issued and validated, the other party is no longer required to issue an e-Invoice for that transaction. The validated self-billed e-Invoice is your proof of expense for tax purposes."

verificationNeeded:
  - "Whether the betting and gaming carve-out for casinos and gaming machines has been lifted — LHDN states it applies until further notice with no end date published"

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
  - title: "e-Invoice Specific Guideline (Version 4.8)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "e-Invoice Guideline (Version 4.7)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "Finance (No. 2) Act 2023 (Act 851) — section 82C"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Government of Malaysia"
    date: "2023-12-29"
  - title: "Rujukan Pelaksanaan e-Invois — Garis Panduan"
    url: "https://www.hasil.gov.my/e-invois/rujukan-pelaksanaan-e-invois/garis-panduan/"
    publisher: "LHDN"
    date: "2026-07-11"

entity: "Self-billed e-Invoice"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "related-to", to: "consolidated-e-invoice" }
  - { rel: "requires", to: "e-invoice-data-fields" }
related: ["e-invoicing", "myinvois-phases", "consolidated-e-invoice", "e-invoice-data-fields", "e-invoice-vs-tax-invoice"]
keywords: ["self-billed e-Invoice", "self billed invoice Malaysia", "foreign supplier e-Invoice", "general TIN EI00000000030", "e-invois belian sendiri", "agent commission e-Invoice"]
---

The company most likely to be caught out by e-Invoicing is not the one with a
big sales ledger. It is the one that buys — commissions to agents, a landlord
who is an individual, a Singapore SaaS subscription, an interest payment to the
holding company. In every one of those, **the buyer issues the invoice**, and
the supplier does nothing at all.

Section 82C(6) of the Income Tax Act 1967 is the hook: where a person acquires
goods or enjoys services, that person shall issue a self-billed invoice, and it
is treated as an electronic invoice. Section 120(1)(d) makes failing to do so an
offence. The detail lives in section 8 of the e-Invoice Specific Guideline.

## When does the buyer have to issue?

Section 8.3 lists nine circumstances.

| # | Circumstance | Note |
| --- | --- | --- |
| a | Payments to agents, dealers or distributors | As defined in s.83A(4) ITA 1967 |
| b | Goods sold or services rendered by **foreign suppliers** | Both imports of goods and of services |
| c | Profit distribution, e.g. dividends | Subject to the exceptions in section 11 |
| d | E-commerce transactions | Platform operator issues, see section 14 |
| e | Pay-outs to betting and gaming winners | Casino and gaming-machine pay-outs excluded until further notice |
| f | Transactions with **individuals not conducting a business** | Only if no other circumstance applies |
| g | Interest payments | Five exceptions, below |
| h | Insurance claim, compensation or benefit payments | From an insurer's insurance business |
| i | Capital reduction, share or unit redemption, share buyback, return of capital, liquidation proceeds | Timing rules are specific to this item |

Most commercial guides list eight. The ninth — capital repayments under
8.3(i) — is the one that catches corporate finance teams, because it also
carries its own timing rule: the date of the written agreement, or the date of
government approval where approval is required, or the date the last condition
is satisfied, or the completion date where there is no written agreement.

## Which interest payments are excluded?

Section 8.3(g) reverses the normal position for five categories. In each, the
**supplier issues an ordinary e-Invoice** and you do not self-bill:

1. Businesses charging interest to the public at large — banks and other
   financial institutions
2. Interest paid by an employee to an employer, such as a staff loan
3. Interest paid by a foreign payor to a Malaysian taxpayer
4. Interest to a **Malaysian-incorporated related company providing centralised
   treasury services** to its group
5. Late payment interest or charges imposed by Malaysian taxpayers

Item 4 is the one groups get wrong. An intercompany loan from your holding
company is self-billed. The identical loan from a group treasury entity is not —
treasury issues you a normal e-Invoice. LHDN's own Examples 16 and 17 set the two
side by side.

Item 5 matters to anyone with credit terms. A 3% late payment charge on an
overdue customer is your income, and you issue the e-Invoice for it.

## How do foreign suppliers work?

A foreign supplier is anyone operating outside Malaysia or not established in
Malaysia, including a non-Malaysian individual. They are not mandated to use
MyInvois, so section 10.4.3 puts the documentation duty on the Malaysian
purchaser. The roles invert: the foreign seller is the *supplier* named in the
document, and you, the buyer, are the issuer.

**Deadlines are different for goods and services.**

| Import type | Issue the self-billed e-Invoice by |
| --- | --- |
| **Goods** | End of the **second month** following the month customs clearance is obtained |
| **Services** | End of the **month following** the earlier of payment made or receipt of the foreign supplier's invoice |

The services test mirrors the imported taxable services rules under SST, which
is deliberate — and section 10.4.7 requires you to include the service tax
amount on imported taxable services **inside the self-billed e-Invoice** where it
applies. One document, two regimes.

For imports of goods, Appendix 2 of the e-Invoice Guideline adds a mandatory
annexure field: the reference number of Customs Form No. 1.

## What do I put when the foreign supplier's details are missing?

This is the single most common blocker, and LHDN has answered it field by field
in Table 10.1.

| Field | If not available or not provided |
| --- | --- |
| Supplier's TIN | **EI00000000030** |
| Supplier's registration / passport number | NA |
| Supplier's SST registration number | NA |
| Supplier's MSIC code | **00000** |
| Supplier's business activity description | NA |
| Classification | A 3-digit code from LHDN's catalogue |

You are expected to extract what you can from the foreign invoice or ask for it.
NA is a fallback, not a default.

## What are the general TINs?

Appendix 1 of the e-Invoice Specific Guideline publishes four.

| General TIN | Used for |
| --- | --- |
| **EI00000000010** | Malaysian individual providing only a MyKad or MyTentera number; buyer's TIN in a consolidated e-Invoice; **supplier's TIN in a consolidated self-billed e-Invoice** |
| **EI00000000020** | Non-Malaysian individual buyer providing only a passport, MyPR or MyKAS number; buyer or shipping recipient on exports where the foreign TIN is unavailable |
| **EI00000000030** | Non-Malaysian individual supplier providing only a passport, MyPR or MyKAS number; **foreign supplier on imports** where the TIN is unavailable — both self-billed |
| **EI00000000040** | Buyer's TIN for the Government, state governments and authorities, local authorities, statutory bodies, and exempt institutions with no assigned TIN |

The pairing to remember: **020 is a buyer, 030 is a supplier.** Getting them the
wrong way round is a validation failure, not a cosmetic one.

## Can self-billed e-Invoices be consolidated?

Normally no. Section 3.6.5 states consolidation does not apply to self-billed
e-Invoices, with four exceptions:

- transactions with individuals who are not conducting a business
- interest payments to the public at large
- insurance claim, compensation or benefit payments to individuals not
  conducting a business, and to government, government authorities, state
  governments and state authorities
- self-billed circumstances involving the taxpayer's **own overseas branches or
  offices**

Where consolidation is allowed, the deadline is the same as for ordinary
consolidated e-Invoices: monthly, **within seven calendar days after month end**.
The supplier's TIN in a consolidated self-billed e-Invoice is EI00000000010.

While a taxpayer is inside its interim relaxation period, section 16.2(b) lets it
consolidate **all** self-billed circumstances — but that window has closed for
phases 1 to 3 and runs only to 31 December 2027 for phase 4.

## Do I still have to give it to the supplier?

Yes, in domestic cases. Section 8.5 obliges the buyer to share the validated
self-billed e-Invoice, and LHDN concedes that either the document or a visual
representation with the QR code embedded will do. If you submit via API rather
than the Portal, embedding that QR code is your job.

Cross-border is the exception. Under section 10.4.6 you are not obliged to share
it with the foreign seller, and LHDN notifies only you.

## Common mistakes

- **Waiting for the foreign supplier to comply.** They never will. Overseas
  vendors are outside Malaysian law, which is precisely why the duty was shifted
  to you.
- **Treating self-billing as optional below some value.** There is no de minimis
  in section 8.3 or section 10.4.
- **Self-billing bank interest.** Section 8.3(g)(i) puts that on the bank. Many
  guides list interest flatly as self-billed and omit all five exceptions.
- **Using EI00000000020 for a foreign supplier.** That is the foreign *buyer*
  code. Imports take EI00000000030.
- **Filing one monthly self-billed batch for commissions.** Agent, dealer and
  distributor payments are not in the section 3.6.5 exception list, so each
  payment needs its own document once relaxation ends.
- **Omitting imported service tax from the self-billed e-Invoice.** Section
  10.4.7 requires it where the imported taxable service rules apply.
- **Self-billing your own employees.** Employment income is outside e-Invoicing
  entirely under section 1.6.7 of the e-Invoice Guideline.

## What's next

Work through your payables ledger, not your receivables, and tag every line
against the nine circumstances — commissions, rent to individuals, overseas
subscriptions, intercompany interest, dividends. That list, not your sales
volume, determines whether the free Portal is survivable or you need an
integration. Check separately which of those can be consolidated, because the
four exceptions in section 3.6.5 are the only relief once your relaxation period
ends.
