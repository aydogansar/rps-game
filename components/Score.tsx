import { styled } from "stitches.config";

const Score = () => {
  return (
    <Wrapper>
      <span>SCORE</span>
      <span>12</span>
    </Wrapper>
  );
};
export default Score;

const Wrapper = styled("div", {
  flexCenter: "column", //stitches custom util

  width: "170px",
  height: "100%",
  background: "$grayGradient",
  borderRadius: "$md",
  padding: "$10",

  "& > span:first-of-type": {
    color: "$scoreText",
    marginBottom: "$5",
    marginTop: "-$5",
    letterSpacing: "2px",
  },

  "& > span:last-of-type": {
    fontSize: "64px",
    color: "$darkText",
    fontWeight: "$bold",
  },
});
