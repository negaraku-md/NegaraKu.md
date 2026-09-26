---
topicId: MY-ACC-0011
title: "말레이시아의 회계 소프트웨어: 이제 선택을 좌우하는 두 가지 역량"
seoTitle: "말레이시아 회계 소프트웨어: 전자 송장 및 MBRS 적합성"
slug: "accounting-software-malaysia"
category: "accounting"
subcategory: ["bookkeeping"]
summary: "이제 중요해진 두 축 — 어떻게 MyInvois에 연결되는지, 그리고 그 출력이 MBRS 제출에 활용될 수 있는지 — 을 기준으로 말레이시아 회사의 회계 소프트웨어를 평가하는 공급업체 중립적 방법."

tier: "4"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "이제 기능 목록은 말레이시아에서 판매되는 회계 패키지를 구분하지 못합니다. 두 가지 역량이 구분합니다. 첫째, 소프트웨어가 문서를 MyInvois에 전달하는 방식 — 무료 포털을 통해서인지, 직접 API 연동을 통해서인지, 아니면 자체 자격 증명으로 제출하는 중개자를 통해서인지. 둘째, 어떤 회계 패키지도 SSM에 직접 제출하지 않는다는 점을 고려할 때, 그 출력이 MBRS 제출을 위한 SSM의 SSMxT 분류체계에 매핑될 수 있는지. 나머지는 모두 선호의 문제입니다."
keyTakeaways:
  - "말레이시아 국세청(LHDN)은 두 가지 전송 방식 — MyInvois 포털과 API — 그리고 지정된 중개자에 의한 제출을 문서화합니다"
  - "LHDN은 SDK를 공개하지만 전자 송장 소프트웨어에 대한 인정, 인증 또는 승인 공급업체 목록은 공개하지 않습니다; 「LHDN 승인」 주장은 공급업체 자체의 표현입니다"
  - "말레이시아 전자 송장에서 유일하게 실질적인 인정은 Peppol 당국으로서의 MDEC의 인정이며, Peppol 서비스 제공자와 Peppol-Ready 솔루션 제공자를 대상으로 합니다 — 그리고 Peppol은 MyInvois 요건이 아닙니다"
  - "어떤 회계 패키지도 MBRS에 제출하지 않습니다; 제출물은 SSM 자체의 준비 도구에서 작성되어 zip 파일로 mPortal에 업로드됩니다"
  - "따라서 「MBRS 준비 완료」란 제출 버튼이 아니라 SSMxT 개념에 매핑되는 안정적이고 내보내기 가능한 시산표를 의미합니다"
  - "SSMxT 분류체계는 회사가 확장할 수 없으므로, 분류체계 내에 대응처가 없는 계정과목표는 반복적인 비용이 됩니다"
  - "중개자는 자신이 제출한 문서만 조회할 수 있으므로, 제공업체를 변경해도 제출 이력이 이전되지 않습니다"
appliesTo: "회계 소프트웨어를 선정하거나 교체하는 말레이시아 회사, 그리고 현재 패키지가 실제로 무엇을 할 수 있는지 점검하는 재무팀."

verificationNeeded:
  - "특정 제품에 대한 역량 주장은 의도적으로 이 페이지에서 배제되었습니다 — 현지화 지원 범위는 예고 없이 릴리스마다 변하므로, 각 주장을 공급업체 자체의 현행 공개 문서와 대조하여 확인하십시오"
  - "SSM은 MBRS 페이지에서 제3자 XBRL 준비 소프트웨어의 승인 또는 인정 목록을 공개하지 않습니다; MBRS 인증에 관한 공급업체의 주장에 의존하기 전에 SSM에 확인하십시오"
  - "전자 송장 지침(e-Invoice Guideline)과 특정 지침(Specific Guideline)은 자주 개정됩니다 — 어떤 연동 요건이든 확정된 것으로 취급하기 전에 현행 버전을 확인하십시오"

lang: "ko"
sourceContentHash: "2723b917b69eeed3"
masterLanguage: "en"
translationStatus: "in-sync"

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

updated: 2026-07-20
sources:
  - title: "Software Development Kit (SDK) for the LHDNM MyInvois System"
    url: "https://sdk.myinvois.hasil.gov.my/"
    publisher: "LHDN"
  - title: "IRBM e-Invoice Guideline"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
  - title: "Peppol Service Providers — National e-Invoicing"
    url: "https://www.mdec.my/national-einvoicing/peppol-service-providers"
    publisher: "MDEC"
  - title: "SSMxT 2022 Architecture Document"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "MBRS Preparation Tool"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/XBRL%20250918/MBRS-Preparation-Tool.aspx"
    publisher: "SSM"

entity: "Accounting software"
relations:
  - { rel: "related-to", to: "myinvois-integration" }
  - { rel: "affects", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "sdn-bhd-bookkeeping" }
