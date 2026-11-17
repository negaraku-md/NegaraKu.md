---
topicId: MY-TEC-0017
title: "Un employé s'en va : comment transférer messagerie, fichiers, systèmes et groupes WhatsApp clients"
seoTitle: "Départ d'un employé : messagerie, fichiers, WhatsApp"
slug: "when-an-employee-leaves-operational-handover"
category: "technology"
subcategory: ["operations"]
summary: "Le volet statutaire d'un départ vous maintient en conformité ; le volet opérationnel, lui, maintient l'entreprise en marche et les données clients sous contrôle une fois la personne partie. Ce guide pratique couvre le transfert que la paperasse ne couvre pas : messagerie et fichiers, accès aux systèmes et aux SaaS, mots de passe partagés, appareils, et le plus difficile — les groupes WhatsApp clients hébergés sur un téléphone personnel. Les deux risques à refermer sont l'accès résiduel et les actifs orphelins, et le problème des groupes WhatsApp clients se règle mieux avant que quiconque ne parte."
tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Quand un employé quitte une petite entreprise malaisienne, il y a deux chantiers distincts. Le chantier statutaire — cessation EPF, SOCSO et EIS, notifications au LHDN, dernière paie, annulation du permis de travail — est traité dans notre checklist de sortie statutaire. Ce guide en est le jumeau opérationnel : le transfert de la messagerie, des fichiers, de l'accès aux systèmes et aux SaaS, des identifiants, des appareils et des canaux de communication clients, ainsi que le transfert de connaissances. Deux risques durables le gouvernent : l'accès résiduel (un ancien initié qui peut encore entrer) et les actifs orphelins (dossiers, fichiers et relations clients qui s'en vont par la porte). Les gestes essentiels : planifier avant le dernier jour et révoquer l'accès rapidement partout où la personne pouvait entrer, pas seulement sa connexion principale ; pour la messagerie, conservez la boîte mais retirez l'accès de la personne, déléguez-la à un responsable et réglez une réponse automatique avant toute suppression ; pour les fichiers, réattribuez la propriété à l'entreprise avant que le compte ne soit supprimé, car supprimer d'abord peut les rendre orphelins ; dressez l'inventaire de chaque système et compte SaaS, déprovisionnez chacun, et surtout changez tout mot de passe partagé que la personne connaissait ; récupérez les appareils de l'entreprise et retirez les données de l'entreprise et des clients des appareils personnels. Le plus difficile est la communication client : les discussions professionnelles vivent souvent dans WhatsApp sur le numéro personnel d'un employé, si bien que le canal — et les données personnelles des clients — peut partir avec lui. Le seul remède fiable se met en place à l'avance : des numéros appartenant à l'entreprise, un compte WhatsApp de niveau professionnel avec plus d'un administrateur, et un contact client passant par les canaux de l'entreprise. Tout au long, rappelez-vous que l'entreprise reste responsable, au titre de la PDPA (loi de 2010 sur la protection des données personnelles), des données personnelles des clients même lorsqu'elles se trouvent dans la boîte, le téléphone ou le groupe WhatsApp d'un partant, alors prenez en charge leur transfert et leur suppression plutôt que de les abandonner. Ceci est une information générale, pas un conseil juridique — vérifiez les détails sur pdp.gov.my et auprès de votre propre conseiller."
keyTakeaways:
  - "Ceci est le volet OPÉRATIONNEL d'un départ (messagerie, fichiers, accès, appareils, canaux clients, connaissances) — le volet statutaire (EPF/SOCSO/EIS, LHDN, dernière paie, permis de travail) est une checklist distincte à relier, pas à répéter"
  - "Deux risques à refermer : l'accès résiduel (quelqu'un qui peut encore entrer) et les actifs orphelins (dossiers, fichiers et relations clients qui partent avec la personne) — planifiez avant le dernier jour et révoquez l'accès partout où elle pouvait atteindre, pas seulement la connexion principale"
  - "Messagerie : conservez la boîte, retirez l'accès de la personne, déléguez-la à un responsable et réglez une réponse automatique/un transfert, et préservez-la ou exportez-la avant toute suppression — les boîtes aux lettres ne peuvent généralement pas être réattribuées comme les fichiers, alors déléguez plutôt que de « changer de propriétaire »"
  - "Fichiers : réattribuez la propriété à l'entreprise ou au successeur AVANT la suppression du compte (supprimer d'abord peut rendre les fichiers orphelins) ; gardez le travail de l'entreprise dans un stockage appartenant à l'entreprise, pas dans des comptes personnels, et récupérez les fichiers présents uniquement en local sur l'appareil avant de l'effacer"
  - "Systèmes : travaillez à partir d'un inventaire de chaque compte et outil SaaS, déprovisionnez chacun, retirez la personne du SSO (authentification unique) et collectez les accès MFA (authentification multifacteur)/bâtiment/VPN — et CHANGEZ tout mot de passe partagé que la personne connaissait, car révoquer sa propre connexion ne sert à rien si le secret est réutilisé et encore dans sa tête"
  - "Les groupes WhatsApp clients sont le risque le plus vif parce que le canal est lié à un numéro personnel et part avec l'employé — le remède fiable se met en place à l'avance (numéros appartenant à l'entreprise, WhatsApp de niveau professionnel avec plus d'un administrateur, contact client par les canaux de l'entreprise) ; au titre de la PDPA, l'entreprise reste responsable des données personnelles des clients où qu'elles se trouvent"
appliesTo: "Propriétaires et dirigeants de petites entreprises malaisiennes qui gèrent le volet informatique et opérationnel du départ d'un employé — le transfert de la messagerie, des fichiers, des systèmes, des appareils et des canaux de communication clients. C'est un guide opérationnel général, pas le processus de sortie statutaire, et pas un conseil juridique ni un conseil de réponse à incident de sécurité informatique."

faq:
  - q: "N'est-ce pas la même chose que les démarches de sortie EPF/SOCSO/fiscales ?"
    a: "Non — c'est la moitié complémentaire. La sortie statutaire (cessation EPF, SOCSO et EIS, notifications au LHDN telles que CP21/CP22A, dernier salaire, et annulation du permis de travail pour un travailleur étranger) vous maintient en conformité avec les régulateurs, et nous la traitons séparément. Ce guide est le transfert opérationnel que le processus statutaire ne touche pas : messagerie, fichiers, accès aux systèmes et aux SaaS, identifiants partagés, appareils et canaux de communication clients, ainsi que le transfert de connaissances. Un départ peut être parfaitement net sur la paperasse statutaire et laisser quand même l'entreprise verrouillée hors d'une boîte aux lettres, incapable de retrouver des fichiers conservés dans le cloud personnel de quelqu'un, exposée par des mots de passe que le partant connaît encore, ou coupée de clients qui n'ont jamais traité qu'avec une seule personne sur le téléphone de celle-ci. Menez les deux pistes, déclenchées par la même date de départ confirmée."
  - q: "Que dois-je faire de la messagerie et des fichiers du partant ?"
    a: "Traitez la messagerie et les fichiers comme deux problèmes différents. Pour la messagerie, la règle est de conserver le compte, de retirer la personne : coupez sa connexion, déléguez ou convertissez la boîte pour qu'un responsable puisse continuer à répondre aux clients, réglez une réponse automatique et un transfert pour que le courrier entrant soit récupéré, et préservez ou exportez la boîte pour vos archives avant de la suspendre ou de la supprimer. Supprimer purement une boîte détruit des dossiers de l'entreprise et casse les fils de discussion clients, et les boîtes ne peuvent généralement pas être « réattribuées » comme les fichiers — alors déléguez plutôt que de transférer. Pour les fichiers, faites l'ordre inverse : réattribuez la propriété des fichiers et disques de la personne à l'entreprise ou à un successeur avant que le compte ne soit supprimé, car les fichiers appartenant à un compte supprimé peuvent être perdus ou rendus orphelins. Et assurez-vous que le travail de l'entreprise réside bien dans un stockage appartenant à l'entreprise, pas sur un disque personnel ou dans des dossiers présents uniquement en local — faites la chasse aux copies éparses, et récupérez tout ce qui est en local sur l'ordinateur portable avant de l'effacer. Utilisez la console d'administration de votre fournisseur pour tout cela ; les menus exacts changent."
  - q: "Comment gérer les mots de passe et l'accès aux systèmes ?"
    a: "Partez d'un inventaire, car vous ne pouvez révoquer que ce que vous voyez — listez chaque compte, application et système que la personne pouvait atteindre, y compris les outils SaaS « fantômes » souscrits à l'insu de tous. Ensuite, déprovisionnez chaque connexion (désactivez ou supprimez l'utilisateur, ne vous contentez pas d'arrêter d'utiliser l'outil), retirez la personne de l'authentification unique (SSO) et vérifiez que cela a bien atteint chaque application connectée, révoquez toute clé API, tout jeton ou toute intégration qui lui sont liés, collectez ou désenregistrez ses appareils MFA (authentification multifacteur), et retirez les cartes d'accès au bâtiment, les codes de porte et l'accès VPN ou distant. L'étape la plus souvent oubliée est de CHANGER les mots de passe partagés — tout identifiant d'administration Wi-Fi, toute connexion d'outil partagée, tout mot de passe de réseau social de l'entreprise et autres que la personne connaissait — car révoquer sa connexion personnelle ne sert à rien si le vrai secret est réutilisé ailleurs et encore dans sa mémoire. Là où vous le pouvez, confirmez chaque révocation dans la vue d'administration plutôt que de supposer que le clic a fonctionné. Pour un licenciement, un départ conflictuel ou toute personne disposant d'un accès administrateur, faites-le immédiatement ; pour une démission à l'amiable, vous pouvez le caler sur un transfert planifié."
  - q: "Nos clients sont dans des groupes WhatsApp sur le téléphone personnel de l'employé — comment les garder ?"
    a: "C'est le problème le plus difficile, et la réponse honnête est qu'il est bien plus facile à prévenir qu'à corriger. Un compte WhatsApp suit la carte SIM et le numéro sur lesquels il est enregistré, donc si vos discussions clients vivent sur le numéro personnel d'un employé, le canal, l'historique des discussions et souvent la relation client partent avec lui — et ces discussions contiennent aussi des données personnelles des clients sur un appareil que vous ne contrôlez pas, ce qui, au titre de la PDPA, reste la responsabilité de l'entreprise. Le remède fiable se met en place à l'avance : utilisez des numéros tournés vers le client qui appartiennent à l'entreprise (une carte SIM ou une ligne de l'entreprise), faites fonctionner une configuration de niveau professionnel (WhatsApp Business ou la WhatsApp Business Platform) avec le compte enregistré sur un e-mail de l'entreprise et plus d'un administrateur de confiance, acheminez les conversations par une boîte de réception partagée pour que l'historique ne reste pas piégé sur un seul combiné, et faites-en une règle que le contact client passe par les canaux de l'entreprise. Au moment du départ, transférez l'administration du groupe à un membre du personnel restant, retirez le partant comme administrateur du groupe et du groupe, présentez le successeur aux clients dans le fil et faites-les passer sur le canal de l'entreprise, et organisez la suppression documentée des données clients de l'appareil personnel du partant une fois les archives préservées. Remettre tout cela en place après un départ conflictuel relève surtout de la limitation des dégâts — ce qui explique pourquoi la prévention compte."
  - q: "Quelles sont mes responsabilités en matière de protection des données lorsqu'une personne part ?"
    a: "Le principe directeur est que votre entreprise est le responsable du traitement et reste responsable des données personnelles de vos clients même lorsque ces données se trouvent dans la boîte d'un employé qui part, sur son téléphone ou dans un groupe WhatsApp — c'est précisément pourquoi les étapes ci-dessus concernant la messagerie, les fichiers, les appareils et WhatsApp comptent. Le transfert, la conservation et la suppression sécurisée de ces données au moment de la sortie sont donc votre devoir, pas quelque chose que vous pouvez laisser à la personne. Par ailleurs, l'employé est généralement tenu à des obligations de confidentialité — souvent précisées dans son contrat de travail ou un NDA (accord de confidentialité) — sur les listes de clients, les tarifs et d'autres informations confidentielles, ainsi qu'à une obligation de restituer les informations et les biens de l'entreprise ; vérifiez votre propre contrat pour les détails. Ce guide ne donne que la forme : il n'énonce pas les sanctions de la PDPA, et il ne fige pas les détails des modifications de 2024 de la PDPA (telles que les exigences relatives au délégué à la protection des données, la notification des violations ou les règles transfrontalières), qui ont été introduites par étapes et doivent être vérifiées sur pdp.gov.my. Pour tout ce qui relève du droit, vérifiez auprès de pdp.gov.my (le JPDP, Département de la protection des données personnelles) et d'un conseiller qualifié."

lang: "fr"
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
    change: "Rédigé et publié."
    reviewer: null

verificationNeeded:
  - "Le contenu juridique est général et prudent vis-à-vis de la PDPA (Act 709) et de pdp.gov.my / du Département de la protection des données personnelles : aucune sanction n'est énoncée, et les détails des modifications de 2024 de la PDPA (désignation d'un délégué à la protection des données, obligation et délai de notification des violations, portabilité des données, test révisé de transfert transfrontalier, et toute obligation d'enregistrement) sont décrits comme mouvants et à confirmer sur pdp.gov.my, non affirmés comme en vigueur avec des chiffres ou des dates fixes."
  - "Les obligations de confidentialité et de restitution des biens sont présentées comme dépendant du contrat (« vérifiez votre contrat ou votre NDA »), non comme une règle juridique universelle."
  - "Les capacités des produits (déléguer/convertir une boîte aux lettres, réattribuer la propriété de fichiers, déprovisionner un SaaS, cascade SSO) sont décrites comme des capacités durables avec un renvoi à la console d'administration du fournisseur ; aucun chemin de menu produit n'est donné, car ceux-ci changent."
  - "Les mécaniques de WhatsApp (un compte suivant la carte SIM/le numéro, la propriété du compte professionnel et le contrôle administrateur, les limites de la suppression d'un numéro) sont décrites dans leur forme à partir de sources éditeur/CRM et doivent être confirmées auprès de la documentation officielle WhatsApp/Meta Business ; aucune garantie de migration spécifique n'est affirmée."
  - "Le volet statutaire est explicitement hors périmètre et relié à offboarding-statutory-checklist (MY-EMP-0012) ; cet article ne reprend pas les étapes EPF/SOCSO/EIS, LHDN ni dernière paie."

updated: 2026-11-17
sources:
  - title: "Protection des données personnelles (PDPA, Act 709) — portail officiel"
    url: "https://www.malaysia.gov.my/en/quick-links/protection-of-personal-data"
    publisher: "Gouvernement de Malaisie"
  - title: "Département de la protection des données personnelles (JPDP) — confirmer ici tous les détails de la PDPA"
    url: "https://www.pdp.gov.my"
    publisher: "Département de la protection des données personnelles (JPDP)"
  - title: "WhatsApp Business — ce que permet un compte professionnel appartenant à l'entreprise"
    url: "https://www.whatsapp.com/business"
    publisher: "WhatsApp"
  - title: "Sortie informatique et révocation des accès — bonnes pratiques (forme des capacités)"
    url: "https://www.lumos.com/identity-matters/offboarding/employee-offboarding-best-practices"
    publisher: "Lumos"

entity: "Sortie opérationnelle d'un employé"
relations:
  - { rel: "related-to", to: "offboarding-statutory-checklist" }
  - { rel: "related-to", to: "before-putting-client-data-into-ai" }
---

Quand quelqu'un s'en va, la plupart des petites entreprises se concentrent sur la sortie statutaire — cessation EPF et SOCSO, notifications au LHDN, dernière paie — et à juste titre. Mais un départ net sur le papier peut tout de même laisser l'entreprise **verrouillée hors d'une boîte aux lettres, incapable de retrouver des fichiers conservés dans un compte cloud personnel, exposée par des mots de passe que le partant connaît encore, ou coupée de clients qui n'ont jamais traité qu'avec une seule personne sur le téléphone de celle-ci.** Ce guide est la moitié **opérationnelle** de la sortie : le transfert de la messagerie, des fichiers, des systèmes, des appareils et des canaux clients. (Pour les étapes statutaires, voir notre [checklist de sortie statutaire](/fr/employment/offboarding-statutory-checklist).)

Deux risques durables gouvernent tout ce qui suit : l'**accès résiduel** — un ancien initié qui peut encore entrer — et les **actifs orphelins** — dossiers, fichiers et relations clients qui s'en vont par la porte. Refermez ces deux-là et vous avez fait le travail.

## Commencez avant le dernier jour

Une bonne sortie se prépare, elle ne s'improvise pas. Vous n'avez pas besoin d'outils coûteux — une simple checklist et un responsable désigné comblent l'essentiel de l'écart — mais il vous faut deux principes :

- **Révoquez l'accès rapidement, partout.** Quand la personne s'en va, son accès doit être retiré partout où elle pouvait entrer — connexions aux applications, sessions en cache, confiance de l'appareil, jetons API, authentification unique, accès au bâtiment — pas seulement sa messagerie principale. Si vous ne coupez que le compte évident, le reste continue de fonctionner.
- **Calez-le sur le processus RH/statutaire.** Un seul déclencheur — la RH qui confirme la date de départ — devrait piloter à la fois la piste statutaire et cette piste opérationnelle, de sorte que vous ne coupiez pas un accès dont la personne a encore besoin pour un transfert légitime, ni ne le laissiez ouvert après son départ.

Un jugement revient au dirigeant : **une démission à l'amiable** avec préavis permet un chevauchement et un transfert planifiés, tandis qu'**un licenciement, un départ conflictuel ou toute personne disposant d'un accès administrateur/privilégié** appelle une révocation immédiate, souvent au moment de la notification, pour limiter la fenêtre pendant laquelle quelque chose pourrait mal tourner.

## Messagerie : conservez le compte, retirez la personne

L'instinct de supprimer la boîte d'un partant est mauvais — il détruit des dossiers de l'entreprise et casse les fils de discussion clients. La séquence durable est :

1. **Révoquez l'accès de la personne** (bloquez la connexion / réinitialisez le mot de passe).
2. **Déléguez ou convertissez la boîte** vers un responsable ou un successeur, pour que quelqu'un puisse continuer à répondre aux clients. Notez une asymétrie clé : les boîtes aux lettres n'ont généralement **pas** de véritable « changement de propriétaire » comme les fichiers, donc les options réalistes sont de **déléguer, transférer ou exporter** — pas de réattribuer.
3. **Réglez une réponse automatique et un transfert** pour que le courrier client entrant soit récupéré et acheminé, et que les expéditeurs sachent qui contacter désormais.
4. **Préservez ou exportez** la boîte pour vos archives avant toute suppression — les obligations de conservation et les obligations légales peuvent survivre au compte.
5. **Suspendez, puis supprimez uniquement quand** la conservation et la continuité le permettent.

Faites tout cela via la console d'administration de votre fournisseur ; les menus exacts changent, donc c'est la capacité qui compte, pas les clics.

## Fichiers : réattribuez la propriété *avant* de supprimer

Les fichiers sont l'opposé de la messagerie : ils **ont** une vraie capacité de « changement de propriétaire », et l'action la plus importante est de **réattribuer la propriété des fichiers et disques de la personne à l'entreprise ou à un successeur *avant* que le compte ne soit supprimé.** Supprimez d'abord le compte et les fichiers qu'il possédait peuvent être perdus ou rendus orphelins, et les liens partagés cassent.

Deux compléments à cela :

- **Le travail de l'entreprise appartient à un stockage appartenant à l'entreprise** — pas un cloud personnel, un e-mail personnel ou des dossiers présents uniquement en local que l'entreprise ne peut pas contrôler. Faites-en la norme, et faites la chasse aux copies éparses à la sortie.
- **Récupérez les fichiers locaux de l'appareil** — récupérez vers le stockage de l'entreprise tout ce qui n'existe que sur le disque local de l'ordinateur portable *avant* de l'effacer ou de le réimager.

## Systèmes, SaaS et identifiants

Vous ne pouvez révoquer que ce que vous voyez, alors **partez d'un inventaire** de chaque compte, application et système que la personne pouvait atteindre. Le « SaaS fantôme » — des outils souscrits à l'insu de tous — est la faille classique. Ensuite :

- **Déprovisionnez chaque connexion SaaS** — désactivez ou supprimez l'utilisateur dans chaque outil (CRM, comptabilité, design, gestion de projet, consoles cloud, planificateurs de réseaux sociaux), ne vous contentez pas d'arrêter de l'utiliser.
- **Changez les mots de passe partagés que la personne connaissait.** C'est l'étape la plus oubliée et une action différente du déprovisionnement : tout secret partagé — administration Wi-Fi, connexion d'outil partagée, mot de passe de réseau social de l'entreprise — doit être *changé*, car révoquer la connexion personnelle de quelqu'un ne sert à rien si le vrai secret est réutilisé et encore dans sa tête.
- **Révoquez les clés API, les jetons et les intégrations** que la personne a créés ou qui lui sont liés — ceux-ci peuvent survivre à la personne et continuer de tourner.
- **Retirez-la de l'authentification unique** / de l'annuaire d'identité, ce qui devrait se répercuter en cascade sur les applications connectées — mais vérifiez que cela a atteint chacune plutôt que de le supposer.
- **Collectez ou désenregistrez les appareils MFA**, et retirez les cartes d'accès au bâtiment, les codes PIN de porte, les codes d'alarme et l'accès VPN/distant.
- **Confirmez et conservez des preuves** — vérifiez dans la vue d'administration ou d'audit que la connexion est effectivement bloquée, et cochez-le.

## Appareils et biens de l'entreprise

Récupérez l'**ordinateur portable, le téléphone, la carte SIM de l'entreprise, les cartes d'accès, les disques externes et les clés** (reliez cela à l'étape statutaire de restitution des biens), et **effacez ou réimagez** les appareils rendus après avoir récupéré toute donnée présente uniquement en local, afin qu'aucun identifiant en cache ne subsiste.

