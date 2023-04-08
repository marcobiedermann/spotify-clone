import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';
import AlbumTracks from '..';

it('renders correctly', () => {
  const { container } = render(<AlbumTracks />);

  expect(container.firstChild).toMatchSnapshot();
});
