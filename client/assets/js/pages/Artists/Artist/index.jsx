import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import AlbumsPage from './Albums';
import RelatedArtistsPage from './RelatedArtists';
import TopTracksPage from './TopTracks';
import Artist from '../../../components/Artist';

class ArtistPage extends Component {
  componentDidMount() {
    const { accessToken, fetchArtist, match } = this.props;

    fetchArtist(accessToken, match.params.id);
  }

  render() {
    const { artist, match } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.url}/albums`}
          component={AlbumsPage}
        />
        <Route
          path={`${match.url}/related-artists`}
          component={RelatedArtistsPage}
        />
        <Route
          path={`${match.url}/top-tracks`}
          component={TopTracksPage}
        />
        <Route
          path={`${match.url}`}
          component={() => (<Artist {...artist} />)}
        />
      </Switch>
    );
  }
}

ArtistPage.propTypes = {
  accessToken: PropTypes.string,
  artist: PropTypes.shape(),
  fetchArtist: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    url: PropTypes.string,
  }),
};

ArtistPage.defaultProps = {
  accessToken: '',
  artist: null,
  fetchArtist: () => {},
  match: {
    params: {
      id: '',
    },
    url: '',
  },
};

export default ArtistPage;
