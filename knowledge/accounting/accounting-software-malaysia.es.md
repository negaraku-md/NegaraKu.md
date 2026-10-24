---
topicId: MY-ACC-0011
title: "Software de contabilidad en Malasia: las dos capacidades que ahora lo deciden"
seoTitle: "Software de contabilidad en Malasia: compatibilidad con e-Invoice y MBRS"
slug: "accounting-software-malaysia"
category: "accounting"
subcategory: ["bookkeeping"]
summary: "Una forma neutral respecto al proveedor de evaluar el software de contabilidad para una empresa malasia, en los dos ejes que ahora importan — cómo llega a MyInvois, y si su salida puede alimentar una presentación MBRS."

tier: "4"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "Las listas de funciones ya no separan los paquetes de contabilidad que se venden en Malasia. Dos capacidades sí lo hacen. Primera, cómo lleva el software un documento a MyInvois — a través del portal gratuito, mediante una integración directa por API, o a través de un intermediario que presenta bajo sus propias credenciales. Segunda, si su salida puede mapearse sobre la taxonomía SSMxT de SSM para una presentación MBRS, dado que ningún paquete de contabilidad presenta directamente ante SSM. Todo lo demás es preferencia."
keyTakeaways:
  - "LHDN documenta dos mecanismos de transmisión — el Portal MyInvois y la API — más la presentación por un intermediario designado"
  - "LHDN publica un SDK pero ninguna acreditación, certificación ni lista de proveedores aprobados para software de e-Invoice; la afirmación de estar «aprobado por LHDN» es del propio proveedor"
  - "La única acreditación real en la facturación electrónica malasia es la de MDEC, como Autoridad Peppol, que cubre a los Proveedores de Servicios Peppol y a los Proveedores de Soluciones Peppol-Ready — y Peppol no es un requisito de MyInvois"
  - "Ningún paquete de contabilidad presenta ante MBRS; las presentaciones se construyen en la propia herramienta de preparación de SSM y se suben a mPortal como un zip"
  - "«Listo para MBRS» significa, por tanto, un balance de comprobación estable y exportable que mapee sobre conceptos SSMxT, no un botón de presentación"
  - "La taxonomía SSMxT no puede ser ampliada por una empresa, por lo que un plan de cuentas sin acomodo en la taxonomía es un coste recurrente"
  - "Un intermediario solo puede recuperar los documentos que él mismo presentó, así que cambiar de proveedor no arrastra tu historial de presentaciones"
appliesTo: "Empresas malasias que seleccionan o reemplazan software de contabilidad, y equipos financieros que auditan lo que su paquete actual puede hacer realmente."

verificationNeeded:
  - "Capability claims about any specific product are deliberately absent from this page — verify each one against the vendor's own current published documentation, as localisation coverage changes between releases without notice"
  - "SSM does not publish an approved or accredited list of third-party XBRL preparation software on its MBRS pages; confirm with SSM before relying on any vendor claim of MBRS certification"
  - "The e-Invoice Guideline and Specific Guideline are revised frequently — confirm the current version before treating any integration requirement as settled"

lang: "es"
sourceContentHash: "2723b917b69eeed3"
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
  - title: "Kit de desarrollo de software (SDK) para el sistema MyInvois de la LHDNM (Software Development Kit (SDK) for the LHDNM MyInvois System)"
    url: "https://sdk.myinvois.hasil.gov.my/"
    publisher: "Junta de Ingresos Internos de Malasia (LHDN)"
  - title: "Guía de e-Invoice de la IRBM (IRBM e-Invoice Guideline)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Junta de Ingresos Internos de Malasia (LHDN)"
  - title: "Proveedores de servicios Peppol — Facturación electrónica nacional (Peppol Service Providers — National e-Invoicing)"
    url: "https://www.mdec.my/national-einvoicing/peppol-service-providers"
    publisher: "Corporación de Economía Digital de Malasia (MDEC)"
  - title: "Documento de arquitectura SSMxT 2022 (SSMxT 2022 Architecture Document)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "Comisión de Sociedades de Malasia (SSM)"
  - title: "Herramienta de preparación MBRS (MBRS Preparation Tool)"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/XBRL%20250918/MBRS-Preparation-Tool.aspx"
    publisher: "Comisión de Sociedades de Malasia (SSM)"

