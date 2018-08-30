import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import ArtistAlbumsPageContainer from '../../../containers/ArtistAlbumsPage';
import ArtistRelatedArtistsPageContainer from '../../../containers/ArtistRelatedArtistsPage';
import ArtistTopTracksPageContainer from '../../../containers/ArtistTopTracksPage';
import Artist from '../../../components/Artist';

class ArtistPage extends Component {
  componentDidMount() {
    const { accessToken, fetchArtist, match } = this.props;

    fetchArtist(accessToken, match.params.id);
  }

  render() {
    const { artist, match } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.url}/albums`}
          component={ArtistAlbumsPageContainer}
        />
        <Route
          path={`${match.url}/related-artists`}
          component={ArtistRelatedArtistsPageContainer}
        />
        <Route
          path={`${match.url}/top-tracks`}
          component={ArtistTopTracksPageContainer}
        />
        <Route
          path={match.url}
          component={() => (
            <div>
              <Artist {...artist} />
              <ul>
                <li>
                  <Link to={`${match.url}/albums`}>Albums</Link>
                </li>
                <li>
                  <Link to={`${match.url}/related-artists`}>Related Artists</Link>
                </li>
                <li>
                  <Link to={`${match.url}/top-tracks`}>Top Tracks</Link>
                </li>
              </ul>
            </div>
          )}
        />
      </Switch>
    );
  }
}

ArtistPage.propTypes = {
  accessToken: PropTypes.string,
  artist: PropTypes.shape(),
  fetchArtist: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    url: PropTypes.string,
  }),
};

ArtistPage.defaultProps = {
  accessToken: '',
  artist: null,
  fetchArtist: () => {},
  match: {
    params: {
      id: '',
    },
    url: '',
  },
};

export default ArtistPage;
