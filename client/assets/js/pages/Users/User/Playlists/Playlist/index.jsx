import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Playlist from '../../../../../components/Playlist';
import Track from '../../../../../components/Track';
import * as routes from '../../../../../constants/routes';

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
        <p>Playlist</p>
        <h1>{playlist.name}</h1>
        {playlist.owner && (
          <p>
            Created by
            {' '}
            <Link to={`${routes.USERS}/${playlist.owner.id}`}>{playlist.owner.display_name}</Link>
            {' '}
            ·
            {' '}
            {playlist.tracks.total}
            {' '}
            songs
          </p>
        )}
        <button type="button">Play</button>
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
    owner: PropTypes.shape({
      display_name: PropTypes.string,
      id: PropTypes.string,
    }),
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
    owner: {
      display_name: '',
      id: '',
    },
    tracks: {
      items: [],
    },
  },
};

export default PlaylistPage;
