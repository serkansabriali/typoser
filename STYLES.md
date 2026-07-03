# Typographic Styles

> **Scope:** Typoser governs *type only* — family, size, weight, line height, and tracking. Color, spacing, and layout are intentionally out of scope; pair this library with your project's own color and spacing tokens. The specimen renders everything monochrome to reinforce this.
>
> **The 10 named styles are the complete design API.** If a combination of size and weight isn't a named style here, it isn't part of the system. The underlying CSS custom properties are implementation detail and integration plumbing — not a toolkit for composing new styles. If you find yourself needing a style that doesn't exist, open a discussion rather than assembling one from primitives.

Ten named styles, all set in Open Sauce One. Hierarchy is carried primarily by size and line height rather than weight, so the weight progression is deliberately non-linear.

**Naming:** every style is named by its pixel size (`display-72`, `heading-48/36/28/22`, `body-18/16/14`, `label-13`, `caption-12`) rather than by rank or qualifier (`heading-1`..`heading-4`, `body-lg`/`body`/`body-sm`, deprecated — see below). This avoids implying a fixed correspondence between a style and an HTML element or a relative qualifier that stops making sense out of context: a page's `<h1>` doesn't always need to be the largest style, and "lg"/"sm" only mean something relative to a sibling that may not be present. The number is a nominal label fixed at rename time, not a live-synced guarantee — a future value tweak to an existing step (e.g. closing the 24–26px scale gap noted in user feedback) does not automatically require renaming the class, only a note here if the drift becomes large enough to mislead.

**Migration from the old names:**

| Old class | New class | Old JS key | New JS key |
|---|---|---|---|
| `.typo-display` | `.typo-display-72` | `display` | `display72` |
| `.typo-heading-1` | `.typo-heading-48` | `heading1` | `heading48` |
| `.typo-heading-2` | `.typo-heading-36` | `heading2` | `heading36` |
| `.typo-heading-3` | `.typo-heading-28` | `heading3` | `heading28` |
| `.typo-heading-4` | `.typo-heading-22` | `heading4` | `heading22` |
| `.typo-body-lg` | `.typo-body-18` | `bodyLg` | `body18` |
| `.typo-body` | `.typo-body-16` | `body` | `body16` |
| `.typo-body-sm` | `.typo-body-14` | `bodySm` | `body14` |
| `.typo-label` | `.typo-label-13` | `label` | `label13` |
| `.typo-caption` | `.typo-caption-12` | `caption` | `caption12` |

The old class names remain as CSS aliases for this release and will be removed in 1.0. The old JS keys were a clean break (no alias) — a TypeScript compile error surfaces immediately, which is safer than a silently stale CSS class.

**Inline emphasis:** `<strong>` and `<b>` inside any `.typo-*` class or `.typo-prose` element render at ExtraBold (800). This is intentional — lighter weights (600, 700) don't read as emphasis against the Regular and Medium bases at screen sizes.

---

## Display 72
**72px · Light (300) · −0.02em tracking · 1.056 leading**

The largest style in the system. Use for a single hero headline — landing page titles, splash screens, campaign moments — **or** for a set of sibling stat figures (e.g. three large metrics side by side). Never mix Display with running prose, and never use it for more than one *kind* of element on a page. Light weight at this size is elegant but rendering-sensitive; reserve it for controlled, high-impact surfaces.

---

## Heading 48
**48px · Medium (500) · −0.03em tracking · 1.083 leading**

The largest heading step. Use for article titles, section hero titles, and the top-level label of a standalone screen — but not necessarily for every page's `<h1>`. Named styles describe a visual scale step, not a document outline level: a page whose most prominent text is modest can use `heading-22` on its `<h1>`, and a page with no `<h1>` at all can still use `heading-48` on an `<h2>`. Pick by how much visual weight the moment needs, not by HTML tag.

---

## Heading 36
**36px · Regular (400) · −0.01em tracking · 1.222 leading**

Major section divider within a page. Signals a new top-level topic. In long-form content, these are the chapter-level breaks. In UI, they name distinct functional areas (e.g. "Account Settings", "Recent Activity"). Note it sits at Regular weight — separation from body text comes from size and leading, so give it room to breathe above paragraphs.

---

## Heading 28
**28px · Regular (400) · 0em tracking · 1.25 leading**

Sub-section heading within a Heading 36 area. Groups related content or features. Common in documentation, dashboards, and settings panels.

---

## Heading 22
**22px · Regular (400) · 0em tracking · 1.273 leading**

The smallest heading. Used for card titles, sidebar section labels, modal headings, and compact UI areas where a heading is needed but space is limited. Hierarchy is carried by size and leading relative to body text.

---

## Body 18
**18px · Regular (400) · 0em tracking · 1.667 leading**

Long-form reading text where comfort is the priority — editorial articles, blog posts, documentation prose, marketing copy. The extra leading makes it easier on the eye at length.

---

## Body 16
**16px · Regular (400) · +0.01em tracking · 1.5 leading**

Default body text for UI. Use for descriptions, instructional copy, form helper text, and any text that isn't a heading, label, or caption. The baseline of the system.

---

## Body 14
**14px · Regular (400) · +0.01em tracking · 1.5 leading**

Secondary body text. Use when space is tight or when text is supporting rather than primary — sidebar content, secondary descriptions, list item subtitles, inline explanations.

---

## Label 13
**13px · Semibold (600) · +0.01em tracking · 1.385 leading**

UI labelling — form field labels, tag text, category chips, navigation items, button text, table column headers. Sentence case (not uppercase): the Semibold weight provides the emphasis that distinguishes a label from body text, while keeping it readable as normal words. For short interface strings, not for sentences or paragraphs.

---

## Caption 12
**12px · Regular (400) · +0.01em tracking · 1.5 leading**

Supplementary text below or alongside a primary element — image captions, timestamps, attribution lines, footnotes, status indicators, helper text. Should never carry critical information on its own.
