---
topicId: MY-TAX-0031
title: "서비스 그룹별 SST 등록 기준"
slug: "sst-registration"
category: "taxation"
subcategory: ["sst"]
summary: "서비스세 등록 기준은 하나의 숫자가 아닙니다. 그룹에 따라 0에서 RM1,500,000까지 이르며, 면제 수익도 여전히 기준에 산입됩니다."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "단일한 SST 등록 기준은 없습니다. 서비스세 기준은 그룹별로 정해집니다 — 교육과 신용카드는 0, 대부분의 그룹은 RM500,000, 임대·리스와 대부분의 금융은 RM1,000,000, 식음료·민간 의료·건설은 RM1,500,000입니다. 판매세는 별개로, 제조된 과세 물품 RM500,000입니다. 각 그룹은 자체 이동 12개월 기준으로 판정됩니다."
keyTakeaways:
  - "Thresholds are set per group in column (3) of the First Schedule, not by one national figure"
  - "Group M education and Group H item 1 credit cards have a nil threshold — one taxable supply triggers liability"
  - "Section 12(2) has two tests: the twelve months ending this month, and the twelve months beginning this month"
  - "Revenue that is exempted from payment under s.34 is still the value of a taxable service and still counts toward the threshold"
  - "Apply by the last day of the month following the month liability arose, or Customs may backdate your registration"
  - "Sales tax registration is a separate RM500,000 test on manufacturing, not on total turnover"
appliesTo: "Any business approaching a service tax threshold, and manufacturers testing sales tax liability."

faq:
  - q: "What is the SST registration threshold in Malaysia?"
    a: "There is no single figure. Service tax thresholds are set group by group in column (3) of the First Schedule to the Service Tax Regulations 2018, ranging from nil to RM1,500,000. Sales tax has its own RM500,000 threshold under the Sales Tax (Total Sale Value of Taxable Goods) Order 2018, tested on the sale value of goods you manufacture."
  - q: "Does exempt revenue count toward the SST threshold?"
    a: "Yes, and this is the most expensive misunderstanding in the regime. Reliefs such as the B2B exemption, the non-reviewable contract exemption and the exemption for Malaysian citizens in private healthcare are granted under s.34 of the Service Tax Act 2018 as exemptions from the payment of tax. The supply remains a taxable service, and s.12(2) tests the total value of all taxable services."
  - q: "When must I apply for service tax registration?"
    a: "Not later than the last day of the month following the month in which you became liable, under s.13(1) of the Service Tax Act 2018. Customs registers you with effect from the first day of the month following your application. If you fail to apply, s.13(4) lets the Director General register you from any date he determines, so long as it is not earlier than the date liability arose."
  - q: "Can I split my business to stay under the threshold?"
    a: "No. Section 15 lets the Director General direct that persons be treated as a single taxable person where he is satisfied the separation of business activities is artificial, having regard to how closely the businesses are bound by financial, economic and organisational links. The direction can require registration from a date he specifies."
  - q: "Do I test each service group separately?"
    a: "Yes. Each group carries its own threshold in column (3), so a business with revenue in two groups tests each against its own figure. Group G professionals is the exception that aggregates internally — a Group G person is liable once the combined value of any one or more Group G services exceeds RM500,000."

verificationNeeded:
  - "Confirm the current threshold for Group I items other than 14 to 16 against a consolidated reprint of the First Schedule — figures here were read from P.U.(A) 214/2018 as originally gazetted plus the amendments cited, not from a consolidated text"

obligations:
  - what: "Apply for service tax registration"
    trigger: "ongoing"
    due: "not later than the last day of the month following the month in which liability to be registered arises"
    authority: "RMCD"
    statute: "Service Tax Act 2018, s.13(1)"
    consequence: "Offence under s.13(5); Director General may register and backdate under s.13(4)"
  - what: "Apply for sales tax registration as a manufacturer"
    trigger: "ongoing"
    due: "not later than the last day of the month following the month in which liability to be registered arises"
    authority: "RMCD"
    statute: "Sales Tax Act 2018, s.13"
    consequence: "Backdated registration and liability for tax that should have been charged"
  - what: "Register for service tax once taxable turnover crosses your service group threshold"
    trigger: "threshold"
    criteria:
      - metric: "turnover"
        op: "gte"
        value: 500000
    due: "Most service groups register at RM500,000 rolling 12-month taxable turnover; thresholds run by group from nil to RM1,500,000"
    authority: "RMCD"
    statute: "Service Tax Act 2018, First Schedule"

