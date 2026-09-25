---
topicId: MY-BIZ-0066
title: "말레이시아의 개인정보 침해 통지: 72시간 규칙"
seoTitle: "말레이시아 개인정보 침해 통지: 72시간 설명"
slug: "data-breach-notification-malaysia"
category: "business"
subcategory: ["digital-compliance"]
summary: "s.12B는 실무상 가능한 한 신속히라고 말합니다; 모두가 인용하는 72시간은 지침에 있습니다. 시계가 언제 시작되는지, 중대한 피해가 무엇을 의미하는지, 그리고 1,000명 기준이 왜 고객에게 알려야 하는지를 결정하지 않는지를 다룹니다."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "2025년 6월 1일 이후, 개인정보보호법(Personal Data Protection Act 2010) s.12B는 데이터 관리자가 개인정보 침해를 실무상 가능한 한 신속히 커미셔너에게 통지하도록 요구합니다. 개인정보 침해 통지 지침(Data Breach Notification Guideline)은 침해가 중대한 피해를 초래하거나 초래할 가능성이 있는 경우 이를 침해 발생 시점으로부터 72시간 이내로 규정합니다. 영향을 받는 정보주체에게는 그 통지로부터 7일 이내에 통지해야 합니다. 커미셔너에게 통지하지 않으면 RM250,000 또는 2년입니다."
keyTakeaways:
  - "Section 12B commenced 1 June 2025; the 72-hour figure is in guideline paragraph 6.1, not in the Act"
  - "The statutory standard in s.12B(1) is as soon as practicable — 72 hours is the outer limit"
  - "Notification is required only where the breach causes or is likely to cause significant harm"
  - "Significant scale means more than 1,000 affected data subjects — one of five significant-harm limbs"
  - "Paragraph 8.2: the 1,000-subject limb does NOT apply to data-subject notification"
  - "Data subjects must be told within 7 days of the notification to the Commissioner"
  - "Missing 72 hours does not end the duty — paragraph 7.7 requires a written explanation with evidence"
appliesTo: "Every data controller under Act 709, whether or not it belongs to a registrable class or needs a data protection officer."

faq:
  - q: "When exactly does the 72-hour clock start?"
    a: "From the occurrence of the breach, but paragraph 6.2 makes clear you first run a preliminary investigation to determine whether a breach actually occurred. The examples set the practical start points: for a lost unencrypted USB key, when you are informed of the loss; for a misdirected disclosure, when you realise the mistake; for a suspected network compromise, when your inspection confirms the system was compromised; for ransomware, when you realise you have lost access or confirm the breach after being told by the attacker; and where a data processor is involved, when the processor notifies you or you obtain clear evidence yourself, whichever is earlier."
  - q: "Do I have to notify every breach?"
    a: "No. Paragraph 5.1 is explicit that not all personal data breaches are notifiable. The test is whether the breach causes or is likely to cause significant harm. The guideline's own example of a non-notifiable breach is the theft of an encrypted laptop containing the email addresses of 200 employees — not likely to result in significant harm."
  - q: "What counts as significant harm?"
    a: "Paragraph 5.2 lists five limbs. Compromised data that may result in physical harm, financial loss, a negative effect on credit records or damage to or loss of property; that may be misused for illegal purposes; that consists of sensitive personal data; that combined with other information could enable identity fraud; or that is of significant scale. Paragraph 5.3 defines significant scale as more than 1,000 affected data subjects."
  - q: "If more than 1,000 people are affected, do I have to tell them all?"
    a: "Not automatically, and this is the point most summaries get wrong. Paragraph 8.2 applies the paragraph 5.2 definition of significant harm to data-subject notification but states expressly that the significant scale criterion in paragraph 5.3 does not apply when determining whether notification to affected data subjects is required. A breach that is notifiable to the Commissioner purely on volume is not, on that basis alone, notifiable to the individuals."
  - q: "What if I cannot gather all the information within 72 hours?"
    a: "Notify anyway. Paragraph 7.5 allows the information required by paragraph 7.4 to be supplied in phases, as soon as practicable and no later than 30 days from the date of the initial notification. What you cannot do is delay the notification itself while you investigate."
  - q: "What happens if I miss the 72 hours?"
    a: "Paragraph 7.7 requires a written notice to the Commissioner setting out the reasons for the delay with supporting evidence — the incident timeline, internal communications and any technical or external factors — submitted together with the notification. The duty does not lapse; it becomes a late notification with an explanation attached."

