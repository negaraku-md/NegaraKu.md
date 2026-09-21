import type { Locale } from './categories';

// The languages advertised in the UI (language switcher + hreflang alternates).
// A locale is added here only once its full corpus + chrome are launch-ready; before
// that it is soft-launched (routes/chrome built, but held OUT of this list so its /
// pages stay noindex and out of the sitemap, and the switcher never points at a page
// that isn't ready). Japanese (`ja`) open-launched 2026-09-20: full 1,094-article corpus
// translated + chrome localized.
export const LOCALES: Locale[] = ['ms', 'en', 'zh', 'ta', 'ja'];
export const DEFAULT_LOCALE: Locale = 'ms';

export const LOCALE_NAMES: Record<Locale, string> = {
  ms: 'Bahasa Malaysia',
  en: 'English',
  zh: '中文',
  ta: 'தமிழ்',
  ja: '日本語',
};

/** UI string table. Keep keys stable; fall back to `ms` if a value is missing. */
const STRINGS = {
  'site.title': {
    ms: 'NegaraKu.md',
    en: 'NegaraKu.md',
    zh: 'NegaraKu.md',
    ta: 'NegaraKu.md',
    ja: 'NegaraKu.md',
  },
  'site.tagline': {
    ms: 'Pangkalan pengetahuan sumber terbuka tentang Malaysia',
    en: 'An open-source knowledge base about Malaysia',
    zh: '关于马来西亚的开源知识库',
    ta: 'மலேசியா பற்றிய ஒரு திறந்த மூல அறிவுத் தளம்',
    ja: 'マレーシアに関するオープンソースの知識ベース',
  },
  // Homepage meta description — a full ~150-char sentence (the short tagline
  // above is too brief for search snippets; Bing flagged it). Not shown on-page.
  'site.homeDescription': {
    ms: 'Pangkalan pengetahuan sumber terbuka dan mesra-AI tentang Malaysia — kerajaan, undang-undang, perniagaan, cukai, budaya dan kehidupan harian, berpetikan sumber, dalam lima bahasa.',
    en: 'A free, open-source, AI-friendly knowledge base about Malaysia — its government, laws, business, tax, culture and daily life, cited and available in five languages.',
    zh: 'NegaraKu.md 是一个关于马来西亚的开源、对 AI 友好的知识库，涵盖政府、法律、商业、税务、文化与日常生活，内容附引用来源，并提供五种语言版本。',
    ta: 'மலேசியா பற்றிய இலவச, திறந்த மூல, AI-நட்பு அறிவுத் தளம் — அரசாங்கம், சட்டம், வணிகம், வரி, பண்பாடு மற்றும் அன்றாட வாழ்க்கை, மேற்கோள்களுடன், ஐந்து மொழிகளில்.',
    ja: 'マレーシアに関する無料・オープンソース・AIフレンドリーな知識ベース。政府・法律・ビジネス・税務・文化・日常生活を、出典付きで、5言語で提供します。',
  },
  // Short brand tagline shown under the wordmark in the header lockup — the "what".
  'brand.tagline': {
    ms: 'Malaysia mesra-AI',
    en: 'AI-friendly Malaysia',
    zh: 'AI 友好的马来西亚',
    ta: 'AI-நட்பு மலேசியா',
    ja: 'AIフレンドリーなマレーシア',
  },
  // Mission — the "why we exist". Distinct from brand.tagline (the "what"); a
  // rallying line, not a descriptor. Reused across About, hero, and metadata.
  'site.mission': {
    ms: 'Biar dunia mengenali Malaysia',
    en: 'Let the world know about Malaysia',
    zh: '让世界认识马来西亚',
    ta: 'மலேசியாவை உலகம் அறியட்டும்',
    ja: '世界にマレーシアを知ってもらおう',
  },
  'nav.categories': { ms: 'Kategori', en: 'Categories', zh: '分类', ta: 'பிரிவுகள்', ja: 'カテゴリー' },
  'nav.search': { ms: 'Cari', en: 'Search', zh: '搜索', ta: 'தேடு', ja: '検索' },
  // One placeholder for every site-wide search box (home hero, Explore, /search).
  'search.placeholder': {
    ms: 'Cari Malaysia — orang, tempat, peristiwa…',
    en: 'Search Malaysia — people, places, events…',
    zh: '搜索马来西亚 — 人物、地点、事件…',
    ta: 'மலேசியாவைத் தேடுங்கள் — நபர்கள், இடங்கள், நிகழ்வுகள்…',
    ja: 'マレーシアを検索 — 人物、場所、出来事…',
  },
  'nav.about': { ms: 'Tentang', en: 'About', zh: '关于', ta: 'பற்றி', ja: '概要' },
  'nav.contribute': { ms: 'Sumbang', en: 'Contribute', zh: '贡献', ta: 'பங்களி', ja: '貢献' },
  'nav.explore': { ms: 'Terokai', en: 'Explore', zh: '探索', ta: 'ஆராய்க', ja: '探索' },
  'nav.articles': { ms: 'Semua Artikel', en: 'All Articles', zh: '所有文章', ta: 'அனைத்து கட்டுரைகள்', ja: 'すべての記事' },
  'nav.graph': { ms: 'Graf Pengetahuan', en: 'Knowledge Graph', zh: '知识图谱', ta: 'அறிவு வரைபடம்', ja: 'ナレッジグラフ' },
  'nav.understand': { ms: 'Kenali', en: 'Understand', zh: '认识', ta: 'புரிதல்', ja: '知る' },
  'nav.visit': { ms: 'Lawati', en: 'Visit', zh: '游览', ta: 'பயணம்', ja: '訪れる' },
  'nav.living': { ms: 'Hidup', en: 'Living', zh: '生活', ta: 'வாழ்க்கை', ja: '暮らす' },
  'nav.business': { ms: 'Bisnes', en: 'Business', zh: '经商', ta: 'வணிகம்', ja: 'ビジネス' },
  'nav.more': { ms: 'Lagi', en: 'More', zh: '更多', ta: 'மேலும்', ja: 'その他' },
  'nav.settings': { ms: 'Tetapan', en: 'Settings', zh: '设置', ta: 'அமைப்புகள்', ja: '設定' },
  'nav.data': { ms: 'Data', en: 'Data', zh: '数据', ta: 'தரவு', ja: 'データ' },
  'nav.dashboard': { ms: 'Papan Pemuka', en: 'Dashboard', zh: '仪表板', ta: 'டாஷ்போர்டு', ja: 'ダッシュボード' },
  'nav.analytics': { ms: 'Analitik', en: 'Analytics', zh: '分析', ta: 'பகுப்பாய்வு', ja: 'アナリティクス' },
  'nav.elections': { ms: 'Pilihan Raya', en: 'Elections', zh: '选举', ta: 'தேர்தல்கள்', ja: '選挙' },
  'nav.aboutPage': { ms: 'Tentang Kami', en: 'About Us', zh: '关于我们', ta: 'எங்களைப் பற்றி', ja: '私たちについて' },
  'nav.changelog': { ms: 'Log Perubahan', en: 'Changelog', zh: '更新日志', ta: 'மாற்ற பதிவு', ja: '変更履歴' },
  'nav.milestones': { ms: 'Pencapaian Penting', en: 'Milestones', zh: '里程碑', ta: 'மைல்கற்கள்', ja: 'マイルストーン' },
  'nav.site': { ms: 'Laman', en: 'Site', zh: '网站', ta: 'தளம்', ja: 'サイト' },
  'nav.exploreMalaysia': { ms: 'Terokai Malaysia', en: 'Explore Malaysia', zh: '探索马来西亚', ta: 'மலேசியாவை ஆராய்க', ja: 'マレーシアを探索' },
  'nav.latest': { ms: 'Terkini', en: 'Latest', zh: '最新', ta: 'சமீபத்தியவை', ja: '最新' },
  'nav.timeline': { ms: 'Garis Masa', en: 'Timeline', zh: '时间线', ta: 'காலவரிசை', ja: 'タイムライン' },
  'nav.trending': { ms: 'Paling Banyak Dibaca', en: 'Most Read', zh: '最多阅读', ta: 'அதிகம் படித்தவை', ja: 'よく読まれている' },
  'nav.understandMalaysia': { ms: 'Kenali Malaysia', en: 'Understand Malaysia', zh: '认识马来西亚', ta: 'மலேசியாவைப் புரிந்துகொள்க', ja: 'マレーシアを知る' },
  'nav.livingMalaysia': { ms: 'Hidup di Malaysia', en: 'Living in Malaysia', zh: '在马来西亚生活', ta: 'மலேசியாவில் வாழ்க்கை', ja: 'マレーシアで暮らす' },
  'nav.businessMalaysia': { ms: 'Berniaga di Malaysia', en: 'Doing Business in Malaysia', zh: '在马来西亚经商', ta: 'மலேசியாவில் வணிகம்', ja: 'マレーシアでビジネス' },
  'nav.team': { ms: 'Pasukan Kami', en: 'Our Team', zh: '我们的团队', ta: 'எங்கள் குழு', ja: '私たちのチーム' },
  'nav.faq': { ms: 'Soalan Lazim', en: 'FAQ', zh: '常见问题', ta: 'அடிக்கடி கேட்கப்படும் கேள்விகள்', ja: 'よくある質問' },
  'nav.submitArticle': { ms: 'Hantar Artikel', en: 'Submit Article', zh: '提交文章', ta: 'கட்டுரை சமர்ப்பி', ja: '記事を投稿' },
  'nav.donate': { ms: 'Derma Token AI Anda', en: 'Donate Your AI Token', zh: '捐赠你的 AI Token', ta: 'உங்கள் AI டோக்கனை நன்கொடை அளியுங்கள்', ja: 'AIトークンを寄付' },
  'nav.support': { ms: 'Sokong NegaraKu.md', en: 'Support NegaraKu.md', zh: '支持 NegaraKu.md', ta: 'NegaraKu.md-ஐ ஆதரியுங்கள்', ja: 'NegaraKu.md を支援' },
  'nav.whyContribute': { ms: 'Kenapa Menyumbang', en: 'Why Contribute', zh: '为何贡献', ta: 'ஏன் பங்களிக்க வேண்டும்', ja: '貢献する理由' },
  'nav.roles': { ms: 'Peranan & Cara Ia Berfungsi', en: 'Roles & How It Works', zh: '角色与运作方式', ta: 'பங்குகள் & இது எவ்வாறு செயல்படுகிறது', ja: '役割と仕組み' },
  'nav.contributors': { ms: 'Penyumbang', en: 'Contributors', zh: '贡献者', ta: 'பங்களிப்பாளர்கள்', ja: '貢献者' },
  'nav.cli': { ms: 'Alat CLI', en: 'CLI Tool', zh: 'CLI 工具', ta: 'CLI கருவி', ja: 'CLI ツール' },
  'nav.github': { ms: 'GitHub', en: 'GitHub', zh: 'GitHub', ta: 'GitHub', ja: 'GitHub' },
  'nav.reportIssue': { ms: 'Laporkan Isu', en: 'Report an Issue', zh: '报告问题', ta: 'சிக்கலைப் புகாரளி', ja: '問題を報告' },
  'nav.suggest': { ms: 'Cadangkan Penambahbaikan', en: 'Suggest an Improvement', zh: '建议改进', ta: 'மேம்பாட்டைப் பரிந்துரையுங்கள்', ja: '改善を提案' },
  // Section headings inside the Explore dropdown (rendered uppercase via CSS).
  'nav.grpDiscover': { ms: 'Temui', en: 'Discover', zh: '发现', ta: 'கண்டறி', ja: '発見' },
  'nav.grpSections': { ms: 'Tonggak', en: 'Pillars', zh: '支柱', ta: 'தூண்கள்', ja: '柱' },
  'nav.grpTools': { ms: 'Alat', en: 'Tools', zh: '工具', ta: 'கருவிகள்', ja: 'ツール' },
  // Section headings inside the Contribute dropdown.
  'nav.grpGetStarted': { ms: 'Bermula', en: 'Get started', zh: '开始', ta: 'தொடங்குங்கள்', ja: 'はじめる' },
  'nav.grpContent': { ms: 'Kandungan', en: 'Content', zh: '内容', ta: 'உள்ளடக்கம்', ja: 'コンテンツ' },
  'nav.grpSupportUs': { ms: 'Sokong Kami', en: 'Support us', zh: '支持我们', ta: 'எங்களை ஆதரியுங்கள்', ja: '支援する' },
  'nav.grpDevelop': { ms: 'Bangunkan', en: 'Develop', zh: '开发', ta: 'உருவாக்கு', ja: '開発' },
  // New nav destinations.
  'nav.worklist': { ms: 'Senarai Kerja', en: 'Worklist', zh: '工作清单', ta: 'வேலைப் பட்டியல்', ja: '作業リスト' },
  'nav.siteBug': { ms: 'Laporkan Pepijat Laman', en: 'Report a Site Bug', zh: '报告网站故障', ta: 'தள பிழையைப் புகாரளி', ja: 'サイトの不具合を報告' },
  'nav.forAI': { ms: 'Untuk AI · llms.txt', en: 'For AI · llms.txt', zh: '面向 AI · llms.txt', ta: 'AI-க்கு · llms.txt', ja: 'AI向け · llms.txt' },
  'nav.menu': { ms: 'Menu', en: 'Menu', zh: '菜单', ta: 'மெனு', ja: 'メニュー' },
  'nav.startHere': { ms: 'Mula di sini', en: 'Start here', zh: '从这里开始', ta: 'இங்கே தொடங்குங்கள்', ja: 'ここから始める' },
  'nav.grpAbout': { ms: 'Tentang NegaraKu.md', en: 'About NegaraKu.md', zh: '关于 NegaraKu.md', ta: 'NegaraKu.md பற்றி', ja: 'NegaraKu.md について' },
  'nav.grpThisSite': { ms: 'Laman ini', en: 'This site', zh: '本网站', ta: 'இந்த தளம்', ja: 'このサイト' },

  // Contributor View (launchpad) — lifecycle nav + the view-mode toggle.
  'cnav.lifecycle': { ms: 'Kitaran Hayat', en: 'Lifecycle', zh: '生命周期', ta: 'வாழ்க்கைச் சுழற்சி', ja: 'ライフサイクル' },
  'cnav.guide': { ms: 'Panduan penyumbang', en: 'Contributor guide', zh: '贡献者指南', ta: 'பங்களிப்பாளர் வழிகாட்டி', ja: '貢献者ガイド' },
  'cnav.grpOnSite': { ms: 'Di laman ini', en: 'On this site', zh: '本站', ta: 'இந்த தளத்தில்', ja: 'このサイト内' },
  'cnav.grpOnGitHub': { ms: 'Di GitHub', en: 'On GitHub', zh: '在 GitHub', ta: 'GitHub-இல்', ja: 'GitHub 上' },
  'cnav.grpBuild': { ms: 'Bina', en: 'Build', zh: '构建', ta: 'கட்டமை', ja: 'ビルド' },
  'cnav.reviewQueue': { ms: 'Barisan semakan (PR)', en: 'Review queue (PRs)', zh: '审核队列（PR）', ta: 'மதிப்பாய்வு வரிசை (PRs)', ja: 'レビュー待ち（PR）' },
  'cnav.drafts': { ms: 'Artikel draf', en: 'Draft articles', zh: '草稿文章', ta: 'வரைவு கட்டுரைகள்', ja: '下書き記事' },
  'cnav.articleIssues': { ms: 'Isu artikel', en: 'Article issues', zh: '文章问题', ta: 'கட்டுரை சிக்கல்கள்', ja: '記事の問題' },
  'cnav.articleRequests': { ms: 'Permintaan artikel', en: 'Article requests', zh: '文章请求', ta: 'கட்டுரை கோரிக்கைகள்', ja: '記事のリクエスト' },
  'cnav.translationIssues': { ms: 'Isu terjemahan', en: 'Translation issues', zh: '翻译问题', ta: 'மொழிபெயர்ப்பு சிக்கல்கள்', ja: '翻訳の問題' },
  'cnav.newArticle': { ms: 'Artikel baharu (templat)', en: 'New article (template)', zh: '新文章（模板）', ta: 'புதிய கட்டுரை (வார்ப்புரு)', ja: '新規記事（テンプレート）' },
  'cnav.actions': { ms: 'Tindakan / lakaran', en: 'Actions / deploys', zh: '操作 / 部署', ta: 'செயல்கள் / வெளியீடுகள்', ja: 'アクション / デプロイ' },
  'cnav.deploy': { ms: 'Deploy + mod penyelenggaraan', en: 'Deploy + maintenance', zh: '部署 + 维护', ta: 'வெளியீடு + பராமரிப்பு', ja: 'デプロイ + メンテナンス' },
  'cnav.toContributor': { ms: 'Paparan Penyumbang', en: 'Contributor view', zh: '贡献者视图', ta: 'பங்களிப்பாளர் காட்சி', ja: '貢献者ビュー' },
  'cnav.toReader': { ms: 'Paparan Pembaca', en: 'Reader view', zh: '读者视图', ta: 'வாசகர் காட்சி', ja: '読者ビュー' },
  'cnav.signout': { ms: 'Log keluar', en: 'Sign out', zh: '退出登录', ta: 'வெளியேறு', ja: 'ログアウト' },
  'cnav.viewSwitch': { ms: 'Tukar paparan (Pembaca / Penyumbang)', en: 'Switch view (Reader / Contributor)', zh: '切换视图（读者 / 贡献者）', ta: 'காட்சியை மாற்று (வாசகர் / பங்களிப்பாளர்)', ja: 'ビューを切り替え（読者 / 貢献者）' },
  'nav.signin': { ms: 'Log masuk penyumbang', en: 'Contributor sign-in', zh: '贡献者登录', ta: 'பங்களிப்பாளர் உள்நுழைவு', ja: '貢献者ログイン' },
  'reader.title': { ms: 'Tetapan bacaan', en: 'Reading settings', zh: '阅读设置', ta: 'வாசிப்பு அமைப்புகள்', ja: '読書設定' },
  'reader.theme': { ms: 'Tema', en: 'Theme', zh: '主题', ta: 'தீம்', ja: 'テーマ' },
  'reader.dark': { ms: 'Gelap', en: 'Dark', zh: '深色', ta: 'இருள்', ja: 'ダーク' },
  'reader.light': { ms: 'Cerah', en: 'Light', zh: '浅色', ta: 'ஒளி', ja: 'ライト' },
  'reader.themeGold': { ms: 'Emas', en: 'Gold', zh: '金色', ta: 'தங்கம்', ja: 'ゴールド' },
  'reader.themeRed': { ms: 'Merah', en: 'Red', zh: '红色', ta: 'சிவப்பு', ja: 'レッド' },
  'reader.textSize': { ms: 'Saiz teks', en: 'Text size', zh: '字号', ta: 'எழுத்து அளவு', ja: '文字サイズ' },
  'reader.sizeStandard': { ms: 'Biasa', en: 'Standard', zh: '标准', ta: 'இயல்பு', ja: '標準' },
  'reader.sizeLarge': { ms: 'Besar', en: 'Large', zh: '大', ta: 'பெரிது', ja: '大' },
  'reader.sizeXlarge': { ms: 'Ekstra', en: 'X-Large', zh: '特大', ta: 'மிகப் பெரிது', ja: '特大' },
  'home.hero.title': {
    ms: 'Fahami Malaysia secara mendalam',
    en: 'Understand Malaysia, deeply',
    zh: '深入认识马来西亚',
    ta: 'மலேசியாவை ஆழமாகப் புரிந்துகொள்ளுங்கள்',
    ja: 'マレーシアを深く理解する',
  },
  'home.hero.subtitle': {
    ms: 'Naratif yang dikurasi, boleh dibaca manusia dan AI — satu sumber kebenaran tentang negara kita.',
    en: 'Curated, human- and AI-readable narratives — a single source of truth about our nation.',
    zh: '经过策展、供人类与 AI 阅读的叙事——关于我们国家的单一事实来源。',
    ta: 'தொகுக்கப்பட்ட, மனிதர்களும் AI-யும் படிக்கக்கூடிய விவரிப்புகள் — நமது நாட்டைப் பற்றிய ஒரே உண்மை மூலம்.',
    ja: '厳選された、人間にもAIにも読める物語 — 私たちの国に関する唯一の信頼できる情報源。',
  },
  'home.essentials': {
    ms: 'Lima bacaan penting',
    en: 'Five essential reads',
    zh: '五篇必读',
    ta: 'ஐந்து அத்தியாவசிய வாசிப்புகள்',
    ja: '必読の5記事',
  },
  'home.browse': { ms: 'Terokai mengikut kategori', en: 'Browse by category', zh: '按分类浏览', ta: 'பிரிவு வாரியாக உலாவுங்கள்', ja: 'カテゴリー別に見る' },
  'home.why.title': { ms: 'Mengapa negaraku.md?', en: 'Why negaraku.md?', zh: '为何选择 negaraku.md?', ta: 'ஏன் negaraku.md?', ja: 'なぜ negaraku.md なのか？' },
  'home.why.body': {
    ms: 'Bukan sekadar timbunan data — setiap artikel dikurasi, dipetik sumbernya, dan boleh disunting oleh komuniti melalui GitHub. Ditulis dalam Markdown supaya manusia dan model bahasa besar sama-sama boleh membacanya.',
    en: 'Not just a pile of data — every article is curated, cited, and community-editable via GitHub. Written in Markdown so both people and large language models can read it.',
    zh: '不仅是数据堆砌——每篇文章都经过策展、注明出处，并可通过 GitHub 由社区编辑。以 Markdown 撰写，方便人类与大型语言模型阅读。',
    ta: 'வெறும் தரவுக் குவியல் அல்ல — ஒவ்வொரு கட்டுரையும் தொகுக்கப்பட்டு, மேற்கோள் காட்டப்பட்டு, GitHub வழியாக சமூகத்தால் திருத்தக்கூடியது. மனிதர்களும் பெரிய மொழி மாதிரிகளும் படிக்கும் வகையில் Markdown-இல் எழுதப்பட்டுள்ளது.',
    ja: 'ただのデータの山ではありません — すべての記事は厳選され、出典が示され、GitHub を通じてコミュニティが編集できます。人間も大規模言語モデルも読めるように Markdown で書かれています。',
  },
  'article.sources': { ms: 'Sumber', en: 'Sources', zh: '来源', ta: 'மூலங்கள்', ja: '出典' },
  'article.related': { ms: 'Berkaitan', en: 'Related', zh: '相关', ta: 'தொடர்புடையவை', ja: '関連' },
  'article.updated': { ms: 'Dikemas kini', en: 'Updated', zh: '更新于', ta: 'புதுப்பிக்கப்பட்டது', ja: '更新' },
  'article.published': { ms: 'Diterbitkan', en: 'Published', zh: '发布于', ta: 'வெளியிடப்பட்டது', ja: '公開' },
  'article.reviewedOn': { ms: 'Disemak pada', en: 'Reviewed on', zh: '审阅于', ta: 'மதிப்பாய்வு செய்யப்பட்டது', ja: 'レビュー日' },
  'article.verifiedOn': { ms: 'Disahkan pada', en: 'Verified on', zh: '核实于', ta: 'சரிபார்க்கப்பட்டது', ja: '検証日' },
  'article.by': { ms: 'oleh', en: 'by', zh: '·', ta: 'மூலம்', ja: '著者' },
  'article.edit': { ms: 'Sunting di GitHub', en: 'Edit on GitHub', zh: '在 GitHub 上编辑', ta: 'GitHub-இல் திருத்து', ja: 'GitHub で編集' },
  'article.raw': { ms: 'Lihat Markdown mentah', en: 'View raw Markdown', zh: '查看原始 Markdown', ta: 'மூல Markdown-ஐக் காண்க', ja: '生の Markdown を表示' },
  'status.draft': { ms: 'Draf', en: 'Draft', zh: '草稿', ta: 'வரைவு', ja: '下書き' },
  'status.in-review': { ms: 'Dalam Semakan', en: 'In review', zh: '审阅中', ta: 'மதிப்பாய்வில்', ja: 'レビュー中' },
  'status.reviewed': { ms: 'Disemak', en: 'Reviewed', zh: '已审阅', ta: 'மதிப்பாய்வு செய்யப்பட்டது', ja: 'レビュー済み' },
  'status.published': { ms: 'Diterbitkan', en: 'Published', zh: '已发布', ta: 'வெளியிடப்பட்டது', ja: '公開済み' },
  'status.verified': { ms: 'Disahkan', en: 'Verified', zh: '已核实', ta: 'சரிபார்க்கப்பட்டது', ja: '検証済み' },
  'status.needs-update': { ms: 'Perlu Kemas Kini', en: 'Needs update', zh: '需更新', ta: 'புதுப்பிப்பு தேவை', ja: '要更新' },
  'status.in-update': { ms: 'Sedang Dikemas Kini', en: 'Being updated', zh: '更新中', ta: 'புதுப்பிக்கப்படுகிறது', ja: '更新中' },
  'status.archived': { ms: 'Diarkibkan', en: 'Archived', zh: '已归档', ta: 'காப்பகப்படுத்தப்பட்டது', ja: 'アーカイブ済み' },
  'footer.license': {
    ms: 'Kandungan di bawah CC BY-SA 4.0. Kod di bawah lesen MIT.',
    en: 'Content under CC BY-SA 4.0. Code under the MIT license.',
    zh: '内容采用 CC BY-SA 4.0，代码采用 MIT 许可证。',
    ta: 'உள்ளடக்கம் CC BY-SA 4.0 உரிமத்தின் கீழ். குறியீடு MIT உரிமத்தின் கீழ்.',
    ja: 'コンテンツは CC BY-SA 4.0 の下で提供。コードは MIT ライセンスの下で提供。',
  },
  'footer.sponsoredBy': {
    ms: 'Ditaja oleh',
    en: 'Sponsored by',
    zh: '赞助单位',
    ta: 'அனுசரணை வழங்குநர்',
    ja: 'スポンサー',
  },
  'a11y.skip': { ms: 'Langkau ke kandungan', en: 'Skip to content', zh: '跳到内容', ta: 'உள்ளடக்கத்திற்குச் செல்க', ja: 'コンテンツへスキップ' },
  'a11y.top': { ms: 'Kembali ke atas', en: 'Back to top', zh: '返回顶部', ta: 'மேலே செல்க', ja: 'トップへ戻る' },
} as const;

