---
topicId: MY-TAX-0031
title: "Seuils d'enregistrement SST par groupe de service"
slug: "sst-registration"
category: "taxation"
subcategory: ["sst"]
summary: "Le seuil d'enregistrement de la taxe sur les services n'est pas un chiffre unique — il va de nul à RM1,500,000 selon le groupe, et les revenus exonérés y comptent toujours."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Il n'y a pas de seuil d'enregistrement SST unique. Les seuils de la taxe sur les services varient par groupe — nul pour l'éducation et les cartes de crédit, RM500,000 pour la plupart des groupes, RM1,000,000 pour la location ou le crédit-bail et la majeure partie de la finance, et RM1,500,000 pour la nourriture et les boissons, la santé privée et la construction. La taxe sur les ventes est distincte, à RM500,000 de biens imposables fabriqués. Chaque groupe est testé sur ses propres douze mois glissants."
keyTakeaways:
  - "Les seuils sont fixés par groupe dans la colonne (3) de la Première Annexe, et non par un seul chiffre national"
  - "L'éducation du Groupe M et les cartes de crédit du poste 1 du Groupe H ont un seuil nul — une seule fourniture imposable déclenche l'assujettissement"
  - "L'article 12(2) comporte deux tests : les douze mois se terminant ce mois-ci, et les douze mois commençant ce mois-ci"
  - "Les revenus exonérés du paiement en vertu de l'art. 34 restent la valeur d'un service imposable et comptent toujours dans le seuil"
  - "Faites la demande au plus tard le dernier jour du mois suivant le mois où l'assujettissement est né, sinon les Douanes peuvent dater votre enregistrement avec effet rétroactif"
  - "L'enregistrement à la taxe sur les ventes est un test distinct de RM500,000 sur la fabrication, et non sur le chiffre d'affaires total"
appliesTo: "Toute entreprise approchant un seuil de la taxe sur les services, et les fabricants testant l'assujettissement à la taxe sur les ventes."

faq:
  - q: "Quel est le seuil d'enregistrement SST en Malaisie ?"
    a: "Il n'y a pas de chiffre unique. Les seuils de la taxe sur les services sont fixés groupe par groupe dans la colonne (3) de la Première Annexe des Service Tax Regulations 2018, et vont de nul à RM1,500,000. La taxe sur les ventes a son propre seuil de RM500,000 en vertu de la Sales Tax (Total Sale Value of Taxable Goods) Order 2018, testé sur la valeur de vente des biens que vous fabriquez."
  - q: "Les revenus exonérés comptent-ils dans le seuil SST ?"
    a: "Oui, et c'est le malentendu le plus coûteux du régime. Des allègements comme l'exonération B2B, l'exonération des contrats non révisables et l'exonération pour les citoyens malaisiens dans la santé privée sont accordés en vertu de l'art. 34 de la Service Tax Act 2018 en tant qu'exonérations du paiement de la taxe. La fourniture reste un service imposable, et l'art. 12(2) teste la valeur totale de tous les services imposables."
  - q: "Quand dois-je demander l'enregistrement à la taxe sur les services ?"
    a: "Au plus tard le dernier jour du mois suivant le mois où vous êtes devenu redevable, en vertu de l'art. 13(1) de la Service Tax Act 2018. Les Douanes vous enregistrent avec effet au premier jour du mois suivant votre demande. Si vous ne faites pas la demande, l'art. 13(4) permet au Directeur général de vous enregistrer à compter de toute date qu'il détermine, à condition qu'elle ne soit pas antérieure à la date où l'assujettissement est né."
  - q: "Puis-je scinder mon entreprise pour rester sous le seuil ?"
    a: "Non. L'article 15 permet au Directeur général d'ordonner que des personnes soient traitées comme une seule personne imposable lorsqu'il est convaincu que la séparation des activités commerciales est artificielle, eu égard à l'étroitesse des liens financiers, économiques et organisationnels qui unissent les entreprises. L'ordre peut exiger l'enregistrement à compter d'une date qu'il précise."
  - q: "Dois-je tester chaque groupe de service séparément ?"
    a: "Oui. Chaque groupe porte son propre seuil dans la colonne (3), de sorte qu'une entreprise ayant des revenus dans deux groupes teste chacun par rapport à son propre chiffre. Les professionnels du Groupe G sont l'exception qui agrège en interne — une personne du Groupe G est redevable dès que la valeur combinée d'un ou de plusieurs services quelconques du Groupe G dépasse RM500,000."

