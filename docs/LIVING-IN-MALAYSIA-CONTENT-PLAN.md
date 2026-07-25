# Living in Malaysia — content plan

Research-backed article map for the **Living in Malaysia** section, which is
currently **empty** (0 articles, 0 categories defined under the pillar).

Every article goes through the mandatory pipeline in
`memory/negaraku-article-standard.md` — SERP recon FIRST, official sources only
(JPN, JPJ, Imigresen, MOH/KKM, LHDN, local councils, etc.), claim-to-source
mapping, honest trust badge. Nothing here is pre-approved to publish.

## Positioning — who this section is for

Search demand for "living in Malaysia" is overwhelmingly **expat-oriented**
(cost of living, MM2H, international schools, private healthcare). But NegaraKu.md
serves **residents too** — Malaysians navigating JPJ, KKM clinics, PTPTN, road
tax, utility accounts. So Living is designed for **both audiences**, and each
article states plainly which of the two it is written for via `appliesTo`.

This makes Living a **practical / service** section — "how do I actually do X" —
not the civic-reference register of Understand Malaysia. Archetype: **service**
for most categories (task-led), **data** for cost-of-living pages.

## Legend

| Field | Meaning |
| --- | --- |
| **Tier** | 1 authoritative guide · 2 standard · 3 direct answer · 4 entity/data · **S sensitive** |
| **Aud.** | R resident · N newcomer/expat · B both |
| **P** | P1 core · P2 depth · P3 long tail |

### Governance note

Living is far **less** 3R+1-dense than Understand — most of it is procedural.
The sensitive pockets: **healthcare** touches `health`; anything on **religious
practice, conversion, or interfaith family law** is tier S; **政治/policy**
commentary is out of scope. Roughly **8–12** of the proposed articles are tier S;
the rest are tier 3/4 procedural and AI-publishable after data verification.

---

## Proposed categories (7 new, to add to `categories.ts` under pillar: 'living')

| id | Name (en) | Archetype | Articles |
| --- | --- | --- | --- |
| `settling-in` | Settling In | service | ~14 |
| `healthcare` | Healthcare | service | ~14 |
| `housing` | Housing & Utilities | service | ~14 |
| `getting-around` | Getting Around | service | ~14 |
| `education` | Education | service | ~14 |
| `money-daily-life` | Money & Daily Life | service | ~12 |
| `cost-of-living` | Cost of Living | data | ~8 |

Target **~90 articles** for a complete section (comparable depth to the 195 of
Understand, scaled to a more focused, task-driven remit).

---

## 1. `settling-in` — arriving and getting legal

The newcomer's first 90 days, and the documents every resident needs.

| Article | Tier | Aud. | Master | P |
| --- | --- | --- | --- | --- |
| Moving to Malaysia: What to Sort Out First | 2 | N | en | P1 |
| MM2H: The Long-Stay Visa, Tiers and Conditions | 2 | N | en | P1 |
| The Employment Pass, Explained for the Employee | 2 | N | en | P1 |
| Dependant and Long-Term Social Visit Passes | 3 | N | en | P1 |
| Student Pass: Studying in Malaysia | 3 | N | en | P2 |
| The Professional Visit Pass and Other Categories | 3 | N | en | P2 |
| MyKad, MyPR and the Foreigner's Equivalent | 3 | B | ms | P1 |
| Registering a Birth in Malaysia | 3 | B | ms | P1 |
| Registering a Marriage (Civil / Non-Muslim) | 3 | B | en | P2 |
| Registering a Death, and What Follows | 3 | B | ms | P2 |
| Renewing and Replacing Your Passport (Malaysians) | 3 | R | ms | P1 |
| Bringing Pets Into Malaysia | 3 | N | en | P3 |
| Bringing Your Car / Shipping Belongings | 3 | N | en | P3 |
| Leaving Malaysia: Tax Clearance and Winding Down | 3 | N | en | P2 |

*Verify against Jabatan Imigresen, JPN, MM2H (MOTAC), and DVS for pets.*

## 2. `healthcare` — the system, and how to use it

The most searched, highest-stakes practical topic. Some of it is tier S (`health`).

