---
topicId: MY-ACC-0002
title: "Preparar una presentación MBRS 2.0: mTool, la taxonomía SSMxT y el ciclo de rechazo"
seoTitle: "Guía de presentación MBRS 2.0: etiquetado con mTool y SSMxT"
slug: "mbrs-2-filing-guide"
category: "accounting"
subcategory: ["financial-statements"]
summary: "La mecánica de principio a fin de preparar una presentación XBRL ante la SSM — elegir el punto de entrada, mapear las cuentas a los conceptos SSMxT, superar la validación de mTool y lograr que una presentación con observaciones vuelva a pasar por mPortal."

tier: "1"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Una presentación MBRS 2.0 se prepara sin conexión en mTool, la herramienta de preparación basada en Excel de la SSM, y se presenta en línea a través de mPortal. Usted elige uno de los 31 puntos de entrada, mapea cada cifra de los estados financieros a un concepto de la Taxonomía SSM (SSMxT_2022v1.0), supera las reglas de validación de la taxonomía integradas en la herramienta y genera un documento de instancia XBRL. Un maker lo sube; solo un lodger que posea un certificado para ejercer válido puede presentarlo."
keyTakeaways:
  - "mTool 2.2 es la herramienta de preparación actual; la taxonomía que contiene es SSMxT_2022v1.0, construida sobre la IFRS Taxonomy 2022"
  - "31 puntos de entrada entre declaraciones anuales, estados financieros, indicadores financieros clave, rectificaciones y solicitudes de exención — elegir el equivocado significa reconstruir el archivo"
  - "No se permiten extensiones de la empresa: si la taxonomía no tiene un elemento para su partida, usted lo etiqueta en un bloque de texto, no inventa un concepto"
  - "Los importes deben estar en ringgit de Malasia — la sección 259(1)(c) de la Ley de Sociedades de 2016 lo exige y la taxonomía impone iso4217:MYR"
  - "La validación se basa en reglas, no es cosmética: elementos obligatorios, elementos obligatorios derivados, agregación de dimensiones, reglas de signo y coherencia entre estados se ejecutan todos antes de que el archivo se genere"
  - "El maker prepara y sube, el lodger aprueba y presenta — un administrador no tiene papel en ninguno de los dos"
  - "Una presentación con observaciones vuelve al maker; el plazo estatutario no se detiene mientras usted la corrige"
appliesTo: "Contadores, secretarios de sociedades y personal financiero que tienen que producir el propio archivo XBRL, no solo saber que se requiere uno."

