import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtistAlbums } from '../actions/artists';
import ArtistAlbumsPage from '../pages/Artists/Artist/Albums';

const mapStateToProps = state => ({
  ...state,
  albums: state.artists.albums,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchArtistAlbums,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistAlbumsPage);
