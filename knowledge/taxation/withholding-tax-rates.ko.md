---
topicId: MY-TAX-0025
title: "지급 유형별 말레이시아 원천징수세율"
seoTitle: "말레이시아 원천징수세율 — 조항, 세율, 양식"
slug: "withholding-tax-rates"
category: "taxation"
subcategory: ["withholding-tax"]
summary: "말레이시아의 모든 원천징수세율을 하나의 표로 — 지급 유형, 소득세법 조항, 세율, 양식, 납부 기한을 정리합니다."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "말레이시아 원천징수세율은 부과 조항이 아니라 소득세법(Income Tax Act 1967) 별표 1이 정합니다. 비거주자에 대한 이자는 15퍼센트, 로열티는 10퍼센트, s.4A상 특수 소득 부류는 10퍼센트, 제4(f)항 소득은 10퍼센트, 비거주 공연자는 15퍼센트, 비거주 계약자는 10퍼센트에 3퍼센트를 더합니다. 이들 거의 전부는 수취인에게 지급하거나 대변 계상한 후 1개월 이내에 납부해야 합니다."
keyTakeaways:
  - "The rate lives in Schedule 1, the obligation lives in the charging section — cite both"
  - "One month after paying or crediting is the standard remittance rule, and crediting can fall before payment"
  - "Section 107D is the exception — payment is due by the end of the following calendar month, not one month later"
  - "Section 107A carries two rates on the same payment: 10 per cent for the contractor, 3 per cent for its employees"
  - "A treaty rate is available only if you hold a certificate of residence from the payee's tax authority"
  - "Failure to withhold triggers a 10 per cent increase and disallowance of the underlying expense"
appliesTo: "Any Malaysian business, government body or resident person paying a non-resident, and any company paying resident agents, dealers or distributors."

faq:
  - q: "What is the standard withholding tax rate in Malaysia?"
    a: "There is no single standard rate. The rate depends on the class of income under Schedule 1 of the Income Tax Act 1967 — 15 per cent for interest, 10 per cent for royalty, 10 per cent for special classes of income under s.4A, and 10 per cent plus 3 per cent for non-resident contract payments. Treaty rates may reduce several of these."
  - q: "When must withholding tax be paid to LHDN?"
    a: "Within one month after paying or crediting the payee for ss.107A, 109, 109A, 109B and 109F. Section 107D is different — it is due not later than the end of the calendar month following the month of payment. If the due date falls on a weekend or public holiday, the next working day applies."
  - q: "Is withholding tax a final tax?"
    a: "For most non-resident income it is. LHDN treats withholding tax on interest, royalty, special classes of income, REIT distributions and paragraph 4(f) income as a final tax, so the non-resident has no further Malaysian filing obligation on that income. Section 107A is not final — it is an advance payment against the contractor's eventual assessment."
  - q: "Do I still withhold if the contract says the fee is net of tax?"
    a: "Yes. The obligation is on the payer regardless of what the contract says. Where the payer contractually bears the tax, LHDN confirmed in Public Ruling 10/2019 that from 5 December 2018 the s.109B tax is computed on the gross amount paid, with no regrossing — but the tax the payer bears is not deductible in its own accounts."

verificationNeeded:
  - "Form CP107D and its appendix CP107D(1) for the s.107D 2 per cent deduction could not be retrieved from any live hasil.gov.my path — the rate, threshold and remittance rule below come from the Act itself, not from the form"
  - "Treaty rates for specific countries are not reproduced here — check each agreement on the LHDN DTA page, as reduced rates vary by article and by country"

