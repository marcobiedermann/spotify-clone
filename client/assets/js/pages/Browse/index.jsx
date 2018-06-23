import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import FeaturedPlaylistsPage from './FeaturedPlaylists';

const BrowsePage = ({ match }) => (
  <div>
    Browse
    <Route path={`${match.url}/featured-playlists`} exact component={FeaturedPlaylistsPage} />
  </div>
);

BrowsePage.propTypes = {
  match: PropTypes.shape(),
};

BrowsePage.defaultProps = {
  match: null,
};

export default BrowsePage;
