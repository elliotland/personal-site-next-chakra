import React from "react";
import { Badge, Tag, TagProps, Text } from "@chakra-ui/react";
import useRandomThemeColor from "./ColorPicker";

// type for TechKeywords
interface TechKeywordsProps extends TagProps {
  keywords: string;
}

const TechKeywords: React.FC<TechKeywordsProps> = ({ keywords, ...props }) => {
  return (
    <>
      {keywords.split(",").map((keyword, index) => (
        <Tag
          variant={"outline"}
          key={index}
          textAlign={"center"}
          _light={{ color: "black", bgColor: "customLightMode.peach" }}
          _dark={{ color: "black", bgColor: "customDarkMode.green" }}
          color={"white"}
          {...props}
        >
          {keyword.trim()}
        </Tag>
      ))}
    </>
  );
};

export default TechKeywords;