obligations:
  - what: "Remit withholding tax deducted from a payment to a non-resident"
    trigger: "event"
    direction: "after"
    event: "payment"
    withinDays: 30
    due: "within one month after paying or crediting the non-resident payee"
    authority: "LHDN"
    statute: "Income Tax Act 1967, ss.107A(1), 109(1), 109B(1), 109F(1)"
    consequence: "The unpaid amount is increased by 10 per cent and the expense is disallowed under s.39(1)(f), (i) or (j)"

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
  - title: "Withholding Tax"
    url: "https://www.hasil.gov.my/en/perundangan/cukai-pegangan/"
    publisher: "LHDN"
  - title: "Income Tax Act 1967 (Act 53), reprint as at 21 May 2024 — Schedule 1 and ss.107A, 107D, 109, 109A, 109B, 109F"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "LHDN"
    date: "2024-05-21"
  - title: "Public Ruling No. 10/2019 — Withholding Tax on Special Classes of Income"
    url: "https://www.hasil.gov.my/wp-content/uploads/PR_10_2019.pdf"
    publisher: "LHDN"
    date: "2019-12-10"
  - title: "Double Taxation Avoidance Agreement (DTA/DTAA)"
    url: "https://www.hasil.gov.my/en/antarabangsa/perjanjian-pengelakan-pencukaian-dua-kali-pppdk/"
    publisher: "LHDN"

entity: "Malaysian withholding tax rates"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "explained-in", to: "withholding-tax-special-classes" }
related: ["withholding-tax-special-classes", "withholding-tax-digital-services", "withholding-tax-non-compliance", "cp37-forms"]
keywords: ["withholding tax rate Malaysia", "section 109B rate", "section 107A withholding tax", "CP37D", "withholding tax table Malaysia", "LHDN withholding tax"]
---

필요한 세율은 읽고 있는 조항에 거의 없습니다. s.109B는 "해당 지급에 적용되는 세율로"
원천징수하라고 말하고 거기서 멈춥니다 — 10퍼센트는 별표 1 파트 V에 있습니다. s.109도
마찬가지입니다. 둘 다 인용하는 습관을 들이십시오. 세율에 관한 다툼은 별표 1에 관한
다툼이기 때문입니다.

## 전체 표

| 지급 유형 | 소득세법 조항 | 세율 | 양식 | 납부 기한 |
| --- | --- | --- | --- | --- |
| 비거주 계약자에 대한 계약 지급 | s.107A, 별표 1 | 10%(계약자) + 3%(그 직원) | CP37A | 지급 또는 대변 계상 후 1개월 |
| 거주 대리인, 딜러 또는 배급업자에 대한 지급 | s.107D, 별표 1 | 2% | CP107D | **다음 역월(曆月)** 말 |
| 비거주자에 대한 이자 | s.109, 별표 1 파트 II 항목 1 | 15% | CP37 | 지급 또는 대변 계상 후 1개월 |
| 비거주자에 대한 로열티 | s.109, 별표 1 파트 II 항목 2 | 10% | CP37 | 지급 또는 대변 계상 후 1개월 |
| 소액 이자 또는 로열티 | s.109, 별표 1 파트 II | 15% / 10% | CP37S | 반기별, 6월 30일 또는 12월 31일 |
| 비거주 공연자 | s.109A, 별표 1 파트 II 항목 3 | 15% | CP154 및 LHDN 세액 계산서 | 지급 또는 대변 계상 후 1개월 |
| s.4A상 특수 소득 부류 | s.109B, 별표 1 파트 V | 10% | CP37D | 지급 또는 대변 계상 후 1개월 |
| 소액 특수 소득 부류 | s.109B, 별표 1 파트 V | 10% | CP37DS | 반기별, 6월 30일 또는 12월 31일 |
| 은행 또는 승인 기관이 거주 개인에게 지급하는 이자 | s.109C, 별표 1 파트 VI | 5% | — | 지급 또는 대변 계상 후 1개월 |
| REIT 또는 부동산 신탁 분배 — 비거주 법인 | s.109D, 별표 1 파트 X | 24% | CP37E | 지급 또는 대변 계상 후 1개월 |
| REIT 또는 부동산 신탁 분배 — 외국 기관 투자자 | s.109D, 별표 1 파트 X | 10% | CP37E | 지급 또는 대변 계상 후 1개월 |
| REIT 또는 부동산 신탁 분배 — 거주 법인이 아닌 기타 | s.109D, 별표 1 파트 X | 10% | CP37E | 지급 또는 대변 계상 후 1개월 |
| 비개인 수익증권 보유자에 대한 리테일 머니마켓펀드 분배 | s.109DA, 별표 1 파트 XIX | 24% | CP37E(NR) / CP37E(R) | 지급 또는 대변 계상 후 1개월 |
| 가족 또는 타카풀 가족 펀드 분배 — 비거주 법인 | s.109E, 별표 1 파트 XI | 25% | CP37E(T) | 지급 또는 대변 계상 후 1개월 |
| 가족 또는 타카풀 가족 펀드 분배 — 거주 법인이 아닌 기타 | s.109E, 별표 1 파트 XI | 8% | CP37E(T) | 지급 또는 대변 계상 후 1개월 |
| 비거주자에 대한 제4(f)항 소득 | s.109F, 별표 1 파트 XIII | 10% | CP37F | 지급 또는 대변 계상 후 1개월 |
| 55세 이전의 거치연금 또는 PRS 인출 | s.109G, 별표 1 파트 XVI | 8% | CP37G | 지급 또는 대변 계상 후 1개월 |

