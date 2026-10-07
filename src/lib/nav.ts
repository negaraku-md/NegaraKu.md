import type { StringKey } from './i18n';
import { REPO } from './site';

export interface NavItem {
  label: StringKey;
  href: string; // locale-agnostic path; Header applies localePath(). External URLs pass through untouched.
  external?: boolean;
  /** Open in a new tab (target="_blank"). For same-origin links that are better
      viewed alongside the site, e.g. the raw llms.txt AI index. */
  newTab?: boolean;
  /** Hidden from the dropdown by default; toggled on/off with Ctrl+Alt+Shift+A
      (persisted in localStorage). The page stays reachable by URL regardless. */
  secret?: boolean;
  /** Non-interactive section label inside a dropdown (href ignored). Groups the
      items that follow it until the next heading. */
  heading?: boolean;
  /** Hide this item for a recognised contributor (html[data-contributor]) — e.g.
      the "Contributor sign-in" link, which makes no sense once signed in. */
  preContributor?: boolean;
  /** Show this item ONLY for a recognised contributor — e.g. "Sign out". */
  contributorOnly?: boolean;
}

export interface NavMenu {
  label: StringKey;
  href?: string; // if set and no items, renders as a plain link
  items?: NavItem[];
  /** Hidden from the nav by default; revealed via a keyboard shortcut
      (Ctrl+Alt+Shift+A). The page stays reachable by URL regardless. */
  secret?: boolean;
}

// The three visitor-intent pillars stay top-level (one click). Everything else is
// grouped into four dropdowns — Explore / About / Contribute / Site — so the bar
// stays scannable as the site grows. Items point at real destinations: existing
// pages, anchors on /contribute, or GitHub for the developer/participation links.
// Each dropdown has one clear intent: About (what/who), Contribute (every way to
// take part, grouped), Site (the website itself). All destinations are real pages
// or /contribute anchors; the Contribute menu is grouped with headings the way
// Explore is, so it stays scannable at ~9 items.
export const NAV: NavMenu[] = [
  { label: 'nav.understand', href: '/understand' },
  { label: 'nav.living', href: '/living' },
  { label: 'nav.business', href: '/doing-business' },
  {
    label: 'nav.explore',
    // Grouped by intent so the links read as three scannable clusters:
    //  Discover (start + the two highest-value browse paths), Sections (the three
    //  pillars in full — the site-wide term for them), Tools (exploratory / power).
    items: [
      { label: 'nav.grpDiscover', href: '', heading: true },
      { label: 'nav.exploreMalaysia', href: '/explore' },
      { label: 'nav.categories', href: '/categories' },
      { label: 'nav.latest', href: '/latest' },
      { label: 'nav.trending', href: '/most-read' },
      { label: 'nav.timeline', href: '/malaysia/timeline-of-malaysia' },
      { label: 'nav.grpTools', href: '', heading: true },
      { label: 'nav.graph', href: '/graph' },
      { label: 'nav.articles', href: '/articles', secret: true }, // hidden; Ctrl+Alt+Shift+A toggles it
    ],
  },
  // About = what this project is + who's behind it, AND the website itself (the
  // old "Site" menu is folded in as a second group so the bar stays lean).
  {
    label: 'nav.about',
    items: [
      { label: 'nav.grpAbout', href: '', heading: true },
      { label: 'nav.startHere', href: '/start' },
      { label: 'nav.aboutPage', href: '/about' },
      { label: 'nav.milestones', href: '/milestones' },
      { label: 'nav.faq', href: '/faq' },
      { label: 'nav.contributors', href: '/contributors' },
      { label: 'nav.grpThisSite', href: '', heading: true },
      { label: 'nav.dashboard', href: '/dashboard' },
      { label: 'nav.analytics', href: '/analytics' },
      { label: 'nav.changelog', href: '/changelog' },
      { label: 'nav.settings', href: '/settings' },
      { label: 'nav.forAI', href: '/llms' },
      { label: 'nav.siteBug', href: '/contribute#site' },
    ],
  },
  // Contribute = every way to take part, grouped by intent so the (now larger)
  // menu stays scannable: learn → do content → give → build.
  {
    label: 'nav.contribute',
    items: [
      { label: 'nav.grpGetStarted', href: '', heading: true },
      { label: 'nav.whyContribute', href: '/contribute' },
      { label: 'nav.roles', href: '/roles' },
      { label: 'nav.grpContent', href: '', heading: true },
      { label: 'nav.submitArticle', href: '/contribute#contribute' },
      { label: 'nav.reportIssue', href: '/contribute#report' },
      { label: 'nav.suggest', href: '/contribute#suggest' },
      { label: 'nav.grpSupportUs', href: '', heading: true },
      { label: 'nav.donate', href: '/donate' },
      { label: 'nav.support', href: '/support' },
      { label: 'nav.grpDevelop', href: '', heading: true },
      { label: 'nav.worklist', href: '/worklist' },
      { label: 'nav.github', href: REPO, external: true },
      // Establishes the contributor session; approved org members then get the
      // Reader/Contributor switch. Dark (503) until the auth Worker is configured.
      // Hidden once recognised; a "Sign out" takes its place (same menu slot).
      { label: 'nav.signin', href: '/api/auth/login', external: true, preContributor: true },
      { label: 'cnav.signout', href: '/api/auth/logout', external: true, contributorOnly: true },
    ],
  },
];

