---
topicId: MY-TEC-0016
title: "Avant de confier les informations d'un client à un outil d'IA : une liste de contrôle pour les PME malaisiennes"
seoTitle: "Données clients dans l'IA : liste PDPA pour PME malaisiennes"
slug: "before-putting-client-data-into-ai"
category: "technology"
subcategory: ["digital"]
summary: "Coller les coordonnées d'un client dans un agent conversationnel ou un outil d'IA est rapide — et cela peut discrètement enfreindre la Personal Data Protection Act 2010 de la Malaisie, un devoir professionnel de confidentialité ou un NDA. Utiliser l'IA de quelqu'un d'autre n'externalise pas votre responsabilité juridique : vous restez le data controller. Cette liste de contrôle, neutre quant au fournisseur, couvre les principes de la PDPA, le transfert transfrontalier, les données sensibles, les conditions du fournisseur à lire, et les garanties à appliquer en premier."
tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Avant de confier les informations personnelles d'un client à un outil d'IA tiers, traitez cela comme une décision de protection des données, et non comme une simple commodité. En vertu de la Personal Data Protection Act 2010 de la Malaisie (PDPA, Act 709), introduire des données clients dans un outil externe constitue un « traitement » et, le plus souvent, une divulgation ou un transfert — et l'entreprise demeure juridiquement responsable en tant que data controller, même si l'outil appartient à quelqu'un d'autre. Vous restez donc tenu aux sept principes de la PDPA (base légale et notification, ne pas divulguer au-delà de ce qui a été notifié, sécurité, ne pas conserver les données plus longtemps que nécessaire, exactitude, et respect des demandes d'accès). Quatre points méritent une vérification précise : si l'outil stocke ou traite les données en dehors de la Malaisie (un transfert transfrontalier qui doit remplir une condition de la PDPA) ; si l'une des données est une donnée personnelle sensible (santé, religion, biométrie et assimilés), qui exige un traitement plus strict ; ce que disent les propres conditions du fournisseur sur l'entraînement à partir de vos saisies, la conservation, la suppression, les sous-traitants et l'emplacement des serveurs ; et si un devoir professionnel de confidentialité ou un NDA l'interdit de manière indépendante. Le réglage par défaut le plus sûr consiste à minimiser et anonymiser d'abord les données, à utiliser une offre professionnelle assortie de conditions appropriées, et à n'y mettre que ce dont la tâche a réellement besoin. À noter que la PDPA a été modifiée en 2024 avec des changements (notification de violation, obligation de Data Protection Officer, portabilité des données et nouvelles règles transfrontalières) déployés progressivement au cours de 2025 — confirmez la situation actuelle sur pdp.gov.my."
keyTakeaways:
  - "Utiliser l'outil d'IA de quelqu'un d'autre n'externalise PAS votre responsabilité juridique — en vertu de la Personal Data Protection Act 2010 (Act 709), votre entreprise demeure le data controller des données clients que vous y introduisez"
  - "Introduire des données personnelles de clients dans un outil d'IA externe constitue un « traitement » et, le plus souvent, une divulgation/transfert ; les sept principes de la PDPA s'appliquent donc toujours (base légale + notification, limites de divulgation, sécurité, conservation, exactitude, accès)"
  - "Vérification transfrontalière : de nombreux outils d'IA stockent ou traitent les données EN DEHORS de la Malaisie — c'est un transfert transfrontalier qui doit remplir une condition de la PDPA (p. ex. protection adéquate, consentement explicite, nécessité contractuelle ou garanties documentées)"
  - "Les données personnelles sensibles (santé, religion, biométrie et assimilés) exigent un traitement plus strict — ne les introduisez pas dans un outil d'IA généraliste sans consentement explicite et sans un examen attentif des conditions"
  - "Lisez les PROPRES conditions du fournisseur (pas le marketing) : entraîne-t-il ses modèles sur vos saisies ? combien de temps sont-elles conservées, pouvez-vous les supprimer ? qui sont les sous-traitants et où se trouvent les serveurs ? existe-t-il une offre professionnelle avec un accord de traitement des données et une option sans entraînement ?"
  - "La PDPA n'est pas le seul devoir — une obligation professionnelle de confidentialité (p. ex. avocats, comptables, médecins) ou un NDA peut interdire de manière indépendante de confier les informations d'un client à un outil externe"
appliesTo: "Les PME, professionnels et employés malaisiens qui envisagent de saisir des données personnelles de clients ou de clientèle dans un agent conversationnel ou un outil d'IA, et toute personne ayant besoin d'une liste de contrôle claire pour le faire dans le respect de la PDPA et de ses devoirs de confidentialité."

faq:
  - q: "Si l'outil d'IA appartient à une autre entreprise, la protection des données est-elle son problème ?"
    a: "Non. En vertu de la Personal Data Protection Act 2010, votre entreprise est le data controller des données clients qu'elle décide de traiter, et cette responsabilité n'est pas transférée au fournisseur de l'outil simplement parce que l'outil lui appartient. Le fournisseur agit comme processor pour votre compte ; vous devez toujours satisfaire aux principes de la PDPA — y compris veiller à ce que le processor offre des garanties de sécurité suffisantes — et vous restez responsable des données. En bref : utiliser l'IA de quelqu'un d'autre n'externalise pas votre responsabilité juridique."
  - q: "L'emplacement des serveurs de l'outil d'IA a-t-il de l'importance ?"
    a: "Oui, énormément. De nombreux outils d'IA stockent ou traitent les données sur des serveurs situés en dehors de la Malaisie, et leur envoyer des données personnelles de clients constitue un transfert transfrontalier que la PDPA réglemente. Selon les règles introduites par l'amendement de 2024, un tel transfert n'est autorisé que si au moins une condition est remplie — par exemple la destination offre une protection adéquate ou substantiellement similaire, la personne concernée a donné son consentement explicite, le transfert est nécessaire à l'exécution d'un contrat, ou vous disposez de garanties documentées. Vérifiez où l'outil traite les données et assurez-vous qu'une condition s'applique ; confirmez les conditions actuelles sur pdp.gov.my."
  - q: "Puis-je simplement anonymiser les données et les coller ?"
    a: "Minimiser et anonymiser d'abord est exactement le bon réflexe et le réglage par défaut le plus sûr — retirez les noms, numéros de carte d'identité, coordonnées et numéros de compte, et n'introduisez que ce dont la tâche a réellement besoin. Mais attention : des données qui permettent encore d'identifier quelqu'un lorsqu'elles sont combinées à d'autres informations peuvent ne pas être véritablement anonymes, et des détails partiels peuvent ré-identifier une personne. Pour tout élément sensible, ou lorsque vous ne pouvez pas retirer les identifiants, traitez-le comme une donnée personnelle et appliquez l'intégralité de la liste de contrôle plutôt que de supposer que l'anonymisation supprime l'obligation."
  - q: "J'ai signé un NDA avec mon client — la liste de contrôle PDPA le couvre-t-elle aussi ?"
    a: "Non — considérez-les comme des barrières distinctes que vous devez toutes deux franchir. Même lorsque la PDPA est respectée, une clause de confidentialité, un NDA ou un devoir professionnel de secret (par exemple pour les avocats en vertu de la Legal Profession Act 1976, les comptables en vertu des règlements du MIA, les médecins en vertu du code du Malaysian Medical Council, ou les institutions financières agréées en vertu de la Financial Services Act 2013) peut interdire de manière indépendante de divulguer les informations d'un client à un tiers quelconque, y compris un fournisseur d'IA, sans consentement. Vérifiez à la fois la situation au regard de la protection des données et vos obligations de confidentialité avant d'y introduire quoi que ce soit."

lang: "fr"
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
  - title: "Personal Data Protection Act 2010 (Act 709) et les sept principes de protection des données personnelles"
    url: "https://www.pdp.gov.my/jpdpv2/"
    publisher: "Département de la protection des données personnelles (JPDP), ministère du Numérique"
  - title: "Personal Data Protection (Amendment) Act 2024 — notification de violation, DPO, portabilité des données, transfert transfrontalier"
    url: "https://www.pdp.gov.my/jpdpv2/"
    publisher: "Département de la protection des données personnelles (JPDP)"
  - title: "Lignes directrices sur le transfert transfrontalier de données personnelles (2025)"
    url: "https://www.pdp.gov.my/jpdpv2/"
    publisher: "Commissaire à la protection des données personnelles"
  - title: "Data Protection Laws of the World — Malaisie (aperçu de la PDPA, données sensibles, controller/processor)"
    url: "https://www.dlapiperdataprotection.com/index.html?t=law&c=MY"
    publisher: "DLA Piper"

entity: "Using AI tools with personal data under the PDPA (Malaysia)"
relations:
  - { rel: "related-to", to: "pdpa-compliance-malaysia" }
  - { rel: "related-to", to: "data-protection-officer-malaysia" }
  - { rel: "related-to", to: "data-breach-notification-malaysia" }
related: ["pdpa-compliance-malaysia", "data-protection-officer-malaysia", "data-breach-notification-malaysia"]
keywords: ["données clients outil IA Malaisie", "PDPA agent conversationnel IA", "Personal Data Protection Act 2010 IA", "transfert transfrontalier de données Malaisie", "confidentialité IA NDA Malaisie", "liste de contrôle données IA PME", "data controller IA Malaisie", "donnée personnelle sensible IA", "Act 709 outil IA"]
framework: decision
---

Il suffit de deux secondes pour coller l'e-mail d'un client, sa réclamation, ou un
contrat rempli de noms dans un agent conversationnel et lui demander de le résumer
ou d'y répondre. Cette commodité est précisément le risque : en ces deux secondes,
une entreprise peut divulguer des données personnelles à un tiers en violation de la
loi malaisienne sur la protection des données, rompre un devoir de confidentialité
qu'elle doit à son client, ou violer un NDA qu'elle a signé — sans que personne ne
l'ait décidé.

Le bon modèle mental est celui-ci : **utiliser l'outil d'IA de quelqu'un d'autre
n'externalise pas votre responsabilité juridique.** En vertu de la **Personal Data
Protection Act 2010 (PDPA, Act 709)**, votre entreprise est le **data controller**
des données clients qu'elle choisit de traiter, et cette responsabilité vous reste
attachée même si l'outil appartient à quelqu'un d'autre. Voici une courte liste de
contrôle à passer en revue avant d'introduire les données.

## 1. Vous restez tenu aux sept principes de la PDPA

Introduire des données personnelles de clients dans un outil d'IA externe constitue
un **traitement** au sens de la PDPA, et le plus souvent une **divulgation ou un
transfert** au fournisseur. Les **sept principes de protection des données
personnelles** de la loi s'appliquent donc toujours. En clair, avant d'introduire
les données, demandez-vous :

- **Base légale et notification** — disposez-vous d'un consentement ou d'une autre
  base légale, et votre avis de confidentialité a-t-il informé le client que ses
  données pourraient être traitées par des outils ou prestataires tiers ?
- **Divulgation** — envoyer des données à un fournisseur d'IA est une divulgation ;
  entre-t-elle dans les finalités et les destinataires que vous avez notifiés ?
- **Sécurité** — l'outil est-il suffisamment sûr, et existe-t-il un accord écrit
  pour que le fournisseur (votre processor) offre des garanties de sécurité
  suffisantes ?
- **Conservation** — l'outil conserve-t-il vos saisies, pendant combien de temps, et
  pouvez-vous les supprimer ? Ne laissez pas les données persister plus longtemps
  que nécessaire.
- **Intégrité des données** — un résultat d'IA peut être erroné ou inventé ; vous
  restez responsable de l'exactitude de toute donnée personnelle sur laquelle vous
  vous appuyez.
- **Accès** — vous devez toujours être en mesure de retrouver, récupérer et corriger
  les données d'un client sur demande, ce qui est difficile si elles sont éparpillées
  dans des systèmes tiers opaques.

## 2. Vérifiez où vont les données — transfert transfrontalier

De nombreux outils d'IA **stockent ou traitent les données sur des serveurs situés
en dehors de la Malaisie.** Saisir des données personnelles de clients dans un tel
outil est un **transfert transfrontalier**, que la PDPA réglemente. Selon le cadre
introduit par l'amendement de 2024, un transfert à l'étranger n'est autorisé que si
**au moins une condition est remplie** — par exemple la destination offre une
**protection adéquate ou substantiellement similaire**, la personne concernée a donné
son **consentement explicite**, le transfert est **nécessaire à l'exécution d'un
contrat**, ou vous disposez de **garanties documentées** telles que des clauses
contractuelles.

Découvrez donc **où l'outil traite les données**, et assurez-vous qu'une condition
s'applique — ne supposez pas que le consentement seul couvre toujours la situation.
Les conditions exactes figurent dans les lignes directrices du Commissaire sur le
transfert transfrontalier ; confirmez la situation actuelle sur **pdp.gov.my**.

## 3. S'agit-il de données personnelles sensibles ?

La PDPA traite les **données personnelles sensibles** — notamment la santé, les
convictions religieuses ou autres, les opinions politiques, les infractions, et
(depuis l'amendement de 2024) les **données biométriques** — de manière plus stricte,
exigeant généralement un **consentement explicite** parmi des motifs plus restreints.
Ne **confiez pas** de dossiers médicaux, d'informations religieuses, de données
biométriques ou assimilées à un outil d'IA généraliste sans consentement explicite et
sans une lecture attentive des conditions de l'outil. Le seuil est plus élevé ici, et
le préjudice en cas de fuite est plus grand.

## 4. Lisez les propres conditions du fournisseur — pas le marketing

La question de savoir si un outil peut être utilisé en toute sécurité avec des
données clients trouve sa réponse dans ses **Conditions d'utilisation, sa Politique
de confidentialité et tout avenant de traitement des données (Data Processing
Addendum)**, et non sur sa page d'accueil. Les questions durables à poser à
**n'importe quel** outil :

- **Entraînement :** le fournisseur utilise-t-il vos saisies pour **entraîner ou
  améliorer ses modèles**, et existe-t-il une option de refus (opt-out) ou une offre
  où l'entraînement est désactivé par défaut ?
- **Conservation et suppression :** pendant combien de temps les saisies et les
  résultats sont-ils conservés, et pouvez-vous les supprimer (ainsi que les copies) ?
- **Sous-traitants et emplacement :** qui sont les sous-traitants, et dans **quels
  pays** se trouvent les serveurs ? (retour à la vérification transfrontalière.)
- **Offre professionnelle :** existe-t-il un **plan professionnel ou entreprise
  assorti d'un accord de traitement des données**, d'une confidentialité
  contractuelle et d'un engagement de non-entraînement ? Les offres gratuites et
  grand public en sont souvent dépourvues.
- **Sécurité et violation :** chiffrement, contrôles d'accès, normes de sécurité
  reconnues, et un engagement à **vous notifier une violation** à temps pour remplir
  vos propres obligations.

## 5. La PDPA n'est pas le seul devoir — confidentialité et NDA

Même lorsque la PDPA est respectée, un devoir distinct peut tout de même interdire
d'introduire les données. De nombreux professionnels ont des **obligations de
confidentialité indépendantes de la PDPA, et souvent plus strictes qu'elle** — par
exemple les avocats en vertu de la **Legal Profession Act 1976**, les comptables en
vertu des règlements du **Malaysian Institute of Accountants (MIA)**, les médecins en
vertu du code du **Malaysian Medical Council**, et les institutions financières
agréées en vertu de la **Financial Services Act 2013**. Et une **clause de
confidentialité ou un NDA** dans votre mandat client peut interdire de manière
indépendante de divulguer leurs informations à un tiers quelconque, y compris un
fournisseur d'IA, sans consentement. **Vérifiez les deux** : la situation au regard
de la protection des données et vos obligations de confidentialité.

## Le réglage par défaut le plus sûr

En cas de doute, faites-en moins :

- **Minimisez et anonymisez d'abord** — retirez les noms, numéros de carte
  d'identité, coordonnées et numéros de compte, et n'introduisez que ce dont la tâche
  a réellement besoin.
- **Utilisez une offre professionnelle** assortie d'un accord de traitement des
  données, de conditions de non-entraînement et d'une conservation définie dès que
  des données clients sont en jeu.
- **Mettez à jour votre avis ou obtenez un consentement** lorsque le traitement par
  des tiers n'est pas déjà couvert.
- **Tenez un registre** — quel outil, quelles données, quelle base, quelles garanties
  — afin de pouvoir démontrer votre responsabilité (accountability) et répondre à une
  demande d'accès.
- **Rédigez une brève politique interne d'usage de l'IA** indiquant au personnel ce
  qui peut et ne peut pas être introduit dans les outils d'IA, quels outils sont
  approuvés, et les règles d'anonymisation.

## Une note sur l'amendement de 2024

La PDPA a été modifiée en **2024**, avec des changements déployés progressivement au
cours de **2025** : **notification obligatoire de violation de données**, une
obligation de nommer un **Data Protection Officer (DPO)** pour les traitements de plus
grande ampleur, un droit à la **portabilité des données**, et le **nouveau cadre de
transfert transfrontalier** ci-dessus. Les dates exactes d'entrée en vigueur, les
seuils relatifs au DPO et les éventuels montants des sanctions évoluent et sont en
partie fixés par des lignes directrices plutôt que par la loi elle-même — considérez
donc la forme des obligations comme durable, et **confirmez le détail actuel sur
pdp.gov.my** avant de vous fier à un chiffre ou à une échéance précise.

## Et ensuite

- Lisez l'[aperçu général de la conformité PDPA](/fr/business/pdpa-compliance-malaysia)
  pour l'ensemble des obligations de la loi.
- Vérifiez si votre organisation a besoin d'un
  [Data Protection Officer](/fr/business/data-protection-officer-malaysia) et ce
  qu'implique le devoir de [notification de violation de données](/fr/business/data-breach-notification-malaysia).
- Confirmez l'état actuel de l'amendement, les lignes directrices et les conditions
  transfrontalières sur le portail officiel, **pdp.gov.my**, avant d'introduire des
  données clients dans tout nouvel outil.
