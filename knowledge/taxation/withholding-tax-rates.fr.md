---
topicId: MY-TAX-0025
title: "Taux de retenue à la source en Malaisie par type de paiement"
seoTitle: "Taux de retenue à la source en Malaisie — Section, taux, formulaire"
slug: "withholding-tax-rates"
category: "taxation"
subcategory: ["withholding-tax"]
summary: "Tous les taux de retenue à la source de Malaisie dans un seul tableau — type de paiement, section de l'ITA, taux, formulaire et délai de reversement."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "Les taux de retenue à la source de Malaisie sont fixés par l'Annexe 1 de l'Income Tax Act 1967, non par les sections d'imposition. L'intérêt versé à un non-résident est de 15 pour cent, la redevance de 10 pour cent, les catégories spéciales de revenus prévues à la s.4A de 10 pour cent, les revenus du paragraphe 4(f) de 10 pour cent, les artistes de spectacle non résidents de 15 pour cent, et les entrepreneurs non résidents de 10 pour cent plus 3 pour cent. Presque tous doivent être reversés dans un délai d'un mois à compter du paiement ou de l'inscription au crédit du bénéficiaire."
keyTakeaways:
  - "Le taux réside dans l'Annexe 1, l'obligation réside dans la section d'imposition — citez les deux"
  - "Un mois après le paiement ou l'inscription au crédit est la règle standard de reversement, et l'inscription au crédit peut survenir avant le paiement"
  - "La Section 107D est l'exception — le paiement est dû au plus tard à la fin du mois civil suivant, non un mois après"
  - "La Section 107A comporte deux taux sur le même paiement : 10 pour cent pour l'entrepreneur, 3 pour cent pour ses employés"
  - "Un taux conventionnel n'est disponible que si vous détenez un certificat de résidence de l'administration fiscale du bénéficiaire"
  - "Le défaut de retenue à la source entraîne une majoration de 10 pour cent et la non-déductibilité de la dépense sous-jacente"
appliesTo: "Toute entreprise, organisme public ou personne résidente de Malaisie payant un non-résident, et toute entreprise payant des agents, concessionnaires ou distributeurs résidents."

faq:
  - q: "Quel est le taux standard de retenue à la source en Malaisie ?"
    a: "Il n'existe pas de taux standard unique. Le taux dépend de la catégorie de revenu selon l'Annexe 1 de l'Income Tax Act 1967 — 15 pour cent pour les intérêts, 10 pour cent pour les redevances, 10 pour cent pour les catégories spéciales de revenus prévues à la s.4A, et 10 pour cent plus 3 pour cent pour les paiements de contrat à des non-résidents. Les taux conventionnels peuvent réduire plusieurs d'entre eux."
  - q: "Quand la retenue à la source doit-elle être payée au LHDN ?"
    a: "Dans un délai d'un mois après le paiement ou l'inscription au crédit du bénéficiaire pour les s.107A, 109, 109A, 109B et 109F. La Section 107D est différente — elle est due au plus tard à la fin du mois civil suivant le mois de paiement. Si la date d'échéance tombe un week-end ou un jour férié, le jour ouvrable suivant s'applique."
  - q: "La retenue à la source est-elle un impôt définitif ?"
    a: "Pour la majeure partie des revenus de non-résidents, oui. Le LHDN traite la retenue à la source sur les intérêts, les redevances, les catégories spéciales de revenus, les distributions de REIT et les revenus du paragraphe 4(f) comme un impôt définitif, de sorte que le non-résident n'a aucune autre obligation déclarative en Malaisie sur ce revenu. La Section 107A n'est pas définitive — c'est un paiement anticipé à valoir sur l'imposition finale de l'entrepreneur."
  - q: "Si le contrat stipule que les honoraires sont nets d'impôt, dois-je quand même retenir ?"
    a: "Oui. L'obligation pèse sur le payeur indépendamment de ce que dit le contrat. Lorsque le payeur prend contractuellement l'impôt à sa charge, le LHDN a confirmé dans la Décision publique 10/2019 qu'à compter du 5 décembre 2018, l'impôt de la s.109B est calculé sur le montant brut payé, sans recalcul au brut — mais l'impôt que le payeur prend à sa charge n'est pas déductible dans ses propres comptes."

verificationNeeded:
  - "Le formulaire CP107D et son appendice CP107D(1) pour la déduction de 2 pour cent de la s.107D n'ont pu être récupérés depuis aucun chemin actif de hasil.gov.my — le taux, le seuil et la règle de reversement ci-dessous proviennent de la Loi elle-même, non du formulaire"
  - "Les taux conventionnels pour des pays précis ne sont pas reproduits ici — vérifiez chaque convention sur la page DTA du LHDN, car les taux réduits varient selon l'article et selon le pays"

