import { render } from '@testing-library/react';
import React from 'react';
import Categories from '..';

it('renders correctly', () => {
  const { container } = render(<Categories />);

  expect(container.firstChild).toMatchSnapshot();
});
