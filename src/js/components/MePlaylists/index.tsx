import React from 'react';
import { Link } from 'react-router-dom';
import { mePlaylists, mePlaylists__item, mePlaylists__link } from './style.module.css';

interface Playlist {
  id: string;
  name: string;
}

export interface MePlaylistsProps {
  playlists: Playlist[];
}

function MePlaylists(props: MePlaylistsProps): JSX.Element {
  const { playlists } = props;

  return (
    <ul className={mePlaylists}>
      {playlists.map((playlist) => {
        const { id, name } = playlist;

        return (
          <li key={id} className={mePlaylists__item}>
            <Link to={`/playlists/${id}`} className={mePlaylists__link}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MePlaylists;
