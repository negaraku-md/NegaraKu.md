---
topicId: MY-LIV-0010
title: "DuitNow y DuitNow QR: pagar con un número de teléfono, no con un número de cuenta"
seoTitle: "DuitNow y DuitNow QR: cómo funciona el sistema de pago instantáneo de Malasia"
slug: "duitnow-qr-payments"
category: "money-daily-life"
subcategory: ["banking-payments"]
summary: "DuitNow es el carril de transferencia instantánea de Malasia que usa un número de teléfono o el NRIC en lugar de un número de cuenta bancaria, mientras que DuitNow QR es el mismo código QR nacional que puede escanearse desde cualquier banco o billetera electrónica. Ambos los opera PayNet bajo un marco del Bank Negara Malaysia que ahora obliga a retirar todos los códigos QR propietarios antes de 2028."

tier: "3"
mode: "practical"
contentType: "guide"

answer: "DuitNow permite a cualquiera transferir dinero al instante con solo escribir el número de teléfono, el NRIC, el pasaporte o el número de registro de empresa del destinatario, y no un largo número de cuenta bancaria. DuitNow QR, por su parte, es el mismo código QR nacional único que un cliente de cualquier banco o billetera electrónica puede escanear para pagar a un comerciante, sin importar la plataforma que use el comerciante. Ambos los opera PayNet (Payments Network Malaysia) bajo la supervisión del Bank Negara Malaysia."
keyTakeaways:
  - "DuitNow asocia un número de teléfono, NRIC, pasaporte o número de registro de empresa (BRN) a una cuenta bancaria o billetera electrónica —necesitas registrarte una vez para RECIBIR dinero, pero no para enviarlo"
  - "Las transferencias DuitNow son gratuitas hasta RM5,000 por transacción; por encima de eso, algunos bancos cobran una comisión de 50 sen (muchos bancos la eximen)"
  - "DuitNow QR es un código QR nacional único que pueden escanear los clientes de cualquier banco o billetera electrónica participante —un comerciante no necesita mostrar un código QR distinto para cada plataforma"
  - "El límite de DuitNow QR es de RM50,000 por transacción (compartido con el límite de transferencia a terceros de DuitNow), y las transacciones inferiores a RM250 no requieren verificación adicional"
  - "PayNet, cuya propiedad mayoritaria es del Bank Negara Malaysia junto con los principales bancos locales, opera ambos sistemas como infraestructura nacional de pagos"
  - "El Marco Interoperable de Transferencia de Fondos (IFTF) emitido por BNM el 30 de junio de 2026 obliga a retirar todas las redes QR propietarias/cerradas antes del 30 de junio de 2028"
appliesTo: "Cualquiera que envíe o reciba dinero en Malasia —residentes, pequeños comerciantes y quien se haya preguntado por qué un único código QR en un puesto puede aceptar pagos de distintas aplicaciones bancarias."

verificationNeeded:
  - "The official bnm.gov.my site blocked automated access (403) at the time of writing; IFTF details (issuance date 30 June 2026, compliance deadline 30 June 2028) were confirmed through a BNM policy document referenced by several independent financial journalism reports — please verify directly at bnm.gov.my once accessible"
  - "Fee and transaction limit figures are taken directly from the official PayNet website as of the time of writing; PayNet states that actual fees may vary by individual bank/e-wallet"

lang: "es"
masterLanguage: "ms"
translationStatus: "pending"

status: "draft"
aiAssisted: true
reviewer: null
reviewed: "2026-07-25"
publishedBy: "ashton-tan"
revision: 0
revisions:
  - revision: 0
    date: 2026-07-24
    change: "Approved and published."
    reviewer: null
sensitivity: "none"

updated: 2026-07-24
sources:
  - title: "DuitNow QR - Soluciones personales (DuitNow QR - Personal Solutions)"
    url: "https://www.paynet.my/personal-solutions/duitnow-qr.html"
    publisher: "PayNet (Payments Network Malaysia)"
  - title: "Transferencia DuitNow - Soluciones personales (DuitNow Transfer - Personal Solutions)"
    url: "https://www.paynet.my/personal-solutions/duitnow-transfer.html"
    publisher: "PayNet (Payments Network Malaysia)"
  - title: "DuitNow de Malasia y PayNow de Singapur se conectarán en 2022 (Malaysia's DuitNow and Singapore's PayNow to Link in 2022)"
    url: "https://www.bnm.gov.my/-/malaysia-duitnow-and-singapore-paynow-link-in-2022"
    publisher: "Bank Negara Malaysia"
  - title: "Marco Interoperable de Transferencia de Crédito (Documento de política) (Interoperable Credit Transfer Framework (Policy Document))"
    url: "https://www.bnm.gov.my/documents/20124/761679/PD+ICTF.pdf"
    publisher: "Bank Negara Malaysia"
    date: "2019-12-27"
  - title: "Marco Interoperable de Transferencia de Fondos (Documento de política) (Interoperable Fund Transfer Framework (Policy Document))"
    url: "https://www.bnm.gov.my/documents/20124/943361/pd_IFTF_June2026.pdf"
    publisher: "Bank Negara Malaysia"
    date: "2026-06-30"
  - title: "El Marco Interoperable de Transferencia de Fondos de BNM: qué significa para DuitNow QR (BNM's Interoperable Fund Transfer Framework: What It Means for DuitNow QR)"
    url: "https://fintechnews.my/59367/regtech-fintech-regulation-malaysia/bnm-interoperable-fund-transfer-framework-iftf/"
    publisher: "Fintech News Malaysia"
    date: "2026-07-02"

