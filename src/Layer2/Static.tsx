import Konva from 'konva';
import React, { useEffect, useRef } from 'react';
import { Group, Rect, Text } from 'react-konva';

import { Doors } from '/src/components/Doors';
import { usePerson } from '/src/contexts/PersonContext';

import { STATIC_STROKE_COLOR } from '../theme';

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
    state = !(table > 25) ? 'blurred' : 'focused';
  }

  return (
    <Group
      ref={groupRef}
      opacity={state === 'blurred' ? 0.5 : 1}
    >
      <Rect
        x={40}
        y={80}
        width={280}
        height={260}
        stroke={STATIC_STROKE_COLOR}
        strokeWidth={3}
      />
      <Text
        x={34}
        y={100}
        width={300}
        align="center"
        text="Зал «Достоевский»"
        fontSize={36}
        fill="red"
        {...(state === 'focused' ? { opacity: 1 } : { opacity: 0.6 })}
      />
      <Text
        x={110}
        y={305}
        width={300}
        align="center"
        text="2 этаж"
        fontSize={36}
        {...(state === 'focused' ? { opacity: 1 } : { opacity: 0.6 })}
      />
      <Doors
        x={40}
        y={240}
        width={60}
        color={STATIC_STROKE_COLOR}
        rotate={90}
      />

      <Rect
        x={40}
        y={340}
        width={280}
        height={330}
        stroke={STATIC_STROKE_COLOR}
        strokeWidth={3}
        {...(state === 'focused' ? { fill: 'white' } : {})}
      />
      <Text
        x={46}
        y={490}
        width={300}
        align="center"
        text="Зал «Бунин»"
        fontSize={42}
        fill="red"
        {...(state === 'focused' ? { opacity: 1 } : { opacity: 0.6 })}
      />
      <Text
        x={110}
        y={635}
        width={300}
        align="center"
        text="2 этаж"
        fontSize={36}
        {...(state === 'focused' ? { opacity: 1 } : { opacity: 0.6 })}
      />
      <Doors
        x={40}
        y={500}
        width={60}
        color={STATIC_STROKE_COLOR}
        rotate={90}
      />

      <Rect
        x={40}
        y={670}
        width={280}
        height={230}
        stroke={STATIC_STROKE_COLOR}
        strokeWidth={3}
      />
      <Text
        x={34}
        y={690}
        width={300}
        align="center"
        text="Зал «Гоголь»"
        fontSize={42}
        fill="red"
        {...(state === 'focused' ? { opacity: 1 } : { opacity: 0.6 })}
      />
      <Text
        x={110}
        y={865}
        width={300}
        align="center"
        text="2 этаж"
        fontSize={36}
        {...(state === 'focused' ? { opacity: 1 } : { opacity: 0.6 })}
      />
      <Doors
        x={40}
        y={800}
        width={60}
        color={STATIC_STROKE_COLOR}
        rotate={90}
      />

      <Rect
        x={320}
        y={1120}
        width={736}
        height={280}
        stroke={STATIC_STROKE_COLOR}
        strokeWidth={3}
        {...(state === 'focused' ? { fill: 'white' } : {})}
      />
      <Text
        x={260}
        y={1130}
        width={600}
        align="center"
        text="Зал «Савва Морозов»"
        fontSize={42}
        fill="red"
        {...(state === 'focused' ? { opacity: 1 } : { opacity: 0.6 })}
      />
      <Text
        x={248}
        y={1180}
        width={300}
        align="center"
        text="2 этаж"
        fontSize={36}
        {...(state === 'focused' ? { opacity: 1 } : { opacity: 0.6 })}
      />

      <Rect
        x={112}
        y={900}
        width={208}
        height={490}
        stroke={STATIC_STROKE_COLOR}
        strokeWidth={3}
      />
      <Doors
        x={110}
        y={1296}
        width={60}
        color={STATIC_STROKE_COLOR}
        rotate={90}
      />
      <Doors
        x={216}
        y={1390}
        width={60}
        color={STATIC_STROKE_COLOR}
      />
    </Group>
  );
};
