---
topicId: MY-ACC-0003
title: "Errores de etiquetado SSMxT: por qué las presentaciones MBRS fallan la validación"
seoTitle: "Errores de etiquetado MBRS: fallos de validación SSMxT"
slug: "mbrs-tagging-errors"
category: "accounting"
subcategory: ["financial-statements"]
summary: "Los errores de etiquetado que impiden que una presentación MBRS se genere o que la hacen volver con observaciones — selección errónea de elementos, errores de escala y de signo, etiquetado en bloque frente a etiquetado en detalle, y notas que no tienen hogar en la taxonomía."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "La mayoría de los fallos de validación MBRS caen en cinco familias: un elemento obligatorio ausente, un elemento obligatorio derivado activado por una elección en la información de presentación, una agregación de dimensiones que no suma el valor de su padre, una infracción de una regla de signo, o una inconsistencia entre estados. Los errores que la validación no puede detectar son peores — la selección errónea de elementos y la escala errónea producen ambos archivos técnicamente válidos que llevan números equivocados."
keyTakeaways:
  - "El error de escala es el peligroso: una cifra introducida en miles pasa todas las reglas de validación y declara las cuentas mal por un factor de mil"
  - "No hay elementos SSMxT que deban ser siempre negativos — los gastos normalmente se almacenan como números positivos"
  - "La validación se ejecuta sobre aserciones donde verdadero significa que pasó, de modo que el mensaje nombra la regla, no la corrección"
  - "Las extensiones de la empresa están prohibidas, así que una nota no mapeable va a un bloque de texto, nunca a un concepto inventado"
  - "La información de presentación en la parte superior de la plantilla impulsa las reglas obligatorias derivadas más abajo — un estatus de empresa equivocado se propaga en cascada"
  - "La base de presentación es una elección que usted hace una vez: orden de liquidez frente a corriente/no corriente, función frente a naturaleza de los gastos"
appliesTo: "Preparadores que producen documentos de instancia XBRL de la SSM en mTool, y revisores que dan el visto bueno a una presentación antes de que un lodger la presente."

faq:
  - q: "¿Por qué mTool dice que un elemento es obligatorio cuando mis cuentas no tienen esa partida?"
    a: "SSMxT modela los elementos obligatorios como aserciones de existencia, con una aserción separada para cada concepto de modo que el mensaje de fallo pueda nombrarlo. Algunos son incondicionalmente obligatorios — el propio ejemplo de la SSM es que los activos (Assets) deben informarse. Otros son obligatorios derivados, requeridos solo por algo que usted seleccionó en otra parte. Si la partida genuinamente no existe en sus cuentas, compruebe si una elección en la información de presentación activó el requisito antes de suponer que la herramienta está equivocada."
  - q: "¿Deben etiquetarse los gastos como números negativos?"
    a: "Normalmente no. El documento de arquitectura SSMxT establece que no hay elementos que deban almacenarse siempre como valor negativo, porque los elementos de ponderación negativa como los gastos se almacenan como números positivos en la mayoría de los casos. Lo que el linkbase de fórmulas sí impone es una lista de elementos que deben ser siempre positivos. Por tanto, los errores de signo en las presentaciones SSMxT son más a menudo una aplicación excesiva de signos menos que una aplicación insuficiente."
  - q: "¿Cómo etiqueto una nota para la que la taxonomía no tiene concepto?"
    a: "En un bloque de texto. No se permiten extensiones de la empresa a SSMxT_2022v1.0, así que no puede crear un elemento. El enfoque declarado de la SSM es que el preparador aporta el nivel de detalle necesario etiquetando la información en bloque de texto usando conceptos de bloque de texto apropiados. La información se presenta igualmente, sencillamente no es legible por máquina de forma individual."
  - q: "¿Cuál es la diferencia entre el etiquetado en bloque y el etiquetado en detalle?"
    a: "El etiquetado en detalle asigna a cada cifra su propio concepto, de modo que el número es legible por máquina de forma individual y está sujeto a las reglas de validación. El etiquetado en bloque captura una nota entera como un bloque de texto contra un concepto. El etiquetado en detalle es obligatorio dondequiera que la taxonomía modele el concepto; el etiquetado en bloque es el recurso para el detalle que la taxonomía no contiene. Poner en bloque algo que la taxonomía modela es un fallo de calidad incluso cuando no falla la validación."
  - q: "¿Un error de validación significa que la SSM ha rechazado mi presentación?"
    a: "No. La validación de mTool ocurre sin conexión antes de que se presente nada, y el archivo sencillamente no se generará. Un rechazo o una observación es un evento aparte que ocurre en mPortal tras la subida. Ninguno de los dos detiene el plazo de circulación de la sección 258 ni el plazo de presentación de la sección 259."

