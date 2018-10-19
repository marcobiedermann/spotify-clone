import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Category from '../Category';
import styles from './style.css';

class Categories extends PureComponent {
  static propTypes = {
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    categories: [],
  };

  render() {
    const { categories } = this.props;

    return (
      <ul className={styles.categories}>
        {categories.map(category => (
          <li key={category.id}>
            <Category {...category} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Categories;