lang: "ko"
sourceContentHash: "7320d2549d294308"
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
  - title: "Service Tax Act 2018 (Act 807)"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Service-Tax-Act-2018.pdf"
    publisher: "RMCD"
  - title: "Service Tax Regulations 2018, P.U.(A) 214/2018 — First Schedule"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Service-Tax-Regulations-2018.pdf"
    publisher: "Attorney General's Chambers"
  - title: "Service Tax (Amendment) Regulations 2025, P.U.(A) 172/2025"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/07/Peraturan-Peraturan-CP-Pindaan-2025.pdf"
    publisher: "Attorney General's Chambers"
    date: "2025-06-09"
  - title: "Service Tax (Amendment) Regulations 2025 (Amendment) Regulations 2025, P.U.(A) 201/2025"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/07/5-PUA-201.2025.pdf"
    publisher: "Attorney General's Chambers"
    date: "2025-06-30"
  - title: "Sales Tax (Total Sale Value of Taxable Goods) Order 2018"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Sales-Tax-Total-Sale-Value-Of-Taxable-Goods-Order-2018.pdf"
    publisher: "Attorney General's Chambers"
  - title: "Sales Tax (Exemption from Registration) Order 2018, P.U.(A) 208/2018"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Sales-Tax-Exemption-From-Registration-Order-2018.pdf"
    publisher: "Attorney General's Chambers"

entity: "SST registration threshold"
relations:
  - { rel: "administered-by", to: "rmcd" }
  - { rel: "governs", to: "service-tax-act-2018" }
  - { rel: "part-of", to: "sst-explained" }
  - { rel: "explained-in", to: "sst-rate-table" }
related: ["sst-explained", "sst-expansion-2025", "sst-rate-table", "sales-tax-explained", "sst-02-filing"]
keywords: ["SST registration threshold", "service tax threshold Malaysia", "RM500000 SST", "sales tax registration Malaysia", "MySST registration"]
---

거의 모든 안내는 "SST 등록 기준이 얼마인가?"에 RM500,000이라고 답합니다. 로펌에게는
맞습니다. 민간 병원, 도급업자, 임대인, 학교, 식당에게는 틀리며, 그중 두 경우에는
몇 년이나 늦게 등록하게 만드는 방향으로 틀립니다.

기준은 서비스세 규정 2018(Service Tax Regulations 2018) 별표 1(First Schedule)
**열 (3)**에 그룹별로 있습니다. 전국 단일 수치는 없습니다.

## 각 그룹의 기준은 얼마입니까?

| 그룹 | 서비스 | 기준 |
| --- | --- | --- |
| A | 숙박 | RM500,000 |
| B | 식음료 | RM1,500,000 |
| C | 나이트클럽, 댄스홀, 카바레, 웰니스 센터, 마사지 업소, 펍, 비어하우스 | RM500,000 |
| D | 사설 클럽 | RM500,000 |
| E | 골프 클럽 및 연습장 | RM500,000 |
| F | 베팅 및 게이밍 | RM500,000 |
| G | 전문직 | RM500,000 |
| H 항목 1 | 신용카드 및 charge 카드 | **없음** |
| H 항목 2~4 | 보험 및 타카풀, 수수료 기반 금융 서비스, 라부안 금융 서비스 | RM1,000,000 |
| I 항목 1~13 | 기타 서비스 제공자 — 광고, 중개, 인력, 보안, 택배, 주차, 자동차 정비 등 | RM500,000 |
| I 항목 14~16 | 민간 의료, 전통·보완 의학, 관련 보건 | RM1,500,000 |
| J | 물류 서비스 | RM500,000 |
| K | 임대 또는 리스 | RM1,000,000 |
| L | 건설 공사 | RM1,500,000 |
| M | 교육 | **없음** |

이 중 두 가지는 다시 살펴볼 가치가 있습니다.

**0은 오타가 아닙니다.** 그룹 M 교육과 그룹 H 항목 1 신용카드는 기준이 전혀
없습니다. 학년당 학생당 RM60,000을 초과하여 부과하는 사립학교, 또는 신용카드 한
장을 활성화하는 은행은 첫 공급부터 납세의무가 발생합니다. 그룹 M의 RM60,000이라는
수치는 *과세 서비스를 정의하는 요금 기준*이며, 등록 기준이 아닙니다. 이를 등록
기준으로 읽는 것이 교육 부문 안내의 전형적 오류입니다.

**RM1,000,000이 RM500,000을 뒤늦게 대체했습니다.** 그룹 K와 그룹 H 항목 2~4는
2025년 6월 9일에 RM500,000으로 관보에 게재되었다가 시행 하루 전인 2025년 6월 30일에
P.U.(A) 201/2025에 의해 RM1,000,000으로 개정되었습니다. 그 3주 기간에 발표된 안내는
대체된 수치를 인용합니다.

