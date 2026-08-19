---
hidden: true
topicId: MY-ACC-0004
title: "What a Malaysian Statutory Financial Statement Pack Contains"
seoTitle: "Financial Statement Pack Malaysia: 5 Documents"
slug: "financial-statement-pack"
category: "accounting"
subcategory: ["financial-statements"]
summary: "The statutory pack is five separate documents under four different sections of the Companies Act 2016, each with its own signing rule — not one thing called the financial statements."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "A Malaysian statutory financial statement pack is five documents: the financial statements themselves under s.244 and s.248, the directors' report under s.252, the statement by directors under s.251(2), the statutory declaration under s.251(1)(b), and the auditor's report under s.266. Each has a distinct signing requirement. An audit-exempt company replaces the auditor's report with an audit exemption certificate under Practice Directive 10/2024."
keyTakeaways:
  - "The statement by directors and the statutory declaration are two different documents in the same subsection — one is an opinion of the board, the other a sworn declaration by one person"
  - "The statement by directors needs at least two directors, or the sole director; the statutory declaration needs only the person responsible for financial management"
  - "The directors' report must state the name of the person who signed it on the directors' behalf, under s.252(3)"
  - "Contents of the directors' report are set by s.253 plus the Fifth Schedule — it is not a free-form narrative"
  - "Failing to circulate a compliant pack exposes the company and every officer to a fine up to RM500,000 under s.251(4)"
  - "Audit-exempt companies still lodge four of the five documents, plus the certificate in Appendix 1 of PD 10/2024"
appliesTo: "Directors, company secretaries and accountants assembling or reviewing a set of statutory accounts before circulation and lodgement."

faq:
  - q: "What is the difference between the statement by directors and the statutory declaration?"
    a: "The statement by directors is made under s.251(2) in accordance with a board resolution, stating whether in the directors' opinion the financial statements are drawn up in accordance with the applicable accounting standards to give a true and fair view. It is signed by at least two directors, or by the sole director. The statutory declaration under s.251(1)(b) is made by a single person — a director, or where that director is not primarily responsible for financial management, the person who is — setting out his opinion as to the correctness of the financial statements."
  - q: "Who signs the directors' report?"
    a: "It must be approved by the board and signed on the directors' behalf by at least two directors, or by that director where the company has a single director, under s.252(2). Section 252(3) adds a requirement people routinely miss: every copy laid before an AGM, sent to a member under s.257, or otherwise circulated must state the name of the person who signed on the directors' behalf."
  - q: "Does an audit-exempt company still need all these documents?"
    a: "Yes, minus the auditor's report. Paragraph 17 of Practice Directive 10/2024 requires unaudited financial statements to be lodged together with the directors' report, statement by directors, statutory declaration and any other required reports, including lodgements under sections 251 and 252. Paragraph 18 then adds the audit exemption certificate set out in Appendix 1, signed by a director under paragraph 19."
  - q: "What does the auditor's report actually have to say?"
    a: "Under s.266(2) the auditor must state whether the financial statements are in his opinion properly drawn up so as to give a true and fair view of the matters required by s.249, in accordance with the Act, and in accordance with the applicable approved accounting standards. The report goes to the members — laid before the AGM for a public company, or circulated to members or laid before a meeting of members for a private company."
  - q: "Are these documents filed as one PDF to SSM?"
    a: "No. Under MBRS 2.0 they are tagged as separate structures in the XBRL instance. The SSM taxonomy carries dedicated concepts for each: 24 for the directors' report, 29 for the statement by directors, 22 for the auditors' report to members, and 11 for the directors' business review."

verificationNeeded:
  - "The precise Fifth Schedule contents list should be read against the current consolidated Companies Act 2016 text before drafting a directors' report — this page describes the structure, not an exhaustive itemisation"
  - "Confirm any Bank Negara modification to form and content under s.254 where the company is a licensed institution"

obligations:
  - what: "Circulate the financial statements and reports to members"
    trigger: "financial-year-end"
    withinDays: 180
    due: "Within six months of financial year end for a private company"
    authority: "SSM"
    statute: "Companies Act 2016, s.257 and s.258(1)(a)"
    consequence: "Fine up to RM50,000 on the company and every officer, plus up to RM500 for each day the offence continues, under s.258(3)"
  - what: "Lodge the financial statements and reports with the Registrar"
    trigger: "change"
    withinDays: 30
    due: "Within 30 days from circulation to members for a private company"
    authority: "SSM"
    statute: "Companies Act 2016, s.259(1)(a)"
    consequence: "Fine up to RM50,000 on every officer, plus up to RM1,000 for each day the offence continues, under s.259(3)"

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
  - title: "Practice Directive No. 10/2024 — Qualifying Criteria for Audit Exemption for Certain Private Companies in Malaysia"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/PD10-2024-Qualifying-Criteria-for-Audit-Exemption-for-Certain-Categories-of-Private-Companies.pdf"
    publisher: "SSM"
    date: "2024-12-16"
  - title: "MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, version 2.4"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQs_Malaysian_Business_Reporting_System_MBRS.pdf"
    publisher: "SSM"
    date: "2024-10-01"

