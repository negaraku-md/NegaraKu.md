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
  - "세율은 별표 1에 있고, 의무는 부과 조항에 있습니다 — 둘 다 인용하십시오"
  - "지급하거나 대변 기입한 후 1개월이 표준 납부 규칙이며, 대변 기입이 지급보다 먼저 이루어질 수 있습니다"
  - "제107D조는 예외입니다 — 납부 기한이 1개월 후가 아니라 다음 역월(曆月) 말일입니다"
  - "제107A조는 동일한 지급에 대해 두 가지 세율을 적용합니다: 도급업자에 대해 10%, 그 근로자에 대해 3%"
  - "조약 세율은 수취인의 세무당국이 발급한 거주자 증명서(certificate of residence)를 보유한 경우에만 적용됩니다"
  - "원천징수를 하지 못하면 10% 증액과 해당 비용의 손금불산입이 발생합니다"
appliesTo: "비거주자에게 지급하는 모든 말레이시아 사업체, 정부 기관 또는 거주자와, 거주 대리인·딜러·배급업자에게 지급하는 모든 회사."

faq:
  - q: "말레이시아의 표준 원천징수세율은 얼마입니까?"
    a: "단일한 표준 세율은 없습니다. 세율은 소득세법(Income Tax Act 1967) 별표 1에 따른 소득의 종류에 따라 달라집니다 — 이자는 15%, 사용료는 10%, 제4A조에 따른 특수 종류 소득은 10%, 비거주 도급 대금은 10%에 3%가 더해집니다. 조약 세율이 이들 중 여럿을 낮출 수 있습니다."
  - q: "원천징수세는 언제까지 말레이시아 국세청(LHDN)에 납부해야 합니까?"
    a: "제107A조, 제109조, 제109A조, 제109B조, 제109F조의 경우 수취인에게 지급하거나 대변 기입한 후 1개월 이내입니다. 제107D조는 다릅니다 — 지급한 달의 다음 역월 말일보다 늦지 않게 납부해야 합니다. 납부 기한이 주말이나 공휴일에 해당하면 그다음 영업일이 적용됩니다."
  - q: "원천징수세는 최종세입니까?"
    a: "대부분의 비거주 소득에 대해서는 그렇습니다. 말레이시아 국세청(LHDN)은 이자, 사용료, 특수 종류 소득, 부동산투자신탁(REIT) 분배금 및 제4(f)조 소득에 대한 원천징수세를 최종세로 취급하므로, 비거주자는 그 소득에 대해 추가적인 말레이시아 신고 의무가 없습니다. 제107A조는 최종적이지 않습니다 — 이는 도급업자의 최종 부과에 대한 선납입니다."
  - q: "계약서에 수수료가 세금을 제외한 순액이라고 되어 있어도 원천징수를 해야 합니까?"
    a: "해야 합니다. 계약서에 무엇이라고 쓰여 있든 그 의무는 지급자에게 있습니다. 지급자가 계약상 세금을 부담하는 경우, 말레이시아 국세청(LHDN)은 공개 예규 10/2019호에서 2018년 12월 5일부터 제109B조 세액이 재환산(regrossing) 없이 지급된 총액을 기준으로 계산된다고 확인했습니다 — 다만 지급자가 부담하는 세금은 그 자신의 계정에서 공제되지 않습니다."

verificationNeeded:
  - "제107D조 2% 공제를 위한 Form CP107D와 그 부록 CP107D(1)은 유효한 hasil.gov.my 경로에서 입수할 수 없었음 — 아래의 세율, 기준액 및 납부 규칙은 서식이 아니라 법률 자체에서 나온 것임"
  - "특정 국가에 대한 조약 세율은 여기에 재현하지 않음 — 인하 세율은 조항별·국가별로 다르므로 각 협정을 말레이시아 국세청(LHDN) DTA 페이지에서 확인할 것"

obligations:
  - what: "비거주자에 대한 지급에서 공제한 원천징수세를 납부"
    trigger: "event"
    direction: "after"
    event: "payment"
    withinDays: 30
    due: "비거주 수취인에게 지급하거나 대변 기입한 후 1개월 이내"
    authority: "LHDN"
    statute: "Income Tax Act 1967, ss.107A(1), 109(1), 109B(1), 109F(1)"
    consequence: "미납액에 10%가 증액되고 비용이 제39(1)(f)조, (i)조 또는 (j)조에 따라 손금불산입됨"

lang: "ko"
sourceContentHash: "091d81b974b404be"
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
