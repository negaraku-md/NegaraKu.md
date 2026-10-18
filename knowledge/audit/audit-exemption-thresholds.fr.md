---
topicId: MY-AUD-0002
title: "Les seuils d'exemption d'audit en Malaisie : la mise en place progressive 2025–2027"
seoTitle: "Seuils d'exemption d'audit en Malaisie (2025–2027)"
slug: "audit-exemption-thresholds"
category: "audit"
subcategory: ["requirements"]
summary: "Les seuils exacts de chiffre d'affaires, d'actifs et d'effectifs pour l'exemption d'audit au titre de la Directive de Pratique 10/2024 de SSM, phase par phase, avec la règle des deux sur trois et le regard rétrospectif de trois ans appliqués."

tier: "4"
mode: "practical"
contentType: "data"

answer: "Les seuils d'exemption d'audit en Malaisie se mettent en place progressivement sur trois ans au titre de la Practice Directive 10/2024. Une société privée doit satisfaire à au moins deux des trois tests — chiffre d'affaires, total des actifs et effectifs — pour l'exercice en cours et les deux exercices précédents immédiats. Les limites sont de RM1 million, RM1 million et 10 employés pour les périodes commençant en 2025, RM2 millions, RM2 millions et 20 en 2026, et RM3 millions, RM3 millions et 30 à partir de 2027."
keyTakeaways:
  - "Au moins DEUX des trois critères, jamais les trois — l'erreur la plus répétée dans le contenu malaisien sur l'audit"
  - "Phase 1 (périodes commençant en 2025) : RM1,000,000 de chiffre d'affaires, RM1,000,000 d'actifs, 10 employés"
  - "Phase 2 (périodes commençant en 2026) : RM2,000,000 de chiffre d'affaires, RM2,000,000 d'actifs, 20 employés"
  - "Phase 3 (périodes commençant le 1er janvier 2027 ou après) : RM3,000,000 de chiffre d'affaires, RM3,000,000 d'actifs, 30 employés"
  - "Les deux années précédentes sont évaluées par rapport aux seuils de la phase ACTUELLE, et non aux chiffres plus bas qui s'appliquaient alors"
  - "La phase est fixée par le moment où la période financière COMMENCE, et non par la clôture de l'exercice"
  - "Un employé ne compte que s'il est à temps plein — au moins 6 heures par jour pendant 20 jours par mois, ou 120 heures par mois"

faq:
  - q: "Quels sont les seuils d'exemption d'audit en Malaisie ?"
    a: "Ils dépendent du moment où votre période financière commence. Les périodes commençant en 2025 utilisent RM1 million de chiffre d'affaires, RM1 million de total des actifs et 10 employés. Les périodes commençant en 2026 utilisent RM2 millions, RM2 millions et 20. Les périodes commençant le 1er janvier 2027 ou après utilisent RM3 millions, RM3 millions et 30. Vous avez besoin d'au moins deux des trois."
  - q: "Le seuil d'exemption d'audit est-il de RM3 millions ?"
    a: "Uniquement pour les périodes financières commençant le 1er janvier 2027 ou après. La Practice Directive 10/2024 met le chiffre en place progressivement — RM1 million pour 2025 et RM2 millions pour 2026. La plupart des guides concurrents citent RM3 millions de façon uniforme et omettent entièrement la mise en place progressive, ce qui indiquerait à une société ayant RM2.5 millions de chiffre d'affaires à l'exercice 2026 qu'elle réussit le test du chiffre d'affaires alors que ce n'est pas le cas."
  - q: "Les deux années passées sont-elles évaluées par rapport aux anciens seuils, plus bas ?"
    a: "Non. La Practice Directive 10/2024 établit que le chiffre d'affaires, les actifs et les effectifs des deux exercices précédents immédiats ne doivent pas dépasser le seuil maximal spécifié pour la phase correspondante — c'est-à-dire la phase dans laquelle tombe la période actuelle. Les propres scénarios détaillés de SSM appliquent les chiffres de la phase actuelle aux trois années."
  - q: "Comment compte-t-on le nombre d'employés ?"
    a: "Les employés à temps plein inscrits sur la paie à la clôture de chaque exercice pertinent. SSM définit le temps plein comme les travailleurs rémunérés travaillant au moins 6 heures par jour pendant au moins 20 jours par mois, ou au moins 120 heures par mois. Les travailleurs locaux, étrangers, sous contrat et en période d'essai comptent. Les administrateurs-employés, les actionnaires-employés et les membres de la famille ou amis non rémunérés ou à salaire irrégulier ne comptent pas."

