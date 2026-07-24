# Article data model — target model vs. what exists

The target model (Ashton, 2026-07-24) normalises the article system into tables.
The current implementation is **one flat Markdown frontmatter per language file**,
which duplicates every article-level field across all three languages. This doc maps
the two, field by field, and lists the gaps.

## The core structural difference

The target model separates **article-level** (language-independent) from
**language-level** (per-translation) properties. Today there is **no such
separation**: `knowledge/<cat>/<slug>.md`, `.en.md` and `.zh.md` each repeat
`category`, `subcategory`, `topicId`, `sensitivity`, `reviewDue`, `sources`,
`relations`, `tier`, `masterLanguage` …

That duplication is the root cause of most drift bugs hit so far — a wrong
`masterLanguage` on some files, needing a 616-file bulk edit to change
`reviewDue`, `sensitivity` repeated per language. **Normalising removes an entire
class of bug**, because an article-level fact would have exactly one home.

---

## Table: Article Section

| Field | Today | Status |
| --- | --- | --- |
| Name (Understand / Living / Doing Business) | `PILLARS` in `src/lib/categories.ts` | ✅ exists (code table) |

Section is **derived** from category (`getPillar(category)`), not stored per article.

## Table: Article Category

| Field | Today | Status |
| --- | --- | --- |
| Article Category Name | `category` + `CATEGORIES` in `src/lib/categories.ts` | ✅ exists (code table; carries icon, localized name, blurb, pillar) |

## Table: Article Topic

| Field | Today | Status |
| --- | --- | --- |
| Article Category Name | `category` | ✅ |
| Article Topic Name | `subcategory[]` + `subcatLabel()` in `src/lib/subcategories.ts` | ⚠️ exists but is an **array**; the app treats `subcategory[0]` as "the" topic |

## Table: Article Sponsored

| Field | Today | Status |
| --- | --- | --- |
| Article Sponsored Name | — | ❌ **missing** |
| Article Sponsored Information | — | ❌ **missing** |

Sponsorship is currently **hardcoded** in `ArticleView.astro`: a 1company block shown
when `pillar === 'doing-business' && !sensitive`. There is no sponsor field, no sponsor
table, and no way to vary sponsor by article. This is the biggest missing entity.

## Table: Article (language-independent)

| # | Target field | Today | Status |
| --- | --- | --- | --- |
| 1 | Article No. | `topicId` (e.g. `MY-GLO-0003`) | ✅ |
| 2 | Article Name | `title` | ⚠️ stored **per language file** |
| 3 | Version | `version` | ⚠️ per file, not per article |
| 4 | Master Language | `masterLanguage` | ⚠️ duplicated on every language file |
| 5 | Classification | `sensitivity` | ⚠️ duplicated (shown as "Classification" in the trust card) |
| 6 | Next Review Date | `reviewDue` | ⚠️ duplicated |
| 7 | Article Category Name | `category` | ⚠️ duplicated |
| 8 | Article Topic Name | `subcategory[0]` | ⚠️ duplicated |
| 9 | Article Sponsored Name | — | ❌ missing |

## Table: Article Language (per-translation)

| # | Target field | Today | Status |
| --- | --- | --- | --- |
| 1 | Article No. | `topicId` | ✅ |
| 2 | Language | `lang` | ✅ |
| 3 | Version | — | ❌ **the key gap.** There is one `version`, not an article-version + a language-version. "Which article version is this translation of?" is answered today by `sourceContentHash` (a content hash). A version number is clearer and human-readable. |
| 4 | Content | body + `summary`, `answer`, `keyTakeaways`, `appliesTo`, `faq` | ✅ |
| 5 | Status | `status` (7-state lifecycle) | ✅ |
| 6 | All Status Date | `created`, `reviewed`, `published`, `updated` | ⚠️ **fixed fields, not a history.** One date column per status would generalise it. |
| 7 | All Status Person | `author`, `reviewer`, `publishedBy` | ⚠️ same — fixed fields, not a per-transition actor |

Items 6–7 are what the Trust card's **chain of custody** renders
(Drafted → Reviewed → Published, each with date + actor). The target model
generalises it to "every status has a date and a person", which is the right shape.

## Table: Article Source

| Field | Today | Status |
| --- | --- | --- |
| Article No. | `topicId` | ✅ |
| Source Information | `sources[]` (title, url, publisher, date) | ⚠️ duplicated per language |

The model correctly places sources at **article** level. The translation spec already
says "copy `sources[]` verbatim, a citation is an identifier not prose" — i.e. the code
already treats them as article-level while physically duplicating them.

## Table: Article Display By Language

| # | Target field | Today | Status |
| --- | --- | --- | --- |
| 1 | Article Section | derived via `getPillar()` | ✅ |
| 2 | Article No. | `topicId` | ✅ |
| 3 | Version | `version` | ⚠️ |
| 4 | Article Sponsored Name | — | ❌ missing |
| 5 | Data/Statistics for Visitor (Human, Google, AI) | — | ❌ **missing entirely** — no analytics/telemetry of any kind |

This reads as a **reporting/rendering view** rather than a stored table.
Item 5 needs a traffic source (GA4/Cloudflare/server logs); the plan previously
deferred live analytics in favour of build-time stats.

---

## Summary of gaps

1. **No article/language separation** — every article-level field is duplicated ×3.
2. **Sponsor is not modelled** — hardcoded to 1company by pillar.
3. **No language-level version** — translation currency tracked by hash, not version.
4. **Status date/person are fixed fields**, not a general per-status history.
5. **No visitor analytics** at all.

## Migration note

The content is Markdown files, not a database, so full normalisation means either:
- **(a)** a per-topic `_article.yml` holding article-level fields, with language files
  carrying only language-level fields; or
- **(b)** keep flat files, treat the **master file as authoritative** for article-level
  fields, and add a health-scan rule that fails the build when a translation disagrees.

**(b) is the cheap 80%**: it stops drift immediately without moving 936 files.
**(a) is the correct end state** if the model is to be honoured literally.

## WIP — open design questions

| # | Where | Question | Today |
| --- | --- | --- | --- |
| 1 | Article page | How to handle **Related Knowledge** | `related[]` (slugs) + `relations[]` (typed edges) render as cards; selection/order rules undefined |
| 2 | Category page | "What do you want to do?" | not built — task-oriented entry |
| 3 | Category page | "Quick answers" | not built |
| 4 | Category page | "Tools & checklists" | not built |
| 5 | Section page | "Start here" | not built |
