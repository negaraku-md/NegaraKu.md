import type { Locale } from './categories';
import { launchCategories, PILLARS } from './categories';
import { LOCALES } from './i18n';

// Hero stat cards. Two sets:
//   • HERO_STATS   — the home page's evocative "Malaysia at a glance" facts.
//   • kbGlanceStats — a meaningful "NegaraKu.md at a glance" (articles · languages
//     · categories · pillars), the DEFAULT on any non-article page that doesn't
//     pass its own stats, so figureless pages show the project's real scale rather
//     than repeating the home's nature trivia. Data-rich pages (e.g. Analytics)
//     pass their own page-specific figures instead.

export interface HeroStat {
  icon: string;
  value: string;
  unit: Record<Locale, string>;
}

// Distinctive facts, not factbook figures. Each is verified: Peninsular + Borneo
// split by the South China Sea; Taman Negara ~130M yrs (older than the Amazon);
// one of Conservation International's 17 megadiverse nations; and the world's only
// rotating elective monarchy — 9 hereditary rulers, a new Agong every 5 years.
export const HERO_STATS: HeroStat[] = [
  { icon: '🗺️', value: '2', unit: { ms: 'daratan, satu negara', en: 'lands, one nation', zh: '两地一国', ta: 'நிலப்பகுதிகள், ஒரே நாடு', ja: '国土、一つの国', ko: '개 국토, 하나의 나라', th: 'ผืนแผ่นดิน หนึ่งประเทศ', vi: 'vùng đất, một quốc gia', id: 'daratan, satu negara' } },
  { icon: '🌳', value: '130M', unit: { ms: 'tahun usia hutan hujan', en: 'yr-old rainforest', zh: '年古老雨林', ta: 'ஆண்டு பழமையான மழைக்காடு', ja: '年前からの熱帯雨林', ko: '년 된 열대우림', th: 'ปีของป่าฝนดึกดำบรรพ์', vi: 'năm tuổi rừng mưa nhiệt đới', id: 'tahun usia hutan hujan' } },
  { icon: '🐅', value: '1 / 17', unit: { ms: 'negara megadiversiti', en: 'megadiverse nations', zh: '超级生物多样国', ta: 'உயிர்ப் பன்முக நாடுகள்', ja: '生物多様性大国', ko: '생물다양성 대국', th: 'ชาติที่มีความหลากหลายทางชีวภาพสูงยิ่ง', vi: 'quốc gia siêu đa dạng sinh học', id: 'negara megadiversitas' } },
  { icon: '👑', value: '9 → 1', unit: { ms: 'sultan, satu raja bergilir', en: 'sultans, one rotating king', zh: '位苏丹轮任元首', ta: 'சுல்தான்கள், ஒரே சுழல்முறை மன்னர்', ja: 'スルタン、輪番の国王', ko: '술탄, 윤번제 국왕', th: 'สุลต่าน กษัตริย์หมุนเวียนหนึ่งพระองค์', vi: 'sultan, một quốc vương luân phiên', id: 'sultan, satu raja bergilir' } },
];

// The accessible label for the home stat group, localized.
export const HERO_STATS_LABEL: Record<Locale, string> = {
  ms: 'Malaysia sepintas lalu', en: 'Malaysia at a glance', zh: '马来西亚概览', ta: 'மலேசியா ஒரு பார்வையில்', ja: 'マレーシアの概要', ko: '말레이시아 개요', th: 'มาเลเซียโดยสังเขป', vi: 'Malaysia trong nháy mắt', id: 'Malaysia sekilas',
};

// The accessible label for the knowledge-base default group, localized.
export const KB_GLANCE_LABEL: Record<Locale, string> = {
  ms: 'NegaraKu.md sepintas lalu', en: 'NegaraKu.md at a glance', zh: 'NegaraKu.md 概览', ta: 'NegaraKu.md ஒரு பார்வையில்', ja: 'NegaraKu.md の概要', ko: 'NegaraKu.md 개요', th: 'NegaraKu.md โดยสังเขป', vi: 'NegaraKu.md trong nháy mắt', id: 'NegaraKu.md sekilas',
};

const pick = (m: Record<Locale, string>, locale: Locale) => m[locale] ?? m.en;

// "NegaraKu.md at a glance" — the default cards for a figureless page. The article
// count is passed in (the caller awaits it) so this stays synchronous; the rest are
// static project facts (languages / categories / pillars).
export function kbGlanceStats(locale: Locale, articleCount: number) {
  return [
    { icon: '📚', value: articleCount.toLocaleString(), label: pick({ ms: 'artikel', en: 'articles', zh: '篇文章', ta: 'கட்டுரைகள்', ja: '記事', ko: '개 기사', th: 'บทความ', vi: 'bài viết', id: 'artikel' }, locale) },
    { icon: '🌐', value: String(LOCALES.length), label: pick({ ms: 'bahasa', en: 'languages', zh: '种语言', ta: 'மொழிகள்', ja: '言語', ko: '개 언어', th: 'ภาษา', vi: 'ngôn ngữ', id: 'bahasa' }, locale) },
    { icon: '🗂️', value: String(launchCategories().length), label: pick({ ms: 'kategori', en: 'categories', zh: '个分类', ta: 'வகைகள்', ja: 'カテゴリー', ko: '개 카테고리', th: 'หมวดหมู่', vi: 'danh mục', id: 'kategori' }, locale) },
    { icon: '🏛️', value: String(PILLARS.length), label: pick({ ms: 'tonggak', en: 'pillars', zh: '大支柱', ta: 'தூண்கள்', ja: '柱', ko: '개 기둥', th: 'เสาหลัก', vi: 'trụ cột', id: 'pilar' }, locale) },
  ];
}
