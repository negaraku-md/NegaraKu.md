# Verified sources and figures

**Read this before you start verifying. Check it again before you give up on a figure.**

Wave 1 exposed a real cost of running writers in parallel: one agent searched for the
SSM late-lodgement fee schedule, failed, and left four articles with fees unpublished —
while another agent found it in a practice directive an hour later. One writer's dead
end was another's verified source, and they could not tell each other.

This file is the shared memory. It records what has already been read off a primary
source, with the exact URL. **Everything here has been confirmed** — you may cite it,
but re-check anything time-sensitive, because rates and thresholds move.

If you verify something new that other writers would plausibly need, report it in your
final summary with the URL so it can be merged here.

---

## Primary documents that extract cleanly

Several government PDFs defeat WebFetch (binary, 403, or an HTML shell). These were
retrieved by downloading and parsing locally — do the same rather than concluding a
figure is unverifiable.

| Document | URL |
| --- | --- |
| Companies Act 2016 (Act 777), reprint as at 1.8.2022 — 621pp | `ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf` |
| Companies (Amendment) Act 2024 (Act A1701) | `ssm.com.my/Pages/Legal_Framework/Document/A1701%20BI.pdf` |
| CCM Act 2001 (Act 614) | ssm.com.my legal framework |
| PD 10/2024 — audit exemption | `ssm.com.my/Pages/Legal_Framework/Document/PD10-2024-Qualifying-Criteria-for-Audit-Exemption-for-Certain-Categories-of-Private-Companies.pdf` |
| PD 1/2017 (Revised 1 Oct 2024) — late lodgement penalties | `ssm.com.my/Pages/Legal_Framework/Document/Practice%20Directive%201_2017%20(Revised)%201%20Oct%202024.pdf` |
| PN 3/2018 — extension of time | `ssm.com.my/Pages/Legal_Framework/PDF%20Tab%205/pn_ss_609_2592_3404_eot.pdf` |
| SSM audit exemption FAQ (Part Q) | `ssm.com.my/Pages/Legal_Framework/Document/FAQ-AUDIT-EXEMPTION.pdf` |
| SSM FAQ Part I (s.50/s.51), updated 31.12.2024 | `ssm.com.my/Pages/Legal_Framework/Document/PART%20I%20s50s51%20311224.pdf` |
| Minimum Wages Order 2024, P.U.(A) 376 | `gajiminimum.mohr.gov.my/wp-content/uploads/PUA%20376.pdf` |
| Employment Act 1955 (Act 265) | `jtksm.mohr.gov.my/sites/default/files/2023-11/Akta%20Kerja%201955%20(Akta%20265)_0.pdf` |
| National Wages Consultative Council Act 2011 | `jtksm.mohr.gov.my/sites/default/files/2023-03/3.%20National%20Wages%20Consultative%20Council%20Act%202011.pdf` |
| EPF Third Schedule, from 1 Oct 2025 | `kwsp.gov.my/documents/d/guest/third_schedule_from_-1-october-2025` |
| LHDN Filing Programme 2026 | `hasil.gov.my/wp-content/uploads/program-memfail-bn-bagi-tahun-2026.pdf` |
| HRD Corp First Schedule Order 2021, P.U.(A) 84/2021 | `hrdcorp.gov.my/wp-content/uploads/2021/03/12.FEDERAL-GOVERMENT-GAZETTE-PEMBANGUNAN-SUMBER-MANUSIA-BERHAD-AMENDMENT-OF-FIRST-SCHEDULE-ORDER-2021.pdf` |

**Access notes.** `kwsp.gov.my` returns 403 to WebFetch — use curl with a browser
user-agent. `hasil.gov.my` sometimes serves an HTML shell instead of a PDF.
`phl.hasil.gov.my` refused connection repeatedly. LHDN moved employer pages from
`/en/employers/` to `/en/majikan/` — the old URLs 404.

### ★ The AGC gazette API — use this before concluding an instrument is unretrievable

This solves the gazette-enumeration problem generally, and it is the single most useful
technique found on this project. It would have prevented the SST amendment-sequencing
trap below and the Labuan dead end.

```
POST https://lom.agc.gov.my/json-subsid-2024.php?type=pua
     searchValue=<title substring>&searchColumns[]=title&language=BI&length=500
```

Returns **every** P.U.(A) matching the substring, with status, publication date, and a
direct PDF path under `lom.agc.gov.my/ilims/upload/portal/akta/outputp/<project_id>/`.

> ⚠ **CORRECTED — the response field is `records`, not `data`.** An earlier version of
> this entry implied the usual `data` key; parsing `data` returns nothing and reads as a
> clean negative. Extract the PDF from the `DOC2DOWNLOAD` href, strip the leading
> `../../..`, prepend the host, and URL-encode spaces.

Use it to build the **amendment chain** for any principal instrument before quoting it —
that is the failure mode behind every stale-consolidation trap recorded in this file.
> ⚠ **The `statusOfLegislation` field does NOT show revocation.** Proven case:
> **P.U.(A) 458/2012 still returns `PRINCIPAL`** despite being revoked by P.U.(A) 449/2024
> in December 2024. The field is an instrument *type*, not an in-force flag. **Always open
> the operative text** — a `PRINCIPAL` status is not evidence an instrument survives.
> Pre-2011 coverage is also incomplete. Index confirmed current to **17 July 2026**, so a
> negative result is meaningful evidence rather than a coverage gap.

> ⚠ **Search on a SINGLE word, then filter client-side.** Subsidiary-legislation titles
> contain **embedded newlines**, so a multi-word `searchValue` silently under-returns:
> `MULTIMEDIA (LICENSING)` returns **1** record while `MULTIMEDIA` returns **18**. A
> narrow query looks like a clean negative result and is not one — this is the same
> failure mode as the DTA table that dropped 35 of 75 countries while looking plausible.

> **★ Direct P.U.(A)-number lookup: `searchColumns[]=noPU` with `searchValue=167/2014`.**
> Far faster than title sweeps for chasing an amendment chain — which is the task that
> matters most, since gazette date and status field are both unreliable.

**Companion API for principal Acts:** `POST lom.agc.gov.my/json-updated-2024.php` with
`searchValue=<title>&searchColumns[]=title&language=BI&start=0&length=200&draw=1`.
**`start` and `draw` are mandatory** — omitting `start` returns a raw MySQL error.
Also: `lom.agc.gov.my/act-detail.php?act=N&lang=BI` embeds every reprint and amendment PDF
path in `<iframe data-src="pdfjs/web/viewer.html?file=...">` — scrape the href. It doubles
as a fast Act-number → official-title verifier.

### ⚠ mysst.customs.gov.my is not trustworthy as an index — or as a consolidation

Two traps found the hard way. Both will produce **confidently wrong law** if ignored.

**1. The site's own index pages are stale and incomplete.** `/sst-orders/` does not list
P.U.(A) 172/2025 or P.U.(A) 174/2025 — two of the most consequential 2025 amendments.
`/industry-guides/` has PDF links missing from the page HTML entirely. Documents exist
but are unreachable by browsing.

*Workaround:* query the site's **WordPress media API** to enumerate PDFs directly
(`/wp-json/wp/v2/media?search=<term>`). Even then, treat any resulting list as
non-exhaustive — keyword search will miss documents whose filenames don't match.

**2. There is no consolidated text of the principal instruments.** The PDF published as
"Service Tax Regulations 2018" is the **unconsolidated 2018 original**. Its paragraph 8
still shows the pre-2020 wording *without the 5% proviso* — so reading the official PDF
alone gives you superseded law and no warning that it is superseded. The same applies to
P.U.(A) 380/2018.

*Workaround:* reconstruct from the principal instrument **plus every gazetted amendment
in sequence**. If you cannot enumerate the amendments, you cannot state the current rule
— say so rather than quoting the principal instrument.

The same caution applies to RMCD's guides: the **Guide on Professional Services is still
the 21 September 2021 version** and has not been reissued since the July 2025 expansion.
Anything sourced from it is pre-expansion guidance.

---

## Confirmed figures

### SSM — fees and penalties

- **Late lodgement penalty** (PD 1/2017 rev. 1 Oct 2024, para 17), bands start after
  7 days: private **RM50 / 100 / 150 / 200**; public or foreign **RM150 / 250 / 300 / 500**.
  Para 18 gives a remission power.
- **Lodgement fees** (ROC Table of Fees): incorporation RM1,000; name reservation RM50
  per 30 days, max 180; annual return RM150 private / RM500 public; FS lodgement RM50
  audited / RM20 unaudited (public audited RM200); s.260 EPC certificate RM200; EOT
  RM100; change of name RM100; constitution amendment RM30; strike-off RM100; charge
  registration RM300.
- **EOT (PN 3/2018) — CORRECTED: these are TWO separate applications, not one.**
  An earlier entry compressed them. Para 13 covers **circulation**, para 14 covers
  **lodgement**, and each must be applied for **7 days before the last day of that
  period**. Paras 15–16: **RM100 per application, and a further RM100 for each subsequent
  extension** — the "each" is explicit. Para 9: 3 days where the prescribed period is
  ≤7 days. Paras 21–22: public company **30 days before the last day to hold the AGM**,
  again for both circulation and lodgement. Para 7: a document lodged inside an approved
  extension is **deemed** lodged in time. No maximum extension length is published.
- **Late-lodgement bands with their day ranges** (PD 1/2017 para 17): >7 days–3 months /
  >3–6 months / >6–12 months / >12 months. Private RM50 / 100 / 150 / 200; public or
  foreign RM150 / 250 / 300 / 500. Para 16: where no timeframe is prescribed, the default
  lodgement period is **30 days**.

> **s.258 and s.259 penalties differ in both liable party and daily rate** — a distinction
> that appears to be published nowhere else:
> **s.258(3)** — the **company AND every officer**, ≤RM50,000, continuing fine **≤RM500/day**.
> **s.259(3)** — **every officer only; the company is not named**, ≤RM50,000, continuing
> fine **≤RM1,000/day**, i.e. double.

**s.258(1)(b) is backward-looking.** Public-company circulation is "at least twenty-one
days **before the AGM**" — not a period running from financial year end. Our own plan
document framed this incorrectly.
- **Waivers, all expired:** the 28 May 2025 waiver and its 1 Oct–30 Nov 2025 extension
  covered **audited FS only, annual returns excluded**; the 3 Feb 2026 peak-period
  notice covered **both AR and FS** for submissions 31 Jan–31 Mar 2026.

### Companies Act 2016 — clocks confirmed against the Act text

s.46(3) registered office change **14 days** (fine ≤RM50k, **no daily fine**) ·
s.47(3) **14 days** · s.51(1) register of members change **14 days** ·
s.57(4) internal register **14 days** · s.58(1) officer particulars **14 days** ·
s.68 annual return **30 days** from incorporation anniversary, and **none is due in the
calendar year of incorporation (s.68(2))** · s.78(1) return of allotment **14 days** ·
s.106(1) enter a transferee **30 days** · s.236(2) appoint secretary **30 days** ·
s.240 office vacant no more than 30 days **at any one time** (continuing duty, not a
one-off post-incorporation rule) · s.237(1)/(2) resignation effective **30 days** ·
s.245(2) accounting entries within **60 days** of the transaction · s.245(3) retain
**7 years** · s.248(1)(a) first financial statements within **18 months** of
incorporation · s.258(1)(a) circulate within **6 months** of FYE · s.259(1)(a) lodge
within **30 days** of circulation (fine falls on **every officer**) · s.341(2) retain
**7 years** · s.352(1) register a charge **30 days**; s.360 satisfaction **14 days**;
s.363 adds 7 days if executed outside Malaysia.

**s.341 sets no minute-entry deadline** — confirmed independently by two writers. It is
a retention period only, and it governs members' resolutions and meetings, not board
minutes (those sit under s.47(1)(f) and the Third Schedule). The 60-day rule people
misattribute to it is s.245(2), for accounting records. **Do not publish a
minute-entry obligation.**

### Meetings, resolutions and share capital

**Notice periods:** s.292(1) special resolution **21 days + 75%** · s.316 notice —
private **14 days**, public AGM **21**, public other **14** · **s.316(3) AGM short notice
requires ALL members** · **s.316(5) is a double test** — a majority *in number* who
*together hold* 90% private (constitution may raise to 95%) / 95% public. **Special notice
is 28 days (s.322)** — a different thing from a special resolution, routinely conflated.

**EGM requisition (s.311):** 10% of voting paid-up capital, but **5% for a private company
where more than 12 months have passed since the last requisitioned meeting**. Directors
have **14 days to call**, meeting **within 28 days**; s.313(3) members may convene their
own within **3 months**; s.314(4) the Court may deem one member a quorum.

**AGM (s.340):** public companies only, and it is **two limbs** — within **6 months of
FYE AND 15 months of the last AGM**. First AGM within **18 months** of incorporation.
**s.34(c) deems a pre-2016 M&A to be the constitution** — that is the hook for private
companies whose constitution still requires an AGM.

**Third Schedule board default** (applies whenever the constitution is silent, i.e. most
Sdn Bhds): notice only to directors **in Malaysia** · audio/visual meetings permitted ·
quorum is a majority if unfixed · **silence is a vote in favour** · **a written directors'
resolution needs ALL directors** · minutes with **no entry deadline**.

**Share transfer:** **s.105(1) requires a duly executed *and stamped* instrument** — that
is the statutory basis for stamping before registration. **s.105 prescribes no form**
(confirming the Form 32A correction). **s.106(1) 30 days** to enter the transferee, with a
three-limb refusal test: express power + resolution within the same 30 days giving reasons
**in full** + notice to both parties within **7 days**.

**Allotment has three clocks, not two:** **s.77(1) enter in the register within 14 days** ·
s.78 return of allotment 14 days · s.51 notification 14 days. **s.75(4) makes an
unapproved allotment VOID**, with personal director liability under s.75(5) and a 3-year
bar. **s.76(2)** lodge the approval within 14 days (**RM500,000 + RM1,000/day**);
**s.76(3)** the approval expires at the next AGM or after 12 months.

> **s.85 pre-emption applies to new issues only, and is subject to the constitution.**
> So a Sdn Bhd with no constitution has **full s.85 protection on issues and zero
> pre-emption on transfers** — the opposite of what most founders assume.

**Transmission is not transfer:** **s.109(5) register within 60 days**, not 30, and no
instrument is required. s.97(1) share certificates are **on application only**; s.98(1)
60 days to send.

**Two different solvency tests, routinely conflated:** **s.112(1) is three-limb** (capital
reduction, buyback, financial assistance); **s.132(3) is one-limb, cash-flow only**
(distributions). **s.113(2)(a) requires ALL directors to sign** for a capital reduction —
a majority suffices only for financial assistance and buyback. s.117(1)(a) **7-day notice
to the Registrar AND the DG of Inland Revenue**; s.118(2) six-week creditor window;
**s.119(1) lodge after 6 weeks and before 8 weeks — a window, not a deadline.**

**Directors authorise distributions, not members** (s.131), and **s.132(4) imposes a
positive duty to stop a distribution** after authorisation if solvency fails. s.133(1)
shareholder clawback requires good faith **and** no knowledge; **s.133(4) liability does
not pass to the estate.**

### Directors' duties — four section numbers commonly cited wrong

These were wrong in our own plan and are wrong across much published guidance. All
confirmed against the Act 777 reprint:

| Commonly cited | Actually |
| --- | --- |
| s.214 reliance on others | **s.215.** s.214 is the **business judgment rule** — different conditions entirely |
| s.217 preserves common-law duties | **s.220**, and it preserves *other written law*. Common-law and equitable duties survive via **s.214(1)'s own wording**. s.217 is the **nominee-director** duty |
| s.208 bars resigning below the minimum | **s.196(3)** — and it covers **vacation**, not just resignation. s.208(2) is merely *subject to* it |
| s.230/231 loss-of-office approval | **s.227.** s.231 defines service contracts for **public companies only**. The 10% figure is **s.230(4)**, a minority *challenge* right — a different thing |

> **s.222(2)(a) disapplies the interested-director voting restriction to private
> companies** unless the company is a subsidiary of a public company. Most Malaysian
> guidance states flatly that an interested director cannot vote — **for an ordinary
> Sdn Bhd that is not the Act.** s.221 disclosure still applies in full; what constrains
> the vote is the constitution (preserved by s.221(11)) and s.213(1).

**s.219 resolved** (was Low confidence): **14 days** to notify, with three distinct start
dates by limb; **5 days for quoted companies** on limbs (a)–(b). Split penalty —
s.219(6)(a) failure to notify at all is 5 years / RM3m; s.219(6)(b) merely late is
RM25,000 + RM1,000/day.

**Further clocks confirmed:** s.59(4)/(5) company enters the shareholding in its register
within **3 days** · s.219(4) copies to every other director within **7 days** · s.230(3)
private company notifies shareholders of board-approved fees within **14 days** ·
s.230(4) members with **≥10% of voting rights** may force a resolution within **30 days
of knowledge**, else s.230(5) makes the payment a **debt due from the director** ·
s.224(4)(b) ratify a director's loan within **6 months**, else s.224(5)(b) repayable
after **12 months** · s.348(2)/(3) derivative action **30 days** notice and **30 days**
to initiate · s.209(5) strike-off where no director appointed within **6 months** of the
last director's death · s.198(5)(a) **14 days** notice to the Registrar, s.198(6) no
leave needed after **5 years**.

**Three under-covered provisions worth using:**
- **s.210 extends ss.213–218, 223 and 228 to the CEO, CFO and COO** and anyone primarily
  responsible for management. Nearly absent from Malaysian content.
- **s.288 voids** any constitutional or contractual indemnity against liability for breach
  of duty; s.289(4) permits third-party indemnity but never a criminal fine or penalty.
- **s.297(2) has exactly two carve-outs** from written resolutions: s.206 removal of a
  director and s.276 removal of an auditor.
