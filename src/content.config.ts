import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The knowledge base is the Single Source of Truth. Astro reads Markdown
// directly from `knowledge/` via the glob loader — no copy step required.
// File id shape: "<category>/<slug>[.<locale>]" e.g. "history/kesultanan-melaka.en".

const sourceSchema = z.object({
  title: z.string(),
  url: z.string().url().optional(),
  publisher: z.string().optional(),
  /** Date the source itself was published/updated — for citation freshness. */
  date: z.string().optional(),
  /** Stable id for in-article references (e.g. a review's `sourceRef` points here).
   *  Optional; set it on sources a `review[]` entry cites. */
  id: z.string().optional(),
});

/** Image provenance grammar — shared by the hero* fields and images[].
 *  See docs/FOOD-ARTICLE-STANDARD.md §"One image rule".
 *  - kind:   does this image depict THIS article's subject? `actual` | `representative`.
 *            Set it against the NARROWEST claim the caption/placement makes, not the
 *            pixels: a real char-kway-teow photo is `actual` on the dish guide but
 *            `representative` as a specific stall's cover.
 *  - origin: who made/supplied it — `editorial` (our own), `owner` (shop-supplied),
 *            `third-party`. Independent of kind (a shop or a stranger can both supply
 *            an `actual` photo).
 *  The 示意图 / 店家供图 / 编辑实拍 label is GENERATED from (kind, origin) in i18n —
 *  never author it. `subject`, `caption`, `alt` ARE authored & translated. */
const imageSchema = z.object({
  role: z.enum(['cover', 'dish', 'ordering', 'storefront', 'menu', 'method', 'scene', 'other']).default('other'),
  src: z.string(),
  /** Accessible alt text (translated; cascades to translations). */
  alt: z.string(),
  kind: z.enum(['actual', 'representative']).default('representative'),
  origin: z.enum(['editorial', 'owner', 'third-party']).default('third-party'),
  /** User-facing "what it depicts", e.g. "汤版肉骨茶" (translated; cascades). */
  subject: z.string().optional(),
  /** Branch identifier where kind=actual and known, e.g. "121 Jalan Kepong" (shared; neutral). */
  branch: z.string().optional(),
  /** Authored caption beyond the generated label (translated; cascades). */
  caption: z.string().optional(),
  credit: z.string().optional(),
  license: z.string().optional(),
  sourceUrl: z.string().optional(),
  /** Owner-provided: the permission / licence record reference (shared; neutral). */
  permissionRef: z.string().optional(),
});

/** Attributed, venue-specific taste commentary — PLACE articles only. Multiple
 *  entries allowed (different critics / dishes). Every entry names its source; a
 *  taste claim is never written in NegaraKu.md's own voice without an editorial
 *  visit. See docs/FOOD-ARTICLE-STANDARD.md §"Place". */
const reviewSchema = z.object({
  source: z.enum(['michelin', 'editorial-visit', 'named-critic', 'owner', 'public']),
  /** Who observed, e.g. "MICHELIN Guide" (shown; may be translated). */
  by: z.string().optional(),
  /** Points at a sources[].id (soft reference; validated by the health scan). */
  sourceRef: z.string().optional(),
  /** The dish(es) assessed (translated; cascades). */
  subject: z.string().optional(),
  /** The source's own flavour/texture observation (translated; cascades). */
  flavor: z.array(z.string()).default([]),
  /** What that means for a reader's preference — optional (translated; cascades). */
  tradeoffs: z.array(z.string()).default([]),
  /** For source:'editorial-visit' only — the month visited, e.g. "2026-11". */
  visitedMonth: z.string().optional(),
  /** Branch the observation applies to, when venue has several. */
  branch: z.string().optional(),
});

/** A typed edge in the knowledge graph, e.g. { rel: 'administered-by', to: 'ssm' }. */
const relationSchema = z.object({
  rel: z.enum([
    'administered-by',
    'governs',
    'requires',
    'affects',
    'part-of',
    'located-in',
    'supersedes',
    'explained-in',
    'compares-with',
    'related-to',
  ]),
  to: z.string(),
});

/** One entry in the article's revision history (shown in the trust block). */
const revisionSchema = z.object({
  /** 0-based index of this published revision (was the string `version`). */
  revision: z.number().int().nonnegative(),
  /** Optional git commit this revision landed in (link-to-commit history). */
  commit: z.string().optional(),
  date: z.coerce.date(),
  change: z.string(),
  /**
   * Who made or proposed this change. In an open project credit is the currency,
   * so the contributor — including a reader who reported the error — is named in
   * the article's public change history, not just in git.
   */
  contributor: z.string().nullable().default(null),
  reviewer: z.string().nullable().default(null),
  /** Why it changed — e.g. "Budget 2027 rate change". */
  reason: z.string().optional(),
});

