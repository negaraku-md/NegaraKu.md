import type { Localized } from './categories';

// ---------------------------------------------------------------------------
// 吃喝玩乐 — Eat · Drink · Play — the leisure & discovery grouping.
//
// A CROSS-CUTTING hub, not a pillar and not a category: it regroups EXISTING
// topics (category/subcategory pairs that already have their own topic pages)
// under four reader-intent clusters — 吃 Eat, 喝 Drink, 玩 Play, 乐 Enjoy.
// Nothing here moves or rewrites content; the hub view resolves each cluster's
// topics against the live corpus, drops any that have no articles, and A–Z
// sorts by localized label (the topic-ordering standard). So the taxonomy can
// list candidate topics freely — only ones with real content ever render.
//
// This is the P1 "hub-first" step of the Eat·Drink·Play plan. Promotion to a
// 4th top-nav pillar is a deliberate later decision (see the plan); for now the
// hub is reached from Explore + the nav, with the pillars unchanged.
// ---------------------------------------------------------------------------

/** A pointer to an existing topic page (`/{cat}/topic/{sub}`). */
export interface ClusterTopic {
  cat: string;
  sub: string;
}

export interface EdpCluster {
  id: 'eat' | 'drink' | 'play' | 'enjoy';
  /** The single Chinese character the cluster is named for. */
  char: string;
  icon: string;
  /** Accent colour (brand data-viz palette; gold stays reserved for primary). */
  color: string;
  name: Localized;
  blurb: Localized;
  /** Candidate topics — resolved against the corpus; empty ones are dropped. */
  topics: ClusterTopic[];
}

/** Hub-level identity (slug, wordmark, title, blurb). */
export const EDP = {
  slug: 'eat-drink-play',
  char: '吃喝玩乐',
  title: {
    ms: 'Makan Minum Main', en: 'Eat · Drink · Play', zh: '吃喝玩乐',
    ta: 'ருசி & உல்லாசம்', ja: 'グルメ・レジャー', ko: '먹고 마시고 즐기기',
    th: 'กิน ดื่ม เที่ยว', vi: 'Ăn Uống Vui Chơi', id: 'Makan Minum Main',
    ar: 'مأكل ومشرب وترفيه', hi: 'खाना-पीना-घूमना', es: 'Comer · Beber · Disfrutar',
    fr: 'Manger · Boire · Profiter',
  } as Localized,
  blurb: {
    ms: 'Panduan gaya hidup Malaysia yang berbilang bahasa dan boleh dipercayai — tempat terbaik untuk makan, minum, bermain dan bersantai, di seluruh negara.',
    en: "Malaysia's trusted, multilingual guide to the best places to eat, drink, play and unwind — right across the country, not just the capital.",
    zh: '可信赖的多语言马来西亚生活指南——吃什么、喝什么、玩什么、怎么乐，遍及全国，而不只是首都。',
    ta: 'மலேசியாவின் நம்பகமான, பன்மொழி வாழ்க்கைமுறை வழிகாட்டி — சாப்பிட, குடிக்க, சுற்ற, இளைப்பாற சிறந்த இடங்கள், நாடு முழுவதும்.',
    ja: '信頼できる多言語のマレーシア・ライフスタイルガイド — 食べる・飲む・遊ぶ・くつろぐのに最適な場所を、首都だけでなく全国から。',
    ko: '신뢰할 수 있는 다국어 말레이시아 라이프스타일 가이드 — 먹고 마시고 놀고 쉬기 좋은 곳을, 수도뿐 아니라 전국에서.',
    th: 'ไกด์ไลฟ์สไตล์มาเลเซียที่เชื่อถือได้และหลายภาษา — ที่สุดของการกิน ดื่ม เที่ยว และพักผ่อน ทั่วทั้งประเทศ ไม่ใช่แค่เมืองหลวง',
    vi: 'Cẩm nang lối sống Malaysia đáng tin cậy, đa ngôn ngữ — những nơi tốt nhất để ăn, uống, vui chơi và thư giãn, trên khắp cả nước chứ không chỉ thủ đô.',
    id: 'Panduan gaya hidup Malaysia yang tepercaya dan multibahasa — tempat terbaik untuk makan, minum, bermain, dan bersantai, di seluruh negeri.',
    ar: 'دليل ماليزيا الموثوق ومتعدّد اللغات لأسلوب الحياة — أفضل أماكن المأكل والمشرب والترفيه والاسترخاء، في أنحاء البلاد كلها لا العاصمة وحدها.',
    hi: 'मलेशिया की भरोसेमंद, बहुभाषी जीवनशैली गाइड — खाने, पीने, घूमने और सुकून पाने की बेहतरीन जगहें, पूरे देश में, सिर्फ़ राजधानी में नहीं।',
    es: 'La guía de estilo de vida de Malasia, fiable y multilingüe: los mejores lugares para comer, beber, salir y relajarse, en todo el país y no solo en la capital.',
    fr: "Le guide fiable et multilingue de l'art de vivre malaisien — les meilleures adresses pour manger, boire, sortir et se détendre, dans tout le pays et pas seulement dans la capitale.",
  } as Localized,
};

