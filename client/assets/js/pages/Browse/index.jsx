import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Link, Route, Switch } from 'react-router-dom';
import CategoriesPage from './Categories';
import FeaturedPlaylistsPage from './FeaturedPlaylists';
import NewReleasesPage from './NewReleases';

class BrowsePage extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string,
    }),
  };

  static defaultProps = {
    match: {
      url: '',
    },
  };

  render() {
    const { match } = this.props;

    return (
      <Switch>
        <Route path={`${match.url}/categories`} component={CategoriesPage} />
        <Route
          path={`${match.url}/featured-playlists`}
          component={FeaturedPlaylistsPage}
        />
        <Route path={`${match.url}/new-releases`} component={NewReleasesPage} />
        <Route
          path={match.url}
          component={() => (
            <div>
              <Helmet>
                <title>Browse</title>
              </Helmet>
              <ul>
                <li>
                  <Link to={`${match.url}/categories`}>Genres & Moods</Link>
                </li>
                <li>
                  <Link to={`${match.url}/featured-playlists`}>
                    Featured Playlists
                  </Link>
                </li>
                <li>
                  <Link to={`${match.url}/new-releases`}>New Releases</Link>
                </li>
              </ul>
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default BrowsePage;
