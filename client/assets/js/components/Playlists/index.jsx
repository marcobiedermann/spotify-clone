import PropTypes from 'prop-types';
import React from 'react';
import Playlist from '../Playlist';
import './style.css';

const Playlists = ({ playlists }) => (
  <ul className="playlists">
    {playlists.map(playlist => (
      <li key={playlist.id}>
        <Playlist {...playlist} />
      </li>
    ))}
  </ul>
);

Playlists.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.shape()),
};

Playlists.defaultProps = {
  playlists: [],
};

export default Playlists;
