#!/usr/bin/env node
/**
 * build-ub-bodies.mjs — Pass 2 of the Understand/Doing-Business image rollout.
 *
 * Pass 1 (build-ub-heroes.mjs) injected hero frontmatter only — freshness-neutral.
 * Pass 2 injects the staged body webps into each article's `images[]` block so they
 * render as in-article scene photos (ArticleView.astro `art-gallery`).
 *
 * UNLIKE heroes, images[] alt/caption/subject FEED the translation hash
 * (translation-sync.mjs `mediaSignal`), so every language file needs its own
 * in-language alt + subject, and `npm run translate:stamp` must run after.
 *
 * Inputs:
 *   public/media/_ub-rollout-meta.json  — image metadata (src/credit/license/source/kind/origin)
 *   scripts/data/ub-body-translations.json — per-article per-lang per-image {alt, subject}
 *       shape: { "cat/slug": { "ms": [{alt,subject}, ...], "en": [...], ... } }
 *       English seed text falls back to the meta's own alt/subject when a lang is absent.
 *
 * Idempotent: skips any file that already carries a top-level `images:` key.
 * Inserts the block just before the closing frontmatter `---`, preserving CRLF.
 */
import fs from 'node:fs';
import path from 'node:path';
import { glob } from 'node:fs/promises';
import yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const KNOWLEDGE = path.join(ROOT, 'knowledge');
const META = path.join(ROOT, 'public/media/_ub-rollout-meta.json');
const TRANS = path.join(ROOT, 'scripts/data/ub-body-translations.json');
const LANGS = ['ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr'];
const ONLY = process.argv.slice(2).filter((a) => !a.startsWith('-')); // optional cat/slug filter

const meta = JSON.parse(fs.readFileSync(META, 'utf8'));
const trans = fs.existsSync(TRANS) ? JSON.parse(fs.readFileSync(TRANS, 'utf8')) : {};

// Map a category/slug to its on-disk files: master (slug.md) + slug.<lang>.md
function filesFor(cat, slug) {
  const dir = path.join(KNOWLEDGE, cat);
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const f of fs.readdirSync(dir)) {
    const b = f.replace(/\.md$/, '');
    if (b === slug) out.push({ file: path.join(dir, f), lang: null }); // master — lang resolved below
    else {
      const m = b.match(new RegExp(`^${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\.(${LANGS.join('|')})$`));
      if (m) out.push({ file: path.join(dir, f), lang: m[1] });
    }
  }
  return out;
}

function masterLangOf(raw) {
  const m = raw.match(/^masterLanguage:\s*"?([a-z]{2})"?\s*$/m);
  return m ? m[1] : 'ms';
}
function langOf(raw) {
  const m = raw.match(/^lang:\s*"?([a-z]{2})"?\s*$/m);
  return m ? m[1] : null;
}

// Build the images: YAML text for one file, in `lang`, from meta body[] + translations.
function imagesBlock(key, lang, bodyMeta) {
  const perLang = (trans[key] && trans[key][lang]) || null;
  const arr = bodyMeta.map((b, i) => {
    const tr = perLang && perLang[i] ? perLang[i] : null;
    // English falls back to the meta's own (English-authored) alt/subject.
    const alt = (tr && tr.alt) || (lang === 'en' ? b.alt : null);
    const subject = (tr && tr.subject) || (lang === 'en' ? b.subject : null);
    if (!alt || !subject) return null; // missing translation — caller treats as incomplete
    return {
      role: 'scene',
      src: b.file,
      alt,
      kind: b.kind || 'actual',
      origin: b.origin || 'third-party',
      subject,
      credit: b.credit,
      license: b.license,
      sourceUrl: b.source,
    };
  });
  if (arr.some((x) => x === null)) return null; // incomplete for this lang
  // Single-quote style avoids the inner-double-quote astro-build trap; no line wrapping.
  return yaml.dump({ images: arr }, { lineWidth: -1, quotingType: "'", forceQuotes: false });
}

function insertBlock(raw, block) {
  const crlf = /\r\n/.test(raw);
  const nl = crlf ? '\r\n' : '\n';
  const b = crlf ? block.replace(/\n/g, '\r\n') : block;
  // Find closing frontmatter fence: the first line after the opening that is exactly ---.
  // Group 1 spans the opening fence + body + the newline before the closing fence, so
  // m[1].length is the exact byte offset of the closing ---. (Do NOT use indexOf('---'):
  // a literal '---' inside a frontmatter value — e.g. a URL like .../2022---menteri — would
  // match first and splice the block mid-scalar.)
  const re = /^(---\r?\n[\s\S]*?\r?\n)(---\r?\n)/;
  const m = raw.match(re);
  if (!m) return null;
  const closeIdx = m[1].length; // start of the closing --- fence
  // block ends with a newline from yaml.dump; ensure exactly one before the fence
  const before = raw.slice(0, closeIdx);
  const after = raw.slice(closeIdx);
  const trimmed = before.endsWith(nl) ? before : before + nl;
  return trimmed + b + after;
}

let injected = 0, skipped = 0, incomplete = [];
const keys = Object.keys(meta).filter((k) => (meta[k].body || []).length > 0 && (ONLY.length === 0 || ONLY.includes(k)));
for (const key of keys) {
  const [cat, slug] = key.split('/');
  const bodyMeta = meta[key].body;
  for (const { file } of filesFor(cat, slug)) {
    const raw = fs.readFileSync(file, 'utf8');
    if (/^images:/m.test(raw)) { skipped++; continue; }
    const lang = langOf(raw) || masterLangOf(raw);
    const block = imagesBlock(key, lang, bodyMeta);
    if (!block) { incomplete.push(`${path.basename(file)} (${lang})`); continue; }
    const out = insertBlock(raw, block);
    if (!out) { incomplete.push(`${path.basename(file)} (no-fence)`); continue; }
    fs.writeFileSync(file, out);
    injected++;
  }
}
console.log(`injected ${injected} files · skipped ${skipped} (already had images:) · incomplete ${incomplete.length}`);
if (incomplete.length) console.log('INCOMPLETE:\n  ' + incomplete.slice(0, 40).join('\n  '));
