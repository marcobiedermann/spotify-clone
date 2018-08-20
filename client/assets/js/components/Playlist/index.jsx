import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';

const Playlist = ({
  id,
  images,
  name,
  owner,
}) => (
  <figure className={styles.playlist}>
    {images[0] && (
      <Link to={`/users/${owner.id}/playlists/${id}`}>
        <img src={images[0].url} alt={name} />
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
  images: PropTypes.arrayOf(PropTypes.shape()),
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
