import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';

const UsersPage: FC<RouteChildrenProps> = () => {
  return (
    <>
      <Helmet>
        <title>Users</title>
      </Helmet>
      Users
    </>
  );
};

export default UsersPage;