Le cas plus délicat est celui des **appareils personnels (BYOD)** : lorsque quelqu'un a utilisé son propre téléphone ou ordinateur portable pour le travail, des données de l'entreprise et des clients peuvent se trouver sur un appareil que vous ne pouvez pas récupérer. Sachez à l'avance ce qui s'y trouve, retirez ou récupérez les données personnelles de l'entreprise et des clients à la sortie, et révoquez l'accès de cet appareil aux systèmes de l'entreprise. Parce que des données *personnelles* de clients sont en jeu, traitez cela comme une question de protection des données, pas de simple rangement.

## Le problème des WhatsApp clients

C'est le point de douleur le plus vif pour les petites entreprises malaisiennes, et le message honnête est qu'il est **bien plus facile à prévenir qu'à corriger.**

La cause racine : un compte WhatsApp **suit la carte SIM et le numéro sur lesquels il est enregistré.** Si vos discussions clients — en tête-à-tête et dans des groupes clients — vivent sur le **numéro personnel** d'un employé, alors le canal, l'historique des discussions et souvent la relation client **partent avec l'employé.** Ces discussions contiennent aussi des données personnelles des clients (noms, numéros, adresses, détails de commande) sur un appareil que vous ne contrôlez pas, ce qui, au titre de la PDPA, reste **votre** responsabilité.

