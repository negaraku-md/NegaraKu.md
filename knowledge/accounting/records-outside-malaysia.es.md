---
topicId: MY-ACC-0025
title: "Mantener registros contables fuera de Malasia"
slug: "records-outside-malaysia"
category: "accounting"
subcategory: ["records"]
summary: "Qué permite la sección 245(5) a (7) de la Companies Act 2016 cuando los registros contables residen en un ERP en la nube extranjero o en un centro de servicios compartidos regional, y por qué la Income Tax Act es más estricta."

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "La sección 245(5) de la Companies Act 2016 permite que los registros contables de operaciones fuera de Malasia se mantengan fuera de Malasia, siempre que los registros se envíen y se conserven en un lugar en Malasia y estén disponibles para su inspección por los directores en todo momento. No autoriza mantener en el extranjero registros de operaciones malasias. Por separado, la sección 82(8) de la Income Tax Act 1967 exige que todos los registros relacionados con un negocio en Malasia se mantengan y conserven en Malasia."
keyTakeaways:
  - "La s.245(5) es una excepción únicamente para registros de operaciones FUERA de Malasia"
  - "Incluso entonces, los registros deben enviarse y conservarse en un lugar en Malasia y estar abiertos a la inspección de los directores en todo momento"
  - "La s.245(6) exige que esos registros incluyan estados y declaraciones suficientes para preparar estados financieros veraces y razonables"
  - "La s.245(7) permite al Registrador exigir la presentación en un lugar en Malasia, o dictar el tipo y la forma de los registros que se conservan aquí"
  - "La s.82(8) de la ITA 1967 es más estricta y más plana: todos los registros relacionados con un negocio en Malasia deben mantenerse y conservarse en Malasia"
  - "La s.82A(5) de la ITA aplica la misma regla a los documentos relacionados con ingresos en Malasia"
appliesTo: "Subsidiarias malasias de grupos multinacionales, empresas con ERP en la nube alojado en el extranjero, y equipos financieros atendidos por un centro de servicios compartidos regional."

verificationNeeded:
  - "Neither SSM nor LHDN publishes guidance on whether data hosted on a foreign cloud region but accessible from Malaysia satisfies the kept-in-Malaysia requirement — the position stated here follows the statutory wording, and there is no published administrative concession"

lang: "es"
sourceContentHash: "d4690bd724bedb45"
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
  - title: "Companies Act 2016 (Act 777), reimpresión al 1 de agosto de 2022 (Companies Act 2016 (Act 777), reprint as at 1 August 2022)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "Comisión de Sociedades de Malasia (SSM)"
    date: "2022-08-01"
  - title: "Income Tax Act 1967 (Act 53), reimpresión al 21 de mayo de 2024 (Income Tax Act 1967 (Act 53), reprint as at 21 May 2024)"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "Junta de Rentas Internas de Malasia (LHDN)"
    date: "2024-05-21"

entity: "Companies Act 2016 section 245(5)"
relations:
  - { rel: "governs", to: "companies-act-2016" }
  - { rel: "administered-by", to: "ssm" }
  - { rel: "part-of", to: "accounting-records-section-245" }
  - { rel: "related-to", to: "e-invoice-accounting-records" }
related: ["accounting-records-section-245"]
keywords: ["registros contables fuera de Malasia", "sección 245(5) Companies Act", "registros contables en la nube Malasia", "registros de centro de servicios compartidos Malasia", "conservar registros en Malasia LHDN"]
---

Una subsidiaria malasia que ejecuta SAP desde un centro de datos de Singapur, con
la función financiera en un arreglo de servicios compartidos de Kuala Lumpur a
Manila, es una estructura completamente normal de 2026. Es también, leída
estrictamente, una estructura que dos estatutos no contemplaron — y están en
desacuerdo entre sí.

## Qué permite la Companies Act

La sección 245(4) fija la regla por defecto: los registros se conservan en el
domicilio registrado **o en cualquier otro lugar que los directores consideren
adecuado**, y están abiertos en todo momento a la inspección de los directores. No
hay ninguna palabra geográfica en esa subsección.

La sección 245(5) talla entonces un permiso específico para el extranjero, y su
alcance es más estrecho de lo que suele citarse. Permite que **los registros
contables y otros registros de operaciones fuera de Malasia** se conserven en un
lugar fuera de Malasia — **siempre que** esos registros se **envíen y conserven en
un lugar en Malasia** y estén disponibles para la inspección de los directores en
todo momento.

De ahí se derivan dos cosas.

