import React from 'react';
import { Badge, Tag, Text } from "@chakra-ui/react";
import useRandomThemeColor from './ColorPicker';

const TechKeywords = ({ keywords }) => {

  return (
    <>
      {keywords.split(',').map((keyword, index) => (
        <Tag variant={'outline'}  key={index}
        display={['none', 'inline-flex']}
        w={['50%', 'fit-content']}
        m={'0 auto'}

        textAlign={'center'}
        _light={{ color: 'black', bgColor:'customLightMode.peach'} }
        _dark={{ color: 'black', bgColor:'customDarkMode.green'}}
        color={'white'}>
          {keyword.trim()}
        </Tag>
      ))}
    </>
  );
};

export default TechKeywords;