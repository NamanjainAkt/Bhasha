# Lingua Design System - Complete Implementation Guide

## Overview

The Lingua design system has been fully implemented using NativeWind (Tailwind CSS) and is based on the official design theme. This system provides a complete set of design tokens, typography utilities, and reusable component classes for building a cohesive, playful learning app interface.

---

## Design System Assets

### 1. **Design Tokens** (`src/constants/theme.ts`)

#### Colors

**Brand Colors** - The primary color palette:
- **Lingua Purple** (#6C4EF5) - Primary brand color, used for CTAs
- **Lingua Deep Purple** (#583BF6) - Pressed/hover states
- **Lingua Blue** (#4D88FF) - Secondary brand color
- **Lingua Green** (#21C16B) - Success state

**Semantic Colors** - Function-based colors:
- **Success** (#21C16B) - Completed lessons, positive actions
- **Warning** (#FFC800) - Pending status, caution
- **Streak** (#FF8400) - Streak counter, achievements
- **Error** (#FF4D4F) - Errors, destructive actions
- **Info** (#4D88FF) - Information, secondary CTAs

**Neutral Colors** - Text, borders, backgrounds:
- **Text Primary** (#0D1328) - Main text, dark navy
- **Text Secondary** (#687280) - Supporting text, gray
- **Border** (#E5E7EB) - Dividers, subtle lines
- **Surface** (#F6F7FB) - Light background for cards
- **Background** (#FFFFFF) - Main background, white

#### Typography

Font family: **Poppins** (Modern, geometric sans-serif)

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| **H1** | 32px | Bold (700) | 1.2 | Page/screen titles |
| **H2** | 24px | SemiBold (600) | 1.3 | Section titles |
| **H3** | 20px | SemiBold (600) | 1.3 | Card/module titles |
| **H4** | 16px | Medium (500) | 1.4 | Subheadings |
| **Body Large** | 16px | Regular (400) | 1.6 | Important content |
| **Body Medium** | 14px | Regular (400) | 1.6 | Body text |
| **Body Small** | 13px | Regular (400) | 1.6 | Supporting text |
| **Caption** | 11px | Regular (400) | 1.4 | Labels, meta text |

#### Spacing Scale

Consistent spacing for padding, margin, and gaps:
```
0.5 → 2px    |  4 → 16px   |  8 → 32px   |  16 → 64px
1   → 4px    |  5 → 20px   |  9 → 36px   |  20 → 80px
2   → 8px    |  6 → 24px   |  10 → 40px  |  24 → 96px
3   → 12px   |  7 → 28px   |  12 → 48px
```

#### Border Radius

| Class | Value |
|-------|-------|
| `rounded-none` | 0px |
| `rounded-xs` | 4px |
| `rounded-sm` | 8px |
| `rounded-md` | 12px |
| `rounded-lg` | 16px (recommended for cards/buttons) |
| `rounded-xl` | 20px |
| `rounded-full` | 9999px (pills, badges) |

---

### 2. **Tailwind Configuration** (`tailwind.config.js`)

Extended Tailwind theme with:
- Custom color palette (all Lingua brand colors)
- Font family configuration for Poppins
- Typography presets for all heading and body styles
- Complete spacing scale
- Shadow utilities including playful card shadows
- Transition durations for smooth animations

**Key additions:**
```js
colors: {
  'brand-purple': '#6C4EF5',
  'brand-deep-purple': '#583BF6',
  'success': '#21C16B',
  'error': '#FF4D4F',
  // ... all colors
}

fontSize: {
  'h1': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
  'body-md': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
  // ... all typography
}

boxShadow: {
  'card': '0 4px 12px rgba(109, 78, 245, 0.08)',
  'card-hover': '0 12px 24px rgba(109, 78, 245, 0.12)',
}
```

---

### 3. **Global CSS Utilities** (`src/global.css`)

#### Typography Utilities (BEM Pattern)

```tsx
<Text className="typo__h1">Page Title</Text>
<Text className="typo__h2">Section Title</Text>
<Text className="typo__h3">Card Title</Text>
<Text className="typo__h4">Subheading</Text>
<Text className="typo__body-lg">Important content</Text>
<Text className="typo__body-md">Body text</Text>
<Text className="typo__body-sm">Supporting text</Text>
<Text className="typo__caption">Labels and meta</Text>
```

#### Button Component Utilities

```tsx
// Variants
<TouchableOpacity className="btn--primary">
<TouchableOpacity className="btn--secondary">
<TouchableOpacity className="btn--tertiary">
<TouchableOpacity className="btn--success">
<TouchableOpacity className="btn--warning">
<TouchableOpacity className="btn--error">

// Sizes
<TouchableOpacity className="btn--sm">      {/* 40px */}
<TouchableOpacity className="btn">         {/* 48px (default) */}
<TouchableOpacity className="btn--lg">     {/* 56px */}

// Full width
<TouchableOpacity className="btn--full">
```

#### Card Component Utilities

```tsx
<View className="card">           {/* Base card */}
<View className="card--sm">       {/* Small card */}
<View className="card--lg">       {/* Large card */}
```

#### Badge Component Utilities

```tsx
<View className="badge--success">
<View className="badge--warning">
<View className="badge--error">
<View className="badge--info">
```

#### Input Field Utilities

```tsx
<TextInput className="input" />
<TextInput className="input--error" />
```

#### Additional Utilities

```tsx
// Surfaces
<View className="surface">
<View className="surface--elevated">

// Dividers
<View className="divider" />
<View className="divider--vertical" />

// Progress bar
<View className="progress">
  <View className="progress__bar" style={{ width: '70%' }} />
</View>
```

#### Responsive & Layout Utilities

```tsx
<View className="container">       {/* Max-width wrapper */}
<View className="flex-center">     {/* Centered flex */}
<View className="flex-between">    {/* Space-between flex */}
```

#### Animations

```tsx
<View className="animate-fade-in">    {/* Fade in (300ms) */}
<View className="animate-slide-up">   {/* Slide up (300ms) */}
<View className="animate-pulse">      {/* Pulse (2s infinite) */}
```

---

### 4. **Font Loading** (`src/app/_layout.tsx`)

The Poppins font family is automatically loaded on app startup:

```tsx
import * as Font from 'expo-font';

const [fontsLoaded] = Font.useFonts({
  'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Medium': require('@/assets/fonts/Poppins-Medium.ttf'),
  'Poppins-SemiBold': require('@/assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
});
```

---

### 5. **Type Definitions**

#### `src/types/design-system.ts`
TypeScript types for safe access to design tokens:
- `ColorKey`, `BrandColorKey`, `SemanticColorKey`, `NeutralColorKey`
- `TypographyKey`, `ButtonVariant`, `ButtonSize`, `BadgeVariant`
- `ComponentSize`, `SpacingValue`, `BorderRadius`, `ShadowType`

#### `src/types/global.d.ts`
Module declarations for:
- CSS imports (NativeWind support)
- Image assets (.png, .jpg, .jpeg, .gif, .webp)
- Font files (.ttf, .otf)

---

## Usage Examples

### Example 1: Lesson Card

```tsx
<View className="card">
  <View className="flex-between mb-4">
    <Text className="typo__h3">Spanish 101</Text>
    <View className="badge--success">
      <Text className="typo__caption">Completed</Text>
    </View>
  </View>
  
  <Text className="typo__body-md text-text-secondary mb-4">
    Learn basic Spanish vocabulary and phrases
  </Text>
  
  <View className="progress mb-4">
    <View className="progress__bar" style={{ width: '75%' }} />
  </View>
  
  <TouchableOpacity className="btn--primary btn--full">
    <Text className="text-white font-bold">Continue Lesson</Text>
  </TouchableOpacity>
</View>
```

### Example 2: Language Selection Screen

```tsx
<View className="container safe-area">
  <Text className="typo__h1 mb-6">Choose a Language</Text>
  
  <View className="gap-3">
    {languages.map((lang) => (
      <TouchableOpacity key={lang.id} className="card">
        <View className="flex-between">
          <View>
            <Text className="typo__h4">{lang.name}</Text>
            <Text className="typo__body-sm text-text-secondary">
              {lang.description}
            </Text>
          </View>
          <Text className="typo__h4 text-brand-purple">
            {lang.level}
          </Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
</View>
```

### Example 3: XP & Streak Display

```tsx
<View className="flex-between bg-surface rounded-lg p-4">
  <View className="flex-center gap-2">
    <Text className="text-2xl">✨</Text>
    <View>
      <Text className="typo__caption text-text-secondary">Total XP</Text>
      <Text className="typo__h3 text-brand-purple">2,450</Text>
    </View>
  </View>
  
  <View className="divider--vertical" />
  
  <View className="flex-center gap-2">
    <Text className="text-2xl">🔥</Text>
    <View>
      <Text className="typo__caption text-text-secondary">Streak</Text>
      <Text className="typo__h3 text-streak">12 days</Text>
    </View>
  </View>
</View>
```

---

## Tailwind Classes Reference

### Colors
```
text-brand-purple, bg-brand-purple, border-brand-purple
text-brand-blue, text-success, text-error, text-warning
text-text-primary, text-text-secondary
bg-surface, bg-white
```

### Typography
```
typo__h1, typo__h2, typo__h3, typo__h4
typo__body-lg, typo__body-md, typo__body-sm, typo__caption
font-regular, font-medium, font-semibold, font-bold
leading-tight, leading-snug, leading-normal, leading-relaxed
```

### Layout
```
flex-center, flex-between, container, safe-area
p-4, m-6, gap-4, px-4, py-6
```

### Components
```
btn, btn--primary, btn--secondary, btn--lg, btn--full
card, card--sm, card--lg
badge, badge--success, badge--error
input, input--error
surface, surface--elevated
divider, divider--vertical
progress, progress__bar
```

### Shadows
```
shadow-none, shadow-sm, shadow-md, shadow-lg
shadow-card, shadow-card-hover
```

### Borders
```
rounded-none, rounded-xs, rounded-sm, rounded-md
rounded-lg, rounded-xl, rounded-full
```

### Animations
```
animate-fade-in, animate-slide-up, animate-pulse
```

---

## When to Use StyleSheet vs Tailwind

### ✅ Use NativeWind/Tailwind Classes:
- Layout and positioning (flex, margin, padding)
- Colors and backgrounds
- Border radius and shadows
- Typography (via utilities)
- Spacing and sizing
- Transitions and animations

### ✅ Use StyleSheet for:
- **SafeAreaView** styling (from `react-native-safe-area-context`)
- **KeyboardAvoidingView** behavior props
- Dynamic/runtime styles (calculated values)
- Platform-specific styles
- **Animated** component values
- Complex transform arrays

---

## File Organization

```
src/
├── app/
│   └── _layout.tsx              (Font loading, theme setup)
├── components/
│   ├── app-tabs.tsx
│   ├── themed-text.tsx
│   └── ... (component files)
├── constants/
│   ├── theme.ts                 (Design tokens)
│   ├── images.ts                (Image imports)
│   └── DESIGN_SYSTEM.md          (Documentation)
├── types/
│   ├── design-system.ts         (Type definitions)
│   └── global.d.ts              (Module declarations)
├── global.css                   (Utilities & components)
└── ... (other files)

root/
├── tailwind.config.js           (Tailwind extensions)
├── app.json
├── package.json
└── tsconfig.json
```

---

## Getting Started with Components

### Creating a New Component

1. **Use existing utilities** - Leverage design system classes first
2. **Import types** - Use `ButtonVariant`, `BadgeVariant`, etc. from design-system types
3. **Apply design tokens** - Access colors/typography from `src/constants/theme.ts`
4. **Keep it simple** - Follow AGENTS.md principle of "simple, maintainable code"

Example:
```tsx
import { Colors, Typography } from '@/constants/theme';
import type { ButtonVariant } from '@/types/design-system';

interface LessonCardProps {
  title: string;
  progress: number;
  variant?: ButtonVariant;
}

export function LessonCard({ title, progress, variant = 'primary' }: LessonCardProps) {
  return (
    <View className="card">
      <Text className="typo__h3">{title}</Text>
      <View className="progress mt-4">
        <View 
          className="progress__bar" 
          style={{ width: `${progress}%` }}
        />
      </View>
    </View>
  );
}
```

---

## Maintenance & Extending

### To Add New Colors:
1. Add to `BrandColors`, `SemanticColors`, or `NeutralColors` in `theme.ts`
2. Add to `colors` in `tailwind.config.js`
3. Update `DESIGN_SYSTEM.md` with the new color

### To Add New Typography Style:
1. Add to `Typography` in `theme.ts`
2. Add to `fontSize` in `tailwind.config.js`
3. Add utility class in `global.css` (`.typo__stylename`)

### To Add New Component Utility:
1. Add class definition to `@layer components` in `global.css`
2. Follow BEM naming: `.component-name__element--modifier`
3. Document in `DESIGN_SYSTEM.md`

---

## Compliance with AGENTS.md

✅ **Clean, simple, maintainable code** - Design system is organized and easy to understand  
✅ **NativeWind/Tailwind only** - All styling uses Tailwind classes  
✅ **No unnecessary abstraction** - Direct access to design tokens  
✅ **Teachable** - Clear examples and documentation  
✅ **Pixel-perfect** - Matches design system exactly  

---

## Verification

- ✅ TypeScript compilation: No errors
- ✅ App builds successfully: `npm run web` works
- ✅ All fonts load correctly
- ✅ Tailwind classes processed correctly
- ✅ NativeWind v4.2.5 compatible
- ✅ CSS modules properly declared

---

## Next Steps

The design system is ready for component development. Use the utilities and patterns documented here to build UI features following the Lingua design language.

For more details, see:
- `src/constants/DESIGN_SYSTEM.md` - Comprehensive style guide
- `src/types/design-system.ts` - TypeScript type definitions
- `src/constants/theme.ts` - Design token values
