# NegaraKu.md — brand assets

> **© NegaraKu.md — All rights reserved.** Unlike the rest of this repository,
> the brand assets in this directory are **proprietary and NOT covered by the
> project's open licenses** (content CC BY-SA 4.0, code MIT, design system
> CC BY 4.0). This includes the `NegaraKu.md` wordmark, the Bunga Raya / hexagon
> logo, all marks and lockups, and the bespoke illustrations. You may reproduce
> an **unmodified** logo solely to link to or refer to NegaraKu.md (nominative
> reference). Any other use — modifying a mark, implying endorsement, or
> presenting a derivative as NegaraKu.md — requires written permission. See
> [`../../LICENSING.md`](../../LICENSING.md).

The logo (v2) is a **black rounded hexagon** (1company badge shape) with the
**gold Bunga Raya** — an exact vector trace of Malaysia's national-flower emblem
— in place of the "1". `build-logo.mjs` is the single source of truth (shape in
`scripts/logo-flower.mjs`); it also writes `public/favicon.svg`, so the site
icon and this kit can never drift.

A single **Gold** accent (the 1company brand) on the black badge canvas.

## Files
| File | Use |
|---|---|
| `negaraku-icon.svg` / `-icon-1024.png` / `-512.png` | The hexagon badge — favicon, app icon, avatar, primary logo |
| `negaraku-mark.svg` / `-mark-1024.png` / `-512.png` | Flat hibiscus, transparent creases — bullets / tiny / monochrome use on any bg |
| `negaraku-lockup.svg` / `-lockup-transparent-1800.png` | Badge + wordmark, transparent |
| `negaraku-lockup-dark.svg` / `-lockup-dark-1800.png` | Badge + wordmark on the dark brand canvas |

## Colours
- Gold accent: `#FFC000`
- Badge black: `#0A0A0A`
- Dark canvas: `#07070A`
- Ink (wordmark): `#F4F4F8`

## Font
Wordmark: **Montserrat** (700–800). SVGs reference it; PNGs rasterise with the
nearest available system font — prefer the SVGs when the exact typeface matters.

Regenerate everything (favicon + kit) with `node scripts/build-logo.mjs`.
