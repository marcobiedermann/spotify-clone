import PropTypes from 'prop-types';
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import TracksPage from './Tracks';

const AlbumPage = ({ match }) => (
  <Switch>
    <Route
      path={`${match.url}/tracks`}
      component={TracksPage}
    />
    <Route
      path={`${match.url}`}
      component={() => (
        <div>
          Album
        </div>
      )}
    />
  </Switch>
);

AlbumPage.propTypes = {
  match: PropTypes.shape(),
};

AlbumPage.defaultProps = {
  match: null,
};

export default AlbumPage;
