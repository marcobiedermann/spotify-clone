import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserPlaylist } from '../actions/users';
import PlaylistPage from '../pages/Users/User/Playlists/Playlist';

const mapStateToProps = state => ({
  ...state,
  playlist: state.users.playlist,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchUserPlaylist,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistPage);
