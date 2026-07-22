---
topicId: MY-ACC-0022
title: "Switching from MPERS to MFRS (and Back Again)"
seoTitle: "Switching from MPERS to MFRS in Malaysia"
slug: "switching-mpers-to-mfrs"
category: "accounting"
subcategory: ["standards"]
summary: "What triggers a move from MPERS to the full MFRS framework, how the MFRS 1 first-time adoption restatement works, and whether a company can move back to MPERS afterwards."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "A Malaysian company leaves MPERS when it stops meeting the MASB private entity definition — broadly, when it or its parent, or an entity of which it is an associate or jointly controlled entity, becomes required to prepare or lodge financial statements under a law administered by the Securities Commission Malaysia or Bank Negara Malaysia. The move to MFRS is made as a first-time adopter under MFRS 1, which requires an opening statement of financial position at the transition date and restated comparatives. A company that later meets the private entity definition again may adopt MPERS."
keyTakeaways:
  - "The trigger is the MASB private entity definition, not company size, turnover or audit exemption status"
  - "Private entity status is assessed period by period — an entity is a private entity only for periods throughout which it qualifies"
  - "A private company whose parent is listed outside Malaysia is still a private entity under the MASB definition"
  - "Moving to MFRS is a first-time adoption governed by MFRS 1, with an opening statement of financial position at the transition date"
  - "The transition date is the beginning of the earliest comparative period presented, so the restatement reaches back two balance sheet dates"
  - "The move is not one-way in principle — an entity that qualifies again may adopt MPERS, applying MPERS Section 35"
appliesTo: "Directors and accountants of Malaysian private companies approaching a listing, taking on a regulated parent, or restructuring a group."

faq:
  - q: "What exactly makes a company stop being a private entity?"
    a: "The MASB definition. A private entity is a private company incorporated under the Companies Act 2016 that is not itself required to prepare or lodge financial statements under any law administered by the Securities Commission Malaysia or Bank Negara Malaysia, and is not a subsidiary, associate or jointly controlled entity of an entity that is. If any limb fails, the company is outside MPERS."
  - q: "My holding company is listed in Singapore. Do I have to move to MFRS?"
    a: "Not on that basis alone. MASB states that a private company which is a subsidiary of a parent listed outside Malaysia is a private entity. The test is framed around laws administered by the Securities Commission Malaysia and Bank Negara Malaysia. You may still choose MFRS voluntarily, and a foreign parent reporting under IFRS often wants you to."
  - q: "When is the transition date?"
    a: "The beginning of the earliest period for which full comparative information is presented under MFRS. For a company with a 31 December year end presenting one comparative year and first reporting under MFRS for 2027, the transition date is 1 January 2026 and an opening MFRS statement of financial position is prepared at that date."
  - q: "Can we go back to MPERS later?"
    a: "In principle yes. Eligibility is assessed period by period, so a company that qualifies as a private entity again may apply MPERS. It does so as a first-time adopter of MPERS under Section 35. Whether it is commercially sensible is a different question — lenders and investors who have seen MFRS accounts rarely welcome a downgrade in disclosure."
  - q: "Does moving to MFRS change our audit exemption position?"
    a: "No. Audit exemption for small private companies runs on SSM Practice Directive 10/2024 and its own phased thresholds. The reporting framework and the audit exemption test are independent of each other."
  - q: "Do we have to restate tax as well?"
    a: "The tax computation starts from the accounting profit, so a framework change flows into it. Restated comparatives do not reopen a filed Form C on their own, but the transition year computation has to reconcile from the new accounting basis, and deferred tax positions commonly move on transition."

