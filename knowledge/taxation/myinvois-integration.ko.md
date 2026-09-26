---
topicId: MY-TAX-0008
title: "MyInvois 연동: 포털, API 또는 미들웨어"
seoTitle: "MyInvois 연동: 포털 대 API 대 미들웨어"
slug: "myinvois-integration"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "거래량과 귀사 ERP가 이미 수행하는 기능을 기준으로, 무료 MyInvois 포털, 직접 API 연동, 기술 제공자 중에서 선택하는 벤더 중립적 방법입니다."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "말레이시아 국세청(LHDN)은 두 가지 전송 방식을 제공합니다. 하나는 MyTax를 통해 접속하는 무료 MyInvois 포털로, 개별 양식 입력과 사전 정의된 Excel 스프레드시트의 일괄 업로드를 지원합니다. 다른 하나는 API로, 직접 ERP 연동, Peppol 서비스 제공자, 또는 비Peppol 기술 제공자를 통해 접근할 수 있습니다. 포털은 소량에 적합하고, API는 대량에 적합하며 디지털 인증서와 사전 시스템 작업이 필요합니다."
keyTakeaways:
  - "공식 방식은 두 가지뿐입니다 — 포털과 API. 그 밖의 모든 것은 API로 가는 경로입니다"
  - "포털은 무료이며, MyTax 로그인이 필요하고, Excel 일괄 업로드를 제공합니다"
  - "API 경로는 직접 ERP, Peppol 서비스 제공자, 또는 비Peppol 기술 제공자입니다"
  - "API 제출에는 .cer 또는 .pfx 파일 형태의 디지털 인증서가 필요합니다"
  - "엄격한 한도: 제출당 문서 100건 및 5MB, 문서당 300KB"
  - "중개자는 자체 Client ID와 Secret을 사용해야 하며 자신이 제출한 것만 볼 수 있습니다"
  - "API 결정을 좌우하는 것은 대개 매출 거래량이 아니라 자기청구 거래량입니다"
appliesTo: "MyInvois 경로를 선택하는 재무 책임자와 IT 팀, 그리고 전자송장 소프트웨어 벤더의 견적을 비교하는 모든 사람."

faq:
  - q: "MyInvois 포털은 정말 무료이며, 충분합니까?"
    a: "그렇습니다, 말레이시아 국세청(LHDN)이 제공하며 MyTax 포털을 통해 무료로 접속합니다. 양식을 통한 개별 생성과 사전 정의된 Excel 스프레드시트의 일괄 업로드를 모두 지원합니다. 충분한지 여부는 문서 수와 매수인별 세부 정보가 필요한 문서 수에 달려 있습니다. B2B 송장이 소수이고 월별 통합 전자송장이 하나인 사업체는 이를 무기한 사용할 수 있습니다."
  - q: "Peppol 서비스 제공자가 필요합니까?"
    a: "아닙니다. Peppol은 직접 ERP 연동 및 비Peppol 기술 제공자와 함께 말레이시아 국세청(LHDN)이 API에 도달하는 방법으로 열거하는 세 가지 중 하나입니다. 말레이시아 국세청(LHDN)은 경로나 벤더를 의무화하지 않습니다. Peppol은 상호운용 가능한 국경 간 문서 교환도 필요한 경우에 중요합니다. 이는 MyInvois 요건이 아닙니다."
  - q: "API가 포털과 달리 필요로 하는 것은 무엇입니까?"
    a: "디지털 인증서 — 제출에 서명하는 데 사용되는 .cer 또는 .pfx 파일로, 해시된 서명이 제출 본문에 담깁니다 — 그리고 XML 또는 JSON으로 UBL 2.1 구조에 맞추어 작성된 문서입니다. 말레이시아 국세청(LHDN)은 API 연동 및 구성 지침과 엔드포인트를 MyInvois SDK에 공표합니다."
  - q: "벤더를 이용하는 경우, 누락된 전자송장에 대한 책임은 누구에게 있습니까?"
    a: "귀하에게 있습니다. 발행 및 전송 의무는 소득세법(Income Tax Act 1967) 제82C조에 따라 납세자에게 있으며, 제120(1)(d)조는 위반을 범죄로 규정합니다. 전송을 외주한다고 그 의무가 옮겨지지는 않습니다. 말레이시아 국세청(LHDN)은 또한 중개자를 자신이 제출한 전자송장으로 제한하므로, 제공자를 바꾸면 이력이 남겨집니다."
  - q: "이 결정을 어떻게 규모 판단합니까?"
    a: "매출이 아니라 문서를 세십시오. 거래별 전자송장, 통합 전자송장, 자기청구 전자송장, 그리고 모든 대변·차변·환불 노트를 합산하십시오. 그런 다음 제외 항목을 확인하십시오 — RM10,000을 초과하는 거래와 표 3.6 업종은 통합할 수 없으며, 이는 월별 문서 하나를 수천 건으로 바꿀 수 있습니다."
  - q: "포털과 API를 동시에 운영할 수 있습니까?"
    a: "그렇습니다. 말레이시아 국세청(LHDN)은 두 방식을 영구적 선택이 아니라 제출별 선택으로 제시하며, 많은 사업체가 대량 매출은 API를 통해 처리하고 간헐적인 자기청구 문서는 포털에서 처리합니다. 포털의 보고 및 대시보드는 둘 다를 포괄합니다."

