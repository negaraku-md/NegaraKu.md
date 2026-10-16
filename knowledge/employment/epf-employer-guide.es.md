---
topicId: MY-EMP-0005
title: "EPF para empleadores: por qué la Third Schedule es una tabla, no un porcentaje"
seoTitle: "Guía EPF para empleadores Malasia: tarifas de la Third Schedule"
slug: "epf-employer-guide"
category: "employment"
subcategory: ["payroll-statutory"]
summary: "Cómo calcular y remitir correctamente el EPF — incluida la regla de que la aritmética de porcentajes no está permitida por debajo de RM20,000 en salarios mensuales."

tier: "2"
mode: "practical"
contentType: "guide"

answer: "Los empleadores deben cotizar al EPF a las tarifas de la Third Schedule de la EPF Act 1991. Para salarios mensuales de hasta RM20,000, esas tarifas son importes fijos en ringgit que se leen de una tabla por bandas, y el EPF establece que a los empleadores no se les permite calcular las cuotas como un porcentaje exacto. Solo por encima de RM20,000 se aplican porcentajes. Qué Parte de la Schedule se aplica depende de la ciudadanía, el estatus de residencia y la edad del empleado. Las cotizaciones vencen el día 15 del mes siguiente."
keyTakeaways:
  - "Por debajo de RM20,000 en salarios mensuales, la Third Schedule da importes fijos en ringgit — calcular un porcentaje está expresamente prohibido y produce una cotización insuficiente"
  - "La Parte A se aplica a ciudadanos malasios y residentes permanentes menores de 60 años: empleador 13 por ciento hasta RM5,000 de salario, 12 por ciento por encima"
  - "La Parte E cubre a los ciudadanos malasios de 60 años o más — empleador 4 por ciento, empleado nada"
  - "La Parte F, nueva desde el mes salarial de octubre de 2025, cubre a los ciudadanos no malasios al 2 por ciento por cada lado, sin bandas salariales"
  - "Las Partes B y D, el antiguo régimen electivo para no ciudadanos con su cotización patronal fija de RM5, fueron eliminadas por la Act A1760/2025"
  - "Las cotizaciones se pagan en ringgit enteros antes del día 15 del mes siguiente al mes salarial"
appliesTo: "Empleadores, administradores de nóminas y cualquiera que configure la lógica del EPF en un sistema de nóminas."

faq:
  - q: "¿Por qué la aritmética de porcentajes da la cifra equivocada del EPF?"
    a: "Porque los importes de la Third Schedule se fijan sobre el tope de cada banda salarial, no sobre el salario real del empleado. Las bandas tienen RM20 de ancho hasta RM5,000 y RM100 de ancho desde ahí hasta RM20,000, de modo que un empleado situado en cualquier punto por debajo del tope de su banda genera una cotización ligeramente superior a un porcentaje directo de su salario. El propio ejemplo del EPF muestra que RM3,250 genera RM424 y RM359 según la tabla, frente a RM423 y RM358 por porcentaje."
  - q: "¿Cuándo pasa la tarifa patronal del 13 por ciento al 12 por ciento?"
    a: "En RM5,000 de salario mensual. Bajo la Parte A, los salarios de RM5,000 o menos generan una cuota patronal equivalente al 13 por ciento y una cuota del empleado del 11 por ciento; por encima de RM5,000 la cuota patronal baja al 12 por ciento mientras la del empleado se mantiene en el 11 por ciento. Ambas siguen expresándose como importes fijos de tabla hasta que el salario supera RM20,000."
  - q: "¿Qué tarifa se aplica a los empleados de 60 años o más?"
    a: "Depende de la ciudadanía. Los ciudadanos malasios de 60 años o más caen bajo la Parte E: empleador 4 por ciento, empleado nada. Los residentes permanentes y los no ciudadanos que optaron por cotizar antes del 1 de agosto de 1998 caen bajo la Parte C: empleador 6.5 por ciento sobre salarios de hasta RM5,000 y 6 por ciento por encima, empleado 5.5 por ciento. Los no ciudadanos registrados a partir del 1 de agosto de 1998 permanecen en el 2 por ciento bajo la Parte F, con independencia de la edad."
  - q: "¿Cómo manejo los salarios superiores a RM20,000?"
    a: "Este es el único caso en el que se calculan porcentajes directamente. Bajo la Parte A, el empleado cotiza el 11 por ciento y el empleador el 12 por ciento del salario real del mes. La cotización total, con céntimos incluidos, se redondea entonces hacia arriba al siguiente ringgit — el ejemplo del EPF lleva RM21,250 a un total de RM4,887.50 y lo redondea a RM4,888."
  - q: "¿Cuáles son los límites de edad para cotizar al EPF?"
    a: "La edad mínima para registrarse y cotizar como miembro del EPF es 14. La edad máxima de cotización es 75. Para los empleados ciudadanos no malasios se aplica el mismo límite superior — deben tener menos de 75 años para ser registrados y cotizados."