/**
 * Physical-place facts for venue profiles (e.g. MICHELIN restaurant pages) —
 * rendered by ArticleView as a "Where to find & ratings" card. Present only on
 * place-based articles; absent on dish/topic articles (no card then).
 *
 * Ratings are a DATED, ATTRIBUTED SNAPSHOT — a point-in-time citation
 * (`ratingAsOf`), never a maintained live leaderboard — while `mapsUrl` always
 * links to Google's live listing for the current score. Language-neutral: lives
 * on the master and is inherited verbatim by every translation.
 */
const placeSchema = z.object({
  /** Native-script name as the venue brands itself, e.g. "阿喜肉骨茶". */
  nativeName: z.string().optional(),
  /** Street address as shown on the venue's own listing. */
  address: z.string().optional(),
  /** Google Maps place URL (links to the live listing). */
  mapsUrl: z.string().url().optional(),
  /** Snapshot Google star rating 0–5, e.g. 4.3. Dated by `ratingAsOf`. */
  googleRating: z.number().min(0).max(5).optional(),
  /** Snapshot Google review count, e.g. 1250. */
  googleReviews: z.number().int().nonnegative().optional(),
  /** When the rating/review snapshot was taken, e.g. "2026-11" — shown as "as of". */
  ratingAsOf: z.string().optional(),
  /** Optional price band as shown on the listing, e.g. "RM 20–40". */
  priceRange: z.string().optional(),
  /** Phone number as shown on the venue's listing. */
  phone: z.string().optional(),
  /** Official website (not a social page). */
  website: z.string().url().optional(),
  /** Social / web links for the venue itself (verified, venue-owned). */
  facebook: z.string().url().optional(),
  instagram: z.string().url().optional(),
  tiktok: z.string().url().optional(),

  // ---- reader-first facts (what a diner actually wants to know) -----
  /** Halal status — shown as a prominent badge. Sourced per venue, never guessed.
   *  Language-neutral enum; the card renders a localised label. */
  halal: z
    .enum(['halal-certified', 'halal', 'muslim-owned', 'pork-free', 'no-pork-no-lard', 'non-halal', 'contains-pork', 'vegetarian'])
    .optional(),
  /** Opening hours + closed days. LOCALISED per file (day names translate), e.g.
   *  "Mon–Fri 08:30–15:30 · Wed closed". */
  hours: z.string().optional(),
  /** Service modes offered. Language-neutral enum; card renders localised labels. */
  service: z.array(z.enum(['dine-in', 'takeaway', 'delivery'])).optional(),
  /** True if the venue is cash-only. Language-neutral. */
  cashOnly: z.boolean().optional(),
  /** Signature dish(es) to order. LOCALISED per file. */
  mustOrder: z.string().optional(),
  /** Neutral synthesis of public reviews (NOT copied review text). LOCALISED per file. */
  reviewSummary: z.string().optional(),
  /** Where to read the live reviews (Google/Facebook). Language-neutral. */
  reviewsUrl: z.string().url().optional(),
  /** Short clarifier shown right under `hours`: lunch availability, and that a
   *  post-midnight close (e.g. "02:30") is the NEXT day. LOCALISED per file, e.g.
   *  "For lunch, go Tue/Wed; other days open mid-afternoon. 02:30 = next day." */
  hoursNote: z.string().optional(),
  /** Accurate payment line, sourced not guessed, e.g. "No credit cards; cash & QR
   *  — confirm with the venue". When set it REPLACES the generic "Cash only" chip
   *  so the card never overstates what the source actually says. LOCALISED per file. */
  payment: z.string().optional(),
  /** When the practical details (hours, payment, prices) were last verified, e.g.
   *  "2026-11". Shown as a muted "confirm before visiting" stamp. Language-neutral. */
  checkedAsOf: z.string().optional(),
});

