---
topicId: MY-TEC-0017
title: "Un empleado se va: cómo transferir el correo, los archivos, los sistemas y los grupos de WhatsApp de clientes"
seoTitle: "Traspaso al salir un empleado: correo, archivos, WhatsApp"
slug: "when-an-employee-leaves-operational-handover"
category: "technology"
subcategory: ["operations"]
summary: "El lado estatutario de una salida lo mantiene en regla; el lado operativo mantiene el negocio en marcha y los datos de los clientes bajo control una vez que la persona se ha ido. Este manual cubre el traspaso que los trámites no abarcan: correo y archivos, acceso a sistemas y a SaaS, contraseñas compartidas, dispositivos y el más difícil de todos: los grupos de WhatsApp de clientes que viven en un teléfono personal. Los dos riesgos que hay que cerrar son el acceso persistente y los activos huérfanos, y el problema del WhatsApp de clientes se resuelve mejor antes de que alguien se vaya."
tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Cuando un empleado deja una pequeña empresa de Malasia, hay dos tareas distintas. La estatutaria —cese ante el EPF, SOCSO y EIS, notificaciones a LHDN, el pago final, cancelación del Employment Pass— se cubre en nuestra lista de verificación estatutaria de salida. Esta guía es el gemelo operativo: el traspaso del correo, los archivos, el acceso a sistemas y a SaaS, las credenciales, los dispositivos y los canales de comunicación con clientes, además de la transferencia de conocimiento. Dos riesgos duraderos lo impulsan: el acceso persistente (un antiguo insider que todavía puede entrar) y los activos huérfanos (registros, archivos y relaciones con clientes que se van por la puerta). Los movimientos esenciales: planifique antes del último día y revoque el acceso con prontitud en cada lugar al que la persona pudiera entrar, no solo su inicio de sesión principal; para el correo, conserve el buzón pero quítele el acceso a la persona, deléguelo en un responsable y configure una respuesta automática antes de borrar nada; para los archivos, reasigne la propiedad al negocio antes de que se elimine la cuenta, porque borrar primero puede dejarlos huérfanos; haga un inventario de cada sistema y cuenta SaaS, desaprovisiónelos uno a uno y, fundamentalmente, rote cualquier contraseña compartida que la persona conociera; recupere los dispositivos de la empresa y elimine los datos de la empresa y de los clientes de los dispositivos personales. La parte más difícil es la comunicación con clientes: las conversaciones de negocio suelen vivir en WhatsApp en el número personal de un empleado, de modo que el canal —y los datos personales de los clientes— puede irse con él. La única solución fiable se prepara con antelación: números propiedad de la empresa, una cuenta de WhatsApp de nivel empresarial con más de un administrador y el contacto con clientes encauzado por canales de la empresa. En todo momento, recuerde que el negocio sigue siendo responsable bajo la PDPA (Ley de Protección de Datos Personales de 2010) de los datos personales de los clientes aunque estén en el buzón, el teléfono o el grupo de WhatsApp de quien se marcha, así que gestione su transferencia y eliminación en lugar de dejarlos atrás. Esto es orientación general, no asesoramiento legal: confirme los detalles en pdp.gov.my y con su propio asesor."
keyTakeaways:
  - "Este es el lado OPERATIVO de una salida (correo, archivos, acceso, dispositivos, canales de clientes, conocimiento) — el lado estatutario (EPF/SOCSO/EIS, LHDN, pago final, Employment Pass) es una lista de verificación aparte que hay que enlazar, no repetir"
  - "Dos riesgos que cerrar: el acceso persistente (alguien que todavía puede entrar) y los activos huérfanos (registros, archivos y relaciones con clientes que se van con la persona) — planifique antes del último día y revoque el acceso en CADA lugar al que pudiera llegar, no solo el inicio de sesión principal"
  - "Correo: conserve el buzón, quítele el acceso a la persona, deléguelo en un responsable y configure una respuesta automática/reenvío, y preserve o exporte el buzón antes de cualquier eliminación — los buzones por lo general no pueden reasignarse como los archivos, así que delegue en lugar de 'cambiar de propietario'"
  - "Archivos: reasigne la propiedad al negocio o al sucesor ANTES de eliminar la cuenta (borrar primero puede dejar los archivos huérfanos); guarde el trabajo de la empresa en almacenamiento propiedad de la empresa, no en cuentas personales, y extraiga del dispositivo los archivos que solo existen en local antes de borrarlo"
  - "Sistemas: trabaje a partir de un inventario de cada cuenta y herramienta SaaS, desaprovisione cada una, quite a la persona del SSO (inicio de sesión único) y recoja los accesos de MFA (autenticación multifactor)/edificio/VPN — y ROTE cualquier contraseña compartida que la persona conociera, ya que revocar su propio inicio de sesión no sirve de nada si el secreto se reutiliza y sigue en su memoria"
  - "Los grupos de WhatsApp de clientes son el riesgo más agudo porque el canal está atado a un número personal y se va con el empleado — la solución fiable se prepara con antelación (números propiedad de la empresa, WhatsApp de nivel empresarial con más de un administrador, contacto con clientes por canales de la empresa); bajo la PDPA el negocio sigue siendo responsable de los datos personales de los clientes dondequiera que estén"
