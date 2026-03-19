import { ViewStyle, Platform } from 'react-native';

export const SHADOWS = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
} as const;

export const getShadow = (
  size: keyof typeof SHADOWS,
  color: string = '#000'
): ViewStyle => {
  const shadow = SHADOWS[size];

  return {
    shadowColor: color,
    shadowOffset: shadow.shadowOffset,
    shadowOpacity: shadow.shadowOpacity,
    shadowRadius: shadow.shadowRadius,
    elevation: Platform.OS === 'android' ? shadow.elevation : undefined,
  };
};

export type ShadowKey = keyof typeof SHADOWS;