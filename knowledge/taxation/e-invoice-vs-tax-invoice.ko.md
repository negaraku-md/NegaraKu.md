---
topicId: MY-TAX-0006
title: "전자송장 대 SST 세금 송장: 두 제도, 두 문서"
seoTitle: "말레이시아 전자송장 대 세금 송장: LHDN 대 RMCD"
slug: "e-invoice-vs-tax-invoice"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "LHDN이 검증한 전자송장(e-Invoice)이 자동으로 판매세법 2018이나 서비스세법 2018을 충족하지 않는 이유, 그리고 하나의 문서가 두 역할을 모두 하려면 무엇이 담겨야 하는지."

tier: "3"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "전자송장은 LHDN이 관장하는 소득세법 1967(Income Tax Act 1967) 제82C조에 따른 소득세 문서입니다. SST 송장은 RMCD가 관장하는 판매세법 2018(Sales Tax Act 2018)과 서비스세법 2018(Service Tax Act 2018)이 요구하는 별개의 문서입니다. 하나의 문서가 둘 다에 소용될 수 있으나, 각 제도가 요구하는 모든 항목을 담은 경우에만 그렇습니다 — 제82C(4)조는 항목이 충돌하는 경우 전자송장은 소득세 목적으로만 유효하다고 규정합니다."
keyTakeaways:
  - "Two statutes, two regulators — LHDN under ITA 1967, RMCD under the 2018 Tax Acts"
  - "s.82C(4) ITA 1967 lets one document do both jobs, but only where the particulars agree"
  - "Where they conflict, the e-Invoice is enforceable for income tax purposes only"
  - "Service tax particulars sit in reg. 10 of the Service Tax Regulations 2018"
  - "Sales tax particulars sit in reg. 7 of the Sales Tax Regulations 2018"
  - "MyInvois data is shared with RMCD under s.138(4)(aa) of the ITA 1967"
appliesTo: "SST-registered businesses that are also in scope for e-Invoicing, and anyone designing an invoice template that has to satisfy both regulators."

verificationNeeded:
  - "Whether RMCD has issued a dedicated guide reconciling the e-Invoice visual representation with the SST invoice particulars — none was located on mysst.customs.gov.my"

lang: "ko"
sourceContentHash: "cf809540c51ed69e"
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
  - title: "Finance (No. 2) Act 2023 (Act 851) — section 82C"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Government of Malaysia"
    date: "2023-12-29"
  - title: "Service Tax Regulations 2018 — regulation 10"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Service-Tax-Regulations-2018.pdf"
    publisher: "RMCD"
  - title: "Sales Tax Regulations 2018 — regulation 7"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Sales-Tax-Regulations-2018.pdf"
    publisher: "RMCD"
  - title: "e-Invoice Guideline (Version 4.7)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MySST — Issuing Invoices"
    url: "https://mysst.customs.gov.my/issuing-invoices/"
    publisher: "RMCD"

entity: "e-Invoice compared with the SST tax invoice"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "compares-with", to: "sst-explained" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "governs", to: "service-tax-act-2018" }
  - { rel: "governs", to: "sales-tax-act-2018" }
related: ["e-invoicing", "sst-explained", "myinvois-phases", "e-invoice-data-fields", "consolidated-e-invoice"]
keywords: ["e-Invoice vs tax invoice", "SST invoice requirements", "Service Tax Regulations 2018 regulation 10", "sales tax invoice particulars", "LHDN RMCD invoice", "invois cukai SST"]
---

MyInvois를 통해 송장을 검증한다고 해서 그것이 SST 송장이 되는 것은 아닙니다. 그 한 문장이 전자송장 도입에서 다른 어떤 지점보다 SST 등록 사업체에게 더 많은 문제를 안깁니다. 두 규제기관이 같은 종이 한 장에서 서로 다른 두 가지를 원하기 때문입니다.

## 한눈에 보는 두 제도

| | 전자송장 | SST 송장 |
| --- | --- | --- |
| 법률 | 소득세법 1967(Income Tax Act 1967) **제82C조** | **판매세법 2018(Sales Tax Act 2018)** / **서비스세법 2018(Service Tax Act 2018)** 제21조 |
| 규제기관 | **LHDN** | **RMCD** |
| 항목을 정하는 근거 | ITA 1967 제134A조에 따른 전자송장 지침 | 판매세 규정 2018 **제7규칙** / 서비스세 규정 2018 **제10규칙** |
| 발행해야 하는 자 | 매출 단계별로 적용 대상이 되는 납세자 | **등록** 제조업자와 등록자 |
| 검증 | LHDN에 전송되어 검증됨 | 없음 — 제출도, 참조 번호도 없음 |
| 목적 | 소득세를 위한 소득과 비용의 증빙 | SST 회계를 위한 부과 세금의 증거 |

어느 것도 다른 것을 대체하지 않습니다. 매출 RM100만 미만의 SST 등록 회사는 전자송장이 면제되며 여전히 SST 송장을 발행합니다. 대형 비등록 회사는 그 반대입니다.

