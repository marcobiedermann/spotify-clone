import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Playlist from '../../../../../components/Playlist';
import Track from '../../../../../components/Track';

class PlaylistPage extends Component {
  componentDidMount() {
    const { accessToken, fetchUserPlaylist, match } = this.props;

    fetchUserPlaylist(accessToken, '11168662039', match.params.playlist_id);
  }

  render() {
    const { playlist } = this.props;

    return (
      <div>
        <Playlist {...playlist} />
        {playlist.tracks && (
          <table>
            <tbody>
              {playlist.tracks.items.map(track => (
                <Track key={track.track.id} {...track.track} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

PlaylistPage.propTypes = {
  accessToken: PropTypes.string,
  fetchUserPlaylist: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      playlist_id: PropTypes.string,
    }),
  }),
  playlist: PropTypes.shape({
    tracks: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape),
    }),
  }),
};

PlaylistPage.defaultProps = {
  accessToken: '',
  fetchUserPlaylist: () => {},
  match: {
    params: {
      playlist_id: '',
    },
  },
  playlist: {
    tracks: {
      items: [],
    },
  },
};

export default PlaylistPage;
