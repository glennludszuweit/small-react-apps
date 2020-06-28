import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ movie }) => {
  return (
    <div className='card m-2'>
      <div className='card-img-top'>
        <img
          src={movie.img.src}
          alt={movie.img.alt}
          width='100%'
          height='500'
        />
      </div>
      <div className='card-body'>
        <h4>{movie.title}</h4>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`Ranking: ${movie.ranking}`}</li>
        <li className='list-group-item'>{`Released: ${movie.year}`}</li>
        <li className='list-group-item'>{`Distributor: ${movie.distributor}`}</li>
        <li className='list-group-item'>{`Amount: ${movie.amount}`}</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    distributor: PropTypes.string,
    year: PropTypes.number,
    amount: PropTypes.string,
    img: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    ranking: PropTypes.number,
  }).isRequired,
};

export default Card;
