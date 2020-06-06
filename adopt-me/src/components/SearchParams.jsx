import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from '../hooks/useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seatle, WA');
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown] = useDropdown('Breed', '', breeds);
  const [breeds, setBreeds] = useState([]);

  const setLocationHandler = (e) => setLocation(e.target.value);

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

        <AnimalDropdown />
        <BreedDropdown />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
