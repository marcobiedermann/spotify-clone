import { stringify } from 'qs';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';

const LoginPage: FC<RouteChildrenProps> = () => {
  const query = stringify({
    client_id: process.env.SPOTIFY_CLIENT_ID,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
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
};

export default LoginPage;
