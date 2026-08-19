// Reusable Phase 2 master-article batch: draft -> verify -> correct.
// Invoke with args = { rows: [{category,slug,title,tier,master,sens,scope}], today: "YYYY-MM-DD" }
export const meta = {
  name: 'phase2-batch',
  description: 'Draft + verify + correct a batch of Phase 2 master articles (honest AI drafts)',
  phases: [
    { title: 'Draft', detail: 'research + write each master' },
    { title: 'Verify', detail: 'adversarial citation/fact check' },
    { title: 'Correct', detail: 're-verify flags, strip Wikipedia, remove unsourced figures' },
  ],
}

const A = typeof args === 'string' ? JSON.parse(args) : (args || {})
const ROWS = A.rows || []
const TODAY = A.today || '2026-07-28'
const LANG = { en: 'English', ms: 'Bahasa Melayu', zh: 'Chinese (Simplified)' }
const DEPTH = {
  '1': 'TIER 1 authoritative guide: 2000-4000 words, multiple official sources, rich FAQ, comparison tables, decision framework, common mistakes.',
  '2': 'TIER 2 standard guide: 1000-2000 words, 3-8 sources, FAQ, at least one table.',
  '3': 'TIER 3 direct answer/FAQ: 300-800 words, one core question answered from an official source.',
  '4': 'TIER 4 entity/data page: ~600-1000 words, structured fields + concise profile, at least one table.',
  'S': 'TIER S SENSITIVE (3R+1): DESCRIPTIVE and NEUTRAL ONLY. State facts and the range of positions without taking sides. Depth ~800-1500 words. This is an unpublished draft requiring human review.',
}

function draftPrompt(r) {
  const lang = LANG[r.master] || 'English'
  const scope = String(r.scope || '').replace(/\s*\|\s*$/, '').trim()
  return `You are writing ONE master article for NegaraKu.md, a trusted, AI-friendly knowledge base about Malaysia.
Category: ${r.category}. Master language: ${lang} (write the ENTIRE article - frontmatter summary/answer and body - in ${lang}). Tier: ${r.tier}. Sensitivity: ${r.sens}.

${DEPTH[r.tier] || DEPTH['4']}

NON-NEGOTIABLE RULES (the product's credibility depends on these):
1. Run WebSearch FIRST. Then WebFetch the most authoritative sources: official bodies (SSM, LHDN, RMCD, BNM, DOSM, Bursa Malaysia, the relevant Act, ministry/agency sites) and the entity's own site; reputable press (The Edge, Reuters, The Star, Bernama) only as secondary.
2. Wikipedia is NOT an acceptable citation - use it only as a lead, never in sources[].
3. Every hard figure (amount, %, date, section number) MUST come from a source you actually opened and cite. If you cannot verify it, OMIT it. A shorter fully-sourced article beats a padded one. Never invent a figure or URL.
4. This is an AI draft -> status: "draft", reviewer: null, aiAssisted: true. Do NOT claim human review.
${r.tier === 'S' ? '5. SENSITIVE topic: strictly neutral, descriptive; present facts and differing views factually; no advocacy, no editorialising.' : ''}

WRITING: Hook (not a definition) in the first line. Question-shaped ## H2s. Alternate prose/table/list. Real examples. End with a "## What's next" section (never "Conclusion"). Short paragraphs.

OUTPUT: the COMPLETE .md (YAML frontmatter + Markdown body), following this shape EXACTLY:
---
title: "<evergreen H1, no year>"
seoTitle: "<search title; no hardcoded year>"
slug: "${r.slug}"
category: "${r.category}"
subcategory: ["<one-word topic>"]
summary: "<1-2 sentences>"

tier: "${r.tier}"
mode: "<practical | narrative>"
contentType: "<best fit from: guide, faq, checklist, comparison, timeline, glossary, law, agency, place, company, industry, data, news>"
sensitivity: "${r.sens}"

answer: "<2-4 sentence executive answer>"
keyTakeaways:
  - "<verifiable point>"
appliesTo: "<who this is for>"

faq:
  - q: "<question>"
    a: "<verifiable answer>"

lang: "${r.master}"
masterLanguage: "${r.master}"
translationStatus: "master"

status: "draft"
aiAssisted: true
reviewer: null
revision: null
revisions:
  - revision: 0
    date: ${TODAY}
    change: "Initial AI draft."
    reviewer: null

updated: ${TODAY}
sources:
  - title: "<real source title>"
    url: "<real absolute https url you fetched>"
    publisher: "<publisher>"

entity: "<subject, if an entity/agency>"
relations:
  - { rel: "related-to", to: "<slug>" }
related: ["<related-slug>"]
keywords: ["<kw>"]
---

<body>

STRICT YAML: relations[].rel is one of administered-by, governs, requires, affects, part-of, located-in, supersedes, explained-in, compares-with, related-to. reviewer MUST be null. Quote any date inside sources like "2024-10-01". Do not put a Wikipedia URL in sources.

=== YOUR ARTICLE ===
slug: ${r.slug}
title: ${r.title}
scope: ${scope}

Produce the complete .md now.`
}

