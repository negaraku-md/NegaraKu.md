---
topicId: MY-ACC-0002
title: "Préparer un dépôt MBRS 2.0 : mTool, la taxonomie SSMxT et la boucle de rejet"
seoTitle: "Guide de dépôt MBRS 2.0 : balisage avec mTool et SSMxT"
slug: "mbrs-2-filing-guide"
category: "accounting"
subcategory: ["financial-statements"]
summary: "La mécanique de bout en bout de la préparation d'un dépôt XBRL auprès de la SSM — choisir le point d'entrée, mapper les comptes aux concepts SSMxT, passer la validation de mTool et faire repasser un dépôt ayant fait l'objet d'observations par mPortal."

tier: "1"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Un dépôt MBRS 2.0 se prépare hors ligne dans mTool, l'outil de préparation sous Excel de la SSM, et se dépose en ligne via mPortal. Vous choisissez l'un des 31 points d'entrée, vous mappez chaque chiffre des états financiers à un concept de la Taxonomie SSM (SSMxT_2022v1.0), vous passez les règles de validation de la taxonomie intégrées à l'outil et vous générez un document d'instance XBRL. Un maker le téléverse ; seul un lodger détenant un certificat d'exercice valide peut le soumettre."
keyTakeaways:
  - "mTool 2.2 est l'outil de préparation actuel ; la taxonomie qu'il contient est SSMxT_2022v1.0, construite sur l'IFRS Taxonomy 2022"
  - "31 points d'entrée répartis entre déclarations annuelles, états financiers, indicateurs financiers clés, rectifications et demandes d'exemption — choisir le mauvais signifie reconstruire le fichier"
  - "Les extensions de l'entreprise ne sont pas autorisées : si la taxonomie n'a pas d'élément pour votre poste, vous le balisez dans un bloc de texte, vous n'inventez pas un concept"
  - "Les montants doivent être en ringgit malaisien — la section 259(1)(c) de la Companies Act 2016 l'exige et la taxonomie impose iso4217:MYR"
  - "La validation est fondée sur des règles, elle n'est pas cosmétique : éléments obligatoires, éléments obligatoires dérivés, agrégation des dimensions, règles de signe et cohérence inter-états s'exécutent tous avant que le fichier ne se génère"
  - "Le maker prépare et téléverse, le lodger approuve et soumet — un administrateur n'a de rôle dans ni l'un ni l'autre"
  - "Un dépôt ayant fait l'objet d'observations retourne au maker ; le délai statutaire ne s'arrête pas pendant que vous le corrigez"
appliesTo: "Comptables, secrétaires de société et personnel financier qui doivent produire le fichier XBRL lui-même, et pas seulement savoir qu'un tel fichier est requis."

