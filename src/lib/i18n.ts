import type { Locale } from './categories';

export const LOCALES: Locale[] = ['ms', 'en', 'zh'];
export const DEFAULT_LOCALE: Locale = 'ms';

export const LOCALE_NAMES: Record<Locale, string> = {
  ms: 'Bahasa Malaysia',
  en: 'English',
  zh: '中文',
};

/** UI string table. Keep keys stable; fall back to `ms` if a value is missing. */
const STRINGS = {
  'site.title': {
    ms: 'NegaraKu.md',
    en: 'NegaraKu.md',
    zh: 'NegaraKu.md',
  },
  'site.tagline': {
    ms: 'Pangkalan pengetahuan sumber terbuka tentang Malaysia',
    en: 'An open-source knowledge base about Malaysia',
    zh: '关于马来西亚的开源知识库',
  },
  // Short brand tagline shown under the wordmark in the header lockup.
  'brand.tagline': {
    ms: 'Malaysia mesra-AI',
    en: 'AI-friendly Malaysia',
    zh: 'AI 友好的马来西亚',
  },
  'nav.categories': { ms: 'Kategori', en: 'Categories', zh: '分类' },
  'nav.search': { ms: 'Cari', en: 'Search', zh: '搜索' },
  'nav.about': { ms: 'Tentang', en: 'About', zh: '关于' },
  'nav.contribute': { ms: 'Sumbang', en: 'Contribute', zh: '贡献' },
  'nav.explore': { ms: 'Terokai', en: 'Explore', zh: '探索' },
  'nav.articles': { ms: 'Semua Artikel', en: 'All Articles', zh: '所有文章' },
  'nav.graph': { ms: 'Graf Pengetahuan', en: 'Knowledge Graph', zh: '知识图谱' },
  'nav.understand': { ms: 'Kenali', en: 'Understand', zh: '认识' },
  'nav.visit': { ms: 'Lawati', en: 'Visit', zh: '游览' },
  'nav.living': { ms: 'Hidup', en: 'Living', zh: '生活' },
  'nav.business': { ms: 'Bisnes', en: 'Business', zh: '经商' },
  'nav.more': { ms: 'Lagi', en: 'More', zh: '更多' },
  'nav.settings': { ms: 'Tetapan', en: 'Settings', zh: '设置' },
  'nav.data': { ms: 'Data', en: 'Data', zh: '数据' },
  'nav.dashboard': { ms: 'Papan Pemuka', en: 'Dashboard', zh: '仪表板' },
  'nav.elections': { ms: 'Pilihan Raya', en: 'Elections', zh: '选举' },
  'nav.aboutPage': { ms: 'Tentang Kami', en: 'About Us', zh: '关于我们' },
  'nav.changelog': { ms: 'Log Perubahan', en: 'Changelog', zh: '更新日志' },
  'nav.site': { ms: 'Laman', en: 'Site', zh: '网站' },
  'nav.exploreMalaysia': { ms: 'Terokai Malaysia', en: 'Explore Malaysia', zh: '探索马来西亚' },
  'nav.latest': { ms: 'Artikel Terkini', en: 'Latest Articles', zh: '最新文章' },
  'nav.timeline': { ms: 'Garis Masa', en: 'Timeline', zh: '时间线' },
  'nav.understandMalaysia': { ms: 'Kenali Malaysia', en: 'Understand Malaysia', zh: '认识马来西亚' },
  'nav.livingMalaysia': { ms: 'Hidup di Malaysia', en: 'Living in Malaysia', zh: '在马来西亚生活' },
  'nav.businessMalaysia': { ms: 'Berniaga di Malaysia', en: 'Doing Business in Malaysia', zh: '在马来西亚经商' },
  'nav.team': { ms: 'Pasukan Kami', en: 'Our Team', zh: '我们的团队' },
  'nav.faq': { ms: 'Soalan Lazim', en: 'FAQ', zh: '常见问题' },
  'nav.submitArticle': { ms: 'Hantar Artikel', en: 'Submit Article', zh: '提交文章' },
  'nav.donate': { ms: 'Derma Token AI Anda', en: 'Donate Your AI Token', zh: '捐赠你的 AI Token' },
  'nav.support': { ms: 'Sokong NegaraKu.md', en: 'Support NegaraKu.md', zh: '支持 NegaraKu.md' },
  'nav.whyContribute': { ms: 'Kenapa Menyumbang', en: 'Why Contribute', zh: '为何贡献' },
  'nav.cli': { ms: 'Alat CLI', en: 'CLI Tool', zh: 'CLI 工具' },
  'nav.github': { ms: 'GitHub', en: 'GitHub', zh: 'GitHub' },
  'nav.reportIssue': { ms: 'Laporkan Isu', en: 'Report an Issue', zh: '报告问题' },
  'nav.suggest': { ms: 'Cadangkan Penambahbaikan', en: 'Suggest an Improvement', zh: '建议改进' },
  // Section headings inside the Explore dropdown (rendered uppercase via CSS).
  'nav.grpDiscover': { ms: 'Temui', en: 'Discover', zh: '发现' },
  'nav.grpByArea': { ms: 'Mengikut bidang', en: 'By area', zh: '按领域' },
  'nav.grpTools': { ms: 'Alat', en: 'Tools', zh: '工具' },
  'nav.menu': { ms: 'Menu', en: 'Menu', zh: '菜单' },
  'reader.title': { ms: 'Tetapan bacaan', en: 'Reading settings', zh: '阅读设置' },
  'reader.theme': { ms: 'Tema', en: 'Theme', zh: '主题' },
  'reader.dark': { ms: 'Gelap', en: 'Dark', zh: '深色' },
  'reader.light': { ms: 'Cerah', en: 'Light', zh: '浅色' },
  'reader.themeGold': { ms: 'Emas', en: 'Gold', zh: '金色' },
  'reader.themeRed': { ms: 'Merah', en: 'Red', zh: '红色' },
  'reader.textSize': { ms: 'Saiz teks', en: 'Text size', zh: '字号' },
  'reader.sizeStandard': { ms: 'Biasa', en: 'Standard', zh: '标准' },
  'reader.sizeLarge': { ms: 'Besar', en: 'Large', zh: '大' },
  'reader.sizeXlarge': { ms: 'Ekstra', en: 'X-Large', zh: '特大' },
  'home.hero.title': {
    ms: 'Fahami Malaysia secara mendalam',
    en: 'Understand Malaysia, deeply',
    zh: '深入认识马来西亚',
  },
  'home.hero.subtitle': {
    ms: 'Naratif yang dikurasi, boleh dibaca manusia dan AI — satu sumber kebenaran tentang negara kita.',
    en: 'Curated, human- and AI-readable narratives — a single source of truth about our nation.',
    zh: '经过策展、供人类与 AI 阅读的叙事——关于我们国家的单一事实来源。',
  },
  'home.essentials': {
    ms: 'Lima bacaan penting',
    en: 'Five essential reads',
    zh: '五篇必读',
  },
  'home.browse': { ms: 'Terokai mengikut kategori', en: 'Browse by category', zh: '按分类浏览' },
  'home.why.title': { ms: 'Mengapa negaraku.md?', en: 'Why negaraku.md?', zh: '为何选择 negaraku.md?' },
  'home.why.body': {
    ms: 'Bukan sekadar timbunan data — setiap artikel dikurasi, dipetik sumbernya, dan boleh disunting oleh komuniti melalui GitHub. Ditulis dalam Markdown supaya manusia dan model bahasa besar sama-sama boleh membacanya.',
    en: 'Not just a pile of data — every article is curated, cited, and community-editable via GitHub. Written in Markdown so both people and large language models can read it.',
    zh: '不仅是数据堆砌——每篇文章都经过策展、注明出处，并可通过 GitHub 由社区编辑。以 Markdown 撰写，方便人类与大型语言模型阅读。',
  },
  'article.sources': { ms: 'Sumber', en: 'Sources', zh: '来源' },
  'article.related': { ms: 'Berkaitan', en: 'Related', zh: '相关' },
  'article.updated': { ms: 'Dikemas kini', en: 'Updated', zh: '更新于' },
  'article.published': { ms: 'Diterbitkan', en: 'Published', zh: '发布于' },
  'article.reviewedOn': { ms: 'Disemak pada', en: 'Reviewed on', zh: '审阅于' },
  'article.verifiedOn': { ms: 'Disahkan pada', en: 'Verified on', zh: '核实于' },
  'article.by': { ms: 'oleh', en: 'by', zh: '·' },
  'article.edit': { ms: 'Sunting di GitHub', en: 'Edit on GitHub', zh: '在 GitHub 上编辑' },
  'article.raw': { ms: 'Lihat Markdown mentah', en: 'View raw Markdown', zh: '查看原始 Markdown' },
  'status.draft': { ms: 'Draf', en: 'Draft', zh: '草稿' },
  'status.in-review': { ms: 'Dalam Semakan', en: 'In review', zh: '审阅中' },
  'status.reviewed': { ms: 'Disemak', en: 'Reviewed', zh: '已审阅' },
  'status.published': { ms: 'Diterbitkan', en: 'Published', zh: '已发布' },
  'status.verified': { ms: 'Disahkan', en: 'Verified', zh: '已核实' },
  'status.needs-update': { ms: 'Perlu Kemas Kini', en: 'Needs update', zh: '需更新' },
  'status.in-update': { ms: 'Sedang Dikemas Kini', en: 'Being updated', zh: '更新中' },
  'status.archived': { ms: 'Diarkibkan', en: 'Archived', zh: '已归档' },
  'footer.license': {
    ms: 'Kandungan di bawah CC BY-SA 4.0. Kod di bawah lesen MIT.',
    en: 'Content under CC BY-SA 4.0. Code under the MIT license.',
    zh: '内容采用 CC BY-SA 4.0，代码采用 MIT 许可证。',
  },
  'footer.sponsoredBy': {
    ms: 'Ditaja oleh',
    en: 'Sponsored by',
    zh: '赞助单位',
  },
  'a11y.skip': { ms: 'Langkau ke kandungan', en: 'Skip to content', zh: '跳到内容' },
  'a11y.top': { ms: 'Kembali ke atas', en: 'Back to top', zh: '返回顶部' },
} as const;

export type StringKey = keyof typeof STRINGS;

export function t(key: StringKey, locale: Locale): string {
  const entry = STRINGS[key];
  return entry[locale] ?? entry[DEFAULT_LOCALE];
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
  if (seg === 'en' || seg === 'zh') return seg;
  return DEFAULT_LOCALE;
}