obligations:
  - what: "Reverser la retenue à la source déduite d'un paiement à un non-résident"
    trigger: "event"
    direction: "after"
    event: "payment"
    withinDays: 30
    due: "dans un délai d'un mois après le paiement ou l'inscription au crédit du bénéficiaire non-résident"
    authority: "LHDN"
    statute: "Income Tax Act 1967, ss.107A(1), 109(1), 109B(1), 109F(1)"
    consequence: "Le montant non payé est majoré de 10 pour cent et la dépense est écartée en vertu de la s.39(1)(f), (i) ou (j)"

lang: "fr"
sourceContentHash: "091d81b974b404be"
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
  - title: "Retenue à la source (Withholding Tax)"
    url: "https://www.hasil.gov.my/en/perundangan/cukai-pegangan/"
    publisher: "Direction générale des impôts (LHDN)"
  - title: "Income Tax Act 1967 (Act 53), réimpression arrêtée au 21 mai 2024 — Annexe 1 et s.107A, 107D, 109, 109A, 109B, 109F (Income Tax Act 1967 (Act 53), reprint as at 21 May 2024 — Schedule 1 and ss.107A, 107D, 109, 109A, 109B, 109F)"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "Direction générale des impôts (LHDN)"
    date: "2024-05-21"
  - title: "Décision publique n° 10/2019 — Retenue à la source sur les catégories spéciales de revenus (Public Ruling No. 10/2019 — Withholding Tax on Special Classes of Income)"
    url: "https://www.hasil.gov.my/wp-content/uploads/PR_10_2019.pdf"
    publisher: "Direction générale des impôts (LHDN)"
    date: "2019-12-10"
  - title: "Convention de non-double imposition (DTA/DTAA) (Double Taxation Avoidance Agreement (DTA/DTAA))"
    url: "https://www.hasil.gov.my/en/antarabangsa/perjanjian-pengelakan-pencukaian-dua-kali-pppdk/"
    publisher: "Direction générale des impôts (LHDN)"

entity: "Malaysian withholding tax rates"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "explained-in", to: "withholding-tax-special-classes" }
related: ["withholding-tax-special-classes", "withholding-tax-digital-services", "withholding-tax-non-compliance", "cp37-forms"]
keywords: ["taux de retenue à la source Malaisie", "withholding tax rate Malaysia", "taux section 109B", "section 109B rate", "retenue section 107A", "CP37D", "tableau retenue à la source Malaisie", "LHDN retenue à la source"]
---

Le taux dont vous avez besoin n'est presque jamais dans la section que vous lisez.
La Section 109B vous indique de retenir « au taux applicable à ces paiements » et
s'arrête là — les 10 pour cent sont dans la Partie V de l'Annexe 1. La Section 109
fait de même. Prenez l'habitude de citer les deux, car une discussion sur le taux
est une discussion sur l'Annexe 1.

## Le tableau complet

| Type de paiement | Section de l'ITA | Taux | Formulaire | Reverser avant |
| --- | --- | --- | --- | --- |
| Paiement de contrat à un entrepreneur non résident | s.107A, Sch 1 | 10 % (entrepreneur) + 3 % (ses employés) | CP37A | 1 mois après le paiement ou l'inscription au crédit |
| Paiement à un agent, concessionnaire ou distributeur résident | s.107D, Sch 1 | 2 % | CP107D | Fin du **mois civil suivant** |
| Intérêt à un non-résident | s.109, Sch 1 Pt II item 1 | 15 % | CP37 | 1 mois après le paiement ou l'inscription au crédit |
| Redevance à un non-résident | s.109, Sch 1 Pt II item 2 | 10 % | CP37 | 1 mois après le paiement ou l'inscription au crédit |
| Intérêt ou redevance, de faible valeur | s.109, Sch 1 Pt II | 15 % / 10 % | CP37S | Semestriel, 30 juin ou 31 décembre |
| Artiste de spectacle non résident | s.109A, Sch 1 Pt II item 3 | 15 % | CP154 plus le calcul d'impôt du LHDN | 1 mois après le paiement ou l'inscription au crédit |
| Catégories spéciales de revenus prévues à la s.4A | s.109B, Sch 1 Pt V | 10 % | CP37D | 1 mois après le paiement ou l'inscription au crédit |
| Catégories spéciales de revenus, de faible valeur | s.109B, Sch 1 Pt V | 10 % | CP37DS | Semestriel, 30 juin ou 31 décembre |
| Intérêt à une personne physique résidente, payé par une banque ou un établissement agréé | s.109C, Sch 1 Pt VI | 5 % | — | 1 mois après le paiement ou l'inscription au crédit |
| Distribution de REIT ou de fiducie immobilière — société non résidente | s.109D, Sch 1 Pt X | 24 % | CP37E | 1 mois après le paiement ou l'inscription au crédit |
| Distribution de REIT ou de fiducie immobilière — investisseur institutionnel étranger | s.109D, Sch 1 Pt X | 10 % | CP37E | 1 mois après le paiement ou l'inscription au crédit |
| Distribution de REIT ou de fiducie immobilière — autres, hors société résidente | s.109D, Sch 1 Pt X | 10 % | CP37E | 1 mois après le paiement ou l'inscription au crédit |
| Distribution d'un fonds monétaire de détail à un porteur de parts non physique | s.109DA, Sch 1 Pt XIX | 24 % | CP37E(NR) / CP37E(R) | 1 mois après le paiement ou l'inscription au crédit |
| Distribution d'un fonds familial ou fonds familial takaful — société non résidente | s.109E, Sch 1 Pt XI | 25 % | CP37E(T) | 1 mois après le paiement ou l'inscription au crédit |
| Distribution d'un fonds familial ou fonds familial takaful — autres, hors société résidente | s.109E, Sch 1 Pt XI | 8 % | CP37E(T) | 1 mois après le paiement ou l'inscription au crédit |
| Revenu du paragraphe 4(f) à un non-résident | s.109F, Sch 1 Pt XIII | 10 % | CP37F | 1 mois après le paiement ou l'inscription au crédit |
| Rente différée ou retrait de PRS avant 55 ans | s.109G, Sch 1 Pt XVI | 8 % | CP37G | 1 mois après le paiement ou l'inscription au crédit |

