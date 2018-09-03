import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Playlists from '../../../components/Playlists';

class FeaturedPlaylistsPage extends Component {
  componentDidMount() {
    const { accessToken, fetchFeaturedPlaylists } = this.props;

    fetchFeaturedPlaylists(accessToken);
  }

  render() {
    const { match, playlists } = this.props;

    return (
      <Switch>
        <Route
          path={match.url}
          component={() => (
            <div>
              <Helmet>
                <title>Featured Playlists</title>
              </Helmet>
              <Playlists playlists={playlists.items} />
            </div>
          )}
        />
      </Switch>
    );
  }
}

FeaturedPlaylistsPage.propTypes = {
  accessToken: PropTypes.string,
  playlists: PropTypes.shape(),
  fetchFeaturedPlaylists: PropTypes.func,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

FeaturedPlaylistsPage.defaultProps = {
  accessToken: '',
  playlists: {},
  fetchFeaturedPlaylists: () => {},
  match: {
    url: '',
  },
};

export default FeaturedPlaylistsPage;
