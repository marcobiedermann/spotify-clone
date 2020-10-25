import classNames from 'classnames';
import React, { FC } from 'react';
import Album, { AlbumProps } from '../Album';
import styles from './style.css';

export interface AlbumsProps {
  className?: string;
  items: AlbumProps[];
}

const Albums: FC<AlbumsProps> = (props) => {
  const { className, items } = props;

  return (
    <ul className={classNames(className, styles.albums)}>
      {items.map((album) => (
        <li key={album.id}>
          <Album {...album} />
        </li>
      ))}
    </ul>
  );
};

export default Albums;
