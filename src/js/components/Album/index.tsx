import React from 'react';
import { Link } from 'react-router-dom';
import { getYear } from 'date-fns';
import AlbumTracks from '../AlbumTracks';
import Image from '../Image';
import Media, { MediaBody, MediaObject } from '../Media';

interface Owner {
  id: string;
  name?: string;
}

interface Image {
  height: number;
  url: string;
  width: number;
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
  total: number;
}

export interface AlbumProps {
  artists: Owner[];
  id: string;
  images: Image[];
  name: string;
  tracks: Tracks;
  release_date: string;
}

function Album(props: AlbumProps): JSX.Element {
  const { artists, id, images, name, tracks, release_date } = props;

  return (
    <div>
      <Media>
        <MediaObject>
          <figure>
            {images[1] && (
              <Link to={`/albums/${id}`}>
                <Image {...images[1]} alt={name} />
              </Link>
            )}
          </figure>
        </MediaObject>
        <MediaBody>
          <h2>Album</h2>
          <h1>{name}</h1>
          {artists[0] && (
            <h3>
              <Link to={`/artists/${artists[0].id}`}>{artists[0].name}</Link> •{' '}
              <span>{getYear(new Date(release_date))}</span> • <span>{tracks.total} songs</span>
            </h3>
          )}
        </MediaBody>
      </Media>
      <AlbumTracks items={tracks.items} />
    </div>
  );
}

export default Album;
