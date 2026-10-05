import type { Locale } from './categories';

// "Malaysia at a glance" — the hero stat cards shown on the home page and, as the
// default, on every non-article page's PageHero (so no page's hero is bare).
// Distinctive facts, not factbook figures. Each is verified: Peninsular + Borneo
// split by the South China Sea; Taman Negara ~130M yrs (older than the Amazon);
// one of Conservation International's 17 megadiverse nations; and the world's only
// rotating elective monarchy — 9 hereditary rulers, a new Agong every 5 years.
// Single source of truth: edit here and both HomeView and PageHero update.

export interface HeroStat {
  icon: string;
  value: string;
  unit: Record<Locale, string>;
}

export const HERO_STATS: HeroStat[] = [
  { icon: '🗺️', value: '2', unit: { ms: 'daratan, satu negara', en: 'lands, one nation', zh: '两地一国', ta: 'நிலப்பகுதிகள், ஒரே நாடு', ja: '国土、一つの国', ko: '개 국토, 하나의 나라', th: 'ผืนแผ่นดิน หนึ่งประเทศ', vi: 'vùng đất, một quốc gia', id: 'daratan, satu negara' } },
  { icon: '🌳', value: '130M', unit: { ms: 'tahun usia hutan hujan', en: 'yr-old rainforest', zh: '年古老雨林', ta: 'ஆண்டு பழமையான மழைக்காடு', ja: '年前からの熱帯雨林', ko: '년 된 열대우림', th: 'ปีของป่าฝนดึกดำบรรพ์', vi: 'năm tuổi rừng mưa nhiệt đới', id: 'tahun usia hutan hujan' } },
  { icon: '🐅', value: '1 / 17', unit: { ms: 'negara megadiversiti', en: 'megadiverse nations', zh: '超级生物多样国', ta: 'உயிர்ப் பன்முக நாடுகள்', ja: '生物多様性大国', ko: '생물다양성 대국', th: 'ชาติที่มีความหลากหลายทางชีวภาพสูงยิ่ง', vi: 'quốc gia siêu đa dạng sinh học', id: 'negara megadiversitas' } },
  { icon: '👑', value: '9 → 1', unit: { ms: 'sultan, satu raja bergilir', en: 'sultans, one rotating king', zh: '位苏丹轮任元首', ta: 'சுல்தான்கள், ஒரே சுழல்முறை மன்னர்', ja: 'スルタン、輪番の国王', ko: '술탄, 윤번제 국왕', th: 'สุลต่าน กษัตริย์หมุนเวียนหนึ่งพระองค์', vi: 'sultan, một quốc vương luân phiên', id: 'sultan, satu raja bergilir' } },
];

// The accessible label for the stat group, localized.
export const HERO_STATS_LABEL: Record<Locale, string> = {
  ms: 'Malaysia sepintas lalu', en: 'Malaysia at a glance', zh: '马来西亚概览', ta: 'மலேசியா ஒரு பார்வையில்', ja: 'マレーシアの概要', ko: '말레이시아 개요', th: 'มาเลเซียโดยสังเขป', vi: 'Malaysia trong nháy mắt', id: 'Malaysia sekilas',
};

// The at-a-glance cards shaped for PageHero's `stats` prop (value + label + icon).
export function glanceStats(locale: Locale) {
  return HERO_STATS.map((s) => ({ value: s.value, label: s.unit[locale] ?? s.unit.en, icon: s.icon }));
}