appliesTo: "Dueños y responsables de pequeñas empresas de Malasia que gestionan el lado informático y operativo de la salida de un empleado — el traspaso del correo, los archivos, los sistemas, los dispositivos y los canales de comunicación con clientes. Es un manual operativo general, no el proceso estatutario de salida, y no es asesoramiento legal ni de respuesta a incidentes de seguridad informática."

faq:
  - q: "¿No es lo mismo que los pasos de salida del EPF/SOCSO/impuestos?"
    a: "No — es la mitad complementaria. La salida estatutaria (cese ante el EPF, SOCSO y EIS, notificaciones a LHDN como el CP21/CP22A, salario final y cancelación del Employment Pass para un trabajador extranjero) lo mantiene en regla con los reguladores, y la cubrimos aparte. Esta guía es el traspaso operativo que el proceso estatutario no toca: correo, archivos, acceso a sistemas y a SaaS, credenciales compartidas, dispositivos y canales de comunicación con clientes, además de la transferencia de conocimiento. Una salida puede ser perfectamente limpia en los trámites estatutarios y aun así dejar al negocio bloqueado fuera de un buzón, incapaz de encontrar archivos guardados en la nube personal de alguien, expuesto por contraseñas que quien se fue todavía conoce, o desconectado de clientes que solo trataron con una persona en el teléfono de esa persona. Haga ambas vías, activadas por la misma fecha de salida confirmada."
  - q: "¿Qué debo hacer con el correo y los archivos de quien se va?"
    a: "Trate el correo y los archivos como dos problemas distintos. Para el correo, la regla es conservar la cuenta, quitar a la persona: corte su inicio de sesión, delegue o convierta el buzón para que un responsable pueda seguir atendiendo a los clientes, configure una respuesta automática y un reenvío, y preserve o exporte el buzón para sus registros antes de suspenderlo o eliminarlo. Eliminar un buzón sin más destruye registros del negocio y rompe los hilos con clientes, y los buzones por lo general no pueden 'reasignarse' como los archivos — así que delegue en lugar de transferir. Para los archivos, haga lo contrario: reasigne la propiedad de los archivos y las unidades de la persona al negocio o a un sucesor antes de que se elimine la cuenta, porque los archivos que pertenecen a una cuenta eliminada pueden perderse o quedar huérfanos. Y asegúrese de que el trabajo de la empresa viva realmente en almacenamiento propiedad de la empresa, no en una unidad personal ni en carpetas solo locales — barra en busca de copias sueltas y extraiga del portátil cualquier cosa local antes de borrarlo. Use la consola de administración de su proveedor para todo esto; los menús exactos cambian."
  - q: "¿Cómo gestiono las contraseñas y el acceso a los sistemas?"
    a: "Empiece por un inventario, porque solo puede revocar lo que puede ver — enumere cada cuenta, aplicación y sistema al que la persona pudiera llegar, incluidas las herramientas SaaS 'en la sombra' contratadas sin que nadie lo supiera. Luego desaprovisione cada inicio de sesión (deshabilite o elimine al usuario, no deje simplemente de usar la herramienta), quite a la persona del inicio de sesión único (SSO) y verifique que efectivamente llegó a cada aplicación conectada, revoque cualquier clave de API, token o integración ligados a ella, recoja o dé de baja sus dispositivos de MFA (autenticación multifactor) y retire las tarjetas de acceso al edificio, los códigos de puerta y el acceso por VPN o remoto. El paso que más se olvida es ROTAR las contraseñas compartidas — cualquier administración del Wi-Fi, inicio de sesión de herramienta compartido, contraseña de las redes sociales de la empresa o similares que la persona conociera — porque revocar su inicio de sesión personal no sirve de nada si el secreto real se reutiliza en otro sitio y sigue en su memoria. Donde pueda, confirme cada revocación en la vista de administración en lugar de suponer que el clic funcionó. En un despido, una salida hostil o cualquiera con acceso de administrador, hágalo de inmediato; en una renuncia amistosa puede sincronizarlo con un traspaso planificado."
  - q: "Nuestros clientes están en grupos de WhatsApp en el teléfono personal del empleado — ¿cómo los conservamos?"
    a: "Este es el problema más difícil, y la respuesta honesta es que es mucho más fácil prevenirlo que arreglarlo. Una cuenta de WhatsApp sigue a la SIM y al número con el que está registrada, así que si sus conversaciones con clientes viven en el número personal de un empleado, el canal, el historial de chat y a menudo la relación con el cliente se van con él — y esas conversaciones también contienen datos personales de los clientes en un dispositivo que usted no controla, lo cual bajo la PDPA sigue siendo responsabilidad del negocio. La solución fiable se prepara con antelación: use números de cara al cliente que pertenezcan a la empresa (una SIM o línea de la empresa), opere una configuración de nivel empresarial (WhatsApp Business o la WhatsApp Business Platform) con la cuenta registrada a un correo de la empresa y más de un administrador de confianza, encauce las conversaciones por una bandeja de entrada compartida para que el historial no quede atrapado en un solo teléfono, y establezca como política que el contacto con clientes pase por canales de la empresa. En el momento de la salida, traspase la administración del grupo a un miembro del personal que se queda, quite a quien se va como administrador del grupo y del grupo, presente al sucesor a los clientes dentro del hilo y páselos al canal de la empresa, y disponga la eliminación documentada de los datos de los clientes del dispositivo personal de quien se va una vez preservados los registros. Reajustar todo esto después de una salida hostil es sobre todo control de daños — por eso importa la prevención."
  - q: "¿Cuáles son mis responsabilidades de protección de datos cuando alguien se va?"
    a: "El principio que orienta es que su negocio es el responsable del tratamiento de datos y sigue respondiendo por los datos personales de sus clientes aunque esos datos estén en el buzón de un empleado que se marcha, en su teléfono o en un grupo de WhatsApp — que es exactamente por lo que importan los pasos de correo, archivos, dispositivo y WhatsApp anteriores. Así que la transferencia, la conservación y la eliminación segura de esos datos al momento de la salida son su deber, no algo que pueda dejar con la persona. Por separado, el empleado suele tener obligaciones de confidencialidad —a menudo detalladas en su contrato de trabajo o en un NDA (acuerdo de confidencialidad)— sobre listas de clientes, precios y otra información confidencial, además del deber de devolver información y bienes de la empresa; revise su propio contrato para los detalles. Esta guía da solo la forma: no indica sanciones de la PDPA, ni precisa los detalles de las enmiendas de 2024 a la PDPA (como los requisitos de delegado de protección de datos, la notificación de brechas o las reglas transfronterizas), que se han introducido por fases y deben confirmarse en pdp.gov.my. Para cualquier cosa que dependa de la ley, confirme en pdp.gov.my (el JPDP, Departamento de Protección de Datos Personales) y con un asesor cualificado."

