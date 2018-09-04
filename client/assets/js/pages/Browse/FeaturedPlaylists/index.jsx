import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Loader from '../../../components/Loader';
import Playlists from '../../../components/Playlists';

class FeaturedPlaylistsPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchFeaturedPlaylists,
    } = this.props;

    fetchFeaturedPlaylists(accessToken);
  }

  render() {
    const {
      isLoading,
      match,
      playlists,
    } = this.props;

    return (
      <Switch>
        <Route
          path={match.url}
          component={() => (
            <div>
              <Helmet>
                <title>Featured Playlists</title>
              </Helmet>
              {isLoading ? (
                <Loader />
              ) : (
                <Playlists playlists={playlists.items} />
              )}
            </div>
          )}
        />
      </Switch>
    );
  }
}

FeaturedPlaylistsPage.propTypes = {
  accessToken: PropTypes.string,
  playlists: PropTypes.shape(),
  fetchFeaturedPlaylists: PropTypes.func,
  isLoading: PropTypes.bool,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

FeaturedPlaylistsPage.defaultProps = {
  accessToken: '',
  playlists: {},
  fetchFeaturedPlaylists: () => {},
  isLoading: false,
  match: {
    url: '',
  },
};

export default FeaturedPlaylistsPage;
