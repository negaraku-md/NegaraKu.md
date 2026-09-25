---
topicId: MY-TAX-0009
title: "자가 발행 e-Invoice: 구매자가 발행해야 하는 때"
seoTitle: "말레이시아 자가 발행 e-Invoice: 규칙과 시나리오"
slug: "self-billed-e-invoice"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "구매자가 e-Invoice를 발행해야 하는 아홉 가지 상황, 해외 공급자를 어떻게 처리하는지, 그리고 공급자에게 TIN이 없을 때 어떤 일반 TIN을 사용하는지를 다룹니다."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "자가 발행 e-Invoice는 e-Invoice 개별 지침(Specific Guideline) 제8.3절에 열거된 아홉 가지 상황에서 공급자가 아니라 구매자가 발행합니다 — 대리인 및 딜러에 대한 지급, 해외 공급자로부터의 구매, 배당 분배, 전자상거래, 베팅 배당금, 대부분의 이자 지급, 보험금, 원금 상환, 그리고 사업을 영위하지 않는 개인과의 모든 거래를 포함합니다. 검증된 문서가 구매자의 비용 증빙입니다."
keyTakeaways:
  - "Nine self-billed circumstances, in s.8.3 of the e-Invoice Specific Guideline"
  - "Every purchase from a foreign supplier needs a self-billed e-Invoice — there is no de minimis"
  - "Imported goods: issue by end of the second month after customs clearance"
  - "Imported services: by end of the month after payment or invoice, whichever is earlier"
  - "Use general TIN EI00000000030 where a foreign supplier has no TIN"
  - "Interest has five exceptions where the supplier issues a normal e-Invoice instead"
  - "Self-billed e-Invoices cannot normally be consolidated — only four narrow cases can"
appliesTo: "Businesses that pay commissions, buy from overseas, pay individual landlords or contractors, distribute dividends, or pay interest to anyone other than a bank."

faq:
  - q: "Do I need a self-billed e-Invoice for a small overseas software subscription?"
    a: "Yes. Section 10.4.3 of the e-Invoice Specific Guideline requires a self-billed e-Invoice for goods sold or services rendered by any foreign supplier, with no minimum value. The foreign seller is not mandated to use MyInvois, so the Malaysian purchaser assumes the supplier role to document the expense. Where service tax on imported taxable services applies, that amount must be included in the same self-billed e-Invoice."
  - q: "What TIN do I put for a foreign supplier that does not have one?"
    a: "Use the general TIN EI00000000030, listed in Appendix 1 of the e-Invoice Specific Guideline. It covers both a non-Malaysian individual supplier who only provides a passport, MyPR or MyKAS number, and any import transaction where the foreign supplier's TIN is not available or not provided. Other missing supplier fields are filled with NA, except the MSIC code, which takes 00000."
  - q: "Do I issue a self-billed e-Invoice for interest paid to my bank?"
    a: "No. Section 8.3(g)(i) excludes businesses such as financial institutions that charge interest to the public at large — the bank issues the e-Invoice to you. The other exclusions are interest from an employee to an employer, interest from a foreign payor to a Malaysian taxpayer, interest to a Malaysian related company providing centralised treasury services, and late payment charges imposed by Malaysian taxpayers."
  - q: "Can I bundle my self-billed e-Invoices into one monthly submission?"
    a: "Only in four cases under section 3.6.5 — transactions with individuals not conducting a business, interest paid to the public at large, insurance claim or benefit payments to individuals and government bodies, and self-billed circumstances involving your own overseas branches. Everything else needs one self-billed e-Invoice per transaction, unless you are still inside your interim relaxation period."
  - q: "Do I have to send the self-billed e-Invoice to the supplier?"
    a: "Generally yes — section 8.5 obliges the buyer to share the validated self-billed e-Invoice with the supplier, and LHDN allows either the document itself or a visual representation carrying the QR code. Cross-border is the exception: section 10.4.6 says the Malaysian purchaser is not obliged to share it with the foreign seller, and LHDN sends no notification to the foreign party."
  - q: "Does a self-billed e-Invoice replace the supplier's own invoice?"
    a: "Yes, for the transactions it covers. Section 8.4 states that once a self-billed e-Invoice has been issued and validated, the other party is no longer required to issue an e-Invoice for that transaction. The validated self-billed e-Invoice is your proof of expense for tax purposes."

