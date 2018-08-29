import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Artist from '../../../../components/Artist';

class RelatedArtistsPage extends Component {
  componentDidMount() {
    const { accessToken, fetchArtistRelatedArtists } = this.props;

    fetchArtistRelatedArtists(accessToken, '20JZFwl6HVl6yg8a4H3ZqK');
  }

  render() {
    const { artists } = this.props;

    return (
      <div>
        {artists && (
          <ul>
            {artists.map(artist => (
              <li key={artist.id}>
                <Artist {...artist} />
              </li>
            ))}
          </ul>
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
