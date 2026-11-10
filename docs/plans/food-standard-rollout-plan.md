# Food Article Standard — rollout plan

Operationalizes **[docs/FOOD-ARTICLE-STANDARD.md](../FOOD-ARTICLE-STANDARD.md)** across the
`knowledge/food-lifestyle/` corpus. Companion to the validator
`scripts/validate-food-standard.mjs`.

Scope: **master** food articles only (bare `<slug>.md`). The `<slug>.<locale>.md`
siblings are translations and inherit every field this plan touches.

---

## 1. Current state (audit, 2026-11-11)

`node scripts/validate-food-standard.mjs --table`

| | masters |
|---|---|
| Total food masters | **154** |
| Fully conformant | **10** (7 original pilots + 3 pilots fixed in this pass) |
| With ≥1 ERROR | **144** |

Violation counts (a file can break more than one rule):

| Rule | What it flags | Count |
|---|---|---|
| **F1** | master missing `foodType` | **147** |
| **F5** | `hero` set but missing `heroKind`/`heroOrigin` | **125** |
| F2 | invalid `foodType` value | 0 |
| F3 | `review[]` on a non-`place` foodType | 0 |
| F4 | `role: cover` inside `images[]` | 0 |
| F6 | `editorial-visit` review without `visitedMonth` | 0 |
| W1/W2/W3 | hero without alt / place without `place:` card / image without explicit kind-origin | 0 |

**Reading of the audit.** The standard was *encoded* (schema in `src/content.config.ts`)
and *piloted* on 7 articles, but never rolled out. The 144 nonconformant masters are the
pre-standard corpus. The problem is almost entirely **two missing-frontmatter rules**
(F1 + F5), not structural breakage:

- No master misclassifies `review[]`, puts a cover in `images[]`, or carries an invalid
  value. The subtle integrity rules (F3/F4/F6) are **already clean** corpus-wide — only
  `hing-kee-bakuteh` uses `review[]`, correctly on a `place`.
- No master beyond the pilots has a populated `images[]` block, so there is **no body-image
  cascade exposure** anywhere yet.

The 147 F1 files split into: **122** that also need hero provenance (F1+F5) and **22** with
no hero at all (F1 only — fastest to clear).

### foodType backlog by subcategory (drives the mapping)

| Subcategory (master) | count | → intended `foodType` |
|---|---|---|
| `restaurants` | 68 | `place` |
| `dishes` | 41 | `dish` |
| `cuisines` / `cuisine` / `masakan` / `regional` | 15 | `cuisine` |
| `ingredients` | 5 | `ingredient` |
| `dining` / `kopitiam` / `heritage` / `festivals` / `ramadan` / `pasar` / `durian` / `drinks` / `retail` / `hiburan` | ~18 | `culture` (most) or `practical` (`alcohol`, dining-rules) |

`contentType` corroborates: 44 of the missing-`foodType` masters already carry
`contentType: "place"` → direct map to `foodType: place`.

---

## 2. Translation-cascade implications (critical)

Confirmed against `scripts/translation-sync.mjs` (`TRANSLATED_FIELDS` + `mediaSignal`).
The freshness hash = body + `{title, summary, answer, keyTakeaways, faq, appliesTo}` +
the **sub-fields of `images[]`/`review[]`** (alt/caption/subject, review subject/flavor/
tradeoffs). Everything else is neutral.

| Fix type | Cascades 13 langs? | Why |
|---|---|---|
| Add `foodType` | **NEUTRAL** | Not in the hash. |
| Add `heroKind` / `heroOrigin` / `heroBranch` / `heroPermissionRef` | **NEUTRAL** | hero\* excluded; §6 says so. |
| Add `heroSubject` / `heroAlt` | **NEUTRAL** | hero\* is not folded into `mediaSignal` (only `images[]` is). |
| Add a `place:` visit card | **NEUTRAL** | Not a hashed field. |
| **Add a new `images[]` block** (alt/caption/subject) | **CASCADES** | `mediaSignal` hashes image alt/caption/subject. |
| **Add a `review[]` block** (place) | **CASCADES** | `mediaSignal` hashes review subject/flavor/tradeoffs. |
| **Rewrite body/title/summary** for template block-order | **CASCADES** | Body + reader-facing frontmatter are hashed. |

