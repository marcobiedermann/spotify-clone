import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';

const Aside = ({ children }) => (
  <aside className={classNames(styles.aside, styles['aside--left'])}>
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
