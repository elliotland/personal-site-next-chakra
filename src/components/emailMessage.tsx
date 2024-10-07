import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Input,
  VStack,
  FormControl,
  FormLabel,
  Textarea,
  useToast,
} from "@chakra-ui/react";

interface EmailComponentProps {
  onClose: () => void;
  onSuccessClose: () => void;
}

const EmailComponent: React.FC<EmailComponentProps> = ({ onClose, onSuccessClose }) => {
  const [message, setMessage] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const sendEmail = async () => {
    setIsLoading(true);
    const body = {
      message,
      contactInfo,
    };

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        onSuccessClose();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <FormControl isRequired>
        <FormLabel>Contact Information</FormLabel>
        <Input
          placeholder="How do I follow up with you?"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Message</FormLabel>
        <Textarea
          placeholder="What do you want to tell me?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          minHeight="6em"
        />
      </FormControl>
      <ButtonGroup spacing={4} justifyContent="flex-end">
        <Button onClick={onClose} variant="outline">
          Close
        </Button>
        <Button
          onClick={sendEmail}
          colorScheme="blue"
          isLoading={isLoading}
          loadingText="Sending"
          isDisabled={!message || !contactInfo}
        >
          Send Message
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default EmailComponent;