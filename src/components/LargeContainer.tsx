import { Container, ContainerProps } from '@chakra-ui/react';
import React from 'react';

type LargeContainerProps = ContainerProps & {
  children: React.ReactNode;
};

export const LargeContainer: React.FC<LargeContainerProps> = ({ 
  children, 
  ...props 
}) => {
  return (
    <Container
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
      maxW="container.lg"
      mt="2em"
      {...props}
    >
      {children}
    </Container>
  );
};