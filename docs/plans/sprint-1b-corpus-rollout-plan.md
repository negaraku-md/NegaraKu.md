# Sprint 1b → corpus rollout: framework tagging for all published articles

**Status:** DRAFT for approval. Held, not pushed. No article is tagged beyond the
32-family pilot until a wave below is approved.
**Prereq met:** schema + consistency validator + warn-level lint are built, proven,
and freshness-neutral (see `sprint-1b-framework-manifest.md`).

## Where the pilot leaves us

- **Infra live (uncommitted, held):** `framework` enum in `content.config.ts`
  (outside `TRANSLATED_FIELDS` → tagging is freshness-neutral); hard consistency
  validator in `validate-frontmatter.mjs`; warn-level editorial lint in the health
  scan (zero-source data/rules, zero-link journey-hub).
- **32 families tagged** across all 8 frameworks and all 3 pillars. First-pass
  clean-fit ≈ 90%; the reader-test isolated 3 real mismatches (fixed) and 2
  gap-filling exemplars were added (living×decision = `pre-university-routes`,
  food×history-culture = `kopitiam-mamak-culture`).
- **Corpus:** 1,356 master families — **1,328 published, 28 archived.**
  Already tagged: 32. **Remaining to tag: ~1,296 published families** (archived are
  skipped). Each family = 1 master + up to 12 locale variants, so ~1,296 families ≈
  ~16,000 files, all **metadata-only, zero translation debt** when done correctly.

## The core problem, and the one lever that makes it tractable

Hand-reading 1,356 families × 13 languages is infeasible, and unnecessary.
`contentType` is **already** a strong framework predictor, and articles cluster by
category (a whole "…-visitor-guide" set shares a job; a whole "…-food" dish set
shares a job). So the rollout is **not** "read every file." It is:

> **auto-suggest from `contentType` → confirm the dominant framework per category
> cluster by sampling → tag the cluster metadata-only → gate (validator + freshness
> + lint) → reader-test the borderlines only.**

### contentType distribution (whole corpus)

| contentType | n | Rollout confidence |
|---|---:|---|
| **guide** | 740 | **Low — reader-job bucket.** Spans explainer / how-to / journey-hub / rules / history-culture. The irreducible core (55% of corpus). |
| agency | 111 | Medium — mostly **profile** ("what X is/does"); some explainer. |
| law | 78 | Medium — **rules** ("does this apply to me") vs **data-reference** ("the statute record"), per `companies-act-2016` → data-reference. |
| faq | 73 | Medium-high — usually **explainer** (Q&A define/explain). |
| place | 70 | **High → profile.** |
| data | 58 | **High → data-reference.** |
| industry | 58 | Medium — sector pages: **profile** or **data-reference**. |
| glossary | 42 | **High → explainer** (NOT data-reference — pilot lesson). |
| comparison | 40 | **High → decision** — but watch the explainer-that-compares trap (`freehold-leasehold` is explainer, not decision). |
| company | 40 | **High → profile.** |
| timeline | 11 | **High → history-culture** (dated sub-type). |
| checklist | 7 | **High → how-to.** |
| news | 3 | Case-by-case. |
| (none) | 25 | Must read — no signal. |

## Wave A — DONE (2026-11-09, held)

250 families tagged (3,250 files), metadata-only — validator 0 errors,
translation-sync 0 stale, lint 0 framework-signal warnings. Method as planned:
reliable types (place/company→profile, data→data-reference, glossary→explainer,
checklist→how-to) bulk-tagged + sample-verified; the two ⚠ flaky types
reader-confirmed per family.

**Key finding — `comparison` is a weak decision predictor.** Only **15 of 37**
`comparison` families are genuine decisions (the reader picks one option *for
themselves*: sole-prop-vs-sdn, share-vs-asset-sale, which work pass, which
dispute forum). The other 22 explain a distinction the reader does **not** choose
between — EPF vs SOCSO, Rulers vs Governors, e-Invoice vs tax-invoice, assessment
vs quit-rent — which is **explainer**, not decision. (3 regional figure-tables →
data-reference; paid-up-capital → rules; big-banks → profile.) **Rollout rule:**
default `comparison` → explainer and promote to decision only when the article's
job is "pick one for yourself," not "understand how two things differ."
`timeline` held up better — 9 of 11 genuine dated history; the exceptions were a
procedure (changing-auditors → how-to) and a deadline calendar (company-tax-
calendar → data-reference).

Corpus now: **282 families tagged** (32 pilot + 250 Wave A); **1,046 untagged**
remain (Wave B 297 + Wave C 749). Preview regenerated accordingly.

## Wave B — DONE (2026-11-09, held)

297 families tagged, metadata-only — validator 0 errors, freshness 0 stale, lint
0 framework-signal warnings. Two batches:
- **Batch 1 — agency (96):** ~90% named-entity **profile** (89), 7 reader-confirmed
  exceptions (court-hierarchy & public-healthcare → explainer, MBRS-filing → how-to).
- **Batch 2 — faq/law/industry (201):** classified by a **17-agent workflow**, each
  reading ~12 articles cold by reader-job (ignoring contentType), reviewed before
  applying. Distribution: explainer 84, profile 51 (the industries/ atlas), rules
  44, how-to 10, history-culture 7, data-reference 5.

