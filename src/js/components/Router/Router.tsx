import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Routes from '../Routes';

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense>
          <Routes />
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
