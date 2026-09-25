---
topicId: MY-GOV-0016
title: "DOSM — 말레이시아 통계청: 무엇을, 언제 발표하는가"
slug: "dosm"
category: "government"
subcategory: ["agencies"]
summary: "말레이시아 통계청(Jabatan Perangkaan Malaysia)의 기관 엔티티 페이지 — 그 법정 근거, 발표하는 대표 통계 시리즈, 각 통계가 정확히 언제 나오는지 알려주는 사전 발표 일정(Advance Release Calendar), 그리고 누구나 직접 수치를 확인할 수 있는 오픈데이터 채널."

tier: "4"
mode: "practical"
contentType: "agency"
sensitivity: "none"

answer: "말레이시아 통계청(Jabatan Perangkaan Malaysia, DOSM)은 통계법(Statistics Act 1965, Act 415)에 따라 말레이시아의 공식 통계를 생산하는 연방 부처입니다. 연간 300건이 넘는 간행물 — GDP, 소비자물가지수, 노동력, 대외무역, 산업생산 등 — 을 발표하며, 모든 발표 일정을 dosm.gov.my/portal-main/arc의 사전 발표 일정(Advance Release Calendar)을 통해 미리 공개하고, 기초 데이터는 open.dosm.gov.my에서 무료로 내려받을 수 있습니다."
keyTakeaways:
  - "Operates under the Statistics Act 1965 (Act 415) — royal assent 22 June 1965, in force 16 August 1965, revised edition 1989"
  - "A federal department under the Ministry of Economy, headed by the Chief Statistician Malaysia (Ketua Perangkawan Malaysia)"
  - "Began in 1949 as the Bureau of Statistics under the Statistics Ordinance 1949; renamed in 1965"
  - "Publishes an Advance Release Calendar naming the exact date of every 2026 publication, downloadable as CSV, Parquet, iCalendar or a subscribable Google Calendar"
  - "Flagship series: GDP (quarterly), CPI, labour force, external trade, IPI, PPI and Malaysian Economic Indicators (monthly)"
  - "Advance GDP estimates land roughly four weeks before the full quarterly GDP release"
  - "OpenDOSM data is released under CC BY 4.0 and reachable through the data.gov.my API"
  - "Digital dissemination became DOSM's primary publication channel from 1 May 2026"
appliesTo: "Anyone who needs to verify a Malaysian economic or social statistic at source, or to know in advance when the next official figure will be published."

faq:
  - q: "How do I find out when the next CPI or GDP figure is released?"
    a: "Use DOSM's Advance Release Calendar at dosm.gov.my/portal-main/arc. The same data is published as a machine-readable dataset (arc_dosm) on OpenDOSM and data.gov.my, with release date, English and Malay titles, category and frequency for every publication in the year. You can subscribe to it as a Google Calendar or download an .ics file."
  - q: "What is the difference between advance GDP estimates and the actual GDP release?"
    a: "The advance estimate is a preliminary reading published about four weeks ahead of the full quarterly national accounts. For the second quarter of 2026, DOSM published advance estimates on 17 July 2026 and scheduled the actual GDP release for 14 August 2026. Cite the full release where precision matters."
  - q: "Is DOSM data free to reuse?"
    a: "Datasets published through OpenDOSM carry a Creative Commons Attribution 4.0 International (CC BY 4.0) licence, so you may reuse them with attribution. Check the licence note on the individual dataset page, since some datasets on data.gov.my originate from other agencies."
  - q: "Which ministry does DOSM sit under?"
    a: "DOSM is a federal government department listed under the Ministry of Economy in the ministry's official agencies directory. Ministerial portfolios in Malaysia are reorganised periodically, so confirm the current arrangement on ekonomi.gov.my or dosm.gov.my before relying on it in a formal document."

lang: "ko"
sourceContentHash: "c71507e53dcd1423"
masterLanguage: "en"
translationStatus: "in-sync"

status: "draft"
aiAssisted: true
reviewer: null
reviewed: "2026-07-25"
publishedBy: "ashton-tan"
revision: 0
revisions:
  - revision: 0
    date: 2026-07-24
    change: "Approved and published."
    reviewer: null

