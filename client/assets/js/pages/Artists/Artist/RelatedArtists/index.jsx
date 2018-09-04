import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtistRelatedArtists } from '../../../../actions/artists';
import Artists from '../../../../components/Artists';

export class RelatedArtistsPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchArtistRelatedArtists,
    } = this.props;

    fetchArtistRelatedArtists(accessToken, '20JZFwl6HVl6yg8a4H3ZqK');
  }

  render() {
    const { artists } = this.props;

    return (
      <div>
        <Helmet>
          <title>Related Artists</title>
        </Helmet>
        {artists && (
          <Artists artists={artists} />
        )}
      </div>
    );
  }
}

RelatedArtistsPage.propTypes = {
  accessToken: PropTypes.string,
  artists: PropTypes.arrayOf(PropTypes.shape),
  fetchArtistRelatedArtists: PropTypes.func,
};

RelatedArtistsPage.defaultProps = {
  accessToken: '',
  artists: [],
  fetchArtistRelatedArtists: () => {},
};

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
)(RelatedArtistsPage);

