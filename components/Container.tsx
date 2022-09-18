import { ReactNode } from "react";
import { styled } from "stitches.config";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
export default Container;

const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "375px",
  margin: "0 auto",
  flexCenter: "column",

  "@sm": {
    maxWidth: "1366px",
    padding: "0 $18",
  },
});
