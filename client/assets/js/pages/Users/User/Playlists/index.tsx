import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchUserPlaylists } from '../../../../actions/users';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';
import Playlists, { PlaylistsProps } from '../../../../components/Playlists';

export interface PlaylistsPageProps extends RouteChildrenProps {
  accessToken: string;
  error: {
    message: string;
  };
  fetchUserPlaylists: any;
  isLoading: boolean;
  playlists: PlaylistsProps;
}

export class PlaylistsPage extends Component<PlaylistsPageProps> {
  componentDidMount() {
    const { accessToken, fetchUserPlaylists } = this.props;

    fetchUserPlaylists(accessToken, '11168662039');
  }

  render() {
    const { error, isLoading, playlists } = this.props;

    if (error) {
      return <Error>{error.message}</Error>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Helmet>
          <title>Playlists</title>
        </Helmet>
        <Playlists {...playlists} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  error: state.users.error,
  isLoading: state.users.isLoading,
  playlists: state.users.playlists,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchUserPlaylists,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistsPage);
