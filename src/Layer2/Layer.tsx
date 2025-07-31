import React from 'react';
import { Group, Layer } from 'react-konva';

import { SeatingTable } from '/src/components/SeatingTable';
import { usePerson } from '/src/contexts/PersonContext';
import rawTables from '/src/floor2.json';
import type { Table } from '/src/types';

import { Static } from './Static';

const tables: Table[] = rawTables;

export const Layer2 = () => {
  const { person } = usePerson();

  let state = 'default';
  if (person) {
    const table =
      typeof person.table === 'string' ? parseInt(person.table) : person.table;
    state = !(table > 25) ? 'blurred' : 'focused';
  }

  return (
    <Layer listening={false}>
      <Static />
      <Group opacity={state === 'blurred' ? 0.5 : 1}>
        {tables.map((table) => (
          <SeatingTable
            key={table.number}
            tableNumber={table.number}
            x={table.x}
            y={table.y}
            chairCount={table.chairCount}
            selectedChair={
              person && person.table === table.number ? person.seat : undefined
            }
          />
        ))}
      </Group>
    </Layer>
  );
};
