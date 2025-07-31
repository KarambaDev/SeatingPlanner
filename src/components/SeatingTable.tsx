import React, { FC } from 'react';
import { Circle, Group, Rect, Text } from 'react-konva';

import { CHAIR_COLOR, DYNAMIC_STROKE_COLOR, SELECTED_COLOR } from '/src/theme';
import { shiftHexColor } from '/src/utils/shiftHexColor';

type SeatingTableProps = {
  tableNumber: number | string;
  tableName?: string;
  chairCount: number;
  x?: number;
  y?: number;
  radius?: number;
  selectedChair?: number;
};

export const SeatingTable: FC<SeatingTableProps> = ({
  tableNumber,
  tableName,
  chairCount,
  x = 200,
  y = 200,
  radius = 36,
  selectedChair,
}) => {
  const chairWidth = 12;
  const chairHeight = 20;
  const chairDistance = radius + 10;

  const chairs = Array.from({ length: chairCount }, (_, i) => {
    const angle = (i / chairCount) * Math.PI * 2;
    const chairX = x + Math.cos(angle) * chairDistance;
    const chairY = y + Math.sin(angle) * chairDistance;
    const deg = (angle * 180) / Math.PI + 90;
    return (
      <Group
        key={i}
        x={chairX}
        y={chairY}
        rotation={deg}
      >
        {/* Спинка */}
        <Rect
          x={-chairWidth / 2}
          y={-chairHeight / 8}
          width={chairWidth}
          height={chairHeight / 8}
          fill="white"
          stroke={selectedChair === i ? SELECTED_COLOR : DYNAMIC_STROKE_COLOR}
          strokeWidth={1}
          perfectDrawEnabled={false}
        />
        {/* Сидушка */}
        <Rect
          x={-chairWidth / 2}
          y={0}
          width={chairWidth}
          height={chairHeight / 2}
          // fill={
          //   selectedChair === i
          //     ? shiftHexColor(SELECTED_COLOR, 160)
          //     : CHAIR_COLOR
          // }
          fill={CHAIR_COLOR}
          stroke={selectedChair === i ? SELECTED_COLOR : DYNAMIC_STROKE_COLOR}
          strokeWidth={1}
          perfectDrawEnabled={false}
        />
      </Group>
    );
  });

  return (
    <Group>
      {/* Стол */}
      <Circle
        x={x}
        y={y}
        radius={radius}
        fill={selectedChair ? shiftHexColor(SELECTED_COLOR, 200) : '#ffffff'}
        stroke={selectedChair ? SELECTED_COLOR : DYNAMIC_STROKE_COLOR}
        strokeWidth={2}
        perfectDrawEnabled={false}
      />

      {/* Номер стола */}
      <Text
        x={x - radius}
        y={tableName ? y - 20 : y - 12}
        width={radius * 2}
        align="center"
        text={`${tableNumber}${tableName ? '\n' + tableName : ''}`}
        fontSize={tableName ? 20 : 32}
        fill="black"
      />

      {/* Стулья */}
      {chairs}
    </Group>
  );
};
