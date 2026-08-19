---
topicId: MY-ACC-0029
title: "Consolidated Financial Statements: When a Group Must Report as One"
seoTitle: "Consolidated Financial Statements in Malaysia: MFRS 10 Control Test"
slug: "consolidated-financial-statements"
category: "accounting"
subcategory: ["consolidation"]
summary: "When one Malaysian company controls another, MFRS 10 forces the group to present a single set of consolidated accounts. This guide explains the control test, the exemption for wholly-owned intermediate parents, and how it feeds SSM's MBRS group filing."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Under MFRS 10, a Malaysian parent must consolidate every entity it controls — control meaning power over the investee, exposure to variable returns, and the ability to use that power to affect those returns. The result is one set of consolidated financial statements presenting the group as a single economic entity. A narrow exemption lets a wholly-owned or consenting intermediate parent skip consolidation when a higher parent already publishes IFRS-compliant consolidated accounts, but the group's accounts must still be filed with SSM through the MBRS XBRL platform."
keyTakeaways:
  - "MFRS 10 is triggered by control, not by a 50% shareholding threshold — control is a three-part test of power, variable returns, and the link between them (MFRS 10, para 7)."
  - "MFRS is word-for-word aligned with IFRS and mandatory for non-private (public-interest) entities in Malaysia; MFRS 10 has applied to annual periods beginning on or after 1 January 2013."
  - "An intermediate parent can be exempt from preparing consolidated statements only if all four conditions in MFRS 10 paragraph 4(a) are met — chiefly that a higher parent produces publicly available IFRS-compliant consolidated accounts."
  - "The Companies Act 2016 requires directors to prepare compliant financial statements and to include subsidiaries in consolidated statements (s250); consolidated accounts are filed with SSM in XBRL via MBRS."
appliesTo: "Directors, company secretaries, accountants and finance teams of Malaysian holding companies and groups with one or more subsidiaries."

faq:
  - q: "Does owning more than 50% of a company automatically trigger consolidation?"
    a: "Usually, but not always. MFRS 10 is based on control, not a fixed shareholding line. A majority of voting rights normally gives control, but an investor can control an investee with less than half the votes (for example through contractual arrangements), and a majority holder can lack control if key decisions rest elsewhere."
  - q: "Can a Malaysian subsidiary skip preparing consolidated financial statements?"
    a: "Only if it meets every condition in MFRS 10 paragraph 4(a): it is a wholly-owned subsidiary (or its other owners do not object), its debt or equity is not publicly traded, it is not filing statements to issue instruments publicly, and its ultimate or an intermediate parent produces IFRS-compliant consolidated statements available for public use."
  - q: "What is the difference between consolidated and separate financial statements?"
    a: "Consolidated statements present the parent and all controlled subsidiaries as one economic entity, eliminating intra-group balances and transactions. Separate (standalone) statements show the parent alone, carrying investments in subsidiaries at cost, fair value or the equity method. MBRS templates provide columns for both."
  - q: "How are consolidated financial statements filed in Malaysia?"
    a: "They are lodged with the Companies Commission of Malaysia (SSM) through the Malaysian Business Reporting System (MBRS), which requires financial statements in XBRL format. MBRS supports both the MFRS and MPERS frameworks and provides consolidated and separate reporting columns."

lang: "en"
masterLanguage: "en"
translationStatus: "master"

status: "published"
aiAssisted: true
reviewer: null
reviewed: 2026-08-08
reviewDue: 2027-08-08
revision: 0
verificationNeeded:
  - "Exact MFRS 10 paragraph numbers cited for the three-element control test (stated here as para 7) and for the intermediate-parent exemption (stated here as para 4(a)) — confirm against the in-force MASB text."
  - "Whether the version of MFRS 10 in force for the reader's financial year reflects later amendments (e.g. Annual Improvements); this draft cites the BV2021 consolidated text."
  - "The exact subject and timing wording of Companies Act 2016 ss244, 245, 248, 250, 258 and 259 against the current SSM-published Act (the source PDF could not be machine-read during drafting)."
  - "MBRS 2.0 announcement date (26 Nov 2024) and phased rollout dates against SSM's own MBRS notice, as the currently cited source is a professional-firm summary."
revisions:
  - revision: 0
    date: 2026-08-08
    change: "Approved and published."
    reviewer: null

