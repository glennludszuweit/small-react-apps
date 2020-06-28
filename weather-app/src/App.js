import React from 'react';
import './App.css';

const api = {
  key: 'a85e39de77109814f0519b8d6bcea6ca',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  return (
    <div className='app'>
      <div className='main'>
        <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='Search City ...'
          />
        </div>
        <div className='location-box'>
          <div className='location'></div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
