import PropTypes from 'prop-types';
import React from 'react';

const Category = ({ name, icons }) => (
  <figure className="category">
    <img src={icons[0].url} alt={name} />
    <figcaption>
      {name}
    </figcaption>
  </figure>
);

Category.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.shape()),
  name: PropTypes.string,
};

Category.defaultProps = {
  icons: [],
  name: '',
};

export default Category;