entity: "Accounting software"
relations:
  - { rel: "related-to", to: "myinvois-integration" }
  - { rel: "affects", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "sdn-bhd-bookkeeping" }
related: ["sdn-bhd-bookkeeping", "mbrs-2-filing-guide", "mbrs-tagging-errors", "myinvois-integration", "e-invoice-accounting-records", "bookkeeping-in-house-vs-outsourced", "e-invoicing", "accounting-records-section-245"]
keywords: ["accounting software Malaysia", "e-invoice compliant accounting software", "MyInvois integration software", "MBRS XBRL software Malaysia", "LHDN approved accounting software", "SSMxT taxonomy export"]
---

El artículo-lista de software de contabilidad malasio es un género resuelto: diez
productos, un párrafo cada uno, una tabla de funciones que nadie usa, y un enlace
de afiliado. Nunca fue útil, y desde que llegaron el e-Invoice y el MBRS 2.0 es
activamente engañoso, porque clasifica los productos por las cosas que ya no los
separan.

Dos capacidades los separan ahora. Ninguna aparece en una cuadrícula de funciones.

## Eje 1: cómo lleva el software un documento a MyInvois

LHDN documenta **dos mecanismos de transmisión** — el Portal MyInvois y la API —
y por separado permite que un contribuyente designe a un **intermediario** para
que presente en su nombre. Eso produce cuatro formas prácticas, y el software que
compras determina cuáles te quedan abiertas.

| Vía | Qué debe hacer el software | Qué verificar |
| --- | --- | --- |
| **Solo Portal** | Nada. Tecleas o cargas por lotes los documentos en MyInvois | Si el software puede exportar un archivo que coincida con el diseño de la hoja de cálculo por lotes del Portal, o si estás reteclando |
| **API directa** | Construir y firmar documentos UBL 2.1, gestionar tokens, manejar la validación asíncrona | Si la localización malasia cubre los tipos de documento autofacturados y los campos del anexo de importación, no solo las facturas de venta estándar |
| **A través de un intermediario o middleware** | Exportar datos de transacciones limpios según un calendario | Qué credenciales usa la presentación, quién conserva los datos, y qué te llevas al salir |
| **A través de un proveedor de servicios Peppol** | Lo mismo que el middleware, por un punto de acceso Peppol | Que realmente necesitas un intercambio interoperable con socios comerciales — Peppol no es un requisito de MyInvois |

La elección entre estas vías es una cuestión de volumen y arquitectura tratada en
[integración con MyInvois](/en/taxation/myinvois-integration). Lo que corresponde
aquí es la consecuencia del lado del software: un paquete sin ruta de integración
por API no te impide cumplir, te compromete al Portal, y el coste del Portal son
pulsaciones de teclas y concentración de cierre de mes, no cuotas de licencia.

**El detalle del intermediario que vale la pena escribir en un contrato:** un
intermediario solo puede ver y recuperar las e-Invoices que él mismo presentó.
Cambia de proveedor y tu historial de presentaciones no te sigue. Planifica una
ejecución en paralelo y conserva tu propio archivo.

## La afirmación de acreditación de la que desconfiar

LHDN publica un SDK, documentación de API y un FAQ. No publica un esquema de
acreditación, un programa de certificación ni una lista de proveedores aprobados
para software de e-Invoice. Si un producto se comercializa como
**aprobado por LHDN**, ese estatus es la descripción que el proveedor hace de sí
mismo. Pide ver el instrumento.

Hay una acreditación genuina en la facturación electrónica malasia, y pertenece a
otro. **MDEC es la Autoridad Peppol de Malasia**, y acredita dos roles distintos:

| Rol | Qué es |
| --- | --- |
| **Proveedor de servicios Peppol (SP)** | Opera un punto de acceso Peppol — la pasarela de conectividad que enruta los documentos |
| **Proveedor de soluciones Peppol-Ready (PRSP)** | Construye software o ERP con conformidad Peppol para usuarios finales |

MDEC publica ambas listas. Ninguna es una aprobación de LHDN, y ninguna es
necesaria para cumplir con el mandato del e-Invoice. Un proveedor que posee la
acreditación de MDEC ha demostrado conformidad con las normas Peppol, lo cual es
una credencial real — para Peppol.

