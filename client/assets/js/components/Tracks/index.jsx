import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Track from '../Track';

class Tracks extends PureComponent {
  static propTypes = {
    tracks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    tracks: [],
  };

  render() {
    const { tracks } = this.props;

    return (
      <table>
        <tbody>
          {tracks.map((track) => (
            <Track key={track.id} {...track} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Tracks;
