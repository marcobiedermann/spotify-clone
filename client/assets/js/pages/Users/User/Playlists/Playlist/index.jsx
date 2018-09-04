import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchUserPlaylist } from '../../../../../actions/users';
import Button from '../../../../../components/Button';
import Loader from '../../../../../components/Loader';
import Playlist from '../../../../../components/Playlist';
import Track from '../../../../../components/Track';
import * as routes from '../../../../../constants/routes';

export class PlaylistPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchUserPlaylist,
      match,
    } = this.props;

    fetchUserPlaylist(accessToken, '11168662039', match.params.playlist_id);
  }

  render() {
    const {
      isLoading,
      playlist,
    } = this.props;

    return (
      <div>
        <Helmet>
          <title>Playlist</title>
        </Helmet>
        {isLoading ? (
          <Loader />
        ) : (
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
            <p>
              <Button>Play</Button>
            </p>
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
        )}
      </div>
    );
  }
}

PlaylistPage.propTypes = {
  accessToken: PropTypes.string,
  fetchUserPlaylist: PropTypes.func,
  isLoading: PropTypes.bool,
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
  isLoading: false,
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

const mapStateToProps = state => ({
  ...state,
  playlist: state.users.playlist,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchUserPlaylist,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistPage);
