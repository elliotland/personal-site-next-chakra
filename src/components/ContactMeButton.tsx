import React from "react";
import {
  Button,
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

interface ContactMeButtonProps {
  expandedSiteView: boolean;
}

const ContactMeButton: React.FC<ContactMeButtonProps> = ({ expandedSiteView }) => {
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
        bgColor={'customLightMode.primary'}
        aria-label="contact button"
        mt={expandedSiteView ? "5px" : "0"}
        h={expandedSiteView ? "50px" : "2.5rem"}
        w={expandedSiteView ? "auto" : "100%"}
        leftIcon={<EmailIcon />}
        onClick={onOpen}
        borderTopRadius={expandedSiteView ? undefined : 0}
        _light={{
          color: "white",
          bgColor: "customLightMode.primary",
        }}
        _dark={{
          color: "black",
          bgColor: "customDarkMode.green",
        }}
      >
        Contact Me
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <OverlayOne />
        <ModalContent>
          <ModalHeader>Hey Elliot</ModalHeader>
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