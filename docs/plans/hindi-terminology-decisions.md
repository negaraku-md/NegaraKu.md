# Hindi (hi) terminology & content decisions

Status: PLANNED (2026-10-13). Companion to `hindi-launch.md`. These govern the
en→hi translation of the 1,074-article corpus and the chrome copy. They mirror
the Arabic decisions where the logic carries over, and diverge only where Hindi
convention genuinely differs. All are defaults the user can veto.

## 1. Register & script
- **Standard Modern Hindi** (मानक हिन्दी, Khariboli) in **Devanagari**. Formal
  but accessible — the register of quality government/explanatory Hindi (e.g.
  India's official Hindi gazette style), not literary/Sanskritised Hindi and not
  Hinglish. Clear, plain, and readable for a general audience.
- Source of truth for content is the **English master** (en→hi), same as Arabic —
  not an adapt-from-Malay pass.

## 2. Numerals — Western 0–9 (NOT Devanagari ०–९)
Modern digital, financial, and official Hindi overwhelmingly uses Western digits
for figures, dates, percentages, section numbers, and currency. This knowledge
base is dense with RM amounts, rates, dates, and statutory references, where
Western digits are unambiguous and match the Latin-script citations and URLs.
Use Western 0–9 throughout (consistent with the Arabic decision). Devanagari
numerals are not used.

## 3. Currency magnitude — मिलियन/बिलियन/ट्रिलियन (NOT लाख/करोड़)
This is the key Hindi-specific divergence. Indian Hindi natively counts in
**lakh (लाख, 10⁵)** and **crore (करोड़, 10⁷)**. But the subject is **Malaysia**,
whose figures are quoted in the international million/billion/trillion scale
(e.g. "RM 400 billion"). Converting to lakh/crore would (a) misrepresent the
Malaysian source convention, (b) introduce conversion-error risk across 1,074
articles, and (c) desync the figure from every other language's rendering.
→ Keep the source magnitude and express it in Hindi as **मिलियन / बिलियन /
ट्रिलियन** (transliterated). Do NOT recompute into lakh/crore. Currency stays
**RM / रिंगिट (ringgit)** — never ₹/rupees.

## 4. Malaysian entities & acronyms — keep, transliterate on first use
Same rule as every prior language:
- Keep Malaysian proper nouns and **Latin-script acronyms verbatim** (LHDN, SSM,
  EPF, KWSP, MyKad, MITI, Bursa Malaysia, etc.) — they are the searchable,
  official forms.
- On first prominent use, give a Devanagari transliteration with the Latin
  original in parentheses, e.g. "मलेशिया (Malaysia)", "कुआलालंपुर (Kuala Lumpur)",
  then use the Hindi form thereafter. Agency *names* may be rendered in Hindi with
  the acronym kept: e.g. "अंतर्देशीय राजस्व बोर्ड (LHDN)".

## 5. Source citations — localize per the standing rule
Follow `[[negaraku-sources-localization]]`: in each hi file, translate the
citation **title** into Hindi with the original in parentheses; localize agency
names + keep the acronym; keep news outlet names, URLs, and dates **verbatim**.
Apply via the unique-citation map + deterministic apply (not per-file guesswork).

## 6. Quotes / YAML safety
Use Devanagari/standard punctuation in prose. In double-quoted frontmatter
scalars, avoid raw inner ASCII double-quotes (they pass `validate` but can break
`astro build` — see `[[negaraku-yaml-inner-quotes-gotcha]]`); prefer guillemets
or single quotes for inner quoting, and run a strict js-yaml / full-build scan
before pushing the corpus.

## 7. Links
Keep internal links bare/relative as the pipeline expects; publishing enforces
link resolution (`[[negaraku-publish-link-gotcha]]`). Duplicate topicIds silently
break resolution — validate before the strict build.

## Open for user veto
- Numerals (§2) and currency magnitude (§3) are the two culturally-loaded calls.
  Recommendation stands: Western digits + million/billion, for faithfulness to
  the Malaysian source and cross-language consistency. Say the word to switch to
  Devanagari numerals and/or lakh–crore and I'll adjust the decisions before
  Phase 2 runs.
