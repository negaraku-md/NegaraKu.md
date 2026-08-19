---
topicId: MY-TAX-0014
title: "e-Invoice Data Fields Reference"
seoTitle: "e-Invoice Data Fields Malaysia: 55 Fields Reference"
slug: "e-invoice-data-fields"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "All 55 required e-Invoice fields with mandatory or optional status, the annexure fields, LHDN code lists, and the validator that rejects each kind of error."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "LHDN requires 55 data fields to issue an e-Invoice, grouped into eight categories. Most are mandatory; twenty are optional and eight are conditionally mandatory — the SST and tourism tax registration numbers, the original e-Invoice reference, currency exchange rate, tax rate, and the two tax exemption fields. An annexure adds mandatory customs form references for imports and exports of goods."
keyTakeaways:
  - "55 fields in Appendix 1, grouped into eight categories, plus an annexure in Appendix 2"
  - "XML or JSON, both conforming to UBL 2.1"
  - "Eight fields are conditionally mandatory rather than always required"
  - "The e-Invoice date and time must be the current date and time"
  - "Seven validators run — three immediate, four in the background"
  - "Code lists for e-Invoice type, tax type, currency, MSIC, state and UoM are published in the SDK"
  - "A defective e-Invoice can be replaced by a substitute within three days under s.82C(8) ITA 1967"
appliesTo: "Developers building a MyInvois integration, ERP consultants mapping master data, and finance teams debugging rejected submissions."

verificationNeeded:
  - "The full published list of granular validation error codes (CF, DS, ST prefixes) — the SDK documents the seven validator categories and standard HTTP error codes but does not publish an exhaustive code-to-condition table"
  - "Per-endpoint API rate limits — the SDK refers to Integration Practices without stating numeric limits on the FAQ page"

lang: "en"
masterLanguage: "en"
translationStatus: "master"

status: "published"
aiAssisted: true
reviewer: null
reviewed: 2026-07-22
reviewDue: 2027-07-22
revision: 0
revisions:
  - revision: 0
    date: 2026-07-20
    change: "Approved and published."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "e-Invoice Guideline (Version 4.7) — Appendices 1 and 2"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MyInvois SDK — document validation rules"
    url: "https://sdk.myinvois.hasil.gov.my/document-validation-rules/"
    publisher: "LHDN"
  - title: "MyInvois SDK — code lists"
    url: "https://sdk.myinvois.hasil.gov.my/codes/"
    publisher: "LHDN"
  - title: "MyInvois SDK — standard error response"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "LHDN"
  - title: "e-Invoice Specific Guideline (Version 4.8) — Appendix 1, list of general TIN"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"

entity: "e-Invoice data fields"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
related: ["e-invoicing", "myinvois-phases", "myinvois-integration", "self-billed-e-invoice", "consolidated-e-invoice"]
keywords: ["e-Invoice data fields", "55 fields e-Invoice", "MyInvois mandatory fields", "e-Invoice validation error", "UBL 2.1 Malaysia", "medan data e-invois"]
---

Every rejected submission traces back to one of two things: a field LHDN treats
as mandatory that your ERP treats as optional, or a code value that is not in
LHDN's list. This page is the field list, as published in Appendices 1 and 2 of
the e-Invoice Guideline version 4.7.

Format is **XML or JSON**, both conforming to **UBL 2.1**. LHDN groups the 55
fields into eight categories: Address, Business Details, Contact Number, Invoice
Details, Parties, Party Details, Payment Info, and Products / Services.

## The 55 fields

**M** = mandatory · **C** = conditionally mandatory · **O** = optional

### Parties and party details