related: ["sdn-bhd-bookkeeping", "mbrs-2-filing-guide", "mbrs-tagging-errors", "myinvois-integration", "e-invoice-accounting-records", "bookkeeping-in-house-vs-outsourced", "e-invoicing", "accounting-records-section-245"]
keywords: ["accounting software Malaysia", "e-invoice compliant accounting software", "MyInvois integration software", "MBRS XBRL software Malaysia", "LHDN approved accounting software", "SSMxT taxonomy export"]
---

말레이시아 회계 소프트웨어 목록 기사는 정형화된 장르입니다: 열 개의 제품, 각각 한 문단,
아무도 쓰지 않는 기능 표, 그리고 제휴 링크. 이는 결코 유용하지 않았으며, 전자 송장(e-Invoice)과
MBRS 2.0이 도입된 이후로는 제품을 더 이상 구분하지 못하는 것들로 순위를 매기기 때문에
적극적으로 오해를 불러일으킵니다.

이제 두 가지 역량이 제품을 구분합니다. 어느 쪽도 기능 격자표에는 나타나지 않습니다.

## 축 1: 소프트웨어가 문서를 MyInvois에 전달하는 방식

말레이시아 국세청(LHDN)은 **두 가지 전송 방식** — MyInvois 포털과 API — 을 문서화하며,
별도로 납세자가 자신을 대신하여 제출할 **중개자**를 지정하는 것을 허용합니다. 이는 네 가지
실무적 형태를 낳으며, 구매하는 소프트웨어가 그중 어느 것이 열려 있는지를 결정합니다.

| 경로 | 소프트웨어가 해야 하는 것 | 확인할 사항 |
| --- | --- | --- |
| **포털 전용** | 없음. MyInvois에서 문서를 직접 입력하거나 일괄 업로드합니다 | 소프트웨어가 포털의 일괄 스프레드시트 형식에 맞는 파일을 내보낼 수 있는지, 아니면 다시 입력하고 있는지 |
| **직접 API** | UBL 2.1 문서를 작성하고 서명, 토큰 관리, 비동기 검증 처리 | 말레이시아 현지화가 표준 매출 송장뿐 아니라 자가 발행(self-billed) 문서 유형과 수입 부속 항목 필드까지 지원하는지 |
| **중개자 또는 미들웨어 경유** | 정해진 일정에 따라 깨끗한 거래 데이터 내보내기 | 제출에 누구의 자격 증명이 사용되는지, 누가 데이터를 보유하는지, 그리고 이탈 시 무엇이 함께 나오는지 |
| **Peppol 서비스 제공자 경유** | 미들웨어와 동일, Peppol 접속점을 통해 | 실제로 거래 상대방과의 상호 운용 가능한 교환이 필요한지 — Peppol은 MyInvois 요건이 아닙니다 |

이들 간의 선택은 [MyInvois 연동](/ko/taxation/myinvois-integration)에서 다루는 물량 및
아키텍처의 문제입니다. 여기에 해당하는 것은 소프트웨어 측면의 결과입니다: API 연동 경로가
없는 패키지가 준수를 막지는 않으며, 포털을 사용하도록 강제할 뿐이고, 포털의 비용은 라이선스
요금이 아니라 타건 입력과 월말 업무 집중입니다.

**계약서에 기입할 만한 중개자 관련 세부 사항:** 중개자는 자신이 제출한 전자 송장만 조회하고
검색할 수 있습니다. 제공업체를 변경하면 제출 이력이 따라오지 않습니다. 병행 운영을 계획하고
자체 보관본을 유지하십시오.

## 불신해야 할 인정 주장

LHDN은 SDK, API 문서 및 FAQ를 공개합니다. 전자 송장 소프트웨어에 대한 인정 제도, 인증
프로그램 또는 승인 공급업체 목록은 공개하지 않습니다. 어떤 제품이 **LHDN 승인**으로
마케팅된다면, 그 지위는 공급업체 스스로에 대한 자체 설명입니다. 그 증서를 보여달라고
요청하십시오.

말레이시아 전자 송장에는 하나의 진정한 인정이 있으며, 그것은 다른 주체에 속합니다.
**MDEC는 말레이시아의 Peppol 당국**이며, 두 가지 별개의 역할을 인정합니다:

| 역할 | 정의 |
| --- | --- |
| **Peppol 서비스 제공자(SP)** | Peppol 접속점 — 문서를 라우팅하는 연결 게이트웨이 — 을 운영 |
| **Peppol-Ready 솔루션 제공자(PRSP)** | 최종 사용자를 위해 Peppol 준수 소프트웨어 또는 ERP를 구축 |

두 목록 모두 MDEC가 공개합니다. 어느 것도 LHDN 승인이 아니며, 어느 것도 전자 송장 의무를
준수하는 데 필요하지 않습니다. MDEC 인정을 보유한 공급업체는 Peppol 표준에 대한 적합성을
입증한 것이며, 이는 실질적인 자격 — Peppol에 관한 것 — 입니다.

## 축 2: 출력이 MBRS 제출에 활용될 수 있는지

