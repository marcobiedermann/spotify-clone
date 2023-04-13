import React from 'react';
import { Helmet } from 'react-helmet';
import { accountsBaseUrl, clientId, redirectUri } from '../../constants/spotify';

const urlSearchParams = new URLSearchParams({
  client_id: clientId,
  redirect_uri: redirectUri,
  response_type: 'code',
  scope: ['user-read-private', 'user-read-email'].join(' '),
});

const query = urlSearchParams.toString();

function LoginPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <a href={`${accountsBaseUrl}/authorize?${query}`}>Login</a>
    </>
  );
}

export default LoginPage;
