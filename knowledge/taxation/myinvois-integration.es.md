---
topicId: MY-TAX-0008
title: "Integración con MyInvois: portal, API o middleware"
seoTitle: "Integración con MyInvois: portal vs API vs middleware"
slug: "myinvois-integration"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Una forma neutral respecto del proveedor de elegir entre el portal gratuito MyInvois, la integración directa por API y un proveedor tecnológico, según el volumen de transacciones y lo que su ERP ya hace."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "LHDN ofrece dos mecanismos de transmisión: el portal gratuito MyInvois, accesible a través de MyTax, que admite la introducción individual por formulario y la carga por lotes de una hoja de cálculo Excel predefinida; y una API, accesible mediante integración directa con el ERP, a través de un proveedor de servicios Peppol, o a través de un proveedor tecnológico no Peppol. El portal es adecuado para volúmenes bajos; la API es adecuada para volúmenes altos y requiere un certificado digital y trabajo previo sobre el sistema."
keyTakeaways:
  - "Solo dos mecanismos oficiales — portal y API. Todo lo demás es una vía para llegar a la API"
  - "El portal es gratuito, necesita un inicio de sesión de MyTax y ofrece carga por lotes en Excel"
  - "Las vías de la API son ERP directo, proveedor de servicios Peppol, o proveedor tecnológico no Peppol"
  - "El envío por API requiere un certificado digital como archivo .cer o .pfx"
  - "Límites estrictos: 100 documentos y 5MB por envío, 300KB por documento"
  - "Los intermediarios deben usar su propio Client ID y Secret, y solo pueden ver lo que ellos enviaron"
  - "El volumen de facturación por cuenta propia (self-billed), no el volumen de ventas, es lo que normalmente fuerza la decisión de la API"
appliesTo: "Responsables de finanzas y equipos de TI que eligen una vía de MyInvois, y cualquiera que compare presupuestos de proveedores de software de facturación electrónica."

faq:
  - q: "¿El portal MyInvois es realmente gratuito, y será suficiente?"
    a: "Sí, lo proporciona LHDN y se accede a él a través del portal MyTax sin coste alguno. Admite tanto la creación individual mediante un formulario como la carga por lotes de una hoja de cálculo Excel predefinida. Si será suficiente depende del número de documentos y de cuántos documentos necesitan datos específicos del comprador. Un negocio con un puñado de facturas B2B y una única factura electrónica consolidada mensual puede funcionar con él indefinidamente."
  - q: "¿Necesito un proveedor de servicios Peppol?"
    a: "No. Peppol es una de las tres vías que LHDN enumera para llegar a la API, junto con la integración directa con el ERP y los proveedores tecnológicos no Peppol. LHDN no impone una vía ni un proveedor. Peppol importa si además necesita un intercambio de documentos transfronterizo interoperable; no es un requisito de MyInvois."
  - q: "¿Qué necesita la API que no necesita el portal?"
    a: "Un certificado digital — un archivo .cer o .pfx que se usa para firmar los envíos, con la firma con hash incluida en el cuerpo del envío — y documentos construidos según la estructura UBL 2.1 en XML o JSON. LHDN publica la guía de integración y configuración de la API y los endpoints en el MyInvois SDK."
  - q: "Si uso un proveedor, ¿quién responde por una factura electrónica no emitida?"
    a: "Usted. El deber de emitir y transmitir recae en el contribuyente conforme a la s.82C de la Income Tax Act 1967, y la s.120(1)(d) convierte la infracción en un delito. Externalizar la transmisión no traslada la obligación. LHDN también restringe a los intermediarios a las facturas electrónicas que ellos mismos enviaron, de modo que un cambio de proveedor deja atrás el historial."
  - q: "¿Cómo dimensiono la decisión?"
    a: "Cuente documentos, no ingresos. Sume las facturas electrónicas transaccionales, las facturas electrónicas consolidadas, las facturas electrónicas por cuenta propia, y todas las notas de crédito, débito y reembolso. Luego compruebe las exclusiones — las transacciones superiores a RM10,000 y los sectores de la Table 3.6 no pueden consolidarse, lo que puede convertir un único documento mensual en miles."
  - q: "¿Puedo usar el portal y la API al mismo tiempo?"
    a: "Sí. LHDN presenta los dos mecanismos como una elección por envío, no como una opción permanente, y muchas empresas canalizan las ventas de alto volumen a través de la API mientras gestionan los documentos ocasionales por cuenta propia en el portal. Los informes y paneles del portal cubren ambos."

verificationNeeded:
  - "Numeric per-endpoint API rate limits — the SDK FAQ refers to Integration Practices without publishing figures"
  - "Any LHDN accreditation, certification or approved-vendor list for technology providers — none was located on hasil.gov.my or the SDK"
  - "The maximum number of rows accepted in the MyInvois Portal batch upload spreadsheet — LHDN describes a certain number without stating it"