updated: 2026-07-24
sources:
  - title: "Act 415 — Statistics Act 1965"
    url: "https://lom.agc.gov.my/act-detail.php?act=415&lang=BI&language=BI"
    publisher: "Attorney General's Chambers of Malaysia"
    date: "1989-12-28"
  - title: "Advance Release Calendar"
    url: "https://www.dosm.gov.my/portal-main/arc"
    publisher: "Department of Statistics Malaysia"
  - title: "DOSM's Advance Release Calendar (dataset arc_dosm)"
    url: "https://open.dosm.gov.my/data-catalogue/arc_dosm"
    publisher: "OpenDOSM, Department of Statistics Malaysia"
  - title: "Publications"
    url: "https://www.dosm.gov.my/portal-main/publication"
    publisher: "Department of Statistics Malaysia"
  - title: "Publications"
    url: "https://open.dosm.gov.my/publications"
    publisher: "OpenDOSM, Department of Statistics Malaysia"
  - title: "Advance Gross Domestic Product (GDP) Estimates, Second Quarter 2026"
    url: "https://www.dosm.gov.my/portal-main/release-content/advance-gross-domestic-product-gdp-estimates-q22026"
    publisher: "Department of Statistics Malaysia"
    date: "2026-07-17"
  - title: "Background, Role & Function"
    url: "https://www.dosm.gov.my/portal-main/article/background-role-function/"
    publisher: "Department of Statistics Malaysia"
  - title: "Agensi di bawah Kementerian Ekonomi / Ministry of Economy's Agencies"
    url: "https://ekonomi.gov.my/en/department-profile/organisation/ministry-economys-agencies"
    publisher: "Ministry of Economy"
  - title: "Data Catalogue"
    url: "https://open.dosm.gov.my/data-catalogue"
    publisher: "OpenDOSM, Department of Statistics Malaysia"

entity: "DOSM"
wikidata: "Q7354425"
relations:
  - { rel: "explained-in", to: "gdp-overview" }
  - { rel: "explained-in", to: "inflation-cpi" }
  - { rel: "explained-in", to: "unemployment-labour-force" }
  - { rel: "explained-in", to: "external-trade" }
  - { rel: "related-to", to: "bank-negara-malaysia" }
  - { rel: "related-to", to: "federal-budget" }
related: ["gdp-overview", "inflation-cpi", "unemployment-labour-force", "external-trade"]
keywords: ["DOSM", "Jabatan Perangkaan Malaysia", "Department of Statistics Malaysia", "OpenDOSM", "Advance Release Calendar", "Malaysia official statistics"]
---

여러분이 접하게 될 거의 모든 말레이시아 경제 수치 — 장관이 인용하는 성장률, 뉴스 헤드라인의 물가상승률, 은행 리서치 노트의 실업률 — 는 모두 푸트라자야(Putrajaya)의 같은 건물에서 시작됩니다. 그 건물이 어떻게 돌아가는지를 알면, 여러분은 수치를 그저 되풀이하는 사람에서 그것을 직접 확인할 수 있는 사람으로 바뀝니다.

## 한눈에 보기

| | |
| --- | --- |
| 정식 명칭 | Jabatan Perangkaan Malaysia / Department of Statistics Malaysia |
| 종류 | 연방 정부 부처 |
| 소관 부처 | 경제부(Ministry of Economy) |
| 근거 법률 | 통계법(Statistics Act 1965, Act 415), 1989년 개정판 |
| 국왕 재가 / 발효 | 1965년 6월 22일 / 1965년 8월 16일 |
| 부처 수장 | 말레이시아 통계청장(Chief Statistician Malaysia, Ketua Perangkawan Malaysia) |
| 본부 | Block C6 & C7, Complex C, Federal Government Administrative Centre, 62514 Putrajaya |
| 웹사이트 | `dosm.gov.my` (포털), `open.dosm.gov.my` (오픈데이터) |

이 부처의 연원은 1965년보다 더 거슬러 올라갑니다. 1949년 통계조례(Statistics Ordinance 1949)에 따라 통계국(Bureau of Statistics)으로 출발했으며, 당시에는 대외무역과 대규모 농원 농업에 한정되어 있었고, 1965년 새로운 법률에 따라 현재의 명칭을 갖게 되었습니다. 법률 자체는 1975년에 개정되었고, 1989년 12월 28일에 Act 415로 개정판이 나왔으며, 2001년과 2006년에 재인쇄되었습니다. DOSM은 모든 주(state)에 주 사무소를 두고 있습니다.

## 대표 통계 시리즈

DOSM은 연간 300건이 넘는 간행물을 발표합니다. 다음은 가장 자주 인용되는 것들입니다.

| 시리즈 | 발표 주기 | 관련 설명 |
| --- | --- | --- |
| 국내총생산(GDP) | 분기별, 그리고 연간 주별 GDP | [GDP 개관](/en/economy/gdp-overview) |
| 사전 GDP 추정치 | 분기별, 정식 GDP에 앞서 | [GDP 개관](/en/economy/gdp-overview) |
| 소비자물가지수(CPI) | 월별 | [물가상승률과 CPI](/en/economy/inflation-cpi) |
| 노동력 | 월별 및 분기별 | [실업과 노동력](/en/economy/unemployment-labour-force) |
| 대외무역 통계 | 월별 | [대외무역](/en/economy/external-trade) |
| 산업생산지수(IPI) | 월별 | — |
| 생산자물가지수(PPI) | 월별 | — |
| 말레이시아 경제지표(Malaysian Economic Indicators) | 월별 (선행·동행·후행) | — |

이 밖에도 간행물 목록은 분야별로 정리되어 있습니다. 국민계정, 물가, 노동시장, 대외부문, 제조업, 건설, 서비스, 광업·채석, 농업, 환경, 가계소득·지출, 인구·인구통계, 소지역 통계, 그리고 수시 발표 등입니다.

