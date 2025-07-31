import React from 'react';
import { Layer, Rect, Shape } from 'react-konva';

import { Doors } from '/src/components/Doors';
import { Staircase } from '/src/components/Staircase';
import { STATIC_STROKE_COLOR } from '/src/theme';

const width = 10;
const h = 200;
const w = 99;

export const StaticLayer = () => {
  return (
    <Layer istening={false}>
      <Staircase
        x={200}
        y={1160}
        width={80}
        rotation={90}
      />
      <Staircase
        x={230}
        y={1160}
        width={80}
        rotation={90}
        reflect
      />
      <Shape
        x={210}
        y={1000}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.lineTo(0, 0);
          context.lineTo(width, 0);
          context.lineTo(width, h);
          context.lineTo(width + w, h);
          context.lineTo(width + w, h + width);
          context.lineTo(0, h + width);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke={STATIC_STROKE_COLOR}
        strokeWidth={2}
      />
      <Doors
        x={320}
        y={1296}
        width={60}
        color={STATIC_STROKE_COLOR}
        rotate={270}
      />
    </Layer>
  );
};
