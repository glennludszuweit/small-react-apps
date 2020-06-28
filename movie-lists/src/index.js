import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <nav className='navbar sticky-top navbar-light bg-dark mb-3'>
        <h1 className='navbar-brand text-light'>Movies Lists</h1>
      </nav>

      <div className='container'>
        <List />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
