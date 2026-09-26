---
topicId: MY-TAX-0014
title: "전자송장 데이터 필드 참조"
seoTitle: "말레이시아 전자송장 데이터 필드: 55개 필드 참조"
slug: "e-invoice-data-fields"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "필수 또는 선택 상태, 부속서 필드, LHDN 코드 목록, 그리고 각 유형의 오류를 거부하는 검증기와 함께 정리한 모든 55개 전자송장(e-Invoice) 필수 필드."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "LHDN은 전자송장을 발행하기 위해 여덟 개 범주로 묶인 55개의 데이터 필드를 요구합니다. 대부분은 필수이고, 20개는 선택이며 8개는 조건부 필수입니다 — SST와 관광세 등록번호, 원본 전자송장 참조, 통화 환율, 세율, 그리고 두 개의 세금 면제 필드입니다. 부속서는 재화의 수입과 수출에 대한 필수 관세 양식 참조를 추가합니다."
keyTakeaways:
  - "부록 1에 여덟 개 범주로 묶인 55개 필드, 그리고 부록 2의 부속서"
  - "XML 또는 JSON, 둘 다 UBL 2.1을 준수"
  - "여덟 개 필드는 항상 요구되는 것이 아니라 조건부 필수입니다"
  - "전자송장 날짜와 시각은 현재 날짜와 시각이어야 합니다"
  - "일곱 개의 검증기가 실행됩니다 — 세 개는 즉시, 네 개는 백그라운드에서"
  - "전자송장 유형, 세금 유형, 통화, MSIC, 주, 단위(UoM)에 대한 코드 목록은 SDK에 공표되어 있습니다"
  - "결함이 있는 전자송장은 소득세법 1967(ITA 1967) 제82C(8)조에 따라 3일 이내에 대체본으로 교체할 수 있습니다"
appliesTo: "MyInvois 연동을 구축하는 개발자, 마스터 데이터를 매핑하는 ERP 컨설턴트, 그리고 거부된 제출을 디버깅하는 재무팀."

verificationNeeded:
  - "세분화된 검증 오류 코드(CF, DS, ST 접두어)의 전체 공표 목록 — SDK는 일곱 개 검증기 범주와 표준 HTTP 오류 코드를 문서화하지만 코드-조건 대응표 전체는 공표하지 않습니다"
  - "엔드포인트별 API 요청 제한 — SDK는 FAQ 페이지에 수치 제한을 명시하지 않은 채 통합 실무(Integration Practices)를 언급합니다"

lang: "ko"
sourceContentHash: "7457966f1e6638bb"
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
  - title: "e-Invoice Guideline (Version 4.7) — Appendices 1 and 2"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MyInvois SDK — document validation rules"
    url: "https://sdk.myinvois.hasil.gov.my/document-validation-rules/"
    publisher: "LHDN"
  - title: "MyInvois SDK — code lists"
    url: "https://sdk.myinvois.hasil.gov.my/codes/"
    publisher: "LHDN"
  - title: "MyInvois SDK — standard error response"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "LHDN"
  - title: "e-Invoice Specific Guideline (Version 4.8) — Appendix 1, list of general TIN"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"

entity: "e-Invoice data fields"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
related: ["e-invoicing", "myinvois-phases", "myinvois-integration", "self-billed-e-invoice", "consolidated-e-invoice"]
keywords: ["e-Invoice data fields", "55 fields e-Invoice", "MyInvois mandatory fields", "e-Invoice validation error", "UBL 2.1 Malaysia", "medan data e-invois"]
---

거부된 모든 제출은 두 가지 중 하나로 귀결됩니다. LHDN이 필수로 취급하지만 귀사 ERP가 선택으로 취급하는 필드, 또는 LHDN 목록에 없는 코드 값입니다. 이 페이지는 전자송장 지침(e-Invoice Guideline) 버전 4.7의 부록 1과 2에 공표된 대로의 필드 목록입니다.

형식은 **XML 또는 JSON**이며, 둘 다 **UBL 2.1**을 준수합니다. LHDN은 55개 필드를 여덟 개 범주로 묶습니다. 주소(Address), 사업 세부정보(Business Details), 연락처(Contact Number), 송장 세부정보(Invoice Details), 당사자(Parties), 당사자 세부정보(Party Details), 결제 정보(Payment Info), 그리고 제품/용역(Products / Services)입니다.

## 55개 필드

**M** = 필수 · **C** = 조건부 필수 · **O** = 선택

### 당사자 및 당사자 세부정보

