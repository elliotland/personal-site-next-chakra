import React from 'react';
import { Badge, Text } from "@chakra-ui/react";
import useRandomThemeColor from './ColorPicker';

const TechKeywords = ({ keywords }) => {

  return (
    <>
      {keywords.split(',').map((keyword, index) => (
        <Badge variant={'outline'}  key={index}
        _light={{ color: 'black', bgColor:'customLightMode.peach'} }
        _dark={{ color: 'black', bgColor:'customDarkMode.green'}}
        color={'white'}>
          {keyword.trim()}
        </Badge>
      ))}
    </>
  );
};

export default TechKeywords;