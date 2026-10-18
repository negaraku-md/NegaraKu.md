---
topicId: MY-BIZ-0066
title: "La notification de violation de données en Malaisie : la règle des 72 heures"
seoTitle: "Notification de violation de données Malaisie : les 72 heures, expliquées"
slug: "data-breach-notification-malaysia"
category: "business"
subcategory: ["digital-compliance"]
summary: "La section 12B dit dès que possible ; les 72 heures que tout le monde cite figurent dans la directive. Voici quand le compte à rebours commence, ce que signifie préjudice important, et pourquoi le critère des 1,000 personnes concernées ne décide pas si vous devez prévenir les clients."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Depuis le 1er juin 2025, la s.12B de la Personal Data Protection Act 2010 impose à un contrôleur de données de notifier au Commissaire une violation de données personnelles dès que possible. La Data Breach Notification Guideline fixe cela à 72 heures au plus tard à compter de la survenance de la violation lorsque celle-ci cause ou est susceptible de causer un préjudice important. Les personnes concernées doivent être notifiées dans les 7 jours de cette notification. Ne pas notifier le Commissaire entraîne RM250,000 ou 2 ans."
keyTakeaways:
  - "La section 12B est entrée en vigueur le 1er juin 2025 ; le chiffre de 72 heures figure au paragraphe 6.1 de la directive, non dans la Loi"
  - "Le standard légal de la s.12B(1) est dès que possible — les 72 heures sont la limite maximale"
  - "La notification n'est exigée que lorsque la violation cause ou est susceptible de causer un préjudice important"
  - "Une échelle importante signifie plus de 1,000 personnes concernées — l'un des cinq cas de préjudice important"
  - "Paragraphe 8.2 : le cas des 1,000 personnes NE s'applique PAS à la notification de la personne concernée"
  - "Les personnes concernées doivent être prévenues dans les 7 jours de la notification au Commissaire"
  - "Manquer les 72 heures n'éteint pas l'obligation — le paragraphe 7.7 exige une explication écrite avec preuves"
appliesTo: "Tout contrôleur de données au titre de la Loi 709, qu'il appartienne ou non à une catégorie enregistrable ou qu'il ait besoin ou non d'un délégué à la protection des données."

faq:
  - q: "Quand exactement le compte à rebours des 72 heures commence-t-il ?"
    a: "À compter de la survenance de la violation, mais le paragraphe 6.2 précise que vous menez d'abord une enquête préliminaire pour déterminer si une violation s'est effectivement produite. Les exemples fixent les points de départ pratiques : pour une clé USB non chiffrée perdue, lorsque vous êtes informé de la perte ; pour une divulgation mal adressée, lorsque vous prenez conscience de l'erreur ; pour une compromission de réseau suspectée, lorsque votre inspection confirme que le système a été compromis ; pour un rançongiciel, lorsque vous prenez conscience d'avoir perdu l'accès ou que vous confirmez la violation après en avoir été averti par l'attaquant ; et lorsqu'un sous-traitant de données intervient, lorsque le sous-traitant vous le notifie ou que vous obtenez vous-même des preuves claires, selon ce qui survient en premier."
  - q: "Dois-je notifier toute violation ?"
    a: "Non. Le paragraphe 5.1 est explicite : toutes les violations de données personnelles ne sont pas notifiables. Le critère est de savoir si la violation cause ou est susceptible de causer un préjudice important. L'exemple même de violation non notifiable donné par la directive est le vol d'un ordinateur portable chiffré contenant les adresses électroniques de 200 salariés — peu susceptible d'entraîner un préjudice important."
  - q: "Qu'est-ce qui compte comme préjudice important ?"
    a: "Le paragraphe 5.2 énumère cinq cas. Des données compromises qui peuvent entraîner un préjudice physique, une perte financière, un effet négatif sur les dossiers de crédit ou un dommage ou une perte de biens ; qui peuvent être détournées à des fins illégales ; qui consistent en données personnelles sensibles ; qui, combinées à d'autres informations, pourraient permettre la fraude d'identité ; ou qui sont d'une échelle importante. Le paragraphe 5.3 définit l'échelle importante comme plus de 1,000 personnes concernées."
  - q: "Si plus de 1,000 personnes sont concernées, dois-je toutes les prévenir ?"
    a: "Pas automatiquement, et c'est le point que la plupart des résumés se trompent. Le paragraphe 8.2 applique la définition du préjudice important du paragraphe 5.2 à la notification de la personne concernée, mais dispose expressément que le critère de l'échelle importante du paragraphe 5.3 ne s'applique pas pour déterminer si la notification des personnes concernées est exigée. Une violation notifiable au Commissaire purement par le volume n'est pas, pour ce seul motif, notifiable aux individus."
  - q: "Que se passe-t-il si je ne peux pas réunir toute l'information dans les 72 heures ?"
    a: "Notifiez tout de même. Le paragraphe 7.5 permet que l'information exigée par le paragraphe 7.4 soit fournie par phases, dès que possible et au plus tard 30 jours à compter de la date de la notification initiale. Ce que vous ne pouvez pas faire, c'est retarder la notification elle-même pendant que vous enquêtez."
  - q: "Que se passe-t-il si je manque les 72 heures ?"
    a: "Le paragraphe 7.7 exige une notification écrite au Commissaire exposant les raisons du retard avec des preuves à l'appui — la chronologie de l'incident, les communications internes et tout facteur technique ou externe — soumise avec la notification. L'obligation ne s'éteint pas ; elle devient une notification tardive avec une explication jointe."

