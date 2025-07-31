import Konva from 'konva';
import React, { useEffect, useRef } from 'react';
import { Group, Rect, Text } from 'react-konva';

import { Column } from '/src/components/Column';
import { Doors } from '/src/components/Doors';
import { Fontain } from '/src/components/Fontain';
import { GrandPiano } from '/src/components/GrandPiano';
import { Platform } from '/src/components/Platform';
import { usePerson } from '/src/contexts/PersonContext';
import { STATIC_STROKE_COLOR } from '/src/theme';

const columns = [
  [886, 352],
  [886, 786],
  [530, 786],
  [530, 352],
];

export const Static = () => {
  const groupRef = useRef<Konva.Group>(null);
  const { person } = usePerson();

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.cache();
    }
  }, []);

  let state = 'default';
  if (person) {
    const table =
      typeof person.table === 'string' ? parseInt(person.table) : person.table;
    state = table > 25 ? 'blurred' : 'focused';
  }

  return (
    <Group
      ref={groupRef}
      opacity={state === 'blurred' ? 0.5 : 1}
    >
      <Rect
        x={320}
        y={50}
        width={736}
        height={1070}
        stroke={STATIC_STROKE_COLOR}
        strokeWidth={3}
        {...(state === 'focused' ? { fill: 'white' } : {})}
      />
      <Text
        x={560}
        y={250}
        width={300}
        align="center"
        text="Зал «Метрополь»"
        fontSize={42}
        fill="red"
        {...(state === 'focused' ? { opacity: 1 } : { opacity: 0.6 })}
      />
      <Doors
        x={700}
        y={1120}
        color={STATIC_STROKE_COLOR}
      />
      <Platform
        color={STATIC_STROKE_COLOR}
        x={550}
        y={50}
      />
      <Fontain
        color={STATIC_STROKE_COLOR}
        x={706}
        y={582}
        radius={80}
      />
      <GrandPiano
        x={1000}
        y={160}
        rotation={130}
      />
      {columns.map(([x, y], i) => (
        <Column
          key={i}
          x={x}
          y={y}
          stroke={STATIC_STROKE_COLOR}
        />
      ))}
    </Group>
  );
};
