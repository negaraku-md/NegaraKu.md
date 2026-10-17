---
topicId: MY-EMP-0014
title: "Taux de cotisation légaux et échéances de paie"
seoTitle: "Taux et échéances de paie en Malaisie : référence"
slug: "payroll-rates-deadlines-malaysia"
category: "employment"
subcategory: ["payroll-statutory"]
summary: "Chaque taux de paie malaisien vérifié, plafond salarial, formulaire et date d'échéance dans un seul tableau de référence, chacun relié à l'autorité qui le publie."

tier: "4"
mode: "practical"
contentType: "data"

answer: "Cinq flux légaux sont versés au plus tard le 15 du mois suivant le mois de salaire : EPF, SOCSO, EIS, PCB et le prélèvement HRD Corp. Chaque année, le Form EA est remis aux salariés avant le 28 février et le Form E accompagné du CP8D va à la LHDN avant le 31 mars. Le salaire minimum est de RM1,700. Le plafond salarial de SOCSO et EIS est de RM6,000. Les cotisations EPF sous un salaire de RM20,000 doivent suivre les tranches du Third Schedule, et non un pourcentage."
keyTakeaways:
  - "Une seule date porte cinq obligations — le 15 du mois suivant pour EPF, SOCSO, EIS, PCB et le prélèvement HRD"
  - "Les tranches salariales de l'EPF, et non les pourcentages, s'appliquent à tout salaire jusqu'à RM20,000"
  - "SOCSO et EIS s'arrêtent tous deux à un plafond salarial mensuel de RM6,000, en vigueur depuis le 1er octobre 2024"
  - "Les salariés non malaisiens enregistrés à partir du 1er août 1998 cotisent 2% employeur et 2% salarié à l'EPF, avec effet sur les salaires d'octobre 2025"
  - "Les intérêts de retard diffèrent selon le régime : 6% par an pour SOCSO et EIS, 10% par an pour le prélèvement HRD"
  - "Le Form E et le Form P sont exclus du délai de grâce d'e-Filing de la LHDN"
appliesTo: "Gestionnaires de paie, équipes RH, personnel financier et secrétaires de société qui gèrent une paie malaisienne."

verificationNeeded:
  - "EPF late-payment dividend and penalty rates are not included — confirm the current charge against kwsp.gov.my before publishing a figure"
  - "SOCSO Category 2 employee share and the full Third Schedule band tables are not reproduced here — read them from perkeso.gov.my"
  - "Foreign worker levy rates and the multi-tier levy gazette status are outside this page and unverified"
  - "Confirm the minimum interest charge for late SOCSO and EIS contributions against perkeso.gov.my"

