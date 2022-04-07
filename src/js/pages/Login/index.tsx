import React from 'react';
import { Helmet } from 'react-helmet';

const urlSearchParams = new URLSearchParams({
  client_id: import.meta.env.SPOTIFY_CLIENT_ID,
  redirect_uri: import.meta.env.SPOTIFY_REDIRECT_URI,
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
      <a href={`https://accounts.spotify.com/authorize?${query}`}>Login</a>
    </>
  );
}

export default LoginPage;
