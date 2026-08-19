---
topicId: MY-BIZ-0011
title: "MSIC Codes: How to Pick Yours, and What It Decides Later"
seoTitle: "MSIC Code Malaysia: How to Choose Yours"
slug: "msic-codes-malaysia"
category: "business"
subcategory: ["formation"]
summary: "What the Malaysia Standard Industrial Classification is, how the five-level code structure works, and how the code you declare at SSM propagates into licensing, bank onboarding and grant eligibility."

tier: "4"
mode: "practical"
contentType: "data"

answer: "MSIC is the Malaysia Standard Industrial Classification, maintained by the Department of Statistics Malaysia and adapted from the United Nations ISIC. Codes run five levels deep — a lettered section, then two, three, four and five-digit numeric levels. You declare your activity as an MSIC code when you incorporate at SSM, and that declaration is then read by LHDN, banks, licensing authorities and grant agencies."
keyTakeaways:
  - "MSIC 2008 is maintained by the Department of Statistics Malaysia and adapted from UN ISIC Rev. 4"
  - "Five levels: section (letter), division (2 digits), group (3), class (4), item (5) — the 5-digit item is what you declare"
  - "The code is declared at incorporation and reappears in your annual return as the nature of business (Companies Act 2016, s.68(3)(b))"
  - "LHDN uses MSIC in the MyInvois e-Invoice system, so the code follows you into tax reporting"
  - "Banks read MSIC during onboarding and risk classification — a high-risk code slows account opening"
  - "Licensing authorities and grant agencies filter eligibility by activity, and your declared code is the first filter"
  - "The code should describe what the company actually does, not what sounds most impressive"
appliesTo: "Anyone incorporating a company or business in Malaysia, or discovering that their registered activity no longer matches what they do."

faq:
  - q: "How many MSIC codes can a company register?"
    a: "SSM's MyCoID incorporation form asks for the nature of business, and practitioner guidance commonly states that up to three MSIC codes may be selected alongside a written description. That figure is widely repeated but we have not been able to confirm it against an SSM-published instruction, so treat it as a working assumption and check the current form."
  - q: "What happens if my MSIC code does not match what I actually do?"
    a: "Nothing immediately, which is why the problem surfaces late. It shows up when a licensing authority checks that your registered activity covers the licence you are applying for, when a bank queries a mismatch between your declared activity and your transaction pattern, or when a grant scheme filters applicants by sector and your code excludes you."
  - q: "Can I change my MSIC code later?"
    a: "Yes. A change of business activity is notified to SSM through your company secretary. It is a straightforward filing, but it is not retroactive — it will not repair an application that has already been assessed against the old code."
  - q: "Where is the official list?"
    a: "The Department of Statistics Malaysia maintains MSIC 2008 and publishes both a searchable system at msic.stats.gov.my and the dataset through OpenDOSM. SSM publishes its own MSIC code lists for ROB and ROC registration."

verificationNeeded:
  - "Confirm how many MSIC codes SSM currently permits at incorporation and on a change of activity — the commonly quoted figure of three is practitioner guidance, not an SSM publication we have verified"
  - "Confirm whether SSM currently uses MSIC 2008 version 1.0 or a later revision for ROC registration; the DOSM system publishes version 1.0"
  - "Bank risk classification by MSIC is institution-specific and not published — treat the effect described here as a pattern, not a rule"

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
sensitivity: "none"

updated: 2026-07-20
sources:
  - title: "MSIC — data catalogue"
    url: "https://open.dosm.gov.my/data-catalogue/msic"
    publisher: "Department of Statistics Malaysia (DOSM)"
  - title: "Sistem MSIC 2008"
    url: "https://msic.stats.gov.my/bi/"
    publisher: "Department of Statistics Malaysia (DOSM)"
  - title: "SSM MSIC Code"
    url: "https://www.ssm.com.my/Pages/Publication/SSM%20MSIC%20Code/SSM-MSIC-Code.aspx"
    publisher: "SSM"
  - title: "Companies Act 2016 (Act 777), as at 1 August 2022"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"

entity: "Malaysia Standard Industrial Classification (MSIC)"
relations:
  - { rel: "administered-by", to: "dosm" }
  - { rel: "affects", to: "register-sdn-bhd" }
  - { rel: "affects", to: "business-licence-malaysia" }
  - { rel: "related-to", to: "corporate-bank-account-malaysia" }
  - { rel: "related-to", to: "e-invoice" }
related: ["register-sdn-bhd", "e-invoice"]
keywords:
  - "MSIC code Malaysia"
  - "kod MSIC"
  - "business code SSM"
  - "MSIC 2008"
  - "nature of business SSM"
  - "how to choose MSIC code"
