import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './style.module.css';

export interface ErrorProps {
  children: ReactNode;
  className?: string;
}

function Error(props: ErrorProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <div className={classNames(className, styles.error)} {...otherProps} />;
}

export default Error;