verificationNeeded:
  - "Confirm the current EPF late-payment charge or dividend-equivalent penalty rate against KWSP directly — not stated on the pages reviewed"
  - "Confirm the precise statutory definition of wages for EPF purposes, and the treatment of specific allowances and bonuses, against the EPF Act 1991 s.2 definition and current KWSP guidance"

obligations:
  - what: "Remit EPF contributions for the wage month"
    trigger: "ongoing"
    due: "on or before the 15th day of the month following the wage month"
    authority: "KWSP"
    statute: "EPF Act 1991, s.43(1) and Third Schedule"
    consequence: "Late-payment charges and enforcement action"
  - what: "Register as an employer with the EPF"
    trigger: "change"
    due: "on engaging a person under a contract of service or apprenticeship"
    authority: "KWSP"
    statute: "EPF Act 1991"
  - what: "Register a non-Malaysian citizen employee for EPF"
    trigger: "change"
    due: "on engagement, with contributions due from the October 2025 wage month onward"
    authority: "KWSP"
    statute: "EPF Act 1991, Third Schedule Part F"

lang: "es"
masterLanguage: "en"
translationStatus: "pending"

status: "draft"
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
  - title: "Cotización obligatoria del empleador (Employer Mandatory Contribution)"
    url: "https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution"
    publisher: "Fondo de Previsión de los Empleados (KWSP)"
  - title: "Third Schedule de la EPF Act 1991 (EPF Act 1991 Third Schedule)"
    url: "https://www.kwsp.gov.my/en/epf-act-1991-third-schedule"
    publisher: "Fondo de Previsión de los Empleados (KWSP)"
    date: "2026-05-26"
  - title: "Third Schedule en vigor desde el 1 de octubre de 2025 (Third Schedule effective 1 October 2025)"
    url: "https://www.kwsp.gov.my/documents/d/guest/third_schedule_from_-1-october-2025"
    publisher: "Fondo de Previsión de los Empleados (KWSP)"
  - title: "Cotización para empleados ciudadanos no malasios (Contribution For Non-Malaysian Citizen Employees)"
    url: "https://www.kwsp.gov.my/en/employer/responsibilities/non-malaysian-citizen-employees"
    publisher: "Fondo de Previsión de los Empleados (KWSP)"

entity: "EPF employer contributions"
relations:
  - { rel: "administered-by", to: "epf" }
  - { rel: "governs", to: "employees-provident-fund-act-1991" }
  - { rel: "part-of", to: "payroll-compliance-malaysia" }
  - { rel: "explained-in", to: "epf-foreign-workers-malaysia" }
related: ["payroll-compliance-malaysia", "epf-foreign-workers-malaysia", "socso-eis-employer-guide"]
keywords: ["tarifa cotización EPF Malasia", "EPF Third Schedule", "cotización empleador KWSP", "EPF 13 por ciento 12 por ciento", "caruman KWSP majikan"]
---

Pregunte a un administrador de nóminas malasio cuál es la tarifa patronal del EPF y le dirá 13 por ciento. Pídale que calcule la cotización sobre un salario de RM3,250 y la mayoría multiplicará. Esa multiplicación no está permitida, y da el número equivocado.

La instrucción del EPF está enunciada con claridad en su propia página para empleadores: a los empleadores **no se les permite** calcular la cuota del empleador y del empleado sobre la base de un porcentaje exacto, salvo para salarios que superen RM20,000. Todo lo que queda por debajo de esa cifra sale de una tabla.

Esto es lo más trascendente que un empleador puede equivocar sobre el EPF, y está enterrado u omitido en la mayor parte de la orientación publicada — que tiende a abrir con un pulcro recuadro de tarifas 13/11 y nunca menciona la Schedule en absoluto.

## ¿Por qué la tabla da una respuesta distinta del porcentaje?

Porque la Third Schedule fija las cotizaciones por **banda salarial**, y el importe de cada banda se fija sobre el tope de la banda, no sobre el salario real del empleado.

