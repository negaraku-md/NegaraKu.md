# Wikidata entity-linking sweep — results & human-review backlog

_Date: 2026-10-25. Sweep over the 661 untagged entity-candidate topics (of 1,104 total; 346 were already tagged)._

## Method

Deterministic live-Wikidata candidate fetch (`wbsearchentities` + `instance-of`) → 8 parallel adjudication agents (strict rubric: assign only a named proper-noun entity that IS the subject or its governing body; reject generic concepts, law sections, numbered standards, wrong-country namesakes) → independent QA re-fetch of every high match (label + description + country P17 + P31).

## Applied (auto): 36 topics × 13 variants = 468 files — HELD for push

These passed adjudication AND QA (correct Malaysian entity confirmed):

| topicId | QID | entity → item |
|---|---|---|
| MY-ACC-0031 | [Q113157032](https://www.wikidata.org/wiki/Q113157032) | Perkongsian Liabiliti Terhad → perkongsian liabiliti terhad |
| MY-ART-0002 | [Q63442113](https://www.wikidata.org/wiki/Q63442113) | Batik: The Craft That Draws With Wax Instead of Dye → batik |
| MY-ART-0045 | [Q129811409](https://www.wikidata.org/wiki/Q129811409) | Ukiran Kayu Melayu → Malay wood carving |
| MY-BIZ-0004 | [Q63439508](https://www.wikidata.org/wiki/Q63439508) | Sdn Bhd → sendirian berhad |
| MY-BIZ-0111 | [Q113548336](https://www.wikidata.org/wiki/Q113548336) | Company Limited by Guarantee → Company Limited by Guarantee |
| MY-ECO-0006 | [Q7113843](https://www.wikidata.org/wiki/Q7113843) | Overnight Policy Rate → Overnight Policy Rate |
| MY-ECO-0011 | [Q6082441](https://www.wikidata.org/wiki/Q6082441) | Islamic finance in Malaysia → Islamic finance in Malaysia |
| MY-ECO-0013 | [Q55744392](https://www.wikidata.org/wiki/Q55744392) | Malaysia Rubber Industry → rubber industry in Malaysia |
| MY-ECO-0014 | [Q24935390](https://www.wikidata.org/wiki/Q24935390) | Belanjawan Persekutuan Malaysia → Malaysian federal budget |
| MY-FIN-0016 | [Q28163620](https://www.wikidata.org/wiki/Q28163620) | Financial Services Act 2013 → Financial Services Act 2013 |
| MY-GLO-0008 | [Q1008803](https://www.wikidata.org/wiki/Q1008803) | Wilayah Persekutuan → federal territory of Malaysia |
| MY-GLO-0014 | [Q3174775](https://www.wikidata.org/wiki/Q3174775) | Teh Tarik → Teh Tarik |
| MY-GLO-0019 | [Q5096858](https://www.wikidata.org/wiki/Q5096858) | Menteri Besar → Menteri Besar |
| MY-GLO-0023 | [Q1004875](https://www.wikidata.org/wiki/Q1004875) | Bumiputera → Bumiputera |
| MY-GLO-0036 | [Q7603709](https://www.wikidata.org/wiki/Q7603709) | Dewan Undangan Negeri → state legislative assemblies of Malaysia |
| MY-GLO-0043 | [Q64816476](https://www.wikidata.org/wiki/Q64816476) | Sole Proprietorship → milikan tunggal |
| MY-GLO-0050 | [Q124058](https://www.wikidata.org/wiki/Q124058) | Zakat → zakāt |
| MY-GOV-0050 | [Q5589240](https://www.wikidata.org/wiki/Q5589240) | Government of Malaysia — federal, state and local tiers → Government of Malaysia |
| MY-GOV-0052 | [Q7603709](https://www.wikidata.org/wiki/Q7603709) | Dewan Undangan Negeri → state legislative assemblies of Malaysia |
| MY-GOV-0073 | [Q4800873](https://www.wikidata.org/wiki/Q4800873) | Perkara 153, Perlembagaan Persekutuan Malaysia → Article 153 of the Constitution of Malaysia |
| MY-GOV-0080 | [Q6742066](https://www.wikidata.org/wiki/Q6742066) | Kewarganegaraan Malaysia (Bahagian III, Perlembagaan Persekutuan) → Malaysian nationality law |
| MY-GOV-0100 | [Q6664408](https://www.wikidata.org/wiki/Q6664408) | Local government in Malaysia (Pihak Berkuasa Tempatan / PBT) → local government in Malaysia |
| MY-HIS-0002 | [Q2320075](https://www.wikidata.org/wiki/Q2320075) | Langkasuka: The Kingdom Chinese Records Remember and Archaeology Can't Quite Place → Langkasuka |
| MY-HIS-0032 | [Q6486859](https://www.wikidata.org/wiki/Q6486859) | Languages of Malaysia → languages of Malaysia |
| MY-HIS-0063 | [Q4594166](https://www.wikidata.org/wiki/Q4594166) | 1998 in Malaysia (Asian Financial Crisis, capital controls and Reformasi) → 1998 in Malaysia |
| MY-HIS-0201 | [Q181383](https://www.wikidata.org/wiki/Q181383) | Mahathir Mohamad → Mahathir Mohamad |
| MY-HIS-0202 | [Q299574](https://www.wikidata.org/wiki/Q299574) | Anwar Ibrahim → Anwar Ibrahim |
| MY-HIS-0204 | [Q57675](https://www.wikidata.org/wiki/Q57675) | Najib Razak → Najib Razak |
| MY-HIS-0205 | [Q1060949](https://www.wikidata.org/wiki/Q1060949) | Muhyiddin Yassin → Muhyiddin Yassin |
| MY-HIS-0206 | [Q6084858](https://www.wikidata.org/wiki/Q6084858) | Ismail Sabri Yaakob → Ismail Sabri Yaakob |
| MY-LAW-0022 | [Q4800873](https://www.wikidata.org/wiki/Q4800873) | Article 153 of the Federal Constitution → Article 153 of the Constitution of Malaysia |
| MY-LAW-0120 | [Q5454877](https://www.wikidata.org/wiki/Q5454877) | Fisheries Act 1985 → Fisheries Act 1985 (Act 317) Malaysia |
| MY-LIV-0064 | [Q1005348](https://www.wikidata.org/wiki/Q1005348) | Transport in Malaysia → transport in Malaysia |
| MY-LIV-0112 | [Q55864306](https://www.wikidata.org/wiki/Q55864306) | Pusat PERMATA@Pintar Negara, Universiti Kebangsaan Malaysia → PERMATApintar National Gifted Center |
| MY-PS-0005 | [Q13646141](https://www.wikidata.org/wiki/Q13646141) | Jabatan Bomba dan Penyelamat Malaysia (JBPM) → Malaysian Fire and Rescue Department |
| MY-TAX-0127 | [Q26869451](https://www.wikidata.org/wiki/Q26869451) | Excise Act 1976 → Excise Act 1976 |

## QA-flagged — held back (1)

Assigned high by an agent but rejected by QA re-verification:

- **MY-ART-0001** Q12524367 (wayang kulit) — ⚠ country=Indonesia (not Malaysia). Agent reason: "exact match: the named cultural shadow-puppet form, instanceOf genre". _Needs a Malaysia-specific item or stays blank._

## Medium — your call (34)

Defensible but not certain: usually the governing/parent body rather than the subject, a parent Act for a section, a dual-subject article where only the lead entity was matched, or a generic concept for a glossary term. Apply any you want with the same tooling.

| topicId | proposed QID | entity | why medium |
|---|---|---|---|
| MY-AGR-0006 | [Q30633665](https://www.wikidata.org/wiki/Q30633665) (FELCRA Berhad) | FELCRA Berhad dan RISDA | article covers two agencies (FELCRA + RISDA); linking lead-named FELCRA only |
| MY-ART-0041 | [Q6214746](https://www.wikidata.org/wiki/Q6214746) (Joget) | Joget dan Zapin | exact Malaysian dance but article also centrally about Zapin (no Zapin candidate) |
| MY-ART-0044 | [Q12686816](https://www.wikidata.org/wiki/Q12686816) (Gasing pangkah) | Gasing | Malay spinning-top game, but labels a specific pangkah variant while article covers gasing broadly |
| MY-ART-0055 | [Q138846881](https://www.wikidata.org/wiki/Q138846881) (Anugerah Sastera Negara) | Anugerah Sastera Negara | exact label (Malaysian national literary award) but DB-artifact description, Malaysian context unconfirmed |
| MY-ART-0068 | [Q7684271](https://www.wikidata.org/wiki/Q7684271) (Taoism in Malaysia) | Chinese folk religion and Taoism in Malaysia | Malaysia-specific but covers only Taoism, not the whole folk-religion+Taoism subject |
| MY-BIZ-0046 | [Q30682903](https://www.wikidata.org/wiki/Q30682903) (data protection officer) | Data protection officer | exact concept match but a generic role, not a Malaysia-specific named entity |
| MY-BIZ-0065 | [Q123977368](https://www.wikidata.org/wiki/Q123977368) (Contracts Act 1950) | Contracts Act 1950 (Act 136) | exact unique Malaysian Act title, instanceOf legal act, but description blank (country unconfirmed) |
| MY-BIZ-0071 | [Q111133852](https://www.wikidata.org/wiki/Q111133852) (Nice Classification) | Nice classification and MyIPO trademark fees | named classification scheme matching part of subject, but article is also about MyIPO fees |
| MY-CS-0014 | [Q16994951](https://www.wikidata.org/wiki/Q16994951) (Chartered Governance Institute) | Malaysian Institute of Chartered Secretaries and Administrators | parent international body of MAICSA, not MAICSA itself |
| MY-EMP-0002 | [Q5290184](https://www.wikidata.org/wiki/Q5290184) (Domestic inquiry) | Domestic inquiry | exact term/description match but a generic labour procedure, not a proper-noun entity |
| MY-FDL-0013 | [Q12683680](https://www.wikidata.org/wiki/Q12683680) (Ramadan bazaar) | Bazar Ramadan dan Budaya Juadah Sepanjang Bulan Puasa | entity blank; named cultural form matches but broader than article's Malaysian scope |
| MY-FIN-0018 | [Q43335](https://www.wikidata.org/wiki/Q43335) (Bursa Malaysia) | Initial Public Offering (Bursa Malaysia) | governing exchange, not the IPO process itself (IPO concept is generic) |
| MY-GLO-0010 | [Q1076579](https://www.wikidata.org/wiki/Q1076579) (act of parliament) | Akta | glossary term for the generic concept 'Akta' = act of parliament |
| MY-GLO-0011 | [Q116505608](https://www.wikidata.org/wiki/Q116505608) (Government Gazette of Malaysia) | Warta Kerajaan | two MY gazette items exist (also Q98456834); chose the general Government Gazette of Malaysia |
| MY-GLO-0017 | [Q1588658](https://www.wikidata.org/wiki/Q1588658) (limited liability partnership) | Limited Liability Partnership | generic LLP concept for glossary term; no Malaysia-specific item |
| MY-GLO-0024 | [Q482752](https://www.wikidata.org/wiki/Q482752) (sharia) | Syariah (undang-undang Islam dalam sistem perundangan Malaysia) | broader Islamic-law concept, not the Malaysia-scoped syariah subject |
| MY-GLO-0025 | [Q352664](https://www.wikidata.org/wiki/Q352664) (adat) | Adat | exact term; generic customary-law concept, Malaysian context not confirmed in desc |
| MY-GLO-0027 | [Q7419651](https://www.wikidata.org/wiki/Q7419651) (open house) | Rumah terbuka | festive open-house custom plausibly the rumah terbuka form, but description thin/generic |
| MY-GLO-0031 | [Q41487](https://www.wikidata.org/wiki/Q41487) (court) | Mahkamah | glossary term for the generic concept 'Mahkamah' = court |
| MY-GOV-0053 | [Q6664408](https://www.wikidata.org/wiki/Q6664408) (local government in Malaysia) | Pihak Berkuasa Tempatan | Malaysian local-government aspect item matches PBT subject; exact-label alt had no metadata |
| MY-GOV-0078 | [Q2658454](https://www.wikidata.org/wiki/Q2658454) (Monarchies of Malaysia) | Raja-Raja Melayu | Monarchies of Malaysia approximates the Malay Rulers but is broader; odd instanceOf |
| MY-GOV-0082 | [Q61113253](https://www.wikidata.org/wiki/Q61113253) (Ministry of Economic Affairs (Malaysia)) | Kementerian Ekonomi | Malaysian economy ministry but older 'Economic Affairs' name, possible predecessor |
| MY-HIS-0053 | [Q2658454](https://www.wikidata.org/wiki/Q2658454) (Monarchies of Malaysia) | Raja-Raja Melayu | Malay Rulers institution; imperfect instanceOf, Conference of Rulers also plausible |
| MY-IND-0006 | [Q279453](https://www.wikidata.org/wiki/Q279453) (Malaysia Digital Economy Corporation) | Malaysia Digital | MDEC is the administering agency, not the 'Malaysia Digital' initiative itself |
| MY-IND-0018 | [Q55744392](https://www.wikidata.org/wiki/Q55744392) (rubber industry in Malaysia) | Malaysian Rubber Industry | label 'rubber industry in Malaysia' matches the entity; description empty |
| MY-LIV-0013 | [Q5374309](https://www.wikidata.org/wiki/Q5374309) (Employees Provident Fund) | Caruman KWSP dan PERKESO untuk pekerja | EPF is one of two co-equal subjects (EPF+SOCSO); picked lead-named entity |
| MY-LIV-0121 | [Q65219704](https://www.wikidata.org/wiki/Q65219704) (Agensi Kaunseling dan Pengurusan Kredit) | Agensi Kaunseling dan Pengurusan Kredit (AKPK) | exact proper-noun label (AKPK) but empty description/instanceOf, cannot confirm as the Malaysian body at high |
| MY-LIV-0124 | [Q5374309](https://www.wikidata.org/wiki/Q5374309) (Employees Provident Fund) | KWSP dan PERKESO untuk Pekerja Gig, Freelancer dan Bekerja Sendiri | EPF matches KWSP but article also centrally covers PERKESO; partial |
| MY-LIV-0900 | [Q7257808](https://www.wikidata.org/wiki/Q7257808) (public holidays in Malaysia) | Public holidays in Malaysia | exact topic but instanceOf is a Wikimedia list article, not a real-world entity |
| MY-STA-0021 | [Q7603690](https://www.wikidata.org/wiki/Q7603690) (state governments in Malaysia) | Malaysian state government | Malaysia-specific topic item matching subject, but an 'aspect' concept rather than a single named body |
| MY-STA-0022 | [Q6664408](https://www.wikidata.org/wiki/Q6664408) (local government in Malaysia) | Local government in Malaysia | exact topical aspect item for Malaysia; aspect-type not a named body |
| MY-TAX-0049 | [Q116265723](https://www.wikidata.org/wiki/Q116265723) (Country-by-Country Reporting) | Country-by-country reporting | named OECD CbCR initiative, but not the Malaysia-specific subject |
| MY-TAX-0114 | [Q19840902](https://www.wikidata.org/wiki/Q19840902) (tax incentives in Malaysia) | Malaysian tax incentives | exact Malaysian topical aspect item; empty description, aspect-type |
| MY-TEC-0010 | [Q113460578](https://www.wikidata.org/wiki/Q113460578) (MyDIGITAL Corporation) | MyDIGITAL (Blueprint Ekonomi Digital Malaysia) | implementing agency, not the blueprint itself |

## Not linked (301 topics)

No confident item — correct by design. Dominant buckets: generic concepts & how-tos, law sections/subsections, numbered accounting standards (MFRS/MPERS/IFRS), wrong-country same-name statutes, and acronym/homonym collisions with no Malaysian item.
