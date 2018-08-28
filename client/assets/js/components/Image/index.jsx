import PropTypes from 'prop-types';
import React from 'react';

const Image = ({
  alt,
  height,
  url,
  width,
}) => (
  <img
    alt={alt}
    height={height}
    src={url}
    width={width}
  />
);

Image.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.number,
  url: PropTypes.string,
  width: PropTypes.number,
};

Image.defaultProps = {
  alt: '',
  height: 0,
  url: '',
  width: 0,
};

export default Image;
