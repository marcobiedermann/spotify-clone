import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Route,
  Switch,
} from 'react-router-dom';
import TracksPage from './Tracks';
import Album from '../../../components/Album';

class AlbumPage extends Component {
  componentDidMount() {
    const { accessToken, fetchAlbum, match } = this.props;

    fetchAlbum(accessToken, match.params.album_id);
  }

  render() {
    const { album, match } = this.props;

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
              <Album {...album} />
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
  match: {
    params: {
      album_id: '',
    },
    url: '',
  },
};

export default AlbumPage;
