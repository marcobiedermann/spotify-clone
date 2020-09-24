import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArtistProps } from '../Artist';
import Image, { ImageProps } from '../Image';
import Tracks, { TracksProps } from '../Tracks';

export interface AlbumProps {
  artists: ArtistProps[];
  id: string;
  images: ImageProps[];
  name: string;
  tracks: TracksProps;
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
      {tracks && <Tracks {...tracks} />}
    </div>
  );
};

export default Album;
