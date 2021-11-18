import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import PlaylistTrack from '.';
import playlistTrackFixtures from './__fixtures__';

it('renders correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <PlaylistTrack {...playlistTrackFixtures} />
    </MemoryRouter>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
