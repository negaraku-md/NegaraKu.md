// build-og.mjs — render Open Graph images (1200×630) for social/Facebook link
// previews. Generates a branded DEFAULT card plus a PER-ARTICLE card that mirrors
// the article hero (breadcrumb + status chips + title + summary) with the
// NegaraKu.md badge lockup top-right. Uses `sharp` to rasterise SVG → PNG.
// Non-fatal: if sharp is unavailable it warns, writes the default SVG, and skips.

import { mkdir, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FLOWER_D, FLOWER_VB, FLOWER_CX, FLOWER_CY } from './logo-flower.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public', 'og');
const MANIFEST = path.join(ROOT, 'public', 'api', 'articles.json');
// "Today" for the overdue-review check. Fixed per build; that is fine for a
// static site rebuilt on every deploy.
const NOW = new Date();

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const titleCase = (id) => id.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
const TITLE_FONT = "Montserrat, 'Noto Sans', 'Noto Sans CJK SC', 'Microsoft YaHei', Arial, sans-serif";
const BODY_FONT = "Lato, 'Noto Sans', 'Noto Sans CJK SC', 'Microsoft YaHei', Arial, sans-serif";

// --- taxonomy (mirrors src/lib/categories.ts) — pillar + localized category
// names, so the breadcrumb reads exactly like the article page. --------------
const PILLAR = {
  understand: { ms: 'Kenali Malaysia', en: 'Understand Malaysia', zh: '认识马来西亚' },
  living: { ms: 'Hidup di Malaysia', en: 'Living in Malaysia', zh: '在马来西亚生活' },
  'doing-business': { ms: 'Berniaga di Malaysia', en: 'Doing Business in Malaysia', zh: '在马来西亚经商' },
};
const CAT = Object.fromEntries(
  [
    ['malaysia','understand','Malaysia','Malaysia','马来西亚'],['states','understand','Negeri & Wilayah','States & Territories','州与联邦直辖区'],
    ['government','understand','Kerajaan','Government','政府'],['law','understand','Undang-Undang','Law & Regulations','法律与法规'],
    ['economy','understand','Ekonomi','Economy','经济'],['arts-culture','understand','Seni & Budaya','Arts & Culture','艺术与文化'],
    ['glossary','understand','Glosari','Glossary','术语库'],['international','understand','Antarabangsa','International','国际'],
    ['business','doing-business','Perniagaan','Business','商业'],['taxation','doing-business','Percukaian','Taxation','税务'],
    ['company-secretary','doing-business','Setiausaha Syarikat','Company Secretary','公司秘书'],['accounting','doing-business','Perakaunan','Accounting','会计'],
    ['audit','doing-business','Audit & Jaminan','Audit & Assurance','审计与鉴证'],['employment','doing-business','Pekerjaan & HR','Employment & HR','就业与人力资源'],
    ['finance','doing-business','Kewangan & Perbankan','Finance & Banking','金融与银行'],['industries','doing-business','Industri','Industries','行业'],
    ['companies','doing-business','Syarikat','Companies','公司'],['technology','doing-business','Teknologi & AI','Technology & AI','科技与人工智能'],
    ['education','living','Pendidikan','Education','教育'],['healthcare','living','Kesihatan','Healthcare','医疗保健'],
    ['property','living','Hartanah','Property','房地产'],['transport','living','Pengangkutan','Transport','交通'],
    ['tourism','living','Pelancongan','Tourism','旅游'],['food-lifestyle','living','Makanan & Gaya Hidup','Food & Lifestyle','美食与生活'],
    ['public-safety','living','Keselamatan Awam','Public Safety','公共安全'],['agriculture','living','Pertanian','Agriculture','农业'],
    ['energy','living','Tenaga & Utiliti','Energy & Utilities','能源与公用事业'],['environment','living','Alam Sekitar','Environment','环境'],
    ['sports','living','Sukan','Sports','体育'],['settling-in','living','Menetap di Malaysia','Settling In','落地安顿'],
    ['money-daily-life','living','Wang & Kehidupan Harian','Money & Daily Life','金钱与日常'],['cost-of-living','living','Kos Sara Hidup','Cost of Living','生活成本'],
  ].map(([id, pillar, ms, en, zh]) => [id, { pillar, ms, en, zh }]),
);
const SENS = {
  race: { ms: 'Sensitif — kaum', en: 'Sensitive — race', zh: '敏感——种族' },
  religion: { ms: 'Sensitif — agama', en: 'Sensitive — religion', zh: '敏感——宗教' },
  royalty: { ms: 'Sensitif — institusi diraja', en: 'Sensitive — royalty', zh: '敏感——王室' },
  constitution: { ms: 'Sensitif — perlembagaan', en: 'Sensitive — constitution', zh: '敏感——宪法' },
  elections: { ms: 'Sensitif — pilihan raya', en: 'Sensitive — elections', zh: '敏感——选举' },
  security: { ms: 'Sensitif — keselamatan', en: 'Sensitive — security', zh: '敏感——安全' },
  health: { ms: 'Sensitif — kesihatan', en: 'Sensitive — health', zh: '敏感——健康' },
  'legal-proceedings': { ms: 'Sensitif — perundangan', en: 'Sensitive — legal', zh: '敏感——法律程序' },
};
const pick = (obj, lang) => (obj ? obj[lang] ?? obj.en : undefined);
const L = (lang, ms, en, zh) => (lang === 'zh' ? zh : lang === 'ms' ? ms : en);
const fmtDate = (iso, lang) => {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString(lang === 'zh' ? 'zh-CN' : lang === 'ms' ? 'ms-MY' : 'en-GB',
      { day: 'numeric', month: 'short', year: 'numeric' });
  } catch { return iso; }
};
// Approx text width: CJK glyphs are ~1.85× a Latin glyph at the same size.
const textWidth = (s, size) => {
  let u = 0;
  for (const ch of String(s)) u += /[㐀-鿿一-龥]/.test(ch) ? 1.0 : 0.54;
  return u * size;
};

