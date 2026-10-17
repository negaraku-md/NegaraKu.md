---
topicId: MY-EMP-0012
title: "Lista de verificación de salida legal"
seoTitle: "Lista de salida Malasia — deberes legales"
slug: "offboarding-statutory-checklist"
category: "employment"
subcategory: ["termination-retrenchment"]
summary: "Cada presentación legal, plazo y deber de retención que se desencadena cuando un empleado se marcha — LHDN, EPF, PERKESO, Inmigración y JTKSM, en un solo lugar."

tier: "4"
mode: "practical"
contentType: "checklist"
sensitivity: "none"

answer: "Cuando un empleado se marcha, el empleador debe notificar a LHDN en el Form CP22A al menos 30 días antes del cese, o en el Form CP21 al menos 30 días antes de la salida de Malasia, y retener el dinero pagadero al empleado durante 90 días o hasta que se emita una carta de finiquito fiscal. El salario final vence el último día de empleo conforme a la s.20 de la Employment Act 1955, y los beneficios por terminación dentro de los siete días."
keyTakeaways:
  - "El CP22A vence al menos 30 días antes del cese: es una notificación, no una formalidad posterior a la salida."
  - "El CP21 se aplica cuando el empleado se marcha de Malasia por más de tres meses sin intención de regresar, también 30 días antes."
  - "El dinero pagadero al empleado debe retenerse durante 90 días o hasta que se emita la carta de finiquito fiscal."
  - "El salario final vence el último día de empleo, no en el siguiente ciclo de nómina — s.20 Employment Act 1955."
  - "Los beneficios legales por terminación vencen dentro de los siete días de la fecha pertinente, con un cálculo por escrito."
  - "El registro de empleados debe conservarse de modo que las entradas sigan siendo inspeccionables durante al menos seis años — s.61(2)."
  - "El incumplimiento de los deberes de notificación ante LHDN conlleva una multa de RM200 a RM20,000 o hasta seis meses de prisión."
appliesTo: "Personal de RR. HH., nómina y finanzas que procesa cualquier salida de empleado en la Malasia Peninsular, incluidos expatriados y trabajadores extranjeros."

faq:
  - q: "¿Cuándo debe presentarse el Form CP22A?"
    a: "No menos de 30 días antes del cese del empleo. Cuando el cese sea por fallecimiento, la notificación vence no más de 30 días después de que el empleador sea informado del fallecimiento. Desde el 1 de septiembre de 2024, la presentación se hace a través de la aplicación e-SPC en el portal MyTax para los casos que requieren una carta de finiquito fiscal."
  - q: "¿Cuánto tiempo debe retener un empleador el pago final de un empleado?"
    a: "LHDN exige que el empleador retenga todo dinero pagadero al empleado durante 90 días, o hasta que se reciba una carta de finiquito fiscal, lo que ocurra primero. Esto se aplica al cese del empleo, al fallecimiento y cuando el empleado se marcha de Malasia sin intención de regresar. Coexiste con los plazos de la Employment Act para el salario final y, en la práctica, prevalece sobre su calendario."
  - q: "¿Se aplica la retención de 90 días a todo empleado que se marcha?"
    a: "No. Está ligada al requisito de finiquito fiscal, que depende de la situación tributaria y del estatus de residencia del empleado en lugar de aplicarse automáticamente a todos los que se marchan. Compruebe si el caso requiere una carta de finiquito fiscal antes de retener el pago, porque retener un salario que no está sujeto a ese deber es en sí mismo una infracción de la Employment Act."
  - q: "¿Qué ocurre con un Employment Pass cuando el expatriado renuncia?"
    a: "El pase está ligado al empleador patrocinador, de modo que debe cancelarse o acortarse en lugar de dejarlo correr. El trámite se gestiona a través del portal de la Expatriate Services Division o del regulador sectorial pertinente. El plazo específico no pudo verificarse a partir del material publicado de la ESD y debe confirmarse directamente con la ESD o con Inmigración."

