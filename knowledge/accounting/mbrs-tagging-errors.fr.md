---
topicId: MY-ACC-0003
title: "Erreurs de balisage SSMxT : pourquoi les dépôts MBRS échouent à la validation"
seoTitle: "Erreurs de balisage MBRS : échecs de validation SSMxT"
slug: "mbrs-tagging-errors"
category: "accounting"
subcategory: ["financial-statements"]
summary: "Les erreurs de balisage qui empêchent un dépôt MBRS de se générer ou qui le font revenir avec des observations — sélection erronée d'éléments, erreurs d'échelle et de signe, balisage en bloc contre balisage en détail, et notes qui n'ont pas de place dans la taxonomie."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "La plupart des échecs de validation MBRS relèvent de cinq familles : un élément obligatoire absent, un élément obligatoire dérivé déclenché par un choix dans l'information de dépôt, une agrégation de dimensions qui ne somme pas à la valeur de son parent, une infraction à une règle de signe, ou une incohérence inter-états. Les erreurs que la validation ne peut pas détecter sont pires — la sélection erronée d'éléments et l'échelle erronée produisent toutes deux des fichiers techniquement valides porteurs de chiffres faux."
keyTakeaways:
  - "L'erreur d'échelle est la dangereuse : un chiffre saisi en milliers passe toutes les règles de validation et déclare les comptes faux d'un facteur mille"
  - "Il n'existe aucun élément SSMxT qui doive toujours être négatif — les charges sont normalement stockées comme des nombres positifs"
  - "La validation s'exécute sur des assertions où vrai signifie qu'elle est passée, de sorte que le message nomme la règle, non la correction"
  - "Les extensions de l'entreprise sont interdites, donc une note non mappable va dans un bloc de texte, jamais dans un concept inventé"
  - "L'information de dépôt en haut du modèle pilote les règles obligatoires dérivées plus bas — un statut d'entreprise erroné se propage en cascade"
  - "La base de présentation est un choix que vous faites une fois : ordre de liquidité contre courant/non courant, fonction contre nature des charges"
appliesTo: "Préparateurs produisant des documents d'instance XBRL de la SSM dans mTool, et réviseurs qui valident un dépôt avant qu'un lodger ne le soumette."

faq:
  - q: "Pourquoi mTool indique-t-il qu'un élément est obligatoire alors que mes comptes n'ont pas ce poste ?"
    a: "SSMxT modélise les éléments obligatoires comme des assertions d'existence, avec une assertion distincte pour chaque concept afin que le message d'échec puisse le nommer. Certains sont inconditionnellement obligatoires — le propre exemple de la SSM est que les actifs (Assets) doivent être renseignés. D'autres sont obligatoires dérivés, requis seulement à cause de quelque chose que vous avez sélectionné ailleurs. Si le poste n'existe réellement pas dans vos comptes, vérifiez si un choix dans l'information de dépôt a déclenché l'exigence avant de supposer que l'outil se trompe."
  - q: "Les charges doivent-elles être balisées comme des nombres négatifs ?"
    a: "Normalement non. Le document d'architecture SSMxT établit qu'il n'existe aucun élément qui doive toujours être stocké comme valeur négative, parce que les éléments à pondération négative comme les charges sont stockés comme des nombres positifs dans la plupart des cas. Ce que le linkbase de formules impose, c'est une liste d'éléments qui doivent toujours être positifs. Les erreurs de signe dans les dépôts SSMxT sont donc plus souvent une application excessive de signes moins qu'une application insuffisante."
  - q: "Comment baliser une note pour laquelle la taxonomie n'a pas de concept ?"
    a: "Dans un bloc de texte. Les extensions de l'entreprise à SSMxT_2022v1.0 ne sont pas autorisées, donc vous ne pouvez pas créer un élément. L'approche déclarée de la SSM est que le préparateur fournit le niveau de détail nécessaire en balisant l'information en bloc de texte à l'aide de concepts de bloc de texte appropriés. L'information est tout de même déposée, elle n'est simplement pas lisible par machine de façon individuelle."
  - q: "Quelle est la différence entre le balisage en bloc et le balisage en détail ?"
    a: "Le balisage en détail attribue à chaque chiffre son propre concept, de sorte que le nombre est lisible par machine de façon individuelle et soumis aux règles de validation. Le balisage en bloc capture une note entière comme un bloc de texte par rapport à un concept. Le balisage en détail est obligatoire partout où la taxonomie modélise le concept ; le balisage en bloc est le recours pour le détail que la taxonomie ne contient pas. Mettre en bloc quelque chose que la taxonomie modélise est un défaut de qualité même lorsque cela ne fait pas échouer la validation."
  - q: "Une erreur de validation signifie-t-elle que la SSM a rejeté mon dépôt ?"
    a: "Non. La validation de mTool se produit hors ligne avant que rien ne soit soumis, et le fichier ne se générera simplement pas. Un rejet ou une observation est un événement distinct qui se produit dans mPortal après le téléversement. Ni l'un ni l'autre n'arrête le délai de circulation de la section 258 ni le délai de dépôt de la section 259."

