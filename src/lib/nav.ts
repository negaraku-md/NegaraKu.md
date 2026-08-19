import type { StringKey } from './i18n';
import { REPO } from './site';

export interface NavItem {
  label: StringKey;
  href: string; // locale-agnostic path; Header applies localePath(). External URLs pass through untouched.
  external?: boolean;
  /** Hidden from the dropdown by default; toggled on/off with Ctrl+Alt+Shift+A
      (persisted in localStorage). The page stays reachable by URL regardless. */
  secret?: boolean;
  /** Non-interactive section label inside a dropdown (href ignored). Groups the
      items that follow it until the next heading. */
  heading?: boolean;
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
      { label: 'nav.grpSections', href: '', heading: true },
      { label: 'nav.understandMalaysia', href: '/understand' },
      { label: 'nav.livingMalaysia', href: '/living' },
      { label: 'nav.businessMalaysia', href: '/doing-business' },
      { label: 'nav.grpTools', href: '', heading: true },
      { label: 'nav.graph', href: '/graph' },
      { label: 'nav.articles', href: '/articles', secret: true }, // hidden; Ctrl+Alt+Shift+A toggles it
    ],
  },
  // About = what this project is and who's behind it. FAQ sits above the credit
  // page because it answers the most-asked questions first.
  {
    label: 'nav.about',
    items: [
      { label: 'nav.aboutPage', href: '/about' },
      { label: 'nav.faq', href: '/faq' },
      { label: 'nav.contributors', href: '/contributors' },
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
    ],
  },
  // Site = the website itself: its status, its history, how to report problems
  // WITH it, machine access, and your reading preferences.
  {
    label: 'nav.site',
    items: [
      { label: 'nav.dashboard', href: '/dashboard' },
      { label: 'nav.changelog', href: '/changelog' },
      { label: 'nav.siteBug', href: '/contribute#site' },
      { label: 'nav.forAI', href: '/llms.txt' },
      { label: 'nav.settings', href: '/settings' },
    ],
  },
];
