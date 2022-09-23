import { styled } from "stitches.config";

const EmptyChoice = styled("div", {
  width: "70px",
  height: "70px",
  borderRadius: "$circle",
  flexShrink: 0,
  boxSizing: "border-box",

  background: "$black20",

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
});

export default EmptyChoice;