entity: "Statutory financial statement pack"
relations:
  - { rel: "governs", to: "companies-act-2016" }
  - { rel: "administered-by", to: "ssm" }
  - { rel: "related-to", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "unaudited-financial-statements" }
  - { rel: "related-to", to: "financial-statements-lodgement" }
  - { rel: "related-to", to: "audit-exemption" }
related: ["mbrs-2-filing-guide", "mbrs-tagging-errors", "unaudited-financial-statements", "financial-statements-lodgement", "audit-exemption", "mfrs-vs-mpers"]
keywords: ["financial statements Malaysia", "statement by directors", "statutory declaration financial statements", "directors report section 252", "auditors report section 266", "statutory accounts Sdn Bhd", "Fifth Schedule directors report"]
---

Ask a Malaysian director what goes to SSM each year and the answer is usually
"the accounts". Ask which of the four signatures on those accounts is theirs and
the answer gets vague.

The pack is five documents, sitting under four different sections of the
Companies Act 2016, with four different signing rules. Two of them live in
adjacent subsections of the same section and are constantly confused with each
other. Competitor guides treat the whole thing as one blob called "financial
statements", which is how directors end up signing a statutory declaration they
have not read.

## The five documents

| Document | Statute | Who signs |
| --- | --- | --- |
| Financial statements | s.244, s.248, s.249, s.250 | Approved by the Board under s.251(1)(a) |
| Statement by directors | s.251(2)–(3) | At least two directors, or the sole director |
| Statutory declaration | s.251(1)(b) | One director, or the person primarily responsible for financial management |
| Directors' report | s.252, contents in s.253 | At least two directors, or the sole director, on the directors' behalf |
| Auditor's report | s.266 | The auditor |

Everything below is that table, explained.

## 1. The financial statements

Section 248(1) puts the duty on **the directors of every company** to prepare
financial statements — within eighteen months of incorporation, and subsequently
within six months of each financial year end.

Section 244(1) applies the approved accounting standards, meaning MFRS or MPERS
as issued by the Malaysian Accounting Standards Board. Section 249(1) requires a
true and fair view of financial position. Section 250 brings in consolidation
where the company is a holding company.

The penalty attaches to individuals: any director who contravenes s.248 is liable
on conviction to a fine up to **RM500,000** or imprisonment up to one year, or
both. That is not an administrative counter fee — it is a criminal exposure on
the director personally.

Section 251(1)(a) requires the financial statements to be **approved by the
Board**. This is a board act, minuted, and it is the trigger for everything else
in the pack.

## 2. The statement by directors

This is the document most often called "the directors' statement", and it is not
the directors' report.

Section 251(2) requires the directors to make a statement, **in accordance with
the resolution of the Board**, stating whether in their opinion the financial
statements — and where applicable the consolidated financial statements — are
drawn up in accordance with the applicable accounting standards so as to give a
true and fair view of the financial position and financial performance of the
company and of the group.

Section 251(3) sets the signature: **at least two directors**, or in the case of
a sole director, that director. It must be attached to the financial statements
for circulation under s.257.

## 3. The statutory declaration

Different subsection, different signatory, different legal character.

Section 251(1)(b) requires the financial statements to be **accompanied by a
statutory declaration** made by a director — or, where that director is not
primarily responsible for the financial management of the company, **by the
person who is** — setting forth his opinion as to the correctness or otherwise of
the financial statements and, where applicable, the consolidated financial
statements.

Two practical points fall out of that wording, and both are widely missed.

**It is one person, not two.** The two-signature rule belongs to s.251(2)–(3).
The declaration is a single declarant.

**It need not be a director at all.** Where the director is not the person
primarily responsible for financial management, the Act directs the declaration
to the person who is — in most companies, the finance manager or accountant. This
is not a delegation of the directors' duty; it is a recognition that the person
who knows whether the figures are correct should be the one swearing to it.

Section 251(4) carries the sanction for the section as a whole: in respect of any
financial statements circulated, published or issued, the company **and every
officer** who contravene the section commit an offence, liable to a fine up to
**RM500,000** or imprisonment up to one year, or both.

## 4. The directors' report

Section 252(1): the directors shall prepare, **for each financial year**, a
report attached to the financial statements prepared under s.248.

Section 252(2): approved by the Board, and signed on the directors' behalf by at
least two directors, or by that director where there is one.

