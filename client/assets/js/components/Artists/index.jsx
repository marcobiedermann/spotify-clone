import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';
import Artist from '../Artist';

const Artists = ({ artists }) => (
  <ul className={styles.artists}>
    {artists.map(artist => (
      <li key={artist.id}>
        <Artist {...artist} />
      </li>
    ))}
  </ul>
);

Artists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape),
};

Artists.defaultProps = {
  artists: [],
};

export default Artists;
