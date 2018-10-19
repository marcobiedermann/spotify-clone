import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';

class Playlist extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      }),
    ),
    name: PropTypes.string,
    owner: PropTypes.shape({
      id: PropTypes.string,
    }),
  };

  static defaultProps = {
    id: '',
    images: [],
    name: '',
    owner: {
      id: '',
    },
  };

  render() {
    const {
      id, images, name, owner,
    } = this.props;

    return (
      <figure>
        {images[0] && (
          <Link to={`/users/${owner.id}/playlists/${id}`}>
            <Image {...images[0]} alt={name} />
          </Link>
        )}
        <figcaption>
          <Link to={`/users/${owner.id}/playlists/${id}`}>{name}</Link>
        </figcaption>
      </figure>
    );
  }
}

export default Playlist;
