import React, { useState } from 'react';

const useDropdown = (label, defaultSate, options) => {
  const { state, setState } = useState(defaultSate);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;
  const setStateHandler = (e) => setState(e.target.value);
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={setStateHandler}
        onBlur={setStateHandler}
        disable={options.length === 0}
      >
        <option>All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
