export const RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 20,
  full: 9999,
} as const;

export const getRadius = (key: keyof typeof RADIUS): number => {
  return RADIUS[key] ?? RADIUS.md;
};

export type RadiusKey = keyof typeof RADIUS;