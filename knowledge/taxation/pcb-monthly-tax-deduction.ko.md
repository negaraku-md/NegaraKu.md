---
topicId: MY-TAX-0057
title: "PCB와 최종세 선택: 신고하지 않는 것이 손해인 이유"
seoTitle: "PCB 월별 세금 공제와 최종세 선택"
slug: "pcb-monthly-tax-deduction"
category: "taxation"
subcategory: ["personal-tax"]
summary: "근로자 자신의 관점에서 월별 세금 공제가 어떻게 계산되는지, 그리고 PCB를 최종세로 두었을 때 s.77C가 실제로 무엇을 하는지를 다룹니다."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "PCB는 연간 소득세의 월별 분할납부로, 고용주가 소득세(보수로부터의 공제) 규칙 1994(Income Tax (Deduction from Remuneration) Rules 1994)에 따라 계산하고 다음 달 15일까지 납부합니다. s.77C에 따라 고용소득만 있는 근로자는 신고하지 않기로 선택할 수 있으며, 이 경우 공제된 PCB가 납부할 세액으로 간주됩니다 — 이는 고용주가 계산에 이미 반영하지 않은 모든 공제를 포기하는 것입니다."
keyTakeaways:
  - "PCB is an instalment, not a separate tax, and it is deducted under s.107(2)"
  - "Computerised Calculation carries a minimum deduction of ten ringgit"
  - "The formula uses three categories: single, married with non-working spouse, married with working spouse"
  - "Section 77C lets an employee skip filing — five conditions must all hold"
  - "Electing final tax means no refund, ever, for that year"
  - "Not filing does not stop the Director General assessing you under s.90(3) or s.91"
appliesTo: "Employees deciding whether to file, and payroll teams explaining PCB to them."

faq:
  - q: "Do I still need to file if my employer deducts PCB?"
    a: "Not necessarily. Section 77C allows an individual with employment income only, deducted by one employer for the whole year, where the employer does not bear the tax and the spouse has made no s.45 election, to elect not to furnish a return. Failing to file is itself deemed to be that election under s.77C(2)(a)."
  - q: "Is PCB the final tax in Malaysia?"
    a: "Only if you let it be. Where the s.77C conditions are met and no return is furnished, the total PCB deducted is deemed to be the tax payable for that year and no assessment is raised. If you file, PCB is simply set off against the assessed tax and any excess is refunded."
  - q: "Can I get a refund if I chose not to file?"
    a: "No. Section 77C(2)(b) deems the PCB deducted to be the amount of tax payable, so there is no overpayment to refund. This is why the election is usually a bad deal for anyone with reliefs the employer did not capture."
  - q: "What is the minimum PCB amount?"
    a: "The minimum monthly deduction under the Computerised Calculation method is ten ringgit, inserted into the Schedule to the Income Tax (Deduction from Remuneration) Rules 1994 by P.U.(A) 123/2021."
  - q: "When must my employer remit PCB?"
    a: "By the 15th day of the calendar month following the month in which the deduction was made. Late remittance exposes the employer, not the employee, and the employee still gets credit for the amount deducted."

verificationNeeded:
  - "The Table 1 values of P, M, R and B in the Schedule to the MTD Rules were last seen in P.U.(A) 123/2021, which still carries the pre-YA2023 band structure. Confirm the current Table 1 against the operative amending instrument before quoting any coefficient — this article deliberately quotes none"
  - "Confirm the PCB deduction rate applied to a non-resident employee is the Schedule 1 Part I para 1A flat rate as a matter of the MTD Rules, not only of the underlying charge"

lang: "ko"
sourceContentHash: "8996f0535326898f"
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
  - title: "Income Tax Act 1967 (Act 53), reprint of 21 May 2024 — s.77C and s.107"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "Attorney General's Chambers"
    date: "2024-05-21"
  - title: "Kaedah-Kaedah Cukai Pendapatan (Potongan daripada Saraan) 1994 (Pindaan) 2021, P.U.(A) 123/2021"
    url: "https://www.hasil.gov.my/wp-content/uploads/Kaedah_Kaedah_Cukai_Pendapatan_Potongan_Daripada_Saraan_1994_Pindaan_2021.pdf"
    publisher: "Attorney General's Chambers"
    date: "2021-03-19"
  - title: "Program Memfail Borang Nyata (BN) Bagi Tahun 2026"
    url: "https://www.hasil.gov.my/wp-content/uploads/program-memfail-bn-bagi-tahun-2026.pdf"
    publisher: "Lembaga Hasil Dalam Negeri Malaysia"
    date: "2025-12-30"

entity: "Monthly Tax Deduction (PCB / MTD)"
relations:
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "explained-in", to: "pcb-mtd-malaysia" }
  - { rel: "affects", to: "personal-tax-reliefs" }
