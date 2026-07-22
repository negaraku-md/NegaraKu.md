# CLAUDE.md — guidance for AI assistants working in this repo

NegaraKu.md is an open-source, AI-friendly knowledge base about Malaysia
(Astro v5, static, deployed to GitHub Pages). It follows the 1company brand
(true-black canvas, gold `#FFC000` accent, Montserrat + Lato).

## Architecture

- **Content SSOT:** `knowledge/<category>/<slug>[.<lang>].md` (Markdown + frontmatter).
  Astro reads it directly via the glob loader in `src/content.config.ts`
  (custom `generateId` keeps `.en`/`.zh` variants distinct).
- **Languages:** `ms` (default, at `/`), `en` (`/en`), `zh` (`/zh`). Every page is
  a shared `XView.astro` component + three thin route files.
- **Shared libs:** `src/lib/` — `categories.ts` (taxonomy + colors), `i18n.ts`
  (`t()`, `localePath()`, all UI strings), `content.ts` (`articlesForLocale`,
  `readingTime`, …), `apidata.ts` (reads generated JSON), `seo.ts`, `nav.ts`.
- **Generated data:** `public/api/*.json` from `scripts/*.mjs` at predev/prebuild:
  `sync.mjs` (manifest), `build-graph.mjs`, `build-dashboard.mjs`,
  `build-changelog.mjs`, `build-git-info.mjs`, `build-og.mjs`.

## Commands

```bash
npm run dev        # sync + data + astro dev
npm run build      # sync + graph + og + data + astro build + pagefind
npm run health     # python content-health scan (add --strict for CI)
```

## Conventions

- Add UI strings to `src/lib/i18n.ts` (or inline `L(ms,en,zh)` for page copy).
- New categories: edit `src/lib/categories.ts` (+ a color in `CATEGORY_COLORS`).
- Keep `1company` lowercase everywhere (`.oneco` CSS guard); wordmark is `NegaraKu.md`.
- External links open in a new tab automatically (script in `BaseLayout.astro`).
- Deferred/omitted (Taiwan-specific): soundscape, AI bench, semiont, life-tree.

## Verify changes

Run `npm run build`, then `npm run preview` and check the affected page. The
health scan and the build must stay green.
