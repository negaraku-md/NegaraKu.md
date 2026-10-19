# GSC 404 + Redirect-Error Action Plan

_Generated 2026-10-19 from Google Search Console (sc-domain:negaraku.md). Source lists + resolver in scratchpad; targets resolved against `public/api/articles.json`._

## TL;DR

GSC flagged **221 "Not found (404)"** + **3 "Redirect error"**. They are NOT all redirect candidates:

| Bucket | Count | Action |
|---|---:|---|
| Scanner / infra probes (`.env`, `wp-login.php`, `Dockerfile`, `terraform.tfstate`…) | ~60 | **Keep 404** — handled by robots.txt Disallow (done this session). A 404 already = not-indexed; redirecting them would invite more probes. |
| Redirect errors | 3 | **Already fixed** (clean 301→200 now) — just click *Validate Fix* in GSC. |
| `/ms/*` prefix (article exists at root) | 24+ | **One rule** `/ms/[...slug]` → `/[...slug]`. |
| `/*/.md` raw-markdown probes | 22 | Redirect to the HTML page, or (better) serve raw markdown. |
| Bare-slug legacy (missing category) | (see below) | Per-URL 301 (targets resolved below). |
| Nested relative-link 404s | 75 | **Content fix** — broken relative links in ~18 source articles (root cause `check-internal-links` misses). |
| Glossary `/glossary/topic/*` | 6 | Redirect to `/glossary/` (removed structure). |
| `/favicon.ico` | 1 | Add `public/favicon.ico` (only `favicon.svg` exists). |
| `/_a/e` beacon | 1 | Handled by robots Disallow `/_a/` (done). |

## Done this session (held for push)

