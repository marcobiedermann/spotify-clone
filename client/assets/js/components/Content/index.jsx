import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.css';

class Content extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return <div className={styles.content}>{children}</div>;
  }
}

export default Content;
