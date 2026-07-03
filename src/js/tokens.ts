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
const fontSize = {
  display72:  '4.5rem',     // 72px
  heading48:  '3rem',       // 48px
  heading36:  '2.25rem',    // 36px
  heading28:  '1.75rem',    // 28px
  heading22:  '1.375rem',   // 22px
  body18:     '1.125rem',   // 18px
  body16:     '1rem',       // 16px
  body14:     '0.875rem',   // 14px
  label13:    '0.8125rem',  // 13px
  caption12:  '0.75rem',    // 12px
} as const;

/* ── Weights ────────────────────────────────── */
const fontWeight = {
  light:      300,
  regular:    400,
  medium:     500,
  semibold:   600,
  bold:       700,
  extrabold:  800,
} as const;

/* ── Line heights (unitless) ────────────────── */
const lineHeight = {
  display72:  1.056,
  heading48:  1.083,
  heading36:  1.222,
  heading28:  1.25,
  heading22:  1.273,
  body18:     1.667,
  body16:     1.5,
  body14:     1.5,
  label13:    1.385,
  caption12:  1.5,
} as const;

/* ── Letter spacing (em) ─────────────────────── */
const letterSpacing = {
  display72:  '-0.02em',
  heading48:  '-0.03em',
  heading36:  '-0.01em',
  heading28:  '0em',
  heading22:  '0em',
  body18:     '0em',
  body16:     '0.01em',
  body14:     '0.01em',
  label13:    '0.01em',
  caption12:  '0.01em',
} as const;

/* ── Composed styles ────────────────────────── */
/**
 * One object per named style — the JS equivalent of the `.typo-*` classes.
 * Spread directly into a style prop or CSS-in-JS block. Pick by visual scale,
 * not by HTML tag — a page's <h1> won't always be `heading48`:
 *
 *   <h1 style={typoStyles.heading22}>Compact page title</h1>
 *   const SectionTitle = styled.h2`${css(typoStyles.heading36)}`;
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
  display72:  style('display72', 'light'),
  heading48:  style('heading48', 'medium'),
  heading36:  style('heading36', 'regular'),
  heading28:  style('heading28', 'regular'),
  heading22:  style('heading22', 'regular'),
  body18:     style('body18',    'regular'),
  body16:     style('body16',    'regular'),
  body14:     style('body14',    'regular'),
  label13:    style('label13',   'semibold'),
  caption12:  style('caption12', 'regular'),
} as const;

export type TypoStyleName = keyof typeof typoStyles;