verificationNeeded:
  - "The Income Tax Act 1967 section numbers underlying CP22A, CP21 and the 90-day withholding duty were not confirmed — LHDN's employer page states the duties without citing sections, and phl.hasil.gov.my refused connections. Do not cite s.83(3) or s.83(4) without checking the Act text."
  - "Whether an employer who releases money before tax clearance becomes personally liable for the employee's outstanding tax. This is widely asserted online and is plausible given the withholding duty, but no official statement of a liability transfer was located. The confirmed consequence is the s.120(1) penalty of RM200 to RM20,000 or up to six months' imprisonment."
  - "Whether EPF requires any per-employee cessation filing. KWSP's published duties address cessation as an employer, not individual leavers; the practical position appears to be that contributions simply stop. Confirm with KWSP."
  - "The PERKESO channel for recording an individual resignation is the ASSIST portal, but no statutory deadline for it was located. The 30-day period found relates to cessation as an employer using Form 1A (Act 4) and Form SIP 3 (Act 800)."
  - "Employment Pass and PLKS cancellation deadlines — not verifiable from esd.imi.gov.my, which serves a login shell to automated retrieval."

obligations:
  - what: "Notify LHDN of cessation of employment on Form CP22A"
    trigger: "change"
    withinDays: 30
    due: "not less than 30 days before the cessation of employment, or not more than 30 days after being informed of the employee's death"
    authority: "LHDN"
    statute: "Income Tax Act 1967"
    consequence: "Fine of RM200 to RM20,000 or imprisonment up to 6 months under s.120(1)"
  - what: "Notify LHDN that an employee is leaving Malaysia on Form CP21"
    trigger: "change"
    withinDays: 30
    due: "not less than 30 days before the expected date of departure, where the employee leaves for more than 3 months with no intention to return"
    authority: "LHDN"
    statute: "Income Tax Act 1967"
    consequence: "Fine of RM200 to RM20,000 or imprisonment up to 6 months under s.120(1)"
  - what: "Withhold money payable to the departing employee pending tax clearance"
    trigger: "change"
    withinDays: 90
    due: "for 90 days or until the tax clearance letter is received, whichever is earlier"
    authority: "LHDN"
    statute: "Income Tax Act 1967"
    consequence: "Fine of RM200 to RM20,000 or imprisonment up to 6 months under s.120(1)"
  - what: "Pay final wages on a normal termination"
    trigger: "change"
    due: "not later than the day the contract of service terminates"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.20"
    consequence: "General penalty up to RM50,000 under s.99A"
  - what: "Pay final wages where the employee terminated without notice"
    trigger: "change"
    withinDays: 3
    due: "not later than the third day after the contract of service is terminated"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.21(2)"
    consequence: "General penalty up to RM50,000 under s.99A"
  - what: "Pay statutory termination or lay-off benefits with a written calculation statement"
    trigger: "change"
    withinDays: 7
    due: "not later than seven days after the relevant date"
    authority: "JTKSM"
    statute: "Employment (Termination and Lay-Off Benefits) Regulations 1980, reg 11(1) and reg 12(1)"
    consequence: "Offence under reg 11(2) and reg 12(2)"
  - what: "Inform the Director General of the termination of a foreign domestic employee"
    trigger: "change"
    withinDays: 30
    due: "within 30 days of the termination of service"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.57B(1)"
    consequence: "Fine up to RM50,000 under s.57B(3)"
  - what: "Submit Form PK Part V where the exit is part of a retrenchment or VSS"
    trigger: "change"
    withinDays: 14
    due: "within 14 days after the retrenchment is carried out"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.63; P.U.(B) 430/2004"
    consequence: "Fine up to RM50,000 per offence under s.99A"
  - what: "Submit Form PK Part VI where the exit is part of a retrenchment or VSS"
    trigger: "change"
    withinDays: 30
    due: "within 30 days after the retrenchment is carried out"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.63; P.U.(B) 430/2004"
    consequence: "Fine up to RM50,000 per offence under s.99A"
  - what: "Preserve the employee register entries for inspection"
    trigger: "ongoing"
    due: "so that every particular recorded remains available for inspection for not less than six years after recording"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.61(2)"
    consequence: "General penalty up to RM50,000 under s.99A"

