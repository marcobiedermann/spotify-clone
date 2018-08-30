import PropTypes from 'prop-types';
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import UserPageContainer from '../../containers/UserPage';

const UsersPage = ({ match }) => (
  <Switch>
    <Route
      path={`${match.url}/:user_id`}
      component={UserPageContainer}
    />
    <Route
      path={match.url}
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
