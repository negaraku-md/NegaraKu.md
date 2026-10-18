---
topicId: MY-TAX-0008
title: "Intégration à MyInvois : portail, API ou middleware"
seoTitle: "Intégration à MyInvois : portail vs API vs middleware"
slug: "myinvois-integration"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Une manière neutre vis-à-vis des fournisseurs de choisir entre le portail gratuit MyInvois, l'intégration directe par API et un fournisseur technologique, selon le volume de transactions et ce que votre ERP fait déjà."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "LHDN propose deux mécanismes de transmission : le portail gratuit MyInvois, accessible via MyTax, qui prend en charge la saisie individuelle par formulaire et le téléversement par lots d'une feuille de calcul Excel prédéfinie ; et une API, accessible par intégration directe à l'ERP, via un fournisseur de services Peppol, ou via un fournisseur technologique non Peppol. Le portail convient aux faibles volumes ; l'API convient aux volumes élevés et requiert un certificat numérique et un travail préalable sur le système."
keyTakeaways:
  - "Deux mécanismes officiels seulement — portail et API. Tout le reste est une voie pour atteindre l'API"
  - "Le portail est gratuit, nécessite une connexion MyTax et offre le téléversement par lots en Excel"
  - "Les voies de l'API sont l'ERP direct, le fournisseur de services Peppol, ou le fournisseur technologique non Peppol"
  - "La soumission par API requiert un certificat numérique sous forme de fichier .cer ou .pfx"
  - "Limites strictes : 100 documents et 5MB par soumission, 300KB par document"
  - "Les intermédiaires doivent utiliser leurs propres Client ID et Secret et ne peuvent voir que ce qu'ils ont soumis"
  - "C'est le volume de facturation pour compte propre (self-billed), et non le volume de ventes, qui force habituellement la décision de passer à l'API"
appliesTo: "Les responsables financiers et les équipes informatiques qui choisissent une voie MyInvois, et toute personne qui compare les devis de fournisseurs de logiciels de facturation électronique."

faq:
  - q: "Le portail MyInvois est-il vraiment gratuit, et sera-t-il suffisant ?"
    a: "Oui, il est fourni par LHDN et accessible via le portail MyTax sans aucun frais. Il prend en charge aussi bien la création individuelle au moyen d'un formulaire que le téléversement par lots d'une feuille de calcul Excel prédéfinie. Qu'il soit suffisant dépend du nombre de documents et du nombre de documents nécessitant des données propres à l'acheteur. Une entreprise avec une poignée de factures B2B et une unique facture électronique consolidée mensuelle peut s'en servir indéfiniment."
  - q: "Ai-je besoin d'un fournisseur de services Peppol ?"
    a: "Non. Peppol est l'une des trois voies que LHDN énumère pour atteindre l'API, aux côtés de l'intégration directe à l'ERP et des fournisseurs technologiques non Peppol. LHDN n'impose ni voie ni fournisseur. Peppol compte si vous avez en outre besoin d'un échange de documents transfrontalier interopérable ; ce n'est pas une exigence de MyInvois."
  - q: "De quoi l'API a-t-elle besoin que le portail n'exige pas ?"
    a: "Un certificat numérique — un fichier .cer ou .pfx utilisé pour signer les soumissions, avec la signature hachée incluse dans le corps de la soumission — et des documents construits selon la structure UBL 2.1 en XML ou JSON. LHDN publie le guide d'intégration et de configuration de l'API et les points de terminaison dans le MyInvois SDK."
  - q: "Si j'utilise un fournisseur, qui est responsable d'une facture électronique non émise ?"
    a: "Vous. L'obligation d'émettre et de transmettre pèse sur le contribuable au titre de la s.82C de la Income Tax Act 1967, et la s.120(1)(d) fait de la contravention une infraction. Externaliser la transmission ne déplace pas l'obligation. LHDN restreint également les intermédiaires aux factures électroniques qu'ils ont eux-mêmes soumises, de sorte qu'un changement de fournisseur laisse l'historique derrière lui."
  - q: "Comment dimensionner la décision ?"
    a: "Comptez les documents, non les recettes. Additionnez les factures électroniques transactionnelles, les factures électroniques consolidées, les factures électroniques pour compte propre, et toutes les notes de crédit, de débit et de remboursement. Vérifiez ensuite les exclusions — les transactions supérieures à RM10,000 et les secteurs de la Table 3.6 ne peuvent être consolidés, ce qui peut transformer un unique document mensuel en milliers."
  - q: "Puis-je utiliser le portail et l'API en même temps ?"
    a: "Oui. LHDN présente les deux mécanismes comme un choix par soumission, non comme une option permanente, et beaucoup d'entreprises acheminent les ventes à fort volume par l'API tout en gérant les documents occasionnels pour compte propre sur le portail. Les rapports et tableaux de bord du portail couvrent les deux."

