import React, { useState } from 'react';

const SearchParams = () => {
  const [location, setLocation] = useState('Seatle, WA');

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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
