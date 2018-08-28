import PropTypes from 'prop-types';
import React from 'react';
import Image from '../Image';

const Artist = ({ images, name }) => (
  <figure>
    {images[0] && (
      <Image {...images[0]} alt={name} />
    )}
    <figcaption>
      <h2>
        {name}
      </h2>
    </figcaption>
  </figure>
);

Artist.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    height: PropTypes.number,
    url: PropTypes.string,
    width: PropTypes.number,
  })),
  name: PropTypes.string,
};

Artist.defaultProps = {
  images: [],
  name: '',
};

export default Artist;
