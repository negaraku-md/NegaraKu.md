---
topicId: MY-TAX-0049
title: "말레이시아의 국가별 보고와 마스터 파일"
seoTitle: "말레이시아 CbCR — 기준, 통지, 제출"
slug: "cbcr-and-master-file"
category: "taxation"
subcategory: ["international-tax"]
summary: "RM30억 CbCR 기준, 재무연도의 마지막 날에 해당하는 통지 마감일, 12개월 제출 마감일, 그리고 말레이시아에 독립적인 마스터 파일 의무가 없는 이유."

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "국가별 보고는 보고 재무연도 직전 재무연도에 연결 그룹 총수입이 RM30억 이상인 다국적기업 그룹으로서, 그 구성 법인 중 하나가 말레이시아 거주자이거나 말레이시아 고정사업장인 경우에 적용됩니다. 통지는 보고 재무연도의 마지막 날 이전에, 보고서 자체는 그 날로부터 12개월 이내에 제출해야 합니다. 말레이시아에는 별도의 마스터 파일 제출 의무가 없습니다."
keyTakeaways:
  - "The threshold is RM3 billion of consolidated group revenue in the financial year before the reporting year"
  - "Notification is due on or before the last day of the reporting financial year — that is the deadline people miss"
  - "The report is filed not later than 12 months after the last day of the reporting financial year"
  - "Filing is through HiDEF in the OECD XML schema, not through the ordinary tax return"
  - "Failure to furnish a report is an offence under s.112A carrying a fine of RM20,000 to RM100,000 or six months imprisonment"
  - "There is no standalone Master File filing duty — the group information sits in Schedule 1 of the Transfer Pricing Rules 2023"
appliesTo: "Malaysian entities and permanent establishments within large multinational groups, and Labuan entities carrying on a Labuan business activity."

faq:
  - q: "What is the CbCR threshold in Malaysia?"
    a: "Total consolidated group revenue of at least RM3 billion in the financial year preceding the reporting financial year. This is a ringgit threshold set by the Income Tax (Country-by-Country Reporting) Rules 2016 and it is separate from the EUR 750 million test that applies for global minimum tax purposes."
  - q: "When is the CbCR notification due?"
    a: "On or before the last day of the reporting financial year, under rule 6. From year of assessment 2021 the notification may be made through Form e-C, or Form LE1 for a Labuan entity, or by an official letter on the company letterhead using LHDN's published template, signed in accordance with s.75 and delivered by hand or courier."
  - q: "Does Malaysia require a Master File?"
    a: "Not as a separate filing. Rule 4(2)(a) of the Income Tax (Transfer Pricing) Rules 2023 requires information on the multinational enterprise group as specified in Schedule 1 within the contemporaneous transfer pricing documentation. Paragraph 11.7(a) of the Malaysia Transfer Pricing Guidelines 2024 allows a group master file containing all the required information to be submitted in place of Schedule 1."
  - q: "What is the penalty for not filing a country-by-country report?"
    a: "Section 112A of the Income Tax Act 1967 makes default an offence carrying, on conviction, a fine of not less than RM20,000 and not more than RM100,000, or imprisonment up to six months, or both. The burden of proving the report was furnished is on the accused, and the court may order compliance within 30 days."

verificationNeeded:
  - "The Labuan equivalent in P.U.(A) 409/2017 is referenced by LHDN as carrying the same rule 6 and rule 7 deadlines; the Labuan regulations were not read in full"
  - "The IRBM Country-by-Country Reporting Guidelines currently published are dated 1 January 2019 and predate the HiDEF platform detail on the LHDN CbCR page — where the two differ, the page is the later source"

obligations:
  - what: "Notify LHDN of the reporting entity or non-reporting entity status"
    trigger: "financial-year-end"
    due: "on or before the last day of the reporting financial year"
    authority: "LHDN"
    statute: "Income Tax (Country-by-Country Reporting) Rules 2016, rule 6"
    consequence: "Non-compliance exposes the entity to action under the Rules and the Act"
  - what: "File the country-by-country report"
    trigger: "financial-year-end"
    due: "not later than 12 months after the last day of the reporting financial year"
    authority: "LHDN"
    statute: "Income Tax (Country-by-Country Reporting) Rules 2016, rule 7"
    consequence: "Fine of RM20,000 to RM100,000 or imprisonment up to six months, or both, under s.112A"

