import React from 'react';
import { Group, Line, Rect } from 'react-konva';

type Props = {
  color: string;
  x: number;
  y: number;
};

export const Platform: React.FC<Props> = ({ color, x, y }) => {
  return (
    <Group>
      <Line
        points={[
          x,
          y,
          x + 300,
          y,
          x + 300,
          y + 120,
          x + 260,
          y + 160,
          x + 40,
          y + 160,
          x,
          y + 120,
        ]}
        stroke={color}
        closed
      />
    </Group>
  );
};
