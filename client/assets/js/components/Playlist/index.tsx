/* eslint-disable camelcase */

import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Image, { ImageProps } from '../Image';
import { TracksProps } from '../Tracks';

interface OwnerProps {
  display_name: string;
  id: string;
}

export interface PlaylistProps {
  id: string;
  images: ImageProps[];
  name: string;
  owner: OwnerProps;
  tracks: TracksProps;
}

const Playlist: FC<PlaylistProps> = (props) => {
  const { id, images, name } = props;

  return (
    <figure>
      {images[0] && (
        <Link to={`/playlists/${id}`}>
          <Image {...images[0]} alt={name} />
        </Link>
      )}
      <figcaption>
        <Link to={`/playlists/${id}`}>{name}</Link>
      </figcaption>
    </figure>
  );
};

export default Playlist;
