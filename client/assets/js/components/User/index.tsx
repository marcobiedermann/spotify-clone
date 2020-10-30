import React, { FC } from 'react';
import Image from '../Image';

interface Followers {
  total: number;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

export interface UserProps {
  display_name: string;
  followers?: Followers;
  images?: Image[];
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