- **`src/pages/robots.txt.ts`** — added a scanner-probe `Disallow` block to the `User-agent: *` group (Googlebot's group). Moves the ~60 probe 404s into the intentional *Blocked by robots.txt* state and off the crawl queue. Patterns match only non-existent paths (static build: no PHP/.env/secrets).

## 1. Redirect errors (3) — already fixed, Validate Fix in GSC

```
https://negaraku.md/malaysia/new-economic-policy      301 -> /malaysia/new-economic-policy/      -> 200 OK
https://negaraku.md/zh/malaysia/ma63                  301 -> /zh/malaysia/ma63/                  -> 200 OK
https://negaraku.md/zh/government/spr-election-commission 301 -> /…/ -> 200 OK
```
Stale (detected Sep 8–9, before a deploy repaired the trailing-slash chain). No code change.

## 2. Ready-to-paste `redirects` (astro.config.mjs)

One rule for the whole `/ms/*` class, plus per-URL 301s for the `.md` + bare-slug + glossary cases:

```js
  redirects: {
    // --- /ms/* : ms is served at root (no prefix); strip it ---
    '/ms/[...slug]': '/[...slug]',

    // --- raw-markdown probes: send to the HTML page ---
    '/business/register-business-sabah/.md': '/business/register-business-sabah/',
    '/companies/lembaga-tabung-haji/.md': '/companies/lembaga-tabung-haji/',
    '/company-secretary/financial-statements-lodgement/.md': '/company-secretary/financial-statements-lodgement/',
    '/education/malaysian-education-system/.md': '/education/malaysian-education-system/',
    '/employment/employees-provident-fund-act-1991/.md': '/employment/employees-provident-fund-act-1991/',
    '/employment/work-passes-malaysia/.md': '/employment/work-passes-malaysia/',
    '/en/employment/children-young-persons-employment-malaysia/.md': '/en/employment/children-young-persons-employment-malaysia/',
    '/food-lifestyle/pasar-malam-and-street-food/.md': '/food-lifestyle/pasar-malam-and-street-food/',
    '/healthcare/allied-health-and-medical-practitioner-registration/.md': '/healthcare/allied-health-and-medical-practitioner-registration/',
    '/healthcare/childhood-vaccination/.md': '/healthcare/childhood-vaccination/',
    '/id/property/indah-water-sewerage/.md': '/id/property/indah-water-sewerage/',
    '/ja/company-secretary/register-of-substantial-shareholders/.md': '/ja/company-secretary/register-of-substantial-shareholders/',
    '/ja/public-safety/civil-defence-force-apm/.md': '/ja/public-safety/civil-defence-force-apm/',
    '/ko/companies/epf-as-an-institution/.md': '/ko/companies/epf-as-an-institution/',
    '/ko/education/public-vs-private-universities/.md': '/ko/education/public-vs-private-universities/',
    '/property/indah-water-sewerage/.md': '/property/indah-water-sewerage/',
    '/ta/taxation/expatriate-and-non-resident-tax/.md': '/ta/taxation/expatriate-and-non-resident-tax/',
    '/th/government/ministry-of-economy-malaysia-plans/.md': '/th/government/ministry-of-economy-malaysia-plans/',
    '/vi/employment/hiring-foreign-workers-malaysia/.md': '/vi/employment/hiring-foreign-workers-malaysia/',
    '/vi/sports/sukma-games/.md': '/vi/sports/sukma-games/',
    '/zh/business/pdpa-registration-classes/.md': '/zh/business/pdpa-registration-classes/',
    '/zh/companies/malaysias-big-banks/.md': '/zh/companies/malaysias-big-banks/',

    // --- bare-slug / wrong-category legacy URLs ---
    '/debt-recovery-malaysia': '/business/debt-recovery-malaysia/',
    '/dikir-barat': '/arts-culture/dikir-barat/',
    '/en/malaysia-asean-membership': '/en/international/malaysia-asean-membership/',
    '/en/malaysia-foreign-policy': '/en/international/malaysia-foreign-policy/',
    '/joget-and-zapin': '/arts-culture/joget-and-zapin/',
    '/ngajat': '/arts-culture/ngajat/',
    '/online-safety-act-malaysia': '/business/online-safety-act-malaysia/',
    '/opening-bank-account': '/money-daily-life/opening-bank-account/',
    '/staying-safe-scams-and-emergencies': '/money-daily-life/staying-safe-scams-and-emergencies/',
    '/ta/dikir-barat': '/ta/arts-culture/dikir-barat/',
    '/ta/joget-and-zapin': '/ta/arts-culture/joget-and-zapin/',
    '/ta/mak-yong': '/ta/arts-culture/mak-yong/',
    '/ta/ngajat': '/ta/arts-culture/ngajat/',
    '/ta/wayang-kulit': '/ta/arts-culture/wayang-kulit/',
    '/th/business-licence-malaysia': '/th/business/business-licence-malaysia/',
    '/th/fnb-licence-malaysia': '/th/business/fnb-licence-malaysia/',
    '/th/premise-licence-malaysia': '/th/business/premise-licence-malaysia/',
    '/vi/joget-and-zapin': '/vi/arts-culture/joget-and-zapin/',
    '/vi/ngajat': '/vi/arts-culture/ngajat/',
    '/vi/staying-safe-scams-and-emergencies': '/vi/money-daily-life/staying-safe-scams-and-emergencies/',
    '/zh/duitnow-qr-payments': '/zh/money-daily-life/duitnow-qr-payments/',
    '/zh/online-safety-act-malaysia': '/zh/business/online-safety-act-malaysia/',
    '/ko/company-secretary/companies-act-2016': '/ko/law/companies-act-2016/',

    // --- /ms/* with WRONG category (the blanket rule above won't fix these) ---
    '/ms/penang': '/states/penang/',
    '/ms/arts-culture/christmas-malaysia': '/arts-culture/christmas-malaysia/',
    '/ms/arts-culture/tamil-in-malaysia': '/arts-culture/tamil-in-malaysia/',
    '/ms/business/doing-business-penang': '/business/doing-business-penang/',
    '/ms/business/economic-corridors-compared': '/business/economic-corridors-compared/',
    '/ms/business/government-grants-directory-malaysia': '/business/government-grants-directory-malaysia/',
    '/ms/business/infrastructure-connectivity-by-region': '/business/infrastructure-connectivity-by-region/',
    '/ms/business/register-business-sabah': '/business/register-business-sabah/',
    '/ms/business/sarawak-business-guide': '/business/sarawak-business-guide/',
    '/ms/business/signboard-licence-malaysia': '/business/signboard-licence-malaysia/',
    '/ms/company-secretary/companies-act-2016': '/law/companies-act-2016/',
    '/ms/company-secretary/directors-fees-approval': '/company-secretary/directors-fees-approval/',
    '/ms/company-secretary/disclosure-of-interest': '/company-secretary/disclosure-of-interest/',
    '/ms/employment/epf-employer-guide': '/employment/epf-employer-guide/',
    '/ms/finance/securities-commission-malaysia': '/finance/securities-commission-malaysia/',
    '/ms/glossary/annual-return': '/glossary/annual-return/',
    '/ms/government/imigresen': '/government/imigresen/',
    '/ms/law/companies-act-2016': '/law/companies-act-2016/',
    '/ms/law/constitutional-amendment': '/law/constitutional-amendment/',
    '/ms/law/macc-sprm': '/government/macc-sprm/',
    '/ms/malaysia/new-economic-policy': '/malaysia/new-economic-policy/',
    '/ms/states/johor': '/states/johor/',

    // --- removed glossary topic pages ---
    '/en/glossary/topic/polis': '/en/glossary/',
    '/glossary/topic/economy': '/glossary/',
    '/glossary/topic/polis': '/glossary/',
  },
```

> Note: the `/ms/[...slug]` rule supersedes the individual `/ms/...` correct-category entries; they're folded in. Only the WRONG-category `/ms/...` ones need explicit lines (listed).

## 3. Nested relative-link 404s (75) — CONTENT FIX (recommended over redirects)

These are **broken *relative* links in article bodies**: e.g. `real-property-gains-tax` links to `lhdn` as a relative slug, which resolves to `/…/real-property-gains-tax/lhdn` (404) instead of `/government/lhdn/`. `check-internal-links --strict` doesn't catch these (they're bare relative links in prose, not frontmatter refs). Fixing the ~18 **source** articles clears all 75 across locales and prevents recurrence. Each tail → its correct absolute target:

