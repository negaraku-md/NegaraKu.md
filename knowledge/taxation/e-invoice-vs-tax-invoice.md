---
topicId: MY-TAX-0006
title: "e-Invoice vs SST Tax Invoice: Two Regimes, Two Documents"
seoTitle: "e-Invoice vs Tax Invoice Malaysia: LHDN vs RMCD"
slug: "e-invoice-vs-tax-invoice"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Why an LHDN-validated e-Invoice does not automatically satisfy the Sales Tax Act 2018 or Service Tax Act 2018, and what has to be on the document for it to do both jobs."

tier: "3"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "The e-Invoice is an income tax document under s.82C of the Income Tax Act 1967, administered by LHDN. The SST invoice is a separate document required by the Sales Tax Act 2018 and Service Tax Act 2018, administered by RMCD. One document can serve both, but only if it carries every particular each regime requires — s.82C(4) says that where the particulars conflict, the e-Invoice is valid for income tax purposes only."
keyTakeaways:
  - "Two statutes, two regulators — LHDN under ITA 1967, RMCD under the 2018 Tax Acts"
  - "s.82C(4) ITA 1967 lets one document do both jobs, but only where the particulars agree"
  - "Where they conflict, the e-Invoice is enforceable for income tax purposes only"
  - "Service tax particulars sit in reg. 10 of the Service Tax Regulations 2018"
  - "Sales tax particulars sit in reg. 7 of the Sales Tax Regulations 2018"
  - "MyInvois data is shared with RMCD under s.138(4)(aa) of the ITA 1967"
appliesTo: "SST-registered businesses that are also in scope for e-Invoicing, and anyone designing an invoice template that has to satisfy both regulators."

verificationNeeded:
  - "Whether RMCD has issued a dedicated guide reconciling the e-Invoice visual representation with the SST invoice particulars — none was located on mysst.customs.gov.my"

lang: "en"
masterLanguage: "en"
translationStatus: "master"

status: "draft"
aiAssisted: true
reviewer: null
version: "0.1"
revisions:
  - version: "0.1"
    date: 2026-07-20
    change: "Initial draft from Act 851, the SST regulations and e-Invoice Guideline v4.7."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Finance (No. 2) Act 2023 (Act 851) — section 82C"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Government of Malaysia"
    date: "2023-12-29"
  - title: "Service Tax Regulations 2018 — regulation 10"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Service-Tax-Regulations-2018.pdf"
    publisher: "RMCD"
  - title: "Sales Tax Regulations 2018 — regulation 7"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Sales-Tax-Regulations-2018.pdf"
    publisher: "RMCD"
  - title: "e-Invoice Guideline (Version 4.7)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MySST — Issuing Invoices"
    url: "https://mysst.customs.gov.my/issuing-invoices/"
    publisher: "RMCD"

entity: "e-Invoice compared with the SST tax invoice"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "compares-with", to: "sst-explained" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "governs", to: "service-tax-act-2018" }
  - { rel: "governs", to: "sales-tax-act-2018" }
related: ["e-invoicing", "sst-explained", "myinvois-phases", "e-invoice-data-fields", "consolidated-e-invoice"]
keywords: ["e-Invoice vs tax invoice", "SST invoice requirements", "Service Tax Regulations 2018 regulation 10", "sales tax invoice particulars", "LHDN RMCD invoice", "invois cukai SST"]
---

Validating an invoice through MyInvois does not make it an SST invoice. That
sentence costs SST-registered businesses more trouble than any other point in
the e-Invoicing rollout, because two regulators want two different things from
the same piece of paper.

## Two regimes at a glance

| | e-Invoice | SST invoice |
| --- | --- | --- |
| Statute | Income Tax Act 1967, **s.82C** | **Sales Tax Act 2018** / **Service Tax Act 2018**, s.21 |
| Regulator | **LHDN** | **RMCD** |
| Particulars set by | e-Invoice Guideline, under s.134A ITA 1967 | **reg. 7** Sales Tax Regulations 2018 / **reg. 10** Service Tax Regulations 2018 |
| Who must issue | Taxpayers in scope by turnover phase | **Registered** manufacturers and registered persons |
| Validation | Transmitted to and validated by LHDN | None — no submission, no reference number |
| Purpose | Proof of income and expense for income tax | Evidence of tax charged for SST accounting |

