import { Avatar, Flex, Heading, Collapse } from "@chakra-ui/react";

type SignatureProps = {
  title: string;
  smallMode: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  size?: string;
};

const Signature = ({
  title,
  smallMode,
  isOpen = true,
  onToggle,
  size,
}: SignatureProps) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      marginTop={smallMode ? "0em" : "2em"}
      mb={smallMode ? "0em" : "0em"}
      flexDirection={smallMode ? "row" : "column"}
      position={smallMode ? "inherit" : "initial"}
    >
      <Avatar
        src="avatar.jpg"
        size={smallMode ? "md" : "2xl"}
        name="Elliot Land"
        marginRight={smallMode ? "1em" : "0"}
      />

      <Heading
        size={smallMode ? size : "2xl"}
        bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
        bgClip="text"
        textStyle="hero"
        variant={"Bungee"}
        alignSelf={smallMode ? "baseline" : "initial"}
        mt={smallMode ? "0" : ".2em"}
      >
        {title}
      </Heading>
    </Flex>
  );
};
export default Signature;

Signature.defaultProps = {
  title: "Elliot Land",
};
