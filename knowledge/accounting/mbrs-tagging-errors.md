---
topicId: MY-ACC-0003
title: "SSMxT Tagging Errors: Why MBRS Filings Fail Validation"
seoTitle: "MBRS Tagging Errors: SSMxT Validation Failures"
slug: "mbrs-tagging-errors"
category: "accounting"
subcategory: ["financial-statements"]
summary: "The tagging mistakes that stop an MBRS filing from generating or get it queried back — wrong element selection, scale and sign errors, block versus detail tagging, and notes that have no home in the taxonomy."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Most MBRS validation failures fall into five families: a missing mandatory element, a derived mandatory element triggered by a filing-information choice, a dimension aggregation that does not sum to its parent, a sign rule breach, or a cross-statement inconsistency. The errors that validation cannot catch are worse — wrong element selection and wrong scale both produce technically valid files carrying wrong numbers."
keyTakeaways:
  - "The scale error is the dangerous one: a figure keyed in thousands passes every validation rule and misstates the accounts by a factor of a thousand"
  - "There are no SSMxT elements that must always be negative — expenses are normally stored as positive numbers"
  - "Validation runs on assertions where true means passed, so the message names the rule, not the fix"
  - "Company extensions are prohibited, so an unmappable note goes into a text block, never into an invented concept"
  - "Filing information at the top of the template drives derived mandatory rules further down — a wrong company status cascades"
  - "Presentation basis is a choice you make once: order of liquidity versus current/non-current, function versus nature of expenses"
appliesTo: "Preparers producing SSM XBRL instance documents in mTool, and reviewers signing off on a filing before a lodger submits it."

faq:
  - q: "Why does mTool say an element is mandatory when my accounts do not have that line?"
    a: "SSMxT models mandatory elements as existence assertions, with a separate assertion for each concept so the failure message can name it. Some are unconditionally mandatory — SSM's own example is that Assets must be reported. Others are derived mandatory, required only because of something you selected elsewhere. If the line genuinely does not exist in your accounts, check whether a filing-information choice triggered the requirement before you assume the tool is wrong."
  - q: "Should expenses be tagged as negative numbers?"
    a: "Usually not. The SSMxT architecture document states there are no elements which should always be stored as a negative value, because negatively weighted elements such as expenses are stored as positive numbers in most cases. What the formula linkbase does enforce is a list of elements that must always be positive. Sign errors in SSMxT filings are therefore more often over-application of minus signs than under-application."
  - q: "How do I tag a note the taxonomy has no concept for?"
    a: "Into a text block. Company extensions to SSMxT_2022v1.0 are not allowed, so you cannot create an element. SSM's stated approach is that the preparer provides the necessary level of detail by text-block tagging the information using appropriate text block concepts. The information is still lodged, it is simply not individually machine-readable."
  - q: "What is the difference between block tagging and detail tagging?"
    a: "Detail tagging assigns each figure its own concept, so the number is individually machine-readable and subject to validation rules. Block tagging captures a whole note as a text block against one concept. Detail tagging is required wherever the taxonomy models the concept; block tagging is the fallback for detail the taxonomy does not carry. Blocking something the taxonomy models is a quality failure even where it does not fail validation."
  - q: "Does a validation error mean SSM has rejected my filing?"
    a: "No. mTool validation happens offline before anything is submitted, and the file simply will not generate. A rejection or query is a separate event that happens in mPortal after upload. Neither one pauses the s.258 circulation deadline or the s.259 lodgement deadline."

verificationNeeded:
  - "SSM does not publish a consolidated list of MBRS rejection reason codes — the error families here are derived from the SSMxT_2022 architecture document's formula linkbase categories, not from a published rejection register"
  - "Confirm the validation behaviour of the specific entry point against the mTool 2.2 user manual for that entry point before relying on any rule described generically"

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
  - title: "MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, version 2.4"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQs_Malaysian_Business_Reporting_System_MBRS.pdf"
    publisher: "SSM"
    date: "2024-10-01"
  - title: "MBRS Enhancement MBRS 2.0 — Overview"
    url: "https://www.ssm.com.my/Pages/Publication/PDF%20Files/AD%202024%20-%20Overview%20of%20MBRS%20v2.pdf"
    publisher: "SSM"
  - title: "Companies Act 2016 (Act 777), updated text as at 1 August 2022"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
  - title: "MBRS — Malaysian Business Reporting System"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/MBRS.aspx"
    publisher: "SSM"

