// Image provenance labels for the food-article standard (docs/FOOD-ARTICLE-STANDARD.md).
// The 示意图 / 店家供图 / 编辑实拍 label is GENERATED from (kind, origin) so the
// distinction renders identically across all 13 languages — authors never type it.
import type { Locale } from './categories';

type Kind = 'actual' | 'representative' | undefined;
type Origin = 'editorial' | 'owner' | 'third-party' | undefined;

const pick = (
  locale: Locale,
  m: string, en: string, zh: string, ta: string, ja: string, ko: string,
  th: string, vi: string, id: string, ar: string, hi: string, es: string, fr: string,
): string =>
  ({ ms: m, en, zh, ta, ja, ko, th, vi, id, ar, hi, es, fr } as Record<Locale, string>)[locale] ?? m;

/** The generated provenance label for an image, or null when none applies
 *  (an `actual` third-party photo shows only its credit). */
export function imageLabel(kind: Kind, origin: Origin, locale: Locale): string | null {
  if (kind === 'representative')
    return pick(locale,
      'Imej perwakilan', 'Representative image', '示意图',
      'பிரதிநிதித்துவப் படம்', '代表的な画像', '대표 이미지', 'ภาพตัวแทน',
      'Hình ảnh đại diện', 'Gambar representatif', 'صورة تمثيلية',
      'प्रतिनिधि छवि', 'Imagen representativa', 'Image représentative');
  if (kind === 'actual' && origin === 'owner')
    return pick(locale,
      'Foto pihak kedai', 'Photo from the venue', '店家供图',
      'கடையின் படம்', '店舗提供', '업소 제공 사진', 'ภาพจากร้าน',
      'Ảnh do quán cung cấp', 'Foto dari pihak kedai', 'صورة من المطعم',
      'प्रतिष्ठान द्वारा प्रदत्त', 'Foto del establecimiento', "Photo de l'établissement");
  if (kind === 'actual' && origin === 'editorial')
    return pick(locale,
      'Foto NegaraKu.md', 'NegaraKu.md photo', '编辑实拍',
      'NegaraKu.md படம்', 'NegaraKu.md 撮影', 'NegaraKu.md 촬영', 'ถ่ายโดย NegaraKu.md',
      'Ảnh của NegaraKu.md', 'Foto NegaraKu.md', 'صورة NegaraKu.md',
      'NegaraKu.md द्वारा', 'Foto de NegaraKu.md', 'Photo NegaraKu.md');
  return null; // actual + third-party → credit line only
}

/** True when a visible label must travel with the image on every surface it appears
 *  (listing cards, hero figure) — i.e. it's representative and could be mistaken for
 *  the article's exact subject. */
export function needsRepresentativeBadge(kind: Kind): boolean {
  return kind === 'representative';
}

/** Short badge text for a card overlay (same as the representative label). */
export function representativeBadge(locale: Locale): string {
  return imageLabel('representative', undefined, locale) as string;
}

/** The attributed-source label for a review entry. `editorial-visit` earns 编辑实访;
 *  everything else shows who observed it. */
export function reviewSourceLabel(
  source: 'michelin' | 'editorial-visit' | 'named-critic' | 'owner' | 'public',
  by: string | undefined,
  locale: Locale,
): string {
  if (source === 'editorial-visit')
    return pick(locale,
      'Lawatan editor', 'Editorial visit', '编辑实访',
      'ஆசிரியர் வருகை', '編集部訪問', '편집부 방문', 'ทีมงานไปชิมเอง',
      'Biên tập viên đến tận nơi', 'Kunjungan editorial', 'زيارة تحريرية',
      'संपादकीय दौरा', 'Visita editorial', 'Visite éditoriale');
  if (by) return by;
  const fallback: Record<string, [string, string, string]> = {
    michelin: ['Panduan MICHELIN', 'MICHELIN Guide', '米其林指南'],
    'named-critic': ['Pengkritik', 'Named critic', '具名食评'],
    owner: ['Pihak kedai', 'The venue', '店家'],
    public: ['Ulasan awam', 'Public reviews', '公众评价'],
  };
  const f = fallback[source] ?? fallback.public;
  return locale === 'zh' ? f[2] : locale === 'en' ? f[1] : f[0];
}
