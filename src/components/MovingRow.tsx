  import React from 'react';
  import { Box, keyframes } from '@chakra-ui/react';
  import { motion } from 'framer-motion';
  import TaskRow from './RowItems';

  const scrollAnimation = keyframes`
    from { transform: translateX(100%); }
    to { transform: translateX(-100%); }
  `;

  export default function App() {
    return (
        <Box
          as={motion.div}
          animation={`${scrollAnimation} 10s linear infinite`}
          position="absolute"
          whiteSpace="nowrap"
          w={'100%'}
        >
          <TaskRow />
        </Box>
    );
  }