import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import TracksPage from './Tracks';
import { fetchAlbum } from '../../../actions/albums';
import Album from '../../../components/Album';
import Loader from '../../../components/Loader';

export class AlbumPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchAlbum,
      match,
    } = this.props;

    fetchAlbum(accessToken, match.params.album_id);
  }

  render() {
    const {
      album,
      isLoading,
      match,
    } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.url}/tracks`}
          component={TracksPage}
        />
        <Route
          path={match.url}
          component={() => (
            <div className="album-page">
              <Helmet>
                <title>{album.name}</title>
              </Helmet>
              {isLoading ? (
                <Loader />
              ) : (
                <Album {...album} />
              )}
            </div>
          )}
        />
      </Switch>
    );
  }
}

AlbumPage.propTypes = {
  accessToken: PropTypes.string,
  album: PropTypes.shape({
    name: PropTypes.string,
  }),
  fetchAlbum: PropTypes.func,
  isLoading: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      album_id: PropTypes.string,
    }),
    url: PropTypes.string,
  }),
};

AlbumPage.defaultProps = {
  accessToken: '',
  album: {
    name: '',
  },
  fetchAlbum: () => {},
  isLoading: false,
  match: {
    params: {
      album_id: '',
    },
    url: '',
  },
};

const mapStateToProps = state => ({
  ...state,
  album: state.albums.album,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchAlbum,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumPage);
