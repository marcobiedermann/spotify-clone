import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Image, { ImageProps } from '../Image';

export interface CategoryProps {
  icons: ImageProps[];
  id: string;
  name: string;
}

const Category: FC<CategoryProps> = (props) => {
  const { id, icons, name } = props;

  return (
    <figure>
      {icons[0] && (
        <Link to={`/browse/categories/${id}/playlists`}>
          <Image {...icons[0]} alt={name} />
        </Link>
      )}
      <figcaption>
        <Link to={`/browse/categories/${id}/playlists`}>{name}</Link>
      </figcaption>
    </figure>
  );
};

export default Category;
