import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategoryPlaylists } from '../../../../../actions/browse';
import Error from '../../../../../components/Error';
import Loader from '../../../../../components/Loader';
import Playlists from '../../../../../components/Playlists';

export class PlaylistsPage extends Component {
  static propTypes = {
    accessToken: PropTypes.string,
    error: PropTypes.shape({
      message: PropTypes.string,
    }),
    fetchCategoryPlaylists: PropTypes.func,
    isLoading: PropTypes.bool,
    match: PropTypes.shape({
      url: PropTypes.string,
    }),
    playlists: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape),
    }),
  };

  static defaultProps = {
    accessToken: '',
    error: {
      message: '',
    },
    fetchCategoryPlaylists: () => {},
    isLoading: false,
    match: {
      url: '',
    },
    playlists: {
      items: [],
    },
  };

  componentDidMount() {
    const { accessToken, fetchCategoryPlaylists } = this.props;

    fetchCategoryPlaylists(accessToken, 'dinner');
  }

  render() {
    const { error, isLoading, playlists } = this.props;

    if (error) {
      return <Error>{error.message}</Error>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div>
        <Helmet>
          <title>Playlists</title>
        </Helmet>
        <Playlists playlists={playlists.items} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  error: state.browse.error,
  isLoading: state.browse.isLoading,
  playlists: state.browse.playlists,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCategoryPlaylists,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistsPage);