lang: "es"
sourceContentHash: "12fac171732261f3"
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
  - title: "Guía de la factura electrónica (Versión 4.7) — secciones 2.2 a 2.5 (e-Invoice Guideline (Version 4.7) — sections 2.2 to 2.5)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Junta de Ingresos Internos de Malasia (LHDN)"
    date: "2026-07-07"
  - title: "MyInvois SDK (MyInvois SDK)"
    url: "https://sdk.myinvois.hasil.gov.my/"
    publisher: "Junta de Ingresos Internos de Malasia (LHDN)"
  - title: "MyInvois SDK — preguntas frecuentes (MyInvois SDK — frequently asked questions)"
    url: "https://sdk.myinvois.hasil.gov.my/faq/"
    publisher: "Junta de Ingresos Internos de Malasia (LHDN)"
  - title: "MyInvois SDK — respuesta de error estándar (MyInvois SDK — standard error response)"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "Junta de Ingresos Internos de Malasia (LHDN)"
  - title: "Guía específica de la factura electrónica (Versión 4.8) (e-Invoice Specific Guideline (Version 4.8))"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "Junta de Ingresos Internos de Malasia (LHDN)"
    date: "2026-07-07"

entity: "MyInvois transmission mechanisms"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "requires", to: "e-invoice-data-fields" }
  - { rel: "related-to", to: "myinvois-phases" }
related: ["e-invoicing", "myinvois-phases", "e-invoice-data-fields", "consolidated-e-invoice", "self-billed-e-invoice"]
keywords: ["MyInvois integration", "MyInvois API", "MyInvois Portal", "Peppol Malaysia", "e-Invoice middleware", "e-invois integrasi sistem"]
---

Casi todo lo que se ha escrito sobre esta decisión lo escribió alguien que vendía una de las respuestas. Así que empiece por los únicos dos mecanismos que LHDN reconoce realmente, en la Table 2.1 de la Guía de la factura electrónica: **el portal MyInvois** y **la API**. Los proveedores Peppol, los proveedores tecnológicos no Peppol y el middleware no son una tercera opción — son tres formas de llegar a la API.

## Los dos mecanismos

| | Portal MyInvois | API |
| --- | --- | --- |
| Coste | Gratuito, mediante inicio de sesión en **MyTax** | Construir o licenciar |
| Entrada | Formulario individual, o **carga por lotes de una hoja de cálculo Excel predefinida** | XML o JSON según **UBL 2.1** |
| Firma | Gestionada por el portal | Su **certificado digital** (.cer o .pfx) |
| Idoneidad según LHDN | Accesible a todos los contribuyentes; negocios donde la conexión por API no está disponible | Alto volumen; requiere inversión previa y cambio de sistema |
| Vías | Una | ERP directo, proveedor **Peppol**, proveedor **no Peppol** |

Ambos producen lo mismo: un número de identificación único del IRBM, una marca de tiempo de validación y un código QR en la representación visual.

## Dimensione el problema antes de ir de compras

La pregunta no es su facturación. Es **cuántos documentos debe transmitir en un mes**, y el recuento suele ser mayor de lo que la gente espera:

1. Facturas electrónicas transaccionales para compradores que pidieron una
2. Facturas electrónicas consolidadas — una o más al mes, por sucursal si se divide
3. **Facturas electrónicas por cuenta propia (self-billed)** — comisiones, proveedores extranjeros, arrendadores particulares, la mayoría de los intereses, dividendos, reembolsos de capital
4. Notas de crédito, débito y reembolso

Luego aplique las dos exclusiones que echan por tierra las estimaciones ingenuas. Cualquier **transacción individual superior a RM10,000** debe ser transaccional, en todos los sectores, desde el 1 de enero de 2026. Y nueve actividades de la Table 3.6 de la Guía específica de la factura electrónica no pueden consolidarse nunca — vehículos de motor, billetes de avión, contratos de construcción, pagos a agentes y distribuidores, pagos de apuestas, electricidad, telecomunicaciones.

Un taller que vende tres coches al mes tiene una carga de trabajo trivial en el portal. Un revendedor de telecomunicaciones con 4,000 abonados de pospago no, y ninguna cantidad de consolidación lo ayudará.

**El volumen por cuenta propia es la sorpresa habitual.** Una empresa con 40 facturas de venta al mes y 600 pagos de comisiones a agentes es un negocio de facturación electrónica de alto volumen, diga lo que diga su libro de ventas.

## Dónde el portal deja de funcionar de verdad

- **Coste de introducción de datos.** Cada documento transaccional necesita el nombre del comprador, el TIN, el número de registro, la dirección, el número de contacto y el número SST, tecleados o cargados por hoja de cálculo.
- **El reloj de las 72 horas.** Las ventanas de cancelación y rechazo corren desde la validación. Los procesos manuales que envían semanalmente no pueden usarlas.
- **Concentración de fin de mes.** Las facturas electrónicas consolidadas vencen dentro de los **siete días naturales** posteriores al cierre del mes, además de todo lo demás.
- **Conciliación.** El portal le ofrece recuperación en XML, JSON, metadatos, cuadrícula y PDF — pero casar los documentos validados con su libro de contabilidad es manual.

## Dónde la API cuesta más que la licencia

