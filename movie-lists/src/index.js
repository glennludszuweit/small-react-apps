import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List';

const App = () => {
  return (
    <div>
      <h1>Movies Lists</h1>
      <List />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
