import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Header.module.css';

export interface HeaderProps {
  children: ReactNode;
  className?: string;
}

function Header(props: HeaderProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <header className={clsx(className, styles.header)} {...otherProps} />;
}

export default Header;