verificationNeeded:
  - "Les limites de débit numériques de l'API par point de terminaison — la FAQ du SDK renvoie aux Integration Practices sans publier de chiffres"
  - "Toute accréditation, certification ou liste de fournisseurs agréés de LHDN pour les fournisseurs technologiques — aucune n'a été localisée sur hasil.gov.my ni sur le SDK"
  - "Le nombre maximal de lignes accepté dans la feuille de calcul de téléversement par lots du portail MyInvois — LHDN décrit un certain nombre sans l'indiquer"

lang: "fr"
sourceContentHash: "12fac171732261f3"
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
  - title: "Guide de la facture électronique (Version 4.7) — sections 2.2 à 2.5 (e-Invoice Guideline (Version 4.7) — sections 2.2 to 2.5)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
    date: "2026-07-07"
  - title: "MyInvois SDK (MyInvois SDK)"
    url: "https://sdk.myinvois.hasil.gov.my/"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
  - title: "MyInvois SDK — foire aux questions (MyInvois SDK — frequently asked questions)"
    url: "https://sdk.myinvois.hasil.gov.my/faq/"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
  - title: "MyInvois SDK — réponse d'erreur standard (MyInvois SDK — standard error response)"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
  - title: "Guide spécifique de la facture électronique (Version 4.8) (e-Invoice Specific Guideline (Version 4.8))"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
    date: "2026-07-07"

entity: "MyInvois transmission mechanisms"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "requires", to: "e-invoice-data-fields" }
  - { rel: "related-to", to: "myinvois-phases" }
related: ["e-invoicing", "myinvois-phases", "e-invoice-data-fields", "consolidated-e-invoice", "self-billed-e-invoice"]
keywords: ["intégration MyInvois", "MyInvois API", "portail MyInvois", "Peppol Malaisie", "middleware facture électronique", "e-invois integrasi sistem"]
---

Presque tout ce qui a été écrit sur cette décision l'a été par quelqu'un qui vendait l'une des réponses. Partez donc des deux seuls mécanismes que LHDN reconnaît réellement, dans la Table 2.1 du Guide de la facture électronique : **le portail MyInvois** et **l'API**. Les fournisseurs Peppol, les fournisseurs technologiques non Peppol et le middleware ne sont pas une troisième option — ce sont trois façons d'atteindre l'API.

## Les deux mécanismes

| | Portail MyInvois | API |
| --- | --- | --- |
| Coût | Gratuit, via connexion **MyTax** | Construire ou acquérir sous licence |
| Entrée | Formulaire individuel, ou **téléversement par lots d'une feuille de calcul Excel prédéfinie** | XML ou JSON selon **UBL 2.1** |
| Signature | Gérée par le portail | Votre **certificat numérique** (.cer ou .pfx) |
| Adéquation selon LHDN | Accessible à tous les contribuables ; entreprises pour lesquelles la connexion par API n'est pas disponible | Fort volume ; requiert un investissement préalable et un changement de système |
| Voies | Une | ERP direct, fournisseur **Peppol**, fournisseur **non Peppol** |

