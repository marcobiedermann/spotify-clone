import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
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

const queryClient = new QueryClient();

function Root(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

if (import.meta.env.DEV) {
  const { worker } = await import('../mocks/browser');

  worker.start();
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
