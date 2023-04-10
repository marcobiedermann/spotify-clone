import React from 'react';
import Image from '../Image';

const defaultImageSize = 100;

interface Followers {
  total: number;
}

interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

export interface UserProps {
  display_name: string;
  followers: Followers;
  images: Image[];
}

function User(props: UserProps): JSX.Element {
  const { display_name, followers, images } = props;
  const image = images[0];

  return (
    <div>
      <h1>{display_name}</h1>
      {image && (
        <figure>
          <Image
            {...image}
            width={image.width || defaultImageSize}
            height={image.height || defaultImageSize}
            alt={display_name}
          />
        </figure>
      )}
      <p>{followers.total} Followers</p>
    </div>
  );
}

export default User;
