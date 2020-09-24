import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './style.css';

export interface ContentProps {
  className?: string;
}

const Content: FC<ContentProps> = (props) => {
  const { className, ...otherProps } = props;

  return <div className={classNames(className, styles.content)} {...otherProps} />;
};

export default Content;
