import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { SWRConfig } from 'swr';
import '../css/elements/anchor.css';
import '../css/elements/button.css';
import '../css/elements/figure.css';
import '../css/elements/image.css';
import '../css/elements/input.css';
import '../css/elements/list.css';
import '../css/elements/paragraph.css';
import '../css/elements/table.css';
import '../css/layout/base.css';
import { worker } from '../mocks/browser';
import Router from './components/Router';

const ACCESS_TOKEN = import.meta.env.SPOTIFY_ACCESS_TOKEN || '';

async function fetcher(url: string) {
  const response = await fetch(`https://api.spotify.com${url}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

function Root(): JSX.Element {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <Router />
    </SWRConfig>
  );
}

if (import.meta.env.DEV) {
  worker.start();
}

render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.getElementById('root'),
);