verificationNeeded:
  - "La question de savoir si JPDP a publié un résultat d'application ou une composition au titre de la s.12B(3) depuis le 1er juin 2025"
  - "La question de savoir si le formulaire de notification en ligne sur pdp.gov.my impose un champ obligatoire au-delà de ceux énumérés au paragraphe 7.4 de la directive"

obligations:
  - what: "Notify the Commissioner of a personal data breach causing or likely to cause significant harm"
    trigger: "change"
    withinDays: 3
    due: "as soon as practicable and no later than 72 hours from the occurrence of the breach"
    authority: "JPDP"
    statute: "Personal Data Protection Act 2010, s.12B(1)"
    consequence: "Fine up to RM250,000 or imprisonment up to 2 years or both"
  - what: "Notify affected data subjects where the breach results or is likely to result in significant harm"
    trigger: "change"
    withinDays: 7
    due: "without unnecessary delay and not later than 7 days after the notification to the Commissioner"
    authority: "JPDP"
    statute: "Personal Data Protection Act 2010, s.12B(2)"
    consequence: "Non-compliance with a duty under Act 709"
  - what: "Complete phased submission of outstanding breach details"
    trigger: "change"
    withinDays: 30
    due: "no later than 30 days from the date of the initial notification"
    authority: "JPDP"
    statute: "Data Breach Notification Guideline, paragraph 7.5"
    consequence: "Incomplete notification"

lang: "fr"
sourceContentHash: "69d11280d19d99c8"
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
  - title: "Directive de protection des données personnelles — Notification de violation de données, Version 1.0 (Personal Data Protection Guideline — Data Breach Notification, Version 1.0)"
    url: "https://www.pdp.gov.my/ppdpv1/wp-content/uploads/2025/08/GP_DBN_ENG.pdf"
    publisher: "Commissaire à la protection des données personnelles de Malaisie (JPDP)"
    date: "2025-02-25"
  - title: "Loi sur la protection des données personnelles (modificative) de 2024 [Loi A1727] (Personal Data Protection (Amendment) Act 2024 [Act A1727])"
    url: "https://lom.agc.gov.my/ilims/upload/portal/akta/outputaktap/2430673_BI/Act%20A1727.pdf"
    publisher: "Chambre du Procureur général (AGC)"
    date: "2024-10-17"
  - title: "Loi sur la protection des données personnelles (modificative) de 2024 — Fixation de la date d'entrée en vigueur [P.U. (B) 522/2024] (Personal Data Protection (Amendment) Act 2024 — Appointment of Date of Coming into Operation [P.U. (B) 522/2024])"
    url: "https://lom.agc.gov.my/ilims/upload/portal/akta/outputp/2587515/PUB%20522_2024.pdf"
    publisher: "Chambre du Procureur général (AGC)"
    date: "2024-12-24"
  - title: "Directives et circulaires sur la notification de violation de données (DBN) (Guidelines and Circulars on Data Breach Notification (DBN))"
    url: "https://www.pdp.gov.my/ppdpv1/en/guidelines-and-circulars-on-data-breach-notification-dbn/"
    publisher: "Commissaire à la protection des données personnelles de Malaisie (JPDP)"
    date: "2025-02-25"

entity: "Data breach notification"
relations:
  - { rel: "requires", to: "pdpa-compliance-malaysia" }
  - { rel: "administered-by", to: "jpdp" }
  - { rel: "governs", to: "personal-data-protection-act-2010" }
