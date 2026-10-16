---
topicId: MY-TAX-0010
title: "Fases de implementación de MyInvois, umbrales y fechas de flexibilización"
seoTitle: "Fases y fechas de MyInvois: cronograma de la factura electrónica de LHDN"
slug: "myinvois-phases"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Cada fecha de fase, banda de facturación, umbral de exención y fecha de fin de la flexibilización provisional de la factura electrónica de LHDN, tal como figuran en la Guía de la factura electrónica vigente."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "El mandato de factura electrónica de Malasia se ejecuta en cuatro fases según la facturación del FY2022: el 1 de agosto de 2024 por encima de RM100 millones, el 1 de enero de 2025 por encima de RM25 millones y hasta RM100 millones, el 1 de julio de 2025 por encima de RM5 millones y hasta RM25 millones, y el 1 de enero de 2026 hasta RM5 millones. Los contribuyentes con una facturación anual inferior a RM1 millón están exentos. Los negocios que comenzaron a operar a partir de 2023 empiezan el 1 de julio de 2026."
keyTakeaways:
  - "Solo cuatro fases — la fase que le corresponde la fija su facturación del FY2022 y no cambia nunca"
  - "Por debajo de RM1,000,000 de facturación o ingresos anuales es una exención total, no un aplazamiento"
  - "Los nuevos negocios que comienzan entre 2023 y 2025 con una facturación de al menos RM1 millón empiezan el 1 de julio de 2026"
  - "Los contribuyentes de la fase 4 tienen un período de flexibilización provisional que llega hasta el 31 de diciembre de 2027"
  - "Durante la flexibilización puede consolidarlo todo y rechazar las solicitudes de factura electrónica individual"
  - "Un SVDP de factura electrónica está abierto del 7 de julio de 2026 al 31 de diciembre de 2027 para regularizar los envíos no realizados"
  - "El deber de emitir está en la s.82C de la Income Tax Act 1967, no en la Guía"
appliesTo: "Cualquier negocio, LLP, sociedad o empresario individual de Malasia que esté averiguando cuándo le afecta la facturación electrónica, y los implementadores que programan un despliegue."

verificationNeeded:
  - "Whether the luxury goods and jewellery category in Table 3.6 of the e-Invoice Specific Guideline has been activated — LHDN still states details will be released in due course"
  - "The exact ringgit penalty applied in practice under s.120(1)(d) ITA 1967 for a failed e-Invoice — the range is statutory but LHDN publishes no assessment concession scale"

obligations:
  - what: "Issue and transmit e-Invoices for validation — taxpayers with FY2022 turnover above RM100 million"
    trigger: "ongoing"
    due: "from 1 August 2024"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "Issue and transmit e-Invoices for validation — FY2022 turnover above RM25 million and up to RM100 million"
    trigger: "ongoing"
    due: "from 1 January 2025"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "Issue and transmit e-Invoices for validation — FY2022 turnover above RM5 million and up to RM25 million"
    trigger: "ongoing"
    due: "from 1 July 2025"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "Issue and transmit e-Invoices for validation — FY2022 turnover up to RM5 million"
    trigger: "ongoing"
    due: "from 1 January 2026"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "Issue and transmit e-Invoices for validation — businesses commencing operations from 2023 onwards"
    trigger: "ongoing"
    due: "from 1 July 2026, or on commencement for businesses starting in 2026 or later"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "Submit a consolidated e-Invoice for transactions where the buyer did not require one"
    trigger: "ongoing"
    withinDays: 7
    due: "within 7 calendar days after the end of the month"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C(7)"
    consequence: "Transactions unsupported by a validated document for tax purposes"
  - what: "Comply with the e-Invoice mandate unless the business is exempt by size"
    trigger: "threshold"
    criteria:
      - metric: "turnover"
        op: "lt"
        value: 1000000
    exemption: true
    due: "Full exemption if annual turnover or revenue is below RM1,000,000; otherwise mandatory, as all phases are now in force"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"

lang: "es"
masterLanguage: "en"
translationStatus: "pending"

status: "draft"
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

