import React from 'react';
import { Shape } from 'react-konva';

import { CHAIR_COLOR } from '../theme';

type Props = {
  x: number;
  y: number;
  radius: number;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
};

export const Couch: React.FC<Props> = ({
  x,
  y,
  radius,
  stroke = 'black',
  fill = CHAIR_COLOR,
  strokeWidth = 1,
}) => {
  return (
    <Shape
      x={x - radius}
      y={y - radius}
      sceneFunc={(context, shape) => {
        context.beginPath();
        context.arc(0, 0, radius, 0, Math.PI / 2, false);
        context.arc(0, 2 * radius, radius, (3 * Math.PI) / 2, 0, false);
        context.arc(
          2 * radius,
          2 * radius,
          radius,
          Math.PI,
          -Math.PI / 2,
          false,
        );
        context.arc(2 * radius, 0, radius, Math.PI / 2, Math.PI, false);
        context.lineTo(radius, 0);
        context.lineTo(2 * radius, radius);
        context.lineTo(radius, 2 * radius);
        context.lineTo(0, radius);
        context.closePath();
        context.fillStrokeShape(shape);
      }}
      stroke={stroke}
      fill={fill}
      strokeWidth={strokeWidth}
    />
  );
};