lang: "es"
translationStatus: "in-sync"
sourceContentHash: "e7e2578b736a37a7"
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
    change: "Redactado y publicado."
    reviewer: null

verificationNeeded:
  - "El contenido legal es general y está matizado respecto a la PDPA (Act 709) y pdp.gov.my / el Departamento de Protección de Datos Personales (JPDP): no se indican sanciones, y los detalles de la enmienda de 2024 a la PDPA (designación de delegado de protección de datos, obligación y plazo de notificación de brechas, portabilidad de datos, el criterio revisado de transferencia transfronteriza y cualquier deber de registro) se describen como en movimiento y a confirmar en pdp.gov.my, no se afirman como vigentes con cifras o fechas fijas."
  - "Las obligaciones de confidencialidad y de devolución de bienes se plantean como dependientes del contrato ('revise su contrato o NDA'), no como una regla legal universal."
  - "Las capacidades de los productos (delegar/convertir un buzón, reasignar la propiedad de archivos, desaprovisionar SaaS, cascada de SSO) se describen como capacidades duraderas con un puntero a la consola de administración del proveedor; no se dan rutas de menú de producto, ya que cambian."
  - "La mecánica de WhatsApp (una cuenta que sigue a la SIM/número, la propiedad y el control de administración de la cuenta de empresa, los límites para eliminar un número) se describe en su forma a partir de fuentes de proveedor/CRM y debe confirmarse con la documentación oficial de WhatsApp/Meta para empresas; no se afirma ninguna garantía específica de migración."
  - "El lado estatutario queda explícitamente fuera de alcance y se enlaza con offboarding-statutory-checklist (MY-EMP-0012); este artículo no repite los pasos de EPF/SOCSO/EIS, LHDN ni del pago final."

