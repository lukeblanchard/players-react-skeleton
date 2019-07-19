import React, { useEffect, useState } from 'react';
import { getRoster } from '../../API/Roster';
import { deletePlayer } from '../../API/Player';
import PlayerCard from '../PlayerCard';

const Roster = () => {
  const [players, setPlayers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      const fetchData = async () => {
        const res = await getRoster();
        setPlayers(res.players);
      };
      fetchData();
    },
    [count]
  );

  const clickHandler = async id => {
    await deletePlayer(id);
    setCount(players.length);
  };

  return (
    <div className="container">
      <div className="col-md text-center">
        <h1>Roster</h1>
        <a className="btn btn-primary" href="/player/new">
          Add Player
        </a>
      </div>
      <div className="row">
        {players.map(player => (
          <div className="col-lg-6" key={player.id}>
            <PlayerCard player={player} clickHandler={clickHandler} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roster;
