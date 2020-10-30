import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';
import Tracks from '../Tracks';

interface Artist {
  id: string;
  name: string;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface Item {
  duration_ms: number;
  id: string;
  name: string;
  track_number: number;
}

interface Tracks {
  items: Item[];
}

export interface AlbumProps {
  artists: Artist[];
  id: string;
  images: Image[];
  name: string;
  tracks?: Tracks;
}

const Album: FC<AlbumProps> = (props) => {
  const { artists, id, images, name, tracks } = props;

  return (
    <div>
      <figure>
        {images[1] && (
          <Link to={`/albums/${id}`}>
            <Image {...images[1]} alt={name} />
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
      {tracks && <Tracks items={tracks.items} />}
    </div>
  );
};

export default Album;
