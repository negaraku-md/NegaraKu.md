# Off-page discovery prep pack (2026-10-24)

**Purpose.** The in-repo fronts (content currency, on-page SEO, structured data) are caught up.
The highest-leverage discovery moves left are **off-page** — they lift the ranking of the *whole*
corpus at once, but each needs one manual step from you (a paste, a publish, an App-Review click).
This doc is the ready-to-execute copy + runbooks so that step is friction-free.

Three levers, in priority order:

1. **1company.com dofollow footer link** — the single best owned backlink available.
2. **LinkedIn Company Page go-live** — page is fully built; needs a launch post (today) + engine token.
3. **Instagram** — flagship account provisioned; needs refreshed bio + first posts + the publish gate.

All copy below is paste-ready. Character counts are noted where a platform limit bites.

---

## Lever 1 — 1company.com dofollow footer link  ✅ copy already finalized

Fully specified and **re-audited live today** in [`owned-backlinks.md`](owned-backlinks.md) §1.
Nothing new to draft. The one action is yours: add this **dofollow** (no `rel="nofollow"`) line to
the **1company.com** site-wide footer, via that site's own CMS (its codebase isn't in this repo):

> 1company proudly sponsors **[NegaraKu.md](https://negaraku.md)** — an open-source, AI-friendly
> knowledge base about Malaysia, in 13 languages.

HTML form:

```html
<p>1company proudly sponsors
  <a href="https://negaraku.md">NegaraKu.md</a> —
  an open-source, AI-friendly knowledge base about Malaysia, in 13 languages.
</p>
```

- It **reciprocates** the "Sponsored by 1company" line already on every NegaraKu.md page.
- A sitewide footer link = one strong, persistent authority signal across the sponsor's whole domain.
- **syarikat.ai is MOOT for now** — its apex still serves a bare Apache directory index, no footer to edit.

---

## Lever 2 — LinkedIn Company Page go-live

**Page:** [linkedin.com/company/negaraku-md](https://www.linkedin.com/company/negaraku-md) (org `146607540`).
Already set up: logo, 6:1 banner asset, About, specialties, location, EN/MS/ZH page localization.
It just needs **content flowing**. Two tracks — do (A) now by hand (zero dependencies), wire (C) when ready.

### 2A. Launch announcement — post by hand TODAY (pin it)

LinkedIn posts carry **clickable links**, so every post links straight to the site. Post this as the
first/pinned post. (LinkedIn is one English-led page; the MS/ZH variants below are for the native
language-rotation or as follow-ups.)

**English (primary — pin this):**

```
Introducing NegaraKu.md — an open-source, AI-friendly knowledge base about Malaysia.

Starting or running a company here means navigating SSM, LHDN, PERKESO, SST and a moving
target of deadlines. We put the answers in one place: curated, every claim cited to its
source, and free to read — for people and for AI alike.

→ Business & compliance: https://negaraku.md/en/business?utm_source=linkedin&utm_medium=social

Now live in 13 languages. Sponsored by 1company.

#Malaysia #DoingBusinessInMalaysia #SdnBhd #MalaysiaTax #Compliance #OpenData
```

**Bahasa Melayu:**

```
Memperkenalkan NegaraKu.md — pangkalan pengetahuan sumber terbuka dan mesra-AI tentang Malaysia.

Memulakan atau menguruskan syarikat di sini bermakna berdepan SSM, LHDN, PERKESO, SST dan
tarikh akhir yang sentiasa berubah. Kami himpunkan jawapannya di satu tempat: tersusun, setiap
fakta dipetik sumbernya, dan percuma untuk dibaca — untuk manusia dan AI.

→ Perniagaan & pematuhan: https://negaraku.md/business?utm_source=linkedin&utm_medium=social

Kini dalam 13 bahasa. Ditaja oleh 1company.

#Malaysia #PerniagaanMalaysia #SdnBhd #CukaiMalaysia #Pematuhan #DataTerbuka
```

**中文（简体）:**

```
隆重推出 NegaraKu.md —— 关于马来西亚的开源、AI 友好型知识库。

在马来西亚创业或经营公司，意味着要应对 SSM、LHDN、PERKESO、SST 以及不断变化的各种期限。
我们把答案汇集在一处：经过整理、每项陈述都注明来源、免费阅读 —— 既为人，也为 AI。

→ 商业与合规：https://negaraku.md/zh/business?utm_source=linkedin&utm_medium=social

现已支持 13 种语言。由 1company 赞助。

#马来西亚 #在马来西亚经商 #私人有限公司 #马来西亚税务 #合规 #开放数据
```

### 2B. Seed posts — 3 ready-to-post, business-pillar first (LinkedIn's B2B fit)

Post one every few days to build a feed before the auto-poster is wired. All URLs verified live 2026-10-24.

**Post 1 — Sdn Bhd vs LLP:**
```
Sdn Bhd or LLP? It's the first real decision when you formalize a business in Malaysia —
and it changes your tax, your compliance load and your liability. A plain-language,
side-by-side breakdown:

https://negaraku.md/en/business/llp-vs-sdn-bhd?utm_source=linkedin&utm_medium=social

#SdnBhd #LLP #DoingBusinessInMalaysia #Malaysia
```

**Post 2 — Foreign ownership:**
```
Can a foreigner own 100% of a Malaysian company? Usually yes — but the exceptions are where
people get caught. What's actually restricted, and what isn't:

https://negaraku.md/en/business/foreign-ownership-malaysia?utm_source=linkedin&utm_medium=social

#ForeignInvestment #Malaysia #DoingBusinessInMalaysia #FDI
```

**Post 3 — Compliance calendar:**
```
Every Malaysian employer owes EPF, SOCSO, EIS and more — each by a different deadline.
Our compliance calculator works out which obligations apply to you and when they fall due:

https://negaraku.md/en/compliance-calendar?utm_source=linkedin&utm_medium=social

#Compliance #Payroll #Malaysia #HR #LHDN
```

(Further ready-to-go article URLs: `/en/taxation/sst-rate-table`, `/en/employment/minimum-wage-malaysia`,
`/en/settling-in/moving-to-malaysia-first-steps`, `/en/business/company-secretary-malaysia`.)

### 2C. Banner upload (manual, 1 min)

Edit Page ▸ Page info ▸ Banner "Edit background" → pick the committed asset
`public/brand/NegaraKu.md.LinkedIn-Cover.png` (2256×382, ≈6:1). The banner field opens a **native OS
file picker** that automation can't drive — this is a you-step. (Logo is already set.)

### 2D. Auto-poster activation (when you want it hands-off)

The LinkedIn poster engine is **built and dry-run-verified** (posts en/ms/zh business-first article
cards, rotated into the one feed). Resume from exactly here:

1. LinkedIn developer app **"NegaraKu.md Poster"** (Client ID `86s3wnpy5m90dt`) → **Products →
   Community Management API** → clear the **"Verify your business email"** modal (needs your inbox;
   use `linkedin@negaraku.md` — the Cloudflare catch-all forwards to `ig.negaraku.md@gmail.com` — or
   `ashton.tan@gmail.com`).
2. **Auth tab → OAuth token tools → Create token** as org admin, scope **`w_organization_social`**.
3. Put the token in GitHub secret **`LINKEDIN_ACCESS_TOKEN`** (you add it; I never handle the value).
4. Uncomment the `schedule:` block in `.github/workflows/linkedin-backlog.yml`.

Token lasts ~60 days (refresh 365). Until then, 2A/2B by hand keep the page alive.

---

## Lever 3 — Instagram

**Flagship:** `@negaraku.md` (= ms/Bahasa Melayu, the default; others would be `@negaraku.md.en/.zh/.ta`).
IG Business account, provisioned and wired to the ms Facebook Page. IG captions have **no clickable
links** — everything routes through **link-in-bio**, and our OG cards are already share-ready images.

### 3A. Bio refresh (≤150 chars)

IG bios cap at **150 characters** and the URL lives in the separate **Website** field (set it to
`https://negaraku.md`), so the bio shouldn't spend characters on the link or on 13 language labels.
Replace the current (4-language) bio with this scalable version:

```
Open-source, AI-friendly knowledge base about Malaysia 🇲🇾
Curated & cited, in 13 languages. Free to read 📖 Tap the link ⤵️
```
*(≈120 chars / 122 code points incl. emoji — comfortably under 150. Website field → `https://negaraku.md`.)*

### 3B. First posts (captions; pair each with an image — see note)

**Post 1 — Launch / intro (carousel or logo card):**
```
Meet NegaraKu.md 🇲🇾 — an open, AI-friendly knowledge base about Malaysia.

Law, tax, business, government, daily life — curated, every fact cited to its source, free to
read, and now in 13 languages. Built for people and for AI.

🔗 Start reading: link in bio
.
.
#Malaysia #MalaysiaFacts #KnowThisMalaysia #OpenData #KnowledgeIsFree #CutiCutiMalaysia
#MalaysiaLife #FactsMatter
```

**Post 2 — Fact card (e.g. minimum wage):**
```
Malaysia's minimum wage is RM1,700/month (nationwide, since 2024) — and Budget 2027 has
announced a rise to RM2,000 from June 2027. Announced ≠ law yet: the figure is RM1,700 until
the order is gazetted. We track the difference so you don't guess.

🔗 Full breakdown: link in bio
.
.
#Malaysia #MinimumWage #GajiMinimum #Budget2027 #Belanjawan2027 #MalaysiaJobs #KnowYourRights
```

**Post 3 — "Did you know" (sourcing angle = our differentiator):**
```
Most "Malaysia guide" posts online are undated, uncited, and quietly out of date.
Every answer on NegaraKu.md carries its source and the date it was checked — so you can trust it,
or verify it yourself.

🔗 See how: link in bio
.
.
#Malaysia #FactCheck #OpenKnowledge #MalaysiaBusiness #SourcedNotGuessed
```

> **Images:** reuse the article OG cards (rendered PNGs the build already produces) or the brand
> hexagon-hibiscus mark (`public/brand/NegaraKu.md.Facebook-Profile-Picture.jpg`). A 1080×1080 fact
> card made from an article's key takeaway works best for reach. (If you want, I can add an IG-card
> generator to the build like the FB-cover/OG generators — say the word.)

### 3C. Hashtag bank (rotate 8–15 per post, mix broad + niche)

`#Malaysia #MalaysiaFacts #KnowThisMalaysia #CutiCutiMalaysia #MalaysiaLife #MalaysiaBusiness`
`#DoingBusinessInMalaysia #SdnBhd #MalaysiaTax #LHDN #Budget2027 #Belanjawan2027 #OpenData`
`#KnowledgeIsFree #FactCheck #MalaysiaInfo #KualaLumpur`

### 3D. Go-live runbook (the gated steps)

1. **Auto-publishing needs App Review:** `instagram_content_publish` Advanced Access on the
   "NegaraKu.md Poster" Meta app (per-app — one approval covers all language IG accounts). Same gate
   as FB comment-mode. **Until approved, post 3A/3B by hand** (fully fine for a launch).
2. **More languages:** create `@negaraku.md.en/.zh/.ta` (you create the accounts — I can't enter
   credentials; sign up each with `ig-<lang>@negaraku.md`, code lands in `ig.negaraku.md@gmail.com`),
   then I wire each in Business Suite + the IG branch of the poster engine (2-step Content Publishing
   API: create image container → publish).

---

## One-screen checklist

| # | Lever | Your step | Dependency | Status of copy/assets |
|---|---|---|---|---|
| 1 | 1company.com footer | paste dofollow line in 1company.com CMS | none | ✅ ready (`owned-backlinks.md` §1) |
| 2A | LinkedIn launch post | paste + pin (EN), post MS/ZH | none | ✅ ready (above) |
| 2B | LinkedIn seed posts | post 1 every few days | none | ✅ 3 ready + URLs |
| 2C | LinkedIn banner | upload PNG via native picker | none | ✅ asset committed |
| 2D | LinkedIn auto-poster | verify email → token → secret → uncomment cron | your inbox + GitHub secret | engine built, dry-run ✓ |
| 3A | IG bio | paste new bio + set Website field | none | ✅ ready (118 chars) |
| 3B | IG first posts | post 3 by hand (pair w/ image) | none | ✅ 3 ready |
| 3D | IG auto-poster | App Review `instagram_content_publish` | Meta App Review | engine not yet built (IG branch) |

**Lowest-friction, highest-return order for you:** (1) 1company footer line → (2A) LinkedIn launch
post → (3A) IG bio + (3B) first post. All four are paste-only, zero tokens/approvals, and together
they switch on reciprocal authority + two live social surfaces for the whole 13-language corpus.