faq:
  - q: "Quelle version de mTool et quelle taxonomie dois-je utiliser ?"
    a: "mTool 2.2 est la version actuelle sur la page MBRS de la SSM, et la taxonomie qui y est intégrée est SSMxT_2022v1.0, fondée sur l'IFRS Accounting Taxonomy 2022. La SSM publie une note distincte sur les différences entre mTool 2.1 et 2.2. Un fichier zip généré dans mTool 1.0 ne peut pas être téléversé dans mPortal 2.0 — il doit être ouvert dans l'outil actuel et régénéré."
  - q: "Qu'est-ce qu'un point d'entrée et comment choisir le bon ?"
    a: "Un point d'entrée est le schéma de taxonomie propre à un type de soumission. MBRS 2.0 en compte 31 : cinq types de déclaration annuelle, des types d'états financiers répartis par norme comptable et type d'entreprise (FS-MFRS, FS-MPERS, FS-CLBG, FS-EPC, FS-FC, FS-BNM, plus les équivalents de la Companies Act 1965), quatre types d'indicateurs financiers clés, la rectification et huit demandes d'exemption. Le bon est fixé par votre type d'entreprise, la Loi en vertu de laquelle vous déposez et la norme comptable que vous appliquez."
  - q: "Puis-je créer ma propre balise si la taxonomie n'a pas d'élément pour un poste ?"
    a: "Non. Le document d'architecture SSMxT établit clairement que les extensions de l'entreprise à SSMxT_2022v1.0 ne sont pas autorisées. Lorsque la taxonomie ne contient aucun concept correspondant, le préparateur fournit le détail en le balisant dans un élément de bloc de texte approprié. C'est la plus grande différence entre le dépôt auprès de la SSM et le reporting XBRL volontaire ailleurs."
  - q: "Qui peut réellement soumettre le fichier — le maker ou le lodger ?"
    a: "Le maker prépare le document d'instance et le téléverse dans mPortal, mais la soumission est l'acte du lodger. Un lodger doit détenir un certificat d'exercice actif enregistré via e-Secretary, ainsi qu'un certificat numérique valide. Si le certificat d'exercice a expiré, le dépôt ne peut tout simplement pas sortir, quelle que soit la qualité du fichier XBRL."
  - q: "Puis-je déposer des indicateurs financiers clés au lieu d'un jeu complet d'états financiers ?"
    a: "Uniquement avec une approbation préalable. Une entreprise doit d'abord demander, sous le point d'entrée EA2, l'exemption de déposer des états financiers et rapports au format XBRL complet, faite en vertu de la section 604(2) de la Companies Act 2016. Une fois que la SSM l'accorde, l'entreprise peut utiliser un point d'entrée KFI. Déposer des KFI sans cette approbation n'est pas une option."
  - q: "Si la SSM formule des observations sur mon dépôt, le délai s'arrête-t-il ?"
    a: "Non. Une observation renvoie le dépôt au maker pour correction et resoumission, mais rien de tout cela n'arrête l'horloge de circulation de la section 258 ni l'horloge de dépôt de la section 259. Si le fichier corrigé arrive après la date statutaire, les sanctions pour dépôt tardif en vertu de la Directive de pratique 1/2017 s'appliquent à compter de la date d'échéance d'origine."

verificationNeeded: []

lang: "fr"
masterLanguage: "en"
translationStatus: "stale"

status: "draft"
aiAssisted: true
reviewer: null
publishedBy: "ashton-tan"
reviewed: 2026-08-14
reviewDue: 2027-07-22
revision: 0
revisions:
  - revision: 0
    date: 2026-08-14
    change: "Approved and published."
    reviewer: null

updated: 2026-08-14
sources:
  - title: "Système malaisien de reporting d'entreprise (MBRS) — Foire aux questions, version 2.8 (Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, Version 2.8)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQ_MBRS_ISSB.pdf"
    publisher: "SSM"
    date: "2025-05-01"
  - title: "Barème des frais — Enregistrement des sociétés (ROC) (Table of Fees — Registration of Company (ROC))"
    url: "https://www.ssm.com.my/Pages/Services/Registration-of-Company-(ROC)/Table-of-Fees.aspx"
    publisher: "SSM"
  - title: "Amélioration MBRS 2.0 — Vue d'ensemble (MBRS Enhancement MBRS 2.0 — Overview)"
    url: "https://www.ssm.com.my/Pages/Publication/PDF%20Files/AD%202024%20-%20Overview%20of%20MBRS%20v2.pdf"
    publisher: "SSM"
  - title: "Document d'architecture de la Taxonomie SSM 2022 de MBRS 2.0 (SSMxT_2022) (MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "MBRS — Système malaisien de reporting d'entreprise (MBRS — Malaysian Business Reporting System)"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/MBRS.aspx"
    publisher: "SSM"
  - title: "Loi sur les sociétés de 2016 (Loi 777), texte à jour au 1er août 2022 (Companies Act 2016 (Act 777), updated text as at 1 August 2022)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
  - title: "Companies Act 2016 : Directive de pratique n° 1/2017 (révisée le 1er octobre 2024) (Companies Act 2016: Practice Directive No. 1/2017 (Revised 1 October 2024))"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Practice%20Directive%201_2017%20(Revised)%201%20Oct%202024.pdf"
    publisher: "SSM"
    date: "2024-10-01"
  - title: "Directive de pratique n° 10/2024 — Critères d'éligibilité à l'exemption d'audit pour certaines sociétés privées en Malaisie (Practice Directive No. 10/2024 — Qualifying Criteria for Audit Exemption for Certain Private Companies in Malaysia)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/PD10-2024-Qualifying-Criteria-for-Audit-Exemption-for-Certain-Categories-of-Private-Companies.pdf"
    publisher: "SSM"
    date: "2024-12-16"

