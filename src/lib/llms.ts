import { articlesForLocale } from '@/lib/content';
import { CATEGORIES, loc } from '@/lib/categories';
import { articleToMarkdown } from '@/lib/raw';
import { SITE } from '@/lib/site';
import { localePath, type Locale } from '@/lib/i18n';

// Intro blockquote per language, kept parallel across all nine locales. Each
// language has its own /<lang>/llms.txt, so the intro is written in that language.
const INTRO: Record<Locale, string[]> = {
  ms: [
    '> Pangkalan pengetahuan sumber terbuka dan mesra-AI tentang Malaysia. Markdown',
    '> yang dikurasi dan bersumber, boleh disunting komuniti melalui GitHub, dalam',
    '> sembilan bahasa. Tambah `.md` pada mana-mana URL artikel untuk Markdown mentah.',
  ],
  en: [
    '> An open-source, AI-friendly knowledge base about Malaysia. Curated, cited',
    '> Markdown, community-editable via GitHub, in nine languages. Append `.md` to any',
    '> article URL for raw Markdown. Each language has its own /<lang>/llms.txt.',
  ],
  zh: [
    '> 一个开源、对 AI 友好的马来西亚知识库。内容为经过策划并注明来源的 Markdown，',
    '> 可通过 GitHub 由社区编辑，提供九种语言。在任意文章 URL 后追加 `.md` 即可',
    '> 获取原始 Markdown。每种语言都有各自的 /<lang>/llms.txt。',
  ],
  ta: [
    '> மலேசியா பற்றிய திறந்த-மூல, AI-நட்பு அறிவுத் தளம். தொகுக்கப்பட்ட, மேற்கோள்',
    '> காட்டப்பட்ட Markdown, GitHub மூலம் சமூகத்தால் திருத்தக்கூடியது, ஒன்பது மொழிகளில்.',
    '> மூல Markdown-க்கு எந்த கட்டுரை URL-லும் `.md` சேர்க்கவும்.',
  ],
  ja: [
    '> マレーシアに関するオープンソースで AI フレンドリーな知識ベース。厳選・出典付きの',
    '> Markdown で、GitHub を通じてコミュニティが編集でき、9 言語で提供。記事 URL に',
    '> `.md` を追加すると生の Markdown が得られます。各言語に /<lang>/llms.txt があります。',
  ],
  ko: [
    '> 말레이시아에 관한 오픈소스, AI 친화적 지식 베이스. 선별·출처 표기된 Markdown으로,',
    '> GitHub를 통해 커뮤니티가 편집할 수 있으며 9개 언어로 제공됩니다. 기사 URL에 `.md`를',
    '> 붙이면 원본 Markdown을 얻을 수 있습니다. 각 언어마다 /<lang>/llms.txt가 있습니다.',
  ],
  th: [
    '> ฐานความรู้เกี่ยวกับมาเลเซียแบบโอเพนซอร์สและเป็นมิตรกับ AI เป็น Markdown ที่คัดสรร',
    '> และอ้างอิงแหล่งที่มา ชุมชนแก้ไขได้ผ่าน GitHub มีให้ใน 9 ภาษา เพิ่ม `.md` ต่อท้าย',
    '> URL บทความใดก็ได้เพื่อรับ Markdown ดิบ แต่ละภาษามี /<lang>/llms.txt ของตนเอง',
  ],
  vi: [
    '> Cơ sở tri thức mã nguồn mở, thân thiện với AI về Malaysia. Markdown được tuyển',
    '> chọn, trích dẫn nguồn, cộng đồng chỉnh sửa qua GitHub, bằng chín ngôn ngữ. Thêm',
    '> `.md` vào bất kỳ URL bài viết nào để lấy Markdown thô.',
  ],
  id: [
    '> Basis pengetahuan sumber terbuka dan ramah-AI tentang Malaysia. Markdown yang',
    '> terkurasi dan bersumber, dapat disunting komunitas melalui GitHub, dalam sembilan',
    '> bahasa. Tambahkan `.md` ke URL artikel mana pun untuk Markdown mentah.',
  ],
};

// Build the llmstxt.org-style index for a given language.
export async function buildLlmsIndex(locale: Locale): Promise<string> {
  const items = await articlesForLocale(locale);
  const byCat = new Map<string, typeof items>();
  for (const a of items) {
    if (!byCat.has(a.data.category)) byCat.set(a.data.category, []);
    byCat.get(a.data.category)!.push(a);
  }

  const out: string[] = ['# negaraku.md', ''];
  out.push(...(INTRO[locale] ?? INTRO.ms), '');

  for (const cat of CATEGORIES) {
    const arts = byCat.get(cat.id);
    if (!arts?.length) continue;
    out.push(`## ${loc(cat.name, locale)}`, '');
    for (const a of arts) {
      const url = `${SITE}${localePath(`/${a.data.category}/${a.data.slug}.md`, locale)}`;
      out.push(`- [${a.data.title}](${url}): ${a.data.summary}`);
    }
    out.push('');
  }

  const fullUrl = `${SITE}${localePath('/llms-full.txt', locale)}`;
  out.push('## Full text', '');
  out.push(`- [Complete corpus](${fullUrl}): every article concatenated as Markdown.`, '');

  return out.join('\n');
}

// Build the concatenated full-text corpus for a given language.
const CORPUS_HEADER: Record<Locale, string> = {
  ms: 'Pangkalan pengetahuan sumber terbuka tentang Malaysia. Lesen: CC BY-SA 4.0.',
  en: 'An open-source knowledge base about Malaysia. License: CC BY-SA 4.0.',
  zh: '关于马来西亚的开源知识库。许可证：CC BY-SA 4.0。',
  ta: 'மலேசியா பற்றிய திறந்த-மூல அறிவுத் தளம். உரிமம்: CC BY-SA 4.0.',
  ja: 'マレーシアに関するオープンソースの知識ベース。ライセンス：CC BY-SA 4.0。',
  ko: '말레이시아에 관한 오픈소스 지식 베이스. 라이선스: CC BY-SA 4.0.',
  th: 'ฐานความรู้เกี่ยวกับมาเลเซียแบบโอเพนซอร์ส ใบอนุญาต: CC BY-SA 4.0.',
  vi: 'Cơ sở tri thức mã nguồn mở về Malaysia. Giấy phép: CC BY-SA 4.0.',
  id: 'Basis pengetahuan sumber terbuka tentang Malaysia. Lisensi: CC BY-SA 4.0.',
};

export async function buildLlmsFull(locale: Locale): Promise<string> {
  const items = await articlesForLocale(locale);
  const parts: string[] = [
    '# negaraku.md — full corpus',
    '',
    loc(CORPUS_HEADER, locale),
    '',
  ];
  for (const a of items) {
    parts.push('', '=========================================================', '');
    parts.push(articleToMarkdown(a, locale));
  }
  return parts.join('\n');
}
