import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserPlaylists } from '../actions/users';
import PlaylistsPage from '../pages/Users/User/Playlists';

const mapStateToProps = state => ({
  ...state,
  playlists: state.users.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchUserPlaylists,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistsPage);
