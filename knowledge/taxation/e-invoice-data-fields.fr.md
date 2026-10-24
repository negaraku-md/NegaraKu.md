---
topicId: MY-TAX-0014
title: "Référence des champs de données de l'e-Invoice"
seoTitle: "Champs de données de l'e-Invoice en Malaisie : référence des 55 champs"
slug: "e-invoice-data-fields"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Les 55 champs obligatoires de l'e-Invoice avec leur statut obligatoire ou facultatif, les champs de l'annexe, les listes de codes de LHDN et le validateur qui rejette chaque type d'erreur."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "LHDN exige 55 champs de données pour émettre une e-Invoice, regroupés en huit catégories. La plupart sont obligatoires ; vingt sont facultatifs et huit sont conditionnellement obligatoires : les numéros d'enregistrement SST et de la taxe de séjour, la référence de l'e-Invoice originale, le taux de change de la devise, le taux d'imposition et les deux champs d'exonération fiscale. Une annexe ajoute des références obligatoires de formulaires douaniers pour l'importation et l'exportation de biens."
keyTakeaways:
  - "55 champs à l'Appendice 1, regroupés en huit catégories, plus une annexe à l'Appendice 2"
  - "XML ou JSON, tous deux conformes à UBL 2.1"
  - "Huit champs sont conditionnellement obligatoires plutôt que toujours requis"
  - "La date et l'heure de l'e-Invoice doivent être la date et l'heure actuelles"
  - "Sept validateurs s'exécutent : trois immédiats, quatre en arrière-plan"
  - "Les listes de codes pour le type d'e-Invoice, le type d'impôt, la devise, MSIC, l'État et l'UoM sont publiées dans le SDK"
  - "Une e-Invoice défectueuse peut être remplacée par une e-Invoice de substitution dans un délai de trois jours en vertu de la s.82C(8) de l'ITA de 1967"
appliesTo: "Développeurs construisant une intégration MyInvois, consultants ERP mappant les données de référence et équipes financières déboguant des envois rejetés."

verificationNeeded:
  - "La liste publiée complète des codes d'erreur de validation granulaires (préfixes CF, DS, ST) — le SDK documente les sept catégories de validateurs et les codes d'erreur HTTP standard mais ne publie pas de table exhaustive code-vers-condition"
  - "Les limites de débit de l'API par point de terminaison — le SDK renvoie aux Integration Practices sans énoncer de limites numériques sur la page FAQ"

lang: "fr"
sourceContentHash: "7457966f1e6638bb"
masterLanguage: "en"
translationStatus: "in-sync"

status: "published"
aiAssisted: true
reviewer: null
reviewed: "2026-07-25"
reviewDue: 2027-07-22
publishedBy: "ashton-tan"
revision: 0
revisions:
  - revision: 0
    date: 2026-07-20
    change: "Approved and published."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Guide de l'e-Invoice (version 4.7) — Appendices 1 et 2 (e-Invoice Guideline (Version 4.7) — Appendices 1 and 2)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
    date: "2026-07-07"
  - title: "MyInvois SDK — règles de validation des documents (MyInvois SDK — document validation rules)"
    url: "https://sdk.myinvois.hasil.gov.my/document-validation-rules/"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
  - title: "MyInvois SDK — listes de codes (MyInvois SDK — code lists)"
    url: "https://sdk.myinvois.hasil.gov.my/codes/"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
  - title: "MyInvois SDK — réponse d'erreur standard (MyInvois SDK — standard error response)"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
  - title: "Guide spécifique de l'e-Invoice (version 4.8) — Appendice 1, liste des TIN généraux (e-Invoice Specific Guideline (Version 4.8) — Appendix 1, list of general TIN)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
    date: "2026-07-07"

