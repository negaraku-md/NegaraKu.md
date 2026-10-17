---
topicId: MY-EMP-0014
title: "Tasas de aportación legales y plazos de nómina"
seoTitle: "Referencia de tasas y plazos de nómina en Malasia"
slug: "payroll-rates-deadlines-malaysia"
category: "employment"
subcategory: ["payroll-statutory"]
summary: "Cada tasa de nómina malasia verificada, techo salarial, formulario y fecha de vencimiento en una sola tabla de referencia, cada uno trazado hasta la autoridad que lo publica."

tier: "4"
mode: "practical"
contentType: "data"

answer: "Cinco corrientes legales se remiten antes del día 15 del mes siguiente al mes de salario: EPF, SOCSO, EIS, PCB y el gravamen de HRD Corp. Anualmente, el Form EA va a los empleados antes del 28 de febrero y el Form E con el CP8D va a LHDN antes del 31 de marzo. El salario mínimo es RM1,700. El techo salarial de SOCSO y EIS es RM6,000. Las aportaciones al EPF por debajo de RM20,000 de salario deben seguir los tramos del Third Schedule, no un porcentaje."
keyTakeaways:
  - "Una fecha lleva cinco obligaciones — el día 15 del mes siguiente para EPF, SOCSO, EIS, PCB y el gravamen de HRD"
  - "Los tramos salariales del EPF, no los porcentajes, se aplican a cualquier salario de hasta RM20,000"
  - "SOCSO y EIS se detienen ambos en un techo salarial mensual de RM6,000, en vigor desde el 1 de octubre de 2024"
  - "Los empleados no malasios registrados desde el 1 de agosto de 1998 aportan 2% el empleador y 2% el empleado al EPF, con efecto para los salarios de octubre de 2025"
  - "El interés de demora difiere por régimen: 6% anual para SOCSO y EIS, 10% anual para el gravamen de HRD"
  - "El Form E y el Form P quedan excluidos del período de gracia de e-Filing de LHDN"
appliesTo: "Administradores de nómina, equipos de RR. HH., personal de finanzas y secretarios de sociedades que gestionan una nómina malasia."

verificationNeeded:
  - "EPF late-payment dividend and penalty rates are not included — confirm the current charge against kwsp.gov.my before publishing a figure"
  - "SOCSO Category 2 employee share and the full Third Schedule band tables are not reproduced here — read them from perkeso.gov.my"
  - "Foreign worker levy rates and the multi-tier levy gazette status are outside this page and unverified"
  - "Confirm the minimum interest charge for late SOCSO and EIS contributions against perkeso.gov.my"

