# Wikipedia + Wikidata Phase 2b — the COI-safe citation & entity playbook

**Status:** playbook (user-executed; account-based edits need your login + COI disclosure).
**Why this matters:** per the 2026-09-29 AI-citation diagnosis, on-page GEO is already
best-in-class; the remaining gaps are all **off-page** — third-party citations, domain
authority + time, head-term consolidation. Wikipedia/Wikidata is the #1 feeder of **both**
Google Knowledge Panels **and** LLM answers. Done right it compounds SEO + AI at once.

---

## The hard rule (read first)
**Never mass-add `negaraku.md` links across Wikipedia.** External-link spam / COI editing
gets reverted, and repeated abuse **blacklists the domain** — which would hurt *every*
channel. There is no shortcut here. Everything below is deliberately slow, sparse, and
disclosed. If in doubt, don't link — improve the article with primary sources instead.

Also: NegaraKu.md is a **tertiary/aggregator** source. Wikipedia's sourcing guidelines
prefer primary and independent secondary sources, so a direct citation to NegaraKu is often
**not** the best edit. The highest-value, lowest-risk contribution is usually to add the
**primary source NegaraKu already compiled** (DOSM, AGC, gazettes), not a link to NegaraKu.

---

## Three tiers, lowest-risk first

### Tier A — Wikidata enrichment (low risk, do first, mostly already done)
Wikidata is structured data, not prose — far more tolerant than Wikipedia, and it feeds
Knowledge Graph + LLMs directly.
- ✅ **Done:** NegaraKu.md's own item **Q141449495** (6 statements) + ~320 article QIDs wired
  into `about.sameAs`, now including the religion set (Q2344682 / Q4984224 / Q5110544).
- **To add to Q141449495** (I can drive this in your logged-in Wikidata session):
  - `logo image` (P154) → upload/point to the brand logo on Wikimedia Commons
  - `described at URL` (P973) → `https://negaraku.md/en/about`
  - multilingual **labels + descriptions** (ms/zh/ta/ar/… "open knowledge base about Malaysia")
  - `Wikimedia Commons category` (P373) if a logo category is created
- **"described at URL" (P973) on Malaysian entity items** — for entities where NegaraKu has
  the best plain-language explainer, add P973 → the NegaraKu article URL on that entity's
  Wikidata item. This is a *structured* reference, not prose spam, and is the safest way to
  associate the domain with an entity. Do sparingly, only where genuinely useful.

### Tier B — improve Wikipedia articles with PRIMARY sources (no self-link)
Build topical goodwill and presence without any COI link.
- Pick Malaysia articles that are **thin or outdated** on topics NegaraKu covers deeply
  (tax, business structures, employment, compliance). Candidates below.
- Add a well-sourced fact or fix, citing the **primary source** (DOSM table, AGC statute,
  gazette) — the same sources NegaraKu's article already lists. NegaraKu is your research
  map; the citation is the primary doc.
- This earns editor trust and makes any later, sparing NegaraKu citation credible.

### Tier C — cite NegaraKu.md itself (rare, Talk-page-first, disclosed)
Only where NegaraKu is genuinely the **best available** source (e.g. a synthesized explainer
with no equivalent elsewhere) AND a primary source won't do:
1. **Disclose your COI** on your Wikipedia user page and on the article Talk page
   (`{{connected contributor}}` / a plain statement: "I'm connected to negaraku.md").
2. **Propose on the Talk page**, don't edit the article directly. Explain why it's the best
   source for that specific claim. Let an independent editor add it.
3. **One at a time, spaced out.** Never batch. Never across many articles in a short window.

---

## Prioritized target list (starting points — verify each is actually thin before editing)
Pick from where NegaraKu has uniquely strong, synthesized coverage and EN Wikipedia is weak:

**Business / legal (strongest NegaraKu pillar):**
- *Companies Act 2016 (Malaysia)* — statute coverage is sparse on Wikidata/Wikipedia
- *Sales and Service Tax (Malaysia)* / *Goods and Services Tax (Malaysia)* — SST hub
- *Employment Act 1955* — employment hub
- *Limited liability partnership* (Malaysia section) — LLP explainers
- *Sdn Bhd / private limited company in Malaysia*

**Society / culture (new, well-sourced):**
- *Religion in Malaysia* (Q4393020) — the new religion set gives neutral, DOSM-cited overviews
- *Hinduism in Malaysia* / *Buddhism in Malaysia* / *Christianity in Malaysia* — now QID-linked
- *Demographics of Malaysia* — 2020 census figures

**For each:** check it's genuinely thin/outdated first → Tier B (add a primary-sourced fact)
→ only then consider Tier C for a specific claim NegaraKu uniquely explains.

---

## What NOT to do
- ❌ A bot or batch that adds negaraku.md links
- ❌ Editing many articles from one account in a short window
- ❌ Citing NegaraKu where a primary source exists
- ❌ Creating a Wikipedia *article about NegaraKu.md* — it does not meet notability
  (no significant independent coverage yet); it would be deleted and flagged promotional.
  (Wikidata item ✓ is fine; a Wikipedia article ✗ is not.)

---

## What I can do vs what's yours
- **I can (code/structured, no Wikipedia account):** keep article QIDs current (done this
  round); draft Talk-page proposals and COI disclosures for you to post; prepare the
  Wikidata statements to add to Q141449495 and entity items.
- **Yours (account + judgement):** all actual Wikipedia/Wikidata edits under your account,
  with COI disclosure. I can *drive* your logged-in Wikidata session for the structured
  Tier-A additions if you want (as done for Q141449495's original statements).

**Companion:** the owned-backlink Tier 1 (1company.com + syarikat.ai dofollow links, HF
dataset card backlink, GitHub repo Website field + awesome-lists) is a separate, lower-risk
reach lever tracked in `negaraku-distribution-channels` memory — often higher ROI than
Wikipedia prose and safe to do on properties you control.
