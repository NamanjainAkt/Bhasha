/**
 * Lingua Design System - Complete design tokens
 * Brand colors, typography, and spacing definitions
 */

import { Platform } from "react-native";

// ============================================================================
// BRAND COLORS - Primary palette
// ============================================================================
export const BrandColors = {
  purple: "#6C4EF5", // Lingua Purple
  deepPurple: "#583BF6", // Lingua Deep Purple
  blue: "#4D88FF", // Lingua Blue
  green: "#21C16B", // Lingua Green
} as const;

// ============================================================================
// SEMANTIC COLORS - Functional color usage
// ============================================================================
export const SemanticColors = {
  success: "#21C16B", // Success (green)
  warning: "#FFC800", // Warning (yellow)
  streak: "#FF8400", // Streak (orange)
  error: "#FF4D4F", // Error (red)
  info: "#4D88FF", // Info (blue)
} as const;

// ============================================================================
// NEUTRAL COLORS - Text, borders, backgrounds
// ============================================================================
export const NeutralColors = {
  textPrimary: "#0D1328", // Text / Primary (dark navy)
  textSecondary: "#687280", // Text / Secondary (gray)
  border: "#E5E7EB", // Border (light gray)
  surface: "#F6F7FB", // Surface (light blue-gray)
  background: "#FFFFFF", // Background (white)
} as const;

// ============================================================================
// COMPLETE COLOR PALETTE
// ============================================================================
export const Colors = {
  // Brand colors
  ...BrandColors,

  // Semantic colors
  ...SemanticColors,

  // Neutrals
  ...NeutralColors,

  // Legacy light/dark mode support
  light: {
    text: NeutralColors.textPrimary,
    background: NeutralColors.background,
    backgroundElement: NeutralColors.surface,
    backgroundSelected: BrandColors.purple,
    textSecondary: NeutralColors.textSecondary,
  },
  dark: {
    text: "#ffffff",
    background: "#000000",
    backgroundElement: "#212225",
    backgroundSelected: BrandColors.purple,
    textSecondary: "#B0B4BA",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

// ============================================================================
// TYPOGRAPHY - Font sizes, weights, and line heights
// ============================================================================
export const Typography = {
  // Headings
  h1: {
    fontSize: 32,
    fontWeight: "700", // Bold
    lineHeight: 1.2,
    letterSpacing: 0,
  },
  h2: {
    fontSize: 24,
    fontWeight: "600", // SemiBold
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  h3: {
    fontSize: 20,
    fontWeight: "600", // SemiBold
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  h4: {
    fontSize: 16,
    fontWeight: "500", // Medium
    lineHeight: 1.4,
    letterSpacing: 0,
  },

  // Body text
  bodyLarge: {
    fontSize: 16,
    fontWeight: "400", // Regular
    lineHeight: 1.6,
    letterSpacing: 0,
  },
  bodyMedium: {
    fontSize: 14,
    fontWeight: "400", // Regular
    lineHeight: 1.6,
    letterSpacing: 0,
  },
  bodySmall: {
    fontSize: 13,
    fontWeight: "400", // Regular
    lineHeight: 1.6,
    letterSpacing: 0,
  },

  // Caption
  caption: {
    fontSize: 11,
    fontWeight: "400", // Regular
    lineHeight: 1.4,
    letterSpacing: 0,
  },
} as const;

// ============================================================================
// FONT FAMILIES
// ============================================================================
export const Fonts = Platform.select({
  ios: {
    /** Poppins font family */
    poppins: "Poppins",
    /** iOS system fonts */
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  android: {
    /** Poppins font family */
    poppins: "Poppins",
    /** Android system fonts */
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    /** Poppins from CSS */
    poppins: "Poppins, sans-serif",
    /** Web fonts */
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
  default: {
    /** Poppins font family (default fallback) */
    poppins: "Poppins",
    /** Default system fonts */
    sans: "system-ui",
    serif: "serif",
    rounded: "system-ui",
    mono: "monospace",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
