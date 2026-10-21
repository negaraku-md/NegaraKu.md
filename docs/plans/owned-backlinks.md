# Owned-property backlinks — Tier-1 off-page push

**Why:** per the 2026-09-29 AI-citation diagnosis, on-page GEO is best-in-class; the remaining
gaps are off-page — **third-party citations + domain authority**. Backlinks from properties you
already control are the safest, highest-ROI first move (earned/owned, zero spam risk). Principle:
**earned/editorial links only** — never bought links, link farms, or directory spam.

## Status (audited 2026-10-21)

| Property | Backlink to negaraku.md | Notes |
|---|---|---|
| **GitHub repo** (negaraku-md/NegaraKu.md) | ✅ Website field = `https://negaraku.md` + 14 topics | GitHub links are `nofollow`, but drive discovery + referral traffic |
| **GitHub README** | ✅ now prominent (live site / HF dataset / Wikidata) | updated this pass (was stale: said 3 langs, now 13) |
| **Hugging Face dataset card** | ✅ links back multiple times | high-DA domain; already in `export-hf-dataset.mjs` |
| **Wikidata Q141449495** | ✅ official website (P856) + described-at-URL (P973) | enriched this session |
| **1company.com** (sponsor) | ❌ none found in HTML | **highest-value gap** — see below |
| **syarikat.ai** | ❌ none found in HTML | user-side — see below |

## 1. HIGHEST VALUE — reciprocal dofollow from 1company.com + syarikat.ai (YOUR side)

The site says "Sponsored by 1company" but 1company.com does **not** link back. A **dofollow** link
from the sponsor's own domain is the single best owned backlink available (reciprocates the
relationship, passes real authority). Same for syarikat.ai.

**Ready-to-paste (footer or a "Projects / Community" section), dofollow (no `rel="nofollow"`):**

> 1company proudly sponsors **[NegaraKu.md](https://negaraku.md)** — an open-source, AI-friendly
> knowledge base about Malaysia, in 13 languages.

Placement: a persistent site-wide footer link is best (every page → one strong sitewide signal).
These sites are managed outside this repo (1company.com's codebase isn't here; syarikat.ai is
Odoo/DB-driven), so add via their own CMS/footer template. Confirm the link is **dofollow**.

## 2. Awesome-list PRs — real editorial dofollow links

Modest-DA but legitimate and relevant. **Draft entries ready; submit on your go-ahead** (these are
public PRs to third-party repos under your GitHub account).

- **renyi/awesome-malaysia** (⭐20) & **jerrychong25/awesome-malaysia** (⭐18) — Malaysian resources.
  Draft entry:
  > - [NegaraKu.md](https://negaraku.md) — open-source, AI-friendly knowledge base about Malaysia
  >   (business, law, culture, living), cited Markdown in 13 languages; also an
  >   [open dataset](https://huggingface.co/datasets/negaraku-md/negaraku-md) (CC BY-SA 4.0).
- **awesome-public-datasets** / **awesome-open-data** (high-DA) — pitch the **HF dataset** under
  "Natural Language" / "Education". Stricter inclusion bar; the 4,292-row CC BY-SA corpus qualifies.
  Draft entry:
  > - [NegaraKu.md — Malaysia Knowledge Base](https://huggingface.co/datasets/negaraku-md/negaraku-md) —
  >   cited, multilingual Markdown corpus about Malaysia (business/law/culture/living), CC BY-SA 4.0.

## 3. Done this pass (held for push)
- README: 13 languages + prominent live-site / HF-dataset / Wikidata links.

## Next actions
- **You:** add the dofollow reciprocal link to 1company.com (and syarikat.ai) footers.
- **Me, on your word:** fork + open the awesome-list PRs above; optionally extend the poster engine
  to syndicate flagship articles (Medium/dev.to) with canonical links back (Tier-2, separate task).
