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
<h1 class="typo-heading-1">Page Title</h1>
<p class="typo-body">Body text goes here.</p>
<span class="typo-label">Form label</span>
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
| `h1` | heading-1 |
| `h2` | heading-2 |
| `h3` | heading-3 |
| `h4` | heading-4 |
| `h5` | body-lg |
| `h6` | body |
| `p`, `li` | body |
| `blockquote` | body-lg |
| `small` | caption |
| `strong`, `b` | semibold weight within the current size |

### JS / TS

```ts
import { typoStyles } from 'typoser';

// Spread directly into a style prop
<h1 style={typoStyles.heading1}>Title</h1>

// Or use in a CSS-in-JS block
const Title = styled.h1`${css(typoStyles.heading1)}`;
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

With this in place, a `<button class="typo-label">` or any input inside a `.typo-*` ancestor will pick up the correct font automatically.

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
| `.typo-display` | `display` | 72px | Light 300 | 1.056 | −0.02em |
| `.typo-heading-1` | `heading1` | 48px | Medium 500 | 1.083 | −0.03em |
| `.typo-heading-2` | `heading2` | 36px | Regular 400 | 1.222 | −0.01em |
| `.typo-heading-3` | `heading3` | 28px | Regular 400 | 1.25 | 0em |
| `.typo-heading-4` | `heading4` | 22px | Regular 400 | 1.273 | 0em |
| `.typo-body-lg` | `bodyLg` | 18px | Regular 400 | 1.667 | 0em |
| `.typo-body` | `body` | 16px | Regular 400 | 1.5 | +0.01em |
| `.typo-body-sm` | `bodySm` | 14px | Regular 400 | 1.5 | +0.01em |
| `.typo-label` | `label` | 13px | Semibold 600 | 1.385 | +0.01em |
| `.typo-caption` | `caption` | 12px | Regular 400 | 1.5 | +0.01em |

Three design decisions that are intentional — not mistakes:

- **Weight progression is non-monotonic.** Hierarchy is carried mainly by size and line height. H2, H3, and H4 sit at Regular weight on purpose.
- **Label is sentence case, not uppercase.** Semibold 600 provides the emphasis. `text-transform: uppercase` is never applied.
- **The named styles are the complete set.** The `--typo-*` custom properties are implementation detail and integration plumbing, not a composition API. If a particular size-and-weight combination isn't a named style, it isn't part of the system.

## License

Typoser CSS and TypeScript code is [MIT](./LICENSE) licensed.

Open Sauce One font files are bundled under the [SIL Open Font License 1.1](./OFL.txt) — Copyright 2020 The Open Sauce One Authors.
