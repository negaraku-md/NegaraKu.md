---
topicId: MY-ACC-0011
title: "Logiciels de comptabilité en Malaisie : les deux capacités qui en décident désormais"
seoTitle: "Logiciels de comptabilité en Malaisie : compatibilité e-Invoice et MBRS"
slug: "accounting-software-malaysia"
category: "accounting"
subcategory: ["bookkeeping"]
summary: "Une manière neutre vis-à-vis des fournisseurs d'évaluer un logiciel de comptabilité pour une société malaisienne, sur les deux axes qui comptent désormais — comment il atteint MyInvois, et si sa sortie peut alimenter un dépôt MBRS."

tier: "4"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "Les listes de fonctionnalités ne séparent plus les logiciels de comptabilité vendus en Malaisie. Deux capacités le font. Premièrement, comment le logiciel achemine un document vers MyInvois — via le portail gratuit, via une intégration directe par API, ou via un intermédiaire qui soumet sous ses propres identifiants. Deuxièmement, si sa sortie peut être mappée sur la taxonomie SSMxT de SSM pour un dépôt MBRS, étant donné qu'aucun logiciel de comptabilité ne dépose directement auprès de SSM. Tout le reste relève de la préférence."
keyTakeaways:
  - "LHDN documente deux mécanismes de transmission — le portail MyInvois et l'API — plus la soumission par un intermédiaire désigné"
  - "LHDN publie un SDK mais aucune accréditation, certification ni liste de fournisseurs approuvés pour les logiciels e-Invoice ; une affirmation d'être «approuvé par LHDN» émane du fournisseur lui-même"
  - "La seule accréditation réelle dans la facturation électronique malaisienne est celle de MDEC, en tant qu'Autorité Peppol, couvrant les prestataires de services Peppol et les fournisseurs de solutions Peppol-Ready — et Peppol n'est pas une exigence de MyInvois"
  - "Aucun logiciel de comptabilité ne dépose auprès de MBRS ; les dépôts sont construits dans l'outil de préparation propre à SSM et téléversés vers mPortal sous forme de zip"
  - "«Prêt pour MBRS» signifie donc une balance de vérification stable et exportable qui se mappe sur les concepts SSMxT, et non un bouton de dépôt"
  - "La taxonomie SSMxT ne peut pas être étendue par une société, de sorte qu'un plan de comptes sans place dans la taxonomie est un coût récurrent"
  - "Un intermédiaire ne peut récupérer que les documents qu'il a lui-même soumis, de sorte que changer de fournisseur ne transfère pas votre historique de soumissions"
appliesTo: "Sociétés malaisiennes sélectionnant ou remplaçant un logiciel de comptabilité, et équipes financières auditant ce que leur logiciel actuel peut réellement faire."

verificationNeeded:
  - "Les affirmations de capacité concernant un produit spécifique sont délibérément absentes de cette page — vérifiez chacune d'elles par rapport à la documentation publiée actuelle du fournisseur lui-même, car la couverture de localisation change d'une version à l'autre sans préavis"
  - "SSM ne publie pas de liste approuvée ou accréditée de logiciels tiers de préparation XBRL sur ses pages MBRS ; vérifiez auprès de SSM avant de vous fier à toute affirmation de certification MBRS d'un fournisseur"
  - "La Directive e-Invoice et la Directive spécifique sont révisées fréquemment — confirmez la version actuelle avant de considérer toute exigence d'intégration comme acquise"

lang: "fr"
masterLanguage: "en"
translationStatus: "stale"

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

updated: 2026-07-20
sources:
  - title: "Kit de développement logiciel (SDK) pour le système MyInvois de la LHDNM (Software Development Kit (SDK) for the LHDNM MyInvois System)"
    url: "https://sdk.myinvois.hasil.gov.my/"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
  - title: "Directive e-Invoice de l'IRBM (IRBM e-Invoice Guideline)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
  - title: "Prestataires de services Peppol — Facturation électronique nationale (Peppol Service Providers — National e-Invoicing)"
    url: "https://www.mdec.my/national-einvoicing/peppol-service-providers"
    publisher: "Société malaisienne de l'économie numérique (MDEC)"
  - title: "Document d'architecture SSMxT 2022 (SSMxT 2022 Architecture Document)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "Commission des sociétés de Malaisie (SSM)"
  - title: "Outil de préparation MBRS (MBRS Preparation Tool)"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/XBRL%20250918/MBRS-Preparation-Tool.aspx"
    publisher: "Commission des sociétés de Malaisie (SSM)"

