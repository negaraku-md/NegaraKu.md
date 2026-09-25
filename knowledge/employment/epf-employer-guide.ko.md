---
topicId: MY-EMP-0005
title: "고용주를 위한 EPF: 제3부칙이 퍼센트가 아니라 표인 이유"
seoTitle: "말레이시아 EPF 고용주 안내: 제3부칙 요율"
slug: "epf-employer-guide"
category: "employment"
subcategory: ["payroll-statutory"]
summary: "EPF를 올바르게 계산하고 납부하는 방법 — 월 임금 RM20,000 미만에서는 퍼센트 계산이 허용되지 않는다는 규칙을 포함합니다."

tier: "2"
mode: "practical"
contentType: "guide"

answer: "고용주는 직원공제기금법 1991(Employees Provident Fund Act 1991)의 제3부칙 요율로 EPF를 기여해야 합니다. 월 임금 RM20,000까지는 그 요율이 구간별 표에서 읽어내는 고정 링깃 금액이며, EPF는 고용주가 그 부담분을 정확한 퍼센트로 계산하는 것을 허용하지 않는다고 명시합니다. RM20,000을 초과할 때에만 퍼센트를 적용합니다. 부칙의 어느 부(Part)가 적용되는지는 근로자의 국적, 거주 지위, 연령에 따라 결정됩니다. 기여금은 다음 달 15일까지 납부합니다."
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

lang: "ko"
sourceContentHash: "45b24be5c0ffefb6"
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

말레이시아의 급여 담당자에게 EPF 고용주 요율이 얼마냐고 물으면 13퍼센트라고 답할 것입니다.
RM3,250의 급여에 대한 기여금을 계산해 보라고 하면 대부분이 곱셈을 합니다. 그 곱셈은 허용되지
않으며, 틀린 숫자를 냅니다.

EPF의 지시는 자체 고용주 페이지에 분명히 명시되어 있습니다. 고용주는 RM20,000을 초과하는 급여를
제외하고 고용주와 근로자의 부담분을 정확한 퍼센트로 계산하는 것이 **허용되지 않습니다**. 그
금액 미만의 모든 것은 표에서 나옵니다.

이것은 고용주가 EPF에 관해 잘못할 수 있는 가장 결정적인 사안이며, 대부분의 게시된 안내에서
묻히거나 생략되어 있습니다 — 그러한 안내는 대개 깔끔한 13/11 요율 상자로 시작하고 부칙은 전혀
언급하지 않습니다.

## 표는 왜 퍼센트와 다른 답을 내는가?

제3부칙이 기여금을 **임금 구간**별로 정하고, 각 구간의 금액이 근로자의 실제 임금이 아니라 구간의
상단에 매겨지기 때문입니다.

구간은 0에서 RM5,000까지 RM20 폭이고, 그 다음 RM5,000에서 RM20,000까지 RM100 폭입니다. 따라서
자기 구간의 상단보다 낮은 곳에 있는 근로자는 자기 급여의 단순 퍼센트보다 약간 더 많은 기여금이
부과됩니다.

EPF는 그 비교를 스스로 공개합니다. 월 RM3,250을 버는 60세 미만 말레이시아 국민의 경우:

| 방법 | 고용주 | 근로자 | 합계 |
| --- | --- | --- | --- |
| 올바름 — 제3부칙 A부(Part A) | RM424 | RM359 | RM783 |
| 틀림 — 퍼센트 계산 | RM423 | RM358 | RM781 |

2링깃. 근로자 1인당. 매월. 사소해 보이지만, 이는 반올림 선호가 아니라 제43(1)조의 위반이며, 모든
근로자와 모든 임금월에 걸쳐 반복되고, 급여가 오를수록 커진다는 점을 알아차리기 전까지의 이야기
입니다. RM6,710.80의 임금에 대해 부칙은 RM816과 RM748 — 합계 RM1,564 — 을 내는데, 퍼센트는
RM1,543.49를 내어 RM20이 넘는 차이가 납니다.

실무상의 결과: 급여 시스템이 부칙 표가 아니라 퍼센트 규칙으로 설정되어 있다면, RM20,000 미만의
사실상 모든 근로자에 대해 부족한 기여금을 산출하고 있는 것입니다.

