import { Link } from 'react-router-dom';
import Image from '../Image';

const defaultImageSize = 100;

interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

export interface PlaylistProps {
  id?: string;
  images?: Image[];
  name?: string;
}

function Playlist(props: PlaylistProps): JSX.Element {
  const { id, images = [], name } = props;
  const image = images[0];

  return (
    <figure>
      {image && (
        <Link to={`/playlists/${id}`}>
          <Image
            {...image}
            alt={name || ''}
            width={image.width || defaultImageSize}
            height={image.height || defaultImageSize}
          />
        </Link>
      )}
      <figcaption>
        <Link to={`/playlists/${id}`}>{name}</Link>
      </figcaption>
    </figure>
  );
}

export default Playlist;
