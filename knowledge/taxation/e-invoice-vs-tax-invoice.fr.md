---
topicId: MY-TAX-0006
title: "e-Invoice contre facture fiscale SST : deux régimes, deux documents"
seoTitle: "e-Invoice contre facture fiscale en Malaisie : LHDN contre RMCD"
slug: "e-invoice-vs-tax-invoice"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Pourquoi une e-Invoice validée par LHDN ne satisfait pas automatiquement au Sales Tax Act 2018 ni au Service Tax Act 2018, et ce qui doit figurer sur le document pour qu'il remplisse les deux fonctions."

tier: "3"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "L'e-Invoice est un document d'impôt sur le revenu au titre de la s.82C de l'Income Tax Act 1967, administré par LHDN. La facture SST est un document distinct exigé par le Sales Tax Act 2018 et le Service Tax Act 2018, administré par RMCD. Un seul document peut servir aux deux, mais uniquement s'il comporte chaque mention qu'exige chaque régime : la s.82C(4) dispose que, lorsque les mentions sont en conflit, l'e-Invoice n'est valable qu'aux fins de l'impôt sur le revenu."
keyTakeaways:
  - "Deux lois, deux régulateurs : LHDN sous l'ITA 1967, RMCD sous les lois fiscales de 2018"
  - "La s.82C(4) de l'ITA 1967 permet à un seul document de remplir les deux fonctions, mais seulement là où les mentions concordent"
  - "Lorsqu'elles sont en conflit, l'e-Invoice n'est opposable qu'aux fins de l'impôt sur le revenu"
  - "Les mentions de la taxe sur les services figurent au reg. 10 des Service Tax Regulations 2018"
  - "Les mentions de la taxe sur les ventes figurent au reg. 7 des Sales Tax Regulations 2018"
  - "Les données MyInvois sont partagées avec RMCD en vertu de la s.138(4)(aa) de l'ITA 1967"
appliesTo: "Les entreprises inscrites à la SST qui relèvent aussi du champ de la facturation électronique, et toute personne concevant un modèle de facture devant satisfaire les deux régulateurs."

verificationNeeded:
  - "Si RMCD a publié un guide dédié conciliant la représentation visuelle de l'e-Invoice avec les mentions de la facture SST — aucun n'a été localisé sur mysst.customs.gov.my"

lang: "fr"
sourceContentHash: "cf809540c51ed69e"
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
  - title: "Finance (No. 2) Act 2023 (Act 851) — section 82C (loi de finances (n° 2) de 2023)"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Gouvernement de la Malaisie"
    date: "2023-12-29"
  - title: "Service Tax Regulations 2018 — regulation 10 (règlement de 2018 sur la taxe sur les services — règlement 10)"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Service-Tax-Regulations-2018.pdf"
    publisher: "Département royal des douanes de Malaisie (RMCD)"
  - title: "Sales Tax Regulations 2018 — regulation 7 (règlement de 2018 sur la taxe sur les ventes — règlement 7)"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Sales-Tax-Regulations-2018.pdf"
    publisher: "Département royal des douanes de Malaisie (RMCD)"
  - title: "Guide de l'e-Invoice (version 4.7) (e-Invoice Guideline (Version 4.7))"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Direction générale des impôts de Malaisie (LHDN)"
    date: "2026-07-07"
  - title: "MySST — Émission des factures (MySST — Issuing Invoices)"
    url: "https://mysst.customs.gov.my/issuing-invoices/"
    publisher: "Département royal des douanes de Malaisie (RMCD)"

entity: "e-Invoice compared with the SST tax invoice"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "compares-with", to: "sst-explained" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "governs", to: "service-tax-act-2018" }
  - { rel: "governs", to: "sales-tax-act-2018" }
related: ["e-invoicing", "sst-explained", "myinvois-phases", "e-invoice-data-fields", "consolidated-e-invoice"]
keywords: ["e-Invoice vs tax invoice", "SST invoice requirements", "Service Tax Regulations 2018 regulation 10", "sales tax invoice particulars", "LHDN RMCD invoice", "invois cukai SST"]
---

Valider une facture via MyInvois n'en fait pas une facture SST. Cette
phrase cause aux entreprises inscrites à la SST plus d'ennuis que tout autre point
du déploiement de la facturation électronique, car deux régulateurs attendent
deux choses différentes du même document.

## Les deux régimes en un coup d'œil

| | e-Invoice | Facture SST |
| --- | --- | --- |
| Loi | Income Tax Act 1967, **s.82C** | **Sales Tax Act 2018** / **Service Tax Act 2018**, s.21 |
| Régulateur | **LHDN** | **RMCD** |
| Mentions fixées par | Guide de l'e-Invoice, au titre de la s.134A de l'ITA 1967 | **reg. 7** Sales Tax Regulations 2018 / **reg. 10** Service Tax Regulations 2018 |
| Qui doit émettre | Contribuables dans le champ selon la phase par chiffre d'affaires | Fabricants **inscrits** et personnes inscrites |
| Validation | Transmise à LHDN et validée par elle | Aucune — ni envoi ni numéro de référence |
| Finalité | Preuve de revenu et de dépense pour l'impôt sur le revenu | Preuve de l'impôt perçu pour la comptabilité SST |

