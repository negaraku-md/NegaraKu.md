// lint-3r.mjs — flag 3R-sensitive content in a pull request so a human reviews it
// before it can be published. This is CI enforcement of the Content Policy's gate
// (CONTENT-POLICY.md §4): it does NOT judge whether content is acceptable — it
// catches content that touches Race, Religion, or Royalty (3R+1) and makes sure
// such an article is correctly classified (`sensitivity != none`) so it hits the
// named-reviewer firewall and never auto-publishes.
//
// Two checks per changed `knowledge/**/*.md` file:
//   1. CLASSIFICATION — if the text clearly touches a 3R+1 subject but the
//      frontmatter says `sensitivity: none` (or omits it), that's an under-tag:
//      the firewall would be bypassed. → flag.
//   2. FLASHPOINT — high-signal communal/royal/religious flashpoint terms always
//      flag for a human read, whatever the classification.
//
// Tuned for RECALL, not precision: false positives are expected and fine — the
// output is "a human should look," not "this is bad." A reviewer clears it.
//
// Usage:
//   node scripts/lint-3r.mjs <file...>            # scan given files
//   node scripts/lint-3r.mjs --base origin/main   # scan knowledge/ files changed vs base
//   node scripts/lint-3r.mjs --base origin/main --strict   # exit 1 if any UNDER-TAGGED file
//   node scripts/lint-3r.mjs --json               # machine-readable output (for CI)
//
// Default exit code is 0 (annotations only) so the project can adopt it as a
// non-blocking check first, then make it a required status check once tuned.

import { readFile } from 'node:fs/promises';
import { execSync } from 'node:child_process';
import matter from 'gray-matter';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; };
const STRICT = flag('--strict');
const JSON_OUT = flag('--json');
const BASE = opt('--base');
const SENSITIVE_3R = new Set(['race', 'religion', 'royalty', 'constitution']);

// ---- term dictionaries (word-boundary, case-insensitive) -------------------
// CLASSIFICATION nouns: presence + sensitivity:none => likely under-tagged.
const SUBJECT_TERMS = {
  royalty: [
    'yang di-pertuan agong', 'agong', 'tuanku', 'dymm', 'kebawah duli',
    'sultan', 'raja permaisuri', 'majlis raja-raja', 'conference of rulers',
    'royal highness', 'daulat', 'regent', 'crown prince', 'tengku mahkota',
  ],
  religion: [
    'islam', 'muslim', 'syariah', 'shariah', 'fatwa', 'jakim', 'mufti',
    'allah', 'quran', 'al-quran', 'murtad', 'apostas', 'kafir', 'dakwah',
    'non-muslim', 'christian', 'church', 'hindu', 'buddhis', 'sikh', 'kristang',
    'religious conversion', 'blasphem', 'halal certification',
  ],
  race: [
    'bumiputera', 'bumiputra', 'malay special position', 'ketuanan',
    'pendatang', 'new economic policy', 'racial', 'communal',
    'vernacular school', 'social contract', 'article 153', 'article 152',
    'may 13', 'may 1969', 'sensitive matters', 'chinese malaysian',
    'indian malaysian', 'orang asli',
  ],
};
// FLASHPOINT: always flag for a human read (high communal-tension signal).
const FLASHPOINT_TERMS = [
  'ketuanan melayu', 'pendatang', 'balik tongsan', 'kafir harbi', 'murtad',
  'may 13', '13 may', 'sri lankan tamil', 'kalimah allah', 'allah ban',
  'royal immunity', 'insult the king', 'insult islam', 'touch on 3r',
  'seditious', 'hasutan', 'menyentuh sensitiviti', 'perkauman',
];

// Leading word-boundary only (no trailing boundary) so a stem also matches its
// inflections — "islam" catches "Islamic", "muslim" catches "Muslims", "hindu"
// catches "Hinduism", "temple" catches "temples". Recall over precision: a human
// clears the flag. The leading `(?<![\p{L}])` still prevents matching inside a word
// (e.g. "race" won't fire on "grace"/"trace").
const reOf = (terms) =>
  new RegExp('(?<![\\p{L}])(' + terms.map((t) =>
    t.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+')
  ).join('|') + ')', 'giu');

