import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';

class Category extends PureComponent {
  static propTypes = {
    icons: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      }),
    ),
    id: PropTypes.string,
    name: PropTypes.string,
  };

  static defaultProps = {
    icons: [],
    id: '',
    name: '',
  };

  render() {
    const { id, icons, name } = this.props;

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
  }
}

export default Category;