obligations:
  - what: "Remit EPF contributions for the wage month"
    trigger: "monthly"
    dueDay: 15
    due: "On or before the 15th of the following month"
    authority: "KWSP"
    statute: "EPF Act 1991, s.43(1) and Third Schedule"
  - what: "Remit SOCSO contributions for the wage month"
    trigger: "monthly"
    dueDay: 15
    due: "No later than the 15th day of the succeeding month"
    authority: "PERKESO"
    statute: "Employees Social Security Act 1969"
    consequence: "Interest on late payment at 6% per annum for each day outstanding"
  - what: "Remit EIS contributions for the wage month"
    trigger: "monthly"
    dueDay: 15
    due: "No later than the 15th day of the succeeding month"
    authority: "PERKESO"
    statute: "Employment Insurance System Act 2017"
    consequence: "Interest on late payment at 6% per annum for each day outstanding"
  - what: "Remit monthly tax deduction (PCB/MTD) via e-PCB, e-Data PCB or e-CP39"
    trigger: "monthly"
    dueDay: 15
    due: "On or before the 15th day of the subsequent month"
    authority: "LHDN"
    statute: "Income Tax (Deduction from Remuneration) Rules 1994"
  - what: "Pay the HRD Corp levy"
    trigger: "monthly"
    dueDay: 15
    due: "By the 15th of the following month"
    authority: "HRD Corp"
    statute: "PSMB Act 2001"
    consequence: "Interest at 10% per annum on arrears, minimum RM5"
  - what: "Pay wages for the wage period"
    trigger: "ongoing"
    withinDays: 7
    due: "Not later than the seventh day after the last day of the wage period"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.19(1)"
  - what: "Pay rest-day, public-holiday and overtime wages"
    trigger: "ongoing"
    due: "Not later than the last day of the next wage period"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.19(2)"
  - what: "Notify LHDN of a new employee on Form CP22 via the e-CP22 application"
    trigger: "change"
    withinDays: 30
    due: "Within 30 days after the commencement of employment"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83"
  - what: "Notify LHDN of cessation of employment on Form CP22A via e-SPC, and withhold monies payable"
    trigger: "change"
    due: "Not less than 30 days before cessation, or within 30 days of being informed of a death; withhold for 90 days or until tax clearance"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83"
  - what: "Notify LHDN on Form CP21 of an employee leaving Malaysia for more than three months"
    trigger: "change"
    due: "Not less than 30 days before the expected departure date"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83"
  - what: "Prepare and give Form EA (C.P.8A) or EC (C.P.8C) to every employee"
    trigger: "financial-year-end"
    due: "On or before 28 February following the calendar year"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83(1A)"
    consequence: "Offence under s.120(1) ITA 1967 — fine RM200 to RM20,000, or up to six months imprisonment, or both"
  - what: "Upload CP8D data through e-Data Praisi for employee pre-fill"
    trigger: "financial-year-end"
    due: "On or before 25 February following the calendar year"
    authority: "LHDN"
  - what: "Furnish Form E (e-E) together with CP8D"
    trigger: "financial-year-end"
    due: "On or before 31 March following the calendar year"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83 and s.120(1)"
    consequence: "Offence under s.120(1) ITA 1967; no e-Filing grace period applies to Form E"
  - what: "Prepare and give Form CP58 to agents, dealers and distributors"
    trigger: "financial-year-end"
    due: "On or before 31 March following the calendar year"
    authority: "LHDN"
  - what: "Retain payroll and tax records"
    trigger: "ongoing"
    due: "Seven years, accessible to LHDN on request"
    authority: "LHDN"
    statute: "Income Tax Act 1967"
  - what: "Utilise accumulated HRD Corp levy through an approved training grant"
    trigger: "ongoing"
    due: "Within 24 months"
    authority: "HRD Corp"
    consequence: "Forfeiture of the unutilised balance above an RM10,000 threshold"

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
sensitivity: "none"

updated: 2026-07-20
sources:
  - title: "Cotisation obligatoire de l'employeur (Employer Mandatory Contribution)"
    url: "https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution"
    publisher: "Fonds de prévoyance des employés (KWSP)"
  - title: "Taux de cotisation (Contribution Rate)"
    url: "https://www.perkeso.gov.my/en/rate-of-contribution.html"
    publisher: "Organisation de sécurité sociale (PERKESO)"
  - title: "Cotisations (Contributions)"
    url: "https://www.perkeso.gov.my/en/our-services/employer-employee/contributions.html"
    publisher: "Organisation de sécurité sociale (PERKESO)"
  - title: "Paiement des cotisations (Contribution Payment)"
    url: "https://www.perkeso.gov.my/en/our-services/employer-employee/pembayaran.html"
    publisher: "Organisation de sécurité sociale (PERKESO)"
  - title: "Employeurs — Responsabilité de l'employeur (Employers — Employer's Responsibility)"
    url: "https://www.hasil.gov.my/en/majikan/"
    publisher: "Administration fiscale de Malaisie (LHDN)"
  - title: "Programme de dépôt des déclarations (BN) pour l'année 2026 (Program Memfail Borang Nyata (BN) Bagi Tahun 2026)"
    url: "https://www.hasil.gov.my/wp-content/uploads/program-memfail-bn-bagi-tahun-2026.pdf"
    publisher: "Administration fiscale de Malaisie (LHDN)"
    date: "2025-12-30"
  - title: "Ordonnance sur le salaire minimum de 2024 — P.U.(A) 376 (Perintah Gaji Minimum 2024 — P.U.(A) 376)"
    url: "https://gajiminimum.mohr.gov.my/wp-content/uploads/PUA%20376.pdf"
    publisher: "Ministère des Ressources humaines (MOHR)"
    date: "2024-12-04"
  - title: "Guide de calcul du prélèvement et paiement du prélèvement (Levy Calculation Guideline and Levy Payment)"
    url: "https://supportcentre.hrdcorp.gov.my/portal/en/kb/articles/hrd-levy"
    publisher: "HRD Corp"

entity: "Malaysian statutory payroll rates and deadlines"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "administered-by", to: "epf" }
  - { rel: "administered-by", to: "perkeso" }
  - { rel: "administered-by", to: "hrd-corp" }
  - { rel: "administered-by", to: "jtksm" }
  - { rel: "explained-in", to: "form-e-ea-cp8d-malaysia" }
  - { rel: "explained-in", to: "hrd-corp-levy-malaysia" }
  - { rel: "explained-in", to: "minimum-wage-malaysia" }
