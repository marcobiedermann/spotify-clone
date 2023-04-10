/* eslint-disable jsx-a11y/alt-text */

import React from 'react';

export interface ImageProps {
  alt: string;
  height: number;
  url: string;
  width: number;
}

function Image(props: ImageProps): JSX.Element {
  const { url, ...otherProps } = props;

  return <img src={url} {...otherProps} />;
}

export default Image;
