# Thai (`th`) terminology & register decisions

_Recorded BEFORE mass translation so the whole `th` corpus is consistent (the ta/ja/ko pattern). Agents translating `.th.md` MUST read this first. Mirrors [[negaraku-ja-terminology-decisions]] / the Korean terminology doc._

## Register & voice
- **Formal written Thai** (ภาษาเขียนทางการ) — the neutral, professional register used in government/legal/reference material. Not colloquial, not royal (ราชาศัพท์) unless quoting a royal context. Consistent, encyclopaedic tone like the English/Malay masters.
- Polite but not conversational — this is a knowledge base, not a chat. Avoid ครับ/ค่ะ sentence particles.
- Faithful translation, not authoring: never correct, update, shorten or expand the source; if a figure or sentence looks wrong, translate it faithfully.

## Script, numerals, dates
- **Thai script** (อักษรไทย). No inter-word spaces (Thai convention) — use spaces only where Thai normally does (between clauses/sentences, before/after Latin terms, numbers).
- **Arabic numerals** (0-9), NOT Thai digits (๐-๙). All the masters use Arabic numerals; keep them.
- **Dates stay Gregorian/CE** exactly as the source — do NOT convert to Buddhist Era (พ.ศ. = CE+543). Translate only month/label words if written out (e.g. "January 2026" → "มกราคม 2026", NOT พ.ศ. 2569).

## Proper nouns, agencies, statutes
- **Proper nouns** = Thai transliteration + the original in parentheses on FIRST mention, then Thai alone. E.g. กัวลาลัมเปอร์ (Kuala Lumpur), ปีนัง (Penang), ยะโฮร์ (Johor), ซาบาห์ (Sabah), ซาราวัก (Sarawak), ปุตราจายา (Putrajaya).
- **Agencies** = Thai descriptive name + the original English/Malay name or acronym in parens on first mention. E.g. กรมสรรพากรมาเลเซีย (Inland Revenue Board, LHDN), คณะกรรมการบริษัทมาเลเซีย (SSM), ธนาคารกลางมาเลเซีย (Bank Negara Malaysia, BNM). Keep the acronym (LHDN/SSM/BNM/EPF/SOCSO) for later references.
- **Statutes** = Thai descriptor + the canonical English short title (and Act number) in parens, kept verbatim. E.g. พระราชบัญญัติบริษัท (Companies Act 2016), พระราชบัญญัติภาษีเงินได้ (Income Tax Act 1967). Section numbers (s.140A, para 39) stay verbatim.
- **Keep verbatim, never translate:** NegaraKu.md, 1company, all URLs, email addresses, codes/form numbers (CP204, SST-02), P.U.(A) gazette numbers, RM amounts (numerals), QIDs/wikidata, statute section numbers, ISO/technical identifiers.

## Currency & numbers (DECISION — differs from ko's 억/조)
- Thai groups by **ล้าน (million)**, Western-style thousands otherwise — NOT the CJK myriad (억/조). Keep the `RM` prefix + the numeral; render scale WORDS in Thai:
  - million → **ล้าน** (e.g. RM6.37 billion → RM6.37 พันล้าน; RM240 million → RM240 ล้าน)
  - billion → **พันล้าน** (thousand-million)
  - trillion → **ล้านล้าน**
- Leave comma-digit numerals as-is (RM2,500,000). Leave English source-citation titles + SEO keywords in English. A deterministic script does this (NOT agents — agents scaling-slip); run it during translation.

## Body structure
- Preserve markdown structure EXACTLY: same headings, tables, list items, FAQ count, links.
- Rewrite internal-link prefixes `/en/`→`/th/`, `/ms/`→`/th/`; leave bare links (`/business/…`) and anchors unchanged.
- The "What's next" heading → a consistent Thai rendering (decide one, e.g. "อ่านต่อ" or "หัวข้อที่เกี่ยวข้อง"); apply corpus-wide.

## Sensitive content (3R+1)
- race / religion / royalty / security / constitution / elections / legal-proceedings / health articles: neutral, factual, respectful tone; translate faithfully without editorialising. These need a named human reviewer at publish (`ashton-tan`), same as ta/ja/ko.
- Royalty especially: factual constitutional-monarchy framing; do NOT use or omit ราชาศัพท์ in ways that editorialise — mirror the source's neutral tone.

## Glossary — core domain terms (extend as the corpus reveals more)
| English | Thai |
|---|---|
| tax | ภาษี |
| income tax | ภาษีเงินได้ |
| sales & service tax (SST) | ภาษีขายและบริการ (SST) |
| company (Sdn Bhd) | บริษัท (Sdn Bhd) |
| government | รัฐบาล |
| law / act | กฎหมาย / พระราชบัญญัติ |
| court | ศาล |
| licence / permit | ใบอนุญาต |
| employee / employer | ลูกจ้าง / นายจ้าง |
| citizen / permanent resident | พลเมือง / ผู้มีถิ่นที่อยู่ถาวร |
| Bumiputera | ภูมิบุตร (Bumiputera) |

_Seed `docs/plans/GLOSSARY-TH.md` from this if the API translator is ever used; for the multi-agent path, agents apply this table directly._
