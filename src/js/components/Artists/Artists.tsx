import clsx from 'clsx';
import React from 'react';
import Artist, { ArtistProps } from '../Artist';
import styles from './Artists.module.css';

export interface ArtistsProps {
  artists?: ArtistProps[];
  className?: string;
}

function Artists(props: ArtistsProps): JSX.Element {
  const { artists = [], className } = props;

  return (
    <ul className={clsx(className, styles.artists)}>
      {artists.map((artist) => (
        <li key={artist.id}>
          <Artist {...artist} />
        </li>
      ))}
    </ul>
  );
}

export default Artists;
