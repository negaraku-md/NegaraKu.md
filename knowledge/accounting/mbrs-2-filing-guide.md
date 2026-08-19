---
hidden: true
topicId: MY-ACC-0002
title: "Preparing an MBRS 2.0 Filing: mTool, the SSMxT Taxonomy and the Rejection Loop"
seoTitle: "MBRS 2.0 Filing Guide: mTool & SSMxT Tagging"
slug: "mbrs-2-filing-guide"
category: "accounting"
subcategory: ["financial-statements"]
summary: "The end-to-end mechanics of preparing an SSM XBRL filing — choosing the entry point, mapping accounts to SSMxT concepts, clearing mTool validation, and getting a queried filing back through mPortal."

tier: "1"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "An MBRS 2.0 filing is prepared offline in mTool, SSM's Excel-based preparation tool, and lodged online through mPortal. You choose one of 31 entry points, map every figure in the financial statements to a concept in the SSM Taxonomy (SSMxT_2022v1.0), clear the taxonomy validation rules built into the tool, and generate an XBRL instance document. A maker uploads it; only a lodger holding a valid practising certificate can submit it."
keyTakeaways:
  - "mTool 2.2 is the current preparation tool; the taxonomy inside it is SSMxT_2022v1.0, built on the IFRS Taxonomy 2022"
  - "31 entry points across annual returns, financial statements, key financial indicators, rectifications and exemption applications — picking the wrong one means rebuilding the file"
  - "Company extensions are not allowed: if the taxonomy has no element for your line item, you tag it into a text block, you do not invent a concept"
  - "Amounts must be in Malaysian Ringgit — s.259(1)(c) of the Companies Act 2016 requires it and the taxonomy enforces iso4217:MYR"
  - "Validation is rule-driven, not cosmetic: mandatory elements, derived mandatory elements, dimension aggregation, sign rules and cross-statement consistency all run before the file will generate"
  - "Maker prepares and uploads, lodger approves and submits — a director has no role in either"
  - "A queried filing goes back to the maker; the statutory deadline does not pause while you fix it"
appliesTo: "Accountants, company secretaries and finance staff who have to produce the XBRL file itself, not just know that one is required."

faq:
  - q: "Which version of mTool and which taxonomy should I be using?"
    a: "mTool 2.2 is the current release on SSM's MBRS page, and the taxonomy embedded in it is SSMxT_2022v1.0, which is based on the IFRS Accounting Taxonomy 2022. SSM publishes a separate note on the differences between mTool 2.1 and 2.2. A zip file generated in mTool 1.0 cannot be uploaded to mPortal 2.0 — it has to be opened in the current tool and regenerated."
  - q: "What is an entry point and how do I choose the right one?"
    a: "An entry point is the specific taxonomy schema for one type of submission. MBRS 2.0 has 31 of them: five annual return types, financial statement types split by accounting standard and company type (FS-MFRS, FS-MPERS, FS-CLBG, FS-EPC, FS-FC, FS-BNM, plus Companies Act 1965 equivalents), four key financial indicator types, rectification, and eight exemption applications. The correct one is fixed by your company type, the Act you file under, and the accounting standard you apply."
  - q: "Can I create my own tag if the taxonomy has no element for a line item?"
    a: "No. The SSMxT architecture document states plainly that company extensions to SSMxT_2022v1.0 are not allowed. Where the taxonomy carries no matching concept, the preparer supplies the detail by tagging it into an appropriate text block element. This is the single biggest difference between SSM filing and voluntary XBRL reporting elsewhere."
  - q: "Who can actually submit the file — the maker or the lodger?"
    a: "The maker prepares the instance document and uploads it in mPortal, but the submission is the lodger's act. A lodger must hold an active practising certificate registered through e-Secretary, plus a valid digital certificate. If the practising certificate has expired the filing simply cannot go out, regardless of how good the XBRL file is."
  - q: "Can I file key financial indicators instead of a full set of financial statements?"
    a: "Only with prior approval. A company must first apply under entry point EA2 for exemption from filing financial statements and reports in full XBRL format, made under s.604(2) of the Companies Act 2016. Once SSM grants it, the company may use a KFI entry point. Filing KFI without that approval is not an option."
  - q: "If SSM queries my filing, does the deadline stop?"
    a: "No. A query sends the filing back to the maker for correction and resubmission, but nothing about that pauses the s.258 circulation clock or the s.259 lodgement clock. If the corrected file lands after the statutory date, late lodgement penalties under Practice Directive 1/2017 apply from the original due date."

