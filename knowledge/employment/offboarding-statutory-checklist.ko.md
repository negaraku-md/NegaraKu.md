---
topicId: MY-EMP-0012
title: "오프보딩 법정 체크리스트"
seoTitle: "말레이시아 오프보딩 체크리스트 — 법정 의무"
slug: "offboarding-statutory-checklist"
category: "employment"
subcategory: ["termination-retrenchment"]
summary: "직원이 퇴사할 때 촉발되는 모든 법정 신고, 마감일, 유보 의무를 — LHDN, EPF, PERKESO, 이민국, JTKSM — 한곳에 모았습니다."

tier: "4"
mode: "practical"
contentType: "checklist"
sensitivity: "none"

answer: "직원이 퇴사할 때 고용주는 고용 종료 최소 30일 전에 서식 CP22A로, 또는 말레이시아 출국 최소 30일 전에 서식 CP21로 국세청(LHDN)에 통지해야 하며, 직원에게 지급할 금액을 90일간 또는 조세 완납 증명서(tax clearance letter)가 발급될 때까지 유보해야 합니다. 최종 임금은 고용법 1955 제20조에 따라 고용 마지막 날에 지급 기일이 도래하며, 고용 종료 급부는 7일 이내에 도래합니다."
keyTakeaways:
  - "CP22A is due at least 30 days before cessation — a notification, not a post-exit formality."
  - "CP21 applies where the employee is leaving Malaysia for more than three months with no intention to return, also 30 days before."
  - "Money payable to the employee must be withheld for 90 days or until the tax clearance letter issues."
  - "Final wages are due on the last day of employment, not the next payroll cycle — s.20 Employment Act 1955."
  - "Statutory termination benefits fall due within seven days of the relevant date, with a written calculation."
  - "The employee register must be preserved so entries remain inspectable for at least six years — s.61(2)."
  - "Non-compliance with the LHDN notification duties carries a fine of RM200 to RM20,000 or up to six months' imprisonment."
appliesTo: "HR, payroll and finance staff processing any employee exit in Peninsular Malaysia, including expatriates and foreign workers."

faq:
  - q: "When must Form CP22A be submitted?"
    a: "Not less than 30 days before the cessation of employment. Where the cessation is by reason of death, the notification is due not more than 30 days after the employer is informed of the death. Since 1 September 2024 submission is through the e-SPC application on the MyTax portal for cases requiring a tax clearance letter."
  - q: "How long must an employer withhold an employee's final pay?"
    a: "LHDN requires the employer to withhold any money payable to the employee for 90 days, or until a tax clearance letter is received, whichever comes first. This applies on cessation of employment, on death, and where the employee is leaving Malaysia without an intention to return. It sits alongside, and in practice overrides the timing of, the Employment Act deadlines for final wages."
  - q: "Does the 90-day withholding apply to every departing employee?"
    a: "No. It is tied to the tax clearance requirement, which turns on the employee's tax position and residence status rather than applying automatically to every leaver. Check whether the case requires a tax clearance letter before withholding pay, because withholding wages that are not subject to the duty is itself a breach of the Employment Act."
  - q: "What happens to an Employment Pass when the expatriate resigns?"
    a: "The pass is tied to the sponsoring employer, so it must be cancelled or shortened rather than left to run. The process is handled through the Expatriate Services Division portal or the relevant sector regulator. The specific deadline was not verifiable from published ESD material and should be confirmed with ESD or Immigration directly."

verificationNeeded:
  - "The Income Tax Act 1967 section numbers underlying CP22A, CP21 and the 90-day withholding duty were not confirmed — LHDN's employer page states the duties without citing sections, and phl.hasil.gov.my refused connections. Do not cite s.83(3) or s.83(4) without checking the Act text."
  - "Whether an employer who releases money before tax clearance becomes personally liable for the employee's outstanding tax. This is widely asserted online and is plausible given the withholding duty, but no official statement of a liability transfer was located. The confirmed consequence is the s.120(1) penalty of RM200 to RM20,000 or up to six months' imprisonment."
  - "Whether EPF requires any per-employee cessation filing. KWSP's published duties address cessation as an employer, not individual leavers; the practical position appears to be that contributions simply stop. Confirm with KWSP."
  - "The PERKESO channel for recording an individual resignation is the ASSIST portal, but no statutory deadline for it was located. The 30-day period found relates to cessation as an employer using Form 1A (Act 4) and Form SIP 3 (Act 800)."
  - "Employment Pass and PLKS cancellation deadlines — not verifiable from esd.imi.gov.my, which serves a login shell to automated retrieval."

