import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import TracksPage from './Tracks';

const AlbumPage = ({ match }) => (
  <div>
    Album
    <Route path={`${match.url}/tracks`} component={TracksPage} />
  </div>
);

AlbumPage.propTypes = {
  match: PropTypes.shape(),
};

AlbumPage.defaultProps = {
  match: null,
};

export default AlbumPage;