| Article | Tier | Aud. | Master | P |
| --- | --- | --- | --- | --- |
| How Malaysian Healthcare Actually Works — Public vs Private | 2 | B | en | **P1** |
| Klinik Kesihatan: Using a Government Health Clinic | 3 | B | ms | P1 |
| Government Hospitals: Fees, Referrals and Wait Times | S | B | ms | P1 |
| Private Hospitals and Typical Consultation Costs | 3 | B | en | P1 |
| Medical Insurance in Malaysia: What You Need | 2 | B | en | P1 |
| Buying Medicine: Pharmacies, Prescriptions and Farmasi | 3 | B | ms | P2 |
| Emergencies: 999, Ambulances and A&E | 3 | B | ms | P1 |
| Having a Baby in Malaysia | S | B | en | P1 |
| Childhood Vaccination and the KKM Schedule | S | R | ms | P1 |
| Mental Health Services and Where to Turn | S | B | en | P1 |
| Dental Care: Public and Private | 3 | B | ms | P2 |
| Healthcare for Seniors and the Elderly | 3 | B | en | P2 |
| Medical Tourism: Why People Come to Malaysia to Treat | 2 | N | en | P2 |
| PeKa B40 and Government Health Schemes | S | R | ms | P2 |

*Verify against KKM/MOH, MyHEALTH portal, and published hospital fee schedules
(Fees Act / Perintah Fi). Do NOT quote a specific drug price or fee unless it is
on an official schedule.*

## 3. `housing` — renting, buying, and the bills

| Article | Tier | Aud. | Master | P |
| --- | --- | --- | --- | --- |
| Renting a Home: The Tenancy Agreement and Deposits | 2 | B | en | **P1** |
| How to Find a Rental (Agents, Portals, iProperty/PG) | 3 | B | en | P1 |
| Can Foreigners Buy Property? The Rules and Thresholds | 2 | N | en | P1 |
| Buying a Home: The Process, S&P and Loan | 2 | B | en | P1 |
| Freehold vs Leasehold, and Strata vs Landed | 3 | B | en | P2 |
| Assessment (Cukai Pintu) and Quit Rent (Cukai Tanah) | 3 | B | ms | P1 |
| Setting Up Electricity: TNB Accounts | 3 | B | ms | P1 |
| Water: SYABAS / Air Selangor and State Operators | 3 | R | ms | P2 |
| Internet and Fibre: Unifi, Maxis and the Options | 3 | B | en | P1 |
| Indah Water: Sewerage and What You Pay | 3 | R | ms | P3 |
| Rubbish, Recycling and Local Council Services | 3 | R | ms | P3 |
| Condo Living: Maintenance Fees, JMB/MC and House Rules | 3 | B | en | P2 |
| Gated Communities and Security | 3 | B | en | P3 |
| Home Help: Domestic Workers and the Rules | S | B | en | P2 |

*Verify against TNB, the water operators, MCMC, and the Strata Management Act.*

## 4. `getting-around` — transport and driving

| Article | Tier | Aud. | Master | P |
| --- | --- | --- | --- | --- |
| Getting Around Malaysia: The Options at a Glance | 2 | B | en | P1 |
| The Klang Valley Rail Network (MRT, LRT, Monorail, KTM) | 2 | B | en | **P1** |
| Touch 'n Go and the eWallet, Explained | 3 | B | ms | P1 |
| Driving in Malaysia: Licences for Newcomers | 3 | N | en | P1 |
| Getting a Malaysian Driving Licence (Locals) | 3 | R | ms | P1 |
| Road Tax and Renewing It (JPJ / MyEG) | 3 | B | ms | P1 |
| Motor Insurance: What's Compulsory | 3 | B | ms | P1 |
| Buying a Car: New, Used and the Loan | 2 | B | en | P2 |
| Tolls, SmartTAG and RFID | 3 | B | ms | P2 |
| E-hailing: Grab and the Alternatives | 3 | B | en | P1 |
| Intercity Travel: ETS, Buses and Domestic Flights | 3 | B | en | P2 |
| Traffic Summonses (Saman) and How to Pay | 3 | B | ms | P1 |
| Cycling and Walkability in Malaysian Cities | 3 | R | en | P3 |
| Driving to Singapore and Thailand | 3 | B | en | P2 |

*Verify against JPJ, Prasarana/MyRapid, KTMB, and PLUS.*

## 5. `education` — schooling and study

| Article | Tier | Aud. | Master | P |
| --- | --- | --- | --- | --- |
| The Malaysian Education System, End to End | 2 | B | en | **P1** |
| National Schools (SK), SJKC and SJKT | S | B | ms | P1 |
| International Schools: Curricula and Fees | 2 | N | en | P1 |
| Private and Chinese Independent (SMJK) Schools | 3 | B | en | P2 |
| Enrolling Your Child in a Government School | 3 | B | ms | P1 |
| Preschool, Tadika and Childcare | 3 | B | ms | P2 |
| UPSR to SPM: The Exams That Matter | 3 | R | ms | P1 |
| Pre-University: STPM, Matrikulasi, A-Levels, Foundation | 2 | R | en | P1 |
| Public vs Private Universities | 2 | B | en | P1 |
| PTPTN: The Student Loan | 3 | R | ms | P1 |
| Studying in Malaysia as an International Student | 2 | N | en | P1 |
| Homeschooling in Malaysia: Is It Allowed? | 3 | B | en | P3 |
| Special Education and Learning Support | 3 | B | en | P2 |
| Adult and Skills Training (TVET, ILP) | 3 | R | ms | P3 |

