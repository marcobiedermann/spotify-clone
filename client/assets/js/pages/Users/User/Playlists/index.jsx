import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PlaylistPage from './Playlist';
import Playlists from '../../../../components/Playlists';
import { ACCESS_TOKEN } from '../../../../constants/config';

class PlaylistsPage extends Component {
  componentDidMount() {
    const { fetchUserPlaylists } = this.props;

    fetchUserPlaylists(ACCESS_TOKEN, '11168662039');
  }

  render() {
    const { match, playlists } = this.props;

    return (
      <Switch>
        <Route path={`${match.url}/:playlist_id`} component={PlaylistPage} />
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
  fetchUserPlaylists: PropTypes.func,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
  playlists: PropTypes.arrayOf(PropTypes.shape),
};

PlaylistsPage.defaultProps = {
  fetchUserPlaylists: () => {},
  match: {
    url: '',
  },
  playlists: [],
};

export default PlaylistsPage;
