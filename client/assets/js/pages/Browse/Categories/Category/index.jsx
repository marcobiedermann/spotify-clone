import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import PlaylistsPage from './Playlists';

const CategoryPage = ({ match }) => (
  <div>
    Category
    <Route path={`${match.url}/playlists`} exact component={PlaylistsPage} />
  </div>
);

CategoryPage.propTypes = {
  match: PropTypes.shape(),
};

CategoryPage.defaultProps = {
  match: null,
};


export default CategoryPage;
