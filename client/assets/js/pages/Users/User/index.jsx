import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import PlaylistsPage from './Playlists';

const UserPage = ({ match }) => (
  <div>
    User
    <Route path={`${match.url}/playlists`} exact component={PlaylistsPage} />
  </div>
);

UserPage.propTypes = {
  match: PropTypes.shape(),
};

UserPage.defaultProps = {
  match: null,
};

export default UserPage;
