import React, { ReactNode, createContext, useContext, useState } from 'react';

import type { Person } from '/src/types';

type PersonContextType = {
  person: Person | undefined;
  setPerson: (person: Person | undefined) => void;
};

const PersonContext = createContext<PersonContextType | undefined>(undefined);

export const usePerson = () => {
  const context = useContext(PersonContext);
  if (!context) {
    throw new Error('usePerson must be used within a PersonProvider');
  }
  return context;
};

export const PersonProvider = ({ children }: { children: ReactNode }) => {
  const [person, setPerson] = useState<Person | undefined>();
  return (
    <PersonContext.Provider value={{ person, setPerson }}>
      {children}
    </PersonContext.Provider>
  );
};