entity: "e-Invoice data fields"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
related: ["e-invoicing", "myinvois-phases", "myinvois-integration", "self-billed-e-invoice", "consolidated-e-invoice"]
keywords: ["e-Invoice data fields", "55 fields e-Invoice", "MyInvois mandatory fields", "e-Invoice validation error", "UBL 2.1 Malaysia", "medan data e-invois"]
---

Chaque envoi rejeté remonte à l'une de deux choses : un champ que LHDN traite comme
obligatoire mais que votre ERP traite comme facultatif, ou une valeur de code qui ne
figure pas dans la liste de LHDN. Cette page est la liste des champs, telle que
publiée aux Appendices 1 et 2 du Guide de l'e-Invoice version 4.7.

Le format est **XML ou JSON**, tous deux conformes à **UBL 2.1**. LHDN regroupe les 55
champs en huit catégories : Address, Business Details, Contact Number, Invoice
Details, Parties, Party Details, Payment Info et Products / Services.

## Les 55 champs

**M** = obligatoire · **C** = conditionnellement obligatoire · **O** = facultatif

### Parties et détails des parties

| # | Champ | Statut | Note |
| --- | --- | --- | --- |
| 1 | Nom du fournisseur | M | |
| 2 | Nom de l'acheteur | M | General Public sur une e-Invoice consolidée |
| 3 | TIN du fournisseur | M | Les codes TIN généraux s'appliquent lorsqu'il n'est pas disponible |
| 4 | Numéro d'enregistrement / d'identification / de passeport du fournisseur | M | Les inscrits auprès de SSM utilisent uniquement le **nouveau BRN à 12 caractères** |
| 5 | Numéro d'enregistrement SST du fournisseur | **C** | Obligatoire pour les inscrits à la SST |
| 6 | Numéro d'enregistrement de la taxe de séjour du fournisseur | **C** | Obligatoire pour les inscrits à la taxe de séjour |
| 7 | Courriel du fournisseur | O | |
| 8 | Code MSIC du fournisseur | M | Numérique à 5 chiffres ; 00000 lorsqu'il n'est pas disponible pour un fournisseur étranger |
| 9 | Description de l'activité commerciale du fournisseur | M | |
| 10 | TIN de l'acheteur | M | |
| 11 | Numéro d'enregistrement / d'identification / de passeport de l'acheteur | M | |
| 12 | Numéro d'enregistrement SST de l'acheteur | **C** | Obligatoire pour les inscrits à la SST |
| 13 | Courriel de l'acheteur | O | |

### Adresse et contact

| # | Champ | Statut |
| --- | --- | --- |
| 14 | Adresse du fournisseur | M |
| 15 | Adresse de l'acheteur | M |
| 16 | Numéro de contact du fournisseur | M |
| 17 | Numéro de contact de l'acheteur | M |

### Détails de la facture

| # | Champ | Statut | Note |
| --- | --- | --- | --- |
| 18 | Version de l'e-Invoice | M | SVDP 1.2 / 1.3 uniquement pour la divulgation volontaire |
| 19 | Type d'e-Invoice | M | Voir la liste de codes ci-dessous |
| 20 | Code / numéro de l'e-Invoice | M | Référence propre du fournisseur |
| 21 | Numéro de référence de l'e-Invoice originale | **C** | Obligatoire sur les notes de crédit, de débit et de remboursement |
| 22 | Date et heure de l'e-Invoice | M | **Doit être la date et l'heure actuelles** |
| 23 | Signature numérique de l'émetteur | M | Certificat du prestataire de services lorsqu'un prestataire est utilisé |
| 24 | Code de devise de la facture | M | |
| 25 | Taux de change de la devise | **C** | Obligatoire lorsque la devise n'est pas le ringgit |
| 26 | Fréquence de facturation | O | |
| 27 | Période de facturation | O | |

### Produits et services

