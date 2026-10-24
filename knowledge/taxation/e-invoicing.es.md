---
topicId: MY-TAX-0003
title: "e-facturación en Malasia: por dónde empezar con MyInvois"
seoTitle: "e-facturación en Malasia: punto de partida de MyInvois"
slug: "e-invoicing"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Una página de orientación sobre el mandato de e-Invoice de Malasia: cómo funciona la validación de MyInvois, cuándo entró tu empresa en el alcance y qué guía detallada responde a tu pregunta."

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "La e-facturación exige que los datos de la factura se envíen al sistema MyInvois de LHDN para su validación, a través del MyInvois Portal gratuito o de un sistema conectado por API. Un documento validado recibe un Número de Identificador Único y un código QR. El mandato se aplica por fases según la facturación anual, y la última fase alcanza a las empresas de hasta RM5 millones desde el 1 de enero de 2026, quedando exentas las empresas por debajo de RM1 millón. Cada fase lleva su propio período de relajación provisional."
keyTakeaways:
  - "La validación ocurre a través de MyInvois antes de que el documento funcione como factura a efectos del impuesto sobre la renta"
  - "Cuatro fases, no hay quinta: la última comenzó el 1 de enero de 2026 para facturaciones de hasta RM5 millones"
  - "Las empresas con una facturación anual inferior a RM1,000,000 están exentas"
  - "Tu fase queda fijada por las cifras del FY2022 o del YA2022 y no cambia después"
  - "Una e-Invoice validada por LHDN no satisface automáticamente las reglas de la factura fiscal SST — ese es un requisito de documento aparte"
appliesTo: "Propietarios de empresas, equipos de finanzas y administradores de sistemas que se preparan para el mandato de la e-Invoice o que operan bajo él."

verificationNeeded: []

lang: "es"
sourceContentHash: "46533f76e2996181"
masterLanguage: "en"
translationStatus: "in-sync"

status: "published"
aiAssisted: true
reviewer: null
reviewed: "2026-07-25"
reviewDue: 2027-07-22
publishedBy: "ashton-tan"
revision: 0
revisions:
  - revision: 0
    date: 2026-07-20
    change: "Approved and published."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Guía de la e-Invoice del IRBM (IRBM e-Invoice Guideline)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Junta de Impuestos Internos de Malasia (LHDN)"
    date: "2026-07-07"
  - title: "Guía Específica de la e-Invoice del IRBM (IRBM e-Invoice Specific Guideline)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "Junta de Impuestos Internos de Malasia (LHDN)"
    date: "2026-07-07"
  - title: "MyInvois Portal"
    url: "https://myinvois.hasil.gov.my/"
    publisher: "Junta de Impuestos Internos de Malasia (LHDN)"

entity: "e-Invoicing and MyInvois"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "explained-in", to: "myinvois-phases" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "consolidated-e-invoice" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
  - { rel: "related-to", to: "e-invoice-vs-tax-invoice" }
related: ["myinvois-phases", "myinvois-integration", "e-invoice-data-fields", "consolidated-e-invoice", "self-billed-e-invoice", "e-invoice-vs-tax-invoice", "e-invoice-accounting-records"]
keywords: ["e-Invoice Malaysia", "MyInvois", "e-invois LHDN", "e-invoicing phases Malaysia", "MyInvois validation"]
---

Antes una factura era válida porque tú la emitías. Bajo el mandato de la
e-Invoice es válida porque LHDN así lo dice: el documento tiene que enviarse a
MyInvois y validarse antes de cumplir su función a efectos del impuesto sobre la
renta.

Ese único cambio es lo que genera todas las preguntas posteriores, y la mayoría
tiene una respuesta dedicada.

## Cómo funciona la validación, en seis pasos

1. El proveedor envía los datos de la transacción a MyInvois, ya sea tecleándolos
   en el Portal gratuito o automáticamente a través de un sistema conectado por
   API.
2. LHDN valida la estructura y los campos requeridos casi en tiempo real.
3. Si tiene éxito, se emiten un **Número de Identificador Único** y un código QR.
4. El proveedor comparte el documento validado con el comprador.
5. El comprador puede verificar el código QR contra los registros de LHDN.
6. Los rechazos y las cancelaciones deben gestionarse dentro del plazo permitido.