const knowledge = defineCollection({
  // retainBody: false DROPS the raw markdown `body` from the content store,
  // keeping only the rendered HTML that render() uses. At 13 languages the store
  // (raw body + rendered HTML for ~14k entries) crossed V8's ~512MB single-string
  // limit and broke the build. The raw markdown still lives on disk — raw.ts reads
  // it from filePath for /llms-full + the raw views — and reading time comes from
  // the manifest word count (content.ts readingTime), so nothing at render time
  // needs the stored body.
  loader: glob({
    pattern: '**/*.md',
    base: './knowledge',
    // Preserve the language suffix so "foo.md" and "foo.en.md" get distinct
    // ids; the default generator would collapse them and drop translations.
    generateId: ({ entry }) => entry.replace(/\.md$/i, ''),
    retainBody: false,
  }),
  schema: z.object({
    // ---- identity ----------------------------------------------------
    /** Stable id shared by every language version of this topic. */
    topicId: z.string(),
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    subcategory: z.array(z.string()).default([]),
    // Extra categories this article should ALSO be listed under (cross-listing).
    // For a cross-cutting entity that has one canonical article but belongs in
    // more than one section — e.g. companies/petronas with alsoIn: [energy,
    // industries]. It creates NO new URL and NO duplicate content: the article
    // keeps its single canonical page and merely appears in the other category
    // and topic listings, each link pointing home. Leave empty for normal pages.
    alsoIn: z.array(z.string()).default([]),
    summary: z.string(),

    // ---- shape -------------------------------------------------------
    /**
     * Editorial depth. Drives template, review requirement and expectations.
     * 1 authoritative guide · 2 standard · 3 direct answer/FAQ · 4 entity/data
     * S sensitive national content (3R+1) — always human-reviewed.
     */
    tier: z.enum(['1', '2', '3', '4', 'S']).default('3'),
    /** Which template voice to render: answer-first vs story-led. */
    mode: z.enum(['practical', 'narrative']).default('practical'),
    /**
     * Reader-need framework — what the reader came to DO. Sets the opening
     * emphasis, which sections earn their place, and the editorial checks the
     * health scan applies. Orthogonal to `mode` (voice) and `foodType` (food
     * subject). Optional and NON-rendering in v1: editorial guidance + lint only.
     * NOT in translation-sync's TRANSLATED_FIELDS → tagging is freshness-neutral.
     * An article family must be all-untagged or all-same-value (validate-frontmatter).
     */
    framework: z
      .enum([
        'explainer',
        'history-culture',
        'profile',
        'how-to',
        'decision',
        'rules',
        'data-reference',
        'journey-hub',
      ])
      .optional(),
    /** What kind of thing this page is. */
    contentType: z
      .enum([
        'guide',
        'faq',
        'checklist',
        'comparison',
        'timeline',
        'glossary',
        'law',
        'agency',
        'place',
        'company',
        'industry',
        'data',
        'news',
      ])
      .default('guide'),

    // ---- three-layer reading model -----------------------------------
    /** Layer 1: the 30-second direct answer. 40–100 words. */
    answer: z.string().optional(),
    /** Layer 1: scannable takeaways. */
    keyTakeaways: z.array(z.string()).default([]),
    /** Layer 1: who this page is for. */
    appliesTo: z.string().optional(),
    /**
     * Structured FAQ — rendered as an accordion AND emitted as FAQPage JSON-LD.
     * This is a primary AEO surface: assistants extract these directly.
     */
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    /**
     * Common misconceptions — the "fact card" differentiator for newcomer/China-audience
     * topics (growth-strategy-synthesis-2026-11.md P1). Each entry pairs a widely-held
     * MYTH with the sourced FACT that corrects it, turning "knowing a label" into
     * "understanding the system". Rendered as a prominent myth→fact callout (see
     * ArticleView). Sensitive-adjacent topics must stay NEUTRAL + sourced (reviewer gate).
     * Freshness-neutral: deliberately NOT in TRANSLATED_FIELDS, so adding it never flips
     * translations stale — localise per file at your own pace.
     */
    commonMisconception: z
      .array(z.object({ myth: z.string(), fact: z.string() }))
      .default([]),

    // ---- title variants (HTS) ----------------------------------------
    /** ≤60 chars, head-term first. Falls back to `title`. */
    seoTitle: z.string().optional(),
    /** Curiosity-led, for WhatsApp/Facebook/LinkedIn shares. */
    socialTitle: z.string().optional(),

    /**
     * Claims an SME must confirm before this can move past `draft`.
     * Surfaced on the page so readers see exactly what is unverified.
     */
    verificationNeeded: z.array(z.string()).default([]),

    /**
     * Statutory obligations described by this article, as DATA rather than prose.
     *
     * The visitor's real problem is that compliance duties start on day one and
     * nobody reminds them — and no competitor lets you assemble your own
     * calendar from 25 scattered articles. Structuring deadlines here lets
     * /compliance-calendar generate a personalised, dated obligation list.
     */
    obligations: z
      .array(
        z.object({
          /** What must be done, in plain language. */
          what: z.string(),
          /** What starts the clock — the deadline BASIS. Each computes differently
           *  (see ComplianceCalendarView):
           *  - incorporation      : withinDays after the incorporation date
           *  - anniversary        : withinDays after each incorporation anniversary
           *  - financial-year-end : withinDays after the financial year end (needs FYE)
           *  - monthly            : by `dueDay` of every month (recurring; no input)
           *  - event              : withinDays before/after a one-off `event` date
           *  - change / ongoing   : not date-computable (shown as guidance) */
          trigger: z
            .enum([
              'incorporation', 'financial-year-end', 'anniversary',
              'monthly', 'event', 'threshold', 'change', 'ongoing',
            ])
            .default('incorporation'),
          /** Days from the trigger. Omit for ongoing/monthly/threshold duties. */
          withinDays: z.number().optional(),
          /** For trigger:'threshold' — the size test(s) that decide whether this duty
           *  applies (e.g. SST: turnover ≥ 500000) or whether an EXEMPTION is earned
           *  (e.g. audit exemption: revenue ≤ 100000 AND assets ≤ 300000 AND employees ≤ 5).
           *  ALL criteria must hold. Metrics are read from the visitor's size inputs. */
          criteria: z
            .array(
              z.object({
                metric: z.enum(['turnover', 'revenue', 'assets', 'employees']),
                op: z.enum(['gte', 'gt', 'lte', 'lt']),
                value: z.number(),
              }),
            )
            .optional(),
          /** For trigger:'threshold' — how many of the `criteria` must hold. Default is
           *  ALL of them (AND). Set to encode "meet at least N of M" rules, e.g. audit
           *  exemption's two-of-three test (revenue / assets / employees). */
          minCriteria: z.number().optional(),
          /** For trigger:'threshold' — true means meeting the criteria EARNS AN EXEMPTION
           *  (duty does NOT apply); false/absent means meeting them TRIGGERS the duty. */
          exemption: z.boolean().optional(),
          /** For trigger:'monthly' — the day of the month it is due (1–31). e.g. EPF = 15. */
          dueDay: z.number().min(1).max(31).optional(),
          /** For trigger:'event' — whether withinDays counts BEFORE or AFTER the event. */
          direction: z.enum(['before', 'after']).optional(),
          /** For trigger:'event' — the named event the clock hangs on, e.g. "payment", "AGM". */
          event: z.string().optional(),
          /** Human-readable deadline, e.g. "within 30 days of incorporation". */
          due: z.string(),
          /** Who it is owed to — SSM, LHDN, RMCD, EPF… */
          authority: z.string(),
          /** Statutory basis, e.g. "Companies Act 2016, s.236". */
          statute: z.string().optional(),
          /** What happens if missed. */
          consequence: z.string().optional(),
        }),
      )
      .default([]),

    // ---- language & translation sync ---------------------------------
    lang: z.enum(['ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr']).default('ms'),
    /** The source-of-truth language for this topic. Tamil is permitted as a
     *  master for community-origin topics (e.g. Hinduism in Malaysia) authored
     *  natively in Tamil; ja/ko remain translation-only for now. */
    masterLanguage: z.enum(['ms', 'en', 'zh', 'ta']).default('ms'),
    /** Hash of the master content this translation was derived from. */
    sourceContentHash: z.string().nullable().default(null),
    /** in-sync = matches master · stale = master moved on · pending = not translated */
    translationStatus: z
      .enum(['master', 'in-sync', 'stale', 'pending', 'reviewed'])
      .default('master'),
    /** Critical-correction safeguard behaviour when a TRANSLATION is `stale`
     *  (the master was corrected but this language has not caught up).
     *  - `banner` (default): serve the page with a prominent notice linking to the
     *    corrected language — the reader still sees the old content but is warned.
     *  - `withhold`: the old instruction could cause harm, so DON'T serve it — the
     *    stale page shows only the safeguard notice, and it is withheld from search,
     *    raw Markdown, llms.txt/MCP and the dataset until re-translated.
     *  Set on the MASTER (inherited by translations); raise to `withhold` on
     *  high-risk how-to / rules / data articles. See docs/CORRECTION-SAFEGUARD.md. */
    staleSafeguard: z.enum(['banner', 'withhold']).default('banner'),

    // ---- trust & governance ------------------------------------------
    /**
     * Editorial lifecycle. It is a LOOP, not a line — published content cycles
     * back through update and re-review, and only `archived` is terminal:
     *
     *   draft → in-review → reviewed → published
     *                                     ↓  (reviewDue passed, or a correction
     *                               needs-update    is suggested)
     *                                     ↓
     *                                in-update  → in-review → published (version++)
     *
     *   published → archived   (repealed / superseded — retired from the site)
     *
     * `needs-update` and `in-update` are LIVE states: the reader keeps seeing the
     * current version while the next one is prepared. Never send a published
     * article back to `draft` — that would unpublish a working page mid-edit.
     */
    status: z
      .enum([
        'draft',
        'in-review',
        'reviewed',
        'published',
        // Update route (auto/flag → claim → work → review → publish):
        'needs-update',
        'in-update',
        // Redraft route (human-requested substantive rework):
        'request-redraft',
        'in-redraft',
        // Archive route (retire; cascades to all languages):
        'request-archive',
        'in-archive',
        'archived',
      ])
      .default('draft'),
    /**
     * Explicit off switch — force-hide from the public site regardless of
     * status. Set on a MASTER file it hides every language of the topic; set on
     * a single translation it hides only that language.
     */
    hidden: z.boolean().default(false),
    /** True when the text was AI-drafted — disclosed on the page. */
    aiAssisted: z.boolean().default(true),
    reviewer: z.string().nullable().default(null),
    reviewed: z.coerce.date().nullable().optional(),
    /** Chain of custody — Published stage (Drafted uses `created`/`author` below). */
    published: z.coerce.date().nullable().optional(),
    publishedBy: z.string().nullable().default(null),
    /** When this page should next be checked — drives the freshness queue. */
    reviewDue: z.coerce.date().nullable().optional(),
    revisions: z.array(revisionSchema).default([]),
    /**
     * Two-field lifecycle model (docs/LIFECYCLE-AND-CONTRIBUTION-SPEC.md §2).
     * `revision` is the PUBLISHED-VERSION slot: null = never published (draft);
     * 0 = first published; +1 on each later publish (archive does not increment).
     * This is authoritative — the old string `version` field was retired by
     * scripts/migrate-version-to-revision.mjs.
     */
    revision: z.number().int().nonnegative().nullable().default(null),
    /**
     * Work-assignment (contributor worklist, spec §7). When an article is in an
     * `in-*` state, `assignee` is who claimed it and `claimedAt` is when.
     */
    assignee: z.string().nullable().default(null),
    claimedAt: z.coerce.date().nullable().optional(),
    /** For `request-redraft` / `request-archive`: who raised it, and why. */
    requestedBy: z.string().nullable().default(null),
    requestReason: z.string().nullable().optional(),
    /**
     * For an `archived` topic that was merged into / replaced by another: the
     * canonical BASE path of its successor (ms form, no locale prefix), e.g.
     * "/companies/petronas". Written by scripts/archive-article.mjs, which also
     * emits the per-locale 301 redirects (src/data/archive-redirects.json). Null
     * for a genuinely obsolete topic with no successor (served as a noindex
     * tombstone instead — see `tombstone`). Not in the translation hash.
     */
    supersededBy: z.string().nullable().optional(),
    /**
     * A no-successor TOMBSTONE: an archived topic that is still SERVED (200) at
     * its URL — carrying an "archived/repealed" banner + `noindex` — so a once-
     * indexed URL never 404s and the historical text stays readable. Explicit,
     * never derived: only `archive-article.mjs --tombstone` sets it, so ordinary
     * archived topics (dropped from the site / redirected) are unaffected. A
     * tombstone has no `supersededBy`. Kept out of every listing, the sitemap,
     * the graph, OG and search.
     */
    tombstone: z.boolean().default(false),
    /**
     * 3R+1 and other sensitive classes. Anything other than `none` blocks
     * publication until a named human reviewer signs off.
     */
    sensitivity: z
      .enum([
        'none',
        'race',
        'religion',
        'royalty',
        'constitution',
        'elections',
        'security',
        'health',
        'legal-proceedings',
      ])
      .default('none'),

    // ---- dates & sources ---------------------------------------------
    created: z.coerce.date().optional(),
    updated: z.coerce.date(),
    sources: z.array(sourceSchema).default([]),

    /** Where-to-find & ratings card for venue profiles (restaurants). Optional;
     *  dish/topic articles omit it. See placeSchema above. */
    place: placeSchema.optional(),

    // ---- graph & discovery -------------------------------------------
    /** Untyped "see also" links (slugs). */
    related: z.array(z.string()).default([]),
    /** Typed knowledge-graph edges. */
    relations: z.array(relationSchema).default([]),
    /** Primary entity this page is about, e.g. "Sdn Bhd", "SSM". */
    entity: z.string().optional(),
    /** Wikidata QID of the entity this page is about, e.g. "Q1863" (Selangor).
     *  Emitted as schema.org `about.sameAs` (see src/lib/seo.ts) so Google's
     *  Knowledge Graph and LLMs link this article to the canonical global entity —
     *  making NegaraKu.md a recognised authoritative source on it. Language-neutral
     *  (lives on the master; translations inherit via the shared schema). Optional;
     *  set only where a confident, correct Wikidata item exists. */
    wikidata: z.string().regex(/^Q\d+$/).optional(),
    keywords: z.array(z.string()).default([]),
    /** Social-media metadata. `hashtags` are curated, English, WITHOUT the "#"
     *  (e.g. ["HoldingCompany","MalaysiaTax"]); the Facebook auto-poster
     *  (scripts/post-to-facebook.mjs) publishes them + #NegaraKu. When absent it
     *  falls back to category/subcategory + keyword-derived tags. Language-neutral
     *  — keep the same list on all three language files. Not in the translation hash. */
    social: z.object({ hashtags: z.array(z.string()).default([]) }).optional(),

    // ---- misc ---------------------------------------------------------
    /** Hero / lead image. Path under public/, e.g. "/media/food/nasi-lemak/hero.webp".
     *  WebP, 16:9, ~1600×900, ≤180 KB. Sourcing + rules: docs/IMAGE-STANDARD.md. */
    hero: z.string().optional(),
    /** Accessible alt text for `hero`. REQUIRED whenever `hero` is set (WCAG). */
    heroAlt: z.string().optional(),
    /** Image credit / attribution shown in the caption, e.g. "Photo: Jane Doe",
     *  "Wikimedia Commons", or "AI-generated". */
    heroCredit: z.string().optional(),
    /** Licence of the hero image — e.g. "CC BY-SA 4.0", "CC0", "AI-generated",
     *  "© 1company". Part of the hybrid sourcing policy (docs/IMAGE-STANDARD.md). */
    heroLicense: z.string().optional(),
    /** Provenance URL for the hero image (where it was obtained). */
    heroSource: z.string().optional(),
    /** Hero provenance grammar (see imageSchema). `kind`/`origin`/`branch`/
     *  `permissionRef` are shared metadata (freshness-neutral); `heroSubject` is
     *  authored & translated. The 示意图/店家供图/编辑实拍 label is generated from
     *  (heroKind, heroOrigin). */
    heroKind: z.enum(['actual', 'representative']).optional(),
    heroOrigin: z.enum(['editorial', 'owner', 'third-party']).optional(),
    heroSubject: z.string().optional(),
    heroBranch: z.string().optional(),
    heroPermissionRef: z.string().optional(),
    /** Body images (beyond the hero cover), each with the provenance grammar above.
     *  See docs/FOOD-ARTICLE-STANDARD.md. */
    images: z.array(imageSchema).default([]),
    /** Attributed, venue-specific taste commentary — PLACE food articles only.
     *  Omit (empty) when no attributable observation exists (an award alone does
     *  NOT qualify). See reviewSchema + docs/FOOD-ARTICLE-STANDARD.md. */
    review: z.array(reviewSchema).default([]),
    /** Food-article template selector — Living in Malaysia → Food & Lifestyle.
     *  place=venue · dish/ingredient=food subject · cuisine/culture=food culture ·
     *  practical=rules/how-to. Drives the block set, the image-honesty default and
     *  whether review[] applies (place only). Optional; set on food-lifestyle
     *  articles. See docs/FOOD-ARTICLE-STANDARD.md. */
    foodType: z.enum(['place', 'dish', 'ingredient', 'cuisine', 'culture', 'practical']).optional(),
    featured: z.boolean().default(false),
    /**
     * Sponsor id from src/lib/sponsors.ts. Omit to inherit the pillar default;
     * set "none" to opt this article out. Sensitive content is never sponsored.
     */
    sponsor: z.string().nullable().default(null),
    author: z.string().default('NegaraKu.md Editorial'),
  }),
});

export const collections = { knowledge };
