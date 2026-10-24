---
topicId: MY-TAX-0023
title: "Calendrier de conformité fiscale des sociétés en Malaisie"
slug: "company-tax-calendar"
category: "taxation"
subcategory: ["corporate-tax"]
summary: "Chaque obligation récurrente de déclaration et de paiement auprès de la LHDN pour une société malaisienne, avec la section légale, la règle d'échéance, le délai de grâce d'e-filing et la disposition de sanction pour chacune."

tier: "4"
mode: "practical"
contentType: "timeline"
sensitivity: "none"

answer: "Une société malaisienne dépose le formulaire C dans les sept mois suivant la clôture de sa période comptable, fournit le CP204 au plus tard 30 jours avant le début de la période de base, paie des acomptes mensuels à partir du deuxième mois, dépose le formulaire E et le CP8D avant le 31 mars, et remet aux employés le formulaire EA avant le dernier jour de février. La plupart des déclarations déposées par e-Filing bénéficient d'un délai de grâce d'un mois ou de 15 jours."
keyTakeaways:
  - "Le formulaire C est dû dans les 7 mois à compter du lendemain de la clôture de la période comptable (s.77A(1)), avec un délai de grâce d'un mois par e-Filing"
  - "Le CP204 est dû au plus tard 30 jours avant le début de la période de base (s.107C(2)), et doit représenter au moins 85 % de l'estimation de l'année précédente (s.107C(3))"
  - "Une société résidente constituée en Malaisie dont le capital libéré est de RM2.5m ou moins est exonérée de CP204 pendant ses deux premières années (s.107C(4A)) — ce n'est pas le cas des LLP, des organismes fiduciaires et des coopératives"
  - "Les estimations révisées sont autorisées aux 6e, 9e et 11e mois de la période de base, ou aux trois (s.107C(7))"
  - "Sous-estimer de plus de 30 % déclenche une pénalité de 10 % sur l'excédent au-delà de la marge de 30 % (s.107C(10))"
  - "Le délai de grâce d'e-Filing s'étend au paiement du solde de l'impôt pour tous les formulaires sauf le formulaire E, le formulaire P et le formulaire CPE"
  - "Une société qui cède un actif immobilisé dépose une déclaration distincte dans les 60 jours (s.77A(1B))"
appliesTo: "Secrétaires de société, directeurs financiers et agents fiscaux qui tiennent le calendrier annuel de conformité d'une Sdn Bhd, LLP, organisme fiduciaire, coopérative ou entité de Labuan."

verificationNeeded:
  - "Les périodes imposables SST-02, les échéances et les paliers de pénalité pour paiement tardif au titre du Sales Tax Act 2018 et du Service Tax Act 2018 — non vérifiés auprès de la RMCD pour cette page"
  - "Les dates de phase actuelles de la facture électronique MyInvois et le seuil d'exonération fondé sur le chiffre d'affaires"
  - "Les délais de notification et de dépôt de la déclaration pays par pays au titre des CbCR Rules 2016"
  - "La date de versement du PCB et le texte des Income Tax (Deduction from Remuneration) Rules 1994 — le 15 du mois suivant est largement rapporté mais n'a pas été lu dans le journal officiel pour cette page"