related: ["pdpa-compliance-malaysia", "data-protection-officer-malaysia"]
keywords: ["data breach notification malaysia", "72 hours pdpa", "section 12b pdpa", "significant harm pdpa", "report data breach malaysia"]
---

Les 72 heures ne figurent pas dans la Loi.

La section 12B(1) de la Personal Data Protection Act 2010 dispose qu'un contrôleur de données ayant des raisons de croire qu'une violation de données personnelles s'est produite notifiera au Commissaire **dès que possible**, selon les modalités et la forme que le Commissaire détermine. Voilà l'intégralité du délai légal. Les 72 heures proviennent du paragraphe 6.1 de la *Directive de protection des données personnelles : notification de violation de données*, Version 1.0, publiée le 25 février 2025 au titre de la s.48(g).

Savoir où vit le chiffre importe. Cela vous dit que le standard légal au regard duquel vous serez jugé est « dès que possible » — les 72 heures sont la limite maximale du Commissaire, non un permis de les utiliser toutes.

## Quelles violations faut-il signaler ?

La section 12B est entrée en vigueur le **1er juin 2025**, insérée par la s.6 de la Loi A1727 et fixée par la P.U.(B) 522/2024. Elle lie tout contrôleur de données, indépendamment du fait qu'il appartienne à une catégorie enregistrable ou qu'il ait besoin d'un délégué à la protection des données.

Le paragraphe 5.1 est net : toute violation n'est pas notifiable. La porte est le **préjudice important**, et le paragraphe 5.2 le définit comme un risque que les données compromises :

1. puissent entraîner un préjudice physique, une perte financière, un effet négatif sur les dossiers de crédit, ou un dommage ou une perte de biens ;
2. puissent être détournées à des fins illégales ;
3. consistent en **données personnelles sensibles** ;
4. consistent en données personnelles qui, combinées à d'autres informations, pourraient permettre la **fraude d'identité** ; ou
5. soient d'une **échelle importante** — que le paragraphe 5.3 fixe à **plus de 1,000 personnes concernées**.

Les exemples travaillés de la directive font ici un travail utile. L'accès non autorisé aux dossiers médicaux de patients est notifiable **indépendamment des chiffres**, parce que les données médicales sont des données personnelles sensibles. Un relevé de compte envoyé par courriel au mauvais destinataire est notifiable, parce qu'il implique des informations financières. Le vol d'un ordinateur portable **chiffré** contenant les adresses électroniques de 200 salariés n'est **pas** notifiable — le chiffrement plus des données de faible sensibilité signifie qu'il n'y a pas de préjudice important.

## Quand le compte à rebours commence-t-il ?

Le paragraphe 6.1 fixe le délai à 72 heures au plus tard **à compter de la survenance de la violation de données personnelles**. Le paragraphe 6.2 apporte ensuite la règle pratique : en prenant connaissance d'un incident de sécurité, vous menez une enquête préliminaire pour établir si une violation s'est effectivement produite.

Les exemples fixent le point de départ par scénario :

| Scénario | Le compte à rebours commence |
| --- | --- |
| Clé USB perdue avec données personnelles non chiffrées | Dès que vous êtes informé de la perte |
| Données personnelles envoyées sans autorisation | Dès que vous prenez conscience de l'erreur |
| Compromission de réseau suspectée | Lorsque l'inspection confirme que le système a été compromis |
| Rançongiciel | Lorsque vous prenez conscience d'avoir perdu l'accès, ou que vous confirmez la violation après que l'attaquant vous l'a dit |
| Violation chez votre sous-traitant de données | Lorsque le sous-traitant vous le notifie, ou que vous obtenez des preuves claires — **selon ce qui survient en premier** |

Cette dernière ligne est celle à inscrire dans vos contrats avec les prestataires. Vos 72 heures peuvent commencer à courir sur la connaissance de votre sous-traitant, non sur la vôtre.

## Comment notifie-t-on, et qu'y met-on ?

Le paragraphe 7.1 donne trois canaux : le formulaire sur pdp.gov.my, ou le formulaire de l'Annexe B envoyé par courriel à dbnpdp@pdp.gov.my, ou une copie papier au Commissaire.

Le paragraphe 7.3 ajoute un piège qui vaut la peine d'être signalé — **le Commissaire émet un avis de confirmation, et la notification n'est pas considérée comme soumise sans lui.** Envoyer le formulaire n'équivaut pas à avoir notifié.

