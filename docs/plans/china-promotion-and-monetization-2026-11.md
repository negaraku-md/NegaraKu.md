# China promotion & monetization playbook (Nov 2026)

Status: **decided**. This folds the two pasted strategy documents (promotion +
monetization, 2026-11-14) into one committed plan, with the corrections we agreed
and the parts already shipped marked **DONE**. Supersedes the scattered notes in
`growth-strategy-synthesis-2026-11.md` (monetization summary), `baidu-china-reach-stage2.md`
and `seo-channels-roadmap.md` for this topic. Governing moat throughline is in
`growth-strategy-synthesis-2026-11.md` — nothing here may dilute "neutral + current
+ AI-citable + multilingual authority for UNDERSTANDING Malaysia".

The one sentence both plans turn on: **do not run a traffic business; run a trust
business.** The asset is *verifiable, sourced, AI-readable Malaysia knowledge* —
the thing a Chinese user reaches for when they think "是真的吗?".

---

## Part A — Promotion: be "查得到、信得过、用得上"

**Hard boundary (never cross):** no 攻略, no 推荐, no 排名. The moment we say
"最好吃的 X 是这家" we enter 小红书's battlefield and lose on volume/freshness.
Our line is always: *"我们不说哪家最好 — 我们告诉你这道菜/这个说法从哪来、谁在什么
背景下做出判断、来源和最后审阅日期在哪。"*

### Phase 1 (month 1–2): anchor the "fact-checker" persona
1. **知乎 = fact-checker, not 攻略 author.** Target high-search, high-myth topics
   (MM2H, 留学申请量, 华人占比, 免签政策). Post format: *"关于 X，中文互联网上流传最广
   的说法，我查了官方原文."* Every answer ends: *"以上每条事实均可在 NegaraKu.md 对应
   条目中找到来源和最后审阅日期."* Entrance = 知乎; destination = the site.
2. **小红书 = 反攻略.** Not "马来西亚必去" but "小红书上关于马来西亚的这 5 个说法，哪些
   是真的?". 小红书 makes curiosity; the site satisfies the fact-check. (e.g. the
   "华人都会说中文" myth → 22% / 西马城市 / 东马不同 → fact card on site.)
