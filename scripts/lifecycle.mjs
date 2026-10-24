// lifecycle.mjs — hard-gated status transitions for the editorial lifecycle.
//
// Moves a topic (master + every translation that is in a matching state) one
// LEGAL step along the pipeline, stamping the governance fields and enforcing
// the four-eyes rule — instead of hand-editing `status:` across 13 files and
// risking an illegal jump or a self-approval. Mirrors publish-reviewed.mjs:
// dry-run by default, --apply to write, idempotent, cascades over all languages.
//
//   draft / in-update / in-redraft ──submit──▶ in-review ──sign-off──▶ reviewed
//   needs-update / request-redraft / request-archive / overdue-published
//                                   ──claim──▶ in-update / in-redraft / in-archive
//   (reviewed ──▶ published is publish-reviewed.mjs; ── archive is archive-article.mjs)
//
// Usage:
//   node scripts/lifecycle.mjs <action> <category/slug> --by <handle> [--reason "…"] [--apply]
//     action = claim | submit | sign-off
//     --by      the actor: claim ⇒ assignee, sign-off ⇒ reviewer (required for both).
//     --reason  optional note, recorded on the revision for submit/sign-off.
//     --apply   write (default: dry-run, print the plan only).
//
// HARD GATES (abort with a reason, never a silent skip of the whole topic):
//   • the transition must be legal from the file's current status.
//   • sign-off: --by must be listed in scripts/health/reviewers.txt, must NOT be
//     the assignee or the latest-revision contributor (four-eyes / separation of
//     duties), and a sensitive (3R+1) topic may only be signed off by a listed
//     reviewer — the same checks scan.py enforces, applied BEFORE the write.

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const KNOWLEDGE = path.join(ROOT, 'knowledge');
const REVIEWERS_FILE = path.join(ROOT, 'scripts', 'health', 'reviewers.txt');
// Includes `ms`: when a topic's master is en/zh/ta, its Malay edition is a
// translation at `slug.ms.md`, and a transition must flip it with the rest.
const LANGS = ['ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr'];
const today = () => new Date().toISOString().slice(0, 10);

// Per-action transition table: current status -> next status.
const TRANSITIONS = {
  claim: { 'needs-update': 'in-update', 'request-redraft': 'in-redraft', 'request-archive': 'in-archive' },
  submit: { draft: 'in-review', 'in-update': 'in-review', 'in-redraft': 'in-review' },
  'sign-off': { 'in-review': 'reviewed' },
};

const die = (m) => { console.error(`\n[lifecycle] ABORT: ${m}\n`); process.exit(1); };

// ---- args -----------------------------------------------------------------
const argv = process.argv.slice(2);
const apply = argv.includes('--apply');
const flag = (n) => { const i = argv.indexOf(n); return i >= 0 && i + 1 < argv.length ? argv[i + 1] : null; };
const action = argv[0];
const topic = argv.find((a, i) => i > 0 && !a.startsWith('--') && a.includes('/') && argv[i - 1] !== '--by' && argv[i - 1] !== '--reason');
const by = flag('--by');
const reason = flag('--reason');

if (!TRANSITIONS[action]) die(`unknown action "${action ?? ''}" — expected claim | submit | sign-off.`);
if (!topic) die('give the topic as <category/slug> (e.g. economy/inflation-cpi).');
if ((action === 'claim' || action === 'sign-off') && !by) die(`${action} requires --by <handle>.`);

const [cat, slug] = topic.split('/');
const masterAbs = path.join(KNOWLEDGE, cat, `${slug}.md`);
if (!existsSync(masterAbs)) die(`master not found: knowledge/${cat}/${slug}.md`);

