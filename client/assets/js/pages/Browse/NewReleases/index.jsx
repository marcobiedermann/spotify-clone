import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Albums from '../../../components/Albums';
import { ACCESS_TOKEN } from '../../../constants/config';

class NewReleasesPage extends Component {
  componentDidMount() {
    const { fetchNewReleases } = this.props;

    fetchNewReleases(ACCESS_TOKEN);
  }

  render() {
    const { albums } = this.props;

    return (
      <div>
        <Albums albums={albums.items} />
      </div>
    );
  }
}

NewReleasesPage.propTypes = {
  albums: PropTypes.shape(),
  fetchNewReleases: PropTypes.func,
};

NewReleasesPage.defaultProps = {
  albums: {},
  fetchNewReleases: () => {},
};

export default NewReleasesPage;