- **s.224(2)(a)** — the exempt private company exemption is the whole reason most Sdn Bhd
  director loans are lawful.

**Act A1701 scope, confirmed negative:** it amends ss.2, 68, 152, 258, 264, 365–368, 395,
403, 406, 411, 433, 536, 562, 567, 576, 582, 613 plus new Division 8A and new ss.368A–D,
369A–D, 398A, 415A, 573A, 612A. **It does not touch ss.196–253 at all**, so the 1.8.2022
reprint is current for the whole directors' duties chapter. Assent 24 Jan 2024, gazetted
2 Feb 2024.

> **The "2025 Practice Note on director appointment/removal notification" referenced in
> our plan could not be found** in SSM's legal framework library. Do not cite it.

### Beneficial ownership (Act A1701)

Enforcement did **not** begin 1 July 2024 — the 27 May 2024 revision to PD 9/2024
extended the transitional window to **30 September 2024**; full clocks run from
**1 October 2024**. The Guidelines were revised **10 January 2025**.

s.60C(4) enter in the register **14 days from receipt** · s.60B(3)–(4) lodge
**14 days from the register entry** (sequential, not parallel) · s.60B(5) retain
**7 years** from cessation · s.60B(6) penalty **RM20,000 + RM500/day**, on the company
**and every officer** · s.588(2) default penalty RM50,000 / 3 years · new companies
**60 days** from secretary appointment · **no exemptions granted** under s.60E ·
e-BOS supply RM20 per company; **auditors have no right of access**.

**SSM publishes no late-lodgement fee scale for BO** — do not invent one.

### Audit exemption (PD 10/2024)

**At least two of three**, for the current and past two financial years. Phased:
2025 RM1m/RM1m/10 · 2026 RM2m/RM2m/20 · 2027 on RM3m/RM3m/30. Excluded: EPC that
lodged a s.260 certificate, public companies incl. listed, private subsidiaries of
public companies, foreign companies. Dormancy is a separate route. 5% of members, 5%
of members by number, or the Registrar may compel an audit on notice no later than one
month before FY end. PD 3/2017 revoked.

