import React, { useRef, useState } from 'react';

import { usePerson } from '/src/contexts/PersonContext';
import guests from '/src/guests.json';
import { useOutsideClick } from '/src/hooks/useOutsideClick';

import { CloseIcon } from './components/icons/CloseIcon';
import { SearchIcon } from './components/icons/SearchIcon';
import type { Person } from './types';

export const Search = () => {
  const dropdownRef = useRef<HTMLUListElement>(null);
  const { setPerson } = usePerson();
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState<Person[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useOutsideClick(dropdownRef, () => setShowDropdown(false));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.length >= 3) {
      const results = guests.filter((p) =>
        `${p.first_name} ${p.last_name}`
          .toLowerCase()
          .includes(val.toLowerCase()),
      );
      setFiltered(results);
      setShowDropdown(true);
    } else {
      setFiltered([]);
      setShowDropdown(false);
    }
  };

  const handleSelect = (person: Person) => {
    setPerson(person);
    setQuery(`${person.first_name} ${person.last_name}`);
    setShowDropdown(false);
  };

  const clear = () => {
    setQuery('');
    setFiltered([]);
    setShowDropdown(false);
    setPerson(undefined);
  };

  return (
    <div id="search">
      {showDropdown && filtered.length > 0 && (
        <ul
          className="dropdown"
          ref={dropdownRef}
        >
          {filtered.map((p, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(p)}
            >
              {p.first_name} {p.last_name}
            </li>
          ))}
        </ul>
      )}
      <div className="input-wrapper">
        <span className="icon search-icon">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Поиск по имени..."
          value={query}
          onChange={handleChange}
          onFocus={() => query && setShowDropdown(true)}
        />
        {query && (
          <span
            className="icon clear-icon"
            onClick={clear}
          >
            <CloseIcon />
          </span>
        )}
      </div>
    </div>
  );
};