| Broken URL | Correct target | Resolution |
|---|---|---|
| `/accounting/llp-accounting-records/accounting-records-section-245` | `/accounting/accounting-records-section-245/` | rellink |
| `/accounting/llp-accounting-records/llp-vs-sdn-bhd` | `/business/llp-vs-sdn-bhd/` | rellink |
| `/business/mdec-digital-grants/government-grants-directory-malaysia` | `/business/government-grants-directory-malaysia/` | rellink |
| `/education/academic-calendar-and-school-holidays/public-holidays-in-malaysia` | `/education/academic-calendar-and-school-holidays/` | parent |
| `/en/arts-culture/dewan-bahasa-dan-pustaka/bahasa-melayu` | `/en/arts-culture/bahasa-melayu/` | rellink |
| `/en/audit/audit-oversight-board-pie-registration/appointing-an-auditor` | `/en/audit/appointing-an-auditor/` | rellink |
| `/en/audit/audit-oversight-board-pie-registration/audit-opinion-types` | `/en/audit/audit-opinion-types/` | rellink |
| `/en/business/mdec-digital-grants/mdec-digital-status` | `/en/business/mdec-digital-status/` | rellink |
| `/en/company-secretary/founder-share-vesting-malaysia/share-transfer` | `/en/company-secretary/share-transfer/` | rellink |
| `/en/company-secretary/founder-share-vesting-malaysia/shareholders-agreement-malay` | `/en/company-secretary/founder-share-vesting-malaysia/` | parent |
| `/en/education/academic-calendar-and-school-holidays/malaysian-school-system` | `/en/education/academic-calendar-and-school-holidays/` | parent |
| `/en/education/academic-calendar-and-school-holidays/public-holidays-in-malaysia` | `/en/education/academic-calendar-and-school-holidays/` | parent |
| `/en/law/real-property-gains-tax/lhdn` | `/en/government/lhdn/` | rellink |
| `/en/settling-in/immigration-overstay-and-blacklist/employment-pass` | `/en/settling-in/employment-pass/` | rellink |
| `/en/settling-in/registering-a-divorce-civil/getting-divorced-in-malaysia` | `/en/settling-in/getting-divorced-in-malaysia/` | rellink |
| `/en/settling-in/registering-a-divorce-civil/getting-married-in-malaysia` | `/en/settling-in/getting-married-in-malaysia/` | rellink |
| `/en/tourism/east-coast-islands-guide/fisheries-act-1985` | `/en/tourism/east-coast-islands-guide/` | parent |
| `/en/tourism/east-coast-islands-guide/northeast-monsoon` | `/en/tourism/east-coast-islands-guide/` | parent |
| `/id/accounting/llp-accounting-records/llp-vs-sdn-bhd` | `/id/business/llp-vs-sdn-bhd/` | rellink |
| `/international/malaysia-cptpp/anti-dumping-countervailing-duties` | `/business/anti-dumping-countervailing-duties/` | rellink |
| `/ja/audit/audit-oversight-board-pie-registration/audit-opinion-types` | `/ja/audit/audit-opinion-types/` | rellink |
| `/ja/education/academic-calendar-and-school-holidays/public-holidays-in-malaysia` | `/ja/education/academic-calendar-and-school-holidays/` | parent |
| `/ja/international/malaysia-cptpp/anti-dumping-countervailing-duties` | `/ja/business/anti-dumping-countervailing-duties/` | rellink |
| `/ja/international/malaysia-cptpp/bumiputera-equity-requirements` | `/ja/business/bumiputera-equity-requirements/` | rellink |
| `/ja/international/malaysia-cptpp/external-trade` | `/ja/economy/external-trade/` | rellink |
| `/ja/international/malaysia-cptpp/matrade` | `/ja/government/matrade/` | rellink |
| `/ja/international/malaysia-united-nations-membership/malaysia-asean-membership` | `/ja/international/malaysia-asean-membership/` | rellink |
| `/ja/international/malaysia-united-nations-membership/malaysia-foreign-policy` | `/ja/international/malaysia-foreign-policy/` | rellink |
| `/ja/tourism/east-coast-islands-guide/fisheries-act-1985` | `/ja/tourism/east-coast-islands-guide/` | parent |
| `/ja/tourism/east-coast-islands-guide/northeast-monsoon` | `/ja/tourism/east-coast-islands-guide/` | parent |
| `/ko/business/mdec-digital-grants/mdec-digital-status` | `/ko/business/mdec-digital-status/` | rellink |
| `/ko/industries/electrical-electronics-industry/mida` | `/ko/government/mida/` | rellink |
| `/ko/industries/electrical-electronics-industry/penang` | `/ko/states/penang/` | rellink |
| `/ko/industries/electrical-electronics-industry/semiconductor-industry` | `/ko/industries/electrical-electronics-industry/` | parent |
| `/ko/international/malaysia-cptpp/anti-dumping-countervailing-duties` | `/ko/business/anti-dumping-countervailing-duties/` | rellink |
| `/ko/international/malaysia-cptpp/external-trade` | `/ko/economy/external-trade/` | rellink |
| `/ko/international/malaysia-united-nations-membership/malaysia-asean-membership` | `/ko/international/malaysia-asean-membership/` | rellink |
| `/ko/international/malaysia-united-nations-membership/malaysia-foreign-policy` | `/ko/international/malaysia-foreign-policy/` | rellink |
| `/ko/settling-in/registering-a-divorce-civil/getting-divorced-in-malaysia` | `/ko/settling-in/getting-divorced-in-malaysia/` | rellink |
| `/ko/settling-in/registering-a-divorce-civil/getting-married-in-malaysia` | `/ko/settling-in/getting-married-in-malaysia/` | rellink |
| `/ko/taxation/cryptocurrency-and-digital-asset-tax/capital-gains-tax` | `/ko/taxation/capital-gains-tax/` | rellink |
| `/ko/taxation/cryptocurrency-and-digital-asset-tax/capital-or-revenue` | `/ko/taxation/capital-or-revenue/` | rellink |
| `/ko/tourism/east-coast-islands-guide/fisheries-act-1985` | `/ko/tourism/east-coast-islands-guide/` | parent |
| `/settling-in/getting-divorced-in-malaysia/registering-a-marriage-civil` | `/settling-in/registering-a-marriage-civil/` | rellink |
| `/ta/accounting/llp-accounting-records/accounting-records-section-245` | `/ta/accounting/accounting-records-section-245/` | rellink |
| `/ta/accounting/llp-accounting-records/llp-vs-sdn-bhd` | `/ta/business/llp-vs-sdn-bhd/` | rellink |
| `/ta/audit/auditor-independence-rotation-rules/appointing-an-auditor` | `/ta/audit/appointing-an-auditor/` | rellink |
| `/ta/audit/auditor-independence-rotation-rules/changing-auditors` | `/ta/audit/changing-auditors/` | rellink |
| `/ta/business/mdec-digital-grants/government-grants-directory-malaysia` | `/ta/business/government-grants-directory-malaysia/` | rellink |
| `/ta/business/mdec-digital-grants/mdec-digital-status` | `/ta/business/mdec-digital-status/` | rellink |
| `/ta/company-secretary/founder-share-vesting-malaysia/employee-stock-option-scheme` | `/ta/company-secretary/founder-share-vesting-malaysia/` | parent |
| `/ta/company-secretary/founder-share-vesting-malaysia/share-buy-back-treasury-shar` | `/ta/company-secretary/founder-share-vesting-malaysia/` | parent |
| `/ta/company-secretary/founder-share-vesting-malaysia/share-transfer` | `/ta/company-secretary/share-transfer/` | rellink |
| `/ta/company-secretary/founder-share-vesting-malaysia/shareholders-agreement-malay` | `/ta/company-secretary/founder-share-vesting-malaysia/` | parent |
| `/ta/settling-in/immigration-overstay-and-blacklist/employment-pass` | `/ta/settling-in/employment-pass/` | rellink |
| `/taxation/cryptocurrency-and-digital-asset-tax/capital-gains-tax` | `/taxation/capital-gains-tax/` | rellink |
| `/taxation/e-wht-electronic-withholding-tax/cp37-forms` | `/taxation/cp37-forms/` | rellink |
| `/taxation/e-wht-electronic-withholding-tax/withholding-tax-non-compliance` | `/taxation/withholding-tax-non-compliance/` | rellink |
| `/taxation/e-wht-electronic-withholding-tax/withholding-tax-rates` | `/taxation/withholding-tax-rates/` | rellink |
| `/th/accounting/functional-presentation-currency/accounting-standards-index` | `/th/accounting/accounting-standards-index/` | rellink |
| `/th/international/malaysia-united-nations-membership/malaysia-asean-membership` | `/th/international/malaysia-asean-membership/` | rellink |
| `/th/international/malaysia-united-nations-membership/malaysia-foreign-policy` | `/th/international/malaysia-foreign-policy/` | rellink |
| `/th/settling-in/registering-a-divorce-civil/getting-married-in-malaysia` | `/th/settling-in/getting-married-in-malaysia/` | rellink |
| `/tourism/east-coast-islands-guide/northeast-monsoon` | `/tourism/east-coast-islands-guide/` | parent |
| `/vi/education/academic-calendar-and-school-holidays/malaysian-school-system` | `/vi/education/academic-calendar-and-school-holidays/` | parent |
| `/vi/education/academic-calendar-and-school-holidays/public-holidays-in-malaysia` | `/vi/education/academic-calendar-and-school-holidays/` | parent |
| `/vi/public-safety/commercial-crime-investigation-department-ccid/polis-diraja-mal` | `/vi/public-safety/commercial-crime-investigation-department-ccid/` | parent |
| `/zh/company-secretary/founder-share-vesting-malaysia/share-transfer` | `/zh/company-secretary/share-transfer/` | rellink |
| `/zh/company-secretary/founder-share-vesting-malaysia/shareholders-agreement-malay` | `/zh/company-secretary/founder-share-vesting-malaysia/` | parent |
| `/zh/settling-in/immigration-overstay-and-blacklist/student-pass` | `/zh/settling-in/student-pass/` | rellink |
| `/zh/settling-in/registering-a-divorce-civil/getting-married-in-malaysia` | `/zh/settling-in/getting-married-in-malaysia/` | rellink |
| `/zh/taxation/e-wht-electronic-withholding-tax/cp37-forms` | `/zh/taxation/cp37-forms/` | rellink |
| `/zh/taxation/e-wht-electronic-withholding-tax/withholding-tax-non-compliance` | `/zh/taxation/withholding-tax-non-compliance/` | rellink |
| `/zh/taxation/e-wht-electronic-withholding-tax/withholding-tax-rates` | `/zh/taxation/withholding-tax-rates/` | rellink |
| `/zh/taxation/e-wht-electronic-withholding-tax/withholding-tax-special-classes` | `/zh/taxation/withholding-tax-special-classes/` | rellink |

