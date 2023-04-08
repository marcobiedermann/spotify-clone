import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Media.module.css';

export interface MediaBodyProps {
  children: ReactNode;
  className?: string;
}

export function MediaBody(props: MediaBodyProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <div className={clsx(className, styles.media__body)} {...otherProps} />;
}

export interface MediaObjectProps {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right';
}

export function MediaObject(props: MediaObjectProps): JSX.Element {
  const { className, direction = 'left', ...otherProps } = props;

  return (
    <div
      className={clsx(className, styles.media__object, {
        [styles[`media__object--${direction}`]]: direction,
      })}
      {...otherProps}
    />
  );
}

export interface MediaProps {
  children: ReactNode;
  className?: string;
}

function Media(props: MediaProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <div className={clsx(className, styles.media)} {...otherProps} />;
}

export default Media;