related: ["pcb-mtd-malaysia", "personal-tax-reliefs", "personal-tax-rates", "which-tax-form"]
keywords: ["PCB final tax", "monthly tax deduction Malaysia", "potongan cukai bulanan", "section 77C Income Tax Act", "do I need to file if PCB deducted", "PCB refund Malaysia"]
---

매년 많은 수의 말레이시아 근로자가 조용히 소득세를 과다 납부하기로 선택합니다. 그들은
아무것도 하지 않음으로써 그렇게 합니다 — 소득세법(Income Tax Act 1967) s.77C에
따르면, 아무것도 하지 않는 것이 **곧** 선택이며, 그 선택은 그해에 대해 되돌릴 수 없기
때문입니다.

이 페이지는 급여명세서의 근로자 측면에서 본 PCB에 관한 것입니다. 고용주의 의무 — 등록,
e-PCB, CP38 지시, CP22 및 CP22A 통지 — 는 급여(payroll) 관련 문서에 있습니다.

## PCB란 실제로 무엇인가

Potongan Cukai Bulanan은 별도의 세금이 아닙니다. 이는 귀하의 고용소득에 대해
s.4(b)에 따라 부과되는 동일한 소득세의 분할납부로, 고용주가 s.107(2)와 소득세(보수로부터의
공제) 규칙 1994(Income Tax (Deduction from Remuneration) Rules 1994)에 따라 미리
징수합니다. 고용주는 이를 **다음 달 15일까지** LHDN에 납부합니다.

연말에 귀하는 신고서를 제출하거나 — 이 경우 PCB가 부과된 세액에 충당되고 초과분은
환급됩니다 — 신고하지 않거나 — 이 경우 s.77C가 PCB를 세금 그 자체로 전환합니다.

## 금액은 어떻게 계산되는가

두 가지 방법이 있습니다. 거의 모든 급여 처리는 두 번째 방법으로 운영됩니다.

**월별 세금 공제표(Schedule of Monthly Tax Deductions)**는 조회표로, 2019년 개정 이후
LHDN이 전자 매체로 발행합니다.

**전산 계산(Computerised Calculation)**은 규칙 별표의 제4항 및 제5항에 있는 공식입니다.
이는 귀하의 남은 연간 보수를 추정하고, 규칙이 인정하는 법정 공제를 적용하며, 세율
척도를 적용하고, 그 결과를 그해 남은 개월 수로 나눕니다. 규칙은 이 방법에서 **월 최소
공제 10링깃**을 정합니다.

이 공식은 모든 근로자를 세 범주 중 하나로 분류합니다:

| 범주 | 상황 |
| --- | --- |
| 1 | 미혼 |
| 2 | 기혼, 배우자 무직 |
| 3 | 기혼, 배우자 취업 |

계수표에서 오직 범주 2만 다른 값을 갖는데, 오직 범주 2만 배우자 공제를 포함하기
때문입니다. 범주 1과 범주 3은 같은 열을 공유합니다.

규칙은 또한 **정상 보수(normal remuneration)**를 **추가 보수(additional
remuneration)** — 상여금, 커미션, 소급분, 퇴직급여, 이사 보수 — 와 구분하며, 후자는
자체 계산을 거쳐 12월 상여금이 월 기준을 왜곡하지 않도록 합니다.

계산보다 더 중요한 구조적 요점 하나: 규칙은 고용주가 볼 수 있는 법정 공제를
반영합니다. 생명보험료는 P.U.(A) 123/2021에 의해 공식 변수에서 제외되었습니다. 귀하가
받을 자격이 있는 그 밖의 모든 것 — 라이프스타일 공제, 부모 의료비, 교육비, SSPN, 기부,
급여 외로 납부한 자캇 — 은 귀하가 고용주에게 **TP1 양식**을 제출하고 고용주가 이를
처리하는 경우에만 계산에 들어갑니다. 대부분의 근로자는 결코 그렇게 하지 않습니다.

그 격차가 s.77C의 전부입니다.

## 제77C조: 이 선택이 실제로 뜻하는 것

제77C조 제1항은 해당 과세연도에 대해 다음 다섯 가지가 모두 충족되는 경우 개인이
**신고서를 제출하지 않기로** 선택할 수 있도록 합니다:

1. 개인이 고용에서 발생하는 이득 또는 수익에 관한 소득**만** 있을 것;
2. 그 소득에 관하여 고용주가 s.107(2)에 따라 공제했을 것;
3. 개인이 해당 과세연도에 **같은 고용주**에게 고용되어 있을 것;
4. 그 공제가 **고용주가 부담하는 것이 아닐 것**; 그리고
5. 개인의 배우자가 합산과세를 위한 **s.45에 따른 선택을 하지 않았을 것**.

