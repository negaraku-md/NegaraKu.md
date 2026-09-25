---
topicId: MY-BIZ-0055
title: "말레이시아에서 결제 수취: 중앙은행 승인이 필요한 시점"
seoTitle: "말레이시아 결제 규제: BNM 승인이 적용되는 시점"
slug: "payment-regulation-malaysia"
category: "business"
subcategory: ["banking-finance"]
summary: "단지 결제를 수취하는 사업과 2013년 금융서비스법(Financial Services Act 2013)에 따른 승인이 필요한 사업 사이의 경계 — 2025년 1월에 시행된 제한 목적 전자화폐 면제를 포함하여 설명합니다."

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "상품을 판매하고 게이트웨이를 통해 카드나 지갑 결제를 받는 것에는 말레이시아 중앙은행(BNM)의 승인이 필요하지 않습니다 — 게이트웨이나 매입사(acquirer)가 인가를 보유하기 때문입니다. 여러분은 결제 시스템을 운영하거나, 신용·차지·직불카드 또는 전자화폐 같은 지정 결제 수단을 발행하거나, 가맹점 매입 서비스를 제공할 때 규제 영역으로 넘어갑니다. 앞의 두 가지는 2013년 금융서비스법(Financial Services Act 2013) 제11조에 따른 승인이 필요하고, 세 번째는 제17조에 따른 등록이 필요합니다."
keyTakeaways:
  - "Schedule 1 Part 1 Division 1 of the FSA 2013 lists the businesses needing approval: operating a payment system and issuing a designated payment instrument"
  - "Carrying on an approved business without approval carries up to 10 years imprisonment or a RM50 million fine under s.8(3)"
  - "Merchant acquiring services sit in Schedule 1 Part 2 as a registered business under s.17, with up to 8 years or RM25 million under s.17(3)"
  - "Designated payment instruments are charge card, credit card, debit card and e-money, prescribed by P.U.(A) 202/2013 as amended by P.U.(A) 82/2016"
  - "An approved standard e-money issuer needs minimum capital funds of RM1 million or 8% of outstanding e-money liabilities, whichever is higher"
  - "P.U.(A) 463/2024, in operation 2 January 2025, exempts four categories of limited purpose e-money from the approval requirement entirely"
  - "The Category 1 closed-loop exemption caps the purse at RM500 per user and both outstanding liabilities and average monthly transaction value at RM1 million per issuer"
appliesTo: "Founders building wallets, stored-value products, loyalty and rewards schemes, marketplaces holding funds, and anyone told they need a payment licence."

verificationNeeded:
  - "Whether a specific marketplace or escrow-style flow amounts to operating a payment system under Schedule 1 turns on the facts; BNM publishes no general perimeter guidance and the position should be confirmed with the Bank"
  - "Remittance and cross-border money transfer sit under the Money Services Business Act 2011, a separate licensing regime not covered here"
  - "BNM's own Gazette Order page for payment systems does not list P.U.(A) 468/2024, which amends the registered business requirements — treat that index as incomplete and check the AGC gazette portal"

lang: "ko"
sourceContentHash: "312edd8d349c774c"
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
  - title: "Financial Services Act 2013 (Act 758)"
    url: "https://www.investmalaysia.gov.my/media/xrnl0vfp/financial-services-act-2013.pdf"
    publisher: "Attorney General's Chambers"
  - title: "Financial Services (Limited Purpose Electronic Money) (Exemption) Order 2024, P.U.(A) 463/2024"
    url: "https://lom.agc.gov.my/ilims/upload/portal/akta/outputp/2596772/PUA%20463.pdf"
    publisher: "Attorney General's Chambers"
    date: "2024-12-30"
  - title: "Financial Services (Minimum Amount of Capital Funds) (Approved Person) (Amendment) Order 2022, P.U.(A) 403/2022"
    url: "https://lom.agc.gov.my/ilims/upload/portal/akta/outputp/1754230/P.U.%20(A)%20403_2022%20(Perintah%20Perkhidmatan%20Kewangan%20(Amaun%20Minimum%20Dana%20Modal).pdf"
    publisher: "Attorney General's Chambers"
    date: "2022-12-29"
  - title: "Financial Services (Designated Payment Instruments) Order 2013, P.U.(A) 202/2013"
    url: "https://lom.agc.gov.my/ilims/upload/portal/akta/outputp/pua_20130629_P.U.%20(A)%20202.pdf"
    publisher: "Attorney General's Chambers"
  - title: "Payment Systems — Gazette Orders"
    url: "https://www.bnm.gov.my/gazette-order"
    publisher: "Bank Negara Malaysia"

