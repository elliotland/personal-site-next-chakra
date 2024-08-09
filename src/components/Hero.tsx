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
  size?: string;
};

const Hero = ({ title, smallMode, isOpen = true, onToggle, size }: HeroProps) => {
  const animationValue = "all 0.3s ease-in-out";

  return (
    <Collapse animateOpacity in={isOpen} >
      <Flex
        justifyContent="center"
        alignItems="center"
        marginTop={smallMode ? "2em" : '0em'}
        flexDirection={smallMode ? "column" : "row"}
        transition={animationValue}
        alignContent={'center'}
          >
        <Avatar
          src="avatar.jpg"
          size={smallMode ? "2xl" : "lg"}
          name="Elliot Land"
          marginRight={smallMode ? "0" : "1em"}
          transition={animationValue}
        />

        <Heading
          size={smallMode ? "2xl" : size}
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
