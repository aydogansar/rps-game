import { Variants } from "framer-motion";

export const choiceAreaVariants: Variants = {
  visible: {
    opacity: 1,
    display: "block",
    transition: {
      display: { duration: 0.5, delay: 0.5 },
    },
  },
  hidden: {
    opacity: 0,
    display: "none",
    transition: {
      display: { duration: 0.5, delay: 0.5 },
    },
  },
};
