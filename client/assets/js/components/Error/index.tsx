import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './style.css';

export interface ErrorProps {
  className?: string;
}

const Error: FC<ErrorProps> = (props) => {
  const { className, ...otherProps } = props;

  return <div className={classNames(className, styles.error)} {...otherProps} />;
};

export default Error;