lang: "ko"
sourceContentHash: "003701199a9aca88"
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
  - title: "Income Tax (Country-by-Country Reporting) Rules 2016, P.U.(A) 357/2016"
    url: "https://lom.agc.gov.my/ilims/upload/portal/akta/outputp/pua_20161223_(008)%20%2011%2011%202016%20%20Draf%20muktamad.pdf"
    publisher: "Attorney General's Chambers"
    date: "2016-12-23"
  - title: "Income Tax (Country-by-Country Reporting) (Amendment) Rules 2017, P.U.(A) 416/2017"
    url: "https://lom.agc.gov.my/ilims/upload/portal/akta/outputp/pua_20171228_P.U.(A)416.pdf"
    publisher: "Attorney General's Chambers"
    date: "2017-12-27"
  - title: "Country-by-Country Reporting (CbCR)"
    url: "https://www.hasil.gov.my/antarabangsa/country-by-country-reporting-cbcr/"
    publisher: "LHDN"
  - title: "Malaysia Transfer Pricing Guidelines 2024 — Chapter 11"
    url: "https://www.hasil.gov.my/wp-content/uploads/malaysia-transfer-pricing-guidelines-2024.pdf"
    publisher: "LHDN"
    date: "2024-12-24"

entity: "Country-by-country reporting"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "related-to", to: "transfer-pricing-documentation" }
related: ["transfer-pricing-documentation", "global-minimum-tax-pillar-two", "permanent-establishment"]
keywords: ["CbCR Malaysia", "country by country reporting Malaysia", "CbCR threshold RM3 billion", "master file Malaysia transfer pricing", "P.U.(A) 357/2016"]
---

그룹이 놓치는 마감일은 제출 마감일이 아닙니다. 통지이며, 이는 **보고 재무연도의 마지막 날** — 그 연도가 마감되기도 전이자 보고서 자체가 제출되기 12개월 전 — 에 해당합니다.

## 누가 적용 대상인가

P.U.(A) 416/2017에 의해 다시 쓰인 소득세(국가별 보고) 규칙 2016(Income Tax (Country-by-Country Reporting) Rules 2016) 제2규칙은 다음의 경우 다국적기업 그룹에 이 규칙을 적용합니다.

- 보고 재무연도 직전 재무연도의 **연결 그룹 총수입**이 **RM30억 이상**이고; **그리고**
- 그 구성 법인 중 하나가 말레이시아 거주 최종 지주법인, 말레이시아 거주 구성 법인, 말레이시아 거주 대리 지주법인, 또는 **말레이시아 내 고정사업장**인 경우.

라부안 사업활동을 영위하는 라부안(Labuan) 법인은 병행 문서인 라부안 사업활동세(국가별 보고) 규정 2017(Labuan Business Activity Tax (Country-by-Country Reporting) Regulations 2017)에 속합니다.

통화에 유의하십시오. RM30억은 OECD의 EUR 7억5,000만을 환산한 것이 아니며, 필라 2(Pillar Two) 기준도 아닙니다 — 그룹은 한 제도 안에 있으면서 다른 제도 밖에 있을 수 있습니다.

## 통지

제6규칙은 모든 말레이시아 거주 구성 법인이 **보고 재무연도의 마지막 날 이전에** 국세청장에게 서면으로 통지하도록 요구합니다.

- 자신이 보고 법인인 경우, 최종 지주법인인지 대리 지주법인인지를 밝히거나; 또는
- 그렇지 않은 경우, 보고 법인인 법인의 신원과 조세 거주지를 그 법인의 재무연도와 함께 제시합니다.

