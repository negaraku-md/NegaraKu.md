---
topicId: MY-TAX-0014
title: "Referencia de campos de datos de la e-Invoice"
seoTitle: "Campos de datos de la e-Invoice en Malasia: referencia de 55 campos"
slug: "e-invoice-data-fields"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Los 55 campos obligatorios de la e-Invoice con su estado obligatorio u opcional, los campos del anexo, las listas de códigos de LHDN y el validador que rechaza cada tipo de error."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "LHDN exige 55 campos de datos para emitir una e-Invoice, agrupados en ocho categorías. La mayoría son obligatorios; veinte son opcionales y ocho son condicionalmente obligatorios: los números de registro del SST y del impuesto turístico, la referencia de la e-Invoice original, el tipo de cambio de la moneda, la tasa impositiva y los dos campos de exención fiscal. Un anexo añade referencias obligatorias de formularios aduaneros para la importación y exportación de bienes."
keyTakeaways:
  - "55 campos en el Apéndice 1, agrupados en ocho categorías, más un anexo en el Apéndice 2"
  - "XML o JSON, ambos conformes a UBL 2.1"
  - "Ocho campos son condicionalmente obligatorios en lugar de siempre requeridos"
  - "La fecha y hora de la e-Invoice deben ser la fecha y hora actuales"
  - "Se ejecutan siete validadores: tres inmediatos, cuatro en segundo plano"
  - "Las listas de códigos para el tipo de e-Invoice, el tipo de impuesto, la moneda, MSIC, el estado y la UoM se publican en el SDK"
  - "Una e-Invoice defectuosa puede sustituirse por una e-Invoice sustitutiva dentro de tres días según el art. 82C(8) de la ITA de 1967"
appliesTo: "Desarrolladores que construyen una integración con MyInvois, consultores de ERP que mapean datos maestros y equipos de finanzas que depuran envíos rechazados."

verificationNeeded:
  - "The full published list of granular validation error codes (CF, DS, ST prefixes) — the SDK documents the seven validator categories and standard HTTP error codes but does not publish an exhaustive code-to-condition table"
  - "Per-endpoint API rate limits — the SDK refers to Integration Practices without stating numeric limits on the FAQ page"

lang: "es"
sourceContentHash: "7457966f1e6638bb"
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

updated: 2026-07-20
sources:
  - title: "Guía de la e-Invoice (Versión 4.7) — Apéndices 1 y 2 (e-Invoice Guideline (Version 4.7) — Appendices 1 and 2)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Junta de Impuestos Internos de Malasia (LHDN)"
    date: "2026-07-07"
  - title: "MyInvois SDK — reglas de validación de documentos (MyInvois SDK — document validation rules)"
    url: "https://sdk.myinvois.hasil.gov.my/document-validation-rules/"
    publisher: "Junta de Impuestos Internos de Malasia (LHDN)"
  - title: "MyInvois SDK — listas de códigos (MyInvois SDK — code lists)"
    url: "https://sdk.myinvois.hasil.gov.my/codes/"
    publisher: "Junta de Impuestos Internos de Malasia (LHDN)"
  - title: "MyInvois SDK — respuesta de error estándar (MyInvois SDK — standard error response)"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "Junta de Impuestos Internos de Malasia (LHDN)"
  - title: "Guía Específica de la e-Invoice (Versión 4.8) — Apéndice 1, lista de TIN generales (e-Invoice Specific Guideline (Version 4.8) — Appendix 1, list of general TIN)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "Junta de Impuestos Internos de Malasia (LHDN)"
    date: "2026-07-07"

entity: "e-Invoice data fields"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
related: ["e-invoicing", "myinvois-phases", "myinvois-integration", "self-billed-e-invoice", "consolidated-e-invoice"]
keywords: ["e-Invoice data fields", "55 fields e-Invoice", "MyInvois mandatory fields", "e-Invoice validation error", "UBL 2.1 Malaysia", "medan data e-invois"]
---

Cada envío rechazado se remonta a una de dos cosas: un campo que LHDN trata como
obligatorio pero que tu ERP trata como opcional, o un valor de código que no
figura en la lista de LHDN. Esta página es la lista de campos, tal como se
publica en los Apéndices 1 y 2 de la Guía de la e-Invoice versión 4.7.

El formato es **XML o JSON**, ambos conformes a **UBL 2.1**. LHDN agrupa los 55
campos en ocho categorías: Address, Business Details, Contact Number, Invoice
Details, Parties, Party Details, Payment Info y Products / Services.

## Los 55 campos

**M** = obligatorio · **C** = condicionalmente obligatorio · **O** = opcional

### Partes y detalles de las partes

