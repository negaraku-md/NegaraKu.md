---
topicId: MY-TEC-0016
title: "Antes de introducir información de clientes en una herramienta de IA: una lista de verificación para las pymes de Malasia"
seoTitle: "Datos de clientes en IA: lista PDPA para pymes de Malasia"
slug: "before-putting-client-data-into-ai"
category: "technology"
subcategory: ["digital"]
summary: "Pegar los datos de un cliente en un chatbot o una herramienta de IA es rápido, y puede incumplir discretamente la Personal Data Protection Act 2010 de Malasia, un deber profesional de confidencialidad o un NDA. Usar la IA de otra persona no externaliza tu responsabilidad legal: sigues siendo el data controller. Esta lista de verificación, neutral respecto al proveedor, cubre los principios de la PDPA, la transferencia transfronteriza, los datos sensibles, los términos del proveedor que hay que leer y las salvaguardas que aplicar primero."
tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Antes de introducir la información personal de un cliente en una herramienta de IA de terceros, trátalo como una decisión de protección de datos, no como una cuestión de comodidad. Bajo la Personal Data Protection Act 2010 (PDPA, Act 709) de Malasia, introducir datos de clientes en una herramienta externa es 'procesamiento' y normalmente una divulgación o transferencia, y la empresa sigue siendo legalmente responsable como data controller aunque la herramienta pertenezca a otra persona. Así que sigues debiendo cumplir los siete principios de la PDPA (base lícita y notificación, no divulgar más allá de lo notificado, seguridad, no conservar los datos más de lo necesario, exactitud y atender las solicitudes de acceso). Cuatro cosas merecen una comprobación específica: si la herramienta almacena o procesa datos fuera de Malasia (una transferencia transfronteriza que debe cumplir una condición de la PDPA); si alguno de los datos es sensitive personal data (salud, religión, biométricos y similares), que requiere un tratamiento más estricto; qué dicen los propios términos del proveedor sobre el entrenamiento con tus entradas, la retención, la eliminación, los subencargados y la ubicación de los servidores; y si un deber profesional de confidencialidad o un NDA lo prohíbe de forma independiente. La opción más segura por defecto es minimizar y anonimizar primero los datos, usar un plan empresarial con términos adecuados e introducir solo lo que la tarea realmente necesita. Ten en cuenta que la PDPA fue modificada en 2024 con cambios (notificación de brechas, un deber de Data Protection Officer, portabilidad de datos y nuevas reglas transfronterizas) aplicados por fases a lo largo de 2025; confirma la situación actual en pdp.gov.my."
keyTakeaways:
  - "Usar la herramienta de IA de otra persona NO externaliza tu responsabilidad legal: bajo la Personal Data Protection Act 2010 (Act 709) tu empresa sigue siendo el data controller de los datos de clientes que introduces"
  - "Introducir datos personales de clientes en una herramienta de IA externa es 'procesamiento' y normalmente una divulgación/transferencia, por lo que los siete principios de la PDPA siguen aplicándose (base lícita + notificación, límites de divulgación, seguridad, retención, exactitud, acceso)"
  - "Comprobación transfronteriza: muchas herramientas de IA almacenan o procesan datos FUERA de Malasia; eso es una transferencia transfronteriza que debe cumplir una condición de la PDPA (p. ej. protección adecuada, consentimiento explícito, necesidad contractual o salvaguardas documentadas)"
  - "Los sensitive personal data (salud, religión, biométricos y similares) requieren un tratamiento más estricto: no los introduzcas en una herramienta de IA general sin consentimiento explícito y un análisis cuidadoso de los términos"
  - "Lee los PROPIOS términos del proveedor (no el marketing): ¿entrena con tus entradas? ¿cuánto tiempo las conserva, puedes eliminarlas? ¿quiénes son los subencargados y dónde están los servidores? ¿hay un plan empresarial con un data-processing agreement y una opción sin entrenamiento?"
  - "La PDPA no es el único deber: una obligación profesional de confidencialidad (p. ej. abogados, contables, médicos) o un NDA pueden prohibir de forma independiente introducir la información de un cliente en una herramienta externa"
appliesTo: "Pymes, profesionales y empleados de Malasia que estén considerando introducir datos personales de clientes en un chatbot o herramienta de IA, y cualquiera que necesite una lista de verificación clara para hacerlo dentro de la PDPA y sus deberes de confidencialidad."

