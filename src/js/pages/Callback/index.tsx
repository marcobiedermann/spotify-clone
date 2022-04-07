import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigate, useLocation } from 'react-router-dom';

function CallbackPage(): JSX.Element {
  const { search } = useLocation();

  const urlSearchParams = new URLSearchParams(search);
  const code = urlSearchParams.get('code');

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
