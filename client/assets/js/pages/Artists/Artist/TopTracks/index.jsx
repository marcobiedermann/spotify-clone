import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtistTopTracks } from '../../../../actions/artists';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';
import Tracks from '../../../../components/Tracks';

export class TopTracksPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchArtistTopTracks,
    } = this.props;

    fetchArtistTopTracks(accessToken, '20JZFwl6HVl6yg8a4H3ZqK');
  }

  render() {
    const {
      error,
      isLoading,
      tracks,
    } = this.props;

    return (
      <div>
        <Helmet>
          <title>Top Tracks</title>
        </Helmet>
        {error && (
          <Error>{error.message}</Error>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <Tracks tracks={tracks} />
        )}
      </div>
    );
  }
}

TopTracksPage.propTypes = {
  accessToken: PropTypes.string,
  fetchArtistTopTracks: PropTypes.func,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
  tracks: PropTypes.arrayOf(PropTypes.shape),
};

TopTracksPage.defaultProps = {
  accessToken: '',
  error: {
    message: '',
  },
  fetchArtistTopTracks: () => {},
  isLoading: false,
  tracks: [],
};

const mapStateToProps = state => ({
  ...state,
  error: state.artists.error,
  isLoading: state.artists.isLoading,
  tracks: state.artists.tracks,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchArtistTopTracks,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopTracksPage);
