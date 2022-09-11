import { IconProps } from "interface";

const Close = ({ color = "currentColor", size = 20, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path
      fill={color}
      fill-rule="evenodd"
      d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
      opacity=".25"
    />
  </svg>
);

export default Close;
