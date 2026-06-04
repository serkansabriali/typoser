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

Then apply classes directly to elements:

```html
<h1 class="typo-heading-1">Page Title</h1>
<p class="typo-body">Body text goes here.</p>
<span class="typo-label">Form label</span>
```

### JS / TS tokens (CSS-in-JS)

```ts
import { typoStyles, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } from 'typoser';

// Composed style objects — spread directly into style props
<h1 style={typoStyles.heading1}>Title</h1>

// Or use individual primitives
const Title = styled.h1`
  font-family: ${fontFamily};
  font-size: ${fontSize.heading1};
  font-weight: ${fontWeight.medium};
`;
```

### CSS custom properties

All values are exposed as `--typo-*` custom properties on `:root`. You can reference them in your own CSS:

```css
.my-element {
  font-family: var(--typo-font);
  font-size: var(--typo-size-body);
  line-height: var(--typo-leading-body);
}
```

## Styles

| Class | JS key | Size | Weight | Leading | Tracking |
|---|---|---|---|---|---|
| `.typo-display` | `display` | 72px | Light 300 | 1.056 | −0.02em |
| `.typo-heading-1` | `heading1` | 48px | Medium 500 | 1.083 | −0.03em |
| `.typo-heading-2` | `heading2` | 36px | Regular 400 | 1.222 | −0.01em |
| `.typo-heading-3` | `heading3` | 28px | Regular 400 | 1.25 | 0em |
| `.typo-heading-4` | `heading4` | 22px | Medium 500 | 1.273 | 0em |
| `.typo-body-lg` | `bodyLg` | 18px | Regular 400 | 1.667 | 0em |
| `.typo-body` | `body` | 16px | Regular 400 | 1.5 | +0.01em |
| `.typo-body-sm` | `bodySm` | 14px | Regular 400 | 1.5 | +0.01em |
| `.typo-label` | `label` | 13px | Semibold 600 | 1.385 | +0.01em |
| `.typo-caption` | `caption` | 12px | Regular 400 | 1.5 | +0.01em |

Two design decisions that are intentional — not mistakes:

- **Weight progression is non-monotonic.** Hierarchy is carried mainly by size and line height. H2/H3 sit at Regular weight on purpose.
- **Label is sentence case, not uppercase.** Semibold 600 provides the emphasis. `text-transform: uppercase` is never applied.

## License

Typoser CSS and TypeScript code is [MIT](./LICENSE) licensed.

Open Sauce One font files are bundled under the [SIL Open Font License 1.1](./OFL.txt) — Copyright 2020 The Open Sauce One Authors.
