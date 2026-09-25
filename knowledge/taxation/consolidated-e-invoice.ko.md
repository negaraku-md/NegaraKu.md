---
topicId: MY-TAX-0005
title: "통합 전자송장과 이를 사용할 수 없는 업종"
seoTitle: "말레이시아 통합 전자송장: 규칙과 제외"
slug: "consolidated-e-invoice"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "월별 통합 전자송장(e-Invoice)이 어떻게 작동하는지, RM10,000 단일 거래 기준점, 그리고 통합이 금지된 아홉 개 업종과 활동."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "매수인이 전자송장을 요청하지 않는 경우, 공급자는 일반 영수증을 발행하고 그 영수증들을 하나의 통합 전자송장으로 집계하여 월말 후 7역일 이내에 LHDN에 제출합니다. 통합은 자동차 판매, 항공권, 건설 계약, 대리인 지급, 전기, 통신을 포함한 아홉 개 열거 활동, 그리고 2026년 1월 1일부터 RM10,000을 초과하는 단일 거래에 대해 금지됩니다."
keyTakeaways:
  - "Deadline is 7 calendar days after month end — a hard monthly clock, not an annual one"
  - "Any single transaction above RM10,000 must be a transactional e-Invoice, from 1 January 2026"
  - "Nine industries and activities can never consolidate, listed in Table 3.6"
  - "Buyer must be given a cut-off — a request made within the transaction month must be honoured"
  - "Buyer's name is General Public and buyer's TIN is EI00000000010"
  - "Consolidated e-Invoices are not shared with buyers and cannot be rejected by them"
  - "Submission limits: 100 documents and 5MB per submission, 300KB per document"
appliesTo: "Retailers, F&B operators, service providers billing consumers, and anyone issuing high volumes of low-value receipts."

faq:
  - q: "When exactly is a consolidated e-Invoice due?"
    a: "Within seven calendar days after the end of the month, under section 3.6.2 of the e-Invoice Specific Guideline. It aggregates receipts issued in the previous month. For businesses that bill by statement rather than receipt, section 4.3.3 applies the same seven-day rule to the end of the billing month. There is no quarterly or annual alternative."
  - q: "What is the RM10,000 rule?"
    a: "Item 7 of Table 3.6 in the e-Invoice Specific Guideline provides that, across all industries, any single transaction with a value exceeding RM10,000 must have its own transactional e-Invoice and cannot be swept into a consolidated e-Invoice. LHDN states this took effect from 1 January 2026. Transactions at or below RM10,000 can still be consolidated if the buyer does not request otherwise."
  - q: "Can a customer demand an individual e-Invoice after I have given them a receipt?"
    a: "Yes, if they ask within the month of the transaction. Section 3.6.8 sets that as the cut-off, precisely so the supplier can close off the month's consolidation. Buyers are encouraged to ask promptly. A supplier inside its interim relaxation period may decline the request entirely under section 16.2(d)."
  - q: "Which industries can never issue a consolidated e-Invoice?"
    a: "Table 3.6 lists motor vehicle sales, flight tickets and private charter, construction contracts as defined in the Income Tax (Construction Contracts) Regulations 2007, pay-outs to betting and gaming winners, payments to agents, dealers and distributors, electricity distribution and supply, and telecommunications postpaid plans, internet subscriptions and electronic device sales. Luxury goods and jewellery is listed but on hold pending details from LHDN."
  - q: "What do I put in the buyer fields on a consolidated e-Invoice?"
    a: "Appendix 2 of the e-Invoice Specific Guideline requires the buyer's name to be General Public and the buyer's TIN to be EI00000000010. The buyer's registration or identification number, address, contact number and SST registration number are all entered as NA. The description field must carry the receipt reference numbers."
  - q: "Do I have to send the consolidated e-Invoice to my customers?"
    a: "No. Under sections 3.6.10 and 4.3.5, LHDN notifies only the supplier, there is no buyer rejection route, and the validated consolidated e-Invoice serves as the supplier's proof of income. It is not shared with buyers."

verificationNeeded:
  - "The activation date and scope for the luxury goods and jewellery category in Table 3.6 — LHDN states details will be released in due course and consolidation remains allowed until further notice"
  - "Whether the casino and gaming-machine carve-out from the betting pay-out rule has an end date — LHDN states until further notice"

lang: "ko"
sourceContentHash: "1b4f5e59594a8f17"
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
  - title: "e-Invoice Specific Guideline (Version 4.8)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "e-Invoice Guideline (Version 4.7)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "Finance (No. 2) Act 2023 (Act 851) — section 82C(7)"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Government of Malaysia"
    date: "2023-12-29"
  - title: "MyInvois SDK — document validation rules"
    url: "https://sdk.myinvois.hasil.gov.my/document-validation-rules/"
    publisher: "LHDN"