verificationNeeded: []

lang: "en"
masterLanguage: "en"
translationStatus: "master"

status: "published"
aiAssisted: true
reviewer: null
publishedBy: "ashton-tan"
reviewed: 2026-08-14
reviewDue: 2027-07-22
version: "01.00"
revisions:
  - version: "01.00"
    date: 2026-08-14
    change: "Approved and published."
    reviewer: null

updated: 2026-08-14
sources:
  - title: "Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, Version 2.8"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQ_MBRS_ISSB.pdf"
    publisher: "SSM"
    date: "2025-05-01"
  - title: "Table of Fees — Registration of Company (ROC)"
    url: "https://www.ssm.com.my/Pages/Services/Registration-of-Company-(ROC)/Table-of-Fees.aspx"
    publisher: "SSM"
  - title: "MBRS Enhancement MBRS 2.0 — Overview"
    url: "https://www.ssm.com.my/Pages/Publication/PDF%20Files/AD%202024%20-%20Overview%20of%20MBRS%20v2.pdf"
    publisher: "SSM"
  - title: "MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "MBRS — Malaysian Business Reporting System"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/MBRS.aspx"
    publisher: "SSM"
  - title: "Companies Act 2016 (Act 777), updated text as at 1 August 2022"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
  - title: "Companies Act 2016: Practice Directive No. 1/2017 (Revised 1 October 2024)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Practice%20Directive%201_2017%20(Revised)%201%20Oct%202024.pdf"
    publisher: "SSM"
    date: "2024-10-01"
  - title: "Practice Directive No. 10/2024 — Qualifying Criteria for Audit Exemption for Certain Private Companies in Malaysia"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/PD10-2024-Qualifying-Criteria-for-Audit-Exemption-for-Certain-Categories-of-Private-Companies.pdf"
    publisher: "SSM"
    date: "2024-12-16"

entity: "MBRS 2.0 filing preparation"
relations:
  - { rel: "administered-by", to: "ssm" }
  - { rel: "governs", to: "companies-act-2016" }
  - { rel: "explained-in", to: "mbrs-2" }
  - { rel: "related-to", to: "mbrs-tagging-errors" }
  - { rel: "related-to", to: "financial-statement-pack" }
  - { rel: "related-to", to: "financial-statements-lodgement" }
  - { rel: "related-to", to: "unaudited-financial-statements" }
  - { rel: "related-to", to: "extension-of-time-ssm" }
related: ["mbrs-2", "mbrs-tagging-errors", "financial-statement-pack", "financial-statements-lodgement", "unaudited-financial-statements", "extension-of-time-ssm", "mfrs-vs-mpers"]
keywords: ["MBRS 2.0 filing guide", "mTool 2.2", "SSMxT taxonomy", "XBRL tagging Malaysia", "MBRS entry point", "mPortal maker lodger", "MBRS rejection", "prepare financial statements XBRL SSM"]
---

The search results for "MBRS 2.0" are almost entirely people selling you a way
not to do it. Conversion vendors, outsourced tagging services, and Big Four
readiness teasers that end at "talk to us". Nobody publishes what actually
happens between a signed set of accounts and an acknowledgement from SSM.

Here is what happens. You install a Microsoft Excel add-in, pick one of
thirty-one entry points, and map every number in your financial statements to a
concept in a 6,000-element taxonomy that you are not permitted to extend. Then
the tool refuses to generate a file until every mandatory element is present,
every subtotal foots, and every sign convention is right. Then a person with a
practising certificate presses submit.

This page is the mechanics. The **obligation** to file — who, when, and what the
penalty is — sits in the companion page on
[MBRS 2.0 and the filing obligation](/en/company-secretary/mbrs-2).

## What you are actually building

An MBRS submission is an XBRL instance document: a structured file in which each
figure carries a machine-readable identity. The identity comes from the **SSM
Taxonomy**, currently **SSMxT_2022v1.0**.

SSMxT is not SSM's invention from scratch. It takes the **IFRS Accounting
Taxonomy 2022** as its base — 6,458 IFRS elements — and adds Malaysian
jurisdictional concepts on top, for the Companies Act disclosures that IFRS has
no reason to carry. The Companies Act 2016 financial statement taxonomy runs to
**6,197 concepts under MFRS** and **2,375 under MPERS**.

