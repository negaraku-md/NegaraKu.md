---
topicId: MY-EMP-0005
title: "EPF for Employers: Why the Third Schedule Is a Table, Not a Percentage"
seoTitle: "EPF Employer Guide Malaysia: Third Schedule Rates"
slug: "epf-employer-guide"
category: "employment"
subcategory: ["payroll-statutory"]
summary: "How to compute and remit EPF correctly — including the rule that percentage arithmetic is not permitted below RM20,000 in monthly wages."

tier: "2"
mode: "practical"
contentType: "guide"

answer: "Employers must contribute EPF at the rates in the Third Schedule to the EPF Act 1991. For monthly wages up to RM20,000 those rates are fixed ringgit amounts read off a banded table, and the EPF states that employers are not allowed to calculate the shares as an exact percentage. Only above RM20,000 do you apply percentages. Which Part of the Schedule applies depends on the employee's citizenship, residence status and age. Contributions are due by the 15th of the following month."
keyTakeaways:
  - "Below RM20,000 in monthly wages the Third Schedule gives fixed ringgit amounts — computing a percentage is expressly not allowed and produces a short contribution"
  - "Part A applies to Malaysian citizens and permanent residents under 60: employer 13 per cent up to RM5,000 in wages, 12 per cent above"
  - "Part E covers Malaysian citizens aged 60 and over — employer 4 per cent, employee nil"
  - "Part F, new from the October 2025 wage month, covers non-Malaysian citizens at 2 per cent each way with no wage bands"
  - "Parts B and D, the old elective non-citizen regime with its flat RM5 employer contribution, were deleted by Act A1760/2025"
  - "Contributions are payable in whole ringgit by the 15th of the month following the wage month"
appliesTo: "Employers, payroll administrators and anyone configuring EPF logic in a payroll system."

faq:
  - q: "Why does percentage arithmetic give the wrong EPF figure?"
    a: "Because the Third Schedule amounts are struck on the top of each wage band rather than on the employee's actual wage. Bands are RM20 wide up to RM5,000 and RM100 wide from there to RM20,000, so an employee sitting anywhere below the top of their band attracts a contribution slightly higher than a straight percentage of their salary. The EPF's own example shows RM3,250 attracting RM424 and RM359 from the table against RM423 and RM358 by percentage."
  - q: "When does the 13 per cent employer rate become 12 per cent?"
    a: "At RM5,000 of monthly wages. Under Part A, wages of RM5,000 and below attract an employer share equivalent to 13 per cent and an employee share of 11 per cent; above RM5,000 the employer share drops to 12 per cent while the employee share stays at 11 per cent. Both are still expressed as fixed table amounts until wages exceed RM20,000."
  - q: "What rate applies to employees aged 60 and over?"
    a: "It depends on citizenship. Malaysian citizens aged 60 and over fall under Part E: employer 4 per cent, employee nil. Permanent residents and non-citizens who elected to contribute before 1 August 1998 fall under Part C: employer 6.5 per cent on wages up to RM5,000 and 6 per cent above, employee 5.5 per cent. Non-citizens registered from 1 August 1998 stay at 2 per cent under Part F regardless of age."
  - q: "How do I handle wages above RM20,000?"
    a: "This is the only case where you calculate percentages directly. Under Part A the employee contributes 11 per cent and the employer 12 per cent of the actual wages for the month. The total contribution including cents is then rounded up to the next ringgit — EPF's example takes RM21,250 to a total of RM4,887.50 and rounds it to RM4,888."
  - q: "What are the age limits for EPF contribution?"
    a: "The minimum age to register and contribute as an EPF member is 14. The maximum age of contribution is 75. For non-Malaysian citizen employees the same upper limit applies — they must be below 75 years of age to be registered and contributed for."

verificationNeeded:
  - "Confirm the current EPF late-payment charge or dividend-equivalent penalty rate against KWSP directly — not stated on the pages reviewed"
  - "Confirm the precise statutory definition of wages for EPF purposes, and the treatment of specific allowances and bonuses, against the EPF Act 1991 s.2 definition and current KWSP guidance"

