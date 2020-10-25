import classNames from 'classnames';
import React, { FC } from 'react';
import Artist, { ArtistProps } from '../Artist';
import styles from './style.module.css';

export interface ArtistsProps {
  artists: ArtistProps[];
  className?: string;
}

const Artists: FC<ArtistsProps> = (props) => {
  const { artists, className } = props;

  return (
    <ul className={classNames(className, styles.artists)}>
      {artists.map((artist) => (
        <li key={artist.id}>
          <Artist {...artist} />
        </li>
      ))}
    </ul>
  );
};

export default Artists;