// A standalone Bunga Raya bloom — the SAME v2 traced flower as the badge/avatar
// (logo-flower.mjs), gold fill, no hexagon — centred at (cx,cy) with pixel width
// `size`. Used for the faint background watermark so every card carries the one
// real logo (never the old abstract blossom).
const bloom = (cx, cy, size, opacity = 1) => {
  const sc = size / FLOWER_VB;
  const tx = cx - FLOWER_CX * sc, ty = cy - FLOWER_CY * sc;
  return `<g opacity="${opacity}" transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${sc.toFixed(5)})"><path fill="#FFC000" fill-rule="evenodd" d="${FLOWER_D}"/></g>`;
};

// The hexagon BADGE — black hexagon + white border + gold Bunga Raya, centred at
// (cx,cy), width `size` (matches public/brand/negaraku-icon.svg via logo-flower).
const FLOWER_SC = 300 / FLOWER_VB;                 // flower spans 300 of the 512 badge
const FLOWER_TX = 256 - FLOWER_CX * FLOWER_SC;     // centre the flower CENTROID at (256,256)
const FLOWER_TY = 256 - FLOWER_CY * FLOWER_SC;
const badge = (cx, cy, size) => {
  const S = size / 512, tx = cx - 256 * S, ty = cy - 256 * S;
  return `<g transform="translate(${tx} ${ty}) scale(${S})">
    <polygon points="256,23.5 54.65,139.75 54.65,372.25 256,488.5 457.35,372.25 457.35,139.75" fill="#0A0A0A" stroke="#0A0A0A" stroke-width="34" stroke-linejoin="round"/>
    <polygon points="256,6.5 39.93,131.25 39.93,380.75 256,505.5 472.07,380.75 472.07,131.25" fill="none" stroke="#FFFFFF" stroke-width="11" stroke-linejoin="round" stroke-linecap="round"/>
    <g transform="translate(${FLOWER_TX.toFixed(2)} ${FLOWER_TY.toFixed(2)}) scale(${FLOWER_SC.toFixed(5)})"><path fill="#FFC000" fill-rule="evenodd" d="${FLOWER_D}"/></g></g>`;
};