entity: "SSMxT tagging errors"
relations:
  - { rel: "administered-by", to: "ssm" }
  - { rel: "part-of", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "mbrs-2" }
  - { rel: "related-to", to: "financial-statement-pack" }
  - { rel: "related-to", to: "sdn-bhd-bookkeeping" }
related: ["mbrs-2-filing-guide", "mbrs-2", "financial-statement-pack", "sdn-bhd-bookkeeping", "mfrs-vs-mpers"]
keywords: ["MBRS tagging error", "SSMxT validation", "XBRL validation failure Malaysia", "mTool error", "MBRS rejected", "block tagging text block SSM", "MBRS decimals scale"]
---

The failure that costs money is not the one that stops the file generating. It
is the one that generates cleanly, lodges cleanly, and carries a number that is
wrong by a factor of a thousand.

SSMxT validation is good at arithmetic and blind to meaning. It will refuse a
statement of changes in equity that does not foot. It will happily accept total
assets of RM53,928 for a company with RM53.9 million on its balance sheet,
because 53,928 is a perfectly valid number.

That asymmetry is how you should read every error family below: the ones the
tool catches are inconvenient, and the ones it does not are the ones to review
for.

## The two errors validation cannot see

### Scale

SSMxT handles rounding through the XBRL `decimals` attribute, not by rounding
the value. SSM's own worked example: a company whose accounts are stated in
thousands and whose assets read 53,928 tags the fact as **53928000 with
`decimals` set to -3**.

A preparer who copies the printed figure straight off the face of the accounts
tags 53928. No rule fires. The instance is valid XBRL. The lodged accounts show a
company one-thousandth of its actual size — machine-readable, permanent, and
visible to anyone who pulls the data.

Every filing prepared from a set of accounts presented in thousands or millions
needs a scale check as a discrete review step, separate from validation.

### Element selection

The taxonomy carries thousands of concepts, several of which will plausibly fit
any given balance. Nothing in mTool tells you that you picked the plausible one
rather than the right one.

Two consequences follow. First, the tagged accounts stop matching what a reader
of the PDF would understand. Second — and this is the one that bites in year two
— the mapping decision is a **precedent**. Tag the same balance differently next
year and your comparatives diverge in the data even though the printed accounts
are consistent.

Record the mapping. Not the file, the mapping: account, concept, and the reason
where the choice was a judgement call.

## The five families of validation failure

SSM builds the rules into the taxonomy's formula linkbase, using existence
assertions and value assertions, modelled so that **true means the rule passed**.

**Mandatory elements.** Concepts that must be present, one assertion per concept
so that the failure message names the missing element. SSM's documented example:
"Assets" should be reported.

**Derived mandatory elements.** Required only under certain conditions, modelled
with a precondition plus a value assertion. SSM's example is exact and worth
memorising: *when the filer selects status of company as "Public company", then
disclosure of financial statements audit status should be "Audited".*

This is the family that produces the most bewildered support requests, because
the error surfaces in the financial statements while its cause is a dropdown in
the filing information block. Before arguing with a derived mandatory error,
re-read the header.

**Dimension aggregation.** Members of an axis must sum to their parent where the
preparer structured them in a summation-like hierarchy. SSM's example: total
equity equals non-controlling interest plus other equity components plus equity
attributable to owners of the parent.

**Positive and negative values.** Here the intuition most preparers bring is
wrong. The architecture document is explicit that *there are no elements which
should always be stored as a negative value*, because negatively weighted items
such as cost of sales are stored as positive numbers in most cases. What the
formula linkbase actually carries is a list of elements that must **always be
positive** — SSM's example is that the total amount of indebtedness in MYR should
be a positive value.

