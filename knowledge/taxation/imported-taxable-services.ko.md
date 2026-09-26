---
topicId: MY-TAX-0033
title: "수입 과세 용역과 SST-02A 신고"
slug: "imported-taxable-services"
category: "taxation"
subcategory: ["sst"]
summary: "말레이시아 밖에서 구입한 용역에 대한 서비스세는 SST 등록을 하지 않았더라도 적용됩니다 — 제26A조에 따라 양식 SST-02A로 매월 신고합니다."

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "사업을 영위하면서 말레이시아 밖의 공급자로부터 과세 용역을 취득하는 경우, 등록하지 않았고 등록 의무가 없더라도 서비스세를 자가 신고해야 합니다. 비등록 취득자는 서비스세법 2018(Service Tax Act 2018) 제26A조에 따라 양식 SST-02A로, 매월, 지급이 이루어진 달 또는 송장을 받은 달 중 이른 것의 다음 달 마지막 날까지 신고합니다."
keyTakeaways:
  - "제26A조는 과세인 이외의 모든 자에게 적용됩니다 — 금액 기준은 없습니다"
  - "비등록 취득자는 SST-02가 아니라 양식 SST-02A(Form SST-02A)를 사용합니다"
  - "신고 기간은 격월 과세기간이 아니라 매월입니다"
  - "발생 시점은 지급이 이루어진 때와 송장을 받은 때 중 이른 것입니다"
  - "등록인은 통상의 SST-02 신고서 내에서 수입 용역을 신고합니다"
  - "이를 제한하는 요건은 「사업을 영위하면서」입니다 — 사적 소비는 제26A조 밖입니다"
appliesTo: "SST 등록 여부와 관계없이 해외 공급자에게 용역 대금을 지급하는 모든 말레이시아 사업체."

verificationNeeded:
  - "제1부칙(First Schedule)의 어느 그룹이 수입 대응 용역에 포함되는지, 그리고 그 제외 항목은 공식 출처에서 열거되지 않았습니다 — 그룹별 목록에 의존하기 전에 수입 과세 용역에 관한 RMCD 지침(RMCD Guide on Imported Taxable Services)에 대조하여 범위를 확인하십시오"
  - "외국 공급자가 디지털 용역 제도에 따라 외국 등록인으로 등록된 경우에도 말레이시아 사업 수령자가 여전히 제26A조에 따라 자가 신고해야 하는지 여부 — 이 상호작용은 흔히 잘못 기술되며 확인되지 않았습니다"

obligations:
  - what: "수입 과세 용역에 대한 서비스세 신고 및 납부(비등록인)"
    trigger: "ongoing"
    due: "지급이 이루어진 달 또는 송장을 받은 달 중 이른 것의 다음 달 마지막 날보다 늦지 않게"
    authority: "RMCD"
    statute: "Service Tax Act 2018, s.26A(1)"
    consequence: "제26A(2)조에 따라 최대 RM50,000의 벌금 또는 3년의 징역, 그리고 제26A(3)조에 따라 10%, 25%, 이어 40%의 납부 지연 벌금"

lang: "ko"
sourceContentHash: "08a2fb22e81e604e"
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
  - title: "Service Tax Act 2018 (Act 807), s.26A"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Service-Tax-Act-2018.pdf"
    publisher: "RMCD"
  - title: "Form SST-02A — Service Tax Declaration by Person Other Than Registered Person"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/SST-02A-Latest-Release.pdf"
    publisher: "RMCD"
  - title: "SST Forms"
    url: "https://mysst.customs.gov.my/sst-forms/"
    publisher: "RMCD"
  - title: "Service Tax (Rate of Tax) (Amendment) Order 2025, P.U.(A) 173/2025"
    url: "https://lom.agc.gov.my/ilims/upload/portal/akta/outputp/2905104/PUA%20173%20(2025).pdf"
    publisher: "Attorney General's Chambers"
    date: "2025-06-09"

entity: "Imported taxable services"
relations:
  - { rel: "administered-by", to: "rmcd" }
  - { rel: "governs", to: "service-tax-act-2018" }
  - { rel: "part-of", to: "sst-explained" }
related: ["sst-explained", "sst-registration", "sst-02-filing", "sst-rate-table"]
keywords: ["imported taxable services", "SST-02A", "section 26A service tax", "service tax on foreign services Malaysia", "self-accounting service tax"]
---

이것은 전체 SST 제도에서 가장 흔히 놓치는 부채이며, 그 이유는 구조적입니다. **등록하지 않았고 결코 등록할 필요가 없는** 사업체에 떨어지는 유일한 서비스세 의무입니다.

매출 RM200,000에, 자체 과세 용역이 없고, 기준을 넘을 전망도 없는 회사도 싱가포르의 스튜디오에서 구입한 디자인 작업에 대해 여전히 서비스세를 신고하고 납부해야 합니다.

## 제26A조는 누구를 포섭하는가?

