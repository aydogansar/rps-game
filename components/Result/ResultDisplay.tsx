import { motion, Variants } from "framer-motion";
import { styled } from "stitches.config";
import useStore from "store";
import shallow from "zustand/shallow";

import Button from "../Button";

const resultVariants: Variants = {
  visible: {
    opacity: 1,
    minWidth: "100%",
    pointerEvents: "auto",
    transition: {
      minWidth: { duration: 1, delay: 0.5 },
      opacity: { duration: 0.5, delay: 1.5 },
      pointerEvents: { delay: 1.5 },
    },
  },
  hidden: {
    opacity: 0,
    minWidth: 0,
    pointerEvents: "none",
  },
};

const results = {
  win: "You Win",
  lose: "You Lose",
  draw: "Draw",
};

const ResultDisplay = () => {
  const [result, win, playAgain] = useStore(
    (state) => [state.result, state.win, state.playAgain],
    shallow
  );

  const animate = result ? "visible" : "hidden";

  return (
    <Wrapper initial={animate} variants={resultVariants} animate={animate}>
      <h2>{win && results[win]}</h2>
      <Button onClick={playAgain}>PLAY AGAIN</Button>
    </Wrapper>
  );
};
export default ResultDisplay;

const Wrapper = styled(motion.div, {
  flexCenter: "column",
  height: "130px",
  marginTop: "$24",
  position: "absolute",
  bottom: "100px",

  h2: {
    fontSize: "56px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "$gray",
    marginBottom: "$8",
  },

  "@lg": {
    position: "static",
  },
});
