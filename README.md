# negaraku.md

An open-source, AI-friendly knowledge base about **Malaysia** — curated, cited Markdown that
both people and large language models can read.
Sponsored by [1company.com](https://www.1company.com). Styled with the 1company brand system
(dark canvas + gold accent, Montserrat/Lato).

- **Content** lives in [`knowledge/`](knowledge/) as the single source of truth (Markdown +
  frontmatter), organised by category.
- **Site** is built with [Astro](https://astro.build), deployed to GitHub Pages at
  `https://negaraku.md`.
- **Languages**: Bahasa Malaysia (`ms`, default), English (`en`), Chinese (`zh`).

## Features

| Feature | Where |
|---|---|
| Category browsing + article pages with citations | `src/pages`, `src/components` |
| Interactive D3 knowledge graph | `/graph` · `scripts/build-graph.mjs` |
| Static full-text search (Pagefind) | `/search` |
| AI endpoints: `llms.txt`, `llms-full.txt`, raw `*.md` per article | `src/pages/llms*.ts`, `[slug].md.ts` |
| MCP server (search + read for AI clients) | [`mcp/`](mcp/) |
| RSS, sitemap, JSON-LD, hreflang | `src/pages/rss.xml.ts`, `astro.config.mjs`, `src/lib/seo.ts` |
| Content-health scanner | `scripts/health/scan.py` |
| Translation scaffolding | `scripts/translate.mjs` |
| AI discovery: `robots.txt` (AI crawlers), Markdown alternates, BreadcrumbList/sponsor JSON-LD | `src/pages/robots.txt.ts`, `src/lib/seo.ts` |
| Facebook auto-post on publish + share buttons + OG image | `.github/workflows/facebook.yml`, `scripts/post-to-facebook.mjs`, `scripts/build-og.mjs` |

## Develop

```bash
npm install        # also runs the sync step
npm run dev        # http://localhost:4321
npm run build      # sync + graph + astro build + pagefind index
npm run preview    # serve the production build (search works here)
```

Other scripts: `npm run sync` (rebuild manifest), `npm run build:graph`, `npm run health`
(content scan), `npm run translate` (scaffold missing translations).

## Add an article

Create `knowledge/<category>/<slug>.md` with the frontmatter shown in
[CONTRIBUTING.md](CONTRIBUTING.md). Translations are siblings: `<slug>.en.md`, `<slug>.zh.md`.

## Licensing

- **Content**: [CC BY-SA 4.0](LICENSE-CONTENT)
- **Code**: [MIT](LICENSE)
