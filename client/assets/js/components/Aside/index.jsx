import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Aside = ({ children }) => (
  <aside className="aside aside--left">
    {children}
  </aside>
);

Aside.propTypes = {
  children: PropTypes.node,
};

Aside.defaultProps = {
  children: null,
};

export default Aside;