verificationNeeded:
  - "Whether the betting and gaming carve-out for casinos and gaming machines has been lifted — LHDN states it applies until further notice with no end date published"

lang: "ko"
sourceContentHash: "881bae66be5fb011"
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
  - title: "Finance (No. 2) Act 2023 (Act 851) — section 82C"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Government of Malaysia"
    date: "2023-12-29"
  - title: "Rujukan Pelaksanaan e-Invois — Garis Panduan"
    url: "https://www.hasil.gov.my/e-invois/rujukan-pelaksanaan-e-invois/garis-panduan/"
    publisher: "LHDN"
    date: "2026-07-11"

entity: "Self-billed e-Invoice"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "related-to", to: "consolidated-e-invoice" }
  - { rel: "requires", to: "e-invoice-data-fields" }
related: ["e-invoicing", "myinvois-phases", "consolidated-e-invoice", "e-invoice-data-fields", "e-invoice-vs-tax-invoice"]
keywords: ["self-billed e-Invoice", "self billed invoice Malaysia", "foreign supplier e-Invoice", "general TIN EI00000000030", "e-invois belian sendiri", "agent commission e-Invoice"]
---

e-Invoicing에 걸려들 가능성이 가장 높은 회사는 큰 매출 원장을 가진 회사가 아닙니다.
구매하는 회사입니다 — 대리인에게 주는 수수료, 개인인 임대인, 싱가포르 SaaS 구독, 지주회사에
대한 이자 지급. 그 모든 경우에 **구매자가 송장을 발행**하고, 공급자는 아무것도 하지 않습니다.

소득세법(Income Tax Act 1967) 제82C조 제6항이 근거입니다: 어떤 자가 재화를 취득하거나
서비스를 향유하는 경우, 그 자는 자가 발행 송장을 발행해야 하며, 그것은 전자 송장으로
취급됩니다. s.120(1)(d)는 이를 하지 않는 것을 위반으로 규정합니다. 세부 내용은 e-Invoice 개별
지침 제8절에 있습니다.

## 구매자는 언제 발행해야 하는가?

제8.3절은 아홉 가지 상황을 열거합니다.

| # | 상황 | 비고 |
| --- | --- | --- |
| a | 대리인, 딜러 또는 배급업자에 대한 지급 | ITA 1967 s.83A(4)에 정의된 대로 |
| b | **해외 공급자**가 판매한 재화 또는 제공한 서비스 | 재화 수입과 서비스 수입 모두 |
| c | 이익 분배, 예: 배당 | 제11절의 예외 적용 |
| d | 전자상거래 거래 | 플랫폼 운영자가 발행, 제14절 참조 |
| e | 베팅 및 게이밍 당첨자에 대한 배당금 | 카지노 및 게이밍 머신 배당금은 추후 통지 시까지 제외 |
| f | **사업을 영위하지 않는 개인**과의 거래 | 다른 상황이 적용되지 않는 경우에만 |
| g | 이자 지급 | 아래 다섯 가지 예외 |
| h | 보험금, 보상금 또는 급부금 지급 | 보험사의 보험 사업에서 |
| i | 자본 감소, 주식 또는 수익증권 상환, 자사주 매입, 자본 반환, 청산 대금 | 시점 규칙이 이 항목에 특유함 |

대부분의 상업 안내는 여덟 개를 열거합니다. 아홉 번째 — 8.3(i)의 원금 상환 — 는 기업 재무팀을
걸리게 하는 것입니다. 이것도 자체 시점 규칙을 가지기 때문입니다: 서면 계약의 날짜, 또는
승인이 필요한 경우 정부 승인의 날짜, 또는 마지막 조건이 충족되는 날짜, 또는 서면 계약이 없는
경우 완료일입니다.

## 어떤 이자 지급이 제외되는가?

제8.3(g)절은 다섯 가지 범주에 대해 통상적 입장을 뒤집습니다. 각각에서 **공급자가 일반
e-Invoice를 발행**하고 귀하는 자가 발행하지 않습니다:

