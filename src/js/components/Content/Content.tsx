import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Content.module.css';

export interface ContentProps {
  children: ReactNode;
  className?: string;
}

function Content(props: ContentProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <div className={clsx(className, styles.content)} {...otherProps} />;
}

export default Content;
