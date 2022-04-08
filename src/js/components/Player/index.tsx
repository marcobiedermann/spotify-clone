import React from 'react';
import { player, player__controls } from './style.module.css';

function Player(): JSX.Element {
  return (
    <div className={player}>
      <div>
        <div>Album Name</div>
        <div>Artist</div>
      </div>
      <div className={player__controls}>
        <button type="button">Shuffle</button>
        <div>
          <button type="button">Previous</button>
          <button type="button">Play</button>
          <button type="button">Pause</button>
          <button type="button">Next</button>
        </div>
        <button type="button">Repeat</button>
      </div>
      <div>
        <div>Volume</div>
      </div>
    </div>
  );
}

export default Player;
