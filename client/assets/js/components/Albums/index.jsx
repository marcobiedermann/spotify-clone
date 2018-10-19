import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Album from '../Album';
import styles from './style.css';

class Albums extends PureComponent {
  static propTypes = {
    albums: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    albums: [],
  };

  render() {
    const { albums } = this.props;

    return (
      <ul className={styles.albums}>
        {albums.map(album => (
          <li key={album.id}>
            <Album {...album} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Albums;
