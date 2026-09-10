# 📑 Company Secretary — topic plan (41)

Recon 2026-07-20. All sections are Companies Act 2016 (Act 777) unless noted.
**[V]** = verify against SSM source text before drafting.
See [consolidated plan](doing-business-topics.md).

## 1. Appointment & qualification (5)

| # | Topic | Slug | Tier | Obligation | Angle |
| --- | --- | --- | --- | --- | --- |
| 1 | Who can be a company secretary | `company-secretary-qualification` | 2 | PC renewal | Everyone stops at "MAICSA or licensed". We walk both routes — s.241 practising certificate vs s.20G CCM Act licence — plus how to verify a secretary via SSM's Company Secretary Information Data (CSID). Nobody covers CSID. |
| 2 | Resigning as company secretary (s.237) | `secretary-resignation` | 2 | **Yes** — 30 days | The only guide handling the s.237(2) escape route when directors cannot be contacted (Practice Note 4/2018). Competitors write this from the company's side; we write the secretary's, which is the actual search intent. |
| 3 | The office cannot stay vacant beyond 30 days | `secretary-vacancy-30-days` | 3 | **Yes** — s.240 | The most-breached cosec rule. What happens on day 31 and who is liable (directors, not the departed secretary). |
| 4 | Switching company secretary: the handover checklist | `changing-company-secretary` | 2 | **Yes** — s.58, 14 days | **Pure gap.** No competitor documents what the outgoing firm must hand over: statutory registers, minute book, common seal, MyCoID/MBRS access, BO register. |
| 5 | MAICSA — Chartered Secretaries Malaysia | `maicsa` | 4 | No | Entity page: mandate, membership classes, relationship to SSM licensing. Fills an authority hole in the graph. |

*Overflow for later: s.238 disqualification (T3); a T4 entity page for the s.241 practising certificate.*
*Existing `appoint-company-secretary` is correctly scoped — edit it to link out, not absorb.*

## 2. Statutory registers & records (6)

| # | Topic | Slug | Tier | Obligation | Angle |
| --- | --- | --- | --- | --- | --- |
| 6 | Register of members | `register-of-members` | 2 | **Yes** — s.51, 14 days | The register, not the share certificate, makes you a member (s.50). Sequenced against stamping. |
| 7 | Register of directors, managers and secretaries | `register-of-directors` | 2 | **Yes** — s.58, 14 days | Separates the s.57 *internal register* from the s.58 *SSM notification* — a distinction every competitor collapses. |
| 8 | Registered office: rules, change and public access | `registered-office` | 2 | **Yes** — s.46(3) **[V]** | The office-hours access duty. Competitors sell registered-office services and never state the obligation. |
| 9 | Minute books, accounting records and the 7-year rule | `minute-books-and-records` | 2 | s.245, 7 yrs | Every retention clock in one page — minutes (s.341), accounting records (s.245), BO records (7 yrs post-cessation). Nobody consolidates these. |
| 10 | Register of charges | `register-of-charges` | 2 | **Yes** — s.352 **[V: 30 days]** | Consequence-led: an unregistered charge is void against the liquidator. Cosec blogs skip charges as bank/legal-adjacent work. |
| 11 | Certifying documents: CTC vs "original sighted" | `certified-true-copies` | 3 | No | Built on MAICSA's updated Best Practice (April 2025). Zero competitor coverage, high practitioner intent. |

> **SPLIT REQUIRED.** Existing `statutory-registers` carries members, directors and
> location in one page. Rework it into a hub linking to #6–#10, so each register can
> carry its own `obligations` entry. Left monolithic, five datable duties sit trapped
> in one article and the calendar cannot address them individually.

## 3. Annual return & filings (6)

