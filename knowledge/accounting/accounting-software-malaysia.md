---
topicId: MY-ACC-0011
title: "Accounting Software in Malaysia: The Two Capabilities That Now Decide It"
seoTitle: "Accounting Software Malaysia: e-Invoice and MBRS Fit"
slug: "accounting-software-malaysia"
category: "accounting"
subcategory: ["bookkeeping"]
summary: "A vendor-neutral way to evaluate accounting software for a Malaysian company on the two axes that now matter — how it reaches MyInvois, and whether its output can feed an MBRS filing."

tier: "4"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "Feature lists no longer separate accounting packages sold in Malaysia. Two capabilities do. First, how the software gets a document into MyInvois — through the free portal, through a direct API integration, or through an intermediary that submits under its own credentials. Second, whether its output can be mapped onto SSM's SSMxT taxonomy for an MBRS filing, given that no accounting package lodges to SSM directly. Everything else is preference."
keyTakeaways:
  - "LHDN documents two transmission mechanisms — the MyInvois Portal and the API — plus submission by an appointed intermediary"
  - "LHDN publishes an SDK but no accreditation, certification or approved-vendor list for e-Invoice software; an LHDN-approved claim is the vendor's own"
  - "The one real accreditation in Malaysian e-invoicing is MDEC's, as Peppol Authority, covering Peppol Service Providers and Peppol-Ready Solution Providers — and Peppol is not a MyInvois requirement"
  - "No accounting package files to MBRS; filings are built in SSM's own preparation tool and uploaded to mPortal as a zip"
  - "MBRS-ready therefore means a stable, exportable trial balance that maps onto SSMxT concepts, not a filing button"
  - "The SSMxT taxonomy cannot be extended by a company, so a chart of accounts with no home in the taxonomy is a recurring cost"
  - "An intermediary can only retrieve documents it submitted itself, so switching provider does not carry your submission history across"
appliesTo: "Malaysian companies selecting or replacing accounting software, and finance teams auditing what their current package can actually do."

verificationNeeded:
  - "Capability claims about any specific product are deliberately absent from this page — verify each one against the vendor's own current published documentation, as localisation coverage changes between releases without notice"
  - "SSM does not publish an approved or accredited list of third-party XBRL preparation software on its MBRS pages; confirm with SSM before relying on any vendor claim of MBRS certification"
  - "The e-Invoice Guideline and Specific Guideline are revised frequently — confirm the current version before treating any integration requirement as settled"

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
    change: "Initial draft."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Software Development Kit (SDK) for the LHDNM MyInvois System"
    url: "https://sdk.myinvois.hasil.gov.my/"
    publisher: "LHDN"
  - title: "IRBM e-Invoice Guideline"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
  - title: "Peppol Service Providers — National e-Invoicing"
    url: "https://www.mdec.my/national-einvoicing/peppol-service-providers"
    publisher: "MDEC"
  - title: "SSMxT 2022 Architecture Document"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "MBRS Preparation Tool"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/XBRL%20250918/MBRS-Preparation-Tool.aspx"
    publisher: "SSM"

entity: "Accounting software"
relations:
  - { rel: "related-to", to: "myinvois-integration" }
  - { rel: "affects", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "sdn-bhd-bookkeeping" }
related: ["sdn-bhd-bookkeeping", "mbrs-2-filing-guide", "mbrs-tagging-errors", "myinvois-integration", "e-invoice-accounting-records", "bookkeeping-in-house-vs-outsourced", "e-invoicing", "accounting-records-section-245"]
keywords: ["accounting software Malaysia", "e-invoice compliant accounting software", "MyInvois integration software", "MBRS XBRL software Malaysia", "LHDN approved accounting software", "SSMxT taxonomy export"]
---

The Malaysian accounting-software listicle is a solved genre: ten products,
a paragraph each, a table of features nobody uses, and an affiliate link. It
was never useful, and since e-Invoice and MBRS 2.0 landed it is actively
misleading, because it ranks products on the things that no longer separate
them.

Two capabilities separate them now. Neither appears on a features grid.

## Axis 1: how the software gets a document into MyInvois

LHDN documents **two transmission mechanisms** — the MyInvois Portal and the
API — and separately allows a taxpayer to appoint an **intermediary** to submit
on its behalf. That produces four practical shapes, and the software you buy
determines which are open to you.

| Path | What the software must do | What to verify |
| --- | --- | --- |
| **Portal only** | Nothing. You key or batch-upload documents in MyInvois | Whether the software can export a file matching the Portal's batch spreadsheet layout, or whether it is re-keying |
| **Direct API** | Build and sign UBL 2.1 documents, manage tokens, handle asynchronous validation | Whether the Malaysian localisation covers self-billed document types and the import annexure fields, not just standard sales invoices |
| **Via an intermediary or middleware** | Export clean transaction data on a schedule | Whose credentials the submission uses, who holds the data, and what leaves with you on exit |
| **Via a Peppol service provider** | Same as middleware, over a Peppol access point | That you actually need interoperable exchange with trading partners — Peppol is not a MyInvois requirement |

