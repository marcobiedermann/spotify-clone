import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import CategoryPage from './Category';

const CategoriesPage = ({ match }) => (
  <div>
    Categories
    <Route path={`${match.url}/:category_id`} component={CategoryPage} />
  </div>
);

CategoriesPage.propTypes = {
  match: PropTypes.shape(),
};

CategoriesPage.defaultProps = {
  match: null,
};

export default CategoriesPage;