| # | 필드 | 상태 | 비고 |
| --- | --- | --- | --- |
| 1 | 공급자 이름 | M | |
| 2 | 매수인 이름 | M | 통합 전자송장에서는 General Public |
| 3 | 공급자 TIN | M | 이용 불가 시 일반 TIN 코드 적용 |
| 4 | 공급자 등록/신원/여권 번호 | M | SSM 등록자는 **신규 12자리 BRN**만 사용 |
| 5 | 공급자 SST 등록번호 | **C** | SST 등록자에게 필수 |
| 6 | 공급자 관광세 등록번호 | **C** | 관광세 등록자에게 필수 |
| 7 | 공급자 이메일 | O | |
| 8 | 공급자 MSIC 코드 | M | 5자리 숫자; 외국 공급자에게 이용 불가 시 00000 |
| 9 | 공급자 사업활동 설명 | M | |
| 10 | 매수인 TIN | M | |
| 11 | 매수인 등록/신원/여권 번호 | M | |
| 12 | 매수인 SST 등록번호 | **C** | SST 등록자에게 필수 |
| 13 | 매수인 이메일 | O | |

### 주소 및 연락처

| # | 필드 | 상태 |
| --- | --- | --- |
| 14 | 공급자 주소 | M |
| 15 | 매수인 주소 | M |
| 16 | 공급자 연락처 | M |
| 17 | 매수인 연락처 | M |

### 송장 세부정보

| # | 필드 | 상태 | 비고 |
| --- | --- | --- | --- |
| 18 | 전자송장 버전 | M | 자진신고에는 SVDP 1.2 / 1.3만 |
| 19 | 전자송장 유형 | M | 아래 코드 목록 참조 |
| 20 | 전자송장 코드/번호 | M | 공급자 자체 참조 |
| 21 | 원본 전자송장 참조 번호 | **C** | 대변·차변·환불 통지에 필수 |
| 22 | 전자송장 일시 | M | **반드시 현재 일시여야 함** |
| 23 | 발행자 전자서명 | M | 사용 시 서비스 제공자의 증명서 |
| 24 | 송장 통화 코드 | M | |
| 25 | 통화 환율 | **C** | 통화가 링깃이 아닌 경우 필수 |
| 26 | 청구 빈도 | O | |
| 27 | 청구 기간 | O | |

### 제품 및 용역

| # | 필드 | 상태 | 비고 |
| --- | --- | --- | --- |
| 28 | 분류 | M | LHDN 카탈로그의 3자리 코드 |
| 29 | 제품 또는 용역 설명 | M | 통합 전자송장에서는 영수증 참조 번호 |
| 30 | 단가 | M | |
| 31 | 세금 유형 | M | 항목 및 송장 수준 |
| 32 | 세율 | **C** | |
| 33 | 세액 | M | 항목 및 송장 수준 |
| 34 | 세금 면제 세부사항 | **C** | 면제가 적용되면 필수 |
| 35 | 면세 금액 | **C** | 면제가 적용되면 필수 |
| 36 | 소계 | M | 항목 수준만 |
| 37 | 세전 합계 | M | 항목 및 송장 수준 |
| 38 | 세포함 합계 | M | 송장 수준만 |
| 39 | 총 순액 | O | 송장 수준만 |
| 40 | 총 지급 금액 | M | 송장 수준만 |
| 41 | 반올림 금액 | O | 송장 수준만 |
| 42 | 세금 유형별 총 과세 금액 | O | 송장 수준만 |
| 43 | 수량 | O | |
| 44 | 측정 단위 | O | |
| 45 | 할인율 | O | |
| 46 | 할인 금액 | O | |
| 47 | 수수료/요금율 | O | |
| 48 | 수수료/요금 금액 | O | |

### 결제 정보

| # | 필드 | 상태 |
| --- | --- | --- |
| 49 | 지급 방식 | O |
| 50 | 공급자 은행 계좌번호 | O |
| 51 | 지급 조건 | O |
| 52 | 선지급 금액 | O |
| 53 | 선지급일 | O |
| 54 | 선지급 참조 번호 | O |
| 55 | 청구 참조 번호 | O |

## 부속서 필드

| 필드 | 상태 | 적용 대상 |
| --- | --- | --- |
| 관세 양식 제1호, 9호 등의 참조 번호 | **필수** | 재화 수입 |
| 관세 양식 제2호의 참조 번호 | 선택 | 재화 수출 |
| 배송 수령인 이름/주소/TIN/등록 또는 여권 번호 | 선택 | 매수인 이외의 자에게 배송되는 재화 |
| 인코텀스(Incoterms) | 선택 | 재화의 수입 및 수출 |
| 제품 관세 코드 | 선택 | 재화만 |
| 자유무역협정 정보 | 선택 | 해당 시 수출만 |
| 인증 수출자 승인 번호, 예: ATIGA 번호 | 선택 | 해당 시 수출만 |
| 원산지 국가 | 선택 | 재화의 수입 및 수출 |
| 기타 요금 세부사항 | 선택 | 재화의 수입 및 수출 |

LHDN은 부속서 요건이 수시로 갱신될 수 있다고 언급합니다.

## 코드 목록

**전자송장 유형**

