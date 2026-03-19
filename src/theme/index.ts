import * as colors from './colors';
import * as radius from './radius';
import * as shadows from './shadows';

export const THEME = {
  colors: { ...colors },
  radius: { ...radius },
  shadows: { ...shadows },
} as const;

export type Theme = typeof THEME;