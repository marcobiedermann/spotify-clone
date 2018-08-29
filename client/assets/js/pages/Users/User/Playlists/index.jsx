import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Playlists from '../../../../components/Playlists';
import PlaylistPageContainer from '../../../../containers/UserPlaylistPage';

class PlaylistsPage extends Component {
  componentDidMount() {
    const { accessToken, fetchUserPlaylists } = this.props;

    fetchUserPlaylists(accessToken, '11168662039');
  }

  render() {
    const { match, playlists } = this.props;

    return (
      <Switch>
        <Route path={`${match.url}/:playlist_id`} component={PlaylistPageContainer} />
        <Route
          path={`${match.url}`}
          component={() => (
            <Playlists playlists={playlists} />
          )}
        />
      </Switch>
    );
  }
}

PlaylistsPage.propTypes = {
  accessToken: PropTypes.string,
  fetchUserPlaylists: PropTypes.func,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
  playlists: PropTypes.arrayOf(PropTypes.shape),
};

PlaylistsPage.defaultProps = {
  accessToken: '',
  fetchUserPlaylists: () => {},
  match: {
    url: '',
  },
  playlists: [],
};

export default PlaylistsPage;