## Les trois choses que ce tableau dissimule

**« Payer ou inscrire au crédit » n'est pas « payer ».** La Décision publique
10/2019, par. 13.1, définit l'inscription au crédit comme davantage qu'une écriture
comptable ou une charge à payer — le montant doit être disponible au bénéfice du
bénéficiaire ou en sa faveur. Mais une écriture de compensation (contra) annulant ce
que le non-résident vous doit compte, et le compte à rebours commence à la date de la
compensation. Une entreprise qui ne reverse jamais d'espèces peut tout de même
accuser un mois de retard.

**La Section 107D a un compte à rebours différent.** La Section 107D(1) exige le
paiement « au plus tard à la fin du mois civil suivant », non un mois après. De
plus, elle ne mord que lorsque l'agent, concessionnaire ou distributeur a reçu plus
de RM100,000 du payeur au cours de l'année de base immédiatement précédente
(s.107D(2)), et uniquement lorsque cette personne est une personne physique résidente
(s.107D(6)).

**Les taux conventionnels sont conditionnels, non automatiques.** Le LHDN exige une
confirmation écrite de l'administration fiscale du bénéficiaire attestant la
résidence, conservée pour le contrôle de conformité. L'Exemple 16 de la Décision
publique 10/2019 applique un taux de 5 pour cent à un prestataire de services de
Hong Kong une fois seulement la résidence confirmée. Sans le certificat, vous retenez
au taux national.

## Erreurs fréquentes

- **Citer un taux sans l'Annexe.** « La Section 109B, c'est 10 pour cent » est un
  raccourci. Les 10 pour cent sont la Partie V de l'Annexe 1, et la Partie V est ce
  qu'une convention écarte.
- **Supposer que les formulaires de faible valeur sont une commodité facultative.**
  CP37S et CP37DS ont deux conditions cumulatives : l'impôt ne doit pas dépasser
  RM500 par transaction de paiement, **et** les transactions de faible valeur
  doivent survenir plus d'une fois dans la fenêtre pertinente de six mois. Un seul
  paiement de RM400 sur un semestre ne donne pas droit au report.
- **Traiter la s.107A comme un impôt définitif.** Elle ne l'est pas. L'alinéa (a) est
  imputé sur l'imposition propre de l'entrepreneur ; l'alinéa (b), les 3 pour cent,
  est remboursé à l'entrepreneur en vertu de la s.107A(3)(b) selon ce que le
  Directeur général juge opportun.
- **Retenir sur le brut lorsque le paiement est en partie hors champ.** Pour les
  revenus de la s.4A(i) et (ii), seule la portion attribuable aux services rendus en
  Malaisie est imposable, répartie sur une base juste et justifiable.

## Et ensuite

Le taux est la partie facile. Deux questions décident de la plupart des affaires
réelles : si le paiement est « dérivé de Malaisie » tout court, et s'il s'agit d'une
redevance en vertu de la s.109 ou d'une catégorie spéciale de revenus en vertu de la
s.109B. Lisez
[withholding-tax-special-classes](/fr/taxation/withholding-tax-special-classes)
pour la première et
[withholding-tax-digital-services](/fr/taxation/withholding-tax-digital-services)
pour la seconde.
