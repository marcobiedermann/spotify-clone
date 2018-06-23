import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route } from 'react-router-dom';
import history from './history';
import IndexPage from '../pages/Index';

const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route path="/" exact component={IndexPage} />
    </div>
  </ConnectedRouter>
);

export default Router;
