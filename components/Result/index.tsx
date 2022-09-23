import { motion, Variants } from "framer-motion";
import shallow from "zustand/shallow";
import { styled } from "stitches.config";
import useStore from "store";

import ResultDisplay from "./ResultDisplay";
import Choice from "../Choice";
import EmptyChoice from "../EmptyChoice";

const variants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    display: "flex",
    transition: {
      display: { duration: 0.5, delay: 0.5 },
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.5,
    display: "none",
    transition: {
      display: { duration: 0.5, delay: 0.5 },
    },
  },
};

const Result = () => {
  const [choice, computerChoice] = useStore(
    (state) => [state.choice, state.computerChoice],
    shallow
  );

  const hasChoice = typeof choice === "number";
  const hasComputerChoice = typeof computerChoice === "number";

  const animate = hasChoice ? "visible" : "hidden";

  return (
    <Wrapper initial={animate} variants={variants} animate={animate}>
      <Column>
        <h2>You Picked</h2>

        {hasChoice && <Choice type={choice} isSelected />}
      </Column>

      <ResultDisplay />

      <Column>
        <h2>The House Picked</h2>

        {hasComputerChoice ? (
          <Choice type={computerChoice} isSelected />
        ) : (
          <EmptyChoice />
        )}
      </Column>
    </Wrapper>
  );
};
export default Result;

const Wrapper = styled(motion.div, {
  flexCenter: "",
  padding: "$6",
  maxWidth: "80%",
});

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "150px",
  flexShrink: 0,

  h2: {
    fontSize: "$lg",
    textTransform: "uppercase",
    color: "$gray",
    letterSpacing: "2px",
    textAlign: "center",

    "@sm": {
      fontSize: "$xl",
    },
  },

  "&:first-of-type": {
    marginRight: "$4",
  },
  "&:last-of-type": {
    marginLeft: "$4",
  },

  "@md": {
    height: "300px",

    "&:first-of-type": {
      marginRight: "$12",
    },
    "&:last-of-type": {
      marginLeft: "$12",
    },
  },
  "@lg": {
    "&:first-of-type": {
      marginRight: "unset",
    },
    "&:last-of-type": {
      marginLeft: "unset",
    },
  },
});
