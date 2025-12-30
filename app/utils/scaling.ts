/**
 * Scaling utilities for responsive design
 * Based on standard 375x812 screen (iPhone X/11/12/13)
 */
import { Dimensions, PixelRatio, Platform } from "react-native"

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")

// Base dimensions (iPhone X)
const BASE_WIDTH = 375
const BASE_HEIGHT = 812

// Scale factor
const widthScale = SCREEN_WIDTH / BASE_WIDTH
const heightScale = SCREEN_HEIGHT / BASE_HEIGHT

/**
 * Scale a value based on screen width
 * Use for horizontal dimensions (padding, margin, width)
 */
export function scale(size: number): number {
  return Math.round(PixelRatio.roundToNearestPixel(size * widthScale))
}

/**
 * Scale a value based on screen height
 * Use for vertical dimensions (padding, margin, height)
 */
export function verticalScale(size: number): number {
  return Math.round(PixelRatio.roundToNearestPixel(size * heightScale))
}

/**
 * Scale a value with moderate scaling
 * Use for font sizes and elements that shouldn't scale too much
 * @param size - The base size
 * @param factor - How much to scale (0-1), default 0.5
 */
export function moderateScale(size: number, factor = 0.5): number {
  return Math.round(PixelRatio.roundToNearestPixel(size + (scale(size) - size) * factor))
}

/**
 * Scale a value with moderate vertical scaling
 */
export function moderateVerticalScale(size: number, factor = 0.5): number {
  return Math.round(PixelRatio.roundToNearestPixel(size + (verticalScale(size) - size) * factor))
}

/**
 * Get screen dimensions
 */
export const screenWidth = SCREEN_WIDTH
export const screenHeight = SCREEN_HEIGHT

/**
 * Check if device is a tablet
 */
export const isTablet = SCREEN_WIDTH >= 768

/**
 * Check if device is small (iPhone SE, etc.)
 */
export const isSmallDevice = SCREEN_WIDTH < 375

/**
 * Check if device is large (iPhone Plus/Max, etc.)
 */
export const isLargeDevice = SCREEN_WIDTH > 414

/**
 * Platform specific value
 */
export function platformSelect<T>(ios: T, android: T): T {
  return Platform.OS === "ios" ? ios : android
}

/**
 * Responsive font size
 * Ensures font size is within a reasonable range
 */
export function responsiveFontSize(size: number, minSize?: number, maxSize?: number): number {
  const scaledSize = moderateScale(size, 0.3)
  if (minSize && scaledSize < minSize) return minSize
  if (maxSize && scaledSize > maxSize) return maxSize
  return scaledSize
}

/**
 * Responsive spacing
 */
export const spacing = {
  /** 4dp */
  xxs: scale(4),
  /** 8dp */
  xs: scale(8),
  /** 12dp */
  sm: scale(12),
  /** 16dp */
  md: scale(16),
  /** 24dp */
  lg: scale(24),
  /** 32dp */
  xl: scale(32),
  /** 48dp */
  xxl: scale(48),
  /** 64dp */
  xxxl: scale(64),
}

/**
 * Responsive border radius
 */
export const radius = {
  none: 0,
  sm: scale(4),
  md: scale(8),
  lg: scale(12),
  xl: scale(16),
  xxl: scale(24),
  full: 9999,
}

/**
 * Font sizes with responsive scaling
 */
export const fontSize = {
  /** 10sp - Tiny */
  xxs: responsiveFontSize(10),
  /** 12sp - Caption */
  xs: responsiveFontSize(12),
  /** 14sp - Body small */
  sm: responsiveFontSize(14),
  /** 16sp - Body */
  md: responsiveFontSize(16),
  /** 18sp - Subtitle */
  lg: responsiveFontSize(18),
  /** 20sp - Title small */
  xl: responsiveFontSize(20),
  /** 24sp - Title */
  xxl: responsiveFontSize(24),
  /** 28sp - Headline small */
  xxxl: responsiveFontSize(28),
  /** 32sp - Headline */
  display: responsiveFontSize(32),
  /** 40sp - Display */
  hero: responsiveFontSize(40),
}

/**
 * Common hit slop for touch targets
 * Ensures minimum 48dp touch target
 */
export const hitSlop = {
  top: verticalScale(10),
  bottom: verticalScale(10),
  left: scale(10),
  right: scale(10),
}

/**
 * Minimum touch target size (48dp)
 */
export const minTouchTarget = scale(48)

/**
 * Icon sizes
 */
export const iconSize = {
  xs: scale(16),
  sm: scale(20),
  md: scale(24),
  lg: scale(28),
  xl: scale(32),
  xxl: scale(48),
}

/**
 * Avatar sizes
 */
export const avatarSize = {
  xs: scale(24),
  sm: scale(32),
  md: scale(40),
  lg: scale(56),
  xl: scale(80),
  xxl: scale(120),
}

// Re-export everything
export default {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  screenWidth,
  screenHeight,
  isTablet,
  isSmallDevice,
  isLargeDevice,
  platformSelect,
  responsiveFontSize,
  spacing,
  radius,
  fontSize,
  hitSlop,
  minTouchTarget,
  iconSize,
  avatarSize,
}
