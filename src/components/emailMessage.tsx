import { Button, ButtonGroup, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const EmailComponent = ({ onClose , onSuccessClose}) => {
  const [text, setText] = useState<string>("");

  const sendEmail = async () => {
    const body = {
      text: text,
    };

    const res = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(body),
    });

    if (res.ok) {
        onSuccessClose();
    } else {
      console.log("Error sending email");
    }  
  };

  return (
    <>
      <Input
        placeholder="I want to tell you..."
        type={"string"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        h={"6em"}
      />
      <ButtonGroup spacing={6} mt={"2em"} display={'flex'} justifyContent={'end'}>
        <Button onClick={onClose} variant={"outline"}>
          Close
        </Button>
        <Button type="submit" onClick={sendEmail} colorScheme="blue">
          Send Message
        </Button>
      </ButtonGroup>
    </>
  );
};

export default EmailComponent;
