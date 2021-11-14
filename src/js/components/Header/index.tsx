import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './style.module.css';

export interface HeaderProps {
  children: ReactNode;
  className?: string;
}

function Header(props: HeaderProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <header className={classNames(className, styles.header)} {...otherProps} />;
}

export default Header;
