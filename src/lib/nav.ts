import type { StringKey } from './i18n';

export interface NavItem {
  label: StringKey;
  href: string; // locale-agnostic path; Header applies localePath()
  external?: boolean;
}

export interface NavMenu {
  label: StringKey;
  href?: string; // if set and no items, renders as a plain link
  items?: NavItem[];
  /** Hidden from the nav by default; revealed via a keyboard shortcut
      (Ctrl+Alt+Shift+A). The page stays reachable by URL regardless. */
  secret?: boolean;
}

export const NAV: NavMenu[] = [
  // The three visitor-intent pillars lead the nav.
  { label: 'nav.understand', href: '/understand' },
  { label: 'nav.living', href: '/living' },
  { label: 'nav.business', href: '/doing-business' },
  // Explore is a destination, not a dropdown: the /explore page already gathers
  // search, categories and featured reading. Latest, Graph, Map, Terminology and
  // Random were removed from the menu pending redevelopment — the pages still
  // build and remain reachable by URL.
  { label: 'nav.explore', href: '/explore' },
  { label: 'nav.categories', href: '/categories' },
  { label: 'nav.articles', href: '/articles', secret: true },
  {
    label: 'nav.more',
    items: [
      { label: 'nav.aboutPage', href: '/about' },
      { label: 'nav.graph', href: '/graph' },
      { label: 'nav.dashboard', href: '/dashboard' },
      { label: 'nav.changelog', href: '/changelog' },
      { label: 'nav.settings', href: '/settings' },
    ],
  },
  { label: 'nav.contribute', href: '/contribute' },
];
