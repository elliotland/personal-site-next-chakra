import React, { useState, useEffect, useCallback, useRef } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

interface ControlPoint {
  x: number;
  y: number;
}

interface Line {
  id: number;
  points: ControlPoint[];
  offset: number;
  createdAt: number;
}

const generateControlPoints = (
  startX: number,
  endX: number,
  centerY: number,
  verticalRange: number
): ControlPoint[] => {
  return Array(4).fill(0).map((_, index) => ({
    x: startX + (endX - startX) * ((index + 1) / 5 + Math.random() * 0.1),
    y: centerY + (Math.random() - 0.5) * verticalRange
  }));
};

interface AnimatedLinesProps {
  width?: number;
  height?: number;
  verticalRange?: number;
  lineSpacing?: number;
  maxLines?: number;
  lineInterval?: number;
  lineDuration?: number;
}

const AnimatedLines: React.FC<AnimatedLinesProps> = ({
  width = 100,
  height = 50,
  verticalRange = 10,
  lineSpacing = 10,
  maxLines = 3,
  lineInterval = 2000,
  lineDuration = 4000,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const nextIdRef = useRef(0);

  const createNewLine = useCallback(() => {
    const offset = (Math.random() - 0.5) * lineSpacing * 2;
    const newLineId = nextIdRef.current;
    nextIdRef.current += 1;
    return {
      id: newLineId,
      points: generateControlPoints(0, width, height / 2, verticalRange),
      offset,
      createdAt: Date.now()
    };
  }, [width, height, verticalRange, lineSpacing]);

  const addLine = useCallback(() => {
    setLines(prevLines => {
      const newLines = [...prevLines, createNewLine()];
      return newLines.slice(-maxLines);
    });
  }, [maxLines, createNewLine]);

  const removeLine = useCallback((lineId: number) => {
    setLines(prevLines => prevLines.filter(line => line.id !== lineId));
  }, []);

  useEffect(() => {
    setIsClient(true);
    
    addLine();

    const addInterval = setInterval(addLine, lineInterval);

    const removeInterval = setInterval(() => {
      const now = Date.now();
      setLines(prevLines => prevLines.filter(line => now - line.createdAt < lineDuration));
    }, 1000); 

    return () => {
      clearInterval(addInterval);
      clearInterval(removeInterval);
    };
  }, [addLine, lineInterval, lineDuration]);

  const createPath = useCallback((points: ControlPoint[], offset: number) => {
    const [cp1, cp2, cp3, cp4] = points;
    const midX = width / 2.2;
    const midY = height / 1.5 + offset;

    return `M 0 ${height / 1.5 + offset} 
            Q ${cp1.x} ${cp1.y}, 
              ${cp2.x} ${cp2.y} 
            T ${midX} ${midY} 
            Q ${cp3.x} ${cp3.y}, 
              ${cp4.x} ${cp4.y} 
            T ${width} ${height / 2 + offset}`;
  }, [width, height]);

  const strokeColor = useColorModeValue("#7928CA", "#1b9aaa");

  return (
    <Box position="absolute" inset={0} pointerEvents="none" zIndex={1}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <AnimatePresence>
          {isClient && lines.map(line => (
            <motion.path
              key={line.id}
              d={createPath(line.points, line.offset)}
              stroke={strokeColor}
              strokeWidth="0.1"
              fill="none"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                pathLength: {
                  duration: lineDuration / 1000,
                  ease: "easeInOut"
                },
                opacity: {
                  duration: 0.8,
                  delay: (lineDuration - 500) / 1000
                }
              }}
              onAnimationComplete={() => {
                if (line.createdAt + lineDuration < Date.now()) {
                  removeLine(line.id);
                }
              }}
            />
          ))}
        </AnimatePresence>
      </svg>
    </Box>
  );
};

export default AnimatedLines;