## 12개월 기간은 어떻게 측정됩니까?

서비스세법(Service Tax Act 2018) 제12조 제2항은 두 가지 판정 기준을 제시하며,
**먼저 도래하는 쪽**에서 납세의무가 발생합니다:

- **과거 기준(historical test).** 어느 달의 말에, 그 달과 **직전 11개월** 동안의
  모든 과세 서비스 총 가치가 규정된 기준을 초과한 경우.
- **장래 기준(prospective test).** 어느 달의 말에, 그 달과 **직후 11개월** 동안의
  총액이 기준을 초과할 것이라고 믿을 합리적 근거가 있는 경우.

이는 회계연도 기준이 아니라 이동(rolling) 기준입니다. 매월 말에 다시 실행됩니다.
매출을 연 단위로 검토하는 사업체는 평균 6개월 늦게 자신의 납세의무를 발견하게
됩니다.

장래 기준은 사람들이 존재를 잊는 것입니다. 월 RM40,000의 3년 임대 계약을 체결하면
12개월 내에 RM1,000,000을 초과할 것이라고 믿을 합리적 근거가 생깁니다 — 실제로 돈을
은행에 넣은 후가 아니라 즉시 납세의무가 발생합니다.

## 함정: 면제 수익도 여전히 산입된다

이는 이 제도에서 가장 값비싼 단일 오해이며, 감면이 어떻게 규정되었는지에서
비롯됩니다.

2025년 확대의 모든 감면 — B2B 면제, 재검토 불가 계약 감면, MSME 임차인 면제, 임대에
대한 그룹 감면, 민간 의료에서 말레이시아 국민에 대한 면제 — 은 **서비스세법(Service
Tax Act 2018) 제34조**에 따라 부여되며, 모든 서비스세 정책은 첫 줄에서 이를
명시합니다. 즉 장관이 *서비스세 납부를 면제한다*고 합니다.

납부로부터의 면제는 그 서비스를 별표 1에서 제거하지 않습니다. 그 공급은 여전히 과세
서비스입니다. 그리고 s.12(2)는 **그의 모든 과세 서비스의 총 가치**를 측정하며, 실제로
세금이 납부된 가치를 측정하지 않습니다.

따라서:

- 외국인 환자 수익 RM900,000과 말레이시아 환자 수익 RM4,000,000을 둔 민간 병원은
  그중 거의 아무것에도 세금을 부과하지 않더라도 RM1,500,000 기준을 초과합니다.
- 임차인이 모두 MyPMK 등록 MSME인 임대인도 그 임대료를 RM1,000,000 기준에 산입해야
  합니다.
- 전적으로 2025년 7월 이전의 재검토 불가 계약에 따라 일하는 도급업자도 그 작업을
  RM1,500,000 기준에 산입합니다.

실질적 결과는, 이러한 위치의 사업체는 등록하고, SST-02 신고서를 제출하며, 면제
공급을 신고해야 한다는 것입니다 — 세금은 거의 또는 전혀 납부하지 않으면서 말입니다.
등록과 납부는 서로 다른 의무이며, 두 번째만 면제됩니다.

## 그룹 G는 합산되지만 다른 그룹은 아니다

그룹 G에는 다른 그룹에 없는 주석이 있습니다. 그룹 G 과세자는 **하나 이상**의 그룹 G
서비스에 걸쳐 과세 서비스의 총 가치가 **합산이든 개별이든** RM500,000을 초과하면
등록 의무가 발생합니다.

따라서 법률 서비스 RM300,000과 컨설팅 RM250,000을 제공하는 회사는 어느 서비스도
단독으로는 RM500,000에 이르지 않더라도 RM550,000에서 기준을 넘습니다.

그 합산은 그룹을 넘어서 확장되지 않습니다. 그룹 G 전문직 수수료 RM400,000과 그룹 K
임대료 RM800,000을 둔 사업체는 RM400,000을 RM500,000과, RM800,000을 RM1,000,000과
대조하며, 어느 쪽으로도 등록하지 않습니다. 다만 어느 그룹으로든 일단 등록하면,
제공하는 모든 과세 서비스에 세금을 부과합니다.

## 사업을 쪼갤 수 없다

제15조는 사업 활동의 분리가 인위적이라고 인정되는 경우 둘 이상의 자를 **단일
과세자**로 취급하도록 지시할 권한을 관세청장에게 부여합니다. 제2항은 그 판단 기준이
해당 자들이 *재무적, 경제적, 조직적 연결에 의해 서로 얼마나 긴밀히 결속되어
있는가*라고 규정합니다.

