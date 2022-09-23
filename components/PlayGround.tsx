import { styled } from "stitches.config";
import ChoiceArea from "./ChoiceArea";
import Result from "./Result";

const PlayGround = () => {
  return (
    <Wrapper>
      <ChoiceArea />
      <Result />
    </Wrapper>
  );
};
export default PlayGround;

const Wrapper = styled("div", {
  flexCenter: "",
  marginTop: "100px",
  width: "100%",

  "@sm": {
    marginTop: "150px",
  },
});
