import React from 'react';
import styles from './styles.module.scss';

const PlayerCard = ({ player }) => {
  const { first_name, last_name, rating, handedness } = player;
  return (
    <div className="card">
      <div className="card-header">
        {first_name} {last_name}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Rating: {rating}</li>
        <li className="list-group-item">Handedness: {handedness}</li>
      </ul>
    </div>
  );
};

export default PlayerCard;