1. 일반 대중에게 이자를 부과하는 사업체 — 은행 및 기타 금융기관
2. 근로자가 고용주에게 지급하는 이자, 예: 직원 대출
3. 해외 지급자가 말레이시아 납세자에게 지급하는 이자
4. 그룹에 **중앙집중식 자금관리(treasury) 서비스를 제공하는 말레이시아 설립 관계회사**에 대한
   이자
5. 말레이시아 납세자가 부과하는 지연 이자 또는 지연 수수료

항목 4가 그룹이 잘못 아는 것입니다. 지주회사로부터의 계열사 간 대출은 자가 발행합니다. 그룹
자금관리 법인으로부터의 동일한 대출은 그렇지 않습니다 — 자금관리 법인이 귀하에게 일반
e-Invoice를 발행합니다. LHDN 자체의 예시 16과 17이 그 둘을 나란히 놓습니다.

항목 5는 신용 조건을 가진 누구에게나 중요합니다. 연체 고객에 대한 3% 지연 수수료는 귀하의
소득이며, 귀하가 그에 대한 e-Invoice를 발행합니다.

## 해외 공급자는 어떻게 작동하는가?

해외 공급자는 비말레이시아 개인을 포함하여 말레이시아 밖에서 영업하거나 말레이시아에
설립되지 않은 모든 자입니다. 그들은 MyInvois 사용이 의무화되어 있지 않으므로, 제10.4.3절은
문서화 의무를 말레이시아 구매자에게 지웁니다. 역할이 뒤바뀝니다: 해외 판매자가 문서에
명시된 *공급자*이고, 구매자인 귀하가 발행자입니다.

**기한은 재화와 서비스에 대해 다릅니다.**

| 수입 유형 | 자가 발행 e-Invoice 발행 기한 |
| --- | --- |
| **재화** | 통관을 얻은 달의 다음 **둘째 달** 말 |
| **서비스** | 지급 또는 해외 공급자 송장 수령 중 이른 것의 **다음 달** 말 |

서비스 기준은 SST상 수입 과세 서비스 규정을 반영하며, 이는 의도적입니다 — 그리고 제10.4.7절은
해당하는 경우 수입 과세 서비스에 대한 서비스세 금액을 **자가 발행 e-Invoice 안에** 포함하도록
요구합니다. 하나의 문서, 두 제도입니다.

재화 수입의 경우, e-Invoice 지침 부록 2가 필수 부속서 필드를 추가합니다: 세관 양식 제1호(Customs
Form No. 1)의 참조번호입니다.

## 해외 공급자의 세부 정보가 없을 때 무엇을 입력하는가?

이것이 가장 흔한 단일 장애물이며, LHDN은 표 10.1에서 이를 필드별로 답했습니다.

| 필드 | 이용 불가 또는 미제공 시 |
| --- | --- |
| 공급자 TIN | **EI00000000030** |
| 공급자 등록/여권 번호 | NA |
| 공급자 SST 등록번호 | NA |
| 공급자 MSIC 코드 | **00000** |
| 공급자 사업활동 설명 | NA |
| 분류(Classification) | LHDN 목록의 3자리 코드 |

귀하는 해외 송장에서 가능한 것을 추출하거나 요청할 것으로 기대됩니다. NA는 기본값이 아니라
대비책입니다.

## 일반 TIN은 무엇인가?

e-Invoice 개별 지침 부록 1은 네 개를 공표합니다.

| 일반 TIN | 사용처 |
| --- | --- |
| **EI00000000010** | MyKad 또는 MyTentera 번호만 제공하는 말레이시아 개인; 통합 e-Invoice의 구매자 TIN; **통합 자가 발행 e-Invoice의 공급자 TIN** |
| **EI00000000020** | 여권, MyPR 또는 MyKAS 번호만 제공하는 비말레이시아 개인 구매자; 해외 TIN을 이용할 수 없는 수출의 구매자 또는 배송 수령인 |
| **EI00000000030** | 여권, MyPR 또는 MyKAS 번호만 제공하는 비말레이시아 개인 공급자; TIN을 이용할 수 없는 **수입의 해외 공급자** — 둘 다 자가 발행 |
| **EI00000000040** | 배정된 TIN이 없는 정부, 주 정부 및 당국, 지방자치단체, 법정 기관, 면세 기관의 구매자 TIN |

