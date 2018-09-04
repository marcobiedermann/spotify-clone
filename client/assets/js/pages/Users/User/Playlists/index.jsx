import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import Loader from '../../../../components/Loader';
import Playlists from '../../../../components/Playlists';
import PlaylistPageContainer from '../../../../containers/UserPlaylistPage';

class PlaylistsPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchUserPlaylists,
    } = this.props;

    fetchUserPlaylists(accessToken, '11168662039');
  }

  render() {
    const {
      isLoading,
      match,
      playlists,
    } = this.props;

    return (
      <Switch>
        <Route path={`${match.url}/:playlist_id`} component={PlaylistPageContainer} />
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
                <Playlists playlists={playlists} />
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
  fetchUserPlaylists: PropTypes.func,
  isLoading: PropTypes.bool,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
  playlists: PropTypes.arrayOf(PropTypes.shape),
};

PlaylistsPage.defaultProps = {
  accessToken: '',
  fetchUserPlaylists: () => {},
  isLoading: false,
  match: {
    url: '',
  },
  playlists: [],
};

export default PlaylistsPage;
