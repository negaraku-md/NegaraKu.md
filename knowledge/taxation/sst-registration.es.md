---
topicId: MY-TAX-0031
title: "Umbrales de registro SST por grupo de servicio"
slug: "sst-registration"
category: "taxation"
subcategory: ["sst"]
summary: "El umbral de registro del impuesto de servicios no es una sola cifra — va desde nulo hasta RM1,500,000 según el grupo, y los ingresos exentos siguen contando para él."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "No hay un único umbral de registro SST. Los umbrales del impuesto de servicios van por grupo — nulo para la educación y las tarjetas de crédito, RM500,000 para la mayoría de los grupos, RM1,000,000 para el arrendamiento o leasing y la mayor parte de las finanzas, y RM1,500,000 para la comida y bebida, la salud privada y la construcción. El impuesto de ventas es aparte, en RM500,000 de bienes imponibles fabricados. Cada grupo se prueba sobre sus propios doce meses móviles."
keyTakeaways:
  - "Los umbrales se fijan por grupo en la columna (3) de la Primera Lista, no por una sola cifra nacional"
  - "La educación del Grupo M y las tarjetas de crédito de la partida 1 del Grupo H tienen umbral nulo — un solo suministro imponible genera la obligación"
  - "El artículo 12(2) tiene dos pruebas: los doce meses que terminan este mes, y los doce meses que empiezan este mes"
  - "Los ingresos que están exentos del pago en virtud del art. 34 siguen siendo el valor de un servicio imponible y siguen contando para el umbral"
  - "Solicite antes del último día del mes siguiente al mes en que surgió la obligación, o Aduanas puede fechar su registro con efecto retroactivo"
  - "El registro del impuesto de ventas es una prueba aparte de RM500,000 sobre la fabricación, no sobre el volumen de negocio total"
appliesTo: "Cualquier empresa que se acerque a un umbral del impuesto de servicios, y los fabricantes que prueban la obligación del impuesto de ventas."

faq:
  - q: "¿Cuál es el umbral de registro SST en Malasia?"
    a: "No hay una sola cifra. Los umbrales del impuesto de servicios se fijan grupo por grupo en la columna (3) de la Primera Lista de las Service Tax Regulations 2018, y van desde nulo hasta RM1,500,000. El impuesto de ventas tiene su propio umbral de RM500,000 en virtud de la Sales Tax (Total Sale Value of Taxable Goods) Order 2018, probado sobre el valor de venta de los bienes que usted fabrica."
  - q: "¿Los ingresos exentos cuentan para el umbral SST?"
    a: "Sí, y este es el malentendido más caro del régimen. Las desgravaciones como la exención B2B, la exención de los contratos no revisables y la exención para los ciudadanos malasios en la salud privada se conceden en virtud del art. 34 de la Service Tax Act 2018 como exenciones del pago del impuesto. El suministro sigue siendo un servicio imponible, y el art. 12(2) prueba el valor total de todos los servicios imponibles."
  - q: "¿Cuándo debo solicitar el registro del impuesto de servicios?"
    a: "A más tardar el último día del mes siguiente al mes en que pasó a ser responsable, en virtud del art. 13(1) de la Service Tax Act 2018. Aduanas le registra con efecto desde el primer día del mes siguiente a su solicitud. Si no solicita, el art. 13(4) permite al Director General registrarle desde cualquier fecha que determine, siempre que no sea anterior a la fecha en que surgió la obligación."
  - q: "¿Puedo dividir mi negocio para quedar por debajo del umbral?"
    a: "No. El artículo 15 permite al Director General ordenar que varias personas sean tratadas como una sola persona imponible cuando esté convencido de que la separación de las actividades empresariales es artificial, atendiendo a lo estrechamente unidos que estén los negocios por vínculos financieros, económicos y organizativos. La orden puede exigir el registro desde una fecha que él especifique."
  - q: "¿Pruebo cada grupo de servicio por separado?"
    a: "Sí. Cada grupo lleva su propio umbral en la columna (3), de modo que una empresa con ingresos en dos grupos prueba cada uno frente a su propia cifra. Los profesionales del Grupo G son la excepción que agrega internamente — una persona del Grupo G es responsable una vez que el valor combinado de uno o más servicios cualesquiera del Grupo G supera RM500,000."

verificationNeeded:
  - "Confirm the current threshold for Group I items other than 14 to 16 against a consolidated reprint of the First Schedule — figures here were read from P.U.(A) 214/2018 as originally gazetted plus the amendments cited, not from a consolidated text"