faq:
  - q: "¿Qué versión de mTool y qué taxonomía debo usar?"
    a: "mTool 2.2 es la versión actual en la página MBRS de la SSM, y la taxonomía incorporada en ella es SSMxT_2022v1.0, que se basa en la IFRS Accounting Taxonomy 2022. La SSM publica una nota aparte sobre las diferencias entre mTool 2.1 y 2.2. Un archivo zip generado en mTool 1.0 no puede subirse a mPortal 2.0 — debe abrirse en la herramienta actual y regenerarse."
  - q: "¿Qué es un punto de entrada y cómo elijo el correcto?"
    a: "Un punto de entrada es el esquema de taxonomía específico para un tipo de presentación. MBRS 2.0 tiene 31: cinco tipos de declaración anual, tipos de estados financieros divididos por norma contable y tipo de empresa (FS-MFRS, FS-MPERS, FS-CLBG, FS-EPC, FS-FC, FS-BNM, más los equivalentes de la Ley de Sociedades de 1965), cuatro tipos de indicadores financieros clave, rectificación y ocho solicitudes de exención. El correcto queda fijado por su tipo de empresa, la Ley bajo la que presenta y la norma contable que aplica."
  - q: "¿Puedo crear mi propia etiqueta si la taxonomía no tiene un elemento para una partida?"
    a: "No. El documento de arquitectura SSMxT establece con claridad que no se permiten extensiones de la empresa a SSMxT_2022v1.0. Cuando la taxonomía no contiene un concepto coincidente, el preparador aporta el detalle etiquetándolo en un elemento de bloque de texto apropiado. Esta es la mayor diferencia entre la presentación ante la SSM y la elaboración de informes XBRL voluntaria en otros lugares."
  - q: "¿Quién puede realmente presentar el archivo — el maker o el lodger?"
    a: "El maker prepara el documento de instancia y lo sube en mPortal, pero la presentación es el acto del lodger. Un lodger debe poseer un certificado para ejercer activo registrado a través de e-Secretary, más un certificado digital válido. Si el certificado para ejercer ha caducado, la presentación sencillamente no puede salir, por bueno que sea el archivo XBRL."
  - q: "¿Puedo presentar indicadores financieros clave en lugar de un juego completo de estados financieros?"
    a: "Solo con aprobación previa. Una empresa debe primero solicitar, bajo el punto de entrada EA2, la exención de presentar estados financieros e informes en formato XBRL completo, hecha conforme a la sección 604(2) de la Ley de Sociedades de 2016. Una vez que la SSM la concede, la empresa puede usar un punto de entrada KFI. Presentar KFI sin esa aprobación no es una opción."
  - q: "Si la SSM hace observaciones a mi presentación, ¿se detiene el plazo?"
    a: "No. Una observación devuelve la presentación al maker para su corrección y reenvío, pero nada de eso detiene el reloj de circulación de la sección 258 ni el reloj de presentación de la sección 259. Si el archivo corregido llega después de la fecha estatutaria, las sanciones por presentación tardía conforme a la Directiva de Práctica 1/2017 se aplican desde la fecha de vencimiento original."

verificationNeeded: []

lang: "es"
sourceContentHash: "7d7049034803d339"
masterLanguage: "en"
translationStatus: "in-sync"

status: "published"
aiAssisted: true
reviewer: null
publishedBy: "ashton-tan"
reviewed: 2026-08-14
reviewDue: 2027-07-22
revision: 0
revisions:
  - revision: 0
    date: 2026-08-14
    change: "Approved and published."
    reviewer: null

updated: 2026-08-14
sources:
  - title: "Sistema Malasio de Informes Empresariales (MBRS) — Preguntas frecuentes, versión 2.8 (Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, Version 2.8)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQ_MBRS_ISSB.pdf"
    publisher: "SSM"
    date: "2025-05-01"
  - title: "Tabla de tarifas — Registro de Sociedades (ROC) (Table of Fees — Registration of Company (ROC))"
    url: "https://www.ssm.com.my/Pages/Services/Registration-of-Company-(ROC)/Table-of-Fees.aspx"
    publisher: "SSM"
  - title: "Mejora MBRS 2.0 — Panorama general (MBRS Enhancement MBRS 2.0 — Overview)"
    url: "https://www.ssm.com.my/Pages/Publication/PDF%20Files/AD%202024%20-%20Overview%20of%20MBRS%20v2.pdf"
    publisher: "SSM"
  - title: "Documento de arquitectura de la Taxonomía SSM 2022 de MBRS 2.0 (SSMxT_2022) (MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "MBRS — Sistema Malasio de Informes Empresariales (MBRS — Malaysian Business Reporting System)"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/MBRS.aspx"
    publisher: "SSM"
  - title: "Ley de Sociedades de 2016 (Ley 777), texto actualizado a 1 de agosto de 2022 (Companies Act 2016 (Act 777), updated text as at 1 August 2022)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
  - title: "Ley de Sociedades de 2016: Directiva de Práctica n.º 1/2017 (revisada el 1 de octubre de 2024) (Companies Act 2016: Practice Directive No. 1/2017 (Revised 1 October 2024))"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Practice%20Directive%201_2017%20(Revised)%201%20Oct%202024.pdf"
    publisher: "SSM"
    date: "2024-10-01"
  - title: "Directiva de Práctica n.º 10/2024 — Criterios de elegibilidad para la exención de auditoría de ciertas sociedades privadas en Malasia (Practice Directive No. 10/2024 — Qualifying Criteria for Audit Exemption for Certain Private Companies in Malaysia)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/PD10-2024-Qualifying-Criteria-for-Audit-Exemption-for-Certain-Categories-of-Private-Companies.pdf"
    publisher: "SSM"
    date: "2024-12-16"

