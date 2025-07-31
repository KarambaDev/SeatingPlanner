import React from 'react';
import { Circle, Group, Text } from 'react-konva';

type Props = {
  color: string;
  x: number;
  y: number;
  radius: number;
};

export const Fontain: React.FC<Props> = ({ color, x, y, radius }) => {
  return (
    <Group>
      <Circle
        x={x}
        y={y}
        radius={radius}
        stroke={color}
        strokeWidth={2}
      />
      <Circle
        x={x}
        y={y}
        radius={radius / 2}
        stroke={color}
        strokeWidth={1}
      />
    </Group>
  );
};