*The SK/SJKC/SJKT article is tier S (race/language education is 3R+1) — verify
against KPM and keep strictly descriptive.*

## 6. `money-daily-life` — banking, bills, everyday admin

| Article | Tier | Aud. | Master | P |
| --- | --- | --- | --- | --- |
| Opening a Bank Account (Local and Foreigner) | 2 | B | en | **P1** |
| Online Banking, DuitNow and QR Payments | 3 | B | ms | P1 |
| Mobile Plans and Buying a SIM | 3 | B | en | P1 |
| Income Tax for Individuals: Do You Need to File? | 2 | B | en | P1 |
| EPF and SOCSO for Employees, in Plain Terms | 3 | R | ms | P1 |
| Sending Money Home (Remittance) | 3 | N | en | P2 |
| Cost-of-Living Aid: STR / Sumbangan Tunai Rahmah | S | R | ms | P2 |
| Consumer Rights and the Tribunal | 3 | B | en | P2 |
| Getting Married: The Practical Checklist | S | B | en | P2 |
| Domestic Help, Nannies and Confinement Care | 3 | B | en | P3 |
| Public Holidays and How They Work by State | 3 | B | ms | P1 |
| Staying Safe: Scams, Emergencies and Useful Numbers | 3 | B | en | P1 |

## 7. `cost-of-living` — the numbers (data pages)

| Article | Tier | Aud. | Master | P |
| --- | --- | --- | --- | --- |
| Cost of Living in Malaysia: An Honest Overview | 4 | B | en | **P1** |
| A Realistic Monthly Budget: Single, Couple, Family | 4 | B | en | P1 |
| Cost of Living: Kuala Lumpur | 4 | B | en | P1 |
| Cost of Living: Penang | 4 | B | en | P2 |
| Cost of Living: Johor Bahru | 4 | B | en | P2 |
| Cost of Living: East Malaysia (KK / Kuching) | 4 | B | en | P3 |
| What Groceries Actually Cost | 4 | B | ms | P2 |
| Salaries and the Minimum Wage | 4 | B | en | P1 |

*Cost pages are the freshness risk — figures move. Express as ranges, cite DOSM
(household expenditure, CPI) and set a short `reviewDue`. Consider driving these
from OpenDOSM at build time later, as flagged for the economy indicators.*

---

## Build order (recommended)

| Phase | Content | Count | AI-publishable? |
| --- | --- | --- | --- |
| **1** | `settling-in` visas + documents | ~14 | Mostly yes (procedural) |
| **2** | `getting-around` + `money-daily-life` | ~26 | **Yes — high-demand, low-sensitivity** |
| **3** | `housing` + utilities | ~14 | Yes |
| **4** | `cost-of-living` data pages | ~8 | Yes (data-verify) |
| **5** | `healthcare` | ~14 | Mixed — several tier S (health) |
| **6** | `education` | ~14 | Mixed — SK/SJKC/SJKT tier S |

**Recommended start: Phase 2** — transport, driving, banking, bills. It is the
highest day-one search demand, almost entirely non-sensitive, and every figure
(road tax, JPJ, fares) is checkable against an official schedule.

## Prerequisite before generation

Living has **no categories defined**. Before writing any article, add 7 category
entries to `src/lib/categories.ts` (`pillar: 'living'`, archetype, icon, name,
blurb) and their subcategory labels to `src/lib/subcategories.ts`. Without this,
the articles have nowhere to render.

## Sources consulted for this plan (reconnaissance only — not citable)

- [Malaysia cost of living 2026 overviews](https://www.pacificprime.com/blog/cost-of-living-in-malaysia.html)
- [MM2H — Malaysian Immigration Department](https://www.imi.gov.my/index.php/en/main-services/malaysia-my-second-home-mmh2-en/)
- [MM2H guidelines — Ministry of Tourism, Arts and Culture](https://www.mm2h.gov.my/apply/guidelines)

*Every figure must be confirmed against the responsible agency (JPJ, Imigresen,
KKM, TNB, DOSM, KPM) before publication.*
