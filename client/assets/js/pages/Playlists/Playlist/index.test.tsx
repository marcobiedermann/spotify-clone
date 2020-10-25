import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { PlaylistPage } from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <PlaylistPage />
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
