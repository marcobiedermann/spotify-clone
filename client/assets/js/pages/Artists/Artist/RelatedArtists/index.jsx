import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtistRelatedArtists } from '../../../../actions/artists';
import Artists from '../../../../components/Artists';
import Error from '../../../../components/Error';

export class RelatedArtistsPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchArtistRelatedArtists,
    } = this.props;

    fetchArtistRelatedArtists(accessToken, '20JZFwl6HVl6yg8a4H3ZqK');
  }

  render() {
    const {
      artists,
      error,
    } = this.props;

    return (
      <div>
        <Helmet>
          <title>Related Artists</title>
        </Helmet>
        {error && (
          <Error>{error.message}</Error>
        )}
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
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  fetchArtistRelatedArtists: PropTypes.func,
};

RelatedArtistsPage.defaultProps = {
  accessToken: '',
  artists: [],
  error: {
    message: '',
  },
  fetchArtistRelatedArtists: () => {},
};

const mapStateToProps = state => ({
  ...state,
  artists: state.artists.artists,
  error: state.artists.error,
  isLoading: state.artists.isLoading,
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