updated: 2026-07-20
sources:
  - title: "Guía de la factura electrónica (Versión 4.7) (e-Invoice Guideline (Version 4.7))"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Junta de Ingresos Internos de Malasia (LHDN)"
    date: "2026-07-07"
  - title: "Guía específica de la factura electrónica (Versión 4.8) (e-Invoice Specific Guideline (Version 4.8))"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "Junta de Ingresos Internos de Malasia (LHDN)"
    date: "2026-07-07"
  - title: "Cronograma de implementación de la factura electrónica (Garis Masa Pelaksanaan e-Invois)"
    url: "https://www.hasil.gov.my/e-invois/garis-masa-pelaksanaan-e-invois/"
    publisher: "Junta de Ingresos Internos de Malasia (LHDN)"
    date: "2025-12-07"
  - title: "Finance (No. 2) Act 2023 (Act 851) — nuevas secciones 82B y 82C (Finance (No. 2) Act 2023 (Act 851) — new sections 82B and 82C)"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Gobierno de Malasia (Government of Malaysia)"
    date: "2023-12-29"

entity: "MyInvois e-Invoice implementation timeline"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "explained-in", to: "e-invoice-data-fields" }
  - { rel: "related-to", to: "consolidated-e-invoice" }
related: ["e-invoicing", "consolidated-e-invoice", "self-billed-e-invoice", "myinvois-integration", "e-invoice-data-fields"]
keywords: ["MyInvois phases", "e-Invoice implementation date Malaysia", "e-Invoice exemption RM1 million", "e-Invoice relaxation period", "LHDN e-Invoice timeline", "tarikh pelaksanaan e-invois"]
---

Dos cifras lo deciden todo: su facturación del FY2022, que fija su fase de forma permanente, y RM1,000,000, por debajo de la cual queda fuera del sistema por completo. Todo lo demás en esta página es detalle.

Esta página se mantiene como datos porque las fechas se han movido más de una vez. Las cifras siguientes están tomadas de la **Guía de la factura electrónica versión 4.7** y de la **Guía específica de la factura electrónica versión 4.8**, ambas publicadas el 7 de julio de 2026.

## ¿Cuáles son las fechas obligatorias de las fases?

| Fase | Contribuyentes afectados | Obligatorio desde |
| --- | --- | --- |
| 1 | Facturación o ingresos anuales **por encima de RM100 millones** | **1 de agosto de 2024** |
| 2 | **Por encima de RM25 millones y hasta RM100 millones** | **1 de enero de 2025** |
| 3 | **Por encima de RM5 millones y hasta RM25 millones** | **1 de julio de 2025** |
| 4 | **Hasta RM5 millones** | **1 de enero de 2026** |

No hay fase 5. Una quinta fase para la banda de RM150,000–RM500,000 apareció en versiones anteriores de la guía y ha desaparecido de la versión 4.7.

## ¿Cómo se determina mi fase?

| Situación | Base |
| --- | --- |
| Tiene estados financieros auditados | Facturación o ingresos en el estado de resultado integral del **ejercicio 2022** |
| No tiene estados financieros auditados | Ingresos anuales declarados en la declaración fiscal del **YA2022** |
| Cambió el cierre de su ejercicio FY2022 | Facturación **prorrateada a 12 meses** |

Una vez fijada, queda fijada. La sección 1.5 de la Guía es explícita: los cambios posteriores en la facturación no cambian su fecha de implementación. Una empresa que facturó RM30 millones en 2022 y RM4 millones hoy sigue siendo un contribuyente de la fase 2.

## ¿Cuándo empiezan los nuevos negocios?

| Negocio comenzado | Fecha de implementación de la factura electrónica |
| --- | --- |
| 2023 a 2025, facturación de al menos RM1,000,000 | **1 de julio de 2026** |
| 2026 en adelante | **1 de julio de 2026** o la fecha de inicio |
| 2026 en adelante, facturación del primer año inferior a RM1,000,000 | **1 de enero del segundo año siguiente** al año en que la facturación alcanzó RM1,000,000 |

## ¿Quién está exento?

La sección 1.6.1 de la Guía exime de emitir cualquier factura electrónica, incluidas las de por cuenta propia, a:

- Los contribuyentes con una facturación o ingresos anuales **inferiores a RM1,000,000**
- Las oficinas diplomáticas extranjeras
- Las personas físicas que no ejercen una actividad económica
- Los organismos estatutarios, las autoridades estatutarias y las autoridades locales, por las recaudaciones estatutarias, y por los bienes vendidos o los servicios prestados **antes del 1 de julio de 2025**
- Las organizaciones internacionales, por los bienes vendidos o los servicios prestados **antes del 1 de julio de 2025**

La exención se vincula a la persona, no al grupo. Sección 1.6.5: una empresa propiedad de una persona exenta implementa igualmente según su propio cronograma.

