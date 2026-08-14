---
topicId: "MY-CS-0061"
title: "MBRS: XBRL Financial Statement Filing to SSM"
seoTitle: "MBRS: XBRL Financial Statement Filing to SSM"
slug: "mbrs-xbrl-filing"
category: "company-secretary"
subcategory: ["statutory-filing"]
summary: "How Malaysian companies lodge financial statements, annual returns and exemption applications with SSM in XBRL format through the Malaysian Business Reporting System (MBRS)."
tier: "3"
mode: "practical"
contentType: "agency"
sensitivity: "none"
answer: "MBRS (Malaysian Business Reporting System) is SSM's XBRL-based platform for lodging financial statements, annual returns and related exemption applications. Companies prepare filings offline in the free MBRS Preparation Tool (mTool), then a licensed company secretary or agent lodges the generated XBRL file through the MBRS Portal (mPortal). Since the MBRS 2.0 rollout, XBRL lodgement of financial statements is mandatory rather than optional."
keyTakeaways:
  - "MBRS has three components: the SSM XBRL Taxonomy (SSMxT), the Microsoft Excel-based Preparation Tool (mTool, free of charge), and the submission portal (mPortal), accessed via SSM4U."
  - "It covers three filing families — Annual Return (AR), Financial Statements and Key Financial Indicators (FS/KFI), and Exemption Applications (EA) — under the Companies Act 2016 (and legacy Companies Act 1965 filings)."
  - "Financial statements are tagged against MFRS or MPERS taxonomies; the full XBRL set includes the statement of financial position, profit or loss, cash flows, changes in equity and notes, plus the directors' and auditors' reports."
  - "A 'Maker' prepares and uploads the XBRL file; a 'Lodger' (licensed company secretary or agent, with a digital certificate) must lodge it within 3 days of upload or the filing is purged."
  - "A Pos Digicert digital certificate is required to sign filings — RM47.70 for one year or RM95.40 for two years (inclusive of service charge); lodgement fees follow the Companies Regulations 2017."
appliesTo: "Malaysian private and public companies, foreign companies registered in Malaysia, and the company secretaries, company agents and their assistants who prepare and lodge statutory filings with SSM."
faq:
  - q: "Is XBRL filing through MBRS now compulsory?"
    a: "Yes. Under the phased MBRS 2.0 implementation announced by SSM, digital XBRL lodgement of financial statements became mandatory, replacing the earlier optional/scanned arrangement. Annual returns and exemption applications are also lodged through MBRS."
  - q: "Do I still need to file both an annual return and financial statements?"
    a: "Yes — they are separate obligations. The annual return (Section 68, Companies Act 2016) is lodged within 30 days of the company's incorporation anniversary; financial statements are lodged under Section 259 after they are circulated to or laid before members. Filing one does not satisfy the other."
  - q: "Can a foreign company or a Bank Negara-regulated institution file via MBRS?"
    a: "Yes. MBRS has dedicated entry points for foreign companies (FS-FC, AR3 under Section 576) and for banking/finance/insurance entities regulated by Bank Negara Malaysia (FS-BNM), in addition to MFRS, MPERS, CLBG and exempt private company templates."
  - q: "What software do I need to run mTool?"
    a: "mTool runs only on Windows with a supported Microsoft Office edition (2010 to 365), .NET Framework 4.8 and Visual Studio Tools for Office Runtime 4.0. It does not run on macOS."
lang: "en"
masterLanguage: "en"
translationStatus: "master"
status: "in-review"
aiAssisted: true
reviewer: null
version: "0.1"
revisions:
  - version: "0.1"
    date: 2026-08-10
    change: "Initial AI draft."
    reviewer: null
verificationNeeded:
  - "Exact MBRS 2.0 mandatory phase dates (Phase 1 ~1 December 2024, subsequent phases to ~1 June 2025) — secondary/advisory sources conflict; confirm against SSM's official announcement/circular."
  - "Precise statutory day-counts under CA 2016 s258/s259 for circulation and lodgement of financial statements (private vs public companies) — confirm against the Act text at AGC."
  - "Current SSMxT taxonomy version and mTool release number at time of publication."