verificationNeeded:
  - "La SSM ne publie pas de liste consolidée des codes de motif de rejet MBRS — les familles d'erreurs présentées ici sont déduites des catégories du linkbase de formules du document d'architecture SSMxT_2022, et non d'un registre de rejets publié"
  - "Confirmer le comportement de validation du point d'entrée spécifique par rapport au manuel d'utilisation de mTool 2.2 pour ce point d'entrée avant de s'appuyer sur une règle décrite de manière générique"

lang: "fr"
sourceContentHash: "4cbf1a047bbd3c22"
masterLanguage: "en"
translationStatus: "in-sync"

status: "published"
aiAssisted: true
reviewer: null
reviewed: 2026-07-22
reviewDue: 2027-07-22
revision: 0
revisions:
  - revision: 0
    date: 2026-07-20
    change: "Approved and published."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Document d'architecture de la Taxonomie SSM 2022 de MBRS 2.0 (SSMxT_2022) (MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "Système malaisien de reporting d'entreprise (MBRS) — Foire aux questions, version 2.4 (Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, version 2.4)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQs_Malaysian_Business_Reporting_System_MBRS.pdf"
    publisher: "SSM"
    date: "2024-10-01"
  - title: "Amélioration MBRS 2.0 — Vue d'ensemble (MBRS Enhancement MBRS 2.0 — Overview)"
    url: "https://www.ssm.com.my/Pages/Publication/PDF%20Files/AD%202024%20-%20Overview%20of%20MBRS%20v2.pdf"
    publisher: "SSM"
  - title: "Loi sur les sociétés de 2016 (Loi 777), texte à jour au 1er août 2022 (Companies Act 2016 (Act 777), updated text as at 1 August 2022)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
  - title: "MBRS — Système malaisien de reporting d'entreprise (MBRS — Malaysian Business Reporting System)"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/MBRS.aspx"
    publisher: "SSM"

entity: "SSMxT tagging errors"
relations:
  - { rel: "administered-by", to: "ssm" }
  - { rel: "part-of", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "mbrs-2" }
  - { rel: "related-to", to: "financial-statement-pack" }
  - { rel: "related-to", to: "sdn-bhd-bookkeeping" }
related: ["mbrs-2-filing-guide", "mbrs-2", "financial-statement-pack", "sdn-bhd-bookkeeping", "mfrs-vs-mpers"]
keywords: ["erreur de balisage MBRS", "validation SSMxT", "échec de validation XBRL Malaisie", "erreur mTool", "MBRS rejeté", "balisage en bloc de texte SSM", "échelle decimals MBRS"]
---

L'échec qui coûte de l'argent n'est pas celui qui empêche le fichier de se générer. C'est celui qui se génère proprement, se dépose proprement, et porte un chiffre faux d'un facteur mille.

La validation SSMxT est bonne en arithmétique et aveugle au sens. Elle refusera un état des variations des capitaux propres qui ne tombe pas juste. Elle acceptera volontiers un actif total de RM53,928 pour une entreprise ayant RM53.9 millions au bilan, parce que 53,928 est un nombre parfaitement valide.

Cette asymétrie est la façon dont vous devriez lire chaque famille d'erreurs ci-dessous : celles que l'outil détecte sont gênantes, et celles qu'il ne détecte pas sont celles qu'il faut réviser.

## Les deux erreurs que la validation ne peut pas voir

### L'échelle

SSMxT gère l'arrondi via l'attribut XBRL `decimals`, et non en arrondissant la valeur. L'exemple résolu de la SSM : une entreprise dont les comptes sont exprimés en milliers et dont les actifs affichent 53,928 balise le fait comme **53928000 avec `decimals` fixé à -3**.