obligations:
  - what: "Remit EPF contributions for the wage month"
    trigger: "ongoing"
    due: "on or before the 15th day of the month following the wage month"
    authority: "KWSP"
    statute: "EPF Act 1991, s.43(1) and Third Schedule"
    consequence: "Late-payment charges and enforcement action"
  - what: "Register as an employer with the EPF"
    trigger: "change"
    due: "on engaging a person under a contract of service or apprenticeship"
    authority: "KWSP"
    statute: "EPF Act 1991"
  - what: "Register a non-Malaysian citizen employee for EPF"
    trigger: "change"
    due: "on engagement, with contributions due from the October 2025 wage month onward"
    authority: "KWSP"
    statute: "EPF Act 1991, Third Schedule Part F"

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
  - title: "Employer Mandatory Contribution"
    url: "https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution"
    publisher: "KWSP"
  - title: "EPF Act 1991 Third Schedule"
    url: "https://www.kwsp.gov.my/en/epf-act-1991-third-schedule"
    publisher: "KWSP"
    date: "2026-05-26"
  - title: "Third Schedule effective 1 October 2025"
    url: "https://www.kwsp.gov.my/documents/d/guest/third_schedule_from_-1-october-2025"
    publisher: "KWSP"
  - title: "Contribution For Non-Malaysian Citizen Employees"
    url: "https://www.kwsp.gov.my/en/employer/responsibilities/non-malaysian-citizen-employees"
    publisher: "KWSP"

entity: "EPF employer contributions"
relations:
  - { rel: "administered-by", to: "epf" }
  - { rel: "governs", to: "employees-provident-fund-act-1991" }
  - { rel: "part-of", to: "payroll-compliance-malaysia" }
  - { rel: "explained-in", to: "epf-foreign-workers-malaysia" }
related: ["payroll-compliance-malaysia", "epf-foreign-workers-malaysia", "socso-eis-employer-guide"]
keywords: ["EPF contribution rate Malaysia", "EPF Third Schedule", "KWSP employer contribution", "EPF 13 percent 12 percent", "caruman KWSP majikan"]
---

Ask a Malaysian payroll administrator what the EPF employer rate is and you will
be told 13 per cent. Ask them to compute the contribution on a salary of
RM3,250 and most will multiply. That multiplication is not permitted, and it
gives the wrong number.

The EPF's instruction is stated plainly on its own employer page: employers are
**not allowed** to calculate the employer's and employee's share based on exact
percentage, except for salaries exceeding RM20,000. Everything below that
figure comes off a table.

This is the single most consequential thing an employer can get wrong about EPF,
and it is buried or omitted in most published guidance — which tends to open
with a tidy 13/11 rate box and never mention the Schedule at all.

## Why does the table give a different answer from the percentage?

Because the Third Schedule sets contributions by **wage band**, and the amount
for each band is struck on the top of the band rather than the employee's actual
wage.

Bands are RM20 wide from zero up to RM5,000, then RM100 wide from RM5,000 to
RM20,000. An employee earning anywhere below the top of their band therefore
attracts slightly more than a straight percentage of their own salary.

The EPF publishes the comparison itself. For a Malaysian citizen under 60
earning RM3,250 a month:

| Approach | Employer | Employee | Total |
| --- | --- | --- | --- |
| Correct — Third Schedule Part A | RM424 | RM359 | RM783 |
| Wrong — percentage arithmetic | RM423 | RM358 | RM781 |

Two ringgit. Per employee. Per month. It looks trivial until you notice that it
is not a rounding preference but a contravention of s.43(1), repeated across
every employee and every wage month, and that it compounds as salaries rise. On
wages of RM6,710.80 the Schedule gives RM816 and RM748 — RM1,564 in total —
where percentages give RM1,543.49, a gap of over RM20.

The practical consequence: if your payroll system is configured with a
percentage rule rather than the Schedule table, it is producing short
contributions on essentially every employee below RM20,000.

## Which Part of the Third Schedule applies?

The Schedule is divided into Parts by citizenship, residence status and age. Get
the Part wrong and the rate is wrong regardless of how carefully you read the
table.

| Employee | Under 60 | Aged 60 and over |
| --- | --- | --- |
| Malaysian citizen | **Part A** — employer 13 per cent up to RM5,000 in wages, 12 per cent above; employee 11 per cent | **Part E** — employer 4 per cent; employee nil |
| Permanent resident, or non-citizen who elected before 1 August 1998 | **Part A** — as above | **Part C** — employer 6.5 per cent up to RM5,000, 6 per cent above; employee 5.5 per cent |
| Non-citizen registered from 1 August 1998 | **Part F** — employer 2 per cent, employee 2 per cent | **Part F** — employer 2 per cent, employee 2 per cent |

Two structural points that trip people up.

**The 13 to 12 per cent step happens at RM5,000, not RM20,000.** Under Part A the
employer share is equivalent to 13 per cent on monthly wages of RM5,000 and
below and 12 per cent above it, while the employee share stays at 11 per cent
throughout. The Schedule expresses this as a visible discontinuity: the band
ending at RM5,000 carries an employer amount of RM650, and the very next band —
RM5,000.01 to RM5,100 — carries RM612. The employer contribution goes *down* as
the salary crosses RM5,000.