기억할 짝: **020은 구매자, 030은 공급자입니다.** 이를 거꾸로 하면 겉치레가 아니라 검증
실패입니다.

## 자가 발행 e-Invoice를 통합할 수 있는가?

일반적으로 아닙니다. 제3.6.5절은 통합이 자가 발행 e-Invoice에 적용되지 않는다고 규정하며, 네
가지 예외가 있습니다:

- 사업을 영위하지 않는 개인과의 거래
- 일반 대중에 대한 이자 지급
- 사업을 영위하지 않는 개인, 그리고 정부, 정부 당국, 주 정부, 주 당국에 대한 보험금, 보상금
  또는 급부금 지급
- 납세자의 **자체 해외 지점 또는 사무소**가 관련된 자가 발행 상황

통합이 허용되는 경우, 기한은 일반 통합 e-Invoice와 동일합니다: 매월, **월말 후 7일(달력일)
이내**. 통합 자가 발행 e-Invoice의 공급자 TIN은 EI00000000010입니다.

납세자가 잠정 완화 기간 내에 있는 동안, 제16.2(b)절은 **모든** 자가 발행 상황을 통합할 수 있게
합니다 — 그러나 그 기간은 1~3단계에 대해 종료되었고 4단계에 대해서만 2027년 12월 31일까지
이어집니다.

## 그래도 공급자에게 주어야 하는가?

예, 국내 사례에서는. 제8.5절은 구매자가 검증된 자가 발행 e-Invoice를 공유하도록 의무화하며,
LHDN은 문서 자체 또는 QR 코드가 내장된 시각적 표현물 중 하나면 된다고 인정합니다. 포털이
아니라 API로 제출하는 경우, 그 QR 코드를 내장하는 것은 귀하의 몫입니다.

국경 간은 예외입니다. 제10.4.6절에 따라 귀하는 그것을 해외 판매자와 공유할 의무가 없으며,
LHDN은 귀하에게만 통지합니다.

## 흔한 실수

- **해외 공급자가 준수하기를 기다리는 것.** 그들은 결코 그러지 않습니다. 해외 공급업체는
  말레이시아 법 밖에 있으며, 바로 그것이 의무가 귀하에게 옮겨진 이유입니다.
- **일정 금액 미만에서 자가 발행을 선택 사항으로 취급하는 것.** 제8.3절이나 제10.4절에 최소
  기준(de minimis)은 없습니다.
- **은행 이자를 자가 발행하는 것.** 제8.3(g)(i)절은 그것을 은행에 지웁니다. 많은 안내가 이자를
  일률적으로 자가 발행으로 열거하고 다섯 가지 예외를 모두 생략합니다.
- **해외 공급자에 EI00000000020을 사용하는 것.** 그것은 해외 *구매자* 코드입니다. 수입은
  EI00000000030을 사용합니다.
- **수수료에 대해 월 1회 자가 발행 배치를 제출하는 것.** 대리인, 딜러, 배급업자 지급은 제3.6.5절
  예외 목록에 없으므로, 완화가 끝나면 각 지급에 자체 문서가 필요합니다.
- **자가 발행 e-Invoice에서 수입 서비스세를 누락하는 것.** 제10.4.7절은 수입 과세 서비스 규정이
  적용되는 경우 이를 요구합니다.
- **자기 직원을 자가 발행하는 것.** 고용소득은 e-Invoice 지침 제1.6.7절에 따라 e-Invoicing에서
  완전히 제외됩니다.

## 다음 단계

미수금이 아니라 미지급금 원장을 검토하고, 모든 항목을 아홉 가지 상황에 대조하여 표시하십시오
— 수수료, 개인에 대한 임차료, 해외 구독, 계열사 간 이자, 배당. 그 목록이, 귀하의 매출량이
아니라, 무료 포털로 버틸 수 있는지 아니면 연동이 필요한지를 결정합니다. 그중 어느 것을 통합할
수 있는지 별도로 확인하십시오. 제3.6.5절의 네 가지 예외가 완화 기간이 끝난 후 유일한 구제이기
때문입니다.
