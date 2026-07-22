# Standards Compliance Ledger

Every requirement agreed in the negaraku.md design discussions, with its **real**
implementation status. This file exists so gaps are visible by default rather than
discovered one at a time in review.

**Rules for this file**
1. A requirement is `DONE` only when it is *wired up and rendering*, not when a
   schema field exists.
2. Anything moved to `DEFERRED` must name the decision and who made it.
3. Where a requirement is machine-checkable, it must have a check in
   `scripts/health/scan.py`. Prose standards that nothing enforces get skipped.

Legend — ✅ done · ◐ partial (declared, not wired) · ✗ not built · ⊘ deferred

Last audited: 2026-07-10

---

## 1. Content model & metadata

| Requirement | Status | Note |
| --- | --- | --- |
| `topicId` stable across languages | ✅ | |
| Tier 1–4 + S | ✅ | enforced: `tier-mismatch` check |
| Writing mode (practical / narrative) | ✅ | |
| `contentType` | ✅ | |
| Version + revision history | ✅ | rendered in Layer 3 |
| Reviewer, reviewed date, review due | ✅ | rendered in trust block |
| `sensitivity` (3R+1) | ◐ | badge + banner render; **not enforced at build** |
| AI-assisted disclosure | ✅ | |
| Customer journey stage | ✗ | discussed in CCS; no field |
| Target persona | ✗ | discussed in CCS; no field |
| AI prompt version (draft traceability) | ✗ | discussed; no field |
| Difficulty level | ✗ | existed in old schema, dropped in rewrite |

## 2. Three-layer reading model

| Requirement | Status | Note |
| --- | --- | --- |
| Layer 1 executive answer | ✅ | |
| Key takeaways | ✅ | |
| Applies-to | ✅ | |
| Layer 2 body | ✅ | |
| Layer 3 sources + change history | ✅ | |
| Structured definitions | ✗ | prose only, not a structured surface |
| Expert insight block | ✗ | discussed as an E-E-A-T signal |
| Statistics with citation | ✗ | |

## 3. SEO / AEO / GEO

| Requirement | Status | Note |
| --- | --- | --- |
| hreflang, canonical | ✅ | |
| JSON-LD Article, Breadcrumb, Organization | ✅ | |
| JSON-LD FAQPage | ✅ | |
| Localized keywords | ✅ | |
| Year in search title, auto-generated | ✅ | budget-guarded |
| `seoTitle` variant | ✅ | enforced: `title-too-long` check |
| `socialTitle` variant | ◐ | **field exists, never rendered to `og:title`** |
| AI-summary / email / push title variants | ✗ | |
| Per-language `llms.txt` | ✅ | |
| Raw `.md` endpoints | ✅ | |
| Question-shaped H2s | ◐ | guidance only, unenforced |
| Topic-cluster internal linking | ◐ | `related` + `relations` exist; no cluster view |

## 4. Knowledge graph

| Requirement | Status | Note |
| --- | --- | --- |
| Typed relations in schema | ✅ | |
| Typed relations rendered | ◐ | reference archetype only |
| Graph built from typed relations | ✗ | **`build-graph.mjs` still uses untyped `related`** |
| Affected-content detection on law change | ✗ | the highest-value use; not built |
| Entity pages | ◐ | `entity` field used; no entity index |

## 5. Multilingual

| Requirement | Status | Note |
| --- | --- | --- |
| Master language per topic | ✅ | field + trust block |
| Translation status badge | ✅ | |
| `sourceContentHash` | ◐ | **field exists; no sync script writes or checks it** |
| Stale-translation detection | ✗ | depends on the above |
| Translate only changed sections | ✗ | |
| Localized URL slugs | ✗ | `/ms/perniagaan/...` discussed, not built |
| Terminology library | ✗ | discussed to stop agents diverging on terms |
| Publish a language only after review in that language | ✗ | not enforced |

## 6. Trust & governance

| Requirement | Status | Note |
| --- | --- | --- |
| Trust block on every article | ✅ | |
| Honest AI-draft badge | ✅ | |
| 3R+1 visual gate | ✅ | |
| 3R+1 **build-time** publication block | ✗ | "never auto-publish" is not enforced in code |
| Public corrections log `/corrections` | ✗ | |
| Feedback: helpful vote | ✅ | local only |
| Feedback: report error (separate flow) | ✅ | prefilled GitHub issue |
| Feedback: suggest improvement | ✅ | |
| Feedback: suggest a topic | ✗ | discussed as its own module |
| Feedback lifecycle + statuses | ✗ | |
| Severity model P0–P3 | ✗ | |
| Editorial charter document | ✗ | |

## 7. Information architecture

| Requirement | Status | Note |
| --- | --- | --- |
| 31-category taxonomy | ✅ | 13 live, 17 deferred |
| Category archetypes (6) | ✅ | all routing correctly |
| Sub-topic clusters | ✅ | |
| Cross-cutting content-type filter views | ✗ | `contentType` set; no `/guides`, `/checklists` views |
| Homepage on new taxonomy | ✗ | **still the old shell** |

## 8. UX / platform

| Requirement | Status | Note |
| --- | --- | --- |
| Responsive | ✅ | |
| Zero friction (no login/popup gate) | ✅ | |
| Search scoped to category | ◐ | form posts to `/search`; no scoping |
| Search as primary entry | ✗ | |
| WCAG 2.2 AA audit | ✗ | never run |
| Core Web Vitals measured | ✗ | never measured |
| PWA / offline / Lite view | ⊘ | Phase 3 |
| Save for later, reading progress | ⊘ | Phase 3 |

## 9. Process

| Requirement | Status | Note |
| --- | --- | --- |
| SERP recon before writing | ✅ | in memory standard; **not machine-checkable** |
| Knowledge Opportunity Score ≥85 | ◐ | run manually; not recorded per article |
| 20 headlines + score | ◐ | run manually; not recorded |
| Claim-to-source mapping | ◐ | inline citations; no structured mapping |
| Knowledge Quality Score | ✗ | never computed or stored |
| Human review | ⊘ | Ashton: only 3R+1 mandatory; feedback covers the rest |

---

## Enforced by `scripts/health/scan.py`

- `no-citation` — reviewed article with no sources (ERROR)
- `broken-link` — `related` pointing at a non-existent slug (ERROR)
- `hollow` — under 90 words (WARN)
- `title-too-long` — title over 60 chars with no `seoTitle` (WARN)
- `tier-mismatch` — Tier 1 under 2,000 words (WARN)

## Next checks to add

`sensitive-unreviewed` (ERROR) · `answer-missing` on tiers 1–2 · `answer-length`
outside 40–100 words · `faq-missing` on Tier 1 · `stale-translation` once hashing
lands · `orphan-relation` for `relations.to` pointing nowhere.
