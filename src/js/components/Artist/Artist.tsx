import React from 'react';
import Image from '../Image';

const defaultImageSize = 100;

interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

export interface ArtistProps {
  name?: string;
  id?: string;
  images?: Image[];
}

function Artist(props: ArtistProps): JSX.Element {
  const { images = [], name } = props;
  const image = images[0];

  return (
    <figure>
      {image && (
        <Image
          {...image}
          alt={name || ''}
          width={image.width || defaultImageSize}
          height={image.height || defaultImageSize}
        />
      )}
      <figcaption>
        <h2>{name}</h2>
      </figcaption>
    </figure>
  );
}

export default Artist;