obligations:
  - what: "Remit EPF contributions for the wage month"
    trigger: "monthly"
    dueDay: 15
    due: "On or before the 15th of the following month"
    authority: "KWSP"
    statute: "EPF Act 1991, s.43(1) and Third Schedule"
  - what: "Remit SOCSO contributions for the wage month"
    trigger: "monthly"
    dueDay: 15
    due: "No later than the 15th day of the succeeding month"
    authority: "PERKESO"
    statute: "Employees Social Security Act 1969"
    consequence: "Interest on late payment at 6% per annum for each day outstanding"
  - what: "Remit EIS contributions for the wage month"
    trigger: "monthly"
    dueDay: 15
    due: "No later than the 15th day of the succeeding month"
    authority: "PERKESO"
    statute: "Employment Insurance System Act 2017"
    consequence: "Interest on late payment at 6% per annum for each day outstanding"
  - what: "Remit monthly tax deduction (PCB/MTD) via e-PCB, e-Data PCB or e-CP39"
    trigger: "monthly"
    dueDay: 15
    due: "On or before the 15th day of the subsequent month"
    authority: "LHDN"
    statute: "Income Tax (Deduction from Remuneration) Rules 1994"
  - what: "Pay the HRD Corp levy"
    trigger: "monthly"
    dueDay: 15
    due: "By the 15th of the following month"
    authority: "HRD Corp"
    statute: "PSMB Act 2001"
    consequence: "Interest at 10% per annum on arrears, minimum RM5"
  - what: "Pay wages for the wage period"
    trigger: "ongoing"
    withinDays: 7
    due: "Not later than the seventh day after the last day of the wage period"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.19(1)"
  - what: "Pay rest-day, public-holiday and overtime wages"
    trigger: "ongoing"
    due: "Not later than the last day of the next wage period"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.19(2)"
  - what: "Notify LHDN of a new employee on Form CP22 via the e-CP22 application"
    trigger: "change"
    withinDays: 30
    due: "Within 30 days after the commencement of employment"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83"
  - what: "Notify LHDN of cessation of employment on Form CP22A via e-SPC, and withhold monies payable"
    trigger: "change"
    due: "Not less than 30 days before cessation, or within 30 days of being informed of a death; withhold for 90 days or until tax clearance"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83"
  - what: "Notify LHDN on Form CP21 of an employee leaving Malaysia for more than three months"
    trigger: "change"
    due: "Not less than 30 days before the expected departure date"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83"
  - what: "Prepare and give Form EA (C.P.8A) or EC (C.P.8C) to every employee"
    trigger: "financial-year-end"
    due: "On or before 28 February following the calendar year"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83(1A)"
    consequence: "Offence under s.120(1) ITA 1967 — fine RM200 to RM20,000, or up to six months imprisonment, or both"
  - what: "Upload CP8D data through e-Data Praisi for employee pre-fill"
    trigger: "financial-year-end"
    due: "On or before 25 February following the calendar year"
    authority: "LHDN"
  - what: "Furnish Form E (e-E) together with CP8D"
    trigger: "financial-year-end"
    due: "On or before 31 March following the calendar year"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83 and s.120(1)"
    consequence: "Offence under s.120(1) ITA 1967; no e-Filing grace period applies to Form E"
  - what: "Prepare and give Form CP58 to agents, dealers and distributors"
    trigger: "financial-year-end"
    due: "On or before 31 March following the calendar year"
    authority: "LHDN"
  - what: "Retain payroll and tax records"
    trigger: "ongoing"
    due: "Seven years, accessible to LHDN on request"
    authority: "LHDN"
    statute: "Income Tax Act 1967"
  - what: "Utilise accumulated HRD Corp levy through an approved training grant"
    trigger: "ongoing"
    due: "Within 24 months"
    authority: "HRD Corp"
    consequence: "Forfeiture of the unutilised balance above an RM10,000 threshold"

lang: "es"
sourceContentHash: "72d685f5d481d7fd"
masterLanguage: "en"
translationStatus: "in-sync"

status: "published"
aiAssisted: true
reviewer: null
reviewed: "2026-07-25"
publishedBy: "ashton-tan"
revision: 0
revisions:
  - revision: 0
    date: 2026-07-20
    change: "Approved and published."
    reviewer: null
sensitivity: "none"

updated: 2026-07-20
sources:
  - title: "Aportación obligatoria del empleador (Employer Mandatory Contribution)"
    url: "https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution"
    publisher: "Fondo de Previsión de los Empleados (KWSP)"
  - title: "Tasa de aportación (Contribution Rate)"
    url: "https://www.perkeso.gov.my/en/rate-of-contribution.html"
    publisher: "Organización de Seguridad Social (PERKESO)"
  - title: "Aportaciones (Contributions)"
    url: "https://www.perkeso.gov.my/en/our-services/employer-employee/contributions.html"
    publisher: "Organización de Seguridad Social (PERKESO)"
  - title: "Pago de aportaciones (Contribution Payment)"
    url: "https://www.perkeso.gov.my/en/our-services/employer-employee/pembayaran.html"
    publisher: "Organización de Seguridad Social (PERKESO)"
  - title: "Empleadores — Responsabilidad del empleador (Employers — Employer's Responsibility)"
    url: "https://www.hasil.gov.my/en/majikan/"
    publisher: "Junta de Ingresos Internos de Malasia (LHDN)"
  - title: "Programa de presentación de declaraciones (BN) para el año 2026 (Program Memfail Borang Nyata (BN) Bagi Tahun 2026)"
    url: "https://www.hasil.gov.my/wp-content/uploads/program-memfail-bn-bagi-tahun-2026.pdf"
    publisher: "Junta de Ingresos Internos de Malasia (LHDN)"
    date: "2025-12-30"
  - title: "Orden de Salario Mínimo 2024 — P.U.(A) 376 (Perintah Gaji Minimum 2024 — P.U.(A) 376)"
    url: "https://gajiminimum.mohr.gov.my/wp-content/uploads/PUA%20376.pdf"
    publisher: "Ministerio de Recursos Humanos (MOHR)"
    date: "2024-12-04"
  - title: "Guía de cálculo del gravamen y pago del gravamen (Levy Calculation Guideline and Levy Payment)"
    url: "https://supportcentre.hrdcorp.gov.my/portal/en/kb/articles/hrd-levy"
    publisher: "HRD Corp"

