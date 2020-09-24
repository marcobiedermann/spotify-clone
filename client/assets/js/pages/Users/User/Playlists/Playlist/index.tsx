import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link, RouteChildrenProps, useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchUserPlaylist } from '../../../../../actions/users';
import Button from '../../../../../components/Button';
import Error from '../../../../../components/Error';
import Loader from '../../../../../components/Loader';
import Playlist, { PlaylistProps } from '../../../../../components/Playlist';
import Track from '../../../../../components/Track';

export interface PlaylistPage extends RouteChildrenProps {
  accessToken: string;
  error: {
    message: string;
  };
  fetchUserPlaylist: any;
  isLoading: boolean;
  playlist: PlaylistProps;
}

export class PlaylistPage extends Component<PlaylistPage> {
  componentDidMount() {
    const { accessToken, fetchUserPlaylist } = this.props;
    const { playlistId } = useParams();

    fetchUserPlaylist(accessToken, '11168662039', playlistId);
  }

  render() {
    const { error, isLoading, playlist } = this.props;

    if (error) {
      return <Error>{error.message}</Error>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Helmet>
          <title>Playlist</title>
        </Helmet>
        <div>
          <Playlist {...playlist} />
          <p>Playlist</p>
          <h1>{playlist.name}</h1>
          {playlist.owner && (
            <p>
              Created by{' '}
              <Link to={`/users/${playlist.owner.id}`}>{playlist.owner.display_name}</Link> ·{' '}
              {playlist.tracks.total} songs
            </p>
          )}
          <p>
            <Button>Play</Button>
          </p>
          {playlist.tracks && (
            <table>
              <tbody>
                {playlist.tracks.items.map((track) => (
                  <Track key={track.id} {...track} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  error: state.users.error,
  isLoading: state.users.isLoading,
  playlist: state.users.playlist,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchUserPlaylist,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPage);