obligations:
  - what: "Notify LHDN of cessation of employment on Form CP22A"
    trigger: "change"
    withinDays: 30
    due: "not less than 30 days before the cessation of employment, or not more than 30 days after being informed of the employee's death"
    authority: "LHDN"
    statute: "Income Tax Act 1967"
    consequence: "Fine of RM200 to RM20,000 or imprisonment up to 6 months under s.120(1)"
  - what: "Notify LHDN that an employee is leaving Malaysia on Form CP21"
    trigger: "change"
    withinDays: 30
    due: "not less than 30 days before the expected date of departure, where the employee leaves for more than 3 months with no intention to return"
    authority: "LHDN"
    statute: "Income Tax Act 1967"
    consequence: "Fine of RM200 to RM20,000 or imprisonment up to 6 months under s.120(1)"
  - what: "Withhold money payable to the departing employee pending tax clearance"
    trigger: "change"
    withinDays: 90
    due: "for 90 days or until the tax clearance letter is received, whichever is earlier"
    authority: "LHDN"
    statute: "Income Tax Act 1967"
    consequence: "Fine of RM200 to RM20,000 or imprisonment up to 6 months under s.120(1)"
  - what: "Pay final wages on a normal termination"
    trigger: "change"
    due: "not later than the day the contract of service terminates"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.20"
    consequence: "General penalty up to RM50,000 under s.99A"
  - what: "Pay final wages where the employee terminated without notice"
    trigger: "change"
    withinDays: 3
    due: "not later than the third day after the contract of service is terminated"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.21(2)"
    consequence: "General penalty up to RM50,000 under s.99A"
  - what: "Pay statutory termination or lay-off benefits with a written calculation statement"
    trigger: "change"
    withinDays: 7
    due: "not later than seven days after the relevant date"
    authority: "JTKSM"
    statute: "Employment (Termination and Lay-Off Benefits) Regulations 1980, reg 11(1) and reg 12(1)"
    consequence: "Offence under reg 11(2) and reg 12(2)"
  - what: "Inform the Director General of the termination of a foreign domestic employee"
    trigger: "change"
    withinDays: 30
    due: "within 30 days of the termination of service"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.57B(1)"
    consequence: "Fine up to RM50,000 under s.57B(3)"
  - what: "Submit Form PK Part V where the exit is part of a retrenchment or VSS"
    trigger: "change"
    withinDays: 14
    due: "within 14 days after the retrenchment is carried out"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.63; P.U.(B) 430/2004"
    consequence: "Fine up to RM50,000 per offence under s.99A"
  - what: "Submit Form PK Part VI where the exit is part of a retrenchment or VSS"
    trigger: "change"
    withinDays: 30
    due: "within 30 days after the retrenchment is carried out"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.63; P.U.(B) 430/2004"
    consequence: "Fine up to RM50,000 per offence under s.99A"
  - what: "Preserve the employee register entries for inspection"
    trigger: "ongoing"
    due: "so that every particular recorded remains available for inspection for not less than six years after recording"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.61(2)"
    consequence: "General penalty up to RM50,000 under s.99A"

lang: "ko"
sourceContentHash: "beb77b4436b7c05c"
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

updated: 2026-07-20
sources:
  - title: "Employer's responsibilities"
    url: "https://www.hasil.gov.my/en/majikan/tanggungjawab-majikan/"
    publisher: "LHDN"
    date: "2026-01-01"
  - title: "Employment Act 1955 (Act 265)"
    url: "https://jtksm.mohr.gov.my/sites/default/files/2023-11/Akta%20Kerja%201955%20(Akta%20265)_0.pdf"
    publisher: "JTKSM"
    date: "2022-01-01"
  - title: "Employment (Termination and Lay-Off Benefits) Regulations 1980"
    url: "https://jtksm.mohr.gov.my/sites/default/files/2023-03/8.%20EMPLOYMENT%20(TERMINATION%20&%20LAY%20OFF%20BENEFITS)%20REGULATIONS%201980_0.pdf"
    publisher: "JTKSM"
    date: "1980-10-01"
  - title: "Borang PK — Pemberitahuan Pemberhentian Pekerja 2004"
    url: "https://jtksm.mohr.gov.my/sites/default/files/2023-06/borang_pk_0.pdf"
    publisher: "JTKSM"
    date: "2023-06-01"
  - title: "Compliance and enforcement — employer responsibilities"
    url: "https://www.kwsp.gov.my/en/employer/responsibilities/compliance"
    publisher: "KWSP"
    date: "2026-01-01"

