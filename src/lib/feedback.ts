import { REPO } from './site';
import type { Locale } from './categories';

// FEEDBACK → TRIAGE — the single source of truth for reader feedback (spec §10).
//
// Every reader action becomes ONE structured GitHub issue carrying a canonical
// label. Triage (a Maintainer) routes it into a lifecycle queue. The labels here
// are the contract shared by three places that MUST agree, or the loop silently
// breaks (it did: the site once filed `report`/`suggestion` while the workflow
// listened for `correction`/`improvement`):
//   1. the on-site entry points (ArticleView, ContributeView) that OPEN issues,
//   2. `.github/ISSUE_TEMPLATE/*` for issues opened natively on GitHub,
//   3. `.github/workflows/suggestion-to-needs-update.yml`, which auto-flips a
//      published article to `needs-update` on the `article-issue` label.
//
// | Type                | Label(s)                     | Triage routes to            |
// | ------------------- | ---------------------------- | --------------------------- |
// | article-issue       | article-issue                | needs-update / request-redraft (auto-flip) |
// | article-request     | article-request              | new draft                   |
// | translation-issue   | translation-issue            | translationStatus: stale    |
// | site-improvement    | site-improvement, scope:feature | dev backlog              |
// | site-bug            | site-bug, scope:infra        | dev backlog                 |

export type FeedbackType =
  | 'article-issue'
  | 'article-request'
  | 'translation-issue'
  | 'site-improvement'
  | 'site-bug';

/** Canonical labels applied to each feedback type's GitHub issue. */
export const FEEDBACK_LABELS: Record<FeedbackType, string[]> = {
  'article-issue': ['article-issue'],
  'article-request': ['article-request'],
  'translation-issue': ['translation-issue'],
  'site-improvement': ['site-improvement', 'scope:feature'],
  'site-bug': ['site-bug', 'scope:infra'],
};

/** Build a prefilled `…/issues/new` URL. Extra labels (e.g. `new-category`) merge in. */
export function newIssueUrl(opts: {
  type: FeedbackType;
  title: string;
  body: string;
  extraLabels?: string[];
}): string {
  const labels = [...FEEDBACK_LABELS[opts.type], ...(opts.extraLabels ?? [])].filter(Boolean);
  const q = new URLSearchParams({
    labels: labels.join(','),
    title: opts.title,
    body: opts.body,
  });
  return `${REPO}/issues/new?${q.toString()}`;
}

/**
 * Machine-readable footer identifying the article, appended to article-scoped
 * issue bodies. `scripts/flag-needs-update.mjs` parses these exact line labels
 * (`Path:`, `Language:`, `Topic ID:`), so the shape is a contract:
 *   - Path is the LANGUAGE-INDEPENDENT canonical `/<category>/<slug>` (no locale
 *     prefix) — the script's regex rejects `/en/…`, so a localePath() here would
 *     silently disable the auto-flip on every non-Malay page.
 *   - Language is the locale the reader was actually on.
 */
export function articleMetaFooter(a: {
  title: string;
  topicId: string;
  category: string;
  slug: string;
  locale: Locale;
}): string {
  return (
    `\n\n---\n` +
    `Article: ${a.title}\n` +
    `Topic ID: ${a.topicId}\n` +
    `Language: ${a.locale}\n` +
    `Path: /${a.category}/${a.slug}\n`
  );
}
