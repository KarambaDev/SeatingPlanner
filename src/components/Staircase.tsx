import React from 'react';
import { Group, Rect } from 'react-konva';

import { STATIC_STROKE_COLOR } from '/src/theme';
import { shiftHexColor } from '/src/utils/shiftHexColor';

type StaircaseProps = {
  x: number;
  y: number;
  width: number;
  rotation?: number;
  reflect?: boolean;
};

export const Staircase: React.FC<StaircaseProps> = ({
  x,
  y,
  width,
  rotation = 0,
  reflect = false,
}) => {
  const stepDepth = width / 8;
  const groupRotation = (reflect ? 180 : 0) + rotation;
  const negativeX = -stepDepth * 16;
  const negativeY = -width * 2;
  return (
    <Group
      rotation={groupRotation}
      x={reflect ? x + negativeX : x}
      y={y}
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <Rect
          key={`h-${i}`}
          offsetX={reflect ? negativeX + i * stepDepth : i * stepDepth}
          offsetY={reflect ? negativeY : 0}
          width={stepDepth}
          height={width}
          stroke={shiftHexColor(STATIC_STROKE_COLOR, i * 2)}
        />
      ))}
    </Group>
  );
};
