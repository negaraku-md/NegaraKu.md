# Indonesian (`id`) terminology & register decisions

_Recorded BEFORE mass work so the whole `id` corpus + chrome is consistent. Agents MUST
read this first. Indonesian is ADAPTED from the Malay (`ms`) version, not translated from
English — start from the ms value and convert the register._

## The core rule: two layers, opposite treatment
1. **General vocabulary → convert ms → Indonesian.** This is where ms and id diverge most
   (admin / tax / law / government). Do NOT leave the Malay word.
2. **Malaysian proper nouns / institutions / statutes / units → KEEP Malaysian.** The content
   is about Malaysia. Give an Indonesian descriptor + keep the Malaysian name/acronym; never
   swap to an Indonesian equivalent (no Ditjen Pajak, no "PT" for Sdn Bhd).

## Register conversion table (ms → id) — extend as the corpus reveals more
| ms | id | note |
|---|---|---|
| cukai | pajak | tax |
| kerajaan | pemerintah | government (the executive) |
| syarikat | perusahaan | company (generic); but **Sdn Bhd stays Sdn Bhd** |
| pejabat | kantor | office (building) |
| jabatan (department) | departemen / dinas | a govt dept |
| wang | uang | money |
| borang | formulir | form |
| percuma | gratis | free of charge |
| boleh | bisa / dapat | can/may |
| bilik | kamar | room |
| kereta | mobil | car |
| duit | uang | money (colloquial) |
| kemudahan | fasilitas | facility |
| pelbagai | berbagai | various |
| kos | biaya | cost |
| pengangkutan | transportasi | transport |
| cukai jualan | pajak penjualan | but **SST / Sales Tax Act stays** |
| majikan / pekerja | pemberi kerja / pekerja (or karyawan) | employer/employee |
| kadar | tarif / tingkat | rate |
| permohonan | permohonan / pengajuan | application |
| mesti | harus / wajib | must |
| akta | undang-undang | act/law (generic) — but a NAMED Malaysian Act keeps its English title |

## False friends — NEVER copy verbatim (meaning flips id vs ms)
- `budak` — ms "child" → id "slave" (use **anak**)
- `kereta` — ms "car" → id "train" (use **mobil**; ms train = keretapi → id **kereta api**)
- `percuma` — ms "free" → id "useless / in vain" (use **gratis**)
- `pejabat` — ms "office" → id "official/officer" (office building = **kantor**)
- `jabatan` — ms "department" → id "position/tenure" (dept = **departemen/dinas**)
- `pusing` — ms "to turn / rounds" → id "dizzy"
- `banci` — ms "census" → id has a slur sense; use **sensus**
- `butuh` — fine in id ("need") but vulgar in ms — safe here since target is id
- `bercinta`, `senang`, `bujur` — check in context

## Keep Malaysian, DO NOT Indonesianize
Malaysian statutes (Companies Act 2016, Income Tax Act 1967, Employment Act 1955…), agencies
(LHDN, SSM, EPF/KWSP, SOCSO/PERKESO, BNM, Bursa Malaysia, MITI, MIDA…), entity types (Sdn Bhd,
Berhad, LLP), currency (RM / ringgit), Bumiputera, place names (Kuala Lumpur, Sabah, Sarawak,
Putrajaya). On first mention give an Indonesian descriptor + the Malaysian name/acronym, e.g.
"Badan Pendapatan Dalam Negeri Malaysia (LHDN)", "Komisi Perusahaan Malaysia (SSM)".

## Currency, numbers, dates
- Scale words (deterministic script, not agents): juta (million), **miliar** (billion),
  **triliun** (trillion). Keep the RM prefix + numeral; leave comma-digit numerals as-is.
- Indonesian conventionally uses "." for thousands and "," for decimals — do NOT reformat the
  source numerals; only convert the scale word.
- Dates: translate month words to Indonesian (Januari, Februari, Maret, April, Mei, Juni,
  Juli, Agustus, September, Oktober, November, Desember); keep numeric forms.

## Register & voice
Formal written Indonesian (baku), encyclopaedic and neutral — the register of Kompas / a
government reference, not colloquial Jakartan. Faithful adaptation, never authoring.

## Sensitive (3R+1)
race / religion / royalty / security / constitution / elections / legal / health: neutral,
factual, respectful. Sensitive articles get a named human reviewer (`ashton-tan`) at publish.

See [[negaraku-language-launch-checklist]], docs/plans/indonesian-launch.md.
