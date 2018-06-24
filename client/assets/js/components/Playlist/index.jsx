import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Playlist = ({ name, images }) => (
  <figure className="playlist">
    {images[0] && (
      <img src={images[0].url} alt={name} />
    )}
    <figcaption>
      {name}
    </figcaption>
  </figure>
);

Playlist.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape()),
  name: PropTypes.string,
};

Playlist.defaultProps = {
  images: [],
  name: '',
};

export default Playlist;
