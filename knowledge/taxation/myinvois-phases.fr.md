---
topicId: MY-TAX-0010
title: "Phases de mise en œuvre de MyInvois, seuils et dates d'assouplissement"
seoTitle: "Phases et dates de MyInvois : calendrier de la facture électronique de LHDN"
slug: "myinvois-phases"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Chaque date de phase, tranche de chiffre d'affaires, seuil d'exonération et date de fin de l'assouplissement provisoire de la facture électronique de LHDN, tels qu'ils figurent dans le Guide de la facture électronique en vigueur."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "Le mandat de facture électronique de la Malaisie se déroule en quatre phases selon le chiffre d'affaires du FY2022 : le 1er août 2024 au-dessus de RM100 millions, le 1er janvier 2025 au-dessus de RM25 millions et jusqu'à RM100 millions, le 1er juillet 2025 au-dessus de RM5 millions et jusqu'à RM25 millions, et le 1er janvier 2026 jusqu'à RM5 millions. Les contribuables dont le chiffre d'affaires annuel est inférieur à RM1 million sont exonérés. Les entreprises qui ont commencé à opérer à partir de 2023 démarrent le 1er juillet 2026."
keyTakeaways:
  - "Quatre phases seulement — la phase qui vous concerne est fixée par votre chiffre d'affaires du FY2022 et ne change jamais"
  - "En dessous de RM1,000,000 de chiffre d'affaires ou de recettes annuels, c'est une exonération totale, non un report"
  - "Les nouvelles entreprises qui commencent entre 2023 et 2025 avec un chiffre d'affaires d'au moins RM1 million démarrent le 1er juillet 2026"
  - "Les contribuables de la phase 4 bénéficient d'une période d'assouplissement provisoire qui va jusqu'au 31 décembre 2027"
  - "Pendant l'assouplissement, vous pouvez tout consolider et refuser les demandes de facture électronique individuelle"
  - "Un SVDP de facture électronique est ouvert du 7 juillet 2026 au 31 décembre 2027 pour régulariser les soumissions manquées"
  - "L'obligation d'émettre figure à la s.82C de la Income Tax Act 1967, non dans le Guide"
appliesTo: "Toute entreprise, LLP, société de personnes ou entrepreneur individuel malaisien qui cherche à savoir quand la facturation électronique le concerne, et les intégrateurs qui planifient un déploiement."

verificationNeeded:
  - "Déterminer si la catégorie des produits de luxe et de la joaillerie de la Table 3.6 du Guide spécifique de la facture électronique a été activée — LHDN indique encore que les détails seront publiés en temps voulu"
  - "La pénalité exacte en ringgit appliquée en pratique au titre de la s.120(1)(d) de l'ITA 1967 pour une facture électronique manquée — la fourchette est légale mais LHDN ne publie aucune grille de concession d'imposition"

obligations:
  - what: "Issue and transmit e-Invoices for validation — taxpayers with FY2022 turnover above RM100 million"
    trigger: "ongoing"
    due: "from 1 August 2024"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "Issue and transmit e-Invoices for validation — FY2022 turnover above RM25 million and up to RM100 million"
    trigger: "ongoing"
    due: "from 1 January 2025"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "Issue and transmit e-Invoices for validation — FY2022 turnover above RM5 million and up to RM25 million"
    trigger: "ongoing"
    due: "from 1 July 2025"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "Issue and transmit e-Invoices for validation — FY2022 turnover up to RM5 million"
    trigger: "ongoing"
    due: "from 1 January 2026"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "Issue and transmit e-Invoices for validation — businesses commencing operations from 2023 onwards"
    trigger: "ongoing"
    due: "from 1 July 2026, or on commencement for businesses starting in 2026 or later"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "Submit a consolidated e-Invoice for transactions where the buyer did not require one"
    trigger: "ongoing"
    withinDays: 7
    due: "within 7 calendar days after the end of the month"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C(7)"
    consequence: "Transactions unsupported by a validated document for tax purposes"
  - what: "Comply with the e-Invoice mandate unless the business is exempt by size"
    trigger: "threshold"
    criteria:
      - metric: "turnover"
        op: "lt"
        value: 1000000
    exemption: true
    due: "Full exemption if annual turnover or revenue is below RM1,000,000; otherwise mandatory, as all phases are now in force"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"