entity: "Malaysian statutory payroll rates and deadlines"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "administered-by", to: "epf" }
  - { rel: "administered-by", to: "perkeso" }
  - { rel: "administered-by", to: "hrd-corp" }
  - { rel: "administered-by", to: "jtksm" }
  - { rel: "explained-in", to: "form-e-ea-cp8d-malaysia" }
  - { rel: "explained-in", to: "hrd-corp-levy-malaysia" }
  - { rel: "explained-in", to: "minimum-wage-malaysia" }
related: ["form-e-ea-cp8d-malaysia", "hrd-corp-levy-malaysia", "minimum-wage-malaysia", "payroll-compliance-malaysia", "epf-employer-guide", "socso-eis-employer-guide"]
keywords: ["plazos de nómina Malasia", "tasas EPF SOCSO EIS", "tasas de aportación legales Malasia", "fechas de vencimiento de nómina día 15", "plazo PCB", "tasa gravamen HRD"]
---

Una sola tabla de referencia, cada fila trazada hasta la autoridad que la publica. Las filas
que no pudieron verificarse contra una fuente oficial se enumeran bajo `verificationNeeded` en
los metadatos de esta página en lugar de adivinarse.

## Tasas y techos

| Concepto | Tasa | Techo / base | Autoridad |
| --- | --- | --- | --- |
| Salario mínimo — mensual | RM1,700 | Todos los empleadores desde el 1 ago 2025 | MOHR, P.U.(A) 376 |
| Salario mínimo — por hora | RM8.72 | — | MOHR, P.U.(A) 376 |
| Salario mínimo — diario | RM65.38 / RM78.46 / RM98.08 | semana de 6 / 5 / 4 días | MOHR, P.U.(A) 376 |
| EPF — malasio, residente permanente, no malasio registrado antes del 1 ago 1998, menor de 60, salario ≤ RM5,000 | 13% empleador, 11% empleado | tramos de la Parte A del Third Schedule | KWSP |
| EPF — mismo grupo, salario superior a RM5,000 | 12% empleador, 11% empleado | tramos de la Parte A del Third Schedule | KWSP |
| EPF — 60 años o más, malasio | 4% empleador, 0% empleado | Parte E del Third Schedule, sin límite salarial | KWSP |
| EPF — 60 años o más, residente permanente y no malasio anterior a 1998 | 6.5% empleador / 5.5% empleado con salario ≤ RM5,000; 6% / 5.5% por encima | Parte C del Third Schedule | KWSP |
| EPF — no malasio registrado desde el 1 ago 1998 | 2% empleador, 2% empleado | Parte F del Third Schedule, sin límite salarial, con efecto para los salarios de octubre de 2025 | KWSP |
| SOCSO Categoría 1 — menor de 60 | 1.75% empleador, 0.5% empleado | techo salarial mensual de RM6,000 | PERKESO |
| SOCSO Categoría 2 — 60 años o más | 1.25% empleador | techo salarial mensual de RM6,000 | PERKESO |
| EIS | 0.2% empleador, 0.2% empleado | techo salarial mensual de RM6,000 | PERKESO |
| Gravamen de HRD Corp — categoría obligatoria | 1% | Salario base menos permiso no retribuido, más asignaciones fijas | HRD Corp |
| Gravamen de HRD Corp — categoría opcional | 0.5% | Misma base | HRD Corp |

El techo de RM6,000 de SOCSO y EIS está en vigor desde el **1 de octubre de 2024**, en
sustitución de RM5,000. Las páginas que aún muestran RM4,000 están dos revisiones
desactualizadas.

**Los porcentajes del EPF son una descripción, no un método de cálculo.** KWSP indica que los
empleadores no pueden computar las cuotas del empleador y del empleado sobre un porcentaje
exacto salvo cuando el salario supera los RM20,000; por debajo de eso, las tablas de rangos
salariales del Third Schedule dan el importe en ringgit, y los totales difieren del resultado
porcentual.

## Plazos mensuales

| Obligación | Vencimiento | Autoridad | Cargo por demora |
| --- | --- | --- | --- |
| Pagar los salarios del período de salario | Dentro de los 7 días de finalizar el período de salario | JTKSM, EA 1955 s.19(1) | Delito |
| Pagar los salarios de día de descanso, festivo y horas extra | Antes del último día del siguiente período de salario | JTKSM, EA 1955 s.19(2) | Delito |
| Aportación al EPF | El día 15 del mes siguiente o antes | KWSP | Véase `verificationNeeded` |
| Aportación a SOCSO | Antes del día 15 del mes siguiente | PERKESO | 6% anual, diario |
| Aportación al EIS | Antes del día 15 del mes siguiente | PERKESO | 6% anual, diario |
| PCB / MTD mediante e-PCB, e-Data PCB o e-CP39 | El día 15 del mes siguiente o antes | LHDN | Sanción legal |
| Gravamen de HRD Corp | Antes del día 15 del mes siguiente | HRD Corp | 10% anual, diario, mínimo RM5 |

