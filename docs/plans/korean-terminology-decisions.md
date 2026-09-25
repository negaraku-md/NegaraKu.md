# Korean (`ko`) terminology & style decisions

_Set BEFORE the corpus translation (Phase 2) so all 1,073 articles are consistent. Mirrors the ja approach ([[negaraku-ja-terminology-decisions]]). Translators/agents MUST follow these; do not bulk-normalize the deliberate distinctions below._

## Register & voice
- **Formal written Korean, 합니다체 (격식체)** — the declarative formal style (…입니다 / …합니다), as an encyclopedia/knowledge base uses. Not 해요체 (casual-polite), not 한다체 (plain) except in list/label fragments where a noun phrase is natural.
- Neutral, factual, explanatory tone — same as the ms/en master. No marketing voice.
- Sentence-final: prefer clear declaratives; avoid excessive nominalization.

## Script
- **Hangul-only by default.** Use Hanja (한자) only when genuinely disambiguating a homophone on first mention, and sparingly — modern Korean informational writing is Hangul-first.
- Keep Latin acronyms/original names in parentheses on first mention (see below).

## Proper nouns — the core rule
On **first mention** in an article: **Korean rendering + original in parentheses**; thereafter Korean (or the acronym) alone.
- **Government agencies / regulators:** translate descriptively, keep the Malay/English acronym.
  - LHDN → 말레이시아 국세청(LHDN); SSM → 말레이시아 기업위원회(SSM); BNM → 말레이시아 중앙은행(BNM); SC → 증권위원회(SC); EPF/KWSP → 직원공제기금(EPF); SOCSO/PERKESO → 사회보장기구(SOCSO).
- **Ministries:** descriptive translation + English gloss — e.g. 재무부(Ministry of Finance), 통상산업부(MITI).
- **Statutes / Acts:** descriptive Korean translation + keep the official English/Malay name in parentheses, since Malaysian statutes have no standard Korean name — e.g. 소득세법(Income Tax Act 1967), 회사법(Companies Act 2016), 고용법(Employment Act 1955). Do NOT invent a Korean short form; reuse the same rendering everywhere (consistency > elegance).
- **Royal / constitutional offices:** transliterate + gloss, respectfully — Yang di-Pertuan Agong → 양 디페르투안 아공(국왕), Sultan → 술탄, Conference of Rulers → 통치자 회의. Keep the neutral, respectful tone on sensitive-royalty articles.

## Place names — standard Korean transliteration
Kuala Lumpur → 쿠알라룸푸르; Putrajaya → 푸트라자야; Sabah → 사바; Sarawak → 사라왁; Penang → 페낭; Johor → 조호르; Selangor → 슬랑오르; Malaysia → 말레이시아. Use the conventional Korean forms; keep the Latin name in parentheses on first mention for lookup.

## Numbers, dates, currency
- Currency: **링깃(RM)**; write amounts as `RM1,000` (keep the RM symbol) with 링깃 on first mention.
- Dates: Korean format **YYYY년 M월 D일**.
- Large numbers: Korean 만/억 units are fine in prose; keep digits for precise figures/tables.

## Brand / fixed strings — never translate
- **`NegaraKu.md`** wordmark stays verbatim everywhere (per [[negaraku-wordmark-standard]]) — never 네가라쿠.
- `1company` stays lowercase Latin.
- Category/pillar names follow `src/lib/categories.ts` ko labels (set in Phase 1 chrome) — translators reuse those exact labels, don't re-coin.

## Consistency mechanics
- Build a running glossary as translation proceeds; the first agent's renderings of the top agencies/statutes/places become canonical — later waves reuse them verbatim.
- When unsure between two valid Korean renderings, pick one and record it here; do not let different articles diverge.
- Frontmatter (`title`, `summary`, `entity`) is translated; `wikidata` QID, `category`, `slug`, `masterLanguage`, `status` are NOT.

_Add new resolved terms here as they come up (the ja doc grew this way). This file is the source of truth for the Korean voice._
