import PropTypes from 'prop-types';
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import PlaylistsPage from './Playlists';

const MePage = ({ match }) => (
  <Switch>
    <Route
      path={`${match.url}/playlists`}
      component={PlaylistsPage}
    />
    <Route
      path={match.url}
      component={() => (
        <div>
          Me
        </div>
      )}
    />
  </Switch>
);

MePage.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

MePage.defaultProps = {
  match: {
    url: '',
  },
};

export default MePage;