updated: 2026-08-10
sources:
  - title: "MBRS (Malaysian Business Reporting System) — Services"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/MBRS.aspx"
    publisher: "Suruhanjaya Syarikat Malaysia (SSM)"
  - title: "Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, Version 2.4 (Oct 2024)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQs_Malaysian_Business_Reporting_System_MBRS.pdf"
    publisher: "Suruhanjaya Syarikat Malaysia (SSM)"
  - title: "Practice Directive No. 7/2021 (Revised: 1 December 2024) — Lodgement of Annexure on Beneficial Ownership Information of Annual Return under Sections 68 and 576 of the Companies Act 2016"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Practice%20Directive%207%202021%20(Revised)%2028112024.pdf"
    publisher: "Suruhanjaya Syarikat Malaysia (SSM)"
  - title: "MBRS 2.0 Malaysia: Mandatory Filing Guide for Companies"
    url: "https://malaysia.incorp.asia/guides/mbrs-2-0-malaysia-compliance/"
    publisher: "InCorp Malaysia"
entity: "Malaysian Business Reporting System (MBRS), Suruhanjaya Syarikat Malaysia (SSM)"
related: []
keywords: ["MBRS", "XBRL", "SSM", "mTool", "mPortal", "SSMxT", "financial statements", "annual return", "MBRS 2.0"]
---

The **Malaysian Business Reporting System (MBRS)** is SSM's digital submission platform, based on the eXtensible Business Reporting Language (XBRL) format. It lets companies lodge their **Annual Return (AR)**, **Financial Statements and Key Financial Indicators (FS/KFI)**, and **Exemption Applications (EA)** — the guiding scopes drawn from the Companies Act 2016 (and legacy Companies Act 1965), and from the MFRS and MPERS accounting standards. Introduced by SSM in 2018 and since upgraded to **MBRS 2.0**, XBRL lodgement of financial statements is now mandatory.

## The three components

- **SSM XBRL Taxonomy (SSMxT):** a dictionary of financial and non-financial reporting elements, embedded in the preparation tool.
- **MBRS Preparation Tool (mTool):** a free, Microsoft Excel-based add-in used to key in data offline and generate the XBRL file. It runs only on Windows with a supported Office edition, .NET Framework 4.8 and VSTOR 4.0 — not on macOS.
- **MBRS Portal (mPortal):** the web platform, reached through **SSM4U** (ssm4u.com.my), where the XBRL file is uploaded, digitally signed, paid for and lodged.

MBRS is separate from MyCoID: MyCoID updates company information, while MBRS is used to submit statutory financial and return filings.

## What you can file

| Filing family | Examples of entry points | Governing sections (CA 2016) |
|---|---|---|
| Annual Return | AR1 (with share capital), AR2 (without), AR3 (foreign company) | s68; s576 (foreign) |
| Financial Statements / KFI | FS-MFRS, FS-MPERS, FS-CLBG, FS-EPC, FS-BNM, FS-FC | s259 |
| Exemption Applications | EA2 (KFI in lieu of full XBRL, s604(2)), EA3 (waive FC lodgement, s575(7)), EA5A/EA5B (extension of time, s259(2)), EA7 (extend AR lodgement, s609(2)) | various |

The full XBRL financial statement set covers the statement of financial position, profit or loss, cash flows and changes in equity, notes, and the directors' and auditors' reports. Companies that obtain SSM's approval under EA2 may instead file **Key Financial Indicators (KFI)** rather than a full-tagged set.

## Roles: Maker and Lodger

Two roles operate in mPortal. A **Maker** (company secretary assistant or agent assistant) prepares and uploads the XBRL file. A **Lodger** — a licensed company secretary or company agent holding a **digital certificate** — reviews, digitally signs, pays and lodges it. The Lodger must lodge within **3 days** of the Maker's upload, or the file is purged. mPortal verifies whether a company secretary is blacklisted or has an expired licence.

## Statutory deadlines

MBRS does not change the underlying deadlines; it only changes the format.

| Obligation | Trigger | Indicative deadline |
|---|---|---|
| Annual Return (s68) | Anniversary of incorporation | Within 30 days of the anniversary |
| Financial Statements (s259) — private company | Circulation to members | Within 30 days of circulation |
| Financial Statements (s259) — public company | Annual general meeting | Within 30 days of the AGM |

Where a company cannot meet these dates, it applies for an **extension of time** via the relevant EA (for example EA5B for lodging financial statements, EA7 for the annual return).

## Costs

The mTool is free. A **Pos Digicert** digital certificate is required to sign filings: **RM47.70** for one year or **RM95.40** for two years (inclusive of the service charge). Lodgement fees for the AR, FS and EA follow the **Companies Regulations 2017**. Payment in mPortal is by credit/debit card or online banking.

## What's next

Confirm your company's financial year end and incorporation anniversary, ensure your company secretary holds a valid digital certificate, and prepare the XBRL set in the latest mTool well ahead of the deadline. For related obligations, see the annual return and audit-exemption pages, and download the current mTool and taxonomy from ssm.com.my.
