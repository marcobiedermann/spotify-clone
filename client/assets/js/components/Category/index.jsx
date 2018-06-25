import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Category = ({ id, icons, name }) => (
  <figure className="category">
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
  id: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.shape()),
  name: PropTypes.string,
};

Category.defaultProps = {
  id: '',
  icons: [],
  name: '',
};

export default Category;