obligations:
  - what: "File Form C — company income tax return"
    trigger: "financial-year-end"
    due: "within 7 months from the date following the close of the accounting period that constitutes the basis period, plus a one-month grace period where filed by e-Filing"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.77A(1)"
    consequence: "Fine of RM200 to RM20,000 or 6 months imprisonment under s.112(1), or a penalty under s.112(3)"
  - what: "File Form PT — limited liability partnership return"
    trigger: "financial-year-end"
    due: "within 7 months from the date following the close of the accounting period, plus a one-month e-Filing grace period"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.77A(1)"
    consequence: "Fine of RM200 to RM20,000 or 6 months imprisonment under s.112(1), or a penalty under s.112(3)"
  - what: "Pay the balance of tax on the return"
    trigger: "financial-year-end"
    due: "on the due date for furnishing the return; the e-Filing grace period also applies to this payment for all forms except Form E, Form P and Form CPE"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.103(1)"
    consequence: "10% increase on the unpaid tax under s.103(3)"
  - what: "Pay tax under an assessment raised by the Director General"
    trigger: "change"
    withinDays: 30
    due: "within 30 days of the date of assessment, with a further 7 days allowed by the filing programme"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.103(2)"
    consequence: "10% increase on the unpaid tax under s.103(5)"
  - what: "Furnish CP204 — estimate of tax payable"
    trigger: "financial-year-end"
    due: "not later than 30 days before the beginning of the basis period for the year of assessment"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.107C(2)"
    consequence: "Offence under s.120(1)(f); if no estimate is furnished and tax is payable, a 10% increase under s.107C(10A)"
  - what: "Furnish the first CP204 for a newly commenced company, LLP, trust body or co-operative"
    trigger: "incorporation"
    withinDays: 90
    due: "within 3 months from the date of commencement of operations, where the first basis period is not less than 6 months"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.107C(4)(a)"
    consequence: "Offence under s.120(1)(f)"
  - what: "Pay monthly CP204 instalments"
    trigger: "ongoing"
    due: "by the due date each month, starting from the second month of the basis period, or the sixth month where the estimate was furnished under s.107C(4)(a)"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.107C(5) and s.107C(6)"
    consequence: "10% increase on the unpaid instalment under s.107C(9)"
  - what: "Revise the estimate of tax payable (CP204A)"
    trigger: "ongoing"
    due: "in the 6th month, the 9th month or the 11th month of the basis period, or in all three"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.107C(7)"
    consequence: "Where actual tax exceeds the final estimate by more than 30%, a 10% penalty applies to the excess over that 30% margin under s.107C(10)"
  - what: "File the capital asset disposal return"
    trigger: "change"
    withinDays: 60
    due: "within 60 days of the date of disposal of the capital asset, or such other period the Director General allows on written request"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.77A(1B)"
    consequence: "Fine of RM200 to RM20,000 or 6 months imprisonment under s.112(1)"
  - what: "File Form E with CP8D — employer return"
    trigger: "ongoing"
    due: "not later than 31 March in the year following the remuneration year; CP8D must be received on or before the Form E deadline"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83(1)"
    consequence: "Offence under s.120(1)(b), fine of RM200 to RM20,000 or 6 months imprisonment"
  - what: "Give each employee the statement of remuneration (Form EA or EC)"
    trigger: "ongoing"
    due: "on or before the last day of February in the year following the remuneration year"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83(1A)"
    consequence: "Offence under s.120(1)(b)"
  - what: "Notify LHDN of a new employee (Form CP22)"
    trigger: "change"
    withinDays: 30
    due: "not later than 30 days after the commencement of the employment"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83(2)"
    consequence: "Offence under s.120(1)(c)"
  - what: "Notify LHDN of an employee ceasing employment (Form CP22A)"
    trigger: "change"
    due: "not less than 30 days before the cessation, or within 30 days of being informed of the employee's death"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83(3)"
    consequence: "Offence under s.120(1)(c)"
  - what: "Provide Form CP58 to each agent, dealer or distributor"
    trigger: "ongoing"
    due: "not later than 31 March in the year immediately following the year of payment"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83A(2)"
    consequence: "Offence under s.120(1)(b)"
  - what: "Upload employee remuneration data through e-Data Praisi or e-CP8D"
    trigger: "ongoing"
    due: "1 January to 25 February for the preceding remuneration year"
    authority: "LHDN"
    statute: "LHDN Return Form Filing Programme 2026, guidance note 2"
    consequence: "Form E and CP8D not submitted in the prescribed method and format are not acceptable"
  - what: "File the Labuan entity return of profits (Form LE1)"
    trigger: "financial-year-end"
    due: "within 7 months from the last day of the accounting period that is the basis period, plus a one-month e-Filing grace period"
    authority: "LHDN"
    statute: "Labuan Business Activity Tax Act 1990, s.5 and s.10"
    consequence: "Action under s.23A(1) or a penalty under s.23A(4) of the LBATA"

