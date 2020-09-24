import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCategoryPlaylists } from '../../../../../actions/browse';
import Error from '../../../../../components/Error';
import Loader from '../../../../../components/Loader';
import Playlists, { PlaylistsProps } from '../../../../../components/Playlists';

export interface PlaylistsPageProps extends RouteChildrenProps {
  accessToken: string;
  error: {
    message: string;
  };
  fetchCategoryPlaylists: any;
  isLoading: boolean;
  playlists: PlaylistsProps;
}

export class PlaylistsPage extends Component<PlaylistsPageProps> {
  componentDidMount() {
    const { accessToken, fetchCategoryPlaylists } = this.props;

    fetchCategoryPlaylists(accessToken, 'dinner');
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
  error: state.browse.error,
  isLoading: state.browse.isLoading,
  playlists: state.browse.playlists,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchCategoryPlaylists,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistsPage);
