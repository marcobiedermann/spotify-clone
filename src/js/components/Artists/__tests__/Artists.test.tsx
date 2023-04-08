import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';
import Artists from '..';

it('renders correctly', () => {
  const { container } = render(<Artists />);

  expect(container.firstChild).toMatchSnapshot();
});
