import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PlaylistPage from './Playlist';
import { fetchUserPlaylists } from '../../../../actions/users';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';
import Playlists from '../../../../components/Playlists';

export class PlaylistsPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchUserPlaylists,
    } = this.props;

    fetchUserPlaylists(accessToken, '11168662039');
  }

  render() {
    const {
      error,
      isLoading,
      match,
      playlists,
    } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.url}/:playlist_id`}
          component={PlaylistPage}
        />
        <Route
          path={match.url}
          component={() => (
            <div>
              <Helmet>
                <title>Playlists</title>
              </Helmet>
              {error && (
                <Error>{error.message}</Error>
              )}
              {isLoading ? (
                <Loader />
              ) : (
                <Playlists playlists={playlists} />
              )}
            </div>
          )}
        />
      </Switch>
    );
  }
}

PlaylistsPage.propTypes = {
  accessToken: PropTypes.string,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  fetchUserPlaylists: PropTypes.func,
  isLoading: PropTypes.bool,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
  playlists: PropTypes.arrayOf(PropTypes.shape),
};

PlaylistsPage.defaultProps = {
  accessToken: '',
  error: {
    message: '',
  },
  fetchUserPlaylists: () => {},
  isLoading: false,
  match: {
    url: '',
  },
  playlists: [],
};

const mapStateToProps = state => ({
  ...state,
  error: state.users.error,
  isLoading: state.users.isLoading,
  playlists: state.users.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchUserPlaylists,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistsPage);
