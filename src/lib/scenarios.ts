// scenarios.ts — the 吃喝玩乐 ENTRY LAYER as scenario skins.
//
// Each scenario is a lifestyle SCENE (a kopitiam morning, Thaipusam, a hawker
// centre, Chinese New Year) that acts as an emotional doorway INTO NegaraKu's
// cited knowledge — hook→depth. A scene is just an ordered list of {cat, slug}
// pointers into ALREADY-PUBLISHED articles: zero new content, zero freshness
// debt, no 攻略/推荐/排名, transaction handed OUT. Rendered with GuidedPath
// (variant 'scenario'). This is explicitly NOT a pillar and NOT a destination —
// it is surfaced as a band on discovery/hub pages. See
// docs/plans/chi-he-wan-le-study-2026-11.md.
//
// Only the scene TITLE is localised here (13 langs); every step's title/summary
// comes from already-localised article data. Slugs are language-neutral — never
// translate a slug. To add a scene, append one entry pointing at existing masters.

import type { Locale } from './categories';
import type { GuidedStep } from './livingPath';

export interface Scenario {
  key: string;
  icon: string;
  title: Record<Locale, string>;
  steps: GuidedStep[];
  /** Category-hub pages this scene is surfaced on as an "Experience" rail.
   *  A scene appears on a hub only where its steps genuinely funnel into that
   *  category's content, so hook→depth stays honest (no off-topic scenes).
   *  Category ids (e.g. 'food-lifestyle', 'arts-culture', 'tourism'). */
  hubs: string[];
  /** Optional outbound "体验 · Experience" callout after the steps. Internal
   *  (e.g. a tool) or external (an affiliate booking link). `href` is
   *  locale-agnostic for internal; a full URL for external. */
  experience?: {
    label: Record<Locale, string>;
    href: string;
    external?: boolean;
  };
}

/** Scenes to surface as the "体验 · Experience" rail on a given category hub. */
export function scenariosForHub(catId: string): Scenario[] {
  return SCENARIOS.filter((s) => s.hubs.includes(catId));
}

