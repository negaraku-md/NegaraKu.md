# French (fr) terminology & content decisions

Status: PLANNED (2026-10-17). Companion to `french-launch.md`. Govern the en→fr
translation of the 1,074-article corpus + the chrome. Defaults the user can veto.

## 1. Register & variety
- **International / standard French (français standard)** — not region-specific
  (not Québécois, not a single African or Belgian variety). Formal but accessible;
  the register of good explanatory/government French (service-public.fr style).
  Target audience: global Francophone readers interested in Malaysia (tourism,
  business, students, diaspora, researchers — France, Belgium, Switzerland, Canada,
  Maghreb, West/Central Africa).
- Source of truth = the **English master** (en→fr).
- "Malaysia" → **la Malaisie** (feminine, takes the article: *en Malaisie*, *la
  Malaisie*). Malaysian place names with no established French exonym stay as-is
  (Kuala Lumpur, Putrajaya, Johor, Sarawak, Penang/Pénang — keep source spelling).
- ⚠️ **malaisien vs malais — do NOT conflate (false-friend trap):**
  | English | French | note |
  |---|---|---|
  | **Malaysian** (nationality, of Malaysia) | **malaisien / malaisienne** | the country adjective/demonym |
  | **Malay** (ethnicity, the language, the Malay world) | **malais / malaise** | ethnic Malays, Bahasa Melayu, *le monde malais* |
  Getting this wrong misclassifies people and institutions. "Malaysian government"
  = *le gouvernement malaisien*; "the Malay language" = *le malais* / *la langue
  malaise*; "Malay reserve land" = *terres malaises réservées*.

## 2. ⚠️ Currency scale — the milliard/billion trap (CRITICAL)
English (short scale) and French (long scale) split on large numbers. Translating
"billion" as "billion" would be wrong by **1000×** and corrupt financial figures
across the corpus. Rule:

| English (source) | value | French (correct) | NOT |
|---|---|---|---|
| million | 10⁶ | million | — |
| **billion** | 10⁹ | **milliard** | ~~billion~~ |
| **trillion** | 10¹² | **billion** (= mille milliards) | ~~trillion~~ |

- EN *billion* is a single French word **milliard** (not "mille millions").
- Currency stays **RM / ringgit** (never €/$/francs; never convert amounts).
- This MUST be enforced in the translation prompt AND verified by a dedicated
  post-pass (grep fr files for "billion"/"trillion" near RM figures and reconcile
  against the en source). A silent 1000× error here is the single biggest risk —
  worse than Spanish because FR "billion" *looks* identical to EN "billion".

## 3. Numerals & separators
- Western digits 0-9 (as source).
- **Keep the source's number formatting** (do not swap `,`/`.` grouping to the
  French `1 000 000,50` space+comma convention). Reformatting separators across
  1,074 data-dense articles risks decimal/thousands errors for little reader
  benefit; figures are unambiguous as written. Percentages, dates, section
  numbers, dates: as source.
- Accents are mandatory and meaning-bearing — never drop them (é è ê à â ç î ï ô û ù ü).

## 4. Malaysian entities & acronyms — keep, gloss on first use
Same rule as every prior language: keep Malaysian proper nouns and **Latin-script
acronyms verbatim** (LHDN, SSM, EPF, KWSP, MyKad, MITI, Bursa Malaysia). On first
prominent use add a short French gloss, then use French after, e.g.
"la Direction générale des impôts (LHDN)". Statute/section references keep their
Latin/number form ("Section 245", "P.U.(A) 123", "Companies Act 2016").

## 5. Source citations — localize per the standing rule
Per `[[negaraku-sources-localization]]`: translate each citation **title** to French
with the English original in parentheses; localize agency names + keep the acronym;
keep news outlet names, URLs, dates **verbatim**. Apply via the unique-citation map +
deterministic apply, not per-file guesswork.

## 6. YAML / quote safety — French apostrophe is the hazard
French uses the apostrophe constantly (l', d', qu', j', n', s'). In frontmatter:
- Double-quoted scalars: avoid raw inner ASCII double-quotes (pass `validate` but can
  break `astro build` — see `[[negaraku-yaml-inner-quotes-gotcha]]`).
- The apostrophe is safe inside a **double-quoted** scalar (`"l'impôt sur le revenu"`)
  but NOT inside a single-quoted scalar unless doubled (`'l''impôt'`). Prefer
  double-quoting frontmatter strings that contain an apostrophe.
- In prose, use the straight apostrophe `'` for corpus consistency (the typographic
  `’` and guillemets « » are polish-level, settle later). Run a strict js-yaml /
  full-build scan before pushing the corpus.

## 7. Links
Keep internal links bare/relative; publishing enforces link resolution
(`[[negaraku-publish-link-gotcha]]`); duplicate topicIds break resolution — validate
before the strict build.

## 8. "AI" → "IA"
"AI" = **IA** (intelligence artificielle). "AI-friendly" → **adaptée à l'IA**
(or "pensée pour l'IA"); "AI-friendly Malaysia" → *une Malaisie adaptée à l'IA*.
Keep "AI" only inside a kept Latin acronym/proper noun.

## Open for user veto
- Variety (§1): standard/international French. Say if you want Québécois or another.
- Number separators (§3): keeping source format. Say if you want the French `1 000,50`.
- §2 (billion→milliard) is not a preference — it's a correctness rule; it stays.
