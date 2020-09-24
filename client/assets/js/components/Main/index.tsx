import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './style.css';

export interface MainProps {
  className?: string;
}

const Main: FC<MainProps> = (props) => {
  const { className, ...otherProps } = props;

  return <main className={classNames(className, styles.main)} {...otherProps} />;
};

export default Main;
