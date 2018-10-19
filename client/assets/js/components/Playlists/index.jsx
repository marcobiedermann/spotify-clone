import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Playlist from '../Playlist';
import styles from './style.css';

class Playlists extends PureComponent {
  static propTypes = {
    playlists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    playlists: [],
  };

  render() {
    const { playlists } = this.props;

    return (
      <ul className={styles.playlists}>
        {playlists.map(playlist => (
          <li key={playlist.id}>
            <Playlist {...playlist} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Playlists;
