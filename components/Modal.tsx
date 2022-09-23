import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { styled } from "stitches.config";
import { useOutsideClick } from "hooks";
import { modalBodyVariants, modalWrapperVariants } from "constant";
import { Close } from "icons";

interface Props {
  children: ReactNode;
  open: boolean;
  title: string;
  close: () => void;
}

const Modal = ({ children, title, open, close }: Props) => {
  const { ref } = useOutsideClick({ handler: close });

  return (
    <Wrapper
      initial="hidden"
      variants={modalWrapperVariants}
      animate={open ? "visible" : "hidden"}
    >
      <Body
        ref={ref}
        initial="hidden"
        variants={modalBodyVariants}
        animate={open ? "visible" : "hidden"}
      >
        <Header>
          <Title> {title}</Title>
          <CloseButton
            tabIndex={0}
            role="button"
            aria-label="close modal"
            onClick={close}
          >
            <Close />
          </CloseButton>
        </Header>

        {children}
      </Body>
    </Wrapper>
  );
};
export default Modal;

const Wrapper = styled(motion.div, {
  background: "$black20",
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  flexCenter: "",
  overflow: "auto",
  zIndex: 9,

  "@maxMd": {
    padding: "$4",
  },
});

const Header = styled("div", {
  marginBottom: "$8",
});

const Body = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  background: "$white",
  borderRadius: "$md",
  color: "$darkText",
  padding: "$6 $8 $12",
});

const Title = styled("h2", {
  fontSize: "$2xl",
});

const CloseButton = styled("span", {
  position: "absolute",
  top: "$7",
  right: "$6",
  cursor: "pointer",
  color: "$dark",

  "&:hover": {
    color: "$black",
    transition: "all 0.3s",
  },
});