verificationNeeded:
  - "Confirmer le seuil actuel des postes du Groupe I autres que 14 à 16 par rapport à une réimpression consolidée de la Première Annexe — les chiffres indiqués ici ont été lus dans P.U.(A) 214/2018 tel que publié à l'origine au journal officiel, plus les modifications citées, et non dans un texte consolidé"

obligations:
  - what: "Apply for service tax registration"
    trigger: "ongoing"
    due: "not later than the last day of the month following the month in which liability to be registered arises"
    authority: "RMCD"
    statute: "Service Tax Act 2018, s.13(1)"
    consequence: "Offence under s.13(5); Director General may register and backdate under s.13(4)"
  - what: "Apply for sales tax registration as a manufacturer"
    trigger: "ongoing"
    due: "not later than the last day of the month following the month in which liability to be registered arises"
    authority: "RMCD"
    statute: "Sales Tax Act 2018, s.13"
    consequence: "Backdated registration and liability for tax that should have been charged"
  - what: "Register for service tax once taxable turnover crosses your service group threshold"
    trigger: "threshold"
    criteria:
      - metric: "turnover"
        op: "gte"
        value: 500000
    due: "Most service groups register at RM500,000 rolling 12-month taxable turnover; thresholds run by group from nil to RM1,500,000"
    authority: "RMCD"
    statute: "Service Tax Act 2018, First Schedule"

lang: "fr"
sourceContentHash: "cff6143d9061735b"
masterLanguage: "en"
translationStatus: "in-sync"

status: "published"
aiAssisted: true
reviewer: null
reviewed: "2026-07-22"
publishedBy: "ashton-tan"
revision: 0
revisions:
  - revision: 0
    date: 2026-07-20
    change: "Approved and published."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Service Tax Act 2018 (Act 807)"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Service-Tax-Act-2018.pdf"
    publisher: "Département royal des douanes de Malaisie (RMCD)"
  - title: "Service Tax Regulations 2018, P.U.(A) 214/2018 — Première Annexe (First Schedule)"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Service-Tax-Regulations-2018.pdf"
    publisher: "Cabinet du Procureur général (AGC)"
  - title: "Service Tax (Amendment) Regulations 2025, P.U.(A) 172/2025"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/07/Peraturan-Peraturan-CP-Pindaan-2025.pdf"
    publisher: "Cabinet du Procureur général (AGC)"
    date: "2025-06-09"
  - title: "Service Tax (Amendment) Regulations 2025 (Amendment) Regulations 2025, P.U.(A) 201/2025"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/07/5-PUA-201.2025.pdf"
    publisher: "Cabinet du Procureur général (AGC)"
    date: "2025-06-30"
  - title: "Sales Tax (Total Sale Value of Taxable Goods) Order 2018"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Sales-Tax-Total-Sale-Value-Of-Taxable-Goods-Order-2018.pdf"
    publisher: "Cabinet du Procureur général (AGC)"
  - title: "Sales Tax (Exemption from Registration) Order 2018, P.U.(A) 208/2018"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Sales-Tax-Exemption-From-Registration-Order-2018.pdf"
    publisher: "Cabinet du Procureur général (AGC)"

entity: "SST registration threshold"
relations:
  - { rel: "administered-by", to: "rmcd" }
  - { rel: "governs", to: "service-tax-act-2018" }
  - { rel: "part-of", to: "sst-explained" }
  - { rel: "explained-in", to: "sst-rate-table" }
