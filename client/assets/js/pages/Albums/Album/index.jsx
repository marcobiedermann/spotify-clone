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
import Error from '../../../components/Error';
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
      error,
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
          component={() => {
            if (error) {
              return <Error>{error.message}</Error>;
            }

            if (isLoading) {
              return <Loader />;
            }

            return (
              <div className="album-page">
                <Helmet>
                  <title>{album.name}</title>
                </Helmet>
                <Album {...album} />
              </div>
            );
          }}
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
  error: PropTypes.shape({
    message: PropTypes.string,
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
  error: {
    message: '',
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
  error: state.albums.error,
  isLoading: state.albums.isLoading,
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
