---
topicId: MY-TAX-0017
title: "RPGT 세율과 양도차익 계산 방법"
slug: "rpgt-rates"
category: "taxation"
subcategory: ["capital-taxes"]
summary: "보유 연수별·양도자 구분별 부동산 양도소득세율과, 취득가액 및 양도가액에 대한 모든 조정을 보여주는 완전한 계산 예를 다룹니다."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "부동산 양도소득세는 부동산양도소득세법(Real Property Gains Tax Act 1976) 별표 5에 따라, 자산 보유 기간과 양도자가 속하는 구분 모두에 따라 달라지는 세율로 부과됩니다. 시민권자와 영주권자는 1~3년차에 30%, 4년차에 20%, 5년차에 15%, 6년차부터 0%를 냅니다. 회사는 같은 사다리를 따르되 6년차부터 10%를 냅니다. 비시민은 만 5년간 30%를 낸 뒤 10%를 냅니다."
keyTakeaways:
  - "There is no single RPGT rate ladder — Schedule 5 has three Parts and they diverge sharply from year four onward"
  - "Malaysian citizens and permanent residents pay 0% from the sixth year; companies and non-citizens pay 10%"
  - "Non-citizen individuals and foreign companies pay 30% for a full five years, with no taper at years four and five"
  - "Acquisition price is increased by incidental costs but reduced by insurance recoveries, damage compensation and forfeited deposits"
  - "Disposal price is reduced by enhancement expenditure, costs of defending title and incidental disposal costs"
  - "Interest on money borrowed to acquire the property is not deductible"
  - "Individuals get a Schedule 4 exemption of the greater of RM10,000 or 10% of the chargeable gain; companies get nothing"
appliesTo: "Property owners, Sdn Bhd directors, conveyancing clerks and accountants computing RPGT on a disposal of Malaysian real property."

faq:
  - q: "What is the RPGT rate after five years in Malaysia?"
    a: "It depends entirely on who is disposing. A Malaysian citizen or permanent resident pays 0% on a disposal in the sixth year or later, which has been the position for disposals from 1 January 2022. A company incorporated in Malaysia pays 10%. A non-citizen individual, a foreign company or the executor of a non-citizen's estate also pays 10%. Guides that print a single ladder ending in 0% are describing Part I only."
  - q: "Can I deduct renovation costs from the RPGT gain?"
    a: "Expenditure incurred wholly and exclusively on enhancing or preserving the value of the asset is deductible from the disposal price under paragraph 5(1)(a) of Schedule 2, provided it is reflected in the state of the asset at the time of disposal. Kitchen renovations and building extensions qualify. Routine repairs that leave no lasting enhancement generally do not, and interest on the loan used to buy the property is expressly not allowable."
  - q: "Is stamp duty paid on purchase deductible for RPGT?"
    a: "Yes, but on the other side of the computation. Stamp duty, legal fees, valuation fees and agent commissions paid when you acquired the property are incidental costs added to the acquisition price under paragraph 4(1) of Schedule 2. Costs incurred on the sale are instead deducted from the disposal price. Both reduce the chargeable gain, but putting them on the wrong line changes nothing arithmetically and everything on an audit."
  - q: "How is the holding period counted for RPGT?"
    a: "From the date of acquisition to the date of disposal, which are normally the dates of the respective sale and purchase agreements. A property acquired on 15 March 2021 enters its sixth year on 15 March 2026, so a disposal on 20 June 2026 is a sixth-year disposal. Because the rate steps down at each anniversary, a few weeks either side of a boundary can move the rate by five or ten percentage points."
  - q: "Does the acquirer really have to hold back part of the price?"
    a: "Yes. Under section 21B the acquirer must retain and remit a percentage of the consideration to the Director General within 60 days of disposal — 3% for a Part I disposer, 5% for a company disposing within three years and 3% from the fourth year, and 7% where the disposer falls in Part III. Failure exposes the acquirer, not the seller, to a 10% increase on the unpaid amount."