related: ["sst-explained", "sst-expansion-2025", "sst-rate-table", "sales-tax-explained", "sst-02-filing"]
keywords: ["seuil d'enregistrement SST", "seuil de la taxe sur les services Malaisie", "RM500000 SST", "enregistrement taxe sur les ventes Malaisie", "enregistrement MySST", "service tax threshold Malaysia"]
---

Presque tous les guides répondent à « quel est le seuil d'enregistrement SST ? »
par RM500,000. Pour un cabinet d'avocats, c'est exact. Pour un hôpital privé, un
entrepreneur, un bailleur, une école ou un restaurant, c'est faux — et dans deux de
ces cas, c'est faux dans le sens qui vous fait enregistrer des années en retard.

Le seuil vit dans la **colonne (3) de la Première Annexe** des Service Tax
Regulations 2018, groupe par groupe. Il n'y a pas de chiffre national.

## Quel est le seuil de chaque groupe ?

| Groupe | Services | Seuil |
| --- | --- | --- |
| A | Hébergement | RM500,000 |
| B | Nourriture et boissons | RM1,500,000 |
| C | Boîtes de nuit, salles de danse, cabarets, centres de bien-être, salons de massage, pubs et brasseries | RM500,000 |
| D | Clubs privés | RM500,000 |
| E | Clubs de golf et practices | RM500,000 |
| F | Paris et jeux | RM500,000 |
| G | Professionnels | RM500,000 |
| H poste 1 | Cartes de crédit et de débit différé | **Nul** |
| H postes 2–4 | Assurance et takaful, services financiers fondés sur des frais, services financiers de Labuan | RM1,000,000 |
| I postes 1–13 | Autres prestataires de services — publicité, courtage, emploi, sécurité, messagerie, stationnement, entretien de véhicules et autres | RM500,000 |
| I postes 14–16 | Santé privée, médecine traditionnelle et complémentaire, santé connexe | RM1,500,000 |
| J | Services logistiques | RM500,000 |
| K | Location ou crédit-bail | RM1,000,000 |
| L | Travaux de construction | RM1,500,000 |
| M | Éducation | **Nul** |

Deux de ces lignes méritent un second regard.

**Nul n'est pas une coquille.** L'éducation du Groupe M et les cartes de crédit du
poste 1 du Groupe H n'ont aucun seuil. Une école privée facturant plus de RM60,000
par étudiant et par année académique, ou une banque activant une seule carte de
crédit, est redevable dès la première fourniture. Le chiffre de RM60,000 du Groupe M
est un *test de frais qui définit le service imposable* — ce n'est pas un seuil
d'enregistrement, et le lire comme tel est l'erreur standard dans les directives du
secteur éducatif.

**RM1,000,000 a remplacé RM500,000 tardivement.** Le Groupe K et les postes 2 à 4 du
Groupe H ont été publiés au journal officiel à RM500,000 le 9 juin 2025 et modifiés
à RM1,000,000 par P.U.(A) 201/2025 le 30 juin 2025 — un jour avant l'entrée en
vigueur. Les directives publiées dans cette fenêtre de trois semaines citent le
chiffre remplacé.

## Comment la période de douze mois est-elle mesurée ?

L'article 12(2) de la Service Tax Act 2018 donne deux tests, et vous êtes redevable
au **premier des deux qui survient** :

- **Le test historique.** À la fin d'un mois quelconque, lorsque la valeur totale de
  tous vos services imposables au cours de ce mois et des **onze mois immédiatement
  précédents** a dépassé le seuil prescrit.
- **Le test prospectif.** À la fin d'un mois quelconque, lorsqu'il y a des motifs
  raisonnables de croire que le total au cours de ce mois et des **onze mois
  immédiatement suivants** dépassera le seuil.

C'est un test glissant, et non un test d'exercice financier. Il est réexécuté à la
fin de chaque mois. Une entreprise qui examine son chiffre d'affaires annuellement
découvrira son assujettissement en moyenne six mois en retard.

