import type { Locale } from './categories';
import { STATES } from './holidays/data';
import michelin from '@/data/collections/michelin.json';

// MICHELIN Guide facet + enrichment logic, shared by the michelin-guide TOPIC
// page (TopicView). The 70 restaurants are ordinary food-lifestyle articles with
// subcategory "michelin-guide"; their collection facts (award / state / price /
// edition) live in src/data/collections/michelin.json and are projected onto the
// ArticleList rows here so the topic page can filter by them.

type Dist = 'three-star' | 'two-star' | 'star' | 'bib-gourmand' | 'selected';
interface Row {
  slug: string;
  distinction: Dist;
  greenStar: boolean;
  price: string | null;
  state: string | null;
  city: string | null;
  year: number;
  /** Every edition year this restaurant appeared in (ascending). */
  editions?: number[];
  /** Year -> distinction held that edition. */
  history?: Record<string, Dist>;
  /** Edition years in which it held a Green Star. */
  greenStarYears?: number[];
}

export interface MichelinFacet {
  key: string;
  label: string;
  options: { value: string; label: string }[];
}

export interface MichelinListProps {
  facets: MichelinFacet[];
  enrich: (a: { data: { slug: string } }) => Record<string, string>;
}

export function michelinListProps(locale: Locale): MichelinListProps {
  // prettier-ignore
  const L = (ms: string, en: string, zh: string, ta?: string, ja?: string, ko?: string, th?: string, vi?: string, id?: string, ar?: string, hi?: string, es?: string, fr?: string) => (locale === 'fr' ? (fr ?? en) : locale === 'es' ? (es ?? en) : locale === 'hi' ? (hi ?? en) : locale === 'ar' ? (ar ?? en) : locale === 'id' ? (id ?? en) : locale === 'vi' ? (vi ?? en) : locale === 'th' ? (th ?? en) : locale === 'ko' ? (ko ?? en) : locale === 'ja' ? (ja ?? en) : locale === 'ta' ? (ta ?? en) : locale === 'zh' ? zh : locale === 'en' ? en : ms);

  const rows = michelin.restaurants as Row[];
  const GROUP = (d: Dist): 'stars' | 'bib' | 'selected' => (d === 'bib-gourmand' ? 'bib' : d === 'selected' ? 'selected' : 'stars');
  const lblSelected = L('Terpilih', 'Selected', '推荐', 'தேர்ந்தெடுக்கப்பட்டது', 'セレクテッド', '셀렉티드', 'คัดสรร', 'Selected', 'Terpilih', 'مختارات', 'चयनित', 'Seleccionado', 'Sélectionné');
  function badgeLabel(d: Dist): string {
    if (d === 'three-star') return '★★★ MICHELIN';
    if (d === 'two-star') return '★★ MICHELIN';
    if (d === 'star') return '★ MICHELIN';
    if (d === 'bib-gourmand') return 'Bib Gourmand';
    return lblSelected;
  }
  const stateName = (id: string | null): string => {
    if (!id) return '';
    const s = STATES.find((x) => x.id === id);
    return s ? ((s.name as Record<string, string>)[locale] ?? s.name.en) : id;
  };

  const mBySlug = Object.fromEntries(rows.map((r) => [r.slug, r]));

  const lblAward = L('Anugerah', 'Award', '奖项', 'விருது', '受賞', '상', 'รางวัล', 'Giải thưởng', 'Penghargaan', 'الجائزة', 'पुरस्कार', 'Distinción', 'Distinction');
  const lblState = L('Negeri', 'State', '州属', 'மாநிலம்', '州', '주', 'รัฐ', 'Bang', 'Negara bagian', 'الولاية', 'राज्य', 'Estado', 'État');
  const lblPrice = L('Harga', 'Price', '价格', 'விலை', '価格', '가격', 'ราคา', 'Giá', 'Harga', 'السعر', 'कीमत', 'Precio', 'Prix');
  const lblYear = L('Edisi', 'Edition', '版本', 'பதிப்பு', '版', '에디션', 'ฉบับ', 'Phiên bản', 'Edisi', 'الإصدار', 'संस्करण', 'Edición', 'Édition');
  const lblStars = L('Bintang', 'Stars', '星级', 'நட்சத்திரம்', '星', '스타', 'ดาว', 'Sao', 'Bintang', 'النجوم', 'स्टार', 'Estrellas', 'Étoiles');

  // Facet options present in the data (so no empty filters).
  const groupsPresent = [...new Set(rows.map((r) => GROUP(r.distinction)))];
  const statesPresent = [...new Set(rows.map((r) => r.state).filter(Boolean))] as string[];
  const pricesPresent = [...new Set(rows.map((r) => r.price).filter(Boolean))].sort((a, b) => (a as string).length - (b as string).length) as string[];
  const yearsPresent = [...new Set(rows.flatMap((r) => (r.editions?.length ? r.editions : [r.year])))].sort((a, b) => b - a);

  const awardOpt = [
    { value: 'stars', label: `★ ${lblStars}` },
    { value: 'bib', label: 'Bib Gourmand' },
    { value: 'selected', label: lblSelected },
  ].filter((o) => groupsPresent.includes(o.value as 'stars' | 'bib' | 'selected'));

  const facets: MichelinFacet[] = [
    { key: 'award', label: lblAward, options: awardOpt },
    ...(statesPresent.length > 1 ? [{ key: 'mstate', label: lblState, options: statesPresent.map((s) => ({ value: s, label: stateName(s) })) }] : []),
    ...(pricesPresent.length > 1 ? [{ key: 'mprice', label: lblPrice, options: pricesPresent.map((p) => ({ value: p, label: p })) }] : []),
    { key: 'medition', label: lblYear, options: yearsPresent.map((y) => ({ value: String(y), label: String(y) })) },
  ];

  const enrich = (a: { data: { slug: string } }): Record<string, string> => {
    const m = mBySlug[a.data.slug];
    if (!m) return {};
    const editions = m.editions?.length ? m.editions : [m.year];
    const hist = m.history ?? { [String(m.year)]: m.distinction };
    // Tenure: how long the restaurant has CONTINUOUSLY held its current distinction
    // (walk editions back from the latest while the distinction is unchanged). A
    // promotion or a debut both surface as "new this edition" — never overstated.
    const sortedY = [...editions].sort((x, y) => x - y);
    let since = m.year;
    for (let i = sortedY.length - 1; i >= 0; i--) {
      if (hist[String(sortedY[i])] === m.distinction) since = sortedY[i];
      else break;
    }
    const msince =
      since < m.year
        ? L(`Sejak ${since}`, `Since ${since}`, `${since}年起入选`, `${since} முதல்`, `${since}年から`, `${since}년부터`, `ตั้งแต่ ${since}`, `Từ ${since}`, `Sejak ${since}`, `منذ ${since}`, `${since} से`, `Desde ${since}`, `Depuis ${since}`)
        : L('Baharu edisi ini', 'New this edition', '本届新入选', 'இந்தப் பதிப்பில் புதியது', '今回の版で新規', '이번 에디션 신규', 'ใหม่ในฉบับนี้', 'Mới trong ấn bản này', 'Baru di edisi ini', 'جديد في هذا الإصدار', 'इस संस्करण में नया', 'Nuevo en esta edición', 'Nouveau dans cette édition');
    return {
      award: GROUP(m.distinction),
      mstate: m.state ?? '',
      mprice: m.price ?? '',
      medition: editions.join(' '),
      badge: badgeLabel(m.distinction) + (m.greenStar ? ' 🌱' : ''),
      msince,
    };
  };

  return { facets, enrich };
}