- **Un certificado digital** debe obtenerse, instalarse y renovarse.
- **Los límites de envío son estrictos:** 100 documentos y 5MB por envío, 300KB por documento. El agrupamiento por lotes y, cuando haga falta, la minificación son su problema.
- **Validación en dos etapas.** *Enviado* no es *Válido*. La estructura, los campos principales y los códigos se comprueban de inmediato; la firma, el contribuyente, los documentos referenciados y los duplicados se comprueban en segundo plano. Cualquier integración que trate un acuse de recibo de estilo 202 como un éxito irá acumulando documentos no válidos en silencio.
- **Gestión de tokens.** Los tokens de inicio de sesión son válidos durante 60 minutos y están pensados para reutilizarse, no para generarse en cada petición. La limitación de tasa devuelve un 429 con una cabecera `Retry-After`.
- **Datos maestros.** El TIN del proveedor y del comprador, el nuevo BRN de 12 dígitos, los códigos MSIC y los números SST tienen que estar correctos antes de que nada de esto funcione.

## Elegir una vía hacia la API

| Vía | Adecuada para | A lo que hay que prestar atención |
| --- | --- | --- |
| **Integración directa con el ERP** | ERP consolidado con una localización malasia mantenida, o capacidad de ingeniería interna | Mantenimiento continuo a medida que cambian las versiones de la guía — la v4.7 y la v4.8 aterrizaron ambas el 7 de julio de 2026 |
| **Proveedor de servicios Peppol** | Negocios que además quieren un intercambio de documentos interoperable con socios comerciales | Peppol no es un requisito de MyInvois; no pague por él como si lo fuera |
| **Proveedor tecnológico no Peppol / middleware** | Varios sistemas de origen, parques de POS, o un ERP sin localización | Custodia de los datos, condiciones de salida, y si envían con sus propias credenciales |

LHDN no respalda, acredita ni aprueba a ningún proveedor. Si un proveedor afirma tener la condición de aprobado por LHDN, pida verlo.

## La pregunta sobre el intermediario que nadie hace

El SDK indica que los intermediarios envían usando **su propio Client ID y Client Secret**, y solo pueden acceder a las facturas electrónicas que **ellos** enviaron — no pueden recuperar documentos que un contribuyente envió por su cuenta.

Dos consecuencias que conviene dejar por escrito en un contrato:

- **Cambiar de proveedor no arrastra consigo su historial de envíos.** Prevea un período de funcionamiento en paralelo y su propio archivo.
- **La responsabilidad no se transfiere.** La sección 82C de la Income Tax Act 1967 pone el deber en el contribuyente; la s.120(1)(d) convierte la infracción en un delito. Una caída del proveedor es su incumplimiento.

Sobre las caídas, LHDN ofrece un alivio. La sección 2.5.4 de la Guía de la factura electrónica dice que, cuando el propio MyInvois System está caído por mantenimiento o motivos técnicos y el contribuyente puede acreditar sus esfuerzos de cumplimiento, el Director General evaluará el caso de forma individual y podrá no adoptar ninguna medida. Eso cubre la caída de LHDN, no la de su proveedor.

## Un itinerario de decisión

1. **¿Está exento?** Por debajo de RM1,000,000 de facturación anual, deténgase.
2. **Cuente los documentos mensuales** en las cuatro categorías anteriores.
3. **¿Menos de un centenar, en su mayoría consolidados?** El portal, con la carga por lotes de Excel. Revíselo cada año.
4. **¿De cientos a miles, un único sistema de origen?** Pregunte a su proveedor de ERP qué cubre su localización de MyInvois — en concreto, los tipos por cuenta propia 11 a 14 y los campos de anexo para las importaciones.
5. **¿Miles, o varios sistemas de origen, o un parque de POS?** Middleware, elegido por la custodia de los datos y las condiciones de salida, no por las listas de funciones.
6. **Elija lo que elija, demuéstrelo de extremo a extremo antes de que termine su período de flexibilización** — el 31 de diciembre de 2027 para la fase 4, y ya pasado para las fases 1 a 3.

## Errores comunes

- **Comprar antes de contar.** El recuento de documentos, incluidos los de por cuenta propia, es toda la entrada de esta decisión.
- **Suponer que Peppol es obligatorio.** Es una de las tres vías de la API.
- **Creerse una afirmación de acreditación.** LHDN no publica ninguna lista de proveedores aprobados.
- **Tratar la validación como síncrona.** Cuatro de los siete validadores se ejecutan en segundo plano.
- **Saltarse la limpieza de los datos maestros.** El antiguo número de registro de la SSM y los TIN obsoletos fallarán el validador del contribuyente por muy buena que sea la integración.
- **Probar con datos limpios.** Pruebe con proveedores extranjeros, particulares sin TIN, notas de crédito y volumen de fin de mes, porque eso es lo que rompe.

## Qué sigue

Saque las cuentas por pagar y por cobrar del mes pasado, clasifique cada línea como transaccional, consolidada o por cuenta propia, y cuente. Esa cifra decide el mecanismo. Luego compruebe la lista de campos contra sus datos maestros, porque la limpieza casi siempre lleva más tiempo que la integración.
