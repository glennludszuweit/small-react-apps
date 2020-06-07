import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import { render } from 'react-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import ThemeContext from './context/ThemeContext';

const App = () => {
  const themeHook = useState('C0343F');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to='/'>Adopt Me!</Link>
          </header>
          <Router>
            <HomePage path='/' />
            <DetailsPage path='/details/:id' />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
