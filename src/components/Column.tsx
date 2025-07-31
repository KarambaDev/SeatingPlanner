import React from 'react';
import { Circle, Group, Rect } from 'react-konva';

import { shiftHexColor } from '/src/utils/shiftHexColor';

import { CHAIR_COLOR } from '../theme';
import { Couch } from './Couch';

type ColumnProps = {
  x: number;
  y: number;
  stroke: string;
};

export const Column: React.FC<ColumnProps> = ({ x, y, stroke }) => {
  return (
    <Group>
      <Couch
        x={x}
        y={y}
        stroke={stroke}
        fill={shiftHexColor(CHAIR_COLOR, 22)}
        radius={30}
      />
      <Circle
        x={x}
        y={y}
        radius={8}
        stroke={stroke}
        strokeWidth={2}
      />
    </Group>
  );
};