lang: "fr"
sourceContentHash: "5c5878a339ae1335"
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
  - title: "Programme de dépôt des formulaires de déclaration (BN) pour l'année 2026 (Program Memfail Borang Nyata (BN) Bagi Tahun 2026)"
    url: "https://www.hasil.gov.my/wp-content/uploads/program-memfail-bn-bagi-tahun-2026.pdf"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
    date: "2025-12-30"
  - title: "Loi de l'impôt sur le revenu de 1967 (Loi 53), texte consolidé (Income Tax Act 1967 (Act 53), consolidated text)"
    url: "https://lom.agc.gov.my/act-detail.php?act=53&lang=BI"
    publisher: "Cabinet du Procureur général (AGC)"
  - title: "Loi de l'impôt sur l'activité commerciale de Labuan de 1990 (Loi 445) (Labuan Business Activity Tax Act 1990 (Act 445))"
    url: "https://www.labuanfsa.gov.my/clients/asset_120A5FB8-61B6-45E8-93F0-3F79F86455C8/contentms/img/documents/Legislation_and_Guidelines/Legislation/2022/Draft%20ACT%20445%20BI%20update%202021%20-%20Website%20purpose%2012%20DEC%202022.pdf"
    publisher: "Autorité des services financiers de Labuan (Labuan FSA)"

entity: "Company tax compliance calendar"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "related-to", to: "corporate-tax-rates" }
  - { rel: "related-to", to: "labuan-tax-regime" }
related: ["corporate-tax-rates", "labuan-tax-regime", "llp-taxation"]
keywords: ["échéance impôt des sociétés Malaisie", "échéance formulaire C", "date limite CP204", "échéance formulaire E", "programme de dépôt LHDN 2026", "tarikh akhir borang C", "tax calendar Malaysia"]
---

Presque toutes les échéances fiscales malaisiennes sont une **règle**, pas une
date. La date change selon votre période comptable ; la règle, non. Cette page
énonce la règle, la section dont elle provient, et ce qui se passe lorsque vous la
manquez.

Les chiffres proviennent de l'Income Tax Act 1967 et du Programme de dépôt des
formulaires de déclaration de la LHDN pour 2026, publié le 30 décembre 2025 et mis
à jour le 1er avril 2026.

## Déclarations annuelles

| Formulaire | Qui | Règle d'échéance | Grâce e-Filing | Loi |
| --- | --- | --- | --- | --- |
| **e-C** | Société | Dans les 7 mois à compter du lendemain de la clôture de la période comptable qui est la période de base | 1 mois | ITA s.77A(1) |
| **e-PT** | Société à responsabilité limitée | Idem | 1 mois | ITA s.77A(1) |
| **e-TA** | Organisme fiduciaire | Idem | 1 mois | ITA s.77A(1) |
| **e-C1** | Société coopérative | Idem | 1 mois | ITA s.77A(1) |
| **e-LE1** | Entité de Labuan | Dans les 7 mois à compter du dernier jour de la clôture de la période comptable qui est la période de base | 1 mois | LBATA s.5, s.10 |
| **e-CPE** | Pétrole, exploration | Dans les 7 mois à compter de la fin de la période d'exploration | 1 mois | PITA s.30A |
| **e-CPP** | Pétrole, production | Dans les 7 mois à compter de la fin de la période de base | 1 mois | PITA s.30 |
| **e-E** | Employeur | 31 mars | 1 mois (déclaration uniquement) | ITA s.83(1) |

L'e-Filing est obligatoire pour **e-C depuis l'YA2014**, **e-PT depuis l'YA2021**,
**e-CS, e-TA, e-TC et e-TR depuis l'YA2024**, et **e-LE1 depuis l'YA2025**. Pour
les employeurs, **e-E** est obligatoire depuis l'année de rémunération 2016 pour
les sociétés et les sociétés de Labuan, et depuis 2023 pour tous les autres
employeurs.

Une déclaration reçue pendant le délai de grâce est considérée comme reçue dans le
délai légal. Si vous manquez le délai de grâce, le retard est compté à partir de
l'**échéance légale initiale**, et non à partir de la fin du délai de grâce.

## Paiements

| Paiement | Règle | Conséquence d'un paiement tardif |
| --- | --- | --- |
| Solde de l'impôt sur la déclaration | Dû à l'échéance de la déclaration, s.103(1). Le délai de grâce d'e-Filing s'étend à ce paiement pour **tous les formulaires sauf le formulaire E, le formulaire P et le formulaire CPE** | Majoration de 10 %, s.103(3) |
| Impôt au titre d'une cotisation établie en vertu de la s.90(3), 91, 92, 96A ou majorée en vertu de la s.101(2) | Dans les **30 jours** suivant la signification de l'avis ; le programme de dépôt accorde **7 jours** supplémentaires | Majoration de 10 %, s.103(5) |
| Acompte mensuel CP204 | À l'échéance de chaque mois, à partir du **2e mois** de la période de base (s.107C(5)), ou à partir du **6e mois** lorsque l'estimation a été fournie en vertu de la s.107C(4)(a) | Majoration de 10 % sur l'acompte impayé, s.107C(9) |

