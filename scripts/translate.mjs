// translate.mjs — scaffold missing translations for the knowledge base.
//
// The Bahasa Malaysia file is the source of truth. For every ms article that
// lacks an `en` / `zh` sibling, this creates a stub translation carrying the
// same frontmatter (with `lang` + translated `title`/`summary` left for review)
// and the source body, marked so reviewers and the health scanner can find it.
//
// Translation cascade (documented; wire real providers where marked TODO):
//   tier 1  offline dictionary / glossary substitution
//   tier 2  a hosted machine-translation API (e.g. set TRANSLATE_API_KEY)
//   tier 3  a local LLM (Ollama, etc.)
//   tier 4  a paid sub-agent as last resort
// Until a provider is wired, stubs copy the source text verbatim so the site
// still renders, and are flagged status: "draft".
//
// Usage:  node scripts/translate.mjs            # scaffold all missing
//         node scripts/translate.mjs --lang en  # only English

import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const KNOWLEDGE = path.join(ROOT, 'knowledge');
const TARGETS = ['en', 'zh'];

const argLang = process.argv.includes('--lang')
  ? process.argv[process.argv.indexOf('--lang') + 1]
  : null;
const langs = argLang ? [argLang] : TARGETS;

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else if (e.name.endsWith('.md') && !/\.(en|zh)\.md$/.test(e.name)) out.push(full);
  }
  return out;
}

// Placeholder for a real translation provider. Replace with an API/LLM call.
async function translate(text /*, targetLang */) {
  // TODO: integrate a provider from the cascade above.
  return text;
}

async function main() {
  if (!existsSync(KNOWLEDGE)) return;
  const sources = await walk(KNOWLEDGE);
  let created = 0;

  for (const src of sources) {
    const { data, content } = matter(await readFile(src, 'utf8'));
    if ((data.lang ?? 'ms') !== 'ms') continue;

    for (const lang of langs) {
      const dest = src.replace(/\.md$/, `.${lang}.md`);
      if (existsSync(dest)) {
        // Freshness check: warn if the source is newer than the translation.
        const [s, d] = await Promise.all([stat(src), stat(dest)]);
        if (s.mtimeMs > d.mtimeMs) {
          console.warn(`[translate] stale: ${path.relative(ROOT, dest)} (source is newer)`);
        }
        continue;
      }

      const fm = {
        ...data,
        lang,
        status: 'draft',
        reviewer: null,
        title: await translate(data.title, lang),
        summary: await translate(data.summary, lang),
      };
      const body = await translate(content.trim(), lang);
      const front = matter.stringify('\n' + body + '\n', fm);
      const banner = `<!-- MACHINE DRAFT (${lang}): review required before publishing. -->\n`;
      await writeFile(dest, banner + front);
      console.log(`[translate] scaffolded ${path.relative(ROOT, dest)}`);
      created++;
    }
  }
  console.log(`[translate] ${created} stub(s) created.`);
}

main().catch((err) => {
  console.error('[translate] failed:', err);
  process.exit(1);
});