entity: "MBRS 2.0 filing preparation"
relations:
  - { rel: "administered-by", to: "ssm" }
  - { rel: "governs", to: "companies-act-2016" }
  - { rel: "explained-in", to: "mbrs-2" }
  - { rel: "related-to", to: "mbrs-tagging-errors" }
  - { rel: "related-to", to: "financial-statement-pack" }
  - { rel: "related-to", to: "financial-statements-lodgement" }
  - { rel: "related-to", to: "unaudited-financial-statements" }
  - { rel: "related-to", to: "extension-of-time-ssm" }
related: ["mbrs-2", "mbrs-tagging-errors", "financial-statement-pack", "financial-statements-lodgement", "unaudited-financial-statements", "extension-of-time-ssm", "mfrs-vs-mpers"]
keywords: ["guía de presentación MBRS 2.0", "mTool 2.2", "taxonomía SSMxT", "etiquetado XBRL Malasia", "punto de entrada MBRS", "mPortal maker lodger", "rechazo MBRS", "preparar estados financieros XBRL SSM"]
---

Los resultados de búsqueda de «MBRS 2.0» son casi en su totalidad gente que le vende una manera de no hacerlo. Proveedores de conversión, servicios de etiquetado subcontratados y anzuelos de preparación de las Big Four que terminan en «hable con nosotros». Nadie publica lo que realmente ocurre entre un juego de cuentas firmado y un acuse de recibo de la SSM.

Esto es lo que ocurre. Usted instala un complemento de Microsoft Excel, elige uno de treinta y un puntos de entrada y mapea cada número de sus estados financieros a un concepto de una taxonomía de 6,000 elementos que no tiene permiso para extender. Luego la herramienta se niega a generar un archivo hasta que cada elemento obligatorio está presente, cada subtotal cuadra y cada convención de signo es correcta. Luego una persona con un certificado para ejercer pulsa presentar.

Esta página es la mecánica. La **obligación** de presentar — quién, cuándo y cuál es la sanción — está en la página acompañante sobre [MBRS 2.0 y la obligación de presentación](/en/company-secretary/mbrs-2).

## Qué está construyendo realmente

Una presentación MBRS es un documento de instancia XBRL: un archivo estructurado en el que cada cifra lleva una identidad legible por máquina. La identidad procede de la **Taxonomía SSM**, actualmente **SSMxT_2022v1.0**.

SSMxT no es una invención de la SSM desde cero. Toma la **IFRS Accounting Taxonomy 2022** como base — 6,458 elementos IFRS — y añade encima conceptos jurisdiccionales malasios, para las revelaciones de la Ley de Sociedades que las IFRS no tienen motivo para contener. La taxonomía de estados financieros de la Ley de Sociedades de 2016 llega a **6,197 conceptos bajo MFRS** y **2,375 bajo MPERS**.

El lado no financiero es más pequeño y más prescriptivo de lo que la mayoría de los preparadores espera:

| Revelación | Conceptos (CA 2016) |
| --- | --- |
| Informe de los administradores | 24 |
| Declaración de los administradores | 29 |
| Revisión de negocio de los administradores | 11 |
| Informe de los auditores a los socios | 22 |
| Participación en la bolsa de valores | 11 |

Esos números importan. El informe de los administradores no se presenta como un PDF escaneado. Se etiqueta, campo por campo, contra 24 conceptos definidos — por eso un informe de los administradores redactado en prosa libre y nunca mapeado a los encabezados del Quinto Anexo se convierte en un problema de etiquetado antes que en uno de redacción.

## Las dos herramientas, y el archivo que pasa entre ellas

