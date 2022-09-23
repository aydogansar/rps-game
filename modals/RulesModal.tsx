import { styled } from "stitches.config";
import { Image, Button } from "components";
import { useModal } from "hooks";

const RulesModal = () => {
  const { Modal, open, openModal, closeModal } = useModal();

  return (
    <>
      <Modal open={open} title="RULES" close={closeModal}>
        <Image src="/image-rules.svg" width={500} height={500} />
      </Modal>
      <StyledButton onClick={openModal} outline>
        RULES
      </StyledButton>
    </>
  );
};

export default RulesModal;

const StyledButton = styled(Button, {
  position: "fixed",
  bottom: "$4",
  right: "$4",

  "@maxMd": {
    right: "unset",
    bottom: "$12",
  },
});
