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
  version: z.string(),
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

const knowledge = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './knowledge',
    // Preserve the language suffix so "foo.md" and "foo.en.md" get distinct
    // ids; the default generator would collapse them and drop translations.
    generateId: ({ entry }) => entry.replace(/\.md$/i, ''),
  }),
  schema: z.object({
    // ---- identity ----------------------------------------------------
    /** Stable id shared by every language version of this topic. */
    topicId: z.string(),
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    subcategory: z.array(z.string()).default([]),
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
          /** What starts the clock: incorporation, financial year end, etc. */
          trigger: z
            .enum(['incorporation', 'financial-year-end', 'anniversary', 'change', 'ongoing'])
            .default('incorporation'),
          /** Days from the trigger. Omit for ongoing duties. */
          withinDays: z.number().optional(),
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
    lang: z.enum(['ms', 'en', 'zh']).default('ms'),
    /** The source-of-truth language for this topic. */
    masterLanguage: z.enum(['ms', 'en', 'zh']).default('ms'),
    /** Hash of the master content this translation was derived from. */
    sourceContentHash: z.string().nullable().default(null),
    /** in-sync = matches master · stale = master moved on · pending = not translated */
    translationStatus: z
      .enum(['master', 'in-sync', 'stale', 'pending', 'reviewed'])
      .default('master'),

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
        'needs-update',
        'in-update',
        'archived',
      ])
      .default('draft'),
    /** True when the text was AI-drafted — disclosed on the page. */
    aiAssisted: z.boolean().default(true),
    reviewer: z.string().nullable().default(null),
    reviewed: z.coerce.date().nullable().optional(),
    /** Chain of custody — Published stage (Drafted uses `created`/`author` below). */
    published: z.coerce.date().nullable().optional(),
    publishedBy: z.string().nullable().default(null),
    /** When this page should next be checked — drives the freshness queue. */
    reviewDue: z.coerce.date().nullable().optional(),
    version: z.string().default('0.1'),
    revisions: z.array(revisionSchema).default([]),
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

    // ---- graph & discovery -------------------------------------------
    /** Untyped "see also" links (slugs). */
    related: z.array(z.string()).default([]),
    /** Typed knowledge-graph edges. */
    relations: z.array(relationSchema).default([]),
    /** Primary entity this page is about, e.g. "Sdn Bhd", "SSM". */
    entity: z.string().optional(),
    keywords: z.array(z.string()).default([]),

    // ---- misc ---------------------------------------------------------
    hero: z.string().optional(),
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
