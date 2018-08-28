import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';

const Playlist = ({
  id,
  images,
  name,
  owner,
}) => (
  <figure>
    {images[0] && (
      <Link to={`/users/${owner.id}/playlists/${id}`}>
        <Image {...images[0]} alt={name} />
      </Link>
    )}
    <figcaption>
      <Link to={`/users/${owner.id}/playlists/${id}`}>
        {name}
      </Link>
    </figcaption>
  </figure>
);

Playlist.propTypes = {
  id: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
  })),
  name: PropTypes.string,
  owner: PropTypes.shape({
    id: PropTypes.string,
  }),
};

Playlist.defaultProps = {
  id: '',
  images: [],
  name: '',
  owner: {
    id: '',
  },
};

export default Playlist;