| # | Champ | Statut | Note |
| --- | --- | --- | --- |
| 28 | Classification | M | Code à 3 chiffres du catalogue de LHDN |
| 29 | Description du produit ou service | M | Numéros de référence des reçus sur une e-Invoice consolidée |
| 30 | Prix unitaire | M | |
| 31 | Type d'impôt | M | Niveau ligne et niveau facture |
| 32 | Taux d'imposition | **C** | |
| 33 | Montant de l'impôt | M | Niveau ligne et niveau facture |
| 34 | Détails de l'exonération fiscale | **C** | Obligatoire si une exonération s'applique |
| 35 | Montant exonéré d'impôt | **C** | Obligatoire si une exonération s'applique |
| 36 | Sous-total | M | Niveau ligne uniquement |
| 37 | Total hors taxe | M | Niveau ligne et niveau facture |
| 38 | Total toutes taxes comprises | M | Niveau facture uniquement |
| 39 | Montant net total | O | Niveau facture uniquement |
| 40 | Montant total à payer | M | Niveau facture uniquement |
| 41 | Montant d'arrondi | O | Niveau facture uniquement |
| 42 | Montant imposable total par type d'impôt | O | Niveau facture uniquement |
| 43 | Quantité | O | |
| 44 | Unité de mesure | O | |
| 45 | Taux de remise | O | |
| 46 | Montant de la remise | O | |
| 47 | Taux de frais / commission | O | |
| 48 | Montant des frais / commission | O | |

### Informations de paiement

| # | Champ | Statut |
| --- | --- | --- |
| 49 | Mode de paiement | O |
| 50 | Numéro de compte bancaire du fournisseur | O |
| 51 | Conditions de paiement | O |
| 52 | Montant de l'acompte | O |
| 53 | Date de l'acompte | O |
| 54 | Numéro de référence de l'acompte | O |
| 55 | Numéro de référence de la facture | O |

## Champs de l'annexe

| Champ | Statut | S'applique à |
| --- | --- | --- |
| Numéro de référence du formulaire douanier n° 1, 9, etc. | **Obligatoire** | Importation de biens |
| Numéro de référence du formulaire douanier n° 2 | Facultatif | Exportation de biens |
| Nom / adresse / TIN / numéro d'enregistrement ou de passeport du destinataire de l'envoi | Facultatif | Biens expédiés à une personne autre que l'acheteur |
| Incoterms | Facultatif | Importation et exportation de biens |
| Code tarifaire du produit | Facultatif | Biens uniquement |
| Informations sur l'accord de libre-échange | Facultatif | Exportation uniquement, le cas échéant |
| Numéro d'autorisation pour exportateur agréé, p. ex. numéro ATIGA | Facultatif | Exportation uniquement, le cas échéant |
| Pays d'origine | Facultatif | Importation et exportation de biens |
| Détails des autres frais | Facultatif | Importation et exportation de biens |

LHDN signale que les exigences de l'annexe peuvent être mises à jour de temps à autre.

## Listes de codes

**Type d'e-Invoice**

| Code | Type | | Code | Type |
| --- | --- | --- | --- | --- |
| 01 | Facture | | 11 | Facture auto-facturée |
| 02 | Note de crédit | | 12 | Note de crédit auto-facturée |
| 03 | Note de débit | | 13 | Note de débit auto-facturée |
| 04 | Note de remboursement | | 14 | Note de remboursement auto-facturée |

**Type d'impôt**

| Code | Type |
| --- | --- |
| 01 | Taxe sur les ventes |
| 02 | Taxe sur les services |
| 03 | Taxe de séjour |
| 04 | Taxe sur les biens de grande valeur |
| 05 | Taxe sur les ventes de biens de faible valeur |
| 06 | Non applicable |
| E | Exonération fiscale, le cas échéant |