/** The Reader nav is the default nav (everyone, incl. bots). Alias for clarity. */
export const READER_NAV = NAV;

// Contributor View — a launchpad, NOT a second copy of the site. Its nav MIRRORS
// the Contributor workspace home (ContributorHomeView): Workspace · My work ·
// Find a task · Project · Guides · About. Work surfaces deep-link into GitHub
// (@me queries resolve to the signed-in user); nothing private is exposed — GitHub
// enforces real access on click-through. Labels are shared cnav.*/nav.* i18n keys
// so the nav and the workspace cards never drift. Shown only when a recognised
// contributor switches to this view (Header view-mode script + /api/auth/me gate).
const GH_Q = (base: string, q: string) => `${base}?q=${encodeURIComponent(q)}`;
export const CONTRIBUTOR_NAV: NavMenu[] = [
  // The workspace launchpad itself (home) — a one-click plain link.
  { label: 'cnav.workspace', href: '/' },
  {
    label: 'cnav.myWork',
    items: [
      { label: 'cnav.myPrs', href: GH_Q(`${REPO}/pulls`, 'is:pr author:@me'), external: true },
      { label: 'cnav.assigned', href: GH_Q(`${REPO}/issues`, 'is:issue is:open assignee:@me'), external: true },
      { label: 'cnav.reviewRequested', href: GH_Q(`${REPO}/pulls`, 'is:pr is:open review-requested:@me'), external: true },
      { label: 'cnav.grpNeedsAttention', href: '', heading: true },
      { label: 'cnav.prsToReview', href: GH_Q(`${REPO}/pulls`, 'is:pr is:open review:required'), external: true },
      { label: 'cnav.openArticleIssues', href: GH_Q(`${REPO}/issues`, 'is:issue is:open label:article-issue'), external: true },
      { label: 'cnav.buildStatus', href: `${REPO}/actions`, external: true },
    ],
  },
  {
    label: 'cnav.findTask',
    items: [
      { label: 'nav.worklist', href: '/worklist' },
      { label: 'cnav.goodFirst', href: GH_Q(`${REPO}/issues`, 'is:issue is:open label:good-first-issue'), external: true },
      { label: 'cnav.articleRequests', href: GH_Q(`${REPO}/issues`, 'is:issue is:open label:article-request'), external: true },
      { label: 'cnav.translationGaps', href: GH_Q(`${REPO}/issues`, 'is:issue is:open label:translation-issue'), external: true },
      { label: 'cnav.grpStartContributing', href: '', heading: true },
      { label: 'nav.reportIssue', href: '/contribute#report' },
      { label: 'nav.suggest', href: '/contribute#suggest' },
      { label: 'nav.submitArticle', href: '/contribute#contribute' },
      { label: 'nav.siteBug', href: '/contribute#site' },
    ],
  },
  {
    label: 'cnav.project',
    items: [
      { label: 'cnav.grpOnSite', href: '', heading: true },
      { label: 'nav.dashboard', href: '/dashboard' },
      { label: 'nav.analytics', href: '/analytics' },
      { label: 'nav.changelog', href: '/changelog' },
      { label: 'cnav.grpOnGitHub', href: '', heading: true },
      { label: 'cnav.actions', href: `${REPO}/actions`, external: true },
      { label: 'cnav.deploy', href: `${REPO}/actions/workflows/deploy.yml`, external: true },
    ],
  },
  {
    label: 'cnav.guides',
    items: [
      { label: 'cnav.guide', href: '/contributor-guide' },
      { label: 'nav.roles', href: '/roles' },
      { label: 'cnav.fullGuide', href: `${REPO}/blob/main/CONTRIBUTING.md`, external: true },
      { label: 'cnav.newToGithub', href: 'https://skills.github.com/', external: true },
    ],
  },
  {
    label: 'nav.about',
    items: [
      { label: 'nav.grpAbout', href: '', heading: true },
      // Start Here stays reachable in every state (it introduces both Explore and
      // Contribute); the Contributor Guide (in Guides) is the deeper onboarding.
      { label: 'nav.startHere', href: '/start' },
      { label: 'nav.aboutPage', href: '/about' },
      { label: 'nav.milestones', href: '/milestones' },
      { label: 'nav.faq', href: '/faq' },
      { label: 'nav.contributors', href: '/contributors' },
      { label: 'nav.grpThisSite', href: '', heading: true },
      { label: 'nav.forAI', href: '/llms' },
      { label: 'nav.settings', href: '/settings' },
      { label: 'cnav.signout', href: '/api/auth/logout', external: true },
    ],
  },
];