## Eje 2: si la salida puede alimentar una presentación MBRS

Aquí está el hecho que reencuadra toda la categoría: **ningún paquete de
contabilidad presenta estados financieros ante SSM.**

Las presentaciones se construyen en la propia **Herramienta de preparación MBRS
(mTool)** de SSM, que genera un zip que se sube al portal MBRS. Ese es el
artefacto de presentación aceptado. Produzca lo que produzca tu libro mayor, solo
se convierte en una presentación MBRS después de pasar por esa herramienta.

Así que «listo para MBRS», como afirmación de software, solo puede significar
honestamente una cosa: la salida está en una forma que mapea limpiamente sobre la
taxonomía **SSMxT** de SSM. Tres propiedades lo deciden:

- **Un balance de comprobación estable y exportable** con códigos de cuenta que no cambian de un año a otro. El mapeo se reconstruye desde cero cada vez que los códigos cambian.
- **Una base de presentación que no se desplaza.** Cambiar entre formatos de presentación obliga a rehacer el mapeo aunque las cifras sean idénticas.
- **Un plan de cuentas cuyas líneas tengan dónde aterrizar.** La arquitectura SSMxT establece que las entidades **no deben ampliar la taxonomía** — las extensiones específicas de la empresa están prohibidas, y el detalle corresponde a bloques de texto. Una cuenta sin concepto correspondiente es una decisión manual cada año.

Dos trampas mecánicas se sitúan aguas abajo y vale la pena conocerlas antes de
culpar al software. Los gastos se almacenan como valores **positivos** en SSMxT,
lo contrario de la mayoría de las exportaciones de libro mayor. Y una cifra
expresada en miles debe llevar el atributo `decimals` correcto — el equivocado
pasa la validación en silencio y presenta un número mil veces demasiado grande o
demasiado pequeño.

## Una lista de evaluación para enviar a un proveedor

1. ¿Qué mecanismo de transmisión de MyInvois admite el producto hoy — exportación al Portal, API directa, o presentación a través de tu propio servicio de intermediario?
2. Si es API: ¿cubre la localización las e-Invoices **autofacturadas** y los campos del anexo para bienes importados, o solo las facturas de venta estándar?
3. ¿Bajo qué credenciales se presentan los documentos, y quién conserva los documentos validados?
4. ¿Podemos exportar un balance de comprobación completo con códigos de cuenta estables, en un formato legible por máquina, sin un consultor?
5. ¿Posees la acreditación de MDEC como SP o PRSP de Peppol — y si afirmas estar aprobado por LHDN, qué documento lo acredita?
6. Al salir, ¿qué nos llevamos: el libro mayor, el mapeo, el historial de presentaciones?

## Por qué esta página no nombra ningún producto

Porque una capacidad solo es publicable si el proveedor o LHDN la publica, y las
páginas de capacidades de los proveedores cambian entre versiones sin un registro
de cambios. Una comparación de productos escrita hoy es una instantánea del texto
de marketing, no del software. La lista de arriba sobrevive a la instantánea; una
tabla clasificada no lo haría.

## Errores comunes

- **Creerse una afirmación de estar aprobado por LHDN.** LHDN no publica tal lista.
- **Confundir la acreditación Peppol de MDEC con una aprobación de LHDN,** o tratar Peppol como obligatorio.
- **Comprar un botón de presentación.** Nada se presenta ante MBRS salvo la salida de mTool.
- **Leer «listo para MBRS» como certificación.** En el mejor de los casos significa una exportación limpia y estable.
- **Cambiar el plan de cuentas anualmente** y pagar otra vez por el mapeo cada vez.
- **Evaluar solo la facturación de ventas.** El volumen autofacturado es lo que rompe la mayoría de las implementaciones.
- **Suponer que la validación detecta los errores de escala.** Un error de escala de mil veces pasa.

## Qué sigue

Ejecuta dos pruebas sobre lo que ya tengas antes de ir de compras. Exporta un
balance de comprobación completo y comprueba si cada cuenta tiene un acomodo
SSMxT obvio. Luego toma una transacción autofacturada — una comisión de agente o
un proveedor extranjero — y síguela de principio a fin hasta MyInvois. La de esas
dos que falle es lo que estás comprando en realidad.