export type StringKey = keyof typeof STRINGS;

export function t(key: StringKey, locale: Locale): string {
  const entry = STRINGS[key];
  // A UI locale with no authored string (e.g. `ta` before translation) falls
  // back to Malay — the cast lets us index with a Locale the table may not carry.
  return (entry as Record<string, string>)[locale] ?? entry[DEFAULT_LOCALE];
}

/** Build a locale-aware href. ms → "/path", en → "/en/path", zh → "/zh/path". */
export function localePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean === '/' ? '/' : clean;
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

/**
 * Normalize a page pathname to the trailing-slash form GitHub Pages actually
 * serves (`/x` 301-redirects to `/x/`). Used for canonical, og:url, hreflang and
 * JSON-LD URLs so every emitted URL matches the resolved one — and the sitemap,
 * which already emits trailing slashes. File routes (a dot in the last segment,
 * e.g. `/llms.txt`, `/x.md`) are left untouched — only directory pages get a slash.
 */
export function withTrailingSlash(pathname: string): string {
  if (!pathname) return '/';
  if (pathname.endsWith('/')) return pathname;
  const last = pathname.split('/').pop() ?? '';
  if (last.includes('.')) return pathname; // file route — no slash
  return `${pathname}/`;
}

/** Extract the active locale from an Astro URL pathname. */
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  if (seg === 'en' || seg === 'zh' || seg === 'ta' || seg === 'ja') return seg;
  return DEFAULT_LOCALE;
}
