# Content Plan — Doing Business in Malaysia

The build plan for one of the three pillars. Topics are **researched, not
invented**: every one earns its place through recon and scoring before it is
written. See `negaraku-article-standard` for how an individual article is produced.

---

## The planning method

Four levels, top down. Each level is only planned once the level above is settled.

```
Level 1  Category          6 categories in this pillar
Level 2  Cluster           5–15 articles each, reader-worded
Level 3  Topic             researched per cluster, not brainstormed
Level 4  Article           KOS score → tier → title → brief → write
```

### Per-category process (run once per category, in order)

1. **SERP recon** on the category head terms — what people actually search, and
   what currently ranks for it.
2. **Competitor topic inventory** — 3E, Mishu, ShineWing, Boss Boleh, plus the
   official source (SSM / LHDN / RMCD). This produces the **table stakes**: the
   topics we must cover to be credible.
3. **Gap analysis** — what every competitor omits. This is our angle, and it
   decides which topics become Tier 1.
4. **Draft the topic list**, assigning a tier to each.
5. **Score each topic (KOS)** — anything under 85 is cut, not parked. A weak
   topic that gets written anyway is how a knowledge base turns into a farm.
6. **Sequence into waves** by dependency and value.

### Definition of done for a topic entry

A planned topic is not "ready to write" until it has: a KOS score, a tier, a
one-line angle stating what we say that competitors don't, and its cluster.

---

## Level 1 — Categories

| Category | Archetype | Target | Status |
| --- | --- | --- | --- |
| 💼 Business | service | ~66 | live |
| 🧾 Taxation | service | ~66 | live |
| 📑 Company Secretary | service | ~38 | live |
| 📊 Accounting | service | ~20 | live |
| 🔍 Audit | service | ~15 | live |
| 👥 Employment & HR | service | ~40 | live |
| 💰 Finance & Grants | service | — | deferred |
| 🏭 Industries | data | — | deferred (see note) |
| 🏢 Companies | reference | — | deferred (data licensing) |

**~245 canonical topics at maturity** for this pillar.

> **Industries deferred deliberately.** Competitors publish 33 industry guides.
> Their value is entirely in industry-specific facts — which licence, which
> authority, which threshold. Without that research each guide collapses into the
> same generic advice with the industry name swapped. They ship only when each
> one can name its actual licensing authority.

### Decision: no "Legal" category in this pillar

"Legal" is three different readers, and each is already served — or deliberately
isn't:

| Reader intent | Home |
| --- | --- |
| "What *is* this law?" | `law` (Understand) — statute reference pages |
| "What must my business *do*?" | Employment · Company Secretary · Taxation |
| "This happened to *me* personally" | `personal-law` (Living) — **not built** |

Rejected because: (a) nobody searches "legal", they search the problem — it fails
the reader-worded test every other cluster has to pass; (b) it would duplicate
Employment and Company Secretary, giving topics two plausible homes and splitting
SEO authority across competing URLs; (c) 1company has no qualified reviewer for
personal legal content, and our own governance model forbids publishing it
unreviewed.

Instead, three moves:

1. **`law` becomes the statute reference layer** — one Tier 4 entity page per Act
   (Companies Act 2016, Employment Act 1955, Income Tax Act 1967, Sales Tax Act
   2018 …): what it governs, who administers it, and every article explaining it
   in practice. The typed `governs` / `administered-by` relations already point
   here, so this reader path — *question → statute → every related duty* — is
   something no competitor's flat article list can offer.
2. **Business gains a "Contracts & disputes" cluster** (~6) — the genuine
   business-legal gap, and inside 1company's competence.
3. **Personal legal parked under Living in Malaysia** as `personal-law`
   (tenancy, consumer rights, traffic, inheritance). Ships only when a reviewer
   can sign it.

Navigation footnote: some visitors do arrive thinking "I need legal info". That is
solved in the **nav** — a "Legal" entry pointing at `/law`, which routes by intent
— not by minting a category and duplicating URLs.

---

## Level 2 — Clusters

### 💼 Business (~66)
| Cluster | Target |
| --- | --- |
| Formation fundamentals | 8 |
| Choosing a structure | 6 |
| Registration procedures | 7 |
| Licences & permits | 8 |
| Foreign founders & ownership | 7 |
| Banking, finance & exchange control | 6 |
| Contracts & disputes | 6 |
| Intellectual property | 6 |
| Where to invest — regions & corridors | 7 |
| Restructuring & closure | 5 |

> The corridors cluster (JS-SEZ, Iskandar, Forest City SFZ, ECER, NCER, Sarawak,
> Greater KL) is the highest-value gap the PwC benchmark exposed: high intent,
> and the incumbent competition is press releases. If it grows past ~10 topics it
> earns its own category.

### 🧾 Taxation (~66)
| Cluster | Target |
| --- | --- |
| Corporate tax | 9 |
| Personal tax | 8 |
| **Deductions & allowances** | 10 |
| SST | 7 |
| e-Invoicing | 6 |
| Withholding tax | 5 |
| International tax (DTA, transfer pricing, FSI) | 6 |
| Taxes on capital (CGT, RPGT) | 4 |
| Stamp duty | 4 |
| Incentives | 3 |
| Tax administration (audit, appeal, clearance) | 4 |

