import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { RouteChildrenProps, useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchAlbum } from '../../../actions/albums';
import Album, { AlbumProps } from '../../../components/Album';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

export interface AlbumPageProps extends RouteChildrenProps {
  accessToken: string;
  album: AlbumProps;
  error: {
    message: string;
  };
  fetchAlbum: any;
  isLoading: boolean;
}

export class AlbumPage extends Component<AlbumPageProps> {
  componentDidMount() {
    const { accessToken, fetchAlbum } = this.props;
    const { albumId } = useParams();

    fetchAlbum(accessToken, albumId);
  }

  render() {
    const { album, error, isLoading } = this.props;

    if (error) {
      return <Error>{error.message}</Error>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Helmet>
          <title>{album.name}</title>
        </Helmet>
        <Album {...album} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  album: state.albums.album,
  error: state.albums.error,
  isLoading: state.albums.isLoading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAlbum,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