The non-financial side is smaller and more prescriptive than most preparers
expect:

| Disclosure | Concepts (CA 2016) |
| --- | --- |
| Directors' report | 24 |
| Statement by directors | 29 |
| Directors' business review | 11 |
| Auditors' report to members | 22 |
| Involvement in stock exchange | 11 |

Those numbers matter. The directors' report is not lodged as a scanned PDF. It
is tagged, field by field, against 24 defined concepts — which is why a directors'
report drafted in free prose and never mapped to the Fifth Schedule headings
becomes a tagging problem rather than a drafting one.

## The two tools, and the file that passes between them

**mTool** is the preparation tool. It is a Microsoft Excel add-in, Windows only —
it does not run on macOS, and it does not run on Open Office. The current
release is **mTool 2.2**, and SSM publishes a separate note setting out the
differences from mTool 2.1. It carries an inbuilt SSMxT browser, works offline,
runs the validation rules, and outputs the XBRL file as a zip.

**mPortal** is the submission platform. You log in, upload the zip, route it for
approval, pay, and receive the acknowledgement.

One trap here that costs whole afternoons: **a zip generated in mTool 1.0 cannot
be uploaded to mPortal 2.0.** SSM's own guidance allows you to open an mTool 1.0
zip in the current tool and regenerate it, but the old artefact itself is dead. If you
are refiling something prepared in 2023, expect to rebuild.

The related trap is the company number. **The new company registration number
format is mandatory in MBRS 2.0.** The old format is used only to pre-populate
annual return data.

## Choosing the entry point

An entry point is the taxonomy schema for one specific kind of submission.
MBRS 2.0 has 31. Choosing wrongly is not a formatting error — it is a different
schema, different mandatory elements, and a rebuild.

**Annual returns**

| Entry point | Use |
| --- | --- |
| AR1 | Company having share capital, s.68 |
| AR2 | Company not having share capital, s.68 |
| AR3 | Foreign company, s.576 |
| AR4 | Unchanged particulars, s.68(6) |
| AR1965 | Annual return under the Companies Act 1965 |

**Financial statements and reports**

FS-MFRS and FS-MPERS split by the accounting standard applied. FS-CLBG is for
companies limited by guarantee, FS-EPC for exempt private companies, FS-FC for
foreign companies, and FS-BNM for companies regulated by Bank Negara Malaysia.
Each has a Companies Act 1965 counterpart.

**Key financial indicators**

KFI-MFRS, KFI-MPERS, KFI-CLBG and KFI-FC exist for companies that do not file
a full set in XBRL. You cannot simply elect this. A company must first obtain
approval under **EA2 — application for exemption from filing financial
statements and reports in full XBRL format**, made under s.604(2) of the
Companies Act 2016. Same pattern with FS-FC, which is only available after an
EA3 waiver under s.575(7).

**Exemption applications** are their own family, and the statutory hooks are
worth knowing because they are what the application is actually made under:

| Entry point | Application | Section |
| --- | --- | --- |
| EA1 | Foreign subsidiary financial year end not coinciding with holding company | s.247(3) |
| EA2 | Exemption from filing in full XBRL format | s.604(2) |
| EA3 | Waiver of lodgement of financial statements by a foreign company | s.575(7) |
| EA4A | Relief as to form and content of the directors' report | s.255(1) |
| EA4B | Relief as to form and content of the financial statements | s.255(1) |
| EA5A | Extension of time for circulation of financial statements | s.259(2) |
| EA5B | Extension of time to lodge financial statements | s.259(2) |
| EA6 | Extension of time to hold the AGM | s.340(4) |
| EA7 | Extension of time to lodge the annual return | s.609(2) |
| EA8 | Application to the Minister | s.247(8) |

Note that EA5A and EA5B are **separate applications**. Circulation and lodgement
are separate statutory clocks under s.258 and s.259, and an extension of one
does not extend the other. That distinction is invisible in most guidance and it
is built into the filing system.

## Mapping: the part nobody teaches

SSM's own definition is deceptively simple — preparers "do mapping by the
matching information within the financial statements to a relevant concept
within the Taxonomy". In practice mapping is where the judgement lives, and
where the year-two problems are created.

