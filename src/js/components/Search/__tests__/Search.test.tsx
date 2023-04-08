import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';
import Search from '..';
import searchFixtures from '../__fixtures__';

it('renders correctly', () => {
  const { container } = render(<Search {...searchFixtures} />);

  expect(container.firstChild).toMatchSnapshot();
});