이 지시는 단일 과세자가 사업을 영위하는 것으로 취급되는 날짜와 등록해야 하는 날짜를
정할 수 있습니다. RM1,500,000 미만에 머물기 위해 식당 그룹을 점포별 회사로 쪼개는
것이 교과서적 사례입니다.

## 등록, 그리고 늦었을 때 벌어지는 일

s.13(1)에 따라 납세의무가 발생한 달의 **다음 달 말일까지** 신청해야 합니다. 신청은
MySST 포털을 통해 이루어집니다.

그다음 제13조 제3항은 신청한 달의 **다음 달 첫날**부터 — 또는 합의된 더 이른 날짜,
다만 납세의무가 발생한 날보다 이르지 않은 날짜부터 — 등록되도록 합니다.

기한을 놓치면 s.13(4)가 적용됩니다. 관세청장은 납세의무가 발생한 날보다 이르지 않은
한, 자신이 정하는 날짜로 등록합니다. 실무상 이는 소급을 의미합니다. 그러면 고객에게
부과했든 안 했든 그 날짜 이후의 공급에 대한 세금을 부담하게 되며, s.13(5)는 그
불이행 자체를 위반으로 규정합니다.

제14조는 기준 미만인 자에 대해 **자발적 등록**을 허용합니다. 기업 고객에 대한 신뢰도
측면에서 가끔 가치가 있지만, 이 제도에는 매입세액 공제가 없으므로 자발적 등록은
아무것도 회수하지 못하면서 비용과 준수 부담만 더합니다.

## 판매세 등록은 다른 판정이다

판매세 등록은 귀하의 서비스세 지위와 아무 관련이 없습니다.

기준은 **RM500,000**으로, 판매세(과세 물품 총 판매가치) 명령 2018(Sales Tax (Total
Sale Value of Taxable Goods) Order 2018)이 정하며 2025년에 변경되지 않았습니다. 이는
**말레이시아의 과세 물품 제조업자**에게 적용되며, 총 매출이 아니라 귀하가 제조하는
물품의 판매가치로 판정됩니다. 하도급 제조업자는 수행한 작업의 가치로 판정합니다.
수입업자는 등록하지 않습니다. 수입 판매세는 통관 시 징수됩니다.

판매세법(Sales Tax Act 2018) 제12조 제2항은 동일한 과거 및 장래 12개월 구조를
사용합니다.

일부 제조업자는 판매세(등록 면제) 명령 2018(Sales Tax (Exemption from Registration)
Order 2018)에 따라 매출과 관계없이 등록이 면제됩니다 — 레미콘, 식사 준비, 복사,
조각, 사진 현상, 물품의 건물 편입 등을 포함합니다.

## 흔한 실수

- **RM500,000을 답으로 인용하는 것.** 대략 절반의 그룹에는 맞지만, 가장 큰 신규 세
  그룹을 포함한 나머지에는 틀립니다.
- **RM60,000을 교육 기준으로 읽는 것.** 그룹 M은 기준이 0입니다. 학생당 RM60,000은
  항목 1에서 어느 기관이 과세되는지를 정의합니다.
- **매출을 연 단위로 판정하는 것.** 제12조 제2항은 이동 월별 판정입니다.
- **장래 기준을 무시하는 것.** 큰 계약을 체결하면 돈이 도착하기 전에 납세의무가 생길
  수 있습니다.
- **기준 계산에서 면제 수익을 제외하는 것.** s.34에 따른 면제는 적용 범위가 아니라
  납부를 면제합니다.
- **그룹을 넘어 합산하는 것.** 오직 그룹 G만 내부적으로 합산됩니다.
- **판매세가 서비스세를 따른다고 가정하는 것.** 두 개의 법, 두 개의 기준, 두 개의
  등록입니다.

## 다음 단계

귀하의 매출이 닿는 모든 그룹을 파악한 다음, 면제 수익을 포함하여 각 그룹을 이동
12개월 기준으로 자체 기준과 대조하십시오. 과거의 어느 달에 기준을 넘었다면, 신청
전에 납세의무가 발생한 날짜를 산정하십시오 — 신청일이 아니라 그 날짜가 부담액을
좌우합니다.

일단 등록하면, 실무는 과세기간, SST-02 신고서, 연체 벌칙 제도로 넘어갑니다.
말레이시아 밖의 공급자로부터 서비스를 구매한다면 수입 과세 서비스 규정도 확인하십시오.
이는 등록 여부와 관계없이 적용됩니다.
