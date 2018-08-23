import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Playlists from '../../../components/Playlists';
import { ACCESS_TOKEN } from '../../../constants/config';

class FeaturedPlaylists extends Component {
  componentDidMount() {
    const { fetchFeaturedPlaylists } = this.props;

    fetchFeaturedPlaylists(ACCESS_TOKEN);
  }

  render() {
    const { match, playlists } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.url}`}
          component={() => <Playlists playlists={playlists.items} />}
        />
      </Switch>
    );
  }
}

FeaturedPlaylists.propTypes = {
  playlists: PropTypes.shape(),
  fetchFeaturedPlaylists: PropTypes.func,
  match: PropTypes.shape(),
};

FeaturedPlaylists.defaultProps = {
  playlists: {},
  fetchFeaturedPlaylists: () => {},
  match: null,
};

export default FeaturedPlaylists;
