import { render } from '@testing-library/react';
import React from 'react';
import Error from '..';

it('renders correctly', () => {
  const { container } = render(<Error>Error</Error>);

  expect(container.firstChild).toMatchSnapshot();
});
