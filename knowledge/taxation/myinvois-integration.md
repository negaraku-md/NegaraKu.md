---
topicId: MY-TAX-0008
title: "MyInvois Integration: Portal, API or Middleware"
seoTitle: "MyInvois Integration: Portal vs API vs Middleware"
slug: "myinvois-integration"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "A vendor-neutral way to choose between the free MyInvois Portal, direct API integration and a technology provider, based on transaction volume and what your ERP already does."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "LHDN provides two transmission mechanisms: the free MyInvois Portal, accessed through MyTax, which supports individual form entry and batch upload of a pre-defined Excel spreadsheet; and an API, reachable by direct ERP integration, through a Peppol service provider, or through a non-Peppol technology provider. The Portal suits low volumes; the API suits high volumes and requires a digital certificate and upfront system work."
keyTakeaways:
  - "Two official mechanisms only — Portal and API. Everything else is a route to the API"
  - "The Portal is free, needs a MyTax login, and offers Excel batch upload"
  - "API routes are direct ERP, Peppol service provider, or non-Peppol technology provider"
  - "API submission requires a digital certificate as a .cer or .pfx file"
  - "Hard limits: 100 documents and 5MB per submission, 300KB per document"
  - "Intermediaries must use their own Client ID and Secret and can only see what they submitted"
  - "Self-billed volume, not sales volume, is what usually forces the API decision"
appliesTo: "Finance leads and IT teams choosing a MyInvois route, and anyone comparing quotes from e-Invoicing software vendors."

faq:
  - q: "Is the MyInvois Portal really free, and will it be enough?"
    a: "Yes, it is provided by LHDN and accessed through the MyTax Portal at no cost. It supports both individual creation through a form and batch upload of a pre-defined Excel spreadsheet. Whether it is enough depends on document count and how many documents need buyer-specific details. A business with a handful of B2B invoices and a single monthly consolidated e-Invoice can run on it indefinitely."
  - q: "Do I need a Peppol service provider?"
    a: "No. Peppol is one of three ways LHDN lists for reaching the API, alongside direct ERP integration and non-Peppol technology providers. LHDN does not mandate a route or a vendor. Peppol matters if you also need interoperable cross-border document exchange; it is not a MyInvois requirement."
  - q: "What does the API need that the Portal does not?"
    a: "A digital certificate — a .cer or .pfx file used to sign submissions, with the hashed signature carried in the submission body — and documents built to the UBL 2.1 structure in XML or JSON. LHDN publishes the API integration and configuration guide and the endpoints in the MyInvois SDK."
  - q: "If I use a vendor, who is liable for a missed e-Invoice?"
    a: "You are. The duty to issue and transmit sits on the taxpayer under s.82C of the Income Tax Act 1967, and s.120(1)(d) makes contravention an offence. Outsourcing transmission does not move the obligation. LHDN also restricts intermediaries to e-Invoices they submitted themselves, so a change of provider leaves history behind."
  - q: "How do I size the decision?"
    a: "Count documents, not revenue. Add transactional e-Invoices, consolidated e-Invoices, self-billed e-Invoices, and all credit, debit and refund notes. Then check the exclusions — transactions above RM10,000 and the Table 3.6 industries cannot be consolidated, which can turn a single monthly document into thousands."
  - q: "Can I run the Portal and the API at the same time?"
    a: "Yes. LHDN presents the two mechanisms as a choice per submission, not a permanent election, and many businesses route high-volume sales through the API while handling occasional self-billed documents on the Portal. Reporting and dashboards in the Portal cover both."

verificationNeeded:
  - "Numeric per-endpoint API rate limits — the SDK FAQ refers to Integration Practices without publishing figures"
  - "Any LHDN accreditation, certification or approved-vendor list for technology providers — none was located on hasil.gov.my or the SDK"
  - "The maximum number of rows accepted in the MyInvois Portal batch upload spreadsheet — LHDN describes a certain number without stating it"

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
    change: "Initial draft from e-Invoice Guideline v4.7 and the MyInvois SDK."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "e-Invoice Guideline (Version 4.7) — sections 2.2 to 2.5"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MyInvois SDK"
    url: "https://sdk.myinvois.hasil.gov.my/"
    publisher: "LHDN"
  - title: "MyInvois SDK — frequently asked questions"
    url: "https://sdk.myinvois.hasil.gov.my/faq/"
    publisher: "LHDN"
  - title: "MyInvois SDK — standard error response"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "LHDN"
  - title: "e-Invoice Specific Guideline (Version 4.8)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"

entity: "MyInvois transmission mechanisms"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "requires", to: "e-invoice-data-fields" }
  - { rel: "related-to", to: "myinvois-phases" }
related: ["e-invoicing", "myinvois-phases", "e-invoice-data-fields", "consolidated-e-invoice", "self-billed-e-invoice"]
keywords: ["MyInvois integration", "MyInvois API", "MyInvois Portal", "Peppol Malaysia", "e-Invoice middleware", "e-invois integrasi sistem"]
---

Almost everything written about this decision was written by someone selling one
of the answers. So start from the only two mechanisms LHDN actually recognises,
in Table 2.1 of the e-Invoice Guideline: **the MyInvois Portal** and **the API**.
Peppol providers, non-Peppol technology providers and middleware are not a third
option — they are three ways of reaching the API.

## The two mechanisms

| | MyInvois Portal | API |
| --- | --- | --- |
| Cost | Free, via **MyTax** login | Build or licence |
| Input | Individual form, or **batch upload of a pre-defined Excel spreadsheet** | XML or JSON to **UBL 2.1** |
| Signature | Handled by the Portal | Your **digital certificate** (.cer or .pfx) |
| LHDN's stated fit | Accessible to all taxpayers; businesses where API connection is unavailable | High volume; requires upfront investment and system change |
| Routes | One | Direct ERP, **Peppol** provider, **non-Peppol** provider |

