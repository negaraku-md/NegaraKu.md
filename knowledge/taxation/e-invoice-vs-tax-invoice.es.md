---
topicId: MY-TAX-0006
title: "e-Invoice vs. factura fiscal SST: dos regímenes, dos documentos"
seoTitle: "e-Invoice vs. factura fiscal en Malasia: LHDN vs. RMCD"
slug: "e-invoice-vs-tax-invoice"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Por qué una e-Invoice validada por LHDN no satisface automáticamente la Sales Tax Act 2018 ni la Service Tax Act 2018, y qué debe constar en el documento para que cumpla ambas funciones."

tier: "3"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "La e-Invoice es un documento del impuesto sobre la renta según el art. 82C de la Income Tax Act 1967, administrado por LHDN. La factura SST es un documento aparte exigido por la Sales Tax Act 2018 y la Service Tax Act 2018, administrado por RMCD. Un solo documento puede servir para ambos, pero únicamente si incluye cada particular que exige cada régimen: el art. 82C(4) establece que, cuando los particulares entran en conflicto, la e-Invoice es válida solo a efectos del impuesto sobre la renta."
keyTakeaways:
  - "Dos leyes, dos reguladores: LHDN bajo la ITA 1967, RMCD bajo las leyes fiscales de 2018"
  - "El art. 82C(4) de la ITA 1967 permite que un solo documento cumpla ambas funciones, pero solo donde los particulares coinciden"
  - "Donde entran en conflicto, la e-Invoice es exigible solo a efectos del impuesto sobre la renta"
  - "Los particulares del impuesto sobre servicios están en el reg. 10 de las Service Tax Regulations 2018"
  - "Los particulares del impuesto sobre ventas están en el reg. 7 de las Sales Tax Regulations 2018"
  - "Los datos de MyInvois se comparten con RMCD según el art. 138(4)(aa) de la ITA 1967"
appliesTo: "Empresas registradas en SST que también están dentro del alcance de la e-facturación, y cualquiera que diseñe una plantilla de factura que deba satisfacer a ambos reguladores."

verificationNeeded:
  - "Whether RMCD has issued a dedicated guide reconciling the e-Invoice visual representation with the SST invoice particulars — none was located on mysst.customs.gov.my"

lang: "es"
sourceContentHash: "cf809540c51ed69e"
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
  - title: "Ley de Finanzas (n.º 2) de 2023 (Act 851) — sección 82C (Finance (No. 2) Act 2023 (Act 851) — section 82C)"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Gobierno de Malasia"
    date: "2023-12-29"
  - title: "Service Tax Regulations 2018 — reglamento 10 (Service Tax Regulations 2018 — regulation 10)"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Service-Tax-Regulations-2018.pdf"
    publisher: "Departamento Real de Aduanas de Malasia (RMCD)"
  - title: "Sales Tax Regulations 2018 — reglamento 7 (Sales Tax Regulations 2018 — regulation 7)"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Sales-Tax-Regulations-2018.pdf"
    publisher: "Departamento Real de Aduanas de Malasia (RMCD)"
  - title: "Guía de la e-Invoice (Versión 4.7) (e-Invoice Guideline (Version 4.7))"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Junta de Impuestos Internos de Malasia (LHDN)"
    date: "2026-07-07"
  - title: "MySST — Emisión de facturas (MySST — Issuing Invoices)"
    url: "https://mysst.customs.gov.my/issuing-invoices/"
    publisher: "Departamento Real de Aduanas de Malasia (RMCD)"

entity: "e-Invoice compared with the SST tax invoice"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "compares-with", to: "sst-explained" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "governs", to: "service-tax-act-2018" }
  - { rel: "governs", to: "sales-tax-act-2018" }
related: ["e-invoicing", "sst-explained", "myinvois-phases", "e-invoice-data-fields", "consolidated-e-invoice"]
keywords: ["e-Invoice vs tax invoice", "SST invoice requirements", "Service Tax Regulations 2018 regulation 10", "sales tax invoice particulars", "LHDN RMCD invoice", "invois cukai SST"]
---

Validar una factura a través de MyInvois no la convierte en una factura SST. Esa
frase les cuesta a las empresas registradas en SST más problemas que cualquier
otro punto de la implantación de la e-facturación, porque dos reguladores quieren
dos cosas distintas del mismo papel.

## Los dos regímenes de un vistazo

| | e-Invoice | Factura SST |
| --- | --- | --- |
| Ley | Income Tax Act 1967, **art. 82C** | **Sales Tax Act 2018** / **Service Tax Act 2018**, art. 21 |
| Regulador | **LHDN** | **RMCD** |
| Particulares fijados por | Guía de la e-Invoice, bajo el art. 134A de la ITA 1967 | **reg. 7** Sales Tax Regulations 2018 / **reg. 10** Service Tax Regulations 2018 |
| Quién debe emitir | Contribuyentes dentro del alcance según la fase de facturación | Fabricantes **registrados** y personas registradas |
| Validación | Transmitida a LHDN y validada por ella | Ninguna — ni envío ni número de referencia |
| Finalidad | Prueba de ingresos y gastos para el impuesto sobre la renta | Evidencia del impuesto cobrado para la contabilidad del SST |