updated: 2026-08-08
sources:
  - title: "MFRS 10 Consolidated Financial Statements"
    url: "https://www.masb.org.my/pdf_file/BV2021CR_MFRS10.pdf"
    publisher: "Malaysian Accounting Standards Board (MASB)"
  - title: "Malaysian Financial Reporting Standards (MFRSs)"
    url: "https://www.masb.org.my/pages.php?id=89"
    publisher: "Malaysian Accounting Standards Board (MASB)"
  - title: "Use of IFRS Standards by jurisdiction: Malaysia"
    url: "https://www.ifrs.org/use-around-the-world/use-of-ifrs-standards-by-jurisdiction/view-jurisdiction/malaysia/"
    publisher: "IFRS Foundation"
  - title: "Companies Act 2016 (Act 777)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "Companies Commission of Malaysia (SSM)"
  - title: "Malaysian Business Reporting System (MBRS) 2.0"
    url: "https://www.bdo.my/en-gb/insights/featured-insights/malaysian-business-reporting-system-(mbrs)-2-0"
    publisher: "BDO Malaysia"

entity: "MFRS 10 Consolidated Financial Statements"
relations:
  - { rel: "governs", to: "consolidated-financial-statements" }
  - { rel: "related-to", to: "companies-act-2016" }
  - { rel: "related-to", to: "mbrs-xbrl-filing" }
related: ["companies-act-2016"]
keywords: ["MFRS 10", "consolidated financial statements", "control", "subsidiary", "holding company", "Companies Act 2016", "MBRS", "group accounts", "Malaysia"]
---

Buy a controlling stake in another company and you have not just added a line item to your balance sheet — you have created a group that Malaysian accounting rules insist on treating as a single entity. That is the quiet force behind MFRS 10 *Consolidated Financial Statements*: the moment one company controls another, the two must report to the outside world as one.

This guide walks through the control test that pulls a subsidiary into the group accounts, the narrow escape hatch for intermediate parents, and how the finished consolidated statements land at the Companies Commission of Malaysia (SSM).

## What actually triggers consolidation?