export const SCENARIOS: Scenario[] = [
  {
    key: 'kopitiam',
    icon: '☕',
    title: {
      ms: 'Satu pagi di kopitiam',
      en: 'A morning in a kopitiam',
      zh: '老咖啡店的一个早晨',
      ta: 'ஒரு கொபிதியாம் காலை',
      ja: 'コピティアムの朝',
      ko: '코피티암에서의 아침',
      th: 'เช้าวันหนึ่งในร้านโกปี๊',
      vi: 'Một buổi sáng ở kopitiam',
      id: 'Sepagi di kopitiam',
      ar: 'صباح في مقهى كوبيتيام',
      hi: 'कोपितियाम में एक सुबह',
      es: 'Una mañana en un kopitiam',
      fr: 'Un matin dans un kopitiam',
    },
    hubs: ['food-lifestyle'],
    steps: [
      { cat: 'food-lifestyle', slug: 'kopitiam-mamak-culture' },
      { cat: 'food-lifestyle', slug: 'kopi-teh-tarik-and-coffeeshop-drinks' },
      { cat: 'food-lifestyle', slug: 'hainanese-chicken-rice' },
    ],
    experience: {
      label: {
        ms: 'Cuba Penyahkod Bahasa Kopi',
        en: 'Try the Kopi Lingo Decoder',
        zh: '试用咖啡店点单解码器',
        ta: 'கொபி மொழி டிகோடரை முயற்சிக்கவும்',
        ja: 'コピ注文用語デコーダーを試す',
        ko: '코피 주문 용어 해독기 사용해보기',
        th: 'ลองใช้ตัวถอดรหัสศัพท์โกปี๊',
        vi: 'Thử Bộ giải mã tiếng lóng kopi',
        id: 'Coba Dekoder Istilah Kopi',
        ar: 'جرّب مفكّك مصطلحات الكوبي',
        hi: 'कोपी डिकोडर आज़माएं',
        es: 'Prueba el Descifrador del kopi',
        fr: 'Essayez le Décodeur du kopi',
      },
      href: '/tools/kopi-lingo-decoder',
      external: false,
    },
  },
  {
    key: 'thaipusam',
    icon: '🪔',
    title: {
      ms: 'Mengalami Thaipusam',
      en: 'Experiencing Thaipusam',
      zh: '体验大宝森节',
      ta: 'தைப்பூசத்தை அனுபவித்தல்',
      ja: 'タイプーサムを体験する',
      ko: '타이푸삼 체험하기',
      th: 'สัมผัสเทศกาลไทปูซัม',
      vi: 'Trải nghiệm lễ Thaipusam',
      id: 'Mengalami Thaipusam',
      ar: 'تجربة ثايبوسام',
      hi: 'थाईपुसम का अनुभव',
      es: 'Vivir el Thaipusam',
      fr: 'Vivre le Thaipusam',
    },
    hubs: ['arts-culture'],
    steps: [
      { cat: 'arts-culture', slug: 'thaipusam' },
      { cat: 'arts-culture', slug: 'hinduism-in-malaysia' },
      { cat: 'arts-culture', slug: 'chettiar-community' },
      { cat: 'arts-culture', slug: 'hindu-temple-architecture' },
    ],
  },
  {
    key: 'hawker',
    icon: '🍜',
    title: {
      ms: 'Kali pertama di pusat penjaja',
      en: 'Hawker-centre first-timer',
      zh: '第一次逛熟食中心',
      ta: 'முதல் முறை ஹாக்கர் மையத்தில்',
      ja: 'はじめてのホーカーセンター',
      ko: '처음 가보는 호커센터',
      th: 'ครั้งแรกในศูนย์อาหารหาบเร่',
      vi: 'Lần đầu đến khu hàng rong',
      id: 'Pertama kali ke pusat jajanan',
      ar: 'أول زيارة لمركز الباعة',
      hi: 'पहली बार हॉकर सेंटर में',
      es: 'Primera vez en un hawker centre',
      fr: 'Première fois dans un hawker centre',
    },
    hubs: ['food-lifestyle'],
    steps: [
      { cat: 'food-lifestyle', slug: 'hawker-centres-and-food-courts' },
      { cat: 'food-lifestyle', slug: 'nasi-lemak' },
      { cat: 'food-lifestyle', slug: 'mee-goreng-mamak' },
      { cat: 'food-lifestyle', slug: 'halal-certification-in-malaysia' },
    ],
  },
  {
    key: 'cny',
    icon: '🧧',
    title: {
      ms: 'Tahun Baru Cina di Malaysia',
      en: 'A Chinese New Year in Malaysia',
      zh: '大马的农历新年',
      ta: 'மலேசியாவில் சீனப் புத்தாண்டு',
      ja: 'マレーシアの旧正月',
      ko: '말레이시아의 설날',
      th: 'ตรุษจีนในมาเลเซีย',
      vi: 'Tết Nguyên đán ở Malaysia',
      id: 'Tahun Baru Imlek di Malaysia',
      ar: 'رأس السنة الصينية في ماليزيا',
      hi: 'मलेशिया में चीनी नववर्ष',
      es: 'Un Año Nuevo Chino en Malasia',
      fr: 'Un Nouvel An chinois en Malaisie',
    },
    hubs: ['arts-culture'],
    steps: [
      { cat: 'arts-culture', slug: 'chinese-new-year' },
      { cat: 'arts-culture', slug: 'chinese-dialects' },
      { cat: 'glossary', slug: 'open-house' },
      { cat: 'malaysia', slug: 'population-composition' },
    ],
  },
  {
    key: 'hari-raya',
    icon: '🌙',
    title: {
      ms: 'Menyambut Hari Raya',
      en: 'Celebrating Hari Raya',
      zh: '体验开斋节',
      ta: 'ஹரி ராயாவைக் கொண்டாடுதல்',
      ja: 'ハリ・ラヤを祝う',
      ko: '하리 라야 즐기기',
      th: 'ร่วมฉลองฮารีรายอ',
      vi: 'Đón lễ Hari Raya',
      id: 'Merayakan Hari Raya',
      ar: 'الاحتفال بعيد الفطر (Hari Raya)',
      hi: 'हरि राया का उत्सव',
      es: 'Celebrar el Hari Raya',
      fr: 'Célébrer le Hari Raya',
    },
    hubs: ['arts-culture'],
    steps: [
      { cat: 'arts-culture', slug: 'hari-raya-aidilfitri' },
      { cat: 'food-lifestyle', slug: 'rendang' },
      { cat: 'glossary', slug: 'open-house' },
      { cat: 'glossary', slug: 'muhibbah' },
    ],
  },
  {
    key: 'deepavali',
    icon: '🎇',
    title: {
      ms: 'Menyambut Deepavali',
      en: 'Celebrating Deepavali',
      zh: '体验屠妖节',
      ta: 'தீபாவளியைக் கொண்டாடுதல்',
      ja: 'ディパバリを祝う',
      ko: '디파발리 즐기기',
      th: 'ร่วมฉลองดีปาวาลี',
      vi: 'Đón lễ Deepavali',
      id: 'Merayakan Deepavali',
      ar: 'الاحتفال بديبافالي',
      hi: 'दीपावली का उत्सव',
      es: 'Celebrar el Deepavali',
      fr: 'Célébrer le Deepavali',
    },
    hubs: ['arts-culture'],
    steps: [
      { cat: 'arts-culture', slug: 'deepavali' },
      { cat: 'arts-culture', slug: 'hinduism-in-malaysia' },
      { cat: 'arts-culture', slug: 'estate-tamil-community' },
      { cat: 'glossary', slug: 'open-house' },
    ],
  },
  {
    key: 'george-town',
    icon: '🏘️',
    title: {
      ms: 'Berjalan di George Town',
      en: 'A George Town heritage walk',
      zh: '槟城乔治市古迹漫步',
      ta: 'ஜார்ஜ் டவுன் பாரம்பரிய நடை',
      ja: 'ジョージタウン歴史さんぽ',
      ko: '조지타운 헤리티지 산책',
      th: 'เดินชมมรดกจอร์จทาวน์',
      vi: 'Dạo bộ di sản George Town',
      id: 'Jalan-jalan warisan George Town',
      ar: 'جولة تراثية في جورج تاون',
      hi: 'जॉर्ज टाउन विरासत सैर',
      es: 'Un paseo histórico por George Town',
      fr: 'Une balade patrimoniale à George Town',
    },
    hubs: ['tourism', 'arts-culture'],
    steps: [
      { cat: 'tourism', slug: 'penang-george-town-visitor-guide' },
      { cat: 'arts-culture', slug: 'unesco-world-heritage' },
      { cat: 'arts-culture', slug: 'peranakan' },
      { cat: 'food-lifestyle', slug: 'nyonya-peranakan-cuisine' },
    ],
  },
  {
    key: 'island',
    icon: '🏝️',
    title: {
      ms: 'Sehari di pulau',
      en: 'An island day',
      zh: '海岛一日',
      ta: 'ஒரு தீவு நாள்',
      ja: '島で過ごす一日',
      ko: '섬에서의 하루',
      th: 'หนึ่งวันบนเกาะ',
      vi: 'Một ngày trên đảo',
      id: 'Sehari di pulau',
      ar: 'يوم في جزيرة',
      hi: 'एक द्वीप दिवस',
      es: 'Un día de isla',
      fr: 'Une journée sur une île',
    },
    hubs: ['tourism'],
    steps: [
      { cat: 'tourism', slug: 'east-coast-islands-guide' },
      { cat: 'transport', slug: 'domestic-ferries-and-island-transport' },
      { cat: 'tourism', slug: 'diving-marine-ecotourism-malaysia' },
      { cat: 'environment', slug: 'northeast-monsoon' },
    ],
  },
  {
    key: 'chinese-festival-year',
    icon: '🏮',
    title: {
      ms: 'Setahun perayaan Cina',
      en: 'A year of Chinese festivals',
      zh: '华人节庆的一年',
      ta: 'ஒரு வருட சீனப் பண்டிகைகள்',
      ja: '華人の年中行事',
      ko: '중화권 세시풍속 한 해',
      th: 'หนึ่งปีเทศกาลจีน',
      vi: 'Một năm lễ hội người Hoa',
      id: 'Setahun perayaan Tionghoa',
      ar: 'سنة من الأعياد الصينية',
      hi: 'चीनी त्योहारों का एक वर्ष',
      es: 'Un año de fiestas chinas',
      fr: 'Une année de fêtes chinoises',
    },
    hubs: ['arts-culture'],
    steps: [
      { cat: 'arts-culture', slug: 'chinese-new-year' },
      { cat: 'arts-culture', slug: 'qingming-festival' },
      { cat: 'arts-culture', slug: 'hungry-ghost-festival' },
      { cat: 'arts-culture', slug: 'mid-autumn-festival' },
      { cat: 'arts-culture', slug: 'winter-solstice-festival' },
    ],
  },
  {
    key: 'borneo-harvest',
    icon: '🌾',
    title: {
      ms: 'Pesta menuai Borneo',
      en: "Borneo's harvest festivals",
      zh: '婆罗洲的丰收节',
      ta: 'போர்னியோவின் அறுவடைப் பண்டிகைகள்',
      ja: 'ボルネオの収穫祭',
      ko: '보르네오의 추수 축제',
      th: 'เทศกาลเก็บเกี่ยวแห่งบอร์เนียว',
      vi: 'Lễ hội mùa gặt Borneo',
      id: 'Pesta panen Borneo',
      ar: 'أعياد الحصاد في بورنيو',
      hi: 'बोर्नियो के फ़सल उत्सव',
      es: 'Las fiestas de la cosecha de Borneo',
      fr: 'Les fêtes des récoltes de Bornéo',
    },
    hubs: ['arts-culture'],
    steps: [
      { cat: 'arts-culture', slug: 'gawai-dayak' },
      { cat: 'arts-culture', slug: 'kaamatan' },
      { cat: 'states', slug: 'sarawak' },
      { cat: 'states', slug: 'sabah' },
    ],
  },
  {
    key: 'wesak-buddhism',
    icon: '🪷',
    title: {
      ms: 'Wesak dan agama Buddha di Malaysia',
      en: 'Wesak and Malaysian Buddhism',
      zh: '卫塞节与马来西亚佛教',
      ta: 'வெசாக்கும் மலேசியப் பௌத்தமும்',
      ja: 'ウエサックとマレーシアの仏教',
      ko: '웨삭과 말레이시아 불교',
      th: 'วันวิสาขบูชาและพุทธศาสนาในมาเลเซีย',
      vi: 'Lễ Wesak và Phật giáo Malaysia',
      id: 'Wesak dan agama Buddha di Malaysia',
      ar: 'عيد ويساك والبوذية في ماليزيا',
      hi: 'वेसाक और मलेशियाई बौद्ध धर्म',
      es: 'Wesak y el budismo en Malasia',
      fr: 'Wesak et le bouddhisme en Malaisie',
    },
    hubs: ['arts-culture'],
    steps: [
      { cat: 'arts-culture', slug: 'wesak' },
      { cat: 'arts-culture', slug: 'buddhism-in-malaysia' },
      { cat: 'arts-culture', slug: 'chinese-religion-in-malaysia' },
    ],
  },
];
