import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFeaturedPlaylists } from '../actions/browse';
import FeaturedPlaylists from '../pages/Browse/FeaturedPlaylists';

const mapStateToProps = state => ({
  ...state,
  playlists: state.browse.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchFeaturedPlaylists,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturedPlaylists);
