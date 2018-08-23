import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from '../components/Layout';
import {
  fetchMe,
  fetchMePlaylists,
} from '../actions/me';

const mapStateToProps = state => ({
  ...state,
  me: state.me.me,
  playlists: state.me.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchMe,
    fetchMePlaylists,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
