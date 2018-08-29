import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtistTopTracks } from '../actions/artists';
import ArtistTopTracksPage from '../pages/Artists/Artist/TopTracks';

const mapStateToProps = state => ({
  ...state,
  tracks: state.artists.tracks,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchArtistTopTracks,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistTopTracksPage);
