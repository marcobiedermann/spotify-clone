import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './style.module.css';

export interface ContentProps {
  children: ReactNode;
  className?: string;
}

function Content(props: ContentProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <div className={classNames(className, styles.content)} {...otherProps} />;
}

export default Content;