Aucun ne remplace l'autre. Une entreprise inscrite à la SST dont le chiffre d'affaires
est inférieur à RM1 million est exemptée de la facturation électronique et émet pourtant des factures
SST. Une grande entreprise non inscrite est le cas inverse.

## La disposition qui régit réellement ceci

La section 82C(4) de l'Income Tax Act 1967, introduite par la Finance (No. 2)
Act 2023 :

> Lorsqu'une personne est tenue d'émettre une facture en vertu de toute
> autre loi écrite, la facture électronique, y compris toutes autres
> mentions pouvant être requises, est réputée être une facture émise en vertu
> de cette loi — **à condition que, lorsque les mentions de la facture électronique
> sont incompatibles avec les exigences d'émission des factures en vertu de
> cette loi, la facture électronique ne soit valable et opposable qu'aux fins de la
> présente Loi.**

Lisez la réserve deux fois. Un seul document peut satisfaire les deux régimes,
mais seulement s'il comporte tout ce que les deux demandent. Si vous êtes en deçà du côté de
RMCD, vous n'avez pas émis un document défectueux pour les deux : vous avez un document
d'impôt sur le revenu parfaitement valable et **aucune facture SST du
tout**.

Les sections 2.6.3 et 2.6.4 du Guide de l'e-Invoice disent la même chose en
termes plus simples : les contribuables peuvent adopter tout format de
représentation visuelle, et il leur est *conseillé* d'inclure les mentions exigées par
des lois telles que le Sales Tax Act 2018 et le Service Tax Act 2018. Lorsque la
représentation visuelle comporte les mentions des Service Tax Regulations
2018, elle peut être utilisée aux fins de la taxe sur les services.

## Ce que RMCD exige et que la liste des champs de l'e-Invoice n'impose pas

**Règlement 10, Service Tax Regulations 2018** — numéro de série de la facture ;
date de la facture ; nom, adresse et numéro d'identification de la personne
inscrite ; une description suffisante pour identifier les services taxables ;
toute remise ; le total hors taxe sur les services, le taux, et
la taxe sur les services totale **indiquée comme un montant distinct** ; le total
toutes taxes sur les services comprises ; et tout montant en devise étrangère
également exprimé en ringgit au taux de vente en vigueur.

**Règlement 7, Sales Tax Regulations 2018** ajoute, entre autres, **le nom et l'
adresse de la personne à qui les biens taxables sont vendus**, et par
description le type, la quantité et le montant hors taxe sur les
ventes.

Deux lacunes en découlent directement :

- **Le nom et l'adresse de l'acheteur.** Les 55 champs de LHDN les incluent,
  mais une e-Invoice consolidée fixe l'acheteur à *General Public* avec l'adresse
  en NA. Un fabricant inscrit ne peut pas documenter une vente
  taxable de cette façon tout en respectant le reg. 7(d).
- **La taxe indiquée comme un montant distinct.** L'e-Invoice porte le type
  d'impôt, le taux et le montant comme données. Que votre *représentation visuelle*
  imprime la taxe sur les services comme une ligne distincte est une décision de
  modèle — et le reg. 10(f) en fait une décision juridique.

La langue est aussi une règle de RMCD, non de LHDN : les factures SST doivent être
en bahasa melayu ou en anglais.

## RMCD voit-il mes données d'e-Invoice ?

Oui. La section 138(4)(aa) de l'Income Tax Act 1967 autorise LHDN à partager
les données MyInvois avec RMCD, et la section 2.6.1 du Guide de l'e-Invoice
confirme que la liste des champs a été conçue au regard du Sales Tax Act 2018 et du
Service Tax Act 2018 aux côtés de l'ITA 1967, du Labuan Business Activity
Tax Act 1990 et du Petroleum (Income Tax) Act 1967. Vos deux déclarations sont
désormais visibles l'une pour l'autre.

## Erreurs courantes

- **Retirer le modèle de facture SST à la mise en service.** Rien dans la s.
  82C n'abroge la s.21 de l'une ou l'autre des lois de 2018.
- **Supposer que la validation corrige une mention manquante.** MyInvois valide
  par rapport au schéma de LHDN. Il n'a aucune opinion sur le reg. 7 ni le reg. 10.
- **Utiliser une e-Invoice consolidée pour une vente taxable à un acheteur
  nommé.** Elle ne peut pas porter les mentions de l'acheteur qu'exige le reg.
  7.
- **Omettre le numéro d'enregistrement SST du document imprimé.** C'est un champ de l'
  e-Invoice conditionnellement obligatoire pour les inscrits et une mention du
  reg. 10.
- **Traiter la déclaration SST-02 et l'e-Invoice comme un seul flux de travail.**
  Régulateur différent, période différente, sanctions différentes.

## Et ensuite

Placez les deux listes de mentions côte à côte face à votre facture
imprimée réelle, non face à votre XML. Le XML satisfait LHDN ; la représentation
visuelle est ce qui doit satisfaire RMCD. Si vous consolidez aussi des reçus B2C,
vérifiez séparément si l'une de ces opérations est une fourniture taxable
nécessitant un acheteur nommé.
