import { render } from '@testing-library/react';
import React from 'react';
import PlaylistTracks from '..';

it('renders correctly', () => {
  const { container } = render(<PlaylistTracks />);

  expect(container.firstChild).toMatchSnapshot();
});
