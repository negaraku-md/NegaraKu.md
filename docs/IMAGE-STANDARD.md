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

## 5. Checklist before publishing an article with an image

- [ ] `hero` points to a committed `public/media/...` WebP, 16:9, ≤180 KB
- [ ] `heroAlt` present and meaningful
- [ ] `heroCredit` + `heroLicense` present; `heroSource` for licensed photos
- [ ] licence actually permits this use (and attribution text matches it)
- [ ] AI images are generic, not a real named subject, and labelled `AI-generated`
