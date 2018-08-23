import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PlaylistsPage from './Playlists';
import User from '../../../components/User';
import { ACCESS_TOKEN } from '../../../constants/config';

class UserPage extends Component {
  componentDidMount() {
    const { fetchUser, match } = this.props;

    fetchUser(ACCESS_TOKEN, match.params.user_id);
  }

  render() {
    const { match, me } = this.props;

    return (
      <Switch>
        <Route path={`${match.url}/playlists`} component={PlaylistsPage} />
        <Route
          path={`${match.url}`}
          component={() => (
            <div>
              <User {...me.me} />
            </div>
          )}
        />
      </Switch>
    );
  }
}

UserPage.propTypes = {
  fetchUser: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      user_id: PropTypes.string,
    }),
    url: PropTypes.string,
  }),
  me: PropTypes.shape({
    me: PropTypes.shape(),
  }),
};

UserPage.defaultProps = {
  fetchUser: () => {},
  match: {
    params: {
      user_id: '',
    },
    url: '',
  },
  me: {
    me: null,
  },
};

export default UserPage;
