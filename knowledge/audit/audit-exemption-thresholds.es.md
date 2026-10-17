---
topicId: MY-AUD-0002
title: "Umbrales de exención de auditoría en Malasia: la implantación gradual 2025–2027"
seoTitle: "Umbrales de exención de auditoría en Malasia (2025–2027)"
slug: "audit-exemption-thresholds"
category: "audit"
subcategory: ["requirements"]
summary: "Los umbrales exactos de ingresos, activos y empleados para la exención de auditoría conforme a la Directiva de Práctica 10/2024 de SSM, fase por fase, con la regla de dos de tres y la retrospección de tres años aplicadas."

tier: "4"
mode: "practical"
contentType: "data"

answer: "Los umbrales de exención de auditoría en Malasia se implantan gradualmente a lo largo de tres años conforme a la Practice Directive 10/2024. Una empresa privada debe cumplir al menos dos de tres pruebas — ingresos, activos totales y empleados — para el ejercicio actual y los dos ejercicios anteriores inmediatos. Los límites son RM1 millón, RM1 millón y 10 empleados para los periodos que comiencen en 2025; RM2 millones, RM2 millones y 20 en 2026; y RM3 millones, RM3 millones y 30 a partir de 2027."
keyTakeaways:
  - "Al menos DOS de tres criterios, nunca los tres — el error más repetido en el contenido de auditoría malasio"
  - "Fase 1 (periodos que comienzan en 2025): RM1,000,000 de ingresos, RM1,000,000 de activos, 10 empleados"
  - "Fase 2 (periodos que comienzan en 2026): RM2,000,000 de ingresos, RM2,000,000 de activos, 20 empleados"
  - "Fase 3 (periodos que comienzan en o después del 1 de enero de 2027): RM3,000,000 de ingresos, RM3,000,000 de activos, 30 empleados"
  - "Los dos años precedentes se comparan con los umbrales de la fase ACTUAL, no con las cifras más bajas que se aplicaban entonces"
  - "La fase se fija por cuándo COMIENZA el periodo financiero, no por el cierre del ejercicio"
  - "Un empleado solo cuenta si es a tiempo completo — al menos 6 horas al día durante 20 días al mes, o 120 horas al mes"

faq:
  - q: "¿Cuáles son los umbrales de exención de auditoría en Malasia?"
    a: "Dependen de cuándo comienza su periodo financiero. Los periodos que comienzan en 2025 usan RM1 millón de ingresos, RM1 millón de activos totales y 10 empleados. Los periodos que comienzan en 2026 usan RM2 millones, RM2 millones y 20. Los periodos que comienzan en o después del 1 de enero de 2027 usan RM3 millones, RM3 millones y 30. Necesita al menos dos de los tres."
  - q: "¿El umbral de exención de auditoría es RM3 millones?"
    a: "Solo para los periodos financieros que comiencen en o después del 1 de enero de 2027. La Practice Directive 10/2024 implanta la cifra de forma gradual — RM1 millón para 2025 y RM2 millones para 2026. La mayoría de las guías competidoras citan RM3 millones de forma plana y omiten por completo la implantación gradual, lo que le diría a una empresa con RM2.5 millones de ingresos en el ejercicio 2026 que supera la prueba de ingresos cuando no es así."
  - q: "¿Los dos años pasados se comparan con los umbrales antiguos, más bajos?"
    a: "No. La Practice Directive 10/2024 establece que los ingresos, los activos y los empleados de los dos ejercicios anteriores inmediatos no deben exceder el umbral máximo especificado para la fase correspondiente — es decir, la fase en la que cae el periodo actual. Los propios escenarios desarrollados de SSM aplican las cifras de la fase actual a los tres años."
  - q: "¿Cómo se cuenta el número de empleados?"
    a: "Empleados a tiempo completo en la nómina al cierre de cada ejercicio pertinente. SSM define a tiempo completo como trabajadores remunerados que trabajan no menos de 6 horas al día durante al menos 20 días al mes, o al menos 120 horas al mes. Los trabajadores locales, extranjeros, por contrato y en periodo de prueba cuentan. Los directores-empleados, los accionistas-empleados y los familiares y amigos no remunerados o con salario irregular no cuentan."

verificationNeeded:
  - "Confirmar si SSM ha emitido alguna modificación de la PD 10/2024 que revise los umbrales de la Fase 3 — la directiva los marca como invariables salvo que sean revisados por el Registrador"