2021년 과세연도부터 통지는 **양식 e-C**, 또는 라부안 법인의 경우 **양식 LE1**을 통해 할 수 있습니다. 대안은 소득세법 1967(Income Tax Act 1967) 제75조에 따라 서명하고, LHDN의 공표된 서식을 따르며, **직접 또는 택배로** 전달하는 회사 레터헤드의 공식 서한입니다. LHDN의 페이지는 그 서식을 엄격히 따라야 한다고 명시합니다.

## 제출

제7규칙: **보고 재무연도의 마지막 날로부터 12개월 이내**.

제5규칙은 최종 지주법인이 말레이시아에 거주하는 경우 그 법인에 의무를 부과합니다. 외국 모회사가 본국에 제출 의무가 없거나, 그 관할이 말레이시아와 국제 협정을 맺었으나 유효한 적격 권한당국 협정이 없거나, LHDN이 그 관할의 **체계적 실패(systemic failure)**를 통지한 경우, 말레이시아 대리인이 대신 제출합니다.

보고서는 세 개의 표를 담습니다 — 관할별 소득·세금·사업 활동 배분; 관할별 구성 법인 목록; 그리고 추가 설명 정보입니다. 재무 정보는 제4(2)규칙에 따라 링깃(RM)으로 표시됩니다. 제출은 **HiDEF** 플랫폼을 통해 OECD의 CbCR XML 스키마로, IRBM 공개키로 암호화하여 이루어집니다.

제8규칙은 LHDN의 보고서 사용을 고차원의 이전가격 및 BEPS 위험 평가와 경제 분석으로 제한하며, 조정을 할 때 상세한 이전가격 분석을 대신하는 것으로 사용하는 것을 금지합니다.

## 마스터 파일 문제

말레이시아는 독립적인 마스터 파일 제출 의무를 부과하지 않습니다. 부과하는 것은 소득세(이전가격) 규칙 2023(Income Tax (Transfer Pricing) Rules 2023) 제4(2)(a)규칙 — 동시 이전가격 문서 안에 **부칙 1(Schedule 1)**에 명시된 다국적기업 그룹에 관한 정보입니다.

이어 말레이시아 이전가격 지침 2024(Malaysia Transfer Pricing Guidelines 2024) 제11.7(a)항은, 그룹이 요구되는 모든 정보를 담은 마스터 파일을 작성한 경우 그 파일을 **부칙 1의 대체물로 제출할 수 있다**고 말합니다. 따라서 그룹 마스터 파일은 말레이시아 부칙을 대신하는 허용된 대체물이지, 자체 마감일을 가진 별도의 산출물이 아닙니다.

## 흔한 실수

**통지를 연례 알림으로 취급하는 것.** 이는 재무연도의 마지막 날에 해당하는 법정 마감일이며, 보고 법인이 아닌 법인을 포함한 모든 말레이시아 구성 법인에 적용됩니다.

**외국 모회사의 제출이 말레이시아를 포괄한다고 가정하는 것.** 대개는 교환을 통해 포괄합니다 — 다만 적격 권한당국 협정이 유효한 경우에만입니다. 그렇지 않은 경우 말레이시아 대리인이 제출해야 합니다.

**기준을 혼동하는 것.** CbCR은 RM30억, 글로벌 최저한세는 EUR 7억5,000만, 전체 이전가격 문서화는 RM3,000만과 RM1,000만입니다. 셋은 서로 다른 판정입니다.

**마스터 파일을 제출하고 멈추는 것.** 이전가격 규칙 2023의 부칙 2 — 말레이시아 법인 자체의 사업과 벤치마킹 — 는 결코 그룹 마스터 파일로 포괄되지 않습니다.

## 다음 단계

통지를 제출일이 아니라 재무연도 종료에 맞추어 일정에 넣고, 연도가 마감되기 전에 그룹에서 어느 법인이 보고 법인인지 확인하십시오. 그런 다음 로컬 파일에 관해서는 `transfer-pricing-documentation`을, 연결 수입이 EUR 7억5,000만에 가깝다면 `global-minimum-tax-pillar-two`를 읽으십시오.
