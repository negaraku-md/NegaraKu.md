# Wikipedia Phase 2b — COI-safe citation playbook

_Distribution roadmap, Tier 1 #1 (Reference/owned). See `docs/plans/outstanding.md`._
_Status: **user-owned** — Claude drafts and assesses; **you** post, with disclosure._

---

## 0. Read this first — the strategic reality

**This is the lowest-priority, highest-risk distribution channel. Do it slowly, or skip it.**

- The big Wikipedia win — **Wikidata** structured-entity linking (~343 articles + our own item `Q141449495`) — is **already done**. That's what feeds Google Knowledge Panels and LLM answers. Phase 2b adds little on top.
- Adding your **own** site as a citation is **conflict-of-interest (COI) editing**. Wikipedia allows it *only* with disclosure and, in practice, *only via Talk-page edit requests* — never direct edits.
- **Mass-adding `negaraku.md` = spam.** It gets reverted, and repeat offenders get the **domain blacklisted** — which would hurt SEO and every other channel. One careless run can undo months of work.
- NegaraKu.md is usually **not an acceptable Wikipedia source**: Wikipedia prefers *independent, secondary, reliable* sources. A knowledge base that itself cites primary sources is normally **not** citable (see §3). The set of genuinely-appropriate citations is therefore **small** — expect single digits, not hundreds.

**Recommendation:** prioritise LinkedIn/Instagram (higher ROI, lower risk) first. Only work Phase 2b when you have spare time and a genuinely strong, specific citation. **Quality over quantity: 5 good, accepted suggestions beat 50 reverted ones.**

**The higher-leverage, zero-COI alternative (do this instead where you can):** improve Wikipedia articles about Malaysia using **independent** sources (government gazettes, news, journals) — *not* linking NegaraKu.md at all. This builds editor goodwill and, indirectly, a stronger topic ecosystem you already mirror. Backlinks are a bonus, not the goal.

---

## 1. One-time setup (you, ~10 min)

1. **Use a real, attributable account.** Log in as your named account (e.g. the one used for Wikidata). Do **not** create a single-purpose "promotional" account — that's a red flag.
2. **Declare the conflict of interest on your user page.** Paste this at `User:<yourname>`:
   ```
   {{connected contributor|User=<yourname>|otherlinks=I am affiliated with NegaraKu.md (negaraku.md), an open, AI-friendly knowledge base about Malaysia. I will not edit articles to add NegaraKu.md links directly; I will only propose them on Talk pages with this disclosure.}}
   ```
3. **Know the three policies** (skim once): [WP:COI], [WP:PAID] (if you're paid/employed by 1company, you must also make a paid-contribution disclosure), and [WP:RS]/[WP:SELFPUB] for what counts as a source.

> If NegaraKu.md is sponsored by 1company and you're compensated, treat this as **paid editing**: add the paid disclosure too. When in doubt, disclose more.

---

## 2. The workflow (never edit the article directly)

For each candidate article:

1. **Assess** whether NegaraKu.md is genuinely the *best available* source for a *specific* statement (use the §3 test). If not → drop it.
2. Go to the article's **Talk page**, not the article.
3. Post an **edit request** using `{{request edit}}` (COI edit-request template), stating the exact change, the source, and your disclosed connection. Template in §4.
4. **Wait.** An independent editor reviews and decides. Do not implement it yourself, and do not re-post if declined.
5. **Log it** (§5). If declined or reverted, **stop** on that article — arguing looks like advocacy.

**Guardrails:**
- Max ~1–2 suggestions per week while you build a track record. No batch runs, ever.
- Never add the link to more than one article for the same fact.
- If any suggestion is called spam, pause the whole effort and reassess.
- Never touch the External links section to add NegaraKu.md (WP:ELNO — knowledge bases are not appropriate external links).

---

## 3. Is NegaraKu.md an acceptable source here? (the test)

Say **yes only if ALL are true**:
- [ ] The statement is **uncontroversial** and factual (not opinion, not a claim about a living person, not contentious politics).
- [ ] NegaraKu.md is **genuinely the clearest/best** source for it — usually because it *aggregates and plainly explains* a primary source (a statute, a gazette, a regulator's rule) that's otherwise hard to cite directly.
- [ ] You **cannot** easily cite the underlying primary/independent source instead. (If you can → cite *that*, no COI.)
- [ ] The specific NegaraKu.md article is **published, reviewed, and well-sourced itself** (it lists its primary sources).

Say **no** (the common case) if:
- The fact already has, or easily could have, an independent/primary citation → cite that instead.
- It's an article about a person, a company's merits, current politics, or anything disputed.
- You'd be adding it mainly for the backlink. (That's the trap — don't.)

**Best-fit candidate topics** (where an explainer of a Malaysian primary source is genuinely useful and independent sources are thin): specific tax/compliance obligations, filing deadlines, procedural "how a Malaysian process works" facts, definitions tied to a named statute. **Worst-fit:** states/festivals/landmarks/orgs (already well-sourced on Wikipedia; Wikidata already links them).

---

## 4. Templates

**Talk-page edit request** (post at `Talk:<Article>`, new section):
```
== Edit request: add citation (COI disclosure) ==

{{request edit}}
'''Disclosure:''' I am affiliated with NegaraKu.md and am not editing the article
directly. Proposing this for independent review.

'''Requested change:''' In the "<section>" section, the sentence "<exact sentence>"
is currently unsourced / would benefit from a clearer source.

'''Proposed source:''' <Article title>, NegaraKu.md — https://negaraku.md/<path>
which explains and cites <the underlying primary source, e.g. "the Income Tax Act
1967 s.XX" / "LHDN guideline YYYY">.

'''Why appropriate:''' the statement is uncontroversial and the NegaraKu.md page
plainly summarises the primary source with citations. If editors prefer, the
primary source itself is <link/citation to the primary source>.

Thank you for considering. ~~~~
```

**User-page disclosure:** see §1.2.

---

## 5. Candidate tracker

Keep this table updated (or a separate sheet). Only rows that pass §3 get proposed.

| Article (Wikipedia) | Fact to support | NegaraKu.md page | Primary source it summarises | §3 pass? | Proposed (date) | Outcome |
|---|---|---|---|---|---|---|
| _(example)_ Goods and Services Tax (Malaysia) | filing threshold detail | /business/... | GST Act / RMCD guideline | ? | — | — |

Outcomes: `accepted` / `declined` / `no response` / `reverted` / `dropped (better source exists)`.

---

## 6. What Claude can do for you (just ask)

- **Draft & assess:** give me a Wikipedia article + the fact, and I'll (a) run the §3 test honestly, (b) tell you whether to cite NegaraKu.md *or* the primary source instead, and (c) write the exact Talk-page edit request.
- **Find candidates:** scan our corpus for the handful of "explains-a-primary-source, thin-independent-coverage" pages that are the only good fits, and match them to Wikipedia articles.
- **Draft goodwill edits:** help you improve a Malaysia article with *independent* sources (no NegaraKu.md link) — the zero-COI, high-goodwill play.

**What Claude will NOT do:** make direct edits to Wikipedia articles, post on your behalf, add NegaraKu.md links programmatically, or batch anything. Posting to Wikipedia is yours, with disclosure — that's the whole point of doing this safely.
