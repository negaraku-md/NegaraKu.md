# Untranslated Titles & Summaries — Corpus Triage Report

_Generated 2026-09-11. Read-only analysis; no content files were modified._

## Methodology

A Python scan walked every `knowledge/<category>/<slug>[.<lang>].md` file (3,282 Markdown files). For each topic the **master** file (`<slug>.md`, whose `lang:` field names its authoritative language) was paired with its translation siblings (`<slug>.<lang>.md`). Only topics whose **master `status:` is `published`** were considered (drafts / reviewed / archived skipped). Frontmatter `title`, `summary`, `lang`, `status` were parsed from each file.

Three signals were tested on every translation file:

1. **`zh-no-CJK-title`** — a `.zh.md` translation whose `title` contains **no CJK characters** (ranges U+3400-U+9FFF, U+F900-U+FAFF, U+20000+). A Chinese title with zero Chinese characters is almost certainly untranslated. Whether the `summary` also lacks CJK is noted as a secondary marker on the row.
2. **`title==master(<lang>)`** — a translation whose `title` is **byte-identical** to the master title, while the translation `lang` differs from the master `lang` (e.g. an `ms` file still carrying the English master title). Short / acronymic titles that are proper nouns by nature (people, states, glossary headwords) are diverted to the "Likely proper nouns" section rather than counted as defects.
3. **Secondary (count only)** — any two sibling files under one topic sharing an identical title; reported as an aggregate count, not itemised.

**Heuristic caveat:** the proper-noun filter is mechanical (title <= 3 words with no lowercase prose words, or acronym-heavy). A few borderline entries may be miscategorised; treat the split as guidance, not a verdict. Also note the master's own `lang` is trusted as-is: where a master is labelled `lang: ms` but its title is actually English prose (several Malaysia / arts-culture articles), the matching `.en.md` file is flagged as `title==master(ms)` — the real defect there may be in the master, not the translation.

## Totals

| Signal | Count |
|---|---|
| `title==master(en)` | 253 |
| `title==master(ms)` | 6 |
| `zh-no-CJK-title` | 7 |
| **Total flagged (defects)** | **266** |
| Likely proper noun (separate section, not defects) | 30 |
| Sibling-title-identical pairs (secondary, count only) | 296 |

## Breakdown by category

| Category | en-master untranslated | ms-master untranslated | zh-no-CJK | Total |
|---|---|---|---|---|
| accounting | 17 | 0 | 0 | 17 |
| arts-culture | 1 | 2 | 0 | 3 |
| audit | 15 | 0 | 0 | 15 |
| business | 64 | 0 | 0 | 64 |
| company-secretary | 41 | 0 | 0 | 41 |
| economy | 1 | 0 | 0 | 1 |
| employment | 36 | 0 | 0 | 36 |
| glossary | 1 | 0 | 6 | 7 |
| government | 3 | 0 | 0 | 3 |
| law | 4 | 1 | 0 | 5 |
| malaysia | 3 | 1 | 0 | 4 |
| property | 0 | 1 | 0 | 1 |
| sports | 0 | 1 | 0 | 1 |
| states | 0 | 0 | 1 | 1 |
| taxation | 66 | 0 | 0 | 66 |
| transport | 1 | 0 | 0 | 1 |
| **Total** | 253 | 6 | 7 | **266** |

## Flagged files

Every flagged translation file. `title` = the (untranslated) title in the translation file; `master title` = the authoritative master title it matches / should have been translated from.

