# Typoser

Framework-agnostic typographic style library — 10 named text styles set in [Open Sauce One](https://github.com/marcologous/Open-Sauce-Fonts), distributed as plain CSS custom properties with a TypeScript token mirror. Zero runtime dependencies, no build step required on the consumer side.

**Scope is type only:** family, size, weight, line height, and tracking. Color, spacing, and layout are intentionally out of scope — pair Typoser with your own color and spacing tokens.

## Installation

```bash
npm install typoser
```

## Usage

### CSS classes

Import the stylesheet once at your app's entry point:

```css
@import 'typoser/index.css';
```

Then apply named style classes directly to elements:

```html
<h1 class="typo-heading-48">Page Title</h1>
<p class="typo-body-16">Body text goes here.</p>
<span class="typo-label-13">Form label</span>
```

The 10 named styles are the complete design API. If a style you need isn't in the set, that's a signal to propose a new named style — not to compose one from primitives.

### Prose scope

Content from a CMS, markdown renderer, or rich text editor arrives as plain HTML with no classes. Wrap it in `.typo-prose` and elements are styled automatically:

```html
<div class="typo-prose">
  <h1>Article title</h1>
  <p>Opening paragraph.</p>
  <h2>Section heading</h2>
  <p>Body copy with <strong>emphasis</strong>.</p>
  <ul>
    <li>List item one</li>
    <li>List item two</li>
  </ul>
  <blockquote>A pull quote or callout.</blockquote>
</div>
```

The prose scope governs typography only — spacing and color remain your responsibility.

**Element mapping**

| Element | Style applied |
|---------|--------------|
| `h1` | heading-48 |
| `h2` | heading-36 |
| `h3` | heading-28 |
| `h4` | heading-22 |
| `h5` | body-18 |
| `h6` | body-16 |
| `p`, `li` | body-16 |
| `blockquote` | body-18 |
| `small` | caption-12 |
| `strong`, `b` | ExtraBold (800) within the current size |

### JS / TS

```ts
import { typoStyles } from 'typoser';

// Spread directly into a style prop — pick by visual scale, not HTML tag
<h1 style={typoStyles.heading48}>Title</h1>

// Or use in a CSS-in-JS block
const Title = styled.h1`${css(typoStyles.heading48)}`;
```

`typoStyles` contains one object per named style — the JS equivalent of the `.typo-*` classes. If you need the font family string for plumbing purposes, `fontFamily` is also exported.

### Integration

Typoser exposes its values as `--typo-*` CSS custom properties on `:root`. These are intended for **integration plumbing** — wiring Typoser into contexts that a class cannot directly reach — not for composing new styles.

**Form controls** — browsers don't inherit font properties into inputs, selects, and buttons by default. This rule fixes that once, at the app root:

```css
input, select, button, textarea {
  font: inherit;
  letter-spacing: inherit;
}
```

With this in place, a `<button class="typo-label-13">` or any input inside a `.typo-*` ancestor will pick up the correct font automatically.

**Third-party components** — if a component renders its own DOM that you can't class directly:

```css
.third-party-widget {
  font-family: var(--typo-font);
}
```

Do not combine individual `--typo-*` variables to assemble a new style. If your design calls for a combination that doesn't exist as a named style, open a discussion — the answer is either a new named style or confirmation that the system is intentionally constrained.

## Styles

| Class | JS key | Size | Weight | Leading | Tracking |
|---|---|---|---|---|---|
| `.typo-display-72` | `display72` | 72px | Light 300 | 1.056 | −0.02em |
| `.typo-heading-48` | `heading48` | 48px | Medium 500 | 1.083 | −0.03em |
| `.typo-heading-36` | `heading36` | 36px | Regular 400 | 1.222 | −0.01em |
| `.typo-heading-28` | `heading28` | 28px | Regular 400 | 1.25 | 0em |
| `.typo-heading-22` | `heading22` | 22px | Regular 400 | 1.273 | 0em |
| `.typo-body-18` | `body18` | 18px | Regular 400 | 1.667 | 0em |
| `.typo-body-16` | `body16` | 16px | Regular 400 | 1.5 | +0.01em |
| `.typo-body-14` | `body14` | 14px | Regular 400 | 1.5 | +0.01em |
| `.typo-label-13` | `label13` | 13px | Semibold 600 | 1.385 | +0.01em |
| `.typo-caption-12` | `caption12` | 12px | Regular 400 | 1.5 | +0.01em |

Four design decisions that are intentional — not mistakes:

- **Every style is named by pixel size, not rank or relative qualifier.** `heading-48`/`36`/`28`/`22`, `body-18`/`16`/`14` describe a visual scale step, not an HTML heading level or a relative "lg/sm" that only makes sense next to a sibling — a page's `<h1>` won't always be `heading-48`, and a page can use `heading-48` on a non-`<h1>` element. (`display`, `heading-1`..`heading-4`, `body-lg`, `body`, `body-sm`, `label`, `caption` are deprecated aliases, removed in 1.0.)
- **Weight progression is non-monotonic.** Hierarchy is carried mainly by size and line height. H2, H3, and H4 sit at Regular weight on purpose.
- **Label is sentence case, not uppercase.** Semibold 600 provides the emphasis. `text-transform: uppercase` is never applied.
- **`<strong>` and `<b>` render at ExtraBold (800).** Semibold (600) and Bold (700) were tested but not visually distinct enough against the Regular and Medium bases at screen sizes.
- **The named styles are the complete set.** The `--typo-*` custom properties are implementation detail and integration plumbing, not a composition API. If a particular size-and-weight combination isn't a named style, it isn't part of the system.

## License

Typoser CSS and TypeScript code is [MIT](./LICENSE) licensed.

Open Sauce One font files are bundled under the [SIL Open Font License 1.1](./OFL.txt) — Copyright 2020 The Open Sauce One Authors.