Le remède fiable est de tout mettre en place **avant** que quiconque ne parte :

- **Possédez le numéro.** Utilisez des numéros tournés vers le client qui appartiennent à l'entreprise (une carte SIM ou une ligne de l'entreprise), pas le numéro personnel d'un employé — notez toutefois que posséder la *ligne* garde le contrôle du numéro mais ne déplace pas à lui seul le compte WhatsApp ou les fils passés ; cela doit être planifié.
- **Utilisez un compte de niveau professionnel appartenant à l'entreprise** — WhatsApp Business ou la WhatsApp Business Platform — enregistré sur un **e-mail de l'entreprise**, avec **plus d'un administrateur de confiance** pour ne pas être verrouillé dehors si le seul administrateur part, et des conversations acheminées par une **boîte de réception partagée** pour que l'historique ne reste pas piégé sur un seul combiné.
- **Faites-en une règle** que le contact client passe par les canaux de l'entreprise.

Au moment du départ : **transférez l'administration du groupe** à un membre du personnel restant, **retirez le partant comme administrateur du groupe** et du groupe, **présentez le successeur** aux clients dans le fil et faites-les migrer vers le canal de l'entreprise, et organisez la **suppression documentée** des données clients de l'appareil personnel du partant une fois les archives préservées. Remettre cela en place après un départ conflictuel relève surtout de la limitation des dégâts.

