import React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';

export interface AppRouteProps extends RouteProps {
  routes?: AppRouteProps[];
}

function AppRoute(props: AppRouteProps): JSX.Element {
  const { routes = [], ...otherProps } = props;

  return (
    <Switch>
      {routes.map((route) => (
        <AppRoute key={route.path.toString()} {...route} />
      ))}
      <Route {...otherProps} />
    </Switch>
  );
}

export default AppRoute;