| # | Campo | Estado | Nota |
| --- | --- | --- | --- |
| 1 | Nombre del proveedor | M | |
| 2 | Nombre del comprador | M | General Public en una e-Invoice consolidada |
| 3 | TIN del proveedor | M | Se aplican los códigos TIN generales cuando no está disponible |
| 4 | Número de registro / identificación / pasaporte del proveedor | M | Los registrados en SSM usan únicamente el **nuevo BRN de 12 caracteres** |
| 5 | Número de registro SST del proveedor | **C** | Obligatorio para los registrados en SST |
| 6 | Número de registro del impuesto turístico del proveedor | **C** | Obligatorio para los registrados en el impuesto turístico |
| 7 | Correo electrónico del proveedor | O | |
| 8 | Código MSIC del proveedor | M | Numérico de 5 dígitos; 00000 cuando no esté disponible para un proveedor extranjero |
| 9 | Descripción de la actividad comercial del proveedor | M | |
| 10 | TIN del comprador | M | |
| 11 | Número de registro / identificación / pasaporte del comprador | M | |
| 12 | Número de registro SST del comprador | **C** | Obligatorio para los registrados en SST |
| 13 | Correo electrónico del comprador | O | |

### Dirección y contacto

| # | Campo | Estado |
| --- | --- | --- |
| 14 | Dirección del proveedor | M |
| 15 | Dirección del comprador | M |
| 16 | Número de contacto del proveedor | M |
| 17 | Número de contacto del comprador | M |

### Detalles de la factura

| # | Campo | Estado | Nota |
| --- | --- | --- | --- |
| 18 | Versión de la e-Invoice | M | SVDP 1.2 / 1.3 solo para divulgación voluntaria |
| 19 | Tipo de e-Invoice | M | Véase la lista de códigos más abajo |
| 20 | Código / número de la e-Invoice | M | Referencia propia del proveedor |
| 21 | Número de referencia de la e-Invoice original | **C** | Obligatorio en notas de crédito, débito y reembolso |
| 22 | Fecha y hora de la e-Invoice | M | **Debe ser la fecha y hora actuales** |
| 23 | Firma digital del emisor | M | Certificado del prestador de servicios cuando se utiliza uno |
| 24 | Código de moneda de la factura | M | |
| 25 | Tipo de cambio de la moneda | **C** | Obligatorio cuando la moneda no es el ringgit |
| 26 | Frecuencia de facturación | O | |
| 27 | Período de facturación | O | |

### Productos y servicios

| # | Campo | Estado | Nota |
| --- | --- | --- | --- |
| 28 | Clasificación | M | Código de 3 dígitos del catálogo de LHDN |
| 29 | Descripción del producto o servicio | M | Números de referencia de recibos en una e-Invoice consolidada |
| 30 | Precio unitario | M | |
| 31 | Tipo de impuesto | M | Nivel de línea y de factura |
| 32 | Tasa impositiva | **C** | |
| 33 | Importe del impuesto | M | Nivel de línea y de factura |
| 34 | Detalles de la exención fiscal | **C** | Obligatorio si se aplica una exención |
| 35 | Importe exento de impuesto | **C** | Obligatorio si se aplica una exención |
| 36 | Subtotal | M | Solo nivel de línea |
| 37 | Total excluyendo impuestos | M | Nivel de línea y de factura |
| 38 | Total incluyendo impuestos | M | Solo nivel de factura |
| 39 | Importe neto total | O | Solo nivel de factura |
| 40 | Importe total a pagar | M | Solo nivel de factura |
| 41 | Importe de redondeo | O | Solo nivel de factura |
| 42 | Importe imponible total por tipo de impuesto | O | Solo nivel de factura |
| 43 | Cantidad | O | |
| 44 | Medida | O | |
| 45 | Tasa de descuento | O | |
| 46 | Importe del descuento | O | |
| 47 | Tasa de cargo / comisión | O | |
| 48 | Importe del cargo / comisión | O | |

### Información de pago

| # | Campo | Estado |
| --- | --- | --- |
| 49 | Modo de pago | O |
| 50 | Número de cuenta bancaria del proveedor | O |
| 51 | Condiciones de pago | O |
| 52 | Importe del pago anticipado | O |
| 53 | Fecha del pago anticipado | O |
| 54 | Número de referencia del pago anticipado | O |
| 55 | Número de referencia de la factura | O |

## Campos del anexo

| Campo | Estado | Se aplica a |
| --- | --- | --- |
| Número de referencia del Formulario Aduanero n.º 1, 9, etc. | **Obligatorio** | Importación de bienes |
| Número de referencia del Formulario Aduanero n.º 2 | Opcional | Exportación de bienes |
| Nombre / dirección / TIN / número de registro o pasaporte del destinatario del envío | Opcional | Bienes enviados a alguien distinto del comprador |
| Incoterms | Opcional | Importación y exportación de bienes |
| Código arancelario del producto | Opcional | Solo bienes |
| Información del acuerdo de libre comercio | Opcional | Solo exportación, si corresponde |
| Número de autorización para exportador certificado, p. ej. número ATIGA | Opcional | Solo exportación, si corresponde |
| País de origen | Opcional | Importación y exportación de bienes |
| Detalles de otros cargos | Opcional | Importación y exportación de bienes |

