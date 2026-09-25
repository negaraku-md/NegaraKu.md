---
topicId: MY-TAX-0010
title: "MyInvois 시행 단계, 기준, 완화 날짜"
seoTitle: "MyInvois 단계와 날짜: LHDN e-Invoice 일정"
slug: "myinvois-phases"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "현행 e-Invoice 지침 기준의 모든 LHDN e-Invoice 단계 날짜, 매출 구간, 면제 기준, 잠정 완화 종료일을 정리합니다."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "말레이시아의 e-Invoice 의무는 FY2022 매출을 기준으로 네 단계로 진행됩니다: RM100 million 초과는 2024년 8월 1일, RM25 million 초과 RM100 million 이하는 2025년 1월 1일, RM5 million 초과 RM25 million 이하는 2025년 7월 1일, RM5 million 이하는 2026년 1월 1일. 연간 매출이 RM1 million 미만인 납세자는 면제됩니다. 2023년 이후 영업을 시작한 사업체는 2026년 7월 1일에 시작합니다."
keyTakeaways:
  - "Four phases only — the phase you fall into is fixed by your FY2022 turnover and never changes"
  - "Below RM1,000,000 annual turnover or revenue is a full exemption, not a deferral"
  - "New businesses commencing 2023–2025 with turnover of at least RM1 million start 1 July 2026"
  - "Phase 4 taxpayers have an interim relaxation period running all the way to 31 December 2027"
  - "During relaxation you may consolidate everything and refuse individual e-Invoice requests"
  - "An e-Invoice SVDP is open from 7 July 2026 to 31 December 2027 to regularise missed submissions"
  - "The duty to issue sits in s.82C of the Income Tax Act 1967, not in the Guideline"
appliesTo: "Any Malaysian business, LLP, partnership or sole proprietor working out when e-Invoicing bites, and implementers scheduling a rollout."

verificationNeeded:
  - "Whether the luxury goods and jewellery category in Table 3.6 of the e-Invoice Specific Guideline has been activated — LHDN still states details will be released in due course"
  - "The exact ringgit penalty applied in practice under s.120(1)(d) ITA 1967 for a failed e-Invoice — the range is statutory but LHDN publishes no assessment concession scale"

obligations:
  - what: "Issue and transmit e-Invoices for validation — taxpayers with FY2022 turnover above RM100 million"
    trigger: "ongoing"
    due: "from 1 August 2024"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "Issue and transmit e-Invoices for validation — FY2022 turnover above RM25 million and up to RM100 million"
    trigger: "ongoing"
    due: "from 1 January 2025"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "Issue and transmit e-Invoices for validation — FY2022 turnover above RM5 million and up to RM25 million"
    trigger: "ongoing"
    due: "from 1 July 2025"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "Issue and transmit e-Invoices for validation — FY2022 turnover up to RM5 million"
    trigger: "ongoing"
    due: "from 1 January 2026"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "Issue and transmit e-Invoices for validation — businesses commencing operations from 2023 onwards"
    trigger: "ongoing"
    due: "from 1 July 2026, or on commencement for businesses starting in 2026 or later"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "Submit a consolidated e-Invoice for transactions where the buyer did not require one"
    trigger: "ongoing"
    withinDays: 7
    due: "within 7 calendar days after the end of the month"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C(7)"
    consequence: "Transactions unsupported by a validated document for tax purposes"
  - what: "Comply with the e-Invoice mandate unless the business is exempt by size"
    trigger: "threshold"
    criteria:
      - metric: "turnover"
        op: "lt"
        value: 1000000
    exemption: true
    due: "Full exemption if annual turnover or revenue is below RM1,000,000; otherwise mandatory, as all phases are now in force"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"

lang: "ko"
masterLanguage: "en"
translationStatus: "pending"

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
  - title: "e-Invoice Guideline (Version 4.7)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "e-Invoice Specific Guideline (Version 4.8)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "Garis Masa Pelaksanaan e-Invois"
    url: "https://www.hasil.gov.my/e-invois/garis-masa-pelaksanaan-e-invois/"
    publisher: "LHDN"
    date: "2025-12-07"
  - title: "Finance (No. 2) Act 2023 (Act 851) — new sections 82B and 82C"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Government of Malaysia"
    date: "2023-12-29"

