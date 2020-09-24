import React, { FC } from 'react';
import Image, { ImageProps } from '../Image';

export interface ArtistProps {
  name: string;
  id: string;
  images: ImageProps[];
}

const Artist: FC<ArtistProps> = (props) => {
  const { images, name } = props;

  return (
    <figure>
      {images[0] && <Image {...images[0]} alt={name} />}
      <figcaption>
        <h2>{name}</h2>
      </figcaption>
    </figure>
  );
};

export default Artist;
