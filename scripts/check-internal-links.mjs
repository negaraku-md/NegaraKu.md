#!/usr/bin/env node
/**
 * Broken internal-link guard.
 *
 * The reason this exists: hiding article B (status draft/archived, or `hidden:
 * true`) removes its page from the public site — but any PUBLIC article A that
 * still links to B now has a dead link the reader hits as "page not found".
 * Nothing else catches that. This script does.
 *
 * It scans every PUBLIC article's body links and `related` slugs and reports any
 * that point to an article which is NOT public (hidden / draft / archived /
 * sensitive-without-reviewer) or does not exist.
 *
 *   node scripts/check-internal-links.mjs            # report only, never fails (exit 0)
 *   node scripts/check-internal-links.mjs --enforce  # fail (exit 1) ONLY on links to hidden/non-public
 *                                                     articles — the hide hazard. Runs in prebuild.
 *   node scripts/check-internal-links.mjs --strict   # fail on ANY broken link (incl. not-yet-written)
 */
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const KNOWLEDGE = path.join(ROOT, 'knowledge');
const STRICT = process.argv.includes('--strict');
const ENFORCE = process.argv.includes('--enforce') || STRICT;
const LIVE = new Set(['published', 'needs-update', 'in-update']);

async function walk(d) {
  let out = [];
  for (const e of await readdir(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) out = out.concat(await walk(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const fmValue = (fm, k) => {
  const m = fm.match(new RegExp('^' + k + ':[ \\t]*"?([^"\\r\\n]*)"?', 'm'));
  return m ? m[1].trim() : '';
};

async function parse(file) {
  const raw = await readFile(file, 'utf8');
  const parts = raw.split(/^---\s*$/m);
  const fm = parts.length >= 3 ? parts[1] : '';
  const body = parts.length >= 3 ? parts.slice(2).join('---') : raw;
  return {
    file,
    body,
    fm,
    topicId: fmValue(fm, 'topicId') || file,
    category: fmValue(fm, 'category'),
    slug: fmValue(fm, 'slug'),
    status: fmValue(fm, 'status') || 'draft',
    sensitivity: fmValue(fm, 'sensitivity') || 'none',
    reviewer: fmValue(fm, 'reviewer'),
    hidden: /^hidden:\s*true\b/m.test(fm),
    lang: fmValue(fm, 'lang') || 'ms',
    masterLanguage: fmValue(fm, 'masterLanguage') || fmValue(fm, 'lang') || 'ms',
  };
}

// Mirror of src/lib/content.ts isPublishable (kept in sync deliberately — the
// build has no TS runtime here, so the rule is duplicated, not imported).
const isPublic = (p) =>
  !p.hidden && LIVE.has(p.status) && (!p.sensitivity || p.sensitivity === 'none' || !!p.reviewer);

const rel = (f) => path.relative(ROOT, f).replace(/\\/g, '/');
const stripLocale = (segs) => (segs[0] === 'en' || segs[0] === 'zh' ? segs.slice(1) : segs);

const files = await walk(KNOWLEDGE);
const parsed = await Promise.all(files.map(parse));

// Group into topics; the topic's MASTER decides public reachability (routes fall
// back to the master, so a live master means every locale route exists).
const topics = new Map();
for (const p of parsed) {
  const t = topics.get(p.topicId) || { files: [] };
  t.files.push(p);
  topics.set(p.topicId, t);
}
const masterOf = (t) => t.files.find((f) => f.lang === f.masterLanguage) || t.files[0];

const knownCats = new Set(parsed.map((p) => p.category).filter(Boolean));
const publicKeys = new Set(); // "category/slug" of publicly reachable topics
const allKeys = new Set(); // every "category/slug" (public or not)
const publicSlugs = new Set(); // slug -> reachable (for `related`)
const allSlugs = new Set();
for (const [, t] of topics) {
  const m = masterOf(t);
  if (!m.category || !m.slug) continue;
  const key = m.category + '/' + m.slug;
  allKeys.add(key);
  allSlugs.add(m.slug);
  if (isPublic(m)) {
    publicKeys.add(key);
    publicSlugs.add(m.slug);
  }
}

const broken = [];
for (const [, t] of topics) {
  const m = masterOf(t);
  if (!isPublic(m)) continue; // only PUBLIC articles can expose a broken link to readers

  // 1) body markdown links -> internal /[locale/]category/slug
  for (const mt of m.body.matchAll(/\]\(([^)\s]+)\)/g)) {
    let href = mt[1];
    if (!href.startsWith('/')) continue; // external / anchor / mailto
    href = href.split('#')[0].split('?')[0].replace(/\/+$/, '');
    if (!href) continue;
    const segs = stripLocale(href.split('/').filter(Boolean));
    if (segs.length !== 2) continue; // 1 = pillar/page, 3+ = topic page, etc.
    if (!knownCats.has(segs[0])) continue; // not a category -> some other page
    const key = segs[0] + '/' + segs[1];
    if (!publicKeys.has(key)) {
      broken.push({ source: rel(m.file), link: href, target: key, kind: allKeys.has(key) ? 'not-public' : 'missing' });
    }
  }

  // 2) related: [ "slug", ... ]
  const relM = m.fm.match(/^related:\s*\[([^\]]*)\]/m);
  if (relM) {
    for (const s of relM[1].matchAll(/["']([^"']+)["']/g)) {
      const slug = s[1];
      if (!publicSlugs.has(slug)) {
        broken.push({ source: rel(m.file), link: 'related: ' + slug, target: slug, kind: allSlugs.has(slug) ? 'not-public' : 'missing' });
      }
    }
  }
}

const notPublic = broken.filter((b) => b.kind === 'not-public');
const missing = broken.filter((b) => b.kind === 'missing');
console.log(`[check-internal-links] public articles scanned: ${[...topics.values()].filter((t) => isPublic(masterOf(t))).length}`);
console.log(`[check-internal-links] broken links: ${broken.length}  (to hidden/non-public: ${notPublic.length} · to missing: ${missing.length})`);
for (const b of broken) {
  console.log(`  ✗ ${b.source}\n      -> ${b.link}  [${b.kind}]`);
}
if (broken.length === 0) console.log('[check-internal-links] ✓ no broken internal links.');

// A PUBLIC article linking to a HIDDEN/non-public article is the hazard this
// guard exists for — it always fails under --enforce (prebuild). Links to
// not-yet-written articles are pre-existing content debt — warn only, unless
// --strict.
if (missing.length && !STRICT) {
  console.log(
    `[check-internal-links] note: ${missing.length} link(s) point to not-yet-written articles ` +
      `(warning only — run with --strict to enforce these too).`,
  );
}
const failCount = STRICT ? broken.length : ENFORCE ? notPublic.length : 0;
if (failCount > 0) {
  console.error(
    `[check-internal-links] FAILED: ${notPublic.length} link(s) to hidden/non-public article(s)` +
      (STRICT ? ` + ${missing.length} to missing article(s)` : '') +
      `. Un-hide the target, or remove/repoint the link.`,
  );
  process.exit(1);
}