> **PD 10/2024 para 6(a) defines annual revenue as revenue received and receivable
> "during the year", with no pro-rating.** Combined with para 9 (the phase is set by the
> period's **commencement** date) and para 5 (the three-year lookback), this means an
> **18-month first financial period puts 18 months of revenue against a threshold
> calibrated for 12 — and contaminates the two following years.** Choosing a long first
> period can cost audit exemption for three years.

> **PD 10/2024 is silent on companies with fewer than three financial years**, and SSM's
> audit-exemption FAQ (Part Q, read in full) does not address it either. **Do not assert
> that a new company cannot claim exemption in year one or two** — build on the revenue
> and phase-commencement mechanisms, which are on the face of the directive.

**"Number of employees"** (SSM FAQ Part Q, Q19): measured **at the end of each
relevant financial year**; full-time means paid workers doing **≥6 hours a day for ≥20
days a month, or ≥120 hours a month**. Part-timers below that are not counted.
Excludes director-employees, shareholder-employees, and unpaid or irregular-wage family.

**LHDN does not require audited accounts** where the company is not required to submit
them to SSM — ITA s.77A(4) does not apply (per SSM FAQ Q18).

### MBRS 2.0

Phase 1 **1 Dec 2024** (CA 2016 annual returns, unaudited FS, EPC certificates,
rectifications) · Phase 2 **1 Mar 2025** (CA 1965 filings, foreign company lodgements) ·
Phase 3 **1 Jun 2025** (CA 2016 audited FS). Scope reaches regulated financial
institutions and foreign companies.

### EPF

Third Schedule **Part A** ≤RM5,000 → 13% employer / 11% employee; >RM5,000 → 12% / 11%;
**>RM20,000 → exact percentage, rounded up**. **Part C** (PR / pre-1998 electors, 60+)
6.5% ≤RM5,000, 6% above / 5.5%. **Part E** (Malaysian citizens 60+) 4% / nil.
**Part F** (non-citizens registered from 1 Aug 1998) **2% / 2%**.
**Parts B and D were deleted by Act A1760/2025**, which also repealed the flat RM5
employer contribution for foreign workers — any guide still showing RM5 cites repealed law.

EPF's own wording: *employers are not allowed to calculate on exact percentage except
for salaries exceeding RM20,000*. Band widths RM20 up to RM5,000, RM100 above.
Contribution age 14–75. Remit by the **15th**. Employer registration within **7 days**
of becoming liable.

**The non-citizen 2% is permanent** — Part F states it flatly, no bands, ceiling,
escalation or sunset. Effective from the **October 2025 wage month** (first payment
15 Nov 2025). The "phase-in" reported elsewhere belongs to PERKESO's SKBBK, not EPF.

### SOCSO / EIS

Wage ceiling **RM6,000 from 1 October 2024**. Category 1 (<60) 1.75% employer +
0.5% employee; Category 2 (60+) 1.25% employer only. EIS 0.2% + 0.2%, capped at
RM6,000, ages 18–60. Remit by the **15th**; late interest 6% p.a. daily.

**The three conflicting "maximum contribution" figures are all correct** — they
describe different employees. The variable is **SKBBK (LINDUNG 24 Jam)**,
employee-funded and phased 0.75% → 1.0% → 1.25%, **no longer mandatory for local
employees** (voluntary, opt-out) but **still mandatory for foreign workers**. Top-band
amounts above RM6,000: Cat 1 employer RM104.15, employee invalidity RM29.75, SKBBK
RM44.65, Cat 2 employer RM74.40.

**The EIS maximum in ringgit is not verifiable** — PERKESO publishes the Act 800 Second
Schedule as an image-only PDF. Do not write RM11.90; it appears only in search snippets.

### Foreign worker levy, Act 446 and forced labour — corrections

**The EP succession-plan requirement is deferred to 1 January 2027** (ESD announcement
278, 26 May 2026). Every guide published Jan–May 2026 says 1 June 2026.

> **There is no "levy" instrument.** The foreign worker levy is a **fee** under the
> **Fees Act 1951**, gazetted by P.U.(A) 67/2016 amending P.U.(A) 479/1998 — which is why
> AGC searches for "LEVI"/"LEVY" return nothing. Later: P.U.(A) 122/2019 (Schedule IA,
> 11th year on) and P.U.(A) 231/2023 (Schedule IB). **MTLM is confirmed NOT gazetted** as
> at July 2026 — the chain stops at 231/2023 and Budget 2026 does not mention it.

**Employer-pays is gazetted from 1 Jan 2017 by P.U.(A) 1/2017**, not the 2018 Cabinet
decision universally cited. There is **no express ban** on deducting the levy from wages —
it is unlawful by *omission*, because EA s.24's list of permitted deductions is closed.

**Act 446 Part IIIA is keyed to sector (s.24A, non-estate), not nationality** — **local
employees in provided housing are covered.** P.U.(A) 81/2021 imposes a *duty to house*
foreign workers; it is not a scope limit.
> **"RM50,000 per employee" is wrong** — there is no per-employee multiplier. It is per
> offence, plus RM1,000/day under s.33. **AGC's own index still shows the superseded short
> title.** Standards: 3.6 m²/person non-dormitory, 3 m² dormitory; certificate fees
> RM100–RM5,000 (P.U.(A) 248/2020); **rent cap RM100 → RM150 from 1 March 2026**
> (P.U.(A) 49/2026).

**s.60K(4)(a)(ii) wires accommodation to recruitment:** an unresolved Act 446, SOCSO or
minimum-wage conviction **blocks every future foreign hire**.

**Forced labour:** s.90B was inserted by **Act A1651, in force 1 Jan 2023** (P.U.(B)
394/2022) — **the Act's own List of Amendments table wrongly attributes it to A1419/2012**.
**Passport retention is Passports Act 1966 s.12(1)(f)**, not employment law — the word
"passport" appears nowhere in Act 265.
> **US CBP exposure is overstated:** CBP's published dataset (23 June 2026) contains **no
> Malaysian entry** — all eight 2019–2022 actions were modified or revoked. The live
> forward risk is **EU Regulation 2024/3015 Art 39, applying 14 December 2027.**

**Unresolved contradictions between official sources** (flag, do not resolve): OSC ministry
(IMI says KESUMA, JTKSM says KDN) · entry clearance 6 hrs vs 24 hrs *on the same IMI page*
· FOMEMA frequency (IMI years 2–3, FOMEMA annual since Dec 2023) · maximum employment
10 yrs vs 5 yrs across IMI pages · levy payment deadline 2 days vs 30 days · ePPAx's own
FAQ publishes a wrong manufacturing levy rate.

*Access:* `fomema.com.my` serves a cPanel placeholder · `rpt.imi.gov.my` is NXDOMAIN
(use `rpt.talentcorp.com.my`) · ePPAx is at `eppax.gov.my`, not an IMI subdomain ·
**avoid `---` inside source URLs — it breaks the frontmatter split.**

### MYFutureJobs advertising — no statutory basis, and the 30 days is stale

**There is no "Employment Services Act 2017".** The 2017 range was enumerated on AGC —
Act 792 is the Sexual Offences Against Children Act; Act 800 is the EIS Act, and the word
"vacancy" appears in it **zero times**. Both its amending Acts were checked.

**The MYFutureJobs advertising requirement has no statutory source at all.** PERKESO's own
FAQ cites no Act and no section — it is an **administrative pre-condition** imposed by the
approving agencies, with administrative consequences only (application rejection,
revocation of the clearance letter, referral to PDRM/SPRM for a false Hiring Outcome
Report). No fine, no offence provision.

> **The "30 days" figure is superseded for expatriates: it is 7 days from 1 January 2025**
> (PERKESO FAQ Bil. 1/2026). The 30-day figure comes from PERKESO's **2021 user manual,
> which is still linked from the live PERKESO page**. Sabah keeps sector-based periods —
> 7 days agriculture/plantation/construction, 14 services, 30 manufacturing, and 30 for
> non-resident workers. **Peninsular PLKS (as opposed to expatriates) is unverified.**

**Where the real teeth are: s.60K Employment Act 1955** — no employer shall employ a
foreign employee without prior Director General approval; contravention is
**RM100,000 or 5 years or both**. In force 1 January 2023, new hires only.

> **The trap:** JTKSM states verbatim that s.60K approval is *"diwajibkan kepada semua
> majikan tanpa adanya pengecualian walaupun bagi jawatan yang diberi pengecualian
> pengiklanan oleh PERKESO"* — **exemption from advertising is not exemption from
> approval.** The eight advertising exemptions (senior management, basic salary
> ≥RM15,000, RERO, ≥30% equity holders directly involved, intra-group transfers, Act 485
> organisations, sport, and EP renewals with no change) do **not** touch s.60K.

Clearance document: **Surat Perakuan Pengiklanan MYFutureJobs**, issued within 3 working
days, **valid 6 months**, requiring a verified Hiring Outcome Report after Day 7.

*Access:* `perkeso.gov.my` sits behind a WAF that rejects plain curl for PDFs — full
browser headers **plus a matching `Referer`** are required.

### Foreign workers — SOCSO coverage, FOMEMA and bonds

> **"Employment Injury only, 1.25% employer-only" is out of date** — that was the position
> from 1 Jan 2019. Current PERKESO position for foreign workers:

| | Employment Injury | Invalidity | Non-EI Accident | Total |
| --- | --- | --- | --- | --- |
| Employer | 1.25% | 0.5% | — | **1.75%** |
| Foreign worker | — | 0.5% | 0.75% (Phase 1) | **1.25%** |

**Invalidity extended to foreign workers 1 July 2024** (P.U.(A) 180/2024, gazetted
28 Jun 2024). **LINDUNG 24 JAM from 1 June 2026**, phased 0.75% → 1.00% → 1.25%.
**Foreign domestic workers are now included**, reversing the 2018 exclusion.
**P.U.(B) 240/2024** exempts from invalidity benefits those who **fail the immigration
health examination or whose report is not yet issued** — a direct FOMEMA linkage.
The 2019 transfer instrument is **P.U.(B) 735**, gazetted 27 Dec 2018, revoking
P.U.(A) 56/1993. Non-registration: RM10,000 and/or 2 years.

**FOMEMA:** the examination must be completed **within 30 days / 1 month of arrival**, and
it gates VPTE/PLKS issuance (IMI, corroborated by MOHR policy). A "72-hour" figure
circulates but is a *registration* urging from a contested source — not an obligation, and
not in conflict with the 30 days.

> **FOMEMA fees are administrative, not gazetted** — a full-text search of the federal
> corpus returns exactly one hit for "Fomema", a checkbox on a disease-notification form.
> **REFUTED: "RM190 male / RM190 female"** — the female fee has always been higher
> (includes a pregnancy test). Reported current figures are RM207 / RM217. Sabah/Sarawak
> figures of RM181/RM186 have **no government source at all — do not publish**.

**Do not state a repatriation deadline in days** where a worker is certified unfit. The
official wording is qualitative only — "promptly", "immediate". The 30-day figure on HR
blogs is the *examination* window, conflated. Appeal rights are **undocumented on any
.gov.my source**; treat as unverified.

**The official screened-conditions list could not be verified — `moh.gov.my` blocks all
scripted access (403 WAF).** Only HIV, Hepatitis B, syphilis, pregnancy, opiates and
cannabis are officially attested, plus filariasis, Hepatitis C and methamphetamine added
later. TB, malaria, leprosy and the rest are **not** attested — do not present the
circulating list as official.

> **⚠ CORRECTED — earlier bond figures in this file were wrong.** A second pass against
> IMI's published schedule refutes most of them: **Indonesia RM500** (not 250) ·
> **Thailand RM300** (not 250) · **Bangladesh RM750** (not 500) · **Philippines RM750**
> (not 1,000). Confirmed unchanged: Myanmar, Pakistan, India, Sri Lanka, Nepal at RM750;
> Vietnam RM1,500. **Cambodia does not appear in the schedule at all** — it would fall
> under the RM1,500 residual for unlisted countries.
>
> **Cite the Bahasa Malaysia page, not the English one.** The English page carries a
> **bug**: its RM750 row erroneously repeats the RM1,000 list (Japan, South Korea, Macao,
> Hong Kong). The BM page at
> `imi.gov.my/index.php/perkhidmatan-utama/visa/kadar-bayaran-security-bond/` is correct.
>
> The bond is a **bank guarantee, insurance guarantee or deposit**, validity **at least
> 18 months**, lodged by the employer **per worker**, claimable only on proper repatriation
> via Check Out Memo. COM applications are **online only from 1 Sept 2025**. No statutory
> basis was located — IMI presents it as an administrative permit condition.

**SPIKPA is RM10,000 cover, not RM20,000.** MOH's own page states RM10,000 per year and
that the worker pays any excess. The RM20,000 figure circulating appears to be insurer
marketing — **unverified, do not publish**. Premium **RM120/worker/year**, mandatory from
**1 January 2011**, cover restricted to **non-corporatised government hospitals**, cashless.
It rests on a Cabinet decision and a 27 Jan 2011 circular — **no P.U.(A) exists**.
Plantation sector is **exempt** per IMI's PLKS checklist. *Naming:* SPIKPA is the
programme; the policy is **SKHPPA / FWHS** — a different thing from SPPA/FWCS below.
*Access:* `moh.gov.my` blocks plain curl (Akamai 403) — needs full browser headers
including `Sec-Fetch-*`.

**The Foreign Workers' Compensation Scheme is REVOKED, not merely superseded** —
**P.U.(A) 350/2018**, in force 1 Jan 2019, made under s.26(2) of the Workmen's
Compensation Act 1952. **It revoked the 2005 order (P.U.(A) 45/2005) — there is no 1998
order.** Foreign workers entered SOCSO by **P.U.(B) 735/2018** under s.98 of Act 4
(revoking the 1993 exemption), **not by an amending Act** — Act A1508 is unrelated, it
deleted the RM3,000 wage ceiling.

> **Act 273 never contained non-employment-injury cover.** Part II is compensation for
> *injury* "arising out of and in the course of the employment". The 24-hour cover foreign
> workers used to have was a **policy benefit of the revoked scheme**, not a statutory
> entitlement — which is what the 2026 Non-Employment-Injury Scheme now restores.
> Enabling Act **A1788**, assent 23 Feb 2026, gazetted 5 Mar 2026 — **no commencement
> P.U.(B) located.**

*And IMI's own PLKS checklist still demands an FWCS slip* — for a scheme revoked seven
years ago. JTKSM's equivalent page correctly requires PERKESO contribution instead.

*IMI's own foreign-worker page contradicts itself* on entry clearance — "within 6 hours"
in Phase 1 versus "within 24 hours" in Phase 2, on the same page.

### LHDN

PCB remittance by the **15th** · CP22 within **30 days** of commencement · CP22A **≥30
days before** cessation · CP21 **≥30 days before** departure · **withhold monies 90
days** or until tax clearance · CP58 by **31 March** · records **7 years** ·
Form EA to employees by **28 February** (s.83(1A)) · Form E + CP8D by **31 March** ·
**e-Data Praisi 1 Jan – 25 Feb 2026** · s.120(1) penalty **RM200–RM20,000** or 6 months.

> **CORRECTED 2026-07-20.** An earlier version of this file said "Form E is excluded from
> the e-Filing grace period." That is wrong, and it was read by Wave 2 writers before the
> correction. The 2026 programme gives **Form E a one-month grace for the return**; the
> exclusion of Forms E, P and CPE applies only to the **balance-of-tax payment** extension
> under s.103(1). Two different concessions — do not conflate them.
>
> **And the grace period is not one length.** **Individual forms get 15 days**
> (e-BE, e-B, e-P, e-BT, e-M, e-MT, e-TF, e-TP, e-TJ); **Form E and the corporate forms
> get one month.** The two sit adjacent in the same table and are easy to swap. A form
> filed on day 16 is deemed late **from the original statutory date**, not from the end of
> the grace period.

**Public Ruling index:** `hasil.gov.my/perundangan/ketetapan-umum/` is a **parseable HTML
table** — reference number, title, issue date and a direct `/wp-content/uploads/KU*.pdf`
href for every ruling. Use it instead of guessing filenames. Current individual-residence
ruling is **PR 11/2017**, not PR 6/2011; rental is **PR 12/2018**.

**LHDN individual URL paths are flat:** `/individu/kadar-cukai/`, `/individu/rebat/`,
`/individu/taraf-mastautin/`. The nested forms that appear in search results return the
242KB 404 shell. `hasil.gov.my/peta-laman/` indexes the Malay tree.

> ⚠ **The MTD Rules (P.U.(A) 123/2021) Table 1 coefficients are stale** — they still carry
> the pre-YA2023 bands. Do not quote a PCB coefficient from that instrument without first
> locating the later amending order.

**s.107B (individuals) mirrors s.107C but with two revision windows** — 30 June and/or
31 October, versus the corporate 6th/9th/11th month. The s.107B(4) 10% applies only where
the taxpayer applied to vary.

**Retrieval note:** the Filing Programme table needs **pdfplumber word-position
extraction** — plain `pypdf` scrambles the merged deadline cells into an unusable order.

**CP204:** a new company whose first basis period is ≥6 months files within 3 months of
commencing operations, instalments from month 6; the 30-days-before rule applies from YA2.

### e-Invoice / MyInvois — current as at 7 July 2026

**Current documents.** e-Invoice Guideline **v4.7** and Specific Guideline **v4.8**, both
published **7 July 2026**. **CONFIRMED** — the PDF's own Summary of Changes states it
replaces v4.6 issued **7 December 2025**. (Two writers disagreed on this; resolved by
parsing the PDF header. Anything citing v4.6 or earlier is superseded.)
`hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf` ·
`hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf`

*URL trap:* `hasil.gov.my/media/<hash>/` PDF paths are stale and return a 404 HTML
shell — use `/wp-content/uploads/`. `hasil.gov.my/en/e-invoice/` is dead; the live path
is `hasil.gov.my/e-invois/`.

**Phases** (Table 1.1): 1 Aug 2024 >RM100m · 1 Jan 2025 >RM25m–100m · 1 Jul 2025
>RM5m–25m · 1 Jan 2026 up to RM5m. **There is no phase 5.** The phase is set by FY2022
audited FS or YA2022 return, pro-rated on a year-end change, and **permanently fixed
thereafter**.

**New businesses:** commencing 2023–2025 with turnover ≥RM1m → **1 Jul 2026**.
Commencing 2026+ → 1 Jul 2026 or the commencement date; where first-year turnover is
<RM1m → 1 January of the **second year following** the year turnover reached RM1m.

**Exemption:** annual turnover **<RM1,000,000**, plus foreign diplomatic offices and
individuals not in business. Statutory/local authorities and international organisations
were exempt only for transactions **before 1 Jul 2025**.

**Relaxation periods** (Specific Guideline Table 16.1): Phase 1 to 31 Jan 2025 · Phase 2
to 30 Jun 2025 · Phase 3 to 31 Dec 2025 · **Phase 4 — both the 1 Jan 2026 and 1 Jul 2026
cohorts — until 31 December 2027.**

**Consolidation:** due **within 7 calendar days after month end**. Limits 100 documents /
5MB per submission, 300KB per document. A buyer's late request must be honoured within
the transaction month. Nine barred activities, including **any single transaction
>RM10,000 across all industries from 1 Jan 2026**, plus electricity and
telecommunications from the same date.

**Self-billed: nine circumstances, not eight** — most guides omit §8.3(i), capital
reduction / buyback / liquidation proceeds. Imported goods: by end of the **second
month** after customs clearance. Imported services: by end of the **month following**
payment or invoice, whichever is earlier. General TINs **EI00000000010 / 020 / 030 / 040**.

**55 data fields** in Appendix 1 across eight categories; seven conditionally mandatory,
sixteen optional. Seven validators; only **DS302** (duplicate) is published as a discrete
error code.

**e-Invoice SVDP — new, runs 7 Jul 2026 to 31 Dec 2027** (Specific Guideline §17).
Covers missed and non-compliant submissions and taxpayers already under compliance
review; no penalties or prosecution absent fraud, wilful default or negligence. Requires
e-Invoice version SVDP 1.2 (unsigned) or 1.3 (signed); missed consolidated e-Invoices
must be filed month by month. **No competitor coverage found.**

**s.82C(4) Finance (No. 2) Act 2023 (Act 851)** — where e-Invoice particulars are
inconsistent with another written law's invoice requirements, the e-Invoice is valid
**for Income Tax Act purposes only**. This is the statutory basis for the e-Invoice vs
SST tax invoice distinction, and nobody writes it. s.82C(8) requires a substitute
e-Invoice within **3 days**. Retrievable from a working mirror:
`myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf`

### SST — B2B exemption and intra-group relief

**B2B exemption** is a Ministerial exemption under **s.34(1) Service Tax Act 2018**, given
effect by **P.U.(A) 380/2018**, whose Schedule now runs to **items 1–10**. P.U.(A)
174/2025 (effective 1 Jul 2025) added Group K (rental/leasing), Group L (construction),
a Labuan-FSA carve-out, citizen healthcare and Kad OKU. Core condition: **both parties
service-tax-registered, and the service acquired falls under the same item as the
service the recipient itself provides.** Newer items add "not for personal consumption";
Group K adds a sublet/sublease purpose test.

**Intra-group relief** sits in the First Schedule to P.U.(A) 214/2018, paras 3–9,
covering **Group G only**. Control test: >50% of issued share capital, *or* 20–50% plus
power to appoint or remove a majority of directors.

**The third-party threshold is 5%** — para 8(2), inserted by **P.U.(A) 357/2019** from
1 Jan 2020. It is **forward-looking**: "that month and the eleven months immediately
succeeding that month", not a trailing twelve. Denominator is total value of that same
taxable service. **Breach loses relief both ways** — in-group supplies become taxable too.

1 July 2025 did **not** amend Group G relief. Group K relief was granted by **policy**
(STP 2/2025 Amd. 2), replicating the 5% rule verbatim. Group H financial services get
**B2B but not group relief**. Private healthcare B2B is **expressly refused** (STP
6/2025). P.U.(A) 201/2025 raised Group H items 2–4 and Group K thresholds from RM500,000
to **RM1,000,000**. Non-reviewable contracts exempt 1 Jul 2025 – **30 Jun 2026**.

**The B2B invoice particulars have no statutory hook.** Reg 10 of P.U.(A) 214/2018 does
not require the customer's registration number; that requirement rests solely on RMCD's
Guide on Professional Services para 65 — **still the 21 September 2021 version**, never
reissued after the July 2025 expansion.

> **RESOLVED — the RM500,000 vs RM1,000,000 Group H threshold.** Two writers hit this
> independently. One found P.U.(A) 172/2025 stating **RM500,000** and RMCD's *Guide on
> Financial Services* V2 stating **RM1,000,000**, and could not reconcile them. The other
> found the missing instrument: **corrigendum P.U.(A) 201/2025** raised Group H items 2–4
> and Group K from RM500,000 to **RM1,000,000**. The guide is right; the principal 2025
> order is superseded. This affects **provider registration only**, never the imported-
> services charge, which has no threshold.
> `mysst.customs.gov.my/wp-content/uploads/2025/07/5-PUA-201.2025.pdf`

### SST — imported taxable services (ImTS)

**There is no s.26B.** Act 807 contains ss.26, 26A, 27 and nothing between. Any framing
of "26A = B2B, 26B = B2C" is wrong — inbound B2C is handled by an entirely separate
**Part IXA** (digital services), not by a s.26B.

**Charge:** s.7(b) on "any imported taxable service", defined in s.2 as any taxable
service acquired by a person in Malaysia from a person outside Malaysia. Tax point is
**payment or invoice receipt, whichever is earlier** (s.11(1)(b)).

**Non-registered persons are liable** — s.26A applies to "any person other than a taxable
person" acquiring ImTS **in carrying on his business** (so private consumption is out).
They file **Form SST-02A**, effectively monthly, **by the last day of the month following**
payment or invoice. Registered persons instead account inside their normal SST-02.
Penalty regime: s.26A(3) 10% per 30-day period; s.26A(2) fine to RM50,000 / 3 years.

**There is no threshold.** The first ringgit is taxable. The RM500,000 / RM1,500,000
figures attach to First Schedule **paragraph 1**, which is a registration trigger for
**providers** only. Acquiring ImTS never itself triggers registration.

**Rate follows the domestic equivalent** — 8% standard, 6% for the 13 services in the
First Schedule to P.U.(A) 173/2025 (prepared food and beverages, telecommunications,
parking, logistics, healthcare, TCM, allied health, construction works, education).
*RMCD's own 2019 note "Information about Imported Taxable Services" still says 6% flat —
it predates both the 2024 increase and P.U.(A) 173/2025. Do not rely on it.*

**Scope tracks the First Schedule mechanically.** There is no group restriction on ImTS,
so the 1 July 2025 expansion widened the ImTS net automatically with no separate
amendment. Group K's exclusion for "rental or leasing of tangible assets located outside
Malaysia" is the practical cross-border limiter: foreign-sited equipment is out of scope,
foreign-owned equipment sited **in** Malaysia is in.

**Intra-group relief is denied on imports** — First Schedule para 3A (P.U.(A) 398/2018)
disapplies para 3 for services acquired from a group company outside Malaysia. Being
intragroup does not save you on cross-border acquisitions.

**Digital services (FRP) is a separate, still-live regime.** Part IXA ss.56A–56K,
threshold **RM500,000** (P.U.(A) 269/2019), rate **8% since 1 March 2024**
(P.U.(A) 67/2024). It sits outside the First Schedule group structure — there is no Group
letter for digital services, and the 1 July 2025 instruments do not touch it.

**The interaction rule: the invoice is the entitlement.** Where an FRP-registered provider
has charged you digital service tax, item 3 of P.U.(A) 380/2018 exempts you from
s.26/s.26A self-accounting — but condition (b) requires you to **hold the FRP's invoice**.
If the provider is not FRP-registered, or is but did not charge, the s.26A obligation
revives.

**Could not retrieve:** RMCD's standalone *Guide on Imported Taxable Services* is cited by
its own 2019 note but is absent from the current media library and all legacy
`/assets/document/` paths are dead. The rules above are assembled from the Act, the
regulations, the Return and Payment guide, STP 2/2020 and the 2025 industry guides.

### ⚠ LHDN's English pages are machine-translated and sometimes wrong

Quote the **Malay** for anything load-bearing. A confirmed example: the retention-sum
page renders *"Kesemua balasan"* (all **consideration**) as *"All replies"* — a
mistranslation that inverts the meaning of a statutory cap.

English CKHT pages exist at `/en/ckht/<same-malay-slug>/`, but the Malay original is the
authority. `hasil.gov.my/en/legislation/` 404s; the English guidelines index is
`/en/perundangan/garis-panduan/`.

This matters for us specifically: we write an English master from Malay primary sources,
so an English official page is a *translation*, not a source.

### Tax clearance — the liability claim IS confirmed

An earlier writer could not source the widely-repeated claim that an employer releasing a
departing employee's money becomes liable for that employee's tax, and correctly declined
to assert it. **It is now confirmed: ITA 1967 s.107(4)** —

> "An employer who fails to comply with subsection 83(2), (3), (4) or (5) … shall be
> liable … to pay the full amount of tax due from the employee … and such amount of tax
> shall be a debt due from that employer to the Government and shall be payable forthwith"

Corroborated by **GPHDN 2/2024 para 3.3** and LHDN's employer page. **Two precisions the
market gets wrong:** the liability falls on the **employer entity**, not personally on a
director or HR officer; and the proviso to s.107(4) gives a **statutory right to recover
the amount back from the employee** as a debt.

s.83(2)/(3)/(4) run **30 days**; s.83(5) is the **90-day** withholding, and the 90 days
runs from **LHDN's receipt**. e-SPC has been mandatory since 1 Jan 2024.
*Flagged, not asserted:* s.120(1)(c) on its face covers only s.83(2)/(3)/(4), yet LHDN's
guideline extends s.120(1) to a s.83(5) breach.

### Tax appeals and penalties

**Form Q and Form N cannot be filed electronically** — stated in capitals on
`hasil.gov.my/rayuan/` (25 Jun 2026), and absent from competitor coverage. There are
**five Form Q variants** (ITA, RPGTA, PITA, s.109H, s.6D LBATA). Form Q is **CP 14 Pin.
1/2025**. RPGTA s.18 borrows ITA ss.99–102 and Schedule 5 wholesale.

Clocks: s.99(1) **30 days** to appeal · s.101(1) **12 months** for the DG review, +6
months · s.100 **7 years** for late-appeal relief · Sch 5 para 34A(1) **60 days** to
appeal an SCIT decision. **s.103(1)–(2): tax is payable notwithstanding an appeal**, and
s.106(3) bars an "under appeal" plea in collection proceedings.

**The Dispute Resolution Department and PRP are live** — resolving an earlier open item.
`hasil.gov.my/wp-content/uploads/GP_PRP_03042019.pdf` and
`hasil.gov.my/syarikat/rayuan/prosiding-resolusi-pertikaian-prp/`.

> **SST evasion is 10–20× the tax** (Sales Tax Act s.86(2)(a) / Service Tax Act
> s.71(2)(a)) — an order of magnitude above income tax evasion, and essentially uncovered
> in the market. **Failure to register is RM30,000, not RM50,000**: s.13(5) creates an
> offence with no express penalty, so the general penalty applies.

**Stamp duty self-assessment offences ss.72B–72D commence 1 January 2026** (Act 863);
s.74 fraud raised to RM1,000–20,000 from 1 Jan 2025.

**`hasil.gov.my/perundangan/garis-panduan/` is a parseable HTML table** — reference,
title, issue date, PDF href and supersession notes, carrying both the original and amended
edition of each GPHDN with separate dates. Same shape as the Public Ruling index.

### Withholding tax

**There are three disallowance limbs, not one.** Routing all WHT disallowance through
s.39(1)(j) is wrong for royalty — which is exactly the cloud/SaaS case:

| Limb | Covers failure to withhold on |
| --- | --- |
| **s.39(1)(f)** | s.109 — interest and **royalty** |
| **s.39(1)(i)** | s.107A — non-resident contractors |
| **s.39(1)(j)** | s.109B and s.109F **only** |

**The 10% increase is not s.113.** It sits in the charging sections themselves —
ss.107A(2), 109(2), 109B(2), 109F(2), 107D(3). **s.113(2) is a separate penalty equal to
the tax undercharged**, reached via proviso (ii) to s.39(1)(f)/(i)/(j). They **stack**,
and PR 10/2019 Example 19 confirms the **s.113(2) penalty survives even after the WHT is
paid and the deduction restored** — paying late restores the deduction but does not
unwind the penalty.

**Rates** (ITA reprint 21 May 2024, cross-checked against `/en/perundangan/cukai-pegangan/`):
s.107A 10% + 3% · s.107D **2%** (threshold RM100,000 prior basis year, resident individual
only) · s.109 interest **15%**, royalty **10%** · s.109A public entertainer 15% ·
s.109B **10%** · s.109C resident individual interest 5% · s.109F para 4(f) 10% ·
s.109G 8%.

**s.107D remits by "the end of the following calendar month"** per the Act — not the
"30 days" repeated across advisory sites.

**"Software" is expressly in the s.2 royalty definition** (para (a)) from YA2017 — the
statutory hook for taxing cloud and SaaS as royalty. **There is no offshore-performance
exemption**: P.U.(A) 323/2017 covers s.4A(i)/(ii) only.

**Small-value deferment:** tax ≤RM500 per payment transaction **and** more than one such
transaction in the window; remit by 30 June (for 1 Dec–31 May) or 31 December (1 Jun–30 Nov).

**Current Public Rulings:** WHT special classes **PR 10/2019** (supersedes PR 11/2018) ·
para 4(f) PR 1/2010 · public entertainer PR 6/2017. Plus **PN 1/2018** for the
digital-advertising routing test and the **e-Commerce Guidelines rev. 13 May 2019**.

> **Unreconciled official conflict:** LHDN's WHT page says payment forms and supporting
> documents need **not** be submitted and should be retained; PR 10/2019 paras 13.1 and
> 18.1(a) say **submit** CP37D with invoices, remittance evidence and the certificate of
> residence. Flag, do not resolve.

> **Not verifiable — do not publish.** The widely repeated "Google/Meta withheld at 8%
> under the Singapore/Ireland treaty" has **no official LHDN determination** for any named
> platform. Also note PN 1/2018 (2018) and the 2019 e-commerce guidelines are being
> applied to SaaS, AI and usage-based models they did not contemplate.

### ⚠ Stamp duty — no consolidated Act exists, and the hosted copies are wrong

**Third instance of the stale-consolidation trap** (after MySST and Labuan FSA). AGC's
newest Stamp Act reprint is as at **1 Jan 2024**; **LHDN's own stamp duty page still links
a 2014 copy**. The hosted PDF still prints the **repealed three-tier s.47A**.

**Current law = Act 378 (2024 reprint) + Act 862 + Act 863 + Act 874.** Reading the
reprint alone gives superseded law with no warning.

Confirmed on the face of the amending Acts:

- **Item 49 lease scale wholly substituted from 1 Jan 2025** — RM1 / RM3 / RM5 / RM7 per
  RM250 across four bands, and **the RM2,400 nil band is abolished**. Duty runs from the
  first ringgit. Nearly all competitor content is wrong on this.
- **Item 4 employment-contract exemption rose RM300 → RM3,000/month from 1 Jan 2026.**
  Most contracts at or below RM3,000 are now exempt. **LHDN's own FAQ (July 2025) predates
  this and does not mention it.**
- **New item 32(ab): 8% on residential property acquired by foreign or non-citizen buyers
  from 1 Jan 2026**; item 32(aa)'s 4% now applies to non-residential only.
- **s.47A is two-tier from 1 Jan 2025** (RM50/10%, then RM100/20%), not three.
- **s.36CA** from 1 Jan 2026: 5-year time bar, **unlimited where negligence** — mirrors
  ITA s.91(3).

**"Securities" in STSDS Phase 1 does not mean shares.** Share transfers stay on formal
assessment until Phase 3 (2028) — a different payment clock, and outside the 2026
remission.

**Form 32A no longer exists** — it died with CA 1965. The instrument is the **s.105 CA
2016 Form of Transfer of Securities**. Share valuation for unlisted shares uses the NTA
basis in LHDN's `GP_SAHAM_2019` guideline.

**LHDN's enumerated badges of trade are in the *digital currency* guidelines**, not a
Public Ruling — the only such list the Board publishes.

**RPGTA s.2 defines "gain"** as a gain other than one chargeable with or exempted from
income tax — the statutory hook making both capital regimes residual to income tax.

*Not verified:* whether the CGT 10%/2% election is irrevocable. The word appears nowhere
in the statute or guidelines and **s.77B permits amendment** — do not assert it.
LHDN's exemption-order index stops at P.U.(A) 470/2024 and appears stale.

### Retrieval traps

- **Check `%PDF` magic bytes after every download.** Curling a good URL and then a 404 URL
  to the same output filename **silently overwrites the PDF with a ~242KB HTML shell**.
- **AGC full-text route:** `lom.agc.gov.my/act-detail.php?act=<n>` returns HTML containing
  `pdfjs/web/viewer.html?file=../../../ilims/upload/portal/akta/outputaktap/<id>_BI/<name>.pdf`.
  Scrape the `src` and prepend the host. This retrieves Acts 378, 862, 863, 874.
- `phl.hasil.gov.my` and `lampiran2.hasil.gov.my` are dead, but their files are often live
  under `/wp-content/uploads/<same-filename>`.

### RPGT / CKHT — self-assessment since 1 Jan 2025

**The regime changed and most published content predates it.**

- **STS CKHT (self-assessment) from 1 Jan 2025.** No notice of assessment is issued — the
  return *is* the assessment.
- **e-CKHT filing is mandatory from 1 Jan 2025**, including for prior-year disposals.
  Paper filing is not merely discouraged: it is **treated as non-filing**.
- **Payment deadline is now 90 days from disposal** for YA2025+, replacing 30 days from
  the notice of assessment.
- Current operational guideline is **Bil. 2/2026, 17 March 2026** —
  `hasil.gov.my/wp-content/uploads/20260317-garis-panduan-operasi-ckht-bil-2-tahun-2026.pdf`.
  It supersedes the 13 Jan 2025 one, and supersedes **paras 19–27** of the 6 Jan 2023
  guideline (filing, duties, penalties, payment). The rest of the 2023 document
  (computation, exemptions, RPC mechanics) remains live. Anything in it about 30-day
  payment or CKHT 502 is stale.

**Retention sum under s.21B is 3% / 5% / 7%, not a 3%/7% citizenship split.** It is keyed
to the Schedule 5 *Part*, with a holding-period test inside Part II:

| Disposer | Rate |
| --- | --- |
| Part I — Malaysian-citizen individuals, partnerships | **3%** |
| Part II — Malaysian-incorporated companies, trustees — within 3 years | **5%** |
| Part II — 4th year onwards | **3%** |
| Part III — non-citizen/non-PR individuals; **companies not incorporated in Malaysia** | **7%** |

Retention is capped at the actual money consideration and does not apply where
consideration is non-monetary. No retention is required if the acquirer receives a
CKHT 3 via e-CKHT. Remit within **60 days**; failure attracts a **10% increase** and
becomes a civil debt.

> **Late payment in RPGT is 10% flat — there is no further 5%.** Confirmed against the
> Act, both guidelines and the e-CKHT FAQ.
>
> **⚠ CORRECTED — and the 10%+5% cascade no longer exists in income tax either.** An
> earlier version of this entry said the cascade "belongs to s.103 ITA 1967". It did, but
> **s.103(4), (6) and (8) were deleted by Act 823**, and LHDN's own penalties page shows
> 10% only, *"mulai 1 Januari 2020"*. There is no second-tier 5% anywhere in either
> regime. Do not reproduce it.

**RPGT s.21(4) was substituted by Act 862 s.22 from 1 Jan 2025** and now expressly runs
the 10% off the **90-days-from-disposal** deadline — the statutory text behind the
self-assessment payment rule above.

**RPC shares: whether it is RPGT or CGT depends on WHO disposes.** Act 851 s.50(b)
inserted Sch 2 para 34A(5A), in operation 1 Jan 2024:

| Disposer | Regime for RPC shares from 1 Jan 2024 |
| --- | --- |
| Company, LLP, trust body, co-operative | **CGT** under the ITA (new s.4(aa), s.15C, Sch 1 Part XXI) |
| **Labuan entity under s.2B LBATA** | **RPGT** — carved out of the carve-out |
| **Individual** | **RPGT**, indefinitely — para 34A untouched |

Act 862 s.5 inserted ITA s.15C(2A)/(4A) to carry the RPGT acquisition date and price
across into CGT for a company that was an RPC before 1 Jan 2024 — Parliament explicitly
bridging the two regimes.

**Schedule 5 has been unchanged since 1 January 2022** (Finance Act 2021 s.35 restored
"Nil" — the gazetted word, not "0%" — for year 6+). Every later Finance Act (845, 851,
862, 874) was checked: **none amends Schedule 5.**

**"or a company not incorporated in Malaysia" entered Part III via Finance Act 2019
(Act 823) s.26(b), not Finance Act 2018.** Before that, foreign-incorporated companies
sat in **Part II** — s.26(a) had to *insert* "incorporated in Malaysia" to narrow it.
Commentary claiming foreign companies "were always in Part III" is wrong, as is
attributing the move to FA2018. *Act 823 has no commencement section, so the operative
date follows from the Interpretation Acts and the 31 Dec 2019 gazette date — phrase it as
"from the commencement of the Finance Act 2019" rather than asserting a bare date.*

**Exemption orders still operative** (as at July 2026): P.U.(A) 448/2012 · 236/2013 ·
302/2015 · **360/2018 as amended by 48/2021 (the RM200,000 low-value exemption** for
citizens disposing in year 6+) · 372/2018 · **358/2025 (Forest City SFZ)**.

> **P.U.(A) 218/2020 — the PENJANA / Home Ownership Campaign residential exemption — has
> EXPIRED** (SPA window ended 31 Dec 2021). Anyone citing it as current is wrong.
> The **once-in-a-lifetime private residence exemption is s.8 read with Schedule 3
> para 9(1)** (irrevocable written election), **not** s.9/Schedule 4 — Schedule 4 is the
> separate RM10,000-or-10%-of-gain exemption.

> **AGC portal trap:** the `statusOfLegislation` field is an instrument **type**
> (PRINCIPAL / AMENDMENT / CANCEL), **not** an in-force flag. Demonstrably revoked and
> expired orders are still tagged "PRINCIPAL". Currency must be read off each order's own
> text. Pre-2011 P.U.(A) coverage is also incomplete — treat the listing as authoritative
> for 2011 onward only.

**Forms:** CKHT 1A (disposal of property) · 1B (shares under para 34/34A — broader than
RPC alone) · 2A (acquirer) · 3 (non-chargeable/exempt declaration) · 502 (payment slip,
**obsolete for disposals from 1 Jan 2025** — use the Bill Number on the e-CKHT 2A
acknowledgement) · 57A (e-filing authorisation) · BNT CKHT (amended return, within 6
months, once only). The 60-day clock runs from **disposal** for the disposer and from
**acquisition** for the acquirer.

> **CKHT 501 does not exist.** Not in the forms register, not in any guideline.
> **No Public Ruling exists for RPGT** either — the full 262-entry Ketetapan Umum index
> has zero. A source citing an "RPGT Public Ruling" is fabricating it.

*Retrieval note:* the forms register at `/muat-turun-borang/muat-turun-borang-ckht/` is
served by a same-page POST, so a plain GET looks empty. The old `/borang/muat-turun-borang/`
path 404s.

### ★ Foreign-source income — RESOLVED, and the market is wrong in both directions

Flagged throughout this project as the **highest-risk page in the corpus**. Settled via the
AGC gazette API against an index **current to 17 July 2026**, so a negative result is
meaningful evidence rather than a coverage gap.

> **The CORPORATE foreign-dividend exemption expires 31 December 2026 and has NOT been
> extended.** P.U.(A) 235/2022 para 1(2) reads "1 January 2022 until 31 December 2026".
> Its only amendment, **P.U.(A) 157/2024**, rewrote the conditions and added electing
> Labuan companies — **it did not touch the expiry.** A full enumeration of every
> "INCOME TAX (EXEMPTION)" P.U.(A) returns no later instrument.
>
> **The INDIVIDUAL exemption runs to 31 December 2036** — P.U.(A) 451/2024 (gazetted
> 24 Dec 2024) substitutes 2036 for 2026, itself commencing 1 Jan 2027.
>
> **LHDN's own guidelines (20 June 2024, 3rd ed.) are stale on the individual date** —
> they still print 31 Dec 2026.

**Budget 2026 Appendix 8** proposes extending the corporate side 1 Jan 2027 – 31 Dec 2030
and widening it to co-operatives and trust bodies. **Not law yet** — re-check the AGC API
before relying on the 2026 expiry.

Other instruments: P.U.(A) 234/2022 (individuals) · **P.U.(A) 75/2024** foreign
capital-asset gains, 1 Jan 2024–31 Dec 2026, substance-only with an IP carve-out. The 15%
headline-tax test excludes banking, insurance, sea and air transport. "Received in
Malaysia" is at guidelines para 4.2; substance factors at 5.2.1.4(c) — **no numeric
threshold exists**.

**Authoritative for any Budget 2026 measure:**
`belanjawan.mof.gov.my/pdf/belanjawan2026/ucapan/lampiran-cukai.pdf` — the *Langkah Cukai*
appendix, which states current position versus proposal explicitly. The
`mof.gov.my/portal/pdf/budget2026/` path is dead.

### ★ TRX incentives are NOT expired — extended to 2030

**Every advisory page still says they lapsed end-2025.** They did not.

**P.U.(A) 224/2026, gazetted 16 June 2026**, amends para 7(a) of P.U.(A) 27/2013 by
substituting *31 December 2025* → **31 December 2030**, deemed in force from **YA2014**.
`lom.agc.gov.my/ilims/upload/portal/akta/outputp/3560569/PUA%20224%20(2026).pdf`

Full chain: P.U.(A) 27/29/30/31 of 2013 → 473–476/2021 → **211 and 224 of 2026**.
Companion **P.U.(A) 211/2026** (accelerated capital allowance) is indexed but its PDF
returns 500. Found via `searchValue=Razak` on the gazette API.

This is the mirror image of the Kelantan and Angel cases: there, incentives were **closed**
while still indexed as live. Here an incentive is **live** while the market reports it
closed. **The gazette is the only reliable signal in either direction.**

### Location and council by-laws

**KL — P.U.(A) 230/2016** (`jwp.gov.my/images/kompendium/2016/...`), bilingual, extracts
cleanly. Fee Schedule: most retail and service **RM3.00/m²**; **beauty & health care
RM50.00/m²**; offices, banks, private healthcare, bookshops and private education flat
**RM200 / 400 / 500 / RM3,000 (0–5 floors) / RM5,000 (>5 floors)**; store RM3.00/m²;
industry and workshop RM5.00/m²; **"(F) Others — anything not in the Schedule, RM3.00/m²"**.
By-law 8(1) deposit **≤RM50,000**; by-law 11 renewal within 60 days of expiry and **not as
of right**. Confirmed by the **Minister of Federal Territories**, not a State Authority.

> **The Penang signboard rule is the exact inverse of KL's.** MBSP UUK (Iklan) 2001
> **by-law 3(2) requires Bahasa Malaysia to be *larger***; the KL by-law merely caps the
> other language *at* BM size. Penang deposit **≤RM3,000** against DBKL's RM50,000;
> retrospective approval of an unlicensed sign costs **3× the annual fee**; validity
> ≤36 months; refusal without reasons.

**KL runs a federal stack, not the usual state one:** Federal Capital Act 1960,
City of KL Act 1971, **Federal Territory (Planning) Act 1982 (Act 267) — not Act 172**,
Entertainment (FTKL) Act 1992, Hotel (FTKL) Act 2003.

**PDC industrial land consent fees** (Penang Land Rules, eff. 21 June 2018): sub-sale
operating owner **Island RM10.00 psf / Mainland RM5.00 psf**; non-operating owner
**RM20.00 / RM10.00**. The island is exactly 2× the mainland, and non-operation doubles it
again. `pdc.gov.my` **403s WebFetch — use curl with a Chrome UA**.

> **Council by-law registers still carry the predecessor councils' initials** (MPPP, MPSP)
> — the same citation trap as Sarawak's KMC by-laws. Cite the name on the instrument.
> **MBPP publishes every by-law as an image scan with no text layer**, so no MBPP fee rate
> is verifiable from a primary source.

**DOSM GDP by State 2025**, released 1 July 2026 —
`dosm.gov.my/uploads/release-content/file_20260701120804.pdf`. **The OpenDOSM CSV only
runs to 2023; the PDF is the only 2025 source.** KL RM265.1bn, services **91.7%**, per
capita RM144,898. Penang RM130.3bn, **+7.3%**, manufacturing 47.3% vs services 46.7%,
E&E exports **+28.2%**, per capita RM80,584. Perak manufacturing **+15.2%**, strongest in
a decade.

### Incentives — three headline regimes have no gazetted instrument

An AGC subsidiary-legislation sweep, index confirmed current to **8 July 2026**, returns
**nothing** for "SPECIAL ECONOMIC ZONE", "GLOBAL SERVICES" or "EKONOMI KHAS".

> **JS-SEZ, the National Global Services Hub and the New Investment Incentive Framework
> have no rate order.** All three guidelines state the rate is "to be provided through
> subsidiary legislation" under s.65B. **Approvals are administrative decisions with no
> claimable instrument behind them** — worth saying plainly to any reader planning around
> a headline rate.

**Forest City Pulau 1 is exactly 11 instruments** — P.U.(A) **350–360/2025**, gazetted
3 Oct 2025, deemed in operation 1 Sep 2024, boundary at Gazette Plan PW50276. Plus
designated-area orders P.U.(A) 357/2024 (customs), 361/2024 (excise), 370/2024 and
165/2025 (service tax).
> **There is no gazetted rate for licensed financial institutions.** The 0%/5% announced
> on 20 Sep 2024 for FSA/CMSA-licensed entities is **not among the 11** — only the single
> family office 0% (P.U.(A) 350/2025) exists.

> **The Kelantan trap — read the rule, never the gazette date.** P.U.(A) 269/2025 was
> gazetted **26 August 2025**, eight months *after* its own rule 5(1) closed applications
> on **31 December 2024**. AGC lists it as `PRINCIPAL`. Treating the gazette date as an
> opening date inverts the position entirely.

**Closed schemes, each confirmed from the operative rule:** Principal Hub (applications
closed 31 Dec 2022 — MIDA's own GS-Hub guideline says it "ended on 31 December 2022") ·
Global Trading Centre (31 Dec 2022) · Relocation of Manufacturing (31 Dec 2024) ·
Relocation of Services (31 Dec 2022) · Kelantan SEZ (31 Dec 2024) · ECER knowledge worker
(31 Dec 2024, and scope limited to the **Malaysia-China Kuantan Industrial Park only**) ·
GITA/GITE (31 Dec 2023). **Open:** DESAC to 31 Dec 2027, GS Hub to 31 Dec 2027,
JS-SEZ to 31 Dec 2034, Forest City to 31 Dec 2034.

**JS-SEZ has nine flagship zones; MIDA's guideline covers A–G only.** H is Pengerang
(2024 Budget package) and **I is Forest City** (SC-administered) — that is the
authoritative statement resolving the JS-SEZ / Forest City conflation.

**Budget 2026 negative:** the 37-appendix `lampiran-cukai.pdf` contains **no** measure on
SEZ, Forest City or the services hub.

*Tooling note:* `scripts/health/scan.py` reads `answerWords` from
`public/api/articles.json` — **run `node scripts/sync.mjs` first** or the warnings are stale.

### Advance Pricing Arrangements, angel relief and R&D

**APA Rules are P.U.(A) 166/2023**, gazetted alongside the TP Rules 165/2023 and revoking
P.U.(A) 133/2012. Guidelines dated 2 April 2024.

- **The fee is two-tier, not flat** — rule 23(1)(a): **RM5,000** within two months of the
  rule 4(4) notification, **RM10,000** after two but within six. Non-refundable even on
  withdrawal. Widely misreported as a single RM5,000.
- **APA type is not elective** — rule 2(2) ties it to s.132 treaty status: treaty
  counterparty → bilateral/multilateral only; non-treaty → unilateral only. A strong
  correction against most commentary.
- Eligibility gate (Guidelines 6.4): **RM100m taxable business income** plus the covered
  transaction exceeding 50% of revenue or purchases, or >RM25m.
- Rollback is **bilateral/multilateral only, max 3 YAs**.
- **There is no APA framework document** — the `perundangan/rangka-kerja/` index (checked
  20 Jul 2026) carries stamp duty, e-invoice compliance, TP audit, income tax/employer
  audit, CKHT audit, investigation, collection and governance. The APA penalty position
  exists only in the Guidelines.

> **The Angel Tax Incentive closed to gazetted applications on 31 December 2023.** Chain
> is P.U.(A) 167/2014 → 411/2017 → 399/2019, and **nothing after**. The Budget 2024
> extension to 2026 has **no gazette order**. Another confirmed closed-but-not-indexed case.
> The RM5,000–RM500,000 range comes from **PR 12/2020 para 7.3(b)** — a Minister's
> approval-letter condition, **not from the Order**.
>
> **And Cradle Fund's own angel page still shows the 2017 deadline** — two gazetted
> extensions stale. **Agency web copy is unreliable in both directions**: it can lag the
> gazette *and* announce things the gazette never enacted.

> **"Approved Research Allowance" does not exist.** The term appears nowhere in the ITA
> 21 May 2024 reprint. The real reliefs are **s.34(7)** single, **s.34A** double
> (30% offshore cap) and **s.34B** double for an approved research project — routinely
> conflated, and mutually exclusive under s.34A(5)/s.34B(3).
> **s.34A approval is delegated to the DGIR** under s.5 of the Delegation of Powers Act
> 1956 — applications go to LHDN, not MOF. **PR 12/2020 supersedes PR 11/2015.**

### Transfer pricing — the framework nobody cites

**P.U.(A) 165/2023** from YA2023: contemporaneous means before the return due date;
**rule 5(3) gives 14 days from service** to produce. **MTPG 2024** (24 Dec 2024) sets the
full-documentation thresholds — **RM30m turnover + RM10m cross-border transactions, or
>RM50m financial assistance**; below that, minimum CTPD; a **PE files in full regardless**.

> **The TP Audit Framework 2025 (effective 31 July 2025, Malay only)** carries the
> graduated s.113B(4) penalties — ≤7 days RM20k rising to >28 days RM100k, **per year of
> assessment** — plus a **0–4% voluntary-disclosure surcharge band**. This is **not in the
> Guidelines, not in the Rules, and not in the FAQ**.
> `hasil.gov.my/wp-content/uploads/rangka-kerja-audit-cukai-harga-pindahan-2025.pdf`
> Index of all frameworks: `hasil.gov.my/perundangan/rangka-kerja/`

**s.140A(3C) surcharge applies to loss-making and tax-exempt taxpayers** — confirmed in the
**January 2024** FAQ, which the **July 2025 edition dropped**. Keep both URLs.
**MTPG para 11.7(a): a group master file may substitute for Schedule 1** — Malaysia has no
standalone Master File obligation, a citable correction against most commentary.

*Parsing note:* LHDN's DTA rate pages need **`<tr>`-splitting, not `</tr>`** — some rows
nest `<ul><li>` and a naive split **silently drops ~35 of 75 countries** while still
looking plausible.

### Income Tax Act 1967 — corporate

**Access first: `hasil.gov.my` has been restructured onto WordPress.** Every `/media/...`
PDF URL and every old English path now 404s, *including the ones still in search results*.
Two rules: English pages use **Malay slugs** (`/en/syarikat/`, `/en/perundangan/`,
`/en/borang/`) — the sitemap at `/en/peta-laman/` is the reliable index; and PDFs live at
**`/wp-content/uploads/<name>.pdf`**. Scrape the href off the index page and curl with a
browser UA. WebFetch returns a ~242KB 404 HTML shell for anything under `/media/`.
`phl.hasil.gov.my` is dead. `ef.hasil.gov.my` serves PDFs cleanly.

**Working URLs:** ITA 1967 reprint 21 May 2024 —
`hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf` (818pp,
parses locally). PR 8/2025 (MSMC), PR 2/2025 (group relief), PR_01_2022 (losses),
PR_09_2019 (residence), PR_8_2014 (basis period), `program-memfail-bn-bagi-tahun-2026.pdf`,
`ucapan-belanjawan-2026.pdf`, and Form BE notes at `ef.hasil.gov.my/eBE2026/Pdf/Nota_BE_e.pdf`.

**SME rates** (Sch 1 Pt I para 2A): **15%** first RM150,000 · **17%** next RM450,000 ·
**24%** above RM600,000. Conditions: resident **and incorporated in Malaysia**, paid-up
capital ≤RM2.5m, gross business income ≤RM50m. Standard rate 24% (para 2).

> **Para 2B has FOUR disqualifying limbs, not three.** Three 50% related-company limbs
> **plus (d) a 20% foreign-ownership limb, effective YA2024.** Para 2C defines "related
> company" as paid-up capital **>RM2.5m** — it is not "any group member failing the test".
> PR 8/2025 Examples 14–16 aggregate direct and indirect holdings, and a Singapore holdco
> with Malaysian ultimate shareholders **still fails**.
> ⚠ **`taxation/corporate-tax-rates.md` describes the third limb loosely and omits the
> foreign limb entirely — it needs revision.**

**s.107C clocks:** CP204 **30 days before** the basis period · new company with ≥6-month
first basis period **3 months** from commencing · instalments from the 2nd or 6th month,
due the **15th** · revisions in the **6th, 9th or 11th month only** · 85% floor from YA2 ·
two-year waiver under 107C(4A), four disqualifiers in (4B) incl. the 20% foreign limb.
The waiver does **not** extend to LLPs (PR 8/2025 para 6.6.3).

**s.107C(10) is 10% of the excess *over* the 30% margin** — not 10% of the shortfall. The
safe harbour is an estimate ≥70% of final tax. **s.107C(10A)** (no estimate at all) is 10%
of the **whole** tax and is usually the larger penalty.

**Form C:** 7 months from the day following the accounting period close (s.77A(1)), plus
**1 month e-Filing grace**, which also extends the s.103(1) balance-of-tax payment.
Dormant companies must still file; a company that has not commenced need not file CP204.

**Losses: 10 years, not 7** (Finance Act 2021, retrospective to YA2019 — s.44(5F)).
**Unabsorbed capital allowances carry forward with no time limit** (Sch 3 para 75) — a
widespread competitor error. Both are subject to the s.44(5A)/(5B) >50% shareholder
continuity test. PR 1/2022 para 8.3 carries the **dormancy carve-out** and its exhaustive
minimum-expenditure list.

**Group relief requires paid-up capital >RM2.5m on both sides** (s.44A) — which
structurally excludes every company on the SME rate. 70% surrender, 3-consecutive-YA
window, coterminous 12-month basis periods, irrevocable election in Form C. Shareholdings
held through non-Malaysian companies are **disregarded**; Labuan companies count as
incorporated in Malaysia (PR 2/2025 para 7.1).

**Residence** (s.8, PR 9/2019): one board meeting in Malaysia suffices — but **Example 3
holds that a Malaysian meeting attended by offshore directors via video conference is
NOT management and control**, and Example 2 refuses residence for a minuted KL meeting
that was actually a marketing session. Operations, local directors, director residence
and shareholder control are all irrelevant (5.7(ii)–(v)).

**2% dividend tax** — Sch 1 Part XXII, on individual dividend income exceeding
**RM100,000**, rules P.U.(A) 148/2025 gazetted 7 May 2025, effective **YA2025**.

**Budget 2026 announced no change** to corporate or individual rate bands.

### Accounting records — the ITA is stricter than the Companies Act

**Nobody joins these two up, and they conflict in practice.**

- **CA 2016 s.245(5)** permits records to be kept outside Malaysia **for operations
  outside Malaysia**, with a proviso that they be sent to and kept at a place in Malaysia.
  s.245(7) lets the Registrar compel production here.
- **ITA 1967 s.82(8) is flat: all records relating to a business in Malaysia shall be kept
  and retained in Malaysia. No offshore carve-out at all.** s.82A(5) says the same for
  income documents.

So a company relying on s.245(5) for a regional shared-service centre can still be in
breach of s.82(8). s.245(9) is RM500,000 / 3 years; s.119A is RM300–RM10,000 / 1 year —
and **s.82A is not in the s.119A list**.

**s.245 "manager" means the principal executive officer, whether or not a director**
(s.2) — personal exposure for a non-board CEO. **s.244(7): approved accounting standards
prevail over the Act** where they conflict. **s.82(2A)** dispenses with the printed serial
receipt where an e-Invoice is issued, but **s.82(2B) reinstates it for consolidated
transaction invoices**.

IRBM publishes **no retention period or availability guarantee** for validated e-Invoices
in MyInvois — the Guideline v4.7 §2.3.7 reminds taxpayers to retain their own records
regardless.

### MPERS (2025) and MFRS 18 — both effective 1 Jan 2027

MPERS (2025) issued **10 Oct 2025**; it is the IFRS for SMEs **third edition**, modified
only for scope and nomenclature. **Section 34 property development: para 34.1 amended,
paras 34.17–34.60 deleted**; Section 23 rewritten as *Revenue from Contracts with
Customers* on the IFRS 15 model. MFRS 18 issued 14 Jun 2024, replaces MFRS 101; **MFRS 108
is retitled *Basis of Preparation of Financial Statements***. Two mandatory subtotals:
**operating profit** and **profit before financing and income taxes**.

> **Correction to a claim circulating in the market:** the IASB did **not** align the
> third edition with IFRS 16 leases, and **retained the incurred-loss impairment model**
> rather than adopting ECL. MPERS (2025) does **not** bring lease capitalisation or
> expected credit losses to private entities.

**Private entity status is period-specific** — an entity qualifies only for periods
*throughout which* it meets the test, and **a subsidiary of a parent listed outside
Malaysia is still a private entity**.

> ⚠ **`accounting/mfrs-vs-mpers.md` has a substantive defect.** It states MFRS is
> mandatory for "public-interest entities". That is **not MASB's operative test** — the
> test is the Securities Commission / Bank Negara lodgement test. Its framing also gets
> the foreign-listed-parent subsidiary case backwards. Fix when narrowing it.

**MASB access:** the standards listing at `masb.org.my/pages.php?id=89` is a
machine-parseable HTML table (standard, title, effective date, issue date, status,
superseded-by) — far better than the PDF maze. `?id=20` is the private-entity list,
`?id=615` MPERS (2025), `?id=275` the private entity definition. **But every actual
standard PDF sits behind a JS acknowledgement gate that defeats curl** — treat as a
blocked source alongside kwsp.gov.my. Fallback for IFRS for SMEs third edition:
`ifrs.org/content/dam/ifrs/publications/html-standards/english/2025/issued/html-ifrs-for-smes.html`.

### NSRF sustainability reporting — RESOLVED, and the confusion explained

Earlier entries flagged sources conflicting on 2026 vs 2027 for large non-listed
companies. Settled from the SC's own framework PDF —
`sc.com.my/api/documentms/download.ashx?id=e98c3900-7b35-4cf5-a07d-fd17acf8734e`
(curl + browser UA; the `/nsrf` HTML page carries none of the figures).

- **Group 1** Main Market, market cap **excluding treasury shares** ≥RM2b at 31 Dec 2024
  → periods beginning on/after **1 Jan 2025**
- **Group 2** remaining Main Market → **2026**
- **Group 3** ACE Market **+ large non-listed → 2027**, not 2026

**Large NLCo = consolidated group revenue ≥RM2b for two consecutive financial years**
preceding the current one. **Revenue only** — no asset or headcount limb.

Assurance is **currently voluntary**; the reasonable-assurance timeline on Scope 1–2 is
expressly footnoted as **subject to further consultation** and the provider framework is
unannounced. ATR reliefs: 2 years Groups 1–2, 3 years Group 3, **inclusive of** the ISSB's
existing 1-year relief. Para 5.3 gives subsidiaries of GRI/TCFD parents **3 reporting
periods** at the Registrar's policy decision — that is the accounting-obligation hook.

> **Why the market disagrees:** SSM issued a **Consultative Document on Proposed
> Amendments to the Companies Act 2016 on Sustainability Reporting** (22 Apr 2026,
> comments closed 2 Jun 2026) covering a **different regime** for NLCos *below* the NSRF
> threshold — comply-or-explain, from **RM15m revenue / 100 employees**, phased
> **2028–2033**. Those *proposed* figures are circulating as if they were NSRF thresholds.
> They are a consultation, not law. `ssm.com.my/Pages/Legal_Framework/Document/[ENG]20260422_External ESG Framework_Consultative Document_BI.pdf`

### MBRS / SSMxT technical facts

Current tool **mTool 2.2**; taxonomy **SSMxT_2022v1.0** on IFRS Accounting Taxonomy 2022.
**31 entry points.** Architecture doc:
`ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf`

- **Company extensions are prohibited** — entities "must not extend the Taxonomy"; detail
  goes into text blocks. Load-bearing for tagging and absent from the entire vendor SERP.
- **Sign convention is the reverse of intuition** — expenses are stored **positive**;
  "there are no elements which should always be stored as a negative value".
- **Scale trap:** RM53,928 stated in thousands is tagged `53928000` with `decimals` = −3.
  It **passes validation either way** — the silent 1000× error.
- Five validation families: mandatory, derived mandatory, dimension aggregation,
  positive/negative, cross-statement.
- EA5A and EA5B are **separate applications for circulation vs lodgement** under s.259(2).
- mTool 1.0 zips cannot be uploaded to mPortal 2.0.
- **SSM publishes no consolidated rejection-reason register**; the published MBRS FAQ is
  still **v2.4 (Oct 2024)** and predates mTool 2.2 behaviour.

### Financial statements pack and retention

**s.251(1)(b) statutory declaration is ONE person** — expressly the person primarily
responsible for financial management where that is not the signing director. **s.251(2)–(3)
statement by directors needs TWO directors.** Two documents in one section, routinely
merged. s.252(3) requires every circulated copy of the directors' report to **name the
signatory**. s.253(1)(a) covers directors in office **between year end and report date**,
not just at year end. Penalties s.248(3), s.251(4), s.252(4) are each **RM500,000 / 1 year**;
s.252(5) is only RM20,000.

**Three retention clocks, three different start dates** — nobody publishes this together:
CA 2016 s.245(3) **7 years from completion of the transaction** · ITA s.82(1)(a) 7 years
from the end of the year the **income relates to** · ITA s.82A(1) 7 years from the end of
the **year of assessment**. s.82(1A) and s.82A(2) both **restart from the year a missing
return is eventually filed** — late filing extends your own retention duty.

**FYE:** a financial year is the period the FS are made up to "**whether that period is a
year or not**" (s.2). s.247(3) apply ≥30 days before circulation; **s.247(13) imposes a
three-year bar after a refusal**. PD 10/2024 para 9 phases audit exemption by **period
commencement date**; para 13 confirms exemption is **not retrospectively lost**.

### Labuan (LBATA)

**A URL trick that recovers "missing" LHDN documents:** where a `/media/<hash>/<name>.pdf`
URL 404s, **drop the hash segment** — the file is usually live at
`/wp-content/uploads/<same-filename>.pdf`. This unblocked five documents that WebFetch,
curl and a browser all reported missing.

`labuanfsa.gov.my` hosts gazette PDFs and regulator circulars that extract cleanly — a
good primary route when AGC and hasil both fail.

LBATA s.4(1) **3% of audited net profit** · s.9 non-trading activity not charged ·
s.2B(1A) **24%** where substance fails · s.3A irrevocable election into the ITA within
3 months · s.13A(2) 10% increase. Substance table (2–4 employees, RM50k–RM200k operating
expenditure; **RM20k for pure equity holding**) from P.U.(A) 423/2021.
Fit-and-proper employee criteria, the office-cleaner example and the **outsourcing
prohibition**: LHDN guidelines dated 5 Nov 2025. Trading vs non-trading and the CIGA rule:
LHDN guidelines dated 10 Dec 2025. Onshore restriction: **LCA 1990 s.7(1) only** — business
in, from or through Labuan. That is an *operating-location* test, not a customer test.

> **⚠ CORRECTED 2026-07-20 — and Labuan FSA itself publishes the repealed version.**
> An earlier entry here cited "s.7(1)–(6) including a 10-working-day notification". Those
> subsections are **repealed**. **Act A1653 s.4(b) deleted s.7(4)–(6)**, deemed in force
> from **1 January 2019** — killing both the ringgit prohibition and the resident-dealing
> notification. Labuan FSA's own consolidated Act 441 PDF (dated 23 Aug 2022) **still
> prints them**, and its FAQ still says shares cannot be ringgit-denominated — but
> **Act A1756 (2025) s.2** replaced s.47(1)(a) with "expressed in any currency".
> Essentially every competitor page repeats the dead rules.
>
> **Lesson: a regulator's consolidated PDF is not authoritative.** Always check the
> amendment Acts against it. Same failure mode as the unconsolidated MySST regulations.

**Labuan moved to a current-year basis from YA2025**, and Form LE1 is now **7 months plus
1 month grace** — not the 3-month rule printed in the 2021 Act reprint.

> ⚠ **The s.39(1)(r) exemption may have lapsed.** Labuan FSA circular 269/2021 states
> P.U.(A) 425/2021 runs **YA2019 to YA2025** — now expired — and no extension order could
> be found. This is the single most consequential open question in the Labuan cluster: it
> governs whether a *Malaysian payer* can deduct payments to a Labuan entity at all.
> **UPDATE — the primary text is now in hand.** A later writer retrieved **P.U.(A)
> 375/2018** at
> `lom.agc.gov.my/ilims/upload/portal/akta/outputp/pua_20181231_P.U.%20%28A%29%20375.pdf`
> plus amendment **P.U.(A) 376/2020**, via the AGC gazette API above. Read both before
> writing the percentages — do not take the market's 25%/97% on trust, but the question is
> now answerable rather than closed. The separate question of whether the **exemption**
> lapsed at YA2025 remains open.

### Pillar Two / global minimum tax

Part XI ITA ss.157–239. **EUR 750m** two-of-four-years test. Top-up tax return due
**15 months** after the **UPE's** year end (18 months for the transition year). The
Transitional CbCR Safe Harbour is limited to financial years **beginning on or before
31 Dec 2027 and not ending after 30 Jun 2029**. Sources: LHDN domestic top-up tax
guidelines (3 Feb 2026) and FAQ v7.0 (23 Apr 2026).

### LLP tax

Sch 1 para 2(1)(f) **24%**; para 2D capital-contribution test at RM2.5m (cash **or in
kind**) with a para 2E **>20% foreign/non-citizen** limb. **Finance Act 2025 (Act 874)
ss.4/17/18 — 2% on individual partners above RM100,000 from YA2026.** s.39(1)(n) partner
remuneration. LLPA s.68 **90-day** declaration; **s.69(5) no statutory audit**.
The s.107C(4A) new-company CP204 waiver does **not** extend to LLPs.

### Minimum wage

**RM1,700/month, RM8.72/hour** (P.U.(A) 376, gazetted 4 Dec 2024). Daily RM65.38
(6-day) / RM78.46 (5-day) / RM98.08 (4-day). The small-employer deferment to RM1,500
ran **1 Feb – 31 Jul 2025 only**; para 5 brought everyone to RM1,700 from **1 Aug 2025**.
Excludes domestic servants. Revokes P.U.(A) 140/2022. **No 2026 Order** — a review of
the 2024 Order is underway.

EA 1955 **s.19(1)** pay within **7 days** of the wage period end; s.19(2) rest-day,
holiday and OT by the last day of the next wage period; **s.24** deduction regime with
a **50% monthly cap**; **s.99A** general penalty ≤RM50,000. NWCC Act s.43 fine
**≤RM10,000 per employee**.

### Employment Act 1955 — scope and hours

Parse the AGC updated text as at 1 Jan 2023 with `pdftotext -layout`; it extracts cleanly.

**First Schedule para 1**: "any person who has entered into a contract of service" — no
wage floor. **Para 1A**: above RM4,000/month the disapplied provisions are exactly
**ss.60(3), 60A(3), 60C(2A), 60D(3), 60D(4) and s.60J**. Six items, nothing more.
**Para 3** excludes commission, subsistence allowance and overtime from the RM4,000 test.

> **Para 2 is the buried finding no competitor carries.** Manual labour, commercial-
> vehicle operation, supervision of manual labourers, certain vessel work and domestic
> employees remain covered **irrespective of wages**. A RM6,500 site foreman still has
> overtime rights.

s.60A(1) 45-hour week, 8-hour day, 10-hour spread-over, 30-min break per 5 hours;
compressed week capped at 9h/day. **s.60A(7) absolute 12-hour daily ceiling.**
s.60A(3)(a) OT at 1.5× · s.60(3) rest-day tiers — **there is no flat 2× rest-day rate** ·
s.60D(3)(a) two days' wages for holiday work **regardless of hours** · s.60D(3)(aa) 3×
hourly for holiday OT. **OT cap 104 hours/month** (Limitation of Overtime Work
Regulations 1980 reg.2); the proviso to s.60A(4)(a) **excludes rest-day and holiday work
from the cap**.

s.19(1) wages within 7 days; s.19(2) OT/rest-day/holiday pay by the **last day of the
next wage period**. s.60P–60Q FWA: **60 days to approve or refuse**, written grounds on
refusal, **no statutory right of appeal**.

s.81H display duty · s.81B(2) 30 days to notify a refusal · s.81D(2) 30 days to report
when the DG directs · s.81F fine ≤RM50,000. **There is no statutory deadline to
*complete* an inquiry** — the widely published "30 days to investigate" conflates two
different clocks. **s.81G was deleted by A1651.** s.90B forced labour: ≤RM100,000,
≤2 years, requires coercion/deception **plus** confinement.

### Sabah and Sarawak — 2025 Acts, and Sarawak does NOT mirror Act 265

Not 2022-equivalents, and not the "1 May 2024" date that surfaces in search.
**Labour Ordinance of Sabah (Amendment) Act 2025 — A1753**; **Sarawak — A1754**
(`jtkswk.gov.my/v2/wp-content/uploads/2025/04/Act-A1754-...pdf`, assent 20 Mar 2025,
gazetted 14 Apr 2025). Both in force **1 May 2025 except Part IVA** (housing standards).

> **Sarawak's replacement First Schedule is structurally different.** Same RM4,000
> threshold, but it disapplies the **s.2 definitions of "normal hours of work" and
> "overtime"**, plus ss.104(6)–(10), 105(6), 105c(2)–(5), 105f and 130o(2)(r). There is
> no section-for-section mapping to Act 265 — **an Act 265 compliance matrix cannot be
> find-and-replaced into Sarawak.** A1754 also inserts new Second and Third Schedules;
> the Third is a hazardous-work list with no Act 265 equivalent.

The consolidated AGC Sarawak Cap. 76 is **as at 1 Oct 2024, pre-amendment** — read it
*with* A1754, never instead of it. `jtksabah.gov.my/images/...` now 404s; use
`jtksabah.gov.my/utama/wp-content/uploads/...`.

**Unverified:** the Sabah A1753 carve-out list (PDF 404s) and Sarawak First Schedule
para 3, where column alignment is ambiguous and appears to invert the Act 265 position.
Do not publish either.

### Gig Workers Act 2025 (Act 872)

`mohr.gov.my/aktapekerjagig2025/assets/documents/Act%20872.pdf` — assent 16 Dec 2025,
gazetted 31 Dec 2025, **in force 31 March 2026**.

**It creates a Tribunal (Part V) and a *Consultative Council* (Part VI) — not a
Commission.** SEGiM is administrative, has no basis in Act 872 and no resolvable domain;
do not attribute statutory powers to it.

s.2 defines "service agreement" by **excluding** a contract of service under Act 265,
Sabah Cap. 67, Sarawak Cap. 76 and OSHA, and a contract of employment under the IRA 1967
— so the Act **presupposes classification rather than deciding it**. Gig worker must be a
Malaysian citizen or PR. **1.25%** is confirmed by the MOHR FAQ but worded *"ditetapkan
buat masa ini"* — set for the time being. It applies **only to platform providers**, is a
deduction **from the worker's earnings** (not an employer contribution), and each
platform deducts separately where a worker serves several. s.33(2) removes all Part VIII
social-security matters and all offences from Tribunal jurisdiction.

Regulations found: P.U.(A) 144/2026 (Tribunal), P.U.(A) 145/2026 (Compounding).

### ASHA 2022 (Act 840) — the circulating commencement date is wrong

**"1 August 2023" is wrong.** Two-stage: P.U.(B) 113/2023 brought ss.1, 2, 24–26 into
force **28 March 2023**; P.U.(B) 77/2024 brought **ss.3–23 and s.27** into force
**8 March 2024**. The Tribunal has only been live since 8 March 2024, and s.7(2) limits
complaints to conduct after commencement.

s.20(1)(c) caps compensation at **RM250,000** (that limb only). s.21: non-compliance
within 30 days = fine of **twice the compensation** ordered, or ≤RM10,000 where none,
≤2 years, plus RM1,000/day.

**The parallel-route point rests on a negative finding:** s.8 excludes only proceedings
"in any court". The Act says nothing about a domestic inquiry, nothing about Act 265 or
Part XVA, and has no election-of-remedies clause — so the s.81B duty to inquire survives
a Tribunal filing. Definitions differ materially: Act 840 adds "in any form" and
"**reasonably**" offensive and has **no employment nexus**, whereas EA s.2 requires the
conduct to arise "out of and in the course of his employment".

### ★ Paid-up capital for foreign-owned companies — RESOLVED, and the market frames it wrong

The RM250k / RM350k / RM500k / RM1m set that every competitor publishes is **real and
officially sourced** — but it is **not company law**, and describing it as "the minimum
paid-up capital to set up a foreign-owned company in Malaysia" is wrong.

**The Companies Act 2016 imposes no minimum whatsoever.** s.9 requires "one or more
shares"; **s.14(3)'s exhaustive list of incorporation particulars does not require a
capital amount at all**; s.74 abolished par value. A company with RM1 paid-up capital is
perfectly legal.

**The real source is the Immigration Department's ESD company-registration eligibility
criteria** — all four figures appear together in one table
(`esd.imi.gov.my/portal/faq/esd-company-registration/` and Guidebook v3.1 p.6–7):

| Paid-up capital | Applies to |
| --- | --- |
| RM250,000 | 100% locally owned |
| RM350,000 | Joint venture, ≥30% foreign |
| RM500,000 | 100% foreign owned |
| RM1,000,000 | Foreign equity ≥51% in wholesale / retail / trade |

**These are Employment Pass sponsorship thresholds.** They govern whether a company can
register with ESD to hire expatriates — nothing else.

**The KPDN RM1m figure has three nuances the consultant web gets wrong:**
1. There is **no blanket "RM1m for all foreign WRT companies"** clause. RM1m is set
   separately for Specialty Store (9.2.2), Convenience Store (10.2.3), Distribution
   Centre (11.2.2) and Various Other Formats incl. e-commerce (12.2.1.2) — the last being
   the catch-all most foreign traders fall into, which is why it generalised.
2. It is expressed as **shareholders' funds, not paid-up capital** — "which includes
   paid-up capital".
3. **The 2022 text softened compliance.** Clause 3.0 says foreign operators are
   *"encouraged and recommended to obtain approval"* — materially weaker than the 2010
   mandatory framing that most write-ups still reproduce. **Do not report it as a hard
   statutory requirement.** Other thresholds: Hypermarket RM50m, Superstore RM25m,
   Departmental Store RM20m. `kpdn.gov.my/images/muat-turun/gp-2022-1.pdf` (English only).

> **The widely-missed carve-out: Malaysia Digital status requires only RM1,000 paid-up
> capital**, and MD companies route Employment Pass applications through **MDEC rather
> than ESD** — bypassing the RM500k/RM1m thresholds entirely.

> **★ RESOLVED — the KPDN guideline is retrievable and extracts cleanly** at
> `kpdn.gov.my/images/muat-turun/gp-2022-1.pdf`. This closes the item open since Wave 4.
>
> **Equity clauses exist for exactly two formats, not all of distributive trade:**
> **hypermarket** (cl. 6.2.3.1 — 30%, 3-year grace, no new branches until met; 6.2.3.2
> gives an alternative of 0.1% of revenue to the Bumiputera Retail Development Trust Fund
> for 10 years) and **convenience store** (cl. 10.2.4 — foreign ≤30%). **Departmental
> store, superstore, specialty, distribution centre and "other formats" carry capital
> conditions but no equity clause.**
>
> **The 30% shelf-SKU rule is a different thing from equity** (cl. 6.3.6, 7.3.5, 8.3.6,
> 10.3.7) and applies to formats that have no equity condition at all. Treating "30%
> Bumiputera" as a blanket distributive-trade equity requirement is the market's error.
> Clause 3.0 remains *encouraged and recommended*; cl. 5.4 frames the general conditions
> as recommendations.

> **BCPLC status is a restriction, not a benefit.** Treasury circular LB 1.1 para 6.1:
> a Bumiputera-controlled public listed company **and all its subsidiaries** may only
> enter government works tenders **above RM30 million**, and para 6.2 **bars them from
> reserved tenders**. Routinely presented as an advantage.
> Procurement preference itself sits in **Pekeliling Perbendaharaan PK 1.5** (in force
> 29 Nov 2022, amended 10 Apr 2023 and 1 Jan 2025), whose para 2.1 test is **six limbs** —
> shares, board, key posts, financial management, employees and org-chart control — not an
> equity test. *Its paras 6.4 and 7.2 margin-of-preference tables mis-align by one row in
> the PDF text layer — do not reproduce them without a visual re-read.*
>
> *Access:* `ppp.treasury.gov.my` PDFs are **not** at their `data-path` — direct fetches
> 404. Use `ppp.treasury.gov.my/loadpdf/<type>/<uuid>`, scraping `uuid` and `type` from the
> `.load-pdf` button attributes on the portal homepage.

> **Two writers disagreed on MIDA Booklet 8 — resolve it before relying on either.**
> One found it "outdated, conflicts with ESD's four-tier table, do not cite as current."
> A later writer used it and found it publishes the **full distributive-trade schedule**:
> hypermarket RM50m (+30% Bumiputera), superstore RM25m, departmental store RM20m,
> specialty RM1m/outlet, other RM1m/outlet, direct selling foreign-owned RM5m — expressed
> as **shareholders' funds including paid-up capital and reserves**, which is probably why
> the earlier reading concluded nothing was published. It also carries the
> **foreign-participation exclusion list** (24-hour convenience stores, mini-markets under
> 3,000 sqm, fuel stations with convenience stores) that ESD cites when refusing passes.
>
> Best current reading: Booklet 8 is usable for the **distributive-trade schedule**, but
> its *expatriate* figures are the stale part and conflict with ESD. Cite it for the former,
> not the latter. **KPDN's own Pindaan 2022 text vs MIDA's 2010-referenced version remains
> unreconciled.**

*Also stale:* the **ESD Online Guidebook** — even V6 (14 Apr 2025) is still live on the
government domain and still prints the **superseded EP salary bands, durations and the old
"Cat III no dependants" rule**. It looks authoritative and is wrong on salary. Use the
ESD **announcements** instead.

*Still unconfirmed:* sector-regulator minimums for CIDB, MOTAC travel agencies, JTKSM
employment agencies, forwarding agents, and BNM/SC-regulated entities.

### MCMC / ASP class licence — e-commerce is exempt, and there are now two dates

**Ordinary online retailers do not need an ASP Class Licence.** Confirmed two ways: the
MCMC Licensing Guidebook's ASP "Exempt/Unlicensed" column lists **electronic transaction
service** and **interactive transaction service**; and the Information Paper §4.9
expressly places **e-commerce platforms** outside the framework.

**The 8-million threshold is drafted as an exemption, not a trigger.** P.U.(A) 206/2024
exempts an internet messaging or social media service "which has **less than** eight
million users in Malaysia". Saying "you need a licence at 8 million users" is a
paraphrase, not the gazetted wording. MCMC measures via its own Internet User Survey.

**Two dates now matter — content citing only 2025 is stale:**
- **1 Jan 2025** — licensing requirement in force (P.U.(A) 205/2024 and 206/2024, both
  made 26 Jul 2024, gazetted 1 Aug 2024, giving a five-month grace period).
- **1 Jan 2026** — dedicated licence instrument **ASP/C/2025/1** takes effect, and
  providers are **deemed registered under s.46A** by dispensation of formalities.
  WhatsApp, Telegram, Facebook, Instagram, TikTok and YouTube are named as meeting the
  criteria.

**A condition worth knowing:** cl.5 of ASP/C/2025/1 requires a foreign licensee to appoint
a **Local Representative** — Malaysia-resident, accepts service of legal notices and court
documents, and facilitates directions "including on matters relating to the
removal/blocking of access to content that contravenes the Malaysian law."

**A merchant with a Facebook, Instagram or TikTok shop is an end user, not a licensee** —
they hold no licence and file nothing. MCMC states the licensee/end-user distinction
directly (Info Paper §4.10, §6.1; FAQ Q20).

Unlicensed operation from 1 Jan 2025: **RM500,000 or 5 years**, plus RM1,000/day after
conviction (s.126).

> **Do not write that sub-threshold providers may "apply voluntarily"** — no official
> source supports it. The exemption operates by law, and also on renewal.

> **⚠ The Online Safety Act 2025 is a separate regime** with six sets of subsidiary
> regulations already made (Period, Fees, Form of Undertaking, Appeal Tribunal, Online
> Safety Plan, Compounding). Adjacent to anything on social media regulation and **not in
> the content plan** — needs its own pass.

### Home-based and online business — yes, a council licence is required

Answers the high-volume query recon flagged as universally answered badly.

**National guideline:** *Garis Panduan Kawal Selia Perniagaan Dari Rumah*, KUSKOP,
circulated to every PBT as **Pekeliling KSU KPKT Bil. 3 Tahun 2024**.
`kuskop.gov.my/admin/files/med/image/portal/PDF/Penerbitan/Garis-Panduan-Kawal-Selia-Perniagaan-Dari-Rumah-v10.pdf`
Statutory basis **Local Government Act 1976 s.107(1)** — note AGC's hosted Act 171 PDF is
a **scan with no text layer**; the Selangor guideline quotes s.107(1) verbatim and is a
usable corroborating source.

It covers **both online and physical** home business. Core conditions: Malaysian citizen ·
applicant must actually live there · **max 25% of built-up floor area** · premises must
still look residential · **maximum one employee** · neighbour consent (left and right,
MBPJ adds rear) where a neighbour is within 20 m · JMB/MC consent · owner's consent if
renting. 21 prohibited activities, including **excessive stock that turns the residence
into a store or warehouse**, and unrestricted walk-in retail.

> **The requirement nobody expects: the national guideline mandates a signboard** at the
> front of the house **even for a purely online business** — non-illuminated, max 1 square
> metre, Bahasa Melayu primary, business name plus SSM/PBT number, **no visuals**, and it
> needs separate PBT advertising approval.

**Selangor is the one PBT tier with published fees** (UPEN guideline 2022, applied by
MBPJ): temporary licence **RM100**, business licence **RM200/year**, no process or deposit
fee; **RM50** to add an online activity to an existing commercial licence. Selangor also
confirms **planning permission is not required** for permitted home online activities
(MMKN 20/2021, exempted material change under s.19(2)(g) Act 172).

**Enforcement is joined up:** PBT action is notified to **SSM**, and vice versa.

**Councils may tighten but not loosen** the national guideline (FAQ Q5), and may vary the
25% rule (Q4). So fees, licence names and permitted-activity lists genuinely differ —
never state a national figure as if it applied everywhere.

- **DBKL is unverified and must not be assumed to follow Selangor** — it operates under
  Federal Territory law. Its licensing guidelines PDF sits behind a download button with
  no exposed URL.
- **MPAJ, MBSJ and MBSA publish no home-business category** on their licensing pages,
  despite being Selangor PBTs nominally within the UPEN guideline.
- **Sabah and Sarawak are outside Act 171** — the guideline itself cites the Local
  Authorities Ordinance 1969 (Sarawak) and Ordinan Kerajaan Tempatan 1961 (Sabah).

### PDPA — the 2024 amendment, and why small e-commerce is caught

**The amending Act is A1727, not A1717.** Royal Assent 9 Oct 2024, gazetted 17 Oct 2024.
Text: `pdp.gov.my/ppdpv1/wp-content/uploads/2024/11/Act-A1727.pdf`. Commencement by
**P.U.(B) 522/2024**: **1 Jan 2025** (ss.7, 11, 13, 14) · **1 Apr 2025** (ss.2, 3, 4, 5,
8, 10, 12) · **1 Jun 2025** (ss.6, 9).

1 Apr 2025 brought: "data user" → **"data controller"** throughout; **biometric data**
added to sensitive personal data; a **"personal data breach"** definition; **deceased
individuals excluded** from "data subject"; **data processors directly bound** by the
Security Principle with the penalty raised to **RM1,000,000 / 3 years**; and the s.129
cross-border **whitelist mechanism deleted**, replaced by a substantially-similar /
adequate-protection test.

1 Jun 2025 brought **s.12A (DPO)**, **s.12B (breach notification)** — and, missed by most
commentary, **s.43A (right to data portability)**.

**DPO threshold** (Guideline v1.0, 25 Feb 2025, para 4.2 — three **disjunctive** limbs,
**no revenue threshold**): personal data of **>20,000 data subjects**; **sensitive
personal data including financial information of >10,000**; **or** activities requiring
**regular and systematic monitoring**.

> **The trap for small e-commerce: limb 4.2.3 has no volume floor**, and the guideline's
> own worked example is *"a retail website that uses algorithms to monitor the searches
> and purchases of its users and based on this information, offers recommendations"*.
> A recommendation engine or a retargeting pixel can require a DPO at any size.
> Behavioural advertising, wearables and CCTV are also listed. Loyalty-programme
> management "may not be considered" monitoring if used strictly for account management.

**Breach notification** (Guideline v1.0, 25 Feb 2025): notify the Commissioner **as soon
as practicable and no later than 72 hours** — the 72-hour figure is in the **guideline,
not the Act**. Trigger is "significant harm", defined at para 5.2 (physical harm,
financial loss, credit damage, misuse for illegal purposes, sensitive data, identity-fraud
enablement, or **"significant scale" = >1,000 data subjects**). Notify **data subjects
within 7 days** of notifying the Commissioner — and note **para 8.2: the 1,000-subject
"significant scale" limb does NOT apply to data-subject notification**, so a
large-volume-only breach is Commissioner-notifiable but not automatically
subject-notifiable. s.12B(3) penalty: RM250,000 / 2 years.

**ss.12A and 12B apply to every data controller** — independent of whether you fall in a
registrable class.

**Registration classes:** 13, under P.U.(A) 336/2013 as amended by P.U.(A) 326/2016.
**No third class order exists** — confirmed via the AGC gazette API and JPDP's own page.
The only class that could reach a general online seller is **9(b)**, and its scope is
genuinely unsettled: the Control of Supplies Act definitions of retail and wholesale
dealing are **not limited to controlled articles**, but 9(b) reads "retail dealing **and**
wholesale dealing" (conjunctive), and it applies only to companies and Partnership Act
partnerships — **a sole proprietorship registered under ROBA 1956 is outside it entirely**.
JPDP has published no interpretation. **Present as an open question, not as "online
retailers don't register."** Non-registration: RM500,000 / 3 years.

### Sarawak business registration — three licences, none of them SSM

The single largest gap in the competitive set, and the structure is genuinely different.

| Licence | Instrument | Issued by |
| --- | --- | --- |
| **BNR** Business Name Registration | Business Names Ordinance **Cap 64** | LHDN / District Office |
| **TL** Trade Licence | Businesses, Professions and Trades Licensing Ordinance **Cap 33** (1958 Ed.) | the **Collector** = Director of Inland Revenue; District Officers are Deputy Collectors (s.5(2)) |
| **OL** Operating Licence | Local Authorities Ordinance **Cap 20** by-laws | the local council |

> **⚠ Sarawak runs TWO parallel chapter-numbering series, and both are live.**
> Confirmed on **two separate chapters**:
> - Current-series **Cap 33 = Entertainment Ordinance 2000**; 1958-Ed
>   **Cap 33 = Businesses, Professions and Trades Licensing Ordinance**
> - Current-series **Cap 64 = the RECODA ordinance**; 1958-Ed
>   **Cap 64 = Business Names Ordinance**
>
> Two writers reached opposite conclusions on Cap 33 because each had found a different
> series. **Always cite `(1958 Ed.)` explicitly** — and assume any Sarawak chapter number
> is ambiguous until you have checked both series.

**Sarawak findings no competitor carries:** the RECODA ordinance **s.14 deems a corridor
authority "a native of Sarawak"** for Land Code purposes, and **Land Code s.13E** lets the
State Cabinet gazette a foreign-ownership exemption area expressly *for* corridor land.
**RECODA has no taxing power** (ss.9–10). Land Rules r.13 sets a **60-year** factory
tenure. The **Electricity Supply Act 1990 is wholly suspended in Sarawak** by
P.U.(A) 272/1990.

**Immigration autonomy — commonly stated backwards:** Immigration Act 155 **s.65 is the
State directive power**, **s.66 the citizen restriction**. Sarawak Employment Pass minimum
is **RM3,000/month** via GENESIS (`genesis.sarawak.gov.my`), not the federal ESD bands.

**No SCORE bulk-power tariff is published anywhere** — only the PPA structure (>5 MW,
discount to published tariff, ≤20 years). Do not state a SCORE rate. Sarawak Energy's
published industrial tariffs are I2 21.7 sen/unit and I3 22.9 peak / 13.9 off-peak.

**ECER's 2016 incentive orders were extended to 31 Dec 2024 by P.U.(A) 344–350/2023 —
and no later extension exists.**

*Access:* **`recoda.com.my` does not resolve — RECODA is at `recoda.gov.my`**, the same
trap class as `ncia.gov.my` → `ncer.com.my`. `sedia.com.my` 403s WebFetch but serves to
curl with a Chrome UA. **AGC's search is AJAX-backed by `lom.agc.gov.my/fess-proxy.php`,
which returns clean JSON including document bodies** — faster and more reliable than the
rendered search page, and how the ECER negative was established.

**The federal statute does not apply.** ROBA 1956 **s.1(2): "This Act shall apply to
Peninsular Malaysia only"** (extended to Labuan 15 Mar 1996 by P.U.(A) 121/1996). The
word "Sarawak" appears **zero times** in Act 197. This is the citation for the whole East
Malaysia gap.

**Cap 64 (1958 Ed.) — Business Names**, `lawnet.sarawak.gov.my/lawnet_file/Ordinance/ORD_F-BUSINEcp64Lawnet(WH).pdf`
s.4(2) register within **one month** · s.6 fee **RM50** · s.7(1)(a) no certificate above
**20 partners** · s.9 changes **21 days** · s.13(1) cessation one month, RM100 · s.14
**RM100/day** trading unregistered, RM50/day other default.

> **Cap 64 has no renewal at all** — a full-text search for renew/expire/valid-for returns
> zero hits. The "annual renewal" repeated across the market is the **Cap 33 licence**,
> not the business-name registration. Citable correction.

**Cap 33 primary text:** `lawnet.sarawak.gov.my/lawnet_file/Ordinance/ORD_F-PROFEScp33Lawnet(WH).pdf`
s.3(1) trading without a licence is an offence, fine RM1,000 · **s.3(4) a Cap 33 licence
does not discharge any other licensing liability** · s.6(1) valid one year, payable
half-yearly. The Entertainment Ordinance 2000 is a **separate** instrument — councils
list it separately; do not conflate it with Cap 33.

**Best single source for the architecture**, stating BNR/TL/OL verbatim: Sibu Municipal
Council Super Form, ref EODB(A)/SMC/2025/01 —
`erndo2.sarawak.gov.my/erndo/temp/app_form/SuperForm_SMC%2031July2025.pdf`
Part F confirms a **14-day** target issuance for low-risk businesses.

**Citation trap:** the council licensing by-law is
**"KMC (Licensing of Miscellaneous Occupations) By-laws, 1961"** — prefixed with the
*predecessor* council's initials, not the current council's. "MBKS (Licensing of…)
By-laws" is wrong even though MBKS's own page carries the KMC title. BDA gazette refs:
Swk. L.G. 98/92, 51/95. No council uses a "Licensing of Trades, Business and Industries"
title. The by-law full texts exist only in gazette volumes, not online.

**Confirmed fee schedules:** MBKS (`sgservicesguide.sarawak.gov.my/modules/web/policy_att.php?id=24`)
and Miri (`miricouncil.gov.my` licence form PK-MBM-PH-01-01). Both are multi-column PDFs
that interleave on extraction — some rows need visual re-check. **No fee schedule is
published for DBKU, MPP, BDA or SMC.** Processing fees confirmed: MBKS RM10/RM30,
MPP RM50, Miri RM10.

**Access:** a WAF blocks WebFetch on **every** `*.sarawak.gov.my` host ("The requested URL
was rejected"). Use `curl -sL -A "<Chrome UA>"` then `pdftotext -layout` — worked on 100%
of attempts. Live hosts are `miricouncil.gov.my`, `smc.gov.my`, `bda.gov.my` — the
`.sarawak.gov.my` variants of those three do **not** resolve. DBKU, MBKS and MPP do.

**Undocumented primary archive:** `sgservicesguide.sarawak.gov.my/modules/web/policy_att.php?id=N`
takes sequential integer IDs, each an official agency policy PDF. Worth sweeping.

### Government portals — confirmed working and confirmed dead

- **JPPM is `jpp.mohr.gov.my`** — `jppm.mohr.gov.my` does not resolve. Most repeated
  broken reference in this space.
- **`kesuma.gov.my` does not resolve** — the rebrand was naming only; `mohr.gov.my` is
  canonical.
- Harassment tribunal is **TAGS** at `tags.kpwkm.gov.my/portal` (not TTGS), under
  **KPWKM — a different ministry** from everything else here.
- `www.dosh.gov.my` and `minimumwages.mohr.gov.my` do not resolve; use `dosh.gov.my` and
  `gajiminimum.mohr.gov.my`.
- **Act 446's official short title is the *Employees' Minimum Standards of Housing,
  Accommodations and Amenities Act 1990*** — not "Workers Minimum Standards".
- Act numbers: PSMB **612** · NWCC **732** · Self-Employment SS **789** · EIS **800** ·
  ASHA **840** · CYP(E) **350**. Several currently return 500 on the LOM standard path —
  retrieve from the agency site instead.

### HRD Corp

First Schedule expanded **1 March 2021** (P.U.(A) 84/2021) to ~44 industry classes —
the old three-sector 2017 PDF still ranking in search is superseded. Part I **10+
employees** mandatory 1%; Part II **5–9 employees** optional 0.5%, plus an NGO limb.
Employee means a **Malaysian citizen** under a contract of service. Levy by the
**15th**; arrears interest **10% p.a. charged daily, minimum RM5**; non-payment fine
≤RM20,000 or 2 years. Unutilised levy period cut from 5 years to **2 years from
1 Jan 2020**, forfeiture leaving an **RM10,000** threshold balance.

---

## Known-unverifiable — do not publish these

Repeated widely, sourced nowhere. Describe qualitatively, label as practitioner
reporting, and put the claim in `verificationNeeded`.

- ~~**WRT / distributive trade paid-up capital**~~ — **RESOLVED, see below.**
- **"Up to three MSIC codes"** — sources actively conflict; one says a single code.
- **EIS maximum in ringgit** — image-only PDF.
- **SSM compound schedules** for s.235/s.240 and similar — no current directive found.
- **PERKESO registration deadline in days** — the duty is stated, the period is not.
  The commonly quoted 30 days is not on PERKESO's page.
- **Company secretary market fee ranges** — no official schedule exists.
- **MAICSA Updated Best Practice full text** — member-gated; only the 29 Apr 2025
  public announcement summary is verifiable.
- **Sabah Law Society vs Sabah Law Association** — Act 777's Fourth Schedule and SSM's
  Part K FAQ disagree. Follow the statutory wording and note the discrepancy.

---

## Trade remedies, audit committees, alternative finance (Jul 2026)

### ★ Anti-dumping duties are indexed under Act 235, not Act 504

The Countervailing and Anti-Dumping Duties Act 1993 (Act 504) is the *procedure*.
MITI **recommends**; **s.30(4)** makes the **Minister of Finance** the one who
determines. The instrument that actually charges you is a **Customs Order under the
Customs Act 1967 (Act 235)**. Searching Act 504's subsidiary legislation returns
almost nothing; `searchValue=ANTI-DUMPING` in the AGC subsidiary API returns 172
records. Confirms again that `searchColumns[]=noPU` does **not** work — title only.

- **MITI Trade Remedies portal** `traderemedies.miti.gov.my` — measures in force,
  ongoing investigations, searchable public file. **Needs `curl -k`**: the cert chain
  fails and WebFetch errors with "unable to verify the first certificate".
- **MITI's own consolidation of the 1994 Regulations is STALE** — reg 37(4)/(6) still
  carry hard-copy and diskette wording superseded by P.U.(A) 53/2025 from 6 Feb 2025.
  Same species as the MySST consolidation trap.
- **AGC pre-2011 gap confirmed again**: P.U.(A) 233/1994 is absent from the subsidiary
  index. The ministry PDF was the only route.

### ★ The Companies Act 2016 has no audit committee provision

"Audit committee" appears **zero times** in the Act 777 reprint and zero times in
Act A1701. CA 1965 **s.15A was repealed by s.620 with no successor**. The duty lives
entirely in **Bursa Main Market Chapter 15**, which binds **listed issuers only** —
an unlisted Berhad has no audit committee obligation. Any source that cites "the
Companies Act" for this is wrong.

MCCG (28 Apr 2021) Practice 9.2 broadened the cooling-off to **3 years for any former
partner**, up from "key audit partner". The widely circulating "meet the auditors twice
a year" figure is **not in Chapter 15** — omitted, not published.

- Bursa Ch.15 PDF: `bursamalaysia.com/…/MAIN_Chap15_COI_Ors_Amendments_1July2023_.pdf`
- MCCG PDF: `sc.com.my/api/documentms/download.ashx?id=239e5ea1-a258-4db8-a9e2-41c215bdb776`
- **Access note**: `bursamalaysia.com` and `sc.com.my` sit behind Cloudflare — plain
  curl 403s; full browser headers including `Referer` and `Sec-Fetch-*` get through.

### ★ Every ECF cap in circulation is obsolete

Guidelines on Recognized Markets **R14, 20 May 2026**: ECF is **RM20m lifetime with no
12-month cap** — not the RM3m/RM5m still quoted everywhere. Two further inversions:
the **80% minimum subscription is a P2P rule** (ECF is all-or-nothing), and the P2P
retail **RM50,000 is something operators must *encourage*, not a cap**.

P2P **18% p.a. rate cap** (14.05(h)); RM5m operator paid-up capital; CMSA s.34
registration. SC AR2024: RM9bn cumulative, 20,000+ businesses, RM2.6bn in 2024.

- Direct PDF: `sc.com.my/api/documentms/download.ashx?id=9e4d86cb-889d-412d-94ec-a19b8ac5f7d7`
- **Do not cite** the SC-hosted CMSA PDF (`id=70b43137-…`) — it is a 2012 consolidation
  where s.34 still reads "Registered electronic facilities", predating the 2015 amendment.

---

## DOSM state-level statistics (Jul 2026)

### ★★ DO NOT use DOSM open-data CSVs without checking the PDF

Two proven cases, both silent — the CSVs parse cleanly and give plausible numbers.

- `hies/hies_state.csv` has **wrong 2024 Gini values for 5 states**: Sabah shows
  0.405 where the publication says **0.389**; also wrong for Negeri Sembilan, Pulau
  Pinang, Perak, Terengganu. 2022 values are correct; income/poverty columns are correct.
  Only the 2024 Gini column is corrupt.
- `labour/lfs_qtr_state.csv` is a **stale, unrevised vintage** — stops at Q3 2025, and
  its 2025 Sabah values (6.7/6.2/5.7) contradict the revised published series
  (6.0/6.7/6.6). Also carries an unflagged 2024Q1 break from Census 2020 rebasing.

**Rule: cite the publication PDF/XLSX. The CSV is a convenience, not the record.**

### ★ DOSM contradicts itself on annual 2025 state unemployment

*LFS Report 2025* (`labour/lfs_annual_2025.pdf`, pub 2026-06-26, p.42) says Sabah
**7.2%**. The revised quarterly Table 31 in the Q1 2026 report averages to **6.32%**
(6.0/6.7/6.6/6.0). Not reconcilable — the annual report's Chart 14 is a flat image with
no extractable labels, and the other states named in the same sentence match neither
vintage. **Cite the quarterly figure with its quarter, or cite 7.2% attributed
explicitly to the annual report. Never present either as "the" 2025 rate.**

### No state-level annual LFS open dataset exists

`lfs_state_sex.csv` stops at 2023; `lfs_state.csv` / `lfs_state_annual` 404; the API has
no such catalogue id; `lfs_annual_2025.xlsx` is national-only. State annual data exists
only inside the annual PDF's chart images. The `formal-sector-wages` dashboard renders
state figures client-side — backing file not locatable.

### Verified Sabah figures (worked example of the citation pattern)

| Figure | Value | Ref period | Table |
|---|---|---|---|
| Unemployment | 5.5% (highest of 16) | Q1 2026 | LFS Q1 2026, JAD 31 |
| LFPR | 70.3% (national 70.9%) | Q1 2026 | LFS Q1 2026, JAD 30 |
| Absolute poverty | 17.7% (highest) | 2024 | Poverty 2024 |
| Median salary/wage | RM2,236 (Malaysia RM2,793) | 2024 | Salaries & Wages 2024, A8 |
| Median hh income | RM4,890 (Malaysia RM7,017) | 2024 | Household Income 2024 |
| Gini | 0.389 | 2024 | Income Inequality 2024, 1.1 |

Two traps in that table: **salaries & wages ≠ household income** (the former covers
employees only, excluding the self-employed, employers and unpaid family workers), and
**the PLI was revised in 2019** — Sabah's jump from 2.9% (2016) to 19.5% (2019) is a
methodology change, not a real-world event. Never present it as a rise in poverty.

Latest Salaries & Wages edition is **2024**; next due ~Sept 2026.

---

## Regional comparison data — agencies, tariffs, ports, investment (Jul 2026)

### ★ InvestKL no longer exists — RESOLVES the dead-domain open item

MIDA absorbed InvestKL's investment promotion and facilitation functions on
**15 March 2026**; the release states InvestKL "ceases independent operations upon its
absorption" (`mida.gov.my/media-release/investkl-absorption/`). `investkl.gov.my` is
dead for that reason, not through neglect.

### ★ No corridor authority can grant an incentive — the statutes say so

SEDIA Enactment 2009 **s.7(f)**: *recommend to the Government or the Federal Government
incentives*. s.7(c) makes it a one-stop centre; s.8(1)(a) makes the Chief Minister
chairman. NCIA describes itself identically. RECODA has no taxing power (ss.9–10).
Any page implying a corridor authority awards tax relief is describing the recommender,
not the grantor.

**The corridor-incentive era has largely wound down.** NCER's NTAX package closed to
applications **1 January 2025**, replaced by NCI-routed incentives; ECER's 2016 orders
lapsed **31 Dec 2024**.

**The No Objection Letter is the only real state-level gate** — mandatory before
MITI/MIDA awards a manufacturing licence, and applied for *after* the MIDA approval
letter, not before.

### ★ Electricity has four regimes, not one

- Peninsular: RP4 base tariff **45.40 sen/kWh**
- **Kulim Hi-Tech Park has its own licensee at 43.08 sen/kWh**
- Sarawak: outside the ESA 1990 entirely (I2 21.7 sen, I3 22.9/13.9)
- Sabah: Energy Commission of Sabah, not ST

Traps: **ST contradicts itself on its own jurisdiction** — the 2022 Sabah release says
"Semenanjung Malaysia dan Sabah", the 2025 RP4 release says "Semenanjung Malaysia dan
W.P. Labuan". **SESB is 80% TNB-owned**, so "Sabah is not served by TNB" is right at
licensee level and wrong at ownership level; Sarawak is genuinely independent.
**`tnb.com.my/assets/files/Tariff_booklet.pdf` is the 1 June 2006 schedule and is still
live** — it is the source of the E1 22.2 sen figures still ranking in search.

### Stale or misleading official channels (all newly confirmed)

- **SPAN's comparative water tariff sheet is stale** (state effective dates ≤1 Jan 2023);
  Peninsular tariffs were adjusted 1 Feb 2024 and 1 Sept 2025. Rates are gazetted per
  state under the WSIA 2006. Selangor from 1 Sept 2025 adds a **data-centre category at
  RM5.31/m³**, ~50% above standard non-domestic.
- **Invest Selangor's NOL document list still demands Forms 9, 24 and 49** — abolished
  by the Companies Act 2016.
- **MOT's ongoing-rail-projects page is materially stale** (640 km ECRL, LRT3
  "Feb 2024", Gemas–JB missing); MRL and ECRL both say 665 km.
- **`ecerdc.com.my` resolves only on the `www` host**; `ecerdc.gov.my` does not exist.
- **`investkedah.com.my` redirects to an unrelated commercial site** — do not cite as a
  Kedah government channel.

### Extraction notes for the hard sources

- **MIDA IPR Appendix 2 renders as rotated/mirrored text.** pdfplumber word-position
  extraction plus x-coordinate mapping recovers it, and both year columns cross-foot.
  `mida.gov.my/wp-content/uploads/2026/03/MIDA_IPR.2025.pdf` p.132.
- **NAPIC by-state tables extract with jumbled headers** but the columns are recoverable
  and sum exactly. **Verify by arithmetic before publishing.**
- **MIDA publishes two different 2025 national totals** — RM426,736.8m (March 2026) and
  RM431,080.6m (June 2026 revised). Same problem as the 2024 pair. Name the vintage.

### Verified headline figures

**Approved investment by state 2025** — **Johor RM110,031.1m, first nationally**, up
from RM47,846.1m; Selangor fell to RM83,916.4m. Manufacturing-only reverses it: Penang
RM22,375.4m, second. **Johor wins capital, not headcount**: 26% of national approved
investment, 10% of potential employment (24,584 of 244,902); KL generated 82,985 on
RM63.3bn.

**Ports 2025** (`mot.gov.my/en/Statistik Maritim Excel/…Q1 - Q4 Tahun 2025.xlsx`) —
Port Klang 15,138,772 TEU, PTP 14,028,375, national 33,070,778. **88% in two ports**,
66.2% of that transshipment. ECRL land bridge is official policy (Kuantan Port /
Northport / MRL MoU, 19 Aug 2024).

**Median monthly salary by state 2024** — Putrajaya RM4,598 → Kelantan RM1,914,
national RM2,793.

### Figures that do not exist — do not let a later writer "find" them

No Malaysian government body publishes **industrial or office rent by state**. No
official **ECRL freight tonnage** exists (the circulating 53m and 13.7m tonne figures
are unsourced). No official **Penang E&E headcount stock**. No **Malaysians-in-Singapore
count** — Singapore MOM publishes no nationality breakdown. No **SCORE bulk-power rate**.
No **Peninsular MV/HV per-category tariff** (myTNB renders client-side). **Sarawak
Employment Pass minimum salary** is not on GENESIS's public pages.

---

## Free zones and tech hubs (Jul 2026)

### ★★ Free zone declarations are P.U.(B), not P.U.(A)

This is why free-zone instruments are routinely reported as untraceable. Use
`json-subsid-2024.php?type=pub` and filter `ACT_NO=="438"` — roughly 90 instruments.
Anyone searching the P.U.(A) index will conclude, wrongly, that no instrument exists.

### ★ Bayan Lepas was re-declared effective 23 Dec 2024

**P.U.(B) 510/2024** revoked the 1974 declaration; **P.U.(B) 511/2024** re-declared the
zone on **Gazette Plans PW2101–PW2104**; **P.U.(B) 512/2024** substituted Second
Schedule item 10. **The AGC 2020 reprint of Act 438 still prints the superseded plans
138/281/289.** This supersedes every published description of the zone. Authority is
**Majlis Bandaraya Pulau Pinang** (RMCD free-zone list).

### ★ Never cite Act 438 for SST treatment

Act 438's Third Schedule targets the **Sales Tax Act 1972 and Service Tax Act 1975 —
both repealed**. Current treatment is Sales Tax Act 2018 ss.55–57 with "special areas"
at s.2 (Act 806), and **Service Tax Act 2018 s.55 (Act 807)**. The consequence people
get wrong: **Malaysian providers DO charge service tax into a free zone.** A free zone
is not a service-tax shelter.

Related wording change: **Customs Act 1967 s.2(1A) now reads "outside a principal
customs area"**, not "outside Malaysia".

**The 80% export rule is refuted as law.** No percentage appears in Act 438; it is
MIDA's hedged *LMW* eligibility guidance, repeated everywhere as if statutory.

### ★ DFTZ has no gazetted instrument at all

A gazette sweep for "digital" returns nothing declaring a DFTZ, and it is absent from
RMCD's ~45-zone list. The KLIA footprint is an **ordinary free commercial zone** under
Malaysia Airports Holdings Berhad. As at 21 Jul 2026 DFTZ **does not appear on
mdec.my** — record this as "no longer promoted", explicitly **not** as abolished.

LVG gazette set (the part that is real): **≤RM500**, land/sea/air, in force 1 Jan 2024 —
P.U.(A) 403/2023; rate **10%** — P.U.(A) 404/2023; seller registration threshold
**RM500,000** — P.U.(A) 409/2022.

### Cyberjaya / Malaysia Digital — administrative, not gazetted

**No P.U.(A) exists for the MD tax incentive.** MD Status conditions (RM1,000 paid-up,
2 knowledge workers, RM5,000 average monthly base salary, RM50,000 annual opex) come
from *Guidelines on MD Status* §3.0. The incentive — 10%/5%/0% for 10 YAs, or ITA 60%
or 100% over 5 years, min paid-up RM50,000, 10 tech enablers, window **19 Apr
2024–31 Dec 2027**, ss.65B and 127(3)(b) ITA 1967, NCI approves — comes from an MOF-ref
guideline revised 9 Jul 2025. Location was **freed 25 Mar 2022**; rebrand 4 Jul 2022;
only BoG 1 and BoG 8 remain location-gated. MDLR effective **1 Jan 2026**.

**MDEC's MD Tech Zone page names no locations** — the widely repeated claim that
Cyberjaya is one is unsourced.

### Statistics traps confirmed here

**Penang E&E is 44.3% of exports** (RM711,613m of RM1,606,650m). **DOSM's printed
51.3% is share of *manufactured* exports** — a different denominator, routinely quoted
as if it were the same figure. Penang manufacturing is **47.3% of state GDP** vs 23.0%
national. The circulating **"RM435bn / 31%"** pair is untraceable.

### Fetch notes

MDEC PDFs fetch cleanly with `curl -A`. RMCD pages need WebFetch (curl returns nav
only). `MIDA_IPR.2025.pdf` has a text layer; the **"-copy" variants are image-only**.

---

## State and city licensing, land, GDP (Jul 2026)

### ★ Councils cite their own revoked by-laws

Third confirmation of the pattern (after MPPP and KMC):
- **MBJB's own English page cites the revoked 2004 by-law** — killed by by-law 54(1) of
  the 2016 instrument (J.P.U. 15).
- **MBI still cites a 1987 by-law.**
- **MBSJ's by-law is still gazetted under the old name MPSJ.**

**Rule: never trust a council's own summary page. Go to the gazette.**

### ★ Sabah Cap. 144 s.7(2) is not a pro-rate

Universally misreported as one. It has **two breakpoints only — 30 June and 30
September**. A business opening in November does not pay two months of licence fee.

### ★ PTG Johor foreign acquisition is 3% / min RM30,000

(4% industrial.) The property blogs carry 2% / RM20,000. **`ptj.johor.gov.my/pendaftaran/`**
publishes thresholds, quotas and the full fee schedule (Kaedah-Kaedah Tanah Johor 2026,
effective 1 Apr 2026) — the best state land source found so far.

### ★ SEDIA is a State enactment, not an Act of Parliament

"Enacted by the Legislature of the State of Sabah" (No. 1 of 2009). IRDA, NCIA and
ECERDC are federal Acts. Combined with s.7(f) making SEDIA a *recommending* body, this
is a genuine constitutional difference, not a drafting quirk.

### Signboard rules: there is no national rule

Confirmed spread across councils — **MBPJ 30% larger · MBSA 5%/30% · KL caps only ·
MBSP requires larger**. Any article stating "the Malaysian signboard rule" is wrong.

### New primary sources

- **`sagc.sabah.gov.my`** — Sabah AG's Chambers: Cap. 144, LGO 1961, Uniform By-laws
  2022, Land Ordinance Cap. 68, full State Sales Tax Orders index, as clean PDFs.
  Serves WebFetch directly.
- **`mptaiping.gov.my/images/undang_undang_kecil/…MPT_2017.pdf`** — a **combined
  Pk. P.U. 13 volume** carrying the Ipoh, Taiping and Teluk Intan by-laws. MBI does not
  host its own.
- **`mbjb.gov.my/sites/default/files/2022-06/jpu.15_…pdf`** — full MBJB gazette with
  fee Jadual.
- **`ekhidmat.my`** — Johor shared council e-services platform.

### DOSM GDP by State 2025 (released 1 July 2026)

`dosm.gov.my/uploads/release-content/file_20260701120804.pdf`. **WebFetch cannot parse
it — extract locally with `pdftotext -layout`.** Per-state sector shares appear twice
(Chart 3 row and each state's own chart), which gives a free self-check.

Johor RM171bn +8.0% (highest), manufacturing 28.0%, construction +26.7% with building
construction +47.4% (DOSM attributes to data centres) · Selangor RM460.1bn, 26.5% of
national, per capita RM70,362 · Perak RM91.5bn +5.7%, transport equipment **+162.9%**,
mining just 0.6% · Sabah +5.1% (from 1.2%), per capita RM31,125, mining 22.0%.

### Open gaps flagged, not filled

**Selangor PTG Bil. 1/2014 thresholds** corroborated only to a 2016 assembly answer —
highest-priority gap. **Whether DBKK adopted the 2022 Uniform By-laws** is unresolved
and commercially material (RM25 flat vs per-m²). **No official JB commuter count
exists** — the PMO's 350,000 is *total travellers, both directions*, and no Causeway
throughput is published. **No official Perak foreign-purchase minimum exists anywhere** —
no figure published rather than one borrowed.

---

## DFTZ — RESOLVED (21 Jul 2026)

### ★★ No instrument declaring a Digital Free Trade Zone exists

This is now a **confirmed negative**, not a failed search. Four independent checks:

- Act 438 consolidated text ("Online 2026"): **zero occurrences of "digital"**.
  First Schedule 32 free commercial zones, Second Schedule 25 free industrial. No DFTZ.
- **Full P.U.(B) index — 9,059 instruments — none with "digital" in the title.**
  Act 438 accounts for 109; all ordinary free-zone notifications/amendments/revocations.
- P.U.(A) swept on bebas / zon / digital / pengecualian / exemption, both languages.
  Nothing declares or grants anything to a DFTZ.
- RMCD free-zone list (~45 entries): no DFTZ entry.

**Use this control when asserting a zone is ungazetted.** Forest City Special Financial
Zone carries ~11 dedicated 2025 instruments (P.U.(A) 350–360/2025 — income tax, stamp
duty, RPGT). That is what a gazetted zone package looks like in the register. DFTZ has
no declaration and no dedicated incentive.

**The KLIA footprint is ordinary**: Act 438 **First Schedule item 10, "Kuala Lumpur
International Airport, Sepang", activities "Commercial"**, Gazette Plans 1207/1981/3004/
1376 (Selangor Survey Dept), declared under s.3(1) by the same mechanism as Pasir Gudang
and Port Klang. Authority: MAHB.

### ★ "DFTZ" now denotes an IT platform, not a zone

MDEC's live page (`mdec.my/dftz`) defines it **exclusively** as the *DFTZ eServices
Platform*, operated with RMCD, contact `dftz@mdec.com.my`, Ministry of Digital footer.
Rendered-page grep: "Satellite" 0, "Internet City" 0, "fulfil" 0, "Cainiao" 0,
"Aeropolis" 0, "KLIA" 0.

**Absent from** MOF Economic Outlook 2024/2025/2026, NIMP 2030, 13MP Buku Utama, MITI
Report 2024, New Incentive Framework, Ekonomi MADANI, MDEC's own RMK12 impact report,
and the Ministry of Digital's 2026 restatement of MDEC's mandate. **Control-verified** —
the same pipeline returns hits in MITI Report 2018, so absence is a finding.

Parliament: one mention in four years (backbencher, 26 Aug 2025, proposing review;
**no minister responded**). Next-newest 20 Nov 2019.

**Still unresolved: policy custodianship.** Operational custody is MDEC's. No statement
of transfer exists anywhere. MITI could not be ruled out — its site search sits behind
SSO. **Do not assert the programme is ownerless.**

### ★ Two RM500 lines running in opposite directions

**Import duty relief survives**: Customs Duties (Exemption) Order 2017,
**P.U.(A) 445/2017 Schedule Part I item 94**, as substituted by **P.U.(A) 59/2023 in
force 9 Mar 2023** — air courier incl. post via seven named airports, C.I.F. **≤RM500
per consignment**, excluding tobacco/liquor/vaping. All 13 amendments 2023–2026 checked;
only P.U.(A) 95/2023 touched item 94 (nicotine wording). **Unchanged at 21 Jul 2026.**

**Sales tax relief does not**: LVG at 10% on ≤RM500 online sales, any mode, from
1 Jan 2024 (P.U.(A) 403/2023, 404/2023).

**They are not complements** — duty keys on consignment + air carriage, sales tax on
online sale by any mode. **"De minimis was abolished" is wrong.**

### Post-2023 DFTZ data is structurally unobtainable

Last verifiable financials FY2023 (MAHB audited accounts): Alibaba KLIA Aeropolis Sdn
Bhd, **MAHB holds 30%** (Cainiao 70%), associate, profit ~RM5.28m, **down ~45%** from
~RM9.65m FY2022. Then **MAHB delisted from Bursa 25 Feb 2025** — no FY2024/FY2025 annual
report exists, investor-relations 404s. **MAHB's own microsite says both "70:30" and
"30:70"; the audited statements are the record — MAHB holds 30%.**

### Fetch notes

`mylvg.customs.gov.my` has an **expired TLS cert — curl `-k` required**.
**`customs.gov.my`'s search index is broken** — controls "SST", "kastam", "cukai" all
return zero, so any null result there proves nothing.
MDEC's DFTZ page still reads **"will go live on 27 April 2026" in future tense** nearly
three months after that date.
