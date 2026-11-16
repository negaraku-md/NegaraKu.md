import type { Locale } from './categories';

// Drink-family facet + intro for the `drinks` TOPIC page (TopicView). The 23
// discrete "what-is-this-drink" articles (teh tarik, cincau, air mata kucing …)
// are ordinary food-lifestyle articles with subcategory "drinks"; this groups
// them by family so a reader can narrow "every Malaysian drink" to the kind they
// want. The family map is a curated CODE constant (freshness-neutral — it touches
// no article frontmatter and is not a translated field); a new drink joins a
// family by one line here. Mirrors michelin.ts.

// slug -> family. Five defensible families covering all 23 discrete drinks.
const FAMILY: Record<string, string> = {
  // Coffee & tea — kopitiam/mamak coffee- and tea-based staples.
  'teh-tarik': 'tea', 'kopi-cham': 'tea', 'teh-halia': 'tea', 'three-layer-tea': 'tea', 'teh-o-ais-limau': 'tea',
  // Herbal coolers — liang cha / "cooling" drinks (grass jelly, longan, barley…).
  cincau: 'cooler', 'air-mata-kucing': 'cooler', barley: 'cooler', 'air-kekwa': 'cooler', 'asam-boi': 'cooler', 'michael-jackson': 'cooler',
  // Fresh juices — pressed fruit / natural.
  'air-kelapa': 'juice', 'nutmeg-juice': 'juice', 'air-tebu': 'juice', soursop: 'juice', 'air-limau-ais': 'juice',
  // Milk, malt & sweet — malted, milky and syrup drinks.
  'milo-dinosaur': 'malt', horlicks: 'malt', 'sirap-bandung': 'malt', 'soya-bean': 'malt', lassi: 'malt',
  // Modern & branded.
  'bubble-tea': 'modern', sarsi: 'modern',
};

const ORDER = ['tea', 'cooler', 'juice', 'malt', 'modern'];

export interface DrinkFacet {
  key: string;
  label: string;
  options: { value: string; label: string }[];
}

export interface DrinksListProps {
  facets: DrinkFacet[];
  enrich: (a: { data: { slug: string } }) => Record<string, string>;
}

export function drinksListProps(locale: Locale): DrinksListProps {
  // prettier-ignore
  const L = (ms: string, en: string, zh: string, ta?: string, ja?: string, ko?: string, th?: string, vi?: string, id?: string, ar?: string, hi?: string, es?: string, fr?: string) => (locale === 'fr' ? (fr ?? en) : locale === 'es' ? (es ?? en) : locale === 'hi' ? (hi ?? en) : locale === 'ar' ? (ar ?? en) : locale === 'id' ? (id ?? en) : locale === 'vi' ? (vi ?? en) : locale === 'th' ? (th ?? en) : locale === 'ko' ? (ko ?? en) : locale === 'ja' ? (ja ?? en) : locale === 'ta' ? (ta ?? en) : locale === 'zh' ? zh : locale === 'en' ? en : ms);

  const famLabel: Record<string, string> = {
    tea: L('Kopi & teh', 'Coffee & tea', '咖啡与茶', 'காபி & தேநீர்', 'コーヒー・茶', '커피·차', 'กาแฟและชา', 'Cà phê & trà', 'Kopi & teh', 'القهوة والشاي', 'कॉफ़ी और चाय', 'Café y té', 'Café & thé'),
    cooler: L('Air penyejuk herba', 'Herbal coolers', '凉茶与清凉饮', 'மூலிகை குளிர்பானம்', 'ハーブ系クーラー', '허브 쿨러', 'เครื่องดื่มสมุนไพรดับร้อน', 'Nước mát thảo mộc', 'Minuman herbal penyejuk', 'مشروبات عشبية منعشة', 'हर्बल कूलर', 'Refrescos de hierbas', 'Boissons rafraîchissantes aux herbes'),
    juice: L('Jus segar', 'Fresh juices', '鲜榨果汁', 'புதிய சாறுகள்', 'フレッシュジュース', '생과일 주스', 'น้ำผลไม้สด', 'Nước ép tươi', 'Jus segar', 'عصائر طازجة', 'ताज़ा जूस', 'Zumos naturales', 'Jus frais'),
    malt: L('Susu, malt & manis', 'Milk, malt & sweet', '奶类·麦芽·甜饮', 'பால், மால்ட் & இனிப்பு', 'ミルク・麦芽・甘い系', '우유·맥아·단맛', 'นม มอลต์ และหวาน', 'Sữa, mạch nha & ngọt', 'Susu, malt & manis', 'الحليب والشعير والحلو', 'दूध, माल्ट और मीठा', 'Leche, malta y dulce', 'Lait, malt & sucré'),
    modern: L('Moden & berjenama', 'Modern & branded', '现代与品牌饮品', 'நவீன & பிராண்ட்', 'モダン・ブランド系', '모던·브랜드', 'สมัยใหม่และมีแบรนด์', 'Hiện đại & có thương hiệu', 'Modern & bermerek', 'حديثة وذات علامة تجارية', 'आधुनिक और ब्रांडेड', 'Modernas y de marca', 'Modernes & de marque'),
  };

  const present = ORDER.filter((f) => Object.values(FAMILY).includes(f));
  const facets: DrinkFacet[] = [
    {
      key: 'dfam',
      label: L('Jenis', 'Type', '类型', 'வகை', '種類', '종류', 'ประเภท', 'Loại', 'Jenis', 'النوع', 'प्रकार', 'Tipo', 'Type'),
      options: present.map((f) => ({ value: f, label: famLabel[f] })),
    },
  ];

  const enrich = (a: { data: { slug: string } }): Record<string, string> => {
    const f = FAMILY[a.data.slug];
    return f ? { dfam: f } : {};
  };

  return { facets, enrich };
}

