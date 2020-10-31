import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Playlist from '.';
import playlistFixtures from './__fixtures__';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Playlist {...playlistFixtures} />
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
