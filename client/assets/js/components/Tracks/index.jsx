import PropTypes from 'prop-types';
import React from 'react';
import Track from '../Track';

const Tracks = ({ tracks }) => (
  <table>
    <tbody>
      {tracks.map(track => (
        <Track key={track.id} {...track} />
      ))}
    </tbody>
  </table>
);

Tracks.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
};

Tracks.defaultProps = {
  tracks: [],
};

export default Tracks;