## Plazos activados por hechos

| Obligación | Detonante | Vencimiento | Canal |
| --- | --- | --- | --- |
| Form CP22 — nuevo empleado | Inicio del empleo | Dentro de los 30 días | e-CP22 en MyTax, obligatorio desde el 1 sep 2024 |
| Form CP22A — cese, sector privado | Cese o fallecimiento | No menos de 30 días antes del cese; dentro de los 30 días de ser informado de un fallecimiento | e-SPC en MyTax |
| Form CP22B — cese, sector público | Cese o fallecimiento | Según lo anterior | e-SPC en MyTax |
| Form CP21 — abandonar Malasia por más de 3 meses | Partida | No menos de 30 días antes de la fecha prevista de partida | LHDN |
| Retener las cantidades pagaderas | Cese, fallecimiento o partida | 90 días, o hasta recibir una carta de finiquito fiscal | LHDN |
| Registro en HRD Corp | Alcanzar 10 empleados malasios | Al cruzar el umbral | Portal de HRD Corp |

## Plazos anuales

| Obligación | Vencimiento | Ley |
| --- | --- | --- |
| Form EA (C.P.8A) / EC (C.P.8C) a los empleados | 28 de febrero | ITA 1967 s.83(1A) |
| CP8D mediante e-Data Praisi (vía de precarga) | 25 de febrero | programa de presentación de LHDN |
| Form E (e-E) con CP8D a LHDN | 31 de marzo | ITA 1967 s.83; s.120(1) en caso de incumplimiento |
| Form CP58 a agentes, concesionarios, distribuidores | 31 de marzo | LHDN |
| Conservar los registros | 7 años | ITA 1967 |

El Form E, el Form P y el Form CPE quedan **excluidos** del período de gracia de e-Filing de
LHDN que se aplica a otros formularios de declaración.

## Referencia de sanciones

| Incumplimiento | Consecuencia | Fuente |
| --- | --- | --- |
| No presentar el Form E o el Form EA | Multa de RM200 a RM20,000, o prisión de hasta 6 meses, o ambas, bajo s.120(1) ITA 1967 | tabla de delitos de LHDN |
| Pagar por debajo del salario mínimo | Multa de no más de RM10,000 por cada empleado, s.43 Act 732; orden judicial por la diferencia bajo s.44 | Act 732 |
| Delito continuado bajo la Act 732 | Multa diaria de hasta RM1,000 tras la condena, s.46 | Act 732 |
| Delito reiterado bajo la Act 732 | Multa de hasta RM20,000 o prisión de hasta 5 años, s.47 | Act 732 |
| Delito de la Employment Act sin sanción específica | Multa de hasta RM50,000, s.99A EA 1955 | Act 265 |
| Gravamen de HRD Corp tardío | Interés del 10% anual diario, mínimo RM5; multa de hasta RM20,000 o 2 años de prisión | HRD Corp |
| Gravamen de HRD Corp sin reclamar durante 24 meses | Confiscación por encima de un saldo residual de RM10,000 | HRD Corp |

## Errores comunes

- Calcular el EPF como un porcentaje directo sobre salarios por debajo de RM20,000 en lugar de
  leer el tramo del Third Schedule.
- Aplicar un techo de RM4,000 o RM5,000 a SOCSO y EIS. Es RM6,000 desde el 1 de octubre de 2024.
- Usar una sola cifra de salario en los cinco regímenes. La base del gravamen de HRD excluye las
  horas extra, la comisión y la bonificación.
- Suponer que el período de gracia de e-Filing de LHDN cubre el Form E. No lo hace.
- Presentar el Form E sin el CP8D y considerar la declaración como presentada.
- Pagar los salarios en una fecha fija posterior al séptimo día tras el período de salario.

## Qué sigue

Configure una entrada de calendario recurrente el día 15 que cubra las cinco remesas mensuales,
y una segunda en la segunda semana de febrero para el Form EA y la carga de e-Data Praisi. Luego
concilie la base salarial de cada régimen por separado en la nómina: el plazo es compartido, la
definición de salario no.
