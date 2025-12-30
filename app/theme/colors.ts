// VietLocalGo Color Palette
// Inspired by Vietnamese culture: Red (bánh dày), Green (ruộng lúa), Gold (di tích)
const palette = {
  // Neutral colors
  neutral100: "#FFFFFF",
  neutral200: "#F5F5F5",
  neutral300: "#E0E0E0",
  neutral400: "#BDBDBD",
  neutral500: "#9E9E9E",
  neutral600: "#757575",
  neutral700: "#616161",
  neutral800: "#424242",
  neutral900: "#212121",

  // Primary - Red (inspired by bánh dày Nam Định)
  primary100: "#FDE8E7",
  primary200: "#F9BBB8",
  primary300: "#F58D89",
  primary400: "#EF5F5A",
  primary500: "#E94235", // Main primary
  primary600: "#C62828",

  // Secondary - Green (inspired by rice fields)
  secondary100: "#E8F5E9",
  secondary200: "#C8E6C9",
  secondary300: "#A5D6A7",
  secondary400: "#81C784",
  secondary500: "#4CAF50", // Main secondary
  secondary600: "#388E3C",

  // Accent - Gold (inspired by heritage)
  accent100: "#FFF8E1",
  accent200: "#FFECB3",
  accent300: "#FFE082",
  accent400: "#FFD54F",
  accent500: "#FFB300", // Main accent
  accent600: "#FF8F00",

  // Semantic colors
  info100: "#E3F2FD",
  info500: "#2196F3",
  info600: "#1976D2",

  success100: "#E8F5E9",
  success500: "#4CAF50",
  success600: "#388E3C",

  warning100: "#FFF3E0",
  warning500: "#FF9800",
  warning600: "#F57C00",

  error100: "#FFEBEE",
  error500: "#F44336",
  error600: "#D32F2F",

  // Legacy color for demo compatibility
  angry500: "#F44336",

  // Overlays
  overlay10: "rgba(0, 0, 0, 0.1)",
  overlay20: "rgba(0, 0, 0, 0.2)",
  overlay50: "rgba(0, 0, 0, 0.5)",
  overlay70: "rgba(0, 0, 0, 0.7)",

  // Category colors
  categoryFood: "#FF9800",
  categoryHeritage: "#795548",
  categoryTemple: "#9C27B0",
  categoryFestival: "#E91E63",
  categoryCraftVillage: "#4CAF50",
  categoryBeach: "#2196F3",
  categoryShopping: "#F44336",
  categoryNature: "#8BC34A",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral900,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * Disabled text
   */
  textDisabled: palette.neutral400,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral100,
  /**
   * Secondary background (cards, surfaces)
   */
  backgroundDim: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral300,
  /**
   * The main tinting color (primary).
   */
  tint: palette.primary500,
  /**
   * The inactive tinting color.
   */
  tintInactive: palette.neutral400,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.error500,
  /**
   * Error Background.
   */
  errorBackground: palette.error100,
  /**
   * Success color
   */
  success: palette.success500,
  /**
   * Success background
   */
  successBackground: palette.success100,
  /**
   * Warning color
   */
  warning: palette.warning500,
  /**
   * Warning background
   */
  warningBackground: palette.warning100,
  /**
   * Info color
   */
  info: palette.info500,
  /**
   * Info background
   */
  infoBackground: palette.info100,
  /**
   * Primary button/action color
   */
  primary: palette.primary500,
  /**
   * Secondary color
   */
  secondary: palette.secondary500,
  /**
   * Accent color
   */
  accent: palette.accent500,
  /**
   * Rating star color
   */
  rating: palette.accent500,
  /**
   * Online status
   */
  online: palette.success500,
  /**
   * Offline status
   */
  offline: palette.neutral400,
} as const