updated: 2026-11-17
sources:
  - title: "Protección de Datos Personales (PDPA, Act 709) — portal oficial"
    url: "https://www.malaysia.gov.my/en/quick-links/protection-of-personal-data"
    publisher: "Gobierno de Malasia"
  - title: "Departamento de Protección de Datos Personales (JPDP) — confirme aquí todos los detalles de la PDPA"
    url: "https://www.pdp.gov.my"
    publisher: "Departamento de Protección de Datos Personales (JPDP)"
  - title: "WhatsApp Business — qué permite una cuenta de empresa propiedad de la compañía"
    url: "https://www.whatsapp.com/business"
    publisher: "WhatsApp"
  - title: "Salida informática y revocación de accesos — buenas prácticas (forma de las capacidades)"
    url: "https://www.lumos.com/identity-matters/offboarding/employee-offboarding-best-practices"
    publisher: "Lumos"

entity: "Salida operativa de un empleado"
relations:
  - { rel: "related-to", to: "offboarding-statutory-checklist" }
  - { rel: "related-to", to: "before-putting-client-data-into-ai" }
---

Cuando alguien se va, la mayoría de las pequeñas empresas se centran en la salida estatutaria —cese ante el EPF y SOCSO, las notificaciones a LHDN, el pago final— y con razón. Pero una salida limpia sobre el papel puede aun así dejar al negocio **bloqueado fuera de un buzón, incapaz de encontrar archivos guardados en una cuenta personal en la nube, expuesto por contraseñas que quien se fue todavía conoce, o desconectado de clientes que solo trataron con una persona en el teléfono de esa persona.** Esta guía es la mitad **operativa** de la salida: el traspaso del correo, los archivos, los sistemas, los dispositivos y los canales de clientes. (Para los pasos estatutarios, consulte nuestra [lista de verificación estatutaria de salida](/es/employment/offboarding-statutory-checklist).)

Dos riesgos duraderos impulsan todo lo que sigue: el **acceso persistente** —un antiguo insider que todavía puede entrar— y los **activos huérfanos** —registros, archivos y relaciones con clientes que se van por la puerta—. Cierre esos dos y habrá hecho el trabajo.

## Empiece antes del último día

Una buena salida se prepara, no se improvisa. No necesita herramientas caras —una lista de verificación sencilla y un responsable con nombre cierran la mayor parte de la brecha— pero sí necesita dos principios:

- **Revoque el acceso con prontitud, en todas partes.** Cuando la persona se va, su acceso debería retirarse en *cada* lugar al que pudiera entrar —inicios de sesión de aplicaciones, sesiones en caché, confianza de dispositivos, tokens de API, inicio de sesión único, acceso al edificio—, no solo su correo principal. Si solo corta la cuenta evidente, el resto sigue funcionando.
- **Sincronícelo con el proceso de RR. HH./estatutario.** Un solo disparador —RR. HH. confirmando la fecha de salida— debería impulsar tanto la vía estatutaria como esta operativa, de modo que ni corte el acceso que la persona todavía necesita para un traspaso legítimo ni lo deje abierto después de que se haya ido.

Una decisión de criterio para el dueño: **una renuncia amistosa** con preaviso permite un solapamiento y traspaso planificados, mientras que **un despido, una salida hostil o cualquiera con acceso de administrador/privilegiado** exige una revocación inmediata, a menudo en el momento de la notificación, para limitar la ventana en que algo pueda salir mal.

## Correo: conserve la cuenta, quite a la persona

El impulso de eliminar el buzón de quien se va es un error — destruye registros del negocio y rompe los hilos con clientes. La secuencia duradera es:

