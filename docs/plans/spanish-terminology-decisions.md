# Spanish (es) terminology & content decisions

Status: PLANNED (2026-10-16). Companion to `spanish-launch.md`. Govern the en→es
translation of the 1,074-article corpus + the chrome. Defaults the user can veto.

## 1. Register & variety
- **International / neutral Spanish (español neutro)** — not region-specific (not
  peninsular-only, not a single Latin-American variety). Formal but accessible; the
  register of good explanatory/government Spanish. Target audience: global Spanish
  speakers interested in Malaysia (tourism, business, students, diaspora, researchers).
- Source of truth = the **English master** (en→es).
- "Malaysia" → **Malasia** (standard Spanish exonym); "Malaysian" → **malasio/-a**.
  Malaysian place names with no established Spanish exonym stay as-is (Kuala Lumpur,
  Putrajaya, Johor, Sarawak…).

## 2. ⚠️ Currency scale — the billion/billón trap (CRITICAL)
English and Spanish split on large numbers (short vs long scale). Translating
"billion" as "billón" would be wrong by **1000×** and corrupt financial figures
across the corpus. Rule:

| English (source) | value | Spanish (correct) | NOT |
|---|---|---|---|
| million | 10⁶ | millón / millones | — |
| **billion** | 10⁹ | **mil millones** | ~~billón~~ |
| **trillion** | 10¹² | **billón** | ~~trillón~~ |

- Currency stays **RM / ringgit** (never €/$/pesos; never convert amounts).
- This MUST be enforced in the translation prompt AND verified by a dedicated
  post-pass (grep es files for "billón"/"trillón" near RM figures and reconcile
  against the en source). A silent 1000× error here is the single biggest risk.

## 3. Numerals & separators
- Western digits 0-9 (as source).
- **Keep the source's number formatting** (do not swap `,`/`.` grouping to the
  Spanish `1.000,50` convention). Reformatting separators across 1,074 data-dense
  articles risks decimal/thousands errors for little reader benefit; the figures are
  unambiguous as written. Percentages, dates, section numbers: as source.

## 4. Malaysian entities & acronyms — keep, gloss on first use
Same rule as every prior language: keep Malaysian proper nouns and **Latin-script
acronyms verbatim** (LHDN, SSM, EPF, KWSP, MyKad, MITI, Bursa Malaysia). On first
prominent use add a short Spanish gloss, then use Spanish after, e.g.
"la Junta de Ingresos Internos (LHDN)". Statute/section references keep their
Latin/number form ("Section 245", "P.U.(A) 123").

## 5. Source citations — localize per the standing rule
Per `[[negaraku-sources-localization]]`: translate each citation **title** to Spanish
with the English original in parentheses; localize agency names + keep the acronym;
keep news outlet names, URLs, dates **verbatim**. Apply via the unique-citation map +
deterministic apply, not per-file guesswork.

## 6. YAML / quote safety
Spanish uses « » or " " and the inverted ¿ ¡. In double-quoted frontmatter scalars
avoid raw inner ASCII double-quotes (pass `validate` but can break `astro build` —
see `[[negaraku-yaml-inner-quotes-gotcha]]`); prefer guillemets or single quotes for
inner quoting. Run a strict js-yaml / full-build scan before pushing the corpus.

## 7. Links
Keep internal links bare/relative; publishing enforces link resolution
(`[[negaraku-publish-link-gotcha]]`); duplicate topicIds break resolution — validate
before the strict build.

## Open for user veto
- Variety (§1): neutral Spanish. Say if you want peninsular or a specific LatAm variety.
- Number separators (§3): keeping source format. Say if you want the Spanish `1.000,50`.
- §2 (billion→mil millones) is not a preference — it's a correctness rule; it stays.
