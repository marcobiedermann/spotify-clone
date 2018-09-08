import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchFeaturedPlaylists } from '../../../actions/browse';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import Playlists from '../../../components/Playlists';

export class FeaturedPlaylistsPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchFeaturedPlaylists,
    } = this.props;

    fetchFeaturedPlaylists(accessToken);
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
                <title>Featured Playlists</title>
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

FeaturedPlaylistsPage.propTypes = {
  accessToken: PropTypes.string,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  fetchFeaturedPlaylists: PropTypes.func,
  isLoading: PropTypes.bool,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
  playlists: PropTypes.shape(),
};

FeaturedPlaylistsPage.defaultProps = {
  accessToken: '',
  error: {
    message: '',
  },
  fetchFeaturedPlaylists: () => {},
  isLoading: false,
  match: {
    url: '',
  },
  playlists: {},
};

const mapStateToProps = state => ({
  ...state,
  error: state.browse.error,
  isLoading: state.browse.isLoading,
  playlists: state.browse.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchFeaturedPlaylists,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturedPlaylistsPage);
