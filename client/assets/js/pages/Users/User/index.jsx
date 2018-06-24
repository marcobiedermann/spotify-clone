import PropTypes from 'prop-types';
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import PlaylistsPage from './Playlists';

const UserPage = ({ match }) => (
  <Switch>
    <Route
      path={`${match.url}/playlists`}
      component={PlaylistsPage}
    />
    <Route
      path={`${match.url}`}
      component={() => (
        <div>
          User
        </div>
      )}
    />
  </Switch>
);

UserPage.propTypes = {
  match: PropTypes.shape(),
};

UserPage.defaultProps = {
  match: null,
};

export default UserPage;