entity: "Consolidated e-Invoice"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
  - { rel: "explained-in", to: "myinvois-phases" }
related: ["e-invoicing", "myinvois-phases", "self-billed-e-invoice", "e-invoice-data-fields", "myinvois-integration"]
keywords: ["consolidated e-Invoice", "e-invois disatukan", "RM10000 e-Invoice rule", "consolidated e-Invoice deadline", "General Public EI00000000010", "industries cannot consolidate e-Invoice"]
---

통합은 마막(mamak), 미니마트, 진료소가 전자송장 발행을 감당할 수 있게 만드는 완화 조치입니다. 또한 RM10,000 기준점, 업종, 또는 월 29일에 정식 송장을 요청하는 단 한 명의 고객에 의해 발밑에서 가장 쉽게 철회될 수 있는 완화 조치이기도 합니다.

방식은 간단합니다. 매수인에게 전자송장이 필요한지 물으십시오. 필요 없다고 하면, 오늘 하는 것과 똑같이 일반 영수증을 건네십시오 — 그 영수증은 어디에도 제출되지 않습니다. 그런 다음 **월말 후 7역일 이내에**, 지난달의 영수증을 하나의 통합 전자송장으로 모아 소득 증빙으로 검증받도록 제출하십시오.

근거는 소득세법 1967(Income Tax Act 1967) 제82C(7)조로, 국세청장이 어떤 사람이 거래를 통합 거래 송장으로 통합하여 지정된 시간 내에 전송하도록 결정할 수 있게 합니다. 지정된 시간은 전자송장 세부 지침(e-Invoice Specific Guideline) 제3.6.2절에 있습니다.

## 통합 전자송장에 무엇이 들어가는가?

세부 지침 부록 2가 매수인 블록을 정합니다.

| 필드 | 값 |
| --- | --- |
| 매수인 이름 | **General Public** |
| 매수인 TIN | **EI00000000010** |
| 매수인 등록/신원/여권 번호 | NA |
| 매수인 주소 | NA |
| 매수인 연락처 | NA |
| 매수인 SST 등록번호 | NA |

실질적인 요건이 있는 것은 설명 필드입니다. LHDN은 세 가지 방법, 또는 그 조합을 허용합니다.

1. 각 영수증을 **별도의 항목 줄**로 요약
2. **연속된 영수증 번호 구간**을 하나의 항목 줄로 하되, 번호 연쇄가 끊길 때마다 새로운 항목 줄을 시작
3. 각 **지점이나 위치**가 방법 1이나 2를 사용하여 자체 통합 전자송장을 제출

어느 것을 택하든, 각 거래의 영수증 참조 번호가 설명 필드에 나타나야 합니다. 규제 업종 — 금융기관, 결제 시스템 및 유사 법인 — 은 제4.3.7절에 따라 명세서나 청구서 참조 번호 공개가 면제됩니다.

## 시스템 한도는 무엇인가?

제3.6.4절은 MyInvois 성능을 보호하기 위해 세 가지를 정합니다.

- 제출당 최대 **5MB**
- 제출당 최대 **100건의 전자송장**
- 전자송장당 최대 **300KB**

바쁜 달에는 이를 초과하며, LHDN은 영수증을 여러 통합 전자송장으로 분할하는 것을 명시적으로 허용합니다. 영수증 40,000건의 소매업체가 하나의 거대한 문서를 제출하지는 않습니다.

## 어떤 활동을 결코 통합할 수 없는가?

세부 지침 표 3.6입니다. 이들 각각은 매수인의 실제 정보가 담긴 거래 전자송장을 요구합니다.

| 업종 또는 활동 | 범위 |
| --- | --- |
| **자동차** | 트레일러를 포함한 모든 자동차의 판매 |
| **항공** | 항공권 판매, 전세기 |
| **사치품과 보석** | 보류 — 세부사항 발표 예정, 추후 통지가 있을 때까지 통합 여전히 허용 |
| **건설** | 소득세(건설 계약) 규정 2007(Income Tax (Construction Contracts) Regulations 2007)에 정의된 건설 계약상의 건설 도급업자 |
| **면허 베팅 및 게이밍** | 당첨자에 대한 지급금, 다만 추후 통지가 있을 때까지 면제되는 카지노 및 게이밍 머신 지급금 제외 |
| **대리인·딜러·유통업자에 대한 지급** | 소득세법 1967 제83A(4)조에 정의된 대로 |
| **전 업종** | **RM10,000을 초과**하는 단일 거래 — **2026년 1월 1일**부터 |
| **전기 서비스 제공자** | 전기의 배전, 공급 또는 판매 — **2026년 1월 1일**부터 |
| **통신** | 후불제 요금제, 인터넷 구독, 전자기기 판매 — **2026년 1월 1일**부터 |

