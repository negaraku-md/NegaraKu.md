---
topicId: MY-TEC-0016
title: "고객 정보를 AI 도구에 입력하기 전에: 말레이시아 중소기업 체크리스트"
seoTitle: "AI 도구 속 고객 데이터: 말레이시아 중소기업 PDPA 체크리스트"
slug: "before-putting-client-data-into-ai"
category: "technology"
subcategory: ["digital"]
summary: "고객의 정보를 챗봇이나 AI 도구에 붙여넣는 일은 간편합니다 — 그리고 그 과정에서 말레이시아의 Personal Data Protection Act 2010(개인정보보호법), 직업상 비밀유지 의무, 또는 NDA를 자신도 모르게 위반할 수 있습니다. 다른 사람의 AI를 쓴다고 해서 법적 책임이 넘어가지는 않습니다: 귀하는 여전히 data controller(개인정보 관리자)입니다. 이 벤더 중립 체크리스트는 PDPA 원칙, 국경 간 이전, 민감정보, 확인해야 할 제공자 약관, 그리고 먼저 적용해야 할 안전장치를 다룹니다."
tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "고객의 개인정보를 제3자 AI 도구에 입력하기 전에, 이를 편의의 문제가 아니라 개인정보보호에 관한 결정으로 다루십시오. 말레이시아의 Personal Data Protection Act 2010(PDPA, Act 709)에 따르면, 고객 데이터를 외부 도구에 입력하는 것은 '처리(processing)'이며 대개 공개(disclosure) 또는 이전(transfer)에 해당합니다 — 그리고 그 도구가 남의 것이라 하더라도 귀하의 사업체는 data controller로서 법적 책임을 그대로 집니다. 따라서 귀하는 여전히 일곱 가지 PDPA 원칙(적법한 근거와 통지, 통지한 범위를 넘는 공개 금지, 보안, 필요 이상 보관 금지, 정확성, 열람 요청 이행)을 준수해야 합니다. 특히 네 가지를 구체적으로 점검해야 합니다: 그 도구가 말레이시아 밖에서 데이터를 저장하거나 처리하는지(PDPA 요건을 충족해야 하는 국경 간 이전); 데이터 중 민감 개인정보(건강, 종교, 생체정보 등)가 있는지(더 엄격한 취급 필요); 제공자 자체 약관이 귀하의 입력값을 학습에 사용하는지, 보관, 삭제, 하위 처리자, 서버 위치에 관해 무엇이라 말하는지; 그리고 직업상 비밀유지 의무나 NDA가 별개로 이를 금지하는지. 가장 안전한 기본 원칙은 데이터를 먼저 최소화·익명화하고, 적절한 약관을 갖춘 비즈니스 등급을 쓰며, 작업에 꼭 필요한 것만 입력하는 것입니다. PDPA는 2024년에 개정되었으며(침해 통지, Data Protection Officer 의무, 데이터 이동성, 새로운 국경 간 이전 규칙), 그 변경 사항은 2025년에 걸쳐 단계적으로 시행되었다는 점에 유의하십시오 — 현재 상황은 pdp.gov.my에서 확인하십시오."
keyTakeaways:
  - "다른 사람의 AI 도구를 쓴다고 해서 법적 책임이 넘어가지는 않습니다 — Personal Data Protection Act 2010(Act 709)에 따라 귀하의 사업체는 입력한 고객 데이터에 대해 여전히 data controller입니다"
  - "고객 개인정보를 외부 AI 도구에 입력하는 것은 '처리(processing)'이며 대개 공개/이전에 해당하므로, 일곱 가지 PDPA 원칙(적법한 근거 + 통지, 공개 제한, 보안, 보관, 정확성, 열람)이 그대로 적용됩니다"
  - "국경 간 점검: 많은 AI 도구가 데이터를 말레이시아 밖에서 저장하거나 처리합니다 — 이는 PDPA 요건(예: 충분한 보호, 명시적 동의, 계약상 필요, 또는 문서화된 안전장치)을 충족해야 하는 국경 간 이전입니다"
  - "민감 개인정보(건강, 종교, 생체정보 등)는 더 엄격한 취급이 필요합니다 — 명시적 동의와 약관에 대한 신중한 검토 없이 일반 AI 도구에 입력하지 마십시오"
  - "제공자 자체 약관(마케팅 문구가 아니라)을 읽으십시오: 귀하의 입력값으로 모델을 학습시키는가? 얼마나 오래 보관되며 삭제할 수 있는가? 하위 처리자는 누구이며 서버는 어디에 있는가? data-processing agreement와 학습 거부(no-training) 옵션을 갖춘 비즈니스 등급이 있는가?"
  - "PDPA만이 유일한 의무가 아닙니다 — 직업상 비밀유지 의무(예: 변호사, 회계사, 의사)나 NDA가 고객 정보를 외부 도구에 입력하는 것을 별개로 금지할 수 있습니다"