// ---- frontmatter helpers (line edits; never reformat the block) -----------
const getField = (raw, key) => { const m = raw.match(new RegExp(`^${key}:[ \\t]*"?([^"\\n]*)"?[ \\t]*$`, 'm')); return m ? m[1].trim() : null; };
const setField = (raw, key, token) => {
  const re = new RegExp(`^${key}:.*$`, 'm');
  if (re.test(raw)) return raw.replace(re, `${key}: ${token}`);
  return raw.replace(/^status:.*$/m, (m) => `${m}\n${key}: ${token}`);
};
const qStr = (s) => `"${String(s).replace(/"/g, "'")}"`;
// Last `contributor:` inside the frontmatter block = latest-revision contributor.
const lastContributor = (fm) => { const all = [...fm.matchAll(/^\s*contributor:[ \t]*"?([^"\n]+)"?/gm)]; return all.length ? all.at(-1)[1].trim() : null; };
const fmBlock = (raw) => (raw.match(/^---\r?\n([\s\S]*?)\r?\n---/) ?? [null, ''])[1];

// ---- resolve the topic's files --------------------------------------------
const files = [`${cat}/${slug}.md`];
const dirFiles = await readdir(path.join(KNOWLEDGE, cat));
for (const l of LANGS) if (dirFiles.includes(`${slug}.${l}.md`)) files.push(`${cat}/${slug}.${l}.md`);

// ---- sign-off gates (checked once, against the master) --------------------
const masterRaw = readFileSync(masterAbs, 'utf8');
const masterFm = fmBlock(masterRaw);
if (action === 'sign-off') {
  const reviewers = new Set(
    readFileSync(REVIEWERS_FILE, 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#')),
  );
  if (!reviewers.has(by)) die(`"${by}" is not a listed reviewer in scripts/health/reviewers.txt — a sign-off must be a real, authorised reviewer.`);
  const workers = new Set([getField(masterRaw, 'assignee'), getField(masterRaw, 'author'), lastContributor(masterFm)].filter(Boolean));
  if (workers.has(by)) die(`four-eyes: "${by}" did the work on this topic (assignee / last contributor) — a sign-off needs an independent reviewer.`);
  const sensitivity = getField(masterRaw, 'sensitivity') ?? 'none';
  if (sensitivity !== 'none') console.log(`[lifecycle] note: "${topic}" is sensitive (${sensitivity}); reviewer "${by}" is authorised.`);
}

// ---- build the plan -------------------------------------------------------
const map = TRANSITIONS[action];
const plan = [];
let skipped = 0;
for (const rel of files) {
  const abs = path.join(KNOWLEDGE, rel);
  const raw = await readFile(abs, 'utf8');
  const from = getField(raw, 'status') ?? 'draft';
  let to = map[from];
  // `claim` also picks up a published article whose review has fallen due.
  if (!to && action === 'claim' && from === 'published') {
    const due = getField(raw, 'reviewDue');
    if (due && new Date(due) < new Date()) to = 'in-update';
  }
  if (!to) { skipped++; continue; }

  let next = setField(raw, 'status', qStr(to));
  if (action === 'claim') {
    next = setField(next, 'assignee', qStr(by));
    next = setField(next, 'claimedAt', qStr(today()));
  } else if (action === 'submit') {
    if (by) next = setField(next, 'assignee', qStr(by));
  } else if (action === 'sign-off') {
    next = setField(next, 'reviewer', qStr(by));
    next = setField(next, 'reviewed', qStr(today()));
  }
  plan.push({ rel, from, to, raw, next });
}

// ---- report ---------------------------------------------------------------
console.log(`\n[lifecycle] ${apply ? 'APPLY' : 'DRY-RUN'} — ${action} ${topic}${by ? ` by ${by}` : ''}`);
if (!plan.length) die(`nothing to ${action}: no file is in a state this action can advance (${skipped} skipped). Legal from-states: ${Object.keys(map).join(', ')}${action === 'claim' ? ', or overdue published' : ''}.`);
for (const p of plan) console.log(`  ${p.from.padEnd(15)} → ${p.to.padEnd(12)} ${p.rel}`);
if (skipped) console.log(`  (${skipped} file(s) left unchanged — not in a matching state)`);
if (reason && action !== 'claim') console.log(`  reason: ${reason}`);

if (!apply) { console.log(`\n[lifecycle] dry-run only. Re-run with --apply to write.\n`); process.exit(0); }

// ---- apply ----------------------------------------------------------------
for (const p of plan) await writeFile(path.join(KNOWLEDGE, p.rel), p.next);
console.log(`\n[lifecycle] done — ${plan.length} file(s) advanced to ${plan[0].to === plan.at(-1).to ? plan[0].to : 'their next state'}.`);
const nextStep = action === 'sign-off' ? 'node scripts/publish-reviewed.mjs --apply ' + topic + ' (when ready to go live)' : action === 'submit' ? 'a reviewer runs: node scripts/lifecycle.mjs sign-off ' + topic + ' --by <reviewer> --apply' : 'do the work, then: node scripts/lifecycle.mjs submit ' + topic + ' --apply';
console.log(`[lifecycle] next: ${nextStep}`);
console.log('[lifecycle] then: node scripts/validate-frontmatter.mjs ; commit (held for push).\n');
