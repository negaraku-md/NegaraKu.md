# From Article to Content — proposal

**The problem.** The site has a rigorous lifecycle for exactly one thing: the article.
Status, version, chain of custody, translation staleness, sources, the 3R+1 gate — all
of it applies to `knowledge/**/*.md` and nothing else. But an article is only *one kind
of content* the site publishes. Everything else — datasets, category blurbs, page copy,
the glossary, the sponsor block — reaches readers with **no lifecycle at all**.

The sharpest example: `src/lib/companies.ts` contains

```ts
{ name: 'Maybank', ticker: '1155', sector: 'Banking', marketCap: 120, revenue: 60 }
```

That is a factual claim published to readers with no source, no as-of date, no reviewer
and no review cycle — in a project whose article standard says *cite every claim*. The
trust model stops at the edge of `knowledge/`.

## The content inventory

| # | Content type | Where it lives | Reader-facing? | Lifecycle today |
| --- | --- | --- | :-: | --- |
| 1 | **Article** | `knowledge/**/*.md` | yes | ✅ full |
| 2 | **Dataset** | `src/lib/states.ts`, `companies.ts`, `terminology.ts`, `homedata.ts`, `intros.ts` | yes — **as facts** | ❌ none |
| 3 | **Taxonomy copy** | category names/blurbs, pillar taglines (`categories.ts`), topic labels (`subcategories.ts`) | yes | ❌ none |
| 4 | **Page copy** | Home hero, About, Contribute, Explore — inline `L(ms,en,zh)` | yes | ❌ none |
| 5 | **UI strings** | `src/lib/i18n.ts` | yes | ❌ none |
| 6 | **Termbase** | `docs/plan/GLOSSARY-MS.md`, `GLOSSARY-ZH.md` | no (governs output) | ❌ none |
| 7 | **Sponsored** | hardcoded in `ArticleView.astro` | yes | ❌ not modelled |
| 8 | **Editorial policy** | `docs/**` | no | ~ git only |

Six of eight reader-facing types have no lifecycle.

## Proposal: tiered guarantees

Not every content type needs the full article machinery — forcing it would be
over-engineering. Tier by **what the content asserts**, not by where it lives.

### Tier A — asserts facts to readers
> **Types:** Article, Dataset

Must carry: `source`, `asOf` (or `updated`), `version`, `status`, `reviewer`,
`reviewDue`, and a 3R+1 screen. Rendered with a visible source/as-of line, exactly as
articles show their sources.

*Article already qualifies. **Dataset is the gap** — and the priority fix, because it is
a live honesty inconsistency, not a missing nicety.*

### Tier B — reader-facing prose, no hard facts
> **Types:** Taxonomy copy, Page copy, Sponsored

Must carry: an **owner**, a `version`, and **parity across all three languages**.
No sources required — these describe rather than assert. Review on change, not on a
clock.

### Tier C — structural / internal
> **Types:** UI strings, Termbase, Editorial policy

Git history is the record. The one hard requirement is **trilingual parity** for
anything a reader sees: an untranslated UI string is a visible defect.

## Recommended changes

1. **Give datasets the trust apparatus** *(priority)*
   Move Tier A data out of `.ts` code into data files carrying `source`, `asOf`,
   `reviewer`, `reviewDue` — and render a "Source · as at <date>" line wherever the
   figures appear. Until then, the honest interim is to label the hubs as
   *unverified* rather than present them as fact.

2. **Model the sponsor**
   Sponsorship is currently hardcoded to 1company by pillar. Make it data
   (`Article Sponsored`, per the data model) so it can vary, be dated, and be disclosed
   consistently.

3. **Extend the health scanner beyond `knowledge/`**
   It already guards articles. Add: Tier A content missing a source or `asOf`;
   Tier B/C content missing a language. The scanner is where "the lifecycle is handled"
   becomes enforceable rather than aspirational.

4. **Count content by type on the dashboard**
   "312 articles" is one content type. The dashboard should report the corpus —
   articles *and* datasets *and* copy — so ungoverned content cannot hide by being
   uncounted.

5. **Rename the mental model in the docs**
   Article → **Content**, with Article as one type. `CONTRIBUTOR-MODULE.md` scopes
   already anticipate this (`scope:data`, `scope:interface`, `scope:category`); this
   makes the object model match.

## Contributor mapping

Every content type gets an owner scope, so no type is orphaned:

| Content type | Scope | Who may merge |
| --- | --- | --- |
| Article | `scope:article` | reviewer signs off; maintainer publishes |
| Dataset | `scope:data` | reviewer (Tier A — it asserts facts) |
| Taxonomy copy | `scope:category` / `scope:section` | maintainer |
| Page copy | `scope:interface` | maintainer |
| UI strings | `scope:interface` | maintainer |
| Termbase | `scope:terminology` | maintainer |
| Sponsored | `scope:governance` | maintainer (disclosure matters) |
| Editorial policy | `scope:governance` | maintainer |

## Sequencing

1. Datasets → Tier A (the live honesty gap)
2. Health scanner covers non-article content (makes the rest enforceable)
3. Sponsor becomes data
4. Dashboard counts by content type
5. Docs renamed Article → Content
