// ---------------------------------------------------------------------------
// negaraku.md taxonomy
//
// Level 1 = knowledge domains. Every category declares an ARCHETYPE, which
// decides how its page renders. `launch: false` categories are defined (so the
// roadmap and schema stay stable) but stay hidden until they have enough
// reviewed content to justify themselves — an empty category reads as an
// abandoned site.
//
// NOTE: "Knowledge Hub", "Resources" and "News & Updates" from the original
// Level-1 list are deliberately NOT categories here. They describe *formats*
// and *time*, not subjects, and every category contains them. They are
// implemented as cross-cutting views over the whole corpus (see CONTENT_TYPES).
// ---------------------------------------------------------------------------

// A language the CONTENT is authored in. Article bodies and the taxonomy labels
// below exist in these three; everything typed `Record<ContentLocale, …>` is
// data that lives in the repo in exactly these languages.
export type ContentLocale = 'ms' | 'en' | 'zh';
// A language the SITE can be VIEWED in (routing + UI chrome). A viewing locale
// with no authored content for a given field falls back to `ms` via `loc()` — so
// a new UI language (e.g. `ta`) can ship its routes and chrome before the corpus
// and taxonomy are translated, without rendering `undefined`.
export type Locale = ContentLocale | 'ta' | 'ja' | 'ko' | 'th';

/**
 * A localized taxonomy string. `ms`/`en`/`zh` are always authored; `ta` (and any
 * future viewing-only locale) is OPTIONAL — added as the Tamil rollout translates
 * the taxonomy. `loc()` returns the viewing locale's value when present, else Malay.
 */
export type Localized = Record<ContentLocale, string> & Partial<Record<'ta' | 'ja' | 'ko' | 'th', string>>;

/**
 * Read a localized field for a viewing locale, falling back to Malay when that
 * locale has no authored value (e.g. Tamil before the taxonomy is translated).
 * Use this for every `Localized` lookup keyed by a `Locale`.
 */
export function loc(rec: Localized, locale: Locale): string {
  return (rec as Record<string, string>)[locale] ?? rec.ms;
}

/** How a category's page is laid out. */
export type Archetype = 'service' | 'narrative' | 'place' | 'reference' | 'lookup' | 'data';

export interface ArchetypeDef {
  id: Archetype;
  icon: string;
  name: Localized;
  /** One-line description of the view pattern. */
  pattern: Localized;
}

export const ARCHETYPES: ArchetypeDef[] = [
  {
    id: 'service',
    icon: '🧭',
    name: { ms: 'Perkhidmatan / Prosedur', en: 'Service / Procedural', zh: '服务 / 流程', ta: 'சேவை / நடைமுறை', ja: 'サービス・手続き', ko: '서비스·절차', th: 'บริการ / ขั้นตอน' },
    pattern: {
      ms: 'Tugasan dahulu → kelompok topik → langkah, senarai semak, kalkulator',
      en: 'Task-first → topic clusters → steps, checklists, calculators',
      zh: '任务优先 → 主题群组 → 步骤、清单、计算器',
      ta: 'பணி முதலில் → தலைப்புத் தொகுப்புகள் → படிகள், சரிபார்ப்புப் பட்டியல்கள், கணிப்பான்கள்',
      ja: 'タスク優先 → トピック群 → 手順・チェックリスト・計算ツール',
      ko: '작업 우선 → 주제 묶음 → 절차, 점검표, 계산기',
      th: 'งานเป็นหลัก → กลุ่มหัวข้อ → ขั้นตอน รายการตรวจสอบ เครื่องคำนวณ',
    },
  },
  {
    id: 'narrative',
    icon: '📜',
    name: { ms: 'Naratif / Garis Masa', en: 'Narrative / Timeline', zh: '叙事 / 时间线', ta: 'கதையாடல் / காலவரிசை', ja: '物語・年表', ko: '서사·연표', th: 'เรื่องเล่า / เส้นเวลา' },
    pattern: {
      ms: 'Tulang belakang era → kad cerita → bacaan panjang pilihan',
      en: 'Era spine → story cards → featured long-read',
      zh: '时代主线 → 故事卡 → 精选长文',
      ta: 'சகாப்த மையம் → கதை அட்டைகள் → சிறப்பு நீள்வாசிப்பு',
      ja: '時代の軸 → ストーリーカード → 注目の長編記事',
      ko: '시대별 축 → 이야기 카드 → 주요 장문 읽을거리',
      th: 'แกนยุคสมัย → การ์ดเรื่องราว → บทความยาวแนะนำ',
    },
  },
  {
    id: 'place',
    icon: '📍',
    name: { ms: 'Tempat / Entiti', en: 'Place / Entity', zh: '地方 / 实体', ta: 'இடம் / அமைப்பு', ja: '場所・組織', ko: '장소·기관', th: 'สถานที่ / องค์กร' },
    pattern: {
      ms: 'Peta → penapis wilayah → kad tempat berstruktur',
      en: 'Map → region filter → structured place cards',
      zh: '地图 → 区域筛选 → 结构化地方卡',
      ta: 'வரைபடம் → பிராந்திய வடிகட்டி → கட்டமைக்கப்பட்ட இட அட்டைகள்',
      ja: '地図 → 地域フィルター → 構造化された場所カード',
      ko: '지도 → 지역 필터 → 구조화된 장소 카드',
      th: 'แผนที่ → ตัวกรองภูมิภาค → การ์ดสถานที่แบบมีโครงสร้าง',
    },
  },
  {
    id: 'reference',
    icon: '🏛',
    name: { ms: 'Rujukan / Direktori', en: 'Reference / Directory', zh: '参考 / 名录', ta: 'மேற்கோள் / அடைவு', ja: 'リファレンス・名簿', ko: '참고·명부', th: 'ข้อมูลอ้างอิง / ทำเนียบ' },
    pattern: {
      ms: 'Jadual rekod berstruktur yang boleh ditapis',
      en: 'Filterable table of structured records',
      zh: '可筛选的结构化记录表',
      ta: 'வடிகட்டக்கூடிய கட்டமைக்கப்பட்ட பதிவுகள் அட்டவணை',
      ja: 'フィルター可能な構造化レコード一覧',
      ko: '필터 가능한 구조화 기록 표',
      th: 'ตารางบันทึกแบบมีโครงสร้างที่กรองได้',
    },
  },
  {
    id: 'lookup',
    icon: '📖',
    name: { ms: 'Carian Istilah', en: 'Lookup', zh: '术语查询', ta: 'சொல் தேடல்', ja: '用語検索', ko: '용어 검색', th: 'ค้นหาคำศัพท์' },
    pattern: {
      ms: 'Carian dahulu → indeks A–Z → kad definisi',
      en: 'Search-first → A–Z index → definition cards',
      zh: '搜索优先 → A–Z 索引 → 定义卡',
      ta: 'தேடல் முதலில் → A–Z அட்டவணை → விளக்க அட்டைகள்',
      ja: '検索優先 → A–Z索引 → 定義カード',
      ko: '검색 우선 → A–Z 색인 → 정의 카드',
      th: 'ค้นหาเป็นหลัก → ดัชนี A–Z → การ์ดคำนิยาม',
    },
  },
  {
    id: 'data',
    icon: '📊',
    name: { ms: 'Data / Petunjuk', en: 'Data / Indicators', zh: '数据 / 指标', ta: 'தரவு / குறிகாட்டிகள்', ja: 'データ・指標', ko: '데이터·지표', th: 'ข้อมูล / ตัวชี้วัด' },
    pattern: {
      ms: 'Kad petunjuk → carta → perbandingan',
      en: 'Indicator cards → charts → comparisons',
      zh: '指标卡 → 图表 → 对比',
      ta: 'குறிகாட்டி அட்டைகள் → விளக்கப்படங்கள் → ஒப்பீடுகள்',
      ja: '指標カード → グラフ → 比較',
      ko: '지표 카드 → 차트 → 비교',
      th: 'การ์ดตัวชี้วัด → แผนภูมิ → การเปรียบเทียบ',
    },
  },
];

