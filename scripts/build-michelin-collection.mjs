// Build the MICHELIN Guide Malaysia collection manifest.
//
// The 70 MICHELIN restaurant articles (topicId MY-MICH-*) carry their award
// distinction only in prose (title / summary / keyTakeaways) and their price in
// place.priceRange. That is fine for a reader on one page, but a filterable
// collection hub needs the distinction as DATA. This script distils the
// language-neutral collection facts — distinction, price band, state/city — from
// each MASTER file into src/data/collections/michelin.json, which MichelinHubView
// reads. Localised display (title, hero, place card) is resolved per-locale at
// render time from the article itself; only the neutral facts live here.
//
// Deterministic + reproducible: the heuristic reads the text, and the OVERRIDES
// table below corrects any article the heuristic misreads, so re-running always
// reproduces the reviewed result. Run: node scripts/build-michelin-collection.mjs
// (add --report to print the review table without writing).

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const FOOD_DIR = join(ROOT, 'knowledge', 'food-lifestyle');
const OUT = join(ROOT, 'src', 'data', 'collections', 'michelin.json');

const LOCALE_SUFFIX = /\.(ms|en|zh|ta|ja|ko|th|vi|id|ar|hi|es|fr)\.md$/i;

// --- editorial overrides (slug -> partial facts) ---------------------------
// Fill in only where the heuristic below is wrong. Keeps regeneration correct.
const OVERRIDES = {
  // 'some-slug': { distinction: 'star', price: '$$$', state: 'kuala-lumpur', city: 'Kuala Lumpur' },
};

// --- state / city detection ------------------------------------------------
// Malaysian state names (en + ms) and common city keywords → state id.
const STATE_NAMES = {
  johor: ['johor'], kedah: ['kedah'], kelantan: ['kelantan'],
  'kuala-lumpur': ['kuala lumpur', 'wilayah persekutuan kuala lumpur'],
  labuan: ['labuan'], melaka: ['melaka', 'malacca'],
  'negeri-sembilan': ['negeri sembilan'], pahang: ['pahang'],
  penang: ['penang', 'pulau pinang'], perak: ['perak'], perlis: ['perlis'],
  putrajaya: ['putrajaya'], sabah: ['sabah'], sarawak: ['sarawak'],
  selangor: ['selangor'], terengganu: ['terengganu'],
};
const CITY_TO_STATE = {
  'kuala lumpur': 'kuala-lumpur', 'bukit bintang': 'kuala-lumpur', 'bangsar': 'kuala-lumpur',
  'cheras': 'kuala-lumpur', 'kepong': 'kuala-lumpur', 'setapak': 'kuala-lumpur',
  'pandan perdana': 'kuala-lumpur', 'sri petaling': 'kuala-lumpur', 'desa park': 'kuala-lumpur',
  'george town': 'penang', 'georgetown': 'penang', 'bayan lepas': 'penang',
  'tanjung bungah': 'penang', 'tanjung tokong': 'penang', 'air itam': 'penang',
  'ayer itam': 'penang', 'jelutong': 'penang', 'gelugor': 'penang', 'balik pulau': 'penang',
  'butterworth': 'penang', 'bukit mertajam': 'penang', 'seberang': 'penang',
  'petaling jaya': 'selangor', 'subang': 'selangor', 'shah alam': 'selangor',
  'puchong': 'selangor', 'klang': 'selangor', 'kajang': 'selangor', 'damansara': 'selangor',
  'ampang': 'selangor', 'seri kembangan': 'selangor', 'sunway': 'selangor',
  'ipoh': 'perak', 'johor bahru': 'johor', 'melaka': 'melaka', 'malacca': 'melaka',
  'kota kinabalu': 'sabah', 'kuching': 'sarawak',
};

