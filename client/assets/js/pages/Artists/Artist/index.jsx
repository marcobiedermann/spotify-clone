import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import AlbumsPage from './Albums';
import RelatedArtistsPage from './RelatedArtists';
import TopTracksPage from './TopTracks';
import { fetchArtist } from '../../../actions/artists';
import Artist from '../../../components/Artist';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

export class ArtistPage extends Component {
  static propTypes = {
    accessToken: PropTypes.string,
    artist: PropTypes.shape({
      name: PropTypes.string,
    }),
    error: PropTypes.shape({
      message: PropTypes.string,
    }),
    fetchArtist: PropTypes.func,
    isLoading: PropTypes.bool,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
      url: PropTypes.string,
    }),
  };

  static defaultProps = {
    accessToken: '',
    artist: {
      name: '',
    },
    error: {
      message: '',
    },
    fetchArtist: () => {},
    isLoading: false,
    match: {
      params: {
        id: '',
      },
      url: '',
    },
  };

  componentDidMount() {
    const { accessToken, fetchArtist, match } = this.props;

    fetchArtist(accessToken, match.params.id);
  }

  render() {
    const {
      artist, error, isLoading, match,
    } = this.props;

    return (
      <Switch>
        <Route path={`${match.url}/albums`} component={AlbumsPage} />
        <Route
          path={`${match.url}/related-artists`}
          component={RelatedArtistsPage}
        />
        <Route path={`${match.url}/top-tracks`} component={TopTracksPage} />
        <Route
          path={match.url}
          component={() => {
            if (error) {
              return <Error>{error.message}</Error>;
            }

            if (isLoading) {
              return <Loader />;
            }

            return (
              <div>
                <Helmet>
                  <title>{artist.name}</title>
                </Helmet>
                <Artist {...artist} />
                <ul>
                  <li>
                    <Link to={`${match.url}/albums`}>Albums</Link>
                  </li>
                  <li>
                    <Link to={`${match.url}/related-artists`}>
                      Related Artists
                    </Link>
                  </li>
                  <li>
                    <Link to={`${match.url}/top-tracks`}>Top Tracks</Link>
                  </li>
                </ul>
              </div>
            );
          }}
        />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  artist: state.artists.artist,
  error: state.albums.error,
  isLoading: state.artists.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchArtist,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistPage);
