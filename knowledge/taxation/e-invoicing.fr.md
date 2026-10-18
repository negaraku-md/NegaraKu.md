---
topicId: MY-TAX-0003
title: "Facturation électronique en Malaisie : par où commencer avec MyInvois"
seoTitle: "Facturation électronique en Malaisie : le point de départ MyInvois"
slug: "e-invoicing"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Une page d'orientation sur le mandat de facture électronique de la Malaisie : comment fonctionne la validation MyInvois, à quel moment votre entreprise est entrée dans le champ d'application, et quel guide détaillé répond à votre question."

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "La facturation électronique exige que les données de la facture soient transmises au système MyInvois de la LHDN pour validation, via le portail MyInvois gratuit ou un système connecté par API. Un document validé reçoit un numéro d'identifiant unique et un code QR. Le mandat est échelonné selon le chiffre d'affaires annuel, la dernière phase atteignant les entreprises jusqu'à RM5 millions à partir du 1er janvier 2026, les entreprises en dessous de RM1 million étant exonérées. Chaque phase comporte sa propre période d'assouplissement provisoire."
keyTakeaways:
  - "La validation passe par MyInvois avant que le document ne fonctionne comme une facture aux fins de l'impôt sur le revenu"
  - "Quatre phases, pas de cinquième : la dernière a commencé le 1er janvier 2026 pour un chiffre d'affaires jusqu'à RM5 millions"
  - "Les entreprises dont le chiffre d'affaires annuel est inférieur à RM1,000,000 sont exonérées"
  - "Votre phase est fixée par les chiffres de l'exercice 2022 ou de l'exercice d'imposition 2022 et ne change pas ensuite"
  - "Une facture électronique validée par la LHDN ne satisfait pas automatiquement aux règles de la facture fiscale SST — c'est une exigence documentaire distincte"
appliesTo: "Chefs d'entreprise, équipes financières et administrateurs de systèmes qui se préparent au mandat de la facture électronique ou qui opèrent sous son régime."

verificationNeeded: []

lang: "fr"
sourceContentHash: "46533f76e2996181"
masterLanguage: "en"
translationStatus: "in-sync"

status: "published"
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
  - title: "Directive sur la facture électronique de l'IRBM (IRBM e-Invoice Guideline)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Administration fiscale de Malaisie (LHDN)"
    date: "2026-07-07"
  - title: "Directive spécifique sur la facture électronique de l'IRBM (IRBM e-Invoice Specific Guideline)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "Administration fiscale de Malaisie (LHDN)"
    date: "2026-07-07"
  - title: "Portail MyInvois (MyInvois Portal)"
    url: "https://myinvois.hasil.gov.my/"
    publisher: "Administration fiscale de Malaisie (LHDN)"

entity: "e-Invoicing and MyInvois"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "explained-in", to: "myinvois-phases" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "consolidated-e-invoice" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
  - { rel: "related-to", to: "e-invoice-vs-tax-invoice" }
related: ["myinvois-phases", "myinvois-integration", "e-invoice-data-fields", "consolidated-e-invoice", "self-billed-e-invoice", "e-invoice-vs-tax-invoice", "e-invoice-accounting-records"]
keywords: ["facture électronique Malaisie", "MyInvois", "e-invois LHDN", "phases facturation électronique Malaisie", "validation MyInvois"]
---

Autrefois, une facture était valable parce que vous l'émettiez. Sous le mandat de
la facture électronique, elle est valable parce que la LHDN le dit : le document
doit être transmis à MyInvois et validé avant de remplir sa fonction aux fins de
l'impôt sur le revenu.

Ce seul changement est ce qui génère toutes les questions en aval, et la plupart
ont une réponse dédiée.

## Comment fonctionne la validation, en six étapes

1. Le fournisseur transmet les données de la transaction à MyInvois, soit en les
   saisissant dans le portail gratuit, soit automatiquement via un système
   connecté par API.
2. La LHDN valide la structure et les champs requis en quasi temps réel.
3. En cas de succès, un **numéro d'identifiant unique** et un code QR sont émis.
4. Le fournisseur partage le document validé avec l'acheteur.
5. L'acheteur peut vérifier le code QR par rapport aux registres de la LHDN.
6. Les rejets et les annulations doivent être traités dans le délai imparti.

## Quel guide vous faut-il