verificationNeeded:
  - "SSM does not publish a consolidated list of MBRS rejection reason codes — the error families here are derived from the SSMxT_2022 architecture document's formula linkbase categories, not from a published rejection register"
  - "Confirm the validation behaviour of the specific entry point against the mTool 2.2 user manual for that entry point before relying on any rule described generically"

lang: "es"
sourceContentHash: "4cbf1a047bbd3c22"
masterLanguage: "en"
translationStatus: "in-sync"

status: "published"
aiAssisted: true
reviewer: null
reviewed: 2026-07-22
reviewDue: 2027-07-22
revision: 0
revisions:
  - revision: 0
    date: 2026-07-20
    change: "Approved and published."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Documento de arquitectura de la Taxonomía SSM 2022 de MBRS 2.0 (SSMxT_2022) (MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "Sistema Malasio de Informes Empresariales (MBRS) — Preguntas frecuentes, versión 2.4 (Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, version 2.4)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQs_Malaysian_Business_Reporting_System_MBRS.pdf"
    publisher: "SSM"
    date: "2024-10-01"
  - title: "Mejora MBRS 2.0 — Panorama general (MBRS Enhancement MBRS 2.0 — Overview)"
    url: "https://www.ssm.com.my/Pages/Publication/PDF%20Files/AD%202024%20-%20Overview%20of%20MBRS%20v2.pdf"
    publisher: "SSM"
  - title: "Ley de Sociedades de 2016 (Ley 777), texto actualizado a 1 de agosto de 2022 (Companies Act 2016 (Act 777), updated text as at 1 August 2022)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
  - title: "MBRS — Sistema Malasio de Informes Empresariales (MBRS — Malaysian Business Reporting System)"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/MBRS.aspx"
    publisher: "SSM"

entity: "SSMxT tagging errors"
relations:
  - { rel: "administered-by", to: "ssm" }
  - { rel: "part-of", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "mbrs-2" }
  - { rel: "related-to", to: "financial-statement-pack" }
  - { rel: "related-to", to: "sdn-bhd-bookkeeping" }
related: ["mbrs-2-filing-guide", "mbrs-2", "financial-statement-pack", "sdn-bhd-bookkeeping", "mfrs-vs-mpers"]
keywords: ["error de etiquetado MBRS", "validación SSMxT", "fallo de validación XBRL Malasia", "error mTool", "MBRS rechazado", "etiquetado en bloque de texto SSM", "escala decimals MBRS"]
---

El fallo que cuesta dinero no es el que impide que el archivo se genere. Es el que se genera limpiamente, se presenta limpiamente, y lleva un número que está equivocado por un factor de mil.

La validación SSMxT es buena en la aritmética y ciega al significado. Rechazará un estado de cambios en el patrimonio que no cuadre. Aceptará de buena gana unos activos totales de RM53,928 para una empresa con RM53.9 millones en su balance, porque 53,928 es un número perfectamente válido.

Esa asimetría es como debería leer cada familia de errores de más abajo: los que la herramienta detecta son inconvenientes, y los que no detecta son los que hay que revisar.

## Los dos errores que la validación no puede ver

### Escala

SSMxT maneja el redondeo a través del atributo XBRL `decimals`, no redondeando el valor. El propio ejemplo resuelto de la SSM: una empresa cuyas cuentas están expresadas en miles y cuyos activos leen 53,928 etiqueta el hecho como **53928000 con `decimals` fijado en -3**.

Un preparador que copia la cifra impresa directamente de la cara de las cuentas etiqueta 53928. Ninguna regla se dispara. La instancia es XBRL válido. Las cuentas presentadas muestran una empresa de una milésima de su tamaño real — legible por máquina, permanente, y visible para cualquiera que extraiga los datos.

Cada presentación preparada a partir de un juego de cuentas presentado en miles o millones necesita una comprobación de escala como un paso de revisión discreto, separado de la validación.

### Selección de elementos

La taxonomía lleva miles de conceptos, varios de los cuales encajarán de forma plausible en cualquier saldo dado. Nada en mTool le dice que eligió el plausible en lugar del correcto.

De ello se siguen dos consecuencias. Primera, las cuentas etiquetadas dejan de coincidir con lo que entendería un lector del PDF. Segunda — y esta es la que muerde en el segundo año — la decisión de mapeo es un **precedente**. Etiquete el mismo saldo de forma diferente el año próximo y sus comparativos divergen en los datos aunque las cuentas impresas sean consistentes.

Registre el mapeo. No el archivo, el mapeo: la cuenta, el concepto, y la razón cuando la elección fue un juicio.

## Las cinco familias de fallo de validación

La SSM integra las reglas en el linkbase de fórmulas de la taxonomía, usando aserciones de existencia y aserciones de valor, modeladas de modo que **verdadero significa que la regla pasó**.

**Elementos obligatorios.** Conceptos que deben estar presentes, una aserción por concepto de modo que el mensaje de fallo nombre el elemento ausente. Ejemplo documentado por la SSM: debe informarse «Assets» (activos).

**Elementos obligatorios derivados.** Requeridos solo bajo ciertas condiciones, modelados con una condición previa más una aserción de valor. El ejemplo de la SSM es exacto y vale la pena memorizarlo: *cuando el declarante selecciona el estatus de la empresa como «Public company», entonces la revelación del estatus de auditoría de los estados financieros debe ser «Audited».*

Esta es la familia que produce las solicitudes de soporte más desconcertadas, porque el error aflora en los estados financieros mientras que su causa es un desplegable en el bloque de información de presentación. Antes de discutir con un error obligatorio derivado, vuelva a leer el encabezado.

**Agregación de dimensiones.** Los miembros de un eje deben sumar el valor de su padre cuando el preparador los estructuró en una jerarquía de tipo sumatorio. Ejemplo de la SSM: el patrimonio total es igual a los intereses no controladores más los demás componentes del patrimonio más el patrimonio atribuible a los propietarios de la matriz.

**Valores positivos y negativos.** Aquí la intuición que la mayoría de los preparadores aporta está equivocada. El documento de arquitectura es explícito en que *no hay elementos que deban almacenarse siempre como valor negativo*, porque las partidas de ponderación negativa como el costo de ventas se almacenan como números positivos en la mayoría de los casos. Lo que el linkbase de fórmulas sí lleva es una lista de elementos que deben ser **siempre positivos** — el ejemplo de la SSM es que el importe total de endeudamiento en MYR debe ser un valor positivo.

Así que el error de signo común en una presentación SSMxT no es un signo menos ausente. Es un preparador que, servicial, añade uno.

**Datos entre estados y correlacionados.** El mismo hecho que aparece en más de un estado debe concordar, y los hechos lógicamente relacionados se verifican entre sí. Una cifra de resultado en el estado de resultados que no concuerde con el movimiento de apertura a cierre del estado de cambios en el patrimonio solía ser invisible en un PDF. Ahora bloquea el archivo.

Debajo de las cinco se sitúan las comprobaciones estructurales — validación XBRL, dimensional, de fórmulas, de tablas, de enumeración extensible y iXBRL — que confirman que la instancia está bien formada contra la propia SSMxT_2022v1.0.

## Etiquetado en bloque frente a etiquetado en detalle

El etiquetado en detalle da a una cifra su propio concepto: legible por máquina de forma individual, validada de forma individual, comparable entre años de forma individual. El etiquetado en bloque captura una nota entera como texto contra un único concepto de bloque de texto.

La regla que decide cuál usa no es una preferencia. **No se permiten extensiones de la empresa a SSMxT_2022v1.0.** Cuando la taxonomía lleva un concepto, usted etiqueta a él. Cuando las normas contables requieren un detalle que la taxonomía no modela — siendo los desgloses por segmentos el propio ejemplo de la SSM de detalle específico de la entidad — la instrucción es aportarlo mediante etiquetado en bloque de texto en un concepto de bloque de texto apropiado.

El modo de fallo es el exceso de bloqueo: un preparador bajo presión de plazo pone en bloque una nota entera que la taxonomía modela concepto por concepto. Se genera, se presenta, y vacía la presentación. Nada en la cadena de datos que la SSM construyó obtiene provecho alguno de una nota almacenada como un párrafo.

Cuando una instancia se prepara en iXBRL, el contenido legible por humanos sin etiquetar puede situarse en el documento junto a los hechos etiquetados. Eso reduce la presión de forzar todo a una etiqueta, pero no autoriza a poner en bloque lo que debería ir en detalle.

## Notas que no mapean

Tres situaciones se repiten.

**Una nota para la que la taxonomía no tiene concepto.** Bloque de texto. Esta es la respuesta diseñada, no un apaño.

**Una nota que la taxonomía modela bajo un nombre distinto.** Más común de lo que los preparadores esperan, porque SSMxT hereda las etiquetas de la IFRS Taxonomy 2022 mientras que las cuentas malasias a menudo llevan terminología propia de la casa. Use el navegador SSMxT incorporado en mTool para buscar el concepto, no la etiqueta a la que está acostumbrado.

**Una nota que pertenece a una base de presentación que usted no eligió.** La taxonomía lleva alternativas — corriente/no corriente frente a orden de liquidez para el estado de situación financiera, función frente a naturaleza de los gastos para el estado de resultados, directo frente a indirecto para los flujos de efectivo. Los conceptos pertenecientes a la base que usted no seleccionó no están disponibles. Los preparadores leen esto como un elemento ausente. Es una elección de presentación hecha dos pasos antes.

## La moneda, y la regla estatutaria detrás de ella

Los hechos monetarios deben llevar `iso4217:MYR`. Los preparadores de filiales de propiedad extranjera que informan a un grupo en otra moneda a veces suponen que la moneda de presentación viaja con las cuentas. No lo hace.

Esto no es solo una restricción de la taxonomía. La sección 259(1)(c) de la Ley de Sociedades de 2016 exige que todos los importes mostrados en los estados financieros e informes presentados ante el Registrador se expresen en moneda malasia, y que los documentos en cualquier idioma distinto del malayo (bahasa Malaysia) o el inglés vayan acompañados de una traducción certificada.

## Errores comunes

- **Introducir la cifra impresa de cuentas expresadas en miles** en lugar del importe completo con `decimals` fijado en -3. Pasa la validación, declara mal las cuentas.
- **Añadir signos menos a los gastos.** SSMxT almacena las partidas de ponderación negativa como positivas en la mayoría de los casos.
- **Discutir con un error obligatorio derivado** sin comprobar el encabezado de información de presentación que lo activó.
- **Poner en bloque una nota que la taxonomía modela en detalle** porque el plazo está más cerca que la comprensión.
- **Buscar en la taxonomía el nombre de su propia cuenta** en lugar de la etiqueta IFRS, y luego concluir que el concepto no existe.
- **Cambiar la base de presentación de un año a otro**, lo que rompe silenciosamente los comparativos en los datos.
- **Suponer que un fallo de validación es un rechazo.** La validación es sin conexión en mTool; el rechazo y la observación ocurren en mPortal tras la subida. Ninguno detiene el reloj estatutario.
- **Etiquetar la moneda de presentación de un grupo** en lugar del ringgit de Malasia.
- **Tratar el mapeo como desechable.** El documento de instancia es desechable. El mapeo es el activo.

## Qué sigue

Incorpore un paso de revisión a dos columnas en su cierre: cada hecho etiquetado contra la cara de las cuentas, comprobado en cuanto a escala, y cada mapeo de juicio registrado con su razón. Ninguno de los dos es una regla de validación, que es exactamente por qué ninguno se detectará por usted.

Si aún está eligiendo un punto de entrada o resolviendo los roles de maker y lodger, comience con la [guía de preparación MBRS 2.0](/en/accounting/mbrs-2-filing-guide).