## Transfert de connaissances et continuité

L'accès n'en est que la moitié — l'entreprise doit aussi continuer à *travailler* :

- **Un document de transfert** — ce que la personne faisait, les tâches récurrentes et leur calendrier, où se trouvent les choses, les clients et fournisseurs clés, et tout travail en cours.
- **Réattribuez la propriété** de chaque client, fournisseur et tâche récurrente à un successeur désigné, et dites aux clients qui contacter désormais.
- **Les identifiants dans un gestionnaire de mots de passe de l'entreprise**, pas un personnel ni la mémoire de quelqu'un ; changez les mots de passe partagés après la sortie.
- **Une période de chevauchement** lorsque le départ est planifié et à l'amiable — une fenêtre où partant et successeur se chevauchent transfère le savoir tacite qu'aucun document ne capture. (Non disponible pour les départs brusques — ce qui est en soi une raison de garder les autres étapes bien serrées.)

## Le fil de la protection des données

Un principe traverse tout cela et mérite d'être énoncé clairement : au titre de la **loi de 2010 sur la protection des données personnelles (PDPA, Act 709)**, appliquée par le **Département de la protection des données personnelles (JPDP)**, votre entreprise est le responsable du traitement et **reste responsable des données personnelles de vos clients même lorsqu'elles se trouvent dans la boîte d'un employé qui part, sur son téléphone ou dans un groupe WhatsApp.** C'est précisément pourquoi les étapes ci-dessus concernant la messagerie, les fichiers, les appareils et WhatsApp ne sont pas un simple rangement facultatif — prendre en charge le transfert, la conservation et la suppression sécurisée de ces données *est* l'obligation.

