import clsx from 'clsx';
import Album, { AlbumProps } from '../Album';
import styles from './Albums.module.css';

export interface AlbumsProps {
  className?: string;
  items: AlbumProps[];
}

function Albums(props: AlbumsProps): JSX.Element {
  const { className, items } = props;

  return (
    <ul className={clsx(className, styles.albums)}>
      {items.map((album) => (
        <li key={album.id}>
          <Album {...album} />
        </li>
      ))}
    </ul>
  );
}

export default Albums;