related: ["form-e-ea-cp8d-malaysia", "hrd-corp-levy-malaysia", "minimum-wage-malaysia", "payroll-compliance-malaysia", "epf-employer-guide", "socso-eis-employer-guide"]
keywords: ["échéances de paie Malaisie", "taux EPF SOCSO EIS", "taux de cotisation légaux Malaisie", "dates d'échéance de paie le 15", "échéance PCB", "taux du prélèvement HRD"]
---

Un seul tableau de référence, chaque ligne reliée à l'autorité qui la publie. Les lignes
qui n'ont pas pu être vérifiées par rapport à une source officielle sont énumérées sous
`verificationNeeded` dans les métadonnées de cette page plutôt que devinées.

## Taux et plafonds

| Élément | Taux | Plafond / base | Autorité |
| --- | --- | --- | --- |
| Salaire minimum — mensuel | RM1,700 | Tous les employeurs à partir du 1er août 2025 | MOHR, P.U.(A) 376 |
| Salaire minimum — horaire | RM8.72 | — | MOHR, P.U.(A) 376 |
| Salaire minimum — journalier | RM65.38 / RM78.46 / RM98.08 | semaine de 6 / 5 / 4 jours | MOHR, P.U.(A) 376 |
| EPF — malaisien, résident permanent, non-malaisien enregistré avant le 1er août 1998, moins de 60 ans, salaire ≤ RM5,000 | 13% employeur, 11% salarié | tranches de la Partie A du Third Schedule | KWSP |
| EPF — même groupe, salaire supérieur à RM5,000 | 12% employeur, 11% salarié | tranches de la Partie A du Third Schedule | KWSP |
| EPF — 60 ans et plus, malaisien | 4% employeur, 0% salarié | Partie E du Third Schedule, sans limite de salaire | KWSP |
| EPF — 60 ans et plus, résident permanent et non-malaisien antérieur à 1998 | 6.5% employeur / 5.5% salarié pour un salaire ≤ RM5,000 ; 6% / 5.5% au-dessus | Partie C du Third Schedule | KWSP |
| EPF — non-malaisien enregistré à partir du 1er août 1998 | 2% employeur, 2% salarié | Partie F du Third Schedule, sans limite de salaire, avec effet sur les salaires d'octobre 2025 | KWSP |
| SOCSO Catégorie 1 — moins de 60 ans | 1.75% employeur, 0.5% salarié | plafond salarial mensuel de RM6,000 | PERKESO |
| SOCSO Catégorie 2 — 60 ans et plus | 1.25% employeur | plafond salarial mensuel de RM6,000 | PERKESO |
| EIS | 0.2% employeur, 0.2% salarié | plafond salarial mensuel de RM6,000 | PERKESO |
| Prélèvement HRD Corp — catégorie obligatoire | 1% | Salaire de base moins congé non rémunéré, plus indemnités fixes | HRD Corp |
| Prélèvement HRD Corp — catégorie facultative | 0.5% | Même base | HRD Corp |

Le plafond de RM6,000 de SOCSO et EIS est en vigueur depuis le **1er octobre 2024**, en
remplacement de RM5,000. Les pages affichant encore RM4,000 ont deux révisions de retard.

**Les pourcentages de l'EPF sont une description, pas une méthode de calcul.** KWSP indique que
les employeurs ne peuvent pas calculer les parts employeur et salarié sur un pourcentage exact
sauf lorsque le salaire dépasse RM20,000 ; en deçà, les tables de tranches salariales du Third
Schedule donnent le montant en ringgit, et les totaux diffèrent du résultat en pourcentage.

## Échéances mensuelles

| Obligation | Échéance | Autorité | Pénalité de retard |
| --- | --- | --- | --- |
| Payer les salaires de la période de salaire | Dans les 7 jours suivant la fin de la période de salaire | JTKSM, EA 1955 s.19(1) | Infraction |
| Payer les salaires de jour de repos, de jour férié et des heures supplémentaires | Avant le dernier jour de la période de salaire suivante | JTKSM, EA 1955 s.19(2) | Infraction |
| Cotisation EPF | Le 15 du mois suivant ou avant | KWSP | Voir `verificationNeeded` |
| Cotisation SOCSO | Avant le 15 du mois suivant | PERKESO | 6% par an, quotidien |
| Cotisation EIS | Avant le 15 du mois suivant | PERKESO | 6% par an, quotidien |
| PCB / MTD via e-PCB, e-Data PCB ou e-CP39 | Le 15 du mois suivant ou avant | LHDN | Pénalité légale |
| Prélèvement HRD Corp | Avant le 15 du mois suivant | HRD Corp | 10% par an, quotidien, minimum RM5 |

