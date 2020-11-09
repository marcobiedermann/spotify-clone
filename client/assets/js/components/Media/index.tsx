import classNames from 'classnames';
import React, { FC, HTMLAttributes } from 'react';
import styles from './style.module.css';

export type MediaBodyProps = HTMLAttributes<HTMLDivElement>;

export const MediaBody: FC<MediaBodyProps> = (props) => {
  const { className, ...otherProps } = props;

  return <div className={classNames(className, styles.media__body)} {...otherProps} />;
};

export interface MediaObjectProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'left' | 'right';
}

export const MediaObject: FC<MediaObjectProps> = (props) => {
  const { className, direction = 'left', ...otherProps } = props;

  return (
    <div
      className={classNames(className, styles.media__object, {
        [`media__object--${direction}`]: direction,
      })}
      {...otherProps}
    />
  );
};

export type MediaProps = HTMLAttributes<HTMLDivElement>;

const Media: FC<MediaProps> = (props) => {
  const { className, ...otherProps } = props;

  return <div className={classNames(className, styles.media)} {...otherProps} />;
};

export default Media;