verificationNeeded:
  - "Whether JPDP has published any enforcement outcome or compound under s.12B(3) since 1 June 2025"
  - "Whether the online notification form on pdp.gov.my imposes any mandatory field beyond those listed at paragraph 7.4 of the guideline"

obligations:
  - what: "Notify the Commissioner of a personal data breach causing or likely to cause significant harm"
    trigger: "change"
    withinDays: 3
    due: "as soon as practicable and no later than 72 hours from the occurrence of the breach"
    authority: "JPDP"
    statute: "Personal Data Protection Act 2010, s.12B(1)"
    consequence: "Fine up to RM250,000 or imprisonment up to 2 years or both"
  - what: "Notify affected data subjects where the breach results or is likely to result in significant harm"
    trigger: "change"
    withinDays: 7
    due: "without unnecessary delay and not later than 7 days after the notification to the Commissioner"
    authority: "JPDP"
    statute: "Personal Data Protection Act 2010, s.12B(2)"
    consequence: "Non-compliance with a duty under Act 709"
  - what: "Complete phased submission of outstanding breach details"
    trigger: "change"
    withinDays: 30
    due: "no later than 30 days from the date of the initial notification"
    authority: "JPDP"
    statute: "Data Breach Notification Guideline, paragraph 7.5"
    consequence: "Incomplete notification"

lang: "ko"
sourceContentHash: "69d11280d19d99c8"
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
  - title: "Personal Data Protection Guideline — Data Breach Notification, Version 1.0"
    url: "https://www.pdp.gov.my/ppdpv1/wp-content/uploads/2025/08/GP_DBN_ENG.pdf"
    publisher: "Personal Data Protection Commissioner Malaysia"
    date: "2025-02-25"
  - title: "Personal Data Protection (Amendment) Act 2024 [Act A1727]"
    url: "https://lom.agc.gov.my/ilims/upload/portal/akta/outputaktap/2430673_BI/Act%20A1727.pdf"
    publisher: "Attorney General's Chambers"
    date: "2024-10-17"
  - title: "Personal Data Protection (Amendment) Act 2024 — Appointment of Date of Coming into Operation [P.U. (B) 522/2024]"
    url: "https://lom.agc.gov.my/ilims/upload/portal/akta/outputp/2587515/PUB%20522_2024.pdf"
    publisher: "Attorney General's Chambers"
    date: "2024-12-24"
  - title: "Guidelines and Circulars on Data Breach Notification (DBN)"
    url: "https://www.pdp.gov.my/ppdpv1/en/guidelines-and-circulars-on-data-breach-notification-dbn/"
    publisher: "Personal Data Protection Commissioner Malaysia"
    date: "2025-02-25"

entity: "Data breach notification"
relations:
  - { rel: "requires", to: "pdpa-compliance-malaysia" }
  - { rel: "administered-by", to: "jpdp" }
  - { rel: "governs", to: "personal-data-protection-act-2010" }
related: ["pdpa-compliance-malaysia", "data-protection-officer-malaysia"]
keywords: ["data breach notification malaysia", "72 hours pdpa", "section 12b pdpa", "significant harm pdpa", "report data breach malaysia"]
---

72시간은 법률에 있지 않습니다.

개인정보보호법(Personal Data Protection Act 2010) s.12B(1)은 개인정보 침해가 발생했다고 믿을
이유가 있는 데이터 관리자가 커미셔너가 정하는 방식과 양식으로 **실무상 가능한 한 신속히**
커미셔너에게 통지하도록 규정합니다. 그것이 법정 기한의 전부입니다. 72시간은 s.48(g)에 따라 2025년
2월 25일에 발행된 *개인정보보호 지침: 개인정보 침해 통지(Personal Data Protection Guideline: Data
Breach Notification)* Version 1.0의 조항 6.1에서 나옵니다.

그 숫자가 어디에 있는지 아는 것이 중요합니다. 그것은 귀하가 판단받게 될 법정 기준이 "실무상
가능한 한 신속히"임을 알려줍니다 — 72시간은 커미셔너의 최대 한도이지, 그것을 모두 사용해도 된다는
허가가 아닙니다.

## 어떤 침해를 보고해야 하는가?

