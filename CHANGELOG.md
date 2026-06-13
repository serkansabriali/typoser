# Changelog

All notable changes to Typoser will be documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versions follow [Semantic Versioning](https://semver.org/).

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