entity: "Employee offboarding"
relations:
  - { rel: "part-of", to: "termination-of-employment-malaysia" }
  - { rel: "administered-by", to: "jtksm" }
  - { rel: "requires", to: "termination-benefits-malaysia" }
  - { rel: "related-to", to: "payroll-compliance-malaysia" }
related: ["termination-of-employment-malaysia", "termination-benefits-malaysia", "retrenchment-malaysia", "payroll-compliance-malaysia", "form-e-ea-cp8d-malaysia"]
keywords: ["offboarding checklist malaysia", "CP22A deadline", "CP21 form malaysia", "tax clearance letter SPC", "final pay malaysia", "employee exit checklist malaysia", "90 day withholding tax clearance"]
---

퇴직 면담은 모두가 기억하는 부분입니다. 신고는 벌금을 발생시키는 부분이며 — 그중 하나인
조세 완납 유보 의무는, 최종 급여를 제때 선의로 지급한 급여 담당자가 결국 LHDN에 그것을
해명하게 되는 이유입니다.

이 함정은 두 기관 간의 진정한 충돌입니다. 고용법 1955는 직원에게 마지막 날에 지급하라고
말합니다. LHDN은 90일간 또는 조세 완납이 발급될 때까지 그 돈을 보유하라고 말합니다. 어느
방향으로든 이를 잘못하면 위반이며, 어느 규칙이 지배하는지는 그 사건이 실제로 조세 완납
증명서를 필요로 하는지에 달려 있습니다.

## 마감일, 순서대로

| 의무 | 마감일 | 당국 |
| --- | --- | --- |
| 서식 CP22A — 고용 종료 | 종료 **30일 이상 전**(또는 사망 통지 후 30일 이내) | LHDN |
| 서식 CP21 — 직원이 3개월 초과, 복귀 의사 없이 말레이시아 출국 | 출국 **30일 이상 전** | LHDN |
| 조세 완납 대기 중 지급할 금액 유보 | **90일** 또는 완납 증명서 발급 시까지 | LHDN |
| 최종 임금, 통상 종료 | **종료 당일**(s.20) | JTKSM |
| 최종 임금, 직원이 예고 없이 퇴사 | **그 후 3일째**(s.21(2)) | JTKSM |
| 고용 종료 급부 + 서면 계산서 | 관련일 후 **7일** | JTKSM |
| 서식 PK Part V(정리해고 또는 VSS만 해당) | 실행 후 **14일** | JTKSM |
| 서식 PK Part VI(정리해고 또는 VSS만 해당) | 실행 후 **30일** | JTKSM |
| 외국인 가사 근로자 — 노동총국장(DG)에 통지 | 종료 후 **30일**(s.57B) | JTKSM |
| 직원 명부 보존 | **6년**간 열람 가능(s.61(2)) | JTKSM |

두 개의 LHDN 통지 의무는 퇴직 **이후**가 아니라 **이전**에 진행된다는 점에 유의하십시오.
4주 예고로 사직하는 직원은 30일 CP22A 기간에 겨우 맞고, 즉시 사직하는 직원은 전혀 맞지
않습니다 — 종료가 알려지는 즉시 제출하십시오.

## 유보 의무의 실무

고용주에 대한 LHDN의 지시는 고용 종료, 사망, 또는 복귀 의사 없는 말레이시아 출국의
경우 직원에게 지급할 금액을 **90일 또는 조세 완납 증명서 수령 시까지** 유보하라는 것입니다.
완납이 필요한 사건의 제출은 2024년 9월 1일 이후 창구가 된 MyTax 포털의 **e-SPC** 신청을
통해 진행됩니다.

두 가지 주의사항이 있으며, 그것들은 반대 방향을 가리킵니다.