Au-delà des champs obligatoires, le paragraphe 7.4 exige la date et l'heure de la détection, le type de données et la nature de la violation, la méthode de détection et la cause suspectée, le nombre de personnes concernées et les enregistrements affectés estimés, le système impliqué, les conséquences possibles, la chronologie, les mesures correctives et d'atténuation prises ou prévues, les mesures pour les personnes concernées, et les coordonnées du DPO ou d'une autre personne de contact.

Si vous ne pouvez pas tout fournir à temps, le paragraphe 7.5 vous permet de soumettre par phases — mais au plus tard **30 jours** à compter de la notification initiale. Lorsqu'une violation touche plus d'un contrôleur de données, le paragraphe 7.6 exige que chacun soumette séparément.

Si vous manquez les 72 heures, le paragraphe 7.7 exige une notification écrite des raisons avec des preuves à l'appui : la chronologie de l'incident, les communications internes, les facteurs techniques ou externes, le tout soumis avec la notification.

## Quand devez-vous prévenir les clients ?

La section 12B(2) exige la notification de la personne concernée lorsque la violation lui cause ou est susceptible de lui causer un préjudice important, sans retard injustifié. Le paragraphe 9.1 fixe cela à **7 jours au plus tard** après la notification initiale au Commissaire.

Puis vient la disposition que presque tous les résumés omettent.

**Paragraphe 8.2 : le critère de l'échelle importante du paragraphe 5.3 ne s'applique pas pour déterminer si la notification des personnes concernées est exigée.**

Ainsi, le cas des 1,000 personnes est une porte à sens unique. Il peut rendre une violation notifiable au Commissaire, mais il ne peut jamais, à lui seul, rendre la violation notifiable aux individus. Une fuite de 50,000 enregistrements ne contenant que des données de faible sensibilité part à Putrajaya et s'arrête là. Évaluez la position des individus au regard des quatre autres cas.

Les illustrations de la directive confirment la direction. Vol de noms de clients, de numéros de compte et de mots de passe d'une institution financière : notifiez les personnes concernées, parce que la perte financière est probable et que la fraude d'identité est rendue possible. Un serveur compromis mais dont les données sont rendues inintelligibles par deux couches de sécurité : **ne** notifiez **pas** les personnes concernées, mais **notifiez** le Commissaire. Le serveur d'un vendeur direct saisi par un opérateur de rançongiciel sans sauvegardes : notifiez les personnes concernées.

Le paragraphe 10.1 exige que la notification soit **directe et individuelle**, dans un langage intelligible, afin que la personne concernée puisse prendre des mesures de protection.

## Erreurs fréquentes

**Tout signaler.** Le paragraphe 5.1 ne veut pas cela. Une violation sans voie réaliste vers un préjudice important n'est pas notifiable, et la surnotification réflexe enterre les incidents qui comptent.

**Traiter les 72 heures comme le standard.** La loi dit dès que possible. Si vous le saviez le premier jour et avez soumis le troisième jour sans raison pour le retard, la limite maximale de la directive n'est pas une défense face à la s.12B(1).

**Présumer que le volume force la notification des clients.** Le paragraphe 8.2 dit le contraire. Évaluez les quatre cas qualitatifs séparément pour les individus.

**Attendre d'achever l'enquête.** Notifiez, puis utilisez la voie de soumission par phases de 30 jours du paragraphe 7.5.

**Présumer que le compte à rebours du sous-traitant est le vôtre.** Il commence au premier des deux événements : le sous-traitant vous le dit, ou vous l'apprenez. Si votre contrat avec le prestataire donne au sous-traitant 72 heures pour vous avertir, vous avez déjà perdu votre propre fenêtre.

**Soumettre et oublier.** L'absence d'avis de confirmation du Commissaire signifie l'absence de notification, au titre du paragraphe 7.3.

## Et ensuite

Rédigez le manuel d'intervention avant d'en avoir besoin : qui dirige l'enquête préliminaire, qui valide l'évaluation du préjudice important au regard des cinq cas, qui soumet, et qui rédige les notifications individuelles. Modifiez vos accords de traitement de données pour que les sous-traitants doivent vous notifier en heures, non en jours.

Puis lisez la s.12A à côté. Lorsqu'un DPO est obligatoire, le paragraphe 7.8 fait de ce responsable le principal point de contact du Commissaire pour la violation ; lorsqu'il ne l'est pas, vous devez tout de même désigner un représentant d'un niveau hiérarchique et d'une expérience suffisants.