Le test prospectif est celui dont les gens oublient l'existence. Signez un bail de
trois ans à RM40,000 par mois et vous avez des motifs raisonnables de croire que
vous dépasserez RM1,000,000 dans les douze mois — l'assujettissement naît
immédiatement, et non après que vous avez effectivement encaissé l'argent.

## Le piège : les revenus exonérés comptent toujours

C'est le malentendu le plus coûteux du régime, et il découle de la manière dont les
allègements sont rédigés.

Chaque concession de l'extension de 2025 — l'exonération B2B, l'allègement des
contrats non révisables, l'exonération du locataire PME, l'allègement de groupe sur
la location, l'exonération pour les citoyens malaisiens dans la santé privée — est
accordée en vertu de l'**article 34 de la Service Tax Act 2018**, et chaque Service
Tax Policy le dit dès sa ligne d'ouverture : le Ministre *exonère du paiement de la
taxe sur les services*.

Une exonération du paiement ne retire pas le service de la Première Annexe. La
fourniture reste un service imposable. Et l'art. 12(2) mesure **la valeur totale de
tous ses services imposables** — et non la valeur sur laquelle la taxe a
effectivement été payée.

Ainsi :

- Un hôpital privé avec RM900,000 de revenus de patients étrangers et RM4,000,000 de
  revenus de patients malaisiens est au-dessus du seuil de RM1,500,000, même s'il ne
  facture la taxe sur presque aucun d'entre eux.
- Un bailleur dont tous les locataires sont des PME enregistrées sur MyPMK doit tout
  de même compter ce loyer dans RM1,000,000.
- Un entrepreneur travaillant entièrement sous des contrats non révisables antérieurs
  à juillet 2025 compte tout de même ce travail dans RM1,500,000.

La conséquence pratique est que les entreprises dans ces situations doivent
s'enregistrer, déposer des déclarations SST-02 et déclarer les fournitures exonérées
— tout en reversant peu ou pas de taxe. L'enregistrement et le paiement sont des
obligations distinctes, et seule la seconde est allégée.

## Le Groupe G agrège ; les autres groupes non

Le Groupe G porte une note que les autres groupes ne portent pas. Une personne
imposable du Groupe G est redevable de l'enregistrement dès que la valeur totale des
services imposables, **que ce soit de façon combinée ou isolée**, dépasse RM500,000
à travers **un ou plusieurs** services quelconques du Groupe G.

Ainsi, un cabinet fournissant des services juridiques pour RM300,000 et du conseil
pour RM250,000 franchit la ligne à RM550,000, même si aucun service à lui seul
n'atteint RM500,000.

Cette agrégation ne s'étend pas d'un groupe à l'autre. Une entreprise avec RM400,000
d'honoraires professionnels du Groupe G et RM800,000 de loyer du Groupe K teste
RM400,000 par rapport à RM500,000 et RM800,000 par rapport à RM1,000,000 — et ne
s'enregistre pour aucun. Cependant, une fois enregistré pour un groupe quelconque,
vous facturez la taxe sur chaque service imposable que vous fournissez.

## Vous ne pouvez pas scinder l'entreprise

L'article 15 donne au Directeur général le pouvoir d'ordonner que deux personnes ou
plus soient traitées comme une **seule personne imposable** lorsqu'il est convaincu
que la séparation des activités commerciales est artificielle. Le paragraphe (2) dit
que le test est la mesure dans laquelle les personnes sont *étroitement liées entre
elles par des liens financiers, économiques et organisationnels*.

L'ordre peut préciser la date à partir de laquelle la seule personne imposable est
réputée exercer l'activité et la date à partir de laquelle elle doit être
enregistrée. Scinder un groupe de restaurants en sociétés par établissement pour
rester sous RM1,500,000 est le cas d'école.

## S'enregistrer, et ce qui se passe si vous êtes en retard

