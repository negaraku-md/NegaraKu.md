# First Eight — One-Page Briefs (grounded against the live corpus)

> Prepared 2026-11-12. Each brief was checked against the actual repository
> (`knowledge/<category>/<slug>[.<lang>].md`), not just the public pages, which
> resolves the proposal's own two caveats ("check the full repository and
> language variants"; "cannot establish a candidate is absent").

## The headline the audit couldn't see

**All eight already exist as published articles, each in full 13-language coverage.**
So this is an **adapt / connect / dedup / verify** sprint, not a commissioning
sprint. Two items (#1 scam, #7 ah-hei) are effectively already built. The genuine
*new writing* is narrow and lives in four places: the UEC/overseas routing layer (#2),
the council dedup (#3), the state dimension for household spending (#6), and the
regional-traditions/change deepening for batik (#8).

### Corrected status vs. the proposal

| # | Article | Proposal said | Ground truth | Real task |
|---|---|---|---|---|
| 1 | First hour after a scam | Connect | **Already this exact article**, 997-24/7 fix already in | Align + cross-link the cluster |
| 2 | After SPM/UEC/overseas | Connect | Domestic comparison exists; **UEC + overseas missing** | Add routing layer (new) |
| 3 | What does your council do | Adapt | **Exists twice, overlapping** | Dedup → one primary |
| 4 | Start a small business | Adapt | Strong hub anchor live; all branch targets exist | Wire the hub (low) |
| 5 | Audit exemption eligibility | Connect | Eligibility page already carries the decision logic | Link + verify thresholds |
| 6 | Household spend by state | Adapt | Live but **national-average only** | Add state dimension (new data) |
| 7 | Ah Hei Bak Kut Teh | Adapt | **Already the place-card pilot** | Confirm standard + link history |
| 8 | Batik | Adapt | Live, already regional | Deepen traditions + change |

### The cost the proposal omits: translation cascade

Per the translation-sync hash: edits to **title / summary / answer / appliesTo / body**
mark all 12 translations `stale` (they must be re-translated or re-stamped).
Edits to **faq / keyTakeaways / seoTitle / sources / hero / socialTitle** are
**freshness-neutral**. Every "adapt the answer/body" below therefore carries a
12-language re-translation bill — that, not the English draft, is the real unit of work.

---

## 1 — The First Hour After a Suspected Financial Scam · *How-to Guide*

- **Exists:** `knowledge/public-safety/how-to-report-a-scam-malaysia.md` — **MS master**, 13 langs, `MY-PS-0008`, tier 1. Title: *"Cara Membuat Laporan Penipuan dan Jenayah Kewangan di Malaysia."* Cluster siblings: `national-scam-response-centre-nsrc` (EN master), `how-to-report-a-crime-malaysia` (MS master), `money-daily-life/staying-safe-scams-and-emergencies` (MS master).
- **Reader question:** "I've just been scammed / money just left my account — what do I do in the next hour?"
- **Opening answer (already on the page):** Call **997** (NSRC, now 24/7; since Sept 2025 the call itself counts as a police report) *and simultaneously* your bank's scam line to freeze the account; check unknown accounts/numbers on SemakMule before paying; CCID Infoline 013-211 1222 (WhatsApp/SMS).
- **Sections needed:** already present (act-now steps, what to prepare before calling, 997 vs 999 vs CCID vs SemakMule, how the report is processed). No structural change.
- **Authoritative sources:** NSRC/NFCC, PDRM CCID, Bank Negara Malaysia, SemakMule (semakmule.rmp.gov.my). All already cited and verified in the Nov-2026 997 correction.
- **Language impact:** **None if we only align/cross-link** (cross-links and FAQ are freshness-neutral). Re-stamping the body would needlessly re-stale 12 langs — avoid.
- **Verdict / effort: Connect, ~0.5 day.** This is the *lowest-content* item, not a draft. Task = confirm the three siblings give identical 997-24/7 instructions and add explicit "Also in" / inline links between them. Reviewer: none required (sensitivity none), but treat as safety-critical — verify against official guidance before any edit ships. *Recommend it leads the sprint precisely because it's an alignment check, not a write.*

---

## 2 — What Can I Do After SPM, UEC or an Overseas School Qualification? · *Decision Guide*

- **Exists (partly):** `knowledge/education/pre-university-routes.md` — **EN master**, 13 langs, `MY-LIV-0057`, `contentType: comparison`, **`sensitivity: race`**. Covers STPM/Matrikulasi/Foundation/A-Levels/Diploma for **domestic SPM leavers only**. Supporting: `tvet-and-skills-training` (EN master), `malaysian-qualifications-agency-and-accreditation` (EN master), `upsr-to-spm-exams` (MS master).
- **Gap:** no entry point for **UEC holders** (Chinese independent schools) or **overseas-school leavers**, and no "start from the qualification you hold" decision flow.
- **Reader question:** "I hold SPM / UEC / an overseas certificate — which routes into a Malaysian (or overseas) degree are open to me, and who runs each?"
- **Opening answer (to draft):** Start from your qualification. SPM → the five routes already compared. UEC → recognised by private universities and many foreign ones, with specific public-university caveats. Overseas (IGCSE/A-Level/IB/etc.) → direct private-university entry or credential evaluation; note which public routes require SPM-equivalence.
- **Sections needed:** branch by qualification held → route options → who runs it → where it leads (UPU vs direct) → verify-your-intake callout. Link out rather than restate.
- **Authoritative sources:** UPU (public-uni admission), MQA (recognition/accreditation), MOE Matriculation Division, MPM (STPM), Cambridge International (A-Level), UEC/Dong Zong on UEC recognition. **Verify current intake/recognition per cycle.**
- **Language impact:** **New article = 1 master + 12 translations** (full build). Decide master language — recommend **EN master** (matches the comparison it sits above). `sensitivity: race` ⇒ **reviewer: ashton-tan mandatory** (quota facts).
- **Verdict / effort: Connect (new routing layer), ~2–3 days inc. translations.** Highest genuine-content item of the eight.

---

## 3 — What Does Your Local Council Do? · *Explainer*

- **Exists — twice, overlapping:**
  - `knowledge/government/local-government-in-malaysia.md` — **EN master**, `MY-GOV-0100`, tier 2. Reader-facing civic explainer ("Councils, Powers, and the Missing Third Vote") — leads with the three council types, services, assessment rates.
  - `knowledge/government/local-government-councils.md` — **MS master**, `MY-GOV-0053`, tier S, **`sensitivity: elections`**, reviewer ashton-tan. More legalistic (Akta 171 s.10 appointments); carries open `verificationNeeded` items.
  - Everyday entry point: `property/rubbish-and-local-council.md` (MS master). Also `states/local-councils.md`.
- **Reader question:** "What does my local council actually do, who runs it, and how do I identify mine?"
- **Opening answer (already on `local-government-in-malaysia`):** Councils are the third tier (PBT), in three sizes (City/Municipal/District), answering to the **state** not Putrajaya, delivering refuse/public-health/planning/licensing, funded by assessment rates — and appointed, not elected, since 1965.
- **Sections needed:** everyday services first → how to find your council → City vs Municipal vs District → who runs it / why appointed → rates. `local-government-in-malaysia` already has these.
- **Authoritative sources:** KPKT / JKT (council counts, criteria), Local Government Act 1976 (Act 171), Federal Constitution (State List, Art 95A). Resolve the open `verificationNeeded` on the MS article against current KPKT figures.
- **Language impact:** The **real move is a dedup**, not an edit — fold/redirect the near-duplicate `local-government-councils` into `local-government-in-malaysia` via `scripts/archive-article.mjs` (freshness-neutral per-locale 301s + `alsoIn`). Lead with services may need a small opening tweak to the EN master (body → cascades 12). `sensitivity: elections` ⇒ reviewer ashton-tan.
- **Verdict / effort: Dedup + light adapt, ~1–1.5 days.** Prove redundancy first (same-category dedup is the safe kind); keep `local-government-in-malaysia` as primary.

---

## 4 — Start a Small Business in Malaysia · *Journey Hub*

- **Exists:** `knowledge/business/starting-a-business-in-malaysia.md` — **EN master**, `MY-BIZ-0122`, tier 1, `contentType: guide`. Strong hub anchor (SSM registration, sole-prop/LLP/Sdn Bhd, post-registration tax/SST/licensing). **All branch targets exist:** `business-structures-malaysia`, `sole-prop-vs-sdn-bhd`, `llp-vs-sdn-bhd`, `register-sdn-bhd`, `doing-business-sabah`, `register-business-sarawak`, `sarawak-business-guide`, plus sector `start-*` guides (childcare, construction, hotel, home-based).
- **Reader question:** "I want to start a small business — what's the full sequence, choose→register→license→operate, and where does my path differ?"
- **Opening answer (already on page):** Register with SSM — sole-prop/partnership on ezBiz (RM30–60/yr) or Sdn Bhd via MyCoID (RM1,000) — then income-tax file with LHDN, SST once turnover > RM500k, plus employer/licensing duties.
- **Sections needed:** choose structure → register → license → operate, with **branch points**: (a) structure choice → comparison articles; (b) Sabah/Sarawak → regional guides; (c) sector → `start-*` guides. Mostly link-wiring on an article that's already the right shape.
- **Authoritative sources:** SSM (ezBiz, MyCoID, RoB Act 1956, Companies Act 2016), LHDN, local-council licensing. Already cited.
- **Language impact:** **Freshness-neutral if confined to adding cross-links / an "on this path" nav block** that lives outside the hashed fields. If we rewrite the answer/body to be explicitly hub-like, it cascades 12 — prefer the link-wiring route.
- **Verdict / effort: Adapt (wire the hub), ~1 day.** Tests whether existing articles form a usable sequence, as the proposal intends, at low cost.

---

## 5 — Does My Private Company Qualify for Audit Exemption? · *Rules & Requirements*

- **Exists:** `knowledge/accounting/audit-exemption-criteria.md` — **MS master**, `MY-ACC-0028`, tier 1. Already the eligibility/decision page (SSM Practice Directive 10/2024, 2-of-3 thresholds, phased RM1m/2m/3m across 2025–27, exclusions, filing-still-required). Reference sibling: `audit/audit-exemption-thresholds.md` (EN master, the dated table); next-step: `audit/after-audit-exemption.md` (EN master).
- **Reader question:** "Can my Sdn Bhd skip the statutory audit this financial year?"
- **Opening answer (already on page):** Yes, if you meet **≥2 of 3** criteria (revenue, assets, employees) for the current + two prior FYs, under PD 10/2024's phased thresholds — but you must still file **unaudited** financials + certificate (ss.258–259 CA 2016); public subsidiaries, foreign and s.260 exempt-private companies don't qualify.
- **Sections needed:** eligibility decision (present) → link the dated **thresholds reference** → link **after-exemption** next steps. Minimal.
- **Authoritative sources:** SSM Practice Directive 10/2024 (supersedes 3/2017), Companies Act 2016 ss.258–260. **Verify the phase figures against the SSM directive at publish.**
- **Language impact:** **Freshness-neutral if we only add cross-links.** Keep dated thresholds in the EN reference article (so figure updates don't cascade the decision page).
- **Verdict / effort: Connect (link + verify), ~0.5 day.** Near-done; main value is guaranteeing the eligibility↔thresholds↔after triangle is linked and the thresholds are current.

---

## 6 — What Malaysian Households Spend, by State and Category · *Data & Reference*

- **Exists (national only):** `knowledge/cost-of-living/household-spending-breakdown.md` — **EN master**, `MY-LIV-0076`, `contentType: data`. Has RM5,566/month (2024), category split, DOSM HES 2024 sourced (released 8 Oct 2025), and the "not a budget prescription" caveat.
- **Gap:** **no state dimension** — the proposal's "by State" is genuinely new data work.
- **Reader question:** "What does a typical household in *my state* spend, and on what — vs the national average?"
- **Opening answer (to add):** National mean is RM5,566/month; state means range from [low state] to [high state] (DOSM HES 2024 state tables / OpenDOSM) — with housing + eating-out the biggest movers.
- **Sections needed:** keep national overview → add a **state table** (mean monthly expenditure + top categories per state, dated, units explicit) → reiterate observed-spend ≠ personal budget.
- **Authoritative sources:** DOSM Household Expenditure Survey Report 2024 (state tables); **OpenDOSM** state series for the machine-readable figures. Date + unit every number.
- **Language impact:** Adding a state section = **body edit → cascades 12 translations.** But the numbers are tables (low translation effort). Keep per-state figures in a structure that can be re-stamped cleanly.
- **Verdict / effort: Adapt (new state data), ~1.5–2 days inc. translations.** Second-most genuine-content item; tests "cite a figure with correct place, period, unit."

---

## 7 — Ah Hei Bak Kut Teh, Pudu · *Profile*

- **Exists:** `knowledge/food-lifestyle/ah-hei-bak-kut-teh.md` — **EN master**, 13 langs. **Already the restaurant place-card pilot** (shipped `7bceab914`): reader-first "Where to find & ratings" card, appetite-first imagery, `place` schema. Dish-history link target: `food-lifestyle/bak-kut-teh.md` (EN master, "Malaysia's Pork-Rib Herbal Soup from Klang").
- **Reader question:** "Is this place worth going to — what do I order, when's it open, how do I get there, is it halal?"
- **Opening answer (already on page):** Visiting facts first (location/hours/order/getting-there), taste judgments attributed, dish history linked out.
- **Sections needed:** already matches the food/place standard. Task = **confirm compliance**, not restructure: visiting facts up front, attributed taste, image labels match what they depict, explicit link to `bak-kut-teh` history.
- **Authoritative sources:** venue facts (hours/location) verified directly; ratings attributed to source + date; no unverifiable "best in KL" claims.
- **Language impact:** **Freshness-neutral** if limited to image labels + a history cross-link (hero/sources/links are non-hashed). Any body edit cascades 12.
- **Verdict / effort: Adapt (confirm standard), ~0.5 day.** Essentially a QA pass on the pilot — the proposal's intent (test the venue standard on one article) is already satisfied; this just certifies it.

---

## 8 — Malaysian Batik: Craft, Regional Traditions and Change · *History & Culture*

- **Exists:** `knowledge/arts-culture/batik.md` — **MS master**, `MY-ART-0002`, `mode: narrative`, **wikidata Q63442113**. Already covers canting/block technique, Kelantan/Terengganu focus, the Malaysia-vs-Indonesia/UNESCO distinction, batik as national dress.
- **Gap:** "regional traditions and **change**" — deepen beyond east-coast basics into production/economic change (decline of handmade work, revival efforts, government promotion, contemporary design) with sources.
- **Reader question:** "What is Malaysian batik, how do its regional traditions differ, and how has the craft changed?"
- **Opening answer (already on page, keep):** Wax-resist dyeing centred on Kelantan/Terengganu — brighter colours, bigger floral/geometric motifs, lighter cloth than Java — now everyday and formal national dress.
- **Sections needed:** keep craft + regional distinctiveness → **add** change-over-time (handmade decline, revival/promotion, design evolution) → keep the UNESCO/Indonesia clarification (it's a common error, worth protecting).
- **Authoritative sources:** Perbadanan Kraftangan Malaysia (Malaysian Handicraft), Department of National Heritage, museum/academic sources for regional + economic history. Attribute each regional claim.
- **Language impact:** Body expansion → **cascades 12 translations.** `masterLanguage: ms` — draft the new narrative in **Malay** (or carefully, given the master is MS, not EN).
- **Verdict / effort: Adapt (deepen), ~1.5–2 days inc. translations.** Tests a thematic cultural structure distinct from a timeline or venue profile, as intended.

---

## Sprint shape this implies

Ordered by **content risk + cost**, not the proposal's consequence-ranking:

1. **Near-zero content, do first (verify/link):** #1 scam-align, #5 audit-link, #7 ah-hei-QA, #4 business-hub-wiring. Mostly freshness-neutral; a few days total; high reader value for little translation cost.
2. **Real new writing (budget the cascade):** #2 UEC/overseas layer, #6 state data, #8 batik deepening — each carries a 12-language bill. #3 council is a **dedup** (do the redirect before any rewrite).

**Freshness-neutral wins to bank first:** #1, #5, #7, and the link-only version of #4 change *no* hashed fields — they improve the reader journey without re-staling a single translation. That's the cheapest, safest opening move.

**Reviewer flags:** #2 (`race`) and #3 (`elections`) require ashton-tan review before publish.

**Open decisions for you:** (a) master language for the new #2 article (recommend EN); (b) whether #3's council dedup keeps `local-government-in-malaysia` as primary (recommended) or merges the MS legal article's detail into it; (c) whether #6's state data goes inline or spins a sibling reference table to keep the national page stable.
