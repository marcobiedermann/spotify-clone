import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';

const Error = ({ children }) => (
  <div className={styles.error}>{children}</div>
);

Error.propTypes = {
  children: PropTypes.node,
};

Error.defaultProps = {
  children: null,
};

export default Error;
