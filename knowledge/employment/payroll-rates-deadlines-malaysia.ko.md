---
topicId: MY-EMP-0014
title: "법정 기여금 요율과 급여 기한"
seoTitle: "말레이시아 급여 요율 및 기한 참조"
slug: "payroll-rates-deadlines-malaysia"
category: "employment"
subcategory: ["payroll-statutory"]
summary: "검증된 모든 말레이시아 급여 요율, 임금 상한, 양식, 기한을 하나의 참조표에 담았으며, 각 항목은 이를 공표하는 당국까지 추적됩니다."

tier: "4"
mode: "practical"
contentType: "data"

answer: "다섯 개의 법정 흐름은 임금 지급 월의 다음 달 15일까지 납부됩니다: EPF, SOCSO, EIS, PCB, HRD Corp 부담금입니다. 매년 EA 양식은 2월 28일까지 근로자에게, E 양식은 CP8D와 함께 3월 31일까지 LHDN에 제출됩니다. 최저임금은 RM1,700입니다. SOCSO 및 EIS 임금 상한은 RM6,000입니다. RM20,000 미만 임금에 대한 EPF 기여금은 백분율이 아니라 제3부칙 구간을 따라야 합니다."
keyTakeaways:
  - "One date carries five obligations — the 15th of the following month for EPF, SOCSO, EIS, PCB and HRD levy"
  - "EPF wage bands, not percentages, apply to any wage up to RM20,000"
  - "SOCSO and EIS both stop at an RM6,000 monthly wage ceiling, in force since 1 October 2024"
  - "Non-Malaysian employees registered from 1 August 1998 contribute 2% employer and 2% employee to EPF, effective for October 2025 wages"
  - "Late interest differs by scheme: 6% per annum for SOCSO and EIS, 10% per annum for the HRD levy"
  - "Form E and Form P are excluded from the LHDN e-Filing grace period"
appliesTo: "Payroll administrators, HR teams, finance staff and company secretaries running a Malaysian payroll."

verificationNeeded:
  - "EPF late-payment dividend and penalty rates are not included — confirm the current charge against kwsp.gov.my before publishing a figure"
  - "SOCSO Category 2 employee share and the full Third Schedule band tables are not reproduced here — read them from perkeso.gov.my"
  - "Foreign worker levy rates and the multi-tier levy gazette status are outside this page and unverified"
  - "Confirm the minimum interest charge for late SOCSO and EIS contributions against perkeso.gov.my"