verificationNeeded:
  - "Confirm the current MFRS 1 list of mandatory exceptions and optional exemptions against the issued MFRS 1 text, including the June 2024 amendments made when MFRS 18 was issued"
  - "Confirm whether MASB has issued any specific guidance on re-adoption of MPERS by an entity that previously moved to MFRS"

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
    change: "Fixed the self-negating year-end example (for a 31 December year end, 2 January is after the year end) and aligned 'joint venture' to the article's 'jointly controlled entity' (MFRS 11) terminology in the answer and the trigger-events table."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Implementation of MPERS"
    url: "https://www.masb.org.my/pages.php?id=275"
    publisher: "MASB"
  - title: "MASB Approved Accounting Standards for Private Entities"
    url: "https://www.masb.org.my/pages.php?id=20"
    publisher: "MASB"
  - title: "Malaysian Financial Reporting Standards (MFRSs) — status and effective dates"
    url: "https://www.masb.org.my/pages.php?id=89"
    publisher: "MASB"
  - title: "MPERS (2025)"
    url: "https://www.masb.org.my/pages.php?id=615"
    publisher: "MASB"
    date: "2025-10-10"

entity: "Transition between MPERS and MFRS"
relations:
  - { rel: "administered-by", to: "masb" }
  - { rel: "related-to", to: "mfrs-vs-mpers" }
  - { rel: "requires", to: "accounting-standards-index" }
  - { rel: "affects", to: "mpers-2025-revision" }
related: ["mfrs-vs-mpers"]
keywords: ["switch MPERS to MFRS", "MFRS 1 first-time adoption Malaysia", "private entity definition MASB", "change accounting framework Malaysia", "revert to MPERS"]
---

Every Malaysian firm blog explains the *difference* between MPERS and MFRS. Almost
none explains the thing a finance director actually needs at the moment it matters:
what event forces the change, how far back the restatement reaches, and whether the
decision can be undone.

## What triggers the move?

Not size. Not turnover. Not the audit exemption thresholds. The trigger is MASB's
definition of a private entity, and it is narrower and more mechanical than most
summaries suggest.

A private entity is a private company incorporated under the Companies Act 2016
that:

- **is not itself required** to prepare or lodge any financial statements under a
  law administered by the Securities Commission Malaysia or Bank Negara Malaysia; and
- **is not a subsidiary, associate or jointly controlled entity** of an entity that
  is subject to such a requirement.

The meanings of subsidiary, associate and jointly controlled follow MFRS 10, MFRS 128
and MFRS 11 respectively.

Two features of this test are widely misdescribed.

**It is not a public-interest entity test.** Plenty of guidance frames the question
as whether the company is a public-interest entity. MASB's operative test is the
SC and BNM lodgement test above. They overlap heavily in practice but they are not
the same words, and the words are what an auditor will apply.

**A foreign listing on the parent does not disqualify you.** MASB states that a
private company which is a subsidiary of a parent listed outside Malaysia is a
private entity. A Malaysian subsidiary of a Singapore-listed or Hong Kong-listed
group can remain on MPERS. It very often chooses MFRS anyway, because the parent
consolidates under IFRS — but that is a group reporting decision, not a legal
compulsion arising from MASB's framework.

The realistic events that push a company off MPERS are therefore:

| Event | Effect |
| --- | --- |
| The company itself lists, or files a prospectus | Falls under SC-administered requirements |
| A Malaysian listed company acquires control, or takes an associate or jointly controlled entity stake | Fails the second limb |
| The company obtains a licence regulated by Bank Negara Malaysia | Falls under BNM-administered requirements |
| The group restructures so a BNM-regulated entity becomes the parent | Fails the second limb |
| The board elects to adopt MFRS voluntarily | Voluntary, but the mechanics are identical |

**Status is period-specific.** MASB puts it directly: an entity may only be treated
as a private entity in relation to the annual or interim periods *throughout which*
it is a private entity. A company acquired by a listed group in October is not a
private entity for that financial year. This is the detail that turns a deal
timetable into an accounting problem — completing on 30 December costs a full year of
MFRS reporting that completing earlier in that same financial year would also have
cost, but completing after the year end on 2 January would not.

## How the restatement actually works

Moving to MFRS is a first-time adoption governed by MFRS 1 *First-time Adoption of
Malaysian Financial Reporting Standards*. The core mechanic:

1. **Identify the date of transition** — the beginning of the earliest period for
   which full comparative information is presented under MFRS. With one comparative
   year and a first MFRS reporting year of 2027, the transition date is 1 January
   2026.
