import React, { FC } from 'react';
import { Group, Line, Path, Text } from 'react-konva';

interface Props {
  x: number;
  y: number;
  rotation?: number;
}

export const GrandPiano: FC<Props> = ({ x, y, rotation = 0 }) => {
  const width = 100;
  const height = 80;

  return (
    <Group
      x={x}
      y={y}
      rotation={rotation}
      opacity={0.8}
    >
      <Path
        data={`
          M 0 0
          L ${width * 0.6} 0
          Q ${width} ${height * 0.25}, ${width} ${height * 0.5}
          Q ${width} ${height * 0.75}, ${width * 0.6} ${height}
          L 0 ${height}
          Z
        `}
        fill="#000000"
        stroke="#333"
        strokeWidth={2}
      />

      <Line
        points={[width * 0.6, 0, width * 0.6, height]}
        stroke="#555"
        strokeWidth={2}
      />

      <Text
        text="🎹🎹🎹"
        offsetX={-4}
        offsetY={20}
        fontSize={24}
        rotation={90}
      />
    </Group>
  );
};
