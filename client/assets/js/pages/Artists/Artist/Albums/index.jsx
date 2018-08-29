import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Albums from '../../../../components/Albums';

class AlbumsPage extends Component {
  componentDidMount() {
    const { accessToken, fetchArtistAlbums } = this.props;

    fetchArtistAlbums(accessToken, '20JZFwl6HVl6yg8a4H3ZqK');
  }

  render() {
    const { albums } = this.props;

    return (
      <Albums albums={albums} />
    );
  }
}

AlbumsPage.propTypes = {
  accessToken: PropTypes.string,
  albums: PropTypes.arrayOf(),
  fetchArtistAlbums: PropTypes.func,
};

AlbumsPage.defaultProps = {
  accessToken: '',
  albums: [],
  fetchArtistAlbums: () => {},
};

export default AlbumsPage;