obligations:
  - what: "Remit EPF contributions for the wage month"
    trigger: "monthly"
    dueDay: 15
    due: "On or before the 15th of the following month"
    authority: "KWSP"
    statute: "EPF Act 1991, s.43(1) and Third Schedule"
  - what: "Remit SOCSO contributions for the wage month"
    trigger: "monthly"
    dueDay: 15
    due: "No later than the 15th day of the succeeding month"
    authority: "PERKESO"
    statute: "Employees Social Security Act 1969"
    consequence: "Interest on late payment at 6% per annum for each day outstanding"
  - what: "Remit EIS contributions for the wage month"
    trigger: "monthly"
    dueDay: 15
    due: "No later than the 15th day of the succeeding month"
    authority: "PERKESO"
    statute: "Employment Insurance System Act 2017"
    consequence: "Interest on late payment at 6% per annum for each day outstanding"
  - what: "Remit monthly tax deduction (PCB/MTD) via e-PCB, e-Data PCB or e-CP39"
    trigger: "monthly"
    dueDay: 15
    due: "On or before the 15th day of the subsequent month"
    authority: "LHDN"
    statute: "Income Tax (Deduction from Remuneration) Rules 1994"
  - what: "Pay the HRD Corp levy"
    trigger: "monthly"
    dueDay: 15
    due: "By the 15th of the following month"
    authority: "HRD Corp"
    statute: "PSMB Act 2001"
    consequence: "Interest at 10% per annum on arrears, minimum RM5"
  - what: "Pay wages for the wage period"
    trigger: "ongoing"
    withinDays: 7
    due: "Not later than the seventh day after the last day of the wage period"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.19(1)"
  - what: "Pay rest-day, public-holiday and overtime wages"
    trigger: "ongoing"
    due: "Not later than the last day of the next wage period"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.19(2)"
  - what: "Notify LHDN of a new employee on Form CP22 via the e-CP22 application"
    trigger: "change"
    withinDays: 30
    due: "Within 30 days after the commencement of employment"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83"
  - what: "Notify LHDN of cessation of employment on Form CP22A via e-SPC, and withhold monies payable"
    trigger: "change"
    due: "Not less than 30 days before cessation, or within 30 days of being informed of a death; withhold for 90 days or until tax clearance"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83"
  - what: "Notify LHDN on Form CP21 of an employee leaving Malaysia for more than three months"
    trigger: "change"
    due: "Not less than 30 days before the expected departure date"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83"
  - what: "Prepare and give Form EA (C.P.8A) or EC (C.P.8C) to every employee"
    trigger: "financial-year-end"
    due: "On or before 28 February following the calendar year"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83(1A)"
    consequence: "Offence under s.120(1) ITA 1967 — fine RM200 to RM20,000, or up to six months imprisonment, or both"
  - what: "Upload CP8D data through e-Data Praisi for employee pre-fill"
    trigger: "financial-year-end"
    due: "On or before 25 February following the calendar year"
    authority: "LHDN"
  - what: "Furnish Form E (e-E) together with CP8D"
    trigger: "financial-year-end"
    due: "On or before 31 March following the calendar year"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83 and s.120(1)"
    consequence: "Offence under s.120(1) ITA 1967; no e-Filing grace period applies to Form E"
  - what: "Prepare and give Form CP58 to agents, dealers and distributors"
    trigger: "financial-year-end"
    due: "On or before 31 March following the calendar year"
    authority: "LHDN"
  - what: "Retain payroll and tax records"
    trigger: "ongoing"
    due: "Seven years, accessible to LHDN on request"
    authority: "LHDN"
    statute: "Income Tax Act 1967"
  - what: "Utilise accumulated HRD Corp levy through an approved training grant"
    trigger: "ongoing"
    due: "Within 24 months"
    authority: "HRD Corp"
    consequence: "Forfeiture of the unutilised balance above an RM10,000 threshold"

lang: "ko"
sourceContentHash: "72d685f5d481d7fd"
masterLanguage: "en"
translationStatus: "in-sync"

status: "draft"
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
  - title: "Contribution Rate"
    url: "https://www.perkeso.gov.my/en/rate-of-contribution.html"
    publisher: "PERKESO"
  - title: "Contributions"
    url: "https://www.perkeso.gov.my/en/our-services/employer-employee/contributions.html"
    publisher: "PERKESO"
  - title: "Contribution Payment"
    url: "https://www.perkeso.gov.my/en/our-services/employer-employee/pembayaran.html"
    publisher: "PERKESO"
  - title: "Employers — Employer's Responsibility"
    url: "https://www.hasil.gov.my/en/majikan/"
    publisher: "LHDN"
  - title: "Program Memfail Borang Nyata (BN) Bagi Tahun 2026"
    url: "https://www.hasil.gov.my/wp-content/uploads/program-memfail-bn-bagi-tahun-2026.pdf"
    publisher: "LHDN"
    date: "2025-12-30"
  - title: "Perintah Gaji Minimum 2024 — P.U.(A) 376"
    url: "https://gajiminimum.mohr.gov.my/wp-content/uploads/PUA%20376.pdf"
    publisher: "MOHR"
    date: "2024-12-04"
  - title: "Levy Calculation Guideline and Levy Payment"
    url: "https://supportcentre.hrdcorp.gov.my/portal/en/kb/articles/hrd-levy"
    publisher: "HRD Corp"

entity: "Malaysian statutory payroll rates and deadlines"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "administered-by", to: "epf" }
  - { rel: "administered-by", to: "perkeso" }
  - { rel: "administered-by", to: "hrd-corp" }
  - { rel: "administered-by", to: "jtksm" }
  - { rel: "explained-in", to: "form-e-ea-cp8d-malaysia" }
  - { rel: "explained-in", to: "hrd-corp-levy-malaysia" }
  - { rel: "explained-in", to: "minimum-wage-malaysia" }
related: ["form-e-ea-cp8d-malaysia", "hrd-corp-levy-malaysia", "minimum-wage-malaysia", "payroll-compliance-malaysia", "epf-employer-guide", "socso-eis-employer-guide"]
keywords: ["Malaysia payroll deadlines", "EPF SOCSO EIS rates", "statutory contribution rates Malaysia", "payroll due dates 15th", "PCB deadline", "HRD levy rate"]
---

