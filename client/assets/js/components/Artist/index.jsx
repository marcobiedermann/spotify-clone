import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';

const Artist = ({ id, images, name }) => (
  <figure className={styles.artist}>
    {images[0] && (
      <img src={images[0].url} alt={name} width={images[0].width} height={images[0].height} />
    )}
    <figcaption>
      <h2>
        {name}
      </h2>
    </figcaption>
  </figure>
);

Artist.propTypes = {
  id: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape),
  name: PropTypes.string,
};

Artist.defaultProps = {
  id: '',
  images: [],
  name: '',
};

export default Artist;
