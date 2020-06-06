import React from 'react';
export default function Pet({ name, animal, breed }) {
  return (
    <div>
      <h2>{name.toUpperCase()}</h2>
      <p>{animal}</p>
      <p>{breed}</p>
    </div>
  );
}
