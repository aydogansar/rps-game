import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const colors = {
  white: "#fff",
  darkText: "hsl(229, 25%, 31%)",
  scoreText: "hsl(229, 64%, 46%)",
  headerOutline: "hsl(217, 16%, 45%)",
  backgroundGradient:
    "radial-gradient(hsl(214, 47%, 23%) , hsl(237, 49%, 15%))",
  scissorsGradient: "linear-gradient(hsl(39, 89%, 49%) , hsl(40, 84%, 53%))",
  paperGradient: "linear-gradient(hsl(230, 89%, 62%) , hsl(230, 89%, 65%))",
  rockGradient: "linear-gradient(hsl(349, 71%, 52%) , hsl(349, 70%, 56%))",
  lizardGradient: "linear-gradient(hsl(261, 73%, 60%) ,hsl(261, 72%, 63%))",
  cyan: "linear-gradient(hsl(189, 59%, 53%) , hsl(189, 58%, 57%))",
  grayGradient:
    "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(221,221,221,1) 0%, rgba(221,221,221,1) 100%)",
  dark: "#3B4262",
  black20: "rgba(0,0,0,0.2)",
  gray: "#ddd",
};

export const media = {
  // maxSm: '(max-width: 640px)',
  maxMd: "(max-width: 768px)",
  maxLg: "(max-width: 1024px)",
  maxXl: "(max-width: 1280px)",
  max2Xl: "(max-width: 1536px)",
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
};

export const { styled, getCssText, theme } = createStitches({
  theme: {
    fonts: {
      raleway: "Raleway,sans-serif",
    },
    colors,
    fontSizes: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 28px
      "4xl": "2.25rem", // 32px
      "5xl": "3rem", // 48px
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    lineHeights: {
      xs: "1rem", // 16px
      sm: "1.25rem", // 20px
      base: "1.5rem", // 24px
      xl: "1.75rem", // 28px
      "2xl": "2rem", // 32px
      "3xl": "2.25rem", // 36px
      "4xl": "2.5rem", // 40px
      "5xl": "3.75rem", // 56px
    },
    space: {
      0: "0",
      "0.5": "0.125rem",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      18: "4.5rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
    },
    radii: {
      none: "0",
      sm: "0.125rem", // 2px
      rounded: "0.25rem", // 4px
      md: "0.375rem", // 6px,
      lg: "0.5rem", // 8px
      xl: "0.75rem", // 12px
      "2xl": "1rem", // 16px
      "3xl": "1.5rem", // 24px
      "4xl": "2.25rem", // 36px
      circle: "50%",
      full: "9999px",
    },
  },

  media,
  utils: {
    flexCenter: (direction: string) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: direction || "row",
    }),
    flexBetween: (align: string) => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: align || "center",
    }),
  },
});
