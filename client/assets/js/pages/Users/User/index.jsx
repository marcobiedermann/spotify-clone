import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../../actions/users';
import PlaylistsPage from './Playlists';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import User from '../../../components/User';


export class UserPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchUser,
      match,
    } = this.props;

    fetchUser(accessToken, match.params.user_id);
  }

  render() {
    const {
      error,
      isLoading,
      match,
      me,
    } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.url}/playlists`}
          component={PlaylistsPage}
        />
        <Route
          path={match.url}
          component={() => (
            <div>
              <Helmet>
                <title>{me.me.display_name}</title>
              </Helmet>
              {error && (
                <Error>{error.message}</Error>
              )}
              {isLoading ? (
                <Loader />
              ) : (
                <User {...me.me} />
              )}
            </div>
          )}
        />
      </Switch>
    );
  }
}

UserPage.propTypes = {
  accessToken: PropTypes.string,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  fetchUser: PropTypes.func,
  isLoading: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      user_id: PropTypes.string,
    }),
    url: PropTypes.string,
  }),
  me: PropTypes.shape({
    me: PropTypes.shape({
      display_name: PropTypes.string,
    }),
  }),
};

UserPage.defaultProps = {
  accessToken: '',
  error: {
    message: '',
  },
  fetchUser: () => {},
  isLoading: false,
  match: {
    params: {
      user_id: '',
    },
    url: '',
  },
  me: {
    me: {
      display_name: '',
    },
  },
};

const mapStateToProps = state => ({
  ...state,
  error: state.users.error,
  isLoading: state.users.isLoading,
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
