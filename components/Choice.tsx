import { styled } from "stitches.config";
import { Rock, Paper, Lizard, Scissors, Spock } from "icons";
import { colors, pulseAnimation } from "constant";
import useStore from "store";

interface Props {
  type: number;
  isSelected?: boolean;
  winner?: boolean;
}

const choices = [Scissors, Spock, Lizard, Rock, Paper];

const Choice = ({ type, isSelected = false, winner }: Props) => {
  const CustomComponent = choices[type];

  const handlePlay = useStore((state) => state.handlePlay);

  const handleChoice = () => handlePlay(type);

  return (
    <Wrapper
      css={{
        background: colors[type],
      }}
      {...(!isSelected && { onClick: handleChoice })}
      selected={isSelected}
      empty={type === null}
      winner={winner}
    >
      <GrayArea>
        <CustomComponent />
      </GrayArea>
    </Wrapper>
  );
};
export default Choice;

const Wrapper = styled("div", {
  flexCenter: "",
  width: "70px",
  height: "70px",
  borderRadius: "$circle",
  cursor: "pointer",
  transition: "all 1s",
  flexShrink: 0,

  svg: {
    transform: "scale(.5)",
  },

  "@sm": {
    width: "90px",
    height: "90px",
  },
  "@md": {
    width: "120px",
    height: "120px",

    svg: {
      transform: "none",
    },
  },
  "@lg": {
    width: "160px",
    height: "160px",
  },
  "@xl": {
    width: "180px",
    height: "180px",
  },

  variants: {
    selected: {
      false: {
        "&:hover": {
          transition: "all 1s",
          transform: "scale(1.2)",
        },
      },
      true: {
        transform: "scale(1.4)",
        cursor: "default",
      },
    },
    empty: {
      true: {
        background: "$black20",
      },
    },
    winner: {
      true: {
        "&:before": {
          content: "",
          width: "100%",
          height: "100%",
          position: "absolute",
          borderRadius: "$circle",
          animation: `${pulseAnimation(1.5)} 1000ms infinite`,
        },
        "&:after": {
          content: "",
          width: "100%",
          height: "100%",
          position: "absolute",
          borderRadius: "$circle",
          animation: `${pulseAnimation(2)} 1000ms infinite`,
        },
      },
    },
  },
});

const GrayArea = styled("div", {
  flexCenter: "",
  background: "$grayGradient",
  width: "50px",
  height: "50px",
  borderRadius: "$circle",
  color: "$dark",
  transition: "all 1s",

  "@sm": {
    width: "70px",
    height: "70px",
  },
  "@md": {
    width: "93px",
    height: "93px",
  },
  "@lg": {
    width: "125px",
    height: "125px",
  },
  "@xl": {
    width: "140px",
    height: "140px",
  },
});
