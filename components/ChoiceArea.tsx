import { AnimatePresence, motion, Variants } from "framer-motion";
import shallow from "zustand/shallow";
import { styled } from "stitches.config";
import { Choices } from "models/Choices";
import useStore from "store";
import Choice from "./Choice";

const ChoiceArea = () => {
  const choice = useStore((state) => state.choice);

  const hasChoice = typeof choice === "number";

  return (
    <Wrapper hasChoice={hasChoice}>
      <img src="/bg-pentagon.svg" width={500} height={476} />
      <Row firstRow>
        <Choice type={Choices.Scissors} />
      </Row>
      <Row middleRow>
        <Choice type={Choices.Spock} />
        <Choice type={Choices.Paper} />
      </Row>
      <Row lastRow>
        <Choice type={Choices.Lizard} />
        <Choice type={Choices.Rock} />
      </Row>
    </Wrapper>
  );
};
export default ChoiceArea;

const Wrapper = styled("div", {
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 $16",

  "& > img": {
    position: "absolute",
    zIndex: -1,
    height: "auto",
    width: "100%",
    maxWidth: 500,
    padding: "0 $16",

    "@sm": {
      padding: "0 0",
    },
  },

  "@sm": {
    padding: "0 0",
  },

  variants: {
    hasChoice: {
      true: {
        backgroundImage: "none",
      },
    },
  },
});

const Row = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "550px",
  width: "100%",

  variants: {
    firstRow: {
      true: {
        justifyContent: "center",
        marginTop: "-15px",

        "@sm": {
          marginTop: "-35px",
        },
      },
    },
    middleRow: {
      true: {
        marginTop: "10px",

        "& > div": {
          margin: "0 -10px",
        },

        "@sm": {
          "& > div": {
            margin: "0 -10px",
          },

          marginTop: "80px",
        },
        "@md": {
          "& > div": {
            margin: "0 -20px",
          },

          marginTop: "20px",
        },
        "@lg": {
          "& > div": {
            margin: "0 -35px",
          },

          marginTop: "-40px",
        },
      },
    },
    lastRow: {
      true: {
        marginTop: "55px",

        "& > div": {
          margin: "0 15px",
        },

        "@sm": {
          "& > div": {
            margin: "0  60px",
          },

          marginTop: "180px",
        },
        "@md": {
          "& > div": {
            margin: "0 60px",
          },

          marginTop: "180px",
        },
        "@lg": {
          "& > div": {
            margin: "0 35px",
          },

          marginTop: "105px",
        },
      },
    },
  },
});
