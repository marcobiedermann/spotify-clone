import PropTypes from 'prop-types';
import React from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import CategoriesPageContainer from '../../containers/CategoriesPage';
import FeaturedPlaylistsPageContainer from '../../containers/FeaturedPlaylists';
import NewReleasesPageContainer from '../../containers/NewReleasesPage';

const BrowsePage = ({ match }) => (
  <Switch>
    <Route
      path={`${match.url}/categories`}
      component={CategoriesPageContainer}
    />
    <Route
      path={`${match.url}/featured-playlists`}
      component={FeaturedPlaylistsPageContainer}
    />
    <Route
      path={`${match.url}/new-releases`}
      component={NewReleasesPageContainer}
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
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

BrowsePage.defaultProps = {
  match: {
    url: '',
  },
};

export default BrowsePage;
