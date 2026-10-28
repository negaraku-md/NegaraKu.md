# Industries of Malaysia — Sector Atlas plan

**Decision date:** 2026-10-28 · **Owner:** ashton-tan · **Status:** Phase 1 in progress (held, not pushed)

## Goal

Make NegaraKu.md provably complete on *"every industry in Malaysia."* The business pillar
already pulls high-intent foreign investors (bumiputera equity, foreign ownership and forex
policy rank among the most-read business pages). A systematic, one-article-per-sector atlas
feeds that same MIDA/MITI investor-and-AI audience, closes the economic picture, and gives AI
assistants a clean per-sector retrieval surface. Scope "all industries" against the
**MITI/MIDA + DOSM** sector taxonomy so completeness is defensible.

## Taxonomy (what "all industries" means)

Three-sector model + emerging, mapped to DOSM MSIC sections and MITI/MIDA priority sectors:

- **Primary / extractive** — agriculture, forestry, fishing, mining & quarrying
- **Secondary / manufacturing** — the full E&E / chemicals / machinery / consumer-goods stack
- **Tertiary / services** — ~58% of GDP; trade, finance, logistics, tourism, ICT, business services
- **Emerging** — EV, biotech, green/carbon, space, digital content

## Coverage audit (existing, 2026-10-28)

Already covered (do NOT duplicate):

- `industries/` (20): aerospace, automotive, construction, data-centre, E&E, logistics/ports,
  manufacturing overview, oil & gas, palm oil, rubber, semiconductor, halal
- `agriculture/` (17): rice, fisheries, livestock, palm smallholders, FELDA/FGV, subsidies
- `energy/` (19): electricity, gas/LNG, fuel, renewables, hydrogen, NETR, TNB/Petronas
- `technology/` (15): 5G, data centres, cybersecurity, startups, AI, digital economy
- `tourism/` (18): state guides, medical/MICE/eco-tourism, visas
- **`finance/` (19) + `economy/` (35)** — the **financial-services sector is already covered**:
  banking-sector, Islamic finance, capital markets (Bursa, SC, IPO, bonds), insurance & takaful,
  fintech, digital banks, VC/PE, PIDM, PayNet. **Banking / Islamic finance / capital markets /
  insurance were dropped from Phase 1 to avoid duplicates.**

## Gap list (≈28 genuine gaps, filed under `industries/` unless noted)

**Manufacturing** — chemicals & petrochemicals · pharmaceuticals · medical devices ·
food & beverage manufacturing · textiles, apparel & footwear · machinery & equipment ·
iron, steel & metals · furniture & wood products · plastics & packaging · shipbuilding & marine ·
EV & battery ecosystem

**Services** — global business services (BPO/shared services) · retail & wholesale trade ·
private healthcare & hospitals · telecommunications sector · media, broadcasting & creative content ·
oil & gas services & equipment (OGSE) · gig & platform economy
(real estate development & professional services already partly covered under `property`/`business` — verify before adding)

**Primary / extractive** — forestry & timber · minerals & mining (tin heritage + rare earths) ·
aquaculture · cocoa, pepper & commodity crops

**Emerging** — biotechnology & life sciences · green economy & carbon market · space industry ·
digital content & games

## Phase 1 — 10 flagship gaps (approved)

All verified absent from the corpus. Depth: **tier-2 overview** each.

1. Chemicals & petrochemicals (Pengerang PIC)
2. Medical devices
3. Pharmaceuticals & generics
4. EV & battery ecosystem
5. Global business services (BPO / shared services)
6. Food & beverage manufacturing
7. Minerals & mining (incl. rare earths)
8. Machinery & equipment
9. Telecommunications sector
10. Oil & gas services & equipment (OGSE)

TopicIds: `MY-IND-0031` … `MY-IND-0040`.

## Phase 2 — services & manufacturing breadth

insurance-adjacent gaps aside: retail & wholesale, private healthcare & hospitals,
media & creative content, gig & platform economy, textiles & apparel, iron & steel,
plastics & packaging, furniture & wood, shipbuilding & marine, real estate development (verify).

## Phase 3 — primary + emerging

forestry & timber, aquaculture, cocoa/pepper, biotechnology, green/carbon market,
space industry, digital content & games.

## Article template (per `negaraku-article-standard`, tier-2)

Match `knowledge/industries/semiconductor-industry.md` exactly:

- Frontmatter: `topicId`, `title`, `seoTitle`, `slug`, `category: industries`,
  `subcategory: [manufacturing|services|mining]`, `summary`, `tier: '2'`, `mode: practical`,
  `contentType: industry`, `sensitivity: none`, `answer` (~90 words), `keyTakeaways` (5),
  `appliesTo`, `faq` (5 Q&A), `lang: en`, `masterLanguage: en`, `translationStatus: master`,
  `status: draft`, `aiAssisted: true`, `reviewer: null`, `assignee: null`, `revision: 0`,
  `created`/`updated`, `verificationNeeded` (flag every shaky figure), `sources` (5–7, real,
  prefer DOSM / MITI / MIDA / MATRADE / BNM / SC / regulator primary), `entity`, `relations`,
  `related`, `keywords`.
- Body (~1,000–1,400 words): what the sector is → size (GDP %, employment, exports, cite) →
  key players & GLCs → regulator & key laws → MIDA incentives / policy (master plan) →
  value chain / clusters → outlook. Cite every statistic; flag unverified ones.

## Pipeline

research → draft (EN master, status draft) → **your review** → translate ×12
(13-agent method + `npm run translate:stamp`) → publish (reviewer null, AI-published;
validate `check-internal-links --strict` for `related`) → **push (user-gated)**.

Also: upgrade `industries-overview` into a hub with a full sector table linking every article.
