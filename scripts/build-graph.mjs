// build-graph.mjs — build the knowledge graph consumed by the /graph page.
//
// Nodes are published topics (one per category/slug key, titles collected across
// languages). Edges come from the typed `relations[]` frontmatter ({rel, to})
// plus the looser `related[]` list. Targets are bare slugs, resolved against a
// slug→key index; edges to unknown/unpublished topics are dropped, as are
// isolated nodes — a knowledge graph is the connected core, not a list.
//
// Reads the manifest (public/api/articles.json) so it shares ONE publication
// gate with the site + dashboard, and writes public/api/graph.json.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const API = path.join(ROOT, 'public', 'api');
const IN = path.join(API, 'articles.json');
const OUT = path.join(API, 'graph.json');

// MUST match src/lib/content.ts isPublishable (and build-dashboard.mjs): the
// graph shows the SAME live corpus every reader-facing page shows.
const LIVE_STATUSES = new Set(['published', 'needs-update', 'in-update']);
const isPublishable = (a) =>
  LIVE_STATUSES.has(a.status) &&
  (!a.sensitivity || a.sensitivity === 'none' || Boolean(a.reviewer));

async function main() {
  if (!existsSync(IN)) {
    console.warn('[graph] no articles.json — run sync first. Skipping.');
    return;
  }
  const { articles: all } = JSON.parse(await readFile(IN, 'utf8'));
  const pub = all.filter(isPublishable);

  // One node per topic key; collect a title per language.
  const nodes = new Map();
  for (const a of pub) {
    if (!a.category || !a.slug) continue;
    let n = nodes.get(a.key);
    if (!n) {
      n = { id: a.key, slug: a.slug, category: a.category, titles: {}, weight: 0 };
      nodes.set(a.key, n);
    }
    if (a.lang && a.title && !n.titles[a.lang]) n.titles[a.lang] = a.title;
  }
  // Backfill any missing locale title (master-first) so the graph always labels.
  for (const n of nodes.values()) {
    const any = n.titles.ms ?? n.titles.en ?? n.titles.zh ?? n.slug;
    n.titles.ms ??= any;
    n.titles.en ??= any;
    n.titles.zh ??= any;
  }

  // Resolve bare-slug targets → topic keys. Slugs are ~unique; first wins.
  const slugToKey = new Map();
  for (const n of nodes.values()) if (!slugToKey.has(n.slug)) slugToKey.set(n.slug, n.id);

  // Build edges once per topic (relations are identical across translations).
  const edgeSet = new Set();
  const links = [];
  const addEdge = (source, targetSlug, rel) => {
    if (!targetSlug) return;
    const target = slugToKey.get(targetSlug);
    if (!target || target === source) return; // unknown target or self-loop
    const sig = `${source}|${target}|${rel}`;
    if (edgeSet.has(sig)) return;
    edgeSet.add(sig);
    links.push({ source, target, rel });
  };
  const seen = new Set();
  for (const a of pub) {
    if (seen.has(a.key)) continue;
    seen.add(a.key);
    for (const r of a.relations ?? []) {
      if (!r) continue;
      if (typeof r === 'string') addEdge(a.key, r, 'related-to');
      else addEdge(a.key, r.to, r.rel ?? 'related-to');
    }
    for (const s of a.related ?? []) addEdge(a.key, s, 'related');
  }

  // Degree → weight (node size). Drop isolated nodes to keep the graph legible.
  for (const l of links) {
    nodes.get(l.source).weight++;
    nodes.get(l.target).weight++;
  }
  const kept = [...nodes.values()].filter((n) => n.weight > 0);
  const keptIds = new Set(kept.map((n) => n.id));
  const finalLinks = links.filter((l) => keptIds.has(l.source) && keptIds.has(l.target));

  const graph = {
    generatedFrom: 'public/api/articles.json',
    nodeCount: kept.length,
    linkCount: finalLinks.length,
    nodes: kept.sort((a, b) => a.id.localeCompare(b.id)),
    links: finalLinks,
  };
  await mkdir(API, { recursive: true });
  await writeFile(OUT, JSON.stringify(graph));
  console.log(`[graph] wrote graph.json — ${kept.length} nodes, ${finalLinks.length} links`);
}

main().catch((e) => {
  console.error('[graph]', e);
  process.exit(1);
});