**Consequence for sequencing:** the entire F1 + F5 backlog (≈99% of the violations) is
**freshness-neutral** and can be cleared without re-stamping a single translation. The only
cascading work is *optional enrichment* (body images, reviews, template-prose rewrites),
which should be scheduled deliberately and followed by `npm run translate:stamp`.

---

## 3. Prioritized rollout

### Phase 0 — land the validator (no content change)
Wire `scripts/validate-food-standard.mjs` into the gate **after** the backlog is cleared
(see §5), so CI does not turn red on day one. Until then, run it manually.

### Phase 1 — clear F1 (`foodType`), freshness-neutral · ~147 files
Pure metadata. Map from subcategory/contentType per the table in §1.
- **1a** — 44 `contentType: place` + 68 `restaurants` → `foodType: place`.
- **1b** — 41 `dishes` → `dish`; 5 `ingredients` → `ingredient`.
- **1c** — 15 cuisine-family → `cuisine`; ~18 culture/practical (hand-check the
  `dining`/`alcohol` ones: rules-style → `practical`, scene/heritage → `culture`).
- Effort: scriptable suggestion + human confirm. A `suggest-foodtype.mjs` (subcategory →
  foodType map, same shape as the existing `suggest-framework.mjs`) can draft all 147; an
  editor confirms the ~18 ambiguous culture/practical ones. **~0.5–1 day.**

### Phase 2 — clear F5 (hero provenance), freshness-neutral · 122 files
For every master with a `hero`, add `heroKind` + `heroOrigin`.
- `heroOrigin`: derive from `heroCredit`/`heroSource` — Wikimedia/Unsplash/third-party
  photographer → `third-party`; shop-supplied → `owner`; our own shoot → `editorial`.
- `heroKind`: judgement against the claim (§3). **dish/ingredient/cuisine/culture** guides
  whose hero genuinely depicts the subject → `actual`; a **place** cover using a generic
  dish/scene photo → `representative` (this is the common case for the 68 venue articles,
  which mostly use stock/representative covers). This axis needs a human eye but is a
  one-line call per file. **~1–1.5 days.**
- The 22 F1-only (no hero) files skip this phase.

### Phase 3 — place visit cards (W2) + review eligibility · venue articles
For `foodType: place` masters, confirm a `place:` card exists (none are currently flagged,
but re-check after Phase 1 reclassifies 68 venues to `place`). Add `review[]` **only** where
an attributable observation exists (MICHELIN note, named critic, documented editorial
visit) — an award alone does not qualify (§5). **Cascades** — batch per language and stamp.

### Phase 4 — optional enrichment (cascades; schedule deliberately)
Body `images[]`, template-prose block-order rewrites. Do per-article, in a translation
window, then `npm run translate:stamp`. Not required for conformance.

---

## 4. Effort summary

| Phase | Files | Cascade | Effort |
|---|---|---|---|
| 1 — foodType | 147 | neutral | 0.5–1 day (scripted + confirm) |
| 2 — hero provenance | 122 | neutral | 1–1.5 days |
| 3 — place cards / reviews | ~68 | partly cascades | 1–2 days |
| 4 — enrichment | optional | cascades | ongoing |

**Phases 1–2 (the entire ERROR backlog) are freshness-neutral** and clear 144 of 144
nonconformant masters without touching a translation.

---

## 5. Proposed CI wiring (do NOT enable until Phase 1–2 land)

Mirror the `validate-frontmatter` pattern in `package.json`:

```jsonc
// predev / prebuild (report mode is already exit-1 on ERROR):
"health": "... && node scripts/validate-food-standard.mjs"
// or a dedicated CI step:
"validate:food": "node scripts/validate-food-standard.mjs"
```

Keep it **manual** (`node scripts/validate-food-standard.mjs`) until the F1/F5 backlog is
cleared, otherwise the first push goes red. Once green, add it to the predev/prebuild chain
so regressions (a new food master without `foodType`, a cover sneaking into `images[]`,
`review[]` on a dish) fail fast — exactly like the frontmatter validator.

---

## 6. What this pass changed

- Added `scripts/validate-food-standard.mjs` (the audit + gate; `--table` prints the full
  conformance table).
- Fixed 3 pilot masters (freshness-neutral: `foodType` + hero provenance), demonstrating the
  Phase 1+2 fix shape: `rendang`, `satay`, `roti-canai` — all now conformant.
- No translations re-stamped (all edits neutral); `validate-frontmatter` and
  `check-internal-links --strict` stay green.