entity: "Accounting software"
relations:
  - { rel: "related-to", to: "myinvois-integration" }
  - { rel: "affects", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "sdn-bhd-bookkeeping" }
related: ["sdn-bhd-bookkeeping", "mbrs-2-filing-guide", "mbrs-tagging-errors", "myinvois-integration", "e-invoice-accounting-records", "bookkeeping-in-house-vs-outsourced", "e-invoicing", "accounting-records-section-245"]
keywords: ["accounting software Malaysia", "e-invoice compliant accounting software", "MyInvois integration software", "MBRS XBRL software Malaysia", "LHDN approved accounting software", "SSMxT taxonomy export"]
---

Le listicle malaisien des logiciels de comptabilité est un genre résolu : dix
produits, un paragraphe chacun, un tableau de fonctionnalités que personne
n'utilise, et un lien d'affiliation. Il n'a jamais été utile, et depuis l'arrivée
de l'e-Invoice et du MBRS 2.0 il est activement trompeur, car il classe les
produits selon des critères qui ne les séparent plus.

Deux capacités les séparent désormais. Aucune n'apparaît sur une grille de
fonctionnalités.

## Axe 1 : comment le logiciel achemine un document vers MyInvois

LHDN documente **deux mécanismes de transmission** — le portail MyInvois et l'API
— et permet séparément à un contribuable de désigner un **intermédiaire** pour
soumettre en son nom. Cela produit quatre formes pratiques, et le logiciel que
vous achetez détermine lesquelles vous restent ouvertes.

| Voie | Ce que le logiciel doit faire | Ce qu'il faut vérifier |
| --- | --- | --- |
| **Portail seul** | Rien. Vous saisissez ou téléversez par lots les documents dans MyInvois | Si le logiciel peut exporter un fichier conforme à la mise en page du tableur par lots du portail, ou si vous ressaisissez |
| **API directe** | Construire et signer des documents UBL 2.1, gérer les jetons, traiter la validation asynchrone | Si la localisation malaisienne couvre les types de documents autofacturés et les champs de l'annexe d'importation, et pas seulement les factures de vente standard |
| **Via un intermédiaire ou un middleware** | Exporter des données de transactions propres selon un calendrier | Quels identifiants la soumission utilise, qui conserve les données, et ce que vous emportez en partant |
| **Via un prestataire de services Peppol** | Comme le middleware, par un point d'accès Peppol | Que vous avez réellement besoin d'un échange interopérable avec des partenaires commerciaux — Peppol n'est pas une exigence de MyInvois |

