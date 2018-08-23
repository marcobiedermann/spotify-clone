import PropTypes from 'prop-types';
import React from 'react';

const Artist = ({ images, name }) => (
  <figure>
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