## 이 표가 숨기는 세 가지

**"지급 또는 대변 계상"은 "지급"이 아닙니다.** 공개결정문 10/2019 제13.1항은 대변 계상을
단순한 분개나 발생 계상 이상으로 정의합니다 — 그 금액이 수취인이 이용할 수 있거나 그의
이익을 위한 것이어야 합니다. 그러나 비거주자가 귀사에 빚진 것을 상계하는 상계 계상(contra
entry)도 이에 해당하며, 시점은 상계일에 시작합니다. 현금을 결코 송금하지 않는 회사도 한
달 늦을 수 있습니다.

**s.107D는 다른 시계를 가집니다.** s.107D(1)은 1개월 후가 아니라 "다음 역월 말까지"
납부하도록 요구합니다. 또한 이는 대리인, 딜러 또는 배급업자가 직전 기준연도에 지급자로부터
RM100,000을 초과하여 받은 경우(s.107D(2)), 그리고 그 자가 거주 개인인 경우(s.107D(6))에만
적용됩니다.

**조약 세율은 조건부이며 자동이 아닙니다.** LHDN은 거주를 확인하는 수취인 세무당국의 서면
확인을 요구하며, 이를 준수 검토를 위해 보관해야 합니다. 공개결정문 10/2019 예시 16은
거주가 확인된 후에만 홍콩 서비스 제공자에게 5퍼센트 세율을 적용합니다. 증명서가 없으면
국내 세율로 원천징수합니다.

## 흔한 실수

- **별표 없이 세율을 인용하는 것.** "s.109B는 10퍼센트"는 약식 표현입니다. 10퍼센트는
  별표 1 파트 V이며, 조약이 대체하는 것은 파트 V입니다.
- **소액 양식이 선택적 편의라고 가정하는 것.** CP37S와 CP37DS에는 두 가지 누적 조건이
  있습니다. 세액이 지급 거래당 RM500을 초과하지 않아야 하고, **그리고** 소액 거래가 해당
  6개월 기간에 두 번 이상 발생해야 합니다. 반기 중 단 한 번의 RM400 지급은 유예 대상이
  아닙니다.
- **s.107A를 최종세로 취급하는 것.** 그렇지 않습니다. (a)호는 계약자 자신의 부과에
  충당되고, (b)호인 3퍼센트는 국세청장의 판단에 따라 s.107A(3)(b)에 의해 계약자에게
  환급됩니다.
- **지급이 일부 적용 범위 밖인데 총액에 원천징수하는 것.** s.4A(i) 및 (ii) 소득의 경우,
  말레이시아에서 수행된 서비스에 귀속되는 부분만 과세되며, 공정하고 정당한 기준으로
  안분됩니다.

## 다음 단계

세율은 쉬운 부분입니다. 대부분의 실제 사례를 결정하는 두 가지 질문: 지급이 애초에
"말레이시아에서 발생"하는지, 그리고 그것이 s.109상 로열티인지 s.109B상 특수 소득 부류인지
입니다. 첫 번째는 [withholding-tax-special-classes](/en/taxation/withholding-tax-special-classes)를,
두 번째는 [withholding-tax-digital-services](/en/taxation/withholding-tax-digital-services)를
참고하십시오.
