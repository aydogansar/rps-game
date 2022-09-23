import { styled } from "stitches.config";

const Button = styled("button", {
  padding: "$2 $16",
  background: "$gray",
  borderRadius: "$md",
  border: "none",
  letterSpacing: "2px",
  color: "$darkText",
  cursor: "pointer",
  transition: "background 0.3s",

  "&:hover": {
    background: "$white",
  },

  variants: {
    outline: {
      true: {
        background: "transparent",
        border: "1px solid $white",
        color: "$white",

        "&:hover": {
          background: "unset",
        },
      },
    },
  },
});

export default Button;
