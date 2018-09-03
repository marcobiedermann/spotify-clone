import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Artists from '../../../../components/Artists';

class RelatedArtistsPage extends Component {
  componentDidMount() {
    const { accessToken, fetchArtistRelatedArtists } = this.props;

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

export default RelatedArtistsPage;
