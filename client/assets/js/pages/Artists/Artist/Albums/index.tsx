import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchArtistAlbums } from '../../../../actions/artists';
import Albums, { AlbumsProps } from '../../../../components/Albums';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';

export interface AlbumsPageProps extends RouteChildrenProps {
  accessToken: string;
  albums: AlbumsProps;
  error: {
    message: string;
  };
  fetchArtistAlbums: any;
  isLoading: boolean;
}

export class AlbumsPage extends Component<AlbumsPageProps> {
  componentDidMount() {
    const { accessToken, fetchArtistAlbums } = this.props;

    fetchArtistAlbums(accessToken, '20JZFwl6HVl6yg8a4H3ZqK');
  }

  render() {
    const { albums, error, isLoading } = this.props;

    if (error) {
      return <Error>{error.message}</Error>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Helmet>
          <title>Albums</title>
        </Helmet>
        <Albums {...albums} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  albums: state.artists.albums,
  error: state.artists.error,
  isLoading: state.artists.isLoading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchArtistAlbums,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage);