export function getArchetype(id: Archetype): ArchetypeDef | undefined {
  return ARCHETYPES.find((a) => a.id === id);
}

/** Cross-cutting content types — filters over every category, not categories. */
export const CONTENT_TYPES = [
  'guide',
  'faq',
  'checklist',
  'comparison',
  'timeline',
  'glossary',
  'law',
  'agency',
  'place',
  'company',
  'industry',
  'data',
  'news',
] as const;

export type Pillar = 'understand' | 'living' | 'doing-business';

export interface PillarDef {
  id: Pillar;
  icon: string;
  name: Localized;
  tagline: Localized;
}

export const PILLARS: PillarDef[] = [
  {
    id: 'understand',
    icon: '📖',
    name: { ms: 'Kenali Malaysia', en: 'Understand Malaysia', zh: '认识马来西亚', ta: 'மலேசியாவை அறிக', ja: 'マレーシアを知る', ko: '말레이시아 이해하기', th: 'ทำความรู้จักมาเลเซีย' },
    tagline: {
      ms: 'Bagaimana Malaysia terbentuk, bagaimana ia ditadbir, dan apa yang menyatukan sebuah negara majmuk.',
      en: 'How Malaysia came to be, how it is governed, and what holds a plural nation together.',
      zh: '马来西亚如何形成、如何治理，以及是什么维系着这个多元国度。',
      ta: 'மலேசியா எப்படி உருவானது, எப்படி ஆளப்படுகிறது, மற்றும் ஒரு பன்முக நாட்டை ஒன்றிணைப்பது எது.',
      ja: 'マレーシアがどのように成り立ち、どのように統治され、多民族国家を一つにまとめているものは何か。',
      ko: '말레이시아가 어떻게 형성되었고, 어떻게 통치되며, 다원 국가를 하나로 묶는 것은 무엇인지 살펴봅니다.',
      th: 'มาเลเซียกำเนิดขึ้นมาอย่างไร ปกครองอย่างไร และสิ่งใดที่ยึดโยงประเทศพหุสังคมไว้ด้วยกัน',
    },
  },
  {
    id: 'living',
    icon: '🏠',
    name: { ms: 'Hidup di Malaysia', en: 'Living in Malaysia', zh: '在马来西亚生活', ta: 'மலேசியாவில் வாழ்க்கை', ja: 'マレーシアで暮らす', ko: '말레이시아에서 생활하기', th: 'การใช้ชีวิตในมาเลเซีย' },
    tagline: {
      ms: 'Panduan praktikal untuk kehidupan harian — perkhidmatan awam, kesihatan, pendidikan, pengangkutan dan tempat tinggal.',
      en: 'Practical guidance for daily life — public services, healthcare, schooling, getting around and finding a home.',
      zh: '日常生活的实用指南——公共服务、医疗、教育、出行与安居。',
      ta: 'அன்றாட வாழ்க்கைக்கான நடைமுறை வழிகாட்டல் — பொதுச் சேவைகள், சுகாதாரம், கல்வி, போக்குவரத்து மற்றும் வீடு தேடல்.',
      ja: '日常生活のための実用ガイド — 公共サービス、医療、教育、移動、住まい探し。',
      ko: '일상생활을 위한 실용 안내 — 공공 서비스, 의료, 교육, 이동, 주거 마련.',
      th: 'คำแนะนำเชิงปฏิบัติสำหรับชีวิตประจำวัน — บริการสาธารณะ การแพทย์ การศึกษา การเดินทาง และการหาที่อยู่อาศัย',
    },
  },
  {
    id: 'doing-business',
    icon: '💼',
    name: { ms: 'Berniaga di Malaysia', en: 'Doing Business in Malaysia', zh: '在马来西亚经商', ta: 'மலேசியாவில் வணிகம்', ja: 'マレーシアでビジネス', ko: '말레이시아에서 사업하기', th: 'การทำธุรกิจในมาเลเซีย' },
    tagline: {
      ms: 'Apa yang diperlukan untuk memulakan, mengendali dan mematuhi peraturan perniagaan — daripada pemerbadanan hingga cukai.',
      en: 'What it takes to start, run and stay compliant as a business — from incorporation to tax.',
      zh: '创业、经营与合规所需的一切——从公司注册到税务。',
      ta: 'ஒரு வணிகத்தைத் தொடங்க, நடத்த மற்றும் விதிகளுக்கு இணங்க வேண்டியவை — நிறுவனப் பதிவு முதல் வரி வரை.',
      ja: '事業の設立・運営・法令遵守に必要なこと — 会社設立から税務まで。',
      ko: '사업을 시작하고 운영하며 법규를 준수하는 데 필요한 것 — 회사 설립부터 세무까지.',
      th: 'สิ่งที่ต้องใช้ในการเริ่มต้น ดำเนินการ และปฏิบัติตามกฎระเบียบในฐานะธุรกิจ — ตั้งแต่การจดทะเบียนบริษัทจนถึงภาษี',
    },
  },
];

