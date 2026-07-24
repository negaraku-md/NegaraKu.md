# Contributor module — who can do what

Everyone who improves negaraku.md is a contributor, including a reader who only
reports a wrong number. This defines the roles, what each may do, and what "done"
looks like for each kind of task.

Two things govern everything below:

- **The green badge is a promise.** A named reviewer on an article tells every
  visitor that a human read it and stands behind it. Only names in
  [`scripts/health/reviewers.txt`](../scripts/health/reviewers.txt) may make that
  claim, and the build fails if anyone else tries.
- **3R+1 is a hard gate.** Race, religion, royalty and constitution content can
  never be published without a listed reviewer. No automation, no exceptions.

---

## Roles

| Role | How you get here | Needs a GitHub account? |
| --- | --- | --- |
| **Visitor** | Just reading | No |
| **Suggester** | Filed one issue (Report an error / Suggest an improvement) | Yes |
| **Contributor** | Landed one merged PR | Yes |
| **Reviewer** | Nominated by PR, meets the four criteria in `reviewers.txt` | Yes |
| **Maintainer** | Holds repo write access | Yes |

Roles are cumulative — a Reviewer can still do everything a Contributor can.

## Capability matrix

| Capability | Visitor | Suggester | Contributor | Reviewer | Maintainer |
| --- | :-: | :-: | :-: | :-: | :-: |
| Read everything, incl. raw Markdown | ✅ | ✅ | ✅ | ✅ | ✅ |
| Report an error / suggest an improvement | ✅ | ✅ | ✅ | ✅ | ✅ |
| Request a new topic | ✅ | ✅ | ✅ | ✅ | ✅ |
| Edit prose, fix links, add examples (PR) | — | ✅ | ✅ | ✅ | ✅ |
| Add or strengthen sources | — | ✅ | ✅ | ✅ | ✅ |
| Translate, or improve a translation | — | ✅ | ✅ | ✅ | ✅ |
| Add terms to the glossary / termbase | — | ✅ | ✅ | ✅ | ✅ |
| Write a new article (to the standard) | — | ✅ | ✅ | ✅ | ✅ |
| Pick up a `needs-update` article | — | ✅ | ✅ | ✅ | ✅ |
| Bump `version` + add a `revisions[]` entry | — | ✅ | ✅ | ✅ | ✅ |
| **Set `reviewer:` / claim human review** | — | — | — | ✅ | ✅ |
| **Move an article to `published`** | — | — | — | ✅ | ✅ |
| **Publish 3R+1 sensitive content** | — | — | — | ✅ | ✅ |
| **Move an article to `archived`** | — | — | — | — | ✅ |
| Add/remove a name in `reviewers.txt` | — | — | — | — | ✅ |
| Merge PRs | — | — | — | — | ✅ |

Anyone may *propose* a restricted change in a PR — the restriction is on who may
**merge** it.

---

## Contribution scopes

Articles are the most visible surface, not the only one. Each scope below is a real
place to contribute, with where it lives and who may merge changes to it.

Label issues and PRs with the scope (`scope:article`, `scope:category`, …) so work
can be found by the kind of person who wants to do it.

### A. Content — the knowledge itself

| Scope | Covers | Lives in |
| --- | --- | --- |
| **`scope:article`** | One page: facts, sources, clarity, translations, freshness | `knowledge/**` |
| **`scope:topic`** | A cluster of articles: what belongs in it, what is missing, which article is the way in, when to split or merge | `subcategory` fields + `src/lib/subcategories.ts` |
| **`scope:category`** | A subject area: its name, blurb, icon, which topics sit in it, and its landing page | `src/lib/categories.ts` + `src/pages/[category]` |
| **`scope:section`** | The three pillars — Understand / Living / Doing Business: framing, tagline, which categories belong, and the "start here" path | `PILLARS` in `src/lib/categories.ts` |
| **`scope:taxonomy`** | How knowledge connects: graph edges, `relations`, `related`, entities, and the rules for choosing them | `relations`/`related` fields, `scripts/build-graph.mjs` |
| **`scope:terminology`** | The MS and ZH termbases, term rulings, consistency across 900+ files | `docs/plan/GLOSSARY-*.md` |

**Coverage work is a first-class contribution.** "This category has no article on X"
is as valuable as writing X — it is how the corpus finds its own gaps.

### B. Product — the vehicle

| Scope | Covers | Lives in |
| --- | --- | --- |
| **`scope:feature`** | Site capabilities and tools: search, graph, map, explore, compliance calendar, converters, checklists | `src/pages/**`, `src/components/**` |
| **`scope:interface`** | Reader UX and **all three languages of UI copy**, navigation, reading settings | `src/lib/i18n.ts`, `src/lib/nav.ts`, components |
| **`scope:design`** | Visual work **within the locked 1company brand** (true black, gold `#FFC000`, Montserrat/Lato) | `src/styles/**`, `scripts/build-og.mjs` |
| **`scope:data`** | Curated datasets behind the hubs — states, companies, terminology, stats | `src/lib/states.ts`, `companies.ts`, `terminology.ts` |
| **`scope:ai`** | Machine readability: `llms.txt`, raw Markdown endpoints, structured data, the MCP server, AEO/GEO | `src/lib/llms.ts`, `raw.ts`, `seo.ts`, `src/pages/llms*.ts` |
| **`scope:infra`** | Build pipeline, CI, deploy, performance, **accessibility**, the health scanner | `scripts/**`, `.github/workflows/**` |