appliesTo: "고객 또는 소비자의 개인정보를 AI 챗봇이나 도구에 입력하려는 말레이시아 중소기업, 전문직 종사자, 직원, 그리고 PDPA와 비밀유지 의무 안에서 이를 수행하기 위한 평이한 체크리스트가 필요한 모든 사람."

faq:
  - q: "AI 도구가 다른 회사 것이라면, 개인정보보호는 그들의 문제인가요?"
    a: "아닙니다. Personal Data Protection Act 2010에 따라, 귀하의 사업체가 처리하기로 결정한 고객 데이터에 대해서는 귀하의 사업체가 data controller이며, 그 책임은 도구가 그들의 것이라는 이유만으로 도구 제공자에게 넘어가지 않습니다. 제공자는 귀하를 대신하는 processor(처리자)로 활동하며, 귀하는 여전히 PDPA 원칙을 충족해야 하고 — 여기에는 처리자가 충분한 보안 보장을 제공하도록 하는 것도 포함됩니다 — 데이터에 대해 책임을 집니다. 요컨대, 다른 사람의 AI를 쓴다고 해서 법적 책임이 넘어가지는 않습니다."
  - q: "AI 도구의 서버가 어디에 있는지가 중요한가요?"
    a: "네, 매우 중요합니다. 많은 AI 도구가 말레이시아 밖의 서버에서 데이터를 저장하거나 처리하며, 고객 개인정보를 그곳으로 보내는 것은 PDPA가 규율하는 국경 간 이전입니다. 2024년 개정으로 도입된 규칙에 따르면, 그러한 이전은 적어도 한 가지 요건을 충족할 때에만 허용됩니다 — 예를 들어 목적지가 충분하거나 실질적으로 유사한 보호를 제공하는 경우, 정보주체가 명시적 동의를 한 경우, 이전이 계약에 필요한 경우, 또는 문서화된 안전장치를 갖춘 경우입니다. 도구가 어디에서 데이터를 처리하는지 확인하고 어떤 요건이 적용되는지 확실히 하십시오; 현재 요건은 pdp.gov.my에서 확인하십시오."
  - q: "데이터를 익명화해서 붙여넣기만 하면 되나요?"
    a: "먼저 최소화하고 익명화하는 것은 정확히 올바른 직관이자 가장 안전한 기본 원칙입니다 — 이름, 신분증 번호, 연락처, 계좌번호를 제거하고 작업에 진정으로 필요한 것만 입력하십시오. 다만 주의하십시오: 다른 정보와 결합하면 여전히 누군가를 식별할 수 있는 데이터는 진정으로 익명이 아닐 수 있으며, 부분적인 정보로도 사람이 재식별될 수 있습니다. 민감한 것이거나 식별자를 제거할 수 없는 경우에는 이를 개인정보로 다루고, 익명화가 의무를 없애준다고 가정하기보다 전체 체크리스트를 적용하십시오."
  - q: "고객과 NDA를 체결했습니다 — PDPA 체크리스트가 그것도 포함하나요?"
    a: "아닙니다 — 둘 다 통과해야 하는 별개의 관문으로 다루십시오. PDPA를 충족하더라도, 비밀유지 조항, NDA, 또는 직업상 비밀 의무(예: 변호사의 경우 Legal Profession Act 1976, 회계사의 경우 MIA 내규, 의사의 경우 Malaysian Medical Council 규정, 또는 인가된 금융기관의 경우 Financial Services Act 2013)가 고객의 정보를 AI 제공자를 포함한 어떤 제3자에게도 동의 없이 공개하는 것을 별개로 금지할 수 있습니다. 무언가를 입력하기 전에 개인정보보호 측면과 비밀유지 의무를 둘 다 확인하십시오."

lang: "ko"
translationStatus: "in-sync"
sourceContentHash: "9312aca05cc75d07"
masterLanguage: "en"

