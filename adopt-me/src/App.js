import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Tony',
      animal: 'Dog',
      breed: 'Patterdale',
    }),
    React.createElement(Pet, {
      name: 'Missy',
      animal: 'Cat',
      breed: 'British Blue',
    }),
    React.createElement(Pet, {
      name: 'Talis',
      animal: 'Rooster',
      breed: 'Mixed',
    }),
  ]);
};

render(React.createElement(App), document.getElementById('root'));
