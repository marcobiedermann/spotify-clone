import classNames from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Image, { ImageProps } from '../Image';
import styles from './style.css';

export interface MeProps {
  className?: string;
  display_name: string;
  id: string;
  images: ImageProps[];
}

const Me: FC<MeProps> = (props) => {
  const { className, display_name, id, images } = props;

  return (
    <div className={classNames(className, styles.me)}>
      <figure className={styles.me__image}>
        {images[0] && <Image url={images[0].url} alt={display_name} width={32} height={32} />}
      </figure>
      <Link to={`/users/${id}`}>{display_name}</Link>
    </div>
  );
};

export default Me;
