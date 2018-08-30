import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Playlists from '../../../../../components/Playlists';

class PlaylistsPage extends Component {
  componentDidMount() {
    const { accessToken, fetchCategoryPlaylists } = this.props;

    fetchCategoryPlaylists(accessToken, 'dinner');
  }

  render() {
    const { match, playlists } = this.props;

    return (
      <Switch>
        <Route
          path={match.url}
          component={() => <Playlists playlists={playlists.items} />}
        />
      </Switch>
    );
  }
}

PlaylistsPage.propTypes = {
  accessToken: PropTypes.string,
  playlists: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape),
  }),
  fetchCategoryPlaylists: PropTypes.func,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

PlaylistsPage.defaultProps = {
  accessToken: '',
  playlists: {
    items: [],
  },
  fetchCategoryPlaylists: () => {},
  match: {
    url: '',
  },
};

export default PlaylistsPage;
