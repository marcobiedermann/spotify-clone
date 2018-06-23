import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import CategoriesPage from './Categories';
import FeaturedPlaylistsPage from './FeaturedPlaylists';

const BrowsePage = ({ match }) => (
  <div>
    Browse
    <Route path={`${match.url}/categories`} exact component={CategoriesPage} />
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
