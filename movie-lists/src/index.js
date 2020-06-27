import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List';

const App = () => {
  return (
    <div>
      <List />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
