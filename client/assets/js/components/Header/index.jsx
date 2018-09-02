import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';

const Header = ({ children }) => (
  <header className={styles.header}>
    {children}
  </header>
);

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
