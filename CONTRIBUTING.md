# Contributing to negaraku.md

Thank you for helping build a trustworthy, open knowledge base about Malaysia. Contributions
happen through GitHub pull requests.

## Adding or editing an article

1. Content lives in `knowledge/<category>/<slug>.md`. See the category list in
   `src/lib/categories.ts`.
2. The Bahasa Malaysia file is the **source of truth**. Translations are siblings named
   `<slug>.en.md` and `<slug>.zh.md`, sharing the same `slug`.
3. Use this frontmatter (validated by `src/content.config.ts`):

```yaml
---
title: "Kesultanan Melaka"
category: "history"          # must match the folder name
subcategory: ["kesultanan"]  # free-form tags; drive graph clustering
lang: "ms"                    # ms | en | zh
slug: "kesultanan-melaka"     # shared across languages
summary: "One-sentence description."
updated: 2026-07-06
status: "draft"               # draft | reviewed | verified
reviewer: null                # your GitHub handle once reviewed
sources:                      # required for reviewed / verified
  - title: "Source title"
    url: "https://…"
    publisher: "Publisher"
related: ["another-slug"]     # canonical slugs → graph edges
---
```

4. Write clear, sourced prose in Markdown. Aim for at least ~120 words and cite reputable
   sources. Run `npm run health` to check your article before opening a PR.

## Editorial principles

- **Cite everything.** Anything beyond `draft` must have sources.
- **Neutral and factual.** See [docs/editorial-guidelines.md](docs/editorial-guidelines.md),
  especially for sensitive topics (race, religion, monarchy, politics).
- **Curate, don't dump.** Prefer a well-written narrative over raw data.

## Review status ladder

`draft` → `reviewed` (a maintainer checked sources) → `verified` (independently corroborated).

## Local checks before a PR

```bash
npm run build              # must succeed
npm run health             # resolve ERROR findings
```