Le choix entre ces voies est une question de volume et d'architecture traitée dans
[l'intégration avec MyInvois](/fr/taxation/myinvois-integration). Ce qui a sa place
ici, c'est la conséquence côté logiciel : un logiciel sans voie d'intégration par
API ne vous empêche pas de vous conformer, il vous engage au portail, et le coût
du portail, ce sont des frappes au clavier et une concentration à la clôture du
mois, non des frais de licence.

**Le détail de l'intermédiaire qui mérite d'être inscrit dans un contrat :** un
intermédiaire ne peut voir et récupérer que les e-Invoices qu'il a lui-même
soumises. Changez de fournisseur et votre historique de soumissions ne vous suit
pas. Prévoyez une exécution en parallèle et conservez votre propre archive.

## L'affirmation d'accréditation dont il faut se méfier

LHDN publie un SDK, une documentation d'API et une FAQ. Elle ne publie pas de
dispositif d'accréditation, de programme de certification ni de liste de
fournisseurs approuvés pour les logiciels e-Invoice. Si un produit est commercialisé
comme **approuvé par LHDN**, ce statut est la description que le fournisseur fait de
lui-même. Demandez à voir l'instrument.

Il existe une accréditation authentique dans la facturation électronique
malaisienne, et elle appartient à un autre. **MDEC est l'Autorité Peppol de la
Malaisie**, et elle accrédite deux rôles distincts :

| Rôle | Ce que c'est |
| --- | --- |
| **Prestataire de services Peppol (SP)** | Exploite un point d'accès Peppol — la passerelle de connectivité qui achemine les documents |
| **Fournisseur de solutions Peppol-Ready (PRSP)** | Construit un logiciel ou un ERP conforme à Peppol pour les utilisateurs finaux |

Les deux listes sont publiées par MDEC. Aucune n'est une approbation de LHDN, et
aucune n'est requise pour se conformer au mandat e-Invoice. Un fournisseur titulaire
de l'accréditation MDEC a démontré sa conformité aux normes Peppol, ce qui est une
véritable qualification — pour Peppol.

## Axe 2 : si la sortie peut alimenter un dépôt MBRS

Voici le fait qui recadre toute la catégorie : **aucun logiciel de comptabilité ne
dépose d'états financiers auprès de SSM.**

Les dépôts sont construits dans l'**outil de préparation MBRS (mTool)** propre à
SSM, qui génère un zip téléversé vers le portail MBRS. C'est l'artefact de dépôt
accepté. Quoi que produise votre grand livre, cela ne devient un dépôt MBRS
qu'après être passé par cet outil.

Ainsi «prêt pour MBRS», en tant qu'affirmation logicielle, ne peut honnêtement
signifier qu'une chose : la sortie est dans une forme qui se mappe proprement sur
la taxonomie **SSMxT** de SSM. Trois propriétés en décident :

- **Une balance de vérification stable et exportable** avec des codes de compte qui ne changent pas d'une année à l'autre. Le mappage est reconstruit à partir de zéro chaque fois que les codes bougent.
- **Une base de présentation qui ne dérive pas.** Passer d'un format de présentation à un autre oblige à refaire le mappage même lorsque les chiffres sont identiques.
- **Un plan de comptes dont les lignes ont un endroit où atterrir.** L'architecture SSMxT énonce que les entités **ne doivent pas étendre la taxonomie** — les extensions propres à une société sont interdites, et le détail relève des blocs de texte. Un compte sans concept correspondant est une décision manuelle chaque année.

Deux pièges mécaniques se situent en aval et méritent d'être connus avant
d'accuser le logiciel. Les charges sont stockées comme valeurs **positives** dans
SSMxT, l'inverse de la plupart des exports de grand livre. Et un chiffre exprimé en
milliers doit porter le bon attribut `decimals` — le mauvais passe la validation
silencieusement et dépose un nombre mille fois trop grand ou trop petit.

## Une liste d'évaluation à envoyer à un fournisseur

1. Quel mécanisme de transmission MyInvois le produit prend-il en charge aujourd'hui — export vers le portail, API directe, ou soumission via votre propre service d'intermédiaire ?
2. Si API : la localisation couvre-t-elle les e-Invoices **autofacturées** et les champs d'annexe pour les biens importés, ou seulement les factures de vente standard ?
3. Sous quels identifiants les documents sont-ils soumis, et qui conserve les documents validés ?
4. Pouvons-nous exporter une balance de vérification complète avec des codes de compte stables, dans un format lisible par machine, sans consultant ?
5. Détenez-vous l'accréditation MDEC en tant que SP ou PRSP Peppol — et si vous affirmez être approuvé par LHDN, quel document l'atteste ?
6. À la sortie, qu'emportons-nous : le grand livre, le mappage, l'historique des soumissions ?

## Pourquoi cette page ne nomme aucun produit

Parce qu'une capacité n'est publiable que si le fournisseur ou LHDN la publie, et
les pages de capacités des fournisseurs changent entre les versions sans journal
des modifications. Une comparaison de produits écrite aujourd'hui est un instantané
du texte marketing, non du logiciel. La liste ci-dessus survit à l'instantané ; un
tableau classé n'y survivrait pas.

## Erreurs courantes

- **Croire une affirmation d'être approuvé par LHDN.** LHDN ne publie aucune telle liste.
- **Confondre l'accréditation Peppol de MDEC avec une approbation de LHDN,** ou traiter Peppol comme obligatoire.
- **Acheter un bouton de dépôt.** Rien ne se dépose auprès de MBRS hormis la sortie de mTool.
- **Lire «prêt pour MBRS» comme une certification.** Au mieux cela signifie un export propre et stable.
- **Changer le plan de comptes chaque année** et payer de nouveau le mappage à chaque fois.
- **N'évaluer que la facturation des ventes.** Le volume autofacturé est ce qui casse la plupart des implémentations.
- **Supposer que la validation détecte les erreurs d'échelle.** Une erreur d'échelle d'un facteur mille passe.

## Et ensuite

Lancez deux tests sur ce que vous possédez déjà avant de faire votre marché.
Exportez une balance de vérification complète et vérifiez si chaque compte a une
place SSMxT évidente. Puis prenez une transaction autofacturée — une commission
d'agent ou un fournisseur étranger — et suivez-la de bout en bout jusqu'à MyInvois.
Celle des deux qui échoue est ce que vous achetez réellement.
