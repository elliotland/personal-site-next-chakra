import React from "react";
import {
  Button,
  ButtonProps,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import EmailComponent from "./emailMessage";

interface ContactMeButtonProps extends ButtonProps {
  lightSettings: {};
  darkSettings: {};
  isExpanded: boolean;
}

const ContactMeButton: React.FC<ContactMeButtonProps> = ({
  lightSettings,
  darkSettings,
  isExpanded,
  ...props
}) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCloseWithSuccess = () => {
    onClose();
    toast({
      title: "Message Sent",
      description: "I'll reach out soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  return (
    <>
      <Button
        aria-label="contact button"
        rightIcon={<EmailIcon />}
        onClick={onOpen}
        // _light={lightSettings}
        // _dark={darkSettings}
        size={[
          "md", // base
          "md", // sm
          "md", // md
        ]}
        rounded={'full'}
        colorScheme={'blue'}
        {...props}
      >
        Contact Me
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <OverlayOne />
        <ModalContent pt={'1em'}>
          <ModalCloseButton />
          <ModalBody>
            <EmailComponent
              onClose={onClose}
              onSuccessClose={handleCloseWithSuccess}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactMeButton;
