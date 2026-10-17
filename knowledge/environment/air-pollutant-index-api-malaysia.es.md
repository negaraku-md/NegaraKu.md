---
topicId: MY-ENV-0001
title: "Índice de Contaminantes del Aire (API): cómo mide Malasia la calidad del aire"
seoTitle: "Índice de Contaminantes del Aire (API) de Malasia: lecturas y categorías"
slug: "air-pollutant-index-api-malaysia"
category: "environment"
subcategory: ["udara"]
summary: "La lectura del API que ve durante un episodio de neblina (haze) es un único número destilado a partir de seis contaminantes. Esta guía explica cómo se calcula, la red de estaciones de monitoreo que lo producen y qué significa cada categoría — de Buena a Peligrosa — para su salud."

tier: "3"
mode: "practical"
contentType: "faq"
sensitivity: "health"

answer: "El Índice de Contaminantes del Aire (API), o Indeks Pencemar Udara (IPU), es un número de 0 en adelante emitido por el Departamento de Medio Ambiente (DOE) para indicar el estado de la calidad del aire de una zona. Se calcula a partir de seis contaminantes — SO2, NO2, CO, O3, PM10 y PM2.5 — convirtiendo cada uno en un «subíndice», y el subíndice más alto de esa hora se convierte en la lectura del API. Ese valor se asigna luego a seis categorías de salud, desde Buena (0–50) hasta Peligrosa (más de 300)."
keyTakeaways:
  - "El API se calcula a partir de seis contaminantes; el subíndice más alto de esa hora se convierte en la lectura oficial del API."
  - "La PM2.5 (partículas finas) se añadió al cálculo del API a partir de 2017; las partículas finas suelen ser el contaminante dominante durante la neblina."
  - "Seis categorías: Buena (0–50), Moderada (51–100), Insalubre (101–200), Muy insalubre (201–300), Peligrosa (>300) y Emergencia (>500)."
  - "Las concentraciones de contaminantes se miden mediante 52 estaciones automáticas (CAQM) y 14 estaciones manuales en toda Malasia."
  - "El cálculo del API se basa en el Pollution Standard Index (PSI) adoptado por la USEPA."
appliesTo: "Padres, docentes, deportistas, personas mayores, mujeres embarazadas, niños, personas con complicaciones cardíacas o pulmonares, y cualquiera que planee actividades al aire libre, especialmente durante la temporada de neblina."

faq:
  - q: "¿Una lectura del API de 100 significa que el aire está «medio contaminado»?"
    a: "No. El API no es un porcentaje. Una lectura de 0–50 significa Buena y de 51–100 significa Moderada — ambas sin restricciones a la actividad al aire libre. Las lecturas se vuelven una preocupación una vez que superan los 100 (Insalubre), y por encima de 300 se considera Peligrosa."
  - q: "¿Qué contaminante determina con más frecuencia la lectura del API?"
    a: "Las partículas finas — PM10 y PM2.5 — son el contaminante dominante la mayor parte del tiempo, especialmente cuando ocurre neblina en Malasia. Durante esos periodos la lectura del API suele estar impulsada por el subíndice de partículas finas."
  - q: "¿A partir de qué lectura debo evitar la actividad al aire libre?"
    a: "En 101–200 (Insalubre), los grupos sensibles — personas mayores, mujeres embarazadas, niños y personas con complicaciones cardíacas o pulmonares — deben limitar la actividad al aire libre. Por encima de 300 (Peligrosa), a las personas mayores y de alto riesgo se les prohíbe la actividad al aire libre, y se aconseja al público general evitarla."

lang: "es"
sourceContentHash: "fc387c28a9eb09b2"
masterLanguage: "ms"
translationStatus: "in-sync"

status: "published"
aiAssisted: true
reviewer: "ashton-tan"
reviewed: 2026-08-03
reviewDue: 2027-08-03
revision: 0
verificationNeeded:
  - "Asthma is not specifically named in either of the two JAS PDFs referenced (the sources mention the elderly, pregnant women, children and heart/lung complications). The reference to asthma here is an editorial inference as a lung condition — confirm with an official JAS health advisory source."
  - "The Emergency band (>500) is not given a separate colour on the official JAS gauge (colours are defined only up to Hazardous). Confirm whether an official colour exists for this band before assigning one."
revisions:
  - revision: 0
    date: 2026-07-28
    change: "Approved and published."
    reviewer: null

updated: 2026-07-28
sources:
  - title: "Sistema de Gestión del Índice de Contaminantes del Aire (APIMS) — conjunto de datos (Air Pollutant Index Management System (APIMS) — dataset)"
    url: "https://radars.mosti.gov.my/dataset/air-pollutant-index-management-system-apims/"
    publisher: "Ministerio de Ciencia, Tecnología e Innovación (MOSTI) — catálogo de datos abiertos RADARS (gov.my)"
  - title: "Cálculo del Índice de Contaminantes del Aire (IPU/API) (Pengiraan Indeks Pencemar Udara (IPU) / Air Pollutant Index (API) Calculation)"
    url: "https://www.doe.gov.my/wp-content/uploads/2021/09/API_Calculation.pdf"
    publisher: "Departamento de Medio Ambiente (Jabatan Alam Sekitar)"
  - title: "Información general del Índice de Contaminantes del Aire (API) (General Information of Air Pollutant Index (API))"
    url: "https://www.doe.gov.my/wp-content/uploads/2021/10/General-Information-of-Air-Pollutant-Index.pdf"
    publisher: "Departamento de Medio Ambiente (Jabatan Alam Sekitar)"
  - title: "Índice de Contaminación del Aire — Qué hacer cuando el API alcanza ciertos niveles (Air Pollution Index — What to do when API reach certain levels)"
    url: "https://www.doe.gov.my/en/air-pollution-index/"
    publisher: "Departamento de Medio Ambiente (Jabatan Alam Sekitar)"