여기 전체 범주를 재정의하는 사실이 있습니다: **어떤 회계 패키지도 재무제표를 SSM에
제출하지 않습니다.**

제출물은 SSM 자체의 **MBRS 준비 도구(mTool)**에서 작성되며, 이 도구가 MBRS 포털에 업로드되는
zip 파일을 생성합니다. 그것이 인정되는 제출 산출물입니다. 원장이 무엇을 산출하든, 그 도구를
거친 후에야 MBRS 제출물이 됩니다.

따라서 소프트웨어 주장으로서 「MBRS 준비 완료」가 정직하게 의미할 수 있는 것은 오직 하나뿐입니다:
출력이 SSM의 **SSMxT** 분류체계에 깔끔하게 매핑되는 형태라는 것. 세 가지 속성이 이를
결정합니다:

- **안정적이고 내보내기 가능한 시산표**로, 계정 코드가 해마다 바뀌지 않아야 합니다. 코드가
  바뀔 때마다 매핑을 처음부터 다시 구축해야 합니다.
- **표류하지 않는 표시 기준.** 표시 형식 간 전환은 숫자가 동일하더라도 매핑을 다시 하도록
  강제합니다.
- **각 항목이 안착할 곳이 있는 계정과목표.** SSMxT 아키텍처는 실체가 **분류체계를 확장해서는
  안 된다**고 규정합니다 — 회사별 확장은 금지되며, 세부 내용은 텍스트 블록에 속합니다.
  대응하는 개념이 없는 계정은 매년 수동으로 판단해야 하는 사항입니다.

두 가지 기계적 함정이 하류에 있으며 소프트웨어를 탓하기 전에 알아둘 가치가 있습니다.
비용은 SSMxT에서 **양(+)의** 값으로 저장되며, 이는 대부분의 원장 내보내기와 반대입니다.
그리고 천 단위로 표시된 수치는 올바른 `decimals` 속성을 지녀야 합니다 — 잘못된 속성은
검증을 조용히 통과하여 천 배 크거나 작은 숫자를 제출하게 합니다.

## 공급업체에게 보낼 평가 체크리스트

1. 이 제품은 현재 어떤 MyInvois 전송 방식을 지원합니까 — 포털 내보내기, 직접 API, 아니면
   자사의 중개 서비스를 통한 제출?
2. API인 경우: 현지화가 **자가 발행** 전자 송장과 수입 물품 부속 항목 필드를 지원합니까,
   아니면 표준 매출 송장만 지원합니까?
3. 문서는 누구의 자격 증명으로 제출되며, 검증된 문서는 누가 보유합니까?
4. 컨설턴트 없이 안정적인 계정 코드를 갖춘 완전한 시산표를 기계 판독 가능한 형식으로
   내보낼 수 있습니까?
5. Peppol SP 또는 PRSP로서 MDEC 인정을 보유하고 있습니까 — 그리고 LHDN 승인을 주장한다면,
   어떤 문서가 이를 증명합니까?
6. 이탈 시 우리와 함께 나오는 것은 무엇입니까: 원장, 매핑, 제출 이력?

## 이 페이지가 제품 이름을 대지 않는 이유

역량은 공급업체나 LHDN이 공개해야만 게시할 수 있는데, 공급업체 역량 페이지는 변경 내역
없이 릴리스마다 바뀌기 때문입니다. 오늘 작성된 제품 비교는 소프트웨어가 아니라 마케팅
문구의 스냅샷입니다. 위의 체크리스트는 스냅샷보다 오래 살아남지만, 순위표는 그렇지 못합니다.

## 흔한 실수

- **「LHDN 승인」 주장을 믿는 것.** LHDN은 그러한 목록을 공개하지 않습니다.
- **MDEC Peppol 인정을 LHDN 승인과 혼동하거나,** Peppol을 필수로 취급하는 것.
- **제출 버튼을 사는 것.** mTool 출력 외에는 어떤 것도 MBRS에 제출되지 않습니다.
- **「MBRS 준비 완료」를 인증으로 읽는 것.** 기껏해야 깨끗하고 안정적인 내보내기를 의미합니다.
- **계정과목표를 매년 변경하고** 매번 매핑 비용을 다시 지불하는 것.
- **매출 송장만 평가하는 것.** 대부분의 구현을 무너뜨리는 것은 자가 발행 물량입니다.
- **검증이 규모 오류를 잡아낸다고 가정하는 것.** 천 배의 규모 오류는 통과됩니다.

## 다음 단계

쇼핑하기 전에 이미 보유한 것에 두 가지 테스트를 실행하십시오. 완전한 시산표를 내보내고
모든 계정에 명백한 SSMxT 대응처가 있는지 확인하십시오. 그런 다음 자가 발행 거래 하나 —
대리인 수수료나 외국 공급업체 — 를 골라 MyInvois까지 처음부터 끝까지 따라가 보십시오. 그 둘
중 실패하는 쪽이 실제로 여러분이 사고 있는 것입니다.
