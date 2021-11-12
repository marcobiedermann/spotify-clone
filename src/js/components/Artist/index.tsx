import React, { FC } from 'react';
import Image from '../Image';

interface Image {
  height: number;
  url: string;
  width: number;
}

export interface ArtistProps {
  name: string;
  id: string;
  images: Image[];
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