faq:
  - q: "Si la herramienta de IA pertenece a otra empresa, ¿la protección de datos es problema suyo?"
    a: "No. Bajo la Personal Data Protection Act 2010, tu empresa es el data controller de los datos de clientes que decide procesar, y esa responsabilidad no se transfiere al proveedor de la herramienta solo porque la herramienta sea suya. El proveedor actúa como data processor en tu nombre; tú sigues debiendo cumplir los principios de la PDPA, incluido asegurarte de que el encargado ofrezca garantías de seguridad suficientes, y sigues siendo responsable de los datos. En resumen: usar la IA de otra persona no externaliza tu responsabilidad legal."
  - q: "¿Importa dónde estén los servidores de la herramienta de IA?"
    a: "Sí, y mucho. Muchas herramientas de IA almacenan o procesan datos en servidores fuera de Malasia, y enviar datos personales de clientes a ellos es una transferencia transfronteriza que la PDPA regula. Bajo las reglas introducidas por la modificación de 2024, dicha transferencia solo está permitida si se cumple al menos una condición: por ejemplo, que el destino ofrezca una protección adecuada o sustancialmente similar, que el interesado haya dado su consentimiento explícito, que la transferencia sea necesaria para un contrato, o que tengas salvaguardas documentadas en vigor. Comprueba dónde procesa los datos la herramienta y asegúrate de que se aplique una condición; confirma las condiciones actuales en pdp.gov.my."
  - q: "¿Puedo simplemente anonimizar los datos y pegarlos?"
    a: "Minimizar y anonimizar primero es exactamente el instinto correcto y la opción más segura por defecto: elimina nombres, números de documento de identidad, datos de contacto y números de cuenta, e introduce solo lo que la tarea realmente necesita. Pero ten cuidado: los datos que aún puedan identificar a alguien al combinarse con otra información pueden no ser verdaderamente anónimos, y los detalles parciales pueden reidentificar a una persona. Para cualquier cosa sensible, o cuando no puedas eliminar los identificadores, trátalo como datos personales y aplica la lista de verificación completa en lugar de suponer que la anonimización elimina la obligación."
  - q: "Firmé un NDA con mi cliente, ¿la lista de verificación de la PDPA también lo cubre?"
    a: "No; trátalos como barreras separadas que debes superar ambas. Incluso cuando se cumple la PDPA, una cláusula de confidencialidad, un NDA o un deber profesional de secreto (por ejemplo, para abogados bajo la Legal Profession Act 1976, contables bajo las normas del MIA, médicos bajo el código del Malaysian Medical Council, o instituciones financieras con licencia bajo la Financial Services Act 2013) pueden prohibir de forma independiente divulgar la información de un cliente a cualquier tercero, incluido un proveedor de IA, sin consentimiento. Comprueba tanto la posición de protección de datos como tus obligaciones de confidencialidad antes de introducir nada."

lang: "es"
translationStatus: "in-sync"
sourceContentHash: "9312aca05cc75d07"
masterLanguage: "en"

status: "published"
aiAssisted: true
reviewer: null
reviewed: "2026-11-17"
reviewDue: 2027-11-17
publishedBy: "ashton-tan"
revision: 0
revisions:
  - revision: 0
    date: 2026-11-17
    change: "Drafted and published."
    reviewer: null

verificationNeeded:
  - "The Personal Data Protection (Amendment) Act 2024 provisions (data breach notification, mandatory DPO appointment, data portability, and the revised cross-border transfer framework) were phased into force across 2025; exact in-force dates, the DPO-appointment thresholds (which come from a guideline, not the Act), any breach-notification timeframe, and penalty figures are time-sensitive — the article hedges these and directs readers to pdp.gov.my to confirm the current position. Do not state a specific DPO threshold, breach-notification deadline or penalty figure as settled fact without checking the current guideline/Act."
  - "Exact section numbers for the seven principles and for the new DPO/breach/portability/cross-border provisions shifted with the 2024 renumbering; the article cites the principles and duties by name rather than pinning section numbers."
  - "The specific confidentiality rule/section for each named profession should be confirmed against that profession's governing instrument before being cited chapter-and-verse."

updated: 2026-11-17
sources:
  - title: "Personal Data Protection Act 2010 (Act 709) y los siete Principios de Protección de Datos Personales"
    url: "https://www.pdp.gov.my/jpdpv2/"
    publisher: "Departamento de Protección de Datos Personales (JPDP), Ministerio Digital"
  - title: "Personal Data Protection (Amendment) Act 2024 — notificación de brechas, DPO, portabilidad de datos, transferencia transfronteriza"
    url: "https://www.pdp.gov.my/jpdpv2/"
    publisher: "Departamento de Protección de Datos Personales (JPDP)"
  - title: "Directriz sobre Transferencia Transfronteriza de Datos Personales (2025)"
    url: "https://www.pdp.gov.my/jpdpv2/"
    publisher: "Comisionado de Protección de Datos Personales"
  - title: "Data Protection Laws of the World — Malasia (resumen de la PDPA, datos sensibles, controller/processor)"
    url: "https://www.dlapiperdataprotection.com/index.html?t=law&c=MY"
    publisher: "DLA Piper"

