import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';

const Footer = ({ children }) => (
  <footer className={styles.footer}>
    {children}
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

Footer.defaultProps = {
  children: null,
};

export default Footer;
