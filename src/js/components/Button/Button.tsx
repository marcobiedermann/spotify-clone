import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  children: ReactNode;
}

function Button(props: ButtonProps): JSX.Element {
  const { className, type = 'button', ...otherProps } = props;

  return <button className={clsx(className, styles.button)} type={type} {...otherProps} />;
}

export default Button;