LHDN señala que los requisitos del anexo pueden actualizarse de vez en cuando.

## Listas de códigos

**Tipo de e-Invoice**

| Código | Tipo | | Código | Tipo |
| --- | --- | --- | --- | --- |
| 01 | Factura | | 11 | Factura autofacturada |
| 02 | Nota de crédito | | 12 | Nota de crédito autofacturada |
| 03 | Nota de débito | | 13 | Nota de débito autofacturada |
| 04 | Nota de reembolso | | 14 | Nota de reembolso autofacturada |

**Tipo de impuesto**

| Código | Tipo |
| --- | --- |
| 01 | Impuesto sobre ventas |
| 02 | Impuesto sobre servicios |
| 03 | Impuesto turístico |
| 04 | Impuesto sobre bienes de alto valor |
| 05 | Impuesto sobre ventas de bienes de bajo valor |
| 06 | No aplicable |
| E | Exención fiscal, cuando corresponda |

**TIN general** (Guía Específica de la e-Invoice, Apéndice 1)

| Código | Uso |
| --- | --- |
| EI00000000010 | General Public — persona física malasia solo con MyKad; comprador en una e-Invoice consolidada; proveedor en una e-Invoice autofacturada consolidada |
| EI00000000020 | Comprador extranjero o destinatario de envío extranjero |
| EI00000000030 | Proveedor extranjero, autofacturado |
| EI00000000040 | Gobierno, autoridades estatales y locales, organismos estatutarios, instituciones exentas |

El SDK también publica códigos de clasificación, códigos de país, códigos de
moneda, códigos MSIC, modos de pago, códigos de estado y unidades de medida.

## Validadores y qué los activa

| Validador | Momento | Causa típica de fallo |
| --- | --- | --- |
| **Structure** | Inmediato | XML o JSON malformado, o un documento que no coincide con la estructura requerida para ese tipo y versión según UBL 2.1 |
| **Core Fields** | Inmediato | Falta un campo obligatorio |
| **Code** | Inmediato y en segundo plano | Un valor de moneda, tipo de impuesto u otro código que no figura en la lista de LHDN |
| **Signature** | En segundo plano | La firma digital no supera la verificación |
| **Taxpayer** | En segundo plano | Un TIN referenciado en el documento no es válido a la fecha de emisión del documento |
| **Referenced Documents** | En segundo plano | Una nota de crédito, débito o reembolso apunta a un documento que no es una e-Invoice válida en el momento de su emisión |
| **Duplicate Document** | En segundo plano | Ya se había enviado un documento casi idéntico — código de error **DS302** |

El estado del documento avanza de **Submitted → Valid** o **Invalid**.
*Submitted* significa únicamente que las comprobaciones de estructura y campos
básicos se superaron; los validadores en segundo plano aún pueden rechazarlo.

Los errores a nivel de transporte usan asignaciones HTTP estándar: `BadRequest` y
`BadArgument` (400), `Unauthorized` (401), `Forbidden` (403), `NotFound` (404),
`TooManyRequests` (429, con un encabezado `Retry-After`), `InternalServerError`
(500), `NotImplemented` (501), `ServiceUnavailable` (503).

## Corregir un documento defectuoso

- **Dentro de las 72 horas de la validación** — el proveedor puede cancelar, o el
  comprador puede solicitar el rechazo y el proveedor entonces cancela. Pasadas
  las 72 horas, ninguna de las dos opciones es posible.
- **Dentro de los tres días de emitir una e-Invoice defectuosa** — el art.
  82C(8) de la Income Tax Act 1967 permite una **e-Invoice sustitutiva**.
- **Después de eso** — emite una e-Invoice de nota de crédito, débito o reembolso
  que referencie la original en el campo 21.

## Errores comunes

- **Enviar el antiguo número de registro de SSM.** El campo 4 requiere el nuevo
  BRN de 12 dígitos para los registrados en SSM.
- **Retrotraer la fecha del campo 22.** LHDN exige la fecha y hora actuales; un
  documento con fecha retroactiva falla.
- **Dejar el MSIC en blanco para un proveedor extranjero.** Usa 00000, no un
  valor vacío.
- **Usar el tipo de impuesto 06 para indicar exención.** 06 es *No aplicable*; la
  exención es E, y esta hace que los campos 34 y 35 pasen a ser obligatorios.
- **Reintentar un envío fallido sin cambios.** El validador de duplicados
  generará DS302 en lugar de aceptarlo.
- **Tratar una respuesta Submitted como éxito.** Solo *Valid* es éxito.

## Qué sigue

Mapea los campos 3, 4, 5, 8, 10, 11 y 12 contra los datos maestros de tus
clientes y proveedores antes de escribir cualquier código: esos siete son donde
realmente se va el tiempo de limpieza. Luego decide la ruta de transmisión,
porque el Portal rellena estos campos mediante un formulario y la API los
convierte en tu problema.
