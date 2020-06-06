import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
  const [location, setLocation] = useState('Seatle, WA');
  const [animal, setAnimal] = useState('dog');

  const setLocationHandler = (e) => setLocation(e.target.value);
  const setAnimalHandler = (e) => setAnimal(e.target.value);

  return (
    <div className='search-params'>
      <h1>{location}</h1>
      <form>
        <label htmlFor='localtion'>
          Location
          <input
            id='location'
            value={location}
            placeholder='Location'
            onChange={setLocationHandler}
            onBlur={setLocationHandler}
          />
        </label>

        <label htmlFor='animal'>
          Animal
          <select
            id='animal'
            value={animal}
            onChange={setAnimalHandler}
            onBlur={setAnimalHandler}
          >
            <option>All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
