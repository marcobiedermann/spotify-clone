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
import { ACCESS_TOKEN } from '../../../constants/config';

class ArtistPage extends Component {
  componentDidMount() {
    const { fetchArtist, match } = this.props;

    fetchArtist(ACCESS_TOKEN, match.params.id);
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
  artist: PropTypes.shape(),
  fetchArtist: PropTypes.func,
  match: PropTypes.shape(),
};

ArtistPage.defaultProps = {
  artist: {},
  fetchArtist: () => {},
  match: null,
};

export default ArtistPage;