En vertu de l'art. 13(1), vous devez faire la demande **au plus tard le dernier jour
du mois suivant** le mois où vous êtes devenu redevable. Les demandes passent par le
portail MySST.

L'article 13(3) vous enregistre alors avec effet au **premier jour du mois suivant**
le mois de votre demande — ou une date antérieure convenue, mais jamais antérieure à
la date où l'assujettissement est né.

Manquez le délai et l'art. 13(4) s'applique : le Directeur général vous enregistre à
la date qu'il détermine, à condition qu'elle ne soit pas antérieure à la date où
vous êtes devenu redevable. En pratique, cela signifie une datation rétroactive.
Vous devez alors la taxe sur les fournitures effectuées depuis cette date, que vous
l'ayez ou non facturée à vos clients — et l'art. 13(5) fait du manquement une
infraction à part entière.

L'article 14 autorise l'**enregistrement volontaire** pour ceux qui sont sous le
seuil. Il en vaut parfois la peine pour la crédibilité auprès des clients
d'entreprise, mais il n'y a pas de crédit de taxe en amont dans ce régime, de sorte
que l'enregistrement volontaire ajoute du coût et de la conformité sans rien
récupérer.

## L'enregistrement à la taxe sur les ventes est un test distinct

L'enregistrement à la taxe sur les ventes n'a rien à voir avec votre position à la
taxe sur les services.

Le seuil est de **RM500,000**, fixé par la Sales Tax (Total Sale Value of Taxable
Goods) Order 2018, et il n'a pas été modifié en 2025. Il s'applique aux
**fabricants de biens imposables en Malaisie**, testé sur la valeur de vente des
biens que vous fabriquez — et non sur le chiffre d'affaires total. Les fabricants en
sous-traitance testent la valeur du travail effectué. Les importateurs ne
s'enregistrent pas : la taxe sur les ventes à l'importation est perçue au
dédouanement.

L'article 12(2) de la Sales Tax Act 2018 utilise la même structure historique et
prospective de douze mois.

Certains fabricants sont exemptés d'enregistrement quel que soit leur chiffre
d'affaires en vertu de la Sales Tax (Exemption from Registration) Order 2018 — y
compris le béton prêt à l'emploi, la préparation de repas, la photocopie, la
gravure, le développement photo et l'incorporation de biens dans des bâtiments.

## Erreurs courantes

- **Citer RM500,000 comme la réponse.** C'est exact pour environ la moitié des
  groupes et faux pour le reste, y compris les trois plus grands nouveaux.
- **Lire RM60,000 comme le seuil de l'éducation.** Le Groupe M a un seuil nul ;
  RM60,000 par étudiant définit quelles institutions sont imposables au titre du
  poste 1.
- **Tester le chiffre d'affaires annuellement.** L'art. 12(2) est un test mensuel
  glissant.
- **Ignorer le test prospectif.** Signer un gros contrat peut créer
  l'assujettissement avant qu'aucun argent n'arrive.
- **Exclure les revenus exonérés du calcul du seuil.** L'exonération en vertu de
  l'art. 34 allège le paiement, et non le champ d'application.
- **Agréger d'un groupe à l'autre.** Seul le Groupe G agrège en interne.
- **Supposer que la taxe sur les ventes suit la taxe sur les services.** Deux lois,
  deux seuils, deux enregistrements.

## Et ensuite

Identifiez chaque groupe que touche votre revenu, puis exécutez chacun par rapport à
son propre seuil sur une base glissante de douze mois, revenus exonérés inclus. Si
vous avez franchi une ligne lors d'un mois passé, déterminez la date où
l'assujettissement est né avant de faire la demande — c'est cette date, et non la
date de demande, qui détermine ce que vous devez.

Une fois enregistré, la mécanique passe aux périodes imposables, aux déclarations
SST-02 et au régime des pénalités de paiement tardif. Si vous achetez des services à
des fournisseurs situés hors de Malaisie, vérifiez également les règles des services
imposables importés : elles s'appliquent que vous soyez enregistré ou non.
