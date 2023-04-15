import format from 'date-fns/format';
import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';
import Media, { MediaBody, MediaObject } from '../Media';
import styles from './PlaylistTrack.module.css';

const defaultImageSize = 40;

interface Image {
  height: number | null;
  url: string;
  width: number | null;
}
interface Album {
  images: Image[];
  id: string;
  name: string;
}

interface Owner {
  name?: string;
  id?: string;
}

export interface PlaylistTrackProps {
  added_at?: string;
  track?: {
    album?: Album;
    artists?: Owner[];
    duration_ms?: number;
    id?: string;
    name?: string;
    track_number?: number;
  };
}

function PlaylistTrack(props: PlaylistTrackProps): JSX.Element {
  const { added_at, track } = props;
  const image = track?.album?.images[0];

  return (
    <tr>
      <td>{track?.track_number}</td>
      <td>
        <Media>
          {image && (
            <MediaObject>
              <Image
                url={image.url}
                width={defaultImageSize}
                height={defaultImageSize}
                alt={track.album?.name || ''}
              />
            </MediaObject>
          )}
          <MediaBody>
            <div className={styles.track__name}>
              <Link to={`/tracks/${track?.id}`}>{track?.name}</Link>
            </div>
            <div>
              {track?.artists
                ?.map<React.ReactNode>((artist) => (
                  <Link key={artist.id} to={`/artists/${artist.id}`}>
                    {artist.name}
                  </Link>
                ))
                .reduce((prev, curr) => [prev, ', ', curr])}
            </div>
          </MediaBody>
        </Media>
      </td>
      <td>
        <Link to={`/albums/${track?.album?.id}`}>{track?.album?.name}</Link>
      </td>
      {added_at && <td>{format(new Date(added_at), 'MMM d, y')}</td>}
      <td align="right">{format(track?.duration_ms || 0, 'm:ss')}</td>
    </tr>
  );
}

export default PlaylistTrack;
