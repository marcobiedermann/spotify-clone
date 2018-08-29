import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Albums from '../../../components/Albums';

class NewReleasesPage extends Component {
  componentDidMount() {
    const { accessToken, fetchNewReleases } = this.props;

    fetchNewReleases(accessToken);
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
  accessToken: PropTypes.string,
  albums: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape),
  }),
  fetchNewReleases: PropTypes.func,
};

NewReleasesPage.defaultProps = {
  accessToken: '',
  albums: {
    items: [],
  },
  fetchNewReleases: () => {},
};

export default NewReleasesPage;
