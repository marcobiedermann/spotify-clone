import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import CategoriesPage from './Categories';
import FeaturedPlaylistsPage from './FeaturedPlaylists';
import NewReleasesPage from './NewReleases';

const BrowsePage = ({ match }) => (
  <div>
    Browse
    <Route path={`${match.url}/categories`} exact component={CategoriesPage} />
    <Route path={`${match.url}/featured-playlists`} exact component={FeaturedPlaylistsPage} />
    <Route path={`${match.url}/new-releases`} exact component={NewReleasesPage} />
  </div>
);

BrowsePage.propTypes = {
  match: PropTypes.shape(),
};

BrowsePage.defaultProps = {
  match: null,
};

export default BrowsePage;