verificationNeeded:
  - "엔드포인트별 API 요청 제한 수치 — SDK FAQ는 수치를 공표하지 않은 채 통합 실무(Integration Practices)를 언급합니다"
  - "기술 제공자에 대한 말레이시아 국세청(LHDN) 인정, 인증, 또는 승인 벤더 목록 — hasil.gov.my나 SDK에서 확인되지 않았습니다"
  - "MyInvois 포털 일괄 업로드 스프레드시트가 허용하는 최대 행 수 — 말레이시아 국세청(LHDN)은 특정 수를 명시하지 않고 설명합니다"

lang: "ko"
sourceContentHash: "12fac171732261f3"
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
  - title: "e-Invoice Guideline (Version 4.7) — sections 2.2 to 2.5"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MyInvois SDK"
    url: "https://sdk.myinvois.hasil.gov.my/"
    publisher: "LHDN"
  - title: "MyInvois SDK — frequently asked questions"
    url: "https://sdk.myinvois.hasil.gov.my/faq/"
    publisher: "LHDN"
  - title: "MyInvois SDK — standard error response"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "LHDN"
  - title: "e-Invoice Specific Guideline (Version 4.8)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"

entity: "MyInvois transmission mechanisms"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "requires", to: "e-invoice-data-fields" }
  - { rel: "related-to", to: "myinvois-phases" }
related: ["e-invoicing", "myinvois-phases", "e-invoice-data-fields", "consolidated-e-invoice", "self-billed-e-invoice"]
keywords: ["MyInvois integration", "MyInvois API", "MyInvois Portal", "Peppol Malaysia", "e-Invoice middleware", "e-invois integrasi sistem"]
---

이 결정에 관해 쓰인 거의 모든 글은 그 답 중 하나를 파는 사람이 쓴 것입니다.
그러므로 LHDN이 실제로 인정하는 단 두 가지 방식, 즉 e-Invoice 지침 표 2.1에 있는
**MyInvois 포털**과 **API**에서 출발하십시오. Peppol 제공자, 비Peppol 기술
제공자, 미들웨어는 제3의 선택지가 아니라 API에 도달하는 세 가지 방법입니다.

## 두 가지 방식

| | MyInvois 포털 | API |
| --- | --- | --- |
| 비용 | 무료, **MyTax** 로그인 경유 | 구축 또는 라이선스 |
| 입력 | 개별 양식, 또는 **사전 정의된 Excel 스프레드시트 일괄 업로드** | **UBL 2.1** 형식의 XML 또는 JSON |
| 서명 | 포털이 처리 | 귀사의 **디지털 인증서**(.cer 또는 .pfx) |
| LHDN이 명시한 적합 대상 | 모든 납세자가 이용 가능; API 연결이 불가능한 사업체 | 대량; 사전 투자와 시스템 변경 필요 |
| 경로 | 하나 | 직접 ERP, **Peppol** 제공자, **비Peppol** 제공자 |

둘 다 동일한 결과물을 생성합니다. IRBM 고유 식별번호(Unique Identifier
Number), 검증 타임스탬프, 그리고 시각적 표현물의 QR 코드입니다.