verificationNeeded:
  - "Confirmer si SSM a émis une modification de la PD 10/2024 révisant les seuils de la Phase 3 — la directive les marque comme invariables sauf révision par le Registraire"

obligations:
  - what: "Take the audit exemption for a private company that stays within the size limits"
    trigger: "threshold"
    criteria:
      - metric: "revenue"
        op: "lte"
        value: 2000000
      - metric: "assets"
        op: "lte"
        value: 2000000
      - metric: "employees"
        op: "lte"
        value: 20
    minCriteria: 2
    exemption: true
    due: "Meet at least two of three tests for the current and the two preceding financial years. Figures shown are the 2026 phase (revenue and assets RM2 million, 20 employees); it is RM1 million and 10 in 2025, rising to RM3 million and 30 from 2027"
    authority: "SSM"
    statute: "Companies Act 2016, s.267(2); SSM Practice Directive 10/2024"

lang: "fr"
sourceContentHash: "f05022cc3a744d57"
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
sensitivity: "none"

updated: 2026-07-20
sources:
  - title: "Directive de Pratique n° 10/2024 — Critères d'éligibilité à l'exemption d'audit pour certaines sociétés privées en Malaisie (Practice Directive No. 10/2024 — Qualifying Criteria for Audit Exemption for Certain Private Companies in Malaysia)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/PD10-2024-Qualifying-Criteria-for-Audit-Exemption-for-Certain-Categories-of-Private-Companies.pdf"
    publisher: "Commission des Sociétés de Malaisie (SSM)"
    date: "2024-12-16"
  - title: "Foire aux questions sur la Companies Act 2016 et les questions transitoires — Partie Q, Exemption d'audit (FAQs on Companies Act 2016 and Transitional Issues — Part Q, Audit Exemption)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/FAQ-AUDIT-EXEMPTION.pdf"
    publisher: "Commission des Sociétés de Malaisie (SSM)"
  - title: "Loi sur les sociétés de 2016 (Loi 777), réimpression au 1er août 2022 (Companies Act 2016 (Act 777), reprint as at 1 August 2022)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "Commission des Sociétés de Malaisie (SSM)"

entity: "Audit exemption thresholds (Practice Directive 10/2024)"
relations:
  - { rel: "administered-by", to: "ssm" }
  - { rel: "governs", to: "companies-act-2016" }
  - { rel: "part-of", to: "audit-exemption" }
  - { rel: "related-to", to: "who-cannot-claim-audit-exemption" }
related: ["audit-exemption", "who-cannot-claim-audit-exemption", "dormant-company-audit-exemption"]
keywords: ["audit exemption threshold Malaysia", "audit exemption RM3 million", "PD 10/2024 thresholds", "audit exemption 2026 threshold", "SSM audit exemption criteria 2027", "number of employees audit exemption"]
---

Si vous ne retenez qu'un seul chiffre de cette page, retenez celui-ci : le seuil de
RM3 millions que tout le monde cite ne s'applique **pas** avant les périodes
financières commençant le 1er janvier 2027 ou après.

La Practice Directive 10/2024, émise par SSM le 16 décembre 2024 au titre de la
sous-section 267(2) de la Companies Act 2016, met en place les seuils d'exemption
d'audit progressivement sur trois ans. Une grande partie des pages malaisiennes qui se
positionnent sur cette requête indiquent RM3 millions et 30 employés comme s'il
s'agissait des chiffres actuels, et plusieurs affirment en outre que les trois critères
doivent être remplis. Les deux sont erronés, et ils se trompent dans des directions
opposées — l'un laisse une société sauter un audit qu'elle doit légalement, l'autre
effraie une société éligible au point de la faire payer pour un audit.

## Le tableau des seuils

| | Phase 1 | Phase 2 | Phase 3 |
| --- | --- | --- | --- |
| **Début de la période financière** | le 1er jan 2025 ou après jusqu'au 31 déc 2025 | le 1er jan 2026 ou après jusqu'au 31 déc 2026 | le 1er jan 2027 ou après |
| **Année de dépôt** | à partir du 1er jan 2026 | à partir du 1er jan 2027 | à partir du 1er jan 2028 |
| **Chiffre d'affaires** | RM1,000,000 | RM2,000,000 | RM3,000,000 |
| **Total des actifs** | RM1,000,000 | RM2,000,000 | RM3,000,000 |
| **Nombre d'employés** | 10 | 20 | 30 |

Les chiffres de la Phase 3 restent inchangés sauf révision par le Registraire.

## Le test

Une société privée est éligible si elle satisfait à **au moins deux des trois**
critères, pour l'**exercice financier en cours et les deux exercices précédents
immédiats** :