// A rounded status chip; returns { w, svg } so callers can lay them out in a row.
const CHIP_FONT = 19;
function chip(x, y, text, fg, stroke, bg) {
  const w = 22 + textWidth(text, CHIP_FONT), h = 38;
  return {
    w,
    svg: `<rect x="${x}" y="${y}" width="${w.toFixed(1)}" height="${h}" rx="19" fill="${bg}" stroke="${stroke}"/>
    <text x="${(x + w / 2).toFixed(1)}" y="${y + 25}" text-anchor="middle" font-family="${BODY_FONT}" font-size="${CHIP_FONT}" font-weight="700" fill="${fg}">${esc(text)}</text>`,
  };
}

// Wrap a title/summary into lines. Latin wraps by words; CJK by character.
function wrapText(text, { maxLatin, maxCjk, maxLines }) {
  const cjk = /[㐀-鿿一-龥]/.test(text);
  const lines = [];
  if (cjk) {
    let line = '';
    for (const ch of Array.from(text)) {
      if (Array.from(line).length >= maxCjk) { lines.push(line); line = ''; if (lines.length >= maxLines) break; }
      line += ch;
    }
    if (line && lines.length < maxLines) lines.push(line);
  } else {
    let line = '';
    for (const w of text.split(/\s+/)) {
      if (line && (line + ' ' + w).length > maxLatin) { lines.push(line); line = w; if (lines.length >= maxLines) break; }
      else line = line ? line + ' ' + w : w;
    }
    if (line && lines.length < maxLines) lines.push(line);
  }
  const joined = lines.join(cjk ? '' : ' ');
  const full = cjk ? text.replace(/\s+/g, '') : text.replace(/\s+/g, ' ');
  if (lines.length && joined.length < full.length) lines[lines.length - 1] = lines[lines.length - 1].replace(/\s*$/, '') + '…';
  return lines;
}

