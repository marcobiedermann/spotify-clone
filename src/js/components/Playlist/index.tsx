import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';

interface Image {
  height: number;
  url: string;
  width: number;
}

export interface PlaylistProps {
  id: string;
  images: Image[];
  name: string;
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
