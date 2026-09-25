---
topicId: MY-TAX-0003
title: "말레이시아의 전자송장: MyInvois를 어디서 시작할까"
seoTitle: "말레이시아 전자송장: MyInvois 출발점"
slug: "e-invoicing"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "말레이시아 전자송장(e-Invoice) 의무에 대한 안내 페이지 — MyInvois 검증이 어떻게 작동하는지, 언제 귀사가 적용 대상이 되었는지, 그리고 어느 상세 안내서가 귀하의 질문에 답하는지."

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "전자송장은 무료 MyInvois 포털이나 API 연동 시스템을 통해 송장 데이터를 검증을 위해 LHDN의 MyInvois 시스템에 제출하도록 요구합니다. 검증된 문서는 고유 식별번호(Unique Identifier Number)와 QR 코드를 받습니다. 이 의무는 연간 매출로 단계화되며, 마지막 단계는 2026년 1월 1일부터 매출 RM500만까지의 사업체에 미치고 RM100만 미만의 사업체는 면제됩니다. 각 단계에는 자체의 임시 완화 기간이 있습니다."
keyTakeaways:
  - "Validation happens through MyInvois before the document functions as an invoice for income tax purposes"
  - "Four phases, no fifth — the last began 1 January 2026 for turnover up to RM5 million"
  - "Businesses with annual turnover below RM1,000,000 are exempt"
  - "Your phase is fixed by FY2022 or YA2022 figures and does not move afterwards"
  - "An LHDN-validated e-Invoice does not automatically satisfy the SST tax invoice rules — that is a separate document requirement"
appliesTo: "Business owners, finance teams and system administrators preparing for or operating under the e-Invoice mandate."

verificationNeeded: []

lang: "ko"
sourceContentHash: "46533f76e2996181"
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
  - title: "IRBM e-Invoice Guideline"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "IRBM e-Invoice Specific Guideline"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MyInvois Portal"
    url: "https://myinvois.hasil.gov.my/"
    publisher: "LHDN"

entity: "e-Invoicing and MyInvois"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "explained-in", to: "myinvois-phases" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "consolidated-e-invoice" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
  - { rel: "related-to", to: "e-invoice-vs-tax-invoice" }
related: ["myinvois-phases", "myinvois-integration", "e-invoice-data-fields", "consolidated-e-invoice", "self-billed-e-invoice", "e-invoice-vs-tax-invoice", "e-invoice-accounting-records"]
keywords: ["e-Invoice Malaysia", "MyInvois", "e-invois LHDN", "e-invoicing phases Malaysia", "MyInvois validation"]
---

예전에는 송장이 발행했기 때문에 유효했습니다. 전자송장 의무 하에서는 LHDN이 그렇다고 해야 유효합니다 — 문서가 소득세 목적으로 제 역할을 하려면 MyInvois에 제출되어 검증되어야 합니다.

그 단 하나의 변화가 이후의 모든 질문을 낳으며, 대부분은 전용 답이 있습니다.

## 검증이 작동하는 방식, 여섯 단계로

1. 공급자가 거래 데이터를 무료 포털에 직접 입력하거나 API 연동 시스템을 통해 자동으로 MyInvois에 제출합니다.
2. LHDN이 거의 실시간으로 구조와 필수 필드를 검증합니다.
3. 성공 시 **고유 식별번호(Unique Identifier Number)**와 QR 코드가 발급됩니다.
4. 공급자가 검증된 문서를 매수인과 공유합니다.
5. 매수인이 QR 코드를 LHDN 기록에 대조하여 확인할 수 있습니다.
6. 거부와 취소는 허용된 기간 내에 처리해야 합니다.

## 어느 안내서가 필요한가