lang: "es"
sourceContentHash: "beb77b4436b7c05c"
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
  - title: "Responsabilidades del empleador (Employer's responsibilities)"
    url: "https://www.hasil.gov.my/en/majikan/tanggungjawab-majikan/"
    publisher: "Junta de Ingresos Internos (LHDN)"
    date: "2026-01-01"
  - title: "Employment Act 1955 (Act 265)"
    url: "https://jtksm.mohr.gov.my/sites/default/files/2023-11/Akta%20Kerja%201955%20(Akta%20265)_0.pdf"
    publisher: "Departamento de Trabajo de la Malasia Peninsular (JTKSM)"
    date: "2022-01-01"
  - title: "Employment (Termination and Lay-Off Benefits) Regulations 1980"
    url: "https://jtksm.mohr.gov.my/sites/default/files/2023-03/8.%20EMPLOYMENT%20(TERMINATION%20&%20LAY%20OFF%20BENEFITS)%20REGULATIONS%201980_0.pdf"
    publisher: "Departamento de Trabajo de la Malasia Peninsular (JTKSM)"
    date: "1980-10-01"
  - title: "Form PK — Notificación de Cese de Empleado 2004 (Borang PK — Pemberitahuan Pemberhentian Pekerja 2004)"
    url: "https://jtksm.mohr.gov.my/sites/default/files/2023-06/borang_pk_0.pdf"
    publisher: "Departamento de Trabajo de la Malasia Peninsular (JTKSM)"
    date: "2023-06-01"
  - title: "Cumplimiento y aplicación — responsabilidades del empleador (Compliance and enforcement — employer responsibilities)"
    url: "https://www.kwsp.gov.my/en/employer/responsibilities/compliance"
    publisher: "Fondo de Previsión de los Empleados (KWSP)"
    date: "2026-01-01"

entity: "Employee offboarding"
relations:
  - { rel: "part-of", to: "termination-of-employment-malaysia" }
  - { rel: "administered-by", to: "jtksm" }
  - { rel: "requires", to: "termination-benefits-malaysia" }
  - { rel: "related-to", to: "payroll-compliance-malaysia" }
related: ["termination-of-employment-malaysia", "termination-benefits-malaysia", "retrenchment-malaysia", "payroll-compliance-malaysia", "form-e-ea-cp8d-malaysia"]
keywords: ["lista de salida Malasia", "plazo CP22A", "formulario CP21 Malasia", "carta de finiquito fiscal SPC", "pago final Malasia", "lista de salida de empleado Malasia", "retención 90 días finiquito fiscal", "offboarding checklist malaysia", "CP22A deadline", "90 day withholding tax clearance"]
---

La entrevista de salida es la parte que todo el mundo recuerda. Las presentaciones son la parte que genera multas, y una de ellas, el deber de retención por finiquito fiscal, es la razón por la que un responsable de nómina que liberó un salario final a tiempo y de buena fe puede acabar explicándolo ante LHDN.

La trampa es una colisión genuina entre dos agencias. La Employment Act 1955 dice que se pague al empleado en su último día. LHDN dice que se retenga el dinero durante 90 días o hasta que se emita el finiquito fiscal. Equivocarse en cualquiera de las dos direcciones es una infracción, y qué regla rige depende de si el caso realmente requiere una carta de finiquito fiscal.

## Los plazos, en orden

| Deber | Plazo | Autoridad |
| --- | --- | --- |
| Form CP22A — cese del empleo | **≥30 días antes** del cese (o ≤30 días después de ser informado de un fallecimiento) | LHDN |
| Form CP21 — empleado que se marcha de Malasia >3 meses, sin intención de regresar | **≥30 días antes** de la salida | LHDN |
| Retener el dinero pagadero a la espera del finiquito fiscal | **90 días** o hasta que se emita la carta de finiquito | LHDN |
| Salario final, terminación normal | **Día de la terminación** (s.20) | JTKSM |
| Salario final, empleado que se marchó sin preaviso | **3.er día después** (s.21(2)) | JTKSM |
| Beneficios por terminación + cálculo por escrito | **7 días** después de la fecha pertinente | JTKSM |
| Form PK Parte V (solo despido por reducción de plantilla o VSS) | **14 días después** del ejercicio | JTKSM |
| Form PK Parte VI (solo despido por reducción de plantilla o VSS) | **30 días después** del ejercicio | JTKSM |
| Empleado doméstico extranjero — informar al DG | **30 días** después de la terminación (s.57B) | JTKSM |
| Conservación del registro de empleados | Inspeccionable durante **6 años** (s.61(2)) | JTKSM |

Note que los dos deberes de notificación ante LHDN corren **antes** de la salida, no después. Un empleado que renuncia con cuatro semanas de preaviso deja apenas espacio para la ventana de 30 días del CP22A, y uno que renuncia con efecto inmediato no deja ninguno: presente en cuanto se conozca el cese.

