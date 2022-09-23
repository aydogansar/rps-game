import { keyframes } from "stitches.config";

export const pulseAnimation = (scale: number) =>
  keyframes({
    "0%": {
      transform: "scale(0.95)",
      boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.7)",
    },

    "70%": {
      transform: `scale(${scale})`,
      boxShadow: "0 0 0 25px rgba(255, 255, 255, 0)",
    },

    "100% ": {
      transform: "scale(0.95)",
      boxShadow: " 0 0 0 0 rgba(255, 255, 255, 0)",
    },
  });
