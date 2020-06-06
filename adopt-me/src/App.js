import React from 'react';
import { Router } from '@reach/router';
import { render } from 'react-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt Me!</h1>
        <Router>
          <HomePage path='/' />
          <DetailsPage path='/details/:id' />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
