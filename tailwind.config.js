/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // ====================================================================
      // COLORS - Lingua Design System
      // ====================================================================
      colors: {
        // Brand Colors
        "brand-purple": "#6C4EF5",
        "brand-deep-purple": "#583BF6",
        "brand-blue": "#4D88FF",
        "brand-green": "#21C16B",

        // Semantic Colors
        success: "#21C16B",
        warning: "#FFC800",
        streak: "#FF8400",
        error: "#FF4D4F",
        info: "#4D88FF",

        // Neutral Colors
        "text-primary": "#0D1328",
        "text-secondary": "#687280",
        "border-light": "#E5E7EB",
        surface: "#F6F7FB",
        "bg-white": "#FFFFFF",
      },

      // ====================================================================
      // FONT FAMILIES
      // ====================================================================
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      // ====================================================================
      // FONT SIZES & TYPOGRAPHY PRESETS
      // ====================================================================
      fontSize: {
        // Headings
        h1: ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["20px", { lineHeight: "1.3", fontWeight: "600" }],
        h4: ["16px", { lineHeight: "1.4", fontWeight: "500" }],

        // Body text
        "body-lg": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["13px", { lineHeight: "1.6", fontWeight: "400" }],

        // Caption
        caption: ["11px", { lineHeight: "1.4", fontWeight: "400" }],
      },

      // ====================================================================
      // FONT WEIGHTS
      // ====================================================================
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      // ====================================================================
      // LINE HEIGHT
      // ====================================================================
      lineHeight: {
        tight: "1.2",
        snug: "1.3",
        normal: "1.4",
        relaxed: "1.6",
      },

      // ====================================================================
      // SPACING
      // ====================================================================
      spacing: {
        0.5: "2px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        12: "48px",
        14: "56px",
        16: "64px",
        20: "80px",
        24: "96px",
      },

      // ====================================================================
      // BORDER RADIUS
      // ====================================================================
      borderRadius: {
        none: "0px",
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        full: "9999px",
      },

      // ====================================================================
      // SHADOWS - Playful & Modern
      // ====================================================================
      boxShadow: {
        none: "none",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",

        // Playful shadows for cards
        card: "0 4px 12px rgba(109, 78, 245, 0.08)",
        "card-hover": "0 12px 24px rgba(109, 78, 245, 0.12)",
      },

      // ====================================================================
      // TRANSITIONS
      // ====================================================================
      transitionDuration: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
      },

      // ====================================================================
      // GAP & DIVIDE
      // ====================================================================
      gap: {
        0: "0px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
      },
    },
  },
  plugins: [],
};
