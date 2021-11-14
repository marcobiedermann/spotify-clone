import classNames from 'classnames';
import React from 'react';
import Album, { AlbumProps } from '../Album';
import styles from './style.module.css';

export interface AlbumsProps {
  className?: string;
  items?: AlbumProps[];
}

function Albums(props: AlbumsProps): JSX.Element {
  const { className, items = [] } = props;

  return (
    <ul className={classNames(className, styles.albums)}>
      {items.map((album) => (
        <li key={album.id}>
          <Album {...album} />
        </li>
      ))}
    </ul>
  );
}

export default Albums;
