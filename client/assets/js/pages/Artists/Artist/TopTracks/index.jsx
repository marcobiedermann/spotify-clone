import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Tracks from '../../../../components/Tracks';

class TopTracksPage extends Component {
  componentDidMount() {
    const { accessToken, fetchArtistTopTracks } = this.props;

    fetchArtistTopTracks(accessToken, '20JZFwl6HVl6yg8a4H3ZqK');
  }

  render() {
    const { tracks } = this.props;

    return (
      <Tracks tracks={tracks} />
    );
  }
}

TopTracksPage.propTypes = {
  accessToken: PropTypes.string,
  fetchArtistTopTracks: PropTypes.func,
  tracks: PropTypes.arrayOf(PropTypes.shape),
};

TopTracksPage.defaultProps = {
  accessToken: '',
  fetchArtistTopTracks: () => {},
  tracks: [],
};

export default TopTracksPage;