1. **Revoque el acceso de la persona** (bloquee el inicio de sesión / restablezca la contraseña).
2. **Delegue o convierta el buzón** en un responsable o sucesor, para que alguien pueda seguir atendiendo a los clientes. Tenga en cuenta una asimetría clave: los buzones por lo general **no** tienen un verdadero "cambiar de propietario" como los archivos, así que las opciones realistas son **delegar, reenviar o exportar** — no reasignar.
3. **Configure una respuesta automática y un reenvío** para que el correo entrante de clientes se capture y encauce, y los remitentes sepan a quién dirigirse ahora.
4. **Preserve o exporte** el buzón para sus registros antes de retirar nada — los deberes de conservación y legales pueden sobrevivir a la cuenta.
5. **Suspenda, y elimine solo cuando** la conservación y la continuidad lo permitan.

Haga esto a través de la consola de administración de su proveedor; los menús exactos cambian, así que lo que importa es la capacidad, no los clics.

## Archivos: reasigne la propiedad *antes* de eliminar

Los archivos son lo contrario del correo: **sí** tienen una capacidad real de "cambiar de propietario", y la acción más importante es **reasignar la propiedad de los archivos y las unidades de la persona al negocio o a un sucesor *antes* de que se elimine la cuenta.** Elimine la cuenta primero y los archivos de los que era propietaria pueden perderse o quedar huérfanos, y los enlaces compartidos se rompen.

Dos complementos a eso:

- **El trabajo de la empresa pertenece al almacenamiento propiedad de la empresa** — no a una unidad personal en la nube, un correo personal ni carpetas solo locales que el negocio no puede controlar. Haga de eso la norma y barra en busca de copias sueltas al momento de la salida.
- **Recupere los archivos locales del dispositivo** — extraiga a almacenamiento de la empresa cualquier cosa que exista solo en el disco local del portátil *antes* de borrarlo o reinstalarlo.

## Sistemas, SaaS y credenciales

Solo puede revocar lo que puede ver, así que **empiece por un inventario** de cada cuenta, aplicación y sistema al que la persona pudiera llegar. El "SaaS en la sombra" —herramientas contratadas sin que nadie lo supiera— es la brecha clásica. Después:

- **Desaprovisione cada inicio de sesión SaaS** — deshabilite o elimine al usuario en cada herramienta (CRM, contabilidad, diseño, gestión de proyectos, consolas en la nube, programadores de redes sociales), no deje simplemente de usarla.
- **Rote las contraseñas compartidas que la persona conociera.** Este es el paso que más se olvida y es una acción distinta del desaprovisionamiento: cualquier secreto compartido —administración del Wi-Fi, un inicio de sesión de herramienta compartido, la contraseña de las redes sociales de la empresa— debe *cambiarse*, porque revocar el inicio de sesión personal de alguien no sirve de nada si el secreto real se reutiliza en otro sitio y sigue en su memoria.
- **Revoque las claves de API, los tokens y las integraciones** que la persona creó o que están ligados a ella — pueden sobrevivir a la persona y seguir funcionando.
- **Quítela del inicio de sesión único (SSO)** / el directorio de identidades, lo cual debería propagarse en cascada a las aplicaciones conectadas — pero verifique que llegó a cada una en lugar de suponerlo.
- **Recoja o dé de baja los dispositivos de MFA (autenticación multifactor)**, y retire las tarjetas de acceso al edificio, los PIN de puerta, los códigos de alarma y el acceso por VPN/remoto.
- **Confirme y guarde evidencia** — compruebe en la vista de administración o de auditoría que el inicio de sesión está efectivamente bloqueado, y márquelo como hecho.

## Dispositivos y bienes de la empresa

Recupere el **portátil, el teléfono, la SIM de la empresa, las tarjetas de acceso, los discos externos y las llaves** (ate esto al paso estatutario de devolución de bienes), y **borre o reinstale** los dispositivos devueltos tras extraer cualquier dato solo local, para que no queden credenciales en caché.

El caso más complicado son los **dispositivos personales (BYOD)**: cuando alguien usó su propio teléfono o portátil para el trabajo, datos de la empresa y de clientes pueden estar en un dispositivo que no puede recoger. Sepa de antemano qué hay ahí, elimine o recupere los datos personales de la empresa y de los clientes al momento de la salida, y revoque el acceso de ese dispositivo a los sistemas de la empresa. Como están implicados datos *personales* de clientes, trátelo como una cuestión de protección de datos, no como mero orden.

## El problema del WhatsApp de clientes

Este es el punto más doloroso para las pequeñas empresas de Malasia, y el mensaje honesto es que es **mucho más fácil prevenirlo que arreglarlo.**

