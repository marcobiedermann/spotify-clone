import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtistRelatedArtists } from '../actions/artists';
import ArtistRelatedArtistsPage from '../pages/Artists/Artist/RelatedArtists';

const mapStateToProps = state => ({
  ...state,
  artists: state.artists.artists,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchArtistRelatedArtists,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistRelatedArtistsPage);
