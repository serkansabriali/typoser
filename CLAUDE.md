# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Typoser is a **framework-agnostic typographic style library** — 10 named text styles set in Open Sauce One, distributed as plain CSS custom properties with a hand-maintained TypeScript token mirror. It is meant to be consumed across many projects (Next.js, Vite, plain HTML, React component libraries) with a single import and **zero runtime dependencies**. There is intentionally no Tailwind and no PostCSS. The only build step is `tsc` to compile the TypeScript token mirror to `dist/`.

**Scope is type only:** family, size, weight, line height, tracking. Color, spacing, and layout are out of scope by design — consumers pair Typoser with their own color/spacing tokens. The specimen renders everything monochrome to reinforce this.

## Commands

There is no lint or test runner. Verification is manual:

- **Preview the library:** `open specimen.html` — the type specimen consumes `index.css` exactly as a real project would. This is the primary way to visually verify any token change.
- **Build the JS/TS distribution:** `npm run build` — compiles `index.ts` + `src/js/tokens.ts` to `dist/` via `tsconfig.json`.
- **Type-check without emitting:** `npx tsc --noEmit`
- **Check for stale token names after a rename:** `grep -rn "typo-size-h[1-4]" src specimen.html index.css` (should return nothing).

## Architecture & the source-of-truth chain

Values flow in one direction. **Figma is the upstream design source of truth**; the CSS is downstream of it:

```
Figma file (fileKey: bQ7PTFBss8xYhqSowpO1Bc, node 2:13)
  └─> src/tokens/primitives.css   raw values as --typo-* custom properties (THE CSS source of truth)
        └─> src/tokens/styles.css   the 10 .typo-* classes + inline emphasis (strong/b, em/i) rules
        └─> src/tokens/prose.css    .typo-prose scope class for unclassed HTML
              └─> index.css         barrel: @imports fonts + primitives + styles + prose (consumer CSS entry)
  └─> src/js/tokens.ts            HAND-MAINTAINED mirror of primitives.css for CSS-in-JS consumers
        └─> index.ts              barrel: re-exports tokens
              └─> dist/index.js    compiled output (the consumer entry for JS/TS, per package.json exports)
```

`styles.css` and `prose.css` must reference `var(--typo-*)` only — never hardcode a size/weight/leading/tracking. The specimen does the same: every text element uses a `.typo-*` class, with no ad-hoc font sizing in its `<style>` block.

### The critical maintenance hazard: four-place sync

A single token value (e.g. Heading 2's size) is duplicated in **four** places that have no automated link between them:

1. `src/tokens/primitives.css` — the CSS value
2. `src/js/tokens.ts` — the JS mirror (hand-maintained, can silently drift)
3. `STYLES.md` — the human usage guide (values stated in prose)
4. `specimen.html` — the scale metadata and token-reference table

When changing any type value, update all four. This drift is not hypothetical — `STYLES.md` once documented the entire rejected pre-Figma design (Extrabold display, uppercase labels) while the CSS had moved on. Treat `STYLES.md` and the specimen as part of the change, not afterthoughts.

## The type system itself

Ten styles: `display`, `heading-1` through `heading-4`, `body-lg`, `body`, `body-sm`, `label`, `caption`. Naming is consistent across classes and tokens (`heading-1`, not `h1`).

Two design decisions that look like mistakes but are intentional — do not "fix" them without discussion:

- **Weight progression is non-monotonic** (Display Light 300 → H1 Medium 500 → H2/H3/H4 Regular 400). Hierarchy is carried mainly by **size and line height**, not weight. H2–H4 sit at the same weight as body text on purpose.
- **Label is sentence case, not uppercase.** The Semibold 600 weight provides the emphasis. The user explicitly rejected all-caps styles — never introduce `text-transform: uppercase` into a defined style.
- **`<strong>` and `<b>` render at ExtraBold (800)** across all named classes and `.typo-prose`. SemiBold (600) and Bold (700) were tested and not visually distinct enough against the Regular and Medium bases at screen sizes.
- **`<em>` and `<i>` render italic** using the genuine italic cut of Open Sauce One, not browser synthetic oblique. Both `styles.css` (named classes) and `prose.css` carry this rule.
- **Headings use `text-wrap: balance`** (`display` through `heading-4` in `styles.css`; `h1–h4` in `prose.css`). This prevents orphaned words on the last line of a wrapped heading. No effect on single-line headings.

## Working with the Figma file

The styles live in Figma file `bQ7PTFBss8xYhqSowpO1Bc` (frame node `2:13`, page "typoser styles"). When syncing values, read them via the Figma MCP tools (`get_design_context` / `get_metadata` / `use_figma`).

**Known limitation:** Open Sauce One is installed *locally* on the user's machine, so the Figma Plugin API (`use_figma`) **cannot load the font** — any operation that requires a loaded font (editing `characters`, line height, letter spacing on text nodes) will fail with "font family does not exist". Properties that do **not** require font loading — notably `fills` — can still be written. For font-dependent edits, give the user exact values to set manually, or have them upload the font to Figma as a team font.

## Font status

Open Sauce One (SIL OFL) is **fully vendored** as `.woff2` files in `src/fonts/`. All six weights are included — Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800) — each with an upright and italic variant. `fonts.css` declares a `@font-face` block for each. The font stack in `primitives.css` is `'Open Sauce One', 'Open Sans', system-ui, -apple-system, sans-serif` — Open Sans remains in the stack as a fallback for environments where the woff2 files can't be served.
