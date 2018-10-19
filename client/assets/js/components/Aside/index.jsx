import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.css';

class Aside extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return (
      <aside className={classNames(styles.aside, styles['aside--left'])}>
        {children}
      </aside>
    );
  }
}

export default Aside;
