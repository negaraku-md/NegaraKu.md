// RTL numeric-range isolation — fixes the confirmed Arabic bidi bug where a numeric
// range joined by an en/em-dash (or a comma-grouped range) renders REVERSED for the
// reader: source `2021–2030` displays as `2030–2021`. Root cause + full evidence:
// docs/plans/ar-rtl-bidi-audit.md (UAX#9: en/em-dash is a neutral, not an ES separator,
// so rule W4 does not fold the two number runs and they reorder under RTL base direction).
//
// Fix = wrap the offending range in Unicode isolates (U+2066 LRI … U+2069 PDI) at RENDER
// time, so nothing in the corpus changes and the translation-freshness hash is untouched.
// Applies to the Arabic markdown BODY (via rehypeArabicRanges, gated on *.ar.md) and to the
// plain-text frontmatter fields (answer/keyTakeaways/faq/summary) rendered by the view
// components (gate those on `locale === 'ar'`).
//
// Deliberately conservative: it isolates ONLY the two reversing classes and LEAVES bare
// hyphen-minus ranges (`21-22`) and ISO dates (`2026-07-25`) untouched — those already
// render correctly, so touching them risks a regression (verified in-browser in the audit).

const LRI = '⁦'; // LEFT-TO-RIGHT ISOLATE
const PDI = '⁩'; // POP DIRECTIONAL ISOLATE

/** Wrap reversing numeric ranges in LRI…PDI. Safe on any language (isolates are invisible
 *  in LTR); callers still gate on Arabic to avoid needless work. Idempotent in practice —
 *  the two patterns do not overlap and an already-isolated range is not re-matched. */
export function isolateRanges(s: string | null | undefined): string {
  if (!s || typeof s !== 'string') return s ?? '';
  let o = s.replace(/\d[\d.,]*[–—]\d[\d.,]*/g, (m) => LRI + m + PDI); // en/em-dash ranges
  o = o.replace(/\d{1,3}(?:,\d{3})+-\d{1,3}(?:,\d{3})+/g, (m) => LRI + m + PDI); // comma-grouped hyphen ranges
  return o;
}

/** Rehype plugin that isolates numeric ranges in rendered Arabic markdown bodies.
 *  Gated to `*.ar.md(x)` by the source path; skips <code>/<pre> subtrees so code samples
 *  are never altered. Added to `markdown.rehypePlugins` in astro.config.mjs. */
export function rehypeArabicRanges() {
  return (tree: unknown, file: { path?: string; history?: string[] }) => {
    const p = String(file?.path || file?.history?.[0] || '');
    if (!/\.ar\.mdx?$/.test(p)) return;
    const walk = (node: any, inCode: boolean): void => {
      if (!node) return;
      if (node.type === 'text' && !inCode && typeof node.value === 'string') {
        node.value = isolateRanges(node.value);
        return;
      }
      const tag = node.tagName;
      const code = inCode || tag === 'code' || tag === 'pre';
      if (Array.isArray(node.children)) for (const c of node.children) walk(c, code);
    };
    walk(tree, false);
  };
}
