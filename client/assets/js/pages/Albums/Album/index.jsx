import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import TracksPage from './Tracks';
import Album from '../../../components/Album';
import { ACCESS_TOKEN } from '../../../constants/config';

class AlbumPage extends Component {
  componentDidMount() {
    const { fetchAlbum, match } = this.props;

    fetchAlbum(ACCESS_TOKEN, match.params.album_id);
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
          path={`${match.url}`}
          component={() => (
            <Album {...album} />
          )}
        />
      </Switch>
    );
  }
}

AlbumPage.propTypes = {
  album: PropTypes.shape(),
  fetchAlbum: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      album_id: PropTypes.string,
    }),
    url: PropTypes.string,
  }),
};

AlbumPage.defaultProps = {
  album: null,
  fetchAlbum: () => {},
  match: {
    params: {
      album_id: '',
    },
    url: '',
  },
};

export default AlbumPage;
