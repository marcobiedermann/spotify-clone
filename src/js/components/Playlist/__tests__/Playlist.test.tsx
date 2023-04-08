import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { expect, it } from 'vitest';
import Playlist from '..';
import playlistFixtures from '../__fixtures__';

it('renders correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <Playlist {...playlistFixtures} />
    </MemoryRouter>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
