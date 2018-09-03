import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
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
          <Helmet>
            <title>Me</title>
          </Helmet>
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