The choice between these is a volume and architecture question covered in
[MyInvois integration](/en/taxation/myinvois-integration). What belongs here is
the software-side consequence: a package with no API integration path does not
stop you complying, it commits you to the Portal, and the Portal's cost is
keystrokes and month-end concentration rather than licence fees.

**The intermediary detail worth writing into a contract:** an intermediary can
only view and retrieve the e-Invoices it submitted itself. Change provider and
your submission history does not follow you. Plan a parallel run and keep your
own archive.

## The accreditation claim to distrust

LHDN publishes an SDK, API documentation and an FAQ. It does not publish an
accreditation scheme, a certification programme or an approved-vendor list for
e-Invoice software. If a product is marketed as **LHDN-approved**, that status
is the vendor's own description of itself. Ask to see the instrument.

There is one genuine accreditation in Malaysian e-invoicing, and it belongs to
someone else. **MDEC is Malaysia's Peppol Authority**, and it accredits two
distinct roles:

| Role | What it is |
| --- | --- |
| **Peppol Service Provider (SP)** | Operates a Peppol access point — the connectivity gateway that routes documents |
| **Peppol-Ready Solution Provider (PRSP)** | Builds software or ERP with Peppol compliance for end users |

Both lists are published by MDEC. Neither is an LHDN approval, and neither is
required to comply with the e-Invoice mandate. A vendor holding MDEC
accreditation has demonstrated conformance to Peppol standards, which is a real
credential — for Peppol.

## Axis 2: whether the output can feed an MBRS filing

Here is the fact that reframes the whole category: **no accounting package
lodges financial statements to SSM.**

Filings are built in SSM's own **MBRS Preparation Tool (mTool)**, which
generates a zip that is uploaded to the MBRS portal. That is the accepted
submission artefact. Whatever your ledger produces, it becomes an MBRS filing
only after passing through that tool.

So MBRS-ready, as a software claim, can only honestly mean one thing: the
output is in a shape that maps cleanly onto SSM's **SSMxT** taxonomy. Three
properties decide that:

- **A stable, exportable trial balance** with account codes that do not change year to year. Mapping is rebuilt from scratch whenever codes move.
- **A presentation basis that does not drift.** Switching between presentation formats forces the mapping to be redone even when the numbers are identical.
- **A chart of accounts whose lines have somewhere to land.** The SSMxT architecture states that entities **must not extend the taxonomy** — company-specific extensions are prohibited, and detail belongs in text blocks. An account with no corresponding concept is a manual decision every year.

Two mechanical traps sit downstream and are worth knowing before you blame the
software. Expenses are stored as **positive** values in SSMxT, the reverse of
most ledger exports. And a figure stated in thousands must carry the right
`decimals` attribute — the wrong one passes validation silently and files a
number a thousand times too large or too small.

## An evaluation checklist to send a vendor

1. Which MyInvois transmission mechanism does the product support today — Portal export, direct API, or submission through your own intermediary service?
2. If API: does the localisation cover **self-billed** e-Invoices and the annexure fields for imported goods, or only standard sales invoices?
3. Under whose credentials are documents submitted, and who holds the validated documents?
4. Can we export a complete trial balance with stable account codes, in a machine-readable format, without a consultant?
5. Do you hold MDEC accreditation as a Peppol SP or PRSP — and if you claim LHDN approval, what document evidences it?
6. On exit, what leaves with us: the ledger, the mapping, the submission history?

## Why this page names no products

Because a capability is only publishable if the vendor or LHDN publishes it,
and vendor capability pages change between releases without a changelog. A
product comparison written today is a snapshot of marketing copy, not of
software. The checklist above outlives the snapshot; a ranked table would not.

## Common mistakes

- **Believing an LHDN-approved claim.** LHDN publishes no such list.
- **Confusing MDEC Peppol accreditation with an LHDN approval,** or treating Peppol as mandatory.
- **Buying a filing button.** Nothing files to MBRS except mTool output.
- **Reading MBRS-ready as certification.** At best it means a clean, stable export.
- **Changing the chart of accounts annually** and paying for the mapping again each time.
- **Evaluating only sales invoicing.** Self-billed volume is what breaks most implementations.
- **Assuming validation catches scale errors.** A thousandfold scale error passes.

## What's next

Run two tests on whatever you already own before you shop. Export a full trial
balance and check whether every account has an obvious SSMxT home. Then take
one self-billed transaction — an agent commission or a foreign supplier — and
follow it end to end into MyInvois. Whichever of those two fails is the thing
you are actually buying.
