import { ConnectedRouter } from 'connected-react-router';
import React, { FC } from 'react';
import { Switch } from 'react-router-dom';
import history from '../../router/history';
import AppRoute, { AppRouteProps } from '../AppRoute';
import Layout from '../Layout';

export interface RouterProps {
  routes: AppRouteProps[];
}

const Router: FC<RouterProps> = (props) => {
  const { routes } = props;

  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          {routes.map((route) => (
            <AppRoute key={route.path.toString()} {...route} />
          ))}
        </Switch>
      </Layout>
    </ConnectedRouter>
  );
};

export default Router;