| # | Field | Status | Note |
| --- | --- | --- | --- |
| 1 | Supplier's Name | M | |
| 2 | Buyer's Name | M | General Public on a consolidated e-Invoice |
| 3 | Supplier's TIN | M | General TIN codes apply where unavailable |
| 4 | Supplier's Registration / Identification / Passport Number | M | SSM registrants use the **new 12-character BRN** only |
| 5 | Supplier's SST Registration Number | **C** | Mandatory for SST registrants |
| 6 | Supplier's Tourism Tax Registration Number | **C** | Mandatory for tourism tax registrants |
| 7 | Supplier's e-mail | O | |
| 8 | Supplier's MSIC Code | M | 5-digit numeric; 00000 where not available for a foreign supplier |
| 9 | Supplier's Business Activity Description | M | |
| 10 | Buyer's TIN | M | |
| 11 | Buyer's Registration / Identification / Passport Number | M | |
| 12 | Buyer's SST Registration Number | **C** | Mandatory for SST registrants |
| 13 | Buyer's e-mail | O | |

### Address and contact

| # | Field | Status |
| --- | --- | --- |
| 14 | Supplier's Address | M |
| 15 | Buyer's Address | M |
| 16 | Supplier's Contact Number | M |
| 17 | Buyer's Contact Number | M |

### Invoice details

| # | Field | Status | Note |
| --- | --- | --- | --- |
| 18 | e-Invoice Version | M | SVDP 1.2 / 1.3 only for voluntary disclosure |
| 19 | e-Invoice Type | M | See code list below |
| 20 | e-Invoice Code / Number | M | Supplier's own reference |
| 21 | Original e-Invoice Reference Number | **C** | Mandatory on credit, debit and refund notes |
| 22 | e-Invoice Date and Time | M | **Must be the current date and time** |
| 23 | Issuer's Digital Signature | M | Service provider's certificate where one is used |
| 24 | Invoice Currency Code | M | |
| 25 | Currency Exchange Rate | **C** | Mandatory where the currency is not ringgit |
| 26 | Frequency of Billing | O | |
| 27 | Billing Period | O | |

### Products and services

| # | Field | Status | Note |
| --- | --- | --- | --- |
| 28 | Classification | M | 3-digit code from LHDN's catalogue |
| 29 | Description of Product or Service | M | Receipt reference numbers on a consolidated e-Invoice |
| 30 | Unit Price | M | |
| 31 | Tax Type | M | Line and invoice level |
| 32 | Tax Rate | **C** | |
| 33 | Tax Amount | M | Line and invoice level |
| 34 | Details of Tax Exemption | **C** | Mandatory if an exemption applies |
| 35 | Amount Exempted from Tax | **C** | Mandatory if an exemption applies |
| 36 | Subtotal | M | Line level only |
| 37 | Total Excluding Tax | M | Line and invoice level |
| 38 | Total Including Tax | M | Invoice level only |
| 39 | Total Net Amount | O | Invoice level only |
| 40 | Total Payable Amount | M | Invoice level only |
| 41 | Rounding Amount | O | Invoice level only |
| 42 | Total Taxable Amount Per Tax Type | O | Invoice level only |
| 43 | Quantity | O | |
| 44 | Measurement | O | |
| 45 | Discount Rate | O | |
| 46 | Discount Amount | O | |
| 47 | Fee / Charge Rate | O | |
| 48 | Fee / Charge Amount | O | |

### Payment info

| # | Field | Status |
| --- | --- | --- |
| 49 | Payment Mode | O |
| 50 | Supplier's Bank Account Number | O |
| 51 | Payment Terms | O |
| 52 | Prepayment Amount | O |
| 53 | Prepayment Date | O |
| 54 | Prepayment Reference Number | O |
| 55 | Bill Reference Number | O |

## Annexure fields

| Field | Status | Applies to |
| --- | --- | --- |
| Reference Number of Customs Form No. 1, 9 etc. | **Mandatory** | Import of goods |
| Reference Number of Customs Form No. 2 | Optional | Export of goods |
| Shipping Recipient's Name / Address / TIN / Registration or Passport Number | Optional | Goods shipped to someone other than the buyer |
| Incoterms | Optional | Import and export of goods |
| Product Tariff Code | Optional | Goods only |
| Free Trade Agreement information | Optional | Export only, if applicable |
| Authorisation Number for Certified Exporter, e.g. ATIGA number | Optional | Export only, if applicable |
| Country of Origin | Optional | Import and export of goods |
| Details of other charges | Optional | Import and export of goods |

