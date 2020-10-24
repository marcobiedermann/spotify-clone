/* eslint-disable camelcase */

import React, { FC } from 'react';
import Image, { ImageProps } from '../Image';

interface Followers {
  total: number;
}

export interface UserProps {
  display_name: string;
  followers?: Followers;
  images?: ImageProps[];
}

const User: FC<UserProps> = (props) => {
  const { display_name, followers, images } = props;

  return (
    <div>
      <h1>{display_name}</h1>
      {images[0] && (
        <figure>
          <Image url={images[0].url} alt={display_name} />
        </figure>
      )}
      {followers && <p>{followers.total} Followers</p>}
    </div>
  );
};

export default User;
