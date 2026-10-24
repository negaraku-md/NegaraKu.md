// build-facts.mjs — produce the "Fact about Malaysia" embed feed.
//
// Source: public/api/articles.json (written by sync.mjs). Each published,
// non-sensitive article carries a reviewed, translated `answer` (a TL;DR
// paragraph). We take its FIRST SENTENCE as a crisp, already-sourced,
// standalone fact and link back to the source article. No new unsourced
// claims — every fact is reviewed content on a citable page.
//
// Output: public/api/facts/<lang>.json for all 13 locales — a small feed the
// embeddable widget (/embed/fact-of-the-day) fetches for its chosen language.
//
// Runs after sync.mjs in predev/prebuild. Deterministic; safe to re-run.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'public', 'api', 'articles.json');
const OUT_DIR = path.join(ROOT, 'public', 'api', 'facts');

const LANGS = ['ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr'];
// ms is served at the site root (no prefix); every other locale is prefixed.
const urlFor = (lang, cat, slug) => (lang === 'ms' ? `/${cat}/${slug}/` : `/${lang}/${cat}/${slug}/`);

// Char-dense scripts say more per character → shorter caps. zh/ja/ko/th are
// treated as dense; only zh/ja use the 。！？ terminator (Korean uses an ASCII
// period, Thai has no sentence terminator at all → handled by truncation).
const DENSE = new Set(['zh', 'ja', 'ko', 'th']);

// Pull the first sentence out of a TL;DR answer, then enforce a length cap,
// truncating on a word boundary (with an ellipsis) when the first sentence is
// still too long — this recovers Korean/Thai, which don't split cleanly.
function firstSentence(ans, lang) {
  const s = String(ans).replace(/\s+/g, ' ').trim();
  // zh/ja: CJK terminators. Everyone else (incl. ko/ar/hi/latin): an ASCII/De-
  // vanagari/Arabic terminator followed by a space or end — avoids splitting on
  // "Sdn. Bhd."-style abbreviations mid-token. Thai (no terminator): no split.
  const re = lang === 'zh' || lang === 'ja' ? /[。！？]/ : lang === 'th' ? null : /[.!?।؟](?=\s|$)/;
  const m = re ? re.exec(s) : null;
  let out = (m ? s.slice(0, m.index + 1) : s).trim();
  // Drop a leading "Yes," / "No," hedge so the fact reads as a statement.
  out = out.replace(/^(Yes|No|Ya|Tidak|Sí|Oui)[,—-]\s+/i, '');
  const cap = maxLen(lang);
  if (out.length > cap) {
    const slice = out.slice(0, cap);
    const sp = slice.lastIndexOf(' ');
    // Latin/Thai keep whole words; CJK (no spaces) cut at the cap.
    out = (sp > cap * 0.6 ? slice.slice(0, sp) : slice).replace(/[\s,;:，、।]+$/, '') + '…';
  }
  // Re-capitalise if we trimmed a lead-in (Latin scripts only).
  if (!DENSE.has(lang) && lang !== 'ar') out = out.charAt(0).toUpperCase() + out.slice(1);
  return out;
}

// Char caps differ by script density; ko/th need a touch more room than zh/ja.
const maxLen = (lang) => (lang === 'zh' || lang === 'ja' ? 95 : lang === 'ko' || lang === 'th' ? 120 : 220);
const minLen = (lang) => (DENSE.has(lang) ? 12 : 30);

function eligible(a) {
  return (
    a.status === 'published' &&
    (a.sensitivity === 'none' || !a.sensitivity) &&
    a.answer &&
    typeof a.answer === 'string'
  );
}

const PER_CATEGORY_CAP = 8; // keep the feed diverse across topics
const PER_LANG_CAP = 140;

async function main() {
  const { articles } = JSON.parse(await readFile(SRC, 'utf8'));
  await mkdir(OUT_DIR, { recursive: true });

  let totals = [];
  for (const lang of LANGS) {
    const seenTopic = new Set();
    const perCat = new Map();
    const facts = [];
    // Flagship tiers first (t1/t2 are the richest, most interesting), then the
    // rest, so a short feed still skews to the strongest articles.
    const pool = articles
      .filter((a) => a.lang === lang && eligible(a))
      .sort((a, b) => String(a.tier).localeCompare(String(b.tier)) || a.key.localeCompare(b.key));

    for (const a of pool) {
      if (seenTopic.has(a.slug)) continue;
      const t = firstSentence(a.answer, lang);
      if (t.length < minLen(lang) || t.length > maxLen(lang)) continue;
      if (/[?？]$/.test(t)) continue; // a question is not a fact
      const n = perCat.get(a.category) ?? 0;
      if (n >= PER_CATEGORY_CAP) continue;
      perCat.set(a.category, n + 1);
      seenTopic.add(a.slug);
      facts.push({ t, u: urlFor(lang, a.category, a.slug), title: a.title, c: a.category });
      if (facts.length >= PER_LANG_CAP) break;
    }

    await writeFile(
      path.join(OUT_DIR, `${lang}.json`),
      JSON.stringify({ generatedFrom: 'articles.json', lang, count: facts.length, facts }),
    );
    totals.push(`${lang}=${facts.length}`);
  }
  console.log(`[build-facts] wrote ${LANGS.length} locale feeds -> public/api/facts/  (${totals.join(' ')})`);
}

main().catch((e) => {
  console.error('[build-facts] failed:', e.message);
  process.exit(1);
});
