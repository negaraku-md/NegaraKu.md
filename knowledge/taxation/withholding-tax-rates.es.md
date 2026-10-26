---
topicId: MY-TAX-0025
title: "Tasas de retención de impuestos en Malasia por tipo de pago"
seoTitle: "Tasas de retención en Malasia — Sección, tasa, formulario"
slug: "withholding-tax-rates"
category: "taxation"
subcategory: ["withholding-tax"]
summary: "Todas las tasas de retención de impuestos de Malasia en una sola tabla — tipo de pago, sección de la ITA, tasa, formulario y plazo de remisión."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "Las tasas de retención de impuestos de Malasia las fija el Anexo 1 de la Ley del Impuesto sobre la Renta de 1967, no las secciones impositivas. El interés pagado a un no residente es del 15 por ciento, la regalía del 10 por ciento, las clases especiales de renta previstas en la s.4A del 10 por ciento, la renta del párrafo 4(f) del 10 por ciento, los artistas públicos no residentes del 15 por ciento, y los contratistas no residentes del 10 por ciento más 3 por ciento. Casi todas deben remitirse dentro del plazo de un mes a partir del pago o abono al beneficiario."
keyTakeaways:
  - "La tasa reside en el Anexo 1, la obligación reside en la sección impositiva — cite ambas"
  - "Un mes después del pago o del abono es la regla estándar de remisión, y el abono puede ocurrir antes que el pago"
  - "La Sección 107D es la excepción — el pago vence al final del mes calendario siguiente, no un mes después"
  - "La Sección 107A conlleva dos tasas sobre el mismo pago: 10 por ciento para el contratista, 3 por ciento para sus empleados"
  - "Una tasa de tratado solo está disponible si usted posee un certificado de residencia de la autoridad fiscal del beneficiario"
  - "No practicar la retención da lugar a un incremento del 10 por ciento y a la no deducibilidad del gasto subyacente"
appliesTo: "Cualquier empresa, organismo público o persona residente de Malasia que pague a un no residente, y cualquier empresa que pague a agentes, concesionarios o distribuidores residentes."

faq:
  - q: "¿Cuál es la tasa estándar de retención de impuestos en Malasia?"
    a: "No existe una tasa estándar única. La tasa depende de la clase de renta según el Anexo 1 de la Ley del Impuesto sobre la Renta de 1967 — 15 por ciento para intereses, 10 por ciento para regalías, 10 por ciento para las clases especiales de renta previstas en la s.4A, y 10 por ciento más 3 por ciento para los pagos de contrato a no residentes. Las tasas de tratado pueden reducir varias de estas."
  - q: "¿Cuándo debe pagarse la retención de impuestos a la LHDN?"
    a: "Dentro del plazo de un mes tras el pago o abono al beneficiario para las ss.107A, 109, 109A, 109B y 109F. La Sección 107D es distinta — vence a más tardar al final del mes calendario siguiente al mes de pago. Si la fecha de vencimiento cae en fin de semana o día festivo, se aplica el siguiente día hábil."
  - q: "¿Es la retención de impuestos un impuesto definitivo?"
    a: "Para la mayor parte de la renta de no residentes lo es. La LHDN trata la retención sobre intereses, regalías, clases especiales de renta, distribuciones de REIT y renta del párrafo 4(f) como un impuesto definitivo, de modo que el no residente no tiene ninguna otra obligación de declaración en Malasia sobre esa renta. La Sección 107A no es definitiva — es un pago anticipado a cuenta de la liquidación final del contratista."
  - q: "Si el contrato dice que el honorario es neto de impuestos, ¿debo retener igualmente?"
    a: "Sí. La obligación recae en el pagador con independencia de lo que diga el contrato. Cuando el pagador asume contractualmente el impuesto, la LHDN confirmó en la Resolución Pública 10/2019 que, a partir del 5 de diciembre de 2018, el impuesto de la s.109B se calcula sobre el importe bruto pagado, sin recálculo al bruto — pero el impuesto que asume el pagador no es deducible en sus propias cuentas."

verificationNeeded:
  - "Form CP107D and its appendix CP107D(1) for the s.107D 2 per cent deduction could not be retrieved from any live hasil.gov.my path — the rate, threshold and remittance rule below come from the Act itself, not from the form"
  - "Treaty rates for specific countries are not reproduced here — check each agreement on the LHDN DTA page, as reduced rates vary by article and by country"

