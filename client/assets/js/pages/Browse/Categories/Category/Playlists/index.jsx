import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Loader from '../../../../../components/Loader';
import Playlists from '../../../../../components/Playlists';

class PlaylistsPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchCategoryPlaylists,
    } = this.props;

    fetchCategoryPlaylists(accessToken, 'dinner');
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
                <title>Playlists</title>
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

PlaylistsPage.propTypes = {
  accessToken: PropTypes.string,
  playlists: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape),
  }),
  fetchCategoryPlaylists: PropTypes.func,
  isLoading: PropTypes.bool,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

PlaylistsPage.defaultProps = {
  accessToken: '',
  playlists: {
    items: [],
  },
  fetchCategoryPlaylists: () => {},
  isLoading: false,
  match: {
    url: '',
  },
};

export default PlaylistsPage;