entity: "DuitNow"
relations:
  - { rel: "administered-by", to: "bank-negara-malaysia" }
  - { rel: "related-to", to: "payment-regulation-malaysia" }
related: ["bank-negara-malaysia", "payment-regulation-malaysia"]
keywords: ["DuitNow", "DuitNow QR", "PayNet", "pago instantáneo Malasia", "código QR Malasia", "transferencia de dinero con número de teléfono", "Bank Negara Malaysia pago digital", "Bank Negara Malaysia pembayaran digital"]
---

El dueño de un puesto de mercado nocturno muestra un único código QR. Un cliente que usa la
aplicación de Maybank lo escanea. El siguiente cliente usa Touch 'n Go eWallet y escanea
el **mismo** código QR. Ambos pagos llegan a la cuenta del comerciante en
segundos. No hay un código QR distinto para cada banco o billetera electrónica —eso es
DuitNow QR funcionando discretamente tras bambalinas.

## DuitNow: envía usando un número de teléfono, no un número de cuenta

DuitNow es un servicio de transferencia instantánea de fondos entre bancos y billeteras electrónicas en
Malasia. La diferencia con una transferencia bancaria ordinaria: no necesitas
escribir un largo número de cuenta bancaria. En su lugar, DuitNow asocia un único **ID
proxy** a una cuenta de destino.

| ID proxy | Adecuado para |
| --- | --- |
| Número de teléfono móvil | Personas |
| NRIC (número del documento de identidad) | Personas |
| Número de pasaporte | No ciudadanos |
| BRN (número de registro de empresa de SSM) | Empresas registradas |

Para **enviar** dinero, no necesitas registrar nada —basta con iniciar sesión en tu
aplicación bancaria, elegir DuitNow y escribir el ID proxy del destinatario. Para **recibir**
dinero, en cambio, el destinatario debe registrarse una vez para vincular ese
ID proxy a una cuenta bancaria o billetera electrónica. Un mismo ID solo puede vincularse a una
cuenta a la vez, pero una persona puede registrar varios ID distintos (por
ejemplo, un número de teléfono y un NRIC) a la misma cuenta.

Según el sitio web oficial de PayNet, las transferencias DuitNow son **gratuitas hasta
RM5,000 por transacción**. Por encima de esa cantidad, algunos bancos cobran una comisión de
**50 sen**, aunque muchos bancos la eximen como incentivo. El servicio está respaldado
por la mayoría de los grandes bancos y por varias billeteras electrónicas participantes de todo el país.

## DuitNow QR: un código, todos los bancos

Si DuitNow es el carril de transferencia, DuitNow QR es cómo se muestra en el
mostrador. Es el mismo **Código QR de Estándar Nacional** —cuando un comerciante
muestra un único código DuitNow QR, un cliente de cualquier banco o billetera electrónica
participante puede escanearlo y pagar directamente, sin que el comerciante tenga que
suscribirse a decenas de sistemas QR propietarios independientes.

Los límites y condiciones, según PayNet:

- **Límite por transacción:** hasta **RM50,000** por transacción, compartido con el
  mismo límite de transferencia a terceros de DuitNow.
- **Transacciones inferiores a RM250:** no requieren verificación adicional a nivel
  del cliente.
- **Comisiones a los usuarios:** PayNet indica que pagar, enviar o recibir mediante
  DuitNow QR no conlleva un cargo adicional para el usuario —aunque las comisiones
  al comerciante (a través del banco adquirente) pueden variar.

## Quién está en realidad detrás de DuitNow

DuitNow y DuitNow QR los opera **PayNet (Payments Network
Malaysia)** —la empresa de infraestructura nacional de pagos cuya
propiedad mayoritaria es del Bank Negara Malaysia junto con los principales bancos locales. BNM
en sí no opera las transacciones del día a día; su función es fijar el
marco de política que obliga a bancos y billeteras electrónicas a unirse a la misma
infraestructura.

El marco original —el **Marco Interoperable de Transferencia de Crédito
(ICTF)**, emitido en diciembre de 2019— es lo que hizo necesario que DuitNow existiera en
primer lugar. El **30 de junio de 2026**, BNM emitió su sucesor: el
**Marco Interoperable de Transferencia de Fondos (IFTF)**, que va más allá de
las transferencias de cuenta a cuenta para cubrir explícitamente también los pagos QR. Conforme
al IFTF, cualquier red QR propietaria o cerrada que aún opere un banco o
una billetera electrónica debe **retirarse por completo antes del 30 de junio de 2028**, y a las instituciones se les
prohíbe registrar nuevos comerciantes en esquemas cerrados durante ese
período de transición.

## Errores comunes

- **Suponer que DuitNow QR es una función de un banco específico.** Es
  infraestructura compartida —el mismo código QR funciona sin importar qué aplicación lo escanee.
- **Olvidar registrarse para RECIBIR dinero.** Enviar no requiere
  registro, pero tu ID proxy debe vincularse primero antes de que otros puedan
  pagarte a través de él.
- **Suponer que todas las transferencias DuitNow son gratuitas sin límite.** Es gratis solo
  hasta RM5,000 por transacción; por encima de eso puede cobrarse una pequeña comisión
  según el banco.
- **Confundir a PayNet con el Bank Negara Malaysia.** BNM fija el marco y
  supervisa; PayNet es quien construye y opera el carril de pagos cada
  día.

## Qué sigue

- Consulta el papel completo del regulador detrás de este sistema en
  [Bank Negara Malaysia](/en/economy/bank-negara-malaysia).
- Si estás desarrollando un producto que recibe o retiene dinero de clientes, comprueba
  cuándo se requiere realmente la aprobación de BNM en
  [regulación de pagos en Malasia](/en/business/payment-regulation-malaysia).