status: "published"
aiAssisted: true
reviewer: null
reviewed: "2026-11-17"
reviewDue: 2027-11-17
publishedBy: "ashton-tan"
revision: 0
revisions:
  - revision: 0
    date: 2026-11-17
    change: "Drafted and published."
    reviewer: null

verificationNeeded:
  - "The Personal Data Protection (Amendment) Act 2024 provisions (data breach notification, mandatory DPO appointment, data portability, and the revised cross-border transfer framework) were phased into force across 2025; exact in-force dates, the DPO-appointment thresholds (which come from a guideline, not the Act), any breach-notification timeframe, and penalty figures are time-sensitive — the article hedges these and directs readers to pdp.gov.my to confirm the current position. Do not state a specific DPO threshold, breach-notification deadline or penalty figure as settled fact without checking the current guideline/Act."
  - "Exact section numbers for the seven principles and for the new DPO/breach/portability/cross-border provisions shifted with the 2024 renumbering; the article cites the principles and duties by name rather than pinning section numbers."
  - "The specific confidentiality rule/section for each named profession should be confirmed against that profession's governing instrument before being cited chapter-and-verse."

updated: 2026-11-17
sources:
  - title: "Personal Data Protection Act 2010 (Act 709)과 일곱 가지 Personal Data Protection Principles(개인정보보호 원칙)"
    url: "https://www.pdp.gov.my/jpdpv2/"
    publisher: "개인정보보호부(Personal Data Protection Department, JPDP), 디지털부(Ministry of Digital)"
  - title: "Personal Data Protection (Amendment) Act 2024 — 침해 통지, DPO, 데이터 이동성, 국경 간 이전"
    url: "https://www.pdp.gov.my/jpdpv2/"
    publisher: "개인정보보호부(Personal Data Protection Department, JPDP)"
  - title: "국경 간 개인정보 이전 지침(Cross-Border Personal Data Transfer Guideline, 2025)"
    url: "https://www.pdp.gov.my/jpdpv2/"
    publisher: "개인정보보호위원(Personal Data Protection Commissioner)"
  - title: "Data Protection Laws of the World — Malaysia(PDPA 개요, 민감정보, controller/processor)"
    url: "https://www.dlapiperdataprotection.com/index.html?t=law&c=MY"
    publisher: "DLA Piper"

entity: "Using AI tools with personal data under the PDPA (Malaysia)"
relations:
  - { rel: "related-to", to: "pdpa-compliance-malaysia" }
  - { rel: "related-to", to: "data-protection-officer-malaysia" }
  - { rel: "related-to", to: "data-breach-notification-malaysia" }
related: ["pdpa-compliance-malaysia", "data-protection-officer-malaysia", "data-breach-notification-malaysia"]
keywords: ["말레이시아 AI 도구 고객 데이터", "PDPA AI 챗봇", "Personal Data Protection Act 2010 AI", "말레이시아 국경 간 데이터 이전", "말레이시아 AI 비밀유지 NDA", "중소기업 AI 데이터 체크리스트", "말레이시아 data controller AI", "민감 개인정보 AI", "Act 709 AI 도구"]
framework: decision
---

고객의 이메일, 그들의 불만 사항, 또는 이름으로 가득한 계약서를 챗봇에
붙여넣고 요약이나 답변을 요청하는 데에는 2초면 충분합니다. 바로 그 편리함이
위험입니다: 그 2초 동안 한 사업체는 말레이시아 개인정보보호법을 위반하여
개인정보를 제3자에게 공개하거나, 고객에게 지는 비밀유지 의무를 깨뜨리거나,
자신이 서명한 NDA를 위반할 수 있습니다 — 누구도 그렇게 하기로 결정하지
않았는데도 말입니다.

유용한 사고 모델은 이것입니다: **다른 사람의 AI 도구를 쓴다고 해서 법적
책임이 넘어가지는 않습니다.** **Personal Data Protection Act 2010(PDPA,
Act 709)**에 따라, 귀하의 사업체는 처리하기로 선택한 고객 데이터에 대한
**data controller(개인정보 관리자)**이며, 그 도구가 남의 것이라 하더라도
그 책임은 귀하에게 그대로 남습니다. 다음은 데이터를 입력하기 전에
점검해야 할 짧은 체크리스트입니다.

## 1. 귀하는 여전히 일곱 가지 PDPA 원칙을 준수해야 합니다