**You cannot extend the taxonomy.** The architecture document is unambiguous:
company extensions to SSMxT_2022v1.0 are not allowed, and entities must not
extend the taxonomy when creating an instance document. Where you need detail
the taxonomy does not model — a segment breakdown, an unusual class of other
income — the instruction is to provide it by **text-block tagging** into an
appropriate text block concept.

This is the opposite of how XBRL works in most listed-company regimes, where
extension elements are routine. Preparers arriving from that world reach for a
custom tag, cannot create one, and conclude the tool is broken.

**The full-set scope is fixed.** For a filing in full XBRL, the minimum
statements are the statement of financial position, statement of profit or loss,
statement of cash flows, statement of changes in equity, and the notes. The
taxonomy carries alternative presentations for three of them and you must pick
one and stay with it:

- Statement of financial position — current/non-current, **or** order of liquidity
- Statement of profit or loss — function of expenses, **or** nature of expenses
- Statement of cash flows — direct, **or** indirect

Switching between years is legal but visible, and it will produce comparatives
that do not line up in the data even though the accounts read normally.

**Currency and rounding are not stylistic.** Monetary amounts must be expressed
in Malaysian Ringgit, with the unit measure `iso4217:MYR`. This is not merely a
taxonomy rule — s.259(1)(c) of the Companies Act 2016 requires all amounts in
lodged financial statements and reports to be quoted in Malaysian currency, and
requires a certified translation where the documents are not in Bahasa Malaysia
or English.

Rounding is handled by the `decimals` attribute, not by rounding the figure.
SSM's worked example: assets shown as 53,928 in a set of accounts stated in
thousands are tagged as **53928000 with decimals set to -3**. Preparers who type
53928 have understated assets by three orders of magnitude, and no validation
rule will catch it, because 53,928 is a perfectly valid number.

## Validation: five rule families, not a spellcheck

mTool's validation is driven by the taxonomy's formula linkbase. SSM models the
rules as assertions where "true" means passed. Understanding the families tells
you what kind of error you are looking at.

**Mandatory elements.** Certain concepts must be present. A separate assertion
exists for each one, precisely so the failure message names the missing element.
Example from SSM's documentation: "Assets" should be reported.

**Derived mandatory elements.** Required only in certain circumstances, modelled
with a precondition. SSM's example: when the filer selects status of company as
"Public company", then disclosure of financial statements audit status must be
"Audited". Get the filing information wrong at the top of the template and you
will trigger downstream requirements you did not expect.

**Dimension aggregation.** Members of an axis must sum to the parent. Total
equity equals non-controlling interest plus other equity components plus equity
attributable to owners of the parent. This is where a set of accounts assembled
across several spreadsheets and never cross-footed finally gets caught.

**Positive and negative values.** SSM's position is more nuanced than "expenses
are negative". There are **no elements that must always be stored negative** —
negatively weighted items such as expenses are stored as positive numbers in
most cases. The formula linkbase instead enforces a list of elements that must
always be **positive**.

**Cross-statement and correlated data.** Values that appear in more than one
statement must agree, and logically linked values are checked against each other.

Add to those the structural validations — XBRL well-formedness, dimensional
validation, extensible enumeration, table and formula validation — which check
the instance against SSMxT_2022v1.0 itself.

## Maker, lodger and the approval step

mPortal is role-based, and the roles are not interchangeable.

The **maker** prepares the instance document and uploads it. The maker does not
need a digital signature.

The **lodger** approves and submits. A lodger must hold a practising certificate
under s.241 of the Companies Act 2016, registered through e-Secretary, and a
valid digital certificate. Approval is done through Administrator → Approval
Management → Filing Approval, where the dashboard shows filings uploaded by
makers and awaiting lodger approval.

The association between maker and lodger is administered in mPortal, and it can
be set inactive. A common and entirely opaque failure is a maker uploading files
that never appear in the lodger's queue because the association was deactivated
and not reinstated. A single maker can be associated with multiple lodgers.

A director is not a role in this system. This is the same structural point that
governs extension of time applications, which SSM requires to come from the
company secretary. If your secretary's practising certificate has lapsed, you do
not have a filing channel — and you will learn that on the day you try to use it.

## The rejection loop

Three different things get called "rejection" and they behave differently.

**mTool validation failure.** The file will not generate. You are still offline,
nothing has been submitted, and no clock has been affected. This is the good
outcome.

