import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ children }) => (
  <header>
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
