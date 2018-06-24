import PropTypes from 'prop-types';
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import AlbumsPage from './Albums';
import RelatedArtistsPage from './RelatedArtists';
import TopTracksPage from './TopTracks';

const ArtistPage = ({ match }) => (
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
      component={() => (
        <div>
          Artist
        </div>
      )}
    />
  </Switch>
);

ArtistPage.propTypes = {
  match: PropTypes.shape(),
};

ArtistPage.defaultProps = {
  match: null,
};

export default ArtistPage;
