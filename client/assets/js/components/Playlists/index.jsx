import PropTypes from 'prop-types';
import React from 'react';
import Playlist from '../Playlist';
import styles from './style.css';

const Playlists = ({ playlists }) => (
  <ul className={styles.playlists}>
    {playlists.map(playlist => (
      <li key={playlist.id}>
        <Playlist {...playlist} />
      </li>
    ))}
  </ul>
);

Playlists.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
};

Playlists.defaultProps = {
  playlists: [],
};

export default Playlists;