**La excepción trata de operaciones extranjeras, no de sistemas extranjeros.** Los
registros de una empresa malasia sobre sus operaciones malasias no están en
absoluto dentro de la s.245(5). La subsección contempla una empresa malasia con una
sucursal o negocio en el extranjero, permitiendo que los libros mayores de esa
sucursal residan localmente.

**Incluso dentro de la excepción, una copia malasia es obligatoria.** La condición
no es opcional. Los registros deben enviarse y conservarse en un lugar en Malasia.

La sección 245(6) lo endurece aún más: esos registros deben incluir los estados y
declaraciones que permitan preparar estados financieros veraces y razonables. Un
balance de comprobación resumido subido a la consolidación del grupo difícilmente
cumplirá eso.

La sección 245(7) es la palanca de ejecución. Cuando los registros se conservan
fuera de Malasia bajo la s.245(4) o la s.245(5), **el Registrador puede exigir a la
empresa que presente esos registros en un lugar en Malasia, o determinar el tipo y
la forma de los registros que deben conservarse en Malasia**. Esa es una facultad
permanente sobre su arquitectura de datos, ejercitable sin una orden judicial.

La sanción de la sección 245(9) se aplica en todo caso: al ser condenada, una multa
de hasta RM500,000 o prisión de hasta tres años, o ambas, para la empresa y cada
directivo.

## La Income Tax Act es más estricta

La mayor parte de la guía se detiene en la Companies Act. La regla más dura está en
el estatuto fiscal, y no tiene ninguna excepción para el extranjero.

**Sección 82(8) de la Income Tax Act 1967: todos los registros que se relacionen
con cualquier negocio en Malasia se mantendrán y conservarán en Malasia.** Plana,
sin salvedades, sin excepción de operaciones en el extranjero.

**La sección 82A(5)** aplica la misma regla a los documentos relacionados con
ingresos en Malasia.

La sección 82(7) añade una regla de formato que afecta a cualquier función
financiera digital por naturaleza: los registros conservados electrónicamente deben
conservarse en una **forma legible electrónicamente** y mantenerse de modo que sean
**fácilmente accesibles y convertibles a escrito**; y cuando los registros
conservados originalmente en forma manual se convirtieron después a forma
electrónica, los **registros manuales originales deben conservarse igualmente**.

Contravenir la s.82(1), (1A), (6), (7) u (8) sin excusa razonable es un delito bajo
la **sección 119A**, que conlleva una multa de **no menos de RM300 y no más de
RM10,000**, o prisión de hasta un año, o ambas.

## Qué significa esto en la práctica

| Arreglo | Companies Act 2016 | Income Tax Act 1967 |
| --- | --- | --- |
| Operaciones malasias, ERP alojado en el extranjero, sin copia malasia | No está dentro de la excepción de la s.245(5) | Contrario a la s.82(8) |
| Operaciones malasias, ERP en el extranjero, registros completos replicados y conservados en Malasia | Conforme a la s.245(4) y abierto a la inspección de los directores | Conforme a la s.82(8) |
| Registros de sucursal extranjera conservados solo en el extranjero | Incumple la condición de la s.245(5) | No está dentro de la s.82(8) — solo alcanza los registros de negocios malasios |
| Registros de sucursal extranjera conservados en el extranjero y además enviados y conservados en Malasia | Permitido bajo la s.245(5), sujeto al contenido de la s.245(6) | Conforme |

El diseño viable es el mismo en todos los casos: sea cual sea el sistema principal,
un conjunto completo, legible y recuperable de registros reside en Malasia y
permanece allí durante todo el periodo de conservación.

## Errores frecuentes

- **Leer la s.245(5) como un permiso general para alojar datos contables en el
  extranjero.** Se aplica a los registros de operaciones fuera de Malasia, y solo
  con una copia malasia.
- **Suponer que el acceso remoto es lo mismo que conservar los registros en
  Malasia.** Ninguno de los dos estatutos dice accesible desde Malasia; ambos dicen
  conservado en Malasia.
- **Ignorar por completo la ITA.** Es el más estricto de los dos y tiene una sanción
  que no requiere una condena sobre hechos de la Companies Act.
- **Migrar el ERP sin una exportación.** Un sistema dado de baja por el grupo lo
  deja incapaz de satisfacer ninguno de los dos estatutos, y la obligación corre
  durante todo el periodo de conservación.
- **Conservar una copia electrónica convertida y destruir el papel.** La sección
  82(7)(b) exige que los registros manuales previos a la conversión se conserven en
  su forma original.

## Qué sigue

Si la facturación electrónica (e-Invoicing) forma parte de su arquitectura, la
cuestión de la conservación adquiere una tercera capa, porque un documento validado
que se mantiene en la base de datos MyInvois no es por sí mismo un registro
suficiente bajo ninguno de los dos estatutos.
