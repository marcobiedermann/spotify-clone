import PropTypes from 'prop-types';
import React from 'react';
import Track from '../Track';
import styles from './style.css';

const Tracks = ({ tracks }) => (
  <table className={styles.tracks}>
    <tbody>
      {tracks.map(track => (
        <Track key={track.id} {...track} />
      ))}
    </tbody>
  </table>
);

Tracks.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape()),
};

Tracks.defaultProps = {
  tracks: [],
};

export default Tracks;
