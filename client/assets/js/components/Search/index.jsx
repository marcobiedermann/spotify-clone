import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';

const Search = ({ onSubmit }) => (
  <form
    className={styles.search}
    onSubmit={onSubmit}
  >
    <input
      className={styles.search__input}
      type="search"
    />
  </form>
);

Search.propTypes = {
  onSubmit: PropTypes.func,
};

Search.defaultProps = {
  onSubmit: () => {},
};

export default Search;
