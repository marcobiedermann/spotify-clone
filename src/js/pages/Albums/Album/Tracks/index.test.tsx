import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import TracksPage from '.';

it('renders correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <Route component={TracksPage} />
    </MemoryRouter>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
