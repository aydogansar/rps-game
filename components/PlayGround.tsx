import { styled } from "stitches.config";
import { Choices } from "models/Choices";
import Choice from "./Choice";

const PlayGround = () => {
  return (
    <Wrapper>
      <ChoicesWrapper>
        <Choice type={Choices.Scissors} />
        <Choice type={Choices.Spock} />
        <Choice type={Choices.Lizard} />
        <Choice type={Choices.Rock} />
        <Choice type={Choices.Paper} />
      </ChoicesWrapper>
    </Wrapper>
  );
};
export default PlayGround;

const Wrapper = styled("div", {
  flexCenter: "",

  height: "100%",
  position: "relative",
  top: "200px",
});

const ChoicesWrapper = styled("div", {
  width: "100%",
  height: "500px",
  backgroundImage: "url('/bg-pentagon.svg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "43%",
  backgroundPosition: "center",
});