## 뉴스가 되기 전에 수치를 아는 방법

대부분의 사람이 놓치는 부분이 바로 이것입니다. **DOSM은 발표 일정을 미리 공개합니다.** 사전 발표 일정(Advance Release Calendar)은 예정된 모든 간행물을 발표일과 함께 나열하며, 발표 당일에는 지정된 엠바고 시각과 함께 언론에 보도자료가 배포됩니다.

이는 단순한 웹페이지에 그치지 않습니다. 같은 내용이 구조화된 데이터셋(`arc_dosm`)으로도 제공되며, 여기에는 간행물 ID, 발표 시각, 영어 및 말레이어 제목, 범주, 주기, 기준 기간이 담겨 있습니다. 다음과 같은 형태로 받을 수 있습니다.

- **CSV 또는 Parquet** — 분석용.
- **구독 가능한 구글 캘린더** — 발표일이 여러분 자신의 캘린더에 표시됩니다.
- **iCalendar `.ics` 파일** — 다른 모든 캘린더 앱용.
- **`data.gov.my`를 통한 API 호출** — `developer.data.gov.my`에 문서화되어 있습니다.

일반적인 한 달의 모습을 보기 위해, DOSM이 2026년 7월에 예정한 일정을 소개합니다.

| 날짜 | 발표 내용 |
| --- | --- |
| 7월 1일 | 주별 GDP, 2025년 |
| 7월 9일 | 산업생산지수, 2026년 5월 |
| 7월 9일 | 월간 제조업 통계, 2026년 5월 |
| 7월 17일 | 소비자물가지수, 2026년 6월 |
| 7월 17일 | 사전 GDP 추정치, 2026년 2분기 |
| 7월 20일 | 월간 대외무역 통계, 2026년 6월 |
| 7월 24일 | 말레이시아 경제지표, 2026년 5월 |

이 표에서 두 가지가 드러납니다. 월간 물가·무역 데이터는 기준 월로부터 대략 2~3주 이내에 나오는 반면, 생산지수는 더 긴 시차를 두고 나옵니다. 그리고 2026년 2분기 사전 GDP 추정치는 7월 17일에 나왔으며, 정식 GDP 발표는 8월 14일로 예정되어 있었습니다 — 그 4주의 간격 동안 잠정 수치가 널리 유통되다가 조용히 수정되는 것입니다.

## DOSM을 인용할 때 흔히 저지르는 실수

- **사전 추정치를 GDP 확정치로 인용하기.** 그것은 잠정치입니다. 정식 발표가 존재한다면 그것을 인용하십시오.
- **월간 노동력 데이터와 분기 노동력 데이터를 혼동하기.** DOSM은 둘 다 발표합니다. 기준 기간이 다른, 서로 다른 산출물입니다.
- **대시보드를 원출처로 취급하기.** 대시보드는 갱신됩니다. 날짜가 명시된 간행물이나 데이터셋을 인용하고, 인출한 날짜를 기록하십시오.
- **포털 링크가 영구적이라고 가정하기.** DOSM은 2026년 5월 1일부터 디지털 배포를 주된 발표 채널로 삼았으며, 이전에도 포털 버전을 이전한 바 있습니다. 여러분이 의존하는 PDF는 보관해 두십시오.
- **출처 표시 없이 데이터를 재사용하기.** OpenDOSM 데이터셋은 CC BY 4.0으로, 재사용은 자유롭지만 출처 표시는 예의가 아니라 조건입니다.

## 데이터가 있는 곳

| 채널 | 가장 적합한 용도 |
| --- | --- |
| `dosm.gov.my` | 날짜가 명시된 발표, 기술 노트, 발표 일정 |
| `open.dosm.gov.my` | 대시보드와 기계 판독 가능한 데이터 카탈로그 |
| `data.gov.my` | 정부 전체 오픈데이터 포털, DOSM 포함 |
| `developer.data.gov.my` | 프로그래밍 방식 접근을 위한 API 문서 |

카탈로그 자체는 인구통계, 가계·소득, 국민계정, 물가, 노동시장, 교육, 환경 및 경제 부문을 아우르며 — 일부 데이터셋은 DOSM이 아니라 다른 기관에서 나온 것이므로, 어떤 수치를 이 부처에 귀속시키기 전에 출처 표시 노트를 확인하십시오.

## 다음으로 볼 것

기관 자체가 아니라 특정 수치를 찾고 있다면, [GDP 개관](/en/economy/gdp-overview), [물가상승률과 CPI](/en/economy/inflation-cpi), 또는 [실업과 노동력](/en/economy/unemployment-labour-force)에서 시작하십시오. 통화·금융 통계 — 정책금리, 외환보유액, 은행 시스템 데이터 — 의 경우, 발표 기관은 DOSM이 아니라 [말레이시아 중앙은행(BNM)](/en/economy/bank-negara-malaysia)입니다.
