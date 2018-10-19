import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';
import Tracks from '../Tracks';

class Album extends PureComponent {
  static propTypes = {
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
    id: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      }),
    ),
    name: PropTypes.string,
    tracks: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape()),
    }),
  };

  static defaultProps = {
    artists: [],
    id: '',
    images: [],
    name: '',
    tracks: {
      items: [],
    },
  };

  render() {
    const {
      artists, id, images, name, tracks,
    } = this.props;

    return (
      <div>
        <figure>
          {images[1] && (
            <Link to={`/albums/${id}`}>
              <Image {...images[1]} alt={name} />
            </Link>
          )}
          <figcaption>
            <h3>
              <Link to={`/albums/${id}`}>{name}</Link>
            </h3>
            {artists[0] && (
              <h4>
                <Link to={`/artists/${artists[0].id}`}>{artists[0].name}</Link>
              </h4>
            )}
          </figcaption>
        </figure>
        {tracks && <Tracks tracks={tracks.items} />}
      </div>
    );
  }
}

export default Album;
