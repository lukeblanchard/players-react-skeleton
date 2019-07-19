import React, { useEffect, useState } from 'react';
import { getRoster } from '../../API/Roster';
import PlayerCard from '../PlayerCard';

const Roster = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getRoster();
      console.log(res.players);
      setPlayers(res.players);
    };
    fetchData();
  });

  return (
    <div className="container">
      <div className="row">
        {players.map((player, idx) => (
          <div className="col-lg-6" key={player.id}>
            <PlayerCard player={player} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roster;