**mTool** es la herramienta de preparación. Es un complemento de Microsoft Excel, solo para Windows — no funciona en macOS, y no funciona en Open Office. La versión actual es **mTool 2.2**, y la SSM publica una nota aparte que expone las diferencias respecto de mTool 2.1. Lleva un navegador SSMxT incorporado, funciona sin conexión, ejecuta las reglas de validación y produce el archivo XBRL como un zip.

**mPortal** es la plataforma de presentación. Usted inicia sesión, sube el zip, lo encamina para aprobación, paga y recibe el acuse de recibo.

Una trampa aquí que cuesta tardes enteras: **un zip generado en mTool 1.0 no puede subirse a mPortal 2.0.** La propia orientación de la SSM le permite abrir un zip de mTool 1.0 en la herramienta actual y regenerarlo, pero el artefacto antiguo en sí está muerto. Si está volviendo a presentar algo preparado en 2023, cuente con reconstruir.

La trampa relacionada es el número de la empresa. **El nuevo formato de número de registro de la empresa es obligatorio en MBRS 2.0.** El formato antiguo se usa solo para precargar los datos de la declaración anual.

## Elegir el punto de entrada

Un punto de entrada es el esquema de taxonomía para un tipo específico de presentación. MBRS 2.0 tiene 31. Elegir mal no es un error de formato — es un esquema distinto, elementos obligatorios distintos y una reconstrucción.

**Declaraciones anuales**

| Punto de entrada | Uso |
| --- | --- |
| AR1 | Sociedad con capital social, sección 68 |
| AR2 | Sociedad sin capital social, sección 68 |
| AR3 | Sociedad extranjera, sección 576 |
| AR4 | Datos sin cambios, sección 68(6) |
| AR1965 | Declaración anual conforme a la Ley de Sociedades de 1965 |

**Estados financieros e informes**

FS-MFRS y FS-MPERS se dividen según la norma contable aplicada. FS-CLBG es para las sociedades limitadas por garantía, FS-EPC para las sociedades privadas exentas, FS-FC para las sociedades extranjeras, y FS-BNM para las sociedades reguladas por Bank Negara Malaysia. Cada una tiene una contraparte de la Ley de Sociedades de 1965.

**Indicadores financieros clave**

KFI-MFRS, KFI-MPERS, KFI-CLBG y KFI-FC existen para las empresas que no presentan un juego completo en XBRL. No puede simplemente optar por ello. Una empresa debe obtener primero la aprobación bajo **EA2 — solicitud de exención de presentar estados financieros e informes en formato XBRL completo**, hecha conforme a la sección 604(2) de la Ley de Sociedades de 2016. El mismo patrón rige con FS-FC, que solo está disponible tras una exención EA3 conforme a la sección 575(7).

**Las solicitudes de exención** son su propia familia, y vale la pena conocer los anclajes estatutarios porque son aquello bajo lo que realmente se hace la solicitud:

| Punto de entrada | Solicitud | Sección |
| --- | --- | --- |
| EA1 | Fin de ejercicio de una filial extranjera que no coincide con el de la sociedad matriz | sección 247(3) |
| EA2 | Exención de presentar en formato XBRL completo | sección 604(2) |
| EA3 | Dispensa de la presentación de estados financieros por una sociedad extranjera | sección 575(7) |
| EA4A | Alivio en cuanto a la forma y el contenido del informe de los administradores | sección 255(1) |
| EA4B | Alivio en cuanto a la forma y el contenido de los estados financieros | sección 255(1) |
| EA5A | Prórroga de plazo para la circulación de los estados financieros | sección 259(2) |
| EA5B | Prórroga de plazo para presentar los estados financieros | sección 259(2) |
| EA6 | Prórroga de plazo para celebrar la junta general anual (AGM) | sección 340(4) |
| EA7 | Prórroga de plazo para presentar la declaración anual | sección 609(2) |
| EA8 | Solicitud al Ministro | sección 247(8) |