하나의 참조표이며, 모든 행은 이를 공표하는 당국까지 추적됩니다. 공식 출처와 대조하여
검증할 수 없는 행은 추측하지 않고 이 페이지의 메타데이터 `verificationNeeded`에
기재되어 있습니다.

## 요율과 상한

| 항목 | 요율 | 상한 / 기준 | 당국 |
| --- | --- | --- | --- |
| 최저임금 — 월 | RM1,700 | 2025년 8월 1일부터 모든 고용주 | 인적자원부(MOHR), P.U.(A) 376 |
| 최저임금 — 시간 | RM8.72 | — | 인적자원부(MOHR), P.U.(A) 376 |
| 최저임금 — 일 | RM65.38 / RM78.46 / RM98.08 | 주 6 / 5 / 4일 | 인적자원부(MOHR), P.U.(A) 376 |
| EPF — 말레이시아인, 영주권자, 1998년 8월 1일 전 등록한 비말레이시아인, 60세 미만, 임금 ≤ RM5,000 | 고용주 13%, 근로자 11% | 제3부칙 A편 구간 | KWSP |
| EPF — 동일 집단, 임금 RM5,000 초과 | 고용주 12%, 근로자 11% | 제3부칙 A편 구간 | KWSP |
| EPF — 60세 이상, 말레이시아인 | 고용주 4%, 근로자 0% | 제3부칙 E편, 임금 한도 없음 | KWSP |
| EPF — 60세 이상, 영주권자 및 1998년 이전 비말레이시아인 | 임금 ≤ RM5,000 시 고용주 6.5% / 근로자 5.5%; 초과 시 6% / 5.5% | 제3부칙 C편 | KWSP |
| EPF — 1998년 8월 1일부터 등록한 비말레이시아인 | 고용주 2%, 근로자 2% | 제3부칙 F편, 임금 한도 없음, 2025년 10월 임금분부터 유효 | KWSP |
| SOCSO 제1범주 — 60세 미만 | 고용주 1.75%, 근로자 0.5% | 월 임금 상한 RM6,000 | PERKESO |
| SOCSO 제2범주 — 60세 이상 | 고용주 1.25% | 월 임금 상한 RM6,000 | PERKESO |
| EIS | 고용주 0.2%, 근로자 0.2% | 월 임금 상한 RM6,000 | PERKESO |
| HRD Corp 부담금 — 의무 범주 | 1% | 무급휴가를 제외한 기본급에 고정 수당을 더함 | HRD Corp |
| HRD Corp 부담금 — 선택 범주 | 0.5% | 동일 기준 | HRD Corp |

RM6,000 SOCSO 및 EIS 상한은 RM5,000을 대체하여 **2024년 10월 1일**부터 시행되고
있습니다. 여전히 RM4,000을 표시하는 페이지는 두 차례 개정이 뒤처진 것입니다.

**EPF 백분율은 계산 방식이 아니라 설명입니다.** KWSP는 임금이 RM20,000을 초과하는
경우를 제외하고는 고용주와 근로자 몫을 정확한 백분율로 계산할 수 없다고 밝힙니다 —
그 미만에서는 제3부칙 임금 구간표가 링깃 금액을 제시하며, 합계는 백분율 결과와
다릅니다.

## 월간 기한

| 의무 | 기한 | 당국 | 연체료 |
| --- | --- | --- | --- |
| 임금 지급 기간에 대한 임금 지급 | 임금 지급 기간 종료 후 7일 이내 | JTKSM, EA 1955 제19(1)조 | 범죄 |
| 휴식일·공휴일·초과근무 임금 지급 | 다음 임금 지급 기간의 마지막 날까지 | JTKSM, EA 1955 제19(2)조 | 범죄 |
| EPF 기여금 | 다음 달 15일까지 | KWSP | `verificationNeeded` 참조 |
| SOCSO 기여금 | 다음 달 15일까지 | PERKESO | 연 6%, 일할 |
| EIS 기여금 | 다음 달 15일까지 | PERKESO | 연 6%, 일할 |
| e-PCB, e-Data PCB 또는 e-CP39를 통한 PCB / MTD | 다음 달 15일까지 | LHDN | 법정 벌칙 |
| HRD Corp 부담금 | 다음 달 15일까지 | HRD Corp | 연 10%, 일할, 최소 RM5 |

## 사건 기반 기한