---

You will spend about ninety seconds picking your MSIC code, and every institution you
deal with for the next decade will read it.

That asymmetry is the reason this page exists. Every guide explains what MSIC stands
for. Almost none connect the choice to the consequence.

## What MSIC is

The **Malaysia Standard Industrial Classification** is the national scheme for
classifying economic activity, maintained by the **Department of Statistics Malaysia**
and adapted from the United Nations' International Standard Industrial Classification
(ISIC) Revision 4. The current edition in public use is **MSIC 2008**.

Its original purpose is statistical — DOSM uses it to categorise economic data and
produce national accounts. It became an administrative identifier by adoption: SSM,
LHDN, banks and licensing bodies all needed a common vocabulary for "what does this
business do", and MSIC was already there.

## The code structure

Five levels, each nesting inside the one above.

| Level | Format | Example of what it captures |
| --- | --- | --- |
| Section | 1 letter | The broad economic sector |
| Division | 2 digits | A major activity grouping within the section |
| Group | 3 digits | A narrower activity family |
| Class | 4 digits | A specific activity |
| Item | 5 digits | The most granular level — this is what you declare |

The five-digit item is the operative code. Where a deeper level does not apply, the
published tables use dashes.

Search it at DOSM's MSIC system, or through OpenDOSM's data catalogue. SSM publishes
its own MSIC code lists split by registration type — ROB for businesses, ROC for
companies.

## Where the code travels

This is the part that matters.

| Institution | What it uses your MSIC code for | Consequence of a bad fit |
| --- | --- | --- |
| SSM | Nature of business at incorporation; carried into the annual return under s.68(3)(b) | Public record shows an activity you do not carry on |
| LHDN | Industry classification, including in the MyInvois e-Invoice system | Reporting mismatch against your actual revenue streams |
| Banks | Onboarding, KYC and risk classification | Slower approval, extra due diligence, occasionally refusal |
| Licensing authorities | Whether your registered activity covers the licence you want | Application returned pending a change of activity |
| Local councils | Assessing a business premise licence application | Licence issued for the wrong activity, or refused |
| Grant and incentive agencies | Sector eligibility filters | Screened out before a human reads the application |
| Procurement and vendor registration | Category matching for tenders | Not surfaced in the buyer's category search |

None of these bodies asks you to re-justify the code. They read it and act.

## Choosing well

**Describe what you do, not what you aspire to.** The commonest error is picking a
code for the impressive future business rather than the actual current one. Then the
bank sees payments that do not match the declared activity, which is precisely the
pattern anti-money-laundering monitoring is built to flag.

**Check the licensing consequence first.** Some activities are regulated. A code that
describes a regulated activity you are not licensed for invites questions at the bank
and at the council. A code that omits the regulated activity you *do* carry on will
block the licence application.

**Match the code to the revenue, not to the story.** If 90% of your income is software
development and 10% is training, your primary code is software development.

**Check the grant filters before you file.** Sector-based incentive and financing
schemes screen on activity classification. If a specific scheme is part of your plan,
find its eligible-activity list before you choose, not after you are rejected.

**Write the description carefully.** SSM's incorporation form takes a written
description of the general nature of business alongside the code. That description is
read by humans at banks and licensing authorities, and it is your opportunity to be
precise where a five-digit code is blunt.

## A worked way to decide

1. Write one sentence describing how the company earns money. Not what it is — how
   the cash arrives.
2. Search that sentence's main verb and object in DOSM's MSIC system.
3. Read the *class* level, not just the item, to confirm you are in the right family.
4. List the licences and grants you expect to need in the first two years, and check
   each one's activity requirement against your candidate code.
5. Only then pick the item code, and write the description to match.

## Common mistakes

- **Picking the code the secretary suggests without reading it.** It is a two-minute
  step for them and a decade-long identifier for you.
- **Choosing an aspirational activity.** It causes a mismatch between declared activity
  and observed transactions, which is the exact bank monitoring trigger.
- **Choosing a vague catch-all.** Vagueness reads as evasiveness during onboarding and
  fails specific eligibility filters.
- **Declaring a regulated activity you are not licensed for.** Free to type, expensive
  to explain.
- **Never updating it.** Companies pivot; the register does not follow automatically,
  and the mismatch surfaces at the worst possible moment — mid-application.
- **Assuming the code has no effect because nothing happened at incorporation.**
  Nothing happens at incorporation. Everything happens at the bank, the council and
  the grant agency.

## What's next

Look up your company's current registered activity on your SSM profile and read it
against what the business actually does today. If they have drifted apart, change it
before your next licence renewal, grant application or bank review — not during one.
