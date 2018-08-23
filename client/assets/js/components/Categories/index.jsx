import PropTypes from 'prop-types';
import React from 'react';
import Category from '../Category';
import styles from './style.css';

const Categories = ({ categories }) => (
  <ul className={styles.categories}>
    {categories.map(category => (
      <li key={category.id}>
        <Category {...category} />
      </li>
    ))}
  </ul>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
};

Categories.defaultProps = {
  categories: [],
};

export default Categories;