entity: "MBRS 2.0 filing preparation"
relations:
  - { rel: "administered-by", to: "ssm" }
  - { rel: "governs", to: "companies-act-2016" }
  - { rel: "explained-in", to: "mbrs-2" }
  - { rel: "related-to", to: "mbrs-tagging-errors" }
  - { rel: "related-to", to: "financial-statement-pack" }
  - { rel: "related-to", to: "financial-statements-lodgement" }
  - { rel: "related-to", to: "unaudited-financial-statements" }
  - { rel: "related-to", to: "extension-of-time-ssm" }
related: ["mbrs-2", "mbrs-tagging-errors", "financial-statement-pack", "financial-statements-lodgement", "unaudited-financial-statements", "extension-of-time-ssm", "mfrs-vs-mpers"]
keywords: ["guide de dépôt MBRS 2.0", "mTool 2.2", "taxonomie SSMxT", "balisage XBRL Malaisie", "point d'entrée MBRS", "mPortal maker lodger", "rejet MBRS", "préparer états financiers XBRL SSM"]
---

Les résultats de recherche pour « MBRS 2.0 » sont presque entièrement des gens qui vous vendent un moyen de ne pas le faire. Prestataires de conversion, services de balisage externalisés et accroches de préparation des Big Four qui se terminent par « parlez-nous ». Personne ne publie ce qui se passe réellement entre un jeu de comptes signé et un accusé de réception de la SSM.

Voici ce qui se passe. Vous installez un complément de Microsoft Excel, choisissez l'un des trente et un points d'entrée et mappez chaque chiffre de vos états financiers à un concept d'une taxonomie de 6,000 éléments que vous n'êtes pas autorisé à étendre. Puis l'outil refuse de générer un fichier tant que chaque élément obligatoire n'est pas présent, que chaque sous-total ne tombe pas juste et que chaque convention de signe n'est pas correcte. Puis une personne détenant un certificat d'exercice appuie sur soumettre.

Cette page porte sur la mécanique. L'**obligation** de déposer — qui, quand, et quelle est la sanction — figure dans la page compagnon sur [MBRS 2.0 et l'obligation de dépôt](/fr/company-secretary/mbrs-2).

## Ce que vous construisez réellement

Un dépôt MBRS est un document d'instance XBRL : un fichier structuré dans lequel chaque chiffre porte une identité lisible par machine. L'identité provient de la **Taxonomie SSM**, actuellement **SSMxT_2022v1.0**.

SSMxT n'est pas une invention de la SSM partie de zéro. Elle prend l'**IFRS Accounting Taxonomy 2022** comme base — 6,458 éléments IFRS — et ajoute par-dessus des concepts juridictionnels malaisiens, pour les informations de la Companies Act que les IFRS n'ont aucune raison de contenir. La taxonomie des états financiers de la Companies Act 2016 atteint **6,197 concepts sous MFRS** et **2,375 sous MPERS**.

Le volet non financier est plus réduit et plus prescriptif que la plupart des préparateurs ne s'y attendent :

| Information | Concepts (CA 2016) |
| --- | --- |
| Rapport des administrateurs | 24 |
| Déclaration des administrateurs | 29 |
| Revue d'activité des administrateurs | 11 |
| Rapport des auditeurs aux associés | 22 |
| Participation à la bourse | 11 |

Ces chiffres importent. Le rapport des administrateurs n'est pas déposé sous forme de PDF scanné. Il est balisé, champ par champ, par rapport à 24 concepts définis — c'est pourquoi un rapport des administrateurs rédigé en prose libre et jamais mappé aux intitulés de la Cinquième annexe devient un problème de balisage avant d'être un problème de rédaction.

## Les deux outils, et le fichier qui passe de l'un à l'autre

