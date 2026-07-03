# Changelog

All notable changes to Typoser will be documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versions follow [Semantic Versioning](https://semver.org/).

---

## [0.4.0] — 2026-07-03

### Changed
- All 10 named styles renamed to pixel-based names: `display`→`display-72`, `heading-1..4`→`heading-48`/`36`/`28`/`22`, `body-lg`/`body`/`body-sm`→`body-18`/`body-16`/`body-14`, `label`→`label-13`, `caption`→`caption-12` (JS keys follow the same mapping without dashes, e.g. `bodyLg`→`body18`). Rank- and qualifier-based names implied guarantees the system couldn't keep — a page's `<h1>` isn't always its visually largest heading, and `lg`/`sm` only mean something next to a sibling `body` style that may not be present.

### Deprecated
- Old CSS class names (`.typo-display`, `.typo-heading-1..4`, `.typo-body-lg`, `.typo-body`, `.typo-body-sm`, `.typo-label`, `.typo-caption`) remain as aliases pointing at the same values for this release; removed in 1.0.

### Breaking
- Old JS `typoStyles` keys (`heading1`, `bodyLg`, `body`, `label`, `caption`, etc.) were removed with no alias — a TypeScript compile error was judged safer than a silently stale CSS class. Update to the new keys per the migration table in `STYLES.md`.

---

## [0.3.1] — 2026-06-13

### Added
- `text-wrap: balance` on all heading classes (`display` through `heading-4`) in `styles.css` and `h1–h4` in `prose.css`. Prevents orphaned words on the last line of wrapped headings; no effect on single-line headings.
- `<em>` and `<i>` now render using the genuine Open Sauce One italic cut across all 10 named classes and `.typo-prose`. Previously fell back to browser synthetic oblique.

---

## [0.3.0] — 2026-06-13

### Added
- `<strong>` and `<b>` emphasis defined at ExtraBold (800) for all 10 named `.typo-*` classes and `.typo-prose`. Lighter weights (600, 700) were not visually distinct enough against the Regular and Medium bases at screen sizes.
- `--typo-weight-bold` (700) and `--typo-weight-extrabold` (800) CSS custom properties added to `src/tokens/primitives.css`.
- `bold` and `extrabold` entries added to the `fontWeight` object in `src/js/tokens.ts`.
- Open Sauce One Bold and ExtraBold `.woff2` files vendored (uprights and italics); `fonts.css` updated with the four new `@font-face` blocks.
- Emphasis preview section added to `specimen.html` showing `<strong>` rendering across all 10 styles.

### Changed
- `.typo-prose strong, .typo-prose b` bumped from SemiBold (600) to ExtraBold (800) to match the named-class treatment.

---

## [0.2.0] — 2026-06-13

### Added
- `.typo-prose` scope class — apply to any container to style bare HTML elements (`h1`–`h6`, `p`, `li`, `blockquote`, `small`, `strong`, `b`) without adding classes to each element. Intended for CMS output, markdown renderers, and rich text editors. Typography only; spacing and color remain the consumer's responsibility.

### Changed
- JS/TS API: individual primitive exports (`fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`) removed. `typoStyles` (the 10 named style objects) and `fontFamily` remain. The primitives were implementation detail; their presence as exports encouraged ad-hoc style composition that sits outside the design system's intent.
- README: CSS custom properties section reframed as "Integration plumbing" — variables are for wiring Typoser into contexts a class can't directly reach, not for composing new styles. Added explicit form controls recipe.
- STYLES.md: added design API boundary statement to the scope callout.

---

## [0.1.1] — 2026-06-04

### Changed
- `heading-4` font weight changed from Medium (500) to Regular (400). Hierarchy at this level is carried by size and leading; weight is now consistent with `heading-2` and `heading-3`.

---

## [0.1.0] — 2026-06-04

Initial release.

### Added
- 10 named typographic styles: `display`, `heading-1` through `heading-4`, `body-lg`, `body`, `body-sm`, `label`, `caption`
- CSS custom properties (`src/tokens/primitives.css`, `src/tokens/styles.css`)
- JS/TS token mirror (`src/js/tokens.ts`) with composed `typoStyles` objects
- Barrel exports: `index.css` (CSS entry) and `index.ts` (JS/TS entry)
- Type specimen (`specimen.html`)
- Open Sauce One `.woff2` font files (SIL OFL)