### C. Project — the commons

| Scope | Covers | Lives in |
| --- | --- | --- |
| **`scope:docs`** | Contributor and editorial documentation, onboarding | `docs/**`, `CONTRIBUTING.md` |
| **`scope:community`** | Triage, deduping issues, answering questions, welcoming newcomers, outreach | Issues / Discussions |
| **`scope:governance`** | Editorial guidelines, translation spec, reviewer criteria, the 3R+1 policy itself | `docs/editorial-guidelines.md`, `reviewers.txt` |

### Who may merge, by scope

Most scopes follow the normal rule: anyone proposes, a maintainer merges. Three carry
extra weight:

- **`scope:governance`** — changing the editorial rules or the 3R+1 policy is a
  maintainer decision, and reviewer-list changes need the `reviewers.txt` process.
- **`scope:design`** — the 1company brand is locked. Propose within it; do not
  restyle the wordmark, palette or typefaces.
- **`scope:ai`** — changes here affect how every AI system reads the corpus. Correctness
  matters more than cleverness.

### Open design work

These are unresolved and genuinely open to proposals:

| Where | Question | Scope |
| --- | --- | --- |
| Article page | How should **Related Knowledge** be chosen and ordered? | `scope:taxonomy` |
| Category page | "What do you want to do?" — task-oriented entry | `scope:category` |
| Category page | "Quick answers" — the short-question layer | `scope:category` |
| Category page | "Tools & checklists" | `scope:category` + `scope:feature` |
| Section page | "Start here" — the way into a pillar | `scope:section` |
| Article page | The 👍/👎 vote currently writes only to `localStorage` — give it a real destination or remove it | `scope:feature` |

---

## The task catalogue

The most common tasks in detail. These sit mostly in `scope:article`, plus
terminology and code — the other scopes above are newer ground and deliberately
less prescribed, because how to do them well is still being worked out.

### 1. Feedback — report a problem
**Who:** anyone, no account needed to read; a GitHub account to file.
**How:** the buttons at the foot of every article. They prefill an issue with the
article's Topic ID, version, language and path.
**What happens:** a `correction` or `improvement` issue automatically flips that
article to `needs-update`, so every reader sees it is under question and it lands in
the dashboard's Outstanding queue.
**Done when:** the issue names *what* is wrong and, ideally, *what it should say*
with a source.

### 2. Fix a fact
**Done when:** the correction is backed by a **primary** source (the Act, the
regulator's own page — not a blog), `version` is bumped, and a `revisions[]` entry
records the change with you as `contributor`.

### 3. Strengthen sourcing
Adding citations to a thin article is one of the highest-value contributions here,
because nothing may leave `draft` without sources.
**Done when:** every factual claim traces to an official source; no invented figures,
no deep links that might rot.

### 4. Translate
The largest open need — see the dashboard's Outstanding column.
**Done when:** the translation follows [`TRANSLATION-SPEC.md`](TRANSLATION-SPEC.md),
uses the termbase ([MS](plan/GLOSSARY-MS.md) / [ZH](plan/GLOSSARY-ZH.md)), and
preserves structure exactly — same headings, list items, tables and FAQ count.

> **Never silently fix the master while translating.** If a sentence looks wrong,
> translate it faithfully and file a correction issue. A translator who quietly
> improves things makes the two languages disagree, and nobody finds out.

### 5. Maintain freshness
Pick up an article showing `needs-update` — either a reader reported it, or its
`reviewDue` passed.
**Done when:** every figure is re-verified against source, `reviewDue` is moved
forward, `version` bumped, `revisions[]` records what changed and why.

### 6. Write a new article
Follow the article standard end to end: search recon first, opportunity scoring,
headline work, brief, research, draft to tier depth, claim-to-source mapping.
**Done when:** it is cited, tier-honest, and left at `status: draft` with
`reviewer: null` — you do not review your own work.

### 7. Improve the termbase
**Done when:** the term has one agreed rendering; if it collides with existing usage,
the ruling and the reason are recorded in the glossary file.

### 8. Code
Site features, build scripts, accessibility, performance.
**Done when:** `npm run build` and `npm run health` both pass.

### 9. Review (Reviewers only)
**Done when:** you have actually read it, checked claims against sources, and are
willing to have your name shown to every visitor as the human behind it. If you are
not willing, do not sign it. Reviewing is **scoped** — sign off only in areas where
you have real footing.

---

## Rules that bind everyone

1. **Never send a published article back to `draft`.** Use `needs-update` /
   `in-update`; the reader keeps seeing the current version while you work.
2. **Never claim a review that did not happen.** AI-assisted drafts stay
   `status: draft`, `reviewer: null`. The badge is the product.
3. **Cite primary sources.** Secondary coverage is a lead, not evidence.
4. **Neutral and descriptive on sensitive topics**, always.
5. **Credit is shared.** Add the person who reported the problem as `contributor`
   in `revisions[]`, even when you wrote the fix.
6. **Licence:** content contributions are CC BY-SA 4.0, code MIT. Do not paste in
   text you did not write or that is not compatibly licensed.
