import { render } from '@testing-library/react';
import React from 'react';
import Header from '..';

it('renders correctly', () => {
  const { container } = render(<Header>Header</Header>);

  expect(container.firstChild).toMatchSnapshot();
});