## El deber de retención en la práctica

La instrucción de LHDN a los empleadores es retener todo dinero pagadero al empleado durante **90 días o hasta que se reciba una carta de finiquito fiscal**, en casos de cese del empleo, fallecimiento o salida de Malasia sin intención de regresar. La presentación para los casos que requieren finiquito se hace a través de la aplicación **e-SPC** en el portal MyTax, que es el canal desde el 1 de septiembre de 2024.

Dos advertencias, y apuntan en direcciones opuestas.

**No libere anticipadamente en un caso que requiere finiquito.** El sentido mismo de la retención es que el fondo siga estando allí cuando se resuelva la situación tributaria. El incumplimiento de los deberes de notificación y de retención conlleva una multa de **RM200 a RM20,000, o prisión de hasta seis meses**, conforme a la s.120(1) de la Income Tax Act 1967.

**No retenga en un caso que no requiere finiquito.** El deber se aplica a los casos de finiquito fiscal, no a todos los que se marchan. Retener el salario final de un empleado local durante 90 días cuando no se requiere finiquito es una infracción directa de las ss.20 y 21 de la Employment Act 1955, y la s.15(1) considera que un empleador que no paga salarios bajo la Parte III ha incumplido el contrato.

Establezca primero en qué categoría cae el empleado. Esa única decisión gobierna todo el calendario del pago final.

## Regímenes legales

**EPF.** Las aportaciones cesan con el último mes salarial; los deberes de cese publicados por KWSP abordan el dejar de *ser empleador* en lugar de los que se marchan individualmente. No se confirmó ninguna presentación de cese por empleado.

**PERKESO.** La fecha de renuncia de un empleado se registra a través del portal ASSIST. El plazo de presentación de 30 días que figura en el material de PERKESO se refiere al cese como empleador, usando el Form 1A bajo la Act 4 y el Form SIP 3 bajo la Act 800, no a las salidas individuales.

**HRD Corp.** El gravamen sigue a la masa salarial, de modo que desaparece con la nómina final. Si la salida lleva el número de empleados por debajo del umbral obligatorio, la categoría de registro puede cambiar: esa es una cuestión aparte de la salida en sí.

**Inmigración.** Un Employment Pass o PLKS está ligado al empleador patrocinador y no caduca por sí solo sin más. La cancelación o el acortamiento se tramitan a través del portal de la Expatriate Services Division, o del regulador sectorial pertinente cuando el pase se patrocinó fuera de la ESD. Dejar un pase activo después de que termina el empleo es un riesgo de cumplimiento vigente para el empleador, no para el empleado que se marcha.

## Errores comunes

**Presentar el CP22A después de que el empleado se ha ido.** El plazo es 30 días *antes* del cese.

**Esperar a la siguiente corrida de nómina.** Las secciones 20 y 21(1) dicen ambas el día de la terminación. Solo cuando el *empleado* se marchó sin preaviso la s.21(2) concede tres días.

**Retener todo por defecto.** La retención de 90 días no es una regla universal, y aplicarla a una renuncia local sencilla infringe la Employment Act.

**Compensar los beneficios por terminación contra el pago de preaviso.** El reglamento 6(4) del TBLB Regulations 1980 los hace acumulativos.

**Omitir el estado de cálculo por escrito.** El reglamento 12(1) lo exige al mismo tiempo que el pago, y omitirlo es una infracción aparte.

**Olvidar las Partes V y VI del Form PK.** Cuando la salida es parte de un despido por reducción de plantilla o un VSS, dos presentaciones vencen *después* del ejercicio.

**Destruir el expediente del personal al salir.** La s.61(2) exige que las entradas sigan siendo inspeccionables durante al menos seis años.

**Dejar el pase de trabajo activo.** El empleador lo patrocina, y el empleador carga con la exposición.

## Qué sigue

Incorpore la secuencia al flujo de trabajo de la renuncia en lugar de a la lista de salida: en el momento en que se conozca una fecha de cese, decida la cuestión del finiquito fiscal, presente el CP22A o el CP21, y fije la fecha del pago final a partir de esa respuesta. Para saber cómo se llegó a la salida y qué se adeuda, consulte `termination-of-employment-malaysia` y `termination-benefits-malaysia`; para un ejercicio colectivo, `retrenchment-malaysia`.
