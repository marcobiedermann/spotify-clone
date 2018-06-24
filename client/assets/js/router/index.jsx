import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import history from './history';
import Layout from '../components/Layout';
import AlbumsPage from '../pages/Albums';
import ArtistsPage from '../pages/Artists';
import BrowsePage from '../pages/Browse';
import IndexPage from '../pages/Index';
import MePage from '../pages/Me';
import UsersPage from '../pages/Users';

const Router = () => (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Route path="/albums" component={AlbumsPage} />
        <Route path="/artists" component={ArtistsPage} />
        <Route path="/browse" component={BrowsePage} />
        <Route path="/me" component={MePage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default Router;
