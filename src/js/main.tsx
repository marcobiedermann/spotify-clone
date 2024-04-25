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

const isDevelopment = import.meta.env.DEV;
const queryClient = new QueryClient();

async function enableMocking(): Promise<ServiceWorkerRegistration | undefined> {
  if (!isDevelopment) {
    return Promise.resolve(undefined);
  }

  const { worker } = await import('../mocks/browser');

  return worker.start();
}

function Root(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

enableMocking().then(() => {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <Root />
    </StrictMode>,
  );
});
