# NegaraKu.md — article image standard

How article images work on NegaraKu.md. Applies to any article that carries a lead
photo (food, places, companies, etc.). The site is static (GitHub Pages) with no
`astro:assets` pipeline, so images are **pre-optimised at author time** and served
straight from `public/`.

## 1. Frontmatter fields (schema: `src/content.config.ts`)

| field | required | meaning |
|---|---|---|
| `hero` | — | path under `public/`, e.g. `/media/food/nasi-lemak/hero.webp` |
| `heroAlt` | **yes, when `hero` is set** | accessible alt text (WCAG); describe the image, don't say "image of" |
| `heroCredit` | yes | attribution shown in the caption — `"Photo: Jane Doe"`, `"Wikimedia Commons"`, `"AI-generated"` |
| `heroLicense` | yes | `"CC BY-SA 4.0"`, `"CC0"`, `"AI-generated"`, `"© 1company"`, … |
| `heroSource` | recommended | provenance URL (where the image came from) |

The hero renders in `ArticleView.astro` as a 16:9 `<figure>` with a credit caption;
`ArticleCard.astro` reuses `hero` + `heroAlt` for the list thumbnail.

## 2. File storage

`public/media/<category>/<slug>/hero.webp` → referenced as `/media/<category>/<slug>/hero.webp`.
Commit the file with the article (per the save-to-repo rule). Keep a committed
generator/manifest for any AI-generated images so they are reproducible.

## 3. Technical spec (CLS- and LCP-safe)

- **Format:** WebP. **Ratio:** 16:9. **Size:** ~1600×900, **≤180 KB** (also reusable as an OG card).
- The template sets explicit `width`/`height` + `aspect-ratio`, so the image reserves
  its space and causes **no layout shift**. Don't remove those attributes.
- Hero is the LCP element → rendered `fetchpriority="high"`, not lazy. Card thumbnails are `loading="lazy"`.
- `heroAlt` is mandatory and must be meaningful (accessibility).

## 4. Sourcing policy — HYBRID (never scrape the web)

Images must be ones we have the right to use. **Never** Google Images, screenshots, or
scraped web photos. Two allowed sources, both **disclosed** via `heroLicense`:

1. **Licensed real photos (primary).** Wikimedia Commons, or CC0 / permissive stock
   (Unsplash, Pexels). Verify the licence per image and record it in `heroLicense` +
   `heroSource`; add attribution to `heroCredit` as the licence requires. Prefer these
   for real dishes, markets, landmarks and heritage subjects.
2. **AI-generated (disclosed fallback).** Only where no suitable licensed photo exists.
   Set `heroLicense: "AI-generated"`. Use **only for generic representations** (e.g. a
   dish type) — never to depict a specific, named real place/restaurant/person as if it
   were a real photograph of them.

If neither is available, ship the article with no hero rather than an unlicensed image.
(A guide/overview article with no single photographic subject — e.g. `michelin-guide-malaysia` — is fine with no hero.)

### Food images — the first principle: 看到都想吃 (make the reader hungry)

A food photo's job is **not** to prove the dish exists — it is to make the reader *want to
eat it*. If it doesn't trigger appetite, it is the wrong photo even when it is technically
"correct." This is the reader-first principle applied to images. Everything below is just
how to achieve 看到都想吃, in priority order:

1. **The dish is the hero** — close-up, fills the frame, the *actual food*. Never a
   storefront, building, wide table, sign or menu.
2. **Appetite cues** — fresh, vivid natural colour; good light; visible texture / steam /
   glaze; the "money moment" (broth pour, cheese pull, crispy edge, cross-section, runny yolk).
3. **Authentic & correct** — it is genuinely *this* dish, presented the real way. Accuracy
   is non-negotiable: an appetising photo of the *wrong* dish misleads the reader. Among
   authentic options, pick the most delicious-looking.