_If you prefer the quick route, the same mappings work as 301 redirects (paste into the block above)._

## 4. Unresolved (4) — manual review

- `/id/semiconductor-industry`
- `/ms/semiconductor-industry`
- `/ko/company-secretary/company-secretary-duties-and-responsibilities`
- `/ms/environment/environmental-impact-assessment-eia`

## Appendix: scanner/infra probe list (keep 404 — robots-blocked)

```
/.anthropic/config.json
/.claude/settings.json
/.config/gcloud/credentials.db
/.env
/.env.anthropic
/.env.bak
/.env.local
/.env.mail
/.env.stage
/.env.test
/.esmtprc
/.git/config
/.git/config.bak
/.git/logs/HEAD
/.github/workflows/deploy.yml
/.gitlab-ci.yml
/.gitmodules
/.well-known/acme-challenge/EI_6GD2EXISGZ17NCX2MP7VPBCW0XY5A
/.well-known/mcp
/admin-panel/.env
/api/phpinfo.php
/app/.env
/appsettings.Staging.json
/assets/index/kuailian/image/favicon.ico
/ci/.env
/circleci/.env
/client/.env
/config.env
/config.json
/config/app/.env
/credentials.csv
/laravel/.env
/media/.env
/notifications/.env
/notify/.env
/old/.env
/old_phpinfo.php
/opt/.env
/plugins/payments/stripe.json
/preview/.env
/private/.env
/prod/.env
/public/.env
/public/phpinfo.php
/queue/.env
/secrets.json
/server/.env
/smtp/phpinfo.php
/src/.env
/theme/Bob-Theme-Argon/favicon.ico
/usr/local/.env
/wp-login.php
```
