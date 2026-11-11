// Normalize internal links in rendered markdown bodies to the trailing-slash form that
// GitHub Pages serves as canonical. A body link authored as `/cat/slug` (no slash) otherwise
// 301-redirects to `/cat/slug/` — which Google Search Console logs as "Page with redirect"
// (≈6,800 URLs). The canonical tag and the sitemap already use the slash form; only the
// markdown body links were no-slash. Adding the slash at RENDER time makes body links match
// the canonical, so Google crawls the canonical directly instead of following a redirect.
// No corpus edit, no translation-hash change — freshness-neutral.
//
// Conservative: it slashes ONLY root-relative internal links. It leaves external and
// protocol-relative links, in-page anchors (#…), query links (?…), already-slashed paths,
// and any path whose final segment carries a file extension (`.md` raw-markdown, images,
// `.xml`, etc.) exactly as authored.

/** Add a trailing slash to a root-relative internal path when it is safe to do so. */
export function slashInternal(href: string): string {
  if (typeof href !== 'string') return href;
  if (!href.startsWith('/') || href.startsWith('//')) return href; // external / protocol-relative
  if (/[?#]/.test(href)) return href;                               // query or in-page anchor
  if (href.endsWith('/')) return href;                              // already slashed
  const last = href.slice(href.lastIndexOf('/') + 1);
  if (!last || last.includes('.')) return href;                     // file extension (.md/.webp/.xml) or empty
  return href + '/';
}

/** Rehype plugin: trailing-slash every qualifying internal `<a href>` in a rendered body. */
export function rehypeTrailingSlash() {
  return (tree: unknown) => {
    const walk = (node: any): void => {
      if (
        node?.type === 'element' &&
        node.tagName === 'a' &&
        node.properties &&
        typeof node.properties.href === 'string'
      ) {
        node.properties.href = slashInternal(node.properties.href);
      }
      if (Array.isArray(node?.children)) for (const c of node.children) walk(c);
    };
    walk(tree);
  };
}
