import React, { useState, useEffect } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ControlPoint {
  x: number;
  y: number;
}

const generateBoundedControlPoints = (
  startX: number,
  endX: number,
  centerY: number,
  verticalRange: number
): [ControlPoint, ControlPoint, ControlPoint, ControlPoint] => {
  const cp1: ControlPoint = {
    x: startX + (endX - startX) * (1 / 5 + Math.random() * 0.1),
    y: centerY + (Math.random() - 0.5) * verticalRange,
  };
  const cp2: ControlPoint = {
    x: startX + (endX - startX) * (2 / 5 + Math.random() * 0.1),
    y: centerY + (Math.random() - 0.5) * verticalRange,
  };
  const cp3: ControlPoint = {
    x: startX + (endX - startX) * (3 / 5 + Math.random() * 0.1),
    y: centerY + (Math.random() - 0.5) * verticalRange,
  };
  const cp4: ControlPoint = {
    x: startX + (endX - startX) * (4 / 5 + Math.random() * 0.1),
    y: centerY + (Math.random() - 0.5) * verticalRange,
  };
  
  return [cp1, cp2, cp3, cp4];
};

interface AnimatedLinesProps {
  width?: number;
  height?: number;
  verticalRange?: number;
  lineSpacing?: number;
}

const AnimatedLines: React.FC<AnimatedLinesProps> = ({
  width = 100,
  height = 50,
  verticalRange = 10,
  lineSpacing = 10,
}) => {
  const [controlPoints, setControlPoints] = useState({
    line1: generateBoundedControlPoints(0, width, height / 2 - lineSpacing, verticalRange),
    line2: generateBoundedControlPoints(0, width, height / 2, verticalRange),
    line3: generateBoundedControlPoints(0, width, height / 2 + lineSpacing, verticalRange),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setControlPoints({
        line1: generateBoundedControlPoints(0, width, height / 2 - lineSpacing, verticalRange),
        line2: generateBoundedControlPoints(0, width, height / 2, verticalRange),
        line3: generateBoundedControlPoints(0, width, height / 2 + lineSpacing, verticalRange),
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [width, height, verticalRange, lineSpacing]);

  const lineAnimationConfig = {
    duration: 4,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop" as const,    
  };

  // Safeguard to ensure we have control points and fallback values
  const createPath = (offset: number, points: [ControlPoint, ControlPoint, ControlPoint, ControlPoint]) => {
    const [cp1, cp2, cp3, cp4] = points;
    const midX = width / 2.2;
    const midY = height / 1.5 + offset;

    // Safeguard: Ensure we have valid control points
    return `M 0 ${height / 1.5 + offset} 
            Q ${cp1?.x || 0} ${cp1?.y || height / 2}, 
              ${cp2?.x || midX} ${cp2?.y || height / 2} 
            T ${midX} ${midY} 
            Q ${cp3?.x || midX} ${cp3?.y || midY}, 
              ${cp4?.x || width} ${cp4?.y || height / 2} 
            T ${width} ${height / 2 + offset}`;
  };

  const strokeColor = useColorModeValue("#7928CA", "#1b9aaa"); // Example colors for light and dark mode
  console.log(strokeColor);
  return (
    <Box position="absolute" inset={0} pointerEvents="none" zIndex={1}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        key={JSON.stringify(controlPoints)}
      >
        {/* Line 1 with additional curves */}
        <motion.path
          d={createPath(-lineSpacing, controlPoints.line1)}
          stroke={strokeColor}
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{
            ...lineAnimationConfig,
            times: [0, 0.333, 0.667, 1],
          }}
        />
        {/* Line 2 with additional curves */}
        <motion.path
          d={createPath(0, controlPoints.line2)}
          stroke={strokeColor}
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 0, 1, 1, 0] }}
          transition={{
            ...lineAnimationConfig,
            times: [0, 0.333, 0.667, 0.833, 1],
          }}
        />
        {/* Line 3 with additional curves */}
        <motion.path
          d={createPath(lineSpacing, controlPoints.line3)}
          stroke={strokeColor}
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 0, 0, 1, 0] }}
          transition={{
            ...lineAnimationConfig,
            times: [0, 0.5, 0.667, 1, 1],
          }}
        />
      </svg>
    </Box>
  );
};

export default AnimatedLines;