Neither replaces the other. An SST-registered company below RM1 million in
turnover is exempt from e-Invoicing and still issues SST invoices. A large
non-registered company is the reverse.

## The provision that actually governs this

Section 82C(4) of the Income Tax Act 1967, inserted by the Finance (No. 2) Act
2023:

> Where a person is required to issue an invoice under any other written law,
> the electronic invoice including any other particulars as may be required
> shall be construed as an invoice issued under that law — **provided that where
> the particulars of the electronic invoice are inconsistent with the
> requirements for the issuance of invoice under that law, the electronic
> invoice shall only be valid and enforceable for the purposes of this Act.**

Read the proviso twice. One document can satisfy both regimes, but only if it
carries everything both ask for. Fall short on the RMCD side and you have not
issued a defective document for both — you have a perfectly good income tax
document and **no SST invoice at all**.

Sections 2.6.3 and 2.6.4 of the e-Invoice Guideline say the same in plainer
words: taxpayers may adopt any visual representation format, and are *advised*
to include the particulars required under laws such as the Sales Tax Act 2018
and Service Tax Act 2018. Where the visual representation carries the Service
Tax Regulations 2018 particulars, it can be used for service tax purposes.

## What RMCD requires that the e-Invoice field list does not force

**Regulation 10, Service Tax Regulations 2018** — invoice serial number; invoice
date; the registered person's name, address and identification number; a
description sufficient to identify the taxable services; any discount; the total
excluding service tax, the rate, and the total service tax **shown as a separate
amount**; the total including service tax; and any foreign-currency amount also
expressed in ringgit at the prevailing selling rate.

**Regulation 7, Sales Tax Regulations 2018** adds, among others, **the name and
address of the person to whom the taxable goods are sold**, and per description
the type, quantity and amount excluding sales tax.

Two gaps follow directly:

- **The buyer's name and address.** LHDN's 55 fields include them, but a
  consolidated e-Invoice sets the buyer to *General Public* with the address as
  NA. A registered manufacturer cannot document a taxable sale that way and
  still meet reg. 7(d).
- **Tax shown as a separate amount.** The e-Invoice carries tax type, rate and
  amount as data. Whether your *visual representation* prints service tax as a
  separate line is a template decision — and reg. 10(f) makes it a legal one.

Language is also RMCD's rule, not LHDN's: SST invoices must be in Bahasa Melayu
or English.

## Does RMCD see my e-Invoice data?

Yes. Section 138(4)(aa) of the Income Tax Act 1967 authorises LHDN to share
MyInvois data with RMCD, and section 2.6.1 of the e-Invoice Guideline confirms
the field list was designed against the Sales Tax Act 2018 and Service Tax Act
2018 alongside the ITA 1967, the Labuan Business Activity Tax Act 1990 and the
Petroleum (Income Tax) Act 1967. Your two filings are now visible to each other.

## Common mistakes

- **Retiring the SST invoice template on go-live.** Nothing in s.82C repeals
  s.21 of either 2018 Act.
- **Assuming validation cures a missing particular.** MyInvois validates against
  LHDN's schema. It has no view on reg. 7 or reg. 10.
- **Using a consolidated e-Invoice for a taxable sale to a named buyer.** It
  cannot carry the buyer particulars reg. 7 demands.
- **Dropping the SST registration number from the printed document.** It is a
  conditionally mandatory e-Invoice field for registrants and a reg. 10
  particular.
- **Treating the SST-02 return and the e-Invoice as one workflow.** Different
  regulator, different period, different penalties.

## What's next

Put the two particular lists side by side against your actual printed invoice,
not against your XML. The XML satisfies LHDN; the visual representation is what
has to satisfy RMCD. If you also consolidate B2C receipts, check separately
whether any of those transactions are taxable supplies that need a named buyer.
