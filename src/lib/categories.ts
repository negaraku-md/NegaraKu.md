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

export type Locale = 'ms' | 'en' | 'zh';

/** How a category's page is laid out. */
export type Archetype = 'service' | 'narrative' | 'place' | 'reference' | 'lookup' | 'data';

export interface ArchetypeDef {
  id: Archetype;
  icon: string;
  name: Record<Locale, string>;
  /** One-line description of the view pattern. */
  pattern: Record<Locale, string>;
}

export const ARCHETYPES: ArchetypeDef[] = [
  {
    id: 'service',
    icon: '🧭',
    name: { ms: 'Perkhidmatan / Prosedur', en: 'Service / Procedural', zh: '服务 / 流程' },
    pattern: {
      ms: 'Tugasan dahulu → kelompok topik → langkah, senarai semak, kalkulator',
      en: 'Task-first → topic clusters → steps, checklists, calculators',
      zh: '任务优先 → 主题群组 → 步骤、清单、计算器',
    },
  },
  {
    id: 'narrative',
    icon: '📜',
    name: { ms: 'Naratif / Garis Masa', en: 'Narrative / Timeline', zh: '叙事 / 时间线' },
    pattern: {
      ms: 'Tulang belakang era → kad cerita → bacaan panjang pilihan',
      en: 'Era spine → story cards → featured long-read',
      zh: '时代主线 → 故事卡 → 精选长文',
    },
  },
  {
    id: 'place',
    icon: '📍',
    name: { ms: 'Tempat / Entiti', en: 'Place / Entity', zh: '地方 / 实体' },
    pattern: {
      ms: 'Peta → penapis wilayah → kad tempat berstruktur',
      en: 'Map → region filter → structured place cards',
      zh: '地图 → 区域筛选 → 结构化地方卡',
    },
  },
  {
    id: 'reference',
    icon: '🏛',
    name: { ms: 'Rujukan / Direktori', en: 'Reference / Directory', zh: '参考 / 名录' },
    pattern: {
      ms: 'Jadual rekod berstruktur yang boleh ditapis',
      en: 'Filterable table of structured records',
      zh: '可筛选的结构化记录表',
    },
  },
  {
    id: 'lookup',
    icon: '📖',
    name: { ms: 'Carian Istilah', en: 'Lookup', zh: '术语查询' },
    pattern: {
      ms: 'Carian dahulu → indeks A–Z → kad definisi',
      en: 'Search-first → A–Z index → definition cards',
      zh: '搜索优先 → A–Z 索引 → 定义卡',
    },
  },
  {
    id: 'data',
    icon: '📊',
    name: { ms: 'Data / Petunjuk', en: 'Data / Indicators', zh: '数据 / 指标' },
    pattern: {
      ms: 'Kad petunjuk → carta → perbandingan',
      en: 'Indicator cards → charts → comparisons',
      zh: '指标卡 → 图表 → 对比',
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
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
}

export const PILLARS: PillarDef[] = [
  {
    id: 'understand',
    icon: '📖',
    name: { ms: 'Kenali Malaysia', en: 'Understand Malaysia', zh: '认识马来西亚' },
    tagline: {
      ms: 'Sejarah, kerajaan, undang-undang, ekonomi dan budaya sebuah negara majmuk.',
      en: 'History, government, law, economy and culture of a plural nation.',
      zh: '一个多元国度的历史、政府、法律、经济与文化。',
    },
  },
  {
    id: 'living',
    icon: '🏠',
    name: { ms: 'Hidup di Malaysia', en: 'Living in Malaysia', zh: '在马来西亚生活' },
    tagline: {
      ms: 'Perkhidmatan kerajaan, kesihatan, pendidikan, pengangkutan dan hartanah.',
      en: 'Government services, healthcare, education, transport and property.',
      zh: '政府服务、医疗、教育、交通与房地产。',
    },
  },
  {
    id: 'doing-business',
    icon: '💼',
    name: { ms: 'Berniaga di Malaysia', en: 'Doing Business in Malaysia', zh: '在马来西亚经商' },
    tagline: {
      ms: 'Penubuhan, cukai, perakaunan, audit dan pematuhan untuk perniagaan.',
      en: 'Formation, tax, accounting, audit and compliance for business.',
      zh: '公司设立、税务、会计、审计与合规。',
    },
  },
];

export interface Category {
  id: string;
  icon: string;
  /** Localized display names. */
  name: Record<Locale, string>;
  /** Short localized descriptions. */
  blurb: Record<Locale, string>;
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
    icon: '🇲🇾',
    name: { ms: 'Malaysia', en: 'Malaysia', zh: '马来西亚' },
    blurb: {
      ms: 'Gambaran negara, sejarah, geografi, identiti nasional dan statistik.',
      en: 'Country overview, history, geography, national identity and statistics.',
      zh: '国家概况、历史、地理、国家认同与统计数据。',
    },
    archetype: 'narrative',
    pillar: 'understand',
    launch: true,
  },
  {
    id: 'states',
    icon: '📍',
    name: { ms: 'Negeri & Wilayah', en: 'States & Territories', zh: '州与联邦直辖区' },
    blurb: {
      ms: '13 negeri dan 3 wilayah persekutuan — geografi, ekonomi dan pentadbiran.',
      en: 'Thirteen states and three federal territories — geography, economy, government.',
      zh: '13个州与3个联邦直辖区——地理、经济与行政。',
    },
    archetype: 'place',
    pillar: 'understand',
    launch: true,
  },
  {
    id: 'government',
    icon: '🏛',
    name: { ms: 'Kerajaan', en: 'Government', zh: '政府' },
    blurb: {
      ms: 'Kerajaan persekutuan, negeri dan tempatan, kementerian dan agensi.',
      en: 'Federal, state and local government, ministries and agencies.',
      zh: '联邦、州与地方政府、部门与机构。',
    },
    archetype: 'reference',
    pillar: 'understand',
    launch: true,
  },
  {
    id: 'law',
    icon: '⚖',
    name: { ms: 'Undang-Undang', en: 'Law & Regulations', zh: '法律与法规' },
    blurb: {
      ms: 'Akta, peraturan, garis panduan dan prosedur perundangan.',
      en: 'Acts, regulations, guidelines and legal procedures.',
      zh: '法令、条例、指南与法律程序。',
    },
    archetype: 'reference',
    pillar: 'understand',
    launch: true,
  },
  {
    id: 'economy',
    icon: '📈',
    name: { ms: 'Ekonomi', en: 'Economy', zh: '经济' },
    blurb: {
      ms: 'KDNK, inflasi, perdagangan dan petunjuk ekonomi.',
      en: 'GDP, inflation, trade and economic indicators.',
      zh: 'GDP、通胀、贸易与经济指标。',
    },
    archetype: 'data',
    pillar: 'understand',
    launch: true,
  },
  {
    id: 'arts-culture',
    icon: '🎭',
    name: { ms: 'Seni & Budaya', en: 'Arts & Culture', zh: '艺术与文化' },
    blurb: {
      ms: 'Bahasa, perayaan, muzium, warisan dan tradisi.',
      en: 'Languages, festivals, museums, heritage and traditions.',
      zh: '语言、节庆、博物馆、遗产与传统。',
    },
    archetype: 'narrative',
    pillar: 'understand',
    launch: true,
  },
  {
    id: 'glossary',
    icon: '📖',
    name: { ms: 'Glosari', en: 'Glossary', zh: '术语库' },
    blurb: {
      ms: 'Istilah Malaysia dijelaskan dalam tiga bahasa.',
      en: 'Malaysian terms defined across three languages.',
      zh: '以三种语言解释的马来西亚术语。',
    },
    archetype: 'lookup',
    pillar: 'understand',
    launch: true,
  },
  {
    id: 'international',
    icon: '🌏',
    name: { ms: 'Antarabangsa', en: 'International', zh: '国际' },
    blurb: {
      ms: 'ASEAN, perjanjian dan hubungan perdagangan.',
      en: 'ASEAN, treaties and trade agreements.',
      zh: '东盟、条约与贸易协定。',
    },
    archetype: 'reference',
    pillar: 'understand',
    launch: false,
  },

  // ---------------- Business ----------------
  {
    id: 'business',
    icon: '💼',
    name: { ms: 'Perniagaan', en: 'Business', zh: '商业' },
    blurb: {
      ms: 'Memulakan, mengendali, mengembang dan menutup perniagaan.',
      en: 'Starting, operating, growing and closing a business.',
      zh: '创办、经营、发展与结束企业。',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },
  {
    id: 'taxation',
    icon: '🧾',
    name: { ms: 'Percukaian', en: 'Taxation', zh: '税务' },
    blurb: {
      ms: 'Cukai individu, cukai korporat, SST, duti setem dan insentif.',
      en: 'Personal tax, corporate tax, SST, stamp duty and incentives.',
      zh: '个人税、企业税、销售服务税、印花税与优惠。',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },
  {
    id: 'company-secretary',
    icon: '📑',
    name: { ms: 'Setiausaha Syarikat', en: 'Company Secretary', zh: '公司秘书' },
    blurb: {
      ms: 'Akta Syarikat, pematuhan, tadbir urus dan pemfailan.',
      en: 'Companies Act, compliance, governance and filings.',
      zh: '公司法、合规、治理与申报。',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },
  {
    id: 'accounting',
    icon: '📊',
    name: { ms: 'Perakaunan', en: 'Accounting', zh: '会计' },
    blurb: {
      ms: 'Piawaian, simpan kira, pelaporan dan e-Invois.',
      en: 'Standards, bookkeeping, reporting and e-Invoicing.',
      zh: '准则、簿记、报告与电子发票。',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },
  {
    id: 'audit',
    icon: '🔍',
    name: { ms: 'Audit & Jaminan', en: 'Audit & Assurance', zh: '审计与鉴证' },
    blurb: {
      ms: 'Keperluan audit, piawaian dan perkhidmatan jaminan.',
      en: 'Audit requirements, standards and assurance services.',
      zh: '审计要求、准则与鉴证服务。',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },
  {
    id: 'employment',
    icon: '👥',
    name: { ms: 'Pekerjaan & HR', en: 'Employment & HR', zh: '就业与人力资源' },
    blurb: {
      ms: 'Undang-undang buruh, KWSP, PERKESO, payroll dan pengambilan.',
      en: 'Labour law, EPF, SOCSO, payroll and hiring.',
      zh: '劳工法、公积金、社险、薪资与招聘。',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: true,
  },
  {
    id: 'finance',
    icon: '💰',
    name: { ms: 'Kewangan & Perbankan', en: 'Finance & Banking', zh: '金融与银行' },
    blurb: {
      ms: 'Perbankan, pembayaran, insurans, pelaburan dan pembiayaan.',
      en: 'Banking, payments, insurance, investments and financing.',
      zh: '银行、支付、保险、投资与融资。',
    },
    archetype: 'service',
    pillar: 'doing-business',
    launch: false,
  },
  {
    id: 'industries',
    icon: '🏭',
    name: { ms: 'Industri', en: 'Industries', zh: '行业' },
    blurb: {
      ms: 'Pembuatan, F&B, pembinaan, teknologi dan lain-lain.',
      en: 'Manufacturing, F&B, construction, technology and more.',
      zh: '制造业、餐饮、建筑、科技等。',
    },
    archetype: 'data',
    pillar: 'doing-business',
    launch: false,
  },
  {
    id: 'companies',
    icon: '🏢',
    name: { ms: 'Syarikat', en: 'Companies', zh: '公司' },
    blurb: {
      ms: 'Profil syarikat, syarikat tersenarai dan PKS.',
      en: 'Company profiles, listed companies and SMEs.',
      zh: '公司简介、上市公司与中小企业。',
    },
    archetype: 'reference',
    pillar: 'doing-business',
    launch: false,
  },
  {
    id: 'technology',
    icon: '💻',
    name: { ms: 'Teknologi & AI', en: 'Technology & AI', zh: '科技与人工智能' },
    blurb: {
      ms: 'Transformasi digital, AI, keselamatan siber dan perisian.',
      en: 'Digital transformation, AI, cybersecurity and software.',
      zh: '数字转型、人工智能、网络安全与软件。',
    },
    archetype: 'narrative',
    pillar: 'doing-business',
    launch: false,
  },

  // ---------------- Living ----------------
  {
    id: 'education',
    icon: '🎓',
    name: { ms: 'Pendidikan', en: 'Education', zh: '教育' },
    blurb: {
      ms: 'Sekolah, universiti, TVET dan biasiswa.',
      en: 'Schools, universities, TVET and scholarships.',
      zh: '学校、大学、技职教育与奖学金。',
    },
    archetype: 'service',
    pillar: 'living',
    launch: false,
  },
  {
    id: 'healthcare',
    icon: '🩺',
    name: { ms: 'Kesihatan', en: 'Healthcare', zh: '医疗保健' },
    blurb: {
      ms: 'Kesihatan awam, hospital swasta dan insurans.',
      en: 'Public healthcare, private hospitals and insurance.',
      zh: '公共医疗、私立医院与保险。',
    },
    archetype: 'service',
    pillar: 'living',
    launch: false,
  },
  {
    id: 'property',
    icon: '🏠',
    name: { ms: 'Hartanah', en: 'Property', zh: '房地产' },
    blurb: {
      ms: 'Membeli, menyewa, tanah, strata dan pembiayaan.',
      en: 'Buying, renting, land, strata and financing.',
      zh: '购买、租赁、土地、分层地契与融资。',
    },
    archetype: 'service',
    pillar: 'living',
    launch: false,
  },
  {
    id: 'transport',
    icon: '🚗',
    name: { ms: 'Pengangkutan', en: 'Transport', zh: '交通' },
    blurb: {
      ms: 'Jalan raya, kereta api, penerbangan, maritim dan pengangkutan awam.',
      en: 'Roads, rail, aviation, maritime and public transport.',
      zh: '公路、铁路、航空、海运与公共交通。',
    },
    archetype: 'service',
    pillar: 'living',
    launch: false,
  },
  {
    id: 'tourism',
    icon: '🌍',
    name: { ms: 'Pelancongan', en: 'Tourism', zh: '旅游' },
    blurb: {
      ms: 'Destinasi, perjalanan, budaya dan warisan.',
      en: 'Destinations, travel, culture and heritage.',
      zh: '目的地、旅行、文化与遗产。',
    },
    archetype: 'place',
    pillar: 'living',
    launch: false,
  },
  {
    id: 'food-lifestyle',
    icon: '🍜',
    name: { ms: 'Makanan & Gaya Hidup', en: 'Food & Lifestyle', zh: '美食与生活' },
    blurb: {
      ms: 'Masakan Malaysia, gaya hidup dan membeli-belah.',
      en: 'Malaysian cuisine, lifestyle and shopping.',
      zh: '马来西亚美食、生活方式与购物。',
    },
    archetype: 'narrative',
    pillar: 'living',
    launch: false,
  },
  {
    id: 'public-safety',
    icon: '🛡',
    name: { ms: 'Keselamatan Awam', en: 'Public Safety', zh: '公共安全' },
    blurb: {
      ms: 'Polis, bomba dan perkhidmatan kecemasan.',
      en: 'Police, fire and emergency services.',
      zh: '警察、消防与紧急服务。',
    },
    archetype: 'service',
    pillar: 'living',
    launch: false,
  },
  {
    id: 'agriculture',
    icon: '🌱',
    name: { ms: 'Pertanian', en: 'Agriculture', zh: '农业' },
    blurb: {
      ms: 'Pertanian, perikanan dan perladangan.',
      en: 'Farming, fisheries and plantations.',
      zh: '农耕、渔业与种植园。',
    },
    archetype: 'data',
    pillar: 'living',
    launch: false,
  },
  {
    id: 'energy',
    icon: '⚡',
    name: { ms: 'Tenaga & Utiliti', en: 'Energy & Utilities', zh: '能源与公用事业' },
    blurb: {
      ms: 'Elektrik, air dan tenaga boleh baharu.',
      en: 'Electricity, water and renewable energy.',
      zh: '电力、水务与可再生能源。',
    },
    archetype: 'data',
    pillar: 'living',
    launch: false,
  },
  {
    id: 'environment',
    icon: '🌳',
    name: { ms: 'Alam Sekitar', en: 'Environment', zh: '环境' },
    blurb: {
      ms: 'Kelestarian, iklim dan pengurusan sisa.',
      en: 'Sustainability, climate and waste management.',
      zh: '可持续发展、气候与废物管理。',
    },
    archetype: 'data',
    pillar: 'living',
    launch: false,
  },
  {
    id: 'sports',
    icon: '⚽',
    name: { ms: 'Sukan', en: 'Sports', zh: '体育' },
    blurb: {
      ms: 'Sukan negara, persatuan dan kemudahan.',
      en: 'National sports, associations and facilities.',
      zh: '国家体育、协会与设施。',
    },
    archetype: 'narrative',
    pillar: 'living',
    launch: false,
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
};

export function getCategoryColor(id: string): string {
  return CATEGORY_COLORS[id] ?? '#FFC000';
}