So the common sign error in an SSMxT filing is not a missing minus sign. It is a
preparer helpfully adding one.

**Cross-statement and correlated data.** The same fact appearing in more than one
statement must agree, and logically related facts are checked against each other.
A profit figure in the statement of profit or loss that disagrees with the
opening-to-closing movement in the statement of changes in equity used to be
invisible in a PDF. It now blocks the file.

Underneath all five sit the structural checks — XBRL, dimensional, formula,
table, extensible enumeration and iXBRL validation — confirming the instance is
well formed against SSMxT_2022v1.0 itself.

## Block tagging versus detail tagging

Detail tagging gives a figure its own concept: individually machine-readable,
individually validated, individually comparable across years. Block tagging
captures a whole note as text against a single text-block concept.

The rule that decides which you use is not a preference. **Company extensions to
SSMxT_2022v1.0 are not allowed.** Where the taxonomy carries a concept, you tag
to it. Where the accounting standards require detail the taxonomy does not model
— segment breakdowns being SSM's own example of entity-specific detail — the
instruction is to supply it by text-block tagging into an appropriate text block
concept.

The failure mode is over-blocking: a preparer under deadline pressure blocks an
entire note that the taxonomy models concept by concept. It generates, it
lodges, and it hollows out the filing. Nothing in the data pipeline SSM built
gets any use out of a note stored as a paragraph.

Where an instance is prepared in iXBRL, untagged human-readable content can sit
in the document alongside the tagged facts. That reduces the pressure to force
everything into a tag, but it does not license blocking what should be detailed.

## Notes that do not map

Three situations recur.

**A note the taxonomy has no concept for.** Text block. This is the designed
answer, not a workaround.

**A note the taxonomy models under a different name.** More common than preparers
expect, because SSMxT inherits IFRS Taxonomy 2022 labels while Malaysian
accounts often carry house terminology. Use the inbuilt SSMxT browser in mTool
to search the concept, not the label you are used to.

**A note that belongs to a presentation basis you did not choose.** The taxonomy
carries alternatives — current/non-current versus order of liquidity for the
statement of financial position, function versus nature of expenses for profit or
loss, direct versus indirect for cash flows. Concepts belonging to the basis you
did not select are not available. Preparers read this as a missing element. It is
a presentation choice made two steps earlier.

## Currency, and the statutory rule behind it

Monetary facts must carry `iso4217:MYR`. Preparers of foreign-owned subsidiaries
reporting to a group in another currency sometimes assume the presentation
currency travels with the accounts. It does not.

This is not just a taxonomy constraint. Section 259(1)(c) of the Companies Act
2016 requires that all amounts shown in financial statements and reports lodged
with the Registrar be quoted in Malaysian currency, and that documents in any
language other than Bahasa Malaysia or English be accompanied by a certified
translation.

## Common mistakes

- **Keying the printed figure from accounts stated in thousands** instead of the
  full amount with `decimals` set to -3. Passes validation, misstates the
  accounts.
- **Adding minus signs to expenses.** SSMxT stores negatively weighted items as
  positive in most cases.
- **Arguing with a derived mandatory error** without checking the filing
  information header that triggered it.
- **Blocking a note the taxonomy models in detail** because the deadline is
  closer than the understanding.
- **Searching the taxonomy for your own account name** rather than the IFRS
  label, then concluding the concept does not exist.
- **Changing presentation basis year to year**, which silently breaks the
  comparatives in the data.
- **Assuming a validation failure is a rejection.** Validation is offline in
  mTool; rejection and query happen in mPortal after upload. Neither stops the
  statutory clock.
- **Tagging a group's presentation currency** instead of Malaysian Ringgit.
- **Treating the mapping as disposable.** The instance document is disposable.
  The mapping is the asset.

## What's next

Build a two-column review step into your close: every tagged fact against the
face of the accounts, checked for scale, and every judgement-call mapping
recorded with its reason. Neither is a validation rule, which is exactly why
neither will be caught for you.

If you are still choosing an entry point or working out the maker and lodger
roles, start with the
[MBRS 2.0 preparation guide](/en/accounting/mbrs-2-filing-guide).