obligations:
  - what: "Take the audit exemption for a private company that stays within the size limits"
    trigger: "threshold"
    criteria:
      - metric: "revenue"
        op: "lte"
        value: 2000000
      - metric: "assets"
        op: "lte"
        value: 2000000
      - metric: "employees"
        op: "lte"
        value: 20
    minCriteria: 2
    exemption: true
    due: "Meet at least two of three tests for the current and the two preceding financial years. Figures shown are the 2026 phase (revenue and assets RM2 million, 20 employees); it is RM1 million and 10 in 2025, rising to RM3 million and 30 from 2027"
    authority: "SSM"
    statute: "Companies Act 2016, s.267(2); SSM Practice Directive 10/2024"

lang: "es"
sourceContentHash: "f05022cc3a744d57"
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
  - title: "Directiva de Práctica N.º 10/2024 — Criterios de elegibilidad para la exención de auditoría de ciertas empresas privadas en Malasia (Practice Directive No. 10/2024 — Qualifying Criteria for Audit Exemption for Certain Private Companies in Malaysia)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/PD10-2024-Qualifying-Criteria-for-Audit-Exemption-for-Certain-Categories-of-Private-Companies.pdf"
    publisher: "Comisión de Empresas de Malasia (SSM)"
    date: "2024-12-16"
  - title: "Preguntas frecuentes sobre la Companies Act 2016 y cuestiones transitorias — Parte Q, Exención de auditoría (FAQs on Companies Act 2016 and Transitional Issues — Part Q, Audit Exemption)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/FAQ-AUDIT-EXEMPTION.pdf"
    publisher: "Comisión de Empresas de Malasia (SSM)"
  - title: "Ley de Empresas 2016 (Ley 777), reimpresión a 1 de agosto de 2022 (Companies Act 2016 (Act 777), reprint as at 1 August 2022)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "Comisión de Empresas de Malasia (SSM)"

entity: "Audit exemption thresholds (Practice Directive 10/2024)"
relations:
  - { rel: "administered-by", to: "ssm" }
  - { rel: "governs", to: "companies-act-2016" }
  - { rel: "part-of", to: "audit-exemption" }
  - { rel: "related-to", to: "who-cannot-claim-audit-exemption" }
related: ["audit-exemption", "who-cannot-claim-audit-exemption", "dormant-company-audit-exemption"]
keywords: ["audit exemption threshold Malaysia", "audit exemption RM3 million", "PD 10/2024 thresholds", "audit exemption 2026 threshold", "SSM audit exemption criteria 2027", "number of employees audit exemption"]
---

Si se lleva un solo número de esta página, llévese este: el umbral de RM3 millones
que todo el mundo cita **no** se aplica hasta los periodos financieros que comiencen
en o después del 1 de enero de 2027.

La Practice Directive 10/2024, emitida por SSM el 16 de diciembre de 2024 conforme a
la subsección 267(2) de la Companies Act 2016, implanta los umbrales de exención de
auditoría de forma gradual a lo largo de tres años. Una gran parte de las páginas
malasias que posicionan para esta consulta indican RM3 millones y 30 empleados como
si fueran actuales, y varias afirman además que deben cumplirse los tres criterios.
Ambas cosas son erróneas, y fallan en direcciones opuestas — una deja que una
empresa se salte una auditoría que legalmente debe, la otra asusta a una empresa que
cumple los requisitos para que pague por una.

## La tabla de umbrales

| | Fase 1 | Fase 2 | Fase 3 |
| --- | --- | --- | --- |
| **Comienzo del periodo financiero** | en o después del 1 ene 2025 hasta el 31 dic 2025 | en o después del 1 ene 2026 hasta el 31 dic 2026 | en o después del 1 ene 2027 |
| **Año de presentación** | desde el 1 ene 2026 | desde el 1 ene 2027 | desde el 1 ene 2028 |
| **Facturación** | RM1,000,000 | RM2,000,000 | RM3,000,000 |
| **Activos totales** | RM1,000,000 | RM2,000,000 | RM3,000,000 |
| **Número de empleados** | 10 | 20 | 30 |

Las cifras de la Fase 3 permanecen invariables salvo que sean revisadas por el
Registrador.

## La prueba

Una empresa privada cumple los requisitos si satisface **al menos dos de los tres**
criterios, para el **ejercicio financiero actual y los dos ejercicios anteriores
inmediatos**:

