import { render } from '@testing-library/react';
import React from 'react';
import Playlists from '..';

it('renders correctly', () => {
  const { container } = render(<Playlists />);

  expect(container.firstChild).toMatchSnapshot();
});
