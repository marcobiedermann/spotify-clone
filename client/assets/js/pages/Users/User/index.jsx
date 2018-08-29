import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserPlaylistsPageContainer from '../../../containers/UserPlaylistsPage';
import User from '../../../components/User';

class UserPage extends Component {
  componentDidMount() {
    const { accessToken, fetchUser, match } = this.props;

    fetchUser(accessToken, match.params.user_id);
  }

  render() {
    const { match, me } = this.props;

    return (
      <Switch>
        <Route path={`${match.url}/playlists`} component={UserPlaylistsPageContainer} />
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
  accessToken: PropTypes.string,
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
  accessToken: '',
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
