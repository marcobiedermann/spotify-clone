import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './style.css';

export interface ButtonProps {
  className?: string;
  type?: 'button' | 'reset' | 'submit';
}

const Button: FC<ButtonProps> = (props) => {
  const { className, type = 'button', ...otherProps } = props;

  return <button className={classNames(className, styles.button)} type={type} {...otherProps} />;
};

export default Button;
