import React from 'react';
import { Link } from 'react-router-dom';
import AlbumTracks from '../AlbumTracks';
import Image from '../Image';

const defaultImageSize = 100;

interface Owner {
  id: string;
  name?: string;
}

interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

interface Item {
  artists: Owner[];
  duration_ms: number;
  id: string;
  name: string;
  track_number: number;
}

interface Tracks {
  items: Item[];
}

export interface AlbumProps {
  artists: Owner[];
  id: string;
  images: Image[];
  name: string;
  tracks?: Tracks;
}

function Album(props: AlbumProps): JSX.Element {
  const { artists, id, images, name, tracks } = props;
  const image = images[0];

  return (
    <div>
      <figure>
        {image && (
          <Link to={`/albums/${id}`}>
            <Image
              {...image}
              alt={name}
              width={image.width || defaultImageSize}
              height={image.height || defaultImageSize}
            />
          </Link>
        )}
        <figcaption>
          <h3>
            <Link to={`/albums/${id}`}>{name}</Link>
          </h3>
          {artists[0] && (
            <h4>
              <Link to={`/artists/${artists[0].id}`}>{artists[0].name}</Link>
            </h4>
          )}
        </figcaption>
      </figure>
      {tracks && <AlbumTracks items={tracks.items} />}
    </div>
  );
}

export default Album;
