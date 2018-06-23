import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route } from 'react-router-dom';
import history from './history';
import BrowsePage from '../pages/Browse';
import IndexPage from '../pages/Index';

const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route path="/" exact component={IndexPage} />
      <Route path="/browse" exact component={BrowsePage} />
    </div>
  </ConnectedRouter>
);

export default Router;
