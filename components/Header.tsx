import dynamic from "next/dynamic";
import { styled } from "stitches.config";

const Score = dynamic(() => import("./Score"), { ssr: false });

const Header = () => {
  return (
    <Wrapper>
      <img src="./logo.svg" />
      <Score />
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled("div", {
  position: "relative",
  top: "$12",

  flexBetween: "center",

  width: "100%",
  height: "155px",

  padding: "$4",
  border: "2px solid $headerOutline",
  borderRadius: "$2xl",
});
