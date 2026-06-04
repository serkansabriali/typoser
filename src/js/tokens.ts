/**
 * Typoser — JS/TS token mirror
 *
 * Hand-maintained mirror of `src/tokens/primitives.css`. The CSS custom
 * properties remain the source of truth; keep this file in sync when those
 * values change. Intended for CSS-in-JS consumers (Styled Components, Emotion,
 * vanilla-extract, inline styles) that can't read CSS variables directly.
 */

/* ── Family ─────────────────────────────────── */
export const fontFamily =
  "'Open Sauce One', 'Open Sans', system-ui, -apple-system, sans-serif";

/* ── Sizes (rem) ────────────────────────────── */
export const fontSize = {
  display:    '4.5rem',     // 72px
  heading1:   '3rem',       // 48px
  heading2:   '2.25rem',    // 36px
  heading3:   '1.75rem',    // 28px
  heading4:   '1.375rem',   // 22px
  bodyLg:     '1.125rem',   // 18px
  body:       '1rem',       // 16px
  bodySm:     '0.875rem',   // 14px
  label:      '0.8125rem',  // 13px
  caption:    '0.75rem',    // 12px
} as const;

/* ── Weights ────────────────────────────────── */
export const fontWeight = {
  light:    300,
  regular:  400,
  medium:   500,
  semibold: 600,
} as const;

/* ── Line heights (unitless) ────────────────── */
export const lineHeight = {
  display:    1.056,
  heading1:   1.083,
  heading2:   1.222,
  heading3:   1.25,
  heading4:   1.273,
  bodyLg:     1.667,
  body:       1.5,
  bodySm:     1.5,
  label:      1.385,
  caption:    1.5,
} as const;

/* ── Letter spacing (em) ────────────────────── */
export const letterSpacing = {
  display:    '-0.02em',
  heading1:   '-0.03em',
  heading2:   '-0.01em',
  heading3:   '0em',
  heading4:   '0em',
  bodyLg:     '0em',
  body:       '0.01em',
  bodySm:     '0.01em',
  label:      '0.01em',
  caption:    '0.01em',
} as const;

/* ── Composed styles ────────────────────────── */
/**
 * One object per named style — the JS equivalent of the `.typo-*` classes.
 * Spread directly into a style prop or CSS-in-JS block:
 *
 *   <h1 style={typoStyles.heading1}>Title</h1>
 *   const Title = styled.h1`${css(typoStyles.heading1)}`;
 */
export interface TypoStyle {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: string;
}

const style = (
  size: keyof typeof fontSize,
  weight: keyof typeof fontWeight,
): TypoStyle => ({
  fontFamily,
  fontSize: fontSize[size],
  fontWeight: fontWeight[weight],
  lineHeight: lineHeight[size as keyof typeof lineHeight],
  letterSpacing: letterSpacing[size as keyof typeof letterSpacing],
});

export const typoStyles = {
  display:   style('display',  'light'),
  heading1:  style('heading1', 'medium'),
  heading2:  style('heading2', 'regular'),
  heading3:  style('heading3', 'regular'),
  heading4:  style('heading4', 'medium'),
  bodyLg:    style('bodyLg',   'regular'),
  body:      style('body',     'regular'),
  bodySm:    style('bodySm',   'regular'),
  label:     style('label',    'semibold'),
  caption:   style('caption',  'regular'),
} as const;

export type TypoStyleName = keyof typeof typoStyles;
