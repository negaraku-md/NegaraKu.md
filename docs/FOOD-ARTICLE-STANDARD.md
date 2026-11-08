# NegaraKu.md — Food & Lifestyle article standard

The editorial standard for **Living in Malaysia → Food & Lifestyle**. It sits *under*
the three-pillar taxonomy (category/subcategory decide where an article lives); this
standard decides **how a food article is built** once it's there.

First principle, shared by every food article:

> **A sourced article is complete on its own.** A venue photo, a menu, or an editorial
> visit *adds something specific* to it — it is never what makes the article publishable.

Two companion docs: **[IMAGE-STANDARD.md](IMAGE-STANDARD.md)** (technical image spec,
sourcing policy, the 看到都想吃 appetite rule) and the general
**[article standard](../CONTRIBUTING.md)** (tiers, sourcing, the review gate). Where this
doc is stricter for food, it wins.

---

## 1. Six subject types, four templates

Set **`foodType`** in frontmatter. For a mixed article, choose by the **primary reader
question**.

| `foodType` | Template | What the article must establish |
|---|---|---|
| `place` | **Place** | What this venue serves, what makes it distinctive, how to eat there. Uses `review[]` for attributed, venue-specific food commentary where available. |
| `dish` | **Dish / Ingredient** | What the dish is, how its versions differ, and what flavours/textures readers can expect of each. |
| `ingredient` | **Dish / Ingredient** | How to identify the ingredient, what it contributes to a dish, how people use it. |
| `cuisine` | **Food culture** | What characterises the cuisine, which dishes illustrate it, where regional/community differences matter. |
| `culture` | **Food culture** | How a practice works, how it varies, why it matters in everyday life. |
| `practical` | **Practical guide** | Who the guidance applies to, the criteria or steps, which source has authority. |

`ingredient` and `cuisine` keep their own values even though they share a layout: an
ingredient and a dish answer different questions, and so do a cuisine and a cultural
practice. The template is the *shape*; the `foodType` is the *scope*.

## 2. The four templates (block order)

**Place**
1. Title + lede — a specific feature earns the click; the lede delivers it.
2. What's there to eat — the signature + other representative dishes, mains, sides.
3. **食评 / Review** — attributed taste commentary (`review[]`); omit cleanly if none.
4. Brand story + awards — food-first story; awards as a dated label + source.
5. How to order a first meal — sourced combos, RM prices, what's extra.
6. Visit info — the `place` card (branch, hours, map, dietary, payment…).
7. Sources & updates.

**Dish / Ingredient**
1. Title + lede.
2. What it is — identity, origin, where it sits in Malaysian eating.
3. What's in it / how it's made (dish) · how to identify it + what it contributes (ingredient).
4. **Versions & character** — "what flavours and textures characterise each version?" A
   named culinary source may explain what *it* considers well executed; do **not** impose
   one benchmark on the whole dish. Keep room for regional variation.
5. Where to try it — representative places/regions, linking to `place` articles.
6. Sources.

**Food culture** (cuisine / practice)
1. Title + lede.
2. What it is — the practice/cuisine and its scope.
3. How it works / its forms — variants, regional or community differences.
4. Why it matters — history, heritage, social role in everyday life.
5. How to experience it.
6. Sources.

**Practical guide**
1. Title + lede.
2. Who it applies to.
3. The criteria / steps.
4. What to watch for in practice.
5. Authority & sources — name the body with authority (e.g. JAKIM for halal).

`review[]` exists **only** on `place`. Dishes, culture and practical guides carry their
"taste"/explanation as **sourced body prose** under the normal citation rules (it already
cascades to translations via the body hash) — no verdict block, no single benchmark.

## 3. The one image rule — classify against the claim

Every image declares `kind` and `origin` (on `hero*` for the cover, in `images[]` for the
rest). Two independent axes:

- **`kind` — does this image depict *this article's subject*?** `actual` | `representative`.
  Judge it against the **narrowest claim** the caption and placement make, not the pixels.
- **`origin` — who made/supplied it?** `editorial` (our own) · `owner` (shop-supplied) ·
  `third-party`. Independent of `kind`: a shop *or* a stranger can supply an `actual` photo.

The subject is set by the template, so the same photo classifies differently:

