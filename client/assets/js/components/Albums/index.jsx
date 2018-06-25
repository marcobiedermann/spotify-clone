import PropTypes from 'prop-types';
import React from 'react';
import Album from '../Album';
import './style.css';

const Albums = ({ albums }) => (
  <ul className="albums">
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