Un préparateur qui copie le chiffre imprimé directement sur le recto des comptes balise 53928. Aucune règle ne se déclenche. L'instance est du XBRL valide. Les comptes déposés montrent une entreprise au millième de sa taille réelle — lisible par machine, permanent, et visible pour quiconque extrait les données.

Chaque dépôt préparé à partir d'un jeu de comptes présenté en milliers ou en millions nécessite un contrôle d'échelle comme une étape de révision distincte, séparée de la validation.

### La sélection d'éléments

La taxonomie comporte des milliers de concepts, dont plusieurs s'adapteront de façon plausible à un solde donné. Rien dans mTool ne vous indique que vous avez choisi le plausible plutôt que le correct.

Deux conséquences en découlent. Première, les comptes balisés cessent de correspondre à ce que comprendrait un lecteur du PDF. Seconde — et c'est celle qui mord la deuxième année — la décision de mapping est un **précédent**. Balisez le même solde différemment l'année prochaine et vos comparatifs divergent dans les données même si les comptes imprimés sont cohérents.

Consignez le mapping. Pas le fichier, le mapping : le compte, le concept, et la raison lorsque le choix relevait du jugement.

## Les cinq familles d'échec de validation

La SSM intègre les règles dans le linkbase de formules de la taxonomie, à l'aide d'assertions d'existence et d'assertions de valeur, modélisées de sorte que **vrai signifie que la règle est passée**.

**Éléments obligatoires.** Des concepts qui doivent être présents, une assertion par concept afin que le message d'échec nomme l'élément absent. Exemple documenté par la SSM : « Assets » (actifs) doit être renseigné.

**Éléments obligatoires dérivés.** Requis seulement sous certaines conditions, modélisés avec une condition préalable plus une assertion de valeur. L'exemple de la SSM est exact et mérite d'être mémorisé : *lorsque le déclarant sélectionne le statut de l'entreprise comme « Public company », alors l'information sur le statut d'audit des états financiers doit être « Audited ».*

C'est la famille qui produit les demandes d'assistance les plus déconcertées, parce que l'erreur affleure dans les états financiers alors que sa cause est un menu déroulant dans le bloc d'information de dépôt. Avant de discuter avec une erreur obligatoire dérivée, relisez l'en-tête.

**Agrégation des dimensions.** Les membres d'un axe doivent sommer à la valeur de leur parent lorsque le préparateur les a structurés dans une hiérarchie de type sommatoire. Exemple de la SSM : le total des capitaux propres est égal aux intérêts non contrôlants plus les autres composantes des capitaux propres plus les capitaux propres attribuables aux propriétaires de la société mère.

**Valeurs positives et négatives.** Ici, l'intuition que la plupart des préparateurs apportent est erronée. Le document d'architecture est explicite : *il n'existe aucun élément qui doive toujours être stocké comme valeur négative*, parce que les postes à pondération négative comme le coût des ventes sont stockés comme des nombres positifs dans la plupart des cas. Ce que le linkbase de formules comporte réellement, c'est une liste d'éléments qui doivent **toujours être positifs** — l'exemple de la SSM est que le montant total d'endettement en MYR doit être une valeur positive.

Ainsi, l'erreur de signe courante dans un dépôt SSMxT n'est pas un signe moins absent. C'est un préparateur qui, serviable, en ajoute un.

**Données inter-états et corrélées.** Le même fait apparaissant dans plus d'un état doit concorder, et les faits logiquement liés sont vérifiés les uns par rapport aux autres. Un chiffre de résultat dans l'état du résultat net qui ne concorde pas avec le mouvement d'ouverture à clôture de l'état des variations des capitaux propres était autrefois invisible dans un PDF. Il bloque désormais le fichier.

Sous les cinq se situent les contrôles structurels — validation XBRL, dimensionnelle, de formules, de tableaux, d'énumération extensible et iXBRL — qui confirment que l'instance est bien formée par rapport à SSMxT_2022v1.0 elle-même.

## Balisage en bloc contre balisage en détail

Le balisage en détail donne à un chiffre son propre concept : lisible par machine de façon individuelle, validé de façon individuelle, comparable d'une année à l'autre de façon individuelle. Le balisage en bloc capture une note entière comme texte par rapport à un seul concept de bloc de texte.

La règle qui décide lequel vous utilisez n'est pas une préférence. **Les extensions de l'entreprise à SSMxT_2022v1.0 ne sont pas autorisées.** Là où la taxonomie comporte un concept, vous le balisez. Là où les normes comptables exigent un détail que la taxonomie ne modélise pas — les ventilations par segments étant le propre exemple de la SSM de détail spécifique à l'entité — l'instruction est de le fournir par balisage en bloc de texte dans un concept de bloc de texte approprié.

