import dynamic from "next/dynamic";
import { styled } from "stitches.config";

const Score = dynamic(() => import("./Score"), { ssr: false });

const Header = () => {
  return (
    <Wrapper>
      <img src="./logo.svg" width={115} height={114} alt="RPS+ Game Logo" />
      <Score />
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled("div", {
  position: "relative",
  top: "$4",

  flexBetween: "center",

  width: "100%",
  height: "100px",

  padding: "$4",
  border: "2px solid $headerOutline",
  borderRadius: "$2xl",

  "& > img": {
    height: "100%",
  },

  "@sm": {
    height: "155px",
    padding: "$4",
    top: "$12",
  },
});
