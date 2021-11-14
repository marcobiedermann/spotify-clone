import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '.';

it('renders correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
