import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Main.module.css';

export interface MainProps {
  children: ReactNode;
  className?: string;
}

function Main(props: MainProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <main className={clsx(className, styles.main)} {...otherProps} />;
}

export default Main;