obligations:
  - what: "Remitir la retención de impuestos deducida de un pago a un no residente"
    trigger: "event"
    direction: "after"
    event: "payment"
    withinDays: 30
    due: "dentro del plazo de un mes tras el pago o abono al beneficiario no residente"
    authority: "LHDN"
    statute: "Income Tax Act 1967, ss.107A(1), 109(1), 109B(1), 109F(1)"
    consequence: "El importe no pagado se incrementa en un 10 por ciento y el gasto se rechaza conforme a la s.39(1)(f), (i) o (j)"

lang: "es"
sourceContentHash: "091d81b974b404be"
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
  - title: "Retención de impuestos (Withholding Tax)"
    url: "https://www.hasil.gov.my/en/perundangan/cukai-pegangan/"
    publisher: "Junta de Ingresos Internos (LHDN)"
  - title: "Ley del Impuesto sobre la Renta de 1967 (Act 53), reimpresión al 21 de mayo de 2024 — Anexo 1 y ss.107A, 107D, 109, 109A, 109B, 109F (Income Tax Act 1967 (Act 53), reprint as at 21 May 2024 — Schedule 1 and ss.107A, 107D, 109, 109A, 109B, 109F)"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "Junta de Ingresos Internos (LHDN)"
    date: "2024-05-21"
  - title: "Resolución Pública n.º 10/2019 — Retención de impuestos sobre clases especiales de renta (Public Ruling No. 10/2019 — Withholding Tax on Special Classes of Income)"
    url: "https://www.hasil.gov.my/wp-content/uploads/PR_10_2019.pdf"
    publisher: "Junta de Ingresos Internos (LHDN)"
    date: "2019-12-10"
  - title: "Acuerdo para Evitar la Doble Imposición (DTA/DTAA) (Double Taxation Avoidance Agreement (DTA/DTAA))"
    url: "https://www.hasil.gov.my/en/antarabangsa/perjanjian-pengelakan-pencukaian-dua-kali-pppdk/"
    publisher: "Junta de Ingresos Internos (LHDN)"

entity: "Malaysian withholding tax rates"
relations:
  - { rel: "related-to", to: "income-tax-in-malaysia" }
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "explained-in", to: "withholding-tax-special-classes" }
related: ["income-tax-in-malaysia", "withholding-tax-special-classes", "withholding-tax-digital-services", "withholding-tax-non-compliance", "cp37-forms"]
keywords: ["tasa de retención de impuestos Malasia", "withholding tax rate Malaysia", "tasa sección 109B", "section 109B rate", "retención sección 107A", "CP37D", "tabla de retención de impuestos Malasia", "LHDN retención de impuestos"]
---

La tasa que necesita casi nunca está en la sección que está leyendo. La Sección
109B le indica que retenga «a la tasa aplicable a dichos pagos» y ahí se detiene —
el 10 por ciento está en la Parte V del Anexo 1. La Sección 109 hace lo mismo.
Acostúmbrese a citar ambas, porque una discusión sobre la tasa es una discusión
sobre el Anexo 1.

## La tabla completa