entity: "MyInvois e-Invoice implementation timeline"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "explained-in", to: "e-invoice-data-fields" }
  - { rel: "related-to", to: "consolidated-e-invoice" }
related: ["e-invoicing", "consolidated-e-invoice", "self-billed-e-invoice", "myinvois-integration", "e-invoice-data-fields"]
keywords: ["MyInvois phases", "e-Invoice implementation date Malaysia", "e-Invoice exemption RM1 million", "e-Invoice relaxation period", "LHDN e-Invoice timeline", "tarikh pelaksanaan e-invois"]
---

두 숫자가 모든 것을 결정합니다: 귀하의 단계를 영구적으로 고정하는 FY2022 매출, 그리고 그
미만이면 제도에서 완전히 벗어나는 RM1,000,000. 이 페이지의 나머지는 모두 세부 사항입니다.

이 페이지는 날짜가 한 번 이상 바뀌었기 때문에 데이터로 유지됩니다. 아래 수치는 둘 다 2026년
7월 7일에 공표된 **e-Invoice 지침 버전 4.7**과 **e-Invoice 개별 지침 버전 4.8**에서 읽어낸
것입니다.

## 의무 단계 날짜는 어떻게 됩니까?

| 단계 | 대상 납세자 | 의무 시작 |
| --- | --- | --- |
| 1 | 연간 매출 또는 수익 **RM100 million 초과** | **2024년 8월 1일** |
| 2 | **RM25 million 초과 RM100 million 이하** | **2025년 1월 1일** |
| 3 | **RM5 million 초과 RM25 million 이하** | **2025년 7월 1일** |
| 4 | **RM5 million 이하** | **2026년 1월 1일** |

5단계는 없습니다. RM150,000–RM500,000 구간에 대한 5단계가 이전 지침 버전에 나타났으나 버전
4.7에서 사라졌습니다.

## 내 단계는 어떻게 정해집니까?

| 상황 | 기준 |
| --- | --- |
| 감사받은 재무제표가 있는 경우 | **2022 회계연도** 포괄손익계산서의 매출 또는 수익 |
| 감사받은 재무제표가 없는 경우 | **YA2022** 세금 신고서에 보고된 연간 수익 |
| FY2022 결산일을 변경한 경우 | **12개월로 안분한** 매출 |

일단 고정되면 고정입니다. 지침 제1.5절은 명확합니다: 이후의 매출 변화는 귀하의 시행일을
바꾸지 않습니다. 2022년에 RM30 million을 했고 오늘 RM4 million을 하는 회사도 여전히 2단계
납세자입니다.

## 신규 사업체는 언제 시작합니까?

| 사업 개시 | e-Invoice 시행일 |
| --- | --- |
| 2023~2025, 매출 RM1,000,000 이상 | **2026년 7월 1일** |
| 2026년 이후 | **2026년 7월 1일** 또는 개시일 |
| 2026년 이후, 첫해 매출 RM1,000,000 미만 | 매출이 RM1,000,000에 도달한 해의 **다음 두 번째 해의 1월 1일** |

## 누가 면제됩니까?

지침 제1.6.1절은 자가 발행을 포함한 모든 e-Invoice 발행에서 다음을 면제합니다:

- 연간 매출 또는 수익이 **RM1,000,000 미만**인 납세자
- 외국 외교 공관
- 사업을 영위하지 않는 개인
- 법정 기관, 법정 당국, 지방자치단체 — 법정 징수, 그리고 **2025년 7월 1일 이전**에 판매된
  재화 또는 수행된 서비스에 대해
- 국제기구 — **2025년 7월 1일 이전**에 판매된 재화 또는 수행된 서비스에 대해

면제는 그룹이 아니라 사람에게 귀속됩니다. 제1.6.5절: 면제 대상자가 소유한 회사도 자체 일정에
따라 시행합니다.

별도로, 제1.6.7절은 특정 소득 유형을 대상에서 제외합니다 — 고용소득, 연금, 위자료, 자캇, 특정
배당 분배, 거래소 상장 증권 및 파생상품 계약 가치, 그리고 양도인이 회사, LLP, 신탁체 또는
협동조합인 경우를 제외한 비상장 주식의 양도입니다.

## 잠정 완화 기간은 무엇을 허용합니까?

2024년 7월 26일 정부가 합의했으며, 각 단계 날짜로부터 6개월입니다 — 그보다 훨씬 연장된 4단계는
예외입니다.

