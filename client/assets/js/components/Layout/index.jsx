import PropTypes from 'prop-types';
import React from 'react';
import Header from '../Header';
import './style.css';

const Layout = ({ children }) => (
  <div className="layout">
    <Header>
      Header
    </Header>
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