obligations:
  - what: "Apply for service tax registration"
    trigger: "ongoing"
    due: "not later than the last day of the month following the month in which liability to be registered arises"
    authority: "RMCD"
    statute: "Service Tax Act 2018, s.13(1)"
    consequence: "Offence under s.13(5); Director General may register and backdate under s.13(4)"
  - what: "Apply for sales tax registration as a manufacturer"
    trigger: "ongoing"
    due: "not later than the last day of the month following the month in which liability to be registered arises"
    authority: "RMCD"
    statute: "Sales Tax Act 2018, s.13"
    consequence: "Backdated registration and liability for tax that should have been charged"
  - what: "Register for service tax once taxable turnover crosses your service group threshold"
    trigger: "threshold"
    criteria:
      - metric: "turnover"
        op: "gte"
        value: 500000
    due: "Most service groups register at RM500,000 rolling 12-month taxable turnover; thresholds run by group from nil to RM1,500,000"
    authority: "RMCD"
    statute: "Service Tax Act 2018, First Schedule"

lang: "es"
sourceContentHash: "cff6143d9061735b"
masterLanguage: "en"
translationStatus: "in-sync"

status: "published"
aiAssisted: true
reviewer: null
reviewed: "2026-07-22"
publishedBy: "ashton-tan"
revision: 0
revisions:
  - revision: 0
    date: 2026-07-20
    change: "Approved and published."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Service Tax Act 2018 (Act 807)"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Service-Tax-Act-2018.pdf"
    publisher: "Departamento Real de Aduanas de Malasia (RMCD)"
  - title: "Service Tax Regulations 2018, P.U.(A) 214/2018 — Primera Lista (First Schedule)"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Service-Tax-Regulations-2018.pdf"
    publisher: "Cámara del Fiscal General (AGC)"
  - title: "Service Tax (Amendment) Regulations 2025, P.U.(A) 172/2025"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/07/Peraturan-Peraturan-CP-Pindaan-2025.pdf"
    publisher: "Cámara del Fiscal General (AGC)"
    date: "2025-06-09"
  - title: "Service Tax (Amendment) Regulations 2025 (Amendment) Regulations 2025, P.U.(A) 201/2025"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/07/5-PUA-201.2025.pdf"
    publisher: "Cámara del Fiscal General (AGC)"
    date: "2025-06-30"
  - title: "Sales Tax (Total Sale Value of Taxable Goods) Order 2018"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Sales-Tax-Total-Sale-Value-Of-Taxable-Goods-Order-2018.pdf"
    publisher: "Cámara del Fiscal General (AGC)"
  - title: "Sales Tax (Exemption from Registration) Order 2018, P.U.(A) 208/2018"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Sales-Tax-Exemption-From-Registration-Order-2018.pdf"
    publisher: "Cámara del Fiscal General (AGC)"

entity: "SST registration threshold"
relations:
  - { rel: "administered-by", to: "rmcd" }
  - { rel: "governs", to: "service-tax-act-2018" }
  - { rel: "part-of", to: "sst-explained" }
  - { rel: "explained-in", to: "sst-rate-table" }
related: ["sst-explained", "sst-expansion-2025", "sst-rate-table", "sales-tax-explained", "sst-02-filing"]
keywords: ["umbral de registro SST", "umbral del impuesto de servicios Malasia", "RM500000 SST", "registro del impuesto de ventas Malasia", "registro MySST", "service tax threshold Malaysia"]
---

Casi toda guía responde a «¿cuál es el umbral de registro SST?» con RM500,000. Para
un bufete de abogados, es correcto. Para un hospital privado, un contratista, un
arrendador, una escuela o un restaurante, es incorrecto — y en dos de esos casos es
incorrecto en la dirección que le hace registrarse años tarde.

El umbral vive en la **columna (3) de la Primera Lista** de las Service Tax
Regulations 2018, grupo por grupo. No hay una cifra nacional.

## ¿Cuál es el umbral de cada grupo?

| Grupo | Servicios | Umbral |
| --- | --- | --- |
| A | Alojamiento | RM500,000 |
| B | Comida y bebida | RM1,500,000 |
| C | Clubes nocturnos, salas de baile, cabarés, centros de bienestar, salones de masaje, pubs y cervecerías | RM500,000 |
| D | Clubes privados | RM500,000 |
| E | Clubes de golf y campos de prácticas | RM500,000 |
| F | Apuestas y juego | RM500,000 |
| G | Profesionales | RM500,000 |
| H partida 1 | Tarjetas de crédito y de cargo | **Nulo** |
| H partidas 2–4 | Seguros y takaful, servicios financieros basados en tarifas, servicios financieros de Labuan | RM1,000,000 |
| I partidas 1–13 | Otros proveedores de servicios — publicidad, intermediación, empleo, seguridad, mensajería, estacionamiento, servicio de vehículos y otros | RM500,000 |
| I partidas 14–16 | Salud privada, medicina tradicional y complementaria, salud afín | RM1,500,000 |
| J | Servicios logísticos | RM500,000 |
| K | Arrendamiento o leasing | RM1,000,000 |
| L | Obras de construcción | RM1,500,000 |
| M | Educación | **Nulo** |

