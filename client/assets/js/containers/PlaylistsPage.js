import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategoryPlaylists } from '../actions/browse';
import PlaylistsPage from '../pages/Me/Playlists';

const mapStateToProps = state => ({
  ...state,
  playlists: state.browse.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchCategoryPlaylists,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistsPage);
