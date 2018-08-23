import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtist } from '../actions/artists';
import ArtistPage from '../pages/Artists/Artist';

const mapStateToProps = state => ({
  ...state,
  artist: state.artists.artist,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchArtist,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistPage);
