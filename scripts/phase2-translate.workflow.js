export const meta = {
  name: 'phase2-translate',
  description: 'Translate Phase 2 master articles into their two other languages (faithful, no re-research)',
  phases: [{ title: 'Translate' }],
}

// args: { rows: [{category, slug, master}], today }
const A = typeof args === 'string' ? JSON.parse(args) : (args || {})
const ROWS = A.rows || []

const LANG_NAME = { ms: 'Bahasa Malaysia (Malay)', en: 'English', zh: 'Simplified Chinese' }
const ALL = ['ms', 'en', 'zh']

const SCHEMA = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    category: { type: 'string' },
    lang: { type: 'string' },
    markdown: { type: 'string' },
  },
  required: ['slug', 'category', 'lang', 'markdown'],
}

function prompt(row, target) {
  return `You are a professional Malaysian translator. Translate an existing, already-fact-checked knowledge-base article into ${LANG_NAME[target]} for NegaraKu.md.

READ the master file at this exact path (relative to the repo root / current working directory):
  knowledge/${row.category}/${row.slug}.md

It is a Markdown file with YAML frontmatter. Produce a faithful ${LANG_NAME[target]} translation of it. This is TRANSLATION ONLY — do not re-research, do not add or drop facts, do not change any numbers, dates, statute sections, or citations.

FRONTMATTER RULES — reproduce the master's frontmatter, changing ONLY these:
- Set  lang: "${target}"
- TRANSLATE the human-readable VALUES of ONLY these fields into ${LANG_NAME[target]}: title, seoTitle, summary, answer, keyTakeaways (each item), appliesTo, and faq (each q and a). Keep them natural and fluent.
Keep EVERY OTHER field byte-for-byte identical to the master, including: topicId, slug, category, subcategory, tier, mode, contentType, sensitivity, masterLanguage, status, aiAssisted, reviewer, reviewed, reviewDue, version, revisions, updated, entity, relations, related, keywords, verificationNeeded, and the entire sources list (title, url, publisher, date all UNCHANGED — do NOT translate source titles or publishers).
Do NOT add a sourceContentHash field. Do NOT set translationStatus (leave the master's value; it is re-stamped later). Do NOT reorder fields.
${target === 'zh' ? 'Use Simplified Chinese. Keep Malaysian proper nouns/acronyms (SSM, LHDN, EPF, Sdn Bhd, Act names) recognizable, glossing in Chinese where natural.' : ''}
${target === 'ms' ? 'Use standard Bahasa Malaysia. Keep official Malaysian institution names and statute titles as commonly written.' : ''}

BODY RULES — translate all prose, headings and table cells into ${LANG_NAME[target]}. Keep Markdown structure identical (same headings, tables, lists, links). Keep URLs, statute section numbers (e.g. s.68, Perkara 3), figures and dates exactly as in the master.

OUTPUT: return the COMPLETE translated Markdown file — frontmatter (with the leading and trailing '---') followed by the translated body. Nothing else.`
}

const rows = []
for (const r of ROWS) {
  const targets = ALL.filter((l) => l !== r.master)
  for (const t of targets) rows.push({ ...r, target: t })
}

phase('Translate')
const results = await parallel(
  rows.map((r) => () =>
    agent(prompt(r, r.target), {
      label: `xlate:${r.slug}.${r.target}`,
      phase: 'Translate',
      schema: SCHEMA,
    }).then((o) => (o ? { ...o } : null)),
  ),
)

return results.filter(Boolean)