## 실제로 이를 규율하는 규정

금융(제2호)법 2023(Finance (No. 2) Act 2023)이 삽입한 소득세법 1967 제82C(4)조:

> 어떤 사람이 다른 성문법에 따라 송장을 발행해야 하는 경우, 요구될 수 있는 그 밖의 항목을 포함한 전자송장은 그 법에 따라 발행된 송장으로 해석된다 — **다만 전자송장의 항목이 그 법에 따른 송장 발행 요건과 일치하지 않는 경우, 그 전자송장은 이 법의 목적으로만 유효하고 집행 가능하다.**

단서를 두 번 읽으십시오. 하나의 문서가 두 제도를 모두 충족할 수 있으나, 두 제도가 요구하는 모든 것을 담은 경우에만 그렇습니다. RMCD 측에서 부족하면 둘 모두에 결함 있는 문서를 발행한 것이 아니라 — 완벽하게 유효한 소득세 문서와 **SST 송장은 전혀 없는** 상태가 됩니다.

전자송장 지침 제2.6.3절과 제2.6.4절은 더 평이한 말로 같은 것을 말합니다. 납세자는 어떤 시각적 표현 형식이든 채택할 수 있으며, 판매세법 2018과 서비스세법 2018 같은 법에 따라 요구되는 항목을 포함할 것을 *권고*받습니다. 시각적 표현이 서비스세 규정 2018의 항목을 담은 경우, 서비스세 목적으로 사용될 수 있습니다.

## RMCD가 요구하나 전자송장 필드 목록이 강제하지 않는 것

**서비스세 규정 2018 제10규칙** — 송장 일련번호; 송장 날짜; 등록자의 이름·주소·식별번호; 과세 용역을 식별하기에 충분한 설명; 할인; 서비스세 제외 합계, 세율, 그리고 **별도 금액으로 표시된** 총 서비스세; 서비스세 포함 합계; 그리고 외화 금액을 당시 매도 환율로 링깃으로도 표시.

**판매세 규정 2018 제7규칙**은 여러 항목 중에서도 **과세 재화가 판매되는 자의 이름과 주소**, 그리고 설명별로 유형, 수량, 판매세 제외 금액을 추가합니다.

두 가지 공백이 직접 따라옵니다.

- **매수인의 이름과 주소.** LHDN의 55개 필드는 이를 포함하지만, 통합 전자송장은 매수인을 *General Public*로, 주소를 NA로 설정합니다. 등록 제조업자는 그런 식으로 과세 판매를 기록하면서 제7(d)규칙을 충족할 수 없습니다.
- **별도 금액으로 표시된 세금.** 전자송장은 세금 유형, 세율, 금액을 데이터로 담습니다. 귀사의 *시각적 표현*이 서비스세를 별도 줄로 인쇄하는지는 서식 결정입니다 — 그리고 제10(f)규칙이 이를 법적 문제로 만듭니다.

언어도 LHDN이 아니라 RMCD의 규칙입니다. SST 송장은 말레이어(Bahasa Melayu)나 영어여야 합니다.

## RMCD가 내 전자송장 데이터를 보는가?

그렇습니다. 소득세법 1967 제138(4)(aa)조는 LHDN이 MyInvois 데이터를 RMCD와 공유하도록 허용하며, 전자송장 지침 제2.6.1절은 필드 목록이 ITA 1967, 라부안 사업활동세법 1990(Labuan Business Activity Tax Act 1990), 석유(소득세)법 1967(Petroleum (Income Tax) Act 1967)과 함께 판매세법 2018과 서비스세법 2018에 비추어 설계되었음을 확인합니다. 귀하의 두 신고는 이제 서로에게 보입니다.

## 흔한 실수

- **가동 시점에 SST 송장 서식을 폐기하는 것.** 제82C조의 어느 것도 두 2018년 법 중 어느 것의 제21조도 폐지하지 않습니다.
- **검증이 누락된 항목을 치유한다고 가정하는 것.** MyInvois는 LHDN의 스키마에 대해 검증합니다. 제7규칙이나 제10규칙에 대해서는 관여하지 않습니다.
- **지정 매수인에 대한 과세 판매에 통합 전자송장을 사용하는 것.** 제7규칙이 요구하는 매수인 항목을 담을 수 없습니다.
- **인쇄된 문서에서 SST 등록번호를 누락하는 것.** 이는 등록자에게 조건부 필수 전자송장 필드이자 제10규칙 항목입니다.
- **SST-02 신고와 전자송장을 하나의 작업 흐름으로 취급하는 것.** 다른 규제기관, 다른 기간, 다른 벌칙입니다.

## 다음 단계

두 항목 목록을 XML이 아니라 실제 인쇄된 송장에 나란히 놓고 대조하십시오. XML은 LHDN을 충족하고, 시각적 표현이 RMCD를 충족해야 하는 것입니다. B2C 영수증도 통합한다면, 그 거래 중 지정 매수인이 필요한 과세 공급이 있는지 별도로 확인하십시오.
