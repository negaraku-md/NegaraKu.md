// Reader-need frameworks (Sprint 1b) — the single source of truth for turning the
// editorial `framework` field into reader- and machine-facing output.
//
// v1 was editorial-only (opening emphasis + health-scan checks). v2 surfaces it:
//   • a localized chip on the article (ArticleView `.badges`) — "what kind of
//     article this is", for readers and crawlers; and
//   • a schema.org hint (`genre` + `learningResourceType`) in the Article JSON-LD
//     (seo.ts) — a precise, language-independent content-type signal for AI /
//     answer engines, which is the whole point of an "AI-friendly" knowledge base.
//
// Adding/rendering a chip is CHROME, not article content, so it is freshness-neutral
// (translation-sync hashes article body + TRANSLATED_FIELDS, not components).
// Labels are UI strings like the `mode` pill, localized inline across all 13 locales.
import type { Localized, Locale } from './categories';
import { loc } from './categories';

export const FRAMEWORKS = [
  'explainer', 'history-culture', 'profile', 'how-to',
  'decision', 'rules', 'data-reference', 'journey-hub',
] as const;
export type Framework = (typeof FRAMEWORKS)[number];

export interface FrameworkDef {
  id: Framework;
  /** Emoji shown on the chip. Chosen to not collide with the mode (📜/🧭) or sensitivity (🔒) pills. */
  icon: string;
  /** Localized short label for the chip (all 13 viewing locales). */
  name: Localized;
  /** schema.org CreativeWork `genre` — language-independent, machine-facing. */
  genre: string;
  /** schema.org `learningResourceType` — the content-type signal for answer engines. */
  learningResourceType: string;
}

export const FRAMEWORK_DEFS: Record<Framework, FrameworkDef> = {
  explainer: {
    id: 'explainer', icon: '💡',
    name: { ms: 'Penerang', en: 'Explainer', zh: '释义', ta: 'விளக்கம்', ja: '解説', ko: '해설', th: 'คำอธิบาย', vi: 'Giải thích', id: 'Penjelasan', ar: 'شرح', hi: 'व्याख्या', es: 'Explicación', fr: 'Explication' },
    genre: 'Explainer', learningResourceType: 'concept explanation',
  },
  'history-culture': {
    id: 'history-culture', icon: '🏛️',
    name: { ms: 'Sejarah & Budaya', en: 'History & Culture', zh: '历史与文化', ta: 'வரலாறு & பண்பாடு', ja: '歴史と文化', ko: '역사·문화', th: 'ประวัติศาสตร์และวัฒนธรรม', vi: 'Lịch sử & Văn hóa', id: 'Sejarah & Budaya', ar: 'تاريخ وثقافة', hi: 'इतिहास और संस्कृति', es: 'Historia y cultura', fr: 'Histoire et culture' },
    genre: 'History & Culture', learningResourceType: 'background',
  },
  profile: {
    id: 'profile', icon: '🪪',
    name: { ms: 'Profil', en: 'Profile', zh: '简介', ta: 'சுயவிவரம்', ja: 'プロフィール', ko: '프로필', th: 'โปรไฟล์', vi: 'Hồ sơ', id: 'Profil', ar: 'نبذة', hi: 'प्रोफ़ाइल', es: 'Perfil', fr: 'Profil' },
    genre: 'Profile', learningResourceType: 'reference',
  },
  'how-to': {
    id: 'how-to', icon: '📋',
    name: { ms: 'Panduan Cara', en: 'How-to', zh: '操作指南', ta: 'வழிமுறை', ja: '手順ガイド', ko: '방법 안내', th: 'วิธีทำ', vi: 'Hướng dẫn', id: 'Panduan Cara', ar: 'دليل عملي', hi: 'कैसे करें', es: 'Cómo hacerlo', fr: 'Guide pratique' },
    genre: 'How-to Guide', learningResourceType: 'how-to guide',
  },
  decision: {
    id: 'decision', icon: '⚖️',
    name: { ms: 'Panduan Keputusan', en: 'Decision', zh: '抉择指南', ta: 'தீர்மானம்', ja: '選択ガイド', ko: '선택 가이드', th: 'การตัดสินใจ', vi: 'Quyết định', id: 'Panduan Keputusan', ar: 'دليل القرار', hi: 'निर्णय', es: 'Decisión', fr: 'Aide à la décision' },
    genre: 'Decision Guide', learningResourceType: 'decision support',
  },
  rules: {
    id: 'rules', icon: '📏',
    name: { ms: 'Peraturan', en: 'Rules', zh: '规则与要求', ta: 'விதிகள்', ja: 'ルール', ko: '규정', th: 'กฎระเบียบ', vi: 'Quy định', id: 'Aturan', ar: 'قواعد', hi: 'नियम', es: 'Normas', fr: 'Règles' },
    genre: 'Rules & Requirements', learningResourceType: 'regulatory reference',
  },
  'data-reference': {
    id: 'data-reference', icon: '📊',
    name: { ms: 'Rujukan Data', en: 'Reference', zh: '数据参考', ta: 'தரவு குறிப்பு', ja: 'データ・資料', ko: '데이터·참고', th: 'ข้อมูลอ้างอิง', vi: 'Dữ liệu & Tra cứu', id: 'Rujukan Data', ar: 'بيانات ومراجع', hi: 'डेटा संदर्भ', es: 'Referencia', fr: 'Référence' },
    genre: 'Data & Reference', learningResourceType: 'reference',
  },
  'journey-hub': {
    id: 'journey-hub', icon: '🗺️',
    name: { ms: 'Mula Di Sini', en: 'Start Here', zh: '从此开始', ta: 'இங்கே தொடங்குங்கள்', ja: 'ここから始める', ko: '여기서 시작', th: 'เริ่มที่นี่', vi: 'Bắt đầu tại đây', id: 'Mulai Di Sini', ar: 'ابدأ من هنا', hi: 'यहाँ से शुरू करें', es: 'Empieza aquí', fr: 'Commencer ici' },
    genre: 'Journey Hub', learningResourceType: 'topic overview',
  },
};

/** The framework definition for a value, or undefined if absent/unknown (render nothing). */
export function getFramework(id?: string | null): FrameworkDef | undefined {
  return id && (FRAMEWORKS as readonly string[]).includes(id)
    ? FRAMEWORK_DEFS[id as Framework]
    : undefined;
}

/** Localized chip label (icon + name) for a framework value, or null if absent. */
export function frameworkLabel(id: string | null | undefined, locale: Locale): string | null {
  const def = getFramework(id);
  return def ? `${def.icon} ${loc(def.name, locale)}` : null;
}
