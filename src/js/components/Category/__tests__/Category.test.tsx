import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { expect, it } from 'vitest';
import Category from '..';
import categoryFixture from '../__fixtures__';

it('renders correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <Category {...categoryFixture} />
    </MemoryRouter>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
