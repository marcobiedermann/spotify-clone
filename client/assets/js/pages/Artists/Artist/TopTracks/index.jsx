import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtistTopTracks } from '../../../../actions/artists';
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
      isLoading,
      tracks,
    } = this.props;

    return (
      <div>
        <Helmet>
          <title>Top Tracks</title>
        </Helmet>
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
  isLoading: PropTypes.bool,
  tracks: PropTypes.arrayOf(PropTypes.shape),
};

TopTracksPage.defaultProps = {
  accessToken: '',
  fetchArtistTopTracks: () => {},
  isLoading: false,
  tracks: [],
};

const mapStateToProps = state => ({
  ...state,
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