| 단계 | 잠정 완화 기간 |
| --- | --- |
| 1 | 2024년 8월 1일 – **2025년 1월 31일** |
| 2 | 2025년 1월 1일 – **2025년 6월 30일** |
| 3 | 2025년 7월 1일 – **2025년 12월 31일** |
| 4 (2026년 1월 1일 및 2026년 7월 1일 시작일 모두) | **2027년 12월 31일까지** |

완화 기간 동안, 개별 지침 제16.2절은 납세자에게 다음을 허용합니다:

- 그렇지 않으면 통합이 금지되는 표 3.6의 업종을 포함하여 **모든** 활동을 통합
- **모든** 자가 발행 상황을 통합
- 영수증 또는 명세서 참조번호가 아니라 *상품 또는 서비스 설명* 필드에 임의의 텍스트를 입력
- 개별 e-Invoice에 대한 구매자 또는 공급자의 요청을 **거절**

LHDN은 또한 그 기간 동안, 납세자가 최소한 통합 문서를 제출하고 있는 한, 소득세법(Income Tax
Act 1967) s.120에 따라 기소하지 않습니다.

마지막 조건이 사람들이 놓치는 것입니다. 완화는 아무것도 제출하지 않아도 된다는 허가가
아닙니다.

## e-Invoice SVDP란 무엇입니까?

특별 자발적 신고 프로그램(Special Voluntary Disclosure Programme)이 제출을 놓쳤거나, 비준수
e-Invoice를 제출했거나, 이미 e-Invoice 준수 검토를 받고 있는 납세자를 위해 **2026년 7월
7일부터 2027년 12월 31일까지** 운영됩니다. 신고된 내용에 대해서는, 그 신고가 사기, 고의적
불이행 또는 과실을 포함하지 않는 한, 준수 검토와 벌칙이 추궁되지 않습니다.

제출은 e-Invoice 버전 **SVDP 1.2**(디지털 서명 없음) 또는 **SVDP 1.3**(디지털 서명 있음)을
사용해야 하며, 놓친 통합 e-Invoice는 하나의 만회 문서로 뭉치지 않고 월별로 제출해야 합니다.

## 법적 의무는 실제로 어디서 나오는가?

지침이 아닙니다. 재정(제2)법 2023(Finance (No. 2) Act 2023, Act 851)에 의해 삽입된
**소득세법(Income Tax Act 1967) 제82C조**가 각 거래에 대해 전자 송장을 발행하고 이를
국세청장의 검증을 위해 전송할 의무를 만듭니다. s.82C(6)은 자가 발행 송장을, s.82C(7)은 통합
송장을 다루며, s.82C(8)은 결함 있는 송장에 대해 **3일** 이내에 대체 e-Invoice를 허용합니다.
s.120(1)(d)는 s.82C(1), (6), (7)의 위반을 범죄로 규정합니다.

## 흔한 실수

- **RM1 million 수치를 유예로 취급하는 것.** 이는 제1.6.1절의 상시 면제입니다. 또한 단계도
  아닙니다 — 5단계는 없습니다.
- **현재 매출로 단계를 다시 계산하는 것.** 판정은 FY2022, 한 번뿐입니다.
- **4단계 완화를 휴일로 읽는 것.** 통합 제출이 그 완화의 조건이지 대안이 아닙니다.
- **72시간 기간이 수정 기간이라고 가정하는 것.** 이는 취소하는 것이지 수정하는 것이 아닙니다.
  72시간 후에는 대변, 차변 또는 환불 전표 e-Invoice를 발행합니다.
- **3단계 날짜가 법정 기관과 국제기구의 마감이기도 하다는 점을 놓치는 것.** 이들의 면제는
  2025년 7월 1일 이전 거래만 커버했습니다.

## 다음 단계

귀하의 거래 중 어느 것이 애초에 통합될 수 있는지 확인하십시오 — 여러 업종은 결코 통합할 수
없었고, RM10,000을 초과하는 모든 단일 거래는 2026년 1월 1일 이래 제외되었습니다. 해외
공급자로부터 구매하거나 개인에게 지급한다면, 매출 원장이 아무리 작든 자가 발행 규칙이 귀하에게
적용됩니다. 구축 담당자는 일정이 아니라 필드 목록에서 시작해야 합니다.
