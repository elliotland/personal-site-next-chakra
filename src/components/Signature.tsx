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
      marginTop={smallMode ? "0em" : ['0em', '1em', '2em']}
      mb={smallMode ? "0em" : "1em"}
      flexDirection={smallMode ? "row" : "column"}
      position={smallMode ? "inherit" : "initial"}
    >
      <Avatar
        src="avatar.jpg"
        size={smallMode ? "lg" : undefined} 
        w={smallMode ? undefined : "14rem"}     
        h={smallMode ? undefined : "14rem"}  
        name="Elliot Land"
        marginRight={smallMode ? ".5em" : "0"}
      />

      <Heading
        size={size}
        bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
        bgClip="text"
        textStyle="hero"
        variant={"Bungee"}
        alignSelf={smallMode ? "center" : "initial"}
        mt={smallMode ? "0" : ".2em"}
        textAlign={smallMode ? "left" : "center"}
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
