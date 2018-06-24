import PropTypes from 'prop-types';
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import ArtistPage from './Artist';

const ArtistsPage = ({ match }) => (
  <Switch>
    <Route
      path={`${match.url}/:id`}
      component={ArtistPage}
    />
    <Route
      path={`${match.url}`}
      component={() => (
        <div>
          Artists
        </div>
      )}
    />
  </Switch>
);

ArtistsPage.propTypes = {
  match: PropTypes.shape(),
};

ArtistsPage.defaultProps = {
  match: null,
};

export default ArtistsPage;
