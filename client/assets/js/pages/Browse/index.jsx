import React from 'react';
import { Route } from 'react-router-dom';
import FeaturedPlaylistsPage from './FeaturedPlaylists';

const BrowsePage = props => (
  <div>
    Browse
    <Route path={`${props.match.url}/featured-playlists`} exact component={FeaturedPlaylistsPage} />
  </div>
);

export default BrowsePage;