서비스세법 2018(Service Tax Act 2018) 제26A조의 표제는 *과세자 이외의 자가 납부해야 할 서비스세의 신고 및 납부*입니다. 제(1)항은 **과세자 이외의 어떤 사람**이 사업을 영위하면서 수입 과세 용역을 취득하는 경우, 규정된 신고서로 세금을 신고하고 납부해야 한다고 규정합니다.

세 가지 특징이 이를 놓치기 쉽게 만듭니다.

- **금액 기준이 없습니다.** 제1부칙의 등록 기준은 용역 *제공자*로서의 등록을 규율합니다. 제26A조를 차단하지 않습니다. 한 건의 송장이면 충분합니다.
- **먼저 등록할 필요가 없습니다.** 의무는 독립적으로 존재합니다.
- **유일한 실질적 조건은 "사업을 영위하면서"입니다.** 스트리밍 구독을 개인적으로 구입하는 것은 제26A조 밖이고, 같은 용역을 사무실용으로 구입하는 것은 아닙니다.

*등록되어* 있다면 제26A조가 적용되지 않습니다 — 대신 통상적인 SST-02 신고서 안에서 수입 과세 용역을 신고합니다.

## 어느 양식으로, 언제까지?

비등록 취득자는 **양식 SST-02A**를 사용하며, 그 표제는 *등록자 이외의 자에 의한 서비스세 신고*입니다. RMCD의 지침은 SST-02가 판매세법 2018이나 서비스세법 2018에 따라 등록된 자만을 위한 것이고, SST-02A는 수입 과세 용역을 취득한 과세자 이외의 자만을 위한 것이라고 명시합니다.

시기가 사람들이 틀리는 곳입니다. 제26A(1)(b)조는 **용역에 대한 지급이 이루어졌거나 송장을 받은 달이 끝난 다음 달의 마지막 날까지** 납부하도록 요구합니다.

두 가지 결과:

- **기간은 매월**이며, 등록자가 사용하는 격월 과세기간이 아닙니다. 여기에는 2개월 주기가 없습니다.
- **발동 요건은 두 사건 중 이른 것입니다.** RMCD 지침은 수입 서비스세가 지급이 이루어진 때 또는 송장을 받은 때 중 이른 때에 만기가 된다고 명시합니다. 아직 지급하지 않은 송장을 받는 것이 기산을 시작합니다.

여전히 MySST 계정이 필요합니다. 비등록자는 SST-02A를 제출하기 전에 비등록자 모듈을 통해 사용자로 가입해야 합니다.

## 어떤 세율이 적용되는가?

수입 용역에 대한 특별 세율은 없습니다. 이들은 P.U.(A) 173/2025로 대체된 서비스세(세율) 명령 2018(Service Tax (Rate of Tax) Order 2018)에 따른 동등한 국내 용역의 세율을 취합니다 — **일반적으로 8%**, 또는 그 명령의 제1부칙에 나타나는 용역의 경우 **6%**입니다. 제1부칙은 식음료, 통신, 주차, 물류, 의료, 전통·보완 의학, 관련 보건, 건설 공사, 교육을 다루며, 2026년 1월 1일부터 임대나 리스가 추가됩니다.

수입 과세 용역이 2025년 7월 1일을 걸치는 경우, P.U.(A) 173/2025 제5(c)항은 그 날짜 이후 기간에 귀속되는 용역 비율에 시행 후 세율을 적용합니다.

## 잘못했을 때의 비용

제26A(2)조는 신고 불이행이나 부정확한 신고를 최대 **RM50,000**의 벌금 또는 최대 **3년** 징역, 또는 병과를 수반하는 범죄로 만듭니다.

이어 제26A(3)조는 주 제도와 동일한 단계적 지연 납부 벌칙을 적용합니다. 첫 30일 기간에 10%, 두 번째에 추가 15%, 세 번째에 추가 15% — 90일에 **누적 40%**입니다.

의무가 매월이고 흔히 몇 년간 간과되므로, 노출은 하나의 눈에 띄는 불이행으로 도래하기보다 많은 작은 기간에 걸쳐 조용히 복합됩니다.

## 흔한 실수

- **등록하지 않았으므로 안전하다고 가정하는 것.** 제26A조는 바로 비등록자를 겨냥합니다.
- **SST-02를 사용하는 것.** 비등록 취득자는 SST-02A를 사용합니다.
- **기간을 격월로 취급하는 것.** 매월입니다.
- **지급 때까지 기다리는 것.** 발동 요건은 지급이나 송장 중 먼저 오는 것입니다.
- **기준이 적용된다고 가정하는 것.** 제26A조에는 없습니다.

## 다음 단계

1년치 해외 공급자 지급을 과세 용역 그룹에 대조하여 어느 취득이 범위에 드는지 식별하십시오. 과거 노출을 발견하면, RMCD에 어떻게 접근할지 결정하기 전에 제26A(3)조 벌칙을 산정하십시오 — 벌칙은 40%에서 상승을 멈추며, 이는 자진신고의 산식을 바꿉니다.

등록된 사업체는 SST-02A를 병행 제출하기보다 SST-02 신고서에서 수입 용역을 잡고 있는지 확인해야 합니다.