Por separado, la sección 1.6.7 retira del ámbito tipos de renta específicos — rentas del trabajo, pensión, pensión alimenticia, zakat, ciertas distribuciones de dividendos, valores cotizados en bolsa y valores de contratos de derivados, y las transmisiones de acciones no cotizadas salvo cuando el transmitente sea una empresa, LLP, entidad fiduciaria o sociedad cooperativa.

## ¿Qué permite el período de flexibilización provisional?

Acordado por el Gobierno el 26 de julio de 2024, seis meses desde cada fecha de fase — salvo la fase 4, que se amplió mucho más allá de eso.

| Fase | Período de flexibilización provisional |
| --- | --- |
| 1 | 1 de agosto de 2024 – **31 de enero de 2025** |
| 2 | 1 de enero de 2025 – **30 de junio de 2025** |
| 3 | 1 de julio de 2025 – **31 de diciembre de 2025** |
| 4 (tanto la fecha de inicio del 1 de enero de 2026 como la del 1 de julio de 2026) | **hasta el 31 de diciembre de 2027** |

Durante el período de flexibilización, la sección 16.2 de la Guía específica permite a un contribuyente:

- consolidar **todas** las actividades, incluidos los sectores de la Table 3.6 que de otro modo tienen prohibido consolidar
- consolidar **todas** las circunstancias de por cuenta propia
- poner cualquier texto en el campo *Descripción del producto o servicio*, en lugar de números de referencia de recibos o extractos
- **rechazar** la solicitud de un comprador o proveedor de una factura electrónica individual

LHDN tampoco perseguirá conforme a la s.120 de la Income Tax Act 1967 durante el período, siempre que el contribuyente esté al menos enviando documentos consolidados.

Esa última condición es la que la gente pasa por alto. La flexibilización no es permiso para no enviar nada.

## ¿Qué es el SVDP de la factura electrónica?

Un Programa Especial de Divulgación Voluntaria (Special Voluntary Disclosure Programme) se ejecuta del **7 de julio de 2026 al 31 de diciembre de 2027** para los contribuyentes que no realizaron envíos, enviaron facturas electrónicas no conformes, o ya están bajo una revisión de cumplimiento de factura electrónica. No se persiguen revisiones de cumplimiento ni sanciones sobre lo que se divulga, salvo que la divulgación implique fraude, incumplimiento deliberado o negligencia.

Los envíos deben usar la versión de factura electrónica **SVDP 1.2** (sin firma digital) o **SVDP 1.3** (con firma digital), y las facturas electrónicas consolidadas no realizadas deben presentarse mes a mes — no agrupadas en un único documento de puesta al día.

## ¿De dónde proviene realmente la obligación legal?

No de la Guía. La **Sección 82C de la Income Tax Act 1967**, incorporada por la Finance (No. 2) Act 2023 (Act 851), crea el deber de emitir una factura electrónica por cada transacción y de transmitirla para la validación del Director General. La sección 82C(6) cubre las facturas por cuenta propia, la s.82C(7) las facturas consolidadas, y la s.82C(8) permite una factura electrónica sustitutiva dentro de los **tres días** siguientes a una defectuosa. La sección 120(1)(d) convierte la infracción de las s.82C(1), (6) y (7) en un delito.

## Errores comunes

- **Tratar la cifra de RM1 millón como un aplazamiento.** Es una exención permanente en la sección 1.6.1. Tampoco es una fase — no hay fase 5.
- **Recalcular su fase a partir de la facturación actual.** La prueba es el FY2022, una sola vez.
- **Leer la flexibilización de la fase 4 como unas vacaciones.** Los envíos consolidados son la condición de la concesión, no una alternativa a ella.
- **Suponer que la ventana de 72 horas es una ventana de corrección.** Cancela; no modifica. Pasadas las 72 horas se emite una factura electrónica de nota de crédito, débito o reembolso.
- **No darse cuenta de que la fecha de la fase 3 es también el corte** para los organismos estatutarios y las organizaciones internacionales, cuya exención solo cubría las transacciones anteriores al 1 de julio de 2025.

## Qué sigue

Confirme cuáles de sus transacciones pueden consolidarse siquiera — varios sectores nunca pudieron, y cualquier transacción individual superior a RM10,000 se ha excluido desde el 1 de enero de 2026. Si compra a proveedores extranjeros o paga a personas físicas, las reglas de por cuenta propia se le aplican por pequeño que sea su libro de ventas. Los implementadores deberían empezar por la lista de campos en lugar del cronograma.