const SUBJECT_RE = Object.fromEntries(Object.entries(SUBJECT_TERMS).map(([k, v]) => [k, reOf(v)]));
const FLASHPOINT_RE = reOf(FLASHPOINT_TERMS);

function hits(re, text) {
  const set = new Set();
  for (const m of text.matchAll(re)) set.add(m[1].toLowerCase().replace(/\s+/g, ' '));
  return [...set];
}

async function changedFiles() {
  if (!BASE) return [];
  try {
    const out = execSync(`git diff --name-only --diff-filter=d ${BASE}...HEAD -- knowledge`, { encoding: 'utf8' });
    return out.split('\n').map((s) => s.trim()).filter((f) => f.endsWith('.md'));
  } catch (e) {
    console.error(`[lint-3r] could not diff vs ${BASE}: ${e.message}`);
    return [];
  }
}

async function scan(file) {
  let raw;
  try { raw = await readFile(file, 'utf8'); } catch { return null; }
  let data = {}, body = raw;
  try { ({ data, content: body } = matter(raw)); } catch { /* scan raw on parse fail */ }
  const sensitivity = String(data.sensitivity ?? 'none');
  const haystack = `${data.title ?? ''}\n${data.summary ?? ''}\n${body}`;

  const subjects = {};
  for (const [subj, re] of Object.entries(SUBJECT_RE)) {
    const h = hits(re, haystack);
    if (h.length) subjects[subj] = h;
  }
  const flashpoints = hits(FLASHPOINT_RE, haystack);
  const touches3R = Object.keys(subjects).length > 0 || flashpoints.length > 0;
  if (!touches3R) return null;

  const gated = SENSITIVE_3R.has(sensitivity) || ['elections', 'security', 'legal-proceedings'].includes(sensitivity);
  const underTagged = !gated; // touches 3R but not classified into the firewall
  return { file, sensitivity, subjects, flashpoints, underTagged };
}

const files = args.filter((a) => a.endsWith('.md') && !a.startsWith('--'));
const targets = files.length ? files : await changedFiles();

const findings = [];
for (const f of targets) { const r = await scan(f); if (r) findings.push(r); }

const underTagged = findings.filter((f) => f.underTagged);

if (JSON_OUT) {
  console.log(JSON.stringify({ findings, underTagged: underTagged.map((f) => f.file) }, null, 2));
} else if (!findings.length) {
  console.log(`[lint-3r] scanned ${targets.length} file(s) — no 3R-sensitive content detected.`);
} else {
  console.log(`[lint-3r] ${findings.length} file(s) touch 3R+1 subjects (${underTagged.length} under-tagged):\n`);
  for (const f of findings) {
    const tag = f.underTagged ? `⚠ sensitivity: ${f.sensitivity} (UNDER-TAGGED — needs a 3R value)` : `✓ sensitivity: ${f.sensitivity} (gated)`;
    console.log(`  ${f.file}\n    ${tag}`);
    for (const [subj, terms] of Object.entries(f.subjects)) console.log(`    ${subj}: ${terms.slice(0, 8).join(', ')}`);
    if (f.flashpoints.length) console.log(`    flashpoint: ${f.flashpoints.join(', ')}`);
    console.log('');
  }
  console.log('These need a named-reviewer read before publish (CONTENT-POLICY.md §4).');
  if (underTagged.length) console.log(`Under-tagged files should set a 3R \`sensitivity\` value (race/religion/royalty/constitution) so they cannot auto-publish.`);
}

// Signal for CI: "needs-3R-review" if anything was flagged.
if (process.env.GITHUB_OUTPUT && findings.length) {
  const { appendFileSync } = await import('node:fs');
  appendFileSync(process.env.GITHUB_OUTPUT, `needs_review=true\nunder_tagged=${underTagged.length}\nflagged=${findings.length}\n`);
}

process.exit(STRICT && underTagged.length ? 1 : 0);
