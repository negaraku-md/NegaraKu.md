export const meta = {
  name: 'gap-generate',
  description: 'Research + write NEW non-sensitive gap articles (English master, status in-review)',
  phases: [{ title: 'Generate' }],
}

// args: { today, rows:[{category,slug,title,tier,master,topicId}] }
const A = typeof args === 'string' ? JSON.parse(args) : (args || {})
const ROWS = A.rows || []
const TODAY = A.today || '2026-08-10'

const SCHEMA = {
  type: 'object',
  properties: {
    category: { type: 'string' },
    slug: { type: 'string' },
    lang: { type: 'string' },
    markdown: { type: 'string' },
  },
  required: ['category', 'slug', 'lang', 'markdown'],
}

function prompt(r) {
  return `You are a meticulous Malaysian knowledge-base writer for NegaraKu.md. Write ONE new, original, fully-sourced English article about:

  TOPIC: "${r.title}"  (category: ${r.category})

This topic does not exist yet; it is frequently cross-referenced by other articles, so write it as the canonical reference.

RESEARCH FIRST. Use web search to gather facts from AUTHORITATIVE primary sources — the agency's own site (.gov.my), the statute text on AGC/lom.agc.gov.my, official portals (malaysia.gov.my), and reputable reporting only where official sources are thin. Cite EVERY checkable claim. Do NOT invent facts, figures, dates, statute sections, or URLs. If a fact cannot be verified, omit it or add it to verificationNeeded.

This is a NON-SENSITIVE topic — set sensitivity: "none". Keep the tone neutral and factual.

OUTPUT: return the COMPLETE Markdown file (YAML frontmatter with the leading and trailing '---', then the body). Use EXACTLY these frontmatter values where given, and fill the rest:

---
topicId: "${r.topicId}"
title: "${r.title}"
seoTitle: "<=60 chars, keyword-rich; include the acronym"
slug: "${r.slug}"
category: "${r.category}"
subcategory: ["<one short tag>"]
summary: "One-sentence description for cards and search."
tier: "${r.tier}"
mode: "practical"            # practical | narrative
contentType: "<agency | law | guide | faq>"
sensitivity: "none"
answer: "A direct 2-4 sentence lead answer."
keyTakeaways:
  - "3-6 specific, sourced bullets."
appliesTo: "Who this is for."
faq:
  - q: "A real question a reader asks."
    a: "A sourced answer."
lang: "en"
masterLanguage: "en"
translationStatus: "master"
status: "in-review"
aiAssisted: true
reviewer: null
version: "0.1"
revisions:
  - version: "0.1"
    date: ${TODAY}
    change: "Initial AI draft."
    reviewer: null
verificationNeeded:
  - "List any figure/date/section you could not confirm against a primary source."
updated: ${TODAY}
sources:
  - title: "Exact source title"
    url: "https://…"          # a REAL, working URL you actually used
    publisher: "Publisher"
entity: "<the primary agency/statute this page is about>"
relations:
  - { rel: "related-to", to: "<an existing slug you are confident about, else omit>" }
related: []                    # leave EMPTY unless certain a slug exists — do not invent slugs
keywords: ["<untranslated search terms, incl. the acronym>"]
---

BODY RULES: 400-900 words of clear Markdown. Open with the answer, then H2 sections (## …), use a table where it helps (rates, deadlines, structure), and end with a short "What's next" pointer. Keep statute section numbers, figures and dates exactly as sourced. Do NOT add related[] slugs you are unsure exist.

Return ONLY the Markdown file, nothing else.`
}

phase('Generate')
const results = await parallel(
  ROWS.map((r) => () =>
    agent(prompt(r), {
      label: `gen:${r.category}/${r.slug}`,
      phase: 'Generate',
      schema: SCHEMA,
      agentType: 'general-purpose',
    }).then((o) => (o ? { ...o } : null)),
  ),
)
return results.filter(Boolean)
