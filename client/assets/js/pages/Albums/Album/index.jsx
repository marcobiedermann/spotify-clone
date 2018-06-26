import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import TracksPage from './Tracks';
import { fetchAlbum } from '../../../actions/albums';
import Album from '../../../components/Album';
import { ACCESS_TOKEN } from '../../../constants/config';

class AlbumPage extends Component {
  componentDidMount() {
    const { fetchAlbum } = this.props;

    fetchAlbum(ACCESS_TOKEN, '6ApYSpXF8GxZAgBTHDzYge');
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
  artist: PropTypes.shape(),
  fetchAlbum: PropTypes.func,
  match: PropTypes.shape(),
};

AlbumPage.defaultProps = {
  artist: {},
  fetchAlbum: () => {},
  match: null,
};

const mapStateToProps = state => ({
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