**mPortal query.** The filing is accepted for review and then queried back. The
maker sees the query status on the dashboard, corrects, and resubmits. The
statutory deadline is untouched by any of this — s.258 circulation and s.259
lodgement run on their own dates, and Practice Directive 1/2017 penalties accrue
from the original due date, not from the date your file finally passed.

**Post-lodgement rectification.** Once a filing is on record, you do not
resubmit it — you rectify it under s.602 of the Companies Act 2016. mPortal 2.0
carries three flavours:

- **Standard rectification** — correcting data in an AR or FS already submitted, whether through MBRS or over the counter
- **Filing information rectification** — correcting the filing header itself, for example a financial year end lodged as 30/12/23 instead of 31/12/23, or a submission lodged as AR4 when it should have been AR1
- **Nil filing** — rectifying a record without uploading any replacement AR or FS, used for double submissions or a court order without replacement

There is also a **court order filing** path for companies with dissolved status.

Under MBRS 1.0 rectification meant a counter application before refiling. MBRS
2.0 brought the whole process into the portal. That is a genuine improvement,
and it is also why the rectification entry points exist in mTool at all.

## A working sequence

1. **Fix the dates before you open the tool.** Financial year end, circulation
   date, lodgement deadline. The lodgement clock under s.259(1)(a) starts on
   circulation, not on year end.
2. **Confirm the mTool build and taxonomy version** on SSM's MBRS page. SSM
   updates these without a separate announcement.
3. **Choose the entry point deliberately** — company type, Act, accounting
   standard. If you need KFI or FS-FC, the EA2 or EA3 approval has to exist
   already.
4. **Cross-foot the accounts before tagging.** Every internal inconsistency a
   PDF used to hide is now a blocking validation failure.
5. **Map once and record the mapping.** The judgement calls you make this year
   should be repeated next year, or your comparatives will not be comparable in
   the data even if they are in the accounts.
6. **Tag the non-financial statements too** — directors' report, statement by
   directors, auditors' report. These are concepts, not attachments.
7. **Validate and fix inside mTool.** mPortal is not a validation service.
8. **Check the lodger's practising certificate and digital certificate** before
   the deadline week, not during it.
9. **Upload, route for lodger approval, pay, keep the acknowledgement.** The
   acknowledgement is the evidence of compliance, not the zip file.
10. **If the file will not be ready, apply for an extension before the period
    expires** — EA5A for circulation, EA5B for lodgement, EA7 for the annual
    return.

## Common mistakes

- **Typing the rounded figure instead of using the `decimals` attribute.**
  53,928 in a set of accounts stated in thousands is 53928000 with decimals -3.
  Typing 53928 passes every validation rule and is wrong by a factor of a
  thousand.
- **Trying to create a custom element.** Company extensions to SSMxT_2022v1.0
  are not allowed. Use a text block.
- **Filing KFI without the EA2 approval**, or FS-FC without the EA3 waiver.
  Both require a granted exemption first.
- **Assuming one extension covers both clocks.** EA5A extends circulation, EA5B
  extends lodgement, and s.258 and s.259 are sequential.
- **Uploading an mTool 1.0 zip to mPortal 2.0.** Open it in the current tool and
  regenerate.
- **Using the old company registration number format.** The new format is
  mandatory in MBRS 2.0 except for pre-populating annual return data.
- **A deactivated maker–lodger association**, so uploaded filings never reach
  the lodger's approval queue and nobody notices until the deadline.
- **Treating a query as a stopped clock.** It is not. Penalties run from the
  statutory date.
- **Changing presentation basis between years** — order of liquidity one year,
  current/non-current the next — and producing comparatives that do not align in
  the data.
- **Leaving the directors' report untagged in draft prose.** It maps to 24
  defined concepts and the Fifth Schedule headings; drafting it that way from the
  start removes an entire class of rework.

## What's next

Before your next year end, do one thing: write down the mapping. Every account
in your trial balance, the SSMxT concept it was tagged to, and the reason where
the choice was not obvious. That document is worth more than the XBRL file
itself, because the file is disposable and the mapping is what you rebuild from
scratch every year if you do not keep it.

Then read the [tagging errors](/en/accounting/mbrs-tagging-errors) page, which
takes the failure families above and works through what each one actually looks
like in a real set of accounts.
