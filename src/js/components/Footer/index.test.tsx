import { render } from '@testing-library/react';
import React from 'react';
import Footer from '.';

it('renders correctly', () => {
  const { container } = render(<Footer>Footer</Footer>);

  expect(container.firstChild).toMatchSnapshot();
});