2. **Prepare an opening MFRS statement of financial position** at that date. This is
   a real balance sheet, not a note. It is prepared as though MFRS had always
   applied.
3. **Recognise, derecognise, reclassify and remeasure.** Recognise assets and
   liabilities MFRS requires that MPERS did not; remove items MFRS does not permit;
   reclassify what MFRS classifies differently; and remeasure everything to MFRS
   amounts.
4. **Take the difference to retained earnings** (or another equity category where
   MFRS specifies one) at the transition date.
5. **Apply the mandatory exceptions and choose among the optional exemptions.**
   MFRS 1 prohibits retrospective application in certain areas — estimates being the
   most important, since hindsight is not permitted — and offers reliefs in others,
   such as deemed cost for property, plant and equipment.
6. **Disclose the reconciliations.** MFRS 1 requires reconciliation of equity and of
   total comprehensive income from the previous framework to MFRS, at the transition
   date and at the end of the last period reported under the old framework.

The step that consumes the time is step 5. The optional exemptions are elective and
irrevocable in effect, and the deemed cost election for property in particular can
change the depreciation charge for a decade. It should be modelled, not defaulted.

### Where the numbers usually move

- **Financial instruments.** MPERS measurement is simplified. MFRS 9 classification,
  expected credit losses and hedge documentation frequently produce a different
  carrying amount and a different profit or loss profile.
- **Consolidation.** MFRS 10's control model can bring entities into the group that
  MPERS practice left out, and the reverse.
- **Deferred tax.** More temporary differences are recognised and measured under the
  full framework, and the transition entry itself often creates one.
- **Leases.** MFRS 16 brings lessee right-of-use assets and lease liabilities onto
  the balance sheet.
- **Disclosure volume.** This is not a measurement change but it is the change
  people underestimate. The note pack multiplies.

MFRS 19 *Subsidiaries without Public Accountability: Disclosures*, effective for
annual periods beginning on or after 1 January 2027, is the pressure valve here. It
lets an eligible subsidiary apply MFRS recognition and measurement with reduced
disclosure. For a group forced onto MFRS by a parent's status, it is the first thing
to evaluate.

## Can you go back?

The honest answer is: legally yes, commercially rarely.

Because eligibility is assessed period by period, a company that once again meets
the private entity definition — the listed parent sells its stake, the licence is
surrendered — can apply MPERS. It does so as a first-time adopter of MPERS, applying
Section 35 *Transition to the Standard*, which mirrors MFRS 1 in structure: a
transition date, an opening statement of financial position, restated comparatives.

The frictions are practical rather than legal. Banking covenants and shareholder
agreements are often drafted against defined accounting terms. Lenders read a
reduction in disclosure as a reduction in transparency. And a reverse transition
costs a second full restatement, with its own audit fee, to arrive at less
information than you had before.

Most companies that have been through an MFRS transition stay there.

## Common mistakes

- **Using the wrong test.** Public-interest entity, size, or "we are audited" are
  not the criteria. The MASB private entity definition is.
- **Assuming a foreign-listed parent forces MFRS.** MASB says the opposite. It is a
  group reporting choice, not a MASB requirement.
- **Timing a transaction without asking the reporting question.** Because status is
  assessed throughout the period, an acquisition early in a financial year converts
  the whole of that year to MFRS.
- **Treating the transition date as the first reporting date.** It is one full
  comparative period earlier, which is where the data collection has to start.
- **Defaulting the MFRS 1 optional exemptions.** They are elections with long tails,
  particularly deemed cost for property.
- **Ignoring MFRS 19.** A subsidiary pulled onto MFRS by its parent may be able to
  apply reduced disclosures from 1 January 2027 and avoid most of the note-pack cost.

## What's next

If your move is happening around 2027, sequence it against the two standards landing
that year. An entity transitioning to MFRS for periods beginning on or after
1 January 2027 adopts MFRS 18 presentation from day one rather than adopting MFRS 101
and re-presenting a year later — which is usually the cheaper order. An entity
staying on MPERS has its own revision to absorb on exactly the same date.