### 📑 Company Secretary (~38)
| Cluster | Target |
| --- | --- |
| Appointment & qualification | 5 |
| Statutory registers & records | 6 |
| Annual return & filings | 6 |
| Directors' duties & disclosures | 8 |
| Meetings & resolutions | 5 |
| Share capital & transfers | 5 |
| Beneficial ownership | 3 |

### 📊 Accounting (~20)
Standards (MFRS/MPERS) 5 · Accounting records 4 · Financial statements & MBRS/XBRL 6 · Bookkeeping 3 · Financial year end 2

### 🔍 Audit (~15)
Requirements & exemption 5 · Appointing an auditor 3 · The audit process 4 · Report types 3

### 👥 Employment & HR (~40)
Employment law basics 7 · Hiring & contracts 6 · Payroll & statutory 9 · Leave & benefits 6 · Termination & retrenchment 6 · Foreign workers & expatriates 6

---

## Tier mix

Per the standard's 10 / 40 / 30 / 20 split, across ~245 topics:

| Tier | Share | Count | Effort each |
| --- | --- | --- | --- |
| 1 Authoritative guide | 10% | ~25 | high |
| 2 Standard | 40% | ~98 | medium |
| 3 Direct answer / FAQ | 30% | ~74 | low |
| 4 Entity / data page | 20% | ~49 | low, template-driven |

Tier 1 slots are scarce on purpose — they are reserved for the topics where the
gap analysis shows we can genuinely beat what ranks today.

---

## Benchmark: PwC *Doing Business in Malaysia 2025*

Reviewed July 2026. Their eight chapters map almost 1:1 onto our six categories —
independent validation of the split. Chapters 5–8 (business / personal / capital /
other taxes) all land in Taxation; chapter 2 splits across Business and Company
Secretary; chapters 3 and 4 map to Employment and Accounting + Audit.

**The exception is their Chapter 1, Investment environment — we have nothing.**
That is the diagnosis worth acting on: PwC writes for someone *deciding whether to
enter Malaysia*; we write for someone *already here who must comply*. Both readers
are real, and we serve only the second. The clusters added above (corridors, IP,
exchange control, taxes on capital, stamp duty) close that gap.

Agencies (SSM, MIDA, MITI, InvestKL, IRDA, ECERDC, NCIA) are **not** added here.
They are Tier 4 entity pages in `government` under Understand, reached from this
pillar through existing `administered-by` relations — the same reasoning as the
`law` decision above.

**Not copied:** their chapter order is *document* order, meant to be read front to
back. Ours is *navigation* order — a reader arrives from search at one page and
does not care which chapter it belongs to. Take the coverage map, not the
architecture.

**Adopted:** an explicit **legislation cut-off date** on every article. PwC states
"based on legislation as of June 2025" up front; we show `updated` but never say
what the law was checked against. Reviewing their guide surfaced a real error in
`audit/audit-exemption` (see below), and a stated cut-off is what makes that class
of error visible rather than silent.

### What the benchmark caught

`audit/audit-exemption` v0.1 stated that all three qualifying criteria had to be
met (SSM PD 10/2024 requires **at least two**) and quoted the Phase 3 thresholds
(RM3m / RM3m / 30) as if current, when FY2026 sits in Phase 2 (RM2m / RM2m / 20).
It also carried a *zero-revenue company* category from PD 3/2017, revoked in
December 2024. Corrected in v0.2 against the directive itself.

Process consequence: **benchmark documents are a review surface, not just a
planning input.** Reading one authoritative competitor guide per category, against
our existing articles, is now a step in the per-category process — cheap, and it
found a defect that our own automated checks structurally cannot (every rule
passed; the facts were wrong).

---

## Waves

**Wave 1 — the compliance spine (~60).** The obligations a company cannot avoid,
where 1company's expertise is deepest and the content is most durable.
Business formation · Company Secretary in full · Taxation core (corporate, SST,
e-Invoicing, deductions) · Audit exemption · Payroll statutory.
Every Wave 1 article contributes to the **Compliance Calendar**.

**Wave 2 — depth (~80).** Employment in full · international tax, incentives,
property tax · Accounting.

**Wave 3 — breadth (~75).** Licences & permits · Finance & Grants · tools and
calculators · Industries, if the per-industry research is funded.

---

## Progress

| | Planned | Written | Reviewed |
| --- | --- | --- | --- |
| Business | ~66 | 4 | 0 |
| Taxation | ~66 | 4 | 0 |
| Company Secretary | ~38 | 3 | 0 |
| Accounting | ~20 | 1 | 0 |
| Audit | ~15 | 1 | 0 |
| Employment & HR | ~40 | 1 | 0 |
| **Total** | **~245** | **14** | **0** |

Level 3 topic lists are filled in per cluster as the recon for that cluster runs.
Nothing is written ahead of its recon.