| 의무 | 촉발 요건 | 기한 | 경로 |
| --- | --- | --- | --- |
| CP22 양식 — 신규 근로자 | 고용 개시 | 30일 이내 | MyTax의 e-CP22, 2024년 9월 1일부터 의무 |
| CP22A 양식 — 고용 종료, 민간부문 | 종료 또는 사망 | 종료 최소 30일 전; 사망 통지 후 30일 이내 | MyTax의 e-SPC |
| CP22B 양식 — 고용 종료, 공공부문 | 종료 또는 사망 | 위와 같음 | MyTax의 e-SPC |
| CP21 양식 — 3개월 초과 말레이시아 출국 | 출국 | 예상 출국일 최소 30일 전 | LHDN |
| 지급할 금전 보류 | 종료, 사망 또는 출국 | 90일, 또는 납세 완료 확인서 수령 시까지 | LHDN |
| HRD Corp 등록 | 말레이시아인 근로자 10명 도달 | 기준선을 넘을 때 | HRD Corp 포털 |

## 연간 기한

| 의무 | 기한 | 법률 |
| --- | --- | --- |
| 근로자에게 EA 양식(C.P.8A) / EC 양식(C.P.8C) | 2월 28일 | ITA 1967 제83(1A)조 |
| e-Data Praisi를 통한 CP8D(사전 입력 경로) | 2월 25일 | LHDN 신고 프로그램 |
| CP8D와 함께 LHDN에 E 양식(e-E) | 3월 31일 | ITA 1967 제83조; 불이행 시 제120(1)조 |
| 대리인, 딜러, 유통업자에게 CP58 양식 | 3월 31일 | LHDN |
| 기록 보관 | 7년 | ITA 1967 |

E 양식, P 양식, CPE 양식은 다른 신고 양식에 적용되는 LHDN e-Filing 유예 기간에서
**제외**됩니다.

## 벌칙 참조

| 불이행 | 결과 | 출처 |
| --- | --- | --- |
| E 양식 또는 EA 양식 미제출 | ITA 1967 제120(1)조에 따라 RM200에서 RM20,000의 벌금, 또는 6개월 이하의 징역, 또는 둘 다 | LHDN 위반 표 |
| 최저임금 미만 지급 | Act 732 제43조에 따라 근로자당 RM10,000 이하의 벌금; 제44조에 따른 부족액 법원 명령 | Act 732 |
| Act 732상 계속되는 범죄 | 유죄 판결 후 제46조에 따라 일 최대 RM1,000의 벌금 | Act 732 |
| Act 732상 반복되는 범죄 | 제47조에 따라 RM20,000 이하의 벌금 또는 5년 이하의 징역 | Act 732 |
| 특정 벌칙이 없는 고용법 위반 | EA 1955 제99A조에 따라 RM50,000 이하의 벌금 | Act 265 |
| HRD Corp 부담금 연체 | 연 10% 일할 이자, 최소 RM5; RM20,000 이하의 벌금 또는 2년 징역 | HRD Corp |
| HRD Corp 부담금 24개월간 미청구 | RM10,000 잔여 잔액을 초과하는 부분 몰수 | HRD Corp |

## 흔한 실수

- 제3부칙 구간을 읽는 대신 RM20,000 미만 임금에 대해 EPF를 단순 백분율로 계산하는 것.
- SOCSO와 EIS에 RM4,000 또는 RM5,000 상한을 적용하는 것. 2024년 10월 1일부터
  RM6,000입니다.
- 다섯 개 제도 전체에 하나의 임금 수치를 사용하는 것. HRD 부담금 기준은 초과근무,
  커미션, 보너스를 제외합니다.
- LHDN e-Filing 유예 기간이 E 양식에 적용된다고 가정하는 것. 적용되지 않습니다.
- CP8D 없이 E 양식을 제출하고 신고가 완료된 것으로 취급하는 것.
- 임금 지급 기간 후 7일보다 늦은 고정일에 임금을 지급하는 것.

## 다음 단계

다섯 개 월간 납부를 모두 아우르는 반복 일정 하나를 15일에 설정하고, EA 양식과
e-Data Praisi 업로드를 위한 두 번째 일정을 2월 둘째 주에 설정하십시오. 그런 다음
급여에서 각 제도의 임금 기준을 개별적으로 대조하십시오 — 기한은 공유되지만 임금의
정의는 그렇지 않습니다.