lang: "fr"
sourceContentHash: "fe5d22ede93ea4c0"
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
  - title: "Guide de la facture électronique (Version 4.7) (e-Invoice Guideline (Version 4.7))"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
    date: "2026-07-07"
  - title: "Guide spécifique de la facture électronique (Version 4.8) (e-Invoice Specific Guideline (Version 4.8))"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
    date: "2026-07-07"
  - title: "Calendrier de mise en œuvre de la facture électronique (Garis Masa Pelaksanaan e-Invois)"
    url: "https://www.hasil.gov.my/e-invois/garis-masa-pelaksanaan-e-invois/"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
    date: "2025-12-07"
  - title: "Finance (No. 2) Act 2023 (Act 851) — nouvelles sections 82B et 82C (Finance (No. 2) Act 2023 (Act 851) — new sections 82B and 82C)"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Gouvernement de la Malaisie (Government of Malaysia)"
    date: "2023-12-29"

entity: "MyInvois e-Invoice implementation timeline"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "explained-in", to: "e-invoice-data-fields" }
  - { rel: "related-to", to: "consolidated-e-invoice" }
related: ["e-invoicing", "consolidated-e-invoice", "self-billed-e-invoice", "myinvois-integration", "e-invoice-data-fields"]
keywords: ["phases MyInvois", "date de mise en œuvre facture électronique Malaisie", "exonération facture électronique RM1 million", "période d'assouplissement facture électronique", "calendrier facture électronique LHDN", "tarikh pelaksanaan e-invois"]
---

Deux chiffres décident de tout : votre chiffre d'affaires du FY2022, qui fixe votre phase de façon permanente, et RM1,000,000, en dessous duquel vous êtes hors du système entièrement. Tout le reste de cette page n'est que détail.

Cette page est maintenue sous forme de données car les dates ont changé plus d'une fois. Les chiffres ci-dessous sont tirés du **Guide de la facture électronique version 4.7** et du **Guide spécifique de la facture électronique version 4.8**, tous deux publiés le 7 juillet 2026.

## Quelles sont les dates obligatoires des phases ?

| Phase | Contribuables visés | Obligatoire à partir du |
| --- | --- | --- |
| 1 | Chiffre d'affaires ou recettes annuels **au-dessus de RM100 millions** | **1er août 2024** |
| 2 | **Au-dessus de RM25 millions et jusqu'à RM100 millions** | **1er janvier 2025** |
| 3 | **Au-dessus de RM5 millions et jusqu'à RM25 millions** | **1er juillet 2025** |
| 4 | **Jusqu'à RM5 millions** | **1er janvier 2026** |

Il n'y a pas de phase 5. Une cinquième phase pour la tranche RM150,000–RM500,000 figurait dans des versions antérieures du guide et a disparu de la version 4.7.

## Comment ma phase est-elle déterminée ?

| Situation | Base |
| --- | --- |
| Vous disposez d'états financiers audités | Chiffre d'affaires ou recettes dans l'état du résultat global pour l'**exercice 2022** |
| Vous ne disposez pas d'états financiers audités | Recettes annuelles déclarées dans la déclaration fiscale du **YA2022** |
| Vous avez modifié la clôture de votre exercice FY2022 | Chiffre d'affaires **proratisé sur 12 mois** |

Une fois fixée, elle est fixée. La section 1.5 du Guide est explicite : les variations ultérieures du chiffre d'affaires ne changent pas votre date de mise en œuvre. Une société qui a réalisé RM30 millions en 2022 et RM4 millions aujourd'hui reste un contribuable de la phase 2.

## Quand les nouvelles entreprises démarrent-elles ?

| Entreprise commencée | Date de mise en œuvre de la facture électronique |
| --- | --- |
| 2023 à 2025, chiffre d'affaires d'au moins RM1,000,000 | **1er juillet 2026** |
| 2026 et au-delà | **1er juillet 2026** ou la date de démarrage |
| 2026 et au-delà, chiffre d'affaires de la première année inférieur à RM1,000,000 | **1er janvier de la deuxième année suivant** l'année où le chiffre d'affaires a atteint RM1,000,000 |

## Qui est exonéré ?

La section 1.6.1 du Guide exonère de l'émission de toute facture électronique, y compris pour compte propre :

- Les contribuables dont le chiffre d'affaires ou les recettes annuels sont **inférieurs à RM1,000,000**
- Les bureaux diplomatiques étrangers
- Les personnes physiques n'exerçant pas d'activité économique
- Les organismes statutaires, les autorités statutaires et les autorités locales, pour les perceptions statutaires, et pour les biens vendus ou les services rendus **avant le 1er juillet 2025**
- Les organisations internationales, pour les biens vendus ou les services rendus **avant le 1er juillet 2025**

L'exonération s'attache à la personne, non au groupe. Section 1.6.5 : une société détenue par une personne exonérée met tout de même en œuvre selon son propre calendrier.