Observe que EA5A y EA5B son **solicitudes separadas**. La circulación y la presentación son relojes estatutarios distintos conforme a las secciones 258 y 259, y una prórroga de uno no prorroga el otro. Esa distinción es invisible en la mayoría de las orientaciones y está integrada en el sistema de presentación.

## Mapeo: la parte que nadie enseña

La propia definición de la SSM es engañosamente sencilla — los preparadores «hacen el mapeo haciendo coincidir la información dentro de los estados financieros con un concepto pertinente dentro de la Taxonomía». En la práctica, el mapeo es donde reside el juicio, y donde se crean los problemas del segundo año.

**No puede extender la taxonomía.** El documento de arquitectura es inequívoco: no se permiten extensiones de la empresa a SSMxT_2022v1.0, y las entidades no deben extender la taxonomía al crear un documento de instancia. Cuando necesita un detalle que la taxonomía no modela — un desglose por segmentos, una clase inusual de otros ingresos — la instrucción es aportarlo mediante **etiquetado en bloque de texto** en un concepto de bloque de texto apropiado.

Esto es lo contrario de cómo funciona XBRL en la mayoría de los regímenes de empresas cotizadas, donde los elementos de extensión son habituales. Los preparadores que llegan de ese mundo buscan una etiqueta personalizada, no pueden crear una, y concluyen que la herramienta está averiada.

**El alcance del juego completo es fijo.** Para una presentación en XBRL completo, los estados mínimos son el estado de situación financiera, el estado de resultados, el estado de flujos de efectivo, el estado de cambios en el patrimonio, y las notas. La taxonomía lleva presentaciones alternativas para tres de ellos y usted debe elegir una y mantenerla:

- Estado de situación financiera — corriente/no corriente, **o** por orden de liquidez
- Estado de resultados — por función de los gastos, **o** por naturaleza de los gastos
- Estado de flujos de efectivo — directo, **o** indirecto

Cambiar de un año a otro es legal pero visible, y producirá comparativos que no cuadran en los datos aunque las cuentas se lean con normalidad.

**La moneda y el redondeo no son estilísticos.** Los importes monetarios deben expresarse en ringgit de Malasia, con la unidad de medida `iso4217:MYR`. Esto no es meramente una regla de la taxonomía — la sección 259(1)(c) de la Ley de Sociedades de 2016 exige que todos los importes en los estados financieros e informes presentados se expresen en moneda malasia, y exige una traducción certificada cuando los documentos no están en malayo (bahasa Malaysia) o inglés.

El redondeo se maneja mediante el atributo `decimals`, no redondeando la cifra. El ejemplo resuelto de la SSM: unos activos mostrados como 53,928 en un juego de cuentas expresado en miles se etiquetan como **53928000 con decimals fijado en -3**. Los preparadores que escriben 53928 han subestimado los activos en tres órdenes de magnitud, y ninguna regla de validación lo detectará, porque 53,928 es un número perfectamente válido.

## Validación: cinco familias de reglas, no un corrector ortográfico

La validación de mTool se basa en el linkbase de fórmulas de la taxonomía. La SSM modela las reglas como aserciones donde «verdadero» significa que pasó. Comprender las familias le dice qué tipo de error está buscando.

**Elementos obligatorios.** Ciertos conceptos deben estar presentes. Existe una aserción separada para cada uno, precisamente para que el mensaje de fallo nombre el elemento que falta. Ejemplo de la documentación de la SSM: debe informarse «Assets» (activos).

**Elementos obligatorios derivados.** Requeridos solo en ciertas circunstancias, modelados con una condición previa. Ejemplo de la SSM: cuando el declarante selecciona el estatus de la empresa como «Public company», entonces la revelación del estatus de auditoría de los estados financieros debe ser «Audited». Equivóquese en la información de presentación en la parte superior de la plantilla y activará requisitos posteriores que no esperaba.

