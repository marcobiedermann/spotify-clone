import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import ArtistPage from './Artist';

const ArtistsPage = ({ match }) => (
  <div>
    Artists
    <Route path={`${match.url}/:id`} exact component={ArtistPage} />
  </div>
);

ArtistsPage.propTypes = {
  match: PropTypes.shape(),
};

ArtistsPage.defaultProps = {
  match: null,
};

export default ArtistsPage;