그다음 s.77C(2)가 타격을 줍니다. 조건이 충족되고 신고서가 제출되지 않은 경우:

- 개인은 **그 선택을 한 것으로 간주됩니다** — 침묵이 곧 동의입니다;
- 공제된 PCB 총액이 **납부할 세액으로 간주됩니다**; 그리고
- 그해에 대해 국세청장은 **부과를 하지 않습니다**.

과다 납부는 없습니다. 법령이 귀하가 납부한 금액을 귀하가 부담해야 할 금액으로
정의하기 때문입니다.

## 이 선택이 대개 나쁜 이유

PCB 공식은 급여 처리가 아는 것만 압니다. TP1을 제출하지 않았다면, 계산은 다음을
무시했습니다:

- 라이프스타일 지출, 도서, 스포츠 용품, 인터넷 구독료;
- 부모의 의료 및 치과 치료;
- 본인의 교육비;
- SSPN 순예치금;
- 보육 및 유치원 비용;
- s.44(6)에 따른 승인된 기부;
- 급여를 통하지 않고 개인적으로 납부한 자캇;
- 과세소득이 RM35,000 이하에 떨어지는 경우 s.6A(2)에 따른 RM400 세액공제.

이들 각각은 귀하의 부과 세액을 줄였을 것입니다. s.77C 하에서는 이들 중 어느 것도 결코
적용되지 않습니다. e-BE를 제출하는 데는 한 시간이 채 걸리지 않으며, 그 환급은
일반적으로 평범한 근로자가 한 해에 LHDN으로부터 회수하는 가장 큰 단일 금액입니다.

이 선택은 정확히 한 가지 상황에서 정당화됩니다. 미혼 근로자, 1년 내내 한 고용주, 자동
공제 외의 공제 없음, 이미 제출된 TP1으로 계산된 PCB, 그리고 예상 환급이 0에 가까운
경우입니다. 그런 경우에도 신고에는 아무 비용이 들지 않습니다.

## 이 선택이 보호해 주지 않는 것

제77C조 제3항은 어느 과세연도에 대해서든 s.90(3) 또는 s.91에 따라 부과를 할 국세청장의
권한을 유지합니다. 국세청장이 그렇게 하는 경우, s.77C(2)(b)에 따라 납부할 세액으로
간주된 금액은 전적으로 **무시됩니다**.

따라서 이 선택은 한 방향 문입니다. 환급 청구는 막지만, LHDN이 추가로 돌아오는 것은
막지 않습니다. 부수입 — 임대, 프리랜서 일, 파트너십 지분 — 이 있는 사람은 조건 1을
아예 충족하지 못하며, 공제된 PCB가 얼마든 관계없이 신고해야 합니다.

## 한 해에 두 고용주

조건 3은 해당 과세연도에 **같은 고용주**에 의한 고용을 요구합니다. 4월에 이직하면 이를
충족하지 못하며, 신고해야 합니다. 이것은 또한 PCB가 가장 흔히 과소 공제되는
경우입니다. 각 고용주의 계산이 그해 자기 몫의 부분으로부터 연간 수치를 추정하는데, 두
추정치 모두 합산된 실제보다 낮게 자리하기 때문입니다. 잔여 납부액을 예상하고, 신고 기한
전에 이를 예산에 반영하십시오.

## 흔한 실수

- **PCB가 자동으로 최종이라고 믿는 것.** PCB는 다섯 가지 s.77C 조건이 모두 충족되고
  아무것도 신고하지 않는 경우에만 최종입니다. 이를 가정하는 대부분의 사람은 부수입이
  있으며 단지 지연되고 있을 뿐입니다.
- **LHDN이 환급을 보내주기를 기다리는 것.** 신고 없으면 부과도, 환급도 없습니다.
  시스템은 귀하를 대신해 알아채지 않습니다.
- **12월에 TP1을 제출하는 것.** 이 양식은 앞으로의 개월을 조정합니다. 마지막 분기에
  제출하면 그해 과다 공제의 일부만 바로잡을 수 있으며, 규칙은 관계없이 RM10 하한을
  부과합니다.
- **귀하의 세금을 내주는 고용주가 도움이 된다고 가정하는 것.** 고용주가 부담하는
  세금은 그 자체로 부가급여(perquisite)이며, 조건 4가 귀하를 s.77C에서 완전히
  배제합니다 — 신고해야 합니다.
- **연중 퇴사를 중립적으로 취급하는 것.** 두 고용주는 두 추정치, 그리고 대개 과소
  공제를 의미하며, s.77C 선택을 잃는 것에 더해집니다.

## 다음 단계

선택 대신 신고하는 경우, 어떤 양식이 귀하에게 적용되는지와 그에 딸린 유예기간을
확인하고, 제출 전에 공제 체크리스트를 검토하십시오.
