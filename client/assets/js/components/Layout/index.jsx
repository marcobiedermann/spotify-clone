import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Layout = ({ children }) => (
  <div className="layout">
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
