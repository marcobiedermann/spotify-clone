import { render } from '@testing-library/react';
import React from 'react';
import Tracks from '.';

it('renders correctly', () => {
  const { container } = render(<Tracks />);

  expect(container.firstChild).toMatchSnapshot();
});
