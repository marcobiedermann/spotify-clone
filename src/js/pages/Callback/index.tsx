import { parse } from 'qs';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, RouteChildrenProps, useLocation } from 'react-router-dom';

const CalbackPage: FC<RouteChildrenProps> = () => {
  const { search } = useLocation();
  const { code } = parse(search, {
    ignoreQueryPrefix: true,
  });

  // store CODE in localStorage
  console.log({ code });

  return (
    <>
      <Helmet>
        <title>Callback</title>
      </Helmet>
      <Redirect to="/" />
    </>
  );
};

export default CalbackPage;
