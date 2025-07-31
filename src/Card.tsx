import React from 'react';

import { usePerson } from '/src/contexts/PersonContext';

export const Card = () => {
  const { person } = usePerson();
  if (!person) return null;
  const table =
    typeof person.table === 'string' ? parseInt(person.table) : person.table;

  return (
    <div className="card">
      <div>{`${person.first_name} ${person.last_name}`}</div>
      {/* <div>Стол № {person.table}</div> */}
      <div>{table <= 25 ? '1' : '2'} этаж</div>
      {person.comment1 && <div>{person.comment1}</div>}
      {person.comment2 && <div>{person.comment2}</div>}
    </div>
  );
};
