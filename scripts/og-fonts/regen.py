#!/usr/bin/env python3
"""Regenerate assets/og-fonts/*.ttf from the @fontsource woff2 already in the tree.

The OG social-card renderer (scripts/build-og.mjs) rasterises SVG -> PNG with
sharp/librsvg, which resolves font-family against SYSTEM fonts (fontconfig) on
the CI runner. We vendor the brand faces as latin-subset TTFs so the cards use
real Montserrat/Lato with no apt/network dependency (see assets/og-fonts/README.md
and the "Install fonts for Open Graph images" step in .github/workflows/deploy.yml).

This script is the reproducible source of those TTFs. The site build NEVER runs
it — the TTFs are committed. Re-run it only when the brand weights change or the
@fontsource packages are upgraded.

Usage (from repo root, after `npm install`):
    python -m pip install -r scripts/og-fonts/requirements.txt
    python scripts/og-fonts/regen.py

It (1) losslessly decompresses each latin-subset woff2 -> ttf, and (2) normalises
the Montserrat `name` tables: Fontsource's per-weight subset files ship a
"Montserrat Thin" artifact family that fontconfig will NOT match as "Montserrat",
so we rewrite name IDs 1/2/4/6/16/17 to expose family "Montserrat" with the
700 (Bold) and 800 (ExtraBold) weights. Lato's tables are already correct.
"""

import os
import sys

try:
    from fontTools.ttLib import TTFont
    from fontTools.ttLib.woff2 import decompress
except ImportError:
    sys.exit(
        "fontTools not found. Install the pinned deps first:\n"
        "    python -m pip install -r scripts/og-fonts/requirements.txt"
    )

# Repo root = two levels up from this file (scripts/og-fonts/regen.py).
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
FS = os.path.join(ROOT, "node_modules", "@fontsource")
OUT = os.path.join(ROOT, "assets", "og-fonts")

# (source woff2 relative to node_modules/@fontsource, output ttf) — weights match
# build-og.mjs: Montserrat 700/800 (TITLE), Lato 400/700 (BODY).
JOBS = [
    ("montserrat/files/montserrat-latin-700-normal.woff2", "Montserrat-Bold.ttf"),
    ("montserrat/files/montserrat-latin-800-normal.woff2", "Montserrat-ExtraBold.ttf"),
    ("lato/files/lato-latin-400-normal.woff2", "Lato-Regular.ttf"),
    ("lato/files/lato-latin-700-normal.woff2", "Lato-Bold.ttf"),
]

# name-table overrides for the Montserrat faces (family must read "Montserrat").
# nameIDs: 1=Family 2=Subfamily 4=Full 6=PostScript 16=TypoFamily 17=TypoSubfamily
MONTSERRAT_NAMES = {
    "Montserrat-Bold.ttf": {
        1: "Montserrat", 2: "Bold", 4: "Montserrat Bold",
        6: "Montserrat-Bold", 16: "Montserrat", 17: "Bold",
    },
    "Montserrat-ExtraBold.ttf": {
        1: "Montserrat ExtraBold", 2: "Regular", 4: "Montserrat ExtraBold",
        6: "Montserrat-ExtraBold", 16: "Montserrat", 17: "ExtraBold",
    },
}


def set_names(path, ids):
    # recalcTimestamp=False preserves head.modified from the source woff2 (fontTools
    # otherwise stamps "now" on save, which would make every regen non-reproducible).
    ft = TTFont(path, recalcTimestamp=False)
    name = ft["name"]
    for nid, val in ids.items():
        name.setName(val, nid, 3, 1, 0x409)  # Windows / Unicode BMP / en-US
        name.setName(val, nid, 1, 0, 0)       # Mac / Roman / English
    ft.save(path)


def main():
    if not os.path.isdir(FS):
        sys.exit(f"@fontsource not found at {FS} — run `npm install` first.")
    os.makedirs(OUT, exist_ok=True)
    for src_rel, out_name in JOBS:
        src = os.path.join(FS, src_rel)
        dst = os.path.join(OUT, out_name)
        if not os.path.isfile(src):
            sys.exit(f"missing source woff2: {src}")
        decompress(src, dst)
        if out_name in MONTSERRAT_NAMES:
            set_names(dst, MONTSERRAT_NAMES[out_name])
        # verify family + weight resolve as intended
        ft = TTFont(dst)
        fam = ft["name"].getName(16, 3, 1, 0x409) or ft["name"].getName(1, 3, 1, 0x409)
        wght = ft["OS/2"].usWeightClass
        print(f"  {out_name:26} family={str(fam)!r:14} weight={wght}  ({os.path.getsize(dst)} bytes)")
    print("OG fonts regenerated into assets/og-fonts/ — commit the .ttf changes.")


if __name__ == "__main__":
    main()