entity: "Using AI tools with personal data under the PDPA (Malaysia)"
relations:
  - { rel: "related-to", to: "pdpa-compliance-malaysia" }
  - { rel: "related-to", to: "data-protection-officer-malaysia" }
  - { rel: "related-to", to: "data-breach-notification-malaysia" }
related: ["pdpa-compliance-malaysia", "data-protection-officer-malaysia", "data-breach-notification-malaysia"]
keywords: ["datos de clientes en herramienta de IA Malasia", "PDPA chatbot IA", "Personal Data Protection Act 2010 IA", "transferencia transfronteriza de datos Malasia", "confidencialidad NDA IA Malasia", "lista de verificación de datos de IA pyme", "data controller IA Malasia", "sensitive personal data IA", "Act 709 herramienta de IA"]
framework: decision
---

Pegar el correo de un cliente, su queja o un contrato lleno de nombres en un
chatbot y pedirle que lo resuma o responda lleva dos segundos. Esa comodidad es
exactamente el riesgo: en esos dos segundos una empresa puede divulgar datos
personales a un tercero incumpliendo la ley de protección de datos de Malasia,
romper un deber de confidencialidad que debe al cliente, o violar un NDA que
firmó, sin que nadie lo haya decidido.

El modelo mental útil es este: **usar la herramienta de IA de otra persona no
externaliza tu responsabilidad legal.** Bajo la **Personal Data Protection Act
2010 (PDPA, Act 709)**, tu empresa es el **data controller** de los datos de
clientes que elige procesar, y esa responsabilidad sigue siendo tuya aunque la
herramienta pertenezca a otra persona. Esta es una breve lista de verificación
para repasar antes de que los datos entren.

## 1. Sigues debiendo cumplir los siete principios de la PDPA

Introducir datos personales de clientes en una herramienta de IA externa es
**procesamiento** bajo la PDPA, y normalmente una **divulgación o transferencia**
al proveedor. Así que los **siete Principios de Protección de Datos Personales**
de la Ley siguen aplicándose. En términos sencillos, antes de introducir los
datos, pregúntate:

- **Base lícita y notificación** — ¿tienes consentimiento u otra base lícita, y tu
  aviso de privacidad informaba al cliente de que sus datos podrían ser procesados
  por herramientas o proveedores de terceros?
- **Divulgación** — enviar datos a un proveedor de IA es una divulgación; ¿está
  dentro de los fines y destinatarios que notificaste?
- **Seguridad** — ¿es la herramienta lo bastante segura, y hay un acuerdo por
  escrito para que el proveedor (tu encargado) ofrezca garantías de seguridad
  suficientes?
- **Retención** — ¿conserva la herramienta tus entradas, durante cuánto tiempo, y
  puedes eliminarlas? No dejes que los datos persistan más de lo necesario.
- **Integridad de los datos** — la salida de la IA puede ser errónea o inventada;
  sigues siendo responsable de la exactitud de cualquier dato personal en el que te
  bases.
- **Acceso** — debes seguir pudiendo localizar, recuperar y corregir los datos de
  un cliente cuando lo solicite, lo cual es difícil si están dispersos dentro de
  sistemas opacos de terceros.

## 2. Comprueba a dónde van los datos: transferencia transfronteriza

Muchas herramientas de IA **almacenan o procesan datos en servidores fuera de
Malasia.** Introducir datos personales de clientes en una herramienta así es una
**transferencia transfronteriza**, que la PDPA regula. Bajo el marco introducido
por la modificación de 2024, una transferencia al extranjero solo está permitida
si se cumple **al menos una condición** — por ejemplo, que el destino ofrezca
**protección adecuada o sustancialmente similar**, que el interesado haya dado su
**consentimiento explícito**, que la transferencia sea **necesaria para un
contrato**, o que tengas **salvaguardas documentadas** como cláusulas
contractuales.

Así que averigua **dónde procesa los datos la herramienta** y asegúrate de que se
aplique una condición; no supongas que el consentimiento por sí solo siempre lo
cubre. Las condiciones exactas figuran en la directriz de transferencia
transfronteriza del Comisionado; confirma la situación actual en **pdp.gov.my**.

## 3. ¿Alguno de ellos es sensitive personal data?

