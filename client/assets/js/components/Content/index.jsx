import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Content = ({ children }) => (
  <div className="content">
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