| # | Topic | Slug | Tier | Obligation | Angle |
| --- | --- | --- | --- | --- | --- |
| 12 | MBRS 2.0: filing everything to SSM in XBRL | `mbrs-2` | **1** | **Yes** | Highest-value page in the category. Phased mandate from 1 Dec 2024, Phase 3 extending to all FS from 1 Jun 2025 **[V]**, mTool workflow, removal of the banking/insurance exemption. Competitor coverage is vendor marketing; ours is a working reference with the filing-type matrix. |
| 13 | Circulating and lodging financial statements | `financial-statements-lodgement` | 2 | **Yes** — circulate ≤6 months of FYE; lodge ≤30 days after | The two deadlines are **sequential, not parallel** — almost every competitor states one and omits the other. Worked FYE example. |
| 14 | Applying for an extension of time | `extension-of-time-ssm` | 2 | **Yes** — must precede expiry | The rule that kills applications: apply *before* the deadline lapses. Sourced to SSM practice directives, not blog hearsay. |
| 15 | Sdn Bhd compliance calendar: every SSM deadline | `sdn-bhd-filing-calendar` | 4 | **Yes** | The anchor consumer of the `obligations` field. Anniversary-based vs FYE-based duties side by side. No Malaysian competitor has this. |
| 16 | SSM late lodgement fees and compounds | `ssm-late-lodgement-fees` | 4 | No | **[V: every figure.]** Must also state which waivers did and did not cover annual returns. |
| 17 | Unaudited financial statements and the EPC certificate | `unaudited-financial-statements` | 3 | **Yes** — s.259 clock | Links audit exemption to the *filing* consequence — what you actually lodge when exempt. Bridges two categories nobody bridges. |

> **CUT:** standalone strike-off-for-non-filing. `business/close-a-company` already
> covers s.549/550; add a non-filing consequence section there.

## 4. Directors' duties & disclosures (8)

| # | Topic | Slug | Tier | Obligation | Angle |
| --- | --- | --- | --- | --- | --- |
| 18 | Directors' duties under the CA 2016 | `directors-duties` | **1** | No | The pillar page. s.213(1) best interests + s.213(2) care/skill/diligence, s.214 reliance **[V]**, s.217 common-law preservation **[V]**, and the penalty exposure **[V]**. Competitors write 600-word summaries. |
| 19 | Disclosure of interest in contracts (s.221/222) | `disclosure-of-interest` | 2 | **Yes** — as soon as practicable | Declare at a board meeting, minute it under s.221(8), then the s.222 voting/quorum restriction. The minute-recording step is where companies actually fail — and it's the cosec's job. |
| 20 | Notifying the company of your shareholdings (s.219) | `director-shareholding-notification` | 2 | **Yes** **[V: 14 days]** | Almost invisible in Malaysian content despite being an ongoing personal duty on every director. |
| 21 | Appointing and resigning directors | `appoint-resign-director` | 2 | **Yes** — s.58, 14 days | Consent to act, s.196 minimum, and the s.208 restriction on resigning below the minimum. Flags the 2025 Practice Note **[V]**. |
| 22 | Removing a director (s.206) | `remove-a-director` | 2 | No | The trap: a private-company director cannot be removed by *written resolution* — a general meeting is required. Widely got wrong. High-stakes dispute intent. |
| 23 | Loans and credit to directors (s.224/225) | `loans-to-directors` | 3 | No | Directors routinely treat the company account as personal. |
| 24 | Directors' fees and compensation approval (s.230/231) | `directors-fees-approval` | 3 | No | Who approves what, and the shareholder threshold for payments for loss of office. |
| 25 | Directors' report and statutory declaration (s.251–253) | `directors-report` | 2 | **Yes** — s.259 clock | What the report must contain and who signs the declaration. |

*Overflow: s.198 disqualification (T3); a T4 entity page for s.213.*

## 5. Meetings & resolutions (5)

| # | Topic | Slug | Tier | Obligation | Angle |
| --- | --- | --- | --- | --- | --- |
| 26 | Written resolutions (s.297–308) | `written-resolutions` | 2 | Partial | The circulation mechanic, the "more than half of such members" issue litigated in Malaysian case law, and what *cannot* be done by written resolution (s.206 removal, auditor removal **[V]**). |
| 27 | Notice periods: ordinary vs special resolutions | `resolution-notice-periods` | 3 | **Yes** — 21 days special **[V]** | One reference table for every notice period with short-notice consent thresholds. Competitors state these inconsistently. |
| 28 | Board meetings and minutes | `board-meetings-and-minutes` | 2 | **Yes** — s.341 **[V]** | Includes the Third Schedule default board procedure that applies when the constitution is silent — and most Sdn Bhds have no constitution, so the default *is* their rulebook. Nobody explains this. |
| 29 | AGMs: who still has to hold one | `agm-requirements` | 2 | **Yes** — public co, 6 months **[V]** | Private companies were relieved under CA 2016 — then covers who still must (public companies, and private companies whose constitution imposes it). The second half is always missed. |
| 30 | Members' requisition of an EGM | `egm-requisition` | 3 | **Yes** — s.311 **[V]** | Minority self-help. Zero cosec-firm coverage, because it is used *against* the incumbent board. |