Quelques limites délibérées de ce que ce guide affirme : il n'énonce pas les sanctions de la PDPA, et il ne fige pas les détails des modifications de 2024 de la PDPA — telles que les exigences relatives au délégué à la protection des données, la notification des violations ou les règles de transfert transfrontalier — qui ont été introduites par étapes et doivent être vérifiées sur **pdp.gov.my**. Les obligations de confidentialité et de restitution des informations dépendent du contrat de travail ou du NDA, alors vérifiez le vôtre.

---

**Périmètre et limites.** Ceci est le transfert opérationnel, **pas** la sortie statutaire (EPF/SOCSO/EIS, LHDN, dernière paie, permis de travail — voir la [checklist statutaire](/fr/employment/offboarding-statutory-checklist)). Ce n'est pas un tutoriel produit — les capacités changent, alors utilisez la console d'administration et la documentation officielle de votre fournisseur plutôt qu'un chemin de menu cité ici. C'est une information générale, **pas un conseil juridique** : confirmez les détails de la PDPA et de la confidentialité auprès de **pdp.gov.my** et d'un conseiller qualifié. Et cela couvre les transferts de routine, pas la réponse à un incident de sécurité — si un départ implique un soupçon de vol de données ou de sabotage, traitez-le comme un incident à escalader.
