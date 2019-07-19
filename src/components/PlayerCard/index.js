/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const PlayerCard = ({ player, clickHandler }) => {
  const {
    first_name, last_name, rating, handedness, id,
  } = player;
  return (
    <div className="card">
      <div className="card-header">
        {first_name} {last_name}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Rating: {rating}</li>
        <li className="list-group-item">Handedness: {handedness}</li>
        <li className="list-group-item">
          <button
            onClick={() => clickHandler(id)}
            className="delete btn btn-warning"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    handedness: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default PlayerCard;