verificationNeeded: []
obligations:
  - what: "Submit the RPGT return and pay the tax on a disposal of real property"
    trigger: "change"
    withinDays: 60
    due: "within 60 days after the date of disposal"
    authority: "LHDN"
    statute: "Real Property Gains Tax Act 1976, s.13 and s.21B"
    consequence: "Penalty of up to three times the tax under s.29(3), and a 10% increase on the acquirer under s.21B(2)"

lang: "ko"
sourceContentHash: "00945edeadfe77b7"
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
  - title: "Real Property Gains Tax (RPGT) Rates"
    url: "https://www.hasil.gov.my/en/ckht/kadar-cukai-keuntungan-harta-tanah/"
    publisher: "LHDN"
  - title: "Disposal Price and Acquisition Price"
    url: "https://www.hasil.gov.my/en/ckht/harga-pelupusan-dan-harga-pemerolehan/"
    publisher: "LHDN"
  - title: "Retention and Remittance of Money by Acquirer"
    url: "https://www.hasil.gov.my/en/ckht/pegangan-dan-remitan-wang-oleh-pemeroleh/"
    publisher: "LHDN"
  - title: "Imposition of Penalties and Increases of Tax"
    url: "https://www.hasil.gov.my/en/ckht/pengenaan-penalti-dan-kenaikan-atas-taksiran-cukai/"
    publisher: "LHDN"
  - title: "Real Property Gains Tax Act 1976 (Act 169)"
    url: "https://lom.agc.gov.my/act-detail.php?act=169"
    publisher: "Attorney General's Chambers"

entity: "Real property gains tax"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "governs", to: "real-property-gains-tax-act-1976" }
  - { rel: "compares-with", to: "capital-gains-tax" }
  - { rel: "explained-in", to: "rpgt-exemptions" }
related: ["rpgt-exemptions", "capital-gains-tax", "capital-or-revenue", "lhdn"]
keywords: ["RPGT rates Malaysia", "cukai keuntungan harta tanah", "RPGT computation", "RPGT 6th year", "Schedule 5 RPGTA", "CKHT"]
---

유통되는 거의 모든 RPGT 안내는 하나의 세율 사다리를 인쇄합니다. 30, 30, 30, 20, 15,
0. 그 사다리는 실재하지만, 별표 5의 세 가지 양도자 구분 중 정확히 하나에만
적용됩니다. 이를 Sdn Bhd에 적용하면 양도차익 전체의 10%만큼 과소 계상하게 됩니다.
이를 4년차에 되파는 외국인 매수자에게 적용하면 15%포인트 차이가 납니다.

## 세 가지 세율 사다리

부동산양도소득세법(Real Property Gains Tax Act 1976) 별표 5는 양도자를 세 개의 파트로
나눕니다. 다음은 현행 양도에 대한 LHDN 공표표의 세율입니다 — 파트 I은 2022년 1월
1일부터, 파트 II와 III은 2019년 1월 1일부터.

| 양도 시기 | 파트 I — 시민권자 및 영주권자 | 파트 II — 말레이시아 설립 회사, 수탁자, 등록 단체 | 파트 III — 비시민, 외국 법인, 비시민 유산 유언집행자 |
| --- | --- | --- | --- |
| 1년차 | 30% | 30% | 30% |
| 2년차 | 30% | 30% | 30% |
| 3년차 | 30% | 30% | 30% |
| 4년차 | **20%** | **20%** | **30%** |
| 5년차 | **15%** | **15%** | **30%** |
| 6년차 이후 | **0%** | **10%** | **10%** |

상업적으로 중요한 두 가지 차이:

- **파트 III에는 체감(taper)이 없습니다.** 비시민은 5년차까지 내내 전액 30%를 냅니다.
  20%와 15% 단계는 그들에게 아예 존재하지 않습니다.
- **파트 II는 결코 0에 이르지 않습니다.** 공개 논의를 지배하는 6년차 0% 세율은
  시민권자와 영주권자를 위한 파트 I 우대입니다. 토지를 20년간 보유한 회사도 양도 시
  여전히 **10%**를 냅니다.

