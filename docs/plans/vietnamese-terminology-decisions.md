# Vietnamese (`vi`) terminology & register decisions

_Recorded BEFORE mass translation so the whole `vi` corpus is consistent (the ta/ja/ko/th pattern). Agents translating `.vi.md` MUST read this first._

## Register & voice
- **Formal written Vietnamese** (văn viết trang trọng) — the neutral, professional register of government/legal/reference material. Encyclopaedic, consistent tone like the English/Malay masters. Not colloquial.
- Faithful translation, not authoring: never correct, update, shorten or expand the source; if a figure or sentence looks wrong, translate it faithfully.
- Pronoun/address: avoid personal pronouns where the source is impersonal; use neutral constructions (this is reference content, not a conversation).

## Script, numerals, dates
- **Vietnamese uses the Latin alphabet with diacritics** — write full, correct diacritics and tone marks (ế, ợ, ữ, đ, …). Never strip them.
- **Arabic numerals** (0-9). Keep the source's number formatting for RM amounts and statistics as-is — do NOT reformat to Vietnamese "." thousands / "," decimals (avoids introducing transcription errors); only translate the surrounding scale WORD.
- **Dates stay Gregorian** as in the source; translate month words if written out ("January 2026" → "tháng 1 năm 2026" or "01/2026" — keep the source's numeric form where numeric).

## Proper nouns, agencies, statutes (SIMPLER than Thai/Korean — no transliteration)
- **Latin proper nouns are kept VERBATIM** — Vietnamese is Latin, so Malaysian places/entities are NOT transliterated: "Kuala Lumpur", "Sabah", "Sarawak", "Penang", "Johor", "Putrajaya", "Petronas", "Bursa Malaysia" stay exactly as written.
- **Agencies** = Vietnamese descriptive name + the original English/Malay name or acronym in parentheses on FIRST mention, then the acronym. E.g. Cục Thuế Nội địa Malaysia (Inland Revenue Board, LHDN), Ủy ban Công ty Malaysia (SSM), Ngân hàng Trung ương Malaysia (Bank Negara Malaysia, BNM).
- **Statutes** = Vietnamese descriptor + the canonical English short title (and Act number) kept verbatim. E.g. Luật Công ty (Companies Act 2016), Luật Thuế thu nhập (Income Tax Act 1967). Section numbers (s.140A, para 39) stay verbatim.
- **Keep verbatim, never translate**: NegaraKu.md, 1company, all URLs, email addresses, codes/form numbers (CP204, SST-02), P.U.(A) gazette numbers, RM amounts (numerals), QIDs/wikidata, statute section numbers.

## Currency & numbers (DECISION — deterministic script, not agents)
- Keep the `RM` prefix + the numeral; render scale WORDS in Vietnamese:
  - million → **triệu** (e.g. RM240 million → RM240 triệu)
  - billion → **tỷ** (e.g. RM6.37 billion → RM6.37 tỷ)
  - trillion → **nghìn tỷ** (e.g. RM1.2 trillion → RM1.2 nghìn tỷ)
- Leave comma-digit numerals as-is (RM2,500,000). Leave English source-citation titles + SEO keywords in English. A deterministic script does the scale-word conversion (agents scaling-slip); run it during translation.

## Body structure
- Preserve markdown EXACTLY: same headings, tables, list items, FAQ count, links.
- Rewrite internal-link prefixes `/en/`→`/vi/`, `/ms/`→`/vi/`; leave bare links and anchors unchanged.
- "What's next" heading → a consistent Vietnamese rendering (decide one, e.g. "Đọc tiếp" or "Tiếp theo"); apply corpus-wide.

## Sensitive content (3R+1)
- race / religion / royalty / security / constitution / elections / legal-proceedings / health articles: neutral, factual, respectful; translate faithfully without editorialising. Need a named human reviewer (`ashton-tan`) at publish, same as ta/ja/ko/th.

## Glossary — core domain terms (extend as the corpus reveals more)
| English | Vietnamese |
|---|---|
| tax | thuế |
| income tax | thuế thu nhập |
| sales & service tax (SST) | thuế bán hàng và dịch vụ (SST) |
| company (Sdn Bhd) | công ty (Sdn Bhd) |
| government | chính phủ |
| law / act | luật / đạo luật |
| court | tòa án |
| licence / permit | giấy phép |
| employee / employer | người lao động / người sử dụng lao động |
| citizen / permanent resident | công dân / thường trú nhân |
| Bumiputera | Bumiputera (giữ nguyên) |