| Si votre question est | Lisez |
| --- | --- |
| Quand cela s'applique-t-il à mon entreprise ? | [Phases, seuils et dates d'assouplissement de MyInvois](/fr/taxation/myinvois-phases) |
| Portail, API ou un prestataire de middleware ? | [Intégration à MyInvois](/fr/taxation/myinvois-integration) |
| Quelles données dois-je réellement envoyer ? | [Référence des champs de données de la facture électronique](/fr/taxation/e-invoice-data-fields) |
| Puis-je regrouper mes ventes de détail au lieu d'en émettre une par vente ? | [Factures électroniques consolidées](/fr/taxation/consolidated-e-invoice) |
| Mon fournisseur est à l'étranger, ou est une personne physique | [Factures électroniques autofacturées](/fr/taxation/self-billed-e-invoice) |
| Cela remplace-t-il ma facture fiscale SST ? | [Facture électronique vs facture fiscale SST](/fr/taxation/e-invoice-vs-tax-invoice) |
| Combien de temps dois-je les conserver ? | [Factures électroniques et registres comptables](/fr/accounting/e-invoice-accounting-records) |

## Les quatre choses que les gens comprennent de travers

**Il n'y a pas de phase cinq.** Le déploiement s'est fait en quatre phases selon
le chiffre d'affaires annuel, se terminant par la cohorte jusqu'à RM5 millions à
partir du 1er janvier 2026. Les entreprises dont le chiffre d'affaires annuel est
inférieur à **RM1,000,000** sont exonérées, aux côtés des bureaux diplomatiques
étrangers et des personnes physiques n'exerçant pas d'activité. Cela ne contredit
pas le démarrage distinct du **1er juillet 2026** qui s'applique aux entreprises
*nouvellement créées* — une entreprise qui a débuté entre 2023 et 2025 avec un
chiffre d'affaires de RM1 million ou plus y entre à cette date. C'est une règle
pour les entrants sans référence à l'exercice 2022, non une cinquième phase de
chiffre d'affaires.

**Votre phase est fixe, non flottante.** Elle est déterminée par les états
financiers audités de l'exercice 2022 ou la déclaration de l'exercice d'imposition
2022, calculée au prorata lorsque la clôture d'exercice a changé, et elle ne bouge
pas ensuite. Croître au-delà d'un seuil par la suite ne vous déplace pas dans une
phase antérieure, et décroître ne vous en fait pas sortir.

**Les périodes d'assouplissement ne sont pas les mêmes que les dates de phases.**
Chaque phase comportait une période provisoire durant laquelle la LHDN n'agissait
pas contre les manquements, et l'assouplissement de la phase 4 dure
considérablement plus longtemps que les précédents. Lisez le guide des phases
plutôt que de supposer que la date du mandat est la date d'application.

**Une facture électronique validée n'est pas automatiquement une facture fiscale
SST.** Les deux régimes ont des exigences documentaires distinctes, et la position
légale est que, lorsque les particularités d'une facture électronique sont
incompatibles avec les exigences de facturation d'une autre loi écrite, la facture
électronique n'est valable qu'aux fins de l'Income Tax Act. Les assujettis
enregistrés à la SST ont besoin d'un document qui satisfait aux deux.

## Erreurs courantes

- Attendre la date du mandat pour commencer les tests. Les échecs de validation
  du TIN et d'intégration n'apparaissent que sous un volume réel de transactions.
- Supposer que chaque client a besoin d'une facture électronique détaillée, alors
  que de nombreuses transactions B2C peuvent être consolidées — sous réserve des
  activités interdites.
- Négliger les obligations d'autofacturation pour les fournisseurs étrangers et
  pour les paiements à des personnes physiques qui n'émettent rien elles-mêmes.
- Traiter cela comme un projet informatique. La plupart des échecs à la mise en
  service tiennent à des données maîtres clients et fournisseurs peu fiables, non
  à des bogues d'intégration.
- Supposer que MyInvois est votre archive. La LHDN ne publie aucune garantie de
  conservation pour les documents validés ; le devoir de conservation reste le
  vôtre.

## Et ensuite

Si vous ne savez pas encore si ni quand vous êtes dans le champ d'application,
commencez par le guide des phases : il porte les tranches de chiffre d'affaires,
le seuil d'exonération, les règles pour les nouvelles entreprises et chaque date
de fin d'assouplissement. Si vous êtes déjà dans le champ et que vous choisissez
comment transmettre, le guide d'intégration compare le portail, l'API directe et
les routes de middleware selon le volume de transactions.