**mTool** est l'outil de préparation. C'est un complément de Microsoft Excel, pour Windows uniquement — il ne fonctionne pas sous macOS, et il ne fonctionne pas sous Open Office. La version actuelle est **mTool 2.2**, et la SSM publie une note distincte exposant les différences par rapport à mTool 2.1. Il embarque un navigateur SSMxT intégré, fonctionne hors ligne, exécute les règles de validation et produit le fichier XBRL sous forme de zip.

**mPortal** est la plateforme de soumission. Vous vous connectez, téléversez le zip, l'acheminez pour approbation, payez et recevez l'accusé de réception.

Un piège ici qui coûte des après-midi entiers : **un zip généré dans mTool 1.0 ne peut pas être téléversé dans mPortal 2.0.** Les propres orientations de la SSM vous permettent d'ouvrir un zip de mTool 1.0 dans l'outil actuel et de le régénérer, mais l'ancien artefact lui-même est mort. Si vous redéposez quelque chose préparé en 2023, attendez-vous à reconstruire.

Le piège connexe est le numéro de l'entreprise. **Le nouveau format du numéro d'enregistrement de l'entreprise est obligatoire dans MBRS 2.0.** L'ancien format ne sert qu'à préremplir les données de la déclaration annuelle.

## Choisir le point d'entrée

Un point d'entrée est le schéma de taxonomie pour un type spécifique de soumission. MBRS 2.0 en compte 31. Se tromper n'est pas une erreur de format — c'est un schéma différent, des éléments obligatoires différents et une reconstruction.

**Déclarations annuelles**

| Point d'entrée | Usage |
| --- | --- |
| AR1 | Société avec capital social, section 68 |
| AR2 | Société sans capital social, section 68 |
| AR3 | Société étrangère, section 576 |
| AR4 | Données inchangées, section 68(6) |
| AR1965 | Déclaration annuelle en vertu de la Companies Act 1965 |

**États financiers et rapports**

FS-MFRS et FS-MPERS se répartissent selon la norme comptable appliquée. FS-CLBG concerne les sociétés limitées par garantie, FS-EPC les sociétés privées exemptées, FS-FC les sociétés étrangères, et FS-BNM les sociétés réglementées par Bank Negara Malaysia. Chacune a une contrepartie au titre de la Companies Act 1965.

**Indicateurs financiers clés**

KFI-MFRS, KFI-MPERS, KFI-CLBG et KFI-FC existent pour les entreprises qui ne déposent pas un jeu complet en XBRL. Vous ne pouvez pas simplement opter pour cela. Une entreprise doit d'abord obtenir une approbation sous **EA2 — demande d'exemption de déposer des états financiers et rapports au format XBRL complet**, faite en vertu de la section 604(2) de la Companies Act 2016. Le même schéma s'applique à FS-FC, qui n'est disponible qu'après une dispense EA3 en vertu de la section 575(7).

**Les demandes d'exemption** forment leur propre famille, et il vaut la peine de connaître les ancrages statutaires car ils constituent ce au titre de quoi la demande est réellement faite :

| Point d'entrée | Demande | Section |
| --- | --- | --- |
| EA1 | Fin d'exercice d'une filiale étrangère ne coïncidant pas avec celle de la société mère | section 247(3) |
| EA2 | Exemption de dépôt au format XBRL complet | section 604(2) |
| EA3 | Dispense de dépôt d'états financiers par une société étrangère | section 575(7) |
| EA4A | Allègement quant à la forme et au contenu du rapport des administrateurs | section 255(1) |
| EA4B | Allègement quant à la forme et au contenu des états financiers | section 255(1) |
| EA5A | Prorogation de délai pour la circulation des états financiers | section 259(2) |
| EA5B | Prorogation de délai pour déposer les états financiers | section 259(2) |
| EA6 | Prorogation de délai pour tenir l'assemblée générale annuelle (AGM) | section 340(4) |
| EA7 | Prorogation de délai pour déposer la déclaration annuelle | section 609(2) |
| EA8 | Demande au Ministre | section 247(8) |

Notez que EA5A et EA5B sont des **demandes distinctes**. La circulation et le dépôt sont des horloges statutaires distinctes en vertu des sections 258 et 259, et une prorogation de l'une ne proroge pas l'autre. Cette distinction est invisible dans la plupart des orientations et elle est intégrée au système de dépôt.

