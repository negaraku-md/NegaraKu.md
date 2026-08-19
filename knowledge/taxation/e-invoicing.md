---
topicId: MY-TAX-0003
title: "e-Invoicing in Malaysia: Where to Start with MyInvois"
seoTitle: "e-Invoicing Malaysia: MyInvois Starting Point"
slug: "e-invoicing"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "A routing page for Malaysia's e-Invoice mandate — how MyInvois validation works, when your business came into scope, and which detailed guide answers your question."

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "e-Invoicing requires invoice data to be submitted to LHDN's MyInvois system for validation, through the free MyInvois Portal or an API-connected system. A validated document receives a Unique Identifier Number and QR code. The mandate is phased by annual turnover, with the final phase reaching businesses up to RM5 million from 1 January 2026 and businesses below RM1 million exempt. Each phase carries its own interim relaxation period."
keyTakeaways:
  - "Validation happens through MyInvois before the document functions as an invoice for income tax purposes"
  - "Four phases, no fifth — the last began 1 January 2026 for turnover up to RM5 million"
  - "Businesses with annual turnover below RM1,000,000 are exempt"
  - "Your phase is fixed by FY2022 or YA2022 figures and does not move afterwards"
  - "An LHDN-validated e-Invoice does not automatically satisfy the SST tax invoice rules — that is a separate document requirement"
appliesTo: "Business owners, finance teams and system administrators preparing for or operating under the e-Invoice mandate."

verificationNeeded: []

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
  - title: "IRBM e-Invoice Guideline"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "IRBM e-Invoice Specific Guideline"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MyInvois Portal"
    url: "https://myinvois.hasil.gov.my/"
    publisher: "LHDN"

entity: "e-Invoicing and MyInvois"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "explained-in", to: "myinvois-phases" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "consolidated-e-invoice" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
  - { rel: "related-to", to: "e-invoice-vs-tax-invoice" }
related: ["myinvois-phases", "myinvois-integration", "e-invoice-data-fields", "consolidated-e-invoice", "self-billed-e-invoice", "e-invoice-vs-tax-invoice", "e-invoice-accounting-records"]
keywords: ["e-Invoice Malaysia", "MyInvois", "e-invois LHDN", "e-invoicing phases Malaysia", "MyInvois validation"]
---

An invoice used to be valid because you issued it. Under the e-Invoice mandate
it is valid because LHDN says so — the document has to be submitted to MyInvois
and validated before it does its job for income tax purposes.

That single change is what generates every downstream question, and most of them
have a dedicated answer.

## How validation works, in six steps

1. The supplier submits the transaction data to MyInvois, either by keying it
   into the free Portal or automatically through an API-connected system.
2. LHDN validates the structure and the required fields in near real time.
3. A **Unique Identifier Number** and QR code are issued on success.
4. The supplier shares the validated document with the buyer.
5. The buyer can verify the QR code against LHDN's records.
6. Rejections and cancellations must be actioned within the allowed window.

## Which guide you need

| If your question is | Read |
| --- | --- |
| When does this apply to my business? | [MyInvois phases, thresholds and relaxation dates](/en/taxation/myinvois-phases) |
| Portal, API or a middleware provider? | [MyInvois integration](/en/taxation/myinvois-integration) |
| What data do I actually have to send? | [e-Invoice data fields reference](/en/taxation/e-invoice-data-fields) |
| Can I batch my retail sales instead of issuing one each? | [Consolidated e-Invoices](/en/taxation/consolidated-e-invoice) |
| My supplier is overseas, or is an individual | [Self-billed e-Invoices](/en/taxation/self-billed-e-invoice) |
| Does this replace my SST tax invoice? | [e-Invoice vs SST tax invoice](/en/taxation/e-invoice-vs-tax-invoice) |
| How long do I have to keep them? | [e-Invoices and accounting records](/en/accounting/e-invoice-accounting-records) |

## The four things people get wrong

**There is no phase five.** The rollout ran in four phases by annual turnover,
ending with the cohort up to RM5 million from 1 January 2026. Businesses with
annual turnover below **RM1,000,000** are exempt, alongside foreign diplomatic
offices and individuals not carrying on a business. This does not contradict the
separate **1 July 2026** start that applies to *newly commenced* businesses — one
that began in 2023 to 2025 with turnover of RM1 million or more comes in on that
date. It is a rule for entrants without an FY2022 baseline, not a fifth turnover
phase.

**Your phase is fixed, not floating.** It is determined by the FY2022 audited
financial statements or the YA2022 return, pro-rated where the year end changed,
and it does not move afterwards. Growing past a threshold later does not shift
you into an earlier phase, and shrinking does not shift you out.

**The relaxation periods are not the same as the phase dates.** Each phase
carried an interim period during which LHDN would not act on non-compliance, and
the Phase 4 relaxation runs considerably longer than the earlier ones. Read the
phase guide rather than assuming the mandate date is the enforcement date.

**A validated e-Invoice is not automatically an SST tax invoice.** The two
regimes have separate document requirements, and the statutory position is that
where an e-Invoice's particulars are inconsistent with another written law's
invoice requirements, the e-Invoice is valid for Income Tax Act purposes only.
Registered SST persons need a document that satisfies both.

## Common mistakes

- Waiting for the mandate date to start testing. TIN validation and integration
  failures surface only under real transaction volume.
- Assuming every customer needs an itemised e-Invoice, when many B2C
  transactions can be consolidated — subject to the barred activities.
- Overlooking self-billed obligations for foreign suppliers and for payments to
  individuals who issue nothing themselves.
- Treating this as an IT project. Most failures at go-live are dirty customer
  and supplier master data, not integration bugs.
- Assuming MyInvois is your archive. LHDN publishes no retention guarantee for
  validated documents; the retention duty remains yours.

## What's next

If you do not yet know whether or when you are in scope, start with the phases
guide — it carries the turnover bands, the exemption threshold, the new-business
rules and every relaxation end date. If you are already in scope and choosing
how to submit, the integration guide compares the Portal, direct API and
middleware routes by transaction volume.