1. los ingresos anuales no exceden el umbral
2. los activos totales no exceden el umbral
3. el número de empleados no excede el umbral

Nueve puntos de datos, seis de los cuales deben quedar dentro de los límites — dos
criterios a lo largo de tres años. Una empresa puede rebasar un criterio por
cualquier margen en los tres años y seguir estando exenta.

## Qué fase se le aplica

La fase la fija la fecha en que el periodo financiero **comienza**, no el año en que
termina ni el año en que usted presenta. Una empresa con cierre el 30 de junio que
inicia un periodo el 1 de julio de 2026 se sitúa en la **Fase 2**, aunque ese año
termine en 2027.

## La trampa de la retrospección

La directiva es explícita en que las cifras de los dos ejercicios anteriores
inmediatos no deben exceder el umbral **de la fase correspondiente** — la fase del
periodo actual. No se compara el ejercicio 2025 con RM1 millón al evaluar un año de
Fase 3; se compara con RM3 millones.

El propio escenario desarrollado de SSM lo concreta. Una empresa con cierre el 30 de
junio que reporta activos totales de RM3,000,000 cada año e ingresos de
RM1,000,000, RM1,000,000 y RM1,500,000 para los ejercicios cerrados en 2025, 2026 y
2027 cumple los requisitos para el ejercicio cerrado el 30 de junio de 2027 bajo la
Fase 2: falla la prueba de activos en los tres años, pero supera los ingresos y los
empleados en los tres. Dos de tres, tres años seguidos.

## Definiciones que cambian la respuesta

**Ingresos anuales** — ingresos recibidos y por recibir durante el año. Excluye los
asientos de abono que revierten asientos contables anteriores, los asientos
relativos a la tributación, las reversiones de provisiones hechas antes, y las
ganancias por baja de reconocimiento de propiedades, planta, equipo y propiedades de
inversión en el estado del resultado integral.

**Activos totales** — los activos tal como se definen en las normas contables
aprobadas aplicables, corrientes y no corrientes, tomados del estado de situación
financiera.

**Empleados** — empleados a tiempo completo empleados al cierre de cada ejercicio
pertinente. SSM define a tiempo completo como trabajadores remunerados que trabajan
no menos de seis horas al día durante al menos 20 días al mes, o al menos 120 horas
al mes. Por debajo de eso, un trabajador no cuenta en absoluto.

Incluidos: trabajadores locales, extranjeros, por contrato y en periodo de prueba.

Excluidos: un director que también es empleado a tiempo completo; un accionista que
también es empleado a tiempo completo; familiares o amigos no remunerados o con
salarios irregulares.

En una Sdn Bhd gestionada por sus propietarios con dos directores-accionistas que
trabajan, un cónyuge con paga irregular y seis trabajadores a tiempo parcial de 15
horas a la semana, el recuento a efectos de la directiva es cero — no nueve.

## Errores comunes

- **Citar RM3 millones y 30 empleados como la cifra actual.** Son las cifras de la
  Fase 3. Nada por encima de RM1 millón de ingresos supera la prueba de ingresos
  para un periodo que comenzó en 2025.
- **Exigir los tres criterios.** La directiva dice al menos dos.
- **Comprobar solo el año actual.** Tres años deben superar la barrera, y una
  empresa que recién baja del límite este año normalmente tendrá que esperar.
- **Usar el cierre del ejercicio para elegir la fase.** Es la fecha de comienzo.
- **Volver a comprobar años anteriores contra los umbrales antiguos, más bajos.** La
  directiva y los escenarios de SSM aplican ambos las cifras de la fase actual a los
  tres años.
- **Contar a los trabajadores a tiempo parcial y a los directores-accionistas que
  trabajan** en la plantilla.
- **Suponer que la transición fue fluida.** Los periodos financieros que comiencen
  en o antes del 31 de diciembre de 2024 permanecen bajo la revocada PD 3/2017, de
  modo que algunas empresas tuvieron un año en que ninguno de los dos regímenes las
  ayudó.

## Qué sigue

Superar los umbrales es necesario pero no suficiente. Cuatro categorías de empresas
quedan excluidas de la exención con independencia del tamaño, y los socios que
posean el 5% de las acciones aún pueden exigir una auditoría — compruebe la lista de
exclusiones antes de decirle al auditor que este año no lo necesitará.