// Per-restaurant edition trajectory for the restaurant's OWN article page (the
// card only shows a one-line tenure; this shows the full year-by-year record).
// Returns null unless the restaurant appears in ≥2 editions — a single-edition
// debut has no "track record" to tell. Reads the same build-side michelin.json,
// so it is freshness-neutral (touches no frontmatter / translation hash).
export interface MichelinStep {
  year: number;
  dist: string;
  greenStar: boolean;
  current: boolean;
}
export interface MichelinTrajectory {
  heading: string;
  steps: MichelinStep[];
  note: string;
}

export function michelinTrajectory(slug: string, locale: Locale): MichelinTrajectory | null {
  // prettier-ignore
  const L = (ms: string, en: string, zh: string, ta?: string, ja?: string, ko?: string, th?: string, vi?: string, id?: string, ar?: string, hi?: string, es?: string, fr?: string) => (locale === 'fr' ? (fr ?? en) : locale === 'es' ? (es ?? en) : locale === 'hi' ? (hi ?? en) : locale === 'ar' ? (ar ?? en) : locale === 'id' ? (id ?? en) : locale === 'vi' ? (vi ?? en) : locale === 'th' ? (th ?? en) : locale === 'ko' ? (ko ?? en) : locale === 'ja' ? (ja ?? en) : locale === 'ta' ? (ta ?? en) : locale === 'zh' ? zh : locale === 'en' ? en : ms);
  const rows = michelin.restaurants as Row[];
  const m = rows.find((r) => r.slug === slug);
  if (!m) return null;
  const editions = m.editions?.length ? m.editions : [m.year];
  if (editions.length < 2) return null; // a debut has no track record to show
  const hist = m.history ?? { [String(m.year)]: m.distinction };
  const gsy = new Set(m.greenStarYears ?? []);
  const lblSelected = L('Terpilih', 'Selected', '推荐', 'தேர்ந்தெடுக்கப்பட்டது', 'セレクテッド', '셀렉티드', 'คัดสรร', 'Selected', 'Terpilih', 'مختارات', 'चयनित', 'Seleccionado', 'Sélectionné');
  const distShort = (d: Dist): string => {
    if (d === 'three-star') return '★★★';
    if (d === 'two-star') return '★★';
    if (d === 'star') return '★';
    if (d === 'bib-gourmand') return 'Bib Gourmand';
    return lblSelected;
  };
  const steps: MichelinStep[] = [...editions]
    .sort((a, b) => a - b)
    .map((y) => ({
      year: y,
      dist: distShort(hist[String(y)] ?? m.distinction),
      greenStar: gsy.has(y),
      current: y === m.year,
    }));
  return {
    heading: L('Rekod MICHELIN', 'MICHELIN track record', '米其林历年入选', 'MICHELIN பதிவு', 'ミシュラン受賞歴', '미쉐린 선정 이력', 'ประวัติมิชลิน', 'Thành tích MICHELIN', 'Rekam jejak MICHELIN', 'سجل ميشلان', 'मिशेलिन रिकॉर्ड', 'Trayectoria MICHELIN', 'Palmarès MICHELIN'),
    steps,
    note: L(
      'Status setiap edisi; sahkan yang terkini di Panduan MICHELIN rasmi.',
      'Status per edition; confirm the current one on the official MICHELIN Guide.',
      '各版本状态；最新状态请以米其林官方指南为准。',
      'ஒவ்வொரு பதிப்பின் நிலை; தற்போதையதை அதிகாரப்பூர்வ MICHELIN வழிகாட்டியில் உறுதிப்படுத்தவும்.',
      '各版の状況です。最新は公式ミシュランガイドでご確認ください。',
      '에디션별 상태입니다. 최신 상태는 공식 미쉐린 가이드에서 확인하세요.',
      'สถานะแต่ละฉบับ โปรดยืนยันล่าสุดในมิชลินไกด์ทางการ',
      'Trạng thái từng ấn bản; hãy xác nhận bản mới nhất trên Cẩm nang MICHELIN chính thức.',
      'Status per edisi; konfirmasikan yang terkini di Panduan MICHELIN resmi.',
      'الحالة لكل إصدار؛ تأكد من الأحدث في دليل ميشلان الرسمي.',
      'प्रत्येक संस्करण की स्थिति; नवीनतम की पुष्टि आधिकारिक मिशेलिन गाइड पर करें।',
      'Estado por edición; confirma el actual en la Guía MICHELIN oficial.',
      'Statut par édition ; vérifiez l’actuel sur le Guide MICHELIN officiel.',
    ),
  };
}

