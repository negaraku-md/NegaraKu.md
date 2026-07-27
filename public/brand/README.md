# NegaraKu.md — brand assets

The logo is a **black rounded hexagon** (1company badge shape) with the
**five-petal gold blossom** (stem + buds) in place of the "1". `build-logo.mjs`
is the single source of truth — it also writes `public/favicon.svg`, so the
site icon and this kit can never drift.

Two accents are provided: **Gold** (default file names) and **Bright Red**
(same names with a `-red` suffix), matching the site's Black·Gold and Black·Red
themes.

## Files (each exists in Gold and `-red`)
| File | Use |
|---|---|
| `negaraku-icon.svg` / `-icon-1024.png` / `-512.png` | The hexagon badge — favicon, app icon, avatar, primary logo |
| `negaraku-mark.svg` / `-mark-1024.png` / `-512.png` | Flat blossom, transparent centre — bullets / tiny / monochrome use on any bg |
| `negaraku-lockup.svg` / `-lockup-transparent-1800.png` | Badge + wordmark, transparent |
| `negaraku-lockup-dark.svg` / `-lockup-dark-1800.png` | Badge + wordmark on the dark brand canvas |

Red variants: `negaraku-icon-red.svg`, `negaraku-mark-red.svg`,
`negaraku-lockup-red.svg`, etc.

## Colours
- Gold accent: `#FFC000`
- Bright-red accent: `#FF2020`
- Badge black: `#0A0A0A`
- Dark canvas: `#07070A`
- Ink (wordmark): `#F4F4F8`

## Font
Wordmark: **Montserrat** (700–800). SVGs reference it; PNGs rasterise with the
nearest available system font — prefer the SVGs when the exact typeface matters.

Regenerate everything (favicon + kit) with `node scripts/build-logo.mjs`.
