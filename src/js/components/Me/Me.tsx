import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';
import styles from './Me.module.css';

interface Image {
  height: number;
  url: string;
  width: number;
}

export interface MeProps {
  className?: string;
  display_name: string;
  id: string;
  images: Image[];
}

function Me(props: MeProps): JSX.Element {
  const { className, display_name, id, images } = props;

  return (
    <div className={clsx(className, styles.me)}>
      <figure className={styles.me__image}>
        {images[0] && <Image url={images[0].url} alt={display_name} width={32} height={32} />}
      </figure>
      <Link to={`/users/${id}`}>{display_name}</Link>
    </div>
  );
}

export default Me;