고객 개인정보를 외부 AI 도구에 입력하는 것은 PDPA에 따른 **처리(processing)**이며,
대개 제공자에게 하는 **공개(disclosure) 또는 이전(transfer)**입니다. 따라서
이 법의 **일곱 가지 Personal Data Protection Principles(개인정보보호 원칙)**이
그대로 적용됩니다. 쉽게 말해, 데이터를 입력하기 전에 다음을 자문하십시오:

- **적법한 근거와 통지** — 동의나 다른 적법한 근거가 있으며, 귀하의
  개인정보 처리방침(privacy notice)이 고객에게 그들의 데이터가 제3자 도구나
  벤더에 의해 처리될 수 있음을 알렸는가?
- **공개** — AI 제공자에게 데이터를 보내는 것은 공개입니다; 그것이 귀하가
  통지한 목적과 수령자의 범위 안에 있는가?
- **보안** — 그 도구는 충분히 안전한가, 그리고 제공자(귀하의 처리자)가
  충분한 보안 보장을 제공하도록 하는 서면 약정이 있는가?
- **보관** — 그 도구가 귀하의 입력값을 보관하는가, 얼마나 오래 보관하며,
  삭제할 수 있는가? 데이터가 필요 이상으로 남아 있지 않도록 하십시오.
- **데이터 무결성** — AI 출력은 틀리거나 지어낸 것일 수 있습니다; 귀하가
  의존하는 개인정보의 정확성에 대해서는 귀하가 여전히 책임집니다.
- **열람** — 요청이 있을 때 귀하는 여전히 고객의 데이터를 찾고, 가져오고,
  정정할 수 있어야 하는데, 데이터가 불투명한 제3자 시스템 안에 흩어져
  있으면 이는 어렵습니다.

## 2. 데이터가 어디로 가는지 확인하십시오 — 국경 간 이전

많은 AI 도구가 **말레이시아 밖의 서버에서 데이터를 저장하거나 처리합니다.**
고객 개인정보를 그러한 도구에 입력하는 것은 PDPA가 규율하는 **국경 간
이전(cross-border transfer)**입니다. 2024년 개정으로 도입된 체계에 따르면,
해외로의 이전은 **적어도 한 가지 요건을 충족할 때에만** 허용됩니다 — 예를
들어 목적지가 **충분하거나 실질적으로 유사한 보호**를 제공하는 경우,
정보주체가 **명시적 동의**를 한 경우, 이전이 **계약에 필요한** 경우,
또는 계약 조항과 같은 **문서화된 안전장치**를 갖춘 경우입니다.

따라서 **그 도구가 데이터를 어디에서 처리하는지** 알아내고, 어떤 요건이
적용되는지 확실히 하십시오 — 동의만으로 항상 커버된다고 가정하지 마십시오.
정확한 요건은 위원(Commissioner)의 국경 간 이전 지침에 담겨 있습니다;
현재 상황은 **pdp.gov.my**에서 확인하십시오.

## 3. 그중에 민감 개인정보가 있는가?

PDPA는 **민감 개인정보(sensitive personal data)** — 건강, 종교 또는 기타
신념, 정치적 견해, 범죄 경력, 그리고 (2024년 개정 이후) **생체정보(biometric
data)**를 포함 — 를 더 엄격하게 취급하며, 더 좁은 근거 가운데 일반적으로
**명시적 동의**를 요구합니다. 건강 기록, 종교 정보, 생체정보 또는 이와
유사한 것을 명시적 동의와 도구 약관에 대한 신중한 검토 없이 일반 AI 도구에
입력하지 **마십시오**. 이 경우 기준이 더 높고, 유출로 인한 피해도 더 큽니다.

## 4. 제공자 자체 약관을 읽으십시오 — 마케팅 문구가 아니라

어떤 도구를 고객 데이터와 함께 쓰는 것이 안전한지는 그 도구의 홈페이지가
아니라 **이용약관(Terms of Service), 개인정보 처리방침(Privacy Policy),
그리고 Data Processing Addendum**이 답합니다. **어떤** 도구에든 물어야 할
변치 않는 질문들:

- **학습:** 제공자가 귀하의 입력값을 사용하여 **자사 모델을 학습하거나
  개선하는가**, 그리고 학습 거부(opt-out)나 기본적으로 학습이 꺼진 등급이
  있는가?
- **보관과 삭제:** 입력값과 출력값이 얼마나 오래 보관되며, 그것들(및 사본)을
  삭제할 수 있는가?
