import { stringify } from 'qs';
import React from 'react';
import { Helmet } from 'react-helmet';

function LoginPage(): JSX.Element {
  const query = stringify({
    client_id: import.meta.env.SPOTIFY_CLIENT_ID,
    redirect_uri: import.meta.env.SPOTIFY_REDIRECT_URI,
    response_type: 'code',
    scope: ['user-read-private', 'user-read-email'].join(' '),
  });

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <a href={`https://accounts.spotify.com/authorize?${query}`}>Login</a>
    </>
  );
}

export default LoginPage;