| Image use | Classification |
|---|---|
| A genuine char kway teow photo on the **dish** guide | `actual` for the dish. Caption the version/location if known. |
| The same photo as a specific **stall's** cover | `representative`. Show **示意图** on every surface the cover appears. |
| A real kopitiam scene on a general **kopitiam culture** article | `actual` for the scene. If it illustrates a specific town/period/practice, it must match that narrower claim. |
| A **practical** guide showing the exact official mark it explains | `actual` for that mark — with its official source + reuse terms. A generic beer-shelf for alcohol rules is `representative`. |

**Labels are generated, not authored.** 示意图 (representative) / 店家供图 (owner) / 编辑实拍
(editorial actual) / 编辑实访 (editorial visit) render from `(kind, origin, visit)` as i18n
strings, so the distinction survives all 13 languages. `subject`, `caption`, `alt` are
authored and translated.

**Per-surface honesty.** A `representative` cover is fine wherever the 示意图 label travels
with it (article figure, listing/featured cards — all carry the badge). The share-preview
card is always the generated branded card and never shows the photo. If a future surface
would show a bare `representative` cover with no room for the label, it uses the **branded
fallback** on that surface instead.

**Hero is the cover's single source of truth** — the cover lives in `hero*`, never in
`images[]`. Body images go in `images[]`.

## 4. Sourced / Enhanced — evidence tiers, per block

Each block is at one of two tiers, independently:

- **Sourced** — complete and honest from attributed third-party or authoritative sources,
  plus representative or scene images. **This is a publishable article.** A "sourced" claim
  can already be well-verified.
- **Enhanced** — a *specific* asset deepens a block: an owner/venue `actual` photo upgrades
  the cover; a dated public menu supports pricing; a **documented editorial visit** upgrades
  the review of the dishes actually tried. An "enhanced" article may still rely on
  third-party tasting notes elsewhere.

Each upgrade applies to **one block** and arrives independently. Never hold a sourced
article back for an asset it doesn't have.

## 5. Writing the review (`place` only)

- Every entry **names its source** (`source` + `by`/`sourceRef` → a `sources[].id`). A taste
  claim is **never written in NegaraKu.md's own voice** without a documented editorial visit.
- `source: editorial-visit` earns the **编辑实访** label, and is limited to the **branch and
  dishes actually tried** (`visitedMonth`, `branch`).
- An **award alone is not a review** — it says what recognition the venue earned, not what a
  reader will taste. Omit `review[]` when there is no attributable food observation.
- Split what the source *observed* (`flavor`) from what it *means for a reader's preference*
  (`tradeoffs`, optional). Owner descriptions belong in the food/brand story unless the block
  explicitly presents them as the owner's view.

Worked example (Hing Kee, publishable today from MICHELIN):

> **米其林怎么评** — 米其林指南形容兴记的汤版药材味较淡、汤头带微甜，干版则更浓稠、带辣。喜欢温和汤头的读者可以从汤版开始；偏爱浓味、能吃辣的读者可以选干版。

## 6. Translation freshness (what cascades)

- **Cascade** (editing re-flags the 12 translations as stale): `review[].flavor` /
  `tradeoffs` / `subject`, `images[].alt` / `caption` / `subject`.
- **Neutral** (no churn): `hero`/`images[].src`, `credit`, `license`, `sourceUrl`/`sourceRef`,
  `kind`, `origin`, `branch`, `permissionRef`. (`heroAlt` stays neutral for now — see
  `scripts/translation-sync.mjs`.)
- The media hash is **append-only**: an article without `images[]`/`review[]` is unaffected.
- **Safety net:** the health scan warns when an image `src` changes but its `alt`/`caption`
  didn't — catching a translated caption that still names the old dish or branch.

## 7. Pre-publish reader test

Three questions, for any food article:
1. Shrunk to a listing card, does the **title (+ cover)** make me want to open it?
2. Does each block help me **understand** something the text alone didn't — honestly labelled?
3. After reading, do I know what this is / whether I'd like it / (for a place) how to order,
   what it costs, and how to get there?

---

*Encoded in `src/content.config.ts` (`foodType`, `images[]`, `review[]`, `hero*` provenance).
Pilots: Hing Kee (place), char-kway-teow (dish), a culture article, halal-certification
(practical), belacan (ingredient), chinese-malaysian-cuisine (cuisine), and one non-MICHELIN
venue (no review block).*
