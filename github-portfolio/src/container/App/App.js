import React, { Component } from 'react';
import Profile from '../Profile/Profile';
import logo from '../../logo.svg';
import Header from '../../components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header logo={logo} />
        <Profile />
      </div>
    );
  }
}

export default App;
