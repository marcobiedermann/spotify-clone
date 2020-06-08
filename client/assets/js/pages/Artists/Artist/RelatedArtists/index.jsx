import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtistRelatedArtists } from '../../../../actions/artists';
import Artists from '../../../../components/Artists';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';

export class RelatedArtistsPage extends Component {
  static propTypes = {
    accessToken: PropTypes.string,
    artists: PropTypes.arrayOf(PropTypes.shape),
    error: PropTypes.shape({
      message: PropTypes.string,
    }),
    fetchArtistRelatedArtists: PropTypes.func,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    accessToken: '',
    artists: [],
    error: {
      message: '',
    },
    fetchArtistRelatedArtists: () => {},
    isLoading: false,
  };

  componentDidMount() {
    const { accessToken, fetchArtistRelatedArtists } = this.props;

    fetchArtistRelatedArtists(accessToken, '20JZFwl6HVl6yg8a4H3ZqK');
  }

  render() {
    const { artists, error, isLoading } = this.props;

    if (error) {
      return <Error>{error.message}</Error>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div>
        <Helmet>
          <title>Related Artists</title>
        </Helmet>
        <Artists artists={artists} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  artists: state.artists.artists,
  error: state.artists.error,
  isLoading: state.artists.isLoading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchArtistRelatedArtists,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(RelatedArtistsPage);