Section 252(3) is the sleeper. **Every copy** of the directors' report laid before
an AGM under s.340, sent to a member under s.257, or otherwise circulated,
published or issued by the company **shall state the name of the person who
signed the report on the directors' behalf**. A scanned signature without the
printed name does not satisfy it.

The contents are prescribed, not free-form. Section 253(1) requires:

- the name of every person who was a director during the financial year, **and**
  during the period from the end of the financial year to the date of the report;
- the principal activities of the company during the financial year, including
  its subsidiaries; and
- the matters set out in the **Fifth Schedule**.

Section 253(2) extends the reference to the subsidiary undertakings included in
the consolidated financial statements. Section 253(3) permits — but does not
require — a **business review** as set out in Part II of the Fifth Schedule.

The penalties split. A director who fails to take all reasonable steps to secure
compliance with s.252(1) faces up to **RM500,000** or a year. A contravention of
s.252(2) — the approval and signature rule — carries a lower fine of up to
**RM20,000** on the company and every officer.

## 5. The auditor's report

Section 266(1): every auditor shall report to the members on the financial
statements **and on the company's accounting and other records relating to those
financial statements**, and on the consolidated financial statements where there
are any.

Where the report goes depends on the company. For a public company it is laid
before the AGM. For a private company it is circulated to members, or laid before
a meeting of members.

Section 266(2) fixes the content. The auditor must state whether the financial
statements are in his opinion properly drawn up so as to give a true and fair
view of the matters required by s.249, in accordance with the Act, and in
accordance with the applicable approved accounting standards — with a
carve-out for financial statements prepared for authorities under s.26D of the
Financial Reporting Act 1997, which are subject to those authorities'
specifications.

## The audit-exempt pack

Audit exemption removes one document from five. It removes nothing else.

Practice Directive 10/2024 is explicit. Paragraph 15 requires an exempt company
to lodge its unaudited financial statements **with the required certificate, in
compliance with sections 258 and 259**. Paragraph 16 requires those statements to
comply with the approved accounting standards under s.244(1). Paragraph 17
requires them to be lodged **together with the directors' report, statement by
directors, statutory declaration and any other reports** required to be lodged,
including lodgements under sections 251 and 252.

Paragraph 18 adds the fifth item: an **audit exemption certificate** stating the
matters in Appendix 1 — that members have not requested an audit for that year,
that the directors acknowledge their responsibilities for accounting records and
the preparation of financial statements, and that the statements were prepared in
accordance with the applicable approved standards issued by MASB. Paragraph 19
requires it to be signed by a director, and where that director is not primarily
responsible for financial management, the name of the person responsible must
also be stated — the same split as the statutory declaration.

So an exempt private company assembles four statutory documents plus a
certificate, and saves an audit fee. It does not save an accounts preparation.

## What SSM does with the pack

Under MBRS 2.0 these are not attachments. Each is a tagged structure in the XBRL
instance, with its own concepts in the SSM Taxonomy: **24 concepts** for the
directors' report, **29** for the statement by directors, **22** for the auditors'
report to members, and **11** for the directors' business review.

The practical consequence is that a directors' report written as prose and never
mapped to the s.253 and Fifth Schedule headings becomes a tagging problem at
filing time. Drafting it against the statutory structure from the outset removes
that work entirely.

## Common mistakes

- **Confusing the statement by directors with the statutory declaration.** Two
  documents, two subsections of s.251, two different signing rules.
- **Having two directors sign the statutory declaration** because the two-director
  rule was assumed to apply. It belongs to s.251(3), not s.251(1)(b).
- **A director swearing the declaration when the finance manager is the person
  primarily responsible for financial management.** The Act points to that person.
- **Omitting the signatory's printed name from the directors' report.** Section
  252(3) requires every circulated copy to state it.
- **Treating the directors' report as narrative.** Section 253 and the Fifth
  Schedule prescribe its contents; the business review under Part II is the
  optional part.
- **Listing only the directors in office at year end.** Section 253(1)(a) also
  requires those who held office between year end and the date of the report.
- **Assuming audit exemption reduces the pack to the accounts.** PD 10/2024
  paragraph 17 preserves four documents and paragraph 18 adds a fifth.
- **Quoting the RM50,000 lodgement fine as the whole risk.** Sections 248(3),
  251(4) and 252(4) each carry up to RM500,000 and a year's imprisonment.

## What's next

Take your last signed pack and check three things against this page: that the
statutory declaration was made by the right person, that the directors' report
states the signatory's name, and that the directors listed include anyone who
came or went between year end and the report date. Those three are the ones that
turn up most often, and all three are fixed at drafting stage for free.

Then work backwards from your financial year end to the circulation date, because
under s.259(1)(a) the lodgement clock does not begin until circulation happens.
