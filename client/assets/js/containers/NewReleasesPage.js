import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNewReleases } from '../actions/browse';
import NewReleasesPage from '../pages/Browse/NewReleases';

const mapStateToProps = state => ({
  ...state,
  albums: state.browse.albums,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchNewReleases,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewReleasesPage);
