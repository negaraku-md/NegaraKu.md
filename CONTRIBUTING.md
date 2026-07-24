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

## Article lifecycle

The status of an article is a **loop**, not a line. Only `archived` is terminal.

```
draft → in-review → reviewed → published
                                   │
             reviewDue passed, OR a reader suggests a correction
                                   ▼
                             needs-update      ← still LIVE for readers
                                   ▼
                              in-update        ← still LIVE for readers
                                   ▼
                              in-review → published   (version 0.1 → 0.2)

published → archived    (repealed or superseded — retired from the site)
```

Two rules matter:

- **Never send a published article back to `draft`.** `needs-update` and `in-update`
  are live states: the reader keeps seeing the current version while the next one is
  prepared. Dropping it to `draft` would unpublish a working page mid-edit.
- **`needs-update` is derived, not typed.** A published article whose `reviewDue` has
  passed is overdue by definition, so the site computes it. You don't set it by hand.

When you land a change, bump `version` and add a `revisions[]` entry recording what
changed and **who** changed it (`contributor`). That entry is rendered in the article's
public change history — it is how you get credit.

## What you can contribute

Far more than articles. [docs/CONTRIBUTOR-MODULE.md](docs/CONTRIBUTOR-MODULE.md)
defines **fifteen contribution scopes** across three families — content (article,
topic, category, section, taxonomy, terminology), product (feature, interface,
design, data, AI-readability, infrastructure) and the commons (docs, community,
governance) — with where each lives, who may merge it, and what "done" means.

Two good ways in:

- **Translation** is the largest open need — see the dashboard's Outstanding column.
- **Coverage gaps** ("this category has no article on X") are a first-class
  contribution; you do not have to write it to report it.

## Who can review

Anyone may suggest or submit. Only a name listed in
[`scripts/health/reviewers.txt`](scripts/health/reviewers.txt) may sign off an article
— that name is shown to every visitor as the human behind the review. Sensitive
(3R+1) content can never be published without one. See that file for how reviewers
are onboarded.

## Licensing — what you grant

This repository is **dual-licensed**, and contributing means agreeing to both:

| What | Licence |
| --- | --- |
| Article content under `knowledge/` | [CC BY-SA 4.0](LICENSE-CONTENT) |
| Site source code | [MIT](LICENSE) |

**ShareAlike matters:** anything you contribute to `knowledge/` — and anything anyone
builds on it — stays under CC BY-SA 4.0. You keep authorship credit; you grant everyone
the right to reuse and adapt with attribution. Do not paste in text you did not write
or that is not compatibly licensed. Quoting a statute or an official source is fine and
expected — cite it.

## Local checks before a PR

```bash
npm run build              # must succeed
npm run health             # resolve ERROR findings
```
