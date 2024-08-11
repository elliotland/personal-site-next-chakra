import {
  Avatar,
  Flex,
  Heading,
  Collapse,
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
        marginTop={smallMode ? "em" : '2em'}
        flexDirection={smallMode ? "row" : "column"}
        transition={animationValue}
        alignContent={'center'}
          >
        <Avatar
          src="avatar.jpg"
          size={smallMode ? "lg" : "2xl"}
          name="Elliot Land"
          marginRight={smallMode ? "1em" : "0"}
          transition={animationValue}
        />

        <Heading
          size={smallMode ? size : "2xl"}
          transition={animationValue}
          bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
          bgClip="text"
          textStyle="hero"
          variant={"Bungee"}
          mt={'10px'}
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
