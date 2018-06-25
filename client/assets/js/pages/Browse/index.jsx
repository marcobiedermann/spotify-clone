import PropTypes from 'prop-types';
import React from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';
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
          <ul>
            <li>
              <Link to={`${match.url}/categories`}>
                Genres & Moods
              </Link>
            </li>
            <li>
              <Link to={`${match.url}/featured-playlists`}>
                Featured Playlists
              </Link>
            </li>
            <li>
              <Link to={`${match.url}/new-releases`}>
                New Releases
              </Link>
            </li>
          </ul>
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
