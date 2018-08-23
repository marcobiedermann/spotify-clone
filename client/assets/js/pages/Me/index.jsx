import PropTypes from 'prop-types';
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import PlaylistsPageContainer from '../../containers/PlaylistsPage';

const MePage = ({ match }) => (
  <Switch>
    <Route
      path={`${match.url}/playlists`}
      component={PlaylistsPageContainer}
    />
    <Route
      path={`${match.url}`}
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