LHDN notes that annexure requirements may be updated from time to time.

## Code lists

**e-Invoice Type**

| Code | Type | | Code | Type |
| --- | --- | --- | --- | --- |
| 01 | Invoice | | 11 | Self-billed Invoice |
| 02 | Credit Note | | 12 | Self-billed Credit Note |
| 03 | Debit Note | | 13 | Self-billed Debit Note |
| 04 | Refund Note | | 14 | Self-billed Refund Note |

**Tax Type**

| Code | Type |
| --- | --- |
| 01 | Sales Tax |
| 02 | Service Tax |
| 03 | Tourism Tax |
| 04 | High-Value Goods Tax |
| 05 | Sales Tax on Low Value Goods |
| 06 | Not Applicable |
| E | Tax exemption, where applicable |

**General TIN** (e-Invoice Specific Guideline, Appendix 1)

| Code | Use |
| --- | --- |
| EI00000000010 | General Public — Malaysian individual with MyKad only; buyer on a consolidated e-Invoice; supplier on a consolidated self-billed e-Invoice |
| EI00000000020 | Foreign buyer or foreign shipping recipient |
| EI00000000030 | Foreign supplier, self-billed |
| EI00000000040 | Government, state and local authorities, statutory bodies, exempt institutions |

The SDK also publishes classification codes, country codes, currency codes, MSIC
codes, payment modes, state codes and units of measurement.

## Validators and what trips them

| Validator | Timing | Typical cause of failure |
| --- | --- | --- |
| **Structure** | Immediate | Malformed XML or JSON, or a document that does not match the required structure for that type and version under UBL 2.1 |
| **Core Fields** | Immediate | A mandatory field is absent |
| **Code** | Immediate and background | A currency, tax type or other code value that is not in LHDN's list |
| **Signature** | Background | Digital signature fails verification |
| **Taxpayer** | Background | A TIN referenced in the document is not valid as at the document's issuance date |
| **Referenced Documents** | Background | A credit, debit or refund note points at a document that is not a valid e-Invoice at the time of issuance |
| **Duplicate Document** | Background | A near-identical document was already submitted — error code **DS302** |

Document status moves **Submitted → Valid** or **Invalid**. *Submitted* means
only that the structure and core field checks passed; the background validators
can still fail it.

Transport-level errors use standard HTTP mappings: `BadRequest` and `BadArgument`
(400), `Unauthorized` (401), `Forbidden` (403), `NotFound` (404),
`TooManyRequests` (429, with a `Retry-After` header), `InternalServerError`
(500), `NotImplemented` (501), `ServiceUnavailable` (503).

## Correcting a bad document

- **Within 72 hours of validation** — the supplier may cancel, or the buyer may
  request rejection and the supplier then cancels. After 72 hours, neither is
  possible.
- **Within three days of issuing a defective e-Invoice** — s.82C(8) of the
  Income Tax Act 1967 allows a **substitute e-Invoice**.
- **After that** — issue a credit, debit or refund note e-Invoice referencing the
  original in field 21.

## Common mistakes

- **Sending the old SSM registration number.** Field 4 requires the new 12-digit
  BRN for SSM registrants.
- **Back-dating field 22.** LHDN requires the current date and time; a
  back-dated document fails.
- **Leaving MSIC blank for a foreign supplier.** Use 00000, not an empty value.
- **Using tax type 06 to mean exempt.** 06 is *Not Applicable*; exemption is E,
  and it pulls fields 34 and 35 into mandatory status.
- **Retrying a failed submission unchanged.** The duplicate validator will raise
  DS302 rather than accept it.
- **Treating a Submitted response as success.** Only *Valid* is success.

## What's next

Map fields 3, 4, 5, 8, 10, 11 and 12 against your customer and supplier master
data before writing any code — those seven are where clean-up time actually
goes. Then decide the transmission route, because the Portal fills these fields
by form and the API makes them your problem.
