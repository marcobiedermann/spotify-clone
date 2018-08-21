import PropTypes from 'prop-types';
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import UserPage from './User';

const UsersPage = ({ match }) => (
  <Switch>
    <Route
      path={`${match.url}/:user_id`}
      component={UserPage}
    />
    <Route
      path={`${match.url}`}
      component={() => (
        <div>
          Users
        </div>
      )}
    />
  </Switch>
);

UsersPage.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

UsersPage.defaultProps = {
  match: {
    url: '',
  },
};

export default UsersPage;
