import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtistAlbums } from '../../../../actions/artists';
import Albums from '../../../../components/Albums';

export class AlbumsPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchArtistAlbums,
    } = this.props;

    fetchArtistAlbums(accessToken, '20JZFwl6HVl6yg8a4H3ZqK');
  }

  render() {
    const { albums } = this.props;

    return (
      <div>
        <Helmet>
          <title>Albums</title>
        </Helmet>
        <Albums albums={albums} />
      </div>
    );
  }
}

AlbumsPage.propTypes = {
  accessToken: PropTypes.string,
  albums: PropTypes.arrayOf(PropTypes.shape),
  fetchArtistAlbums: PropTypes.func,
};

AlbumsPage.defaultProps = {
  accessToken: '',
  albums: [],
  fetchArtistAlbums: () => {},
};

const mapStateToProps = state => ({
  ...state,
  albums: state.artists.albums,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchArtistAlbums,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumsPage);
