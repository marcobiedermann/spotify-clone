import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAlbum } from '../actions/albums';
import AlbumPage from '../pages/Albums/Album';

const mapStateToProps = state => ({
  ...state,
  album: state.albums.album,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchAlbum,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumPage);
