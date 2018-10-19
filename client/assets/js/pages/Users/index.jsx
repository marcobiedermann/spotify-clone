import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import UserPage from './User';

class UsersPage extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string,
    }),
  };

  static defaultProps = {
    match: {
      url: '',
    },
  };

  render() {
    const { match } = this.props;

    return (
      <Switch>
        <Route path={`${match.url}/:user_id`} component={UserPage} />
        <Route
          path={match.url}
          component={() => (
            <div>
              <Helmet>
                <title>Users</title>
              </Helmet>
              Users
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default UsersPage;
