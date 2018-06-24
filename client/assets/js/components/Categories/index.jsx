import PropTypes from 'prop-types';
import React from 'react';
import Category from '../Category';

const Categories = ({ categories }) => (
  <ul className="categories">
    {categories.map(category => (
      <li key={category.id}>
        <Category {...category} />
      </li>
    ))}
  </ul>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape()),
};

Categories.defaultProps = {
  categories: [],
};

export default Categories;