## CP204 : le régime d'estimation

Le mécanisme de la s.107C, énoncé avec exactitude :

- **s.107C(1)** — toute société, LLP, organisme fiduciaire et société coopérative
  doit fournir une estimation pour chaque année d'évaluation.
- **s.107C(2)** — l'estimation est due **au plus tard 30 jours avant le début de la
  période de base**.
- **s.107C(3)** — elle ne doit pas être inférieure à **85 %** de l'estimation
  révisée de l'année d'évaluation immédiatement précédente, ou de l'estimation si
  aucune n'a été révisée.
- **s.107C(4)** — lorsque le contribuable **commence pour la première fois son
  activité** au cours d'une année d'évaluation et que la période de base est **d'au
  moins six mois**, la première estimation est due **dans les 3 mois suivant le
  début de l'activité**, et la s.107C(2) et (3) s'appliquent à partir de la
  deuxième année d'évaluation.
- **s.107C(7)** — une estimation révisée peut être fournie aux **6e, 9e ou 11e
  mois** de la période de base, ou aux trois.
- **s.107C(7A)** — les estimations et les estimations révisées doivent être
  fournies par voie électronique en vertu de la s.152A.

### L'exonération de deux ans ne s'applique qu'aux sociétés

La section 107C(4A) désactive les paragraphes (1), (2) et (3) pour une société
**résidente et constituée en Malaisie** pour sa première année d'évaluation et
celle qui suit immédiatement, à condition que son **capital libéré au titre des
actions ordinaires soit de RM2.5 millions ou moins** au début des périodes de base
concernées.

