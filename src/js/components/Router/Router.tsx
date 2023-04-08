import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Routes from '../Routes';

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