## 제3부칙의 어느 부(Part)가 적용되는가?

부칙은 국적, 거주 지위, 연령에 따라 여러 부(Part)로 나뉩니다. 부를 잘못 고르면 표를 아무리
신중하게 읽어도 요율이 틀립니다.

| 근로자 | 60세 미만 | 60세 이상 |
| --- | --- | --- |
| 말레이시아 국민 | **A부(Part A)** — 고용주 임금 RM5,000까지 13퍼센트, 초과분 12퍼센트; 근로자 11퍼센트 | **E부(Part E)** — 고용주 4퍼센트; 근로자 없음 |
| 영주권자, 또는 1998년 8월 1일 이전에 기여를 선택한 비국민 | **A부(Part A)** — 위와 같음 | **C부(Part C)** — 고용주 RM5,000까지 6.5퍼센트, 초과분 6퍼센트; 근로자 5.5퍼센트 |
| 1998년 8월 1일부터 등록된 비국민 | **F부(Part F)** — 고용주 2퍼센트, 근로자 2퍼센트 | **F부(Part F)** — 고용주 2퍼센트, 근로자 2퍼센트 |

사람들이 걸려 넘어지는 두 가지 구조적 사항이 있습니다.

**13퍼센트에서 12퍼센트로의 단계는 RM20,000이 아니라 RM5,000에서 일어납니다.** A부에서 고용주
부담분은 월 임금 RM5,000까지는 13퍼센트에 해당하고 그를 초과하면 12퍼센트이며, 근로자 부담분은
전체에 걸쳐 11퍼센트로 유지됩니다. 부칙은 이를 눈에 보이는 불연속으로 표현합니다. RM5,000에서
끝나는 구간의 고용주 금액은 RM650이고, 바로 다음 구간 — RM5,000.01에서 RM5,100 — 은 RM612입니다.
고용주 기여금은 급여가 RM5,000을 넘어서면서 *내려갑니다*.

**RM20,000은 요율이 아니라 방법이 바뀌는 지점입니다.** RM20,000을 초과하면 표를 읽는 것을 멈추고
계산을 시작합니다. 실제 임금에 대해 고용주 12퍼센트, 근로자 11퍼센트입니다. A부는 센트를 포함한
총 기여금을 다음 링깃으로 올림하도록 지시합니다. EPF의 예: RM21,250의 임금은 RM2,550과 RM2,337.50,
합계 RM4,887.50을 내며, RM4,888로 납부됩니다.

같은 올림 규칙이 RM20,000 초과 시 6퍼센트 및 5.5퍼센트의 C부에도, 그리고 고용주 4퍼센트에 근로자
없음인 E부에도 적용됩니다.

### B부와 D부는 더 이상 존재하지 않는다

옛 부칙을 바탕으로 일하고 있다면, **B부와 D부가 법률 A1760/2025에 의해 삭제**되었음에 유의하십시오.
이들은 1998년 8월 1일부터 등록한 비국민을 위한 옛 선택 제도를 담고 있었으며, 그 제도에서 근로자는
퍼센트를 기여하고 고용주는 급여와 관계없이 월 정액 RM5를 납부하였습니다.

그 RM5 수치는 여전히 상당수의 게시된 안내와 갱신되지 않은 급여 시스템에 나타납니다. 그것은
사라졌습니다. 비국민은 이제 2025년 10월 임금월부터 선택이 아닌 의무로, 양측 각 2퍼센트인 F부의
적용을 받습니다. [외국인 근로자를 위한 EPF](/en/employment/epf-foreign-workers-malaysia)를 참조하십시오.

한편, 60세 이상 말레이시아 국민을 다루던 C부(a)는 P.U. (A) 370/2018에 의해 삭제되었고, 그 집단은
E부로 옮겨졌습니다. 60세 이상 말레이시아 국민을 6.5퍼센트로 두는 안내는 8년 지난 부칙을 읽는
것입니다.

## 실제로 어떻게 납부하는가?

임금월에 대한 기여금은 **다음 달 15일까지** 납부해야 합니다. 1월의 임금은 2월 기여월이며, 2월
15일까지 납부합니다.

고용주는 양측 부담분을 모두 EPF에 납부하고 근로자 부담분을 급여에서 공제할 수 있습니다. 기여금은
센트 단위 없이 링깃 단위로 납부해야 합니다.