entity: "Indeks Pencemar Udara (IPU)"
relations:
  - { rel: "administered-by", to: "jabatan-alam-sekitar" }
  - { rel: "related-to", to: "jerebu-di-malaysia" }
related: []
keywords: ["IPU", "API", "indeks pencemar udara", "kualiti udara", "jerebu", "PM2.5", "PM10", "Jabatan Alam Sekitar"]
---

Cuando la neblina se espesa y las escuelas empiezan a preguntarse si debería cancelarse la asamblea matutina, un único número suele zanjar la cuestión — la lectura del API. Esa cifra parece sencilla, pero detrás de ella hay seis contaminantes medidos de forma continua y una fórmula que los filtra a todos en un solo valor.

## ¿Qué mide realmente el API?

El Índice de Contaminantes del Aire (API) es un indicador del estado de la calidad del aire de una zona. El Departamento de Medio Ambiente (DOE) lo calcula a partir de seis contaminantes principales, cada uno promediado sobre un periodo de tiempo distinto porque el límite de exposición segura de cada uno no es el mismo:

- **Dióxido de azufre (SO2)** — promedio de 1 hora
- **Dióxido de nitrógeno (NO2)** — promedio de 1 hora
- **Monóxido de carbono (CO)** — promedio de 8 horas
- **Ozono (O3)** — promedios de 8 horas y de 1 hora
- **Partículas finas PM10** — promedio de 24 horas
- **Partículas finas PM2.5** — promedio de 24 horas, añadida al cálculo a partir de 2017

## ¿Cómo se convierten seis contaminantes en un solo número?

La concentración media de cada contaminante se estandariza mediante una fórmula matemática específica para producir un valor sin unidades llamado **subíndice**. Cada contaminante produce su propio subíndice, y **el subíndice más alto de esa hora se toma como la lectura del API**. Este método se basa en el *Pollution Standard Index* (PSI) adoptado internacionalmente por la Agencia de Protección Ambiental de Estados Unidos (USEPA).

Por ejemplo, para la PM2.5 en el mejor rango (0–50), la fórmula es API = 4.1667 × X, donde X es el promedio de 24 horas de PM2.5 en µg/m³. Las concentraciones más altas usan un segmento distinto de la fórmula. En la práctica, las partículas finas suelen ser el contaminante dominante — así que, durante la neblina, la lectura del API casi siempre está impulsada por la PM10 o la PM2.5.

## ¿Qué significa cada categoría para su salud?

El API se asigna a seis categorías codificadas por colores. Esta es la parte que más importa para las decisiones diarias:

| API | Estado | Color | Consejo de salud |
|-----|--------|--------|-------------------|
| 0–50 | Buena | Azul | Sin restricciones a la actividad al aire libre; mantenga un estilo de vida saludable |
| 51–100 | Moderada | Verde | Sin restricciones a la actividad al aire libre; mantenga un estilo de vida saludable |
| 101–200 | Insalubre | Amarillo | Los grupos sensibles (personas mayores, mujeres embarazadas, niños, personas con complicaciones cardíacas o pulmonares) deben limitar la actividad al aire libre; el público general debe reducir la actividad vigorosa |
| 201–300 | Muy insalubre | Naranja | Las personas mayores y de alto riesgo deben permanecer en interiores y reducir la actividad física; quienes tengan complicaciones de salud deben acudir al médico |
| >300 | Peligrosa | Rojo | A las personas mayores y de alto riesgo se les prohíbe la actividad al aire libre; el público general debe evitar la actividad al aire libre |
| >500 | Emergencia | — (no se define un color separado en el indicador oficial) | Siga las directivas del [Consejo de Seguridad Nacional](/government/national-security-council-mkn) y los anuncios de los medios de comunicación |

## ¿De dónde proceden estos datos?

Las lecturas no se toman de un único lugar. El DOE opera la Red Nacional de Monitoreo de la Calidad del Aire, que comprende **52 estaciones automáticas** — estaciones de Monitoreo Continuo de la Calidad del Aire (Continuous Air Quality Monitoring, CAQM) — y **14 estaciones manuales** que utilizan muestreadores de alto volumen (HVS). Estas estaciones se ubican en lugares estratégicos que cubren zonas industriales, urbanas, suburbanas y rurales en toda la Península, Sabah y Sarawak, de modo que las lecturas representen el aire que la gente respira realmente.

## Qué sigue

Antes de planear actividades al aire libre durante la neblina, consulte la lectura oficial más reciente del API para su zona a través del sistema de monitoreo en línea oficial del DOE, en lugar de las cifras que circulan sin fuente en las redes sociales. Si pertenece a un grupo sensible — personas mayores, mujeres embarazadas, niños, o personas con complicaciones cardíacas o pulmonares (incluidas afecciones como el asma) — empiece a tomar precauciones en cuanto la lectura supere los 100, en lugar de esperar a que llegue a Peligrosa. Para entender qué provoca estos picos en las lecturas, consulte las páginas relacionadas sobre la neblina en Malasia y el papel del Departamento de Medio Ambiente.
