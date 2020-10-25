import classNames from 'classnames';
import React, { FC } from 'react';
import Playlist, { PlaylistProps } from '../Playlist';
import styles from './style.module.css';

export interface PlaylistsProps {
  className?: string;
  items: PlaylistProps[];
}

const Playlists: FC<PlaylistsProps> = (props) => {
  const { className, items = [] } = props;

  return (
    <ul className={classNames(className, styles.playlists)}>
      {items.map((playlist) => (
        <li key={playlist.id}>
          <Playlist {...playlist} />
        </li>
      ))}
    </ul>
  );
};

export default Playlists;
