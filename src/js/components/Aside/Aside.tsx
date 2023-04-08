import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Aside.module.css';

export interface AsideProps {
  children: ReactNode;
  className?: string;
}

function Aside(props: AsideProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <aside className={clsx(className, styles.aside, styles['aside--left'])} {...otherProps} />;
}

export default Aside;
