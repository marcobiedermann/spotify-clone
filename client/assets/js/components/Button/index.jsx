import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';

const Button = ({ children }) => (
  <button
    className={styles.button}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: null,
};

export default Button;
