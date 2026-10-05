import type { Locale } from './categories';

// Shared hero-stat builders. Every page that shows its own PageHero stats uses
// these so the icon + localized caption for each concept lives in ONE place
// (no more copy-pasting the same nine-language label array across ~14 views) and
// every card follows the same standard: an icon + a number (PageHero formats the
// number with thousands separators). Pass the count; the locale picks the label.

type Label = Record<Locale, string>;
const pick = (m: Label, locale: Locale) => m[locale] ?? m.en;

const LABELS = {
  pillars: { ms: 'tonggak', en: 'pillars', zh: '支柱', ta: 'தூண்கள்', ja: '柱', ko: '기둥', th: 'เสาหลัก', vi: 'trụ cột', id: 'pilar' },
  categories: { ms: 'kategori', en: 'categories', zh: '分类', ta: 'வகைகள்', ja: 'カテゴリー', ko: '카테고리', th: 'หมวดหมู่', vi: 'danh mục', id: 'kategori' },
  subcategories: { ms: 'subkategori', en: 'subcategories', zh: '子分类', ta: 'துணை வகைகள்', ja: 'サブカテゴリー', ko: '하위 카테고리', th: 'หมวดหมู่ย่อย', vi: 'danh mục con', id: 'subkategori' },
  topics: { ms: 'topik', en: 'topics', zh: '主题', ta: 'தலைப்புகள்', ja: 'トピック', ko: '주제', th: 'หัวข้อ', vi: 'chủ đề', id: 'topik' },
  updates: { ms: 'kemas kini', en: 'updates', zh: '次更新', ta: 'புதுப்பிப்புகள்', ja: '更新', ko: '업데이트', th: 'การอัปเดต', vi: 'cập nhật', id: 'pembaruan' },
  types: { ms: 'jenis', en: 'types', zh: '类型', ta: 'வகைகள்', ja: '種類', ko: '유형', th: 'ประเภท', vi: 'loại', id: 'jenis' },
  content: { ms: 'kandungan', en: 'content', zh: '内容', ta: 'உள்ளடக்கம்', ja: 'コンテンツ', ko: '콘텐츠', th: 'เนื้อหา', vi: 'nội dung', id: 'konten' },
  people: { ms: 'orang', en: 'people', zh: '人', ta: 'பேர்', ja: '人', ko: '명', th: 'คน', vi: 'người', id: 'orang' },
  reviews: { ms: 'semakan', en: 'reviews', zh: '审阅', ta: 'மறுஆய்வுகள்', ja: 'レビュー', ko: '검토', th: 'การตรวจทาน', vi: 'lượt đánh giá', id: 'tinjauan' },
  aiDrafted: { ms: 'draf AI', en: 'AI-drafted', zh: 'AI 起草', ta: 'AI வரைவு', ja: 'AI 下書き', ko: 'AI 초안', th: 'ร่างโดย AI', vi: 'bản nháp do AI', id: 'draf AI' },
  nodes: { ms: 'nod', en: 'nodes', zh: '节点', ta: 'கணுக்கள்', ja: 'ノード', ko: '노드', th: 'โหนด', vi: 'nút', id: 'simpul' },
  links: { ms: 'pautan', en: 'links', zh: '连接', ta: 'இணைப்புகள்', ja: 'リンク', ko: '링크', th: 'ลิงก์', vi: 'liên kết', id: 'tautan' },
} satisfies Record<string, Label>;

const ICONS: Record<keyof typeof LABELS, string> = {
  pillars: '🏛️', categories: '🗂️', subcategories: '🧩', topics: '📄',
  updates: '🔄', types: '🏷️', content: '📝',
  people: '👥', reviews: '✅', aiDrafted: '🤖',
  nodes: '🔵', links: '🔗',
};

export interface PageStat { icon: string; value: string | number; label: string; }

// stat.pillars(n, locale) → { icon, value: n, label } ; one builder per concept.
export const stat = Object.fromEntries(
  (Object.keys(LABELS) as (keyof typeof LABELS)[]).map((k) => [
    k,
    (value: number, locale: Locale): PageStat => ({ icon: ICONS[k], value, label: pick(LABELS[k], locale) }),
  ]),
) as Record<keyof typeof LABELS, (value: number, locale: Locale) => PageStat>;
