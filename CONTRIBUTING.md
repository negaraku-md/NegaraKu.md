# Contributing to negaraku.md

Thank you for helping build a trustworthy, open knowledge base about Malaysia. Contributions
happen through GitHub pull requests.

## Adding or editing an article

1. Content lives in `knowledge/<category>/<slug>.md`. The folder **is** the category —
   see the list in `src/lib/categories.ts`.
2. **The master language is per-article, not site-wide.** Each topic declares its own
   source of truth in `masterLanguage` (`ms`, `en` or `zh`). The master file is the bare
   `<slug>.md`; the two translations are siblings named `<slug>.en.md` / `<slug>.zh.md` /
   `<slug>.ms.md` (whichever two are not the master), all sharing the same `slug` and
   `topicId`. When you edit a page on the site, the "Edit on GitHub" link already points
   at the correct file for that language.
3. **Easiest path: copy an existing published article in the same category and edit it.**
   That gives you a correct, complete frontmatter block to start from. The schema is
   validated by `src/content.config.ts`; the fields you must get right are:

```yaml
---
topicId: "MY-LAW-0042"          # stable id, shared by all 3 languages of a topic
title: "Competition Act 2010 and the MyCC"
seoTitle: "Competition Act 2010 Malaysia: Prohibitions & Enforcement"  # optional
slug: "competition-act-2010"    # shared across languages
category: "law"                 # must match the folder name
subcategory: ["competition"]    # topic tag(s); a topic = category + subcategory
summary: "One-sentence description shown in cards and search."
tier: "2"                        # 1 (core) … 4 (niche) | S (sensitive)
mode: "practical"                # practical | narrative
contentType: "law"               # guide | faq | law | agency | … (see schema)
sensitivity: "none"              # none | race | religion | royalty | constitution | …
answer: "The lead answer, 2–4 sentences."   # three-layer reading model
keyTakeaways: ["…", "…"]
appliesTo: "Who this is for."
faq:
  - q: "A common question?"
    a: "A sourced answer."
lang: "en"                       # this file's language: ms | en | zh
masterLanguage: "en"             # the topic's source-of-truth language
status: "draft"                  # draft → in-review → reviewed → published (see lifecycle)
aiAssisted: true                 # disclose AI drafting (default true)
reviewer: null                   # a GitHub handle from reviewers.txt, once signed off
version: "0.1"
updated: 2026-08-08
sources:                         # required beyond draft; keep titles/URLs untranslated
  - title: "Source title"
    url: "https://…"
    publisher: "Publisher"
keywords: ["Competition Act 2010", "MyCC"]   # untranslated; aids search
related: ["consumer-protection-act"]          # canonical slugs → graph edges
---
```

   Do **not** hand-set `sourceContentHash` or `translationStatus` — those are maintained
   by `scripts/translation-sync.mjs` (run `npm run translate:stamp` after a translation
   lands; it records the master's hash and marks the translation `in-sync`).

4. Write clear, sourced prose in Markdown. Cite reputable sources for every factual
   claim. Run `npm run health` to check your article before opening a PR.

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