## 구매 전에 문제 규모를 파악하라

문제는 매출이 아닙니다. **한 달에 전송해야 하는 문서가 몇 건인가**이며, 그 수는
대개 사람들이 예상하는 것보다 많습니다:

1. 발급을 요청한 구매자에게 보내는 거래(transactional) e-Invoice
2. 통합(consolidated) e-Invoice — 월 1건 이상, 지점을 분리하면 지점별로
3. **자가 발행(self-billed) e-Invoice** — 수수료, 해외 공급자, 개인 임대인,
   대부분의 이자, 배당, 원금 상환
4. 대변, 차변, 환불 전표

그다음 순진한 추정을 무너뜨리는 두 가지 제외 사항을 적용하십시오. **단일 거래
금액이 RM10,000을 초과**하면 2026년 1월 1일부터 모든 업종에서 거래 e-Invoice로
발급해야 합니다. 그리고 e-Invoice 개별 지침(Specific Guideline) 표 3.6의 아홉
가지 활동은 전혀 통합할 수 없습니다 — 자동차, 항공권, 건설 계약, 대리인 및 딜러
지급, 베팅 배당금, 전기, 통신.

월 3대의 차량을 파는 정비소는 포털 작업량이 사소합니다. 후불 가입자 4,000명을 둔
통신 재판매업체는 그렇지 않으며, 아무리 통합해도 도움이 되지 않습니다.

**자가 발행 물량이 흔한 복병입니다.** 월 40건의 매출 송장과 600건의 대리인
수수료 지급이 있는 회사는 매출 원장이 무엇을 말하든 대량 e-Invoicing 사업체입니다.

## 포털이 실제로 한계에 부딪히는 지점

- **데이터 입력 비용.** 모든 거래 문서에는 구매자 이름, TIN, 등록번호, 주소,
  연락처, SST 번호를 직접 입력하거나 스프레드시트로 불러와야 합니다.
- **72시간 시계.** 취소 및 거부 기간은 검증 시점부터 시작됩니다. 주 단위로
  제출하는 수작업 프로세스는 이를 활용할 수 없습니다.
- **월말 집중.** 통합 e-Invoice는 그 외 모든 것에 더해 월말 후 **7일(달력일)**
  이내에 제출해야 합니다.
- **대사(reconciliation).** 포털은 XML, JSON, 메타데이터, 그리드, PDF 조회를
  제공하지만, 검증된 문서를 귀사 원장과 대조하는 작업은 수작업입니다.

## API가 라이선스보다 더 비싼 지점

- **디지털 인증서**를 취득하고 설치하며 교체(rotation)해야 합니다.
- **제출 한도는 엄격합니다:** 제출당 문서 100건 및 5MB, 문서당 300KB.
  배칭(batching)과 필요 시 압축(minification)은 귀사의 몫입니다.
- **2단계 검증.** *제출됨(Submitted)*은 *유효함(Valid)*이 아닙니다. 구조, 핵심
  필드, 코드는 즉시 확인되고, 서명, 납세자, 참조 문서, 중복은 백그라운드에서
  확인됩니다. 202 형태의 확인 응답을 성공으로 취급하는 연동은 무효 문서를
  조용히 쌓아 갑니다.
- **토큰 처리.** 로그인 토큰은 60분간 유효하며, 요청마다 발급하는 것이 아니라
  재사용하도록 되어 있습니다. 속도 제한(rate limiting)은 `Retry-After` 헤더와
  함께 429를 반환합니다.
- **기준정보(master data).** 공급자 및 구매자 TIN, 새로운 12자리 BRN, MSIC
  코드, SST 번호가 이 모든 것을 실행하기 전에 정확해야 합니다.

## API에 도달할 경로 선택

| 경로 | 적합 대상 | 주의 사항 |
| --- | --- | --- |
| **직접 ERP 연동** | 유지관리되는 말레이시아 현지화가 적용된 기존 ERP, 또는 사내 엔지니어링 역량 | 지침 버전이 바뀔 때마다 지속적 유지관리 — v4.7과 v4.8이 모두 2026년 7월 7일에 나옴 |
| **Peppol 서비스 제공자** | 거래 상대방과 상호운용 가능한 문서 교환도 원하는 사업체 | Peppol은 MyInvois 요건이 아님; 요건인 것처럼 비용을 지불하지 말 것 |
| **비Peppol 기술 제공자 / 미들웨어** | 여러 소스 시스템, POS 자산군, 또는 현지화가 없는 ERP | 데이터 보관, 해지 조건, 그리고 그들이 자체 자격 증명으로 제출하는지 여부 |

