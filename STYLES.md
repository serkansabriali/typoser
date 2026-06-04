# Typographic Styles

> **Scope:** Typoser governs *type only* — family, size, weight, line height, and tracking. Color, spacing, and layout are intentionally out of scope; pair this library with your project's own color and spacing tokens. The specimen renders everything monochrome to reinforce this.

Ten named styles, all set in Open Sauce One. Hierarchy is carried primarily by size and line height rather than weight, so the weight progression is deliberately non-linear.

---

## Display
**72px · Light (300) · −0.02em tracking · 1.056 leading**

The largest style in the system. Use for a single hero headline — landing page titles, splash screens, campaign moments — **or** for a set of sibling stat figures (e.g. three large metrics side by side). Never mix Display with running prose, and never use it for more than one *kind* of element on a page. Light weight at this size is elegant but rendering-sensitive; reserve it for controlled, high-impact surfaces.

---

## Heading 1
**48px · Medium (500) · −0.03em tracking · 1.083 leading**

Primary page title. Each page or major view should have one H1. Use for article titles, section hero titles, and the top-level label of a standalone screen.

---

## Heading 2
**36px · Regular (400) · −0.01em tracking · 1.222 leading**

Major section divider within a page. Signals a new top-level topic. In long-form content, these are the chapter-level breaks. In UI, they name distinct functional areas (e.g. "Account Settings", "Recent Activity"). Note it sits at Regular weight — separation from body text comes from size and leading, so give it room to breathe above paragraphs.

---

## Heading 3
**28px · Regular (400) · 0em tracking · 1.25 leading**

Sub-section heading within an H2 area. Groups related content or features. Common in documentation, dashboards, and settings panels.

---

## Heading 4
**22px · Medium (500) · 0em tracking · 1.273 leading**

The smallest heading. Used for card titles, sidebar section labels, modal headings, and compact UI areas where a heading is needed but space is limited. The step up to Medium weight helps it hold its own against nearby body text.

---

## Body LG
**18px · Regular (400) · 0em tracking · 1.667 leading**

Long-form reading text where comfort is the priority — editorial articles, blog posts, documentation prose, marketing copy. The extra leading makes it easier on the eye at length.

---

## Body
**16px · Regular (400) · +0.01em tracking · 1.5 leading**

Default body text for UI. Use for descriptions, instructional copy, form helper text, and any text that isn't a heading, label, or caption. The baseline of the system.

---

## Body SM
**14px · Regular (400) · +0.01em tracking · 1.5 leading**

Secondary body text. Use when space is tight or when text is supporting rather than primary — sidebar content, secondary descriptions, list item subtitles, inline explanations.

---

## Label
**13px · Semibold (600) · +0.01em tracking · 1.385 leading**

UI labelling — form field labels, tag text, category chips, navigation items, button text, table column headers. Sentence case (not uppercase): the Semibold weight provides the emphasis that distinguishes a label from body text, while keeping it readable as normal words. For short interface strings, not for sentences or paragraphs.

---

## Caption
**12px · Regular (400) · +0.01em tracking · 1.5 leading**

Supplementary text below or alongside a primary element — image captions, timestamps, attribution lines, footnotes, status indicators, helper text. Should never carry critical information on its own.