Ninguno reemplaza al otro. Una empresa registrada en SST con una facturación
inferior a RM1 millón está exenta de la e-facturación y aun así emite facturas
SST. Una gran empresa no registrada es el caso inverso.

## La disposición que realmente rige esto

La sección 82C(4) de la Income Tax Act 1967, introducida por la Finance (No. 2)
Act 2023:

> Cuando una persona esté obligada a emitir una factura en virtud de cualquier
> otra ley escrita, la factura electrónica, incluidos cualesquiera otros
> particulares que se exijan, se interpretará como una factura emitida en virtud
> de esa ley — **siempre que, cuando los particulares de la factura electrónica
> sean incompatibles con los requisitos para la emisión de facturas en virtud de
> esa ley, la factura electrónica solo sea válida y exigible a efectos de esta
> Ley.**

Lee la salvedad dos veces. Un solo documento puede satisfacer ambos regímenes,
pero solo si incluye todo lo que ambos piden. Si te quedas corto en el lado de
RMCD, no has emitido un documento defectuoso para ambos: tienes un documento del
impuesto sobre la renta perfectamente válido y **ninguna factura SST en
absoluto**.

Las secciones 2.6.3 y 2.6.4 de la Guía de la e-Invoice dicen lo mismo con
palabras más sencillas: los contribuyentes pueden adoptar cualquier formato de
representación visual, y se les *aconseja* incluir los particulares exigidos por
leyes como la Sales Tax Act 2018 y la Service Tax Act 2018. Cuando la
representación visual incluye los particulares de las Service Tax Regulations
2018, puede utilizarse a efectos del impuesto sobre servicios.

## Lo que RMCD exige y la lista de campos de la e-Invoice no obliga

**Reglamento 10, Service Tax Regulations 2018** — número de serie de la factura;
fecha de la factura; nombre, dirección y número de identificación de la persona
registrada; una descripción suficiente para identificar los servicios gravables;
cualquier descuento; el total excluyendo el impuesto sobre servicios, la tasa, y
el impuesto sobre servicios total **mostrado como un importe separado**; el total
incluyendo el impuesto sobre servicios; y cualquier importe en moneda extranjera
también expresado en ringgit al tipo de venta vigente.

**Reglamento 7, Sales Tax Regulations 2018** añade, entre otros, **el nombre y la
dirección de la persona a quien se venden los bienes gravables**, y por
descripción el tipo, la cantidad y el importe excluyendo el impuesto sobre
ventas.

Se desprenden directamente dos lagunas:

- **El nombre y la dirección del comprador.** Los 55 campos de LHDN los incluyen,
  pero una e-Invoice consolidada fija el comprador como *General Public* con la
  dirección como NA. Un fabricante registrado no puede documentar una venta
  gravable de ese modo y cumplir a la vez el reg. 7(d).
- **El impuesto mostrado como un importe separado.** La e-Invoice incluye el tipo
  de impuesto, la tasa y el importe como datos. Que tu *representación visual*
  imprima el impuesto sobre servicios como una línea separada es una decisión de
  plantilla — y el reg. 10(f) la convierte en una decisión legal.

El idioma también es una norma de RMCD, no de LHDN: las facturas SST deben estar
en bahasa melayu o inglés.

## ¿Ve RMCD mis datos de la e-Invoice?

Sí. La sección 138(4)(aa) de la Income Tax Act 1967 autoriza a LHDN a compartir
los datos de MyInvois con RMCD, y la sección 2.6.1 de la Guía de la e-Invoice
confirma que la lista de campos se diseñó teniendo en cuenta la Sales Tax Act
2018 y la Service Tax Act 2018 junto con la ITA 1967, la Labuan Business Activity
Tax Act 1990 y la Petroleum (Income Tax) Act 1967. Tus dos presentaciones son
ahora visibles la una para la otra.

## Errores comunes

- **Retirar la plantilla de factura SST en la puesta en marcha.** Nada en el art.
  82C deroga el art. 21 de ninguna de las dos leyes de 2018.
- **Suponer que la validación subsana un particular ausente.** MyInvois valida
  contra el esquema de LHDN. No tiene opinión sobre el reg. 7 ni el reg. 10.
- **Usar una e-Invoice consolidada para una venta gravable a un comprador
  nombrado.** No puede incluir los particulares del comprador que exige el reg.
  7.
- **Omitir el número de registro SST del documento impreso.** Es un campo de la
  e-Invoice condicionalmente obligatorio para los registrados y un particular del
  reg. 10.
- **Tratar la declaración SST-02 y la e-Invoice como un solo flujo de trabajo.**
  Regulador distinto, período distinto, sanciones distintas.

## Qué sigue

Pon las dos listas de particulares una al lado de la otra frente a tu factura
impresa real, no frente a tu XML. El XML satisface a LHDN; la representación
visual es lo que tiene que satisfacer a RMCD. Si además consolidas recibos B2C,
comprueba por separado si alguna de esas operaciones es un suministro gravable
que necesita un comprador nombrado.
