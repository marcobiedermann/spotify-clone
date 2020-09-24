import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link, RouteChildrenProps, useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchArtist } from '../../../actions/artists';
import Artist, { ArtistProps } from '../../../components/Artist';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

export interface ArtistPageProps extends RouteChildrenProps {
  accessToken: string;
  artist: ArtistProps;
  error: {
    message: string;
  };
  fetchArtist: any;
  isLoading: boolean;
}

export class ArtistPage extends Component<ArtistPageProps> {
  componentDidMount() {
    const { accessToken, fetchArtist } = this.props;
    const { artistId } = useParams();

    fetchArtist(accessToken, artistId);
  }

  render() {
    const { artist, error, isLoading, match } = this.props;

    if (error) {
      return <Error>{error.message}</Error>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Helmet>
          <title>{artist.name}</title>
        </Helmet>
        <Artist {...artist} />
        <ul>
          <li>
            <Link to={`${match.url}/albums`}>Albums</Link>
          </li>
          <li>
            <Link to={`${match.url}/related-artists`}>Related Artists</Link>
          </li>
          <li>
            <Link to={`${match.url}/top-tracks`}>Top Tracks</Link>
          </li>
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  artist: state.artists.artist,
  error: state.albums.error,
  isLoading: state.artists.isLoading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchArtist,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);