Elle est écartée par la s.107C(4B) lorsque plus de **50 %** du capital ordinaire
libéré de la société est détenu directement ou indirectement par une société liée
(ou l'inverse, ou lorsque les deux sont détenues à 50 % par une autre société), ou
lorsque plus de **20 %** est détenu par des sociétés constituées hors de Malaisie
ou par des personnes physiques non-citoyennes. En vertu de la s.107C(4C), une
*société liée* à cette fin est une société dont le capital libéré dépasse RM2.5
millions.

Notez ce que la s.107C(4A) ne couvre pas. Elle ne nomme qu'une **société**. Une
LLP, un organisme fiduciaire ou une société coopérative qui vient de commencer son
activité dépose toujours le CP204 en vertu de la s.107C(4)(a).

Par ailleurs, le programme de dépôt 2026 indique qu'une société, LLP, organisme
fiduciaire ou coopérative qui **n'a pas encore commencé son activité** n'a pas à
soumettre de CP204 du tout.

### La pénalité pour écart de 30 %

La section 107C(10) est la disposition qui piège les sociétés rentables ayant des
estimations obsolètes. Comparez l'impôt dû au titre de la cotisation avec la
**dernière** estimation révisée (ou l'estimation initiale si aucune n'a été
révisée). Lorsque la cotisation la dépasse de **plus de 30 % de l'impôt dû au titre
de la cotisation**, la différence entre cet excédent et la marge de 30 % est
majorée de **10 %**.

Deux conséquences en découlent. La marge se mesure par rapport au chiffre
**final**, de sorte qu'une estimation révisée à la hausse au 11e mois réinitialise
la comparaison. Et la pénalité s'applique au montant **au-delà** de la tolérance de
30 %, et non à l'intégralité de l'insuffisance.

Lorsqu'aucune estimation n'est fournie, qu'aucune instruction n'est donnée en vertu
de la s.107C(8), qu'aucune poursuite n'est engagée en vertu de la s.120, et qu'un
impôt est néanmoins dû, la **s.107C(10A)** majore l'impôt dû de **10 %**. En vertu
de la s.107C(11), le directeur général peut remettre l'une quelconque de ces
majorations pour un motif valable.

## Obligations de l'employeur

| Obligation | Règle | Loi |
| --- | --- | --- |
| Formulaire EA ou EC à chaque employé | Au plus tard le **dernier jour de février** | s.83(1A) |
| Téléversement e-Data Praisi ou e-CP8D | **Du 1er janvier au 25 février** | Programme de dépôt, note 2 |
| Formulaire E avec CP8D | **31 mars** ; le formulaire E est incomplet si le CP8D n'est pas reçu à cette date | s.83(1) |
| Formulaire CP22, nouvel employé | Au plus tard **30 jours** après le début de l'emploi | s.83(2) |
| Formulaire CP22A, cessation | Au moins **30 jours avant** la cessation, ou dans les **30 jours** suivant l'information du décès de l'employé | s.83(3) |
| Formulaire CP58 aux agents, concessionnaires, distributeurs | Au plus tard le **31 mars** de l'année suivante | s.83A(2) |

Le programme 2026 précise qui figure sur le CP8D : **tous** les employés, y compris
le personnel à temps plein, à temps partiel, sous contrat et les stagiaires
industriels, ainsi que les personnes chargées de gérer l'organisation —
administrateurs de la société, membres du conseil de la coopérative,
administrateurs d'association, associés de LLP, et le gérant, le dirigeant
principal, l'administrateur résident, l'associé, l'associé commandité, l'associé
désigné ou le dirigeant d'une entité de Labuan.

## Les sociétés dormantes déposent aussi

Une société, LLP, organisme fiduciaire ou coopérative dormante **doit** déposer sa
déclaration **y compris le formulaire E**. Il en va de même pour une entité de
Labuan dormante, qui dépose une déclaration de bénéfices et le formulaire E.

Dormante signifie n'avoir jamais exercé d'activité depuis la constitution, ou avoir
exercé puis cessé. Détenir des actions, des biens immobiliers, des dépôts à terme
ou des placements similaires **ne rend pas** une entité dormante.

## Les dispositions de sanction en un seul endroit

| Manquement | Disposition | Fourchette |
| --- | --- | --- |
| Défaut de fourniture d'une déclaration (autre que le formulaire E et le formulaire P) | ITA s.112(1) ; LBATA s.23A(1) | RM200 à RM20,000, ou jusqu'à 6 mois d'emprisonnement, ou les deux |
| Défaut de fourniture d'une déclaration pendant deux ans ou plus | ITA s.112(1A) | RM1,000 à RM20,000, ou emprisonnement, **plus** une pénalité spéciale du **triple** de l'impôt établi |
| Défaut de fourniture d'une déclaration, pénalité au lieu de poursuites | ITA s.112(3) ; LBATA s.23A(4) | Établie par le directeur général |
| Défaut de fourniture du formulaire E ou du formulaire P | ITA s.120(1) | RM200 à RM20,000, ou jusqu'à 6 mois d'emprisonnement, ou les deux |
| Défaut de fourniture du CP204 | ITA s.120(1)(f) | Idem que ci-dessus |
| Déclaration incorrecte | ITA s.113 | — |
| Évasion délibérée | ITA s.114 | — |

## Cessions d'actifs immobilisés

Depuis l'introduction de l'impôt sur les plus-values, une société, LLP, organisme
fiduciaire ou coopérative qui cède un actif immobilisé doit fournir une
**déclaration distincte dans les 60 jours** suivant la date de cession en vertu de
la **s.77A(1B)**, en précisant le prix d'acquisition, le prix de cession, le gain
ou la perte, et la valeur de marché d'un évaluateur lorsque la valeur de marché
s'applique. Le directeur général peut accorder un délai plus long sur demande
écrite. Cette déclaration accompagne le formulaire C, sans y être intégrée.

## Et ensuite

Deux dates méritent une inscription permanente à l'agenda plutôt qu'une inscription
réactive : la **fenêtre du CP204A du 11e mois**, parce que c'est la dernière chance
d'éviter la pénalité pour écart de 30 %, et le **25 février**, parce qu'un
téléversement e-Data Praisi manqué rend inacceptable un formulaire E par ailleurs
ponctuel.

Les obligations au titre du Sales Tax Act 2018, du Service Tax Act 2018, de
MyInvois et des règles de déclaration pays par pays ne sont pas traitées ici et ne
sont pas vérifiées sur cette page.
