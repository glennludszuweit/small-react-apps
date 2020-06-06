import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from '../components/Results';
import useDropdown from '../hooks/useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seatle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    // setBreed('');
    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  const setLocationHandler = (e) => setLocation(e.target.value);

  return (
    <div className='search-params'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
