import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';

const LoginPage: FC<RouteChildrenProps> = () => (
  <>
    <Helmet>
      <title>Login</title>
    </Helmet>
    Login
  </>
);

export default LoginPage;
