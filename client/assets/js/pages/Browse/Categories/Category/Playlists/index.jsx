import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCategoryPlaylists } from '../../../../../actions/browse';
import Error from '../../../../../components/Error';
import Loader from '../../../../../components/Loader';
import Playlists from '../../../../../components/Playlists';

export class PlaylistsPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchCategoryPlaylists,
    } = this.props;

    fetchCategoryPlaylists(accessToken, 'dinner');
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
                <Playlists playlists={playlists.items} />
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
  fetchCategoryPlaylists: PropTypes.func,
  isLoading: PropTypes.bool,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
  playlists: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape),
  }),
};

PlaylistsPage.defaultProps = {
  accessToken: '',
  error: {
    message: '',
  },
  fetchCategoryPlaylists: () => {},
  isLoading: false,
  match: {
    url: '',
  },
  playlists: {
    items: [],
  },
};

const mapStateToProps = state => ({
  ...state,
  error: state.browse.error,
  isLoading: state.browse.isLoading,
  playlists: state.browse.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchCategoryPlaylists,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistsPage);
