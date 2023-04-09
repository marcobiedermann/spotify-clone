import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default Router;
