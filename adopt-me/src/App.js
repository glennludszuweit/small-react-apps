import React from 'react';
import { Router, Link } from '@reach/router';
import { render } from 'react-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to='/'>Adopt Me!</Link>
        </header>
        <Router>
          <HomePage path='/' />
          <DetailsPage path='/details/:id' />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