4. **Technical quality** — sharp, high-res, clean background; no harsh flash, no dull /
   greasy / half-eaten plate.

**More images.** A food article should carry several appetising shots (hero + in-body:
a close-up, a variation, the serving context), not a lone hero. More appetite = more engagement.

**Hero composition (esp. restaurant/venue profiles).** The hero has one job: the reader
recognises the dish in ~1 second. On top of 看到都想吃:

1. **Readable at a glance** — the dish in its real vessel (claypot / bowl / plate), a
   **medium shot**. Avoid extreme macro crops that read as abstract "brown food texture."
2. **16:9-balanced** — the vessel sits centred with breathing room and survives the wide
   hero band without cutting the subject awkwardly.
3. **Clean — no third-party branding.** No menus, price lists, signage, logos, or any other
   business's name in the frame. A photo taken inside shop B must not advertise shop B on
   shop A's page. Eyeball the actual 16:9 crop for stray text/branding before committing.
4. **Authentic to the venue's style** — match the real thing (e.g. a *dark* herbal claypot
   for a Klang-style bak kut teh shop).
5. **Consistent across a set** — similar framing/vibe so a collection (e.g. the 70 MICHELIN
   profiles) feels cohesive, not a jumble of macro/wide/storefront shots.

**It must hold up at full hero width, not just as a thumbnail.** Amateur/documentary shots
(the bulk of Wikimedia) often look weak enlarged — washed-out broth, distracting background
(plastic plates, clutter). Prefer professional free photography (Pexels / Unsplash / Flickr
CC) when available. When salvaging a usable-but-busy shot: **crop to the food** (bias the
16:9 crop toward the dish, e.g. drop the top ~20% to cut background) so the dish fills the
frame, and apply a *mild, honest* enhancement (≈ +10% saturation / +3% brightness) to
richen it — never a deceptive edit that changes what the dish is.

**Sourcing to meet the bar.** Wikimedia Commons is mostly documentary/amateur and often
fails 看到都想吃. To hit the bar while staying free/licensed, also draw on high-quality free
food photography — **Openverse, Pexels, Unsplash** (free commercial licence), **Flickr CC** —
then filter hard for the authentic Malaysian dish so a generic pretty photo never
misrepresents it. Record licence + source per image as always.

### Sourcing QA — never trust a search's first hit

Picking "the first free landscape image" for a dish name is **not safe**. A real run of
the Wikimedia Commons search returned an airBaltic **aircraft** for "ais kacang", a Ya Kun
**storefront** for "kaya toast", a street **cart** ("ES CENDOL") for "cendol", and a wall
**mural** ("Noi amb ais kacang") — every one correctly licensed, none usable. So:

1. **Score candidates by filename**, not just orientation: +match the dish keyword in the
   title; **−penalise** `storefront|exterior|restaurant|building|signage|aircraft|airline|cart|stall|mural|painting|logo|menu|interior|history`; prefer `bowl|plate|dish|served|food`.
2. **Always eyeball the final set.** Build a contact sheet (sharp montage of every chosen
   WebP + its slug) and look at it before committing. This is the only reliable check that
   the photo actually shows the dish; it caught all four wrong images above.
3. Reject anything that isn't the food itself served to eat (no shopfronts, art, vehicles,
   people-first shots, or packaging).

## 5. Checklist before publishing an article with an image

- [ ] **Food: passes 看到都想吃** — the dish is the hero, appetising, and the correct authentic dish
- [ ] **Hero reads at a glance** — medium shot of the dish in its vessel, 16:9-balanced, **no menu/signage/third-party branding** in frame
- [ ] `hero` points to a committed `public/media/...` WebP, 16:9, ≤180 KB
- [ ] `heroAlt` present and meaningful
- [ ] `heroCredit` + `heroLicense` present; `heroSource` for licensed photos
- [ ] licence actually permits this use (and attribution text matches it)
- [ ] AI images are generic, not a real named subject, and labelled `AI-generated`