Les deux produisent la même chose : un numéro d'identification unique de l'IRBM, un horodatage de validation et un code QR sur la représentation visuelle.

## Dimensionnez le problème avant d'aller faire vos achats

La question n'est pas votre chiffre d'affaires. C'est **combien de documents vous devez transmettre en un mois**, et le décompte est souvent plus élevé que ce que les gens attendent :

1. Factures électroniques transactionnelles pour les acheteurs qui en ont demandé une
2. Factures électroniques consolidées — une ou plusieurs par mois, par succursale si vous les séparez
3. **Factures électroniques pour compte propre (self-billed)** — commissions, fournisseurs étrangers, bailleurs particuliers, la plupart des intérêts, dividendes, remboursements de capital
4. Notes de crédit, de débit et de remboursement

Appliquez ensuite les deux exclusions qui ruinent les estimations naïves. Toute **transaction individuelle supérieure à RM10,000** doit être transactionnelle, dans tous les secteurs, depuis le 1er janvier 2026. Et neuf activités de la Table 3.6 du Guide spécifique de la facture électronique ne peuvent jamais être consolidées — véhicules à moteur, billets d'avion, contrats de construction, paiements aux agents et distributeurs, gains de paris, électricité, télécommunications.

Un atelier qui vend trois voitures par mois a une charge de travail triviale sur le portail. Un revendeur de télécommunications avec 4,000 abonnés postpayés, non, et aucune consolidation ne l'aidera.

**Le volume pour compte propre est la surprise habituelle.** Une société avec 40 factures de vente par mois et 600 paiements de commissions à des agents est une entreprise de facturation électronique à fort volume, quoi qu'en dise son livre de ventes.

## Là où le portail cesse vraiment de fonctionner

- **Coût de saisie des données.** Chaque document transactionnel nécessite le nom de l'acheteur, le TIN, le numéro d'enregistrement, l'adresse, le numéro de contact et le numéro SST, saisis ou chargés par feuille de calcul.
- **L'horloge des 72 heures.** Les fenêtres d'annulation et de rejet courent à compter de la validation. Les processus manuels qui soumettent chaque semaine ne peuvent pas les utiliser.
- **Concentration de fin de mois.** Les factures électroniques consolidées sont dues dans les **sept jours calendaires** suivant la clôture du mois, en plus de tout le reste.
- **Rapprochement.** Le portail vous offre la récupération en XML, JSON, métadonnées, grille et PDF — mais rapprocher les documents validés de votre grand livre est manuel.

## Là où l'API coûte plus que la licence

- **Un certificat numérique** doit être obtenu, installé et renouvelé.
- **Les limites de soumission sont strictes :** 100 documents et 5MB par soumission, 300KB par document. Le regroupement par lots et, au besoin, la minification sont votre problème.
- **Validation en deux étapes.** *Soumis* n'est pas *Valide*. La structure, les champs principaux et les codes sont vérifiés immédiatement ; la signature, le contribuable, les documents référencés et les doublons sont vérifiés en arrière-plan. Toute intégration qui traite un accusé de réception de type 202 comme un succès accumulera silencieusement des documents non valides.
- **Gestion des jetons.** Les jetons de connexion sont valables 60 minutes et sont destinés à être réutilisés, non générés à chaque requête. La limitation de débit renvoie un 429 avec un en-tête `Retry-After`.
- **Données de référence.** Le TIN du fournisseur et de l'acheteur, le nouveau BRN à 12 chiffres, les codes MSIC et les numéros SST doivent être corrects avant que rien de tout cela ne fonctionne.

## Choisir une voie vers l'API

| Voie | Convient à | Ce à quoi prêter attention |
| --- | --- | --- |
| **Intégration directe à l'ERP** | ERP établi avec une localisation malaisienne maintenue, ou capacité d'ingénierie interne | Maintenance continue à mesure que les versions du guide changent — la v4.7 et la v4.8 ont toutes deux été publiées le 7 juillet 2026 |
| **Fournisseur de services Peppol** | Entreprises qui veulent aussi un échange de documents interopérable avec leurs partenaires commerciaux | Peppol n'est pas une exigence de MyInvois ; ne payez pas pour lui comme s'il l'était |
| **Fournisseur technologique non Peppol / middleware** | Plusieurs systèmes sources, parcs de points de vente, ou un ERP sans localisation | Garde des données, conditions de sortie, et s'ils soumettent sous leurs propres identifiants |

