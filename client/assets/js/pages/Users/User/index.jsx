import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PlaylistsPage from './Playlists';
import { fetchUser } from '../../../actions/users';
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
  match: PropTypes.shape(),
  me: PropTypes.shape(),
};

UserPage.defaultProps = {
  fetchUser: () => {},
  match: null,
  me: null,
};

const mapStateToProps = state => ({
  ...state,
  user: state.users.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchUser,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPage);
