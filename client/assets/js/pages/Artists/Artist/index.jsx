import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import AlbumsPage from './Albums';

const ArtistPage = ({ match }) => (
  <div>
    Artist
    <Route path={`${match.url}/:id`} exact component={AlbumsPage} />
  </div>
);

ArtistPage.propTypes = {
  match: PropTypes.shape(),
};

ArtistPage.defaultProps = {
  match: null,
};

export default ArtistPage;
