---
topicId: MY-ACC-0025
title: "Keeping Accounting Records Outside Malaysia"
slug: "records-outside-malaysia"
category: "accounting"
subcategory: ["records"]
summary: "What section 245(5) to (7) of the Companies Act 2016 permits when accounting records sit on a foreign cloud ERP or in a regional shared service centre, and why the Income Tax Act is stricter."

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Section 245(5) of the Companies Act 2016 permits accounting records of operations outside Malaysia to be kept outside Malaysia, provided the records are sent to and kept at a place in Malaysia and made available for inspection by the directors at all times. It does not authorise keeping records of Malaysian operations offshore. Separately, section 82(8) of the Income Tax Act 1967 requires all records relating to a business in Malaysia to be kept and retained in Malaysia."
keyTakeaways:
  - "s.245(5) is a carve-out for records of operations OUTSIDE Malaysia only"
  - "Even then the records must be sent to and kept at a place in Malaysia and open to director inspection at all times"
  - "s.245(6) requires those records to include statements and returns sufficient to prepare true and fair financial statements"
  - "s.245(7) lets the Registrar require production at a place in Malaysia, or dictate the type and manner of records kept here"
  - "ITA 1967 s.82(8) is stricter and flatter: all records relating to a business in Malaysia must be kept and retained in Malaysia"
  - "ITA s.82A(5) applies the same rule to documents relating to income in Malaysia"
appliesTo: "Malaysian subsidiaries of multinational groups, companies on foreign-hosted cloud ERP, and finance teams served by a regional shared service centre."

verificationNeeded:
  - "Neither SSM nor LHDN publishes guidance on whether data hosted on a foreign cloud region but accessible from Malaysia satisfies the kept-in-Malaysia requirement — the position stated here follows the statutory wording, and there is no published administrative concession"

lang: "en"
masterLanguage: "en"
translationStatus: "master"

status: "draft"
aiAssisted: true
reviewer: null
version: "0.2"
revisions:
  - version: "0.1"
    date: 2026-07-20
    change: "Initial draft."
    reviewer: null
  - version: "0.2"
    date: 2026-07-21
    change: "Made the row-3 ITA cell a verdict consistent with the other rows (foreign branch records are not within s.82(8)), and removed a dangling seven-year reference this article never establishes, tying it instead to the full retention period."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Companies Act 2016 (Act 777), reprint as at 1 August 2022"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
    date: "2022-08-01"
  - title: "Income Tax Act 1967 (Act 53), reprint as at 21 May 2024"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "LHDN"
    date: "2024-05-21"

entity: "Companies Act 2016 section 245(5)"
relations:
  - { rel: "governs", to: "companies-act-2016" }
  - { rel: "administered-by", to: "ssm" }
  - { rel: "part-of", to: "accounting-records-section-245" }
  - { rel: "related-to", to: "e-invoice-accounting-records" }
related: ["accounting-records-section-245"]
keywords: ["accounting records outside Malaysia", "section 245(5) Companies Act", "cloud accounting records Malaysia", "shared service centre records Malaysia", "keep records in Malaysia LHDN"]
---

A Malaysian subsidiary running SAP out of a Singapore data centre, with the finance
function in a Kuala Lumpur-to-Manila shared service arrangement, is a completely
normal 2026 structure. It is also, read strictly, a structure two statutes did not
contemplate — and they disagree with each other.

## What the Companies Act permits

Section 245(4) sets the default: records are kept at the registered office **or at
such other place as the directors think fit**, and are open at all times for
inspection by the directors. There is no geographic word in that subsection.

Section 245(5) then carves out a specific offshore permission, and its scope is
narrower than it is usually quoted. It permits **the accounting and other records of
operations outside Malaysia** to be kept at a place outside Malaysia — **provided
that** those records shall be **sent to and kept at a place in Malaysia** and be made
available for inspection by the directors at all times.

Two things follow.

**The carve-out is about foreign operations, not foreign systems.** A Malaysian
company's records of its Malaysian operations are not within s.245(5) at all. The
subsection contemplates a Malaysian company with a branch or business abroad, letting
that branch's ledgers sit locally.

**Even inside the carve-out, a Malaysian copy is mandatory.** The proviso is not
optional. The records must be sent to and kept at a place in Malaysia.

Section 245(6) tightens it further: those records must include such statements and
returns as will enable true and fair financial statements to be prepared. A summary
trial balance uploaded to group consolidation is unlikely to meet that.

Section 245(7) is the enforcement lever. Where records are kept outside Malaysia
under s.245(4) or s.245(5), **the Registrar may require the company to produce those
records at a place in Malaysia, or determine the type and manner of the records to be
kept in Malaysia**. That is a standing power over your data architecture, exercisable
without a court order.

The section 245(9) penalty applies throughout: on conviction, a fine up to RM500,000
or imprisonment up to three years, or both, on the company and every officer.

## The Income Tax Act is stricter

Most guidance stops at the Companies Act. The harder rule is in the tax statute, and
it has no offshore carve-out at all.

**Section 82(8) of the Income Tax Act 1967: all records that relate to any business
in Malaysia shall be kept and retained in Malaysia.** Flat, unqualified, no
operations-abroad exception.

**Section 82A(5)** applies the same rule to documents relating to income in Malaysia.

Section 82(7) adds a format rule that bites on any digital-first finance function:
records kept electronically must be retained in an **electronically readable form**
and kept so as to be **readily accessible and convertible into writing**; and where
records originally kept in manual form were later converted to electronic form, the
**original manual records must still be retained**.

Contravening s.82(1), (1A), (6), (7) or (8) without reasonable excuse is an offence
under **section 119A**, carrying a fine of **not less than RM300 and not more than
RM10,000**, or imprisonment up to one year, or both.

## What this means in practice

| Arrangement | Companies Act 2016 | Income Tax Act 1967 |
| --- | --- | --- |
| Malaysian operations, ERP hosted offshore, no Malaysian copy | Not within the s.245(5) carve-out | Contrary to s.82(8) |
| Malaysian operations, ERP offshore, complete records replicated and retained in Malaysia | Consistent with s.245(4) and open to director inspection | Consistent with s.82(8) |
| Foreign branch records held abroad only | Breaches the s.245(5) proviso | Not within s.82(8) — it reaches only Malaysian business records |
| Foreign branch records held abroad and also sent to and kept in Malaysia | Permitted under s.245(5), subject to s.245(6) content | Consistent |

The workable design is the same in every case: whatever the primary system, a
complete, readable, retrievable set of records lives in Malaysia and stays there for
the full retention period.

## Common mistakes

- **Reading s.245(5) as general permission to host accounting data offshore.** It
  applies to records of operations outside Malaysia, and only with a Malaysian copy.
- **Assuming remote access is the same as keeping records in Malaysia.** Neither
  statute says accessible from Malaysia; both say kept in Malaysia.
- **Ignoring the ITA entirely.** It is the stricter of the two and it has a penalty
  that does not require a conviction on Companies Act facts.
- **Migrating ERP without an export.** A system decommissioned by group leaves you
  unable to satisfy either statute, and the obligation runs for the full retention
  period.
- **Retaining a converted electronic copy and destroying the paper.** Section 82(7)(b)
  requires the pre-conversion manual records to be retained in their original form.

## What's next

If e-Invoicing is part of your architecture, the retention question gets a third
layer, because a validated document held in the MyInvois database is not by itself a
sufficient record under either statute.
