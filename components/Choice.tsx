import { styled } from "stitches.config";
import { Choices } from "models/Choices";
import { Rock, Paper, Lizard, Scissors, Spock } from "icons";
import { positions, colors } from "constant";
import useStore from "store";

interface Props {
  type: number;
}

const choices = [Scissors, Spock, Lizard, Rock, Paper];

const Choice = ({ type }: Props) => {
  const CustomComponent = choices[type];

  const setChoice = useStore((state) => state.setChoice);

  const handleChoice = () => setChoice(type);

  return (
    <Wrapper
      css={{
        background: colors[type],
        ...positions[type],
      }}
      onClick={handleChoice}
    >
      <GrayArea>
        <CustomComponent />
      </GrayArea>
    </Wrapper>
  );
};
export default Choice;

const Wrapper = styled("div", {
  position: "absolute",
  flexCenter: "",
  width: "180px",
  height: "180px",
  borderRadius: "$circle",
  cursor: "pointer",
  transition: "all 1s",

  "&:hover": {
    transition: "all 1s",
    transform: "scale(1.2)",
  },
});

const GrayArea = styled("div", {
  flexCenter: "",
  background: "$grayGradient",
  width: "140px",
  height: "140px",
  borderRadius: "$circle",
  color: "$dark",
});
