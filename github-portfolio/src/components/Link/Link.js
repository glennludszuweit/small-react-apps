import React from 'react';
import './Link.css';

const Link = ({ url, title }) => {
  return (
    <a
      href={url}
      className='App-link'
      target='_blank'
      rel='noopener noreferrer'
    >
      {title}
    </a>
  );
};

export default Link;