| 코드 | 유형 | | 코드 | 유형 |
| --- | --- | --- | --- | --- |
| 01 | 송장 | | 11 | 자체 발행 송장 |
| 02 | 대변 통지 | | 12 | 자체 발행 대변 통지 |
| 03 | 차변 통지 | | 13 | 자체 발행 차변 통지 |
| 04 | 환불 통지 | | 14 | 자체 발행 환불 통지 |

**세금 유형**

| 코드 | 유형 |
| --- | --- |
| 01 | 판매세 |
| 02 | 서비스세 |
| 03 | 관광세 |
| 04 | 고가재화세 |
| 05 | 저가재화 판매세 |
| 06 | 해당 없음 |
| E | 해당 시 세금 면제 |

**일반 TIN**(전자송장 세부 지침, 부록 1)

| 코드 | 용도 |
| --- | --- |
| EI00000000010 | General Public — MyKad만 있는 말레이시아 개인; 통합 전자송장의 매수인; 통합 자체 발행 전자송장의 공급자 |
| EI00000000020 | 외국 매수인 또는 외국 배송 수령인 |
| EI00000000030 | 외국 공급자, 자체 발행 |
| EI00000000040 | 정부, 주 및 지방자치단체, 법정기관, 면제 기관 |

SDK는 분류 코드, 국가 코드, 통화 코드, MSIC 코드, 지급 방식, 주 코드, 측정 단위도 공표합니다.

## 검증기와 무엇이 이를 발동시키는가

| 검증기 | 시점 | 일반적 실패 원인 |
| --- | --- | --- |
| **구조(Structure)** | 즉시 | 형식이 잘못된 XML이나 JSON, 또는 UBL 2.1에서 그 유형과 버전에 요구되는 구조와 일치하지 않는 문서 |
| **핵심 필드(Core Fields)** | 즉시 | 필수 필드 누락 |
| **코드(Code)** | 즉시 및 백그라운드 | LHDN 목록에 없는 통화, 세금 유형 또는 기타 코드 값 |
| **서명(Signature)** | 백그라운드 | 전자서명 검증 실패 |
| **납세자(Taxpayer)** | 백그라운드 | 문서에서 참조된 TIN이 문서 발행일 기준으로 유효하지 않음 |
| **참조 문서(Referenced Documents)** | 백그라운드 | 대변·차변·환불 통지가 발행 시점에 유효한 전자송장이 아닌 문서를 가리킴 |
| **중복 문서(Duplicate Document)** | 백그라운드 | 거의 동일한 문서가 이미 제출됨 — 오류 코드 **DS302** |

문서 상태는 **Submitted → Valid** 또는 **Invalid**로 이동합니다. *Submitted*는 구조와 핵심 필드 검사를 통과했다는 것만을 의미하며, 백그라운드 검증기가 여전히 이를 실패시킬 수 있습니다.

전송 수준 오류는 표준 HTTP 매핑을 사용합니다. `BadRequest`와 `BadArgument`(400), `Unauthorized`(401), `Forbidden`(403), `NotFound`(404), `TooManyRequests`(429, `Retry-After` 헤더 포함), `InternalServerError`(500), `NotImplemented`(501), `ServiceUnavailable`(503)입니다.

## 잘못된 문서 정정하기

- **검증으로부터 72시간 이내** — 공급자가 취소하거나, 매수인이 거부를 요청하고 공급자가 취소할 수 있습니다. 72시간 이후에는 둘 다 불가능합니다.
- **결함 있는 전자송장 발행으로부터 3일 이내** — 소득세법 1967(Income Tax Act 1967) 제82C(8)조가 **대체 전자송장(substitute e-Invoice)**을 허용합니다.
- **그 이후** — 필드 21에서 원본을 참조하는 대변·차변·환불 통지 전자송장을 발행합니다.

## 흔한 실수

- **옛 SSM 등록번호를 보내는 것.** 필드 4는 SSM 등록자에게 신규 12자리 BRN을 요구합니다.
- **필드 22를 소급 기재하는 것.** LHDN은 현재 일시를 요구하며, 소급 기재된 문서는 실패합니다.
- **외국 공급자에 대해 MSIC를 공란으로 두는 것.** 빈 값이 아니라 00000을 사용하십시오.
- **세금 유형 06을 면제의 의미로 사용하는 것.** 06은 *해당 없음*이며, 면제는 E이고, 이는 필드 34와 35를 필수 상태로 만듭니다.
- **실패한 제출을 변경 없이 재시도하는 것.** 중복 검증기가 이를 받아들이지 않고 DS302를 발생시킵니다.
- **Submitted 응답을 성공으로 취급하는 것.** *Valid*만이 성공입니다.

## 다음 단계

코드를 작성하기 전에 필드 3, 4, 5, 8, 10, 11, 12를 고객 및 공급자 마스터 데이터에 대응시키십시오 — 그 일곱 개가 실제로 정리 시간이 소요되는 곳입니다. 그런 다음 전송 경로를 결정하십시오. 포털은 이 필드들을 양식으로 채우지만 API는 이를 귀하의 몫으로 만들기 때문입니다.