Par ailleurs, la section 1.6.7 retire du champ des types de revenus spécifiques — revenus d'emploi, pension, pension alimentaire, zakat, certaines distributions de dividendes, valeurs cotées en bourse et valeurs de contrats dérivés, et les cessions d'actions non cotées sauf lorsque le cédant est une société, une LLP, une entité fiduciaire ou une société coopérative.

## Qu'autorise la période d'assouplissement provisoire ?

Convenue par le Gouvernement le 26 juillet 2024, six mois à compter de chaque date de phase — sauf la phase 4, qui a été prolongée bien au-delà.

| Phase | Période d'assouplissement provisoire |
| --- | --- |
| 1 | 1er août 2024 – **31 janvier 2025** |
| 2 | 1er janvier 2025 – **30 juin 2025** |
| 3 | 1er juillet 2025 – **31 décembre 2025** |
| 4 (tant la date de démarrage du 1er janvier 2026 que celle du 1er juillet 2026) | **jusqu'au 31 décembre 2027** |

Pendant la période d'assouplissement, la section 16.2 du Guide spécifique permet à un contribuable de :

- consolider **toutes** les activités, y compris les secteurs de la Table 3.6 qui ont par ailleurs l'interdiction de consolider
- consolider **toutes** les circonstances pour compte propre
- mettre n'importe quel texte dans le champ *Description du produit ou du service*, au lieu de numéros de référence de reçus ou de relevés
- **refuser** la demande d'un acheteur ou d'un fournisseur d'une facture électronique individuelle

LHDN ne poursuivra pas non plus au titre de la s.120 de la Income Tax Act 1967 pendant cette période, à condition que le contribuable soumette au moins des documents consolidés.

Cette dernière condition est celle que les gens négligent. L'assouplissement n'est pas l'autorisation de ne rien soumettre.

## Qu'est-ce que le SVDP de la facture électronique ?

Un Programme spécial de divulgation volontaire (Special Voluntary Disclosure Programme) se déroule du **7 juillet 2026 au 31 décembre 2027** pour les contribuables qui ont manqué des soumissions, soumis des factures électroniques non conformes, ou sont déjà sous une revue de conformité de facture électronique. Les revues de conformité et les pénalités ne sont pas poursuivies sur ce qui est divulgué, à moins que la divulgation n'implique une fraude, un manquement délibéré ou une négligence.

Les soumissions doivent utiliser la version de facture électronique **SVDP 1.2** (sans signature numérique) ou **SVDP 1.3** (avec signature numérique), et les factures électroniques consolidées manquées doivent être déposées mois par mois — non regroupées en un unique document de rattrapage.

## D'où provient réellement l'obligation légale ?

Pas du Guide. La **Section 82C de la Income Tax Act 1967**, insérée par la Finance (No. 2) Act 2023 (Act 851), crée l'obligation d'émettre une facture électronique pour chaque transaction et de la transmettre pour validation du Directeur général. La section 82C(6) couvre les factures pour compte propre, la s.82C(7) les factures consolidées, et la s.82C(8) permet une facture électronique de remplacement dans les **trois jours** suivant une facture défectueuse. La section 120(1)(d) fait de la contravention aux s.82C(1), (6) et (7) une infraction.

## Erreurs courantes

- **Traiter le chiffre de RM1 million comme un report.** C'est une exonération permanente à la section 1.6.1. Ce n'est pas non plus une phase — il n'y a pas de phase 5.
- **Recalculer votre phase à partir du chiffre d'affaires actuel.** Le test porte sur le FY2022, une seule fois.
- **Lire l'assouplissement de la phase 4 comme des vacances.** Les soumissions consolidées sont la condition de la concession, non une alternative à celle-ci.
- **Supposer que la fenêtre de 72 heures est une fenêtre de correction.** Elle annule ; elle ne modifie pas. Passé 72 heures, on émet une facture électronique de note de crédit, de débit ou de remboursement.
- **Ne pas voir que la date de la phase 3 est aussi la date butoir** pour les organismes statutaires et les organisations internationales, dont l'exonération ne couvrait que les transactions antérieures au 1er juillet 2025.

## Et ensuite

Confirmez lesquelles de vos transactions peuvent être consolidées — plusieurs secteurs ne l'ont jamais pu, et toute transaction individuelle supérieure à RM10,000 est exclue depuis le 1er janvier 2026. Si vous achetez auprès de fournisseurs étrangers ou payez des personnes physiques, les règles pour compte propre s'appliquent à vous quelle que soit la petitesse de votre livre de ventes. Les intégrateurs devraient commencer par la liste des champs plutôt que par le calendrier.
