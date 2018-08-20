import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';

const Main = ({ children }) => (
  <main className={styles.main}>
    {children}
  </main>
);

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: null,
};

export default Main;
