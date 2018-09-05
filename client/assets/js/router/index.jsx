import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import history from './history';
import * as routes from '../constants/routes';
import Layout from '../components/Layout';
import AlbumsPage from '../pages/Albums';
import ArtistsPage from '../pages/Artists';
import BrowsePage from '../pages/Browse';
import IndexPage from '../pages/Index';
import LoginPage from '../pages/Login';
import MePage from '../pages/Me';
import UsersPage from '../pages/Users';

const Router = () => (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Route path={routes.ALBUMS} component={AlbumsPage} />
        <Route path={routes.ARTISTS} component={ArtistsPage} />
        <Route path={routes.BROWSE} component={BrowsePage} />
        <Route path={routes.LOGIN} component={LoginPage} />
        <Route path={routes.ME} component={MePage} />
        <Route path={routes.USERS} component={UsersPage} />
        <Route path={routes.INDEX} component={IndexPage} />
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default Router;
