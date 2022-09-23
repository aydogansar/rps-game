import NextImage, { ImageProps } from "next/image";

const Image = ({ src, ...props }: ImageProps) => {
  return <NextImage src={src} {...props} />;
};
export default Image;