제출은 i-Akaun (Employer), e-Payroll 기능, 또는 i-Akaun (Employer) 앱을 통해 이루어집니다.

### 연령 경계

EPF 가입자로 등록하고 기여할 수 있는 최저 연령은 **14세**입니다. 기여의 최고 연령은 **75세**입니다.
60세에서 75세 사이에는 기여가 계속되지만 인하된 C부 또는 E부 요율로 이루어지며, 75세를 초과하면
책임이 종료됩니다.

## EPF 자체의 계산 예시

이들은 EPF가 공개한 예시로, 표와 퍼센트가 일치하지 않는다는 것을 가장 명확하게 보여주는 자료
이므로 그대로 옮깁니다.

| 시나리오 | 임금 | 올바름(표) | 퍼센트 |
| --- | --- | --- | --- |
| 말레이시아 국민, 60세 미만, A부 | RM3,250 | RM424 + RM359 = RM783 | RM781 |
| 말레이시아 국민, 60세 미만, A부 | RM6,710.80 | RM816 + RM748 = RM1,564 | RM1,543.49 |
| 말레이시아 국민, 60세 이상, E부 | RM3,250 | RM131 + RM0 = RM131 | RM130 |
| 영주권자, 60세 이상, C부 | RM3,250 | RM212 + RM180 = RM392 | RM390 |
| 말레이시아 국민, 60세 미만, A부 | RM21,250 | 12% + 11%, 올림 = RM4,888 | (여기서는 퍼센트가 정확함) |

이 양상은 모든 부(Part)에 걸쳐 유지됩니다. RM20,000 미만에서는 표가 이기고, 초과하면 퍼센트가
법입니다.

## 흔한 실수

**급여 시스템을 퍼센트 규칙으로 설정하는 것.** 가장 비싸고 가장 흔한 오류입니다. 13퍼센트 규칙은
RM20,000 미만의 거의 모든 급여에서 기여금을 부족하게 냅니다. 신뢰하기 전에 세 개의 표본 임금에
비추어 시스템을 시험하십시오.

**RM5,000 단계를 근로자 부담분에 적용하는 것.** 이는 13퍼센트에서 12퍼센트로 움직이는 고용주
부담분에만 적용됩니다. 근로자 부담분은 그 경계의 양쪽에서 11퍼센트입니다.

**외국인 근로자에게 여전히 정액 RM5 고용주 기여를 사용하는 것.** B부 및 D부와 함께 법률
A1760/2025에 의해 삭제되었습니다. 이제 그 수치는 양측 각 2퍼센트입니다.

**60세 이상 말레이시아 국민을 C부에 두는 것.** 이들은 2018년에 E부로 옮겨졌습니다. E부는 고용주
4퍼센트에 근로자 없음으로 — 실질적으로 다른 숫자입니다.

**내림하거나 센트를 납부하는 것.** 기여금은 링깃 단위로 납부되며, 퍼센트 방법이 적용되는 경우
총액은 다음 링깃으로 **올림**됩니다.

**제3부칙이 안정적이라고 가정하는 것.** EPF가 부칙의 날짜별 보관본을 유지하는 것은 바로, 늦은
기여금을 정산하는 고용주가 현재의 부칙이 아니라 그 임금월에 시행 중이던 부칙을 적용해야 하기
때문입니다. 체납액을 정상화하고 있다면, 올바른 시행 기간의 부칙을 가져오십시오.

## 다음 단계

낮은, 중간, 높은 급여 — RM5,000 미만, RM5,000에서 RM20,000 사이, RM20,000 초과 — 에 대해 급여
산출물을 제3부칙에 비추어 확인하십시오. 그 세 가지 시험이 이 페이지의 모든 작동 방식을 검증합니다.

비국민을 고용하고 있다면, F부가 대부분의 시스템이 아직 구현하지 못했을 만큼 새롭기 때문에
[외국인 근로자를 위한 EPF](/en/employment/epf-foreign-workers-malaysia)를 다음으로 읽으십시오. 같은
15일 기한을 공유하는 다른 네 개의 월간 흐름에 대해서는
[급여 준수 달력](/en/employment/payroll-compliance-malaysia)을 참조하십시오.
