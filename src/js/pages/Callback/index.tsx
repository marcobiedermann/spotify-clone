import { parse } from 'qs';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigate, useLocation } from 'react-router-dom';

function CallbackPage(): JSX.Element {
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
      <Navigate to="/" />
    </>
  );
}

export default CallbackPage;