LHDN ne cautionne, n'accrédite ni n'approuve aucun fournisseur. Si un fournisseur prétend avoir le statut d'approuvé par LHDN, demandez à le voir.

## La question sur l'intermédiaire que personne ne pose

Le SDK indique que les intermédiaires soumettent au moyen de **leurs propres Client ID et Client Secret**, et ne peuvent accéder qu'aux factures électroniques qu'**ils** ont soumises — ils ne peuvent pas récupérer les documents qu'un contribuable a soumis par lui-même.

Deux conséquences à consigner par écrit dans un contrat :

- **Changer de fournisseur n'emporte pas votre historique de soumissions.** Prévoyez une période de fonctionnement en parallèle et votre propre archive.
- **La responsabilité ne se transfère pas.** La section 82C de la Income Tax Act 1967 fait peser l'obligation sur le contribuable ; la s.120(1)(d) fait de la contravention une infraction. Une panne du fournisseur est votre non-conformité.

Au sujet des pannes, LHDN offre un allègement. La section 2.5.4 du Guide de la facture électronique dispose que lorsque le MyInvois System lui-même est en panne pour maintenance ou raisons techniques et que le contribuable peut attester de ses efforts de conformité, le Directeur général examinera le cas individuellement et pourra ne prendre aucune mesure. Cela couvre la panne de LHDN, non celle de votre fournisseur.

## Un itinéraire de décision

1. **Êtes-vous exempté ?** En dessous de RM1,000,000 de chiffre d'affaires annuel, arrêtez.
2. **Comptez les documents mensuels** dans les quatre catégories ci-dessus.
3. **Moins d'une centaine, pour la plupart consolidés ?** Le portail, avec le téléversement par lots en Excel. Réexaminez chaque année.
4. **De quelques centaines à quelques milliers, un seul système source ?** Demandez à votre fournisseur d'ERP ce que couvre sa localisation MyInvois — en particulier les types pour compte propre 11 à 14 et les champs d'annexe pour les importations.
5. **Des milliers, ou plusieurs systèmes sources, ou un parc de points de vente ?** Middleware, choisi sur la garde des données et les conditions de sortie, non sur les listes de fonctionnalités.
6. **Quel que soit votre choix, prouvez-le de bout en bout avant la fin de votre période d'assouplissement** — le 31 décembre 2027 pour la phase 4, et déjà passée pour les phases 1 à 3.

## Erreurs courantes

- **Acheter avant de compter.** Le décompte des documents, y compris ceux pour compte propre, est toute l'entrée de cette décision.
- **Supposer que Peppol est obligatoire.** C'est l'une des trois voies de l'API.
- **Croire une revendication d'accréditation.** LHDN ne publie aucune liste de fournisseurs agréés.
- **Traiter la validation comme synchrone.** Quatre des sept validateurs s'exécutent en arrière-plan.
- **Sauter le nettoyage des données de référence.** L'ancien numéro d'enregistrement de la SSM et les TIN obsolètes feront échouer le validateur du contribuable, aussi bonne soit l'intégration.
- **Tester avec des données propres.** Testez avec des fournisseurs étrangers, des particuliers sans TIN, des notes de crédit et du volume de fin de mois, car c'est cela qui casse.

## Et ensuite

Sortez les comptes fournisseurs et clients du mois dernier, classez chaque ligne comme transactionnelle, consolidée ou pour compte propre, et comptez. Ce chiffre décide du mécanisme. Vérifiez ensuite la liste des champs par rapport à vos données de référence, car le nettoyage prend presque toujours plus de temps que l'intégration.
