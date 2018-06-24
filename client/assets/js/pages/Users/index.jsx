import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import UserPage from './User';

const UsersPage = ({ match }) => (
  <div>
    Users
    <Route path={`${match.url}/:user_id`} exact component={UserPage} />
  </div>
);

UsersPage.propTypes = {
  match: PropTypes.shape(),
};

UsersPage.defaultProps = {
  match: null,
};

export default UsersPage;