- **하위 처리자와 위치:** 하위 처리자(sub-processor)는 누구이며, 서버는
  **어느 나라**에 있는가? (다시 국경 간 점검으로 돌아갑니다.)
- **비즈니스 등급:** **data-processing agreement, 계약상 비밀유지, 학습
  거부(no-training) 약정을 갖춘 비즈니스 또는 엔터프라이즈 플랜**이 있는가?
  무료 및 소비자 등급에는 이런 것이 없는 경우가 많습니다.
- **보안과 침해:** 암호화, 접근 통제, 인정받는 보안 표준, 그리고 귀하 자신의
  의무를 제때 이행할 수 있도록 **침해 발생 시 귀하에게 통지**하겠다는 약속.

## 5. PDPA만이 유일한 의무가 아닙니다 — 비밀유지와 NDA

PDPA를 충족하더라도, 별개의 의무가 여전히 데이터 입력을 금지할 수 있습니다.
많은 전문직은 **PDPA와 독립적이며 종종 그보다 더 엄격한 비밀유지 의무**를
집니다 — 예를 들어 변호사는 **Legal Profession Act 1976**에 따라, 회계사는
**Malaysian Institute of Accountants(MIA)** 내규에 따라, 의사는
**Malaysian Medical Council** 규정에 따라, 그리고 인가된 금융기관은
**Financial Services Act 2013**에 따라 그러합니다. 그리고 귀하의 고객
계약서에 있는 **비밀유지 조항이나 NDA**는 고객의 정보를 AI 제공자를 포함한
어떤 제3자에게도 동의 없이 공개하는 것을 별개로 금지할 수 있습니다.
개인정보보호 측면과 비밀유지 의무를 **둘 다 확인하십시오**.

## 안전한 기본 원칙

의심스러울 때에는 덜 하십시오:

- **먼저 최소화하고 익명화하십시오** — 이름, 신분증 번호, 연락처와 계좌
  정보를 제거하고, 작업에 진정으로 필요한 것만 입력하십시오.
- 고객 데이터가 조금이라도 관련될 때에는 data-processing agreement,
  학습 거부(no-training) 약관, 정해진 보관 기간을 갖춘 **비즈니스 등급을
  사용하십시오**.
- 제3자 처리가 아직 커버되지 않은 경우 **통지를 갱신하거나 동의를
  받으십시오**.
- **기록을 남기십시오** — 어떤 도구, 어떤 데이터, 어떤 근거, 어떤
  안전장치인지 — 그래야 책임성을 보일 수 있고 열람 요청에 답할 수 있습니다.
- **짧은 내부 AI 사용 정책을 작성하십시오** — 직원들에게 AI 도구에 무엇을
  입력해도 되고 안 되는지, 어떤 도구가 승인되었는지, 그리고 익명화 규칙을
  알려주는 정책.

## 2024년 개정에 관한 참고

PDPA는 **2024년**에 개정되었고, 그 변경 사항은 **2025년**에 걸쳐 단계적으로
시행되었습니다: 의무적 **데이터 침해 통지(data breach notification)**,
대규모 처리에 대한 **Data Protection Officer(DPO)** 임명 의무, **데이터
이동성(data portability)** 권리, 그리고 위에서 다룬 **새로운 국경 간 이전**
체계입니다. 정확한 시행일, DPO 기준, 그리고 모든 벌칙 수치는 유동적이며
일부는 법 자체가 아니라 지침으로 정해집니다 — 따라서 의무의 큰 틀은 변치
않는 것으로 다루되, 특정 수치나 기한에 의존하기 전에 **pdp.gov.my에서 현재의
세부 사항을 확인하십시오**.

## 다음 단계

- 이 법의 의무 전체에 대해서는 일반
  [PDPA 준수 개요](/ko/business/pdpa-compliance-malaysia)를 읽어보십시오.
- 귀하의 조직에
  [Data Protection Officer](/ko/business/data-protection-officer-malaysia)가
  필요한지, 그리고
  [데이터 침해 통지](/ko/business/data-breach-notification-malaysia) 의무가
  무엇을 수반하는지 확인하십시오.
- 어떤 새로운 도구에 고객 데이터를 입력하기 전에, 공식 포털
  **pdp.gov.my**에서 현재의 개정 상황, 지침, 국경 간 이전 요건을
  확인하십시오.