3. **SEO landing pages** for the ~10 pre-departure queries (签证/支付/安全…). First
   screen = 3–5 sourced points. Title: *"马来西亚[话题]：可查证的事实清单"*. These are
   the **catch pages** every 知乎/小红书 post funnels into. (Overlaps our existing
   China "想留下" fact cards — reuse, don't rebuild.)

### Phase 2 (month 3–4): penetrate the 留学 + 长期居留 segment
4. **Partner with neutral creators, not agents.** 留学避坑 / MM2H 真实体验 creators
   whose audience already distrusts 中介. Exchange = we provide a fast fact-check
   channel + citable entries; they mention "信息来源之一是一个开源知识库". No paid
   placement.
5. **Free "中国学生马来西亚留学事实手册" PDF** (~20pp) — not an application guide (that's
   中介's turf) but "最容易误解的 10 件事" (海外分校学位 / 公立 vs 私立 / 毕业留马路径).
   Each page footer = QR + link. Distributed "免费领取，无需私信" (the "no DM" itself is
   the trust signal — we don't harvest leads).

### Phase 3 (month 5–6): make "AI-friendly" the brand wedge
6. **Become the cited source for Chinese AI assistants.** Technical prep exists
   (llms.txt, raw Markdown per page). Promotion = structure entries the way AI
   likes to cite (事实速览 module, dated source tags, neutral tone) + demonstrate
   "你可以这样问 AI" posts showing an AI answer citing NegaraKu.md. Goal: shift from
   push to *being discovered*.

**Most urgent next step (this week):** on 知乎, find the top-voted but
factually-wrong/outdated answers under MM2H / 留学 / 华人, and post one line-by-line
fact-check each. We are promoting *the act of verifying*, not "the website".

### Promotion caveats (recorded, from our research)
- **小红书/知乎 suppress external links** — the mechanism is **brand recall**, not
  click-through. Measure by "did they come search us later", not referral clicks.
- **3R risk** (race/religion/royalty) content is sensitive on Chinese platforms —
  lead with neutral, sourced, reviewer-signed (ashton-tan) material; keep the
  spiciest topics on-site, not on 小红书.
- 小红书/微信 is a **separate channel** — ship on-site catch pages first.

---

## Part B — Monetization: charge commercial-scale consumption, keep humans free

**Root constraint = core asset:** value comes from *可信*, and 可信 depends on being
open, verifiable, and unwarped by commercial interest. A human paywall or display
ads would dilute the only moat we have vs 小红书 攻略 and 中介 软文.

So the logic is **not "charge people who read knowledge"** — it is **charge
commercial-scale consumption while staying free for human readers and
academic/media use.** Wikimedia 2026 is the clearest precedent: AI summaries cut
human pageviews, so WMF sells commercial data access via **Wikimedia Enterprise**
(≈ **$8.3M/yr, +148% YoY, ~4% of total revenue** — donations still dominate). Our
AI-friendly architecture is built for that day in advance.

### Layer 1 (0–6 mo): donations + transparent sponsorship — the floor
- A minimal donation page stating *"每月需要多少覆盖服务器和审阅成本"*; keep donations
  the dominant share (Wikipedia posture). **Transparency is the product** — publish
  where major spend goes; it *strengthens* 可信.
- Reality check (recorded): with a small audience, **donations are a trust signal,
  not real revenue**. Don't model a budget on them.

### Layer 2 (3–9 mo): AI access — the biggest structural opportunity
- Markdown-native + llms.txt + multilingual parity make us natively AI-consumable.
- **Correction we agreed:** CC BY-SA 4.0 *already* grants free commercial use incl.
  AI training (and our corpus is already a free Hugging Face dataset). So we **cannot
  sell "training rights"** — we sell a **serviced access channel**: a bulk structured
  feed, SLA, refresh guarantees, provenance/attribution tooling, support. Wikimedia
  Enterprise model: corpus free, high-volume commercial consumers pay for *service*.
- Tiering stated on-site:
  - **Free:** human readers, academics, journalists, non-profits, **AI citation /
    RAG grounding** (with attribution).
  - **Separate licence (contact):** bulk extraction + large-scale commercial AI
    *training*, and enterprise serviced access.
- Infrastructure already exists: **Microsoft Publisher Content Marketplace** (Feb
  2026), Amazon's AI-content market, Valyu pay-per-query Markdown API, and the
  **RSL** open standard (v1.0, Dec 2025, 1500+ publishers) to *declare* terms. We
  don't build billing — we declare via RSL and/or plug into a market.
- Strategic value ≠ short-term money: it reframes the site from "project needing
  funding" to "asset commercial buyers will pay for" — decisive for grants/partners.

### Layer 3 (6–18 mo): institutional services — the margin
High-margin, low-frequency, professional-only (never mass consumer):
- **Fact-check & background briefings** for China firms/media/research entering
  Malaysia.
- **"China-view" custom data packs** off our top-10 China-searched topics, for
  留学机构/企业 HR/跨境服务商 internal reference (no lead-gen resale).
- **Themed-tour institutional licensing** (educational/cultural paths) to schools /
  cultural bodies / tourism non-commercial projects, *if* 吃喝玩乐 导览 ships.
- Pricing can be modest but **must refuse content-warping deals** — no casinos, no
  politically-motivated commissions, no "ranking/recommendation". The boundary is
  the brand.
- Recorded caveat: Layer-3 briefings **overlap the 1company funnel** — treat as
  synergy, route deliberately, don't double-sell the same audience.

### Explicitly do NOT
- **No individual subscription paywall.** A country knowledge base has far lower
  pay-willingness than entertainment, and a paywall blocks AI crawl + search
  indexing — destroying the "被查到" core function.
- No display ads (see `negaraku-adsense-monetization`: ~$10–20/mo, cannibalizes the
  1company funnel, tanks page speed, 3R/brand risk).

### Monetization priority & status
1. **Write the commercial-use terms clearly — DONE + LIVE.**
   `LICENSING.md` (4-layer: content CC BY-SA 4.0 / code MIT / design CC BY 4.0 /
   brand ARR) + free-citation vs paid-bulk-training boundary + **RSL `/license.xml`**
   + robots `License:` pointer. Commits `6ffea6ab6`, `f42736bb4`, `432bbd37b` (live).
2. **Donation page + public monthly operating cost** — TODO.
3. **Research-integrate one AI-content market** (Microsoft PCM / Valyu / similar) —
   small technical pilot — TODO.

---

## One-line summary
Promotion = sell *verification*, not the website; donations floor it, AI access
grows it, institutional service is the margin — and **no layer may sacrifice
可查证/不偏倚**, which is the only reason any of it works.
