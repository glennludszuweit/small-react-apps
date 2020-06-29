import React from 'react';
import './App.css';

const api = {
  key: 'a85e39de77109814f0519b8d6bcea6ca',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const dateBuilder = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };

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
          <div className='location'>Ratingen, DE</div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>

        <div className='weather-box'>
          <div className='temperature'>18°c</div>
          <div className='weather'>Sunny</div>
        </div>
      </div>
    </div>
  );
}

export default App;