**Agregación de dimensiones.** Los miembros de un eje deben sumar el valor del padre. El patrimonio total es igual a los intereses no controladores más los demás componentes del patrimonio más el patrimonio atribuible a los propietarios de la matriz. Aquí es donde un juego de cuentas ensamblado a lo largo de varias hojas de cálculo y nunca cuadrado de forma cruzada queda por fin atrapado.

**Valores positivos y negativos.** La posición de la SSM es más matizada que «los gastos son negativos». **No hay elementos que deban almacenarse siempre en negativo** — las partidas de ponderación negativa como los gastos se almacenan como números positivos en la mayoría de los casos. El linkbase de fórmulas impone, en cambio, una lista de elementos que deben ser siempre **positivos**.

**Datos entre estados y correlacionados.** Los valores que aparecen en más de un estado deben concordar, y los valores lógicamente vinculados se verifican entre sí.

Añada a eso las validaciones estructurales — buena formación XBRL, validación dimensional, enumeración extensible, validación de tablas y de fórmulas — que verifican la instancia contra la propia SSMxT_2022v1.0.

## Maker, lodger y el paso de aprobación

mPortal se basa en roles, y los roles no son intercambiables.

El **maker** prepara el documento de instancia y lo sube. El maker no necesita una firma digital.

El **lodger** aprueba y presenta. Un lodger debe poseer un certificado para ejercer conforme a la sección 241 de la Ley de Sociedades de 2016, registrado a través de e-Secretary, y un certificado digital válido. La aprobación se realiza a través de Administrator → Approval Management → Filing Approval, donde el panel muestra las presentaciones subidas por los makers y a la espera de la aprobación del lodger.

La asociación entre maker y lodger se administra en mPortal, y puede fijarse como inactiva. Un fallo común y completamente opaco es un maker que sube archivos que nunca aparecen en la cola del lodger porque la asociación fue desactivada y no reinstaurada. Un solo maker puede estar asociado con varios lodgers.

Un administrador no es un rol en este sistema. Este es el mismo punto estructural que rige las solicitudes de prórroga de plazo, que la SSM exige que provengan del secretario de la sociedad. Si el certificado para ejercer de su secretario ha caducado, no tiene un canal de presentación — y lo descubrirá el día en que intente usarlo.

## El ciclo de rechazo

Tres cosas distintas reciben el nombre de «rechazo» y se comportan de manera diferente.

**Fallo de validación de mTool.** El archivo no se generará. Usted sigue sin conexión, nada se ha presentado, y ningún reloj se ha visto afectado. Este es el buen desenlace.

**Observación de mPortal.** La presentación se acepta para revisión y luego se devuelve con observaciones. El maker ve el estado de la observación en el panel, corrige y reenvía. El plazo estatutario queda intacto por todo esto — la circulación de la sección 258 y la presentación de la sección 259 corren según sus propias fechas, y las sanciones de la Directiva de Práctica 1/2017 se devengan desde la fecha de vencimiento original, no desde la fecha en que su archivo finalmente pasó.

**Rectificación posterior a la presentación.** Una vez que una presentación consta en el registro, usted no la reenvía — la rectifica conforme a la sección 602 de la Ley de Sociedades de 2016. mPortal 2.0 lleva tres variantes:

- **Rectificación estándar** — corregir datos en una AR o FS ya presentada, ya sea a través de MBRS o en ventanilla
- **Rectificación de la información de presentación** — corregir el propio encabezado de la presentación, por ejemplo un fin de ejercicio presentado como 30/12/23 en lugar de 31/12/23, o una presentación presentada como AR4 cuando debió ser AR1
- **Presentación nula (nil filing)** — rectificar un registro sin subir ninguna AR o FS de reemplazo, usada para presentaciones duplicadas o una orden judicial sin reemplazo

También existe una vía de **presentación por orden judicial** para las empresas con estatus disuelto.

Bajo MBRS 1.0, la rectificación significaba una solicitud en ventanilla antes de volver a presentar. MBRS 2.0 llevó todo el proceso al portal. Esa es una mejora genuina, y es también la razón por la que los puntos de entrada de rectificación existen en mTool.

