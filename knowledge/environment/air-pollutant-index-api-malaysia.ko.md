---
topicId: MY-ENV-0001
title: "공기오염지수(IPU): 말레이시아가 대기질을 측정하는 방법"
seoTitle: "말레이시아 공기오염지수(IPU): 수치와 등급"
slug: "air-pollutant-index-api-malaysia"
category: "environment"
subcategory: ["udara"]
summary: "연무(haze) 기간에 보게 되는 IPU 수치는 여섯 가지 오염물질에서 걸러낸 하나의 단일 숫자입니다. 이 안내서는 그 수치가 어떻게 산출되는지, 이를 만들어 내는 관측소 네트워크는 무엇인지, 그리고 각 등급 — 좋음부터 위험까지 — 이 건강에 어떤 의미를 갖는지 설명합니다."

tier: "3"
mode: "practical"
contentType: "faq"
sensitivity: "health"

answer: "공기오염지수(IPU, Air Pollutant Index/API)는 특정 지역의 대기질 상태를 나타내기 위해 말레이시아 환경부(JAS, Jabatan Alam Sekitar)가 발표하는 0 이상의 숫자입니다. 이는 여섯 가지 오염물질 — SO2, NO2, CO, O3, PM10, PM2.5 — 에서 산출되며, 각 오염물질은 하나의 하위지수(sub-index)로 변환되고 그 시각에 가장 높은 하위지수가 IPU 수치가 됩니다. 이 값은 이후 좋음(0–50)부터 위험(300 초과)까지 여섯 개의 건강 등급으로 대응됩니다."
keyTakeaways:
  - "IPU는 여섯 가지 오염물질에서 산출되며, 그 시각에 가장 높은 하위지수가 공식 IPU 수치가 됩니다."
  - "PM2.5(미세먼지)는 2017년부터 IPU 산출에 포함되었으며, 연무 기간에는 통상 미세먼지가 지배적인 오염물질입니다."
  - "여섯 개 등급: 좋음(0–50), 보통(51–100), 나쁨(101–200), 매우 나쁨(201–300), 위험(>300), 비상(>500)."
  - "오염물질 농도는 말레이시아 전역의 자동 관측소 52개소(CAQM)와 수동 관측소 14개소에서 측정됩니다."
  - "IPU 산출은 미국 환경보호청(USEPA)이 채택한 오염표준지수(Pollution Standard Index, PSI)에 기반합니다."
appliesTo: "부모, 교사, 운동선수, 고령자, 임산부, 어린이, 심장 또는 폐 질환이 있는 사람, 그리고 특히 연무철에 야외 활동을 계획하는 모든 사람."

faq:
  - q: "IPU 수치 100은 공기가 「절반 오염」되었다는 뜻입니까?"
    a: "아닙니다. IPU는 백분율이 아닙니다. 0–50은 좋음, 51–100은 보통을 뜻하며 — 둘 다 야외 활동에 제한이 없습니다. 수치가 100을 넘으면(나쁨) 우려가 시작되고, 300을 넘으면 위험으로 간주됩니다."
  - q: "어떤 오염물질이 IPU 수치를 가장 자주 결정합니까?"
    a: "미세먼지 — PM10과 PM2.5 — 가 대부분의 경우, 특히 말레이시아에서 연무가 발생할 때 지배적인 오염물질입니다. 그때 IPU 수치는 대개 미세먼지 하위지수에 의해 좌우됩니다."
  - q: "어느 수치에서 야외 활동을 피해야 합니까?"
    a: "101–200(나쁨)에서는 민감군 — 고령자, 임산부, 어린이, 심장 또는 폐 질환이 있는 사람 — 이 야외 활동을 제한해야 합니다. 300을 넘으면(위험) 고령자와 고위험군은 야외 활동이 금지되며, 일반 대중도 이를 피하도록 권고됩니다."

lang: "ko"
sourceContentHash: "fc387c28a9eb09b2"
masterLanguage: "ms"
translationStatus: "in-sync"

status: "draft"
aiAssisted: true
reviewer: null
reviewed: 2026-08-03
reviewDue: 2027-08-03
revision: 0
verificationNeeded:
  - "천식은 참조된 두 건의 JAS PDF에서 명시적으로 언급되지 않았습니다(출처는 고령자, 임산부, 어린이, 심장/폐 질환을 언급함). 여기서 천식 언급은 폐 질환의 하나로 본 편집상의 추론이므로 — JAS의 공식 건강 권고 출처로 확인 필요."
  - "비상 구간(>500)은 JAS 공식 게이지에서 별도의 색상이 부여되어 있지 않습니다(색상은 위험까지만 정의됨). 이 구간에 설정하기 전에 공식 색상이 존재하는지 확인 필요."
revisions:
  - revision: 0
    date: 2026-07-28
    change: "Approved and published."
    reviewer: null

updated: 2026-07-28
sources:
  - title: "Air Pollutant Index Management System (APIMS) — dataset"
    url: "https://radars.mosti.gov.my/dataset/air-pollutant-index-management-system-apims/"
    publisher: "Kementerian Sains, Teknologi dan Inovasi (MOSTI) — RADARS open-data catalogue (gov.my)"
  - title: "Pengiraan Indeks Pencemar Udara (IPU) / Air Pollutant Index (API) Calculation"
    url: "https://www.doe.gov.my/wp-content/uploads/2021/09/API_Calculation.pdf"
    publisher: "Jabatan Alam Sekitar (Department of Environment)"
  - title: "General Information of Air Pollutant Index (API)"
    url: "https://www.doe.gov.my/wp-content/uploads/2021/10/General-Information-of-Air-Pollutant-Index.pdf"
    publisher: "Jabatan Alam Sekitar (Department of Environment)"
  - title: "Air Pollution Index — What to do when API reach certain levels"
    url: "https://www.doe.gov.my/en/air-pollution-index/"
    publisher: "Jabatan Alam Sekitar (Department of Environment)"