// "How to order" explainer link (the interactive Kopi lingo decoder) + a short
// orienting note, shown above the drinks grid. The decoder is the companion
// 喝 asset and is NOT itself in this list, so it adds reach rather than repeating.
export function drinksIntro(locale: Locale): { explainerLabel: string; note: string } {
  // prettier-ignore
  const L = (ms: string, en: string, zh: string, ta?: string, ja?: string, ko?: string, th?: string, vi?: string, id?: string, ar?: string, hi?: string, es?: string, fr?: string) => (locale === 'fr' ? (fr ?? en) : locale === 'es' ? (es ?? en) : locale === 'hi' ? (hi ?? en) : locale === 'ar' ? (ar ?? en) : locale === 'id' ? (id ?? en) : locale === 'vi' ? (vi ?? en) : locale === 'th' ? (th ?? en) : locale === 'ko' ? (ko ?? en) : locale === 'ja' ? (ja ?? en) : locale === 'ta' ? (ta ?? en) : locale === 'zh' ? zh : locale === 'en' ? en : ms);
  return {
    explainerLabel: L('Cuba Penyahkod Istilah Kopi', 'Try the Kopi lingo decoder', '试试咖啡暗语解码器', 'கோபி சொல் டிகோடரை முயற்சிக்கவும்', 'コピ用語デコーダーを試す', '코피 용어 디코더 사용해 보기', 'ลองตัวถอดรหัสศัพท์กาแฟ', 'Thử bộ giải mã thuật ngữ cà phê', 'Coba Pengurai Istilah Kopi', 'جرّب مُفكّك مصطلحات القهوة', 'कोपी शब्दावली डिकोडर आज़माएँ', 'Prueba el descodificador de jerga del café', 'Essayez le décodeur du jargon du café'),
    note: L(
      'Dari kopi dan teh kopitiam hingga air penyejuk herba, jus segar dan minuman moden — apa setiap minuman itu dan cara memesannya. Tapis mengikut jenis.',
      'From kopitiam coffee and tea to herbal coolers, fresh juices and modern favourites — what each drink is and how to order it. Filter by type.',
      '从茶室的咖啡与茶,到凉茶、鲜榨果汁与现代饮品——每种饮品是什么、怎么点。按类型筛选。',
      'கொப்பிடியம் காபி மற்றும் தேநீர் முதல் மூலிகை குளிர்பானம், புதிய சாறுகள் மற்றும் நவீன பானங்கள் வரை — ஒவ்வொரு பானமும் என்ன, எப்படி ஆர்டர் செய்வது. வகை வாரியாக வடிகட்டுங்கள்.',
      'コピティアムのコーヒーや茶から、ハーブ系クーラー、フレッシュジュース、モダンな一杯まで——それぞれが何で、どう注文するか。種類で絞り込めます。',
      '코피티암의 커피와 차부터 허브 쿨러, 생과일 주스, 모던한 음료까지 — 각 음료가 무엇이고 어떻게 주문하는지. 종류별로 필터링하세요.',
      'ตั้งแต่กาแฟและชาแบบร้านกาแฟ ไปจนถึงเครื่องดื่มสมุนไพรดับร้อน น้ำผลไม้สด และเครื่องดื่มสมัยใหม่ — แต่ละอย่างคืออะไรและสั่งอย่างไร กรองตามประเภท',
      'Từ cà phê và trà kopitiam đến nước mát thảo mộc, nước ép tươi và thức uống hiện đại — mỗi loại là gì và gọi thế nào. Lọc theo loại.',
      'Dari kopi dan teh kopitiam hingga minuman herbal penyejuk, jus segar, dan minuman modern — apa setiap minuman dan cara memesannya. Saring menurut jenis.',
      'من قهوة وشاي المقاهي إلى المشروبات العشبية المنعشة والعصائر الطازجة والمشروبات الحديثة — ما هو كل مشروب وكيف تطلبه. صفِّ حسب النوع.',
      'कोपितियाम की कॉफ़ी और चाय से लेकर हर्बल कूलर, ताज़ा जूस और आधुनिक पेय तक — हर पेय क्या है और उसे कैसे ऑर्डर करें। प्रकार के अनुसार फ़िल्टर करें।',
      'Del café y el té de kopitiam a los refrescos de hierbas, los zumos naturales y las bebidas modernas: qué es cada una y cómo pedirla. Filtra por tipo.',
      'Du café et du thé de kopitiam aux boissons rafraîchissantes aux herbes, jus frais et boissons modernes — ce qu’est chaque boisson et comment la commander. Filtrez par type.',
    ),
  };
}
