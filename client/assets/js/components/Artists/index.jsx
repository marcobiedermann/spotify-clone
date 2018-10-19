import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.css';
import Artist from '../Artist';

class Artists extends PureComponent {
  static propTypes = {
    artists: PropTypes.arrayOf(PropTypes.shape),
  };

  static defaultProps = {
    artists: [],
  };

  render() {
    const { artists } = this.props;

    return (
      <ul className={styles.artists}>
        {artists.map(artist => (
          <li key={artist.id}>
            <Artist {...artist} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Artists;
