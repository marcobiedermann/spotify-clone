import axios from 'axios';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import { accountsBaseUrl, clientId, clientSecret, redirectUri } from '../../constants/spotify';

async function getAccessToken(code: string) {
  const token = btoa(`${clientId}:${clientSecret}`);

  const { data } = await axios.post(
    `${accountsBaseUrl}/api/token`,
    new URLSearchParams({
      code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
    }),
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    },
  );

  return data.access_token;
}

function CallbackPage(): JSX.Element {
  const [_, setAccessToken] = useLocalStorage('access-token');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get('code')!;

  useEffect(() => {
    (async () => {
      const accessToken = await getAccessToken(code);

      setAccessToken(accessToken);
      navigate('/', {
        replace: true,
      });
    })();
  }, [code]);

  return (
    <Helmet>
      <title>Callback</title>
    </Helmet>
  );
}

export default CallbackPage;
