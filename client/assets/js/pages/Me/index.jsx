import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import PlaylistsPage from './Playlists';

const MePage = ({ match }) => (
  <div>
    Me
    <Route path={`${match.url}/playlists`} exact component={PlaylistsPage} />
  </div>
);

MePage.propTypes = {
  match: PropTypes.shape(),
};

MePage.defaultProps = {
  match: null,
};

export default MePage;