| # | path | lang | title | master title | signal |
|---|---|---|---|---|---|
| 1 | knowledge/accounting/accounting-records-section-245.ms.md | ms | What Counts as an Accounting Record Under Section 245 | What Counts as an Accounting Record Under Section 245 | `title==master(en)` |
| 2 | knowledge/accounting/accounting-software-malaysia.ms.md | ms | Accounting Software in Malaysia: The Two Capabilities That Now Decide It | Accounting Software in Malaysia: The Two Capabilities That Now Decide It | `title==master(en)` |
| 3 | knowledge/accounting/accounting-standards-index.ms.md | ms | Malaysian Accounting Standards Index: MFRS and MPERS | Malaysian Accounting Standards Index: MFRS and MPERS | `title==master(en)` |
| 4 | knowledge/accounting/bookkeeping-in-house-vs-outsourced.ms.md | ms | In-House or Outsourced Bookkeeping: The Real Cost Comparison | In-House or Outsourced Bookkeeping: The Real Cost Comparison | `title==master(en)` |
| 5 | knowledge/accounting/director-right-to-inspect-records.ms.md | ms | A Director's Right to Inspect the Accounting Records | A Director's Right to Inspect the Accounting Records | `title==master(en)` |
| 6 | knowledge/accounting/e-invoice-accounting-records.ms.md | ms | e-Invoice, MyInvois and Your Statutory Records | e-Invoice, MyInvois and Your Statutory Records | `title==master(en)` |
| 7 | knowledge/accounting/financial-reporting-deadlines.ms.md | ms | Financial Reporting Deadlines for a Malaysian Company | Financial Reporting Deadlines for a Malaysian Company | `title==master(en)` |
| 8 | knowledge/accounting/financial-statement-pack.ms.md | ms | What a Malaysian Statutory Financial Statement Pack Contains | What a Malaysian Statutory Financial Statement Pack Contains | `title==master(en)` |
| 9 | knowledge/accounting/financial-year-end.ms.md | ms | Choosing and Changing Your Financial Year End in Malaysia | Choosing and Changing Your Financial Year End in Malaysia | `title==master(en)` |
| 10 | knowledge/accounting/first-financial-year.ms.md | ms | Your First Financial Year: The 18-Month Rule for a New Sdn Bhd | Your First Financial Year: The 18-Month Rule for a New Sdn Bhd | `title==master(en)` |
| 11 | knowledge/accounting/mbrs-tagging-errors.ms.md | ms | SSMxT Tagging Errors: Why MBRS Filings Fail Validation | SSMxT Tagging Errors: Why MBRS Filings Fail Validation | `title==master(en)` |
| 12 | knowledge/accounting/mfrs-18-presentation.ms.md | ms | MFRS 18: The New Profit or Loss Structure for 2027 | MFRS 18: The New Profit or Loss Structure for 2027 | `title==master(en)` |
| 13 | knowledge/accounting/mfrs-vs-mpers.ms.md | ms | MFRS or MPERS: Which Framework Does Your Company Use? | MFRS or MPERS: Which Framework Does Your Company Use? | `title==master(en)` |
| 14 | knowledge/accounting/nsrf-sustainability-reporting.ms.md | ms | NSRF: Who Has to Report Sustainability Information, and From When | NSRF: Who Has to Report Sustainability Information, and From When | `title==master(en)` |
| 15 | knowledge/accounting/records-outside-malaysia.ms.md | ms | Keeping Accounting Records Outside Malaysia | Keeping Accounting Records Outside Malaysia | `title==master(en)` |
| 16 | knowledge/accounting/sdn-bhd-bookkeeping.ms.md | ms | Sdn Bhd Bookkeeping: A Chart of Accounts That Survives Filing Season | Sdn Bhd Bookkeeping: A Chart of Accounts That Survives Filing Season | `title==master(en)` |
| 17 | knowledge/accounting/switching-mpers-to-mfrs.ms.md | ms | Switching from MPERS to MFRS (and Back Again) | Switching from MPERS to MFRS (and Back Again) | `title==master(en)` |
| 18 | knowledge/arts-culture/batik.en.md | en | Batik: The Craft That Draws With Wax Instead of Dye | Batik: The Craft That Draws With Wax Instead of Dye | `title==master(ms)` |
| 19 | knowledge/arts-culture/dewan-bahasa-dan-pustaka.en.md | en | Dewan Bahasa dan Pustaka (DBP) | Dewan Bahasa dan Pustaka (DBP) | `title==master(ms)` |
| 20 | knowledge/arts-culture/wayang-kulit.ms.md | ms | Wayang Kulit: A Puppet Master, a Lamp, and an All-Night Story | Wayang Kulit: A Puppet Master, a Lamp, and an All-Night Story | `title==master(en)` |
| 21 | knowledge/audit/after-audit-exemption.ms.md | ms | Life After Audit Exemption: What Your Company Still Owes | Life After Audit Exemption: What Your Company Still Owes | `title==master(en)` |
| 22 | knowledge/audit/appointing-an-auditor.ms.md | ms | Appointing an Auditor for a Malaysian Company | Appointing an Auditor for a Malaysian Company | `title==master(en)` |
| 23 | knowledge/audit/audit-adjustments-tax.ms.md | ms | Audit Adjustments and Your Tax Computation | Audit Adjustments and Your Tax Computation | `title==master(en)` |
| 24 | knowledge/audit/audit-exemption-thresholds.ms.md | ms | Audit Exemption Thresholds in Malaysia: the 2025–2027 Phase-In | Audit Exemption Thresholds in Malaysia: the 2025–2027 Phase-In | `title==master(en)` |
| 25 | knowledge/audit/audit-exemption.ms.md | ms | Audit Exemption for Small Companies in Malaysia | Audit Exemption for Small Companies in Malaysia | `title==master(en)` |
| 26 | knowledge/audit/audit-fees-malaysia.ms.md | ms | Audit Fees in Malaysia: There Is No Official Fee Schedule | Audit Fees in Malaysia: There Is No Official Fee Schedule | `title==master(en)` |
| 27 | knowledge/audit/audit-opinion-types.ms.md | ms | The Four Audit Opinions, and Which One You Get | The Four Audit Opinions, and Which One You Get | `title==master(en)` |
| 28 | knowledge/audit/audit-preparation-checklist.ms.md | ms | The Audit Request List, and How to Be Ready for It | The Audit Request List, and How to Be Ready for It | `title==master(en)` |
| 29 | knowledge/audit/auditors-report-anatomy.ms.md | ms | Reading a Malaysian Auditor's Report, Section by Section | Reading a Malaysian Auditor's Report, Section by Section | `title==master(en)` |
| 30 | knowledge/audit/changing-auditors.ms.md | ms | Changing Auditors: Removal, Resignation and Special Notice | Changing Auditors: Removal, Resignation and Special Notice | `title==master(en)` |
| 31 | knowledge/audit/dormant-company-audit-exemption.ms.md | ms | Dormant Companies and Audit Exemption in Malaysia | Dormant Companies and Audit Exemption in Malaysia | `title==master(en)` |
| 32 | knowledge/audit/emphasis-of-matter-kam.ms.md | ms | Emphasis of Matter, Other Matter and Key Audit Matters | Emphasis of Matter, Other Matter and Key Audit Matters | `title==master(en)` |
| 33 | knowledge/audit/going-concern-audit.ms.md | ms | Going Concern and the Management Representation Letter | Going Concern and the Management Representation Letter | `title==master(en)` |
| 34 | knowledge/audit/statutory-audit-process.ms.md | ms | Anatomy of a Statutory Audit in Malaysia | Anatomy of a Statutory Audit in Malaysia | `title==master(en)` |
| 35 | knowledge/audit/who-cannot-claim-audit-exemption.ms.md | ms | Companies That Can Never Claim Audit Exemption in Malaysia | Companies That Can Never Claim Audit Exemption in Malaysia | `title==master(en)` |
| 36 | knowledge/business/anti-dumping-countervailing-duties.ms.md | ms | Anti-Dumping and Countervailing Duties on Imports into Malaysia | Anti-Dumping and Countervailing Duties on Imports into Malaysia | `title==master(en)` |
| 37 | knowledge/business/arbitration-vs-litigation-malaysia.ms.md | ms | Arbitration or Court? Choosing a Dispute Clause Under Malaysian Law | Arbitration or Court? Choosing a Dispute Clause Under Malaysian Law | `title==master(en)` |
| 38 | knowledge/business/branch-vs-subsidiary-malaysia.ms.md | ms | Branch, Subsidiary or Representative Office in Malaysia? | Branch, Subsidiary or Representative Office in Malaysia? | `title==master(en)` |
| 39 | knowledge/business/bumiputera-equity-requirements.ms.md | ms | Bumiputera Equity Requirements in Malaysian Business Regulation | Bumiputera Equity Requirements in Malaysian Business Regulation | `title==master(en)` |
| 40 | knowledge/business/business-costs-by-region.ms.md | ms | What It Costs to Operate in Each Malaysian Region — the Figures That Are Actually Published | What It Costs to Operate in Each Malaysian Region — the Figures That Are Actually Published | `title==master(en)` |
| 41 | knowledge/business/business-structures-malaysia.ms.md | ms | Malaysian Business Structures Compared | Malaysian Business Structures Compared | `title==master(en)` |
| 42 | knowledge/business/close-a-company.ms.md | ms | Closing or Exiting a Sdn Bhd — Which Route Applies | Closing or Exiting a Sdn Bhd — Which Route Applies | `title==master(en)` |
| 43 | knowledge/business/company-constitution-malaysia.ms.md | ms | Company Constitution or the Companies Act Default? What You Inherit by Skipping It | Company Constitution or the Companies Act Default? What You Inherit by Skipping It | `title==master(en)` |
| 44 | knowledge/business/company-director-requirements.ms.md | ms | Who Can Be a Director of a Malaysian Company — and What You Sign Up For | Who Can Be a Director of a Malaysian Company — and What You Sign Up For | `title==master(en)` |
| 45 | knowledge/business/company-name-search-ssm.ms.md | ms | Company Name Search, Reservation and Rejection at SSM | Company Name Search, Reservation and Rejection at SSM | `title==master(en)` |
| 46 | knowledge/business/company-secretary-malaysia.ms.md | ms | Do I Need a Company Secretary in Malaysia, and What Do They Actually Do? | Do I Need a Company Secretary in Malaysia, and What Do They Actually Do? | `title==master(en)` |
| 47 | knowledge/business/contracts-act-malaysia.ms.md | ms | The Contracts Act 1950 Is Not English Law — Five Places Malaysia Diverges | The Contracts Act 1950 Is Not English Law — Five Places Malaysia Diverges | `title==master(en)` |
| 48 | knowledge/business/corporate-bank-account-malaysia.ms.md | ms | Opening a Corporate Bank Account in Malaysia — Including Why Foreign-Owned Companies Get Declined | Opening a Corporate Bank Account in Malaysia — Including Why Foreign-Owned Companies Get Declined | `title==master(en)` |
| 49 | knowledge/business/corporate-rescue-malaysia.ms.md | ms | Corporate Rescue in Malaysia — Before You Close the Company | Corporate Rescue in Malaysia — Before You Close the Company | `title==master(en)` |
| 50 | knowledge/business/creditors-voluntary-winding-up.ms.md | ms | Creditors' Voluntary Winding Up and Director Liability | Creditors' Voluntary Winding Up and Director Liability | `title==master(en)` |
| 51 | knowledge/business/data-breach-notification-malaysia.ms.md | ms | Data Breach Notification in Malaysia: The 72-Hour Rule | Data Breach Notification in Malaysia: The 72-Hour Rule | `title==master(en)` |
| 52 | knowledge/business/data-protection-officer-malaysia.ms.md | ms | Do You Need a Data Protection Officer in Malaysia? | Do You Need a Data Protection Officer in Malaysia? | `title==master(en)` |
| 53 | knowledge/business/debt-recovery-malaysia.ms.md | ms | Debt Recovery in Malaysia — The Escalation Ladder, Not the Lawsuit | Debt Recovery in Malaysia — The Escalation Ladder, Not the Lawsuit | `title==master(en)` |
| 54 | knowledge/business/digital-free-trade-zone.ms.md | ms | Digital Free Trade Zone — What It Is, and What Can Still Be Confirmed | Digital Free Trade Zone — What It Is, and What Can Still Be Confirmed | `title==master(en)` |
| 55 | knowledge/business/director-service-contracts.ms.md | ms | Director Service Contracts — Office, Employment, and the s.231 Disclosure Rule | Director Service Contracts — Office, Employment, and the s.231 Disclosure Rule | `title==master(en)` |
| 56 | knowledge/business/doing-business-ipoh-perak.ms.md | ms | Doing Business in Ipoh and Perak: The Cost Case | Doing Business in Ipoh and Perak: The Cost Case | `title==master(en)` |
| 57 | knowledge/business/economic-corridors-compared.ms.md | ms | Malaysia's Economic Corridors Compared | Malaysia's Economic Corridors Compared | `title==master(en)` |
| 58 | knowledge/business/employment-pass-founder-malaysia.ms.md | ms | Employment Pass for Founders and Directors — the Sequencing Trap | Employment Pass for Founders and Directors — the Sequencing Trap | `title==master(en)` |
| 59 | knowledge/business/equity-crowdfunding-p2p-malaysia.ms.md | ms | Equity Crowdfunding and P2P Financing for Malaysian Businesses | Equity Crowdfunding and P2P Financing for Malaysian Businesses | `title==master(en)` |
| 60 | knowledge/business/foreign-currency-borrowing-malaysia.ms.md | ms | Borrowing in Foreign Currency: What a Malaysian Company May Do | Borrowing in Foreign Currency: What a Malaysian Company May Do | `title==master(en)` |
| 61 | knowledge/business/foreign-ownership-malaysia.ms.md | ms | Can a Foreigner Own 100% of a Malaysian Company? Sector by Sector | Can a Foreigner Own 100% of a Malaysian Company? Sector by Sector | `title==master(en)` |
| 62 | knowledge/business/forest-city-sfz.ms.md | ms | Forest City Special Financial Zone — Not the Same Thing as the JS-SEZ | Forest City Special Financial Zone — Not the Same Thing as the JS-SEZ | `title==master(en)` |
| 63 | knowledge/business/industrial-design-malaysia.ms.md | ms | Industrial Design Registration in Malaysia | Industrial Design Registration in Malaysia | `title==master(en)` |
| 64 | knowledge/business/infrastructure-connectivity-by-region.ms.md | ms | Ports, Airports, Rail and Broadband by Malaysian Region — the Official Numbers | Ports, Airports, Rail and Broadband by Malaysian Region — the Official Numbers | `title==master(en)` |
| 65 | knowledge/business/investment-agency-directory.ms.md | ms | Which Malaysian Agency Approves What — and in What Order | Which Malaysian Agency Approves What — and in What Order | `title==master(en)` |
| 66 | knowledge/business/ip-ownership-malaysia.ms.md | ms | Who Owns the IP Your Staff and Contractors Create? | Who Owns the IP Your Staff and Contractors Create? | `title==master(en)` |
| 67 | knowledge/business/llp-vs-sdn-bhd.ms.md | ms | LLP vs Sdn Bhd: Which One Actually Fits | LLP vs Sdn Bhd: Which One Actually Fits | `title==master(en)` |
| 68 | knowledge/business/malaysia-business-visa-comparison.ms.md | ms | Visas for Business Owners — Employment Pass, MM2H, PVIP and Dependant Pass Compared | Visas for Business Owners — Employment Pass, MM2H, PVIP and Dependant Pass Compared | `title==master(en)` |
| 69 | knowledge/business/malaysia-courts-business-disputes.ms.md | ms | Which Malaysian Court Hears Your Business Dispute | Which Malaysian Court Hears Your Business Dispute | `title==master(en)` |
| 70 | knowledge/business/mdec-digital-status.ms.md | ms | Malaysia Digital Status — What Replaced MSC Malaysia, and Who Qualifies | Malaysia Digital Status — What Replaced MSC Malaysia, and Who Qualifies | `title==master(en)` |
| 71 | knowledge/business/members-voluntary-winding-up.ms.md | ms | Members' Voluntary Winding Up of a Solvent Company | Members' Voluntary Winding Up of a Solvent Company | `title==master(en)` |
| 72 | knowledge/business/msic-codes-malaysia.ms.md | ms | MSIC Codes: How to Pick Yours, and What It Decides Later | MSIC Codes: How to Pick Yours, and What It Decides Later | `title==master(en)` |
| 73 | knowledge/business/online-safety-act-malaysia.ms.md | ms | The Online Safety Act 2025: Who It Binds and What It Demands | The Online Safety Act 2025: Who It Binds and What It Demands | `title==master(en)` |
| 74 | knowledge/business/paid-up-capital-foreign-company.ms.md | ms | Minimum Paid-Up Capital for a Foreign-Owned Malaysian Company | Minimum Paid-Up Capital for a Foreign-Owned Malaysian Company | `title==master(en)` |
| 75 | knowledge/business/partnership-malaysia.ms.md | ms | Partnership in Malaysia: The Structure Most People Should Avoid | Partnership in Malaysia: The Structure Most People Should Avoid | `title==master(en)` |
| 76 | knowledge/business/patent-malaysia.ms.md | ms | Patents and Utility Innovations in Malaysia | Patents and Utility Innovations in Malaysia | `title==master(en)` |
| 77 | knowledge/business/payment-regulation-malaysia.ms.md | ms | Accepting Payments in Malaysia: When You Need Bank Negara Approval | Accepting Payments in Malaysia: When You Need Bank Negara Approval | `title==master(en)` |
| 78 | knowledge/business/pdpa-registration-classes.ms.md | ms | Which Businesses Must Register Under the PDPA? | Which Businesses Must Register Under the PDPA? | `title==master(en)` |
| 79 | knowledge/business/register-enterprise-ezbiz.ms.md | ms | How to Register a Sole Proprietorship or Partnership on EzBiz | How to Register a Sole Proprietorship or Partnership on EzBiz | `title==master(en)` |
| 80 | knowledge/business/register-foreign-branch-malaysia.ms.md | ms | Registering a Foreign Company Branch in Malaysia | Registering a Foreign Company Branch in Malaysia | `title==master(en)` |
| 81 | knowledge/business/register-llp-malaysia.ms.md | ms | How to Register an LLP in Malaysia Through MyLLP | How to Register an LLP in Malaysia Through MyLLP | `title==master(en)` |
| 82 | knowledge/business/registered-office-malaysia.ms.md | ms | Registered Office, Business Address and Virtual Office in Malaysia | Registered Office, Business Address and Virtual Office in Malaysia | `title==master(en)` |
| 83 | knowledge/business/repatriate-profits-malaysia.ms.md | ms | Repatriating Profits and Dividends from Malaysia | Repatriating Profits and Dividends from Malaysia | `title==master(en)` |
| 84 | knowledge/business/resident-director-malaysia.ms.md | ms | The Resident Director Requirement and the Nominee Director Trap | The Resident Director Requirement and the Nominee Director Trap | `title==master(en)` |
| 85 | knowledge/business/sdn-bhd-vs-berhad.ms.md | ms | Sdn Bhd vs Berhad: The 50-Shareholder Ceiling | Sdn Bhd vs Berhad: The 50-Shareholder Ceiling | `title==master(en)` |
| 86 | knowledge/business/sector-licence-directory.ms.md | ms | Who Regulates What: Malaysian Sector Licence Directory | Who Regulates What: Malaysian Sector Licence Directory | `title==master(en)` |
| 87 | knowledge/business/sell-business-malaysia.ms.md | ms | Selling Your Business — Share Sale or Asset Sale | Selling Your Business — Share Sale or Asset Sale | `title==master(en)` |
| 88 | knowledge/business/share-capital-malaysia.ms.md | ms | Share Capital, Paid-Up Capital and Allotting Shares in Malaysia | Share Capital, Paid-Up Capital and Allotting Shares in Malaysia | `title==master(en)` |
| 89 | knowledge/business/shareholders-agreement-malaysia.ms.md | ms | Shareholders Agreements in Malaysia — What the Document Can and Cannot Override | Shareholders Agreements in Malaysia — What the Document Can and Cannot Override | `title==master(en)` |
| 90 | knowledge/business/sme-financing-malaysia.ms.md | ms | Government Financing and Guarantee Schemes for Malaysian SMEs | Government Financing and Guarantee Schemes for Malaysian SMEs | `title==master(en)` |
| 91 | knowledge/business/social-media-licensing-malaysia.ms.md | ms | Social Media Licensing in Malaysia: Who Actually Needs the ASP(C) Licence | Social Media Licensing in Malaysia: Who Actually Needs the ASP(C) Licence | `title==master(en)` |
| 92 | knowledge/business/sole-prop-vs-sdn-bhd.ms.md | ms | Sole Proprietorship vs Sdn Bhd: Which Should You Register? | Sole Proprietorship vs Sdn Bhd: Which Should You Register? | `title==master(en)` |
| 93 | knowledge/business/ssm-fees-malaysia.ms.md | ms | SSM Fees: Companies, Businesses and LLPs | SSM Fees: Companies, Businesses and LLPs | `title==master(en)` |
| 94 | knowledge/business/ssm-glossary.ms.md | ms | SSM and Malaysian Business Jargon, Decoded | SSM and Malaysian Business Jargon, Decoded | `title==master(en)` |
| 95 | knowledge/business/state-investment-agencies.ms.md | ms | Malaysia's State and Corridor Investment Agencies — What Each One Can Actually Approve | Malaysia's State and Corridor Investment Agencies — What Each One Can Actually Approve | `title==master(en)` |
| 96 | knowledge/business/strike-off-company-malaysia.ms.md | ms | Striking Off a Company Under Section 550 | Striking Off a Company Under Section 550 | `title==master(en)` |
| 97 | knowledge/business/trademark-classes-fees-malaysia.ms.md | ms | Trademark Classes and MyIPO Fees | Trademark Classes and MyIPO Fees | `title==master(en)` |
| 98 | knowledge/business/trademark-registration-malaysia.ms.md | ms | Registering a Trademark with MyIPO | Registering a Trademark with MyIPO | `title==master(en)` |
| 99 | knowledge/business/what-is-sdn-bhd.ms.md | ms | What Is a Sdn Bhd? A Plain-Language Guide | What Is a Sdn Bhd? A Plain-Language Guide | `title==master(en)` |
| 100 | knowledge/company-secretary/agm-requirements.ms.md | ms | AGM Requirements in Malaysia: Who Still Has to Hold One | AGM Requirements in Malaysia: Who Still Has to Hold One | `title==master(en)` |
| 101 | knowledge/company-secretary/annual-return.ms.md | ms | Annual Return: What It Is and When to File It | Annual Return: What It Is and When to File It | `title==master(en)` |
| 102 | knowledge/company-secretary/appoint-company-secretary.ms.md | ms | How to Appoint a Company Secretary in Malaysia | How to Appoint a Company Secretary in Malaysia | `title==master(en)` |
| 103 | knowledge/company-secretary/appoint-resign-director.ms.md | ms | Appointing and Resigning a Director of a Malaysian Company | Appointing and Resigning a Director of a Malaysian Company | `title==master(en)` |
| 104 | knowledge/company-secretary/audit-committee-public-companies.ms.md | ms | The Audit Committee: What Malaysian Public Companies Actually Have to Do | The Audit Committee: What Malaysian Public Companies Actually Have to Do | `title==master(en)` |
| 105 | knowledge/company-secretary/bo-non-cooperation.ms.md | ms | When the Beneficial Owner Will Not Respond | When the Beneficial Owner Will Not Respond | `title==master(en)` |
| 106 | knowledge/company-secretary/bo-register.ms.md | ms | Keeping the Register of Beneficial Owners (s.60B) | Keeping the Register of Beneficial Owners (s.60B) | `title==master(en)` |
| 107 | knowledge/company-secretary/board-meetings-and-minutes.ms.md | ms | Board Meetings and Minutes: The Third Schedule Is Your Default Rulebook | Board Meetings and Minutes: The Third Schedule Is Your Default Rulebook | `title==master(en)` |
| 108 | knowledge/company-secretary/capital-reduction.ms.md | ms | Reducing Share Capital: The Court Route and the Solvency Statement Route | Reducing Share Capital: The Court Route and the Solvency Statement Route | `title==master(en)` |
| 109 | knowledge/company-secretary/certified-true-copies.ms.md | ms | Certified True Copies vs Original Sighted: What Actually Differs | Certified True Copies vs Original Sighted: What Actually Differs | `title==master(en)` |
| 110 | knowledge/company-secretary/changing-company-secretary.ms.md | ms | Changing Your Company Secretary: The Handover Checklist | Changing Your Company Secretary: The Handover Checklist | `title==master(en)` |
| 111 | knowledge/company-secretary/company-secretary-qualification.ms.md | ms | Who Can Be a Company Secretary in Malaysia | Who Can Be a Company Secretary in Malaysia | `title==master(en)` |
| 112 | knowledge/company-secretary/director-shareholding-notification.ms.md | ms | Notifying the Company of Your Shareholdings: the s.219 Duty on Every Director | Notifying the Company of Your Shareholdings: the s.219 Duty on Every Director | `title==master(en)` |
| 113 | knowledge/company-secretary/directors-fees-approval.ms.md | ms | Directors' Fees and Compensation: Who Approves What | Directors' Fees and Compensation: Who Approves What | `title==master(en)` |
| 114 | knowledge/company-secretary/directors-report.ms.md | ms | The Directors' Report and Statutory Declaration: s.251 to s.253 | The Directors' Report and Statutory Declaration: s.251 to s.253 | `title==master(en)` |
| 115 | knowledge/company-secretary/disclosure-of-interest.ms.md | ms | Disclosure of Interest in Contracts: s.221 and s.222 in Practice | Disclosure of Interest in Contracts: s.221 and s.222 in Practice | `title==master(en)` |
| 116 | knowledge/company-secretary/dividends-and-solvency.ms.md | ms | Dividends and the Solvency Test: When a Sdn Bhd Can Actually Pay | Dividends and the Solvency Test: When a Sdn Bhd Can Actually Pay | `title==master(en)` |
| 117 | knowledge/company-secretary/ebos-filing.ms.md | ms | Filing Beneficial Ownership Information Through e-BOS | Filing Beneficial Ownership Information Through e-BOS | `title==master(en)` |
| 118 | knowledge/company-secretary/ebos.ms.md | ms | e-BOS — Electronic Beneficial Ownership System | e-BOS — Electronic Beneficial Ownership System | `title==master(en)` |
| 119 | knowledge/company-secretary/egm-requisition.ms.md | ms | How Members Can Force a Company to Hold a Meeting | How Members Can Force a Company to Hold a Meeting | `title==master(en)` |
| 120 | knowledge/company-secretary/extension-of-time-ssm.ms.md | ms | Applying for an Extension of Time from SSM | Applying for an Extension of Time from SSM | `title==master(en)` |
| 121 | knowledge/company-secretary/financial-statements-lodgement.ms.md | ms | Circulating and Lodging Financial Statements: The Two Deadlines | Circulating and Lodging Financial Statements: The Two Deadlines | `title==master(en)` |
| 122 | knowledge/company-secretary/loans-to-directors.ms.md | ms | Loans to Directors: the s.224 Prohibition and Its Exemptions | Loans to Directors: the s.224 Prohibition and Its Exemptions | `title==master(en)` |
| 123 | knowledge/company-secretary/maicsa.ms.md | ms | MAICSA — Chartered Secretaries Malaysia | MAICSA — Chartered Secretaries Malaysia | `title==master(en)` |
| 124 | knowledge/company-secretary/minute-books-and-records.ms.md | ms | Minute Books and Records: Every Retention Clock in One Place | Minute Books and Records: Every Retention Clock in One Place | `title==master(en)` |
| 125 | knowledge/company-secretary/register-of-charges.ms.md | ms | Register of Charges: Miss 30 Days and the Security Is Void | Register of Charges: Miss 30 Days and the Security Is Void | `title==master(en)` |
| 126 | knowledge/company-secretary/register-of-directors.ms.md | ms | Register of Directors, Managers and Secretaries: s.57 vs s.58 | Register of Directors, Managers and Secretaries: s.57 vs s.58 | `title==master(en)` |
| 127 | knowledge/company-secretary/register-of-members.ms.md | ms | Register of Members: Two Duties, Two Separate Clocks | Register of Members: Two Duties, Two Separate Clocks | `title==master(en)` |
| 128 | knowledge/company-secretary/registered-office.ms.md | ms | Registered Office: Rules, Change and the Public Access Duty | Registered Office: Rules, Change and the Public Access Duty | `title==master(en)` |
| 129 | knowledge/company-secretary/remove-a-director.ms.md | ms | Removing a Director: Why a Written Resolution Will Not Work | Removing a Director: Why a Written Resolution Will Not Work | `title==master(en)` |
| 130 | knowledge/company-secretary/resolution-notice-periods.ms.md | ms | Notice Periods for Company Resolutions and Meetings in Malaysia | Notice Periods for Company Resolutions and Meetings in Malaysia | `title==master(en)` |
| 131 | knowledge/company-secretary/sdn-bhd-filing-calendar.ms.md | ms | Sdn Bhd Compliance Calendar: Every SSM Deadline | Sdn Bhd Compliance Calendar: Every SSM Deadline | `title==master(en)` |
| 132 | knowledge/company-secretary/secretary-resignation.ms.md | ms | Resigning as a Company Secretary in Malaysia | Resigning as a Company Secretary in Malaysia | `title==master(en)` |
| 133 | knowledge/company-secretary/secretary-vacancy-30-days.ms.md | ms | The 30-Day Company Secretary Vacancy Rule | The 30-Day Company Secretary Vacancy Rule | `title==master(en)` |
| 134 | knowledge/company-secretary/share-allotment.ms.md | ms | Allotting New Shares and the Return of Allotment | Allotting New Shares and the Return of Allotment | `title==master(en)` |
| 135 | knowledge/company-secretary/share-transmission.ms.md | ms | Transmission of Shares on Death or Bankruptcy Is Not a Transfer | Transmission of Shares on Death or Bankruptcy Is Not a Transfer | `title==master(en)` |
| 136 | knowledge/company-secretary/ssm-late-lodgement-fees.ms.md | ms | SSM Late Lodgement Fees and Compounds | SSM Late Lodgement Fees and Compounds | `title==master(en)` |
| 137 | knowledge/company-secretary/statutory-registers.ms.md | ms | Statutory Registers Every Sdn Bhd Must Keep: A Checklist | Statutory Registers Every Sdn Bhd Must Keep: A Checklist | `title==master(en)` |
| 138 | knowledge/company-secretary/unaudited-financial-statements.ms.md | ms | Unaudited Financial Statements: What You Actually Lodge When Exempt | Unaudited Financial Statements: What You Actually Lodge When Exempt | `title==master(en)` |
| 139 | knowledge/company-secretary/who-is-a-beneficial-owner.ms.md | ms | Who Counts as a Beneficial Owner in Malaysia? | Who Counts as a Beneficial Owner in Malaysia? | `title==master(en)` |
| 140 | knowledge/company-secretary/written-resolutions.ms.md | ms | Written Resolutions of a Sdn Bhd: How They Work and What They Cannot Do | Written Resolutions of a Sdn Bhd: How They Work and What They Cannot Do | `title==master(en)` |
| 141 | knowledge/economy/palm-oil-sector.ms.md | ms | Malaysia's Palm Oil Sector | Malaysia's Palm Oil Sector | `title==master(en)` |
| 142 | knowledge/employment/domestic-inquiry-malaysia.ms.md | ms | Domestic inquiry: running one that survives the Industrial Court | Domestic inquiry: running one that survives the Industrial Court | `title==master(en)` |
| 143 | knowledge/employment/employee-vs-contractor-malaysia.ms.md | ms | Employee, gig worker or independent contractor? | Employee, gig worker or independent contractor? | `title==master(en)` |
| 144 | knowledge/employment/employment-act-coverage.ms.md | ms | Who the Employment Act covers, and what RM4,000 actually switches off | Who the Employment Act covers, and what RM4,000 actually switches off | `title==master(en)` |
| 145 | knowledge/employment/employment-contract-malaysia.ms.md | ms | The Malaysian employment contract, clause by clause | The Malaysian employment contract, clause by clause | `title==master(en)` |
| 146 | knowledge/employment/epf-employer-guide.ms.md | ms | EPF for Employers: Why the Third Schedule Is a Table, Not a Percentage | EPF for Employers: Why the Third Schedule Is a Table, Not a Percentage | `title==master(en)` |
| 147 | knowledge/employment/epf-foreign-workers-malaysia.ms.md | ms | EPF for Foreign Workers: The 2 Per Cent Mandate Under Part F | EPF for Foreign Workers: The 2 Per Cent Mandate Under Part F | `title==master(en)` |
| 148 | knowledge/employment/epf-socso-guide.ms.md | ms | EPF, SOCSO and EIS: Where to Start as an Employer | EPF, SOCSO and EIS: Where to Start as an Employer | `title==master(en)` |
| 149 | knowledge/employment/fixed-term-contract-malaysia.ms.md | ms | Fixed-term contracts and when they become permanent employment | Fixed-term contracts and when they become permanent employment | `title==master(en)` |
| 150 | knowledge/employment/flexible-working-arrangement-malaysia.ms.md | ms | Flexible working arrangement requests under s.60P and s.60Q | Flexible working arrangement requests under s.60P and s.60Q | `title==master(en)` |
| 151 | knowledge/employment/forced-labour-compliance-malaysia.ms.md | ms | Forced Labour Compliance and Export Exposure | Forced Labour Compliance and Export Exposure | `title==master(en)` |
| 152 | knowledge/employment/foreign-worker-levy-malaysia.ms.md | ms | Foreign Worker Levy Rates and the Multi-Tier Levy | Foreign Worker Levy Rates and the Multi-Tier Levy | `title==master(en)` |
| 153 | knowledge/employment/form-e-ea-cp8d-malaysia.ms.md | ms | Form E, Form EA and CP8D: The Employer Filing Trio | Form E, Form EA and CP8D: The Employer Filing Trio | `title==master(en)` |
| 154 | knowledge/employment/gig-workers-act-2025.ms.md | ms | The Gig Workers Act 2025: a classification statute with a social-security bolt-on | The Gig Workers Act 2025: a classification statute with a social-security bolt-on | `title==master(en)` |
| 155 | knowledge/employment/hrd-corp-levy-malaysia.ms.md | ms | HRD Corp Levy: Who Must Register, and How to Claim It Back | HRD Corp Levy: Who Must Register, and How to Claim It Back | `title==master(en)` |
| 156 | knowledge/employment/labour-law-map-malaysia.ms.md | ms | Malaysian labour law map: statute, regulator, portal, scope | Malaysian labour law map: statute, regulator, portal, scope | `title==master(en)` |
| 157 | knowledge/employment/leave-entitlements-malaysia.ms.md | ms | Leave entitlements under the Employment Act 1955 | Leave entitlements under the Employment Act 1955 | `title==master(en)` |
| 158 | knowledge/employment/maternity-leave-malaysia.ms.md | ms | Maternity leave and pregnancy protection | Maternity leave and pregnancy protection | `title==master(en)` |
| 159 | knowledge/employment/minimum-wage-malaysia.ms.md | ms | Minimum Wage and the Rules on Paying Wages | Minimum Wage and the Rules on Paying Wages | `title==master(en)` |
| 160 | knowledge/employment/new-hire-statutory-checklist.ms.md | ms | New-hire statutory registration checklist | New-hire statutory registration checklist | `title==master(en)` |
| 161 | knowledge/employment/non-compete-clause-malaysia.ms.md | ms | Are non-compete clauses enforceable in Malaysia? | Are non-compete clauses enforceable in Malaysia? | `title==master(en)` |
| 162 | knowledge/employment/offboarding-statutory-checklist.ms.md | ms | Offboarding statutory checklist | Offboarding statutory checklist | `title==master(en)` |
| 163 | knowledge/employment/osha-employer-duties-malaysia.ms.md | ms | OSHA 1994 employer duties after the 2022 amendment | OSHA 1994 employer duties after the 2022 amendment | `title==master(en)` |
| 164 | knowledge/employment/paternity-leave-malaysia.ms.md | ms | Paternity leave in Malaysia | Paternity leave in Malaysia | `title==master(en)` |
| 165 | knowledge/employment/payroll-rates-deadlines-malaysia.ms.md | ms | Statutory Contribution Rates and Payroll Deadlines | Statutory Contribution Rates and Payroll Deadlines | `title==master(en)` |
| 166 | knowledge/employment/pcb-mtd-malaysia.ms.md | ms | PCB and Monthly Tax Deduction: The Employer's Withholding Duty | PCB and Monthly Tax Deduction: The Employer's Withholding Duty | `title==master(en)` |
| 167 | knowledge/employment/probation-malaysia.ms.md | ms | Probation and confirmation in Malaysia | Probation and confirmation in Malaysia | `title==master(en)` |
| 168 | knowledge/employment/public-holidays-malaysia.ms.md | ms | Public holidays in Malaysia and the Employment Act rule | Public holidays in Malaysia and the Employment Act rule | `title==master(en)` |
| 169 | knowledge/employment/retrenchment-malaysia.ms.md | ms | Retrenchment and redundancy: the correct procedure | Retrenchment and redundancy: the correct procedure | `title==master(en)` |
| 170 | knowledge/employment/sabah-sarawak-labour-ordinance.ms.md | ms | Sabah and Sarawak: the Labour Ordinances, not the Employment Act | Sabah and Sarawak: the Labour Ordinances, not the Employment Act | `title==master(en)` |
| 171 | knowledge/employment/socso-eis-employer-guide.ms.md | ms | SOCSO and EIS for Employers: Categories, the RM6,000 Ceiling and LINDUNG 24 Jam | SOCSO and EIS for Employers: Categories, the RM6,000 Ceiling and LINDUNG 24 Jam | `title==master(en)` |
| 172 | knowledge/employment/termination-benefits-malaysia.ms.md | ms | Termination and lay-off benefits in Malaysia | Termination and lay-off benefits in Malaysia | `title==master(en)` |
| 173 | knowledge/employment/unfair-dismissal-malaysia.ms.md | ms | Unfair dismissal claims under section 20 of the Industrial Relations Act 1967 | Unfair dismissal claims under section 20 of the Industrial Relations Act 1967 | `title==master(en)` |
| 174 | knowledge/employment/work-passes-malaysia.ms.md | ms | Malaysian Work Passes Compared | Malaysian Work Passes Compared | `title==master(en)` |
| 175 | knowledge/employment/worker-accommodation-act-446.ms.md | ms | Worker Accommodation and the Certificate for Accommodation | Worker Accommodation and the Certificate for Accommodation | `title==master(en)` |
| 176 | knowledge/employment/working-hours-overtime-malaysia.ms.md | ms | Working hours, rest days and overtime pay | Working hours, rest days and overtime pay | `title==master(en)` |
| 177 | knowledge/employment/workplace-sexual-harassment-malaysia.ms.md | ms | Workplace sexual harassment: the employer's two live duties | Workplace sexual harassment: the employer's two live duties | `title==master(en)` |
| 178 | knowledge/glossary/akta.zh.md | zh | Akta | Akta | `zh-no-CJK-title` |
| 179 | knowledge/glossary/epf.zh.md | zh | EPF | EPF | `zh-no-CJK-title` |
| 180 | knowledge/glossary/kampung.zh.md | zh | Kampung | Kampung | `zh-no-CJK-title` |
| 181 | knowledge/glossary/mykad.zh.md | zh | MyKad | MyKad | `zh-no-CJK-title` |
| 182 | knowledge/glossary/sdn-bhd.zh.md | zh | Sdn Bhd | Sdn Bhd | `zh-no-CJK-title` |
| 183 | knowledge/glossary/sst.zh.md | zh | SST | SST | `zh-no-CJK-title` |
| 184 | knowledge/glossary/suruhanjaya-syarikat-malaysia.ms.md | ms | Suruhanjaya Syarikat Malaysia (SSM): the Companies Commission of Malaysia | Suruhanjaya Syarikat Malaysia (SSM): the Companies Commission of Malaysia | `title==master(en)` |
| 185 | knowledge/government/lhdn.ms.md | ms | LHDN — Inland Revenue Board of Malaysia | LHDN — Inland Revenue Board of Malaysia | `title==master(en)` |
| 186 | knowledge/government/miti.ms.md | ms | MITI — Ministry of Investment, Trade and Industry | MITI — Ministry of Investment, Trade and Industry | `title==master(en)` |
| 187 | knowledge/government/ssm.ms.md | ms | SSM — Companies Commission of Malaysia | SSM — Companies Commission of Malaysia | `title==master(en)` |
| 188 | knowledge/law/companies-act-2016.ms.md | ms | Companies Act 2016 (Act 777) | Companies Act 2016 (Act 777) | `title==master(en)` |
| 189 | knowledge/law/employment-act-1955.ms.md | ms | Employment Act 1955 (Act 265) | Employment Act 1955 (Act 265) | `title==master(en)` |
| 190 | knowledge/law/federal-constitution.ms.md | ms | Federal Constitution of Malaysia | Federal Constitution of Malaysia | `title==master(en)` |
| 191 | knowledge/law/housing-developers-act-hda.en.md | en | Housing Development (Control and Licensing) Act 1966 | Housing Development (Control and Licensing) Act 1966 | `title==master(ms)` |
| 192 | knowledge/law/income-tax-act-1967.ms.md | ms | Income Tax Act 1967 (Act 53) | Income Tax Act 1967 (Act 53) | `title==master(en)` |
| 193 | knowledge/malaysia/formation-of-malaysia-1963.ms.md | ms | 1963: Building Malaysia Out of Four Different Territories | 1963: Building Malaysia Out of Four Different Territories | `title==master(en)` |
| 194 | knowledge/malaysia/independence-1957.ms.md | ms | Merdeka: How 31 August 1957 Actually Happened | Merdeka: How 31 August 1957 Actually Happened | `title==master(en)` |
| 195 | knowledge/malaysia/langkasuka.en.md | en | Langkasuka: The Kingdom Chinese Records Remember and Archaeology Can't Quite Place | Langkasuka: The Kingdom Chinese Records Remember and Archaeology Can't Quite Place | `title==master(ms)` |
| 196 | knowledge/malaysia/melaka-sultanate.ms.md | ms | The Melaka Sultanate: The Port That Built a Civilisation | The Melaka Sultanate: The Port That Built a Civilisation | `title==master(en)` |
| 197 | knowledge/property/gas-supply-piped-cooking-gas.en.md | en | Gas Supply at Home: Piped Natural Gas and Cooking Gas Cylinders | Gas Supply at Home: Piped Natural Gas and Cooking Gas Cylinders | `title==master(ms)` |
| 198 | knowledge/sports/football-in-malaysia.en.md | en | Football in Malaysia: FAM, Harimau Malaya and a Century of the Malaysia Cup | Football in Malaysia: FAM, Harimau Malaya and a Century of the Malaysia Cup | `title==master(ms)` |
| 199 | knowledge/states/sarawak.zh.md | zh | Sarawak | Sarawak | `zh-no-CJK-title` |
| 200 | knowledge/taxation/advance-pricing-arrangement.ms.md | ms | Advance Pricing Arrangement in Malaysia — Who Qualifies, What It Costs and How Long the Clocks Are | Advance Pricing Arrangement in Malaysia — Who Qualifies, What It Costs and How Long the Clocks Are | `title==master(en)` |
| 201 | knowledge/taxation/angel-investor-tax-incentive.ms.md | ms | Angel Investor Tax Incentive — the Gazetted Deadline Passed on 31 December 2023 | Angel Investor Tax Incentive — the Gazetted Deadline Passed on 31 December 2023 | `title==master(en)` |
| 202 | knowledge/taxation/approved-research-allowance.ms.md | ms | R&D Tax Incentives in Malaysia — There Is No Approved Research Allowance | R&D Tax Incentives in Malaysia — There Is No Approved Research Allowance | `title==master(en)` |
| 203 | knowledge/taxation/basis-period-and-accounting-date.ms.md | ms | Basis Periods and Changing Your Accounting Date | Basis Periods and Changing Your Accounting Date | `title==master(en)` |
| 204 | knowledge/taxation/benefits-in-kind.ms.md | ms | Benefits-in-Kind and Perquisites — Both Sides of the Transaction | Benefits-in-Kind and Perquisites — Both Sides of the Transaction | `title==master(en)` |
| 205 | knowledge/taxation/business-structure-tax-comparison.ms.md | ms | Sdn Bhd vs Sole Proprietor vs Partnership: Tax Compared | Sdn Bhd vs Sole Proprietor vs Partnership: Tax Compared | `title==master(en)` |
| 206 | knowledge/taxation/capital-gains-tax.ms.md | ms | Capital Gains Tax on Unlisted Shares in Malaysia | Capital Gains Tax on Unlisted Shares in Malaysia | `title==master(en)` |
| 207 | knowledge/taxation/capital-or-revenue.ms.md | ms | Capital or Revenue? Routing a Gain to CGT, RPGT or Income Tax | Capital or Revenue? Routing a Gain to CGT, RPGT or Income Tax | `title==master(en)` |
| 208 | knowledge/taxation/cbcr-and-master-file.ms.md | ms | Country-by-Country Reporting and the Master File in Malaysia | Country-by-Country Reporting and the Master File in Malaysia | `title==master(en)` |
| 209 | knowledge/taxation/certificate-of-residence.ms.md | ms | Certificate of Residence Malaysia — Applying Through e-Residence | Certificate of Residence Malaysia — Applying Through e-Residence | `title==master(en)` |
| 210 | knowledge/taxation/company-tax-calendar.ms.md | ms | Company Tax Compliance Calendar Malaysia | Company Tax Compliance Calendar Malaysia | `title==master(en)` |
| 211 | knowledge/taxation/company-tax-residence.ms.md | ms | When Is a Company Tax Resident in Malaysia? | When Is a Company Tax Resident in Malaysia? | `title==master(en)` |
| 212 | knowledge/taxation/consolidated-e-invoice.ms.md | ms | Consolidated e-Invoices and the Industries That Cannot Use Them | Consolidated e-Invoices and the Industries That Cannot Use Them | `title==master(en)` |
| 213 | knowledge/taxation/corporate-tax-rates.ms.md | ms | Malaysia Corporate Tax Rates | Malaysia Corporate Tax Rates | `title==master(en)` |
| 214 | knowledge/taxation/cp37-forms.ms.md | ms | CP37 Withholding Tax Forms — Which One, and When | CP37 Withholding Tax Forms — Which One, and When | `title==master(en)` |
| 215 | knowledge/taxation/donations-and-tax-deductions.ms.md | ms | Donations, Gifts and Section 44(6) Approved Institutions | Donations, Gifts and Section 44(6) Approved Institutions | `title==master(en)` |
| 216 | knowledge/taxation/double-deduction-list.ms.md | ms | Double and Further Deduction Directory — Gazetted Income Tax Rules | Double and Further Deduction Directory — Gazetted Income Tax Rules | `title==master(en)` |
| 217 | knowledge/taxation/dta-network.ms.md | ms | Malaysia's Double Taxation Agreement Network — Treaty Rates by Country | Malaysia's Double Taxation Agreement Network — Treaty Rates by Country | `title==master(en)` |
| 218 | knowledge/taxation/e-invoice-data-fields.ms.md | ms | e-Invoice Data Fields Reference | e-Invoice Data Fields Reference | `title==master(en)` |
| 219 | knowledge/taxation/e-invoice-vs-tax-invoice.ms.md | ms | e-Invoice vs SST Tax Invoice: Two Regimes, Two Documents | e-Invoice vs SST Tax Invoice: Two Regimes, Two Documents | `title==master(en)` |
| 220 | knowledge/taxation/e-invoicing.ms.md | ms | e-Invoicing in Malaysia: Where to Start with MyInvois | e-Invoicing in Malaysia: Where to Start with MyInvois | `title==master(en)` |
| 221 | knowledge/taxation/entertainment-expenses.ms.md | ms | Entertainment Expenses: 50 Per Cent or 100 Per Cent? | Entertainment Expenses: 50 Per Cent or 100 Per Cent? | `title==master(en)` |
| 222 | knowledge/taxation/expatriate-and-non-resident-tax.ms.md | ms | Expatriate and Non-Resident Tax: the Flat 30% and the Escapes | Expatriate and Non-Resident Tax: the Flat 30% and the Escapes | `title==master(en)` |
| 223 | knowledge/taxation/form-c-and-cp204.ms.md | ms | Form C and CP204: Estimating and Paying Company Tax | Form C and CP204: Estimating and Paying Company Tax | `title==master(en)` |
| 224 | knowledge/taxation/freelancer-and-gig-tax.ms.md | ms | Tax for Freelancers, Gig Workers and Creators in Malaysia | Tax for Freelancers, Gig Workers and Creators in Malaysia | `title==master(en)` |
| 225 | knowledge/taxation/global-minimum-tax-pillar-two.ms.md | ms | Global Minimum Tax in Malaysia: DTT and MTT | Global Minimum Tax in Malaysia: DTT and MTT | `title==master(en)` |
| 226 | knowledge/taxation/imported-taxable-services.ms.md | ms | Imported Taxable Services and the SST-02A Declaration | Imported Taxable Services and the SST-02A Declaration | `title==master(en)` |
| 227 | knowledge/taxation/individual-tax-residence.ms.md | ms | Tax Residence for Individuals: the Four Tests in s.7(1) | Tax Residence for Individuals: the Four Tests in s.7(1) | `title==master(en)` |
| 228 | knowledge/taxation/industrial-building-allowance.ms.md | ms | Industrial Building Allowance: What Actually Qualifies | Industrial Building Allowance: What Actually Qualifies | `title==master(en)` |
| 229 | knowledge/taxation/joint-or-separate-assessment.ms.md | ms | Joint or Separate Assessment: Where the Break-Even Sits | Joint or Separate Assessment: Where the Break-Even Sits | `title==master(en)` |
| 230 | knowledge/taxation/llp-taxation.ms.md | ms | How a Limited Liability Partnership is Taxed in Malaysia | How a Limited Liability Partnership is Taxed in Malaysia | `title==master(en)` |
| 231 | knowledge/taxation/losses-and-group-relief.ms.md | ms | Losses, Group Relief and Unabsorbed Capital Allowances | Losses, Group Relief and Unabsorbed Capital Allowances | `title==master(en)` |
| 232 | knowledge/taxation/motor-vehicle-capital-allowance.ms.md | ms | Motor Vehicles and the Capital Allowance Restriction | Motor Vehicles and the Capital Allowance Restriction | `title==master(en)` |
| 233 | knowledge/taxation/myinvois-integration.ms.md | ms | MyInvois Integration: Portal, API or Middleware | MyInvois Integration: Portal, API or Middleware | `title==master(en)` |
| 234 | knowledge/taxation/myinvois-phases.ms.md | ms | MyInvois Implementation Phases, Thresholds and Relaxation Dates | MyInvois Implementation Phases, Thresholds and Relaxation Dates | `title==master(en)` |
| 235 | knowledge/taxation/non-deductible-expenses.ms.md | ms | Section 39: The Expenses You Can Never Deduct | Section 39: The Expenses You Can Never Deduct | `title==master(en)` |
| 236 | knowledge/taxation/pcb-monthly-tax-deduction.ms.md | ms | PCB and the Final-Tax Election: Why Not Filing Costs You | PCB and the Final-Tax Election: Why Not Filing Costs You | `title==master(en)` |
| 237 | knowledge/taxation/permanent-establishment.ms.md | ms | Permanent Establishment in Malaysia — Treaty Test and Domestic Test | Permanent Establishment in Malaysia — Treaty Test and Domestic Test | `title==master(en)` |
| 238 | knowledge/taxation/personal-tax-rates.ms.md | ms | Malaysia Personal Income Tax Rates — YA2023 to YA2026 | Malaysia Personal Income Tax Rates — YA2023 to YA2026 | `title==master(en)` |
| 239 | knowledge/taxation/personal-tax-reliefs.ms.md | ms | Malaysia Personal Tax Reliefs Checklist | Malaysia Personal Tax Reliefs Checklist | `title==master(en)` |
| 240 | knowledge/taxation/reinvestment-allowance.ms.md | ms | Reinvestment Allowance — Qualifying Projects and Why Claims Fail | Reinvestment Allowance — Qualifying Projects and Why Claims Fail | `title==master(en)` |
| 241 | knowledge/taxation/rental-income-tax.ms.md | ms | Tax on Rental Income: the Pre-Letting Expense Line | Tax on Rental Income: the Pre-Letting Expense Line | `title==master(en)` |
| 242 | knowledge/taxation/rpgt-exemptions.ms.md | ms | RPGT Exemptions and the CKHT Forms | RPGT Exemptions and the CKHT Forms | `title==master(en)` |
| 243 | knowledge/taxation/rpgt-rates.ms.md | ms | RPGT Rates and How to Compute the Gain | RPGT Rates and How to Compute the Gain | `title==master(en)` |
| 244 | knowledge/taxation/sales-tax-explained.ms.md | ms | Sales Tax in Malaysia — Rates, Mechanics and Exemptions | Sales Tax in Malaysia — Rates, Mechanics and Exemptions | `title==master(en)` |
| 245 | knowledge/taxation/self-billed-e-invoice.ms.md | ms | Self-Billed e-Invoices: When the Buyer Has to Issue | Self-Billed e-Invoices: When the Buyer Has to Issue | `title==master(en)` |
| 246 | knowledge/taxation/special-zones-and-hubs.ms.md | ms | Special Zones and Hub Incentives Compared on Tax | Special Zones and Hub Incentives Compared on Tax | `title==master(en)` |
| 247 | knowledge/taxation/sst-02-filing.ms.md | ms | Filing SST-02 — Taxable Periods, Deadlines and Penalties | Filing SST-02 — Taxable Periods, Deadlines and Penalties | `title==master(en)` |
| 248 | knowledge/taxation/sst-b2b-exemption.ms.md | ms | The SST B2B Exemption and What Your Invoice Must Show | The SST B2B Exemption and What Your Invoice Must Show | `title==master(en)` |
| 249 | knowledge/taxation/sst-explained.ms.md | ms | SST in Malaysia: Which Tax Are You Actually Dealing With? | SST in Malaysia: Which Tax Are You Actually Dealing With? | `title==master(en)` |
| 250 | knowledge/taxation/sst-rate-table.ms.md | ms | Service Tax Groups A to M — Rate and Threshold Reference | Service Tax Groups A to M — Rate and Threshold Reference | `title==master(en)` |
| 251 | knowledge/taxation/sst-registration.ms.md | ms | SST Registration Thresholds by Service Group | SST Registration Thresholds by Service Group | `title==master(en)` |
| 252 | knowledge/taxation/stamp-duty-employment-contracts.ms.md | ms | Stamp Duty on Employment Contracts in Malaysia | Stamp Duty on Employment Contracts in Malaysia | `title==master(en)` |
| 253 | knowledge/taxation/stamp-duty-rates.ms.md | ms | Malaysia Stamp Duty Rates — First Schedule Reference | Malaysia Stamp Duty Rates — First Schedule Reference | `title==master(en)` |
| 254 | knowledge/taxation/stamp-duty-self-assessment.ms.md | ms | Stamp Duty Self-Assessment (STSDS) in Malaysia | Stamp Duty Self-Assessment (STSDS) in Malaysia | `title==master(en)` |
| 255 | knowledge/taxation/stamp-duty-share-transfer.ms.md | ms | Stamp Duty on Share Transfers and the Form of Transfer of Securities | Stamp Duty on Share Transfers and the Form of Transfer of Securities | `title==master(en)` |
| 256 | knowledge/taxation/tax-appeal.ms.md | ms | Appealing an LHDN Tax Assessment | Appealing an LHDN Tax Assessment | `title==master(en)` |
| 257 | knowledge/taxation/tax-audit.ms.md | ms | Surviving an LHDN Tax Audit | Surviving an LHDN Tax Audit | `title==master(en)` |
| 258 | knowledge/taxation/tax-clearance.ms.md | ms | Tax Clearance: CP21, CP22A and the 90-Day Rule | Tax Clearance: CP21, CP22A and the 90-Day Rule | `title==master(en)` |
| 259 | knowledge/taxation/tax-incentives-directory.ms.md | ms | Malaysian Tax Incentives Directory — Agency, Mechanism, Instrument, Status | Malaysian Tax Incentives Directory — Agency, Mechanism, Instrument, Status | `title==master(en)` |
| 260 | knowledge/taxation/tax-penalties.ms.md | ms | Malaysian Tax Penalties and Offences Reference | Malaysian Tax Penalties and Offences Reference | `title==master(en)` |
| 261 | knowledge/taxation/which-tax-form.ms.md | ms | Which LHDN Form Do You File? BE, B, BT, M, P and E | Which LHDN Form Do You File? BE, B, BT, M, P and E | `title==master(en)` |
| 262 | knowledge/taxation/withholding-tax-digital-services.ms.md | ms | Withholding Tax on Cloud, SaaS, Ad Spend and Marketplace Fees | Withholding Tax on Cloud, SaaS, Ad Spend and Marketplace Fees | `title==master(en)` |
| 263 | knowledge/taxation/withholding-tax-non-compliance.ms.md | ms | What It Costs to Miss a Withholding Tax Deduction | What It Costs to Miss a Withholding Tax Deduction | `title==master(en)` |
| 264 | knowledge/taxation/withholding-tax-rates.ms.md | ms | Withholding Tax Rates in Malaysia by Payment Type | Withholding Tax Rates in Malaysia by Payment Type | `title==master(en)` |
| 265 | knowledge/taxation/withholding-tax-special-classes.ms.md | ms | Section 109B — Withholding Tax on Special Classes of Income | Section 109B — Withholding Tax on Special Classes of Income | `title==master(en)` |
| 266 | knowledge/transport/cycling-and-walkability.ms.md | ms | Why Walking and Cycling in Malaysian Cities Is Still an Uphill Climb | Why Walking and Cycling in Malaysian Cities Is Still an Uphill Climb | `title==master(en)` |