**완납이 필요한 사건에서 조기 지급하지 마십시오.** 유보의 요점은 조세 관계가 정리될 때
그 자금이 여전히 그 자리에 있도록 하는 것입니다. 통지 및 유보 의무의 미준수는 소득세법
1967(Income Tax Act 1967) 제120(1)조에 따라 **RM200에서 RM20,000의 벌금, 또는 6개월
이하의 징역**에 처합니다.

**완납이 필요 없는 사건에서 유보하지 마십시오.** 이 의무는 모든 퇴직자가 아니라 조세 완납
사건에 부과됩니다. 완납이 필요 없는 현지 직원의 최종 급여를 90일간 유보하는 것은 고용법
1955 제20조와 제21조에 대한 명백한 위반이며, 제15(1)조는 제3편(Part III)에 따른 임금을
지급하지 않는 고용주를 계약을 위반한 것으로 간주합니다.

먼저 직원이 어느 범주에 속하는지 확정하십시오. 그 하나의 결정이 최종 급여의 전체 일정을
지배합니다.

## 법정 제도

**EPF.** 기여금은 마지막 임금 월과 함께 종료됩니다. KWSP가 공표한 종료 의무는 개별
퇴직자가 아니라 *고용주로서* 중단하는 것을 다룹니다. 직원별 종료 신고는 확인되지 않았습니다.

**PERKESO.** 직원의 사직일은 ASSIST 포털을 통해 기록됩니다. PERKESO 자료에서 발견된 30일
제출 기간은 개별 퇴직이 아니라 Act 4에 따른 서식 1A와 Act 800에 따른 서식 SIP 3을 사용하여
고용주로서 중단하는 것과 관련됩니다.

**HRD Corp.** 부담금은 임금 총액을 따르므로 최종 급여와 함께 사라집니다. 퇴직으로 인원수가
의무 기준 아래로 내려가면 등록 범주가 바뀔 수 있으며 — 이는 퇴직 자체와는 별개의 문제입니다.

**이민국.** 취업 비자(Employment Pass)나 PLKS는 후원 고용주에 연결되어 있으며 조용히 자동
소멸되지 않습니다. 취소 또는 단축은 외국인력서비스국(Expatriate Services Division) 포털,
또는 비자가 ESD 외부에서 후원된 경우 해당 부문 규제기관을 통해 진행됩니다. 고용 종료 후
비자를 활성 상태로 두는 것은 퇴직하는 직원이 아니라 고용주에게 살아 있는 규정 준수
위험입니다.

## 흔한 실수

**직원이 떠난 후 CP22A를 제출하는 것.** 마감일은 종료 30일 *전*입니다.

**다음 급여 실행을 기다리는 것.** 제20조와 제21(1)조 모두 종료 당일이라고 말합니다. 오직
*직원*이 예고 없이 떠난 경우에만 제21(2)조가 3일을 부여합니다.

**기본적으로 모든 것을 유보하는 것.** 90일 유보는 보편적 규칙이 아니며, 이를 단순한 현지
사직에 적용하는 것은 고용법을 위반합니다.

**고용 종료 급부를 예고 수당에서 상계하는 것.** TBLB 규정 1980 제6(4)조는 그것들을
누적적으로 만듭니다.

**서면 계산서를 건너뛰는 것.** 제12(1)조는 지급과 동시에 그것을 요구하며, 이를 빠뜨리는
것은 별개의 범죄입니다.

**서식 PK Part V와 VI를 잊는 것.** 퇴직이 정리해고나 VSS의 일부인 경우, 실행 *이후*에 두
개의 신고가 도래합니다.

**퇴직 시 인사 파일을 파기하는 것.** 제61(2)조는 기재 사항이 6년 이상 열람 가능하도록
요구합니다.

**취업 비자를 활성 상태로 두는 것.** 고용주가 그것을 후원하며, 고용주가 그 노출을 부담합니다.

## 다음 단계

이 순서를 퇴직 체크리스트가 아니라 사직 워크플로에 넣으십시오. 종료일이 알려지는 순간
조세 완납 문제를 결정하고, CP22A 또는 CP21을 제출하며, 그 답으로부터 최종 급여일을
설정하십시오. 퇴직에 이른 경위와 지급해야 할 것에 대해서는 `termination-of-employment-malaysia`와
`termination-benefits-malaysia`를, 집단 실행에 대해서는 `retrenchment-malaysia`를 보십시오.
