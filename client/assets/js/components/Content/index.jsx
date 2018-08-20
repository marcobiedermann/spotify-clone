import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';

const Content = ({ children }) => (
  <div className={styles.content}>
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node,
};

Content.defaultProps = {
  children: null,
};

export default Content;