## Le mapping : la partie que personne n'enseigne

La propre définition de la SSM est trompeusement simple — les préparateurs « font le mapping en faisant correspondre l'information au sein des états financiers à un concept pertinent au sein de la Taxonomie ». En pratique, le mapping est là où réside le jugement, et là où se créent les problèmes de la deuxième année.

**Vous ne pouvez pas étendre la taxonomie.** Le document d'architecture est sans ambiguïté : les extensions de l'entreprise à SSMxT_2022v1.0 ne sont pas autorisées, et les entités ne doivent pas étendre la taxonomie lors de la création d'un document d'instance. Lorsque vous avez besoin d'un détail que la taxonomie ne modélise pas — une ventilation par segments, une classe inhabituelle d'autres produits — l'instruction est de le fournir par **balisage en bloc de texte** dans un concept de bloc de texte approprié.

C'est l'inverse de la façon dont XBRL fonctionne dans la plupart des régimes de sociétés cotées, où les éléments d'extension sont courants. Les préparateurs venus de ce monde cherchent une balise personnalisée, ne peuvent pas en créer une, et concluent que l'outil est défectueux.

**Le périmètre du jeu complet est fixe.** Pour un dépôt en XBRL complet, les états minimaux sont l'état de la situation financière, l'état du résultat net, le tableau des flux de trésorerie, l'état des variations des capitaux propres et les notes. La taxonomie comporte des présentations alternatives pour trois d'entre eux et vous devez en choisir une et vous y tenir :

- État de la situation financière — courant/non courant, **ou** par ordre de liquidité
- État du résultat net — par fonction des charges, **ou** par nature des charges
- Tableau des flux de trésorerie — direct, **ou** indirect

Changer d'une année à l'autre est légal mais visible, et produira des comparatifs qui ne concordent pas dans les données même si les comptes se lisent normalement.

**La monnaie et l'arrondi ne sont pas stylistiques.** Les montants monétaires doivent être exprimés en ringgit malaisien, avec l'unité de mesure `iso4217:MYR`. Ce n'est pas qu'une règle de la taxonomie — la section 259(1)(c) de la Companies Act 2016 exige que tous les montants des états financiers et rapports déposés soient libellés en monnaie malaisienne, et exige une traduction certifiée lorsque les documents ne sont pas en malais (Bahasa Malaysia) ou en anglais.

L'arrondi est géré par l'attribut `decimals`, et non en arrondissant le chiffre. L'exemple résolu de la SSM : des actifs présentés comme 53,928 dans un jeu de comptes exprimé en milliers sont balisés comme **53928000 avec decimals fixé à -3**. Les préparateurs qui saisissent 53928 ont sous-estimé les actifs de trois ordres de grandeur, et aucune règle de validation ne le détectera, car 53,928 est un nombre parfaitement valide.

## Validation : cinq familles de règles, pas un correcteur orthographique

La validation de mTool est pilotée par le linkbase de formules de la taxonomie. La SSM modélise les règles comme des assertions où « vrai » signifie qu'elle est passée. Comprendre les familles vous indique quel type d'erreur vous recherchez.

**Éléments obligatoires.** Certains concepts doivent être présents. Une assertion distincte existe pour chacun, précisément pour que le message d'échec nomme l'élément manquant. Exemple tiré de la documentation de la SSM : « Assets » (actifs) doit être renseigné.

**Éléments obligatoires dérivés.** Requis seulement dans certaines circonstances, modélisés avec une condition préalable. Exemple de la SSM : lorsque le déclarant sélectionne le statut de l'entreprise comme « Public company », alors l'information sur le statut d'audit des états financiers doit être « Audited ». Trompez-vous sur l'information de dépôt en haut du modèle et vous déclencherez des exigences en aval que vous n'attendiez pas.

**Agrégation des dimensions.** Les membres d'un axe doivent sommer à la valeur du parent. Le total des capitaux propres est égal aux intérêts non contrôlants plus les autres composantes des capitaux propres plus les capitaux propres attribuables aux propriétaires de la société mère. C'est là qu'un jeu de comptes assemblé sur plusieurs feuilles de calcul et jamais recoupé est enfin pris en défaut.

