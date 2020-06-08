import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';

const Main = (props) => {
  const { children } = props;

  return <main className={styles.main}>{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: null,
};

export default Main;