Las bandas tienen RM20 de ancho desde cero hasta RM5,000, y luego RM100 de ancho desde RM5,000 hasta RM20,000. Un empleado que gane en cualquier punto por debajo del tope de su banda genera, por tanto, algo más que un porcentaje directo de su propio salario.

El EPF publica la comparación por sí mismo. Para un ciudadano malasio menor de 60 años que gana RM3,250 al mes:

| Enfoque | Empleador | Empleado | Total |
| --- | --- | --- | --- |
| Correcto — Third Schedule Parte A | RM424 | RM359 | RM783 |
| Incorrecto — aritmética de porcentajes | RM423 | RM358 | RM781 |

Dos ringgit. Por empleado. Por mes. Parece trivial hasta que se advierte que no es una preferencia de redondeo sino una infracción del art. 43(1), repetida en cada empleado y cada mes salarial, y que se acumula a medida que suben los salarios. Sobre salarios de RM6,710.80 la Schedule da RM816 y RM748 —RM1,564 en total— donde los porcentajes dan RM1,543.49, una diferencia de más de RM20.

La consecuencia práctica: si su sistema de nóminas está configurado con una regla de porcentaje en lugar de la tabla de la Schedule, está produciendo cotizaciones insuficientes en prácticamente todos los empleados por debajo de RM20,000.

## ¿Qué Parte de la Third Schedule se aplica?

La Schedule está dividida en Partes según la ciudadanía, el estatus de residencia y la edad. Si se equivoca de Parte, la tarifa estará mal por mucho cuidado que ponga al leer la tabla.

| Empleado | Menor de 60 | 60 años o más |
| --- | --- | --- |
| Ciudadano malasio | **Parte A** — empleador 13 por ciento hasta RM5,000 de salario, 12 por ciento por encima; empleado 11 por ciento | **Parte E** — empleador 4 por ciento; empleado nada |
| Residente permanente, o no ciudadano que optó antes del 1 de agosto de 1998 | **Parte A** — como arriba | **Parte C** — empleador 6.5 por ciento hasta RM5,000, 6 por ciento por encima; empleado 5.5 por ciento |
| No ciudadano registrado a partir del 1 de agosto de 1998 | **Parte F** — empleador 2 por ciento, empleado 2 por ciento | **Parte F** — empleador 2 por ciento, empleado 2 por ciento |

Dos puntos estructurales que hacen tropezar.

**El escalón del 13 al 12 por ciento ocurre en RM5,000, no en RM20,000.** Bajo la Parte A, la cuota patronal equivale al 13 por ciento sobre salarios mensuales de RM5,000 o menos y al 12 por ciento por encima, mientras que la cuota del empleado se mantiene en el 11 por ciento en todo momento. La Schedule lo expresa como una discontinuidad visible: la banda que termina en RM5,000 lleva un importe patronal de RM650, y la banda siguiente —RM5,000.01 a RM5,100— lleva RM612. La cotización patronal *baja* a medida que el salario cruza RM5,000.

**RM20,000 es donde cambia el método, no la tarifa.** Por encima de RM20,000 se deja de leer la tabla y se empieza a calcular: 12 por ciento empleador, 11 por ciento empleado, sobre el salario real. La Parte A dispone que la cotización total, con céntimos incluidos, se redondee hacia arriba al siguiente ringgit. El ejemplo del EPF: un salario de RM21,250 da RM2,550 y RM2,337.50, con un total de RM4,887.50, que se remite como RM4,888.

La misma regla de redondeo hacia arriba se aplica a la Parte C por encima de RM20,000 al 6 y 5.5 por ciento, y a la Parte E al 4 por ciento patronal con cuota nula del empleado.

### Las Partes B y D ya no existen

Si está trabajando con una schedule más antigua, tenga en cuenta que **las Partes B y D fueron eliminadas por la Act A1760/2025**. Contenían el antiguo régimen electivo para no ciudadanos registrados a partir del 1 de agosto de 1998, bajo el cual el empleado cotizaba un porcentaje y el empleador pagaba una suma fija de RM5 al mes con independencia del salario.

Esa cifra de RM5 todavía aparece en gran parte de la orientación publicada y en sistemas de nóminas que no se han actualizado. Ha desaparecido. Los no ciudadanos ahora quedan bajo la Parte F al 2 por ciento por cada lado, de forma obligatoria y no electiva, desde el mes salarial de octubre de 2025. Véase [EPF para trabajadores extranjeros](/en/employment/epf-foreign-workers-malaysia).