## Échéances déclenchées par un événement

| Obligation | Déclencheur | Échéance | Canal |
| --- | --- | --- | --- |
| Form CP22 — nouveau salarié | Début de l'emploi | Dans les 30 jours | e-CP22 sur MyTax, obligatoire depuis le 1er septembre 2024 |
| Form CP22A — cessation, secteur privé | Cessation ou décès | Pas moins de 30 jours avant la cessation ; dans les 30 jours suivant la notification d'un décès | e-SPC sur MyTax |
| Form CP22B — cessation, secteur public | Cessation ou décès | Comme ci-dessus | e-SPC sur MyTax |
| Form CP21 — quitter la Malaisie pour plus de 3 mois | Départ | Pas moins de 30 jours avant la date de départ prévue | LHDN |
| Retenir les sommes à payer | Cessation, décès ou départ | 90 jours, ou jusqu'à réception d'une lettre de quitus fiscal | LHDN |
| Enregistrement auprès de HRD Corp | Atteindre 10 salariés malaisiens | Au franchissement du seuil | Portail HRD Corp |

## Échéances annuelles

| Obligation | Échéance | Texte |
| --- | --- | --- |
| Form EA (C.P.8A) / EC (C.P.8C) aux salariés | 28 février | ITA 1967 s.83(1A) |
| CP8D via e-Data Praisi (voie de préremplissage) | 25 février | programme de dépôt de la LHDN |
| Form E (e-E) avec CP8D à la LHDN | 31 mars | ITA 1967 s.83 ; s.120(1) en cas de défaut |
| Form CP58 aux agents, concessionnaires, distributeurs | 31 mars | LHDN |
| Conserver les registres | 7 ans | ITA 1967 |

Le Form E, le Form P et le Form CPE sont **exclus** du délai de grâce d'e-Filing de la LHDN
qui s'applique aux autres formulaires de déclaration.

## Référence des sanctions

| Défaut | Conséquence | Source |
| --- | --- | --- |
| Omission de fournir le Form E ou le Form EA | Amende de RM200 à RM20,000, ou emprisonnement jusqu'à 6 mois, ou les deux, en vertu de la s.120(1) ITA 1967 | table des infractions de la LHDN |
| Payer en dessous du salaire minimum | Amende d'au plus RM10,000 par salarié, s.43 Act 732 ; ordonnance judiciaire pour le manque à gagner en vertu de la s.44 | Act 732 |
| Infraction continue sous la Act 732 | Amende quotidienne jusqu'à RM1,000 après condamnation, s.46 | Act 732 |
| Infraction répétée sous la Act 732 | Amende jusqu'à RM20,000 ou emprisonnement jusqu'à 5 ans, s.47 | Act 732 |
| Infraction à l'Employment Act sans sanction spécifique | Amende jusqu'à RM50,000, s.99A EA 1955 | Act 265 |
| Prélèvement HRD Corp en retard | Intérêt de 10% par an quotidien, minimum RM5 ; amende jusqu'à RM20,000 ou 2 ans d'emprisonnement | HRD Corp |
| Prélèvement HRD Corp non réclamé pendant 24 mois | Confiscation au-delà d'un solde résiduel de RM10,000 | HRD Corp |

## Erreurs courantes

- Calculer l'EPF comme un pourcentage direct sur des salaires inférieurs à RM20,000 au lieu de
  lire la tranche du Third Schedule.
- Appliquer un plafond de RM4,000 ou RM5,000 à SOCSO et EIS. Il est de RM6,000 depuis le
  1er octobre 2024.
- Utiliser un seul chiffre de salaire dans les cinq régimes. La base du prélèvement HRD exclut
  les heures supplémentaires, la commission et la prime.
- Supposer que le délai de grâce d'e-Filing de la LHDN couvre le Form E. Ce n'est pas le cas.
- Déposer le Form E sans le CP8D et considérer la déclaration comme soumise.
- Payer les salaires à une date fixe postérieure au septième jour suivant la période de salaire.

## Et ensuite

Configurez une entrée de calendrier récurrente le 15 couvrant les cinq versements mensuels, et
une seconde dans la deuxième semaine de février pour le Form EA et le téléversement e-Data
Praisi. Puis rapprochez séparément la base salariale de chaque régime dans la paie : l'échéance
est commune, la définition du salaire ne l'est pas.
