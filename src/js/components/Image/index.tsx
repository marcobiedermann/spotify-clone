/* eslint-disable jsx-a11y/alt-text */

import React, { FC } from 'react';

export interface ImageProps {
  alt: string;
  height?: number;
  url: string;
  width?: number;
}

const Image: FC<ImageProps> = (props) => {
  const { url, ...otherProps } = props;

  return <img src={url} {...otherProps} />;
};

export default Image;
