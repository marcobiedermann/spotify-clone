import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import AlbumPage from './Album';

const AlbumsPage = ({ match }) => (
  <div>
    Albums
    <Route path={`${match.url}/:album_id`} component={AlbumPage} />
  </div>
);

AlbumsPage.propTypes = {
  match: PropTypes.shape(),
};

AlbumsPage.defaultProps = {
  match: null,
};

export default AlbumsPage;