function articleSvg(a) {
  const lang = a.lang;
  const cjkTitle = /[㐀-鿿一-龥]/.test(a.title || '');
  const c = CAT[a.category];
  // Breadcrumb: pillar / category / subcategory (localized).
  const crumb = [
    c && pick(PILLAR[c.pillar], lang),
    c ? c[lang] ?? c.en : titleCase(a.category),
    Array.isArray(a.subcategory) && a.subcategory[0] ? titleCase(a.subcategory[0]) : null,
  ].filter(Boolean).join('  /  ');

  // Chips — mode, sensitivity, published, next-review (red once overdue).
  const pubDate = fmtDate(a.published ?? a.reviewed ?? a.updated, lang);
  const overdue = a.reviewDue && new Date(a.reviewDue) < NOW;
  const chipDefs = [];
  chipDefs.push(a.mode === 'narrative'
    ? [L(lang, 'Naratif', 'Narrative', '叙事'), '#60a5fa', 'rgba(96,165,250,.4)', 'rgba(96,165,250,.12)']
    : [L(lang, 'Praktikal', 'Practical', '实用'), '#60a5fa', 'rgba(96,165,250,.4)', 'rgba(96,165,250,.12)']);
  if (a.sensitivity && a.sensitivity !== 'none' && SENS[a.sensitivity])
    chipDefs.push([pick(SENS[a.sensitivity], lang), '#f87171', 'rgba(248,113,113,.45)', 'rgba(248,113,113,.12)']);
  if (pubDate)
    chipDefs.push([`${L(lang, 'Diterbitkan', 'Published', '发布')}: ${pubDate}`, '#4ade80', 'rgba(74,222,128,.4)', 'rgba(74,222,128,.12)']);
  if (a.reviewDue) {
    const label = overdue ? L(lang, 'Semakan tertunggak', 'Review overdue', '审阅逾期') : L(lang, 'Semakan seterusnya', 'Next review', '下次审阅');
    chipDefs.push([`${label}: ${fmtDate(a.reviewDue, lang)}`,
      overdue ? '#f87171' : '#9A9AB8', overdue ? 'rgba(248,113,113,.5)' : 'rgba(99,99,108,.9)', overdue ? 'rgba(248,113,113,.12)' : '#141419']);
  }
  const chips = []; let cx = 76;
  for (const d of chipDefs) { const k = chip(cx, 151, ...d); chips.push(k.svg); cx += k.w + 11; }

  // Title + summary.
  const tLines = wrapText(a.title || '', { maxLatin: 34, maxCjk: 18, maxLines: 3 });
  const tLh = 58, tStart = 266;
  const tSpans = tLines.map((l, i) => `<tspan x="76" dy="${i === 0 ? 0 : tLh}">${esc(l)}</tspan>`).join('');
  const sStart = tStart + (tLines.length - 1) * tLh + 54;
  const sLines = wrapText(a.summary || '', { maxLatin: 70, maxCjk: 34, maxLines: 3 });
  const sSpans = sLines.map((l, i) => `<tspan x="76" dy="${i === 0 ? 0 : 34}">${esc(l)}</tspan>`).join('');
  const RX = 1080;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><radialGradient id="glow" cx="12%" cy="0%" r="70%">
    <stop offset="0%" stop-color="#FFC000" stop-opacity="0.10"/><stop offset="100%" stop-color="#FFC000" stop-opacity="0"/>
  </radialGradient></defs>
  <rect width="1200" height="630" fill="#07070A"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="8" fill="#FFC000"/>
  ${bloom(1015, 430, 360, 0.06)}
  <text x="76" y="108" font-family="${BODY_FONT}" font-size="24" font-weight="600" fill="#FFC000">${esc(crumb)}</text>
  ${chips.join('\n  ')}
  <text x="76" y="${tStart}" font-family="${TITLE_FONT}" font-size="${cjkTitle ? 52 : 50}" font-weight="800" fill="#F4F4F8">${tSpans}</text>
  <text x="76" y="${sStart}" font-family="${BODY_FONT}" font-size="25" fill="#9A9AB8">${sSpans}</text>
  ${badge(RX, 70, 78)}
  <text x="${RX}" y="150" text-anchor="middle" font-family="${TITLE_FONT}" font-size="27" font-weight="700" fill="#F4F4F8">NegaraKu<tspan fill="#FFC000">.md</tspan></text>
  <text x="${RX}" y="174" text-anchor="middle" font-family="${BODY_FONT}" font-size="15" font-weight="700" letter-spacing="1.5" fill="#C0C0D0">${L(lang, 'Malaysia Mesra-AI', 'AI-friendly Malaysia', 'AI 友好的马来西亚')}</text>
</svg>`;
}

const defaultSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#07070A"/>
  <rect x="0" y="0" width="1200" height="8" fill="#FFC000"/>
  ${bloom(1015, 430, 360, 0.06)}
  ${badge(170, 200, 230)}
  <text x="90" y="400" font-family="${TITLE_FONT}" font-size="96" font-weight="700" fill="#F4F4F8">NegaraKu<tspan fill="#FFC000">.md</tspan></text>
  <text x="92" y="470" font-family="${BODY_FONT}" font-size="38" fill="#C0C0D0">An open-source, AI-friendly knowledge base about Malaysia</text>
  <text x="92" y="560" font-family="${BODY_FONT}" font-size="30" fill="#9A9AB8">Sponsored by <tspan fill="#FFC000" font-weight="700">1company</tspan></text>
</svg>`;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(path.join(OUT_DIR, 'default.svg'), defaultSvg);

  let sharp;
  try {
    ({ default: sharp } = await import('sharp'));
  } catch {
    console.warn('[og] sharp not installed — wrote default.svg only. `npm i -D sharp` to enable PNG.');
    return;
  }
  const toPng = (svg, file) => sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(file);
  await toPng(defaultSvg, path.join(OUT_DIR, 'default.png'));

  let manifest = [];
  try {
    const raw = JSON.parse(await readFile(MANIFEST, 'utf8'));
    manifest = Array.isArray(raw) ? raw : raw.articles ?? [];
  } catch {
    console.warn('[og] manifest not found — wrote default.png only. Run `npm run sync` first.');
    return;
  }
  const items = manifest.filter((a) => a.lang && a.category && a.slug && a.title);
  let made = 0;
  const CONC = 24;
  for (let i = 0; i < items.length; i += CONC) {
    await Promise.all(
      items.slice(i, i + CONC).map(async (a) => {
        const dir = path.join(OUT_DIR, a.lang, a.category);
        await mkdir(dir, { recursive: true });
        await toPng(articleSvg(a), path.join(dir, `${a.slug}.png`));
        made++;
      }),
    );
  }
  console.log(`[og] wrote default.png + ${made} per-article cards`);
}

main().catch((err) => {
  console.warn('[og] skipped:', err.message);
});
