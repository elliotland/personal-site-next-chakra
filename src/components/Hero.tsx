import { Avatar, Flex, Heading, Wrap, WrapItem, Text } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    marginTop={"2em"}
    flexDirection={"column"}
  >
    <Avatar src="avatar.jpg" size="2xl" name="Elliot Land"/>

    <Heading
      fontSize="5em"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
      textStyle='hero'
      variant={'Bungee'}
    >
      {title}
    </Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "Elliot Land",
};
