/* eslint-disable react/button-has-type */

import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './style.module.css';

export interface ButtonProps {
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  children: ReactNode;
}

function Button(props: ButtonProps): JSX.Element {
  const { className, type = 'button', ...otherProps } = props;

  return <button className={classNames(className, styles.button)} type={type} {...otherProps} />;
}

export default Button;
