import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PlaylistPage from './Playlist';

const PlaylistsPage = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/:playlist_id`} component={PlaylistPage} />
    <Route
      path={`${match.url}`}
      component={() => (
        <div>
          Playlists
        </div>
      )}
    />
  </Switch>
);

PlaylistsPage.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

PlaylistsPage.defaultProps = {
  match: {
    url: '',
  },
};

export default PlaylistsPage;
