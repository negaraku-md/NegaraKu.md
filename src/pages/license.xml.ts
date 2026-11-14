import type { APIRoute } from 'astro';
import { SITE } from '@/lib/site';

// RSL (Really Simple Licensing) 1.0 document — https://rslstandard.org/rsl
// Machine-readable form of the terms in /LICENSING.md, so AI crawlers and agents
// can discover the boundary without us having to block anyone:
//   • reading, search indexing, and AI citation / RAG grounding (search,
//     ai-input, ai-index) are FREE, under CC BY-SA 4.0 (attribution + share-alike);
//   • bulk / large-scale AI *training* (ai-train) needs a separate licence.
// This is the HYBRID stance: the crawl stays OPEN (see robots.txt — no AI bot is
// disallowed); the RSL doc just advertises the terms and a door for an
// enterprise / training licence. RSL is advisory, like robots.txt.

const CC_BY_SA = 'https://creativecommons.org/licenses/by-sa/4.0/';
const LICENSE_DOC = 'https://github.com/negaraku-md/NegaraKu.md/blob/main/LICENSING.md';

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rsl xmlns="https://rslstandard.org/rsl">
  <content url="${SITE}/">
    <!-- Free: reading, search indexing, and AI citation / RAG grounding, with attribution + share-alike (CC BY-SA 4.0). -->
    <license>
      <permits type="usage">search ai-input ai-index</permits>
      <permits type="user">commercial non-commercial education government personal</permits>
      <payment type="attribution">
        <standard>${CC_BY_SA}</standard>
      </payment>
    </license>
    <!-- Bulk / large-scale AI training needs a separate licence — see LICENSING.md to arrange one. -->
    <license>
      <permits type="usage">ai-train</permits>
      <payment type="training">
        <custom>${LICENSE_DOC}</custom>
      </payment>
    </license>
  </content>
</rsl>
`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/rsl+xml; charset=utf-8' },
  });
};
