import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
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
      path={match.url}
      component={() => (
        <div>
          <Helmet>
            <title>Artists</title>
          </Helmet>
          Artists
        </div>
      )}
    />
  </Switch>
);

ArtistsPage.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

ArtistsPage.defaultProps = {
  match: {
    url: '',
  },
};

export default ArtistsPage;
