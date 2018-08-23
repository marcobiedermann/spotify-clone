import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ id, icons, name }) => (
  <figure>
    {icons[0] && (
      <Link to={`/browse/categories/${id}/playlists`}>
        <img src={icons[0].url} alt={name} />
      </Link>
    )}
    <figcaption>
      <Link to={`/browse/categories/${id}/playlists`}>
        {name}
      </Link>
    </figcaption>
  </figure>
);

Category.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
  })),
  id: PropTypes.string,
  name: PropTypes.string,
};

Category.defaultProps = {
  icons: [],
  id: '',
  name: '',
};

export default Category;
