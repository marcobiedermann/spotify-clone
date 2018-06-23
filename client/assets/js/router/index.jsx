import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import IndexPage from '../pages/Index';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={IndexPage} />
    </div>
  </BrowserRouter>
);

export default Router;