> **CUT:** standalone "lodging resolutions with SSM" — fold into #26/#27 as obligations.

## 6. Share capital & transfers (5)

| # | Topic | Slug | Tier | Obligation | Angle |
| --- | --- | --- | --- | --- | --- |
| 31 | Transferring shares in a Sdn Bhd | `share-transfer` | **1** | **Yes** — stamp 30 days **[V]**; s.51 14 days | The definitive sequencing page: board approval → pre-emption → instrument → LHDN adjudication and stamping → *then* register → *then* s.51. Corrects the persistent myth that **Form 32A is mandatory** — s.105(1) no longer prescribes a form. That correction alone differentiates us from nearly every ranking page. |
| 32 | Allotting new shares and the return of allotment | `share-allotment` | 2 | **Yes** — s.78, 14 days | s.75 authority and s.76 pre-emption — steps skipped in practice — plus the paired s.78 then s.51 filings. |
| 33 | Reducing share capital | `capital-reduction` | 2 | Partial | s.116 court-confirmed vs s.117 solvency-statement, with director liability for a false statement. Competitors treat capital as fixed. |
| 34 | Dividends and the solvency test (s.131/132) | `dividends-and-solvency` | 2 | No | Payable only out of profits *and* only if solvent, with personal director liability. Directors of profitable-on-paper Sdn Bhds get this wrong constantly. |
| 35 | Transmission of shares on death or bankruptcy | `share-transmission` | 3 | No | Transmission is *not* transfer — different documents, different stamp duty. Underserved and urgent intent. |

*Overflow: share certificates and the issuance deadline (s.97 **[V: 60 days]**) as T3 with an obligation.*

## 7. Beneficial ownership (6 — expanded from 3)

Three undersells this. BO moved from transitional to fully enforced (enforcement from
1 July 2024), **no entity is exempt** — previously exempt categories including listed
companies and licensed financial institutions were brought in — and it carries at
least three separate clocks. It is the largest live compliance gap among Malaysian
SMEs with almost no good non-law-firm content.

| # | Topic | Slug | Tier | Obligation | Angle |
| --- | --- | --- | --- | --- | --- |
| 36 | Beneficial ownership reporting in Malaysia | `beneficial-ownership` | **1** | **Yes** | Pillar: Division 8A, Companies (Amendment) Act 2024 in force 1 April 2024, the 30 June 2024 transitional cut-off, enforcement from 1 July 2024, removal of all exemptions. Most competitor pages are frozen at 2024 announcement stage and now stale. |
| 37 | Who counts as a beneficial owner? | `who-is-a-beneficial-owner` | 2 | No | SSM criteria applied to real Malaysian ownership shapes: holding chains, family nominees, trust-held shares, and the "significant influence" limb that catches people holding no shares at all. Worked examples, which nobody publishes. |
| 38 | Filing BO information through e-BOS | `ebos-filing` | 2 | **Yes** — 14 days **[V]** | Practice Directive 9/2024 (revised 27 May 2024) under s.60B(7). Cites the legal basis — competitors describe screens without it. |
| 39 | Keeping the BO register (s.60B) | `bo-register` | 2 | **Yes** — 14 days; retain 7 yrs | Separates the *internal register* duty from the *e-BOS lodgement* duty. Two distinct obligations, two clocks; conflating them is the most common failure. |
| 40 | When the beneficial owner won't respond | `bo-non-cooperation` | 3 | Partial | The company's notice powers when a shareholder refuses to identify their BO. Pure gap — a real operational problem with no published Malaysian guidance outside law-firm alerts. |
| 41 | e-BOS — Electronic Beneficial Ownership System | `ebos` | 4 | No | Entity page: operator, legal basis, scope, access tiers **[V: Feb 2025 revisions]**. |

---

## Differentiation

1. **Obligations as data, not prose.** Every competitor states deadlines inside
   paragraphs. We emit structured frontmatter feeding one calendar.
   `sdn-bhd-filing-calendar` has no Malaysian equivalent.
2. **Sequenced procedures.** Competitors list steps but never ordering constraints.
   Share transfer (stamp *before* register entry) and financial statements
   (circulate *then* lodge within 30 days) are compound clocks nobody draws.
3. **Register duty vs notification duty, separated everywhere.** s.57 vs s.58,
   s.50 vs s.51, BO register vs e-BOS. Competitors collapse all three pairs. **This
   distinction is where actual non-compliance happens.**
