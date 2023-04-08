import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';
import User from '..';
import userFixtures from '../__fixtures__';

it('renders correctly', () => {
  const { container } = render(<User {...userFixtures} />);

  expect(container.firstChild).toMatchSnapshot();
});