Le mode d'échec est l'excès de mise en bloc : un préparateur sous pression de délai met en bloc une note entière que la taxonomie modélise concept par concept. Elle se génère, elle se dépose, et elle vide le dépôt de sa substance. Rien dans la chaîne de données que la SSM a construite ne tire parti d'une note stockée comme un paragraphe.

Lorsqu'une instance est préparée en iXBRL, le contenu lisible par l'humain non balisé peut se situer dans le document aux côtés des faits balisés. Cela réduit la pression de tout forcer dans une balise, mais n'autorise pas à mettre en bloc ce qui devrait être en détail.

## Les notes qui ne mappent pas

Trois situations se répètent.

**Une note pour laquelle la taxonomie n'a pas de concept.** Bloc de texte. C'est la réponse conçue, non un bricolage.

**Une note que la taxonomie modélise sous un nom différent.** Plus courant que les préparateurs ne s'y attendent, parce que SSMxT hérite des libellés de l'IFRS Taxonomy 2022 tandis que les comptes malaisiens portent souvent une terminologie maison. Utilisez le navigateur SSMxT intégré à mTool pour rechercher le concept, non le libellé auquel vous êtes habitué.

**Une note qui appartient à une base de présentation que vous n'avez pas choisie.** La taxonomie comporte des alternatives — courant/non courant contre ordre de liquidité pour l'état de la situation financière, fonction contre nature des charges pour le résultat net, direct contre indirect pour les flux de trésorerie. Les concepts appartenant à la base que vous n'avez pas sélectionnée ne sont pas disponibles. Les préparateurs lisent cela comme un élément absent. C'est un choix de présentation fait deux étapes plus tôt.

## La monnaie, et la règle statutaire qui la sous-tend

Les faits monétaires doivent porter `iso4217:MYR`. Les préparateurs de filiales détenues par des étrangers qui font rapport à un groupe dans une autre monnaie supposent parfois que la monnaie de présentation voyage avec les comptes. Ce n'est pas le cas.

Ce n'est pas qu'une contrainte de la taxonomie. La section 259(1)(c) de la Companies Act 2016 exige que tous les montants figurant dans les états financiers et rapports déposés auprès du Registraire soient libellés en monnaie malaisienne, et que les documents rédigés dans toute langue autre que le malais (Bahasa Malaysia) ou l'anglais soient accompagnés d'une traduction certifiée.

## Erreurs courantes

- **Saisir le chiffre imprimé de comptes exprimés en milliers** au lieu du montant complet avec `decimals` fixé à -3. Passe la validation, déclare les comptes faux.
- **Ajouter des signes moins aux charges.** SSMxT stocke les postes à pondération négative comme positifs dans la plupart des cas.
- **Discuter avec une erreur obligatoire dérivée** sans vérifier l'en-tête d'information de dépôt qui l'a déclenchée.
- **Mettre en bloc une note que la taxonomie modélise en détail** parce que le délai est plus proche que la compréhension.
- **Rechercher dans la taxonomie le nom de votre propre compte** au lieu du libellé IFRS, puis conclure que le concept n'existe pas.
- **Changer de base de présentation d'une année à l'autre**, ce qui casse silencieusement les comparatifs dans les données.
- **Supposer qu'un échec de validation est un rejet.** La validation est hors ligne dans mTool ; le rejet et l'observation se produisent dans mPortal après le téléversement. Ni l'un ni l'autre n'arrête l'horloge statutaire.
- **Baliser la monnaie de présentation d'un groupe** au lieu du ringgit malaisien.
- **Traiter le mapping comme jetable.** Le document d'instance est jetable. Le mapping est l'actif.

## La suite

Intégrez une étape de révision à deux colonnes dans votre clôture : chaque fait balisé par rapport au recto des comptes, contrôlé quant à l'échelle, et chaque mapping relevant du jugement consigné avec sa raison. Ni l'un ni l'autre n'est une règle de validation, ce qui est exactement pourquoi ni l'un ni l'autre ne sera détecté pour vous.

Si vous êtes encore en train de choisir un point d'entrée ou de régler les rôles de maker et de lodger, commencez par le [guide de préparation MBRS 2.0](/fr/accounting/mbrs-2-filing-guide).
