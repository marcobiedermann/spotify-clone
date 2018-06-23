import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import AlbumsPage from './Albums';
import RelatedArtistsPage from './RelatedArtists';
import TopTracksPage from './TopTracks';

const ArtistPage = ({ match }) => (
  <div>
    Artist
    <Route path={`${match.url}/albums`} exact component={AlbumsPage} />
    <Route path={`${match.url}/related-artists`} exact component={RelatedArtistsPage} />
    <Route path={`${match.url}/top-tracks`} exact component={TopTracksPage} />
  </div>
);

ArtistPage.propTypes = {
  match: PropTypes.shape(),
};

ArtistPage.defaultProps = {
  match: null,
};

export default ArtistPage;
