import PropTypes from 'prop-types';
import React from 'react';
import Album from '../Album';
import styles from './style.css';

const Albums = ({ albums }) => (
  <ul className={styles.albums}>
    {albums.map(album => (
      <li key={album.id}>
        <Album {...album} />
      </li>
    ))}
  </ul>
);

Albums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape()),
};

Albums.defaultProps = {
  albums: [],
};

export default Albums;
