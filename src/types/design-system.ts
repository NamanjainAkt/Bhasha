/**
 * Design System TypeScript Types
 * Provides type-safe access to design tokens
 */

import {
    BrandColors,
    Colors,
    NeutralColors,
    SemanticColors,
    Typography,
} from "../constants/theme";

/**
 * Color type - All available colors in the design system
 */
export type ColorKey = keyof typeof Colors;

export type BrandColorKey = keyof typeof BrandColors;
export type SemanticColorKey = keyof typeof SemanticColors;
export type NeutralColorKey = keyof typeof NeutralColors;

/**
 * Typography type - All available typography styles
 */
export type TypographyKey = keyof typeof Typography;

export type TypographyStyle = {
  fontSize: number;
  fontWeight: string;
  lineHeight: number;
  letterSpacing: number;
};

/**
 * Button variant types
 */
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "error";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Badge variant types
 */
export type BadgeVariant = "success" | "warning" | "error" | "info";

/**
 * Component size types
 */
export type ComponentSize = "sm" | "md" | "lg" | "xl";

/**
 * Spacing scale type
 */
export type SpacingValue =
  | 0.5
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 12
  | 14
  | 16
  | 20
  | 24;

/**
 * Border radius type
 */
export type BorderRadius = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full";

/**
 * Shadow type
 */
export type ShadowType =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "inner"
  | "card"
  | "card-hover";

/**
 * Animation type
 */
export type AnimationType = "fade-in" | "slide-up" | "pulse";

/**
 * Responsive breakpoint type (if extended in future)
 */
export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Component variant union type - useful for component props
 */
export interface ComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
}