**TIN général** (Guide spécifique de l'e-Invoice, Appendice 1)

| Code | Usage |
| --- | --- |
| EI00000000010 | General Public — personne physique malaisienne détenant uniquement une MyKad ; acheteur sur une e-Invoice consolidée ; fournisseur sur une e-Invoice auto-facturée consolidée |
| EI00000000020 | Acheteur étranger ou destinataire d'envoi étranger |
| EI00000000030 | Fournisseur étranger, auto-facturé |
| EI00000000040 | Gouvernement, autorités d'État et locales, organismes statutaires, institutions exonérées |

Le SDK publie aussi des codes de classification, des codes de pays, des codes de
devise, des codes MSIC, des modes de paiement, des codes d'État et des unités de mesure.

## Validateurs et ce qui les déclenche

| Validateur | Moment | Cause typique d'échec |
| --- | --- | --- |
| **Structure** | Immédiat | XML ou JSON malformé, ou un document qui ne correspond pas à la structure requise pour ce type et cette version selon UBL 2.1 |
| **Core Fields** | Immédiat | Un champ obligatoire est absent |
| **Code** | Immédiat et en arrière-plan | Une valeur de devise, de type d'impôt ou autre code qui ne figure pas dans la liste de LHDN |
| **Signature** | En arrière-plan | La signature numérique échoue à la vérification |
| **Taxpayer** | En arrière-plan | Un TIN référencé dans le document n'est pas valable à la date d'émission du document |
| **Referenced Documents** | En arrière-plan | Une note de crédit, de débit ou de remboursement pointe vers un document qui n'est pas une e-Invoice valable au moment de son émission |
| **Duplicate Document** | En arrière-plan | Un document quasi identique avait déjà été envoyé — code d'erreur **DS302** |

Le statut du document passe de **Submitted → Valid** ou **Invalid**.
*Submitted* signifie uniquement que les contrôles de structure et de champs
de base ont réussi ; les validateurs en arrière-plan peuvent encore le rejeter.

Les erreurs au niveau du transport utilisent des correspondances HTTP standard : `BadRequest` et
`BadArgument` (400), `Unauthorized` (401), `Forbidden` (403), `NotFound` (404),
`TooManyRequests` (429, avec un en-tête `Retry-After`), `InternalServerError`
(500), `NotImplemented` (501), `ServiceUnavailable` (503).

## Corriger un document défectueux

- **Dans les 72 heures de la validation** — le fournisseur peut annuler, ou l'
  acheteur peut demander le rejet et le fournisseur annule alors. Passé
  72 heures, aucune des deux options n'est possible.
- **Dans les trois jours suivant l'émission d'une e-Invoice défectueuse** — la s.
  82C(8) de l'Income Tax Act 1967 permet une **e-Invoice de substitution**.
- **Après cela** — émettez une e-Invoice de note de crédit, de débit ou de remboursement
  qui référence l'originale dans le champ 21.

## Erreurs courantes

- **Envoyer l'ancien numéro d'enregistrement SSM.** Le champ 4 requiert le nouveau
  BRN à 12 chiffres pour les inscrits auprès de SSM.
- **Antidater le champ 22.** LHDN exige la date et l'heure actuelles ; un
  document antidaté échoue.
- **Laisser le MSIC vide pour un fournisseur étranger.** Utilisez 00000, non une
  valeur vide.
- **Utiliser le type d'impôt 06 pour signifier l'exonération.** 06 est *Non applicable* ; l'
  exonération est E, et elle fait passer les champs 34 et 35 au statut obligatoire.
- **Réessayer un envoi échoué sans modification.** Le validateur de doublons
  générera DS302 au lieu de l'accepter.
- **Traiter une réponse Submitted comme un succès.** Seul *Valid* est un succès.

## Et ensuite

Mappez les champs 3, 4, 5, 8, 10, 11 et 12 par rapport aux données de référence de vos
clients et fournisseurs avant d'écrire le moindre code : ces sept-là sont là où
part réellement le temps de nettoyage. Décidez ensuite de la voie de transmission,
car le Portail remplit ces champs par un formulaire et l'API en fait
votre problème.
