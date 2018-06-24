import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Header = ({ children }) => (
  <header className="header">
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
