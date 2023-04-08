import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';
import Error from '..';

it('renders correctly', () => {
  const { container } = render(<Error>Error</Error>);

  expect(container.firstChild).toMatchSnapshot();
});
