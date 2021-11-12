import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './style.module.css';

export interface AsideProps {
  className?: string;
}

const Aside: FC<AsideProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <aside className={classNames(className, styles.aside, styles['aside--left'])} {...otherProps} />
  );
};

export default Aside;
