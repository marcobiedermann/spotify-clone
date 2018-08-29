import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Playlist from '../../../../../components/Playlist';
import ACCESS_TOKEN from '../../../../../constants/config';

class PlaylistPage extends Component {
  componentDidMount() {
    const { fetchUserPlaylist, match } = this.props;

    fetchUserPlaylist(ACCESS_TOKEN, '11168662039', match.params.playlist_id);
  }

  render() {
    const { playlist } = this.props;

    return (
      <Playlist {...playlist} />
    );
  }
}

PlaylistPage.propTypes = {
  fetchUserPlaylist: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      playlist_id: PropTypes.string,
    }),
  }),
};

PlaylistPage.defaultProps = {
  fetchUserPlaylist: () => {},
  match: {
    params: {
      playlist_id: '',
    },
  },
};

export default PlaylistPage;
