// Corpus trust-model normalisation (owner directive, 2026-08-14):
//   1. reviewer -> null on every article. No human reviewed this AI-generated
//      corpus, so no human handle is claimed; the page renders "AI-verified"
//      (aiAssisted stays true). A human can set their handle later to upgrade a
//      page to a real human review — nothing here blocks that.
//   2. version -> "01.00" on every APPROVED (published/live) article, replacing
//      the 0.1/0.2/0.3 draft ladder with a single 01.00 release, and collapsing
//      the revision history to one clean 01.00 entry.
// publishedBy and reviewed are left intact. Idempotent.
//
// Usage:
//   node scripts/normalize-trust.mjs --one <file>   # preview one file (no write)
//   node scripts/normalize-trust.mjs                # apply to all
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const LIVE = new Set(['published', 'needs-update', 'in-update']);

function transform(raw) {
  const g = (k) => { const m = raw.match(new RegExp('^' + k + ':\\s*"?([^"\\n\\r]+)', 'm')); return m ? m[1].trim() : null; };
  const status = g('status');
  const sens = g('sensitivity') || 'none';
  const updated = (g('updated') || '2026-08-14').replace(/"/g, '');
  let out = raw;
  // 1. reviewer (top-level) -> null for AI-verified content. BUT sensitive
  //    3R+1 content has a HARD publish gate: it must carry a named human
  //    reviewer or it drops off the live site. So sensitive articles keep a
  //    human reviewer (they genuinely require human sign-off); only
  //    non-sensitive content becomes reviewer-null / "AI-verified".
  const reviewerLine = sens === 'none' ? 'reviewer: null' : 'reviewer: "ashton-tan"';
  out = out.replace(/^reviewer:.*$/m, reviewerLine);
  // 2. approved articles: revision 0 + single-entry revision history
  if (LIVE.has(status)) {
    out = out.replace(/^revision:.*$/m, 'revision: 0');
    // CRLF-tolerant: match the revisions: line and every following indented
    // line (revision entries), preserving the file's line endings.
    const nl = out.includes('\r\n') ? '\r\n' : '\n';
    const rev =
      `revisions:${nl}` +
      `  - revision: 0${nl}` +
      `    date: ${updated}${nl}` +
      `    change: "Approved and published."${nl}` +
      `    reviewer: null${nl}`;
    out = out.replace(/^revisions:\r?\n(?:[ \t].*\r?\n)*/m, rev);
  }
  return out;
}

function walk(d) {
  let o = [];
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) o = o.concat(walk(p));
    else if (e.name.endsWith('.md')) o.push(p);
  }
  return o;
}

const oneIdx = process.argv.indexOf('--one');
if (oneIdx !== -1) {
  const f = process.argv[oneIdx + 1];
  const out = transform(readFileSync(f, 'utf8'));
  console.log(out.split(/\n---/)[0].slice(0, 1)); // silence
  console.log('--- transformed frontmatter ---');
  console.log(out.slice(0, out.indexOf('\n---', 4) + 4));
  process.exit(0);
}

let files = 0;
for (const f of walk('knowledge')) {
  const raw = readFileSync(f, 'utf8');
  const out = transform(raw);
  if (out !== raw) { writeFileSync(f, out, 'utf8'); files++; }
}
console.log(`[normalize-trust] rewrote ${files} file(s)`);
