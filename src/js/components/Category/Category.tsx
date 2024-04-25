import { Link } from 'react-router-dom';
import Image from '../Image';

const defaultIconSize = 100;

interface Icon {
  height: number | null;
  url: string;
  width: number | null;
}

export interface CategoryProps {
  icons: Icon[];
  id: string;
  name: string;
}

function Category(props: CategoryProps): JSX.Element {
  const { id, icons, name } = props;
  const icon = icons[0];

  return (
    <figure>
      {icons[0] && (
        <Link to={`/browse/categories/${id}/playlists`}>
          <Image
            {...icon}
            alt={name}
            width={icon.width || defaultIconSize}
            height={icon.height || defaultIconSize}
          />
        </Link>
      )}
      <figcaption>
        <Link to={`/browse/categories/${id}/playlists`}>{name}</Link>
      </figcaption>
    </figure>
  );
}

export default Category;
