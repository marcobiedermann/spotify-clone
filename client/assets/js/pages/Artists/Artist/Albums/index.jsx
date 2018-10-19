import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtistAlbums } from '../../../../actions/artists';
import Albums from '../../../../components/Albums';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';

export class AlbumsPage extends Component {
  static propTypes = {
    accessToken: PropTypes.string,
    albums: PropTypes.arrayOf(PropTypes.shape),
    error: PropTypes.shape({
      message: PropTypes.string,
    }),
    fetchArtistAlbums: PropTypes.func,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    accessToken: '',
    albums: [],
    error: {
      message: '',
    },
    fetchArtistAlbums: () => {},
    isLoading: false,
  };

  componentDidMount() {
    const { accessToken, fetchArtistAlbums } = this.props;

    fetchArtistAlbums(accessToken, '20JZFwl6HVl6yg8a4H3ZqK');
  }

  render() {
    const { albums, error, isLoading } = this.props;

    if (error) {
      return <Error>{error.message}</Error>;
    }

    if (isLoading) {
      return <Loader />;
    }

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

const mapStateToProps = state => ({
  ...state,
  albums: state.artists.albums,
  error: state.artists.error,
  isLoading: state.artists.isLoading,
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
