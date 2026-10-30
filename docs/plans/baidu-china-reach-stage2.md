# Stage 2 — mainland-China reach for the zh corpus (scoping)

_Created 2026-10-30. Goal: let the Chinese-speaking world — especially mainland China, where Google is blocked — discover Malaysia via our native 1,158-article **zh** corpus. This scopes what that actually takes; it is a strategic decision doc, not a build._

## Why Stage 1 (Baidu Ziyuan console) stalled
Baidu's Search Resource Platform gates **site registration** behind a "complete your account profile" (完善账户信息) form that requires an **11-digit mainland-China mobile number** + SMS code, plus QQ and WeChat. Our account is bound to a Malaysian (+60) number, so we can't pass the gate. This is the China-identity wall appearing before any site can even be added.

## The hard constraints (verified 2026-10-30)
1. **ICP 备案 requires an MIIT-approved TLD.** Alibaba Cloud's own docs: the domain suffix must have MIIT approval; **even `.org` is not approved**. `.md` (Moldova ccTLD) is almost certainly **not eligible** — so **negaraku.md cannot be ICP-filed**. (Verify via the MIIT approved-suffix list / Alibaba's "检测域名是否可备案" tool.)
2. **ICP also needs China-hosted servers + a China entity or citizen.** 1company (the sponsor) is Malaysian; no China entity is on record. A foreign entity generally cannot file directly.
3. **Overseas / Hong Kong hosting needs NO ICP.** Alibaba docs: "若域名仅解析至非中国内地的服务器，则不需要备案." This is the escape hatch — but it also means capped Baidu ranking (ICP sites are favoured).

Net: **ICP on the current domain is off the table.** Any ICP path needs a *different* (approved-TLD) domain **and** a China entity.

## The realistic paths

### Path A — Hong Kong–hosted zh mirror (infrastructure; no ICP; keeps .md)
Serve a mirror of the zh pages from a **Hong Kong** origin/CDN (e.g. `zh.negaraku.md` or a HK CDN PoP). HK is outside the GFW/ICP regime yet far better connected to the mainland than US-hosted GitHub Pages, so the content becomes **loadable in China and crawlable by Baiduspider** → *organic* Baidu indexing becomes possible.
- **Pros:** no ICP, no China entity, keeps our domain + canonical + full editorial control; reuses the existing corpus export for a sync pipeline.
- **Cons:** without ICP, Baidu ranking is capped and HK can still see occasional interference; we still can't open Baidu Ziyuan (account wall), so indexing stays organic-only (no sitemap submit / push API / crawl diagnostics); ongoing HK hosting cost + build a mirror-publish pipeline.
- **Effort/cost:** moderate engineering; modest ongoing hosting.

### Path B — 百家号 (Baijiahao) / platform syndication (audience; no hosting; native Baidu ranking)
Republish the zh articles (full, or lead + backlink) on **Baidu's own content platform 百家号** — which ranks natively in Baidu with zero hosting/ICP fight — and/or 知乎 / 今日头条 / 小红书 where Chinese audiences already are.
- **Pros:** immediate audience + native Baidu-ecosystem indexing; no infrastructure; CC-BY-SA permits reuse with attribution, so licensing is clean.
- **Cons:** **same China-identity wall** (百家号 registration wants a mainland phone / China ID / entity for full features); content lives on their platform (less control); needs a syndication workflow (could reuse the export + an API/manual poster).
- **Highest *audience* leverage if the account can be opened.**

### Path C — Separate ICP'd .com + China cloud (full mainland setup)
Register a China-eligible TLD (.com/.cn), obtain a **China business entity** (or partner/WFOE), ICP-file it, host the zh mirror on a China cloud (Alibaba/Tencent/Huawei).
- **Pros:** best possible Baidu ranking + full mainland reachability + unlocks Baidu Ziyuan (sitemap, push API, crawl diagnostics).
- **Cons:** requires a **China entity** + ICP (weeks, content review of a foreign-knowledge site) + new domain + China cloud. Highest cost, complexity, and legal burden.
- **Only justified if mainland China becomes a funded strategic priority.**

## The fork that decides everything
**Is a mainland-China business entity (or a trusted China partner) available to 1company?**
- **No (most likely):** ICP and full 百家号 are out. Best entity-free play is **Path A (HK mirror)** for organic crawlability, optionally plus a *manual* 百家号/知乎 presence if any China-ID contributor can run it. Weigh Path A's engineering + hosting against the capped, organic-only payoff.
- **Yes:** **Path C** becomes viable and is the real mainland unlock; Path B (百家号) then also opens fully and is the fastest-audience first move.

## Recommendation (commit)
1. **Don't pursue ICP on negaraku.md** — the .md TLD is ineligible; it's a dead end.
2. **Capture the free/entity-free reach we already have or can get cheaply:** PetalBot (done), the global zh corpus is already discoverable to *overseas* Chinese via Google/Bing + our AI-crawler allow-list + the HF/Kaggle mirrors. That already serves the diaspora.
3. **Treat deep mainland penetration as a funded Phase-2 initiative contingent on the China-entity decision.** If no entity: consider **Path A (HK mirror)** only if we judge mainland web-search traffic worth the standing infra. If an entity/partner appears: **Path C** (ICP'd .com + China cloud) + **Path B** (百家号) together.

Until the entity question is answered, there is no cheap, unilateral move left here that I can just build — the remaining paths each require a China entity, a China phone, or standing HK infrastructure. Parked pending that decision.