| Tipo de pago | Sección de la ITA | Tasa | Formulario | Remitir antes de |
| --- | --- | --- | --- | --- |
| Pago de contrato a un contratista no residente | s.107A, Sch 1 | 10% (contratista) + 3% (sus empleados) | CP37A | 1 mes después del pago o abono |
| Pago a un agente, concesionario o distribuidor residente | s.107D, Sch 1 | 2% | CP107D | Fin del **mes calendario siguiente** |
| Interés a un no residente | s.109, Sch 1 Pt II item 1 | 15% | CP37 | 1 mes después del pago o abono |
| Regalía a un no residente | s.109, Sch 1 Pt II item 2 | 10% | CP37 | 1 mes después del pago o abono |
| Interés o regalía, de valor reducido | s.109, Sch 1 Pt II | 15% / 10% | CP37S | Semestral, 30 de junio o 31 de diciembre |
| Artista público no residente | s.109A, Sch 1 Pt II item 3 | 15% | CP154 más el cálculo del impuesto de la LHDN | 1 mes después del pago o abono |
| Clases especiales de renta previstas en la s.4A | s.109B, Sch 1 Pt V | 10% | CP37D | 1 mes después del pago o abono |
| Clases especiales de renta, de valor reducido | s.109B, Sch 1 Pt V | 10% | CP37DS | Semestral, 30 de junio o 31 de diciembre |
| Interés a una persona física residente, pagado por un banco o institución aprobada | s.109C, Sch 1 Pt VI | 5% | — | 1 mes después del pago o abono |
| Distribución de REIT o fideicomiso inmobiliario — empresa no residente | s.109D, Sch 1 Pt X | 24% | CP37E | 1 mes después del pago o abono |
| Distribución de REIT o fideicomiso inmobiliario — inversor institucional extranjero | s.109D, Sch 1 Pt X | 10% | CP37E | 1 mes después del pago o abono |
| Distribución de REIT o fideicomiso inmobiliario — otros, que no sean una empresa residente | s.109D, Sch 1 Pt X | 10% | CP37E | 1 mes después del pago o abono |
| Distribución de fondo minorista del mercado monetario a un partícipe no individual | s.109DA, Sch 1 Pt XIX | 24% | CP37E(NR) / CP37E(R) | 1 mes después del pago o abono |
| Distribución de fondo familiar o fondo familiar takaful — empresa no residente | s.109E, Sch 1 Pt XI | 25% | CP37E(T) | 1 mes después del pago o abono |
| Distribución de fondo familiar o fondo familiar takaful — otros, que no sean una empresa residente | s.109E, Sch 1 Pt XI | 8% | CP37E(T) | 1 mes después del pago o abono |
| Renta del párrafo 4(f) a un no residente | s.109F, Sch 1 Pt XIII | 10% | CP37F | 1 mes después del pago o abono |
| Anualidad diferida o retiro de PRS antes de los 55 años | s.109G, Sch 1 Pt XVI | 8% | CP37G | 1 mes después del pago o abono |

## Las tres cosas que esta tabla oculta

**«Pagar o abonar» no es «pagar».** La Resolución Pública 10/2019, párr. 13.1,
define el abono como algo más que un asiento contable o un devengo — el importe
debe estar disponible para el beneficiario o en su beneficio. Pero un asiento de
compensación (contra) que cancele lo que el no residente le adeuda cuenta, y el
plazo empieza a correr en la fecha de la compensación. Una empresa que nunca
remite efectivo aun así puede incurrir en un mes de retraso.

**La Sección 107D tiene un plazo distinto.** La Sección 107D(1) exige el pago «a
más tardar al final del mes calendario siguiente», no un mes después. Además, solo
se aplica cuando el agente, concesionario o distribuidor recibió más de RM100,000
del pagador en el año base inmediatamente anterior (s.107D(2)), y solo cuando esa
persona es una persona física residente (s.107D(6)).

**Las tasas de tratado son condicionales, no automáticas.** La LHDN exige una
confirmación por escrito de la autoridad fiscal del beneficiario que verifique la
residencia, conservada para la revisión de cumplimiento. El Ejemplo 16 de la
Resolución Pública 10/2019 aplica una tasa del 5 por ciento a un proveedor de
servicios de Hong Kong solo una vez confirmada la residencia. Sin el certificado,
usted retiene a la tasa nacional.

## Errores frecuentes

- **Citar una tasa sin el Anexo.** «La Sección 109B es el 10 por ciento» es una
  abreviatura. El 10 por ciento es la Parte V del Anexo 1, y la Parte V es lo que
  desplaza un tratado.
- **Suponer que los formularios de valor reducido son una comodidad opcional.**
  CP37S y CP37DS tienen dos condiciones acumulativas: el impuesto no debe superar
  los RM500 por transacción de pago, **y** las transacciones de valor reducido
  deben ocurrir más de una vez en la ventana pertinente de seis meses. Un único
  pago de RM400 en un semestre no da derecho al aplazamiento.
- **Tratar la s.107A como un impuesto definitivo.** No lo es. El apartado (a) se
  imputa contra la propia liquidación del contratista; el apartado (b), el 3 por
  ciento, se reembolsa al contratista conforme a la s.107A(3)(b) según lo estime
  conveniente el Director General.
- **Retener sobre el bruto cuando el pago está en parte fuera de ámbito.** Para la
  renta de la s.4A(i) y (ii), solo tributa la porción atribuible a los servicios
  prestados en Malasia, prorrateada sobre una base justa y justificable.

## Qué sigue

La tasa es la parte fácil. Dos preguntas deciden la mayoría de los casos reales:
si el pago está «derivado de Malasia» en absoluto, y si es una regalía conforme a
la s.109 o una clase especial de renta conforme a la s.109B. Lea
[withholding-tax-special-classes](/taxation/withholding-tax-special-classes) para
la primera y
[withholding-tax-digital-services](/taxation/withholding-tax-digital-services)
para la segunda.