4. **The practitioner layer.** CSID lookup, CTC best practice, handover checklists,
   s.237(2) resignation. Cosec firms will not publish this — it commoditises them.
   Which is exactly why we should.
5. **Currency.** Most ranking BO and MBRS content is stale at 2024.
6. **Minority-side content.** EGM requisition, director removal, BO non-cooperation.
   Competitors write from the board's perspective because the board is the client.

## Recon notes

Winning format: long-form guides with H2 subheadings and a summary table. SSM's own
PDFs rank strongly for statutory queries and are the citation target. Law-firm alerts
(Skrine, Donovan & Ho, Richard Wee, DFDL, Azmi) dominate amendment SERPs and are
better than the cosec firms. Title pattern: "X in Malaysia: [Guide/Requirements/
Deadlines & Penalties] (Year)" — year-stamping near-universal.

Competitor weakness: cosec blogs are 600–1,200 words, lead-gen shaped, rarely cite
sections. 3ecpa is broad but shallow. mishu is best-written but organised by service,
not by obligation. MAICSA has excellent technical material but it is member-gated and
not SEO-shaped — a structural opening.

**SSM is fragmented by design** — obligations scattered across the Act, Practice
Directives, Practice Notes, Guidelines and FAQ PDFs with no consolidated index.
Consolidation is our product.

## Datable obligations for the Compliance Calendar

| Duty | Trigger | Deadline | Statute | Confidence |
| --- | --- | --- | --- | --- |
| Appoint a company secretary | Incorporation | 30 days | s.236 | High |
| Notify SSM of secretary change | Appointment/cessation | 14 days | s.58 | High |
| Fill a vacant secretary office | Vacancy | 30 days | s.240 | High |
| Secretary's resignation effective | Notice to board | 30 days | s.237(1) | High |
| Resignation where directors uncontactable | Notice to Registrar | 30 days | s.237(2) | High |
| Notify change of registered office | Change | 14 days | s.46(3) | Medium **[V]** |
| Notify change in register of members | Shareholding change | 14 days | s.51 | High |
| Notify director/secretary particulars change | Change | 14 days | s.58 | High |
| Lodge return of allotment | Allotment | 14 days | s.78 | High |
| Lodge annual return | Incorporation anniversary | 30 days | s.68 | High (live) |
| Circulate financial statements | FYE | 6 months | s.258(1)(a) | High |
| Lodge financial statements | Circulation | 30 days | s.259(1) | High |
| Apply for EOT | Before deadline expires | — | s.259(2) | High |
| Register a charge | Creation | 30 days | s.352 | Medium **[V]** |
| Stamp instrument of transfer | Execution in Malaysia | 30 days | Stamp Act 1949 | Medium **[V]** |
| Lodge BO information | Awareness of change | 14 days | s.60B / PD 9/2024 | Medium **[V]** |
| Enter BO in the register | Receipt | 14 days | s.60B | Medium **[V]** |
| Retain BO records | Cessation as BO | 7 years | s.60B/60C **[V]** | Medium |
| Retain accounting records | Transaction | 7 years | s.245 | High |
| Enter minutes in the minute book | Meeting | **[V]** | s.341 | **Low** |
| Disclose interest in a contract | Awareness | ASAP, at a board meeting | s.221 | High |
| Notice of shareholdings | Acquisition/disposal | **[V — believed 14 days]** | s.219 | **Low** |
| Notice for a special resolution | Convening | 21 days | s.292 **[V]** | Medium |
| Notice for an ordinary resolution | Convening | **[V — believed 14 days]** | s.316 **[V]** | **Low** |
| Hold AGM (public company) | FYE | 6 months **[V]** | s.340 | Medium |
| Convene EGM on requisition | Valid requisition | **[V]** | s.311 | **Low** |
| Issue share certificates | Allotment/transfer | **[V — believed 60 days]** | s.97 **[V]** | **Low** |

**Publication rule:** every deadline, penalty and section above must be confirmed
against the Act text on ssm.com.my or the named Practice Directive. No RM figure goes
live from recon. **Items marked Low must not be published as obligations until
confirmed — omit rather than guess.**

## Tier mix

T1 = 4 (10%) · T2 = 20 (49%) · T3 = 9 (22%) · T4 = 8 (19%). T2 runs heavy against the
40% target; if it matters, `resolution-notice-periods` could absorb `egm-requisition`.