function detectState(address = '') {
  const a = ` ${address.toLowerCase()} `;
  // City keyword first (more specific than a state that may appear in a street name).
  for (const [city, st] of Object.entries(CITY_TO_STATE)) {
    if (a.includes(city)) return { state: st, city: titleCase(city) };
  }
  for (const [st, names] of Object.entries(STATE_NAMES)) {
    for (const n of names) if (a.includes(n)) return { state: st, city: null };
  }
  return { state: null, city: null };
}
function titleCase(s) {
  return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

// --- distinction detection -------------------------------------------------
function detectDistinction(text) {
  const t = text.toLowerCase();
  if (/\b(three|3)[\s-]+michelin[\s-]+star|three-starred/.test(t)) return 'three-star';
  if (/\b(two|2)[\s-]+michelin[\s-]+star|two-starred/.test(t)) return 'two-star';
  // One star: assert from a positive phrase, not the FAQ "does it have a star? no".
  if (/\b(one|1)[\s-]+michelin[\s-]+star\b|\bmichelin[\s-]+starred\b|\bearn(s|ed)?\s+(a\s+)?michelin\s+star\b|\bholds?\s+(a\s+)?michelin\s+star\b|:\s*michelin[\s-]+star\b/.test(t)) return 'star';
  if (/bib\s+gourmand/.test(t)) return 'bib-gourmand';
  if (/michelin[\s-]+selected|selected\s+restaurant|michelin\s+guide/.test(t)) return 'selected';
  return 'selected';
}
function detectGreenStar(text) {
  return /green\s+star/i.test(text);
}

function priceBand(priceRange = '') {
  const m = /^\s*(\$+)/.exec(priceRange);
  return m ? m[1] : null;
}

// --- main ------------------------------------------------------------------
const files = readdirSync(FOOD_DIR).filter((f) => f.endsWith('.md') && !LOCALE_SUFFIX.test(f));
const rows = [];
for (const f of files) {
  const raw = readFileSync(join(FOOD_DIR, f), 'utf8');
  const { data } = matter(raw);
  if (!/^MY-MICH-/.test(data.topicId || '')) continue;
  const slug = data.slug;
  const text = [data.title, data.summary, data.answer, ...(data.keyTakeaways || [])]
    .filter(Boolean)
    .join(' \n ');
  const det = detectState(data.place?.address || '');
  const row = {
    slug,
    topicId: data.topicId,
    title: data.title,
    distinction: detectDistinction(text),
    greenStar: detectGreenStar(text),
    price: priceBand(data.place?.priceRange || ''),
    state: det.state,
    city: det.city,
    ...(OVERRIDES[slug] || {}),
  };
  rows.push(row);
}

// rank for stable display order: stars first, then bib, then selected; name A–Z.
const RANK = { 'three-star': 0, 'two-star': 1, star: 2, 'bib-gourmand': 3, selected: 4 };
rows.sort((a, b) => (RANK[a.distinction] - RANK[b.distinction]) || a.title.localeCompare(b.title));

// --- report ----------------------------------------------------------------
const byDist = {};
for (const r of rows) byDist[r.distinction] = (byDist[r.distinction] || 0) + 1;
const byState = {};
for (const r of rows) byState[r.state || '??'] = (byState[r.state || '??'] || 0) + 1;

const REPORT = process.argv.includes('--report');
console.log(`[michelin] ${rows.length} restaurants —`, byDist, '·', byState);
if (REPORT) {
  console.log('\nslug | distinction | green | price | state | city');
  console.log('-----|-------------|-------|-------|-------|-----');
  for (const r of rows) {
    console.log(`${r.slug} | ${r.distinction} | ${r.greenStar ? 'Y' : ''} | ${r.price || '-'} | ${r.state || '???'} | ${r.city || ''}`);
  }
  console.log('\n--report: not writing JSON.');
  process.exit(0);
}

mkdirSync(dirname(OUT), { recursive: true });
const payload = {
  generatedBy: 'scripts/build-michelin-collection.mjs',
  guide: 'MICHELIN Guide Kuala Lumpur, Penang & beyond',
  count: rows.length,
  distinctions: byDist,
  restaurants: rows.map(({ topicId, title, ...keep }) => keep),
};
writeFileSync(OUT, JSON.stringify(payload, null, 2) + '\n', 'utf8');
console.log(`\nWrote ${OUT}`);