function verifyPrompt(r, draft) {
  return `You are an adversarial fact-checker for NegaraKu.md. Below is a drafted "${r.category}" article for "${r.title}" (tier ${r.tier}). Find problems, do not praise.
Check: (a) are cited URLs real, authoritative, and relevant - flag any invented, irrelevant, or Wikipedia sources; (b) any hard figure/date/section stated WITHOUT a matching cited source; (c) any claim that reads fabricated or implausible; (d) for a sensitive (tier S) topic, any non-neutral or advocacy phrasing. List concrete issues. Verdict 'ok' only if citations are real, no Wikipedia in sources, and no unsourced hard figures; 'reject' if citations look invented.

=== DRAFT (.md) ===
${draft.markdown}

=== SOURCES THE WRITER SAYS IT FETCHED ===
${(draft.sources_fetched || []).join('\n')}`
}

function fixPrompt(r, verified) {
  const issues = ((verified.verify && verified.verify.issues) || []).join('\n- ')
  const lang = LANG[r.master] || 'English'
  return `You are the CORRECTION editor for NegaraKu.md. You are given a drafted "${r.category}" article (.md, master language ${lang}) and a fact-checker's issue list. Produce a CORRECTED complete .md resolving EVERY issue. Still an AI draft for later human review.

RULES:
1. For any flagged WRONG figure/date: re-verify NOW via WebSearch + WebFetch against a primary/authoritative source and correct it; if unverifiable, DELETE the claim.
2. Wikipedia is NOT an acceptable citation: remove every Wikipedia entry from sources[] and any "Wikipedia says/cites" phrasing; replace with a fetched primary source or remove the claim.
3. Every remaining hard figure MUST have a matching fetched source in sources[]; otherwise remove or soften it.
4. Keep EXACT frontmatter format and: status "draft", reviewer null, aiAssisted true, tier "${r.tier}", sensitivity "${r.sens}", lang "${r.master}", masterLanguage "${r.master}", translationStatus "master". Keep the article in ${lang}.
5. Add frontmatter verificationNeeded: (YAML list) for anything a human should still confirm.
6. Append a revisions entry: { revision 1, date ${TODAY}, change "Correction pass: <one line>", reviewer: null } (revision is a 0-based index; leave the top-level `revision` slot unchanged until publish).
${r.tier === 'S' ? '7. Ensure strictly neutral, descriptive framing throughout.' : ''}

Return the corrected full .md, a short changelog, and any remaining_flags.

=== ARTICLE: ${r.title} ===

=== CURRENT DRAFT (.md) ===
${verified.markdown}

=== FACT-CHECKER ISSUES TO RESOLVE ===
- ${issues}

Produce the corrected complete .md now.`
}

const DRAFT_SCHEMA = { type: 'object', additionalProperties: false, properties: {
  slug: { type: 'string' }, markdown: { type: 'string' },
  sources_fetched: { type: 'array', items: { type: 'string' } },
  omitted: { type: 'array', items: { type: 'string' } },
}, required: ['slug', 'markdown', 'sources_fetched'] }

const VERIFY_SCHEMA = { type: 'object', additionalProperties: false, properties: {
  slug: { type: 'string' }, verdict: { type: 'string', enum: ['ok', 'minor-flags', 'reject'] },
  issues: { type: 'array', items: { type: 'string' } },
}, required: ['slug', 'verdict', 'issues'] }

const CORRECT_SCHEMA = { type: 'object', additionalProperties: false, properties: {
  slug: { type: 'string' }, markdown: { type: 'string' },
  changelog: { type: 'array', items: { type: 'string' } },
  remaining_flags: { type: 'array', items: { type: 'string' } },
}, required: ['slug', 'markdown', 'changelog'] }

const results = await pipeline(
  ROWS,
  (r) => agent(draftPrompt(r), { label: `draft:${r.slug}`, phase: 'Draft', schema: DRAFT_SCHEMA }),
  (draft, r) => {
    if (!draft) return null
    return agent(verifyPrompt(r, draft), { label: `verify:${r.slug}`, phase: 'Verify', schema: VERIFY_SCHEMA })
      .then((v) => ({ ...draft, verify: v }))
  },
  (verified, r) => {
    if (!verified) return null
    return agent(fixPrompt(r, verified), { label: `correct:${r.slug}`, phase: 'Correct', schema: CORRECT_SCHEMA })
      .then((c) => ({
        slug: r.slug, category: r.category, master: r.master, tier: r.tier, sens: r.sens,
        markdown: (c && c.markdown) || verified.markdown,
        changelog: (c && c.changelog) || [],
        remaining: (c && c.remaining_flags) || [],
        priorVerdict: verified.verify && verified.verify.verdict,
      }))
  },
)

return results.filter(Boolean)