entity: "Payment services regulation in Malaysia"
relations:
  - { rel: "administered-by", to: "bank-negara-malaysia" }
  - { rel: "governs", to: "financial-services-act-2013" }
related: ["foreign-exchange-policy-malaysia", "online-business-licence-malaysia"]
keywords: ["payment licence malaysia", "e-money licence malaysia", "BNM approval payment", "merchant acquiring malaysia", "limited purpose e-money", "FSA 2013 schedule 1"]
---

한 창업자가 고객이 충전하고 더 빠르게 결제할 수 있도록 지갑(wallet)을 추가합니다. 누군가 말레이시아
중앙은행(BNM) 라이선스를 언급하고, 그 기능은 회의에서 폐기됩니다. 다른 창업자는 똑같은 것을 출시하고도
아무 문제가 없습니다. 그 차이는 대다수 사람들이 한 번도 읽어 본 적 없는 하나의 관보 명령입니다.

## 기본값: 여러분은 규제 대상이 아니다

상품이나 서비스를 판매하고 게이트웨이를 통해 카드, FPX 또는 지갑을 받는다면, **인가를 보유하는 것은
게이트웨이나 매입 은행이지 여러분이 아닙니다.** 여러분은 가맹점입니다. 규제 경계는 여러분이 단지 결제를
받는 것이 아니라 *타인의 돈*을 보유할 때 시작됩니다.

## 실제로 무엇이 승인을 필요로 하는가

**2013년 금융서비스법(Financial Services Act 2013)** 제8조 제1항 (b)는 **부칙 1 제1부 제1편(Division 1 of
Part 1 of Schedule 1)**에 속하는 모든 사업에 대해 제11조에 따른 BNM 승인을 요구합니다. 결제 부문에서 이는
두 가지입니다. **결제 시스템 운영** — 은행 계좌 간 자금 이체 또는 결제 수단 네트워크 운영을 가능하게 하는
것 — 과 **지정 결제 수단(designated payment instrument) 발행**입니다. **제8조 제3항**의 벌칙은 최대 **10년**,
**RM5,000만**의 벌금, 또는 병과입니다.

**지정 결제 수단**은 P.U.(A) 202/2013(P.U.(A) 82/2016으로 개정)에 의해 규정됩니다. **차지카드, 신용카드,
직불카드 및 전자화폐(electronic money)**입니다. 제2조에 따라 전자화폐는 발행자에게 지급된 자금과 교환하여
자금을 전자적으로 저장하며 누구에게든 지급하는 데 사용될 수 있습니다. 여기서 함정이 생깁니다. **충전식
지갑은 전자화폐입니다.**

**가맹점 매입 서비스(merchant acquiring services)**는 **부칙 1 제2부**에 제17조에 따른 *등록* 사업으로 있으며,
벌칙은 최대 **8년** 또는 **RM2,500만**입니다. P.U.(A) 468/2024는 이제 신청자가 2016년 회사법에 따라 설립된
회사일 것을 요구합니다 — 이는 BNM의 관보 명령 페이지가 누락한 법령입니다.

## 자본 수치

P.U.(A) 204/2013의 부칙 1이 **P.U.(A) 403/2022**로 대체되어 2023년 12월 30일에 시행되었으며, 표준 발행자에
대해 최소 자본금을 **RM1,000,000 또는 미상환 전자화폐 부채의 8% 중 더 높은 금액**으로 정하고 — *적격* 발행자에
대해서는 **RM5,000,000 또는 8%**로 정합니다.

**적격(eligible)** 발행자란 6개월 연속으로 **50만 명의 활성 사용자**를 보유하거나 말레이시아 전자화폐 거래량,
거래 가치 또는 미상환 부채의 **5% 시장 점유율**을 가짐으로써 BNM이 제2A항에 따라 분류하는 발행자입니다.

## 답을 바꾸는 면제

