import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route } from 'react-router-dom';
import history from './history';
import AlbumsPage from '../pages/Albums';
import ArtistsPage from '../pages/Artists';
import BrowsePage from '../pages/Browse';
import IndexPage from '../pages/Index';
import MePage from '../pages/Me';
import UsersPage from '../pages/Users';

const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route path="/" exact component={IndexPage} />
      <Route path="/albums" component={AlbumsPage} />
      <Route path="/artists" component={ArtistsPage} />
      <Route path="/browse" component={BrowsePage} />
      <Route path="/me" component={MePage} />
      <Route path="/users" component={UsersPage} />
    </div>
  </ConnectedRouter>
);

export default Router;