**Valeurs positives et négatives.** La position de la SSM est plus nuancée que « les charges sont négatives ». **Aucun élément ne doit toujours être stocké en négatif** — les postes à pondération négative comme les charges sont stockés comme des nombres positifs dans la plupart des cas. Le linkbase de formules impose au contraire une liste d'éléments qui doivent toujours être **positifs**.

**Données inter-états et corrélées.** Les valeurs qui apparaissent dans plus d'un état doivent concorder, et les valeurs logiquement liées sont vérifiées les unes par rapport aux autres.

Ajoutez à cela les validations structurelles — bonne formation XBRL, validation dimensionnelle, énumération extensible, validation des tableaux et des formules — qui vérifient l'instance par rapport à SSMxT_2022v1.0 elle-même.

## Maker, lodger et l'étape d'approbation

mPortal est fondé sur des rôles, et les rôles ne sont pas interchangeables.

Le **maker** prépare le document d'instance et le téléverse. Le maker n'a pas besoin de signature numérique.

Le **lodger** approuve et soumet. Un lodger doit détenir un certificat d'exercice en vertu de la section 241 de la Companies Act 2016, enregistré via e-Secretary, et un certificat numérique valide. L'approbation se fait via Administrator → Approval Management → Filing Approval, où le tableau de bord affiche les dépôts téléversés par les makers et en attente d'approbation du lodger.

L'association entre maker et lodger est administrée dans mPortal, et elle peut être mise à l'état inactif. Un échec courant et totalement opaque est un maker qui téléverse des fichiers qui n'apparaissent jamais dans la file d'attente du lodger parce que l'association a été désactivée et non rétablie. Un seul maker peut être associé à plusieurs lodgers.

Un administrateur n'est pas un rôle dans ce système. C'est le même point structurel qui régit les demandes de prorogation de délai, que la SSM exige de voir émaner du secrétaire de la société. Si le certificat d'exercice de votre secrétaire a expiré, vous n'avez pas de canal de dépôt — et vous le découvrirez le jour où vous tenterez de l'utiliser.

## La boucle de rejet

Trois choses différentes sont appelées « rejet » et elles se comportent différemment.

**Échec de validation de mTool.** Le fichier ne se générera pas. Vous êtes toujours hors ligne, rien n'a été soumis, et aucune horloge n'a été affectée. C'est le bon dénouement.

**Observation de mPortal.** Le dépôt est accepté pour examen puis renvoyé avec des observations. Le maker voit le statut de l'observation sur le tableau de bord, corrige et resoumet. Le délai statutaire reste intact malgré tout cela — la circulation de la section 258 et le dépôt de la section 259 courent selon leurs propres dates, et les sanctions de la Directive de pratique 1/2017 courent à compter de la date d'échéance d'origine, et non de la date à laquelle votre fichier est finalement passé.

**Rectification postérieure au dépôt.** Une fois qu'un dépôt figure au registre, vous ne le resoumettez pas — vous le rectifiez en vertu de la section 602 de la Companies Act 2016. mPortal 2.0 comporte trois variantes :

- **Rectification standard** — corriger des données dans une AR ou des FS déjà soumises, que ce soit via MBRS ou au guichet
- **Rectification de l'information de dépôt** — corriger l'en-tête même du dépôt, par exemple une fin d'exercice déposée comme 30/12/23 au lieu de 31/12/23, ou une soumission déposée comme AR4 alors qu'elle aurait dû être AR1
- **Dépôt nul (nil filing)** — rectifier un enregistrement sans téléverser aucune AR ou FS de remplacement, utilisé pour les soumissions en double ou une ordonnance judiciaire sans remplacement

Il existe également une voie de **dépôt sur ordonnance judiciaire** pour les entreprises au statut dissous.

Sous MBRS 1.0, la rectification signifiait une demande au guichet avant de redéposer. MBRS 2.0 a fait passer tout le processus dans le portail. C'est une véritable amélioration, et c'est aussi la raison pour laquelle les points d'entrée de rectification existent dans mTool.

## Une séquence de travail

