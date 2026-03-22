import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base design dimensions
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;

// Scale factors
const WIDTH_SCALE = SCREEN_WIDTH / DESIGN_WIDTH;
const HEIGHT_SCALE = SCREEN_HEIGHT / DESIGN_HEIGHT;
const MODERATE_SCALE = Math.min(WIDTH_SCALE, HEIGHT_SCALE);

// Pixel density
const FONT_SCALE = PixelRatio.getFontScale(); // Adjusts font for user font settings

// Responsive font size
const responsiveFontSize = (size: number, maxScale: number = 1.2) => {
  const scaledSize = size * Math.min(WIDTH_SCALE, maxScale);
  // Normalize font for pixel density and user font settings
  return Math.round(PixelRatio.roundToNearestPixel(scaledSize)) / FONT_SCALE;
};

// Responsive width
const responsiveWidth = (width: number) => {
  const scaledWidth = width * WIDTH_SCALE;
  return Math.round(PixelRatio.roundToNearestPixel(scaledWidth));
};

// Responsive height
const responsiveHeight = (height: number) => {
  const scaledHeight = height * HEIGHT_SCALE;
  return Math.round(PixelRatio.roundToNearestPixel(scaledHeight));
};

// Responsive general size (square)
const responsiveSize = (size: number) => {
  const scaled = size * MODERATE_SCALE;
  return Math.round(PixelRatio.roundToNearestPixel(scaled));
};

// Responsive spacing/margin/padding
const responsiveSpacing = (spacing: number) => {
  const scaled = spacing * MODERATE_SCALE;
  return Math.round(PixelRatio.roundToNearestPixel(scaled));
};

// Percentage-based dimensions
const percentageWidth = (percentage: number) =>
  (SCREEN_WIDTH * percentage) / 100;
const percentageHeight = (percentage: number) =>
  (SCREEN_HEIGHT * percentage) / 100;

export const rf = responsiveFontSize;
export const rw = responsiveWidth;
export const rh = responsiveHeight;
export const rs = responsiveSize;
export const spacing = responsiveSpacing;
export const pw = percentageWidth;
export const ph = percentageHeight;