Both produce the same thing: an IRBM Unique Identifier Number, a validation
timestamp, and a QR code on the visual representation.

## Size the problem before you shop

The question is not your revenue. It is **how many documents you must transmit
in a month**, and the count is usually larger than people expect:

1. Transactional e-Invoices to buyers who asked for one
2. Consolidated e-Invoices — one or more per month, per branch if you split
3. **Self-billed e-Invoices** — commissions, foreign suppliers, individual
   landlords, most interest, dividends, capital repayments
4. Credit, debit and refund notes

Then apply the two exclusions that break naive estimates. Any **single
transaction above RM10,000** must be transactional, across all industries, since
1 January 2026. And nine activities in Table 3.6 of the e-Invoice Specific
Guideline can never consolidate at all — motor vehicles, flight tickets,
construction contracts, agent and dealer payments, betting pay-outs, electricity,
telecommunications.

A workshop selling three cars a month has a trivial Portal workload. A
telecommunications reseller with 4,000 postpaid subscribers does not, and no
amount of consolidation will help it.

**Self-billed volume is the usual surprise.** A company with 40 sales invoices a
month and 600 agent commission payments is a high-volume e-Invoicing business,
whatever its sales ledger says.

## Where the Portal genuinely stops working

- **Data entry cost.** Every transactional document needs buyer name, TIN,
  registration number, address, contact number and SST number keyed or
  spreadsheet-loaded.
- **The 72-hour clock.** Cancellation and rejection windows run from validation.
  Manual processes that submit weekly cannot use them.
- **Month-end concentration.** Consolidated e-Invoices are due within **seven
  calendar days** after month end, on top of everything else.
- **Reconciliation.** The Portal gives you XML, JSON, metadata, grid and PDF
  retrieval — but matching validated documents back to your ledger is manual.

## Where the API costs more than the licence

- **A digital certificate** must be obtained, installed and rotated.
- **Submission limits are hard:** 100 documents and 5MB per submission, 300KB
  per document. Batching and, where needed, minification are your problem.
- **Two-stage validation.** *Submitted* is not *Valid*. Structure, core fields
  and codes are checked immediately; signature, taxpayer, referenced documents
  and duplicates are checked in the background. Any integration that treats a
  202-style acknowledgement as success will silently accumulate invalid
  documents.
- **Token handling.** Login tokens are valid for 60 minutes and are meant to be
  reused, not minted per request. Rate limiting returns 429 with a `Retry-After`
  header.
- **Master data.** Supplier and buyer TIN, the new 12-digit BRN, MSIC codes and
  SST numbers have to be right before any of this runs.

## Choosing a route to the API

| Route | Suits | Watch for |
| --- | --- | --- |
| **Direct ERP integration** | Established ERP with a maintained Malaysian localisation, or in-house engineering capacity | Ongoing maintenance as guideline versions change — v4.7 and v4.8 both landed on 7 July 2026 |
| **Peppol service provider** | Businesses that also want interoperable document exchange with trading partners | Peppol is not a MyInvois requirement; do not pay for it as if it were |
| **Non-Peppol technology provider / middleware** | Multiple source systems, POS estates, or an ERP with no localisation | Data custody, exit terms, and whether they submit under their own credentials |

LHDN does not endorse, accredit or approve any provider. If a vendor claims
LHDN-approved status, ask to see it.

## The intermediary question nobody asks

The SDK states that intermediaries submit using **their own Client ID and Client
Secret**, and can only access e-Invoices **they** submitted — they cannot
retrieve documents a taxpayer submitted independently.

Two consequences worth writing into a contract:

- **Switching providers does not carry your submission history across.** Plan for
  a parallel-run period and for your own archive.
- **Liability does not transfer.** Section 82C of the Income Tax Act 1967 puts
  the duty on the taxpayer; s.120(1)(d) makes contravention an offence. A vendor
  outage is your non-compliance.

On outages, LHDN offers one relief. Section 2.5.4 of the e-Invoice Guideline
says that where the MyInvois System itself is down for maintenance or technical
reasons and the taxpayer can evidence its compliance efforts, the Director
General will assess the case individually and may take no action. That covers
LHDN's downtime, not your vendor's.

## A decision path

1. **Are you exempt?** Below RM1,000,000 annual turnover, stop.
2. **Count monthly documents** across all four categories above.
3. **Under roughly a hundred, mostly consolidated?** Portal, with the Excel
   batch upload. Revisit annually.
4. **Hundreds to thousands, single source system?** Ask your ERP vendor what
   their MyInvois localisation covers — specifically self-billed types 11 to 14
   and the annexure fields for imports.
5. **Thousands, or multiple source systems, or a POS estate?** Middleware,
   chosen on data custody and exit terms rather than feature lists.
6. **Whatever you choose, prove it end to end before your relaxation period
   ends** — 31 December 2027 for phase 4, and already past for phases 1 to 3.

## Common mistakes

- **Buying before counting.** Document count, including self-billed, is the whole
  input to this decision.
- **Assuming Peppol is mandatory.** It is one of three API routes.
- **Believing an accreditation claim.** LHDN publishes no approved-vendor list.
- **Treating validation as synchronous.** Four of the seven validators run in the
  background.
- **Skipping master data clean-up.** The old SSM registration number and stale
  TINs will fail the taxpayer validator no matter how good the integration is.
- **Testing with clean data.** Test with foreign suppliers, individuals without
  TINs, credit notes and month-end volume, because that is what breaks.

## What's next

Pull last month's payables and receivables, classify every line as
transactional, consolidated or self-billed, and count. That number decides the
mechanism. Then check the field list against your master data, because the
clean-up almost always takes longer than the integration.