Por separado, la Parte C(a) —que antes cubría a los ciudadanos malasios de 60 años o más— fue eliminada por la P.U. (A) 370/2018, y esa población pasó a la Parte E. Una guía que sitúe a los ciudadanos malasios mayores de 60 en el 6.5 por ciento está leyendo una schedule que lleva ocho años desactualizada.

## ¿Cómo se remite en la práctica?

Las cotizaciones de un mes salarial vencen **el día 15 del mes siguiente o antes**. Los salarios de enero corresponden al mes de cotización de febrero, pagadero antes del 15 de febrero.

El empleador paga ambas cuotas al EPF y puede deducir la cuota del empleado del salario. Las cotizaciones deben pagarse en denominaciones de ringgit sin ningún valor en céntimos.

La presentación se realiza a través de i-Akaun (Employer), la facilidad e-Payroll o la aplicación i-Akaun (Employer).

### Límites de edad

La edad mínima para registrarse y cotizar como miembro del EPF es **14**. La edad máxima de cotización es **75**. Entre los 60 y los 75, las cotizaciones continúan pero a las tarifas reducidas de la Parte C o la Parte E; por encima de los 75, la obligación cesa.

## Ejemplos resueltos del propio EPF

Estas son las ilustraciones publicadas por el EPF, reproducidas porque son la demostración más limpia disponible de que la tabla y el porcentaje no coinciden.

| Escenario | Salario | Correcto (tabla) | Por porcentaje |
| --- | --- | --- | --- |
| Ciudadano malasio, menor de 60, Parte A | RM3,250 | RM424 + RM359 = RM783 | RM781 |
| Ciudadano malasio, menor de 60, Parte A | RM6,710.80 | RM816 + RM748 = RM1,564 | RM1,543.49 |
| Ciudadano malasio, 60+, Parte E | RM3,250 | RM131 + RM0 = RM131 | RM130 |
| Residente permanente, 60+, Parte C | RM3,250 | RM212 + RM180 = RM392 | RM390 |
| Ciudadano malasio, menor de 60, Parte A | RM21,250 | 12% + 11%, redondeado hacia arriba = RM4,888 | (aquí el porcentaje es correcto) |

El patrón se mantiene en todas las Partes: por debajo de RM20,000 gana la tabla; por encima, el porcentaje es la ley.

## Errores comunes

**Configurar la nómina con una regla de porcentaje.** El error más caro y más común. Una regla del 13 por ciento cotiza de menos en casi todos los salarios por debajo de RM20,000. Pruebe su sistema con tres salarios de muestra antes de confiar en él.

**Aplicar el escalón de RM5,000 a la cuota del empleado.** Solo se aplica a la cuota patronal, que pasa del 13 al 12 por ciento. La cuota del empleado es del 11 por ciento a ambos lados de la línea.

**Seguir usando la cotización patronal fija de RM5 para los trabajadores extranjeros.** Eliminada junto con las Partes B y D por la Act A1760/2025. La cifra ahora es del 2 por ciento, por ambos lados.

**Poner a los ciudadanos malasios de 60 años o más en la Parte C.** Pasaron a la Parte E en 2018. La Parte E es del 4 por ciento patronal y nula para el empleado — un número materialmente distinto.

**Redondear hacia abajo o remitir céntimos.** Las cotizaciones se pagan en ringgit enteros, y cuando se aplica el método del porcentaje el total se redondea **hacia arriba** al siguiente ringgit.

**Suponer que la Third Schedule es estable.** El EPF mantiene un archivo fechado de schedules precisamente porque los empleadores que liquidan cotizaciones atrasadas deben aplicar la schedule vigente para ese mes salarial, no la actual. Si está regularizando atrasos, extraiga la schedule del periodo de vigencia correcto.

## Qué sigue

Compruebe la salida de su nómina frente a la Third Schedule para un salario bajo, uno medio y uno alto — por debajo de RM5,000, entre RM5,000 y RM20,000, y por encima de RM20,000. Esas tres pruebas ejercitan toda la mecánica de esta página.

Si emplea a no ciudadanos, lea a continuación [EPF para trabajadores extranjeros](/en/employment/epf-foreign-workers-malaysia), porque la Parte F es lo bastante nueva como para que la mayoría de los sistemas aún no la implementen. Para las otras cuatro corrientes mensuales que comparten el mismo plazo del día 15, consulte el [calendario de cumplimiento de nóminas](/en/employment/payroll-compliance-malaysia).
