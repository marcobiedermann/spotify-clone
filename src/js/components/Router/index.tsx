import React, { FC } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoute, { AppRouteProps } from '../AppRoute';
import Layout from '../Layout';

export interface RouterProps {
  routes: AppRouteProps[];
}

const Router: FC<RouterProps> = (props) => {
  const { routes } = props;

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route) => (
            <AppRoute key={route.path.toString()} {...route} />
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
