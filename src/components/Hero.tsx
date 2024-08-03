import {
  Avatar,
  Flex,
  Heading,
  Wrap,
  WrapItem,
  Text,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";

type HeroProps = {
  title: string;
  smallMode: boolean;
  isOpen?: boolean;  
  onToggle?: () => void;
};

const Hero = ({ title, smallMode, isOpen = true, onToggle }: HeroProps) => {
  const animationValue = "all 0.3s ease-in-out";

  return (
    <Collapse animateOpacity in={isOpen} >
      <Flex
        justifyContent="center"
        alignItems="center"
        marginTop={"2em"}
        flexDirection={smallMode ? "column" : "row"}
        transition={animationValue}
          >
        <Avatar
          src="avatar.jpg"
          size={smallMode ? "2xl" : "lg"}
          name="Elliot Land"
          marginRight={smallMode ? "0" : "1em"}
          transition={animationValue}
        />

        <Heading
          fontSize={smallMode ? "5em" : "3em"}
          transition={animationValue}
          bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
          bgClip="text"
          textStyle="hero"
          variant={"Bungee"}
        >
          {title}
        </Heading>
      </Flex>
    </Collapse>
  );
};
export default Hero;

Hero.defaultProps = {
  title: "Elliot Land",
};