1. le chiffre d'affaires annuel ne dépasse pas le seuil
2. le total des actifs ne dépasse pas le seuil
3. le nombre d'employés ne dépasse pas le seuil

Neuf points de données, dont six doivent se situer à l'intérieur des limites — deux
critères sur trois années. Une société peut dépasser un critère par n'importe quelle
marge sur les trois années et rester tout de même exemptée.

## Quelle phase s'applique à vous

La phase est fixée par la date à laquelle la période financière **commence**, et non par
l'année où elle se termine ni par l'année où vous déposez. Une société clôturant le 30
juin qui démarre une période le 1er juillet 2026 se situe en **Phase 2**, même si cette
année se termine en 2027.

## Le piège du regard rétrospectif

La directive est explicite : les chiffres des deux exercices précédents immédiats ne
doivent pas dépasser le seuil **de la phase correspondante** — la phase de la période
actuelle. Vous n'évaluez pas l'exercice 2025 par rapport à RM1 million lorsque vous
appréciez une année de Phase 3 ; vous l'évaluez par rapport à RM3 millions.

Le propre scénario détaillé de SSM le rend concret. Une société clôturant le 30 juin qui
déclare un total des actifs de RM3,000,000 chaque année et un chiffre d'affaires de
RM1,000,000, RM1,000,000 et RM1,500,000 pour les exercices clos en 2025, 2026 et 2027 est
éligible pour l'exercice clos le 30 juin 2027 au titre de la Phase 2 : elle échoue au
test des actifs les trois années, mais réussit le chiffre d'affaires et les effectifs les
trois années. Deux sur trois, trois années de suite.

## Des définitions qui changent la réponse

**Chiffre d'affaires annuel** — produits reçus et à recevoir au cours de l'année. Il
exclut les écritures de crédit annulant des écritures comptables antérieures, les
écritures relatives à la fiscalité, les reprises de provisions constituées antérieurement,
et les plus-values de décomptabilisation des immobilisations corporelles et des immeubles
de placement dans l'état du résultat global.

**Total des actifs** — les actifs tels que définis dans les normes comptables approuvées
applicables, courants et non courants, repris de l'état de la situation financière.

**Employés** — les employés à temps plein employés à la clôture de chaque exercice
pertinent. SSM définit le temps plein comme les travailleurs rémunérés travaillant au
moins six heures par jour pendant au moins 20 jours par mois, ou au moins 120 heures par
mois. En deçà, un travailleur ne compte pas du tout.

Inclus : les travailleurs locaux, étrangers, sous contrat et en période d'essai.

Exclus : un administrateur qui est aussi employé à temps plein ; un actionnaire qui est
aussi employé à temps plein ; les membres de la famille ou amis non rémunérés ou à
salaires irréguliers.

Dans une Sdn Bhd gérée par ses propriétaires avec deux administrateurs-actionnaires qui
travaillent, un conjoint à paie irrégulière et six travailleurs à temps partiel de 15
heures par semaine, le décompte aux fins de la directive est de zéro — et non de neuf.

## Erreurs courantes

- **Citer RM3 millions et 30 employés comme le chiffre actuel.** Ce sont les chiffres de
  la Phase 3. Rien au-dessus de RM1 million de chiffre d'affaires ne réussit le test du
  chiffre d'affaires pour une période ayant commencé en 2025.
- **Exiger les trois critères.** La directive dit au moins deux.
- **Vérifier uniquement l'année en cours.** Trois années doivent franchir la barre, et
  une société qui vient de passer sous la limite cette année devra généralement attendre.
- **Utiliser la clôture de l'exercice pour choisir la phase.** C'est la date de début.
- **Réévaluer les années antérieures par rapport aux anciens seuils, plus bas.** La
  directive et les scénarios de SSM appliquent tous deux les chiffres de la phase actuelle
  aux trois années.
- **Compter les travailleurs à temps partiel et les administrateurs-actionnaires qui
  travaillent** dans l'effectif.
- **Supposer que la transition a été sans heurt.** Les périodes financières commençant le
  31 décembre 2024 ou avant restent soumises à la PD 3/2017 abrogée, de sorte que
  certaines sociétés ont connu une année où aucun des deux régimes ne les a aidées.

## Et ensuite

Franchir les seuils est nécessaire mais non suffisant. Quatre catégories de sociétés sont
exclues de l'exemption quelle que soit leur taille, et les associés détenant 5 % des
actions peuvent encore exiger un audit — vérifiez la liste des exclusions avant de dire à
l'auditeur que vous n'aurez pas besoin de lui cette année.