## Una secuencia de trabajo

1. **Fije las fechas antes de abrir la herramienta.** Fin de ejercicio, fecha de circulación, plazo de presentación. El reloj de presentación de la sección 259(1)(a) comienza en la circulación, no en el fin de ejercicio.
2. **Confirme la versión de mTool y la versión de la taxonomía** en la página MBRS de la SSM. La SSM las actualiza sin un anuncio aparte.
3. **Elija el punto de entrada deliberadamente** — tipo de empresa, Ley, norma contable. Si necesita KFI o FS-FC, la aprobación EA2 o EA3 ya debe existir.
4. **Cuadre las cuentas de forma cruzada antes de etiquetar.** Cada inconsistencia interna que un PDF solía ocultar es ahora un fallo de validación bloqueante.
5. **Mapee una vez y registre el mapeo.** Los juicios que haga este año deben repetirse el año próximo, o sus comparativos no serán comparables en los datos aunque lo sean en las cuentas.
6. **Etiquete también los estados no financieros** — informe de los administradores, declaración de los administradores, informe de los auditores. Estos son conceptos, no adjuntos.
7. **Valide y corrija dentro de mTool.** mPortal no es un servicio de validación.
8. **Compruebe el certificado para ejercer y el certificado digital del lodger** antes de la semana del plazo, no durante ella.
9. **Suba, encamine para la aprobación del lodger, pague, conserve el acuse de recibo.** El acuse de recibo es la prueba de cumplimiento, no el archivo zip.
10. **Si el archivo no va a estar listo, solicite una prórroga antes de que expire el periodo** — EA5A para la circulación, EA5B para la presentación, EA7 para la declaración anual.

## Errores comunes

- **Escribir la cifra redondeada en lugar de usar el atributo `decimals`.** 53,928 en un juego de cuentas expresado en miles es 53928000 con decimals -3. Escribir 53928 pasa todas las reglas de validación y está mal por un factor de mil.
- **Intentar crear un elemento personalizado.** No se permiten extensiones de la empresa a SSMxT_2022v1.0. Use un bloque de texto.
- **Presentar KFI sin la aprobación EA2**, o FS-FC sin la exención EA3. Ambos requieren primero una exención concedida.
- **Suponer que una prórroga cubre ambos relojes.** EA5A prorroga la circulación, EA5B prorroga la presentación, y las secciones 258 y 259 son secuenciales.
- **Subir un zip de mTool 1.0 a mPortal 2.0.** Ábralo en la herramienta actual y regenérelo.
- **Usar el antiguo formato de número de registro de la empresa.** El nuevo formato es obligatorio en MBRS 2.0, salvo para precargar los datos de la declaración anual.
- **Una asociación maker–lodger desactivada**, de modo que las presentaciones subidas nunca llegan a la cola de aprobación del lodger y nadie lo nota hasta el plazo.
- **Tratar una observación como un reloj detenido.** No lo es. Las sanciones corren desde la fecha estatutaria.
- **Cambiar la base de presentación de un año a otro** — orden de liquidez un año, corriente/no corriente el siguiente — y producir comparativos que no se alinean en los datos.
- **Dejar el informe de los administradores sin etiquetar en prosa de borrador.** Se mapea a 24 conceptos definidos y a los encabezados del Quinto Anexo; redactarlo así desde el principio elimina toda una clase de retrabajo.

## Qué sigue

Antes de su próximo fin de ejercicio, haga una cosa: anote el mapeo. Cada cuenta de su balance de comprobación, el concepto SSMxT al que se etiquetó, y la razón cuando la elección no era obvia. Ese documento vale más que el propio archivo XBRL, porque el archivo es desechable y el mapeo es lo que usted reconstruye desde cero cada año si no lo conserva.

Luego lea la página de [errores de etiquetado](/en/accounting/mbrs-tagging-errors), que toma las familias de fallos anteriores y recorre cómo se ve realmente cada una en un juego de cuentas real.