Dos de esos merecen una segunda mirada.

**Nulo no es una errata.** La educación del Grupo M y las tarjetas de crédito de la
partida 1 del Grupo H no tienen umbral alguno. Una escuela privada que cobra más de
RM60,000 por estudiante y año académico, o un banco que activa una sola tarjeta de
crédito, es responsable desde el primer suministro. La cifra de RM60,000 del Grupo
M es una *prueba de tarifa que define el servicio imponible* — no es un umbral de
registro, y leerla como tal es el error estándar en la orientación del sector
educativo.

**RM1,000,000 reemplazó a RM500,000 tarde.** El Grupo K y las partidas 2 a 4 del
Grupo H se publicaron en el boletín oficial a RM500,000 el 9 de junio de 2025 y se
modificaron a RM1,000,000 por P.U.(A) 201/2025 el 30 de junio de 2025 — un día
antes de la entrada en vigor. La orientación publicada en esa ventana de tres
semanas cita la cifra superada.

## ¿Cómo se mide el periodo de doce meses?

El artículo 12(2) de la Service Tax Act 2018 da dos pruebas, y usted es responsable
en **la que ocurra primero**:

- **La prueba histórica.** Al final de cualquier mes, cuando el valor total de todos
  sus servicios imponibles en ese mes y en los **once meses inmediatamente
  anteriores** ha superado el umbral prescrito.
- **La prueba prospectiva.** Al final de cualquier mes, cuando hay motivos razonables
  para creer que el total en ese mes y en los **once meses inmediatamente
  siguientes** superará el umbral.

Es una prueba móvil, no una prueba de ejercicio financiero. Se vuelve a ejecutar al
final de cada mes. Una empresa que revisa el volumen de negocio anualmente
descubrirá su obligación una media de seis meses tarde.

La prueba prospectiva es la que la gente olvida que existe. Firme un arrendamiento a
tres años de RM40,000 al mes y tiene motivos razonables para creer que superará
RM1,000,000 dentro de doce meses — la obligación surge de inmediato, no después de
haber ingresado efectivamente el dinero.

## La trampa: los ingresos exentos siguen contando

Este es el malentendido más costoso del régimen, y se deriva de cómo están
redactadas las desgravaciones.

Cada concesión de la ampliación de 2025 — la exención B2B, la desgravación de los
contratos no revisables, la exención del arrendatario MSME, la desgravación de grupo
sobre el arrendamiento, la exención para los ciudadanos malasios en la salud privada
— se concede en virtud del **artículo 34 de la Service Tax Act 2018**, y cada
Política del Impuesto de Servicios lo dice en su línea de apertura: el Ministro
*exime del pago del impuesto de servicios*.

Una exención del pago no retira el servicio de la Primera Lista. El suministro sigue
siendo un servicio imponible. Y el art. 12(2) mide **el valor total de todos sus
servicios imponibles** — no el valor sobre el que efectivamente se pagó impuesto.

Así que:

- Un hospital privado con RM900,000 de ingresos de pacientes extranjeros y
  RM4,000,000 de ingresos de pacientes malasios está por encima del umbral de
  RM1,500,000, aunque cobre impuesto sobre casi ninguno de ellos.
- Un arrendador cuyos arrendatarios son todos MSME registradas en MyPMK igualmente
  tiene que contar ese alquiler para RM1,000,000.
- Un contratista que trabaja enteramente bajo contratos no revisables anteriores a
  julio de 2025 igualmente cuenta ese trabajo para RM1,500,000.

La consecuencia práctica es que las empresas en estas situaciones deben registrarse,
presentar declaraciones SST-02 y declarar los suministros exentos — mientras
remiten poco o ningún impuesto. El registro y el pago son obligaciones distintas, y
solo la segunda queda desgravada.

## El Grupo G agrega; los demás grupos no

El Grupo G lleva una nota que los demás grupos no llevan. Una persona imponible del
Grupo G es responsable del registro una vez que el valor total de los servicios
imponibles, **ya sea combinado o por separado**, supera RM500,000 a través de **uno
o más** servicios cualesquiera del Grupo G.

Así que un bufete que presta servicios jurídicos por RM300,000 y consultoría por
RM250,000 cruza la línea en RM550,000, aunque ningún servicio por sí solo alcance
RM500,000.

Esa agregación no se extiende entre grupos. Una empresa con RM400,000 de honorarios
profesionales del Grupo G y RM800,000 de alquiler del Grupo K prueba RM400,000
frente a RM500,000 y RM800,000 frente a RM1,000,000 — y no se registra para
ninguno. Sin embargo, una vez registrado para cualquier grupo, usted cobra impuesto
sobre cada servicio imponible que preste.