## Qué guía necesitas

| Si tu pregunta es | Lee |
| --- | --- |
| ¿Cuándo se aplica esto a mi empresa? | [Fases, umbrales y fechas de relajación de MyInvois](/en/taxation/myinvois-phases) |
| ¿Portal, API o un proveedor de middleware? | [Integración con MyInvois](/en/taxation/myinvois-integration) |
| ¿Qué datos tengo que enviar realmente? | [Referencia de campos de datos de la e-Invoice](/en/taxation/e-invoice-data-fields) |
| ¿Puedo agrupar mis ventas minoristas en lugar de emitir una por cada venta? | [e-Invoices consolidadas](/en/taxation/consolidated-e-invoice) |
| Mi proveedor está en el extranjero, o es una persona física | [e-Invoices autofacturadas](/en/taxation/self-billed-e-invoice) |
| ¿Esto reemplaza mi factura fiscal SST? | [e-Invoice vs. factura fiscal SST](/en/taxation/e-invoice-vs-tax-invoice) |
| ¿Cuánto tiempo tengo que conservarlas? | [e-Invoices y registros contables](/en/accounting/e-invoice-accounting-records) |

## Las cuatro cosas que la gente malinterpreta

**No existe una fase cinco.** La implantación se realizó en cuatro fases según la
facturación anual, terminando con la cohorte de hasta RM5 millones desde el 1 de
enero de 2026. Las empresas con una facturación anual inferior a **RM1,000,000**
están exentas, junto con las oficinas diplomáticas extranjeras y las personas
físicas que no ejercen una actividad empresarial. Esto no contradice el inicio
aparte del **1 de julio de 2026** que se aplica a las empresas de *nueva
constitución*: una que comenzó entre 2023 y 2025 con una facturación de RM1
millón o más entra en esa fecha. Es una regla para los entrantes sin una
referencia del FY2022, no una quinta fase de facturación.

**Tu fase es fija, no flotante.** Se determina por los estados financieros
auditados del FY2022 o la declaración del YA2022, prorrateada cuando cambió el
cierre del ejercicio, y no cambia después. Crecer por encima de un umbral más
adelante no te desplaza a una fase anterior, y reducirte no te saca de ella.

**Los períodos de relajación no son lo mismo que las fechas de las fases.** Cada
fase llevaba un período provisional durante el cual LHDN no actuaría contra el
incumplimiento, y la relajación de la Fase 4 dura considerablemente más que las
anteriores. Lee la guía de fases en lugar de suponer que la fecha del mandato es
la fecha de aplicación.

**Una e-Invoice validada no es automáticamente una factura fiscal SST.** Los dos
regímenes tienen requisitos de documento distintos, y la posición legal es que,
cuando los particulares de una e-Invoice son incompatibles con los requisitos de
factura de otra ley escrita, la e-Invoice es válida solo a efectos de la Income
Tax Act. Las personas registradas en SST necesitan un documento que satisfaga
ambos.

## Errores comunes

- Esperar a la fecha del mandato para empezar a hacer pruebas. Los fallos de
  validación de TIN y de integración solo salen a la luz con un volumen real de
  transacciones.
- Suponer que cada cliente necesita una e-Invoice detallada, cuando muchas
  transacciones B2C pueden consolidarse — sujeto a las actividades prohibidas.
- Pasar por alto las obligaciones de autofacturación para proveedores extranjeros
  y para pagos a personas físicas que no emiten nada por sí mismas.
- Tratar esto como un proyecto de TI. La mayoría de los fallos en la puesta en
  marcha son datos maestros sucios de clientes y proveedores, no errores de
  integración.
- Suponer que MyInvois es tu archivo. LHDN no publica ninguna garantía de
  conservación para los documentos validados; el deber de conservación sigue
  siendo tuyo.

## Qué sigue

Si todavía no sabes si estás dentro del alcance, o cuándo, empieza por la guía de
fases: lleva las bandas de facturación, el umbral de exención, las reglas para
nuevas empresas y cada fecha de fin de relajación. Si ya estás dentro del alcance
y estás eligiendo cómo enviar, la guía de integración compara el Portal, la API
directa y las rutas de middleware según el volumen de transacciones.
