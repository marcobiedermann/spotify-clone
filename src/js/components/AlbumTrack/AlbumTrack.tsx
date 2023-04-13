import format from 'date-fns/format';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AlbumTrack.module.css';

interface Artist {
  name?: string;
  id?: string;
}

export interface AlbumTrackProps {
  artists?: Artist[];
  duration_ms?: number;
  /* eslint-disable-next-line react/no-unused-prop-types */
  id?: string;
  name?: string;
  track_number?: number;
}

function AlbumTrack(props: AlbumTrackProps): JSX.Element {
  const { artists = [], duration_ms = 0, name, track_number } = props;

  return (
    <tr>
      <td>{track_number}</td>
      <td>
        <div className={styles.track__name}>{name}</div>
        <div>
          {artists
            .map<React.ReactNode>((artist) => (
              <Link key={artist.id} to={`/artists/${artist.id}`}>
                {artist.name}
              </Link>
            ))
            .reduce((prev, curr) => [prev, ', ', curr])}
        </div>
      </td>
      <td align="right">{format(duration_ms, 'm:ss')}</td>
    </tr>
  );
}

export default AlbumTrack;