La causa de raíz: una cuenta de WhatsApp **sigue a la SIM y al número con el que está registrada.** Si sus conversaciones con clientes —uno a uno y en grupos de clientes— viven en el **número personal** de un empleado, entonces el canal, el historial de chat y a menudo la relación con el cliente **se van con el empleado.** Esas conversaciones también contienen datos personales de los clientes (nombres, números, direcciones, detalles de pedidos) en un dispositivo que usted no controla, lo cual bajo la PDPA sigue siendo responsabilidad **suya.**

La solución fiable es configurar las cosas **antes** de que alguien se vaya:

- **Sea dueño del número.** Use números de cara al cliente que pertenezcan a la empresa (una SIM o línea de la empresa), no el número personal de un empleado — aunque tenga en cuenta que ser dueño de la *línea* mantiene el control del número pero no mueve por sí solo la cuenta de WhatsApp ni los hilos anteriores; hay que planificarlo.
- **Use una cuenta de nivel empresarial, propiedad de la empresa** — WhatsApp Business o la WhatsApp Business Platform — registrada a un **correo de la empresa**, con **más de un administrador de confianza** para no quedar bloqueado si el único administrador se va, y con las conversaciones encauzadas por una **bandeja de entrada compartida** para que el historial no quede atrapado en un solo teléfono.
- **Establezca como política** que el contacto con clientes pase por canales de la empresa.

En el momento de la salida: **traspase la administración del grupo** a un miembro del personal que se queda, **quite a quien se va como administrador del grupo** y del grupo, **presente al sucesor** a los clientes dentro del hilo y migrelos al canal de la empresa, y disponga la **eliminación documentada** de los datos de los clientes del dispositivo personal de quien se va una vez preservados los registros. Reajustar esto después de una salida hostil es sobre todo control de daños.

## Transferencia de conocimiento y continuidad

El acceso es solo la mitad — el negocio también necesita seguir *funcionando*:

- **Un documento de traspaso** — qué hacía la persona, las tareas recurrentes y su cadencia, dónde están las cosas, los clientes y proveedores clave, y cualquier trabajo en curso.
- **Reasigne la propiedad** de cada cliente, proveedor y tarea recurrente a un sucesor con nombre, y diga a los clientes a quién dirigirse ahora.
- **Las credenciales a un gestor de contraseñas de la empresa**, no a uno personal ni a la memoria de alguien; rote las compartidas tras la salida.
- **Un periodo de solapamiento** cuando la salida es planificada y amistosa — una ventana en la que quien se va y el sucesor se solapan transfiere el conocimiento tácito que ningún documento captura. (No disponible en salidas abruptas — lo cual es en sí mismo una razón para mantener ceñidos los demás pasos.)

## El hilo de la protección de datos

Atravesando todo esto hay un principio que vale la pena decir con claridad: bajo la **Ley de Protección de Datos Personales de 2010 (Act 709)**, aplicada por el **Departamento de Protección de Datos Personales (JPDP)**, su negocio es el responsable del tratamiento de datos y **sigue respondiendo por los datos personales de sus clientes aunque estén en el buzón de un empleado que se marcha, en su teléfono o en un grupo de WhatsApp.** Esa es precisamente la razón por la que los pasos de correo, archivos, dispositivo y WhatsApp anteriores no son un orden opcional — gestionar la transferencia, la conservación y la eliminación segura de esos datos *es* la obligación.

Unos cuantos límites deliberados sobre lo que esta guía afirma: no indica sanciones de la PDPA, ni precisa los detalles de las enmiendas de 2024 a la PDPA —como los requisitos de delegado de protección de datos, la notificación de brechas o las reglas de transferencia transfronteriza—, que se han introducido por fases y deben confirmarse en **pdp.gov.my**. Los deberes de confidencialidad y de devolución de información dependen del contrato de trabajo o del NDA (acuerdo de confidencialidad), así que revise el suyo.

---

**Alcance y límites.** Este es el traspaso operativo, **no** la salida estatutaria (EPF/SOCSO/EIS, LHDN, pago final, Employment Pass — consulte la [lista de verificación estatutaria](/es/employment/offboarding-statutory-checklist)). No es un tutorial de producto — las capacidades cambian, así que use la consola de administración de su proveedor y la documentación oficial en lugar de cualquier ruta de menú citada aquí. Es información general, **no asesoramiento legal**: confirme los detalles de la PDPA y de confidencialidad en **pdp.gov.my** y con un asesor cualificado. Y cubre traspasos rutinarios, no la respuesta a incidentes de seguridad — si una salida implica sospecha de robo de datos o sabotaje, trátela como un incidente que hay que escalar.
