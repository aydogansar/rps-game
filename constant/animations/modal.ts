import { Variants } from "framer-motion";

export const modalWrapperVariants: Variants = {
  visible: {
    opacity: 1,
    display: "flex",
    transition: {
      display: { duration: 0.5 },
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

export const modalBodyVariants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      scale: { duration: 0.5 },
      opactiy: { delay: 0.5 },
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.1,
    transition: {
      scale: { duration: 0.5 },
    },
  },
};