| 질문이 다음이라면 | 읽으십시오 |
| --- | --- |
| 이것이 언제 내 사업에 적용되는가? | [MyInvois 단계, 기준, 완화 날짜](/en/taxation/myinvois-phases) |
| 포털, API, 또는 미들웨어 제공자? | [MyInvois 연동](/en/taxation/myinvois-integration) |
| 실제로 어떤 데이터를 보내야 하는가? | [전자송장 데이터 필드 참조](/en/taxation/e-invoice-data-fields) |
| 각각 발행하는 대신 소매 판매를 묶을 수 있는가? | [통합 전자송장](/en/taxation/consolidated-e-invoice) |
| 내 공급자가 해외에 있거나 개인이다 | [자체 발행 전자송장](/en/taxation/self-billed-e-invoice) |
| 이것이 내 SST 세금 송장을 대체하는가? | [전자송장 대 SST 세금 송장](/en/taxation/e-invoice-vs-tax-invoice) |
| 얼마나 오래 보관해야 하는가? | [전자송장과 회계 기록](/en/accounting/e-invoice-accounting-records) |

## 사람들이 잘못 아는 네 가지

**5단계는 없습니다.** 도입은 연간 매출로 네 단계에 걸쳐 진행되었고, 2026년 1월 1일부터 RM500만까지의 집단으로 종료되었습니다. 연간 매출 **RM1,000,000** 미만의 사업체는 외국 외교 사무소와 사업을 영위하지 않는 개인과 함께 면제됩니다. 이는 *신규 개시* 사업체에 적용되는 별도의 **2026년 7월 1일** 시작과 모순되지 않습니다 — 2023년부터 2025년 사이에 매출 RM100만 이상으로 시작한 사업체는 그 날짜에 편입됩니다. 이는 FY2022 기준이 없는 진입자를 위한 규칙이지, 다섯 번째 매출 단계가 아닙니다.

**귀사의 단계는 고정되어 있으며 유동적이지 않습니다.** 이는 FY2022 감사 재무제표나 YA2022 신고서로 결정되며, 회계연도 종료가 바뀐 경우 안분되고, 이후 이동하지 않습니다. 나중에 기준을 넘어 성장한다고 해서 더 이른 단계로 이동하지 않고, 축소된다고 해서 벗어나지도 않습니다.

**완화 기간은 단계 날짜와 같지 않습니다.** 각 단계에는 LHDN이 위반에 대해 조치하지 않는 임시 기간이 있었으며, 4단계 완화는 앞선 것들보다 상당히 더 길게 지속됩니다. 의무 날짜가 집행 날짜라고 가정하지 말고 단계 안내서를 읽으십시오.

**검증된 전자송장이 자동으로 SST 세금 송장이 되는 것은 아닙니다.** 두 제도는 별개의 문서 요건을 가지며, 법정 입장은 전자송장의 항목이 다른 성문법의 송장 요건과 일치하지 않는 경우 그 전자송장은 소득세법 목적으로만 유효하다는 것입니다. 등록 SST 등록자는 둘 다 충족하는 문서가 필요합니다.

## 흔한 실수

- 의무 날짜를 기다렸다가 테스트를 시작하는 것. TIN 검증과 연동 실패는 실제 거래량 하에서만 드러납니다.
- 많은 B2C 거래가 통합될 수 있는데 — 금지 활동을 조건으로 — 모든 고객에게 품목별 전자송장이 필요하다고 가정하는 것.
- 외국 공급자와, 스스로 아무것도 발행하지 않는 개인에 대한 지급의 자체 발행 의무를 간과하는 것.
- 이를 IT 프로젝트로 취급하는 것. 가동 시점의 대부분의 실패는 연동 버그가 아니라 지저분한 고객·공급자 마스터 데이터입니다.
- MyInvois가 귀하의 보관소라고 가정하는 것. LHDN은 검증된 문서에 대한 보관 보장을 공표하지 않습니다. 보관 의무는 여전히 귀하의 것입니다.

## 다음 단계

아직 적용 대상 여부나 시기를 모른다면, 단계 안내서로 시작하십시오 — 매출 구간, 면제 기준, 신규 사업 규칙, 그리고 모든 완화 종료일을 담고 있습니다. 이미 적용 대상이고 제출 방법을 고르고 있다면, 연동 안내서가 거래량별로 포털, 직접 API, 미들웨어 경로를 비교합니다.