Section 12B는 Act A1727의 s.6에 의해 삽입되고 P.U.(B) 522/2024에 의해 지정되어 **2025년 6월
1일**에 시행되었습니다. 이는 등록 가능 부류에 속하는지 또는 데이터 보호 책임자가 필요한지와
관계없이 모든 데이터 관리자를 구속합니다.

조항 5.1은 단호합니다: 모든 침해가 통지 대상은 아닙니다. 그 관문은 **중대한 피해**이며, 조항
5.2는 이를 침해된 데이터가 다음과 같을 위험으로 정의합니다:

1. 신체적 피해, 금전적 손실, 신용 기록에 대한 부정적 영향, 또는 재산의 손괴나 상실을 초래할 수
   있는 경우;
2. 불법적 목적으로 오용될 수 있는 경우;
3. **민감한 개인정보(sensitive personal data)**로 구성된 경우;
4. 다른 정보와 결합될 때 **신원 사기(identity fraud)**를 가능하게 할 수 있는 개인정보로 구성된
   경우; 또는
5. **중대한 규모(significant scale)**인 경우 — 이는 조항 5.3이 **영향받는 정보주체 1,000명 초과**로
   확정합니다.

지침의 실무 예시가 여기서 유용합니다. 환자 의료 기록에 대한 무단 접근은 의료 데이터가 민감한
개인정보이므로 **인원수와 관계없이** 통지 대상입니다. 잘못된 수신자에게 이메일로 발송된 계좌
명세서는 금융 정보를 포함하므로 통지 대상입니다. 직원 200명의 이메일 주소를 담은 **암호화된**
노트북의 도난은 **통지 대상이 아닙니다** — 암호화와 낮은 민감도의 데이터는 중대한 피해가 없음을
의미합니다.

## 시계는 언제 시작되는가?

조항 6.1은 기한을 **개인정보 침해 발생 시점**으로부터 72시간 이내로 설정합니다. 조항 6.2는 이어서
실무적 규칙을 제공합니다: 보안 사고를 알게 되면 침해가 실제로 발생했는지 확인하기 위해 예비 조사를
실시합니다.

예시는 시나리오별로 시작점을 확정합니다:

| 시나리오 | 시계 시작 |
| --- | --- |
| 암호화되지 않은 개인정보가 담긴 USB 키 분실 | 분실을 통보받는 즉시 |
| 승인 없이 개인정보 발송 | 실수를 인지하는 즉시 |
| 네트워크 침해 의심 | 점검으로 시스템 침해가 확인될 때 |
| 랜섬웨어 | 접근 권한을 잃었음을 인지하거나, 공격자로부터 통보받은 후 침해를 확인할 때 |
| 데이터 처리자에서의 침해 | 처리자가 통지하거나 귀하가 명확한 증거를 확보할 때 — **더 이른 시점** |

마지막 줄이 귀하의 공급업체 계약서에 넣어야 할 내용입니다. 귀하의 72시간은 귀하가 아니라 처리자의
인지 시점부터 흐르기 시작할 수 있습니다.

## 어떻게 통지하고, 무엇을 담는가?

조항 7.1은 세 가지 채널을 제공합니다: pdp.gov.my의 양식, 또는 dbnpdp@pdp.gov.my로 이메일 발송하는
Annex B 양식, 또는 커미셔너에게 제출하는 종이 사본.

조항 7.3은 강조할 만한 함정을 덧붙입니다 — **커미셔너가 확인 통지를 발행하며, 그것 없이는 통지가
제출된 것으로 간주되지 않습니다.** 양식을 보내는 것은 통지를 완료한 것과 같지 않습니다.

필수 항목 외에, 조항 7.4는 탐지 일시, 데이터 유형과 침해의 성격, 탐지 방법과 추정 원인, 영향받는
정보주체 수와 영향받는 추정 레코드 수, 관련 시스템, 잠재적 결과, 경위, 취해졌거나 계획된 구제 및
완화 조치, 영향받는 정보주체를 위한 조치, 그리고 DPO 또는 기타 연락 담당자의 연락처를 요구합니다.

제때 그 전부를 제공할 수 없다면, 조항 7.5는 단계적으로 제출하도록 허용합니다 — 다만 최초 통지로부터
**30일**을 넘지 않아야 합니다. 침해가 둘 이상의 데이터 관리자에 걸쳐 있는 경우, 조항 7.6은 각자가
별도로 제출하도록 요구합니다.