이 아홉 개 중 셋은 최근의 것입니다. RM10,000 규칙, 전기, 통신은 모두 2026년 1월 1일에 시행되었으며, 온라인에 여전히 상위 노출되는 상당량의 자료가 이보다 앞섭니다.

**대부분의 안내서는 RM10,000 규칙을 업종 규칙으로 설명합니다.** 그렇지 않습니다. 표 3.6은 이를 *전 업종* 아래에 열거합니다. 철물점의 단일 RM12,000 판매는, 그달의 다른 모든 판매를 통합할 수 있더라도, 거래 전자송장이 필요합니다. LHDN 자체의 예시 24가 바로 이 사례를 계산합니다.

## 정보를 주지 않으려는 개인 매수인은 어떠한가?

제3.7.3절은 이 실무적 문제를 인정하고 제3.5.4절의 완화로 연결합니다. 말레이시아 개인은 TIN, **또는** MyKad나 MyTentera 번호, **또는** 둘 다를 제시할 수 있습니다. 비말레이시아 개인은 TIN, 또는 TIN과 여권·MyPR·MyKAS 번호 둘 다를 제시할 수 있으며 — TIN이 전혀 없는 경우 공급자는 일반 TIN과 여권 번호를 함께 사용합니다.

이것으로 차를 사는 방문 고객에게 준수하는 거래 전자송장을 발행하기에 충분합니다.

## 매수인의 요청은 월별 기준점과 어떻게 상호작용하는가?

제3.6.8절은 경쟁사가 대개 건너뛰는 답을 줍니다. 이미 영수증을 받은 매수인은 다시 와서 전자송장을 요청할 수 있으나, 오직 **거래가 있는 달 이내에**만입니다. 그 경계는 공급자가 통합을 마감할 수 있도록 존재합니다. 1월 영수증에 대한 3월의 요청은 기한이 지난 것입니다.

여전히 임시 완화 기간 내에 있는 공급자는 통합하고 있는 한 제16.2(d)절에 따라 요청을 전면 거부할 수 있습니다. 4단계 납세자의 경우 그 완화는 2027년 12월 31일까지 지속됩니다.

## 작업 흐름에서 무엇이 다른가?

두 가지이며, 둘 다 제3.6.10절에 있습니다.

- LHDN은 **공급자에게만** 통지합니다. 매수인 통지가 없으며, 따라서 **매수인 거부 요청도 없습니다** — 72시간 거부 경로는 통합 문서에는 존재하지 않습니다.
- 검증된 통합 전자송장은 공급자의 소득 증빙이며 **매수인과 공유되지 않습니다**.

검증 후 72시간 이내의 공급자에 의한 취소는 여전히 적용됩니다. 그 이후의 조정은 대변·차변·환불 통지 전자송장을 통합니다.

## 흔한 실수

- **RM10,000을 초과하는 거래를 통합하는 것.** 2026년 1월 1일부터 이는 몇몇 열거 업종이 아니라 전 업종에 적용됩니다.
- **7일 기간을 놓치는 것.** 7*역일*이며, 회계 마감이 아니라 월말부터 진행됩니다.
- **임시 완화 기간을 영구적인 것으로 취급하는 것.** 1~3단계는 각각 2025년 1월 31일, 2025년 6월 30일, 2025년 12월 31일에 포괄적 통합 완화를 잃었습니다.
- **완화 이후 설명 필드에 자유 텍스트를 넣는 것.** 제16.2(c)절은 완화 기간 중 어떤 텍스트든 허용했으나, 그 밖에는 영수증 참조 번호가 필수입니다.
- **자체 발행 문서를 통합하는 것.** 제3.6.5절의 네 가지 좁은 경우만 자격이 됩니다.
- **건설 도급업자가 소규모 작업을 통합할 수 있다고 가정하는 것.** 표 3.6은 송장 금액이 아니라 2007년 규정의 계약 정의를 기준으로 합니다.
- **소매 한 달 전체에 대해 하나의 제출을 하는 것.** 100건 문서와 5MB 상한이 이를 거부합니다.

## 다음 단계

지난 한 달치 영수증을 두 가지 필터로 걸러보십시오. RM10,000을 초과하는 것, 그리고 표 3.6 목록에 있는 것입니다. 둘을 모두 통과하는 것이 통합 대상이며 — 그 규모가 무료 포털이 감당할 수 있는지를 알려줍니다. 대리인, 개인, 또는 해외 공급자에게도 대가를 지급한다면, 자체 발행 규칙에는 자체의, 훨씬 더 좁은 통합 예외가 있습니다.
