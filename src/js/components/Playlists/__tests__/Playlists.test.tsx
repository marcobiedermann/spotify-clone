import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';
import Playlists from '..';

it('renders correctly', () => {
  const { container } = render(<Playlists />);

  expect(container.firstChild).toMatchSnapshot();
});
