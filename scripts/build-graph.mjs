// build-graph.mjs — turn the article manifest into a D3-ready graph.
// Nodes = canonical articles (language-independent). Edges come from explicit
// `related` links plus shared `subcategory` tags within a category.
//
// Reads  public/api/articles.json   (from sync.mjs)
// Writes public/api/graph.json

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const API = path.join(ROOT, 'public', 'api');
const IN = path.join(API, 'articles.json');
const OUT = path.join(API, 'graph.json');

async function main() {
  if (!existsSync(IN)) {
    console.warn('[graph] no articles.json yet — run sync first. Skipping.');
    return;
  }
  // Publication gate: sensitive (3R+1) content stays off the public graph until
  // reviewed + published. Mirrors isPublishable() in src/lib/content.ts.
  const { articles: allArticles } = JSON.parse(await readFile(IN, 'utf8'));
  const articles = allArticles.filter(
    (a) => !a.sensitivity || a.sensitivity === 'none' || (a.status === 'published' && a.reviewer),
  );

  // One node per canonical article; prefer the ms source for display.
  const byKey = new Map();
  for (const a of articles) {
    const prev = byKey.get(a.key);
    if (!prev || a.lang === 'ms') byKey.set(a.key, a);
  }
  const nodes = [...byKey.values()].map((a) => ({
    id: a.key,
    slug: a.slug,
    title: a.title,
    category: a.category,
    status: a.status,
    // node weight scales with content depth
    weight: Math.max(1, Math.round(a.words / 200)),
  }));

  const slugToKey = new Map([...byKey.values()].map((a) => [a.slug, a.key]));
  const linkSet = new Set();
  const links = [];
  const addLink = (source, target, kind) => {
    if (source === target) return;
    const id = [source, target].sort().join('|') + '|' + kind;
    if (linkSet.has(id)) return;
    linkSet.add(id);
    links.push({ source, target, kind });
  };

  for (const a of byKey.values()) {
    for (const relSlug of a.related ?? []) {
      const targetKey = slugToKey.get(relSlug);
      if (targetKey) addLink(a.key, targetKey, 'related');
    }
  }

  // Bridge nodes that share a subcategory tag within the same category.
  const bySub = new Map();
  for (const a of byKey.values()) {
    for (const sub of a.subcategory ?? []) {
      const k = `${a.category}::${sub}`;
      if (!bySub.has(k)) bySub.set(k, []);
      bySub.get(k).push(a.key);
    }
  }
  for (const group of bySub.values()) {
    for (let i = 0; i < group.length; i++)
      for (let j = i + 1; j < group.length; j++)
        addLink(group[i], group[j], 'subcategory');
  }

  await mkdir(API, { recursive: true });
  await writeFile(OUT, JSON.stringify({ nodes, links }, null, 2));
  console.log(`[graph] ${nodes.length} node(s), ${links.length} edge(s) → public/api/graph.json`);
}

main().catch((err) => {
  console.error('[graph] failed:', err);
  process.exit(1);
});
