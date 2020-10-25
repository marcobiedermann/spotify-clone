import '@babel/polyfill';
import React from 'react';
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
import Router from './components/Router';
import ROUTES from './constants/routes';

const ACCESS_TOKEN = '';

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

const Root = () => (
  <SWRConfig
    value={{
      fetcher,
    }}
  >
    <Router routes={ROUTES} />
  </SWRConfig>
);

render(<Root />, document.getElementById('root'));
