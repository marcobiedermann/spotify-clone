import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchArtistRelatedArtists } from '../../../../actions/artists';
import { ArtistProps } from '../../../../components/Artist';
import Artists from '../../../../components/Artists';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';

export interface RelatedArtistsPageProps extends RouteChildrenProps {
  accessToken: string;
  artists: ArtistProps[];
  error: {
    message: string;
  };
  fetchArtistRelatedArtists: any;
  isLoading: boolean;
}

export class RelatedArtistsPage extends Component<RelatedArtistsPageProps> {
  componentDidMount() {
    const { accessToken, fetchArtistRelatedArtists } = this.props;

    fetchArtistRelatedArtists(accessToken, '20JZFwl6HVl6yg8a4H3ZqK');
  }

  render() {
    const { artists, error, isLoading } = this.props;

    if (error) {
      return <Error>{error.message}</Error>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Helmet>
          <title>Related Artists</title>
        </Helmet>
        <Artists artists={artists} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  artists: state.artists.artists,
  error: state.artists.error,
  isLoading: state.artists.isLoading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchArtistRelatedArtists,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(RelatedArtistsPage);