그 마지막 요점은 가족 사업체를 끊임없이 걸려들게 합니다. Sdn Bhd가 2004년에 사서
2026년에 판 토지는 10% 사건이고, 같은 토지를 개인으로 보유하면 0 사건입니다.

## 계산 구성하기

RPGT는 과세 양도차익에 부과되며, 이는 양도가액에서 취득가액을 뺀 것입니다. 두 금액
모두 조정되며, 서로 반대 방향으로 조정됩니다.

**취득가액**은 지불한 대가에서 시작하여 별표 2 제4조 제1항에 따른 취득 부대비용만큼
**증가**합니다 — 측량사, 감정평가사, 회계사, 대리인 또는 법률 자문가의 전문 서비스에
대한 수수료, 커미션 또는 보수, 그리고 인지세입니다.

그다음 세 가지 범주의 수취액만큼 **감소**합니다:

- 자산의 손상 또는 감가에 대해 받은 보상 — 제4조 제1항 (a)
- 손상 또는 감가에 대한 보험금 — 제4조 제1항 (b)
- 취소된 이전 또는 양도에서 귀하에게 몰취된 보증금 — 제4조 제1항 (c)

**양도가액**은 받은 대가에서 시작하여 다음만큼 **감소**합니다:

- 자산의 가치를 증대하거나 보존하는 데 지출한 비용 — 제5조 제1항 (a)
- 자산에 대한 권원 또는 권리를 확립, 보존 또는 방어하는 데 지출한 비용 — 제5조 제1항 (b)
- 양도 부대비용 — 제5조 제1항 (c) 및 제6조

**결코** 인정되지 않는 것: 부동산을 취득하기 위해 차입한 자본에 대한 이자, 소득세
목적으로 이미 공제된 지출, 그리고 RPGT 양식 제출 비용 자체입니다.

## 완전한 계산 예

**사실관계.** 말레이시아에 설립된 Cahaya Bina Sdn Bhd가 **2021년 3월 15일** 상가주택을
**RM800,000**에 사서 **2026년 6월 20일** **RM1,300,000**에 팔았습니다.

취득 시 법률 비용 RM8,000, 인지세 RM18,000, 감정평가 수수료 RM2,000을 지불했습니다.
2022년에 후면부 화재 손상에 대해 보험사로부터 RM30,000을 받았습니다. 매각 전에 1층을
증축하는 데 RM120,000, 경계 분쟁을 방어하는 법률 비용에 RM15,000을 지출했습니다.
매각 시 중개 수수료 RM39,000과 법률 비용 RM6,000을 지불했습니다.

**1단계 — 취득가액**

| 항목 | 금액 (RM) |
| --- | --- |
| 지불한 대가 | 800,000 |
| 가산: 취득 법률 비용 | 8,000 |
| 가산: 인지세 | 18,000 |
| 가산: 감정평가 수수료 | 2,000 |
| 차감: 손상 보험금 | (30,000) |
| **취득가액** | **798,000** |

**2단계 — 양도가액**

| 항목 | 금액 (RM) |
| --- | --- |
| 받은 대가 | 1,300,000 |
| 차감: 가치 증대 지출(증축) | (120,000) |
| 차감: 권원 방어 비용 | (15,000) |
| 차감: 중개 수수료 | (39,000) |
| 차감: 양도 법률 비용 | (6,000) |
| **양도가액** | **1,120,000** |

**3단계 — 과세 양도차익**

RM1,120,000 − RM798,000 = **RM322,000**

별표 4 면제는 적용되지 않습니다. 이는 개인에 한정됩니다.

**4단계 — 세율**

2021년 3월 15일 취득은 6년차가 2026년 3월 15일에 시작함을 뜻합니다. 따라서 2026년
6월 20일의 양도는 **6년차 양도**입니다. Cahaya Bina는 파트 II 양도자이므로 세율은
**10%**입니다.