entity: "Indeks Pencemar Udara (IPU)"
relations:
  - { rel: "administered-by", to: "jabatan-alam-sekitar" }
  - { rel: "related-to", to: "jerebu-di-malaysia" }
related: []
keywords: ["IPU", "API", "indeks pencemar udara", "kualiti udara", "jerebu", "PM2.5", "PM10", "Jabatan Alam Sekitar"]
---

연무가 짙어지고 학교가 아침 조회를 취소해야 할지 묻기 시작할 때, 대개 하나의 단일 숫자가 결정을 좌우합니다 — 바로 IPU 수치입니다. 그 숫자는 단순해 보이지만, 그 이면에는 지속적으로 측정되는 여섯 가지 오염물질과 이 모두를 하나의 값으로 걸러 내는 하나의 공식이 있습니다.

## IPU는 실제로 무엇을 측정합니까?

공기오염지수(IPU)는 특정 지역의 대기질 상태를 나타내는 지표입니다. 말레이시아 환경부(JAS)는 여섯 가지 주요 오염물질을 기준으로 이를 산출하며, 각 오염물질은 안전 노출 한계가 서로 다르기 때문에 서로 다른 시간 범위로 평균을 냅니다:

- **이산화황(SO2)** — 1시간 평균
- **이산화질소(NO2)** — 1시간 평균
- **일산화탄소(CO)** — 8시간 평균
- **오존(O3)** — 8시간 및 1시간 평균
- **미세먼지 PM10** — 24시간 평균
- **미세먼지 PM2.5** — 24시간 평균, 2017년부터 산출에 포함

## 여섯 가지 오염물질이 어떻게 하나의 숫자가 됩니까?

각 오염물질의 평균 농도는 전용 수학 공식을 통해 표준화되어 **하위지수(sub-index)**라고 불리는 단위 없는 값을 산출합니다. 각 오염물질은 자체 하위지수를 산출하며, **그 시각에 가장 높은 하위지수가 IPU 수치로 채택됩니다**. 이 방식은 미국 환경보호청(USEPA)이 국제적으로 채택한 *오염표준지수(Pollution Standard Index, PSI)*에 기반합니다.

예를 들어 최상 구간(0–50)의 PM2.5의 경우 공식은 IPU = 4.1667 × X이며, 여기서 X는 µg/m³ 단위의 PM2.5 24시간 평균입니다. 농도가 더 높으면 다른 공식 구간을 사용합니다. 실제로는 통상 미세먼지가 지배적인 오염물질이므로 — 연무 기간에는 IPU 수치가 거의 항상 PM10 또는 PM2.5에 의해 좌우됩니다.

## 각 등급은 건강에 어떤 의미를 갖습니까?

IPU는 여섯 개의 색상 등급으로 대응됩니다. 이것이 일상적 결정에 가장 중요한 부분입니다:

| IPU | 상태 | 색상 | 건강 권고 |
|-----|--------|-------|-------------------|
| 0–50 | 좋음 | 파랑 | 야외 활동 제한 없음; 건강한 생활습관 유지 |
| 51–100 | 보통 | 초록 | 야외 활동 제한 없음; 건강한 생활습관 유지 |
| 101–200 | 나쁨 | 노랑 | 민감군(고령자, 임산부, 어린이, 심장/폐 질환이 있는 사람)은 야외 활동 제한; 일반 대중은 격렬한 활동 감소 |
| 201–300 | 매우 나쁨 | 주황 | 고령자와 고위험군은 실내에 머물고 신체 활동 감소; 건강 질환이 있는 사람은 의사 진료 |
| >300 | 위험 | 빨강 | 고령자와 고위험군은 야외 활동 금지; 일반 대중은 야외 활동 회피 |
| >500 | 비상 | — (공식 게이지에 별도 색상 미정의) | [국가안보회의](/government/national-security-council-mkn)의 지시와 대중매체 발표에 따름 |

## 이 데이터는 어디에서 옵니까?

수치는 한 곳에서만 취하지 않습니다. JAS는 **자동 관측소 52개소** — 연속 대기질 관측소(*Continuous Air Quality Monitoring*, CAQM) — 와 대용량 시료채취기(HVS)를 사용하는 **수동 관측소 14개소**를 포함하는 국가 대기질 관측 네트워크를 운영합니다. 이 관측소들은 반도 지역(Semenanjung), 사바(Sabah), 사라왁(Sarawak) 전역의 공업 지역, 도시, 준도시, 농촌을 아우르는 전략적 위치에 배치되어, 수치가 주민이 실제로 들이마시는 공기를 대표하도록 합니다.

## 다음 단계

연무 기간에 야외 활동을 계획하기 전에, 소셜 미디어에 출처 없이 도는 수치가 아니라 JAS의 공식 온라인 관측 시스템을 통해 해당 지역의 최신 공식 IPU 수치를 확인하십시오. 귀하가 민감군 — 고령자, 임산부, 어린이, 또는 심장이나 폐 질환(천식과 같은 상태 포함)이 있는 사람 — 에 속한다면, 수치가 위험에 도달할 때까지 기다리지 말고 100을 넘을 때부터 주의를 시작하십시오. 이러한 수치 급등의 원인을 이해하려면, 말레이시아의 연무와 환경부의 역할에 관한 관련 페이지를 참조하십시오.
