import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { expect, it } from 'vitest';
import Me from '..';
import meFixtures from '../__fixtures__';

it('renders correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <Me {...meFixtures} />
    </MemoryRouter>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
