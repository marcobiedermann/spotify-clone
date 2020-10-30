import classNames from 'classnames';
import React, { FC } from 'react';
import Playlist from '../Playlist';
import styles from './style.module.css';

interface Image {
  height: number;
  url: string;
  width: number;
}

interface Item {
  id: string;
  images: Image[];
  name: string;
}

export interface PlaylistsProps {
  className?: string;
  items: Item[];
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