LHDN은 어떤 제공자도 보증, 인증, 승인하지 않습니다. 벤더가 LHDN 승인 자격을
주장한다면 그 증빙을 요구하십시오.

## 아무도 묻지 않는 중개자 문제

SDK는 중개자가 **자체 Client ID 및 Client Secret**을 사용하여 제출하며, **자신이**
제출한 e-Invoice에만 접근할 수 있다고 명시합니다. 납세자가 독립적으로 제출한
문서는 조회할 수 없습니다.

계약서에 명시할 만한 두 가지 결과:

- **제공자를 바꿔도 제출 이력이 이전되지 않습니다.** 병행 운영 기간과 자체
  아카이브를 계획하십시오.
- **책임은 이전되지 않습니다.** 소득세법(Income Tax Act 1967) 제82C조는 그 의무를
  납세자에게 부과하며, s.120(1)(d)는 위반을 범죄로 규정합니다. 벤더의 장애는
  귀사의 규정 미준수입니다.

장애와 관련해 LHDN은 한 가지 구제를 제공합니다. e-Invoice 지침 제2.5.4항은
MyInvois 시스템 자체가 유지보수 또는 기술적 이유로 중단되고 납세자가 준수 노력을
입증할 수 있는 경우, 국세청장이 사안별로 판단하여 조치를 취하지 않을 수 있다고
규정합니다. 이는 LHDN의 다운타임에 해당하며, 귀사 벤더의 다운타임에는 해당하지
않습니다.

## 의사결정 경로

1. **면제 대상입니까?** 연간 매출액 RM1,000,000 미만이면 여기서 멈추십시오.
2. 위의 네 범주 전반에 걸쳐 **월별 문서를 집계하십시오**.
3. **대략 100건 미만이고 대부분 통합 문서입니까?** Excel 일괄 업로드를 활용한
   포털입니다. 매년 재검토하십시오.
4. **수백에서 수천 건이고 소스 시스템이 하나입니까?** ERP 벤더에게 그들의
   MyInvois 현지화가 무엇을 포함하는지 — 특히 자가 발행 유형 11~14와 수입용
   부속서(annexure) 필드를 — 문의하십시오.
5. **수천 건이거나, 여러 소스 시스템이거나, POS 자산군입니까?** 기능 목록이
   아니라 데이터 보관과 해지 조건을 기준으로 선택하는 미들웨어입니다.
6. **무엇을 선택하든, 완화 기간이 끝나기 전에 처음부터 끝까지 검증하십시오** —
   4단계는 2027년 12월 31일까지이며, 1~3단계는 이미 지났습니다.

## 흔한 실수

- **집계 전에 구매하는 것.** 자가 발행을 포함한 문서 건수가 이 결정의 유일한
  입력값입니다.
- **Peppol이 의무라고 가정하는 것.** 그것은 세 가지 API 경로 중 하나입니다.
- **인증 주장을 믿는 것.** LHDN은 승인 벤더 목록을 공표하지 않습니다.
- **검증을 동기식으로 취급하는 것.** 7개 검증기 중 4개는 백그라운드에서
  실행됩니다.
- **기준정보 정비를 건너뛰는 것.** 오래된 SSM 등록번호와 낡은 TIN은 연동이
  아무리 훌륭해도 납세자 검증기를 통과하지 못합니다.
- **깨끗한 데이터로만 테스트하는 것.** 해외 공급자, TIN이 없는 개인, 대변 전표,
  월말 물량으로 테스트하십시오. 바로 그것이 문제를 일으키기 때문입니다.

## 다음 단계

지난달의 미지급금과 미수금을 뽑아 모든 항목을 거래, 통합, 자가 발행으로 분류하고
집계하십시오. 그 숫자가 방식을 결정합니다. 그다음 필드 목록을 귀사 기준정보와
대조하십시오. 정비 작업은 거의 항상 연동보다 오래 걸리기 때문입니다.
