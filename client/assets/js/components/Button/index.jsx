import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.css';

class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return (
      <button className={styles.button} type="button">
        {children}
      </button>
    );
  }
}

export default Button;
