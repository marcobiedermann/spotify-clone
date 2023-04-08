import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';
import PlaylistTracks from '..';

it('renders correctly', () => {
  const { container } = render(<PlaylistTracks />);

  expect(container.firstChild).toMatchSnapshot();
});