// Annual-revision caveat + the "what is the MICHELIN Guide?" explainer link, shown
// on the michelin-guide topic page (an accuracy safeguard — the selection changes
// yearly, so readers must confirm current status before visiting).
export function michelinIntro(locale: Locale): { explainerLabel: string; note: string } {
  // prettier-ignore
  const L = (ms: string, en: string, zh: string, ta?: string, ja?: string, ko?: string, th?: string, vi?: string, id?: string, ar?: string, hi?: string, es?: string, fr?: string) => (locale === 'fr' ? (fr ?? en) : locale === 'es' ? (es ?? en) : locale === 'hi' ? (hi ?? en) : locale === 'ar' ? (ar ?? en) : locale === 'id' ? (id ?? en) : locale === 'vi' ? (vi ?? en) : locale === 'th' ? (th ?? en) : locale === 'ko' ? (ko ?? en) : locale === 'ja' ? (ja ?? en) : locale === 'ta' ? (ta ?? en) : locale === 'zh' ? zh : locale === 'en' ? en : ms);
  return {
    explainerLabel: L('Apa itu Panduan MICHELIN?', 'What is the MICHELIN Guide?', '什么是米其林指南？', 'MICHELIN வழிகாட்டி என்றால் என்ன?', 'ミシュランガイドとは？', '미쉐린 가이드란?', 'มิชลินไกด์คืออะไร?', 'Cẩm nang MICHELIN là gì?', 'Apa itu Panduan MICHELIN?', 'ما هو دليل ميشلان؟', 'मिशेलिन गाइड क्या है?', '¿Qué es la Guía MICHELIN?', 'Qu’est-ce que le Guide MICHELIN ?'),
    note: L(
      'Pilihan MICHELIN disemak setiap tahun. Sahkan status semasa sesebuah restoran di Panduan MICHELIN rasmi sebelum melawat.',
      'The MICHELIN selection is revised each year. Confirm a restaurant’s current status on the official MICHELIN Guide before visiting.',
      '米其林榜单每年更新。前往前请在米其林官方指南确认餐厅的最新状态。',
      'MICHELIN தேர்வு ஒவ்வொரு ஆண்டும் திருத்தப்படும். பார்வையிடும் முன் அதிகாரப்பூர்வ MICHELIN வழிகாட்டியில் தற்போதைய நிலையை உறுதிப்படுத்தவும்.',
      'ミシュランの選定は毎年改訂されます。訪問前に公式ミシュランガイドで最新の状態をご確認ください。',
      '미쉐린 선정은 매년 개정됩니다. 방문 전 공식 미쉐린 가이드에서 최신 상태를 확인하세요.',
      'การคัดเลือกของมิชลินมีการปรับปรุงทุกปี โปรดยืนยันสถานะล่าสุดในมิชลินไกด์ทางการก่อนไป',
      'Tuyển chọn MICHELIN được sửa đổi hằng năm. Hãy xác nhận trạng thái hiện tại trên Cẩm nang MICHELIN chính thức trước khi đến.',
      'Pilihan MICHELIN direvisi setiap tahun. Konfirmasikan status terkini sebuah restoran di Panduan MICHELIN resmi sebelum berkunjung.',
      'يُراجَع اختيار ميشلان كل عام. تأكد من الحالة الحالية للمطعم في دليل ميشلان الرسمي قبل الزيارة.',
      'मिशेलिन चयन हर साल संशोधित होता है। जाने से पहले आधिकारिक मिशेलिन गाइड पर रेस्तरां की मौजूदा स्थिति की पुष्टि करें।',
      'La selección MICHELIN se revisa cada año. Confirma el estado actual de un restaurante en la Guía MICHELIN oficial antes de visitarlo.',
      'La sélection MICHELIN est révisée chaque année. Vérifiez le statut actuel d’un restaurant sur le Guide MICHELIN officiel avant de vous y rendre.',
    ),
  };
}