## Likely proper nouns (flagged by signal 2 but excluded from defect counts)

Titles identical across languages because the title **is** a proper noun / term of art (person, state, statute, glossary headword). These are probably correct as-is; spot-check a few. Note: the `.zh.md` entries here also satisfy signal 1 (zh-no-CJK) — same files, two signals.

| path | lang | title | master lang | master title |
|---|---|---|---|---|
| knowledge/business/copyright-malaysia.ms.md | ms | Copyright in Malaysia | en | Copyright in Malaysia |
| knowledge/economy/gdp-overview.ms.md | ms | Malaysia GDP Overview | en | Malaysia GDP Overview |
| knowledge/glossary/akta.en.md | en | Akta | ms | Akta |
| knowledge/glossary/akta.zh.md | zh | Akta | ms | Akta |
| knowledge/glossary/annual-return.ms.md | ms | Annual Return | en | Annual Return |
| knowledge/glossary/e-invoice.ms.md | ms | e-Invoice | en | e-Invoice |
| knowledge/glossary/epf.en.md | en | EPF | ms | EPF |
| knowledge/glossary/epf.zh.md | zh | EPF | ms | EPF |
| knowledge/glossary/kampung.en.md | en | Kampung | ms | Kampung |
| knowledge/glossary/kampung.zh.md | zh | Kampung | ms | Kampung |
| knowledge/glossary/mykad.en.md | en | MyKad | ms | MyKad |
| knowledge/glossary/mykad.zh.md | zh | MyKad | ms | MyKad |
| knowledge/glossary/paid-up-capital.ms.md | ms | Paid-up Capital | en | Paid-up Capital |
| knowledge/glossary/sdn-bhd.en.md | en | Sdn Bhd | ms | Sdn Bhd |
| knowledge/glossary/sdn-bhd.zh.md | zh | Sdn Bhd | ms | Sdn Bhd |
| knowledge/glossary/sst.ms.md | ms | SST | en | SST |
| knowledge/glossary/sst.zh.md | zh | SST | en | SST |
| knowledge/glossary/wilayah-persekutuan.en.md | en | Wilayah Persekutuan | ms | Wilayah Persekutuan |
| knowledge/government/parliament.ms.md | ms | Parliament of Malaysia | en | Parliament of Malaysia |
| knowledge/malaysia/anwar-ibrahim.ms.md | ms | Anwar Ibrahim | en | Anwar Ibrahim |
| knowledge/malaysia/ismail-sabri-yaakob.ms.md | ms | Ismail Sabri Yaakob | en | Ismail Sabri Yaakob |
| knowledge/malaysia/mahathir-mohamad.ms.md | ms | Mahathir Mohamad | en | Mahathir Mohamad |
| knowledge/malaysia/muhyiddin-yassin.ms.md | ms | Muhyiddin Yassin | en | Muhyiddin Yassin |
| knowledge/malaysia/najib-razak.ms.md | ms | Najib Razak | en | Najib Razak |
| knowledge/states/johor.en.md | en | Johor | ms | Johor |
| knowledge/states/kuala-lumpur.en.md | en | Kuala Lumpur | ms | Kuala Lumpur |
| knowledge/states/penang.en.md | en | Penang | ms | Penang |
| knowledge/states/sarawak.ms.md | ms | Sarawak | en | Sarawak |
| knowledge/states/sarawak.zh.md | zh | Sarawak | en | Sarawak |
| knowledge/states/selangor.en.md | en | Selangor | ms | Selangor |

