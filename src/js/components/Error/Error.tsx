import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Error.module.css';

export interface ErrorProps {
  children: ReactNode;
  className?: string;
}

function Error(props: ErrorProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <div className={clsx(className, styles.error)} {...otherProps} />;
}

export default Error;