**납부할 RPGT: RM322,000 × 10% = RM32,200.**

**5단계 — 매수자가 원천공제한 금액**

취득자는 s.21B에 따라 유보하고 납부해야 합니다. Cahaya Bina는 4년차 이후에 매각하는
파트 II 양도자이므로, 세율은 대가의 **3%**입니다: RM1,300,000 × 3% = **RM39,000**.

유보액이 세액을 **RM6,800** 초과하며, 이는 부과가 이루어진 후 환급됩니다. 매도자는
흔히 유보액이 벌칙이 아니라 선납금(payment on account)이라는 점을 잊고, 그 돈이 사라진
것처럼 현금 흐름을 계획합니다.

## 같은 숫자, 다른 사람의 손에서

한 가지 사실만 바꿔 봅시다 — 양도자가 말레이시아 시민권자인 Encik Rahim이고, 나머지는
모두 동일합니다.

- 과세 양도차익: RM322,000
- 별표 4 면제: RM10,000과 양도차익의 10% 중 큰 금액, 즉 RM32,200
- 순 과세 양도차익: RM289,800
- 파트 I 6년차 양도의 세율: **0%**
- **납부할 RPGT: 없음**

동일한 부동산, 동일한 양도차익, 동일한 시점. RM32,200 대 0으로, 오로지 양도자가 별표
5의 어느 파트에 속하는지로 결정됩니다.

## 반영할 가치가 있는 벌칙

- **60일 이내에 CKHT 1A 또는 CKHT 1B를 제출하지 못한 경우** — s.29(3)에 따라 세액의
  최대 **3배** 벌칙.
- **부정확 신고** — s.30(2)에 따라 과소 부과된 세액과 동일하며 100%를 상한으로 하는
  벌칙.
- **취득자가 유보 및 납부를 하지 못한 경우** — s.21B(2)에 따라 미납 금액에 대한
  **10%** 가산으로, 취득자로부터 정부에 대한 채무로 회수됩니다.
- 양도자의 부정확 신고로 취득자가 과소 납부하는 경우, s.14(5)에 따라 10% 부과가
  발생합니다.

## 흔한 실수

- **회사에 시민권자 사다리를 사용하는 것.** 6년차 0% 세율은 파트 I에만 해당합니다.
  회사는 영구히 10%를 냅니다.
- **비시민이 4년차 체감을 받는다고 가정하는 것.** 받지 못합니다 — 파트 III은 5년간
  정액 30%입니다.
- **대출 이자를 공제하는 것.** 그 비용이 상업적으로 아무리 실재하더라도 명시적으로
  인정되지 않습니다.
- **회사에 별표 4를 청구하는 것.** RM10,000 또는 10% 면제는 개인에 한정됩니다.
- **취득 비용을 양도 측에 두는 것.** 계산은 살아남지만, 계산에 대한 세무조사는 그렇지
  못합니다.
- **매수자의 3%가 세액공제라는 점을 잊는 것.** 이는 귀하의 세액에 충당되어 납부되며
  초과하면 환급됩니다.
- **기념일을 확인하지 않고 매각 시기를 잡는 것.** 위 예에서 2026년 6월 20일이 아니라
  3월 10일에 매각했다면 10%가 아니라 15%의 5년차 양도가 되었을 것입니다 — 추가로
  RM16,100.

## 다음 단계

다른 무엇을 모델링하기 전에 취득일과 양도자 구분을 확정하십시오. 이들이 세율을 정하며,
나머지는 모두 과세표준의 크기만 정할 뿐입니다. 그다음 모든 조정에 대한 증빙 — 가치 증대
공사 송장, 보험사 합의서, 취득 인지 증명서 — 을 모으십시오. 각각이 개별적으로 검증을
통과해야 하기 때문입니다.

양도가 세율이 아니라 면제에 해당하면 신고 경로가 바뀝니다. 청구는 일반 부과가 아니라
CKHT 3으로 이루어지며, 취득자의 유보 의무가 이와 상호작용합니다.
