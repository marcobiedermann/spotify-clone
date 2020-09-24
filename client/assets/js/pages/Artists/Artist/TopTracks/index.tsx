import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchArtistTopTracks } from '../../../../actions/artists';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';
import Tracks, { TracksProps } from '../../../../components/Tracks';

export interface TopTracksPageProps extends RouteChildrenProps {
  accessToken: string;
  fetchArtistTopTracks: any;
  error: {
    message: string;
  };
  isLoading: boolean;
  tracks: TracksProps;
}

export class TopTracksPage extends Component<TopTracksPageProps> {
  componentDidMount() {
    const { accessToken, fetchArtistTopTracks } = this.props;

    fetchArtistTopTracks(accessToken, '20JZFwl6HVl6yg8a4H3ZqK');
  }

  render() {
    const { error, isLoading, tracks } = this.props;

    if (error) {
      return <Error>{error.message}</Error>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Helmet>
          <title>Top Tracks</title>
        </Helmet>
        <Tracks {...tracks} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  error: state.artists.error,
  isLoading: state.artists.isLoading,
  tracks: state.artists.tracks,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchArtistTopTracks,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(TopTracksPage);