export const EDP_CLUSTERS: EdpCluster[] = [
  {
    id: 'eat',
    char: '吃',
    icon: '🍜',
    color: '#F5A623',
    name: {
      ms: 'Makan', en: 'Eat', zh: '吃', ta: 'சாப்பிடு', ja: '食べる', ko: '먹기',
      th: 'กิน', vi: 'Ăn', id: 'Makan', ar: 'مأكل', hi: 'खाना', es: 'Comer', fr: 'Manger',
    },
    blurb: {
      ms: 'Hidangan, masakan, tempat makan dan senarai MICHELIN — daripada gerai tepi jalan hingga meja berbintang.',
      en: 'Dishes, cuisines, where to eat and the MICHELIN list — from roadside stalls to starred tables.',
      zh: '菜肴、各族美食、哪里吃，以及米其林榜单——从路边摊到星级餐桌。',
      ta: 'உணவு வகைகள், சமையல் முறைகள், எங்கே சாப்பிடுவது, மற்றும் MICHELIN பட்டியல் — சாலையோரக் கடைகள் முதல் நட்சத்திர உணவகங்கள் வரை.',
      ja: '料理、各民族の食、どこで食べるか、そしてミシュランのリスト — 屋台から星付きの店まで。',
      ko: '요리, 각 민족 음식, 먹을 곳, 그리고 미쉐린 리스트 — 길거리 노점부터 별이 달린 식당까지.',
      th: 'อาหารจานต่าง ๆ อาหารแต่ละชาติพันธุ์ ที่กิน และรายชื่อ MICHELIN — ตั้งแต่แผงริมทางจนถึงร้านติดดาว',
      vi: 'Món ăn, ẩm thực các dân tộc, chỗ ăn và danh sách MICHELIN — từ quán ven đường đến nhà hàng gắn sao.',
      id: 'Hidangan, masakan, tempat makan, dan daftar MICHELIN — dari warung pinggir jalan hingga meja berbintang.',
      ar: 'الأطباق والمطابخ وأين تأكل وقائمة MICHELIN — من أكشاك الطرقات إلى الموائد الحائزة على نجوم.',
      hi: 'व्यंजन, पाक-शैलियाँ, कहाँ खाएँ और MICHELIN सूची — सड़क किनारे के ठेलों से लेकर स्टार वाली मेज़ों तक।',
      es: 'Platos, cocinas, dónde comer y la lista MICHELIN: desde puestos callejeros hasta mesas con estrella.',
      fr: 'Plats, cuisines, où manger et la liste MICHELIN — des étals de rue aux tables étoilées.',
    },
    topics: [
      { cat: 'food-lifestyle', sub: 'michelin-guide' },
      { cat: 'food-lifestyle', sub: 'dishes' },
      { cat: 'food-lifestyle', sub: 'cuisines' },
      { cat: 'food-lifestyle', sub: 'dining' },
      { cat: 'food-lifestyle', sub: 'ingredients' },
      { cat: 'food-lifestyle', sub: 'halal' },
      { cat: 'food-lifestyle', sub: 'durian' },
    ],
  },
  {
    id: 'drink',
    char: '喝',
    icon: '☕',
    color: '#10B981',
    name: {
      ms: 'Minum', en: 'Drink', zh: '喝', ta: 'குடி', ja: '飲む', ko: '마시기',
      th: 'ดื่ม', vi: 'Uống', id: 'Minum', ar: 'مشرب', hi: 'पीना', es: 'Beber', fr: 'Boire',
    },
    blurb: {
      ms: 'Kopi dan teh tarik, budaya kopitiam, minuman tempatan dan kehidupan malam — cerita yang belum dimiliki sesiapa.',
      en: "Coffee and teh tarik, kopitiam culture, local drinks and nightlife — the story nobody else owns yet.",
      zh: '咖啡与拉茶、茶室文化、本地饮料与夜生活——这块地盘还没人占住。',
      ta: 'காபி மற்றும் தே தாரிக், கோபிதியாம் பண்பாடு, உள்ளூர் பானங்கள் மற்றும் இரவு வாழ்க்கை — இன்னும் யாரும் உரிமை கொள்ளாத கதை.',
      ja: 'コーヒーとテタレ、コピティアム文化、地元の飲み物とナイトライフ — まだ誰のものでもない物語。',
      ko: '커피와 테타릭, 코피티암 문화, 현지 음료와 나이트라이프 — 아직 아무도 차지하지 않은 이야기.',
      th: 'กาแฟและชาชัก วัฒนธรรมโกปี๊เตี๊ยม เครื่องดื่มท้องถิ่น และชีวิตกลางคืน — เรื่องที่ยังไม่มีใครเป็นเจ้าของ',
      vi: 'Cà phê và teh tarik, văn hóa kopitiam, đồ uống địa phương và cuộc sống về đêm — câu chuyện chưa ai sở hữu.',
      id: 'Kopi dan teh tarik, budaya kopitiam, minuman lokal, dan kehidupan malam — kisah yang belum dimiliki siapa pun.',
      ar: 'القهوة وتيه تاريك، وثقافة الكوبيتيام، والمشروبات المحلية، والحياة الليلية — قصة لم يمتلكها أحد بعد.',
      hi: 'कॉफ़ी और तेह तारिक, कोपितियाम संस्कृति, स्थानीय पेय और नाइटलाइफ़ — वह कहानी जिस पर अभी किसी का हक़ नहीं।',
      es: 'Café y teh tarik, cultura kopitiam, bebidas locales y vida nocturna: la historia que aún nadie ha hecho suya.',
      fr: "Café et teh tarik, culture kopitiam, boissons locales et vie nocturne — l'histoire que personne ne s'est encore appropriée.",
    },
    topics: [
      { cat: 'food-lifestyle', sub: 'drinks' },
      { cat: 'food-lifestyle', sub: 'kopitiam' },
      { cat: 'food-lifestyle', sub: 'alcohol' },
    ],
  },
  {
    id: 'play',
    char: '玩',
    icon: '🏝️',
    color: '#6366F1',
    name: {
      ms: 'Main', en: 'Play', zh: '玩', ta: 'சுற்று', ja: '遊ぶ', ko: '놀기',
      th: 'เที่ยว', vi: 'Vui chơi', id: 'Main', ar: 'استكشاف', hi: 'घूमना', es: 'Explorar', fr: 'Sortir',
    },
    blurb: {
      ms: 'Destinasi, pulau, tanah tinggi, hutan hujan dan bandar — ke mana hendak pergi di 13 negeri dan 3 wilayah.',
      en: 'Destinations, islands, highlands, rainforest and cities — where to go across 13 states and 3 territories.',
      zh: '目的地、海岛、高原、雨林与城市——13州3联邦直辖区该去哪儿。',
      ta: 'சுற்றுலா இடங்கள், தீவுகள், மலைப்பகுதிகள், மழைக்காடுகள் மற்றும் நகரங்கள் — 13 மாநிலங்கள், 3 பிரதேசங்களில் எங்கே செல்வது.',
      ja: '観光地、島、高原、熱帯雨林、都市 — 13州3直轄領のどこへ行くか。',
      ko: '여행지, 섬, 고원, 열대우림, 도시 — 13개 주와 3개 직할구에서 어디로 갈지.',
      th: 'จุดหมายปลายทาง เกาะ ที่ราบสูง ป่าฝน และเมือง — จะไปที่ไหนใน 13 รัฐและ 3 ดินแดน',
      vi: 'Điểm đến, hải đảo, cao nguyên, rừng mưa và thành phố — đi đâu khắp 13 bang và 3 lãnh thổ.',
      id: 'Destinasi, pulau, dataran tinggi, hutan hujan, dan kota — ke mana harus pergi di 13 negeri dan 3 wilayah.',
      ar: 'الوجهات والجزر والمرتفعات والغابات المطيرة والمدن — إلى أين تذهب عبر 13 ولاية و3 أقاليم.',
      hi: 'गंतव्य, द्वीप, पर्वतीय क्षेत्र, वर्षावन और शहर — 13 राज्यों और 3 क्षेत्रों में कहाँ जाएँ।',
      es: 'Destinos, islas, tierras altas, selva y ciudades: adónde ir por los 13 estados y 3 territorios.',
      fr: "Destinations, îles, hauts plateaux, forêt tropicale et villes — où aller à travers 13 États et 3 territoires.",
    },
    topics: [
      { cat: 'tourism', sub: 'destinations' },
      { cat: 'tourism', sub: 'islands' },
      { cat: 'tourism', sub: 'highlands' },
      { cat: 'tourism', sub: 'diving' },
      { cat: 'tourism', sub: 'rainforest' },
      { cat: 'tourism', sub: 'kualalumpur' },
      { cat: 'tourism', sub: 'langkawi' },
      { cat: 'tourism', sub: 'sabah' },
      { cat: 'tourism', sub: 'sarawak' },
      { cat: 'tourism', sub: 'heritage' },
      { cat: 'tourism', sub: 'planning' },
    ],
  },
  {
    id: 'enjoy',
    char: '乐',
    icon: '🎉',
    color: '#A78BFA',
    name: {
      ms: 'Santai', en: 'Enjoy', zh: '乐', ta: 'இன்பம்', ja: '楽しむ', ko: '즐기기',
      th: 'สนุก', vi: 'Tận hưởng', id: 'Santai', ar: 'ترفيه', hi: 'मनोरंजन', es: 'Disfrutar', fr: 'Profiter',
    },
    blurb: {
      ms: 'Perayaan, persembahan, kraf, pasar dan membeli-belah — perkara dan masa untuk berseronok.',
      en: 'Festivals, performances, crafts, markets and shopping — the things to do and the seasons to do them.',
      zh: '节庆、表演、手工艺、集市与购物——该玩什么、什么时候玩。',
      ta: 'திருவிழாக்கள், நிகழ்ச்சிகள், கைவினை, சந்தைகள் மற்றும் கடைவீதி — என்ன செய்வது, எந்தப் பருவத்தில் செய்வது.',
      ja: '祭り、公演、工芸、市場、買い物 — 何を楽しむか、いつ楽しむか。',
      ko: '축제, 공연, 공예, 시장과 쇼핑 — 무엇을 즐길지, 언제 즐길지.',
      th: 'เทศกาล การแสดง งานหัตถกรรม ตลาด และการช้อปปิ้ง — มีอะไรให้ทำ และช่วงไหนควรทำ',
      vi: 'Lễ hội, trình diễn, thủ công, chợ và mua sắm — những điều để làm và mùa để làm.',
      id: 'Festival, pertunjukan, kerajinan, pasar, dan belanja — hal yang dilakukan dan musim untuk melakukannya.',
      ar: 'المهرجانات والعروض والحرف والأسواق والتسوق — ما تفعله والمواسم المناسبة له.',
      hi: 'त्योहार, प्रस्तुतियाँ, शिल्प, बाज़ार और खरीदारी — क्या करें और किस मौसम में करें।',
      es: 'Fiestas, espectáculos, artesanía, mercados y compras: qué hacer y en qué temporada.',
      fr: 'Fêtes, spectacles, artisanat, marchés et shopping — quoi faire et à quelle saison.',
    },
    topics: [
      { cat: 'arts-culture', sub: 'festivals' },
      { cat: 'arts-culture', sub: 'performing-arts' },
      { cat: 'arts-culture', sub: 'crafts' },
      { cat: 'arts-culture', sub: 'music' },
      { cat: 'arts-culture', sub: 'martial-arts' },
      { cat: 'food-lifestyle', sub: 'retail' },
      { cat: 'food-lifestyle', sub: 'pasar' },
      { cat: 'food-lifestyle', sub: 'ramadan' },
    ],
  },
];

/** The (category, subcategory) keys that belong to the hub, as a Set of "cat/sub". */
export function edpTopicKeys(): Set<string> {
  return new Set(EDP_CLUSTERS.flatMap((c) => c.topics.map((t) => `${t.cat}/${t.sub}`)));
}