**Finding — the `law` 3-way split is reliable by reader-job:** obligation statutes
(AMLA, OSHA, PDPA) → rules; constitutional provisions / legal concepts (Articles
152/153/3, fundamental-liberties) → explainer; bare statute records (contracts-act,
employment-act-1955, income-tax-act, penal-code) → data-reference (the
companies-act-2016 pattern). **Method finding:** beyond Wave A's narrow types and
named-entity profiles, `contentType` is too weak to auto-apply — the workflow
(one agent per small batch, read cold) is the right tool for Wave C.

Corpus now: **579 tagged**; **749 untagged** (all Wave C).

## Rollout waves

**Wave A — high-confidence narrow types (~268 families).**
`place`, `company`, `data`, `glossary`, `comparison`, `timeline`, `checklist`.
Auto-tag from the map, then **sample-verify ~10% per contentType** (not every file).
Expect ≥95% to hold. Fastest ROI; proves the auto-map at scale.

**Wave B — medium types (~320 families).**
`agency`, `law`, `faq`, `industry`, `(none)`. Light per-cluster read: confirm each
category's dominant job, split the mixed ones (law → rules vs data-reference). Tag
by cluster.

**Wave C — the `guide` bucket (~740 families).**
The real work. Classify by **category cluster**, not per file: e.g. all
`…-visitor-guide` → journey-hub or how-to; all single-dish `food-lifestyle/*` →
explainer (bak-kut-teh precedent); all `settling-in/registering-*` → how-to; all
`malaysia/*` heritage → history-culture/explainer. Read 2–3 representatives per
cluster, set the cluster default, tag, then reader-test the outliers. Break Wave C
into category-sized batches (≈ one category per batch) so each is reviewable.

Order: run **A → B → C**, and within each wave batch **by category** so every batch
is independently gated and shown before the next.

## Repeatable per-batch procedure

1. **Auto-suggest** framework from the `contentType` map for the batch's families.
2. **Cluster-read** 2–3 representatives per category; set/confirm the cluster's
   framework by *reader-job* (what the article helps the reader DO), not by title.
3. **Tag metadata-only.** Insert `framework:` **before the 2nd `---`** (inside
   frontmatter) across the master + all variants. ⚠️ **Gotcha:** inserting it
   *after* the 2nd `---` puts it in the body — this silently changes the body hash
   (false "stale") and makes the validator falsely pass (it sees no frontmatter
   field). Always verify placement.
4. **Gate:** `validate-frontmatter.mjs` (expect 0 errors) → `translation-sync.mjs`
   (expect **0 stale**) → `sync.mjs` then health scan (no new framework-signal
   warnings; journey-hub tags must carry ≥3 `related`/`relations` links).
5. **Reader-test the borderlines** (not the whole batch) — one agent per contestable
   article, both lenses (local practitioner + international newcomer), structured
   pass/fail + `better_framework`.
6. **Hold, show the batch, then proceed.** Never push mid-rollout (one push = live
   deploy; batch pushes and watch the final deploy land).

## The three pilot lessons, baked into the rules

- **Glossary entries are explainer-shaped**, not data-reference — the auto-map
  already encodes this.
- **A how-to that defers its steps** to companion articles is really an explainer —
  the how-to tag demands an actually-completable procedure in-article.
- **A journey-hub must route** — the warn-level lint fires on a zero-link hub
  (caught `starting-a-business`); populate `related`/`relations` at tag time.

## Guardrails

- **Freshness-neutral only if truly metadata-only.** Any prose/opening adaptation
  re-stamps that family's translations — keep framework tagging strictly separate
  from prose edits; do prose in its own pass if ever wanted.
- **Sensitive families:** a metadata-only tag changes no content → **no new review.**
  Only a prose edit on a sensitive family needs ashton-tan review.
- **Archived families (28): skip** — they are deduped remnants, not live pages.
- **Honesty over coverage:** never hand-set a framework that contradicts the
  reader-job just to fill a cell. A wrong tag is worse than no tag (v1 is optional).
- **Validator is the hard gate; lint is advisory.** A family may ship with a lint
  warning if an editor judges it correct, but never with a validator error.

## v2 question (separate decision, not part of this rollout)

v1 `framework` is **editorial-only / non-rendering.** Once coverage passes a
threshold (say ≥80% of published families), decide whether to surface it in the UI
— framework filters, per-framework article templates, a "what kind of article this
is" affordance, or AEO/schema hints. That is a distinct design decision to raise
when coverage is there; this plan does not assume it.

## What I need from the user to start

1. **Approve the wave structure** (A→B→C, batch-by-category), or adjust.
2. **Cadence:** one concentrated rollout sprint, or ongoing background batches?
3. **Auto-map trust level for Wave A:** bulk-tag then sample-verify (faster), or
   keep every tag reader-confirmed (slower, maximal confidence)?

Optionally I can build `scripts/suggest-framework.mjs` — prints the contentType→
framework proposal per family/category so each batch starts from a concrete list
instead of a blank sheet. (Build-vs-skip is your call; it's a convenience, not a
dependency.)
