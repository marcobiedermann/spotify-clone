import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';
import Loader from '..';

it('renders correctly', () => {
  const { container } = render(<Loader />);

  expect(container.firstChild).toMatchSnapshot();
});
