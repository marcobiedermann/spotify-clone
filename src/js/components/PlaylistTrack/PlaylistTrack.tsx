import format from 'date-fns/format';
import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';
import Media, { MediaBody, MediaObject } from '../Media';
import styles from './PlaylistTrack.module.css';

const defaultImageSize = 48;

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
  id: string;
}

export interface PlaylistTrackProps {
  added_at: string;
  track: {
    album: Album;
    artists: Owner[];
    duration_ms: number;
    id: string;
    name: string;
    track_number: number;
  };
}

function PlaylistTrack(props: PlaylistTrackProps): JSX.Element {
  const { added_at, track } = props;

  return (
    <tr>
      <td>{track.track_number}</td>
      <td>
        <Media>
          <MediaObject>
            <Image
              url={track.album.images[0].url}
              width={defaultImageSize}
              height={defaultImageSize}
              alt={track.album.name}
            />
          </MediaObject>
          <MediaBody>
            <div className={styles.track__name}>{track.name}</div>
            <div>
              {track.artists
                .map<React.ReactNode>((artist) => (
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
        <Link to={`/albums/${track.album.id}`}>{track.album.name}</Link>
      </td>
      <td>{format(new Date(added_at), 'MMM d, y')}</td>
      <td align="right">{format(track.duration_ms, 'm:ss')}</td>
    </tr>
  );
}

export default PlaylistTrack;
