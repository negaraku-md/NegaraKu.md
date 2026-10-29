// instagram.mjs — shared helpers for the Instagram backlog poster.
//
// Mirrors scripts/lib/facebook.mjs (one account per language, same per-language
// demand-ranked queue + warm-up ramp), but publishes through the Instagram Graph
// API's 2-step Content Publishing flow instead of a Page photo post:
//   1. POST /{ig-user-id}/media         { image_url, caption } → creation_id
//   2. POST /{ig-user-id}/media_publish { creation_id }        → media_id
//
// The IG account for a language is RESOLVED FROM that language's Facebook Page
// (each IG Business account is connected to exactly one Page — see
// [[negaraku-fb-page-standard]]), so no separate id map has to be maintained and a
// language auto-activates the moment its IG account is connected to its Page. An
// explicit IG_USER_ID_<LANG> override wins when set.
//
// GO-LIVE PREREQUISITES (all USER-side — the engine is otherwise complete and
// dry-run verified):
//   • App Review / Advanced Access for `instagram_content_publish` (+ instagram_basic,
//     pages_show_list) on the "NegaraKu.md Poster" app — PER-APP, so one approval
//     covers all language accounts. Same gate as FB comment-mode.
//   • The system-user token (FB_PAGE_ACCESS_TOKEN) must carry the IG scopes above.
//   • IMAGE FORMAT: the IG Content Publishing API requires a JPEG image_url; the
//     OG cards are PNG. Set IG_IMAGE_URL_TEMPLATE to a JPEG variant, or have the OG
//     pipeline emit .jpg. Until then the container-create step will reject the PNG.
//   • Create the en/zh/ta IG accounts (user) + connect each to its Page; ms
//     (@negaraku.md) is already connected.

import {
  GRAPH, LANGS, PAGES, localePrefix,
  gfetch, pageTokenFor, hashtags, pillarOf,
} from './facebook.mjs';

export { GRAPH, LANGS, PAGES, localePrefix, gfetch, pageTokenFor, hashtags, pillarOf };

// Known IG Business-account ids (public; they appear in the connected Page's
// Business Suite). ms (@negaraku.md) is live and connected to the Bahasa Melayu
// Page. en/zh/ta/… resolve dynamically from their Page until created+connected.
// Override any with IG_USER_ID_<LANG>.
export const IG_USER_IDS = {
  ms: process.env.IG_USER_ID_MS || '17841433816744746',
  en: process.env.IG_USER_ID_EN || '',
  zh: process.env.IG_USER_ID_ZH || '',
  ta: process.env.IG_USER_ID_TA || '',
  ja: process.env.IG_USER_ID_JA || '',
  ko: process.env.IG_USER_ID_KO || '',
  th: process.env.IG_USER_ID_TH || '',
  vi: process.env.IG_USER_ID_VI || '',
  id: process.env.IG_USER_ID_ID || '',
  ar: process.env.IG_USER_ID_AR || '',
  hi: process.env.IG_USER_ID_HI || '',
  es: process.env.IG_USER_ID_ES || '',
  fr: process.env.IG_USER_ID_FR || '',
};

// Resolve a language's IG Business-account id. Prefer the explicit id (env/map);
// otherwise ask the connected Facebook Page for its `instagram_business_account`.
// Cached per language. Returns null when the language has no IG connected yet
// (so that language is simply skipped, exactly like a blank FB Page id).
const _igIdCache = new Map();
export async function igUserIdFor(lang, token) {
  if (_igIdCache.has(lang)) return _igIdCache.get(lang);
  const explicit = IG_USER_IDS[lang];
  if (explicit) { _igIdCache.set(lang, explicit); return explicit; }
  const pageId = PAGES[lang];
  if (!pageId) { _igIdCache.set(lang, null); return null; }
  try {
    const pageToken = await pageTokenFor(pageId, token);
    const url = `${GRAPH}/${pageId}?fields=instagram_business_account&access_token=${encodeURIComponent(pageToken)}`;
    const res = await gfetch(url, {}, { label: `ig-resolve ${lang}` });
    const json = await res.json().catch(() => ({}));
    const id = json?.instagram_business_account?.id || null;
    _igIdCache.set(lang, id);
    return id;
  } catch {
    _igIdCache.set(lang, null);
    return null;
  }
}

// The OG card URL for an article, per language. IG requires JPEG; the template is
// overridable so a JPEG variant can be wired without a code change. Default points
// at the existing PNG card (works for dry-run; see GO-LIVE note on format).
//   IG_IMAGE_URL_TEMPLATE supports {site} {lang} {category} {slug} placeholders.
export function ogCardUrl(siteUrl, lang, category, slug) {
  const tpl = process.env.IG_IMAGE_URL_TEMPLATE;
  if (tpl) {
    return tpl
      .replace('{site}', siteUrl).replace('{lang}', lang)
      .replace('{category}', category).replace('{slug}', slug);
  }
  return `${siteUrl}/og/${lang}/${category}/${slug}.png`;
}