1. **Fixez les dates avant d'ouvrir l'outil.** Fin d'exercice, date de circulation, délai de dépôt. L'horloge de dépôt de la section 259(1)(a) démarre à la circulation, non à la fin d'exercice.
2. **Confirmez la version de mTool et la version de la taxonomie** sur la page MBRS de la SSM. La SSM les met à jour sans annonce distincte.
3. **Choisissez le point d'entrée délibérément** — type d'entreprise, Loi, norme comptable. Si vous avez besoin de KFI ou de FS-FC, l'approbation EA2 ou EA3 doit déjà exister.
4. **Recoupez les comptes avant de baliser.** Chaque incohérence interne qu'un PDF masquait autrefois est désormais un échec de validation bloquant.
5. **Mappez une fois et consignez le mapping.** Les jugements que vous portez cette année doivent être repris l'année prochaine, sinon vos comparatifs ne seront pas comparables dans les données même s'ils le sont dans les comptes.
6. **Balisez aussi les états non financiers** — rapport des administrateurs, déclaration des administrateurs, rapport des auditeurs. Ce sont des concepts, non des pièces jointes.
7. **Validez et corrigez dans mTool.** mPortal n'est pas un service de validation.
8. **Vérifiez le certificat d'exercice et le certificat numérique du lodger** avant la semaine du délai, non pendant.
9. **Téléversez, acheminez pour approbation du lodger, payez, conservez l'accusé de réception.** L'accusé de réception est la preuve de conformité, non le fichier zip.
10. **Si le fichier ne sera pas prêt, demandez une prorogation avant l'expiration de la période** — EA5A pour la circulation, EA5B pour le dépôt, EA7 pour la déclaration annuelle.

## Erreurs courantes

- **Saisir le chiffre arrondi au lieu d'utiliser l'attribut `decimals`.** 53,928 dans un jeu de comptes exprimé en milliers est 53928000 avec decimals -3. Saisir 53928 passe toutes les règles de validation et est faux d'un facteur mille.
- **Tenter de créer un élément personnalisé.** Les extensions de l'entreprise à SSMxT_2022v1.0 ne sont pas autorisées. Utilisez un bloc de texte.
- **Déposer des KFI sans l'approbation EA2**, ou FS-FC sans la dispense EA3. Les deux requièrent d'abord une exemption accordée.
- **Supposer qu'une prorogation couvre les deux horloges.** EA5A proroge la circulation, EA5B proroge le dépôt, et les sections 258 et 259 sont séquentielles.
- **Téléverser un zip de mTool 1.0 dans mPortal 2.0.** Ouvrez-le dans l'outil actuel et régénérez-le.
- **Utiliser l'ancien format du numéro d'enregistrement de l'entreprise.** Le nouveau format est obligatoire dans MBRS 2.0, sauf pour préremplir les données de la déclaration annuelle.
- **Une association maker–lodger désactivée**, de sorte que les dépôts téléversés n'atteignent jamais la file d'approbation du lodger et que personne ne le remarque avant le délai.
- **Traiter une observation comme une horloge arrêtée.** Elle ne l'est pas. Les sanctions courent à compter de la date statutaire.
- **Changer de base de présentation d'une année à l'autre** — ordre de liquidité une année, courant/non courant la suivante — et produire des comparatifs qui ne s'alignent pas dans les données.
- **Laisser le rapport des administrateurs non balisé en prose de brouillon.** Il se mappe à 24 concepts définis et aux intitulés de la Cinquième annexe ; le rédiger ainsi dès le départ élimine toute une catégorie de retravail.

## La suite

Avant votre prochaine fin d'exercice, faites une chose : consignez le mapping. Chaque compte de votre balance de vérification, le concept SSMxT auquel il a été balisé, et la raison lorsque le choix n'était pas évident. Ce document vaut plus que le fichier XBRL lui-même, car le fichier est jetable et le mapping est ce que vous reconstruisez à partir de zéro chaque année si vous ne le conservez pas.

Lisez ensuite la page des [erreurs de balisage](/fr/accounting/mbrs-tagging-errors), qui reprend les familles d'échecs ci-dessus et détaille à quoi chacune ressemble réellement dans un jeu de comptes réel.
