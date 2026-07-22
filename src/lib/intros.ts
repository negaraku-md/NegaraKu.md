import type { Locale } from './categories';

// Curatorial opening essays per category (shown at the top of a category page).
// Categories without an entry fall back to their short blurb.
export const CATEGORY_INTRO: Record<string, Record<Locale, string>> = {
  history: {
    ms: 'Sejarah Malaysia ialah kisah sebuah persimpangan dunia. Dari kerajaan Hindu-Buddha purba di Lembah Bujang, ke kegemilangan Kesultanan Melaka, zaman penjajahan Portugis, Belanda dan British, pendudukan Jepun, perjuangan kemerdekaan, hinggalah pembentukan Malaysia — setiap zaman meninggalkan lapisannya pada negara hari ini. Terokai sejarah negara mengikut era.',
    en: "Malaysia's history is the story of a global crossroads. From the ancient Hindu-Buddhist kingdoms of the Bujang Valley, through the golden age of the Malacca Sultanate, the Portuguese, Dutch and British colonial eras, the Japanese occupation, the struggle for independence, and the formation of Malaysia — each age left its layer on the nation of today. Explore the country's history by era.",
    zh: '马来西亚的历史是一个世界十字路口的故事。从布央谷的古代印度教-佛教王国，到马六甲苏丹王朝的黄金时代，历经葡萄牙、荷兰与英国殖民时期、日据时期、独立斗争，直到马来西亚的成立——每个时代都为今日的国家留下了印记。按时代探索这个国家的历史。',
  },
  geography: {
    ms: 'Malaysia terbentang merentasi dua daratan yang dipisahkan Laut China Selatan — Semenanjung di barat dan Borneo di timur. Dari Banjaran Titiwangsa yang menjadi tulang belakang Semenanjung, ke Gunung Kinabalu yang menjulang di Sabah; dari Sungai Rajang yang terpanjang, ke pulau-pulau geopark Langkawi; iklim khatulistiwa dan dua musim monsun membentuk tanah dan kehidupan rakyatnya. Terokai geografi negara mengikut tema.',
    en: "Malaysia stretches across two landmasses split by the South China Sea — the Peninsula in the west and Borneo in the east. From the Titiwangsa Range that forms the Peninsula's spine, to Mount Kinabalu towering over Sabah; from the longest Rajang River, to the geopark islands of Langkawi; an equatorial climate and two monsoon seasons shape the land and its people. Explore the country's geography by theme.",
    zh: '马来西亚横跨被南中国海分隔的两块陆地——西部的半岛与东部的婆罗洲。从构成半岛脊梁的蒂迪旺沙山脉，到耸立于沙巴的京那巴鲁山；从最长的拉让江，到兰卡威的地质公园岛屿；赤道气候与两个季风季节塑造了这片土地及其人民。按主题探索这个国家的地理。',
  },
  culture: {
    ms: 'Budaya Malaysia ialah pertemuan tamadun — Melayu, Cina, India, Peranakan, dan puluhan masyarakat peribumi Sabah dan Sarawak, hidup berjiran selama berabad-abad. Dari perayaan yang penuh warna seperti Hari Raya, Tahun Baru Cina, Deepavali dan Gawai, ke adat perkahwinan, seni mempertahankan diri, dan kraf warisan seperti songket dan wau — kepelbagaian inilah jiwa negara. Terokai budaya Malaysia mengikut tema.',
    en: "Malaysia's culture is a meeting of civilisations — Malay, Chinese, Indian, Peranakan, and dozens of indigenous peoples of Sabah and Sarawak, living side by side for centuries. From colourful festivals like Hari Raya, Chinese New Year, Deepavali and Gawai, to wedding customs, martial arts, and heritage crafts like songket and wau kites — this diversity is the soul of the nation. Explore Malaysian culture by theme.",
    zh: '马来西亚的文化是文明的交汇——马来、华、印、土生华人，以及沙巴和砂拉越数十个原住民族群，数百年来比邻而居。从开斋节、农历新年、屠妖节与丰收节等缤纷节庆，到婚俗、武术，以及宋吉锦缎与风筝等传统工艺——这份多元正是国家的灵魂。按主题探索马来西亚文化。',
  },
  states: {
    ms: 'Malaysia terdiri daripada 13 negeri dan 3 wilayah persekutuan. Sembilan negeri Melayu mengekalkan Sultan atau Raja mereka; setiap negeri mempunyai sejarah, dialek, masakan, dan keperibadian tersendiri — dari Perlis yang mungil di utara, ke Johor di hujung selatan, merentasi Laut China Selatan ke Sabah dan Sarawak di Borneo. Terokai negeri dan wilayah mengikut rantau.',
    en: 'Malaysia is made up of 13 states and 3 federal territories. Nine Malay states retain their Sultans or Rulers; each state has its own history, dialect, cuisine, and personality — from tiny Perlis in the north, to Johor at the southern tip, across the South China Sea to Sabah and Sarawak on Borneo. Explore the states and territories by region.',
    zh: '马来西亚由 13 个州和 3 个联邦直辖区组成。九个马来州保留其苏丹或统治者；每个州都有自己的历史、方言、美食与个性——从北部小小的玻璃市，到最南端的柔佛，越过南中国海到婆罗洲的沙巴与砂拉越。按地区探索各州与直辖区。',
  },
  food: {
    ms: 'Makanan Malaysia ialah cerminan masyarakat majmuknya — pertemuan cita rasa Melayu, Cina, India, dan peribumi dalam satu pinggan. Dari nasi lemak dan laksa ke roti canai dan char kway teow, dari teh tarik di gerai mamak ke durian "raja buah" — makanan menyatukan rakyat merentasi kaum dan kelas. Terokai warisan masakan negara mengikut jenis.',
    en: "Malaysian food mirrors its plural society — a meeting of Malay, Chinese, Indian and indigenous flavours on one plate. From nasi lemak and laksa to roti canai and char kway teow, from teh tarik at the mamak stall to the durian 'king of fruits' — food unites people across race and class. Explore the country's culinary heritage by type.",
    zh: '马来西亚美食是其多元社会的写照——马来、华、印与原住民风味在一盘中交汇。从椰浆饭、叻沙到印度煎饼、炒粿条，从嘛嘛档的拉茶到“果王”榴莲——美食跨越种族与阶层，凝聚人民。按类别探索这个国家的烹饪传统。',
  },
  people: {
    ms: 'Malaysia dibentuk oleh tokoh-tokohnya — perdana menteri yang memimpin negara ke merdeka dan pembangunan, seniman dan penghibur yang mencorak budaya, atlet yang mengharumkan nama negara, serta perintis sains yang membuka jalan baharu. Terokai tokoh yang membentuk negara mengikut bidang.',
    en: 'Malaysia is shaped by its people — prime ministers who led the nation to independence and development, artists and entertainers who defined its culture, athletes who brought it glory, and science pioneers who opened new paths. Explore the figures who shaped the nation by field.',
    zh: '马来西亚由其人物塑造——带领国家走向独立与发展的首相、定义文化的艺术家与艺人、为国争光的运动员，以及开辟新路的科学先驱。按领域探索塑造国家的人物。',
  },
  religion: {
    ms: 'Malaysia ialah sebuah negara berbilang agama. Islam ialah agama persekutuan, sementara Perlembagaan menjamin kebebasan beragama bagi penganut Buddha, Hindu, Kristian, dan kepercayaan lain. Masjid, tokong, kuil, dan gereja berdiri berdekatan — cerminan keharmonian yang menjadi teras masyarakat majmuk. Terokai agama dan amalan di Malaysia.',
    en: "Malaysia is a multireligious nation. Islam is the religion of the federation, while the Constitution guarantees freedom of worship for Buddhists, Hindus, Christians, and others. Mosques, temples, and churches stand side by side — a reflection of the harmony at the heart of a plural society. Explore Malaysia's religions and practices.",
    zh: '马来西亚是一个多宗教国家。伊斯兰教是联邦宗教，而宪法保障佛教、印度教、基督教及其他信仰者的宗教自由。清真寺、庙宇与教堂比邻而立——正是多元社会核心和谐的写照。探索马来西亚的宗教与习俗。',
  },
  nature: {
    ms: 'Malaysia ialah antara 17 negara "megadiversiti" di dunia. Hutan hujan purba Borneo dan Semenanjung menaungi orang utan, harimau Malaya, dan bunga Rafflesia; laut dan terumbu karangnya penuh hidupan marin. Namun kekayaan ini berdepan tekanan pembangunan. Terokai alam semula jadi negara dan usaha memeliharanya.',
    en: "Malaysia is one of the world's 17 'megadiverse' countries. The ancient rainforests of Borneo and the Peninsula shelter orangutans, the Malayan tiger, and the Rafflesia flower; its seas and reefs teem with marine life. Yet this wealth faces the pressures of development. Explore the country's nature and the efforts to protect it.",
    zh: '马来西亚是全球 17 个“超级生物多样性”国家之一。婆罗洲与半岛的远古雨林庇护着红毛猩猩、马来虎与大王花；海洋与珊瑚礁充满海洋生物。然而这份财富正面临发展的压力。探索这个国家的自然及其保育努力。',
  },
  society: {
    ms: 'Masyarakat Malaysia ialah mozek berbilang kaum, agama, dan bahasa — Melayu, Cina, India, dan peribumi Sabah dan Sarawak. Dari sistem pendidikan berbilang aliran, penjagaan kesihatan awam, ke kehidupan bandar yang pesat — negara sentiasa mengimbangi kepelbagaian dengan perpaduan. Terokai masyarakat dan sistem sosial Malaysia.',
    en: "Malaysian society is a mosaic of races, religions, and languages — Malay, Chinese, Indian, and the indigenous peoples of Sabah and Sarawak. From a multi-stream education system and public healthcare to fast-growing urban life — the nation constantly balances diversity with unity. Explore Malaysia's society and social systems.",
    zh: '马来西亚社会是种族、宗教与语言的马赛克——马来、华、印，以及沙巴和砂拉越的原住民。从多源流教育体系、公共医疗，到快速发展的城市生活——国家不断在多元与团结之间取得平衡。探索马来西亚的社会与社会体系。',
  },
  economy: {
    ms: 'Ekonomi Malaysia telah berubah dari pergantungan pada getah dan bijih timah kepada perindustrian, elektronik, dan perkhidmatan. Minyak sawit dan tenaga menyumbang besar, manakala pelancongan dan kewangan berkembang pesat. Terokai komoditi, tenaga, perindustrian, dan perkhidmatan yang menggerakkan negara.',
    en: "Malaysia's economy has shifted from a reliance on rubber and tin to manufacturing, electronics, and services. Palm oil and energy remain major contributors, while tourism and finance grow rapidly. Explore the commodities, energy, industry, and services that drive the nation.",
    zh: '马来西亚经济已从依赖橡胶与锡矿，转向制造业、电子业与服务业。棕油与能源仍是主要贡献，旅游与金融则快速增长。探索驱动国家的大宗商品、能源、工业与服务业。',
  },
  technology: {
    ms: 'Malaysia membina masa depan digitalnya di atas asas industri elektronik dan semikonduktor yang berdekad lamanya. Dari Koridor Raya Multimedia dan Cyberjaya ke industri cip Pulau Pinang, program angkasa, dan gelombang syarikat pemula — negara berusaha bergerak menaiki rantaian nilai teknologi. Terokai teknologi Malaysia mengikut bidang.',
    en: "Malaysia is building its digital future on decades of electronics and semiconductor industry. From the Multimedia Super Corridor and Cyberjaya to Penang's chip industry, a space programme, and a wave of startups — the nation is working to move up the technology value chain. Explore Malaysian technology by field.",
    zh: '马来西亚在数十年电子与半导体产业的基础上打造数字未来。从多媒体超级走廊、赛城，到槟城的芯片产业、航天计划与新创浪潮——国家正努力向技术价值链上游迈进。按领域探索马来西亚科技。',
  },
  languages: {
    ms: 'Malaysia ialah negara berbilang bahasa. Bahasa Malaysia menyatukan rakyat sebagai bahasa kebangsaan, di samping bahasa Inggeris, dialek Cina, Tamil, dan puluhan bahasa peribumi Sabah dan Sarawak. Tulisan Jawi dan Rumi pula mewarnai sejarah penulisannya. Terokai bahasa dan tulisan yang membentuk suara negara.',
    en: "Malaysia is a multilingual nation. Bahasa Malaysia unites the people as the national language, alongside English, Chinese dialects, Tamil, and dozens of indigenous languages of Sabah and Sarawak. The Jawi and Rumi scripts colour its written history. Explore the languages and scripts that form the nation's voice.",
    zh: '马来西亚是一个多语言国家。马来语作为国语凝聚人民，此外还有英语、华语方言、淡米尔语，以及沙巴和砂拉越数十种原住民语言。爪夷文与罗马字则丰富了其书写历史。探索构成国家之声的语言与文字。',
  },
  'art-music': {
    ms: 'Seni Malaysia terbentang dari kraf warisan seperti batik dan ukiran, ke seni persembahan tradisional seperti wayang kulit dan mak yong, muzik dari gamelan ke pop moden, dan sinema dari zaman P. Ramlee ke pembikin filem baharu. Terokai seni dan muzik yang menghidupkan budaya negara.',
    en: "Malaysian art spans heritage crafts like batik and carving, traditional performing arts like wayang kulit and mak yong, music from gamelan to modern pop, and cinema from the P. Ramlee era to new filmmakers. Explore the art and music that bring the nation's culture to life.",
    zh: '马来西亚艺术涵盖蜡染、雕刻等传统工艺，皮影戏、玛蓉舞等传统表演艺术，从甘美兰到现代流行的音乐，以及从 P. Ramlee 时代到新一代影人的电影。探索让国家文化鲜活起来的艺术与音乐。',
  },
  lifestyle: {
    ms: 'Kehidupan harian di Malaysia berlegar di sekitar makanan, pasar, dan perhubungan masyarakat. Dari gerai mamak 24 jam dan kopitiam ke pasar malam yang meriah, dari badminton dan sepak takraw ke kehidupan bandar yang pesat — inilah irama sebenar rakyat Malaysia. Terokai gaya hidup negara mengikut tema.',
    en: "Daily life in Malaysia revolves around food, markets, and community. From 24-hour mamak stalls and kopitiam to bustling night markets, from badminton and sepak takraw to fast-paced urban life — this is the real rhythm of Malaysians. Explore the country's lifestyle by theme.",
    zh: '马来西亚的日常生活围绕着美食、市场与社群。从 24 小时嘛嘛档、咖啡店到热闹的夜市，从羽毛球、藤球到快节奏的城市生活——这正是马来西亚人真实的生活节奏。按主题探索这个国家的生活方式。',
  },
  'business-regions': {
    ms: 'Berniaga mengikut wilayah di Malaysia — dari Kuala Lumpur, Selangor, dan Pulau Pinang ke Johor, Sabah, dan Sarawak, serta koridor ekonomi seperti Iskandar Malaysia. Setiap wilayah mempunyai ekosistem, kos, bakat, dan insentif tersendiri. Panduan lokasi untuk usahawan dan pelabur. Nota: maklumat umum, bukan nasihat profesional.',
    en: "Doing business by region in Malaysia — from Kuala Lumpur, Selangor, and Penang to Johor, Sabah, and Sarawak, plus economic corridors like Iskandar Malaysia. Each region has its own ecosystem, costs, talent, and incentives. Location guides for founders and investors. Note: general information, not professional advice.",
    zh: '在马来西亚各地营商——从吉隆坡、雪兰莪、槟城，到柔佛、沙巴与砂拉越，以及依斯干达等经济走廊。每个地区都有其独特的生态、成本、人才与优惠。为创业者与投资者提供的选址指南。注：一般信息，非专业建议。',
  },
  destinations: {
    ms: 'Destinasi Malaysia — dari hiruk-pikuk Kuala Lumpur dan warisan George Town, ke pantai Langkawi dan Pulau Perhentian, hutan hujan Taman Negara, dan puncak Gunung Kinabalu di Borneo. Panduan tempat, alam, pulau, dan maklumat perjalanan untuk pengembara. Terokai mengikut wilayah.',
    en: "Malaysia's destinations — from the buzz of Kuala Lumpur and the heritage of George Town, to the beaches of Langkawi and the Perhentian Islands, the rainforest of Taman Negara, and the summit of Mount Kinabalu on Borneo. Place, nature, island, and travel-info guides for the traveller. Explore by region.",
    zh: '马来西亚的目的地——从吉隆坡的热闹与乔治市的遗产，到兰卡威的海滩与停泊岛，塔曼尼加拉的雨林，以及婆罗洲京那巴鲁山的峰顶。为旅人准备的地点、自然、岛屿与旅行资讯指南。按地区探索。',
  },
  'business-industries': {
    ms: 'Industri dan sektor Malaysia — dari pembuatan E&E dan semikonduktor, sawit dan komoditi, minyak dan gas, ke perkhidmatan kewangan, ekonomi digital, hartanah, pelancongan, dan perdagangan antarabangsa. Panduan sektor untuk pelabur, usahawan, dan penganalisis. Nota: maklumat umum, bukan nasihat pelaburan.',
    en: "Malaysia's industries and sectors — from E&E and semiconductor manufacturing, palm oil and commodities, oil and gas, to financial services, the digital economy, real estate, tourism, and international trade. Sector guides for investors, founders, and analysts. Note: general information, not investment advice.",
    zh: '马来西亚的行业与领域——从电子电气与半导体制造、棕油与商品、油气，到金融服务、数字经济、房地产、旅游与国际贸易。为投资者、创业者与分析师提供的行业指南。注：一般信息，非投资建议。',
  },
  'business-tax': {
    ms: 'Cukai dan pematuhan di Malaysia — cukai korporat dan peribadi, SST, cukai pegangan, insentif cukai, RPGT, harga pindahan, e-invois, pengauditan, dan regulasi khusus sektor. Panduan praktikal untuk memenuhi kewajipan LHDN dan Kastam. Nota: maklumat umum, bukan nasihat cukai profesional.',
    en: "Tax and compliance in Malaysia — corporate and personal tax, SST, withholding tax, tax incentives, RPGT, transfer pricing, e-invoicing, audit, and sector-specific regulation. A practical guide to meeting LHDN and Customs obligations. Note: general information, not professional tax advice.",
    zh: '马来西亚的税务与合规——企业与个人所得税、销售服务税、预扣税、税务优惠、产业盈利税、转让定价、电子发票、审计与行业监管。满足内陆税收局与关税局义务的实用指南。注：一般信息，非专业税务建议。',
  },
  'business-start': {
    ms: 'Menubuhkan perniagaan di Malaysia — dari memilih struktur Sdn Bhd atau LLP, mendaftar dengan SSM, memenuhi keperluan pengarah dan pemegang saham, hingga pematuhan setiausaha syarikat, HR, perbankan, dan penutupan. Panduan praktikal untuk usahawan tempatan dan asing. Nota: maklumat umum, bukan nasihat profesional.',
    en: "Setting up a business in Malaysia — from choosing a Sdn Bhd or LLP structure, registering with SSM, meeting director and shareholder requirements, through company-secretarial compliance, HR, banking, and closure. A practical guide for local and foreign founders. Note: general information, not professional advice.",
    zh: '在马来西亚创业——从选择私人有限公司或有限责任合伙的架构、向 SSM 注册、满足董事与股东要求，到公司秘书合规、人力资源、银行与关闭。为本地与外国创业者提供的实用指南。注：一般信息，非专业建议。',
  },
  politics: {
    ms: 'Malaysia mengamalkan demokrasi berparlimen dan raja berperlembagaan yang unik, dengan Yang di-Pertuan Agong dipilih bergilir dari kalangan sembilan Sultan. Sistem persekutuannya mengimbangi kuasa antara kerajaan pusat dan negeri, digerakkan oleh parti, pilihan raya, dan dasar awam. Terokai politik dan pemerintahan Malaysia.',
    en: "Malaysia practises a unique parliamentary democracy and constitutional monarchy, with the Yang di-Pertuan Agong rotating among nine Sultans. Its federal system balances power between the central and state governments, driven by parties, elections, and public policy. Explore Malaysia's politics and governance.",
    zh: '马来西亚实行独特的议会民主与君主立宪制，最高元首在九位苏丹之间轮任。其联邦制在中央与州政府之间平衡权力，由政党、选举与公共政策推动。探索马来西亚的政治与治理。',
  },
};

export function getCategoryIntro(id: string, locale: Locale): string | undefined {
  return CATEGORY_INTRO[id]?.[locale];
}
