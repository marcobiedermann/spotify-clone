import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNewReleases } from '../../../actions/browse';
import Albums from '../../../components/Albums';
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
      isLoading,
    } = this.props;

    return (
      <div>
        <Helmet>
          <title>New Releases</title>
        </Helmet>
        {isLoading ? (
          <Loader />
        ) : (
          <Albums albums={albums.items} />
        )}
      </div>
    );
  }
}

NewReleasesPage.propTypes = {
  accessToken: PropTypes.string,
  albums: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape),
  }),
  fetchNewReleases: PropTypes.func,
  isLoading: PropTypes.bool,
};

NewReleasesPage.defaultProps = {
  accessToken: '',
  albums: {
    items: [],
  },
  fetchNewReleases: () => {},
  isLoading: false,
};

const mapStateToProps = state => ({
  ...state,
  albums: state.browse.albums,
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
