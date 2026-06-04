# Changelog

All notable changes to Typoser will be documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versions follow [Semantic Versioning](https://semver.org/).

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