La PDPA trata los **sensitive personal data** — incluidos la salud, las creencias
religiosas o de otro tipo, las opiniones políticas, los delitos y (desde la
modificación de 2024) los **datos biométricos** — con más rigor, exigiendo
generalmente **consentimiento explícito** entre motivos más estrechos. **No**
introduzcas historiales médicos, información religiosa, datos biométricos o
similares en una herramienta de IA general sin consentimiento explícito y una
lectura cuidadosa de los términos de la herramienta. El listón es más alto aquí, y
el daño de una fuga es mayor.

## 4. Lee los propios términos del proveedor, no el marketing

Si una herramienta es segura para usarla con datos de clientes lo responden sus
**Términos del Servicio, su Política de Privacidad y cualquier Data Processing
Addendum**, no su página de inicio. Las preguntas duraderas que hay que hacerle a
**cualquier** herramienta:

- **Entrenamiento:** ¿usa el proveedor tus entradas para **entrenar o mejorar sus
  modelos**, y hay una opción de exclusión o un plan en el que el entrenamiento
  esté desactivado por defecto?
- **Retención y eliminación:** ¿cuánto tiempo se conservan las entradas y las
  salidas, y puedes eliminarlas (y sus copias)?
- **Subencargados y ubicación:** ¿quiénes son los subencargados, y en **qué
  países** están los servidores? (de vuelta a la comprobación transfronteriza.)
- **Plan empresarial:** ¿hay un **plan empresarial o de empresa con un
  data-processing agreement**, confidencialidad contractual y un compromiso de no
  entrenamiento? Los planes gratuitos y de consumidor a menudo carecen de ellos.
- **Seguridad y brechas:** cifrado, controles de acceso, estándares de seguridad
  reconocidos y un compromiso de **notificarte una brecha** a tiempo para cumplir
  tus propias obligaciones.

## 5. La PDPA no es el único deber: confidencialidad y NDA

Incluso cuando se cumple la PDPA, un deber aparte puede seguir prohibiendo
introducir los datos. Muchos profesionales deben **obligaciones de
confidencialidad independientes de, y a menudo más estrictas que, la PDPA** — por
ejemplo, los abogados bajo la **Legal Profession Act 1976**, los contables bajo las
normas del **Malaysian Institute of Accountants (MIA)**, los médicos bajo el
código del **Malaysian Medical Council**, y las instituciones financieras con
licencia bajo la **Financial Services Act 2013**. Y una **cláusula de
confidencialidad o un NDA** en tu contrato con el cliente puede prohibir de forma
independiente divulgar su información a cualquier tercero, incluido un proveedor de
IA, sin consentimiento. **Comprueba ambas cosas**: la posición de protección de
datos y tus obligaciones de confidencialidad.

## La opción segura por defecto

En caso de duda, haz menos:

- **Minimiza y anonimiza primero** — elimina nombres, números de documento de
  identidad, datos de contacto y de cuenta, e introduce solo lo que la tarea
  realmente necesita.
- **Usa un plan empresarial** con un data-processing agreement, términos sin
  entrenamiento y retención definida cuando haya datos de clientes de por medio.
- **Actualiza tu aviso u obtén consentimiento** cuando el procesamiento por
  terceros no esté ya cubierto.
- **Lleva un registro** — qué herramienta, qué datos, qué base, qué salvaguardas —
  para poder demostrar rendición de cuentas y responder a una solicitud de acceso.
- **Redacta una breve política interna de uso de IA** que indique al personal qué
  puede y qué no puede introducirse en herramientas de IA, qué herramientas están
  aprobadas y las reglas de anonimización.

## Una nota sobre la modificación de 2024

La PDPA fue modificada en **2024**, con cambios aplicados por fases a lo largo de
**2025**: **notificación obligatoria de brechas de datos**, un deber de nombrar un
**Data Protection Officer (DPO)** para el procesamiento a mayor escala, un derecho
de **portabilidad de datos**, y el **nuevo marco de transferencia transfronteriza**
anterior. Las fechas exactas de entrada en vigor, los umbrales del DPO y cualquier
cifra de sanción están cambiando y se fijan en parte mediante directrices en lugar
de la propia Ley; así que trata la forma de los deberes como duradera, y **confirma
el detalle actual en pdp.gov.my** antes de basarte en una cifra o un plazo
concretos.

## Qué sigue

- Lee el [resumen general de cumplimiento de la PDPA](/es/business/pdpa-compliance-malaysia)
  para conocer las obligaciones de la Ley en su totalidad.
- Comprueba si tu organización necesita un
  [Data Protection Officer](/es/business/data-protection-officer-malaysia) y qué
  implica el deber de [notificación de brechas de datos](/es/business/data-breach-notification-malaysia).
- Confirma el estado actual de la modificación, las directrices y las condiciones
  transfronterizas en el portal oficial, **pdp.gov.my**, antes de introducir datos
  de clientes en cualquier herramienta nueva.
