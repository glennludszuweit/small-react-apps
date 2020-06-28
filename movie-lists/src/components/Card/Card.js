import React from 'react';

function Card({ movie }) {
  return (
    <div className='card'>
      <div className='card-img-top'>
        <img src={movie.img.src} alt={movie.img.alt} width='200' />
      </div>
      <div className='card-body'>
        <h4>{`#${movie.ranking} - ${movie.title}(${movie.year})`}</h4>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`Distributor: ${movie.distributor}`}</li>
        <li className='list-group-item'>{`Amount: ${movie.amount}`}</li>
      </ul>
    </div>
  );
}

export default Card;
