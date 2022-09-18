import { styled } from "stitches.config";
import useStore from "store";

const Score = () => {
  const score = useStore((state) => state.score);

  return (
    <Wrapper>
      <span>SCORE</span>
      <span>{score}</span>
    </Wrapper>
  );
};
export default Score;

const Wrapper = styled("div", {
  flexCenter: "column", //stitches custom util

  width: "120px",
  height: "100%",
  background: "$grayGradient",
  borderRadius: "$md",
  padding: "$10",

  "& > span:first-of-type": {
    color: "$scoreText",
    marginBottom: "$3",
    marginTop: "-$3",
    letterSpacing: "2px",

    "@sm": {
      marginBottom: "$5",
      marginTop: "-$5",
    },
  },

  "& > span:last-of-type": {
    fontSize: "48px",
    color: "$darkText",
    fontWeight: "$bold",

    "@sm": {
      fontSize: "64px",
    },
  },

  "@sm": {
    width: "170px",
  },
});