// IG captions can't carry a clickable link (Instagram only links the bio), so the
// canonical URL is shown as PLAIN TEXT plus a "link in bio" nudge — no UTM, since
// a non-clickable URL yields no referrer to attribute. Caption = title → summary →
// pillar prompt → readable URL + link-in-bio → hashtags. IG allows up to 2,200
// chars and 30 hashtags; the hashtags() helper already caps the line.
const LINK_IN_BIO = {
  ms: '(pautan di bio)', en: '(link in bio)', zh: '（链接在简介）', ta: '(பயோவில் இணைப்பு)',
  ja: '（プロフィールのリンクへ）', ko: '(프로필 링크)', th: '(ลิงก์ในไบโอ)', vi: '(liên kết ở tiểu sử)',
  id: '(tautan di bio)', ar: '(الرابط في النبذة)', hi: '(लिंक बायो में)', es: '(enlace en la bio)',
  fr: '(lien dans la bio)',
};
const READ_FULL = {
  ms: '🔗 Baca panduan penuh:', en: '🔗 Read the full guide:', zh: '🔗 阅读完整指南：',
  ta: '🔗 முழு வழிகாட்டியைப் படியுங்கள்:', ja: '🔗 完全ガイドを読む：', ko: '🔗 전체 가이드 읽기:',
  th: '🔗 อ่านคู่มือฉบับเต็ม:', vi: '🔗 Đọc hướng dẫn đầy đủ:', id: '🔗 Baca panduan lengkap:',
  ar: '🔗 اقرأ الدليل الكامل:', hi: '🔗 पूरी गाइड पढ़ें:', es: '🔗 Lee la guía completa:',
  fr: '🔗 Lisez le guide complet :',
};
const PROMPT = {
  understand: { ms: 'Ingin memahami Malaysia dengan lebih mendalam?', en: 'Want to understand Malaysia better?', zh: '想更深入了解马来西亚吗？', ta: 'மலேசியாவை இன்னும் ஆழமாகப் புரிந்துகொள்ள விரும்புகிறீர்களா?', ja: 'マレーシアをもっと深く知りたいですか？', ko: '말레이시아를 더 깊이 이해하고 싶으신가요?', th: 'อยากเข้าใจมาเลเซียให้ลึกซึ้งยิ่งขึ้นไหม?', vi: 'Muốn hiểu Malaysia sâu sắc hơn?', id: 'Ingin memahami Malaysia lebih dalam?', ar: 'هل تريد فهم ماليزيا بشكل أعمق؟', hi: 'मलेशिया को और गहराई से समझना चाहते हैं?', es: '¿Quieres entender mejor Malasia?', fr: 'Envie de mieux comprendre la Malaisie ?' },
  living: { ms: 'Tinggal, bekerja atau belajar di Malaysia?', en: 'Living, working or studying in Malaysia?', zh: '在马来西亚生活、工作或求学吗？', ta: 'மலேசியாவில் வாழ்கிறீர்களா, வேலை செய்கிறீர்களா அல்லது படிக்கிறீர்களா?', ja: 'マレーシアで暮らす・働く・学んでいますか？', ko: '말레이시아에서 살거나 일하거나 공부하고 계신가요?', th: 'อาศัย ทำงาน หรือเรียนอยู่ในมาเลเซียใช่ไหม?', vi: 'Đang sống, làm việc hay học tập tại Malaysia?', id: 'Tinggal, bekerja, atau belajar di Malaysia?', ar: 'تعيش أو تعمل أو تدرس في ماليزيا؟', hi: 'मलेशिया में रहते, काम करते या पढ़ते हैं?', es: '¿Vives, trabajas o estudias en Malasia?', fr: 'Vous vivez, travaillez ou étudiez en Malaisie ?' },
  'doing-business': { ms: 'Memulakan atau mengembangkan perniagaan di Malaysia?', en: 'Starting or growing a business in Malaysia?', zh: '在马来西亚创业或拓展业务吗？', ta: 'மலேசியாவில் வணிகத்தைத் தொடங்குகிறீர்களா அல்லது வளர்க்கிறீர்களா?', ja: 'マレーシアでビジネスを始める・成長させる予定ですか？', ko: '말레이시아에서 사업을 시작하거나 키우고 계신가요?', th: 'กำลังเริ่มต้นหรือขยายธุรกิจในมาเลเซียใช่ไหม?', vi: 'Đang khởi nghiệp hay mở rộng kinh doanh tại Malaysia?', id: 'Memulai atau mengembangkan bisnis di Malaysia?', ar: 'هل تبدأ أو تنمّي عملاً تجارياً في ماليزيا؟', hi: 'मलेशिया में व्यवसाय शुरू या विकसित कर रहे हैं?', es: '¿Vas a iniciar o hacer crecer un negocio en Malasia?', fr: 'Vous lancez ou développez une entreprise en Malaisie ?' },
};
const TITLE_EMOJI = '📌 ';

export function buildCaption(data, lang, url) {
  const prompt = (PROMPT[pillarOf(data.category)] ?? PROMPT.understand)[lang];
  const tags = hashtags(data, lang);
  return [
    `${TITLE_EMOJI}${data.title}`,
    '',
    data.summary,
    '',
    prompt,
    '',
    `${READ_FULL[lang]} ${url}  ${LINK_IN_BIO[lang]}`,
    '',
    tags,
  ].join('\n');
}

// --- 2-step Content Publishing ---------------------------------------------

// Step 1: create a media container. Returns the creation_id.
export async function createMediaContainer(igUserId, imageUrl, caption, pageToken) {
  const res = await gfetch(`${GRAPH}/${igUserId}/media`, {
    method: 'POST',
    body: new URLSearchParams({ image_url: imageUrl, caption, access_token: pageToken }),
  }, { label: `ig-media ${igUserId}` });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.id) {
    throw new Error(`container create failed: ${JSON.stringify(json)}`);
  }
  return json.id;
}

// Step 2: publish the container. Returns the published media id.
export async function publishMedia(igUserId, creationId, pageToken) {
  const res = await gfetch(`${GRAPH}/${igUserId}/media_publish`, {
    method: 'POST',
    body: new URLSearchParams({ creation_id: creationId, access_token: pageToken }),
  }, { label: `ig-publish ${igUserId}` });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.id) {
    throw new Error(`media_publish failed: ${JSON.stringify(json)}`);
  }
  return json.id;
}