Not a shareholding percentage. MFRS 10 is built on the principle of **control**, and control has three elements that must all be present ([MASB, MFRS 10, para 7](https://www.masb.org.my/pdf_file/BV2021CR_MFRS10.pdf)):

1. **Power** over the investee — existing rights that give the ability to direct the activities that most affect the investee's returns, usually through voting rights or contractual arrangements.
2. **Exposure, or rights, to variable returns** from involvement with the investee — returns that can go up or down, such as dividends, remuneration, or exposure to losses.
3. **The ability to use that power to affect those returns** — the link that ties the first two together.

If an investor has all three, the investee is a subsidiary and must be consolidated. If any element is missing, there is no control and no consolidation under MFRS 10.

Because the test is about substance, a bare 50%-plus-one shareholding is a strong indicator but never the whole story. An investor can control an investee while holding **less than half** the voting rights — for example through a shareholders' agreement or by holding rights over the relevant activities. Conversely, a majority holder can *lack* control if the decisions that drive returns sit with someone else. This is why "we own 60%, so we consolidate" is a starting assumption, not a conclusion.

## Where does MFRS 10 sit in Malaysian law?

MFRS 10 is part of the **Malaysian Financial Reporting Standards (MFRS) Framework**, which is word-for-word aligned with IFRS Standards and requires financial statements to carry an explicit, unreserved statement of compliance with IFRS ([IFRS Foundation](https://www.ifrs.org/use-around-the-world/use-of-ifrs-standards-by-jurisdiction/view-jurisdiction/malaysia/)). MFRS applies mandatorily to non-private (public-interest) entities for annual periods beginning on or after 1 January 2012, with Transitioning Entities brought in from 1 January 2018.

MFRS 10 itself was issued on 19 November 2011 and applies to annual reporting periods beginning on or after 1 January 2013 ([MASB](https://www.masb.org.my/pdf_file/BV2021CR_MFRS10.pdf)).

The company-law backbone comes from the **Companies Act 2016**. The directors' duties around accounts sit across several sections ([SSM, Companies Act 2016](https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf)):

| Section | What it requires |
| --- | --- |
| s244 | Financial statements must comply with approved accounting standards (the MFRS/MPERS issued by MASB). |
| s245 | Accounting records must be kept to explain the company's transactions and position, and retained for seven years. |
| s248 | Directors must prepare financial statements — within 18 months of incorporation, and thereafter within 6 months of each financial year end. |
| s250 | Subsidiaries must be included in consolidated financial statements. |
| s258 | Financial statements must be circulated to members within 6 months of the financial year end. |
| s259 | Financial statements must be lodged with the Registrar (private companies: within 30 days of circulation). |

Read together, s244, s248 and s250 mean a Malaysian holding company cannot pick and choose: if MFRS 10 says an entity is controlled, that entity's results belong in the group accounts.

## Consolidated vs separate: what's the difference?

A **consolidated** set of statements adds the parent and every controlled subsidiary together line by line, then strips out intra-group balances, transactions, income and expenses so the group is presented as one economic entity. Non-controlling interests (the slice of a subsidiary the parent does not own) are shown separately within equity.

**Separate** (standalone) financial statements, by contrast, present the parent on its own, carrying investments in subsidiaries at cost, fair value, or under the equity method. They are not a substitute for consolidation — they sit alongside it.

A worked illustration: suppose Parent Sdn Bhd owns 80% of Sub Sdn Bhd, and during the year Parent sold RM2 million of goods to Sub. In the consolidated statements, that RM2 million of revenue and the matching cost are **eliminated** — the group cannot report profit on selling to itself — and the 20% of Sub's net assets it does not own appears as non-controlling interest. In Parent's separate statements, none of that happens; Parent simply shows its investment in Sub and any dividends received.

## When can an intermediate parent skip consolidation?

Groups often stack companies several layers deep, and preparing full consolidated accounts at every tier is wasteful. MFRS 10 paragraph 4(a) provides a **narrow exemption**: an intermediate parent need not prepare consolidated financial statements if it meets **all four** of these conditions ([MASB, MFRS 10, para 4(a)](https://www.masb.org.my/pdf_file/BV2021CR_MFRS10.pdf)):

- It is a **wholly-owned subsidiary**, or a partially-owned subsidiary whose other owners have been informed and do not object to consolidated statements not being prepared;
- Its **debt or equity instruments are not traded** in a public market;
- It has **not filed, and is not in the process of filing**, its financial statements with a securities regulator for the purpose of issuing instruments publicly; and
- Its **ultimate or an intermediate parent produces consolidated financial statements** that comply with IFRS and are available for public use.

Miss any one of these — a bond listed on a public market, a pending IPO filing, an ultimate parent whose accounts are not publicly available — and the exemption falls away, and the intermediate parent must consolidate its own sub-group.

A practical read: the exemption exists so users get consolidated information *somewhere* higher up the chain, without duplicating it at every level. It is not a way to keep a controlled group off the books entirely.

## How do consolidated statements get filed with SSM?

Once prepared, group accounts do not just sit in a boardroom file — they are lodged with SSM through the **Malaysian Business Reporting System (MBRS)**, the regulator's XBRL-based digital filing platform. MBRS templates support both the MFRS and MPERS frameworks and provide separate columns for **consolidated** and **separate** (standalone) figures, so a group tags both in the same submission.

MBRS 2.0 was announced on 26 November 2024 and rolled out in phases — unaudited financial statements of Companies Act 2016 companies from 1 December 2024, audited statements of legacy Companies Act 1965 companies from 1 March 2025, and audited statements of all Companies Act 2016 companies from 1 June 2025 ([BDO Malaysia](https://www.bdo.my/en-gb/insights/featured-insights/malaysian-business-reporting-system-(mbrs)-2-0)). For most groups, that means the consolidation judgements made under MFRS 10 now have to survive translation into structured XBRL tags before they reach the Registrar.

## What's next

- **Run the control test deliberately.** Document *why* each investee is or is not controlled — voting rights, agreements, board composition — rather than defaulting to the shareholding percentage. This is the judgement auditors probe first.
- **Check the exemption chain.** If you rely on MFRS 10 paragraph 4(a), confirm in writing that a higher parent publishes IFRS-compliant consolidated accounts that are publicly available, and that no public-market or securities-filing condition is breached.
- **Map your group before MBRS season.** Because MBRS carries both consolidated and separate columns, reconcile your intra-group eliminations and non-controlling interests early so the XBRL tagging is a formatting step, not a re-do of the accounts.
- **Verify current standards.** MFRS 10 has been amended over time (including Annual Improvements). Confirm the version in force for your financial year on the [MASB](https://www.masb.org.my/pages.php?id=89) site before finalising.
