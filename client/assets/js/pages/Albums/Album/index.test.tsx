import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { AlbumPage } from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <AlbumPage />
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