## No puede dividir el negocio

El artículo 15 otorga al Director General la facultad de ordenar que dos o más
personas sean tratadas como una **sola persona imponible** cuando esté convencido de
que la separación de las actividades empresariales es artificial. El apartado (2)
dice que la prueba es hasta qué punto las personas están *estrechamente unidas entre
sí por vínculos financieros, económicos y organizativos*.

La orden puede especificar la fecha desde la que se considera que la sola persona
imponible desarrolla el negocio y la fecha desde la que debe estar registrada.
Dividir un grupo de restaurantes en empresas por local para quedar por debajo de
RM1,500,000 es el caso de libro de texto.

## Registrarse, y qué ocurre si va tarde

En virtud del art. 13(1) usted debe solicitar **a más tardar el último día del mes
siguiente** al mes en que pasó a ser responsable. Las solicitudes van por el portal
MySST.

El artículo 13(3) le registra entonces con efecto desde el **primer día del mes
siguiente** al mes en que solicitó — o una fecha anterior acordada, pero nunca
anterior a la fecha en que surgió la obligación.

Incumpla el plazo y se aplica el art. 13(4): el Director General le registra en la
fecha que determine, siempre que no sea anterior a la fecha en que pasó a ser
responsable. En la práctica eso significa fechado retroactivo. Entonces debe
impuesto sobre los suministros realizados desde esa fecha, se lo haya cobrado o no a
sus clientes — y el art. 13(5) convierte el incumplimiento en una infracción por
derecho propio.

El artículo 14 permite el **registro voluntario** para quienes están por debajo del
umbral. Ocasionalmente merece la pena por credibilidad ante los clientes
corporativos, pero en este régimen no hay crédito de impuesto soportado, de modo que
el registro voluntario añade coste y cumplimiento sin recuperar nada.

## El registro del impuesto de ventas es una prueba distinta

El registro del impuesto de ventas no tiene nada que ver con su posición en el
impuesto de servicios.

El umbral es **RM500,000**, fijado por la Sales Tax (Total Sale Value of Taxable
Goods) Order 2018, y no se cambió en 2025. Se aplica a los **fabricantes de bienes
imponibles en Malasia**, probado sobre el valor de venta de los bienes que usted
fabrica — no sobre el volumen de negocio total. Los fabricantes por subcontrata
prueban el valor del trabajo realizado. Los importadores no se registran: el
impuesto de ventas de importación se recauda en el despacho de aduanas.

El artículo 12(2) de la Sales Tax Act 2018 usa la misma estructura histórica y
prospectiva de doce meses.

Algunos fabricantes están exentos del registro sea cual sea su volumen de negocio en
virtud de la Sales Tax (Exemption from Registration) Order 2018 — incluidos el
hormigón premezclado, la preparación de comidas, el fotocopiado, el grabado, el
revelado de fotos y la incorporación de bienes a edificios.

## Errores comunes

- **Citar RM500,000 como la respuesta.** Es correcto para aproximadamente la mitad
  de los grupos y erróneo para el resto, incluidos los tres nuevos más grandes.
- **Leer RM60,000 como el umbral de educación.** El Grupo M tiene un umbral nulo;
  RM60,000 por estudiante define qué instituciones son imponibles bajo la partida 1.
- **Probar el volumen de negocio anualmente.** El art. 12(2) es una prueba mensual
  móvil.
- **Ignorar la prueba prospectiva.** Firmar un contrato grande puede crear la
  obligación antes de que llegue ningún dinero.
- **Excluir los ingresos exentos del cálculo del umbral.** La exención en virtud del
  art. 34 desgrava el pago, no el ámbito.
- **Agregar entre grupos.** Solo el Grupo G agrega internamente.
- **Suponer que el impuesto de ventas sigue al impuesto de servicios.** Dos leyes,
  dos umbrales, dos registros.

## Qué sigue

Identifique cada grupo que toca su ingreso, luego ejecute cada uno frente a su
propio umbral sobre una base móvil de doce meses con los ingresos exentos incluidos.
Si cruzó una línea en un mes pasado, averigüe la fecha en que surgió la obligación
antes de solicitar — esa fecha, no la fecha de solicitud, determina lo que debe.

Una vez registrado, la mecánica se traslada a los periodos imponibles, las
declaraciones SST-02 y el régimen de sanciones por pago tardío. Si compra servicios
a proveedores fuera de Malasia, compruebe también las reglas de los servicios
imponibles importados: se aplican esté o no registrado.

¿Quieres el panorama completo? Consulta [cómo funciona el SST en Malasia](/es/taxation/sst-explained/).
