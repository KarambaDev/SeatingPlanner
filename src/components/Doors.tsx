import React from 'react';
import { Arc, Group, Line } from 'react-konva';

import { shiftHexColor } from '/src/utils/shiftHexColor';

const openAngle = 90;

type Props = {
  x: number; // центр дверного проёма
  y: number;
  color: string;
  width?: number; // ширина всей двери
  rotate?: number;
};

export const Doors: React.FC<Props> = ({
  x,
  y,
  width = 80,
  color,
  rotate = 0,
}) => {
  const half = width / 2;

  return (
    <Group
      x={x}
      y={y}
      rotation={rotate}
    >
      <Arc
        x={-half}
        y={0}
        innerRadius={0}
        outerRadius={half}
        angle={openAngle}
        rotation={-openAngle}
        stroke={shiftHexColor(color, 22)}
      />
      <Arc
        x={half}
        y={0}
        innerRadius={0}
        outerRadius={half}
        angle={openAngle}
        rotation={180}
        stroke={shiftHexColor(color, 22)}
      />
      <Line
        points={[-half, 0, -half, -half]}
        stroke={shiftHexColor(color, -66)}
        strokeWidth={2}
      />
      <Line
        points={[half, 0, half, -half]}
        stroke={shiftHexColor(color, -66)}
        strokeWidth={2}
      />
      <Line
        points={[-half, 0, half, 0]}
        stroke={shiftHexColor(color, 44)}
        strokeWidth={1}
      />
    </Group>
  );
};
