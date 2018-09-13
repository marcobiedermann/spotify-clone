import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNewReleases } from '../../../actions/browse';
import Albums from '../../../components/Albums';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

export class NewReleasesPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchNewReleases,
    } = this.props;

    fetchNewReleases(accessToken);
  }

  render() {
    const {
      albums,
      error,
      isLoading,
    } = this.props;

    if (error) {
      return <Error>{error.message}</Error>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div>
        <Helmet>
          <title>New Releases</title>
        </Helmet>
        <Albums albums={albums.items} />
      </div>
    );
  }
}

NewReleasesPage.propTypes = {
  accessToken: PropTypes.string,
  albums: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape),
  }),
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  fetchNewReleases: PropTypes.func,
  isLoading: PropTypes.bool,
};

NewReleasesPage.defaultProps = {
  accessToken: '',
  albums: {
    items: [],
  },
  error: {
    message: '',
  },
  fetchNewReleases: () => {},
  isLoading: false,
};

const mapStateToProps = state => ({
  ...state,
  albums: state.browse.albums,
  error: state.browse.error,
  isLoading: state.browse.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchNewReleases,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewReleasesPage);