**RM20,000 is where the method changes, not the rate.** Above RM20,000 you stop
reading the table and start calculating: 12 per cent employer, 11 per cent
employee, on actual wages. Part A directs that the total contribution including
cents is rounded up to the next ringgit. The EPF's example: wages of RM21,250
give RM2,550 and RM2,337.50, totalling RM4,887.50, remitted as RM4,888.

The same rounding-up rule applies to Part C above RM20,000 at 6 and 5.5 per cent,
and to Part E at 4 per cent employer with nil employee.

### Parts B and D no longer exist

If you are working from an older schedule, note that **Parts B and D were deleted
by Act A1760/2025**. They contained the old elective regime for non-citizens who
registered from 1 August 1998, under which the employee contributed a percentage
and the employer paid a flat RM5 per month regardless of salary.

That RM5 figure still appears in a great deal of published guidance and in
payroll systems that have not been updated. It is gone. Non-citizens now sit
under Part F at 2 per cent from each side, mandatory rather than elective, from
the October 2025 wage month. See
[EPF for foreign workers](/en/employment/epf-foreign-workers-malaysia).

Separately, Part C(a) — which used to cover Malaysian citizens aged 60 and over —
was deleted by P.U. (A) 370/2018, and that population moved to Part E. A guide
that puts 60-plus Malaysian citizens at 6.5 per cent is reading a schedule that
is eight years out of date.

## How do you actually remit?

Contributions for a wage month are due **on or before the 15th day of the
following month**. Wages for January are the February contribution month,
payable by 15 February.

The employer pays both shares to the EPF and may deduct the employee's share
from salary. Contributions must be paid in ringgit denominations without any
cent value.

Submission runs through i-Akaun (Employer), the e-Payroll facility, or the
i-Akaun (Employer) app.

### Age boundaries

The minimum age to register and contribute as an EPF member is **14**. The
maximum age of contribution is **75**. Between 60 and 75, contributions continue
but at the reduced Part C or Part E rates; above 75 the liability ends.

## Worked examples from the EPF itself

These are the EPF's published illustrations, reproduced because they are the
cleanest available demonstration that the table and the percentage disagree.

| Scenario | Wages | Correct (table) | By percentage |
| --- | --- | --- | --- |
| Malaysian citizen, under 60, Part A | RM3,250 | RM424 + RM359 = RM783 | RM781 |
| Malaysian citizen, under 60, Part A | RM6,710.80 | RM816 + RM748 = RM1,564 | RM1,543.49 |
| Malaysian citizen, 60+, Part E | RM3,250 | RM131 + RM0 = RM131 | RM130 |
| Permanent resident, 60+, Part C | RM3,250 | RM212 + RM180 = RM392 | RM390 |
| Malaysian citizen, under 60, Part A | RM21,250 | 12% + 11%, rounded up = RM4,888 | (percentage is correct here) |

The pattern holds across every Part: below RM20,000 the table wins, above it the
percentage is the law.

## Common mistakes

**Configuring payroll with a percentage rule.** The most expensive and most
common error. A 13 per cent rule under-contributes on nearly every salary below
RM20,000. Test your system against three sample wages before trusting it.

**Applying the RM5,000 step to the employee share.** It applies only to the
employer share, which moves from 13 to 12 per cent. The employee share is
11 per cent on both sides of the line.

**Still using the flat RM5 employer contribution for foreign workers.** Deleted
along with Parts B and D by Act A1760/2025. The figure is 2 per cent now, from
both sides.

**Putting Malaysian citizens aged 60 and over on Part C.** They moved to Part E
in 2018. Part E is 4 per cent employer and nil employee — a materially different
number.

**Rounding down, or remitting cents.** Contributions are paid in whole ringgit,
and where the percentage method applies the total is rounded **up** to the next
ringgit.

**Assuming the Third Schedule is stable.** The EPF maintains a dated archive of
schedules precisely because employers settling late contributions must apply the
schedule in force for that wage month, not the current one. If you are
regularising arrears, pull the schedule for the correct effective period.

## What's next

Check your payroll output against the Third Schedule for a low, a middle and a
high salary — under RM5,000, between RM5,000 and RM20,000, and above RM20,000.
Those three tests exercise every mechanic on this page.

If you employ non-citizens, read
[EPF for foreign workers](/en/employment/epf-foreign-workers-malaysia)
next, because Part F is new enough that most systems do not yet implement it.
For the other four monthly streams sharing the same 15th deadline, see the
[payroll compliance calendar](/en/employment/payroll-compliance-malaysia).