72시간을 놓치면 조항 7.7은 사유에 대한 서면 통지를 뒷받침 증거와 함께 요구합니다: 사고 경위, 내부
소통, 기술적 또는 외부적 요인, 이 모두를 통지와 함께 제출합니다.

## 고객에게는 언제 알려야 하는가?

Section 12B(2)는 침해가 정보주체에게 중대한 피해를 초래하거나 초래할 가능성이 있는 경우 불필요한
지연 없이 정보주체에게 통지하도록 요구합니다. 조항 9.1은 이를 커미셔너에 대한 최초 통지로부터
**7일 이내**로 설정합니다.

그다음, 거의 모든 요약이 누락하는 조항이 나옵니다.

**조항 8.2: 영향받는 정보주체에게 통지가 필요한지를 판단할 때 조항 5.3의 중대한 규모 기준은
적용되지 않는다.**

따라서 1,000명 기준은 일방통행문입니다. 그것은 침해를 커미셔너에게 통지 대상으로 만들 수 있지만,
그 자체만으로는 결코 침해를 개인에게 통지 대상으로 만들 수 없습니다. 낮은 민감도의 데이터만
담은 50,000건의 레코드 유출은 푸트라자야로 가고 거기서 멈춥니다. 나머지 네 가지 기준으로 개인의
입장을 평가하십시오.

지침의 예시가 그 방향을 확인해줍니다. 금융기관에서 고객의 이름, 계좌번호 및 비밀번호를 도난당한
경우: 금전적 손실이 예상되고 신원 사기가 가능해지므로 정보주체에게 통지합니다. 서버는 침해되었으나
이중 보안으로 데이터가 판독 불가능하게 된 경우: 정보주체에게는 통지하지 **않되**, 커미셔너에게는
**통지합니다**. 직접 판매업체의 서버가 백업 없이 랜섬웨어 운영자에게 탈취된 경우: 정보주체에게
통지합니다.

조항 10.1은 통지가 정보주체가 보호 조치를 취할 수 있도록 이해 가능한 언어로 **직접적이고 개별적**
이어야 한다고 요구합니다.

## 흔한 실수

**모든 것을 보고하는 것.** 조항 5.1은 그것을 원하지 않습니다. 중대한 피해로 이어질 현실적 경로가
없는 침해는 통지 대상이 아니며, 반사적인 과잉 보고는 정작 중요한 사고를 묻어버립니다.

**72시간을 기준으로 취급하는 것.** 법률은 실무상 가능한 한 신속히라고 말합니다. 첫날에 알고도
지연 사유 없이 사흘째에 제출했다면, 지침의 최대 한도는 s.12B(1)에 대한 항변이 되지 않습니다.

**규모가 고객 통지를 강제한다고 가정하는 것.** 조항 8.2는 그 반대를 말합니다. 개인에 대해서는 네
가지 질적 기준을 별도로 평가하십시오.

**조사를 완료할 때까지 기다리는 것.** 먼저 통지하고, 그다음 조항 7.5의 30일 단계적 제출 경로를
사용하십시오.

**처리자의 시계가 귀하의 것이라고 가정하는 것.** 그것은 처리자가 귀하에게 알리는 시점과 귀하가
알아내는 시점 중 더 이른 때에 시작됩니다. 공급업체 계약이 처리자에게 귀하에게 알릴 72시간을
준다면, 귀하는 이미 자신의 기간을 잃은 것입니다.

**제출하고 잊는 것.** 조항 7.3에 따라 커미셔너의 확인 통지가 없으면 통지가 없는 것입니다.

## 다음 단계

필요해지기 전에 대응 매뉴얼을 작성하십시오: 누가 예비 조사를 수행하고, 누가 다섯 가지 기준에 대한
중대한 피해 평가를 승인하며, 누가 제출하고, 누가 개별 통지문을 작성하는지. 처리자가 며칠이 아니라
몇 시간 내에 귀하에게 통지하도록 데이터 처리 계약을 개정하십시오.

그런 다음 그와 함께 s.12A를 읽으십시오. DPO가 의무인 경우, 조항 7.8은 그 담당자를 침해에 관한
커미셔너의 주 연락 창구로 만듭니다; 의무가 아닌 경우에도 충분한 직급과 전문성을 갖춘 대표자를
반드시 지정해야 합니다.
