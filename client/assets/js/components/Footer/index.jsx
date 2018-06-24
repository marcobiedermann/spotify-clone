import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Footer = ({ children }) => (
  <footer className="footer">
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
