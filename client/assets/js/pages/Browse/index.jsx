import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CategoriesPage from './Categories';
import FeaturedPlaylistsPage from './FeaturedPlaylists';
import NewReleasesPage from './NewReleases';

const BrowsePage = ({ match }) => (
  <Switch>
    <Route
      path={`${match.url}/categories`}
      component={CategoriesPage}
    />
    <Route
      path={`${match.url}/featured-playlists`}
      component={FeaturedPlaylistsPage}
    />
    <Route
      path={`${match.url}/new-releases`}
      component={NewReleasesPage}
    />
    <Route
      path={`${match.url}`}
      component={() => (
        <div>
          Browse
        </div>
      )}
    />
  </Switch>
);

BrowsePage.propTypes = {
  match: PropTypes.shape(),
};

BrowsePage.defaultProps = {
  match: null,
};

export default BrowsePage;