export interface Category {
  id: string;
  icon: string;
  /** Localized display names. */
  name: Localized;
  /** Short localized descriptions. */
  blurb: Localized;
  /** Decides the page layout. */
  archetype: Archetype;
  pillar: Pillar;
  /** Visible publicly? Deferred categories stay defined but hidden. */
  launch: boolean;
}

export const CATEGORIES: Category[] = [
  // ---------------- Understand ----------------
  {
    id: 'malaysia',
    // 🌺 Bunga Raya (hibiscus), Malaysia's national flower — a Windows-safe icon.
    // (The 🇲🇾 flag emoji renders as the bare letters "MY" on Windows.)
    icon: '🌺',
    name: { ms: 'Malaysia', en: 'Malaysia', zh: '马来西亚', ta: 'மலேசியா', ja: 'マレーシア', ko: '말레이시아', th: 'มาเลเซีย' },
    blurb: {
      ms: 'Gambaran negara, sejarah, geografi, identiti nasional dan statistik.',
      en: 'Country overview, history, geography, national identity and statistics.',
      zh: '国家概况、历史、地理、国家认同与统计数据。',
      ta: 'நாட்டின் மேலோட்டம், வரலாறு, புவியியல், தேசிய அடையாளம் மற்றும் புள்ளிவிவரங்கள்.',
      ja: '国の概要、歴史、地理、国民的アイデンティティ、統計。',
      ko: '국가 개요, 역사, 지리, 국민 정체성 및 통계.',
      th: 'ภาพรวมของประเทศ ประวัติศาสตร์ ภูมิศาสตร์ อัตลักษณ์ประจำชาติ และสถิติ',
    },
    archetype: 'service',
    pillar: 'understand',
    launch: true,
  },
  {
    id: 'states',
    icon: '📍',
    name: { ms: 'Negeri & Wilayah', en: 'States & Territories', zh: '州与联邦直辖区', ta: 'மாநிலங்கள் & பிரதேசங்கள்', ja: '州・連邦直轄領', ko: '주 및 연방 직할구', th: 'รัฐและดินแดน' },
    blurb: {
      ms: '13 negeri dan 3 wilayah persekutuan — geografi, ekonomi dan pentadbiran.',
      en: 'Thirteen states and three federal territories — geography, economy, government.',
      zh: '13个州与3个联邦直辖区——地理、经济与行政。',
      ta: 'பதின்மூன்று மாநிலங்களும் மூன்று கூட்டாட்சிப் பிரதேசங்களும் — புவியியல், பொருளாதாரம், அரசாங்கம்.',
      ja: '13の州と3つの連邦直轄領 — 地理、経済、行政。',
      ko: '13개 주와 3개 연방 직할구 — 지리, 경제, 행정.',
      th: '13 รัฐและ 3 ดินแดนสหพันธ์ — ภูมิศาสตร์ เศรษฐกิจ การปกครอง',
    },
    archetype: 'service',
    pillar: 'understand',
    launch: true,
  },
  {
    id: 'government',
    icon: '🏛',
    name: { ms: 'Kerajaan', en: 'Government', zh: '政府', ta: 'அரசாங்கம்', ja: '政府', ko: '정부', th: 'รัฐบาล' },
    blurb: {
      ms: 'Kerajaan persekutuan, negeri dan tempatan, kementerian dan agensi.',
      en: 'Federal, state and local government, ministries and agencies.',
      zh: '联邦、州与地方政府、部门与机构。',
      ta: 'கூட்டாட்சி, மாநில மற்றும் உள்ளூர் அரசாங்கம், அமைச்சுகள் மற்றும் முகமைகள்.',
      ja: '連邦・州・地方政府、省庁と機関。',
      ko: '연방·주·지방 정부, 부처 및 기관.',
      th: 'รัฐบาลสหพันธ์ รัฐ และท้องถิ่น กระทรวงและหน่วยงาน',
    },
    archetype: 'service',
    pillar: 'understand',
    launch: true,
  },
  {
    id: 'law',
    icon: '⚖',
    name: { ms: 'Undang-Undang', en: 'Law & Regulations', zh: '法律与法规', ta: 'சட்டம் & விதிமுறைகள்', ja: '法律・規制', ko: '법률 및 규정', th: 'กฎหมายและระเบียบ' },
    blurb: {
      ms: 'Akta, peraturan, garis panduan dan prosedur perundangan.',
      en: 'Acts, regulations, guidelines and legal procedures.',
      zh: '法令、条例、指南与法律程序。',
      ta: 'சட்டங்கள், விதிமுறைகள், வழிகாட்டுதல்கள் மற்றும் சட்ட நடைமுறைகள்.',
      ja: '法令、規則、ガイドライン、法的手続き。',
      ko: '법령, 규정, 지침 및 법적 절차.',
      th: 'พระราชบัญญัติ ระเบียบ แนวปฏิบัติ และกระบวนการทางกฎหมาย',
    },
    archetype: 'service',
    pillar: 'understand',
    launch: true,
  },
  {
    id: 'economy',
    icon: '📈',
    name: { ms: 'Ekonomi', en: 'Economy', zh: '经济', ta: 'பொருளாதாரம்', ja: '経済', ko: '경제', th: 'เศรษฐกิจ' },
    blurb: {
      ms: 'KDNK, inflasi, perdagangan dan petunjuk ekonomi.',
      en: 'GDP, inflation, trade and economic indicators.',
      zh: 'GDP、通胀、贸易与经济指标。',
      ta: 'GDP, பணவீக்கம், வர்த்தகம் மற்றும் பொருளாதாரக் குறிகாட்டிகள்.',
      ja: 'GDP、インフレ、貿易、経済指標。',
      ko: 'GDP, 물가, 무역 및 경제 지표.',
      th: 'GDP อัตราเงินเฟ้อ การค้า และตัวชี้วัดทางเศรษฐกิจ',
    },
    archetype: 'service',
    pillar: 'understand',
    launch: true,
  },
  {
    id: 'arts-culture',
    icon: '🎭',
    name: { ms: 'Seni & Budaya', en: 'Arts & Culture', zh: '艺术与文化', ta: 'கலை & பண்பாடு', ja: '芸術・文化', ko: '예술 및 문화', th: 'ศิลปะและวัฒนธรรม' },
    blurb: {
      ms: 'Bahasa, perayaan, muzium, warisan dan tradisi.',
      en: 'Languages, festivals, museums, heritage and traditions.',
      zh: '语言、节庆、博物馆、遗产与传统。',
      ta: 'மொழிகள், திருவிழாக்கள், அருங்காட்சியகங்கள், பாரம்பரியம் மற்றும் மரபுகள்.',
      ja: '言語、祭り、博物館、遺産、伝統。',
      ko: '언어, 축제, 박물관, 유산 및 전통.',
      th: 'ภาษา เทศกาล พิพิธภัณฑ์ มรดก และประเพณี',
    },
    archetype: 'service',
    pillar: 'understand',
    launch: true,
  },
  {
    id: 'glossary',
    icon: '📖',
    name: { ms: 'Glosari', en: 'Glossary', zh: '术语库', ta: 'சொற்களஞ்சியம்', ja: '用語集', ko: '용어집', th: 'อภิธานศัพท์' },
    blurb: {
      ms: 'Istilah Malaysia dijelaskan dalam tiga bahasa.',
      en: 'Malaysian terms defined across three languages.',
      zh: '以三种语言解释的马来西亚术语。',
      ta: 'மலேசியச் சொற்கள் மூன்று மொழிகளில் விளக்கப்பட்டுள்ளன.',
      ja: 'マレーシアの用語を3言語で解説。',
      ko: '3개 언어로 풀이한 말레이시아 용어.',
      th: 'คำศัพท์มาเลเซียที่อธิบายในสามภาษา',
    },
    archetype: 'service',
    pillar: 'understand',
    launch: true,
  },
  {
    id: 'international',
    icon: '🌏',
    name: { ms: 'Antarabangsa', en: 'International', zh: '国际', ta: 'சர்வதேசம்', ja: '国際', ko: '국제', th: 'ระหว่างประเทศ' },
    blurb: {
      ms: 'ASEAN, perjanjian dan hubungan perdagangan.',
      en: 'ASEAN, treaties and trade agreements.',
      zh: '东盟、条约与贸易协定。',
      ta: 'ஆசியான், ஒப்பந்தங்கள் மற்றும் வர்த்தக உடன்படிக்கைகள்.',
      ja: 'ASEAN、条約、貿易協定。',
      ko: 'ASEAN, 조약 및 무역 협정.',
      th: 'อาเซียน สนธิสัญญา และข้อตกลงทางการค้า',
    },
    archetype: 'service',
    pillar: 'understand',
    launch: true,
  },

  // ---------------- Business ----------------
  {
    id: 'business',
    icon: '💼',
    name: { ms: 'Perniagaan', en: 'Business', zh: '商业', ta: 'வணிகம்', ja: 'ビジネス', ko: '비즈니스', th: 'ธุรกิจ' },
    blurb: {
      ms: 'Memulakan, mengendali, mengembang dan menutup perniagaan.',
      en: 'Starting, operating, growing and closing a business.',
      zh: '创办、经营、发展与结束企业。',
      ta: 'வணிகத்தைத் தொடங்குதல், நடத்துதல், வளர்த்தல் மற்றும் மூடுதல்.',
      ja: '事業の設立、運営、成長、廃業。',
      ko: '사업의 설립, 운영, 성장 및 폐업.',
      th: 'การเริ่มต้น ดำเนินการ ขยาย และปิดกิจการ',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },
  {
    id: 'taxation',
    icon: '🧾',
    name: { ms: 'Percukaian', en: 'Taxation', zh: '税务', ta: 'வரிவிதிப்பு', ja: '税務', ko: '세무', th: 'ภาษีอากร' },
    blurb: {
      ms: 'Cukai individu, cukai korporat, SST, duti setem dan insentif.',
      en: 'Personal tax, corporate tax, SST, stamp duty and incentives.',
      zh: '个人税、企业税、销售服务税、印花税与优惠。',
      ta: 'தனிநபர் வரி, நிறுவன வரி, SST, முத்திரை வரி மற்றும் ஊக்கத்தொகைகள்.',
      ja: '個人税、法人税、SST、印紙税、優遇措置。',
      ko: '개인세, 법인세, SST, 인지세 및 세제 혜택.',
      th: 'ภาษีบุคคล ภาษีนิติบุคคล SST อากรแสตมป์ และสิทธิประโยชน์',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },
  {
    id: 'company-secretary',
    icon: '📑',
    name: { ms: 'Setiausaha Syarikat', en: 'Company Secretary', zh: '公司秘书', ta: 'நிறுவனச் செயலாளர்', ja: '会社秘書役', ko: '회사 비서', th: 'เลขานุการบริษัท' },
    blurb: {
      ms: 'Akta Syarikat, pematuhan, tadbir urus dan pemfailan.',
      en: 'Companies Act, compliance, governance and filings.',
      zh: '公司法、合规、治理与申报。',
      ta: 'நிறுவனச் சட்டம், இணக்கம், நிர்வாகம் மற்றும் தாக்கல்கள்.',
      ja: '会社法、コンプライアンス、ガバナンス、届出。',
      ko: '회사법, 법규 준수, 지배구조 및 서류 신고.',
      th: 'พระราชบัญญัติบริษัท (Companies Act) การปฏิบัติตามกฎ การกำกับดูแล และการยื่นเอกสาร',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },
  {
    id: 'accounting',
    icon: '📊',
    name: { ms: 'Perakaunan', en: 'Accounting', zh: '会计', ta: 'கணக்கியல்', ja: '会計', ko: '회계', th: 'การบัญชี' },
    blurb: {
      ms: 'Piawaian, simpan kira, pelaporan dan e-Invois.',
      en: 'Standards, bookkeeping, reporting and e-Invoicing.',
      zh: '准则、簿记、报告与电子发票。',
      ta: 'தரநிலைகள், கணக்குப் பதிவு, அறிக்கையிடல் மற்றும் மின்-விலைப்பட்டியல்.',
      ja: '基準、簿記、報告、電子インボイス。',
      ko: '기준, 부기, 보고 및 전자 인보이스.',
      th: 'มาตรฐาน การทำบัญชี การรายงาน และ e-Invoice',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },
  {
    id: 'audit',
    icon: '🔍',
    name: { ms: 'Audit & Jaminan', en: 'Audit & Assurance', zh: '审计与鉴证', ta: 'தணிக்கை & உறுதிப்படுத்தல்', ja: '監査・保証', ko: '감사 및 인증', th: 'การตรวจสอบและการให้ความเชื่อมั่น' },
    blurb: {
      ms: 'Keperluan audit, piawaian dan perkhidmatan jaminan.',
      en: 'Audit requirements, standards and assurance services.',
      zh: '审计要求、准则与鉴证服务。',
      ta: 'தணிக்கைத் தேவைகள், தரநிலைகள் மற்றும் உறுதிப்படுத்தல் சேவைகள்.',
      ja: '監査要件、基準、保証業務。',
      ko: '감사 요건, 기준 및 인증 서비스.',
      th: 'ข้อกำหนดการตรวจสอบ มาตรฐาน และบริการให้ความเชื่อมั่น',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },
  {
    id: 'employment',
    icon: '👥',
    name: { ms: 'Pekerjaan & HR', en: 'Employment & HR', zh: '就业与人力资源', ta: 'வேலைவாய்ப்பு & மனிதவளம்', ja: '雇用・人事', ko: '고용 및 인사', th: 'การจ้างงานและทรัพยากรบุคคล' },
    blurb: {
      ms: 'Undang-undang buruh, KWSP, PERKESO, payroll dan pengambilan.',
      en: 'Labour law, EPF, SOCSO, payroll and hiring.',
      zh: '劳工法、公积金、社险、薪资与招聘。',
      ta: 'தொழிலாளர் சட்டம், EPF, SOCSO, ஊதியப்பட்டியல் மற்றும் ஆட்சேர்ப்பு.',
      ja: '労働法、EPF、SOCSO、給与計算、採用。',
      ko: '노동법, EPF, SOCSO, 급여 및 채용.',
      th: 'กฎหมายแรงงาน EPF SOCSO บัญชีเงินเดือน และการจ้างงาน',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },
  {
    id: 'finance',
    icon: '💰',
    name: { ms: 'Kewangan & Perbankan', en: 'Finance & Banking', zh: '金融与银行', ta: 'நிதி & வங்கியியல்', ja: '金融・銀行', ko: '금융 및 은행', th: 'การเงินและการธนาคาร' },
    blurb: {
      ms: 'Perbankan, pembayaran, insurans, pelaburan dan pembiayaan.',
      en: 'Banking, payments, insurance, investments and financing.',
      zh: '银行、支付、保险、投资与融资。',
      ta: 'வங்கிச் சேவை, கட்டணங்கள், காப்பீடு, முதலீடுகள் மற்றும் நிதியளிப்பு.',
      ja: '銀行、決済、保険、投資、融資。',
      ko: '은행, 결제, 보험, 투자 및 자금 조달.',
      th: 'การธนาคาร การชำระเงิน การประกันภัย การลงทุน และการจัดหาเงินทุน',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },
  {
    id: 'industries',
    icon: '🏭',
    name: { ms: 'Industri', en: 'Industries', zh: '行业', ta: 'தொழில்துறைகள்', ja: '産業', ko: '산업', th: 'อุตสาหกรรม' },
    blurb: {
      ms: 'Pembuatan, F&B, pembinaan, teknologi dan lain-lain.',
      en: 'Manufacturing, F&B, construction, technology and more.',
      zh: '制造业、餐饮、建筑、科技等。',
      ta: 'உற்பத்தி, உணவு & பானம், கட்டுமானம், தொழில்நுட்பம் மற்றும் பல.',
      ja: '製造、飲食、建設、テクノロジーなど。',
      ko: '제조업, 식음료, 건설, 기술 등.',
      th: 'การผลิต อาหารและเครื่องดื่ม การก่อสร้าง เทคโนโลยี และอื่น ๆ',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },
  {
    id: 'companies',
    icon: '🏢',
    name: { ms: 'Syarikat', en: 'Companies', zh: '公司', ta: 'நிறுவனங்கள்', ja: '企業', ko: '기업', th: 'บริษัท' },
    blurb: {
      ms: 'Profil syarikat, syarikat tersenarai dan PKS.',
      en: 'Company profiles, listed companies and SMEs.',
      zh: '公司简介、上市公司与中小企业。',
      ta: 'நிறுவன விவரங்கள், பட்டியலிடப்பட்ட நிறுவனங்கள் மற்றும் சிறு-நடுத்தர நிறுவனங்கள்.',
      ja: '企業プロフィール、上場企業、中小企業。',
      ko: '기업 소개, 상장 기업 및 중소기업.',
      th: 'ข้อมูลบริษัท บริษัทจดทะเบียน และวิสาหกิจขนาดกลางและขนาดย่อม (SME)',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },
  {
    id: 'technology',
    icon: '💻',
    name: { ms: 'Teknologi & AI', en: 'Technology & AI', zh: '科技与人工智能', ta: 'தொழில்நுட்பம் & செயற்கை நுண்ணறிவு', ja: 'テクノロジー・AI', ko: '기술 및 AI', th: 'เทคโนโลยีและ AI' },
    blurb: {
      ms: 'Transformasi digital, AI, keselamatan siber dan perisian.',
      en: 'Digital transformation, AI, cybersecurity and software.',
      zh: '数字转型、人工智能、网络安全与软件。',
      ta: 'டிஜிட்டல் மாற்றம், செயற்கை நுண்ணறிவு, இணையப் பாதுகாப்பு மற்றும் மென்பொருள்.',
      ja: 'デジタル変革、AI、サイバーセキュリティ、ソフトウェア。',
      ko: '디지털 전환, AI, 사이버 보안 및 소프트웨어.',
      th: 'การเปลี่ยนผ่านสู่ดิจิทัล AI ความมั่นคงปลอดภัยไซเบอร์ และซอฟต์แวร์',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },

  // ---------------- Living ----------------
  {
    id: 'education',
    icon: '🎓',
    name: { ms: 'Pendidikan', en: 'Education', zh: '教育', ta: 'கல்வி', ja: '教育', ko: '교육', th: 'การศึกษา' },
    blurb: {
      ms: 'Sekolah, universiti, TVET dan biasiswa.',
      en: 'Schools, universities, TVET and scholarships.',
      zh: '学校、大学、技职教育与奖学金。',
      ta: 'பள்ளிகள், பல்கலைக்கழகங்கள், TVET மற்றும் புலமைப்பரிசில்கள்.',
      ja: '学校、大学、TVET、奨学金。',
      ko: '학교, 대학, TVET 및 장학금.',
      th: 'โรงเรียน มหาวิทยาลัย TVET และทุนการศึกษา',
    },
    archetype: 'service',
    pillar: 'living',
    launch: true,
  },
  {
    id: 'healthcare',
    icon: '🩺',
    name: { ms: 'Kesihatan', en: 'Healthcare', zh: '医疗保健', ta: 'சுகாதாரம்', ja: '医療', ko: '의료', th: 'การแพทย์และสาธารณสุข' },
    blurb: {
      ms: 'Kesihatan awam, hospital swasta dan insurans.',
      en: 'Public healthcare, private hospitals and insurance.',
      zh: '公共医疗、私立医院与保险。',
      ta: 'பொது சுகாதாரம், தனியார் மருத்துவமனைகள் மற்றும் காப்பீடு.',
      ja: '公的医療、民間病院、保険。',
      ko: '공공 의료, 민간 병원 및 보험.',
      th: 'สาธารณสุขของรัฐ โรงพยาบาลเอกชน และการประกันภัย',
    },
    archetype: 'service',
    pillar: 'living',
    launch: true,
  },
  {
    id: 'property',
    icon: '🏠',
    name: { ms: 'Hartanah', en: 'Property', zh: '房地产', ta: 'சொத்து', ja: '不動産', ko: '부동산', th: 'อสังหาริมทรัพย์' },
    blurb: {
      ms: 'Membeli, menyewa, tanah, strata dan pembiayaan.',
      en: 'Buying, renting, land, strata and financing.',
      zh: '购买、租赁、土地、分层地契与融资。',
      ta: 'வாங்குதல், வாடகை, நிலம், அடுக்கு உரிமை மற்றும் நிதியளிப்பு.',
      ja: '購入、賃貸、土地、区分所有、融資。',
      ko: '매매, 임대, 토지, 구분소유 및 자금 조달.',
      th: 'การซื้อ การเช่า ที่ดิน อาคารชุด และการจัดหาเงินทุน',
    },
    archetype: 'service',
    pillar: 'living',
    launch: true,
  },
  {
    id: 'transport',
    icon: '🚗',
    name: { ms: 'Pengangkutan', en: 'Transport', zh: '交通', ta: 'போக்குவரத்து', ja: '交通', ko: '교통', th: 'การขนส่ง' },
    blurb: {
      ms: 'Jalan raya, kereta api, penerbangan, maritim dan pengangkutan awam.',
      en: 'Roads, rail, aviation, maritime and public transport.',
      zh: '公路、铁路、航空、海运与公共交通。',
      ta: 'சாலைகள், ரயில், விமானப் போக்குவரத்து, கடல்வழி மற்றும் பொதுப் போக்குவரத்து.',
      ja: '道路、鉄道、航空、海運、公共交通。',
      ko: '도로, 철도, 항공, 해운 및 대중교통.',
      th: 'ถนน รถไฟ การบิน การเดินเรือ และการขนส่งสาธารณะ',
    },
    archetype: 'service',
    pillar: 'living',
    launch: true,
  },
  {
    id: 'tourism',
    icon: '🌍',
    name: { ms: 'Pelancongan', en: 'Tourism', zh: '旅游', ta: 'சுற்றுலா', ja: '観光', ko: '관광', th: 'การท่องเที่ยว' },
    blurb: {
      ms: 'Destinasi, perjalanan, budaya dan warisan.',
      en: 'Destinations, travel, culture and heritage.',
      zh: '目的地、旅行、文化与遗产。',
      ta: 'சுற்றுலா இடங்கள், பயணம், பண்பாடு மற்றும் பாரம்பரியம்.',
      ja: '観光地、旅行、文化、遺産。',
      ko: '여행지, 여행, 문화 및 유산.',
      th: 'จุดหมายปลายทาง การเดินทาง วัฒนธรรม และมรดก',
    },
    archetype: 'service',
    pillar: 'living',
    launch: true,
  },
  {
    id: 'food-lifestyle',
    icon: '🍜',
    name: { ms: 'Makanan & Gaya Hidup', en: 'Food & Lifestyle', zh: '美食与生活', ta: 'உணவு & வாழ்க்கை முறை', ja: '食・ライフスタイル', ko: '음식 및 라이프스타일', th: 'อาหารและไลฟ์สไตล์' },
    blurb: {
      ms: 'Masakan Malaysia, gaya hidup dan membeli-belah.',
      en: 'Malaysian cuisine, lifestyle and shopping.',
      zh: '马来西亚美食、生活方式与购物。',
      ta: 'மலேசிய உணவு வகைகள், வாழ்க்கை முறை மற்றும் கடைவீதி.',
      ja: 'マレーシア料理、ライフスタイル、買い物。',
      ko: '말레이시아 요리, 라이프스타일 및 쇼핑.',
      th: 'อาหารมาเลเซีย ไลฟ์สไตล์ และการช้อปปิ้ง',
    },
    archetype: 'service',
    pillar: 'living',
    launch: true,
  },
  {
    id: 'public-safety',
    icon: '🛡',
    name: { ms: 'Keselamatan Awam', en: 'Public Safety', zh: '公共安全', ta: 'பொதுப் பாதுகாப்பு', ja: '公共安全', ko: '공공 안전', th: 'ความปลอดภัยสาธารณะ' },
    blurb: {
      ms: 'Polis, bomba dan perkhidmatan kecemasan.',
      en: 'Police, fire and emergency services.',
      zh: '警察、消防与紧急服务。',
      ta: 'காவல்துறை, தீயணைப்பு மற்றும் அவசரகாலச் சேவைகள்.',
      ja: '警察、消防、緊急サービス。',
      ko: '경찰, 소방 및 긴급 서비스.',
      th: 'ตำรวจ ดับเพลิง และบริการฉุกเฉิน',
    },
    archetype: 'service',
    pillar: 'living',
    launch: true,
  },
  {
    id: 'agriculture',
    icon: '🌱',
    name: { ms: 'Pertanian', en: 'Agriculture', zh: '农业', ta: 'விவசாயம்', ja: '農業', ko: '농업', th: 'เกษตรกรรม' },
    blurb: {
      ms: 'Pertanian, perikanan dan perladangan.',
      en: 'Farming, fisheries and plantations.',
      zh: '农耕、渔业与种植园。',
      ta: 'பயிர்ச்செய்கை, மீன்வளம் மற்றும் தோட்டங்கள்.',
      ja: '農業、漁業、プランテーション。',
      ko: '농경, 수산업 및 플랜테이션.',
      th: 'การเพาะปลูก การประมง และสวนเพาะปลูก',
    },
    archetype: 'service',
    pillar: 'living',
    launch: true,
  },
  {
    id: 'energy',
    icon: '⚡',
    name: { ms: 'Tenaga & Utiliti', en: 'Energy & Utilities', zh: '能源与公用事业', ta: 'ஆற்றல் & பயன்பாட்டுச் சேவைகள்', ja: 'エネルギー・公益事業', ko: '에너지 및 공익사업', th: 'พลังงานและสาธารณูปโภค' },
    blurb: {
      ms: 'Elektrik, air dan tenaga boleh baharu.',
      en: 'Electricity, water and renewable energy.',
      zh: '电力、水务与可再生能源。',
      ta: 'மின்சாரம், நீர் மற்றும் புதுப்பிக்கத்தக்க ஆற்றல்.',
      ja: '電力、水道、再生可能エネルギー。',
      ko: '전기, 수도 및 재생 에너지.',
      th: 'ไฟฟ้า น้ำ และพลังงานหมุนเวียน',
    },
    archetype: 'service',
    pillar: 'living',
    launch: true,
  },
  {
    id: 'environment',
    icon: '🌳',
    name: { ms: 'Alam Sekitar', en: 'Environment', zh: '环境', ta: 'சுற்றுச்சூழல்', ja: '環境', ko: '환경', th: 'สิ่งแวดล้อม' },
    blurb: {
      ms: 'Kelestarian, iklim dan pengurusan sisa.',
      en: 'Sustainability, climate and waste management.',
      zh: '可持续发展、气候与废物管理。',
      ta: 'நிலைத்தன்மை, தட்பவெப்பநிலை மற்றும் கழிவு மேலாண்மை.',
      ja: '持続可能性、気候、廃棄物管理。',
      ko: '지속가능성, 기후 및 폐기물 관리.',
      th: 'ความยั่งยืน สภาพภูมิอากาศ และการจัดการของเสีย',
    },
    archetype: 'service',
    pillar: 'living',
    launch: true,
  },
  {
    id: 'sports',
    icon: '⚽',
    name: { ms: 'Sukan', en: 'Sports', zh: '体育', ta: 'விளையாட்டு', ja: 'スポーツ', ko: '스포츠', th: 'กีฬา' },
    blurb: {
      ms: 'Sukan negara, persatuan dan kemudahan.',
      en: 'National sports, associations and facilities.',
      zh: '国家体育、协会与设施。',
      ta: 'தேசிய விளையாட்டு, சங்கங்கள் மற்றும் வசதிகள்.',
      ja: '国内スポーツ、協会、施設。',
      ko: '국내 스포츠, 협회 및 시설.',
      th: 'กีฬาระดับชาติ สมาคม และสิ่งอำนวยความสะดวก',
    },
    archetype: 'service',
    pillar: 'living',
    launch: true,
  },
  {
    id: 'settling-in',
    icon: '🛬',
    name: { ms: 'Menetap di Malaysia', en: 'Settling In', zh: '落地安顿', ta: 'குடியேறுதல்', ja: '定住手続き', ko: '정착하기', th: 'การตั้งถิ่นฐาน' },
    blurb: {
      ms: 'Visa, pas, dan dokumen yang perlu diuruskan apabila tiba atau menetap.',
      en: 'Visas, passes and the documents to sort out on arrival and as a resident.',
      zh: '签证、准证，以及抵达和居留时需办理的证件。',
      ta: 'விசாக்கள், அனுமதிச்சீட்டுகள் மற்றும் வருகையின்போதும் குடியிருப்பாளராகவும் ஒழுங்கு செய்ய வேண்டிய ஆவணங்கள்.',
      ja: 'ビザ、パス、入国時や居住者として整えるべき書類。',
      ko: '입국 시와 거주자로서 처리해야 할 비자, 패스 및 서류.',
      th: 'วีซ่า บัตรอนุญาต และเอกสารที่ต้องจัดการเมื่อเดินทางมาถึงและในฐานะผู้พำนัก',
    },
    archetype: 'service',
    pillar: 'living',
    launch: true,
  },
  {
    id: 'money-daily-life',
    icon: '💳',
    name: { ms: 'Wang & Kehidupan Harian', en: 'Money & Daily Life', zh: '金钱与日常', ta: 'பணம் & அன்றாட வாழ்க்கை', ja: 'お金・日常生活', ko: '돈과 일상생활', th: 'เงินและชีวิตประจำวัน' },
    blurb: {
      ms: 'Perbankan, bil, cukai peribadi dan urusan harian.',
      en: 'Banking, bills, personal tax and everyday admin.',
      zh: '银行、账单、个人税务与日常事务。',
      ta: 'வங்கிச் சேவை, கட்டணச் சீட்டுகள், தனிநபர் வரி மற்றும் அன்றாட நிர்வாகம்.',
      ja: '銀行、請求書、個人税、日々の手続き。',
      ko: '은행, 공과금, 개인세 및 일상 행정.',
      th: 'การธนาคาร ค่าใช้จ่าย ภาษีบุคคล และการจัดการเรื่องประจำวัน',
    },
    archetype: 'service',
    pillar: 'living',
    launch: true,
  },
  {
    id: 'cost-of-living',
    icon: '🧾',
    name: { ms: 'Kos Sara Hidup', en: 'Cost of Living', zh: '生活成本', ta: 'வாழ்க்கைச் செலவு', ja: '生活費', ko: '생활비', th: 'ค่าครองชีพ' },
    blurb: {
      ms: 'Bajet, sewa, gaji dan perbelanjaan sebenar mengikut bandar.',
      en: 'Budgets, rent, salaries and real expenses by city.',
      zh: '各城市的预算、租金、薪资与实际开销。',
      ta: 'நகரம் வாரியாக பட்ஜெட், வாடகை, சம்பளம் மற்றும் உண்மையான செலவுகள்.',
      ja: '都市別の予算、家賃、給与、実際の支出。',
      ko: '도시별 예산, 임대료, 급여 및 실제 지출.',
      th: 'งบประมาณ ค่าเช่า เงินเดือน และค่าใช้จ่ายจริงแยกตามเมือง',
    },
    archetype: 'service',
    pillar: 'living',
    launch: true,
  },
];

export const CATEGORY_IDS = CATEGORIES.map((c) => c.id);

export function getCategory(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

/** Categories visible publicly. */
export function launchCategories(): Category[] {
  return CATEGORIES.filter((c) => c.launch);
}

export function categoriesInPillar(pillar: Pillar, onlyLaunched = true): Category[] {
  return CATEGORIES.filter((c) => c.pillar === pillar && (!onlyLaunched || c.launch));
}

export function categoriesWithArchetype(a: Archetype, onlyLaunched = true): Category[] {
  return CATEGORIES.filter((c) => c.archetype === a && (!onlyLaunched || c.launch));
}

export function getPillar(categoryId: string): Pillar | undefined {
  return getCategory(categoryId)?.pillar;
}

export function getPillarDef(id: Pillar): PillarDef | undefined {
  return PILLARS.find((p) => p.id === id);
}

/** Back-compat: some views still read this map directly. */
export const CATEGORY_PILLAR: Record<string, Pillar> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.pillar]),
);

export const CATEGORY_COLORS: Record<string, string> = {
  malaysia: '#FFC000',
  states: '#6366F1',
  government: '#38BDF8',
  law: '#C084FC',
  economy: '#4ADE80',
  'arts-culture': '#E879F9',
  glossary: '#94A3B8',
  international: '#22D3EE',
  business: '#F5A623',
  taxation: '#FB923C',
  'company-secretary': '#A78BFA',
  accounting: '#34D399',
  audit: '#60A5FA',
  employment: '#FBBF24',
  finance: '#2DD4BF',
  industries: '#F87171',
  companies: '#818CF8',
  technology: '#22D3EE',
  education: '#FCD34D',
  healthcare: '#F472B6',
  property: '#A3E635',
  transport: '#38BDF8',
  tourism: '#10B981',
  'food-lifestyle': '#F43F5E',
  'public-safety': '#94A3B8',
  agriculture: '#84CC16',
  energy: '#FACC15',
  environment: '#4ADE80',
  sports: '#FB7185',
  'settling-in': '#5EEAD4',
  'money-daily-life': '#93C5FD',
  'cost-of-living': '#FDBA74',
};

export function getCategoryColor(id: string): string {
  return CATEGORY_COLORS[id] ?? '#FFC000';
}

// Section (pillar) accent colours — used for the coloured top-border on Section
// cards across the hub, category, topic and Explore pages, matching the way each
// category card carries its own colour.
export const PILLAR_COLORS: Record<Pillar, string> = {
  understand: '#A78BFA',
  living: '#38BDF8',
  'doing-business': '#FFC000',
};

export function getPillarColor(id: string): string {
  return PILLAR_COLORS[id as Pillar] ?? '#FFC000';
}
