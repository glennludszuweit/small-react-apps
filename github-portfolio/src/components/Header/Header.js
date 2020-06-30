import React from 'react';
import Link from '../Link/Link';
import './Header.css';

const Header = ({ logo }) => {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='Logo' />
      <Link url='https://reactjs.org/' title='Learn React' />
    </header>
  );
};

export default Header;
