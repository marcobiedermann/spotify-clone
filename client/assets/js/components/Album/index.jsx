import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Album = ({
  artists, id, images, name,
}) => (
  <figure className="album">
    {images[1] && (
      <Link to={`/albums/${id}`}>
        <img src={images[1].url} alt={name} />
      </Link>
    )}
    <figcaption>
      <h3>
        <Link to={`/albums/${id}`}>
          {name}
        </Link>
      </h3>
      {artists[0] && (
        <h4>
          <Link to={`/artists/${artists[0].id}`}>
            {artists[0].name}
          </Link>
        </h4>
      )}
    </figcaption>
  </figure>
);

Album.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape()),
  id: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape()),
  name: PropTypes.string,
};

Album.defaultProps = {
  artists: [],
  id: '',
  images: [],
  name: '',
};

export default Album;
