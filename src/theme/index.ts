import { SHADOWS } from './shadows';

// Optional helpers (clean naming)
export const shadow = (key: keyof typeof SHADOWS, color?: string) => {
  const s = SHADOWS[key];
  return {
    shadowColor: color ?? '#000',
    shadowOffset: s.shadowOffset,
    shadowOpacity: s.shadowOpacity,
    shadowRadius: s.shadowRadius,
    elevation: s.elevation,
  };
};

export { RADIUS as radius } from './radius';
export { SHADOWS as shadows } from './shadows';
export { COLORS as colors } from './colors';
