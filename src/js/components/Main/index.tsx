import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './style.module.css';

export interface MainProps {
  children: ReactNode;
  className?: string;
}

function Main(props: MainProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <main className={classNames(className, styles.main)} {...otherProps} />;
}

export default Main;