여기 거의 아무도 인용하지 않는 법령이 있습니다. 제263조에 따라 제정되어 **2025년 1월 2일에 시행된** **2024년
금융서비스(제한 목적 전자화폐)(면제) 명령(Financial Services (Limited Purpose Electronic Money) (Exemption)
Order 2024)**, P.U.(A) 463/2024는 네 가지 범주의 제한 목적 전자화폐를 **제8조 제1항 (b) 및 제11조**로부터
전면 면제합니다.

| 범주 | 범위 |
| --- | --- |
| 1 — 상품 또는 서비스 | 말레이시아 내 **단일 매장 또는 단일 브랜드하의 단일 사업 체인**에서만 사용 가능 |
| 2 — 보상 | 발행자와의 약정에 따라 어떤 자에 의해 자금이 조달되고, 그 자금 조달자가 아닌 타인에게만 사용 가능하며, 별도로 보유 |
| 3 — 환불 | 발행자에 의해, 또는 발행자와의 약정에 따라 타인을 위해, 사용자에게 자금을 반환하는 데 사용 |
| 4 — 통신사 디지털 상품 | 통신 기기를 통해 소비되는 저가 디지털 상품(음악, 영상, 소프트웨어, 게임, 벨소리)에 대해 통신사가 발행 |

범주 1은 대다수 창업자가 필요로 하는 폐쇄형(closed-loop) 사례이며, 확고한 수치를 수반합니다. **사용자당
RM500을 초과하지 않는 지갑 한도**, 그리고 해당 연도에 대해 **발행자당 각각 RM1,000,000을 초과하지 않는**
일평균 미상환 부채 **및** 월평균 거래 가치입니다.

이 면제는 조건부입니다. 모든 범주가 **2010년 개인정보보호법(PDPA 2010)** 준수, 해당 사업이 승인된 발행자
요건의 적용을 받지 않는다는 **명확하고 눈에 띄는 공개**, **불만 및 분쟁 해결 메커니즘**, 그리고 저장된 자금을
사용자의 은행 계좌로 이전할 수 있는 수단을 요구합니다. 범주 1은 두 가지 연례 신고를 추가합니다. 기준이
충족됨을 확인하는 통지 및 서약과, 부채, 사용자, 거래량 및 거래 가치에 관한 **외부 감사를 거친 통계**입니다.

이 면제는 조건 불이행, 사기 관련 범죄로의 유죄 판결, 또는 그러한 범죄에 대한 BNM의 의심 시 **소멸**하며 —
첫 번째와 세 번째의 경우 30일의 소명(show cause) 통지가 주어집니다.

## 흔한 실수

**저장 가치가 소액이라서 안전하다고 가정하는 것.** 그것이 안전한 이유는 P.U.(A) 463/2024 때문이며, 오직 그
범주와 한도 내에서만 그렇습니다. 사용자당 RM500을 넘거나, 자신의 브랜드 밖의 가맹점에 지갑을 개방하면, 범주
1은 적용을 멈춥니다.

**그것을 포인트라고 부르는 것.** 정의는 여러분에게 지급된 자금을 저장하고 사용 가능한지에 좌우됩니다.
명칭은 무관합니다.

**승인과 등록을 혼동하는 것.** 결제 시스템과 전자화폐는 제11조 **승인**이 필요하고, 가맹점 매입은 제17조
**등록**이 필요합니다.

**송금이 여기에 포함된다고 가정하는 것.** 국경 간 이체는 2011년 자금서비스업법(Money Services Business Act
2011)에 따라 별도로 라이선스를 받습니다.

## 다음 단계

먼저 하나의 질문에 답하십시오. 여러분의 제품이 나중에 타인과 사용될 수 있는 고객 자금을 보유합니까? 그렇지
않다면, 여러분은 가맹점이고 게이트웨이가 라이선스를 부담합니다. 그렇다면, 오늘의 수치가 아니라 여러분의
전망치에 대해 RM500과 RM100만 기준을 시험하면서 P.U.(A) 463/2024를 범주별로 검토하십시오. 면제 밖에서는
그 경로가 제9조에 따른 신청입니다. 답이 불분명한 경우 — 구매자와 판매자 사이의 자금을 보유하는 마켓플레이스가
통상적인 어려운 사례입니다 — 구축하기 전에 사실관계를 BNM에 제시하십시오.
